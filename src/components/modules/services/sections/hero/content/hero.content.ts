export const heroContent = {
  en: {
    badge: "Technology Solutions",

    title: "Integrated Technology Solutions",

    description:
      "From software development to artificial intelligence and cybersecurity, we build scalable and secure solutions.",

    features: [
      "Custom Software",
      "Artificial Intelligence",
      "Cybersecurity",
    ],

    primaryAction: {
      label: "Explore Services",
      href: "/services",
    },

    secondaryAction: {
      label: "Contact Us",
      href: "/contact",
    },
  },

  es: {
    badge: "Soluciones Tecnológicas",

    title: "Soluciones Tecnológicas Integrales",

    description:
      "Desde desarrollo de software hasta inteligencia artificial y ciberseguridad, creamos soluciones escalables y seguras.",

    features: [
      "Software a la Medida",
      "Inteligencia Artificial",
      "Ciberseguridad",
    ],

    primaryAction: {
      label: "Explorar Servicios",
      href: "#services",
    },

    secondaryAction: {
      label: "Contáctanos",
      href: "/contact",
    },
  },

  pt: {
    badge: "Soluções Tecnológicas",

    title: "Soluções Tecnológicas Integradas",

    description:
      "Do desenvolvimento de software à inteligência artificial e cibersegurança, criamos soluções escaláveis e seguras.",

    features: [
      "Software Sob Medida",
      "Inteligência Artificial",
      "Cibersegurança",
    ],

    primaryAction: {
      label: "Explorar Serviços",
      href: "#services",
    },

    secondaryAction: {
      label: "Fale Conosco",
      href: "/contact",
    },
  },
} as const;

export type HeroContent = typeof heroContent;
export type HeroLanguage = keyof HeroContent;