import {
  Rocket,
  Building2,
  ShoppingCart,
  GraduationCap,
} from "lucide-react";

import type {
  UseCasesContent,
} from "../types/use-cases.types";


export const useCasesContent = {
  en: {
    header: {
      title:
        "Solutions for every type of business",
    },

    items: [
      {
        title:
          "Startups",

        subtitle:
          "Scalable solutions from the ground up",

        icon:
          Rocket,

        active:
          true,
      },
      {
        title:
          "Companies",

        subtitle:
          "Enterprise digital transformation",

        icon:
          Building2,

        active:
          true,
      },
      {
        title:
          "E-commerce",

        subtitle:
          "Sales automation solutions",

        icon:
          ShoppingCart,

        active:
          true,
      },
      {
        title:
          "Education",

        subtitle:
          "Platforms and training",

        icon:
          GraduationCap,

        active:
          true,
      },
    ],
  },


  es: {
    header: {
      title:
        "Soluciones para cada tipo de negocio",
    },

    items: [
      {
        title:
          "Startups",

        subtitle:
          "Soluciones escalables desde cero",

        icon:
          Rocket,

        active:
          true,
      },
      {
        title:
          "Empresas",

        subtitle:
          "Transformación digital empresarial",

        icon:
          Building2,

        active:
          true,
      },
      {
        title:
          "E-commerce",

        subtitle:
          "Automatización de ventas",

        icon:
          ShoppingCart,

        active:
          true,
      },
      {
        title:
          "Educación",

        subtitle:
          "Plataformas y capacitación",

        icon:
          GraduationCap,

        active:
          true,
      },
    ],
  },


  pt: {
    header: {
      title:
        "Soluções para cada tipo de negócio",
    },

    items: [
      {
        title:
          "Startups",

        subtitle:
          "Soluções escaláveis desde o início",

        icon:
          Rocket,

        active:
          true,
      },
      {
        title:
          "Empresas",

        subtitle:
          "Transformação digital empresarial",

        icon:
          Building2,

        active:
          true,
      },
      {
        title:
          "E-commerce",

        subtitle:
          "Automação de vendas",

        icon:
          ShoppingCart,

        active:
          true,
      },
      {
        title:
          "Educação",

        subtitle:
          "Plataformas e capacitação",

        icon:
          GraduationCap,

        active:
          true,
      },
    ],
  },
} satisfies Record<
  string,
  UseCasesContent
>;