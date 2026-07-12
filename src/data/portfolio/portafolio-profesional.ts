import type {
  PortfolioProject,
} from "@/types/portfolio.types";

export const portafolioProfesional: PortfolioProject = {
  id:
    "portafolio-profesional",

  plan:
    "personal-portfolio",

  category:
    "software",

  service:
    "corporativa",

  image:
    "/images/projects/Portafolio_1.png",

  href:
    "https://erick28hdz.github.io/PortafolioWeb/",

  technologies: [
    "HTML",
    "CSS",
    "JavaScript",
  ],

  featured: true,

  translations: {
    en: {
      title:
        "Professional Portfolio",

      description:
        "Professional website designed to showcase services, experience, and expertise.",

      imageAlt:
        "Professional portfolio website",

      category:
        "Software",
    },

    es: {
      title:
        "Portafolio Profesional",

      description:
        "Sitio web profesional diseñado para presentar servicios, experiencia y propuesta de valor.",

      imageAlt:
        "Portafolio profesional",

      category:
        "Software",
    },

    pt: {
      title:
        "Portfólio Profissional",

      description:
        "Site profissional criado para apresentar serviços, experiência e proposta de valor.",

      imageAlt:
        "Portfólio profissional",

      category:
        "Software",
    },
  },
};