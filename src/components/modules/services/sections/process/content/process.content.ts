import type {
  ProcessStep,
} from "../types/process.types";

export const processContent = {
  es: {
    title:
      "Nuestro Proceso",

    description:
      "Un flujo estructurado diseñado para entregar resultados claros, medibles y escalables.",

    steps: <ProcessStep[]>[
      {
        title: "Diagnóstico",

        description:
          "Analizamos tu negocio, procesos y necesidades tecnológicas.",
      },

      {
        title: "Arquitectura",

        description:
          "Diseñamos una solución escalable, segura y preparada para crecer.",
      },

      {
        title: "Desarrollo",

        description:
          "Construimos la solución utilizando tecnologías modernas y eficientes.",
      },

      {
        title: "Implementación",

        description:
          "Desplegamos e integramos la solución dentro de tu operación.",
      },

      {
        title: "Soporte y Evolución",

        description:
          "Realizamos mantenimiento, optimización y mejoras continuas.",
      },
    ],
  },

  en: {
    title:
      "Our Process",

    description:
      "A structured workflow designed to deliver clear, measurable, and scalable results.",

    steps: <ProcessStep[]>[
      {
        title: "Discovery",

        description:
          "We analyze your business, processes, and technology requirements.",
      },

      {
        title: "Architecture",

        description:
          "We design a secure, scalable solution built for future growth.",
      },

      {
        title: "Development",

        description:
          "We build the solution using modern, reliable, and efficient technologies.",
      },

      {
        title: "Deployment",

        description:
          "We deploy and integrate the solution into your business operations.",
      },

      {
        title: "Support & Evolution",

        description:
          "We provide maintenance, optimization, and continuous improvements.",
      },
    ],
  },

  pt: {
    title:
      "Nosso Processo",

    description:
      "Um fluxo estruturado projetado para entregar resultados claros, mensuráveis e escaláveis.",

    steps: <ProcessStep[]>[
      {
        title: "Diagnóstico",

        description:
          "Analisamos o seu negócio, processos e necessidades tecnológicas.",
      },

      {
        title: "Arquitetura",

        description:
          "Projetamos uma solução segura, escalável e preparada para crescer.",
      },

      {
        title: "Desenvolvimento",

        description:
          "Construímos a solução utilizando tecnologias modernas e eficientes.",
      },

      {
        title: "Implementação",

        description:
          "Implantamos e integramos a solução às operações da sua empresa.",
      },

      {
        title: "Suporte e Evolução",

        description:
          "Realizamos manutenção, otimizações e melhorias contínuas.",
      },
    ],
  },
} as const;