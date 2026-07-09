// config/cta-content.ts

/**
 * CTA content GLOBAL — solo para elementos que:
 * 1. Existen una única vez en todo el sitio (navbar, footer), o
 * 2. Se repiten en múltiples instancias con el MISMO texto siempre (service cards).
 *
 * ⚠️ NO metas aquí el CTA de un Hero o Section específico de una página:
 * cada página tiene su propio texto y debe vivir en su propio content file
 * (ej. services-hero.content.ts, products-hero.content.ts).
 */
export const ctaContent = {
  en: {
    navbar: {
      label: "Contact",
    },

    footer: {
      label: "Let's Talk",
    },

    service: {
      primaryAction: {
        label: "Get a Quote",
      },

      secondaryAction: {
        label: "Hire via WhatsApp",
      },

      whatsapp: {
        message:
          "Hello! I'm interested in hiring the {service} service. I'd like to get started with the process.",
      },
    },
  },

  es: {
    navbar: {
      label: "Contacto",
    },

    footer: {
      label: "Hablemos",
    },

    service: {
      primaryAction: {
        label: "Solicitar Cotización",
      },

      secondaryAction: {
        label: "Contratar por WhatsApp",
      },

      whatsapp: {
        message:
          "¡Hola! Estoy interesado en contratar el servicio de {service}. Me gustaría iniciar el proceso.",
      },
    },
  },

  pt: {
    navbar: {
      label: "Contato",
    },

    footer: {
      label: "Vamos Conversar",
    },

    service: {
      primaryAction: {
        label: "Solicitar Orçamento",
      },

      secondaryAction: {
        label: "Contratar pelo WhatsApp",
      },

      whatsapp: {
        message:
          "Olá! Tenho interesse em contratar o serviço de {service}. Gostaria de iniciar o processo.",
      },
    },
  },
} as const;

export type CtaContent = typeof ctaContent;
export type CtaLanguage = keyof CtaContent;