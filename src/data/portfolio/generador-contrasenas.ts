import type {
  PortfolioProject,
} from "@/types/portfolio.types";

export const generadorContrasenas: PortfolioProject = {
  id:
    "generador-contrasenas",

   plan:
    "calculators",

  category:
    "cybersecurity",

  service:
    "custom",

  image:
    "/images/projects/generador-contrasenas.png",

  href:
    "https://generador-contrasenas-pro.onrender.com/",

  technologies: [
    "HTML",
    "CSS",
    "JavaScript",
  ],

  featured: true,

  translations: {
    en: {
      title:
        "Password Generator",

      description:
        "Security tool for generating strong and secure passwords.",

      imageAlt:
        "Password generator application",

      category: "Cybersecurity",
    },

    es: {
      title:
        "Generador de Contraseñas",

      description:
        "Herramienta de seguridad para generar contraseñas seguras.",

      imageAlt:
        "Aplicación generadora de contraseñas",

      category: "Ciberseguridad",
    },

    pt: {
      title:
        "Gerador de Senhas",

      description:
        "Ferramenta de segurança para gerar senhas fortes.",

      imageAlt:
        "Aplicação geradora de senhas",

      category: "Cibersegurança",
    },
  },
};