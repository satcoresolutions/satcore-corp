import type {
  PortfolioProject,
} from "@/types/portfolio.types";

export const commercialLandingTemplate: PortfolioProject = {
  id:
    "commercial-landing-template",

  plan:
    "commercial-landing",

  category:
    "software",

  service:
    "landing",

  image:
    "/images/projects/commercial_landing_template.png",

  href:
    "https://scaffoldlandingpage.vercel.app/",

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
        "Commercial Landing Template",

      description:
        "Professional commercial landing page template designed to maximize conversions. It includes a complete structure with hero section, problem, solution, benefits, trust indicators, process, and call-to-action.",

      imageAlt:
        "Commercial landing page template focused on lead generation and conversions.",

      category:
        "Software",
    },

    es: {
      title:
        "Plantilla de Landing Comercial",

      description:
        "Plantilla profesional para landing pages comerciales diseñada para maximizar la conversión de clientes. Incluye una estructura completa con hero, problema, solución, beneficios, prueba social, proceso y llamada a la acción.",

      imageAlt:
        "Plantilla profesional de landing comercial enfocada en la generación de clientes potenciales.",

      category:
        "Software",
    },

    pt: {
      title:
        "Modelo de Landing Comercial",

      description:
        "Modelo profissional de landing page comercial desenvolvido para maximizar conversões. Inclui uma estrutura completa com hero, problema, solução, benefícios, prova social, processo e chamada para ação.",

      imageAlt:
        "Modelo profissional de landing page comercial focado em geração de leads.",

      category:
        "Software",
    },
  },
};