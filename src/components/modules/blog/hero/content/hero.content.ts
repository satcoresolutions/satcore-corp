export const heroContent = {
  en: {
    badge: "SatCore Blog",

    title:
      "Insights, guides, and ideas to help you build better digital products.",

    description:
      "Explore articles on software development, artificial intelligence, web technologies, UI/UX, and digital strategy. Practical knowledge to help you make better technical and business decisions.",

    features: [
      "Software Development",
      "Artificial Intelligence",
      "Digital Strategy",
    ],

    primaryAction: {
      label: "Explore Articles",
      href: "#articles",
    },

    secondaryAction: {
      label: "Contact Us",
      href: "/contact",
    },
  },

  es: {
    badge: "Blog de SatCore",

    title:
      "Ideas, guías y recursos para construir mejores productos digitales.",

    description:
      "Explora artículos sobre desarrollo de software, inteligencia artificial, tecnologías web, UI/UX y estrategia digital. Contenido práctico para ayudarte a tomar mejores decisiones técnicas y de negocio.",

    features: [
      "Desarrollo de Software",
      "Inteligencia Artificial",
      "Estrategia Digital",
    ],

    primaryAction: {
      label: "Explorar Artículos",
      href: "#articles",
    },

    secondaryAction: {
      label: "Contáctanos",
      href: "/contact",
    },
  },

  pt: {
    badge: "Blog da SatCore",

    title:
      "Ideias, guias e conteúdos para criar melhores produtos digitais.",

    description:
      "Explore artigos sobre desenvolvimento de software, inteligência artificial, tecnologias web, UI/UX e estratégia digital. Conteúdo prático para ajudar você a tomar melhores decisões técnicas e de negócios.",

    features: [
      "Desenvolvimento de Software",
      "Inteligência Artificial",
      "Estratégia Digital",
    ],

    primaryAction: {
      label: "Explorar Artigos",
      href: "#articles",
    },

    secondaryAction: {
      label: "Fale Conosco",
      href: "/contact",
    },
  },
} as const;

export type HeroContent = typeof heroContent;
export type HeroLanguage = keyof HeroContent;