import {
  Lightbulb,
  Wrench,
  Cog,
  Target,
} from "lucide-react";

import type {
  WhySatCoreContent,
} from "../types/why-satcore.types";

export const whySatCoreContent = {
  en: {
    header: {
      title:
        "Why SatCore?",
    },

    items: [
      {
        title:
          "Accessible technology",

        icon:
          Lightbulb,
      },
      {
        title:
          "Tailored solutions",

        icon:
          Wrench,
      },
      {
        title:
          "Real automation",

        icon:
          Cog,
      },
      {
        title:
          "Results-driven approach",

        icon:
          Target,
      },
    ],
  },

  es: {
    header: {
      title:
        "¿Por qué SatCore?",
    },

    items: [
      {
        title:
          "Tecnología accesible",

        icon:
          Lightbulb,
      },
      {
        title:
          "Soluciones a medida",

        icon:
          Wrench,
      },
      {
        title:
          "Automatización real",

        icon:
          Cog,
      },
      {
        title:
          "Enfoque en resultados",

        icon:
          Target,
      },
    ],
  },

  pt: {
    header: {
      title:
        "Por que a SatCore?",
    },

    items: [
      {
        title:
          "Tecnologia acessível",

        icon:
          Lightbulb,
      },
      {
        title:
          "Soluções sob medida",

        icon:
          Wrench,
      },
      {
        title:
          "Automação real",

        icon:
          Cog,
      },
      {
        title:
          "Foco em resultados",

        icon:
          Target,
      },
    ],
  },
} satisfies Record<
  string,
  WhySatCoreContent
>;