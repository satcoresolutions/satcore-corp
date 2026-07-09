// config/cta-config.ts

/**
 * CTA config GLOBAL — solo hrefs que:
 * 1. Pertenecen a un elemento único en el sitio (navbar, footer), o
 * 2. Son el mismo destino sin importar la instancia (service cards → siempre /contact).
 *
 * ⚠️ El href de un Hero o Section específico va en el content file de esa
 * página/componente (ej. servicesHeroContent.primaryAction.href),
 * NO aquí. Cada página tiene su propio destino.
 */
export const ctaConfig = {
  navbar: {
    href: "/contact",
  },

  footer: {
    href: "#contact",
  },

  service: {
    primaryAction: {
      href: "/contact",
    },

    secondaryAction: {
      href: "/contact", // Se construye dinámicamente con WhatsApp
    },
  },
} as const;

export type CtaConfig = typeof ctaConfig;