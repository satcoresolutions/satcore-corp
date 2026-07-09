import type {
  PortfolioProject,
} from "@/types/portfolio.types";

export const landingInmobiliaria: PortfolioProject = {
  id:
    "landing-inmobiliaria",

  plan:
    "landing-page-basic",

  category:
    "software",

  service:
    "landing",

  image:
    "/img/projects/landing_page_1.jpg",

  href:
    "https://erick28hdz.github.io/Inmobiliaria-EleganciaHabitat/",

  technologies: [
    "HTML",
    "CSS",
    "JavaScript",
  ],

  featured: true,

  translations: {
    en: {
      title:
        "Real Estate Landing Page",

      description:
        "Website designed to generate leads for real estate businesses.",

      imageAlt:
        "Real estate landing page",

      category:
        "Software",
    },

    es: {
      title:
        "Landing Inmobiliaria",

      description:
        "Sitio web para captación de clientes inmobiliarios.",

      imageAlt:
        "Landing inmobiliaria",

      category:
        "Software",
    },

    pt: {
      title:
        "Landing Imobiliária",

      description:
        "Site para captação de clientes imobiliários.",

      imageAlt:
        "Landing imobiliária",

      category:
        "Software",
    },
  },
};