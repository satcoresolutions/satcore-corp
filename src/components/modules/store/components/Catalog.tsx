
"use client";

import { useMemo, useState } from "react";

import type {
  Category,
  CategorySlug,
  Product,
} from "../content-types";

import type {
  Product as SheetProduct,
} from "@/components/modules/store/lib/types";

import { CategoryFilter } from "./CategoryFilter";
import { ProductGrid } from "./ProductGrid";

type Sort =
  | "relevancia"
  | "precio-asc"
  | "precio-desc"
  | "rating";

interface CatalogProps {
  products: SheetProduct[];
  categories: Category[];
}

/**
 * Convierte el nombre de una categoría en un slug uniforme.
 * Ejemplo: "Diseño Web" -> "diseno-web".
 */
function slugifyCategory(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}


/**
 * Adapta los productos de Google Sheets
 * al modelo utilizado por el catálogo visual.
 */
function adaptProducts(
  products: SheetProduct[]
): Product[] {
  return products.map((product) => ({
    id: product.id,

    // Información del producto
    slug: slugifyCategory(product.nombre),
    name: product.nombre,
    vendor: "",
    category: slugifyCategory(product.categoria) as CategorySlug,
    summary: product.descripcion,

    // Precio
    price: product.precio,
    billing: "perpetua",

    // Presentación
    platforms: [],
    rating: 0,
    color: "#132A8E",
    image: product.imagen?.trim() || undefined,

    // Promoción
    promotion: product.promotion,

    // Datos adicionales
    disponible: product.disponible,
    destacado: product.destacado,
  }));
}


export function Catalog({
  products,
  categories,
}: CatalogProps) {
  const [category, setCategory] =
    useState<CategorySlug | "todas">("todas");

  const [query, setQuery] = useState("");

  const [sort, setSort] =
    useState<Sort>("relevancia");

  const catalogProducts = useMemo(
    () => adaptProducts(products),
    [products]
  );

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();

    const filtered = catalogProducts.filter(
      (product) => {
        const matchesCategory =
          category === "todas" ||
          slugifyCategory(product.category) ===
          slugifyCategory(category);

        const searchableText = [
          product.name,
          product.vendor,
          product.summary,
        ]
          .join(" ")
          .toLowerCase();

        const matchesQuery =
          !q || searchableText.includes(q);

        return matchesCategory && matchesQuery;
      }
    );

    return [...filtered].sort((a, b) => {
      switch (sort) {
        case "precio-asc":
          return a.price - b.price;

        case "precio-desc":
          return b.price - a.price;

        case "rating":
          return b.rating - a.rating;

        case "relevancia":
        default:
          return 0;
      }
    });
  }, [catalogProducts, category, query, sort]);

  return (
    <section
      id="catalogo"
      className="
        mx-auto w-full max-w-7xl
        px-4 py-16
        sm:px-6 sm:py-20
        lg:px-8 lg:py-24
      "
    >
      {/* Header */}
      <div className="mb-8 sm:mb-10">
        <h2 className="mb-3 font-semibold tracking-tight text-text-primary">
          Catálogo
        </h2>

        <p className="max-w-2xl text-sm leading-relaxed text-text-secondary sm:text-base">
          Explora los programas disponibles y encuentra
          la solución que necesitas.
        </p>
      </div>

      {/* Filters and controls */}
      <div
        className="
          mb-8 flex flex-col gap-4
          rounded-2xl border border-white/10
          bg-surface p-4
          sm:p-5
        "
      >
        <CategoryFilter
          categories={categories}
          active={category}
          onChange={setCategory}
        />

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {/* Search */}
          <div className="relative min-w-0">
            <input
              type="search"
              placeholder="Buscar programa o fabricante"
              aria-label="Buscar productos"
              value={query}
              onChange={(event) =>
                setQuery(event.target.value)
              }
              className="
                w-full min-w-0 rounded-xl
                border border-white/10
                bg-background px-4 py-3
                text-sm text-text-primary
                placeholder:text-text-muted
                transition-colors
                hover:border-white/20
                focus:border-accent
                focus:outline-none
                focus:ring-2 focus:ring-accent/20
              "
            />
          </div>

          {/* Sorting */}
          <select
            aria-label="Ordenar productos"
            value={sort}
            onChange={(event) =>
              setSort(event.target.value as Sort)
            }
            className="
              w-full min-w-0 rounded-xl
              border border-white/10
              bg-background px-4 py-3
              text-sm text-text-primary
              transition-colors
              hover:border-white/20
              focus:border-accent
              focus:outline-none
              focus:ring-2 focus:ring-accent/20
            "
          >
            <option value="relevancia">
              Destacados
            </option>
            <option value="precio-asc">
              Precio: menor a mayor
            </option>
            <option value="precio-desc">
              Precio: mayor a menor
            </option>
            <option value="rating">
              Mejor valorados
            </option>
          </select>
        </div>

        {/* Results count */}
        <p
          className="text-xs text-text-muted"
          aria-live="polite"
        >
          {visible.length}{" "}
          {visible.length === 1
            ? "producto encontrado"
            : "productos encontrados"}
        </p>
      </div>

      {/* Products */}
      <ProductGrid products={visible} />
    </section>
  );
}
