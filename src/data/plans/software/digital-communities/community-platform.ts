import type {
    ServicePlan,
} from "@/types/plan.types";

export const communityPlatform: ServicePlan = {
    core: {
        // ────────────────────────────────────
        // Identidad
        // ────────────────────────────────────

        id: "COMM-001",

        slug: "community-platform",

        // ────────────────────────────────────
        // Comercial
        // ────────────────────────────────────

        complexity: "⭐⭐⭐⭐ (4/5)",

        price: "$3,750 - $7,000 USD",

        pricingType: "fixed",

        automationLevel: "high",

        // ────────────────────────────────────
        // Técnico
        // ────────────────────────────────────

        stack: [
            "Next.js",
            "NestJS",
            "TypeScript",
            "Prisma",
            "WebSockets",
            "Socket.io",
        ],

        technologies: [
            "Next.js",
            "NestJS",
            "TypeScript",
            "Prisma",
            "WebSockets",
            "Socket.io",
            "Real-time Communication",
            "Live Updates",
            "Persistent Feed State",
            "Nested Comments",
            "Text Search",
            "User Presence",
            "Session Management",
            "Real-time Notifications",
            "Type-safe Architecture",
        ],

        integrations: [
            "WebSocket Services",
            "Socket.io",
            "Email Services",
            "REST APIs",
            "Authentication Providers",
        ],

        // ────────────────────────────────────
        // Multimedia
        // ────────────────────────────────────

        heroImage:
            "/images/services/software/hero/hero-community-platform.png",

        image:
            "/images/services/software/hero/hero-community-platform.png",
    },

    translations: {
        // ═════════════════════════════════════
        // ESPAÑOL
        // ═════════════════════════════════════

        es: {
            name:
                "Plataforma Comunitaria",

            title:
                "Plataforma Digital Comunitaria",

            level:
                "🟠 Avanzado",

            category:
                "Comunidades Digitales",

            description:
                "Plataforma digital comunitaria diseñada para conectar usuarios mediante canales de conversación en tiempo real, feeds de contenido con comentarios anidados, indicadores de presencia y búsqueda rápida de contenido.",

            time:
                "8-14 semanas",

            imageAlt:
                "Plataforma digital comunitaria con chat en tiempo real, feeds de comentarios y usuarios activos",

            target:
                "Comunidades digitales, organizaciones, proyectos sociales, plataformas educativas y equipos que necesitan construir espacios de interacción entre usuarios con comunicación y actualización de contenido en tiempo real.",

            support:
                "60 días soporte post-entrega",

            useCases: [
                "Comunidades digitales",
                "Comunidades educativas",
                "Comunidades profesionales",
                "Plataformas sociales",
                "Grupos de usuarios",
                "Comunicación comunitaria",
                "Foros interactivos",
                "Redes internas",
            ],

            includes: [
                "Plataforma comunitaria",
                "Frontend Next.js",
                "Backend NestJS",
                "Registro y gestión de usuarios",
                "Autenticación",
                "Perfiles de usuario",
                "Canales de chat en tiempo real",
                "Comunicación mediante WebSockets",
                "Socket.io",
                "Feeds de contenido",
                "Comentarios anidados",
                "Indicadores de usuarios activos",
                "Gestión de sesiones",
                "Búsqueda de texto",
                "Actualizaciones en tiempo real",
                "Notificaciones en tiempo real",
                "Persistencia de contenido",
                "Prisma ORM",
                "TypeScript",
                "Componentes responsive",
            ],

            notIncludes: [
                "Aplicaciones móviles nativas",
                "Sistema avanzado de recomendación mediante IA",
                "Moderación automática mediante IA",
                "Infraestructura de streaming de video",
                "Videollamadas en tiempo real",
                "Sistema empresarial de analítica avanzada",
                "Infraestructura cloud administrada permanentemente",
            ],

            features: [
                "Real-time Group Chat",
                "Chat Channels",
                "Nested Comment Feeds",
                "Active User Indicators",
                "User Presence",
                "Live Updates",
                "Persistent Feed State",
                "Fast Text Search",
                "Session Management",
                "Real-time Notifications",
                "WebSockets",
                "Socket.io",
                "Prisma ORM",
                "Type-safe Architecture",
                "Responsive Design",
            ],

            deliverables: [
                "Plataforma comunitaria publicada",
                "Frontend Next.js",
                "Backend NestJS",
                "Sistema de usuarios",
                "Autenticación",
                "Perfiles de usuario",
                "Canales de chat",
                "Chat en tiempo real",
                "Sistema de feeds",
                "Comentarios anidados",
                "Indicadores de presencia",
                "Gestión de sesiones",
                "Búsqueda de texto",
                "Actualizaciones en tiempo real",
                "Notificaciones",
                "Configuración Prisma",
                "Integración Socket.io",
                "Código fuente",
                "Documentación técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Comunicación en tiempo real",

                    description:
                        "Permite que los miembros de una comunidad intercambien mensajes y reciban actualizaciones sin necesidad de recargar la aplicación.",
                },

                {
                    title:
                        "Conversaciones organizadas",

                    description:
                        "Los canales de conversación permiten separar diferentes temas, grupos o espacios de interacción dentro de la comunidad.",
                },

                {
                    title:
                        "Feeds persistentes",

                    description:
                        "La plataforma mantiene el estado y contenido de los feeds para facilitar conversaciones continuas y seguimiento de publicaciones.",
                },

                {
                    title:
                        "Interacción mediante comentarios",

                    description:
                        "Los comentarios anidados permiten desarrollar conversaciones estructuradas alrededor de publicaciones y contenidos comunitarios.",
                },

                {
                    title:
                        "Presencia de usuarios",

                    description:
                        "Los indicadores de usuarios activos permiten conocer qué miembros están conectados o participando en la plataforma.",
                },

                {
                    title:
                        "Búsqueda rápida",

                    description:
                        "La búsqueda de texto facilita encontrar publicaciones, conversaciones y contenido dentro de la comunidad.",
                },
            ],

            process: [
                {
                    title:
                        "Diseño de la comunidad",

                    description:
                        "Definimos usuarios, perfiles, grupos, canales, publicaciones, comentarios y reglas de interacción.",
                },

                {
                    title:
                        "Arquitectura en tiempo real",

                    description:
                        "Diseñamos la arquitectura de comunicación utilizando WebSockets y Socket.io para manejar eventos y actualizaciones en tiempo real.",
                },

                {
                    title:
                        "Desarrollo de la plataforma",

                    description:
                        "Construimos el frontend con Next.js y el backend con NestJS, TypeScript y Prisma.",
                },

                {
                    title:
                        "Feeds y conversaciones",

                    description:
                        "Implementamos publicaciones, feeds persistentes, comentarios anidados y canales de conversación comunitaria.",
                },

                {
                    title:
                        "Presencia y búsqueda",

                    description:
                        "Configuramos indicadores de usuarios activos, gestión de sesiones y mecanismos de búsqueda rápida de contenido.",
                },

                {
                    title:
                        "Pruebas en tiempo real",

                    description:
                        "Validamos conexiones simultáneas, mensajes, actualizaciones de feeds, comentarios, presencia de usuarios y búsqueda antes del lanzamiento.",
                },
            ],

            faq: [
                {
                    question:
                        "¿Qué es una plataforma digital comunitaria?",

                    answer:
                        "Es una plataforma diseñada para permitir que un grupo de usuarios interactúe, comparta contenido, participe en conversaciones y mantenga comunicación dentro de un espacio digital común.",
                },

                {
                    question:
                        "¿Incluye chat en tiempo real?",

                    answer:
                        "Sí. La plataforma contempla canales de chat y comunicación en tiempo real mediante WebSockets y Socket.io.",
                },

                {
                    question:
                        "¿Los comentarios pueden ser anidados?",

                    answer:
                        "Sí. Las publicaciones pueden incorporar estructuras de comentarios anidados para organizar conversaciones y respuestas.",
                },

                {
                    question:
                        "¿Puede mostrar usuarios activos?",

                    answer:
                        "Sí. La plataforma contempla indicadores de presencia y sesiones activas para representar qué usuarios están conectados.",
                },

                {
                    question:
                        "¿Incluye búsqueda de contenido?",

                    answer:
                        "Sí. El sistema contempla búsqueda rápida de texto para localizar contenido y conversaciones dentro de la comunidad.",
                },

                {
                    question:
                        "¿Las actualizaciones son en tiempo real?",

                    answer:
                        "Sí. WebSockets y Socket.io permiten transmitir eventos y actualizaciones en tiempo real entre el servidor y los clientes conectados.",
                },
            ],
        },

        // ═════════════════════════════════════
        // ENGLISH
        // ═════════════════════════════════════

        en: {
            name:
                "Community Platform",

            title:
                "Digital Community Platform",

            level:
                "🟠 Advanced",

            category:
                "Digital Communities",

            description:
                "Digital community platform designed to connect users through real-time group chat channels, nested content feeds, active user presence indicators, and fast text search.",

            time:
                "8-14 weeks",

            imageAlt:
                "Digital community platform with real-time chat, comment feeds, and active users",

            target:
                "Digital communities, organizations, social projects, educational platforms, and teams that need to build interactive spaces with real-time communication and content updates.",

            support:
                "60 days post-delivery support",

            useCases: [
                "Digital communities",
                "Educational communities",
                "Professional communities",
                "Social platforms",
                "User groups",
                "Community communication",
                "Interactive forums",
                "Internal networks",
            ],

            includes: [
                "Community platform",
                "Next.js frontend",
                "NestJS backend",
                "User registration and management",
                "Authentication",
                "User profiles",
                "Real-time chat channels",
                "WebSocket communication",
                "Socket.io",
                "Content feeds",
                "Nested comments",
                "Active user indicators",
                "Session management",
                "Text search",
                "Real-time updates",
                "Real-time notifications",
                "Content persistence",
                "Prisma ORM",
                "TypeScript",
                "Responsive components",
            ],

            notIncludes: [
                "Native mobile applications",
                "Advanced AI recommendation system",
                "AI-powered automated moderation",
                "Video streaming infrastructure",
                "Real-time video calls",
                "Enterprise advanced analytics",
                "Fully managed cloud infrastructure",
            ],

            features: [
                "Real-time Group Chat",
                "Chat Channels",
                "Nested Comment Feeds",
                "Active User Indicators",
                "User Presence",
                "Live Updates",
                "Persistent Feed State",
                "Fast Text Search",
                "Session Management",
                "Real-time Notifications",
                "WebSockets",
                "Socket.io",
                "Prisma ORM",
                "Type-safe Architecture",
                "Responsive Design",
            ],

            deliverables: [
                "Published community platform",
                "Next.js frontend",
                "NestJS backend",
                "User system",
                "Authentication",
                "User profiles",
                "Chat channels",
                "Real-time chat",
                "Feed system",
                "Nested comments",
                "Presence indicators",
                "Session management",
                "Text search",
                "Real-time updates",
                "Notifications",
                "Prisma configuration",
                "Socket.io integration",
                "Source code",
                "Technical documentation",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Real-time Communication",

                    description:
                        "Allows community members to exchange messages and receive updates without refreshing the application.",
                },

                {
                    title:
                        "Organized Conversations",

                    description:
                        "Conversation channels allow different topics, groups, or interaction spaces to be separated within the community.",
                },

                {
                    title:
                        "Persistent Feeds",

                    description:
                        "The platform maintains feed state and content to support ongoing conversations and continuous post tracking.",
                },

                {
                    title:
                        "Comment-based Interaction",

                    description:
                        "Nested comments allow structured conversations to develop around community posts and content.",
                },

                {
                    title:
                        "User Presence",

                    description:
                        "Active user indicators allow members to see which users are currently connected or participating on the platform.",
                },

                {
                    title:
                        "Fast Search",

                    description:
                        "Text search makes it easier to find posts, conversations, and content within the community.",
                },
            ],

            process: [
                {
                    title:
                        "Community Design",

                    description:
                        "We define users, profiles, groups, channels, posts, comments, and interaction rules.",
                },

                {
                    title:
                        "Real-time Architecture",

                    description:
                        "We design the communication architecture using WebSockets and Socket.io to handle real-time events and updates.",
                },

                {
                    title:
                        "Platform Development",

                    description:
                        "We build the frontend with Next.js and the backend with NestJS, TypeScript, and Prisma.",
                },

                {
                    title:
                        "Feeds and Conversations",

                    description:
                        "We implement posts, persistent feeds, nested comments, and community conversation channels.",
                },

                {
                    title:
                        "Presence and Search",

                    description:
                        "We configure active user indicators, session management, and fast content search mechanisms.",
                },

                {
                    title:
                        "Real-time Testing",

                    description:
                        "We validate simultaneous connections, messages, feed updates, comments, user presence, and search before launch.",
                },
            ],

            faq: [
                {
                    question:
                        "What is a digital community platform?",

                    answer:
                        "It is a platform designed to allow a group of users to interact, share content, participate in conversations, and communicate within a shared digital space.",
                },

                {
                    question:
                        "Does it include real-time chat?",

                    answer:
                        "Yes. The platform includes chat channels and real-time communication using WebSockets and Socket.io.",
                },

                {
                    question:
                        "Can comments be nested?",

                    answer:
                        "Yes. Posts can include nested comment structures to organize conversations and replies.",
                },

                {
                    question:
                        "Can it show active users?",

                    answer:
                        "Yes. The platform includes presence indicators and active sessions to represent connected users.",
                },

                {
                    question:
                        "Does it include content search?",

                    answer:
                        "Yes. The system includes fast text search for locating content and conversations within the community.",
                },

                {
                    question:
                        "Are updates real-time?",

                    answer:
                        "Yes. WebSockets and Socket.io allow events and updates to be transmitted in real time between the server and connected clients.",
                },
            ],
        },

        // ═════════════════════════════════════
        // PORTUGUÊS
        // ═════════════════════════════════════

        pt: {
            name:
                "Plataforma Comunitária",

            title:
                "Plataforma Digital Comunitária",

            level:
                "🟠 Avançado",

            category:
                "Comunidades Digitais",

            description:
                "Plataforma digital comunitária desenvolvida para conectar usuários por meio de canais de chat em tempo real, feeds de conteúdo com comentários aninhados, indicadores de presença e busca rápida de texto.",

            time:
                "8-14 semanas",

            imageAlt:
                "Plataforma digital comunitária com chat em tempo real, feeds de comentários e usuários ativos",

            target:
                "Comunidades digitais, organizações, projetos sociais, plataformas educacionais e equipes que precisam criar espaços interativos com comunicação e atualização de conteúdo em tempo real.",

            support:
                "60 dias de suporte pós-entrega",

            useCases: [
                "Comunidades digitais",
                "Comunidades educacionais",
                "Comunidades profissionais",
                "Plataformas sociais",
                "Grupos de usuários",
                "Comunicação comunitária",
                "Fóruns interativos",
                "Redes internas",
            ],

            includes: [
                "Plataforma comunitária",
                "Frontend Next.js",
                "Backend NestJS",
                "Cadastro e gestão de usuários",
                "Autenticação",
                "Perfis de usuários",
                "Canais de chat em tempo real",
                "Comunicação por WebSockets",
                "Socket.io",
                "Feeds de conteúdo",
                "Comentários aninhados",
                "Indicadores de usuários ativos",
                "Gestão de sessões",
                "Busca de texto",
                "Atualizações em tempo real",
                "Notificações em tempo real",
                "Persistência de conteúdo",
                "Prisma ORM",
                "TypeScript",
                "Componentes responsivos",
            ],

            notIncludes: [
                "Aplicações móveis nativas",
                "Sistema avançado de recomendação por IA",
                "Moderação automática por IA",
                "Infraestrutura de streaming de vídeo",
                "Videochamadas em tempo real",
                "Sistema empresarial de análise avançada",
                "Infraestrutura cloud totalmente gerenciada",
            ],

            features: [
                "Real-time Group Chat",
                "Chat Channels",
                "Nested Comment Feeds",
                "Active User Indicators",
                "User Presence",
                "Live Updates",
                "Persistent Feed State",
                "Fast Text Search",
                "Session Management",
                "Real-time Notifications",
                "WebSockets",
                "Socket.io",
                "Prisma ORM",
                "Type-safe Architecture",
                "Responsive Design",
            ],

            deliverables: [
                "Plataforma comunitária publicada",
                "Frontend Next.js",
                "Backend NestJS",
                "Sistema de usuários",
                "Autenticação",
                "Perfis de usuários",
                "Canais de chat",
                "Chat em tempo real",
                "Sistema de feeds",
                "Comentários aninhados",
                "Indicadores de presença",
                "Gestão de sessões",
                "Busca de texto",
                "Atualizações em tempo real",
                "Notificações",
                "Configuração Prisma",
                "Integração Socket.io",
                "Código-fonte",
                "Documentação técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Comunicação em tempo real",

                    description:
                        "Permite que os membros da comunidade troquem mensagens e recebam atualizações sem precisar recarregar a aplicação.",
                },

                {
                    title:
                        "Conversas organizadas",

                    description:
                        "Os canais de conversa permitem separar diferentes temas, grupos ou espaços de interação dentro da comunidade.",
                },

                {
                    title:
                        "Feeds persistentes",

                    description:
                        "A plataforma mantém o estado e o conteúdo dos feeds para facilitar conversas contínuas e acompanhamento das publicações.",
                },

                {
                    title:
                        "Interação por comentários",

                    description:
                        "Os comentários aninhados permitem desenvolver conversas estruturadas ao redor de publicações e conteúdos comunitários.",
                },

                {
                    title:
                        "Presença de usuários",

                    description:
                        "Os indicadores de usuários ativos permitem identificar quais membros estão conectados ou participando da plataforma.",
                },

                {
                    title:
                        "Busca rápida",

                    description:
                        "A busca de texto facilita encontrar publicações, conversas e conteúdos dentro da comunidade.",
                },
            ],

            process: [
                {
                    title:
                        "Definição da comunidade",

                    description:
                        "Definimos usuários, perfis, grupos, canais, publicações, comentários e regras de interação.",
                },

                {
                    title:
                        "Arquitetura em tempo real",

                    description:
                        "Projetamos a arquitetura de comunicação utilizando WebSockets e Socket.io para gerenciar eventos e atualizações em tempo real.",
                },

                {
                    title:
                        "Desenvolvimento da plataforma",

                    description:
                        "Construímos o frontend com Next.js e o backend com NestJS, TypeScript e Prisma.",
                },

                {
                    title:
                        "Feeds e conversas",

                    description:
                        "Implementamos publicações, feeds persistentes, comentários aninhados e canais de conversa comunitária.",
                },

                {
                    title:
                        "Presença e busca",

                    description:
                        "Configuramos indicadores de usuários ativos, gestão de sessões e mecanismos de busca rápida de conteúdo.",
                },

                {
                    title:
                        "Testes em tempo real",

                    description:
                        "Validamos conexões simultâneas, mensagens, atualizações de feeds, comentários, presença de usuários e busca antes do lançamento.",
                },
            ],

            faq: [
                {
                    question:
                        "O que é uma plataforma digital comunitária?",

                    answer:
                        "É uma plataforma desenvolvida para permitir que um grupo de usuários interaja, compartilhe conteúdo, participe de conversas e mantenha comunicação dentro de um espaço digital comum.",
                },

                {
                    question:
                        "Inclui chat em tempo real?",

                    answer:
                        "Sim. A plataforma contempla canais de chat e comunicação em tempo real utilizando WebSockets e Socket.io.",
                },

                {
                    question:
                        "Os comentários podem ser aninhados?",

                    answer:
                        "Sim. As publicações podem incluir estruturas de comentários aninhados para organizar conversas e respostas.",
                },

                {
                    question:
                        "Pode mostrar usuários ativos?",

                    answer:
                        "Sim. A plataforma contempla indicadores de presença e sessões ativas para representar os usuários conectados.",
                },

                {
                    question:
                        "Inclui busca de conteúdo?",

                    answer:
                        "Sim. O sistema contempla busca rápida de texto para localizar conteúdos e conversas dentro da comunidade.",
                },

                {
                    question:
                        "As atualizações são em tempo real?",

                    answer:
                        "Sim. WebSockets e Socket.io permitem transmitir eventos e atualizações em tempo real entre o servidor e os clientes conectados.",
                },
            ],
        },
    },
};