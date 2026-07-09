export const heroContent = {
  en: {
    badge: "Contact SatCore",

    title:
      "Let's discuss your next digital project.",

    description:
      "Whether you're planning a new platform, modernizing an existing system, or exploring artificial intelligence, our team is ready to help you build scalable and impactful solutions.",

    features: [
      "Free Consultation",
      "Custom Solutions",
      "Fast Response",
    ],

    primaryAction: {
      label: "Send a Message",
      href: "#contact",
    },

    secondaryAction: {
      label: "Explore Services",
      href: "/services",
    },
  },

  es: {
    badge: "Contáctanos",

    title:
      "Hablemos sobre tu próximo proyecto digital.",

    description:
      "Ya sea que necesites desarrollar una nueva plataforma, modernizar un sistema existente o implementar inteligencia artificial, nuestro equipo está listo para ayudarte a crear soluciones escalables y de alto impacto.",

    features: [
      "Consultoría Gratuita",
      "Soluciones a la Medida",
      "Respuesta Rápida",
    ],

    primaryAction: {
      label: "Enviar Mensaje",
      href: "#contact",
    },

    secondaryAction: {
      label: "Explorar Servicios",
      href: "/services",
    },
  },

  pt: {
    badge: "Fale Conosco",

    title:
      "Vamos conversar sobre o seu próximo projeto digital.",

    description:
      "Se você deseja desenvolver uma nova plataforma, modernizar um sistema existente ou implementar inteligência artificial, nossa equipe está pronta para criar soluções escaláveis e de alto impacto.",

    features: [
      "Consultoria Gratuita",
      "Soluções Sob Medida",
      "Resposta Rápida",
    ],

    primaryAction: {
      label: "Enviar Mensagem",
      href: "#contact",
    },

    secondaryAction: {
      label: "Explorar Serviços",
      href: "/services",
    },
  },
} as const;

export type HeroContent = typeof heroContent;
export type HeroLanguage = keyof HeroContent;