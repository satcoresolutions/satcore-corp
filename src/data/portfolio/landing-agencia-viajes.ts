import type {
  PortfolioProject,
} from "@/types/portfolio.types";

export const landingAgenciaViajes: PortfolioProject = {
  id:
    "landing-agencia-viajes",

  plan:
    "landing-page-basic",

  category:
    "software",

  service:
    "landing",

  image:
    "/images/projects/landing_page_2.png",

  href:
    "https://erick28hdz.github.io/PaginaRumbo/",

  technologies: [
    "HTML",
    "CSS",
    "JavaScript",
  ],

  featured: true,

  translations: {
    en: {
      title:
        "Travel Agency Landing Page",

      description:
        "Landing page developed for a travel agency to showcase destinations, travel packages, and capture potential customers through an optimized contact form.",

      imageAlt:
        "Travel agency landing page displaying destinations and travel packages.",

      category:
        "Software",
    },

    es: {
      title:
        "Landing Agencia de Viajes",

      description:
        "Landing page desarrollada para una agencia de viajes enfocada en promocionar destinos turísticos, paquetes vacacionales y captar clientes potenciales mediante un formulario optimizado.",

      imageAlt:
        "Landing page de una agencia de viajes mostrando destinos turísticos y paquetes vacacionales.",

      category:
        "Software",
    },

    pt: {
      title:
        "Landing Agência de Viagens",

      description:
        "Landing page desenvolvida para uma agência de viagens com foco na divulgação de destinos turísticos, pacotes de viagem e geração de novos clientes.",

      imageAlt:
        "Landing page de uma agência de viagens exibindo destinos turísticos e pacotes de viagem.",

      category:
        "Software",
    },
  },
};