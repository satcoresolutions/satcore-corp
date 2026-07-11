import type {
  ServicePlan,
} from "@/types/plan.types";

export const landingPageBasic: ServicePlan = {
  core: {
    // ────────────────────────────────────
    // Identidad
    // ────────────────────────────────────

    id: "LND-001",

    slug: "basic-landing",

    // ────────────────────────────────────
    // Comercial (no traducible)
    // ────────────────────────────────────

    complexity: "⭐ (1/5)",

    price: "$300 - $400 USD",

    pricingType: "fixed",

    automationLevel: "low",

    // ────────────────────────────────────
    // Técnico
    // ────────────────────────────────────

    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],

    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Google Analytics",
    ],

    integrations: [
      "Google Analytics",
      "Google Sheets",
      "Resend",
    ],

    // ────────────────────────────────────
    // Multimedia
    // ────────────────────────────────────

    heroImage:
      "/images/services/software/hero/hero-lp.png",

    image:
      "/images/services/software/hero/hero-lp.png",
  },

  translations: {
    es: {
      name: "Landing Page Básica",

      title:
        "Landing Page Básica",

      level: "🟢 Básico",

      category:
        "Landing Pages",

      description:
        "Landing page optimizada para conversión enfocada en campañas específicas, captación de leads o validación de ideas.",

      time: "1-2 semanas",

      imageAlt:
        "Landing page básica para lanzamiento de producto",

      target:
        "Emprendedores, startups y negocios que necesitan validar productos o captar leads rápidamente.",

      support:
        "7 días soporte post-entrega",

      useCases: [
        "Lanzamiento de producto",

        "Captación de leads",

        "Campañas publicitarias",

        "Eventos o webinars",
      ],

      includes: [
        "Diseño UX/UI enfocado en conversión",

        "Formulario de captación",

        "Optimización básica SEO",

        "Configuración inicial",
      ],

      notIncludes: [
        "Integraciones complejas con CRM",

        "Automatizaciones avanzadas",
      ],

      features: [
        "Call To Actions (CTAs)",

        "Formulario de contacto",

        "Diseño responsive",

        "Carga optimizada",
      ],

      deliverables: [
        "Landing page funcional",

        "Código fuente",

        "Guía básica de uso",
      ],

      specifications: [],

      benefits: [
        {
          title:
            "Entrega rápida",

          description:
            "Lista en 1-2 semanas, ideal para validar una idea sin grandes inversiones.",
        },

        {
          title:
            "Costo accesible",

          description:
            "La opción más económica para empezar a captar leads desde ya.",
        },

        {
          title:
            "Sin complicaciones",

          description:
            "Configuración simple, lista para recibir tráfico de campañas pagas.",
        },
      ],

      process: [
        {
          title:
            "Brief inicial",

          description:
            "Definimos objetivo, mensaje principal y audiencia.",
        },

        {
          title:
            "Diseño express",

          description:
            "Plantilla optimizada para conversión, adaptada a tu marca.",
        },

        {
          title:
            "Publicación",

          description:
            "Despliegue en producción y conexión del formulario.",
        },
      ],

      faq: [
        {
          question:
            "¿Puedo pedir cambios después de la entrega?",

          answer:
            "Incluye una ronda de ajustes menores dentro de los 7 días de soporte post-entrega.",
        },

        {
          question:
            "¿Sirve para campañas de ads?",

          answer:
            "Sí, está optimizada para recibir tráfico pago y medir conversión desde el día uno.",
        },

        {
          question:
            "¿Incluye integración con CRM?",

          answer:
            "No en este plan. Si necesitas conectar HubSpot, Zoho u otro CRM, te recomendamos el plan Avanzado.",
        },
      ],
    },
    en: {
      name: "Basic Landing Page",

      title:
        "Basic Landing Page",

      level: "🟢 Basic",

      category:
        "Landing Pages",

      description:
        "Conversion-optimized landing page designed for marketing campaigns, lead generation, and idea validation.",

      imageAlt:
        "Basic landing page for product launch",

      time: "1-2 weeks",

      target:
        "Entrepreneurs, startups, and businesses looking to validate products or generate leads quickly.",

      support:
        "7 days post-delivery support",

      useCases: [
        "Product launches",

        "Lead generation",

        "Advertising campaigns",

        "Events and webinars",
      ],

      includes: [
        "Conversion-focused UX/UI design",

        "Lead capture form",

        "Basic SEO optimization",

        "Initial setup",
      ],

      notIncludes: [
        "Complex CRM integrations",

        "Advanced automations",
      ],

      features: [
        "Call-to-action (CTA) sections",

        "Contact form",

        "Responsive design",

        "Optimized performance",
      ],

      deliverables: [
        "Fully functional landing page",

        "Source code",

        "Basic user guide",
      ],

      specifications: [],

      benefits: [
        {
          title:
            "Fast delivery",

          description:
            "Ready within 1–2 weeks, making it ideal for validating ideas without major investments.",
        },

        {
          title:
            "Affordable investment",

          description:
            "Our most cost-effective solution for generating leads quickly.",
        },

        {
          title:
            "Simple and efficient",

          description:
            "Easy setup that's ready to support paid advertising campaigns.",
        },
      ],

      process: [
        {
          title:
            "Discovery session",

          description:
            "We define your goals, key message, and target audience.",
        },

        {
          title:
            "Rapid design",

          description:
            "We create a conversion-focused layout tailored to your brand.",
        },

        {
          title:
            "Launch",

          description:
            "We deploy your landing page and connect the lead capture form.",
        },
      ],

      faq: [
        {
          question:
            "Can I request changes after delivery?",

          answer:
            "Yes. This plan includes one round of minor revisions during the 7-day post-delivery support period.",
        },

        {
          question:
            "Is it suitable for advertising campaigns?",

          answer:
            "Absolutely. It's optimized for paid traffic and conversion tracking from day one.",
        },

        {
          question:
            "Does it include CRM integration?",

          answer:
            "No. If you need integrations with HubSpot, Zoho, or another CRM, we recommend our Advanced plan.",
        },
      ],
    },
    pt: {
      name: "Landing Page Básica",

      title:
        "Landing Page Básica",

      level: "🟢 Básico",

      category:
        "Landing Pages",

      description:
        "Landing page otimizada para conversão, ideal para campanhas de marketing, geração de leads e validação de ideias.",

      imageAlt:
        "Landing page básica para lançamento de produto",

      time: "1-2 semanas",

      target:
        "Empreendedores, startups e empresas que precisam validar produtos ou captar leads rapidamente.",

      support:
        "7 dias de suporte pós-entrega",

      useCases: [
        "Lançamento de produtos",

        "Geração de leads",

        "Campanhas publicitárias",

        "Eventos e webinars",
      ],

      includes: [
        "Design UX/UI focado em conversão",

        "Formulário de captura de leads",

        "Otimização básica para SEO",

        "Configuração inicial",
      ],

      notIncludes: [
        "Integrações complexas com CRM",

        "Automações avançadas",
      ],

      features: [
        "Seções com Call-to-Action (CTA)",

        "Formulário de contato",

        "Design responsivo",

        "Desempenho otimizado",
      ],

      deliverables: [
        "Landing page totalmente funcional",

        "Código-fonte",

        "Guia básico de utilização",
      ],

      specifications: [],

      benefits: [
        {
          title:
            "Entrega rápida",

          description:
            "Pronta em 1 a 2 semanas, ideal para validar ideias sem grandes investimentos.",
        },

        {
          title:
            "Investimento acessível",

          description:
            "Nossa solução mais econômica para começar a gerar leads rapidamente.",
        },

        {
          title:
            "Simples e eficiente",

          description:
            "Configuração descomplicada, pronta para receber tráfego de campanhas pagas.",
        },
      ],

      process: [
        {
          title:
            "Briefing inicial",

          description:
            "Definimos os objetivos, a mensagem principal e o público-alvo.",
        },

        {
          title:
            "Design rápido",

          description:
            "Criamos um layout otimizado para conversão e alinhado à identidade da sua marca.",
        },

        {
          title:
            "Publicação",

          description:
            "Publicamos a landing page e conectamos o formulário de captura.",
        },
      ],

      faq: [
        {
          question:
            "Posso solicitar alterações após a entrega?",

          answer:
            "Sim. Este plano inclui uma rodada de pequenos ajustes durante os 7 dias de suporte após a entrega.",
        },

        {
          question:
            "Ela é indicada para campanhas de anúncios?",

          answer:
            "Sim. A landing page é otimizada para tráfego pago e monitoramento de conversões desde o primeiro dia.",
        },

        {
          question:
            "Inclui integração com CRM?",

          answer:
            "Não. Caso precise integrar HubSpot, Zoho ou outro CRM, recomendamos o plano Avançado.",
        },
      ],
    },
  },
};