import {
  GraduationCap,
  UserX,
  RefreshCw,
  Globe,
  Layers,
  DollarSign,
  ShieldAlert,
  Rocket,
} from "lucide-react";

import type {
  ProblemsContent,
} from "../types/problems.types";

export const problemsContent = {
  en: {
    header: {
      title: "Problems We Solve",

      description:
        "We identify the most common technology challenges businesses face and transform them into scalable digital solutions.",
    },

    problems: [
      {
        problem: "Lack of technical knowledge",

        solution:
          "Hands-on training combined with ready-to-use solutions",

        impact:
          "Clients can confidently manage their systems without relying on third parties",

        icon: GraduationCap,
      },

      {
        problem: "Dependence on external developers",

        solution:
          "Well-documented and easy-to-maintain systems",

        impact:
          "Complete ownership and autonomy over your digital product",

        icon: UserX,
      },

      {
        problem: "Manual and inefficient processes",

        solution:
          "Automation of repetitive tasks and internal workflows",

        impact:
          "Time savings and fewer human errors",

        icon: RefreshCw,
      },

      {
        problem: "Limited digital presence",

        solution:
          "Professional, conversion-focused web development",

        impact:
          "Greater online visibility and increased lead generation",

        icon: Globe,
      },

      {
        problem: "Disconnected tools",

        solution:
          "System integration into a unified digital ecosystem",

        impact:
          "Better control and centralized information management",

        icon: Layers,
      },

      {
        problem: "High software costs",

        solution:
          "Cost-effective custom solutions tailored to your needs",

        impact:
          "Smarter investment with long-term scalability",

        icon: DollarSign,
      },

      {
        problem: "Security risks",

        solution:
          "Security best practices built into the development process",

        impact:
          "Reduced exposure to critical vulnerabilities",

        icon: ShieldAlert,
      },

      {
        problem: "Limited scalability",

        solution:
          "Scalable architectures designed for future growth",

        impact:
          "Your system grows alongside your business without rebuilding everything",

        icon: Rocket,
      },
    ],
  },

  es: {
    header: {
      title: "Problemas que resolvemos",

      description:
        "Identificamos los principales bloqueos tecnológicos de las empresas y los transformamos en soluciones digitales escalables.",
    },

    problems: [
      {
        problem: "Falta de conocimientos técnicos",

        solution:
          "Formación práctica + soluciones listas para usar",

        impact:
          "El cliente puede operar su sistema sin depender de terceros",

        icon: GraduationCap,
      },

      {
        problem: "Dependencia de desarrolladores externos",

        solution:
          "Sistemas documentados y fáciles de mantener",

        impact:
          "Autonomía total del cliente sobre su producto digital",

        icon: UserX,
      },

      {
        problem: "Procesos manuales e ineficientes",

        solution:
          "Automatización de tareas repetitivas y flujos internos",

        impact:
          "Ahorro de tiempo y reducción de errores humanos",

        icon: RefreshCw,
      },

      {
        problem: "Presencia digital inexistente",

        solution:
          "Desarrollo web profesional y optimizado para conversión",

        impact:
          "Mayor visibilidad y generación de clientes potenciales",

        icon: Globe,
      },

      {
        problem: "Herramientas desorganizadas",

        solution:
          "Integración de sistemas en un solo ecosistema digital",

        impact:
          "Mejor control y centralización de la información",

        icon: Layers,
      },

      {
        problem: "Costos altos de software",

        solution:
          "Soluciones a medida optimizadas en costo-beneficio",

        impact:
          "Inversión más inteligente y escalable",

        icon: DollarSign,
      },

      {
        problem: "Riesgos de seguridad",

        solution:
          "Buenas prácticas de seguridad desde el desarrollo",

        impact:
          "Reducción de vulnerabilidades críticas",

        icon: ShieldAlert,
      },

      {
        problem: "Falta de escalabilidad",

        solution:
          "Arquitecturas preparadas para el crecimiento",

        impact:
          "El sistema crece junto al negocio sin necesidad de reconstruirlo",

        icon: Rocket,
      },
    ],
  },

  pt: {
    header: {
      title: "Problemas que Resolvemos",

      description:
        "Identificamos os principais desafios tecnológicos das empresas e os transformamos em soluções digitais escaláveis.",
    },

    problems: [
      {
        problem: "Falta de conhecimento técnico",

        solution:
          "Capacitação prática aliada a soluções prontas para uso",

        impact:
          "O cliente consegue operar seu sistema sem depender de terceiros",

        icon: GraduationCap,
      },

      {
        problem: "Dependência de desenvolvedores externos",

        solution:
          "Sistemas bem documentados e fáceis de manter",

        impact:
          "Autonomia total sobre o seu produto digital",

        icon: UserX,
      },

      {
        problem: "Processos manuais e ineficientes",

        solution:
          "Automação de tarefas repetitivas e fluxos internos",

        impact:
          "Economia de tempo e redução de erros humanos",

        icon: RefreshCw,
      },

      {
        problem: "Presença digital limitada",

        solution:
          "Desenvolvimento web profissional e otimizado para conversão",

        impact:
          "Maior visibilidade online e geração de novos clientes",

        icon: Globe,
      },

      {
        problem: "Ferramentas desorganizadas",

        solution:
          "Integração de sistemas em um único ecossistema digital",

        impact:
          "Melhor controle e centralização das informações",

        icon: Layers,
      },

      {
        problem: "Altos custos com software",

        solution:
          "Soluções personalizadas com excelente custo-benefício",

        impact:
          "Investimento mais inteligente e escalável",

        icon: DollarSign,
      },

      {
        problem: "Riscos de segurança",

        solution:
          "Boas práticas de segurança incorporadas desde o desenvolvimento",

        impact:
          "Redução das vulnerabilidades críticas",

        icon: ShieldAlert,
      },

      {
        problem: "Falta de escalabilidade",

        solution:
          "Arquiteturas preparadas para o crescimento",

        impact:
          "O sistema cresce junto com a empresa sem precisar ser refeito",

        icon: Rocket,
      },
    ],
  },
} as const;