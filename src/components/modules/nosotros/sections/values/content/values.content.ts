import {
  Rocket,
  Handshake,
  Globe,
  ShieldCheck,
  BookOpen,
  Briefcase,
} from "lucide-react";

import type {
  ValuesContent,
} from "../types/values.types";

export const valuesContent = {
  en: {
    header: {
      title: "Our Philosophy",

      description:
        "The principles that guide every solution we build.",
    },

    values: [
      {
        title: "Continuous Innovation",

        subtitle:
          "We constantly seek new ways to improve, innovate, and evolve.",

        icon: Rocket,
      },

      {
        title: "Professional Integrity",

        subtitle:
          "We act with responsibility, transparency, and commitment in everything we do.",

        icon: Handshake,
      },

      {
        title: "Technology Accessibility",

        subtitle:
          "We create technology solutions that are accessible and easy to adopt.",

        icon: Globe,
      },

      {
        title: "Information Security",

        subtitle:
          "We protect data as one of the most valuable assets of every organization.",

        icon: ShieldCheck,
      },

      {
        title: "Continuous Learning",

        subtitle:
          "We learn, teach, and continuously grow alongside technology.",

        icon: BookOpen,
      },

      {
        title: "Client Commitment",

        subtitle:
          "We focus on delivering measurable results and long-term value.",

        icon: Briefcase,
      },
    ],
  },

  es: {
    header: {
      title: "Nuestra Filosofía",

      description:
        "Principios que guían cada solución que desarrollamos.",
    },

    values: [
      {
        title: "Innovación continua",

        subtitle:
          "Buscamos constantemente nuevas formas de mejorar y evolucionar.",

        icon: Rocket,
      },

      {
        title: "Ética profesional",

        subtitle:
          "Actuamos con responsabilidad, transparencia y compromiso.",

        icon: Handshake,
      },

      {
        title: "Accesibilidad tecnológica",

        subtitle:
          "Creamos soluciones para todos, sin barreras técnicas.",

        icon: Globe,
      },

      {
        title: "Seguridad de la información",

        subtitle:
          "Protegemos los datos como un activo crítico.",

        icon: ShieldCheck,
      },

      {
        title: "Formación constante",

        subtitle:
          "Aprendemos, enseñamos y evolucionamos continuamente.",

        icon: BookOpen,
      },

      {
        title: "Compromiso con el cliente",

        subtitle:
          "Nos enfocamos en resultados reales y medibles.",

        icon: Briefcase,
      },
    ],
  },

  pt: {
    header: {
      title: "Nossa Filosofia",

      description:
        "Os princípios que orientam cada solução que desenvolvemos.",
    },

    values: [
      {
        title: "Inovação Contínua",

        subtitle:
          "Buscamos constantemente novas maneiras de melhorar, inovar e evoluir.",

        icon: Rocket,
      },

      {
        title: "Ética Profissional",

        subtitle:
          "Atuamos com responsabilidade, transparência e comprometimento.",

        icon: Handshake,
      },

      {
        title: "Acessibilidade Tecnológica",

        subtitle:
          "Criamos soluções tecnológicas acessíveis e fáceis de utilizar.",

        icon: Globe,
      },

      {
        title: "Segurança da Informação",

        subtitle:
          "Protegemos os dados como um dos ativos mais importantes de cada organização.",

        icon: ShieldCheck,
      },

      {
        title: "Aprendizado Contínuo",

        subtitle:
          "Aprendemos, ensinamos e evoluímos continuamente junto com a tecnologia.",

        icon: BookOpen,
      },

      {
        title: "Compromisso com o Cliente",

        subtitle:
          "Nos concentramos em entregar resultados reais, mensuráveis e de longo prazo.",

        icon: Briefcase,
      },
    ],
  },
} as const;