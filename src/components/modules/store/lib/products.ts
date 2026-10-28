
import { parseCsv } from "./csv";
import { DEMO_PRODUCTS } from "./demo";
import type { LoadResult, Product } from "./types";

const REVALIDATE_SECONDS = 300;

/* ---------- Limpieza y normalización ---------- */

function normalizeHeader(header: string): string {
  return header
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "_");
}

const HEADER_ALIASES: Record<string, string> = {
  id: "id",
  nombre: "nombre",
  producto: "nombre",
  descripcion: "descripcion",
  categoria: "categoria",
  precio: "precio",
  imagen: "imagen_url",
  imagen_url: "imagen_url",
  foto: "imagen_url",
  disponible: "disponible",
  destacado: "destacado",
  promocion: "promocion",
  fecha_promocion: "fecha_promocion",
  descuento: "descuento_porcentaje",
  descuento_porcentaje: "descuento_porcentaje",
  "descuento_%": "descuento_porcentaje",
  precio_promocional: "precio_promocional",
};

function toBool(raw: string, fallback: boolean): boolean {
  const value = raw
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase();

  if (!value) return fallback;

  return ["si", "s", "yes", "y", "true", "1", "x"].includes(value);
}

/**
 * Acepta 169000, $169.000, $143,650 o 1.234,56.
 */
export function parsePrice(raw: string): number {
  let value = raw.replace(/[^\d.,-]/g, "");

  if (!value) return 0;

  const lastDot = value.lastIndexOf(".");
  const lastComma = value.lastIndexOf(",");

  if (lastDot !== -1 && lastComma !== -1) {
    const decimalSeparator = lastDot > lastComma ? "." : ",";
    const thousandsSeparator = decimalSeparator === "." ? "," : ".";

    value = value
      .split(thousandsSeparator)
      .join("")
      .replace(decimalSeparator, ".");
  } else if (lastDot !== -1 || lastComma !== -1) {
    const separator = lastDot !== -1 ? "." : ",";
    const parts = value.split(separator);

    const looksLikeThousands =
      parts.length > 2 ||
      (parts.length === 2 && parts[1].length === 3);

    value = looksLikeThousands
      ? parts.join("")
      : parts.join(".");
  }

  const number = Number(value);

  return Number.isFinite(number) && number >= 0 ? number : 0;
}

function parseDiscount(raw: string): number {
  return parsePrice(raw.trim().replace("%", "").trim());
}

/**
 * Convierte DD/MM/YYYY a YYYY-MM-DD.
 */
function parsePromotionDate(raw: string): string {
  const value = raw.trim();

  if (!value) return "";

  const localDate = value.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);

  if (localDate) {
    const [, day, month, year] = localDate;
    const d = Number(day);
    const m = Number(month);
    const y = Number(year);

    const date = new Date(Date.UTC(y, m - 1, d));

    if (
      date.getUTCFullYear() !== y ||
      date.getUTCMonth() !== m - 1 ||
      date.getUTCDate() !== d
    ) {
      return "";
    }

    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  }

  const isoDate = value.match(/^(\d{4})-(\d{2})-(\d{2})$/);

  if (isoDate) {
    const [, year, month, day] = isoDate;
    const date = new Date(
      Date.UTC(Number(year), Number(month) - 1, Number(day)),
    );

    if (
      date.getUTCFullYear() !== Number(year) ||
      date.getUTCMonth() !== Number(month) - 1 ||
      date.getUTCDate() !== Number(day)
    ) {
      return "";
    }

    return value;
  }

  return "";
}

function slugify(text: string): string {
  return (
    text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "producto"
  );
}

/**
 * Conserva Cloudinary y normaliza enlaces compartidos de Google Drive.
 */
function normalizeImageUrl(url: string): string {
  const value = url.trim();

  const match =
    value.match(/drive\.google\.com\/file\/d\/([^/?]+)/) ??
    value.match(/drive\.google\.com\/open\?id=([^&]+)/);

  if (match) {
    return `https://drive.google.com/thumbnail?id=${match[1]}&sz=w800`;
  }

  return value;
}

/* ---------- Filas de la hoja -> productos ---------- */

