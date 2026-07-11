import type {
  PortfolioProject,
} from "@/types/portfolio.types";

export const digitalCatalogTemplate: PortfolioProject = {
  id:
    "digital-catalog-template",

  plan:
    "digital-catalog",

  category:
    "software",

  service:
    "ecommerce",

  image:
    "/images/projects/digital_catalog_template.png",

  href:
    "https://satcore-solutions-commercial-catalo.vercel.app/",

  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Google Analytics",
    "Google Tag Manager",
  ],

  featured: true,

  translations: {
    en: {
      title:
        "Digital Catalog Template",

      description:
        "Professional digital catalog template designed to showcase products through an intuitive browsing experience. It includes featured products, product detail pages, value propositions, FAQs, and direct contact options to generate sales inquiries.",

      imageAlt:
        "Professional digital catalog template with featured products and product detail pages.",

      category:
        "Software",
    },

    es: {
      title:
        "Plantilla de Catálogo Digital",

      description:
        "Plantilla profesional para catálogos digitales diseñada para exhibir productos mediante una experiencia de navegación intuitiva. Incluye productos destacados, páginas de detalle, propuesta de valor, preguntas frecuentes y contacto directo para generar oportunidades de venta.",

      imageAlt:
        "Plantilla profesional de catálogo digital con productos destacados y páginas de detalle.",

      category:
        "Software",
    },

    pt: {
      title:
        "Modelo de Catálogo Digital",

      description:
        "Modelo profissional de catálogo digital desenvolvido para apresentar produtos por meio de uma experiência de navegação intuitiva. Inclui produtos em destaque, páginas de detalhes, proposta de valor, perguntas frequentes e contato direto para gerar oportunidades de venda.",

      imageAlt:
        "Modelo profissional de catálogo digital com produtos em destaque e páginas de detalhes.",

      category:
        "Software",
    },
  },
};