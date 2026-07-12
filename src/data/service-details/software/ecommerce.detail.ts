import type {
  ServiceDetail,
} from "@/types/service-detail.types";

import {
  ecommerceSystems,
} from "@/data/plans/software/ecommerce";

export const ecommerceDetail: ServiceDetail = {
  core: {
    id: "SRV-EC",

    slug: "ecommerce",

    name: "Ecommerce",

    pillar: "software",

    icon: "shopping-cart",

    heroImage: "/images/services/software/hero/hero.png",

    plans: ecommerceSystems,
  },

  translations: {
    es: {
      title: "Tiendas Online",

      subtitle: "Venta online segura y optimizada para conversiones",

      description: "Creamos tiendas online modernas y funcionales que combinan una experiencia de usuario excepcional con herramientas de venta potentes. Cada proyecto está diseñado para maximizar tus ventas, gestionar inventarios y ofrecer una experiencia de compra fluida en cualquier dispositivo.",

      overview: {
        title: "¿Qué es una Tienda Online?",

        description: "Una tienda online es una plataforma de comercio electrónico que permite vender productos o servicios a través de internet. Incluye catálogo de productos, carrito de compras, proceso de pago seguro, gestión de inventario y herramientas de marketing para impulsar tus ventas.",

        image: "/images/subservices/software/online-shop.png",

        imageAlt: "Tienda online profesional",

        useCases: [
          "Venta de productos físicos o digitales",
          "Modelo de suscripción y membresías",
          "Marketplace multi-vendedor",
          "Tienda flash y ventas flash",
          "Comercio B2B y B2C",
        ],
      },

      workflow: {
        badge: "Metodología",

        title: "¿Cómo desarrollamos tu Tienda Online?",

        description: "Seguimos un proceso estructurado para crear tiendas online que convierten visitantes en compradores recurrentes.",

        steps: [
          {
            title: "Análisis de Requisitos",
            description: "Estudiamos tu modelo de negocio, productos, competidores y objetivos de venta para diseñar una estrategia personalizada."
          },
          {
            title: "Diseño de Experiencia",
            description: "Creamos una interfaz de usuario intuitiva que guía al cliente desde la navegación hasta el checkout de forma natural."
          },
          {
            title: "Desarrollo del Catálogo",
            description: "Implementamos tu inventario con categorías, filtros, búsqueda avanzada y gestión de variantes de producto."
          },
          {
            title: "Integración de Pagos",
            description: "Conectamos pasarelas de pago seguras, métodos de envío y calculadoras de impuestos para completar el proceso de compra."
          },
          {
            title: "Pruebas y Lanzamiento",
            description: "Realizamos pruebas exhaustivas de funcionalidad, seguridad y rendimiento antes de publicar tu tienda."
          },
        ],
      },

      useCases: {
        title: "¿Cuándo necesitas una Tienda Online?",

        description: "Una tienda online es ideal cuando deseas expandir tu negocio más allá de lo físico, chegar a más clientes y automatizar el proceso de ventas.",

        useCases: [
          {
            title: "Venta 24/7",
            description: " Tus productos disponibles para compra en cualquier momento, sin límites geográficos ni horarios."
          },
          {
            title: "Escalabilidad",
            description: "Amplía tu catálogo y volumen de ventas sin preocuparte por espacio físico o personal adicional."
          },
          {
            title: "Gestión de Inventario",
            description: "Controla tu stock en tiempo real, recibe alertas automáticas y evita ventas perdidas por productos agotados."
          },
          {
            title: "Análisis de Ventas",
            description: "Obtén reportes detallados sobre comportamiento de compra, productos más vendidos y rentabilidad."
          },
          {
            title: "Marketing Digital",
            description: "Implementa estrategias de email marketing, cupones, descuentos y programas de lealtad."
          },
          {
            title: "Experiencia Mobile-First",
            description: "Captura el creciente mercado de compradores móviles con una experiencia optimizada para smartphones."
          },
        ],
      },

      features: {
        title: "¿Qué incluye nuestro servicio?",

        description: "Construimos tiendas online completas con todas las herramientas que necesitas para competir en el mercado digital.",

        features: [
          {
            title: "Catálogo de Productos",
            description: "Gestión completa de productos con categorías, variantes, tallas, colores y atributos personalizables."
          },
          {
            title: "Carrito y Checkout",
            description: "Proceso de compra optimizado con guardado de carrito, checkout exprés y múltiples opciones de pago."
          },
          {
            title: "Pasarelas de Pago",
            description: "Integración con Stripe, PayPal, MercadoPago y otros métodos de pago populares y seguros."
          },
          {
            title: "Gestión de Envíos",
            description: "Calculadora de envíos en tiempo real, etiquetas de envío y seguimiento de pedidos."
          },
          {
            title: "Panel de Administración",
            description: "Dashboard intuitivo para gestionar pedidos, inventario, clientes y analíticas."
          },
          {
            title: "Diseño Responsivo",
            description: "Experiencia de compra perfecta en escritorio, tablet y móvil."
          },
          {
            title: "SEO para Ecommerce",
            description: "Optimización para motores de búsqueda con URLs amigables, metadatos y структура данных."
          },
          {
            title: "Seguridad SSL",
            description: "Cifrado de datos y protección contra fraude para transacciones seguras."
          },
        ],
      },

      plansSection: {
        title: "Elige el plan ideal",

        description: "Todos nuestros planes utilizan la misma metodología de trabajo. La diferencia está en el nivel de personalización, funcionalidades e integraciones incluidas en cada uno.",
      },

      seo: {
        title: "Tiendas Online Profesionales | SatCore Solutions",

        description: "Diseño y desarrollo de tiendas online seguras, optimizadas para móviles y enfocadas en maximizar tus ventas.",
        keywords: [
          "ecommerce",
          "tienda online",
          "tienda virtual",
          "comercio electrónico",
          "venta online",
          "nextjs",
          "desarrollo web",
        ],
      },
    },

    en: {
      title: "Online Stores",

      subtitle: "Secure online sales optimized for conversions",

      description: "We create modern, functional online stores that combine exceptional user experience with powerful sales tools. Each project is designed to maximize your sales, manage inventory, and provide a seamless shopping experience on any device.",

      overview: {
        title: "What is an Online Store?",

        description: "An online store is an e-commerce platform that allows you to sell products or services over the internet. It includes a product catalog, shopping cart, secure payment processing, inventory management, and marketing tools to boost your sales.",

        image: "/images/subservices/ecommerce/ecommerce.png",

        imageAlt: "Professional online store",

        useCases: [
          "Selling physical or digital products",
          "Subscription and membership models",
          "Multi-vendor marketplace",
          "Flash sales",
          "B2B and B2C commerce",
        ],
      },

      workflow: {
        badge: "Our Process",

        title: "How We Build Your Online Store",

        description: "We follow a structured process to create online stores that convert visitors into repeat buyers.",

        steps: [
          {
            title: "Requirements Analysis",
            description: "We study your business model, products, competitors, and sales goals to design a personalized strategy.",
          },
          {
            title: "Experience Design",
            description: "We create an intuitive user interface that guides customers from navigation to checkout naturally.",
          },
          {
            title: "Catalog Development",
            description: "We implement your inventory with categories, filters, advanced search, and product variant management.",
          },
          {
            title: "Payment Integration",
            description: "We connect secure payment gateways, shipping methods, and tax calculators to complete the purchase process.",
          },
          {
            title: "Testing & Launch",
            description: "We perform exhaustive functionality, security, and performance tests before publishing your store.",
          },
        ],
      },

      useCases: {
        title: "When Do You Need an Online Store?",

        description: "An online store is ideal when you want to expand your business beyond physical locations, reach more customers, and automate the sales process.",

        useCases: [
          {
            title: "24/7 Sales",
            description: "Your products available for purchase at any time, with no geographic or time restrictions.",
          },
          {
            title: "Scalability",
            description: "Expand your catalog and sales volume without worrying about physical space or additional staff.",
          },
          {
            title: "Inventory Management",
            description: "Control your stock in real-time, receive automatic alerts, and avoid lost sales from out-of-stock items.",
          },
          {
            title: "Sales Analytics",
            description: "Get detailed reports on buying behavior, best-selling products, and profitability.",
          },
          {
            title: "Digital Marketing",
            description: "Implement email marketing strategies, coupons, discounts, and loyalty programs.",
          },
          {
            title: "Mobile-First Experience",
            description: "Capture the growing mobile market with an optimized smartphone experience.",
          },
        ],
      },

      features: {
        title: "What's Included?",

        description: "We build complete online stores with all the tools you need to compete in the digital market.",

        features: [
          {
            title: "Product Catalog",
            description: "Complete product management with categories, variants, sizes, colors, and customizable attributes.",
          },
          {
            title: "Cart & Checkout",
            description: "Optimized purchase process with cart saving, express checkout, and multiple payment options.",
          },
          {
            title: "Payment Gateways",
            description: "Integration with Stripe, PayPal, MercadoPago, and other popular, secure payment methods.",
          },
          {
            title: "Shipping Management",
            description: "Real-time shipping calculator, shipping labels, and order tracking.",
          },
          {
            title: "Admin Dashboard",
            description: "Intuitive dashboard to manage orders, inventory, customers, and analytics.",
          },
          {
            title: "Responsive Design",
            description: "Perfect shopping experience on desktop, tablet, and mobile.",
          },
          {
            title: "Ecommerce SEO",
            description: "Search engine optimization with friendly URLs, metadata, and structured data.",
          },
          {
            title: "SSL Security",
            description: "Data encryption and fraud protection for secure transactions.",
          },
        ],
      },

      plansSection: {
        title: "Choose the Right Plan",

        description: "All of our plans follow the same proven development process. The difference lies in the level of customization, features, and integrations included in each option.",
      },

      seo: {
        title: "Professional Online Stores | SatCore Solutions",

        description: "Design and development of secure, mobile-optimized online stores focused on maximizing your sales.",
        keywords: [
          "ecommerce",
          "online store",
          "e-commerce",
          "virtual store",
          "online sales",
          "nextjs",
          "web development",
        ],
      },
    },

    pt: {
      title: "Lojas Virtuais",

      subtitle: "Vendas online seguras e otimizadas para conversões",

      description: "Criamos lojas virtuais modernas e funcionais que combinam experiência excepcional do usuário com ferramentas poderosas de vendas. Cada projeto é diseñado para maximizar suas vendas, gerenciar inventário e oferecer uma experiência de compra perfeita em qualquer dispositivo.",

      overview: {
        title: "O que é uma Loja Virtual?",

        description: "Uma loja virtual é uma plataforma de comércio eletrônico que permite vender produtos ou serviços pela internet. Inclui catálogo de produtos, carrinho de compras, pagamento seguro, gestão de inventário e ferramentas de marketing para impulsionar suas vendas.",

        image: "/images/subservices/ecommerce/ecommerce.png",

        imageAlt: "Loja virtual profissional",

        useCases: [
          "Venda de produtos físicos ou digitais",
          "Modelos de assinatura e membership",
          "Marketplace multi-vendedor",
          "Vendas flash",
          "Comércio B2B e B2C",
        ],
      },

      workflow: {
        badge: "Nosso Processo",

        title: "Como Desenvolvemos sua Loja Virtual",

        description: "Seguimos um processo estruturado para criar lojas virtuais que convertem visitantes em compradores recorrentes.",

        steps: [
          {
            title: "Análise de Requisitos",
            description: "Estudamos seu modelo de negócio, produtos, concorrentes e metas de vendas para diseñar uma estratégia personalizada.",
          },
          {
            title: "Design de Experiência",
            description: "Criamos uma interface intuitiva que guia o cliente da navegação até o checkout naturalmente.",
          },
          {
            title: "Desenvolvimento do Catálogo",
            description: "Implementamos seu inventário com categorias, filtros, busca avançada e gestão de variantes.",
          },
          {
            title: "Integração de Pagamentos",
            description: "Conectamos gateways de pagamento seguros, métodos de envio e calculadoras de impostos.",
          },
          {
            title: "Testes e Lançamento",
            description: "Realizamos testes exaustivos de funcionalidade, segurança e desempenho antes de publicar sua loja.",
          },
        ],
      },

      useCases: {
        title: "Quando Você Precisa de uma Loja Virtual?",

        description: "Uma loja virtual é ideal quando deseja expandir seu negócio além do físico, alcançar mais clientes e automatizar o processo de vendas.",

        useCases: [
          {
            title: "Vendas 24/7",
            description: "Seus produtos disponíveis para compra a qualquer momento, sem limites geográficos ou horários.",
          },
          {
            title: "Escalabilidade",
            description: "Expanda seu catálogo e volume de vendas sem se preocupar com espaço físico ou equipe adicional.",
          },
          {
            title: "Gestão de Inventário",
            description: "Controle seu estoque em tempo real, receba alertas automáticos e evite vendas perdidas.",
          },
          {
            title: "Análise de Vendas",
            description: "Obtenha relatórios detalhados sobre comportamento de compra, produtos mais vendidos e rentabilidade.",
          },
          {
            title: "Marketing Digital",
            description: "Implemente estratégias de email marketing, cupons, descontos e programas de fidelidade.",
          },
          {
            title: "Experiência Mobile-First",
            description: "Capture o crescente mercado de compras móveis com uma experiência otimizada para smartphones.",
          },
        ],
      },

      features: {
        title: "O Que Está Incluído?",

        description: "Construimos lojas virtuais completas com todas as ferramentas que você precisa para competir no mercado digital.",

        features: [
          {
            title: "Catálogo de Produtos",
            description: "Gestão completa de produtos com categorias, variantes, tamanhos, cores e atributos personalizáveis.",
          },
          {
            title: "Carrinho e Checkout",
            description: "Processo de compra otimizado com salvamento de carrinho, checkout rápido e múltiplas opções de pagamento.",
          },
          {
            title: "Gateways de Pagamento",
            description: "Integração com Stripe, PayPal, MercadoPago e outros métodos de pagamento populares e seguros.",
          },
          {
            title: "Gestão de Envios",
            description: "Calculadora de envio em tempo real, etiquetas de envio e rastreamento de pedidos.",
          },
          {
            title: "Painel Admin",
            description: "Dashboard intuitivo para gerenciar pedidos, inventário, clientes e análises.",
          },
          {
            title: "Design Responsivo",
            description: "Experiência de compra perfeita em desktop, tablet e móvil.",
          },
          {
            title: "SEO para Ecommerce",
            description: "Otimização para motores de busca com URLs amigáveis, metadados e dados estruturados.",
          },
          {
            title: "Segurança SSL",
            description: "Criptografia de dados e proteção contra fraude para transações seguras.",
          },
        ],
      },

      plansSection: {
        title: "Escolha o Plano Ideal",

        description: "Todos os nossos planos seguem a mesma metodologia de desenvolvimento. A diferença está no nível de personalização, funcionalidades e integrações incluídas em cada opção.",
      },

      seo: {
        title: "Lojas Virtuais Profissionais | SatCore Solutions",

        description: "Design e desenvolvimento de lojas virtuais seguras, otimizadas para móviles e focadas em maximizar suas vendas.",
        keywords: [
          "ecommerce",
          "loja virtual",
          "loja online",
          "comércio eletrônico",
          "vendas online",
          "nextjs",
          "desenvolvimento web",
        ],
      },
    },
  },
  plans: []
};