export function rowsToProducts(rows: string[][]): Product[] {
  if (rows.length < 2) return [];

  const headers = rows[0].map(
    (header) =>
      HEADER_ALIASES[normalizeHeader(header)] ??
      normalizeHeader(header),
  );

  const indexOf = (name: string) => headers.indexOf(name);

  const columns = {
    id: indexOf("id"),
    nombre: indexOf("nombre"),
    descripcion: indexOf("descripcion"),
    categoria: indexOf("categoria"),
    precio: indexOf("precio"),
    imagen: indexOf("imagen_url"),
    disponible: indexOf("disponible"),
    destacado: indexOf("destacado"),
    promocion: indexOf("promocion"),
    fechaPromocion: indexOf("fecha_promocion"),
    descuento: indexOf("descuento_porcentaje"),
    precioPromocional: indexOf("precio_promocional"),
  };

  if (columns.nombre === -1) {
    throw new Error(
      'No encontré la columna "nombre" en la primera fila de la hoja.',
    );
  }

  const get = (row: string[], index: number): string =>
    index === -1 ? "" : (row[index] ?? "").trim();

  const usedIds = new Map<string, number>();
  const products: Product[] = [];

  for (const row of rows.slice(1)) {
    const nombre = get(row, columns.nombre);

    if (!nombre) continue;

    const precio = parsePrice(get(row, columns.precio));
    const sheetId = get(row, columns.id);
    const baseId = sheetId || slugify(nombre);

    const occurrence = (usedIds.get(baseId) ?? 0) + 1;
    usedIds.set(baseId, occurrence);

    const id = occurrence === 1 ? baseId : `${baseId}-${occurrence}`;

    // Datos de promoción
    const promotionName = get(row, columns.promocion);
    const promotionDate = parsePromotionDate(
      get(row, columns.fechaPromocion),
    );
    const discountPercent = parseDiscount(
      get(row, columns.descuento),
    );
    const promotionalPrice = parsePrice(
      get(row, columns.precioPromocional),
    );

    const hasValidPromotion =
      promotionName !== "" &&
      promotionDate !== "" &&
      discountPercent > 0 &&
      discountPercent < 100 &&
      precio > 0 &&
      promotionalPrice > 0 &&
      promotionalPrice < precio;

    products.push({
      id,
      nombre,
      descripcion: get(row, columns.descripcion),
      categoria: get(row, columns.categoria),
      precio,
      imagen: normalizeImageUrl(get(row, columns.imagen)),
      disponible: toBool(get(row, columns.disponible), true),
      destacado: toBool(get(row, columns.destacado), false),

      ...(hasValidPromotion
        ? {
          promotion: {
            name: promotionName,
            date: promotionDate,
            discountPercent,
            promotionalPrice,
          },
        }
        : {}),
    });
  }



  // Destacados primero, conservando el orden dentro de cada grupo.
  return products
    .map((product, index) => ({ product, index }))
    .sort(
      (a, b) =>
        Number(b.product.destacado) - Number(a.product.destacado) ||
        a.index - b.index,
    )
    .map(({ product }) => product);
}

/* ---------- Fuentes de datos ---------- */

async function fetchOk(url: string): Promise<Response> {
  const response = await fetch(url, {
    next: { revalidate: REVALIDATE_SECONDS },
  });

  if (!response.ok) {
    throw new Error(
      `La fuente respondió ${response.status}. Revisa que el enlace esté publicado o compartido.`,
    );
  }

  return response;
}

async function fromCsvUrl(url: string): Promise<Product[]> {
  const response = await fetchOk(url);
  const text = await response.text();

  if (/^\s*<!doctype html|^\s*<html/i.test(text)) {
    throw new Error(
      "El enlace devolvió una página web en vez de un CSV. Revisa que la hoja esté publicada o compartida.",
    );
  }

  return rowsToProducts(parseCsv(text));
}

function oneDriveDirectUrl(shareUrl: string): string {
  const base64 = Buffer.from(shareUrl.trim())
    .toString("base64")
    .replace(/=+$/, "")
    .replace(/\//g, "_")
    .replace(/\+/g, "-");

  return `https://api.onedrive.com/v1.0/shares/u!${base64}/root/content`;
}

function excelCellText(value: unknown): string {
  if (value == null) return "";

  if (value instanceof Date) {
    return value.toISOString();
  }

  if (typeof value === "object") {
    const cell = value as Record<string, unknown>;

    if ("result" in cell && cell.result != null) {
      return String(cell.result);
    }

    if (Array.isArray(cell.richText)) {
      return (cell.richText as { text: string }[])
        .map((item) => item.text)
        .join("");
    }

    if ("text" in cell && cell.text != null) {
      return String(cell.text);
    }

    return "";
  }

  return String(value);
}

export async function excelBufferToRows(
  buffer: ArrayBuffer,
): Promise<string[][]> {
  const ExcelJS = (await import("exceljs")).default;
  const workbook = new ExcelJS.Workbook();

  await workbook.xlsx.load(buffer);

  const worksheet = workbook.worksheets[0];

  if (!worksheet) {
    throw new Error("El archivo de Excel no tiene hojas.");
  }

  const rows: string[][] = [];

  worksheet.eachRow({ includeEmpty: false }, (row) => {
    const cells: string[] = [];

    for (let column = 1; column <= worksheet.columnCount; column++) {
      cells.push(excelCellText(row.getCell(column).value));
    }

    rows.push(cells);
  });

  return rows;
}

async function fromOneDrive(shareUrl: string): Promise<Product[]> {
  const response = await fetchOk(oneDriveDirectUrl(shareUrl));
  const buffer = await response.arrayBuffer();

  return rowsToProducts(await excelBufferToRows(buffer));
}

export async function loadProducts(): Promise<LoadResult> {
  const csvUrl = process.env.SHEET_CSV_URL?.trim();
  const sheetId = process.env.GOOGLE_SHEET_ID?.trim();
  const sheetName = process.env.GOOGLE_SHEET_NAME?.trim() || "Productos";
  const oneDrive = process.env.ONEDRIVE_SHARE_URL?.trim();

  try {
    if (csvUrl) {
      return {
        products: await fromCsvUrl(csvUrl),
        source: "sheet",
      };
    }

    if (sheetId) {
      const url =
        `https://docs.google.com/spreadsheets/d/${sheetId}` +
        `/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(sheetName)}`;

      return {
        products: await fromCsvUrl(url),
        source: "sheet",
      };
    }

    if (oneDrive) {
      return {
        products: await fromOneDrive(oneDrive),
        source: "sheet",
      };
    }
  } catch (error) {
    return {
      products: [],
      source: "sheet",
      error:
        error instanceof Error
          ? error.message
          : "No se pudo leer la hoja de productos.",
    };
  }

  return {
    products: DEMO_PRODUCTS,
    source: "demo",
  };
}
