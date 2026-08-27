import type { ServicePlan } from "@/types/plan.types";

export const internalMessaging: ServicePlan = {
    core: {
        id: "MSG-002",

        slug: "internal-messaging",

        complexity: "⭐⭐⭐⭐⭐ (5/5)",

        price: "$1,500 - $2,500 USD",

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
            "Messaging Channels",
            "File Sharing",
            "Message Persistence",
            "Conversation History",
            "User Presence",
            "Real-time Notifications",
            "Access Control",
        ],

        integrations: [
            "Socket.io",
            "Prisma",
            "Cloud Storage",
            "Authentication Services",
            "Notification Services",
        ],

        heroImage:
            "/images/services/software/hero/hero-internal-messaging.png",

        image:
            "/images/services/software/hero/hero-internal-messaging.png",
    },

    translations: {
        es: {
            name: "Internal Messaging",

            title: "Sistema de Mensajería Interna",

            level: "🔴 Experto",

            category: "Sistemas de Comunicación",

            description:
                "Plataforma de comunicación interna para equipos con canales de conversación, intercambio de archivos, historial persistente y comunicación en tiempo real.",

            time: "7-10 semanas",

            imageAlt:
                "Plataforma de mensajería interna para equipos con canales, archivos y conversaciones",

            target:
                "Empresas y equipos de trabajo que necesitan centralizar su comunicación interna mediante canales privados, conversaciones persistentes y colaboración en tiempo real.",

            support:
                "60 días soporte post-entrega",

            useCases: [
                "Comunicación interna",
                "Equipos de trabajo",
                "Canales empresariales",
                "Colaboración de equipos",
                "Mensajería privada",
                "Intercambio de archivos",
                "Comunicación departamental",
                "Comunidades privadas",
            ],

            includes: [
                "Canales de comunicación",
                "Conversaciones privadas",
                "Mensajería en tiempo real",
                "Intercambio de archivos",
                "Historial de mensajes",
                "Persistencia de conversaciones",
                "Presencia de usuarios",
                "Notificaciones en tiempo real",
                "Gestión de participantes",
                "Control de acceso",
                "Next.js",
                "TypeScript",
                "Socket.io",
                "Prisma",
            ],

            notIncludes: [
                "Videoconferencias",
                "Telefonía empresarial",
                "Gestión documental empresarial completa",
                "Automatizaciones complejas de recursos humanos",
                "Aplicaciones móviles nativas",
                "Infraestructura empresarial ilimitada",
            ],

            features: [
                "Team Communication Channels",
                "Real-time Messaging",
                "File Sharing",
                "Message History",
                "Persistent Conversations",
                "User Presence",
                "Real-time Notifications",
                "Participant Management",
                "Access Control",
                "Responsive Design",
            ],

            deliverables: [
                "Sistema de mensajería interna",
                "Canales de comunicación",
                "Conversaciones privadas",
                "Sistema de archivos compartidos",
                "Historial de mensajes",
                "Presencia de usuarios",
                "Notificaciones en tiempo real",
                "Control de participantes",
                "Código fuente",
                "Documentación técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Comunicación centralizada",

                    description:
                        "Permite concentrar la comunicación de los equipos dentro de una plataforma única.",
                },

                {
                    title: "Canales organizados",

                    description:
                        "Los canales permiten separar conversaciones según equipos, proyectos, departamentos o temas.",
                },

                {
                    title: "Colaboración en tiempo real",

                    description:
                        "Los integrantes pueden intercambiar mensajes y archivos mientras mantienen una comunicación activa.",
                },

                {
                    title: "Historial persistente",

                    description:
                        "Las conversaciones y mensajes permanecen almacenados para facilitar la consulta posterior.",
                },
            ],

            process: [
                {
                    title: "Arquitectura de comunicación",

                    description:
                        "Definimos equipos, canales, participantes, permisos, conversaciones y reglas de comunicación.",
                },

                {
                    title: "Desarrollo de mensajería",

                    description:
                        "Implementamos la comunicación en tiempo real utilizando Socket.io y construimos la interfaz de conversaciones.",
                },

                {
                    title: "Archivos e historial",

                    description:
                        "Integramos almacenamiento de archivos y persistencia de mensajes mediante Prisma.",
                },

                {
                    title: "Permisos y pruebas",

                    description:
                        "Configuramos el acceso a canales y validamos mensajes, archivos, historial y eventos en tiempo real.",
                },
            ],

            faq: [
                {
                    question: "¿Qué es un sistema de mensajería interna?",

                    answer:
                        "Es una plataforma privada de comunicación diseñada para que los integrantes de una organización puedan comunicarse entre sí.",
                },

                {
                    question: "¿Permite crear canales?",

                    answer:
                        "Sí. El sistema permite organizar la comunicación mediante canales destinados a equipos, proyectos o temas específicos.",
                },

                {
                    question: "¿Permite compartir archivos?",

                    answer:
                        "Sí. La plataforma puede incorporar intercambio de archivos dentro de las conversaciones.",
                },

                {
                    question: "¿Los mensajes se almacenan?",

                    answer:
                        "Sí. Las conversaciones y mensajes pueden mantenerse almacenados mediante Prisma para consultar su historial.",
                },
            ],
        },

        en: {
            name: "Internal Messaging",

            title: "Internal Messaging System",

            level: "🔴 Expert",

            category: "Communication Systems",

            description:
                "Internal communication platform for teams with conversation channels, file sharing, persistent history, and real-time communication.",

            time: "7-10 weeks",

            imageAlt:
                "Internal team messaging platform with channels, files, and conversations",

            target:
                "Businesses and teams that need to centralize internal communication through private channels, persistent conversations, and real-time collaboration.",

            support:
                "60 days post-delivery support",

            useCases: [
                "Internal communication",
                "Work teams",
                "Business channels",
                "Team collaboration",
                "Private messaging",
                "File sharing",
                "Department communication",
                "Private communities",
            ],

            includes: [
                "Communication channels",
                "Private conversations",
                "Real-time messaging",
                "File sharing",
                "Message history",
                "Persistent conversations",
                "User presence",
                "Real-time notifications",
                "Participant management",
                "Access control",
                "Next.js",
                "TypeScript",
                "Socket.io",
                "Prisma",
            ],

            notIncludes: [
                "Video conferencing",
                "Enterprise telephony",
                "Complete enterprise document management",
                "Complex HR automations",
                "Native mobile applications",
                "Unlimited enterprise infrastructure",
            ],

            features: [
                "Team Communication Channels",
                "Real-time Messaging",
                "File Sharing",
                "Message History",
                "Persistent Conversations",
                "User Presence",
                "Real-time Notifications",
                "Participant Management",
                "Access Control",
                "Responsive Design",
            ],

            deliverables: [
                "Internal messaging system",
                "Communication channels",
                "Private conversations",
                "Shared file system",
                "Message history",
                "User presence",
                "Real-time notifications",
                "Participant management",
                "Source code",
                "Technical documentation",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Centralized Communication",

                    description:
                        "Centralizes team communication within a single platform.",
                },

                {
                    title: "Organized Channels",

                    description:
                        "Channels allow conversations to be separated by teams, projects, departments, or topics.",
                },

                {
                    title: "Real-Time Collaboration",

                    description:
                        "Team members can exchange messages and files while maintaining active communication.",
                },

                {
                    title: "Persistent History",

                    description:
                        "Conversations and messages remain stored for future reference.",
                },
            ],

            process: [
                {
                    title: "Communication Architecture",

                    description:
                        "We define teams, channels, participants, permissions, conversations, and communication rules.",
                },

                {
                    title: "Messaging Development",

                    description:
                        "We implement real-time communication using Socket.io and build the conversation interface.",
                },

                {
                    title: "Files and History",

                    description:
                        "We integrate file storage and message persistence using Prisma.",
                },

                {
                    title: "Permissions and Testing",

                    description:
                        "We configure channel access and validate messages, files, history, and real-time events.",
                },
            ],

            faq: [
                {
                    question: "What is an internal messaging system?",

                    answer:
                        "It is a private communication platform designed for members of an organization to communicate with each other.",
                },

                {
                    question: "Can it create channels?",

                    answer:
                        "Yes. The system can organize communication through channels dedicated to teams, projects, or specific topics.",
                },

                {
                    question: "Can users share files?",

                    answer:
                        "Yes. The platform can support file sharing within conversations.",
                },

                {
                    question: "Are messages stored?",

                    answer:
                        "Yes. Conversations and messages can be persisted through Prisma for historical access.",
                },
            ],
        },

        pt: {
            name: "Internal Messaging",

            title: "Sistema de Mensagens Internas",

            level: "🔴 Especialista",

            category: "Sistemas de Comunicação",

            description:
                "Plataforma de comunicação interna para equipes com canais de conversa, compartilhamento de arquivos, histórico persistente e comunicação em tempo real.",

            time: "7-10 semanas",

            imageAlt:
                "Plataforma de mensagens internas para equipes com canais, arquivos e conversas",

            target:
                "Empresas e equipes que precisam centralizar sua comunicação interna por meio de canais privados, conversas persistentes e colaboração em tempo real.",

            support:
                "60 dias de suporte pós-entrega",

            useCases: [
                "Comunicação interna",
                "Equipes de trabalho",
                "Canais empresariais",
                "Colaboração de equipes",
                "Mensagens privadas",
                "Compartilhamento de arquivos",
                "Comunicação departamental",
                "Comunidades privadas",
            ],

            includes: [
                "Canais de comunicação",
                "Conversas privadas",
                "Mensagens em tempo real",
                "Compartilhamento de arquivos",
                "Histórico de mensagens",
                "Conversas persistentes",
                "Presença dos usuários",
                "Notificações em tempo real",
                "Gestão de participantes",
                "Controle de acesso",
                "Next.js",
                "TypeScript",
                "Socket.io",
                "Prisma",
            ],

            notIncludes: [
                "Videoconferências",
                "Telefonia empresarial",
                "Gestão documental empresarial completa",
                "Automações complexas de recursos humanos",
                "Aplicativos móveis nativos",
                "Infraestrutura empresarial ilimitada",
            ],

            features: [
                "Team Communication Channels",
                "Real-time Messaging",
                "File Sharing",
                "Message History",
                "Persistent Conversations",
                "User Presence",
                "Real-time Notifications",
                "Participant Management",
                "Access Control",
                "Responsive Design",
            ],

            deliverables: [
                "Sistema de mensagens internas",
                "Canais de comunicação",
                "Conversas privadas",
                "Sistema de arquivos compartilhados",
                "Histórico de mensagens",
                "Presença dos usuários",
                "Notificações em tempo real",
                "Gestão de participantes",
                "Código-fonte",
                "Documentação técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Comunicação centralizada",

                    description:
                        "Permite concentrar a comunicação das equipes dentro de uma única plataforma.",
                },

                {
                    title: "Canais organizados",

                    description:
                        "Os canais permitem separar conversas por equipes, projetos, departamentos ou temas.",
                },

                {
                    title: "Colaboração em tempo real",

                    description:
                        "Os integrantes podem trocar mensagens e arquivos enquanto mantêm uma comunicação ativa.",
                },

                {
                    title: "Histórico persistente",

                    description:
                        "As conversas e mensagens permanecem armazenadas para facilitar consultas posteriores.",
                },
            ],

            process: [
                {
                    title: "Arquitetura de comunicação",

                    description:
                        "Definimos equipes, canais, participantes, permissões, conversas e regras de comunicação.",
                },

                {
                    title: "Desenvolvimento de mensagens",

                    description:
                        "Implementamos a comunicação em tempo real utilizando Socket.io e construímos a interface de conversas.",
                },

                {
                    title: "Arquivos e histórico",

                    description:
                        "Integramos armazenamento de arquivos e persistência de mensagens utilizando Prisma.",
                },

                {
                    title: "Permissões e testes",

                    description:
                        "Configuramos o acesso aos canais e validamos mensagens, arquivos, histórico e eventos em tempo real.",
                },
            ],

            faq: [
                {
                    question: "O que é um sistema de mensagens internas?",

                    answer:
                        "É uma plataforma privada de comunicação desenvolvida para que os integrantes de uma organização possam se comunicar entre si.",
                },

                {
                    question: "Permite criar canais?",

                    answer:
                        "Sim. O sistema permite organizar a comunicação por meio de canais destinados a equipes, projetos ou temas específicos.",
                },

                {
                    question: "Permite compartilhar arquivos?",

                    answer:
                        "Sim. A plataforma pode incorporar compartilhamento de arquivos dentro das conversas.",
                },

                {
                    question: "As mensagens são armazenadas?",

                    answer:
                        "Sim. As conversas e mensagens podem ser armazenadas utilizando Prisma para consulta do histórico.",
                },
            ],
        },
    },
};