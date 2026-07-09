export const heroContent = {
  en: {
    badge: "Our Portfolio",

    title:
      "Discover the digital solutions we've built for businesses.",

    description:
      "Explore a selection of projects that showcase our expertise in custom software, web development, artificial intelligence, and digital transformation. Every solution is designed to solve real business challenges and deliver measurable results.",

    features: [
      "Real Projects",
      "Custom Solutions",
      "Proven Results",
    ],

    primaryAction: {
      label: "View Projects",
      href: "#portfolio",
    },

    secondaryAction: {
      label: "Start Your Project",
      href: "/contact",
    },
  },

  es: {
    badge: "Nuestro Portafolio",

    title:
      "Descubre las soluciones digitales que hemos desarrollado para nuestros clientes.",

    description:
      "Explora una selección de proyectos que reflejan nuestra experiencia en desarrollo de software, aplicaciones web, inteligencia artificial y transformación digital. Cada solución está diseñada para resolver desafíos reales y generar resultados medibles.",

    features: [
      "Proyectos Reales",
      "Soluciones a la Medida",
      "Resultados Comprobados",
    ],

    primaryAction: {
      label: "Ver Proyectos",
      href: "#portfolio",
    },

    secondaryAction: {
      label: "Inicia tu Proyecto",
      href: "/contact",
    },
  },

  pt: {
    badge: "Nosso Portfólio",

    title:
      "Descubra as soluções digitais que desenvolvemos para nossos clientes.",

    description:
      "Explore uma seleção de projetos que demonstram nossa experiência em desenvolvimento de software, aplicações web, inteligência artificial e transformação digital. Cada solução foi criada para resolver desafios reais e gerar resultados mensuráveis.",

    features: [
      "Projetos Reais",
      "Soluções Sob Medida",
      "Resultados Comprovados",
    ],

    primaryAction: {
      label: "Ver Projetos",
      href: "#portfolio",
    },

    secondaryAction: {
      label: "Inicie seu Projeto",
      href: "/contact",
    },
  },
} as const;

export type HeroContent = typeof heroContent;
export type HeroLanguage = keyof HeroContent;