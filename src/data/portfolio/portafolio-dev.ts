import type {
  PortfolioProject,
} from "@/types/portfolio.types";

export const portafolioDev: PortfolioProject = {
  id:
    "portafolio-dev",

  plan:
    "landing-page-basic",

  category:
    "software",

  service:
    "corporativa",

  image:
    "/img/projects/portafolio_2.png",

  href:
    "https://portafolio-erickhdz.vercel.app/",

  technologies: [
    "React",
    "Next.js",
    "TypeScript",
  ],

  featured: true,

  translations: {
    en: {
      title:
        "Developer Portfolio",

      description:
        "Technical personal brand website showcasing skills, projects, and professional experience.",

      imageAlt:
        "Developer portfolio website",

      category:
        "Software",
    },

    es: {
      title:
        "Portafolio Dev",

      description:
        "Portafolio profesional orientado a marca personal técnica, proyectos y experiencia profesional.",

      imageAlt:
        "Portafolio de desarrollador",

      category:
        "Software",
    },

    pt: {
      title:
        "Portfólio Dev",

      description:
        "Portfólio profissional focado em marca pessoal técnica, projetos e experiência profissional.",

      imageAlt:
        "Portfólio de desenvolvedor",
      category:
        "Software",
    },
  },
};