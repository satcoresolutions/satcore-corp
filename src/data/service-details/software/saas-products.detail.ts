import type {
  ServiceDetail,
} from "@/types/service-detail.types";

import {
  softwarePlans,
} from "@/data/plans/software/landing-pages";

export const saasProductsDetail: ServiceDetail = {
  core: {
    id: "SRV-SAA",

    slug: "saas-products",

    name: "SaaS Products",

    pillar: "software",

    icon: "cloud",

    heroImage: "/images/services/software/hero/hero.png",

    plans: [],
  },

  translations: {
    es: {
      title: "Productos SaaS",

      subtitle: "Software como servicio para tu negocio",

      description: "Desarrollamos productos SaaS (Software as a Service) que permiten ofrecer soluciones basadas en suscripción. Creamos aplicaciones cloud escalables que tus clientes pueden usar desde cualquier lugar.",

      overview: {
        title: "¿Qué es un Producto SaaS?",

        description: "Un producto SaaS es una aplicación software entregada через интернет como servicio. Los usuarios acceden через браузер o app sin necesidad de instalar nada. Se cobra por suscripción (mensual/anual).",

        image: "/images/subservices/software/saas-products.png",

        imageAlt: "Producto SaaS",

        useCases: [
          "Herramientas de productividad",
          "Software de gestión",
          "Plataformas de colaboración",
          "Servicios de analytics",
          "Herramientas de comunicación",
        ],
      },

      workflow: {
        badge: "Metodología",

        title: "¿Cómo desarrollamos tu Producto SaaS?",

        description: "Creamos productos SaaS escalables y listos para escalar.",

        steps: [
          {
            title: "Planificación",
            description: "Definimos el modelo de negocio y funcionalidades core."
          },
          {
            title: "Arquitectura",
            description: "Diseñamos arquitectura cloud escalable."
          },
          {
            title: "Desarrollo",
            description: "Implementamos la aplicación con las mejores prácticas."
          },
          {
            title: "Pagos",
            description: "Configuramos sistema de suscripciones y billing."
          },
          {
            title: "Lanzamiento",
            description: "Desplegamos y configuramos monitoreo."
          },
        ],
      },

      useCases: {
        title: "¿Cuándo necesitas un Producto SaaS?",

        description: "SaaS es ideal para crear negocios recurrentes basados en software.",

        useCases: [
          {
            title: "Ingresos Recurrentes",
            description: "Genera ingresos predecibles con suscripciones."
          },
          {
            title: "Escalabilidad",
            description: "Escala sin límite de usuarios."
          },
          {
            title: "Acceso Global",
            description: "Clientes acceden desde cualquier lugar."
          },
          {
            title: "Actualizaciones",
            description: "Actualiza la app sin acción del usuario."
          },
          {
            title: "Costos",
            description: "Reduce costos de distribución y mantenimiento."
          },
          {
            title: "Datos",
            description: "Recolecta datos de uso para mejorar."
          },
        ],
      },

      features: {
        title: "¿Qué incluye nuestro servicio?",

        description: "Creamos productos SaaS completos y listos para mercado.",

        features: [
          {
            title: "Arquitectura Cloud",
            description: "Diseño escalable en AWS, GCP o Azure."
          },
          {
            title: "Multitenancy",
            description: "Soporte para múltiples clientes."
          },
          {
            title: "Sistema de Pagos",
            description: "Integración con Stripe, subscriptions."
          },
          {
            title: "Dashboard Cliente",
            description: "Panel para que clientes gestionen su cuenta."
          },
          {
            title: "API",
            description: "API RESTful para integraciones."
          },
          {
            title: "Seguridad",
            description: "SSO, encriptación, compliance."
          },
          {
            title: "Analytics",
            description: "Métricas de uso y negocio."
          },
          {
            title: "Documentación",
            description: "Documentación técnica y de usuario."
          },
        ],
      },

      plansSection: {
        title: "Elige el plan ideal",

        description: "Todos nuestros planes utilizan la misma metodología de trabajo. La diferencia está en el nivel de personalización, funcionalidades e integraciones incluidas en cada uno.",
      },

      seo: {
        title: "Productos SaaS | SatCore Solutions",

        description: "Desarrollo de productos SaaS escalables con modelo de suscripción.",
        keywords: [
          "saas",
          "software as a service",
          "producto cloud",
          "suscripciones",
          "nextjs",
        ],
      },
    },

    en: {
      title: "SaaS Products",

      subtitle: "Software as a service for your business",

      description: "We develop SaaS (Software as a Service) products that allow offering subscription-based solutions. We create scalable cloud applications that your customers can use from anywhere.",

      overview: {
        title: "What is a SaaS Product?",

        description: "A SaaS product is software delivered over the internet as a service. Users access via browser or app without installing anything. Billed by subscription (monthly/annual).",

        image: "/images/subservices/saas-products/saas.png",

        imageAlt: "SaaS product",

        useCases: [
          "Productivity tools",
          "Management software",
          "Collaboration platforms",
          "Analytics services",
          "Communication tools",
        ],
      },

      workflow: {
        badge: "Our Process",

        title: "How We Build Your SaaS Product",

        description: "We create scalable, market-ready SaaS products.",

        steps: [
          {
            title: "Planning",
            description: "We define business model and core features.",
          },
          {
            title: "Architecture",
            description: "We design scalable cloud architecture.",
          },
          {
            title: "Development",
            description: "We implement the application with best practices.",
          },
          {
            title: "Payments",
            description: "We configure subscription and billing system.",
          },
          {
            title: "Launch",
            description: "We deploy and configure monitoring.",
          },
        ],
      },

      useCases: {
        title: "When Do You Need a SaaS Product?",

        description: "SaaS is ideal for creating recurring revenue software businesses.",

        useCases: [
          {
            title: "Recurring Revenue",
            description: "Generate predictable income with subscriptions.",
          },
          {
            title: "Scalability",
            description: "Scale without user limits.",
          },
          {
            title: "Global Access",
            description: "Customers access from anywhere.",
          },
          {
            title: "Updates",
            description: "Update the app without user action.",
          },
          {
            title: "Costs",
            description: "Reduce distribution and maintenance costs.",
          },
          {
            title: "Data",
            description: "Collect usage data to improve.",
          },
        ],
      },

      features: {
        title: "What's Included?",

        description: "We create complete, market-ready SaaS products.",

        features: [
          {
            title: "Cloud Architecture",
            description: "Scalable design on AWS, GCP, or Azure.",
          },
          {
            title: "Multitenancy",
            description: "Support for multiple customers.",
          },
          {
            title: "Payment System",
            description: "Integration with Stripe, subscriptions.",
          },
          {
            title: "Client Dashboard",
            description: "Panel for clients to manage their account.",
          },
          {
            title: "API",
            description: "RESTful API for integrations.",
          },
          {
            title: "Security",
            description: "SSO, encryption, compliance.",
          },
          {
            title: "Analytics",
            description: "Usage and business metrics.",
          },
          {
            title: "Documentation",
            description: "Technical and user documentation.",
          },
        ],
      },

      plansSection: {
        title: "Choose the Right Plan",

        description: "All of our plans follow the same proven development process. The difference lies in the level of customization, features, and integrations included in each option.",
      },

      seo: {
        title: "SaaS Products | SatCore Solutions",

        description: "Development of scalable SaaS products with subscription model.",
        keywords: [
          "saas",
          "software as a service",
          "cloud product",
          "subscriptions",
          "nextjs",
        ],
      },
    },

    pt: {
      title: "Produtos SaaS",

      subtitle: "Software como serviço para seu negócio",

      description: "Desenvolvemos produtos SaaS (Software as a Service) que permitem oferecer soluções baseadas em assinatura. Criamos aplicações cloud escaláveis que seus clientes podem usar de qualquer lugar.",

      overview: {
        title: "O que é um Produto SaaS?",

        description: "Um produto SaaS é um software entregue через интернет como serviço. Os usuários acessam через navegador ou app sem precisar instalar nada. Cobrado por assinatura (mensal/anual).",

        image: "/images/subservices/saas-products/saas.png",

        imageAlt: "Produto SaaS",

        useCases: [
          "Ferramentas de produtividade",
          "Software de gestão",
          "Plataformas de colaboração",
          "Serviços de análise",
          "Ferramentas de comunicação",
        ],
      },

      workflow: {
        badge: "Nosso Processo",

        title: "Como Desenvolvemos seu Produto SaaS",

        description: "Criamos produtos SaaS escaláveis e prontos para o mercado.",

        steps: [
          {
            title: "Planejamento",
            description: "Definimos o modelo de negócio e funcionalidades core.",
          },
          {
            title: "Arquitetura",
            description: "Definimos arquitetura cloud escalável.",
          },
          {
            title: "Desenvolvimento",
            description: "Implementamos a aplicação com as melhores práticas.",
          },
          {
            title: "Pagamentos",
            description: "Configuramos sistema de assinaturas e billing.",
          },
          {
            title: "Lançamento",
            description: "Desplegamos e configuramos monitoramento.",
          },
        ],
      },

      useCases: {
        title: "Quando Você Precisa de um Produto SaaS?",

        description: "SaaS é ideal para criar negócios recorrentes baseados em software.",

        useCases: [
          {
            title: "Receita Recorrente",
            description: "Gere renda previsível com assinaturas.",
          },
          {
            title: "Escalabilidade",
            description: "Esque sem limite de usuários.",
          },
          {
            title: "Acesso Global",
            description: "Clientes acessam de qualquer lugar.",
          },
          {
            title: "Atualizações",
            description: "Atualize o app sem ação do usuário.",
          },
          {
            title: "Custos",
            description: "Reduza custos de distribuição e manutenção.",
          },
          {
            title: "Dados",
            description: "Reúna dados de uso para melhorar.",
          },
        ],
      },

      features: {
        title: "O Que Está Incluído?",

        description: "Criamos produtos SaaS completos e prontos para o mercado.",

        features: [
          {
            title: "Arquitetura Cloud",
            description: "Design escalável em AWS, GCP ou Azure.",
          },
          {
            title: "Multitenancy",
            description: "Suporte para múltiplos clientes.",
          },
          {
            title: "Sistema de Pagamentos",
            description: "Integração com Stripe, assinaturas.",
          },
          {
            title: "Dashboard Cliente",
            description: "Painel para clientes gerenciarem sua conta.",
          },
          {
            title: "API",
            description: "API RESTful para integrações.",
          },
          {
            title: "Segurança",
            description: "SSO, criptografia, compliance.",
          },
          {
            title: "Analytics",
            description: "Métricas de uso e negócio.",
          },
          {
            title: "Documentação",
            description: "Documentação técnica e de usuário.",
          },
        ],
      },

      plansSection: {
        title: "Escolha o Plano Ideal",

        description: "Todos os nossos planos seguem a mesma metodologia de desenvolvimento. A diferença está no nível de personalização, funcionalidades e integrações incluídas em cada opção.",
      },

      seo: {
        title: "Produtos SaaS | SatCore Solutions",

        description: "Desenvolvimento de produtos SaaS escaláveis com modelo de assinatura.",
        keywords: [
          "saas",
          "software as a service",
          "produto cloud",
          "assinaturas",
          "nextjs",
        ],
      },
    },
  },
  plans: []
};