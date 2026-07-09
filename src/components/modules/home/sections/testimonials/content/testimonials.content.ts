import type {
  TestimonialsContent,
} from "../types/testimonials.types";

export const testimonialsContent = {
  en: {
    header: {
      title:
        "Clients who trust us",

      description:
        "We build long-term relationships by delivering reliable digital solutions that generate real value for every client.",
    },

    items: [
      {
        quote:
          "Excellent service. They optimized our internal processes and significantly improved our team's productivity.",
      },
      {
        quote:
          "We automated our sales workflow and started seeing measurable results within just a few weeks.",
      },
    ],
  },

  es: {
    header: {
      title:
        "Clientes que confían en nosotros",

      description:
        "Construimos relaciones a largo plazo ofreciendo soluciones digitales confiables que generan valor real para cada cliente.",
    },

    items: [
      {
        quote:
          "Excelente servicio. Optimizaron nuestros procesos internos y mejoraron significativamente la productividad del equipo.",
      },
      {
        quote:
          "Automatizamos nuestro proceso de ventas y comenzamos a obtener resultados medibles en pocas semanas.",
      },
    ],
  },

  pt: {
    header: {
      title:
        "Clientes que confiam em nós",

      description:
        "Construímos relacionamentos de longo prazo oferecendo soluções digitais confiáveis que geram valor real para cada cliente.",
    },

    items: [
      {
        quote:
          "Excelente serviço. Eles otimizaram nossos processos internos e aumentaram significativamente a produtividade da equipe.",
      },
      {
        quote:
          "Automatizamos nosso processo de vendas e começamos a obter resultados concretos em poucas semanas.",
      },
    ],
  },
} satisfies Record<
  string,
  TestimonialsContent
>;