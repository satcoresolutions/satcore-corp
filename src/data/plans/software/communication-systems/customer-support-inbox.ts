import type { ServicePlan } from "@/types/plan.types";

export const customerSupportInbox: ServicePlan = {
    core: {
        id: "MSG-003",

        slug: "customer-support-inbox",

        complexity: "⭐⭐⭐⭐⭐ (5/5)",

        price: "$2,250 - $3,750 USD",

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
            "Ticket Management",
            "Customer Threads",
            "Conversation Assignment",
            "Agent Workflows",
            "Message Persistence",
            "Real-time Notifications",
            "Conversation Status",
            "Support Analytics",
        ],

        integrations: [
            "Socket.io",
            "Prisma",
            "Email Services",
            "CRM APIs",
            "Notification Services",
            "Authentication Services",
        ],

        heroImage:
            "/images/services/software/hero/hero-customer-support-inbox.png",

        image:
            "/images/services/software/hero/hero-customer-support-inbox.png",
    },

    translations: {
        es: {
            name: "Customer Support Inbox",

            title: "Bandeja de Entrada para Soporte al Cliente",

            level: "🔴 Experto",

            category: "Sistemas de Comunicación",

            description:
                "Sistema centralizado de soporte al cliente para gestionar conversaciones, tickets, hilos de clientes y asignación de respuestas mediante workflows de atención.",

            time: "9-13 semanas",

            imageAlt:
                "Bandeja de soporte al cliente con tickets, conversaciones y asignación de agentes",

            target:
                "Empresas con equipos de soporte que necesitan centralizar conversaciones de clientes, distribuir tickets entre agentes y controlar el estado de las solicitudes.",

            support:
                "60 días soporte post-entrega",

            useCases: [
                "Soporte al cliente",
                "Atención de tickets",
                "Customer Success",
                "Equipos de soporte",
                "Mesa de ayuda",
                "Atención comercial",
                "Gestión de conversaciones",
                "Asignación de agentes",
                "Soporte multicanal",
            ],

            includes: [
                "Bandeja de soporte",
                "Gestión de tickets",
                "Hilos de conversación",
                "Conversaciones en tiempo real",
                "Asignación de agentes",
                "Estados de tickets",
                "Historial de conversaciones",
                "Notificaciones en tiempo real",
                "Gestión de clientes",
                "Filtros de conversaciones",
                "Workflows de atención",
                "Socket.io",
                "Prisma",
                "Next.js",
                "TypeScript",
            ],

            notIncludes: [
                "Contact center completo",
                "Telefonía VoIP",
                "Sistema CRM empresarial completo",
                "Chatbots avanzados con IA",
                "Integraciones ilimitadas",
                "Aplicaciones móviles nativas",
            ],

            features: [
                "Support Inbox",
                "Ticket Conversations",
                "Customer Threads",
                "Response Assignment",
                "Agent Workflows",
                "Ticket Status",
                "Real-time Messaging",
                "Conversation History",
                "Customer Management",
                "Support Filters",
                "Real-time Notifications",
                "Support Analytics",
            ],

            deliverables: [
                "Bandeja de soporte publicada",
                "Sistema de tickets",
                "Hilos de clientes",
                "Asignación de conversaciones",
                "Estados de tickets",
                "Historial de mensajes",
                "Notificaciones en tiempo real",
                "Workflows de soporte",
                "Gestión de agentes",
                "Código fuente",
                "Documentación técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Soporte centralizado",

                    description:
                        "Concentra las conversaciones y solicitudes de clientes dentro de una única bandeja de atención.",
                },

                {
                    title: "Asignación de agentes",

                    description:
                        "Permite distribuir conversaciones entre integrantes del equipo según las reglas y necesidades de atención.",
                },

                {
                    title: "Seguimiento de tickets",

                    description:
                        "Los estados permiten controlar el progreso de las solicitudes desde su recepción hasta su resolución.",
                },

                {
                    title: "Contexto completo del cliente",

                    description:
                        "Los hilos e historiales permiten conservar el contexto de las conversaciones y facilitar una atención más organizada.",
                },
            ],

            process: [
                {
                    title: "Diseño del soporte",

                    description:
                        "Definimos clientes, tickets, agentes, estados, prioridades, conversaciones y reglas de asignación.",
                },

                {
                    title: "Construcción de la bandeja",

                    description:
                        "Desarrollamos la interfaz centralizada para visualizar conversaciones, tickets y estados de atención.",
                },

                {
                    title: "Workflows de asignación",

                    description:
                        "Implementamos los mecanismos para asignar conversaciones a agentes y gestionar sus diferentes estados.",
                },

                {
                    title: "Comunicación en tiempo real",

                    description:
                        "Integramos Socket.io para mantener actualizados mensajes, estados y notificaciones durante la atención.",
                },

                {
                    title: "Pruebas y lanzamiento",

                    description:
                        "Validamos tickets, conversaciones, asignaciones, permisos, historial y notificaciones antes del lanzamiento.",
                },
            ],

            faq: [
                {
                    question: "¿Qué es una Customer Support Inbox?",

                    answer:
                        "Es una bandeja centralizada que permite a los equipos de soporte gestionar conversaciones y solicitudes de clientes.",
                },

                {
                    question: "¿Puede gestionar tickets?",

                    answer:
                        "Sí. El sistema permite crear, organizar, asignar y controlar el estado de los tickets de soporte.",
                },

                {
                    question: "¿Se pueden asignar conversaciones a agentes?",

                    answer:
                        "Sí. La plataforma incorpora workflows para distribuir conversaciones entre integrantes del equipo de soporte.",
                },

                {
                    question: "¿Funciona en tiempo real?",

                    answer:
                        "Sí. Socket.io permite actualizar mensajes, conversaciones, estados y notificaciones en tiempo real.",
                },
            ],
        },

        en: {
            name: "Customer Support Inbox",

            title: "Customer Support Inbox",

            level: "🔴 Expert",

            category: "Communication Systems",

            description:
                "Centralized customer support system for managing conversations, tickets, customer threads, and response assignments through support workflows.",

            time: "9-13 weeks",

            imageAlt:
                "Customer support inbox with tickets, conversations, and agent assignment",

            target:
                "Businesses with support teams that need to centralize customer conversations, distribute tickets among agents, and track request status.",

            support:
                "60 days post-delivery support",

            useCases: [
                "Customer support",
                "Ticket management",
                "Customer Success",
                "Support teams",
                "Help desk",
                "Sales support",
                "Conversation management",
                "Agent assignment",
                "Multi-channel support",
            ],

            includes: [
                "Support inbox",
                "Ticket management",
                "Conversation threads",
                "Real-time conversations",
                "Agent assignment",
                "Ticket statuses",
                "Conversation history",
                "Real-time notifications",
                "Customer management",
                "Conversation filters",
                "Support workflows",
                "Socket.io",
                "Prisma",
                "Next.js",
                "TypeScript",
            ],

            notIncludes: [
                "Complete contact center",
                "VoIP telephony",
                "Complete enterprise CRM",
                "Advanced AI chatbots",
                "Unlimited integrations",
                "Native mobile applications",
            ],

            features: [
                "Support Inbox",
                "Ticket Conversations",
                "Customer Threads",
                "Response Assignment",
                "Agent Workflows",
                "Ticket Status",
                "Real-time Messaging",
                "Conversation History",
                "Customer Management",
                "Support Filters",
                "Real-time Notifications",
                "Support Analytics",
            ],

            deliverables: [
                "Published support inbox",
                "Ticket system",
                "Customer threads",
                "Conversation assignment",
                "Ticket statuses",
                "Message history",
                "Real-time notifications",
                "Support workflows",
                "Agent management",
                "Source code",
                "Technical documentation",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Centralized Support",

                    description:
                        "Centralizes customer conversations and support requests within a single support inbox.",
                },

                {
                    title: "Agent Assignment",

                    description:
                        "Allows conversations to be distributed among team members according to support rules and requirements.",
                },

                {
                    title: "Ticket Tracking",

                    description:
                        "Ticket statuses make it possible to track requests from initial reception through resolution.",
                },

                {
                    title: "Complete Customer Context",

                    description:
                        "Threads and history preserve conversation context and help teams provide organized support.",
                },
            ],

            process: [
                {
                    title: "Support Design",

                    description:
                        "We define customers, tickets, agents, statuses, priorities, conversations, and assignment rules.",
                },

                {
                    title: "Inbox Development",

                    description:
                        "We build the centralized interface for viewing conversations, tickets, and support statuses.",
                },

                {
                    title: "Assignment Workflows",

                    description:
                        "We implement mechanisms for assigning conversations to agents and managing their different states.",
                },

                {
                    title: "Real-Time Communication",

                    description:
                        "We integrate Socket.io to keep messages, statuses, and notifications updated during support operations.",
                },

                {
                    title: "Testing and Launch",

                    description:
                        "We validate tickets, conversations, assignments, permissions, history, and notifications before launch.",
                },
            ],

            faq: [
                {
                    question: "What is a Customer Support Inbox?",

                    answer:
                        "It is a centralized inbox that allows support teams to manage customer conversations and requests.",
                },

                {
                    question: "Can it manage tickets?",

                    answer:
                        "Yes. The system can create, organize, assign, and track the status of support tickets.",
                },

                {
                    question: "Can conversations be assigned to agents?",

                    answer:
                        "Yes. The platform includes workflows for distributing conversations among support team members.",
                },

                {
                    question: "Does it work in real time?",

                    answer:
                        "Yes. Socket.io can update messages, conversations, statuses, and notifications in real time.",
                },
            ],
        },

        pt: {
            name: "Customer Support Inbox",

            title: "Caixa de Entrada de Suporte ao Cliente",

            level: "🔴 Especialista",

            category: "Sistemas de Comunicação",

            description:
                "Sistema centralizado de suporte ao cliente para gerenciar conversas, tickets, threads de clientes e atribuição de respostas por meio de workflows de atendimento.",

            time: "9-13 semanas",

            imageAlt:
                "Caixa de entrada de suporte ao cliente com tickets, conversas e atribuição de agentes",

            target:
                "Empresas com equipes de suporte que precisam centralizar conversas de clientes, distribuir tickets entre agentes e controlar o estado das solicitações.",

            support:
                "60 dias de suporte pós-entrega",

            useCases: [
                "Suporte ao cliente",
                "Atendimento de tickets",
                "Customer Success",
                "Equipes de suporte",
                "Help desk",
                "Atendimento comercial",
                "Gestão de conversas",
                "Atribuição de agentes",
                "Suporte multicanal",
            ],

            includes: [
                "Caixa de entrada de suporte",
                "Gestão de tickets",
                "Threads de conversação",
                "Conversas em tempo real",
                "Atribuição de agentes",
                "Status dos tickets",
                "Histórico de conversas",
                "Notificações em tempo real",
                "Gestão de clientes",
                "Filtros de conversas",
                "Workflows de atendimento",
                "Socket.io",
                "Prisma",
                "Next.js",
                "TypeScript",
            ],

            notIncludes: [
                "Contact center completo",
                "Telefonia VoIP",
                "CRM empresarial completo",
                "Chatbots avançados com IA",
                "Integrações ilimitadas",
                "Aplicativos móveis nativos",
            ],

            features: [
                "Support Inbox",
                "Ticket Conversations",
                "Customer Threads",
                "Response Assignment",
                "Agent Workflows",
                "Ticket Status",
                "Real-time Messaging",
                "Conversation History",
                "Customer Management",
                "Support Filters",
                "Real-time Notifications",
                "Support Analytics",
            ],

            deliverables: [
                "Caixa de suporte publicada",
                "Sistema de tickets",
                "Threads de clientes",
                "Atribuição de conversas",
                "Status dos tickets",
                "Histórico de mensagens",
                "Notificações em tempo real",
                "Workflows de suporte",
                "Gestão de agentes",
                "Código-fonte",
                "Documentação técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Suporte centralizado",

                    description:
                        "Centraliza as conversas e solicitações dos clientes em uma única caixa de atendimento.",
                },

                {
                    title: "Atribuição de agentes",

                    description:
                        "Permite distribuir conversas entre integrantes da equipe de acordo com as regras e necessidades de atendimento.",
                },

                {
                    title: "Acompanhamento de tickets",

                    description:
                        "Os status permitem acompanhar o progresso das solicitações desde o recebimento até a resolução.",
                },

                {
                    title: "Contexto completo do cliente",

                    description:
                        "As threads e históricos preservam o contexto das conversas e facilitam um atendimento mais organizado.",
                },
            ],

            process: [
                {
                    title: "Design do suporte",

                    description:
                        "Definimos clientes, tickets, agentes, status, prioridades, conversas e regras de atribuição.",
                },

                {
                    title: "Construção da caixa de entrada",

                    description:
                        "Desenvolvemos a interface centralizada para visualizar conversas, tickets e estados de atendimento.",
                },

                {
                    title: "Workflows de atribuição",

                    description:
                        "Implementamos mecanismos para atribuir conversas aos agentes e gerenciar seus diferentes estados.",
                },

                {
                    title: "Comunicação em tempo real",

                    description:
                        "Integramos Socket.io para manter mensagens, estados e notificações atualizados durante o atendimento.",
                },

                {
                    title: "Testes e lançamento",

                    description:
                        "Validamos tickets, conversas, atribuições, permissões, histórico e notificações antes do lançamento.",
                },
            ],

            faq: [
                {
                    question: "O que é uma Customer Support Inbox?",

                    answer:
                        "É uma caixa centralizada que permite às equipes de suporte gerenciar conversas e solicitações dos clientes.",
                },

                {
                    question: "Pode gerenciar tickets?",

                    answer:
                        "Sim. O sistema permite criar, organizar, atribuir e controlar o status dos tickets de suporte.",
                },

                {
                    question: "As conversas podem ser atribuídas a agentes?",

                    answer:
                        "Sim. A plataforma possui workflows para distribuir conversas entre integrantes da equipe de suporte.",
                },

                {
                    question: "Funciona em tempo real?",

                    answer:
                        "Sim. O Socket.io permite atualizar mensagens, conversas, estados e notificações em tempo real.",
                },
            ],
        },
    },
};