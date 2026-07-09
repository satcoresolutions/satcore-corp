import { Sparkles } from "lucide-react";

import type {
  HistoryContent,
} from "../types/history.types";

export const historyContent = {
  en: {
    title: "Our Story",

    paragraphs: [
      "SatCore Solutions was founded with the mission of bridging the gap between advanced technology and the real needs of individuals, entrepreneurs, and businesses.",

      "From the beginning, the company has focused on developing practical digital solutions by combining software development, automation, and applied intelligence to optimize processes, improve productivity, and strengthen information security.",

      "Today, SatCore Solutions continues to evolve as a comprehensive technology ecosystem, driven by scalability, continuous innovation, and the creation of impactful digital solutions that deliver real value.",
    ],

    highlight: {
      title: "Technology-Driven Approach",

      description:
        "We build scalable, secure, and results-oriented digital solutions by combining software engineering, automation, and cybersecurity.",

      icon: Sparkles,
    },
  },

  es: {
    title: "Nuestra Historia",

    paragraphs: [
      "SatCore Solutions nace como una iniciativa enfocada en cerrar la brecha entre la tecnología avanzada y las necesidades reales de personas, emprendedores y empresas.",

      "Desde sus inicios, la empresa se ha orientado al desarrollo de soluciones digitales funcionales, combinando software, automatización e inteligencia aplicada para optimizar procesos, mejorar la productividad y fortalecer la seguridad de la información.",

      "Hoy, SatCore Solutions evoluciona como un ecosistema tecnológico integral, con enfoque en la escalabilidad, la innovación constante y la creación de soluciones reales que generan impacto en el mundo digital.",
    ],

    highlight: {
      title: "Enfoque Tecnológico",

      description:
        "Desarrollamos soluciones digitales escalables, seguras y orientadas a resultados reales, combinando software, automatización y ciberseguridad.",

      icon: Sparkles,
    },
  },

  pt: {
    title: "Nossa História",

    paragraphs: [
      "A SatCore Solutions nasceu com o propósito de reduzir a distância entre a tecnologia avançada e as necessidades reais de pessoas, empreendedores e empresas.",

      "Desde o início, a empresa dedica-se ao desenvolvimento de soluções digitais funcionais, combinando software, automação e inteligência aplicada para otimizar processos, aumentar a produtividade e fortalecer a segurança da informação.",

      "Hoje, a SatCore Solutions evolui como um ecossistema tecnológico completo, com foco em escalabilidade, inovação contínua e na criação de soluções digitais que geram impacto e resultados reais.",
    ],

    highlight: {
      title: "Abordagem Tecnológica",

      description:
        "Desenvolvemos soluções digitais escaláveis, seguras e orientadas a resultados, combinando engenharia de software, automação e cibersegurança.",

      icon: Sparkles,
    },
  },
} satisfies Record<string, HistoryContent>;