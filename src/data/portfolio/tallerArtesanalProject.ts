import type {
  PortfolioProject,
} from "@/types/portfolio.types";

export const tallerArtesanalProject: PortfolioProject = {
  id:
    "taller-artesanal-ecommerce",

  plan:
    "basic-ecommerce",

  category:
    "software",

  service:
    "e-commerce",

  image:
    "/images/projects/taller_artesanal.png",

  href:
    "https://www.taller-artesanal-ag.shop/",

  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Prisma",
    "Stripe",
    "Google Analytics",
  ],

  featured: true,

  translations: {
    en: {
      title:
        "Taller Artesanal ArteGestión - E-commerce",

      description:
        "Handcrafted artisan jewelry and macramé e-commerce platform. Features a dynamic product catalog, local cart state persistence, seamless checkout integration, and automated order notifications.",

      imageAlt:
        "Taller Artesanal ArteGestión online store and artisan jewelry catalog preview.",

      category:
        "Software",
    },

    es: {
      title:
        "Taller Artesanal ArteGestión - E-commerce",

      description:
        "Plataforma de comercio electrónico especializada en joyería artesanal y macramé. Cuenta con catálogo dinámico de productos, persistencia de carrito local, pasarela de pago integrada y notificaciones automáticas de pedidos.",

      imageAlt:
        "Vista previa de la tienda online y catálogo de joyería artesanal Taller Artesanal ArteGestión.",

      category:
        "Software",
    },

    pt: {
      title:
        "Taller Artesanal ArteGestión - E-commerce",

      description:
        "Plataforma de comércio eletrônico especializada em joias artesanais e macramê. Possui catálogo dinâmico de produtos, persistência de carrinho local, integração de pagamento e notificações automáticas de pedidos.",

      imageAlt:
        "Pré-visualização da loja online e catálogo de joias artesanais do Taller Artesanal ArteGestión.",

      category:
        "Software",
    },
  },
};