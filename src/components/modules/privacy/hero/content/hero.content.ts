export const heroContent = {
  en: {
    badge: "Privacy Policy",

    title:
      "Your privacy and personal data matter to us.",

    description:
      "Learn how SatCore collects, uses, stores, and protects your personal information. We are committed to transparency, security, and compliance with applicable data protection regulations.",

    features: [
      "Data Protection",
      "Transparency",
      "Secure Information",
    ],

    primaryAction: {
      label: "Read the Policy",
      href: "#privacy-policy",
    },

    secondaryAction: {
      label: "Contact Us",
      href: "/contact",
    },
  },

  es: {
    badge: "Política de Privacidad",

    title:
      "Tu privacidad y la protección de tus datos son nuestra prioridad.",

    description:
      "Conoce cómo SatCore recopila, utiliza, almacena y protege tu información personal. Estamos comprometidos con la transparencia, la seguridad y el cumplimiento de las normativas aplicables en materia de protección de datos.",

    features: [
      "Protección de Datos",
      "Transparencia",
      "Información Segura",
    ],

    primaryAction: {
      label: "Leer la Política",
      href: "#privacy-policy",
    },

    secondaryAction: {
      label: "Contáctanos",
      href: "/contact",
    },
  },

  pt: {
    badge: "Política de Privacidade",

    title:
      "Sua privacidade e a proteção dos seus dados são nossa prioridade.",

    description:
      "Saiba como a SatCore coleta, utiliza, armazena e protege suas informações pessoais. Estamos comprometidos com a transparência, a segurança e o cumprimento das leis aplicáveis de proteção de dados.",

    features: [
      "Proteção de Dados",
      "Transparência",
      "Informações Seguras",
    ],

    primaryAction: {
      label: "Ler a Política",
      href: "#privacy-policy",
    },

    secondaryAction: {
      label: "Fale Conosco",
      href: "/contact",
    },
  },
} as const;

export type HeroContent = typeof heroContent;
export type HeroLanguage = keyof HeroContent;