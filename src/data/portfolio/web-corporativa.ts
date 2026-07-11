import type {
  PortfolioProject,
} from "@/types/portfolio.types";

export const webCorporativa: PortfolioProject = {
  id:
    "web-corporativa",

  plan:
    "landing-page-basic",

  category:
    "software",

  service:
    "corporativa",

  image:
    "/images/projects/Page_corporative_1.png",

  href:
    "https://erick-sat.vercel.app/",

  technologies: [
    "React",
    "Next.js",
    "TypeScript",
  ],

  featured: true,

  translations: {
    en: {
      title:
        "Corporate Website",

      description:
        "Professional corporate website focused on credibility, brand positioning, and business presence.",

      imageAlt:
        "Corporate website",

      category:
        "Software",
    },

    es: {
      title:
        "Web Corporativa",

      description:
        "Sitio institucional profesional diseñado para fortalecer la presencia digital y la credibilidad empresarial.",

      imageAlt:
        "Sitio web corporativo",

      category:
        "Software",
    },

    pt: {
      title:
        "Site Corporativo",

      description:
        "Site institucional profissional criado para fortalecer a presença digital e a credibilidade da empresa.",

      imageAlt:
        "Site corporativo",

      category:
        "Software",
    },
  },
};