import type {
  ServiceDetail,
} from "@/types/service-detail.types";

import {
  softwarePlans,
} from "@/data/plans/software/landing-pages";

export const marketplacesDetail: ServiceDetail = {
  core: {
    id: "SRV-MKT",

    slug: "marketplaces",

    name: "Marketplaces",

    pillar: "software",

    icon: "shopping-bag",

    heroImage: "/images/services/software/hero/hero.png",

    plans: [],
  },

  translations: {
    es: {
      title: "Marketplaces",

      subtitle: "Plataformas multi-vendedor",

      description: "Desarrollamos marketplaces que conectan múltiples vendedores con compradores en una sola plataforma. Creamos espacios donde cualquiera puede abrir su tienda y vender productos o servicios.",

      overview: {
        title: "¿Qué es un Marketplace?",

        description: "Un marketplace es una plataforma digital que permite que múltiples vendedores ofrezcan sus productos o servicios a compradores en un solo lugar. El operador del marketplace facilita la transacción y puede ganar comisiones.",

        image: "/images/subservices/software/marketplaces.png",

        imageAlt: "Marketplace multi-vendedor",

        useCases: [
          "Mercados de productos",
          "Mercados de servicios",
          "Plataformas de subastas",
          "Marketplaces especializados",
          "Plataformas freelance",
        ],
      },

      workflow: {
        badge: "Metodología",

        title: "¿Cómo desarrollamos tu Marketplace?",

        description: "Creamos marketplaces robustos y escalables.",

        steps: [
          {
            title: "Planificación",
            description: "Definimos el modelo de negocio y funcionalidades."
          },
          {
            title: "Diseño",
            description: "Diseñamos la experiencia para vendedores y compradores."
          },
          {
            title: "Desarrollo",
            description: "Implementamos la plataforma con todas las funcionalidades."
          },
          {
            title: "Sistema de Pagos",
            description: "Configuramos pagos y split de comisiones."
          },
          {
            title: "Lanzamiento",
            description: "Publicamos y damos soporte inicial."
          },
        ],
      },

      useCases: {
        title: "¿Cuándo necesitas un Marketplace?",

        description: "Los marketplaces son ideales para crear ecosistemas de compra y venta.",

        useCases: [
          {
            title: "Escala",
            description: "Permite que múltiples vendedores vendan sin que你是不是."
          },
          {
            title: "Comisiones",
            description: "Gana una comisión por cada transacción."
          },
          {
            title: "Inventario",
            description: "Miles de productos sin gestionar inventario propio."
          },
          {
            title: "Audiencia",
            description: "Accede a una base de clientes existente."
          },
          {
            title: "Datos",
            description: "Recolecta datos valiosos sobre preferencias de compra."
          },
          {
            title: "Trust",
            description: "Construye confianza con sistemas de reseñas."
          },
        ],
      },

      features: {
        title: "¿Qué incluye nuestro servicio?",

        description: "Creamos marketplaces completos con todas las herramientas necesarias.",

        features: [
          {
            title: "Tiendas de Vendedores",
            description: "Cada vendedor tiene su propia tienda personalizable."
          },
          {
            title: "Catálogo Centralizado",
            description: "Todos los productos en una búsqueda unificada."
          },
          {
            title: "Carrito Compartido",
            description: "Compra de múltiples vendedores en una sola orden."
          },
          {
            title: "Sistema de Pagos",
            description: "Pagos con distribución automática de comisiones."
          },
          {
            title: "Reseñas",
            description: "Sistema de ratings para vendedores y productos."
          },
          {
            title: "Mensajería",
            description: "Comunicación entre compradores y vendedores."
          },
          {
            title: "Panel de Admin",
            description: "Gestión centralizada de vendedores y transacciones."
          },
          {
            title: "Cumplimiento",
            description: "Herramientas para gestionar envíos y devoluciones."
          },
        ],
      },

      plansSection: {
        title: "Elige el plan ideal",

        description: "Todos nuestros planes utilizan la misma metodología de trabajo. La diferencia está en el nivel de personalización, funcionalidades e integraciones incluidas en cada uno.",
      },

      seo: {
        title: "Marketplaces | SatCore Solutions",

        description: "Desarrollo de marketplaces multi-vendedor para conectar compradores y vendedores.",
        keywords: [
          "marketplace",
          "multi-vendedor",
          "plataforma de ventas",
          "e-commerce",
          "nextjs",
        ],
      },
    },

    en: {
      title: "Marketplaces",

      subtitle: "Multi-vendor platforms",

      description: "We develop marketplaces that connect multiple vendors with buyers in a single platform. We create spaces where anyone can open their store and sell products or services.",

      overview: {
        title: "What is a Marketplace?",

        description: "A marketplace is a digital platform that allows multiple vendors to offer their products or services to buyers in one place. The marketplace operator facilitates the transaction and can earn commissions.",

        image: "/images/subservices/marketplaces/marketplace.png",

        imageAlt: "Multi-vendor marketplace",

        useCases: [
          "Product markets",
          "Service markets",
          "Auction platforms",
          "Specialized marketplaces",
          "Freelance platforms",
        ],
      },

      workflow: {
        badge: "Our Process",

        title: "How We Build Your Marketplace",

        description: "We create robust, scalable marketplaces.",

        steps: [
          {
            title: "Planning",
            description: "We define the business model and functionalities.",
          },
          {
            title: "Design",
            description: "We design the experience for vendors and buyers.",
          },
          {
            title: "Development",
            description: "We implement the platform with all functionalities.",
          },
          {
            title: "Payment System",
            description: "We configure payments and commission splits.",
          },
          {
            title: "Launch",
            description: "We publish and provide initial support.",
          },
        ],
      },

      useCases: {
        title: "When Do You Need a Marketplace?",

        description: "Marketplaces are ideal for creating buying and selling ecosystems.",

        useCases: [
          {
            title: "Scale",
            description: "Allow multiple vendors to sell without managing inventory.",
          },
          {
            title: "Commissions",
            description: "Earn a commission on every transaction.",
          },
          {
            title: "Inventory",
            description: "Thousands of products without managing own inventory.",
          },
          {
            title: "Audience",
            description: "Access an existing customer base.",
          },
          {
            title: "Data",
            description: "Gather valuable data about buying preferences.",
          },
          {
            title: "Trust",
            description: "Build trust with review systems.",
          },
        ],
      },

      features: {
        title: "What's Included?",

        description: "We create complete marketplaces with all necessary tools.",

        features: [
          {
            title: "Vendor Stores",
            description: "Each vendor has their own customizable store.",
          },
          {
            title: "Centralized Catalog",
            description: "All products in one unified search.",
          },
          {
            title: "Shared Cart",
            description: "Buy from multiple vendors in a single order.",
          },
          {
            title: "Payment System",
            description: "Payments with automatic commission distribution.",
          },
          {
            title: "Reviews",
            description: "Rating system for vendors and products.",
          },
          {
            title: "Messaging",
            description: "Communication between buyers and vendors.",
          },
          {
            title: "Admin Panel",
            description: "Centralized management of vendors and transactions.",
          },
          {
            title: "Fulfillment",
            description: "Tools to manage shipping and returns.",
          },
        ],
      },

      plansSection: {
        title: "Choose the Right Plan",

        description: "All of our plans follow the same proven development process. The difference lies in the level of customization, features, and integrations included in each option.",
      },

      seo: {
        title: "Marketplaces | SatCore Solutions",

        description: "Development of multi-vendor marketplaces to connect buyers and sellers.",
        keywords: [
          "marketplace",
          "multi-vendor",
          "selling platform",
          "e-commerce",
          "nextjs",
        ],
      },
    },

    pt: {
      title: "Marketplaces",

      subtitle: "Plataformas multi-vendedor",

      description: "Desenvolvemos marketplaces que conectam múltiplos vendedores com compradores em uma única plataforma. Criamos espaços onde qualquer pessoa pode abrir sua loja e vender produtos ou serviços.",

      overview: {
        title: "O que é um Marketplace?",

        description: "Um marketplace é uma plataforma digital que permite que múltiplos vendedores ofereçam seus produtos ou serviços a compradores em um só lugar. O operador do marketplace facilita a transação e pode ganhar comissões.",

        image: "/images/subservices/marketplaces/marketplace.png",

        imageAlt: "Marketplace multi-vendedor",

        useCases: [
          "Mercados de produtos",
          "Mercados de serviços",
          "Plataformas de leilões",
          "Marketplaces especializados",
          "Plataformas freelance",
        ],
      },

      workflow: {
        badge: "Nosso Processo",

        title: "Como Desenvolvemos seu Marketplace",

        description: "Criamos marketplaces robustos e escaláveis.",

        steps: [
          {
            title: "Planejamento",
            description: "Definimos o modelo de negócio e funcionalidades.",
          },
          {
            title: "Design",
            description: "Criamos a experiência para vendedores e compradores.",
          },
          {
            title: "Desenvolvimento",
            description: "Implementamos a plataforma com todas as funcionalidades.",
          },
          {
            title: "Sistema de Pagamentos",
            description: "Configuramos pagamentos e divisão de comissões.",
          },
          {
            title: "Lançamento",
            description: "Publicamos e damos suporte inicial.",
          },
        ],
      },

      useCases: {
        title: "Quando Você Precisa de um Marketplace?",

        description: "Os marketplaces são ideais para criar ecossistemas de compra e venda.",

        useCases: [
          {
            title: "Escala",
            description: "Permite que múltiplos vendedores vendam sem gerenciar inventário.",
          },
          {
            title: "Comissões",
            description: "Ganhe uma comissão a cada transação.",
          },
          {
            title: "Inventário",
            description: "Milhares de produtos sem gerenciar inventário próprio.",
          },
          {
            title: "Audiência",
            description: "Acesse uma base de clientes existente.",
          },
          {
            title: "Dados",
            description: "Reúna dados valiosos sobre preferências de compra.",
          },
          {
            title: "Confiança",
            description: "Construa confiança com sistemas de avaliações.",
          },
        ],
      },

      features: {
        title: "O Que Está Incluído?",

        description: "Criamos marketplaces completos com todas as ferramentas necessárias.",

        features: [
          {
            title: "Lojas de Vendedores",
            description: "Cada vendedor tem sua própria loja personalizável.",
          },
          {
            title: "Catálogo Centralizado",
            description: "Todos os produtos em uma busca unificada.",
          },
          {
            title: "Carrinho Compartilhado",
            description: "Compre de múltiplos vendedores em uma única ordem.",
          },
          {
            title: "Sistema de Pagamentos",
            description: "Pagamentos com distribuição automática de comissões.",
          },
          {
            title: "Avaliações",
            description: "Sistema de ratings para vendedores e produtos.",
          },
          {
            title: "Mensagens",
            description: "Comunicação entre compradores e vendedores.",
          },
          {
            title: "Painel Admin",
            description: "Gestão centralizada de vendedores e transações.",
          },
          {
            title: "Fulfillment",
            description: "Ferramentas para gerenciar envíos e devoluções.",
          },
        ],
      },

      plansSection: {
        title: "Escolha o Plano Ideal",

        description: "Todos os nossos planos seguem a mesma metodologia de desenvolvimento. A diferença está no nível de personalização, funcionalidades e integrações incluídas em cada opção.",
      },

      seo: {
        title: "Marketplaces | SatCore Solutions",

        description: "Desenvolvimento de marketplaces multi-vendedor para conectar compradores e vendedores.",
        keywords: [
          "marketplace",
          "multi-vendedor",
          "plataforma de vendas",
          "e-commerce",
          "nextjs",
        ],
      },
    },
  },
  plans: []
};