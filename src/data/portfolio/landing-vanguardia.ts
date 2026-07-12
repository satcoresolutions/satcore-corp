import type {
  PortfolioProject,
} from "@/types/portfolio.types";

export const landingVanguardia: PortfolioProject = {
  id:
    "landing-vanguardia",

  plan:
    "commercial-landing",

  category:
    "software",

  service:
    "landing",

  image:
    "/images/projects/lp_vanguardia.png",

  href:
    "https://lp-vanguardia.vercel.app/",

  technologies: [
    "React",
    "Next.js",
    "TypeScript",
  ],

  featured: true,

  translations: {
    en: {
      title:
        "Vanguardia Landing Page",

      description:
        "Conversion-focused landing page designed for lead generation and digital product validation.",

      imageAlt:
        "Vanguardia landing page",

      category:
        "Software",
    },

    es: {
      title:
        "Landing Page Vanguardia",

      description:
        "Landing page optimizada para conversión enfocada en captación de leads y validación de productos digitales.",

      imageAlt:
        "Landing Page Vanguardia",

      category:
        "Software",
    },

    pt: {
      title:
        "Landing Page Vanguarda",

      description:
        "Landing page otimizada para conversão focada em geração de leads e validação de produtos digitais.",

      imageAlt:
        "Landing Page Vanguarda",

      category:
        "Software",
    },
  },
};