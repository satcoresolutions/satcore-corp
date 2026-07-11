import type {
  ServiceDetail,
} from "@/types/service-detail.types";

import {
  softwarePlans,
} from "@/data/plans/software/landing-pages";

export const membershipPlatformsDetail: ServiceDetail = {
  core: {
    id: "SRV-MP",

    slug: "membership-platforms",

    name: "Membership Platforms",

    pillar: "software",

    icon: "user-check",

    heroImage: "/images/services/software/hero/hero.png",

    plans: [],
  },

  translations: {
    es: {
      title: "Plataformas de Membresía",

      subtitle: "Gestiona suscriptores y contenido exclusivo",

      description: "Creamos plataformas de membresía que permiten monetizar contenido exclusivo mediante suscripciones. Desde comunidades privadas hasta contenido premium, proporcionamos herramientas completas para gestionar suscriptores.",

      overview: {
        title: "¿Qué es una Plataforma de Membresía?",

        description: "Una plataforma de membresía es un sistema que permite ofrecer contenido o servicios exclusivos a cambio de una suscripción. Los miembros pagan regularmente para acceder a beneficios que no están disponibles al público general.",

        image: "/images/subservices/software/membership-plataforms.png",

        imageAlt: "Plataforma de membresía",

        useCases: [
          "Comunidades privadas",
          "Contenido premium",
          "Cursos exclusivos",
          "Servicios de suscripción",
          "Programas de fidelización",
        ],
      },

      workflow: {
        badge: "Metodología",

        title: "¿Cómo desarrollamos tu Plataforma?",

        description: "Creamos plataformas de membresía completas y seguras.",

        steps: [
          {
            title: "Planificación",
            description: "Definimos niveles de membresía y beneficios."
          },
          {
            title: "Diseño",
            description: "Diseñamos la experiencia de usuario y gestión de acceso."
          },
          {
            title: "Desarrollo",
            description: "Implementamos el sistema con pasarelas de pago."
          },
          {
            title: "Contenido",
            description: "Configuramos la gestión de contenido exclusivo."
          },
          {
            title: "Lanzamiento",
            description: "Publicamos y configuramos herramientas de análisis."
          },
        ],
      },

      useCases: {
        title: "¿Cuándo necesitas una Plataforma de Membresía?",

        description: "Las plataformas de membresía son ideales para monetizar contenido y crear comunidades.",

        useCases: [
          {
            title: "Ingresos Recurrentes",
            description: "Genera ingresos predecibles con suscripciones."
          },
          {
            title: "Comunidad",
            description: "Construye una comunidad comprometida de miembros."
          },
          {
            title: "Contenido Exclusivo",
            description: "Ofrece valor agregado que no está disponible gratis."
          },
          {
            title: "Retención",
            description: "Mantén miembros comprometidos con beneficios continuo."
          },
          {
            title: "Datos",
            description: "Recolecta datos valiosos sobre tus miembros."
          },
          {
            title: "Escalabilidad",
            description: "Escala tu negocio sin aumentar proporcionalmente el trabajo."
          },
        ],
      },

      features: {
        title: "¿Qué incluye nuestro servicio?",

        description: "Creamos plataformas de membresía completas con todas las herramientas.",

        features: [
          {
            title: "Gestión de Suscriptores",
            description: "Administra miembros, niveles y suscripciones."
          },
          {
            title: "Pasarelas de Pago",
            description: "Integración con Stripe, PayPal y más."
          },
          {
            title: "Contenido Exclusivo",
            description: "Publica contenido solo para miembros."
          },
          {
            title: "Niveles de Membresía",
            description: "Múltiples niveles con diferentes beneficios."
          },
          {
            title: "Acceso Restringido",
            description: "Controla el acceso a contenido y funciones."
          },
          {
            title: "Comunidad",
            description: "Espacios privados de interacción entre miembros."
          },
          {
            title: "Analíticas",
            description: "Métricas de membresía, churn y revenue."
          },
          {
            title: "Cancelación",
            description: "Gestión de cancelaciones y retención."
          },
        ],
      },

      plansSection: {
        title: "Elige el plan ideal",

        description: "Todos nuestros planes utilizan la misma metodología de trabajo. La diferencia está en el nivel de personalización, funcionalidades e integraciones incluidas en cada uno.",
      },

      seo: {
        title: "Plataformas de Membresía | SatCore Solutions",

        description: "Desarrollo de plataformas de membresía para monetizar contenido exclusivo.",
        keywords: [
          "membresía",
          "suscripciones",
          "contenido exclusivo",
          "nextjs",
        ],
      },
    },

    en: {
      title: "Membership Platforms",

      subtitle: "Manage subscribers and exclusive content",

      description: "We create membership platforms that allow monetizing exclusive content through subscriptions. From private communities to premium content, we provide complete tools for managing subscribers.",

      overview: {
        title: "What is a Membership Platform?",

        description: "A membership platform is a system that allows offering exclusive content or services in exchange for a subscription. Members pay regularly to access benefits not available to the general public.",

        image: "/images/subservices/membership-platforms/membership.png",

        imageAlt: "Membership platform",

        useCases: [
          "Private communities",
          "Premium content",
          "Exclusive courses",
          "Subscription services",
          "Loyalty programs",
        ],
      },

      workflow: {
        badge: "Our Process",

        title: "How We Build Your Platform",

        description: "We create complete, secure membership platforms.",

        steps: [
          {
            title: "Planning",
            description: "We define membership levels and benefits.",
          },
          {
            title: "Design",
            description: "We design user experience and access management.",
          },
          {
            title: "Development",
            description: "We implement the system with payment gateways.",
          },
          {
            title: "Content",
            description: "We configure exclusive content management.",
          },
          {
            title: "Launch",
            description: "We publish and configure analytics tools.",
          },
        ],
      },

      useCases: {
        title: "When Do You Need a Membership Platform?",

        description: "Membership platforms are ideal for monetizing content and building communities.",

        useCases: [
          {
            title: "Recurring Revenue",
            description: "Generate predictable income with subscriptions.",
          },
          {
            title: "Community",
            description: "Build a committed community of members.",
          },
          {
            title: "Exclusive Content",
            description: "Offer added value not available for free.",
          },
          {
            title: "Retention",
            description: "Keep members engaged with ongoing benefits.",
          },
          {
            title: "Data",
            description: "Gather valuable data about your members.",
          },
          {
            title: "Scalability",
            description: "Scale your business without proportionally increasing work.",
          },
        ],
      },

      features: {
        title: "What's Included?",

        description: "We create complete membership platforms with all the tools.",

        features: [
          {
            title: "Subscriber Management",
            description: "Manage members, levels, and subscriptions.",
          },
          {
            title: "Payment Gateways",
            description: "Integration with Stripe, PayPal, and more.",
          },
          {
            title: "Exclusive Content",
            description: "Publish content for members only.",
          },
          {
            title: "Membership Levels",
            description: "Multiple levels with different benefits.",
          },
          {
            title: "Restricted Access",
            description: "Control access to content and features.",
          },
          {
            title: "Community",
            description: "Private spaces for member interaction.",
          },
          {
            title: "Analytics",
            description: "Membership, churn, and revenue metrics.",
          },
          {
            title: "Cancellation",
            description: "Cancellation and retention management.",
          },
        ],
      },

      plansSection: {
        title: "Choose the Right Plan",

        description: "All of our plans follow the same proven development process. The difference lies in the level of customization, features, and integrations included in each option.",
      },

      seo: {
        title: "Membership Platforms | SatCore Solutions",

        description: "Development of membership platforms to monetize exclusive content.",
        keywords: [
          "membership",
          "subscriptions",
          "exclusive content",
          "nextjs",
        ],
      },
    },

    pt: {
      title: "Plataformas de Assinatura",

      subtitle: "Gerencie assinantes e conteúdo exclusivo",

      description: "Criamos plataformas de assinatura que permitem monetizar conteúdo exclusivo através de assinaturas. De comunidades privadas a conteúdo premium, fornecemos ferramentas completas para gerenciar assinantes.",

      overview: {
        title: "O que é uma Plataforma de Assinatura?",

        description: "Uma plataforma de assinatura é um sistema que permite oferecer conteúdo ou serviços exclusivos em troca de uma assinatura. Os membros pagam regularmente para acessar benefícios que não estão disponíveis ao público geral.",

        image: "/images/subservices/membership-platforms/membership.png",

        imageAlt: "Plataforma de assinatura",

        useCases: [
          "Comunidades privadas",
          "Conteúdo premium",
          "Cursos exclusivos",
          "Serviços de assinatura",
          "Programas de fidelização",
        ],
      },

      workflow: {
        badge: "Nosso Processo",

        title: "Como Desenvolvemos sua Plataforma",

        description: "Criamos plataformas de assinatura completas e seguras.",

        steps: [
          {
            title: "Planejamento",
            description: "Definimos níveis de assinatura e benefícios.",
          },
          {
            title: "Design",
            description: "Criamos a experiência do usuário e gestão de acesso.",
          },
          {
            title: "Desenvolvimento",
            description: "Implementamos o sistema com gateways de pagamento.",
          },
          {
            title: "Conteúdo",
            description: "Configuramos a gestão de conteúdo exclusivo.",
          },
          {
            title: "Lançamento",
            description: "Publicamos e configuramos ferramentas de análise.",
          },
        ],
      },

      useCases: {
        title: "Quando Você Precisa de uma Plataforma de Assinatura?",

        description: "As plataformas de assinatura são ideais para monetizar conteúdo e criar comunidades.",

        useCases: [
          {
            title: "Receita Recorrente",
            description: "Gere renda previsível com assinaturas.",
          },
          {
            title: "Comunidade",
            description: "Construa uma comunidade engajada de membros.",
          },
          {
            title: "Conteúdo Exclusivo",
            description: "Ofereça valor agregado que não está disponível gratis.",
          },
          {
            title: "Retenção",
            description: "Mantenha membros engajados com benefícios contínuos.",
          },
          {
            title: "Dados",
            description: "Reúna dados valiosos sobre seus membros.",
          },
          {
            title: "Escalabilidade",
            description: "Esque seu negócio sem aumentar proporcionalmente o trabalho.",
          },
        ],
      },

      features: {
        title: "O Que Está Incluído?",

        description: "Criamos plataformas de assinatura completas com todas as ferramentas.",

        features: [
          {
            title: "Gestão de Assinantes",
            description: "Administre membros, níveis e assinaturas.",
          },
          {
            title: "Gateways de Pagamento",
            description: "Integração com Stripe, PayPal e mais.",
          },
          {
            title: "Conteúdo Exclusivo",
            description: "Publique conteúdo apenas para membros.",
          },
          {
            title: "Níveis de Assinatura",
            description: "Múltiplos níveis com diferentes benefícios.",
          },
          {
            title: "Acesso Restrito",
            description: "Controle o acesso a conteúdo e funções.",
          },
          {
            title: "Comunidade",
            description: "Espaços privados de interação entre membros.",
          },
          {
            title: "Análises",
            description: "Métricas de assinatura, churn e receita.",
          },
          {
            title: "Cancelamento",
            description: "Gestão de cancelamentos e retenção.",
          },
        ],
      },

      plansSection: {
        title: "Escolha o Plano Ideal",

        description: "Todos os nossos planos seguem a mesma metodologia de desenvolvimento. A diferença está no nível de personalização, funcionalidades e integrações incluídas em cada opção.",
      },

      seo: {
        title: "Plataformas de Assinatura | SatCore Solutions",

        description: "Desenvolvimento de plataformas de assinatura para monetizar conteúdo exclusivo.",
        keywords: [
          "assinatura",
          "membership",
          "conteúdo exclusivo",
          "nextjs",
        ],
      },
    },
  },
  plans: []
};