import type {
  ServiceDetail,
} from "@/types/service-detail.types";

import {
  softwarePlans,
} from "@/data/plans/software/landing-pages";

export const digitalCommunitiesDetail: ServiceDetail = {
  core: {
    id: "SRV-DC",

    slug: "digital-communities",

    name: "Digital Communities",

    pillar: "software",

    icon: "users",

    heroImage: "/images/services/software/hero/hero.png",

    plans: [],
  },

  translations: {
    es: {
      title: "Comunidades Digitales",

      subtitle: "Plataformas para construir comunidad online",

      description: "Creamos plataformas de comunidades digitales que conectan a personas con intereses comunes. Desde foros de discusión hasta redes sociales privadas, construimos espacios donde los miembros pueden interactuar y crecer juntos.",

      overview: {
        title: "¿Qué es una Comunidad Digital?",

        description: "Una comunidad digital es una plataforma online que agrupa a personas con intereses, objetivos o características comunes. Permite la interacción, el intercambio de conocimiento y la construcción de relaciones entre miembros.",

        image: "/images/subservices/software/comunidades-digitales.png",

        imageAlt: "Comunidad digital",

        useCases: [
          "Foros de discusión",
          "Redes sociales privadas",
          "Comunidades de marca",
          "Plataformas de miembros",
          "Redes profesionales",
        ],
      },

      workflow: {
        badge: "Metodología",

        title: "¿Cómo desarrollamos tu Comunidad?",

        description: "Creamos comunidades digitales vibrantes y funcionales.",

        steps: [
          {
            title: "Planificación",
            description: "Definimos objetivos, estructura y características de la comunidad."
          },
          {
            title: "Diseño UX",
            description: "Diseñamos una experiencia que facilita la interacción."
          },
          {
            title: "Desarrollo",
            description: "Implementamos la plataforma con todas las funcionalidades."
          },
          {
            title: "Moderación",
            description: "Configuramos herramientas para gestionar la comunidad."
          },
          {
            title: "Lanzamiento",
            description: "Publicamos y establecemos las bases para el crecimiento."
          },
        ],
      },

      useCases: {
        title: "¿Cuándo necesitas una Comunidad Digital?",

        description: "Las comunidades digitales son ideales para construir engagement sostenido.",

        useCases: [
          {
            title: "Engagement",
            description: "Construye relaciones duraderas con tu audiencia."
          },
          {
            title: "Soporte",
            description: "Permite que usuarios se ayuda mutuamente."
          },
          {
            title: "Feedback",
            description: "Recolecta opiniones directas de tus usuarios."
          },
          {
            title: "Contenido",
            description: "Genera contenido generado por usuarios."
          },
          {
            title: "Lealtad",
            description: "Incrementa la lealtad a tu marca."
          },
          {
            title: "Networking",
            description: "Conecta a personas con intereses similares."
          },
        ],
      },

      features: {
        title: "¿Qué incluye nuestro servicio?",

        description: "Creamos comunidades digitales completas con herramientas de interacción.",

        features: [
          {
            title: "Foros y Discusiones",
            description: "Espacios organizados por temas y categorías."
          },
          {
            title: "Perfiles de Usuario",
            description: "Perfiles personalizables con información relevante."
          },
          {
            title: "Mensajería Privada",
            description: "Comunicación directa entre miembros."
          },
          {
            title: "Sistema de Moderación",
            description: "Herramientas para mantener un ambiente saludable."
          },
          {
            title: "Gamificación",
            description: "Puntos, badges y niveles para motivar participación."
          },
          {
            title: "Eventos",
            description: "Organización de eventos virtuales y presenciales."
          },
          {
            title: "Análisis",
            description: "Métricas de engagement y crecimiento."
          },
          {
            title: "Móvil",
            description: "Acceso desde aplicaciones móviles."
          },
        ],
      },

      plansSection: {
        title: "Elige el plan ideal",

        description: "Todos nuestros planes utilizan la misma metodología de trabajo. La diferencia está en el nivel de personalización, funcionalidades e integraciones incluidas en cada uno.",
      },

      seo: {
        title: "Comunidades Digitales | SatCore Solutions",

        description: "Desarrollo de plataformas de comunidades digitales para construir engagement.",
        keywords: [
          "comunidades digitales",
          "foros",
          "comunidad online",
          "engagement",
          "nextjs",
        ],
      },
    },

    en: {
      title: "Digital Communities",

      subtitle: "Platforms to build online community",

      description: "We create digital community platforms that connect people with common interests. From discussion forums to private social networks, we build spaces where members can interact and grow together.",

      overview: {
        title: "What is a Digital Community?",

        description: "A digital community is an online platform that groups people with common interests, goals, or characteristics. It allows interaction, knowledge exchange, and building relationships among members.",

        image: "/images/subservices/digital-communities/community.png",

        imageAlt: "Digital community",

        useCases: [
          "Discussion forums",
          "Private social networks",
          "Brand communities",
          "Member platforms",
          "Professional networks",
        ],
      },

      workflow: {
        badge: "Our Process",

        title: "How We Build Your Community",

        description: "We create vibrant, functional digital communities.",

        steps: [
          {
            title: "Planning",
            description: "We define objectives, structure, and community features.",
          },
          {
            title: "UX Design",
            description: "We design an experience that facilitates interaction.",
          },
          {
            title: "Development",
            description: "We implement the platform with all functionalities.",
          },
          {
            title: "Moderation",
            description: "We configure tools to manage the community.",
          },
          {
            title: "Launch",
            description: "We publish and establish foundations for growth.",
          },
        ],
      },

      useCases: {
        title: "When Do You Need a Digital Community?",

        description: "Digital communities are ideal for building sustained engagement.",

        useCases: [
          {
            title: "Engagement",
            description: "Build lasting relationships with your audience.",
          },
          {
            title: "Support",
            description: "Allow users to help each other.",
          },
          {
            title: "Feedback",
            description: "Collect direct opinions from your users.",
          },
          {
            title: "Content",
            description: "Generate user-generated content.",
          },
          {
            title: "Loyalty",
            description: "Increase brand loyalty.",
          },
          {
            title: "Networking",
            description: "Connect people with similar interests.",
          },
        ],
      },

      features: {
        title: "What's Included?",

        description: "We create complete digital communities with interaction tools.",

        features: [
          {
            title: "Forums & Discussions",
            description: "Spaces organized by topics and categories.",
          },
          {
            title: "User Profiles",
            description: "Customizable profiles with relevant information.",
          },
          {
            title: "Private Messaging",
            description: "Direct communication between members.",
          },
          {
            title: "Moderation System",
            description: "Tools to maintain a healthy environment.",
          },
          {
            title: "Gamification",
            description: "Points, badges, and levels to encourage participation.",
          },
          {
            title: "Events",
            description: "Organization of virtual and in-person events.",
          },
          {
            title: "Analytics",
            description: "Engagement and growth metrics.",
          },
          {
            title: "Mobile",
            description: "Access from mobile apps.",
          },
        ],
      },

      plansSection: {
        title: "Choose the Right Plan",

        description: "All of our plans follow the same proven development process. The difference lies in the level of customization, features, and integrations included in each option.",
      },

      seo: {
        title: "Digital Communities | SatCore Solutions",

        description: "Development of digital community platforms to build engagement.",
        keywords: [
          "digital communities",
          "forums",
          "online community",
          "engagement",
          "nextjs",
        ],
      },
    },

    pt: {
      title: "Comunidades Digitais",

      subtitle: "Plataformas para construir comunidade online",

      description: "Criamos plataformas de comunidades digitais que conectam pessoas com interesses comuns. De fóruns de discussão a redes sociais privadas, construímos espaços onde membros podem interagir e crescer juntos.",

      overview: {
        title: "O que é uma Comunidade Digital?",

        description: "Uma comunidade digital é uma plataforma online que agrupa pessoas com interesses, objetivos ou características comuns. Permite a interação, troca de conhecimento e construção de relacionamentos entre membros.",

        image: "/images/subservices/digital-communities/community.png",

        imageAlt: "Comunidade digital",

        useCases: [
          "Fóruns de discussão",
          "Redes sociais privadas",
          "Comunidades de marca",
          "Plataformas de membros",
          "Redes profissionais",
        ],
      },

      workflow: {
        badge: "Nosso Processo",

        title: "Como Desenvolvemos sua Comunidade",

        description: "Criamos comunidades digitais vibrantes e funcionais.",

        steps: [
          {
            title: "Planejamento",
            description: "Definimos objetivos, estrutura e características da comunidade.",
          },
          {
            title: "Design UX",
            description: "Criamos uma experiência que facilita a interação.",
          },
          {
            title: "Desenvolvimento",
            description: "Implementamos a plataforma com todas as funcionalidades.",
          },
          {
            title: "Moderação",
            description: "Configuramos ferramentas para gerenciar a comunidade.",
          },
          {
            title: "Lançamento",
            description: "Publicamos e estabelecemos as bases para o crescimento.",
          },
        ],
      },

      useCases: {
        title: "Quando Você Precisa de uma Comunidade Digital?",

        description: "As comunidades digitais são ideais para construir engajamento sostenido.",

        useCases: [
          {
            title: "Engajamento",
            description: "Construa relacionamentos duradouros com sua audiência.",
          },
          {
            title: "Suporte",
            description: "Permita que usuários se ajude mutuamente.",
          },
          {
            title: "Feedback",
            description: "Reúna opiniões diretas dos seus usuários.",
          },
          {
            title: "Conteúdo",
            description: "Gere conteúdo gerado por usuários.",
          },
          {
            title: "Lealdade",
            description: "Aumente a lealdade à sua marca.",
          },
          {
            title: "Networking",
            description: "Conecte pessoas com interesses similares.",
          },
        ],
      },

      features: {
        title: "O Que Está Incluído?",

        description: "Criamos comunidades digitais completas com ferramentas de interação.",

        features: [
          {
            title: "Fóruns e Discussões",
            description: "Espaços organizados por tópicos e categorias.",
          },
          {
            title: "Perfis de Usuário",
            description: "Perfis personalizáveis com informação relevante.",
          },
          {
            title: "Mensagens Privadas",
            description: "Comunicação direta entre membros.",
          },
          {
            title: "Sistema de Moderação",
            description: "Ferramentas para manter um ambiente saudável.",
          },
          {
            title: "Gamificação",
            description: "Pontos, badges e níveis para motivar participação.",
          },
          {
            title: "Eventos",
            description: "Organização de eventos virtuais e presenciais.",
          },
          {
            title: "Análises",
            description: "Métricas de engajamento e crescimento.",
          },
          {
            title: "Móvel",
            description: "Acesso através de aplicativos móveis.",
          },
        ],
      },

      plansSection: {
        title: "Escolha o Plano Ideal",

        description: "Todos os nossos planos seguem a mesma metodologia de desenvolvimento. A diferença está no nível de personalização, funcionalidades e integrações incluídas em cada opção.",
      },

      seo: {
        title: "Comunidades Digitais | SatCore Solutions",

        description: "Desenvolvimento de plataformas de comunidades digitais para construir engajamento.",
        keywords: [
          "comunidades digitais",
          "fóruns",
          "comunidade online",
          "engajamento",
          "nextjs",
        ],
      },
    },
  },
  plans: []
};