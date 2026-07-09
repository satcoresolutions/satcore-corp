import {
  Globe,
  GraduationCap,
  ShieldCheck,
  Cpu,
  BarChart3,
} from "lucide-react";

import type {
  ValueProposalsContent,
} from "../types/value-proposal.types";

export const valueProposalContent = {
  en: {
    header: {
      title: "Value Proposition",

      description:
        "At SatCore, we develop secure, accessible, and practical technology solutions while empowering our clients with the knowledge to use them effectively, grow, and scale.",
    },

    values: [
      {
        title: "Accessible Approach",

        content:
          "Clear communication, solutions tailored for Latin America, affordable pricing, and educational resources included.",

        icon: Globe,
      },

      {
        title: "Integrated Training",

        content:
          "We don't just deliver software—we teach you how to use it through guides, documentation, and ongoing educational support.",

        icon: GraduationCap,
      },

      {
        title: "Security by Design",

        content:
          "Security best practices from day one, risk assessments, and the option for advanced security audits.",

        icon: ShieldCheck,
      },

      {
        title: "Practical Solutions",

        content:
          "Real-world automation, ready-to-use tools, and a focus on functionality rather than aesthetics alone.",

        icon: Cpu,
      },

      {
        title: "Data-Driven Approach",

        content:
          "Decision-making powered by metrics, analytics, and integration with scalable systems.",

        icon: BarChart3,
      },
    ],
  },

  es: {
    header: {
      title: "Propuesta de Valor",

      description:
        "En SatCore desarrollamos soluciones tecnológicas seguras, accesibles y funcionales, mientras enseñamos a nuestros clientes a utilizarlas para crecer y escalar.",
    },

    values: [
      {
        title: "Enfoque Accesible",

        content:
          "Comunicación clara, soluciones adaptadas a Latinoamérica, precios accesibles y material educativo incluido.",

        icon: Globe,
      },

      {
        title: "Formación Integrada",

        content:
          "No solo entregamos software, enseñamos a usarlo con guías, documentación y soporte educativo.",

        icon: GraduationCap,
      },

      {
        title: "Seguridad por Diseño",

        content:
          "Buenas prácticas desde el inicio, análisis de riesgos y posibilidad de auditorías avanzadas.",

        icon: ShieldCheck,
      },

      {
        title: "Soluciones Funcionales",

        content:
          "Automatización real, herramientas listas para usar y enfoque en utilidad, no solo diseño.",

        icon: Cpu,
      },

      {
        title: "Enfoque en Datos",

        content:
          "Decisiones basadas en métricas, analítica e integración con sistemas escalables.",

        icon: BarChart3,
      },
    ],
  },

  pt: {
    header: {
      title: "Proposta de Valor",

      description:
        "Na SatCore desenvolvemos soluções tecnológicas seguras, acessíveis e funcionais, enquanto capacitamos nossos clientes para utilizá-las de forma eficiente, crescer e escalar seus negócios.",
    },

    values: [
      {
        title: "Abordagem Acessível",

        content:
          "Comunicação clara, soluções adaptadas à América Latina, preços acessíveis e materiais educativos incluídos.",

        icon: Globe,
      },

      {
        title: "Capacitação Integrada",

        content:
          "Não apenas entregamos software, mas ensinamos como utilizá-lo por meio de guias, documentação e suporte educacional.",

        icon: GraduationCap,
      },

      {
        title: "Segurança desde a Concepção",

        content:
          "Boas práticas de segurança desde o início, análise de riscos e possibilidade de auditorias avançadas.",

        icon: ShieldCheck,
      },

      {
        title: "Soluções Funcionais",

        content:
          "Automação real, ferramentas prontas para uso e foco na funcionalidade, não apenas no design.",

        icon: Cpu,
      },

      {
        title: "Abordagem Orientada por Dados",

        content:
          "Tomada de decisões baseada em métricas, análises e integração com sistemas escaláveis.",

        icon: BarChart3,
      },
    ],
  },
} as const;