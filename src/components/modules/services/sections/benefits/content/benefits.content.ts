import type {
  LucideIcon,
} from "lucide-react";

import {
  Zap,
  Shield,
  Rocket,
  Layers,
} from "lucide-react";

import type {
  LanguageCode,
} from "@/types/common.types";

import type {
  BenefitsContent,
} from "../types/benefits.types";

const icons: Record<
  "automation" |
  "security" |
  "scalability" |
  "integration",
  LucideIcon
> = {
  automation: Zap,
  security: Shield,
  scalability: Rocket,
  integration: Layers,
};

export const benefitsContent: Record<
  LanguageCode,
  BenefitsContent
> = {
  es: {
    title:
      "Beneficios Clave",

    description:
      "Más que servicios, construimos ventajas competitivas reales.",

    items: [
      {
        icon: icons.automation,

        title:
          "Automatización",

        description:
          "Reduce procesos manuales y aumenta la eficiencia operativa.",
      },

      {
        icon: icons.security,

        title:
          "Seguridad",

        description:
          "Protección avanzada para aplicaciones, usuarios y datos.",
      },

      {
        icon: icons.scalability,

        title:
          "Escalabilidad",

        description:
          "Soluciones preparadas para crecer junto con tu negocio.",
      },

      {
        icon: icons.integration,

        title:
          "Integración",

        description:
          "Conectamos plataformas y procesos en un único flujo.",
      },
    ],
  },

  en: {
    title:
      "Key Benefits",

    description:
      "More than services, we build real competitive advantages.",

    items: [
      {
        icon: icons.automation,

        title:
          "Automation",

        description:
          "Reduce manual work and improve operational efficiency.",
      },

      {
        icon: icons.security,

        title:
          "Security",

        description:
          "Advanced protection for applications, users, and data.",
      },

      {
        icon: icons.scalability,

        title:
          "Scalability",

        description:
          "Solutions designed to grow alongside your business.",
      },

      {
        icon: icons.integration,

        title:
          "Integration",

        description:
          "We connect platforms and workflows into one seamless system.",
      },
    ],
  },

  pt: {
    title:
      "Principais Benefícios",

    description:
      "Mais do que serviços, construímos vantagens competitivas reais.",

    items: [
      {
        icon: icons.automation,

        title:
          "Automação",

        description:
          "Reduza processos manuais e aumente a eficiência operacional.",
      },

      {
        icon: icons.security,

        title:
          "Segurança",

        description:
          "Proteção avançada para aplicações, usuários e dados.",
      },

      {
        icon: icons.scalability,

        title:
          "Escalabilidade",

        description:
          "Soluções preparadas para crescer junto com o seu negócio.",
      },

      {
        icon: icons.integration,

        title:
          "Integração",

        description:
          "Conectamos plataformas e processos em um único fluxo.",
      },
    ],
  },
};