
/**
 * Calendario comercial y publicitario de Colombia.
 *
 * Fuente inicial: calendario proporcionado para el proyecto.
 * Este archivo contiene fechas y temporadas, no precios
 * ni descuentos aplicados a productos.
 */

export type MarketingMonth =
  | 1 | 2 | 3 | 4 | 5 | 6
  | 7 | 8 | 9 | 10 | 11 | 12;

export type MarketingEventType =
  | "macrocomercial"
  | "profesional"
  | "tematica"
  | "temporada"
  | "festivo";

export type MarketingDateRule =
  | {
      type: "fixed";
      day: number;
    }
  | {
      type: "nth-weekday";
      occurrence: 1 | 2 | 3 | 4 | -1;
      weekday: number;
    }
  | {
      type: "day-of-year";
      day: number;
    }
  | {
      type: "seasonal";
      label: string;
    };

export interface MarketingEvent {
  id: string;
  month: MarketingMonth;
  name: string;
  type: MarketingEventType;
  dateRule: MarketingDateRule;
  dateLabel: string;
  focus: string;
}

export const MARKETING_CALENDAR: MarketingEvent[] = [
  // =========================================================
  // ENERO
  // =========================================================
  {
    id: "ano-nuevo",
    month: 1,
    name: "Año Nuevo",
    type: "macrocomercial",
    dateRule: { type: "fixed", day: 1 },
    dateLabel: "1 de enero",
    focus: "Nuevos comienzos, renovación y propósitos.",
  },
  {
    id: "puente-reyes",
    month: 1,
    name: "Puente de Reyes",
    type: "festivo",
    dateRule: {
      type: "seasonal",
      label: "Fin de semana del festivo de Reyes",
    },
    dateLabel: "Fecha variable según el calendario festivo",
    focus: "Viajes, turismo y liquidación de inventario.",
  },
  {
    id: "regreso-clases",
    month: 1,
    name: "Regreso a clases",
    type: "temporada",
    dateRule: {
      type: "seasonal",
      label: "Segunda quincena de enero",
    },
    dateLabel: "15 al 30 de enero, como referencia",
    focus: "Educación, tecnología, útiles y ropa escolar.",
  },
  {
    id: "community-manager",
    month: 1,
    name: "Día del Community Manager",
    type: "profesional",
    dateRule: {
      type: "nth-weekday",
      occurrence: 4,
      weekday: 1,
    },
    dateLabel: "Cuarto lunes de enero",
    focus: "Marketing digital, creación de contenido y herramientas.",
  },

  // =========================================================
  // FEBRERO
  // =========================================================
  {
    id: "periodista-colombia",
    month: 2,
    name: "Día del Periodista y Comunicador",
    type: "profesional",
    dateRule: { type: "fixed", day: 9 },
    dateLabel: "9 de febrero",
    focus: "Comunicación, formación y herramientas profesionales.",
  },
  {
    id: "dia-del-soltero",
    month: 2,
    name: "Día del Soltero",
    type: "tematica",
    dateRule: { type: "fixed", day: 13 },
    dateLabel: "13 de febrero",
    focus: "Autocuidado, experiencias y regalos individuales.",
  },
  {
    id: "san-valentin",
    month: 2,
    name: "San Valentín",
    type: "macrocomercial",
    dateRule: { type: "fixed", day: 14 },
    dateLabel: "14 de febrero",
    focus: "Regalos, experiencias, detalles y productos para parejas.",
  },
  {
    id: "carnaval-barranquilla",
    month: 2,
    name: "Carnaval de Barranquilla",
    type: "temporada",
    dateRule: {
      type: "seasonal",
      label: "Fecha variable; consultar programación anual",
    },
    dateLabel: "Febrero o marzo, según el año",
    focus: "Turismo, moda, gastronomía y entretenimiento regional.",
  },

  // =========================================================
  // MARZO
  // =========================================================
  {
    id: "contador-publico",
    month: 3,
    name: "Día del Contador Público",
    type: "profesional",
    dateRule: { type: "fixed", day: 1 },
    dateLabel: "1 de marzo",
    focus: "Software contable, productividad y servicios profesionales.",
  },
  {
    id: "dia-de-la-mujer",
    month: 3,
    name: "Día Internacional de la Mujer",
    type: "macrocomercial",
    dateRule: { type: "fixed", day: 8 },
    dateLabel: "8 de marzo",
    focus: "Reconocimiento, bienestar, moda, tecnología y experiencias.",
  },
  {
    id: "derechos-consumidor",
    month: 3,
    name: "Día Mundial de los Derechos del Consumidor",
    type: "tematica",
    dateRule: { type: "fixed", day: 15 },
    dateLabel: "15 de marzo",
    focus: "Confianza, garantías, transparencia y servicio al cliente.",
  },
  {
    id: "dia-del-hombre",
    month: 3,
    name: "Día del Hombre en Colombia",
    type: "tematica",
    dateRule: { type: "fixed", day: 19 },
    dateLabel: "19 de marzo",
    focus: "Moda masculina, cuidado personal, tecnología y accesorios.",
  },
  {
    id: "dia-del-artesano",
    month: 3,
    name: "Día del Artesano",
    type: "profesional",
    dateRule: { type: "fixed", day: 19 },
    dateLabel: "19 de marzo, según el calendario proporcionado",
    focus: "Artesanías, producción local y productos personalizados.",
  },
  {
    id: "semana-santa",
    month: 3,
    name: "Semana Santa",
    type: "temporada",
    dateRule: {
      type: "seasonal",
      label: "Fecha variable entre marzo y abril",
    },
    dateLabel: "Consultar calendario religioso anual",
    focus: "Turismo, descanso, gastronomía y experiencias.",
  },

  // =========================================================
  // ABRIL
  // =========================================================
  {
    id: "dia-salud",
    month: 4,
    name: "Día Mundial de la Salud",
    type: "tematica",
    dateRule: { type: "fixed", day: 7 },
    dateLabel: "7 de abril",
    focus: "Bienestar, actividad física y hábitos saludables.",
  },
  {
    id: "dia-tierra",
    month: 4,
    name: "Día de la Tierra",
    type: "tematica",
    dateRule: { type: "fixed", day: 22 },
    dateLabel: "22 de abril",
    focus: "Sostenibilidad, consumo responsable y productos ecológicos.",
  },
  {
    id: "dia-idioma-libro",
    month: 4,
    name: "Día del Idioma y del Libro",
    type: "tematica",
    dateRule: { type: "fixed", day: 23 },
    dateLabel: "23 de abril",
    focus: "Libros, educación, cursos y contenidos digitales.",
  },
  {
    id: "dia-secretaria",
    month: 4,
    name: "Día de la Secretaria y del Asistente",
    type: "profesional",
    dateRule: {
      type: "nth-weekday",
      occurrence: -1,
      weekday: 3,
    },
    dateLabel: "Último miércoles de abril",
    focus: "Regalos corporativos, experiencias y reconocimiento laboral.",
  },
  {
    id: "dia-nino",
    month: 4,
    name: "Día de la Niñez en Colombia",
    type: "macrocomercial",
    dateRule: {
      type: "nth-weekday",
      occurrence: -1,
      weekday: 6,
    },
    dateLabel: "Último sábado de abril",
    focus: "Juguetes, entretenimiento, tecnología y planes familiares.",
  },
  {
    id: "disenador-grafico",
    month: 4,
    name: "Día del Diseñador Gráfico",
    type: "profesional",
    dateRule: { type: "fixed", day: 27 },
    dateLabel: "27 de abril",
    focus: "Diseño, recursos creativos y herramientas digitales.",
  },

  // =========================================================
  // MAYO
  // =========================================================
  {
    id: "dia-trabajo",
    month: 5,
    name: "Día del Trabajo",
    type: "festivo",
    dateRule: { type: "fixed", day: 1 },
    dateLabel: "1 de mayo",
    focus: "Bienestar laboral, descanso y productos para el hogar.",
  },
  {
    id: "dia-madre",
    month: 5,
    name: "Día de la Madre",
    type: "macrocomercial",
    dateRule: {
      type: "nth-weekday",
      occurrence: 2,
      weekday: 0,
    },
    dateLabel: "Segundo domingo de mayo",
    focus: "Regalos, flores, moda, gastronomía y experiencias.",
  },
  {
    id: "dia-profesor",
    month: 5,
    name: "Día del Profesor",
    type: "profesional",
    dateRule: { type: "fixed", day: 15 },
    dateLabel: "15 de mayo",
    focus: "Educación, papelería, regalos y reconocimiento.",
  },
  {
    id: "orgullo-geek",
    month: 5,
    name: "Día del Orgullo Geek",
    type: "tematica",
    dateRule: { type: "fixed", day: 25 },
    dateLabel: "25 de mayo",
    focus: "Videojuegos, tecnología, coleccionables y cultura pop.",
  },

  // =========================================================
  // JUNIO
  // =========================================================
  {
    id: "dia-padre",
    month: 6,
    name: "Día del Padre",
    type: "macrocomercial",
    dateRule: {
      type: "nth-weekday",
      occurrence: 3,
      weekday: 0,
    },
    dateLabel: "Tercer domingo de junio",
    focus: "Regalos, tecnología, moda, accesorios y experiencias.",
  },
  {
    id: "orgullo-lgbtiq",
    month: 6,
    name: "Día del Orgullo LGBTIQ+",
    type: "tematica",
    dateRule: { type: "fixed", day: 28 },
    dateLabel: "28 de junio",
    focus: "Inclusión, diversidad y representación responsable.",
  },
  {
    id: "sale-mitad-ano",
    month: 6,
    name: "Gran Sale de Mitad de Año",
    type: "macrocomercial",
    dateRule: {
      type: "seasonal",
      label: "Finales de junio y temporada de vacaciones",
    },
    dateLabel: "Finales de junio; ajustar al calendario escolar",
    focus: "Liquidación de inventario y campañas de vacaciones.",
  },

  // =========================================================
  // JULIO
  // =========================================================
  {
    id: "virgen-carmen",
    month: 7,
    name: "Día de la Virgen del Carmen",
    type: "tematica",
    dateRule: { type: "fixed", day: 16 },
    dateLabel: "16 de julio",
    focus: "Transporte, mantenimiento y accesorios para vehículos.",
  },
  {
    id: "dia-bodeguero",
    month: 7,
    name: "Día del Bodeguero y Tendero",
    type: "profesional",
    dateRule: { type: "fixed", day: 19 },
    dateLabel: "19 de julio, según el calendario proporcionado",
    focus: "Comercio minorista, abastecimiento y relaciones B2B.",
  },
  {
    id: "independencia-colombia",
    month: 7,
    name: "Día de la Independencia de Colombia",
    type: "festivo",
    dateRule: { type: "fixed", day: 20 },
    dateLabel: "20 de julio",
    focus: "Productos nacionales, identidad y gastronomía colombiana.",
  },
  {
    id: "dia-amistad",
    month: 7,
    name: "Día Internacional de la Amistad",
    type: "tematica",
    dateRule: { type: "fixed", day: 30 },
    dateLabel: "30 de julio",
    focus: "Regalos compartidos, experiencias y compras en pareja de amigos.",
  },

  // =========================================================
  // AGOSTO
  // =========================================================
  {
    id: "dia-cerveza",
    month: 8,
    name: "Día Internacional de la Cerveza",
    type: "tematica",
    dateRule: {
      type: "nth-weekday",
      occurrence: 1,
      weekday: 5,
    },
    dateLabel: "Primer viernes de agosto",
    focus: "Gastronomía y experiencias para público adulto.",
  },
  {
    id: "dia-gato",
    month: 8,
    name: "Día Mundial del Gato",
    type: "tematica",
    dateRule: { type: "fixed", day: 8 },
    dateLabel: "8 de agosto",
    focus: "Mascotas, bienestar animal, alimentos y accesorios.",
  },
  {
    id: "dia-tendero",
    month: 8,
    name: "Día Nacional del Tendero",
    type: "profesional",
    dateRule: {
      type: "nth-weekday",
      occurrence: -1,
      weekday: 0,
    },
    dateLabel: "Último domingo de agosto",
    focus: "Pequeños comercios, proveedores y fidelización B2B.",
  },
  {
    id: "dia-abuelos",
    month: 8,
    name: "Día de los Abuelos",
    type: "tematica",
    dateRule: { type: "fixed", day: 28 },
    dateLabel: "28 de agosto, según el calendario proporcionado",
    focus: "Familia, bienestar, comodidad y experiencias.",
  },
  {
    id: "dia-gamer",
    month: 8,
    name: "Día Mundial del Gamer",
    type: "tematica",
    dateRule: { type: "fixed", day: 29 },
    dateLabel: "29 de agosto",
    focus: "Videojuegos, periféricos, consolas y accesorios.",
  },

  // =========================================================
  // SEPTIEMBRE
  // =========================================================
  {
    id: "amor-amistad",
    month: 9,
    name: "Día del Amor y la Amistad",
    type: "macrocomercial",
    dateRule: {
      type: "nth-weekday",
      occurrence: 3,
      weekday: 6,
    },
    dateLabel: "Tercer sábado de septiembre",
    focus: "Regalos, detalles, cenas, experiencias y amigo secreto.",
  },
  {
    id: "dia-programador",
    month: 9,
    name: "Día del Programador",
    type: "profesional",
    dateRule: {
      type: "day-of-year",
      day: 256,
    },
    dateLabel: "Día 256 del año: 13 de septiembre o 12 en año bisiesto",
    focus: "Software, hardware, formación y herramientas de desarrollo.",
  },
  {
    id: "dia-turismo",
    month: 9,
    name: "Día Mundial del Turismo",
    type: "tematica",
    dateRule: { type: "fixed", day: 27 },
    dateLabel: "27 de septiembre",
    focus: "Viajes, hoteles, experiencias y equipaje.",
  },

  // =========================================================
  // OCTUBRE
  // =========================================================
  {
    id: "dia-cafe",
    month: 10,
    name: "Día Internacional del Café",
    type: "tematica",
    dateRule: { type: "fixed", day: 1 },
    dateLabel: "1 de octubre",
    focus: "Cafeterías, café, accesorios y experiencias gastronómicas.",
  },
  {
    id: "mes-cancer-mama",
    month: 10,
    name: "Mes de Sensibilización sobre el Cáncer de Mama",
    type: "tematica",
    dateRule: {
      type: "seasonal",
      label: "Durante todo octubre",
    },
    dateLabel: "Todo octubre",
    focus: "Concientización, alianzas responsables y apoyo a causas.",
  },
  {
    id: "dia-cancer-mama",
    month: 10,
    name: "Día Mundial contra el Cáncer de Mama",
    type: "tematica",
    dateRule: { type: "fixed", day: 19 },
    dateLabel: "19 de octubre",
    focus: "Prevención, sensibilización y campañas con propósito.",
  },
  {
    id: "halloween",
    month: 10,
    name: "Halloween y Día de los Niños",
    type: "macrocomercial",
    dateRule: { type: "fixed", day: 31 },
    dateLabel: "31 de octubre",
    focus: "Disfraces, dulces, decoración y entretenimiento.",
  },

  // =========================================================
  // NOVIEMBRE
  // =========================================================
  {
    id: "temporada-cyber",
    month: 11,
    name: "Temporada de ofertas digitales",
    type: "temporada",
    dateRule: {
      type: "seasonal",
      label: "Fechas anunciadas por cada comercio",
    },
    dateLabel: "Consultar fechas de cada campaña",
    focus: "Comercio electrónico, tecnología y compras anticipadas.",
  },
  {
    id: "independencia-cartagena",
    month: 11,
    name: "Independencia de Cartagena",
    type: "festivo",
    dateRule: { type: "fixed", day: 11 },
    dateLabel: "11 de noviembre",
    focus: "Turismo regional, cultura y comercio local.",
  },
  {
    id: "dia-soltero-1111",
    month: 11,
    name: "Día del Soltero y evento 11/11",
    type: "macrocomercial",
    dateRule: { type: "fixed", day: 11 },
    dateLabel: "11 de noviembre",
    focus: "Ofertas digitales y campañas de comercio electrónico.",
  },
  {
    id: "black-friday",
    month: 11,
    name: "Black Friday",
    type: "macrocomercial",
    dateRule: {
      type: "nth-weekday",
      occurrence: 4,
      weekday: 5,
    },
    dateLabel: "Viernes posterior al cuarto jueves de noviembre",
    focus: "Descuentos comerciales y compras navideñas anticipadas.",
  },
  {
    id: "cyber-monday",
    month: 11,
    name: "Cyber Monday",
    type: "macrocomercial",
    dateRule: {
      type: "seasonal",
      label: "Lunes inmediatamente posterior a Black Friday",
    },
    dateLabel: "Lunes después de Black Friday",
    focus: "Comercio electrónico, tecnología y ventas digitales.",
  },

  // =========================================================
  // DICIEMBRE
  // =========================================================
  {
    id: "dia-velitas",
    month: 12,
    name: "Día de las Velitas",
    type: "festivo",
    dateRule: { type: "fixed", day: 7 },
    dateLabel: "7 de diciembre",
    focus: "Decoración, velas, faroles y gastronomía navideña.",
  },
  {
    id: "novena-aguinaldos",
    month: 12,
    name: "Novena de Aguinaldos",
    type: "temporada",
    dateRule: {
      type: "seasonal",
      label: "Del 16 al 24 de diciembre",
    },
    dateLabel: "16 al 24 de diciembre",
    focus: "Regalos, anchetas, gastronomía y encuentros empresariales.",
  },
  {
    id: "nochebuena",
    month: 12,
    name: "Nochebuena",
    type: "macrocomercial",
    dateRule: { type: "fixed", day: 24 },
    dateLabel: "24 de diciembre",
    focus: "Regalos, cenas, moda y compras de última hora.",
  },
  {
    id: "navidad",
    month: 12,
    name: "Navidad",
    type: "festivo",
    dateRule: { type: "fixed", day: 25 },
    dateLabel: "25 de diciembre",
    focus: "Regalos, celebraciones y experiencias familiares.",
  },
  {
    id: "dia-inocentes",
    month: 12,
    name: "Día de los Inocentes",
    type: "tematica",
    dateRule: { type: "fixed", day: 28 },
    dateLabel: "28 de diciembre",
    focus: "Contenido creativo, humor y campañas de temporada.",
  },
  {
    id: "fin-ano",
    month: 12,
    name: "Fin de Año",
    type: "macrocomercial",
    dateRule: { type: "fixed", day: 31 },
    dateLabel: "31 de diciembre",
    focus: "Viajes, celebraciones, moda y productos de temporada.",
  },
];

