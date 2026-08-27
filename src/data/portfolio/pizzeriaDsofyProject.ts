import type {
  PortfolioProject,
} from "@/types/portfolio.types";

export const pizzeriaDsofyProject: PortfolioProject = {
  id:
    "pizzeria-dsofy-landing",

  plan:
    "commercial-landing",

  category:
    "software",

  service:
    "landing",

  image:
    "/images/projects/pizzeria_dsofy.png",

  href:
    "https://pizzeria-dsofy.vercel.app/",

  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Google Analytics",
  ],

  featured: true,

  translations: {
    en: {
      title:
        "Pizzería D'Sofy - Commercial Landing & Menu",

      description:
        "Commercial landing page and digital menu for a local pizzeria and fast-food business. Features dynamic product showcases, daily promotions, and high-conversion layouts designed for local food ordering.",

      imageAlt:
        "Pizzería D'Sofy commercial landing and digital menu preview.",

      category:
        "Software",
    },

    es: {
      title:
        "Pizzería D'Sofy - Landing Comercial y Menú",

      description:
        "Landing page comercial y menú digital para pizzería y negocio de comida rápida. Cuenta con exhibición dinámica de productos, promociones del día y diseño optimizado para conversión y pedidos locales.",

      imageAlt:
        "Vista previa de la landing comercial y menú digital de Pizzería D'Sofy.",

      category:
        "Software",
    },

    pt: {
      title:
        "Pizzería D'Sofy - Landing Comercial e Cardápio",

      description:
        "Landing page comercial e cardápio digital para pizzaria e negócio de fast food. Possui vitrine dinâmica de produtos, promoções do dia e layout focado na conversão e pedidos locais.",

      imageAlt:
        "Pré-visualização da landing comercial e cardápio digital da Pizzería D'Sofy.",

      category:
        "Software",
    },
  },
};