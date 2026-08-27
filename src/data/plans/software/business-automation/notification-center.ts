import type { ServicePlan } from "@/types/plan.types";

export const notificationCenter: ServicePlan = {
    core: {
        id: "AUTO-002",

        slug: "notification-center",

        complexity: "⭐⭐⭐⭐ (4/5)",

        price: "$750 - $1,500 USD",

        pricingType: "fixed",

        automationLevel: "high",

        stack: [
            "Next.js",
            "TypeScript",
            "Background Jobs",
            "Webhooks",
        ],

        technologies: [
            "Next.js",
            "TypeScript",
            "Notification Engine",
            "Background Jobs",
            "Event-driven Architecture",
            "Notification Templates",
            "Delivery Queues",
            "Retry Processing",
            "Notification Preferences",
            "Delivery Status Tracking",
        ],

        integrations: [
            "Email Services",
            "SMS Providers",
            "Push Notification Services",
            "REST APIs",
            "Webhooks",
        ],

        heroImage:
            "/images/services/software/hero/hero-notification-center.png",

        image:
            "/images/services/software/hero/hero-notification-center.png",
    },

    translations: {
        es: {
            name: "Notification Center",

            title: "Centro de Notificaciones",

            level: "🟠 Avanzado",

            category: "Automatización Empresarial",

            description:
                "Sistema centralizado para orquestar notificaciones por correo electrónico, SMS y push mediante eventos, colas de procesamiento y reglas de entrega.",

            time: "4-7 semanas",

            imageAlt:
                "Centro de notificaciones multicanal para correo, SMS y push",

            target:
                "Empresas y plataformas digitales que necesitan centralizar y automatizar el envío de comunicaciones a usuarios mediante múltiples canales.",

            support:
                "45 días soporte post-entrega",

            useCases: [
                "Notificaciones empresariales",
                "Alertas de usuarios",
                "Confirmaciones",
                "Recordatorios",
                "Notificaciones transaccionales",
                "Mensajes de sistema",
                "Alertas administrativas",
                "Comunicación multicanal",
            ],

            includes: [
                "Centro de notificaciones",
                "Orquestación de email",
                "Orquestación de SMS",
                "Notificaciones push",
                "Plantillas de mensajes",
                "Colas de entrega",
                "Procesamiento en segundo plano",
                "Reintentos automáticos",
                "Estados de entrega",
                "Preferencias de usuario",
                "Triggers de notificación",
                "Historial de notificaciones",
            ],

            notIncludes: [
                "Proveedor propio de SMS",
                "Proveedor propio de correo",
                "Infraestructura de telecomunicaciones",
                "Campañas de marketing masivo",
                "Plataforma completa de marketing automation",
            ],

            features: [
                "Email Notifications",
                "SMS Notifications",
                "Push Notifications",
                "Notification Orchestration",
                "Background Jobs",
                "Delivery Queues",
                "Retry Processing",
                "Notification Templates",
                "Delivery Tracking",
                "User Preferences",
                "Event-driven Notifications",
            ],

            deliverables: [
                "Centro de notificaciones",
                "Motor de orquestación",
                "Plantillas de mensajes",
                "Integración email",
                "Integración SMS",
                "Integración push",
                "Colas de procesamiento",
                "Sistema de reintentos",
                "Seguimiento de entregas",
                "Código fuente",
                "Documentación técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Comunicación centralizada",

                    description:
                        "Permite administrar diferentes canales de comunicación desde una arquitectura centralizada.",
                },

                {
                    title: "Entrega automatizada",

                    description:
                        "Las notificaciones pueden activarse automáticamente según eventos y condiciones definidas.",
                },

                {
                    title: "Múltiples canales",

                    description:
                        "Permite coordinar comunicaciones mediante email, SMS y notificaciones push.",
                },

                {
                    title: "Mayor confiabilidad",

                    description:
                        "Las colas y mecanismos de reintento ayudan a gestionar fallos temporales durante la entrega.",
                },
            ],

            process: [
                {
                    title: "Definición de canales",

                    description:
                        "Identificamos los canales de comunicación, tipos de mensajes y eventos que deben generar notificaciones.",
                },

                {
                    title: "Diseño del sistema",

                    description:
                        "Definimos plantillas, preferencias, prioridades, estados y reglas de entrega.",
                },

                {
                    title: "Integración de proveedores",

                    description:
                        "Conectamos los servicios externos de email, SMS y push requeridos por el proyecto.",
                },

                {
                    title: "Pruebas de entrega",

                    description:
                        "Validamos envíos, estados, errores, reintentos y diferentes escenarios de comunicación.",
                },
            ],

            faq: [
                {
                    question: "¿Qué es un Notification Center?",

                    answer:
                        "Es un sistema centralizado que administra y coordina el envío de notificaciones mediante diferentes canales.",
                },

                {
                    question: "¿Puede enviar emails y SMS?",

                    answer:
                        "Sí. El sistema puede integrarse con proveedores de email y SMS para realizar envíos automatizados.",
                },

                {
                    question: "¿Soporta notificaciones push?",

                    answer:
                        "Sí. Puede integrarse con servicios de notificaciones push según las plataformas utilizadas.",
                },

                {
                    question: "¿Incluye reintentos automáticos?",

                    answer:
                        "Sí. La arquitectura puede utilizar colas y mecanismos de reintento para gestionar fallos temporales de entrega.",
                },
            ],
        },

        en: {
            name: "Notification Center",

            title: "Notification Center",

            level: "🟠 Advanced",

            category: "Business Automation",

            description:
                "Centralized system for orchestrating email, SMS, and push notifications through events, processing queues, and delivery rules.",

            time: "4-7 weeks",

            imageAlt:
                "Multichannel notification center for email, SMS, and push",

            target:
                "Businesses and digital platforms that need to centralize and automate user communications across multiple channels.",

            support:
                "45 days post-delivery support",

            useCases: [
                "Business notifications",
                "User alerts",
                "Confirmations",
                "Reminders",
                "Transactional notifications",
                "System messages",
                "Administrative alerts",
                "Multichannel communication",
            ],

            includes: [
                "Notification center",
                "Email orchestration",
                "SMS orchestration",
                "Push notifications",
                "Message templates",
                "Delivery queues",
                "Background processing",
                "Automatic retries",
                "Delivery status tracking",
                "User preferences",
                "Notification triggers",
                "Notification history",
            ],

            notIncludes: [
                "Own SMS provider",
                "Own email provider",
                "Telecommunications infrastructure",
                "Mass marketing campaigns",
                "Complete marketing automation platform",
            ],

            features: [
                "Email Notifications",
                "SMS Notifications",
                "Push Notifications",
                "Notification Orchestration",
                "Background Jobs",
                "Delivery Queues",
                "Retry Processing",
                "Notification Templates",
                "Delivery Tracking",
                "User Preferences",
                "Event-driven Notifications",
            ],

            deliverables: [
                "Notification center",
                "Orchestration engine",
                "Message templates",
                "Email integration",
                "SMS integration",
                "Push integration",
                "Processing queues",
                "Retry system",
                "Delivery tracking",
                "Source code",
                "Technical documentation",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Centralized Communication",

                    description:
                        "Manages multiple communication channels through a centralized architecture.",
                },

                {
                    title: "Automated Delivery",

                    description:
                        "Notifications can be triggered automatically according to predefined events and conditions.",
                },

                {
                    title: "Multiple Channels",

                    description:
                        "Coordinates communications through email, SMS, and push notifications.",
                },

                {
                    title: "Improved Reliability",

                    description:
                        "Queues and retry mechanisms help handle temporary delivery failures.",
                },
            ],

            process: [
                {
                    title: "Channel Definition",

                    description:
                        "We identify communication channels, message types, and events that should generate notifications.",
                },

                {
                    title: "System Design",

                    description:
                        "We define templates, preferences, priorities, states, and delivery rules.",
                },

                {
                    title: "Provider Integration",

                    description:
                        "We connect the required external email, SMS, and push notification services.",
                },

                {
                    title: "Delivery Testing",

                    description:
                        "We validate deliveries, statuses, errors, retries, and different communication scenarios.",
                },
            ],

            faq: [
                {
                    question: "What is a Notification Center?",

                    answer:
                        "It is a centralized system that manages and coordinates notifications across different communication channels.",
                },

                {
                    question: "Can it send emails and SMS?",

                    answer:
                        "Yes. It can integrate with email and SMS providers for automated delivery.",
                },

                {
                    question: "Does it support push notifications?",

                    answer:
                        "Yes. It can integrate with push notification services depending on the platforms being used.",
                },

                {
                    question: "Does it include automatic retries?",

                    answer:
                        "Yes. Queues and retry mechanisms can be used to handle temporary delivery failures.",
                },
            ],
        },

        pt: {
            name: "Notification Center",

            title: "Central de Notificações",

            level: "🟠 Avançado",

            category: "Automação Empresarial",

            description:
                "Sistema centralizado para orquestrar notificações por email, SMS e push por meio de eventos, filas de processamento e regras de entrega.",

            time: "4-7 semanas",

            imageAlt:
                "Central de notificações multicanal para email, SMS e push",

            target:
                "Empresas e plataformas digitais que precisam centralizar e automatizar comunicações com usuários por meio de múltiplos canais.",

            support:
                "45 dias de suporte pós-entrega",

            useCases: [
                "Notificações empresariais",
                "Alertas de usuários",
                "Confirmações",
                "Lembretes",
                "Notificações transacionais",
                "Mensagens do sistema",
                "Alertas administrativos",
                "Comunicação multicanal",
            ],

            includes: [
                "Central de notificações",
                "Orquestração de email",
                "Orquestração de SMS",
                "Notificações push",
                "Modelos de mensagens",
                "Filas de entrega",
                "Processamento em segundo plano",
                "Retentativas automáticas",
                "Status de entrega",
                "Preferências do usuário",
                "Triggers de notificação",
                "Histórico de notificações",
            ],

            notIncludes: [
                "Provedor próprio de SMS",
                "Provedor próprio de email",
                "Infraestrutura de telecomunicações",
                "Campanhas de marketing em massa",
                "Plataforma completa de automação de marketing",
            ],

            features: [
                "Email Notifications",
                "SMS Notifications",
                "Push Notifications",
                "Notification Orchestration",
                "Background Jobs",
                "Delivery Queues",
                "Retry Processing",
                "Notification Templates",
                "Delivery Tracking",
                "User Preferences",
                "Event-driven Notifications",
            ],

            deliverables: [
                "Central de notificações",
                "Motor de orquestração",
                "Modelos de mensagens",
                "Integração de email",
                "Integração de SMS",
                "Integração push",
                "Filas de processamento",
                "Sistema de retentativas",
                "Acompanhamento de entregas",
                "Código-fonte",
                "Documentação técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Comunicação centralizada",

                    description:
                        "Permite administrar diferentes canais de comunicação por meio de uma arquitetura centralizada.",
                },

                {
                    title: "Entrega automatizada",

                    description:
                        "As notificações podem ser ativadas automaticamente conforme eventos e condições definidas.",
                },

                {
                    title: "Múltiplos canais",

                    description:
                        "Permite coordenar comunicações por email, SMS e notificações push.",
                },

                {
                    title: "Maior confiabilidade",

                    description:
                        "Filas e mecanismos de retentativa ajudam a lidar com falhas temporárias durante a entrega.",
                },
            ],

            process: [
                {
                    title: "Definição dos canais",

                    description:
                        "Identificamos canais de comunicação, tipos de mensagens e eventos que devem gerar notificações.",
                },

                {
                    title: "Design do sistema",

                    description:
                        "Definimos modelos, preferências, prioridades, estados e regras de entrega.",
                },

                {
                    title: "Integração dos provedores",

                    description:
                        "Conectamos os serviços externos de email, SMS e push necessários para o projeto.",
                },

                {
                    title: "Testes de entrega",

                    description:
                        "Validamos envios, estados, erros, retentativas e diferentes cenários de comunicação.",
                },
            ],

            faq: [
                {
                    question: "O que é um Notification Center?",

                    answer:
                        "É um sistema centralizado que administra e coordena o envio de notificações por diferentes canais de comunicação.",
                },

                {
                    question: "Pode enviar emails e SMS?",

                    answer:
                        "Sim. O sistema pode integrar provedores de email e SMS para realizar envios automatizados.",
                },

                {
                    question: "Suporta notificações push?",

                    answer:
                        "Sim. Pode integrar serviços de notificações push de acordo com as plataformas utilizadas.",
                },

                {
                    question: "Inclui retentativas automáticas?",

                    answer:
                        "Sim. A arquitetura pode utilizar filas e mecanismos de retentativa para lidar com falhas temporárias de entrega.",
                },
            ],
        },
    },
};