/**
 * Nombres de los meses para presentar el calendario en la UI.
 */
export const MARKETING_MONTHS: {
  value: MarketingMonth;
  label: string;
}[] = [
  { value: 1, label: "Enero" },
  { value: 2, label: "Febrero" },
  { value: 3, label: "Marzo" },
  { value: 4, label: "Abril" },
  { value: 5, label: "Mayo" },
  { value: 6, label: "Junio" },
  { value: 7, label: "Julio" },
  { value: 8, label: "Agosto" },
  { value: 9, label: "Septiembre" },
  { value: 10, label: "Octubre" },
  { value: 11, label: "Noviembre" },
  { value: 12, label: "Diciembre" },
];

/**
 * Obtiene los eventos de un mes específico.
 */
export function getMarketingEventsByMonth(
  month: MarketingMonth
): MarketingEvent[] {
  return MARKETING_CALENDAR.filter(
    (event) => event.month === month
  );
}

/**
 * Obtiene los eventos de una categoría.
 */
export function getMarketingEventsByType(
  type: MarketingEventType
): MarketingEvent[] {
  return MARKETING_CALENDAR.filter(
    (event) => event.type === type
  );
}

/**
 * Busca un evento por su identificador.
 */
export function getMarketingEventById(
  id: string
): MarketingEvent | undefined {
  return MARKETING_CALENDAR.find(
    (event) => event.id === id
  );
}
