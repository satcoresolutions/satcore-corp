export const heroContent = {
  en: {
    badge: "About SatCore",

    title:
      "Driven by innovation. Focused on building exceptional digital experiences.",

    description:
      "SatCore is a technology company passionate about helping businesses grow through custom software, artificial intelligence, and digital innovation. We combine technical expertise with strategic thinking to create solutions that make a lasting impact.",

    features: [
      "Innovation",
      "Expert Team",
      "Long-Term Partnerships",
    ],

    primaryAction: {
      label: "Meet Our Services",
      href: "/services",
    },

    secondaryAction: {
      label: "Contact Us",
      href: "/contact",
    },
  },

  es: {
    badge: "Sobre SatCore",

    title:
      "Impulsados por la innovación. Comprometidos con crear experiencias digitales excepcionales.",

    description:
      "SatCore es una empresa de tecnología apasionada por ayudar a las organizaciones a crecer mediante software a la medida, inteligencia artificial e innovación digital. Combinamos experiencia técnica y visión estratégica para desarrollar soluciones que generan un impacto duradero.",

    features: [
      "Innovación",
      "Equipo Experto",
      "Relaciones a Largo Plazo",
    ],

    primaryAction: {
      label: "Conoce Nuestros Servicios",
      href: "/services",
    },

    secondaryAction: {
      label: "Contáctanos",
      href: "/contact",
    },
  },

  pt: {
    badge: "Sobre a SatCore",

    title:
      "Movidos pela inovação. Comprometidos em criar experiências digitais excepcionais.",

    description:
      "A SatCore é uma empresa de tecnologia apaixonada por ajudar organizações a crescer por meio de software sob medida, inteligência artificial e inovação digital. Combinamos experiência técnica e visão estratégica para desenvolver soluções que geram impacto duradouro.",

    features: [
      "Inovação",
      "Equipe Especializada",
      "Parcerias de Longo Prazo",
    ],

    primaryAction: {
      label: "Conheça Nossos Serviços",
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