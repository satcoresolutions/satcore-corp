import type { ServicePlan } from "@/types/plan.types";

export const liveChat: ServicePlan = {
    core: {
        id: "MSG-001",

        slug: "live-chat",

        complexity: "⭐⭐⭐⭐ (4/5)",

        price: "$850 - $1,500 USD",

        pricingType: "fixed",

        automationLevel: "high",

        stack: [
            "Next.js",
            "TypeScript",
            "Socket.io",
            "Prisma",
        ],

        technologies: [
            "Next.js",
            "TypeScript",
            "Socket.io",
            "Prisma",
            "WebSockets",
            "Real-time Messaging",
            "Typing Indicators",
            "Online Presence",
            "Conversation State",
            "Message Persistence",
            "Real-time Events",
            "Responsive Interface",
        ],

        integrations: [
            "Socket.io",
            "Prisma",
            "Authentication Services",
            "Notification Services",
        ],

        heroImage:
            "/images/services/software/hero/hero-live-chat.png",

        image:
            "/images/services/software/hero/hero-live-chat.png",
    },

    translations: {
        es: {
            name: "Live Chat",

            title: "Sistema de Chat en Tiempo Real",

            level: "🟠 Avanzado",

            category: "Sistemas de Comunicación",

            description:
                "Sistema de mensajería en tiempo real para crear conversaciones instantáneas entre usuarios, con indicadores de escritura, presencia en línea y persistencia de mensajes.",

            time: "5-7 semanas",

            imageAlt:
                "Sistema de chat en tiempo real con conversaciones, indicadores de escritura y presencia de usuarios",

            target:
                "Empresas, plataformas y aplicaciones web que necesitan incorporar comunicación instantánea entre usuarios mediante un sistema de chat moderno.",

            support:
                "45 días soporte post-entrega",

            useCases: [
                "Chat en vivo",
                "Atención al usuario",
                "Comunicación instantánea",
                "Mensajería entre usuarios",
                "Soporte en tiempo real",
                "Comunidades digitales",
                "Plataformas web",
                "Comunicación privada",
            ],

            includes: [
                "Chat en tiempo real",
                "Mensajería instantánea",
                "Indicadores de escritura",
                "Estado en línea",
                "Persistencia de mensajes",
                "Historial de conversaciones",
                "Eventos mediante Socket.io",
                "Gestión de conversaciones",
                "Estados de conexión",
                "Interfaz responsive",
                "Next.js",
                "TypeScript",
                "Prisma",
            ],

            notIncludes: [
                "Videollamadas",
                "Llamadas de voz",
                "Sistemas de mensajería empresarial completos",
                "Automatizaciones avanzadas",
                "Aplicaciones móviles nativas",
                "Infraestructura de comunicación empresarial a gran escala",
            ],

            features: [
                "Real-time Messaging",
                "Typing Indicators",
                "Online Presence",
                "Persistent Conversations",
                "WebSocket Communication",
                "Message History",
                "Connection States",
                "Real-time Events",
                "Conversation Management",
                "Responsive Design",
            ],

            deliverables: [
                "Sistema de Live Chat publicado",
                "Interfaz de conversación",
                "Mensajería en tiempo real",
                "Indicadores de escritura",
                "Presencia de usuarios",
                "Persistencia de mensajes",
                "Historial de conversaciones",
                "Integración Socket.io",
                "Código fuente",
                "Documentación técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Comunicación instantánea",

                    description:
                        "Permite establecer conversaciones entre usuarios sin necesidad de actualizar manualmente la aplicación.",
                },

                {
                    title: "Presencia en línea",

                    description:
                        "Los usuarios pueden visualizar el estado de conexión de otros participantes en tiempo real.",
                },

                {
                    title: "Indicadores de escritura",

                    description:
                        "El sistema permite informar cuándo otro participante está escribiendo un mensaje.",
                },

                {
                    title: "Conversaciones persistentes",

                    description:
                        "Los mensajes pueden almacenarse y mantenerse disponibles para continuar las conversaciones posteriormente.",
                },
            ],

            process: [
                {
                    title: "Diseño de conversaciones",

                    description:
                        "Definimos usuarios, conversaciones, participantes, mensajes y estados de conexión.",
                },

                {
                    title: "Implementación en tiempo real",

                    description:
                        "Construimos la comunicación mediante Socket.io y configuramos los eventos necesarios para la mensajería.",
                },

                {
                    title: "Persistencia de mensajes",

                    description:
                        "Integramos Prisma para almacenar conversaciones, mensajes y datos relacionados.",
                },

                {
                    title: "Pruebas de comunicación",

                    description:
                        "Validamos conexiones, mensajes, presencia, indicadores de escritura y recuperación del historial.",
                },
            ],

            faq: [
                {
                    question: "¿Qué es un Live Chat?",

                    answer:
                        "Es un sistema de comunicación que permite a los usuarios intercambiar mensajes instantáneamente mediante una aplicación web.",
                },

                {
                    question: "¿Utiliza comunicación en tiempo real?",

                    answer:
                        "Sí. La solución utiliza Socket.io para gestionar eventos y comunicación en tiempo real.",
                },

                {
                    question: "¿Incluye indicador de escritura?",

                    answer:
                        "Sí. El sistema puede mostrar cuándo un usuario está escribiendo un mensaje.",
                },

                {
                    question: "¿Los mensajes quedan guardados?",

                    answer:
                        "Sí. La arquitectura contempla persistencia de conversaciones y mensajes mediante Prisma.",
                },
            ],
        },

        en: {
            name: "Live Chat",

            title: "Real-Time Chat System",

            level: "🟠 Advanced",

            category: "Communication Systems",

            description:
                "Real-time messaging system designed for instant conversations between users, including typing indicators, online presence, and persistent messages.",

            time: "5-7 weeks",

            imageAlt:
                "Real-time chat system with conversations, typing indicators, and user presence",

            target:
                "Businesses, platforms, and web applications that need instant communication between users through a modern chat system.",

            support:
                "45 days post-delivery support",

            useCases: [
                "Live chat",
                "User support",
                "Instant communication",
                "User messaging",
                "Real-time support",
                "Digital communities",
                "Web platforms",
                "Private communication",
            ],

            includes: [
                "Real-time chat",
                "Instant messaging",
                "Typing indicators",
                "Online presence",
                "Message persistence",
                "Conversation history",
                "Socket.io events",
                "Conversation management",
                "Connection states",
                "Responsive interface",
                "Next.js",
                "TypeScript",
                "Prisma",
            ],

            notIncludes: [
                "Video calls",
                "Voice calls",
                "Complete enterprise messaging systems",
                "Advanced automations",
                "Native mobile applications",
                "Large-scale enterprise communication infrastructure",
            ],

            features: [
                "Real-time Messaging",
                "Typing Indicators",
                "Online Presence",
                "Persistent Conversations",
                "WebSocket Communication",
                "Message History",
                "Connection States",
                "Real-time Events",
                "Conversation Management",
                "Responsive Design",
            ],

            deliverables: [
                "Published Live Chat system",
                "Conversation interface",
                "Real-time messaging",
                "Typing indicators",
                "User presence",
                "Message persistence",
                "Conversation history",
                "Socket.io integration",
                "Source code",
                "Technical documentation",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Instant Communication",

                    description:
                        "Allows users to communicate without manually refreshing the application.",
                },

                {
                    title: "Online Presence",

                    description:
                        "Users can see the connection status of other participants in real time.",
                },

                {
                    title: "Typing Indicators",

                    description:
                        "The system can indicate when another participant is typing a message.",
                },

                {
                    title: "Persistent Conversations",

                    description:
                        "Messages can be stored and remain available for users to continue conversations later.",
                },
            ],

            process: [
                {
                    title: "Conversation Design",

                    description:
                        "We define users, conversations, participants, messages, and connection states.",
                },

                {
                    title: "Real-Time Implementation",

                    description:
                        "We build communication using Socket.io and configure the required messaging events.",
                },

                {
                    title: "Message Persistence",

                    description:
                        "We integrate Prisma to store conversations, messages, and related data.",
                },

                {
                    title: "Communication Testing",

                    description:
                        "We validate connections, messages, presence, typing indicators, and history retrieval.",
                },
            ],

            faq: [
                {
                    question: "What is Live Chat?",

                    answer:
                        "It is a communication system that allows users to exchange messages instantly through a web application.",
                },

                {
                    question: "Does it use real-time communication?",

                    answer:
                        "Yes. The solution uses Socket.io to manage real-time events and communication.",
                },

                {
                    question: "Does it include typing indicators?",

                    answer:
                        "Yes. The system can display when a user is typing a message.",
                },

                {
                    question: "Are messages stored?",

                    answer:
                        "Yes. The architecture supports persistent conversations and messages using Prisma.",
                },
            ],
        },

        pt: {
            name: "Live Chat",

            title: "Sistema de Chat em Tempo Real",

            level: "🟠 Avançado",

            category: "Sistemas de Comunicação",

            description:
                "Sistema de mensagens em tempo real para criar conversas instantâneas entre usuários, com indicadores de digitação, presença online e persistência de mensagens.",

            time: "5-7 semanas",

            imageAlt:
                "Sistema de chat em tempo real com conversas, indicadores de digitação e presença dos usuários",

            target:
                "Empresas, plataformas e aplicações web que precisam incorporar comunicação instantânea entre usuários por meio de um sistema moderno de chat.",

            support:
                "45 dias de suporte pós-entrega",

            useCases: [
                "Chat ao vivo",
                "Atendimento ao usuário",
                "Comunicação instantânea",
                "Mensagens entre usuários",
                "Suporte em tempo real",
                "Comunidades digitais",
                "Plataformas web",
                "Comunicação privada",
            ],

            includes: [
                "Chat em tempo real",
                "Mensagens instantâneas",
                "Indicadores de digitação",
                "Presença online",
                "Persistência de mensagens",
                "Histórico de conversas",
                "Eventos com Socket.io",
                "Gestão de conversas",
                "Estados de conexão",
                "Interface responsiva",
                "Next.js",
                "TypeScript",
                "Prisma",
            ],

            notIncludes: [
                "Videochamadas",
                "Chamadas de voz",
                "Sistemas completos de mensagens empresariais",
                "Automações avançadas",
                "Aplicativos móveis nativos",
                "Infraestrutura empresarial de comunicação em grande escala",
            ],

            features: [
                "Real-time Messaging",
                "Typing Indicators",
                "Online Presence",
                "Persistent Conversations",
                "WebSocket Communication",
                "Message History",
                "Connection States",
                "Real-time Events",
                "Conversation Management",
                "Responsive Design",
            ],

            deliverables: [
                "Sistema de Live Chat publicado",
                "Interface de conversação",
                "Mensagens em tempo real",
                "Indicadores de digitação",
                "Presença dos usuários",
                "Persistência de mensagens",
                "Histórico de conversas",
                "Integração Socket.io",
                "Código-fonte",
                "Documentação técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Comunicação instantânea",

                    description:
                        "Permite estabelecer conversas entre usuários sem necessidade de atualizar manualmente a aplicação.",
                },

                {
                    title: "Presença online",

                    description:
                        "Os usuários podem visualizar o estado de conexão de outros participantes em tempo real.",
                },

                {
                    title: "Indicadores de digitação",

                    description:
                        "O sistema permite informar quando outro participante está digitando uma mensagem.",
                },

                {
                    title: "Conversas persistentes",

                    description:
                        "As mensagens podem ser armazenadas e permanecer disponíveis para continuar as conversas posteriormente.",
                },
            ],

            process: [
                {
                    title: "Design das conversas",

                    description:
                        "Definimos usuários, conversas, participantes, mensagens e estados de conexão.",
                },

                {
                    title: "Implementação em tempo real",

                    description:
                        "Construímos a comunicação utilizando Socket.io e configuramos os eventos necessários para as mensagens.",
                },

                {
                    title: "Persistência das mensagens",

                    description:
                        "Integramos Prisma para armazenar conversas, mensagens e dados relacionados.",
                },

                {
                    title: "Testes de comunicação",

                    description:
                        "Validamos conexões, mensagens, presença, indicadores de digitação e recuperação do histórico.",
                },
            ],

            faq: [
                {
                    question: "O que é um Live Chat?",

                    answer:
                        "É um sistema de comunicação que permite aos usuários trocar mensagens instantaneamente por meio de uma aplicação web.",
                },

                {
                    question: "Utiliza comunicação em tempo real?",

                    answer:
                        "Sim. A solução utiliza Socket.io para gerenciar eventos e comunicação em tempo real.",
                },

                {
                    question: "Inclui indicador de digitação?",

                    answer:
                        "Sim. O sistema pode mostrar quando um usuário está digitando uma mensagem.",
                },

                {
                    question: "As mensagens ficam armazenadas?",

                    answer:
                        "Sim. A arquitetura contempla persistência de conversas e mensagens utilizando Prisma.",
                },
            ],
        },
    },
};