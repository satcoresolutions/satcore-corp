export const heroContent = {
  en: {
    badge: "Frequently Asked Questions",

    title:
      "Answers to the most common questions about our services and processes.",

    description:
      "Find clear answers about our software development, artificial intelligence, cybersecurity, branding, digital products, pricing, timelines, and collaboration process. If you can't find what you're looking for, our team is here to help.",

    features: [
      "Quick Answers",
      "Project Process",
      "Support & Services",
    ],

    primaryAction: {
      label: "Browse FAQs",
      href: "#faq",
    },

    secondaryAction: {
      label: "Contact Us",
      href: "/contact",
    },
  },

  es: {
    badge: "Preguntas Frecuentes",

    title:
      "Respuestas a las preguntas más comunes sobre nuestros servicios y procesos.",

    description:
      "Encuentra respuestas claras sobre desarrollo de software, inteligencia artificial, ciberseguridad, branding, productos digitales, precios, tiempos de entrega y nuestra forma de trabajo. Si no encuentras la información que buscas, estaremos encantados de ayudarte.",

    features: [
      "Respuestas Rápidas",
      "Proceso de Trabajo",
      "Soporte y Servicios",
    ],

    primaryAction: {
      label: "Ver Preguntas",
      href: "#faq",
    },

    secondaryAction: {
      label: "Contáctanos",
      href: "/contact",
    },
  },

  pt: {
    badge: "Perguntas Frequentes",

    title:
      "Respostas para as dúvidas mais comuns sobre nossos serviços e processos.",

    description:
      "Encontre respostas claras sobre desenvolvimento de software, inteligência artificial, cibersegurança, branding, produtos digitais, preços, prazos e nossa forma de trabalhar. Se você não encontrar o que procura, nossa equipe terá prazer em ajudar.",

    features: [
      "Respostas Rápidas",
      "Processo de Trabalho",
      "Suporte e Serviços",
    ],

    primaryAction: {
      label: "Ver Perguntas",
      href: "#faq",
    },

    secondaryAction: {
      label: "Fale Conosco",
      href: "/contact",
    },
  },
} as const;

export type HeroContent = typeof heroContent;
export type HeroLanguage = keyof HeroContent;