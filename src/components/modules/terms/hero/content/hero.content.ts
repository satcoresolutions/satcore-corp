export const heroContent = {
  en: {
    badge: "Terms & Conditions",

    title:
      "Clear terms for using our services with confidence.",

    description:
      "Review the terms and conditions that govern the use of SatCore's website, products, and services. Our goal is to ensure transparency, protect both parties, and establish a clear framework for our business relationship.",

    features: [
      "Transparency",
      "User Responsibilities",
      "Legal Compliance",
    ],

    primaryAction: {
      label: "Read the Terms",
      href: "#terms",
    },

    secondaryAction: {
      label: "Contact Us",
      href: "/contact",
    },
  },

  es: {
    badge: "Términos y Condiciones",

    title:
      "Condiciones claras para utilizar nuestros servicios con confianza.",

    description:
      "Consulta los términos y condiciones que regulan el uso del sitio web, los productos y los servicios de SatCore. Nuestro objetivo es garantizar la transparencia, proteger a ambas partes y establecer un marco claro para nuestra relación comercial.",

    features: [
      "Transparencia",
      "Responsabilidades del Usuario",
      "Cumplimiento Legal",
    ],

    primaryAction: {
      label: "Leer los Términos",
      href: "#terms",
    },

    secondaryAction: {
      label: "Contáctanos",
      href: "/contact",
    },
  },

  pt: {
    badge: "Termos e Condições",

    title:
      "Condições claras para utilizar nossos serviços com confiança.",

    description:
      "Consulte os termos e condições que regem o uso do site, dos produtos e dos serviços da SatCore. Nosso objetivo é garantir transparência, proteger ambas as partes e estabelecer uma base clara para nossa relação comercial.",

    features: [
      "Transparência",
      "Responsabilidades do Usuário",
      "Conformidade Legal",
    ],

    primaryAction: {
      label: "Ler os Termos",
      href: "#terms",
    },

    secondaryAction: {
      label: "Fale Conosco",
      href: "/contact",
    },
  },
} as const;

export type HeroContent = typeof heroContent;
export type HeroLanguage = keyof HeroContent;