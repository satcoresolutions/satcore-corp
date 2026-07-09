import {
  BookOpen,
  Code2,
  Bot,
  ShieldCheck,
  Megaphone,
} from "lucide-react";

import type {
  PillarsContent,
} from "../types/pillars.types";

export const pillarsContent = {
  en: {
    header: {
      title: "Our Pillars",

      description:
        "We build complete technology solutions through an ecosystem of specialized services.",
    },

    pillars: [
      {
        title: "Academy",

        description:
          "Technology education built around real-world projects.",

        icon: BookOpen,

        active: true,
      },

      {
        title: "Development",

        description:
          "Custom websites and application development.",

        icon: Code2,

        active: true,
      },

      {
        title: "Automation",

        description:
          "Intelligent systems and AI-powered automation.",

        icon: Bot,

        active: true,
      },

      {
        title: "Cybersecurity",

        description:
          "Security audits, penetration testing, and digital protection.",

        icon: ShieldCheck,

        active: true,
      },

      {
        title: "Marketing",

        description:
          "Strategic branding and digital content creation.",

        icon: Megaphone,

        active: true,
      },
    ],
  },

  es: {
    header: {
      title: "Nuestros Pilares",

      description:
        "Construimos soluciones tecnológicas completas a través de un ecosistema de servicios especializados.",
    },

    pillars: [
      {
        title: "Estudio",

        description:
          "Formación tecnológica basada en proyectos reales.",

        icon: BookOpen,

        active: true,
      },

      {
        title: "Desarrollo",

        description:
          "Creación de sitios web y aplicaciones.",

        icon: Code2,

        active: true,
      },

      {
        title: "Automatización",

        description:
          "Sistemas inteligentes y agentes automatizados.",

        icon: Bot,

        active: true,
      },

      {
        title: "Seguridad",

        description:
          "Auditorías, pentesting y protección digital.",

        icon: ShieldCheck,

        active: true,
      },

      {
        title: "Marketing",

        description:
          "Branding estratégico y contenido digital.",

        icon: Megaphone,

        active: true,
      },
    ],
  },

  pt: {
    header: {
      title: "Nossos Pilares",

      description:
        "Construímos soluções tecnológicas completas por meio de um ecossistema de serviços especializados.",
    },

    pillars: [
      {
        title: "Academia",

        description:
          "Formação em tecnologia baseada em projetos reais.",

        icon: BookOpen,

        active: true,
      },

      {
        title: "Desenvolvimento",

        description:
          "Desenvolvimento de sites e aplicações personalizadas.",

        icon: Code2,

        active: true,
      },

      {
        title: "Automação",

        description:
          "Sistemas inteligentes e automação com IA.",

        icon: Bot,

        active: true,
      },

      {
        title: "Cibersegurança",

        description:
          "Auditorias, testes de invasão e proteção digital.",

        icon: ShieldCheck,

        active: true,
      },

      {
        title: "Marketing",

        description:
          "Branding estratégico e criação de conteúdo digital.",

        icon: Megaphone,

        active: true,
      },
    ],
  },
} as const;