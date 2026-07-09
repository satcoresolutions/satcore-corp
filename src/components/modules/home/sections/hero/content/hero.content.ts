export const heroContent = {
  en: {
    badge: "Digital Innovation",

    title:
      "Building the next generation of digital solutions.",

    description:
      "At SatCore, we help businesses innovate through custom software, artificial intelligence, cloud technologies, and digital transformation. We create scalable solutions that drive growth, efficiency, and long-term success.",

    features: [
      "Custom Software",
      "Artificial Intelligence",
      "Cloud Solutions",
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
    badge: "Innovación Digital",

    title:
      "Construimos la próxima generación de soluciones digitales.",

    description:
      "En SatCore ayudamos a las empresas a innovar mediante software a la medida, inteligencia artificial, tecnologías en la nube y transformación digital. Creamos soluciones escalables que impulsan el crecimiento, la eficiencia y el éxito a largo plazo.",

    features: [
      "Software a la Medida",
      "Inteligencia Artificial",
      "Soluciones en la Nube",
    ],

    primaryAction: {
      label: "Explorar Servicios",
      href: "/services",
    },

    secondaryAction: {
      label: "Contáctanos",
      href: "/contact",
    },
  },

  pt: {
    badge: "Inovação Digital",

    title:
      "Construindo a próxima geração de soluções digitais.",

    description:
      "Na SatCore, ajudamos empresas a inovar por meio de software sob medida, inteligência artificial, tecnologias em nuvem e transformação digital. Criamos soluções escaláveis que impulsionam o crescimento, a eficiência e o sucesso de longo prazo.",

    features: [
      "Software Sob Medida",
      "Inteligência Artificial",
      "Soluções em Nuvem",
    ],

    primaryAction: {
      label: "Explorar Serviços",
      href: "/services",
    },

    secondaryAction: {
      label: "Fale Conosco",
      href: "/contact",
    },
  },
} as const;

export type HeroContent = typeof heroContent;
export type HeroLanguage = keyof HeroContent;