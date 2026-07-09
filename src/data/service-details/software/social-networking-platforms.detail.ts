import type {
  ServiceDetail,
} from "@/types/service-detail.types";

import {
  softwarePlans,
} from "@/data/plans/software/landing-pages";

export const socialNetworkingPlatformsDetail: ServiceDetail = {
  core: {
    id: "SRV-SNP",

    slug: "social-networking-platforms",

    name: "Social Networking Platforms",

    pillar: "software",

    icon: "share-2",

    heroImage: "/images/services/software/social-networking-platforms/hero/hero.png",

    plans: [],
  },

  translations: {
    es: {
      title: "Plataformas de Redes Sociales",

      subtitle: "Conecta personas con intereses comunes",

      description: "Creamos plataformas de redes sociales que permiten a usuarios conectar, compartir contenido e interactuar. Desde redes generales hasta comunidades especializadas, proporcionamos soluciones completas.",

      overview: {
        title: "¿Qué es una Plataforma de Redes Sociales?",

        description: "Una plataforma de redes sociales es un sitio que permite a usuarios crear perfiles, conectar con otros, compartir contenido y comunicarse. Incluye feeds, mensajería, grupos y herramientas de interacción.",

        image: "/images/subservices/social-networking-platforms/social.png",

        imageAlt: "Plataforma de redes sociales",

        useCases: [
          "Redes sociales generales",
          "Comunidades especializadas",
          "Redes profesionales",
          "Plataformas de nicho",
          "Redes privadas",
        ],
      },

      workflow: {
        badge: "Metodología",

        title: "¿Cómo desarrollamos tu Plataforma?",

        description: "Creamos plataformas de redes sociales completas y escalables.",

        steps: [
          {
            title: "Planificación",
            description: "Definimos características y experiencia de usuario."
          },
          {
            title: "Diseño",
            description: "Diseñamos la interfaz de red social."
          },
          {
            title: "Desarrollo",
            description: "Implementamos todas las funcionalidades."
          },
          {
            title: "Moderación",
            description: "Configuramos herramientas de seguridad."
          },
          {
            title: "Lanzamiento",
            description: "Publicamos y configuramos analytics."
          },
        ],
      },

      useCases: {
        title: "¿Cuándo necesitas una Plataforma de Redes Sociales?",

        description: "Las redes sociales son ideales para construir comunidades.",

        useCases: [
          {
            title: "Comunidad",
            description: "Construye una comunidad alrededor de un interés."
          },
          {
            title: "Engagement",
            description: "Mantén usuarios comprometidos con contenido."
          },
          {
            title: "Networking",
            description: "Conecta personas con intereses similares."
          },
          {
            title: "Contenido",
            description: "Permite compartir y descubrir contenido."
          },
          {
            title: "Monetización",
            description: "Genera ingresos a través de la plataforma."
          },
          {
            title: "Datos",
            description: "Recolecta datos valiosos sobre usuarios."
          },
        ],
      },

      features: {
        title: "¿Qué incluye nuestro servicio?",

        description: "Creamos plataformas de redes sociales completas.",

        features: [
          {
            title: "Perfiles",
            description: "Perfiles de usuario personalizables."
          },
          {
            title: "Feed",
            description: "Feed de contenido personalizado."
          },
          {
            title: "Conexiones",
            description: "Sistema de seguir y ser seguido."
          },
          {
            title: "Mensajería",
            description: "Chat privado entre usuarios."
          },
          {
            title: "Grupos",
            description: "Crea y únete a comunidades."
          },
          {
            title: "Contenido",
            description: "Fotos, videos, estados y más."
          },
          {
            title: "Notificaciones",
            description: "Alertas de actividad relevante."
          },
          {
            title: "Moderación",
            description: "Herramientas para mantener comunidad segura."
          },
        ],
      },

      plansSection: {
        title: "Elige el plan ideal",

        description: "Todos nuestros planes utilizan la misma metodología de trabajo. La diferencia está en el nivel de personalización, funcionalidades e integraciones incluidas en cada uno.",
      },

      seo: {
        title: "Plataformas de Redes Sociales | SatCore Solutions",

        description: "Desarrollo de plataformas de redes sociales personalizadas.",
        keywords: [
          "redes sociales",
          "social network",
          "comunidad",
          "plataforma social",
          "nextjs",
        ],
      },
    },

    en: {
      title: "Social Networking Platforms",

      subtitle: "Connect people with common interests",

      description: "We create social networking platforms that allow users to connect, share content, and interact. From general networks to specialized communities, we provide complete solutions.",

      overview: {
        title: "What is a Social Networking Platform?",

        description: "A social networking platform is a site that allows users to create profiles, connect with others, share content, and communicate. It includes feeds, messaging, groups, and interaction tools.",

        image: "/images/subservices/social-networking-platforms/social.png",

        imageAlt: "Social networking platform",

        useCases: [
          "General social networks",
          "Specialized communities",
          "Professional networks",
          "Niche platforms",
          "Private networks",
        ],
      },

      workflow: {
        badge: "Our Process",

        title: "How We Build Your Platform",

        description: "We create complete, scalable social networking platforms.",

        steps: [
          {
            title: "Planning",
            description: "We define features and user experience.",
          },
          {
            title: "Design",
            description: "We design the social network interface.",
          },
          {
            title: "Development",
            description: "We implement all functionalities.",
          },
          {
            title: "Moderation",
            description: "We configure security tools.",
          },
          {
            title: "Launch",
            description: "We publish and configure analytics.",
          },
        ],
      },

      useCases: {
        title: "When Do You Need a Social Networking Platform?",

        description: "Social networks are ideal for building communities.",

        useCases: [
          {
            title: "Community",
            description: "Build a community around an interest.",
          },
          {
            title: "Engagement",
            description: "Keep users engaged with content.",
          },
          {
            title: "Networking",
            description: "Connect people with similar interests.",
          },
          {
            title: "Content",
            description: "Allow sharing and discovering content.",
          },
          {
            title: "Monetization",
            description: "Generate revenue through the platform.",
          },
          {
            title: "Data",
            description: "Collect valuable data about users.",
          },
        ],
      },

      features: {
        title: "What's Included?",

        description: "We create complete social networking platforms.",

        features: [
          {
            title: "Profiles",
            description: "Customizable user profiles.",
          },
          {
            title: "Feed",
            description: "Personalized content feed.",
          },
          {
            title: "Connections",
            description: "Follow and be followed system.",
          },
          {
            title: "Messaging",
            description: "Private chat between users.",
          },
          {
            title: "Groups",
            description: "Create and join communities.",
          },
          {
            title: "Content",
            description: "Photos, videos, statuses, and more.",
          },
          {
            title: "Notifications",
            description: "Alerts for relevant activity.",
          },
          {
            title: "Moderation",
            description: "Tools to keep community safe.",
          },
        ],
      },

      plansSection: {
        title: "Choose the Right Plan",

        description: "All of our plans follow the same proven development process. The difference lies in the level of customization, features, and integrations included in each option.",
      },

      seo: {
        title: "Social Networking Platforms | SatCore Solutions",

        description: "Development of customized social networking platforms.",
        keywords: [
          "social network",
          "social platform",
          "community",
          "nextjs",
        ],
      },
    },

    pt: {
      title: "Plataformas de Redes Sociais",

      subtitle: "Conecte pessoas com interesses comuns",

      description: "Criamos plataformas de redes sociais que permitem usuários conectar, compartilhar conteúdo e interagir. De redes gerais a comunidades especializadas, fornecemos soluções completas.",

      overview: {
        title: "O que é uma Plataforma de Redes Sociais?",

        description: "Uma plataforma de redes sociais é um site que permite usuários criar perfis, conectar com outros, compartilhar conteúdo e se comunicar. Inclui feeds, mensagens, grupos e ferramentas de interação.",

        image: "/images/subservices/social-networking-platforms/social.png",

        imageAlt: "Plataforma de redes sociais",

        useCases: [
          "Redes sociais gerais",
          "Comunidades especializadas",
          "Redes profissionais",
          "Plataformas de nicho",
          "Redes privadas",
        ],
      },

      workflow: {
        badge: "Nosso Processo",

        title: "Como Desenvolvemos sua Plataforma",

        description: "Criamos plataformas de redes sociais completas e escaláveis.",

        steps: [
          {
            title: "Planejamento",
            description: "Definimos características e experiência do usuário.",
          },
          {
            title: "Design",
            description: "Criamos a interface de rede social.",
          },
          {
            title: "Desenvolvimento",
            description: "Implementamos todas as funcionalidades.",
          },
          {
            title: "Moderação",
            description: "Configuramos ferramentas de segurança.",
          },
          {
            title: "Lançamento",
            description: "Publicamos e configuramos analytics.",
          },
        ],
      },

      useCases: {
        title: "Quando Você Precisa de uma Plataforma de Redes Sociais?",

        description: "As redes sociais são ideais para construir comunidades.",

        useCases: [
          {
            title: "Comunidade",
            description: "Construa uma comunidade ao redor de um interesse.",
          },
          {
            title: "Engajamento",
            description: "Mantenha usuários engajados com conteúdo.",
          },
          {
            title: "Networking",
            description: "Conecte pessoas com interesses similares.",
          },
          {
            title: "Conteúdo",
            description: "Permita compartilhar e descobrir conteúdo.",
          },
          {
            title: "Monetização",
            description: "Gere receita através da plataforma.",
          },
          {
            title: "Dados",
            description: "Reúna dados valiosos sobre usuários.",
          },
        ],
      },

      features: {
        title: "O Que Está Incluído?",

        description: "Criamos plataformas de redes sociais completas.",

        features: [
          {
            title: "Perfis",
            description: "Perfis de usuário personalizáveis.",
          },
          {
            title: "Feed",
            description: "Feed de conteúdo personalizado.",
          },
          {
            title: "Conexões",
            description: "Sistema de seguir e ser seguido.",
          },
          {
            title: "Mensagens",
            description: "Chat privado entre usuários.",
          },
          {
            title: "Grupos",
            description: "Crie e ingresse em comunidades.",
          },
          {
            title: "Conteúdo",
            description: "Fotos, vídeos, estados e mais.",
          },
          {
            title: "Notificações",
            description: "Alertas de atividade relevante.",
          },
          {
            title: "Moderação",
            description: "Ferramentas para manter comunidade segura.",
          },
        ],
      },

      plansSection: {
        title: "Escolha o Plano Ideal",

        description: "Todos os nossos planos seguem a mesma metodologia de desenvolvimento. A diferença está no nível de personalização, funcionalidades e integrações incluídas em cada opção.",
      },

      seo: {
        title: "Plataformas de Redes Sociais | SatCore Solutions",

        description: "Desenvolvimento de plataformas de redes sociais personalizadas.",
        keywords: [
          "redes sociais",
          "social network",
          "comunidade",
          "plataforma social",
          "nextjs",
        ],
      },
    },
  },
  plans: []
};