import type {
  PortfolioProject,
} from "@/types/portfolio.types";

export const premiumCorporateTemplate: PortfolioProject = {
  id:
    "premium-corporate-template",

  plan:
    "premium-corporate",

  category:
    "software",

  service:
    "business-website",

  image:
    "/images/projects/premium_corporate_template.png",

  href:
    "https://satcore-corporative.vercel.app/",

  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Vercel",
    "Google Analytics",
    "Google Tag Manager",
  ],

  featured: true,

  translations: {
    en: {
      title:
        "Premium Corporate Website Template",

      description:
        "Premium corporate website template designed as a complete digital ecosystem for technology companies. It includes multi-page architecture, service sections, portfolio showcase, multilingual content structure, SEO optimization, and conversion-focused experiences.",

      imageAlt:
        "Premium corporate website template showcasing services, portfolio, and digital solutions.",

      category:
        "Software",
    },

    es: {
      title:
        "Plantilla Web Corporativa Premium",

      description:
        "Plantilla web corporativa premium diseñada como un ecosistema digital completo para empresas tecnológicas. Incluye arquitectura multi-página, secciones de servicios, portafolio de proyectos, estructura multidioma, optimización SEO y experiencias enfocadas en conversión.",

      imageAlt:
        "Plantilla web corporativa premium mostrando servicios, portafolio y soluciones digitales.",

      category:
        "Software",
    },

    pt: {
      title:
        "Modelo de Site Corporativo Premium",

      description:
        "Modelo de site corporativo premium desenvolvido como um ecossistema digital completo para empresas de tecnologia. Inclui arquitetura multipágina, seções de serviços, portfólio de projetos, estrutura multilíngue, otimização SEO e experiências focadas em conversão.",

      imageAlt:
        "Modelo de site corporativo premium apresentando serviços, portfólio e soluções digitais.",

      category:
        "Software",
    },
  },
};