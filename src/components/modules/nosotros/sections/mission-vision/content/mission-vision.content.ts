import {
  Eye,
  Target,
} from "lucide-react";

import type {
  MissionVisionContent,
} from "../types/mission-vision.types";

export const missionVisionContent = {
  en: {
    header: {
      title: "Mission & Vision",

      description:
        "Our strategic direction and purpose as a technology company.",
    },

    cards: [
      {
        title: "Mission",

        description:
          "To provide accessible, secure, and tailored technology solutions through software development, automation, technical training, and cybersecurity services, empowering individuals, businesses, and educational institutions to accelerate their digital transformation.",

        icon: Target,
      },

      {
        title: "Vision",

        description:
          "To become a leading provider of integrated technology solutions in Latin America, recognized for innovation, technical excellence, and the ability to create digital solutions that generate lasting, positive impact.",

        icon: Eye,
      },
    ],
  },

  es: {
    header: {
      title: "Misión & Visión",

      description:
        "Nuestra dirección estratégica y propósito como empresa.",
    },

    cards: [
      {
        title: "Misión",

        description:
          "Brindar soluciones tecnológicas accesibles, seguras y personalizadas mediante el desarrollo de software, automatización, formación técnica y servicios de ciberseguridad, ayudando a personas, empresas e instituciones educativas a impulsar su transformación digital.",

        icon: Target,
      },

      {
        title: "Visión",

        description:
          "Ser una empresa referente en soluciones tecnológicas integrales en Latinoamérica, reconocida por la innovación, la excelencia técnica y la capacidad de crear herramientas digitales que generen un impacto positivo y sostenible.",

        icon: Eye,
      },
    ],
  },

  pt: {
    header: {
      title: "Missão & Visão",

      description:
        "Nossa direção estratégica e nosso propósito como empresa de tecnologia.",
    },

    cards: [
      {
        title: "Missão",

        description:
          "Oferecer soluções tecnológicas acessíveis, seguras e personalizadas por meio do desenvolvimento de software, automação, capacitação técnica e serviços de cibersegurança, ajudando pessoas, empresas e instituições de ensino a acelerar sua transformação digital.",

        icon: Target,
      },

      {
        title: "Visão",

        description:
          "Ser uma empresa de referência em soluções tecnológicas integradas na América Latina, reconhecida pela inovação, excelência técnica e pela capacidade de criar soluções digitais que gerem um impacto positivo e duradouro.",

        icon: Eye,
      },
    ],
  },
} as const;