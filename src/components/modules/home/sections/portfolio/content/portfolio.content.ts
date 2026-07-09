import type {
  PortfolioContent,
} from "../types/portfolio.types";


export const portfolioContent = {
  en: {
    header: {
      title:
        "Featured projects",

      description:
        "Real solutions that show how we transform ideas into scalable digital products.",
    },


    cta: {
      description:
        "Discover how we apply technology to drive real businesses forward.",

      buttonLabel:
        "Explore full portfolio",

      href:
        "/portfolio",
    },
  },


  es: {
    header: {
      title:
        "Proyectos destacados",

      description:
        "Soluciones reales que reflejan cómo transformamos ideas en productos digitales escalables.",
    },


    cta: {
      description:
        "Descubre cómo aplicamos tecnología para impulsar negocios reales.",

      buttonLabel:
        "Explorar portafolio completo",

      href:
        "/portafolio",
    },
  },


  pt: {
    header: {
      title:
        "Projetos em destaque",

      description:
        "Soluções reais que mostram como transformamos ideias em produtos digitais escaláveis.",
    },


    cta: {
      description:
        "Descubra como aplicamos tecnologia para impulsionar negócios reais.",

      buttonLabel:
        "Explorar portfólio completo",

      href:
        "/portfolio",
    },
  },
} satisfies Record<
  string,
  PortfolioContent
>;