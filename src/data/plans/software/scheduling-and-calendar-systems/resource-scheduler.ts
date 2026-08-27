import type { ServicePlan } from "@/types/plan.types";

export const resourceScheduler: ServicePlan = {
    core: {
        id: "SCH-003",

        slug: "resource-scheduler",

        complexity: "⭐⭐⭐⭐⭐ (5/5)",

        price: "$1,750 - $2,750 USD",

        pricingType: "fixed",

        automationLevel: "high",

        stack: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Prisma",
            "Calendar APIs",
        ],

        technologies: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Prisma",
            "Calendar APIs",
            "Scheduling Engine",
            "Multi-resource Reservations",
            "Conflict Detection",
            "Availability Management",
            "Resource Allocation",
            "Utilization Monitoring",
            "Scheduling Rules",
            "Timezone Support",
            "Dashboard Analytics",
            "Type-safe Components",
        ],

        integrations: [
            "Calendar APIs",
            "REST APIs",
            "Email Services",
            "Notification Services",
            "Analytics Services",
        ],

        heroImage:
            "/images/services/software/hero/hero-resource-scheduler.png",

        image:
            "/images/services/software/hero/hero-resource-scheduler.png",
    },

    translations: {
        es: {
            name: "Gestor de Recursos",

            title: "Sistema Avanzado de Programación de Recursos",

            level: "🔴 Experto",

            category: "Sistemas de Agenda y Calendario",

            description:
                "Sistema avanzado de reservas y programación de múltiples recursos con detección de conflictos, reglas de disponibilidad, asignación de recursos y dashboard para monitorear utilización.",

            time: "6-9 semanas",

            imageAlt:
                "Sistema de programación de recursos con reservas múltiples, detección de conflictos y dashboard de utilización",

            target:
                "Empresas, centros de servicios y organizaciones que administran múltiples recursos reservables y necesitan controlar disponibilidad, conflictos y niveles de utilización.",

            support:
                "60 días soporte post-entrega",

            useCases: [
                "Reserva de salas",
                "Reserva de equipos",
                "Gestión de instalaciones",
                "Recursos empresariales",
                "Espacios compartidos",
                "Centros de servicios",
                "Laboratorios",
                "Recursos operativos",
                "Reservas múltiples",
            ],

            includes: [
                "Motor de programación",
                "Reservas multi-recurso",
                "Gestión de disponibilidad",
                "Detección de conflictos",
                "Asignación de recursos",
                "Reglas de reserva",
                "Eventos recurrentes",
                "Soporte de zonas horarias",
                "Dashboard de utilización",
                "Métricas de utilización",
                "Calendarios de recursos",
                "Interfaz responsive",
                "Prisma",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
            ],

            notIncludes: [
                "IoT para monitoreo físico",
                "Control de acceso mediante hardware",
                "ERP empresarial completo",
                "Aplicaciones móviles nativas",
                "Sistemas físicos de gestión de instalaciones",
                "Analítica empresarial avanzada",
            ],

            features: [
                "Multi-resource Reservations",
                "Resource Allocation",
                "Availability Management",
                "Conflict Detection",
                "Utilization Monitoring",
                "Scheduling Rules",
                "Resource Calendars",
                "Recurring Reservations",
                "Timezone Support",
                "Utilization Dashboard",
                "Resource Analytics",
                "Responsive Design",
            ],

            deliverables: [
                "Sistema de programación publicado",
                "Motor de reservas",
                "Gestión de recursos",
                "Calendarios de recursos",
                "Detección de conflictos",
                "Gestión de disponibilidad",
                "Asignación de recursos",
                "Dashboard de utilización",
                "Métricas de recursos",
                "Código fuente",
                "Documentación técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Gestión centralizada de recursos",

                    description:
                        "Permite administrar múltiples recursos reservables desde una única plataforma.",
                },

                {
                    title: "Prevención de conflictos",

                    description:
                        "El sistema valida disponibilidad para evitar asignaciones incompatibles y reservas superpuestas.",
                },

                {
                    title: "Mayor aprovechamiento",

                    description:
                        "El monitoreo de utilización permite identificar cómo se están utilizando los recursos y detectar períodos de baja utilización.",
                },

                {
                    title: "Control operativo",

                    description:
                        "El dashboard proporciona una visión centralizada de reservas, disponibilidad y utilización de recursos.",
                },
            ],

            process: [
                {
                    title: "Modelado de recursos",

                    description:
                        "Definimos recursos, categorías, capacidades, disponibilidad y reglas de reserva.",
                },

                {
                    title: "Motor de reservas",

                    description:
                        "Construimos el motor encargado de administrar reservas individuales y múltiples recursos.",
                },

                {
                    title: "Detección de conflictos",

                    description:
                        "Implementamos validaciones para identificar superposiciones y conflictos de disponibilidad.",
                },

                {
                    title: "Dashboard de utilización",

                    description:
                        "Construimos métricas y visualizaciones para monitorear la utilización de los recursos.",
                },

                {
                    title: "Pruebas y lanzamiento",

                    description:
                        "Validamos reservas, conflictos, recurrencias, disponibilidad, asignaciones y métricas antes de publicar.",
                },
            ],

            faq: [
                {
                    question: "¿Qué es un Resource Scheduler?",

                    answer:
                        "Es un sistema diseñado para administrar la disponibilidad y reserva de múltiples recursos, como salas, equipos, instalaciones o espacios.",
                },

                {
                    question: "¿Puede reservar varios recursos al mismo tiempo?",

                    answer:
                        "Sí. El sistema contempla reservas que pueden involucrar múltiples recursos y valida su disponibilidad antes de confirmar la operación.",
                },

                {
                    question: "¿Detecta conflictos de reservas?",

                    answer:
                        "Sí. El motor de programación valida las reservas existentes para identificar posibles conflictos de horario o disponibilidad.",
                },

                {
                    question: "¿Incluye un dashboard de utilización?",

                    answer:
                        "Sí. El sistema contempla un dashboard para visualizar métricas relacionadas con el uso y disponibilidad de los recursos.",
                },
            ],
        },

        en: {
            name: "Resource Scheduler",

            title: "Advanced Resource Scheduling System",

            level: "🔴 Expert",

            category: "Scheduling & Calendar Systems",

            description:
                "Advanced multi-resource reservation and scheduling system with conflict detection, availability rules, resource allocation, and a utilization monitoring dashboard.",

            time: "6-9 weeks",

            imageAlt:
                "Resource scheduling system with multi-resource reservations, conflict detection, and utilization dashboard",

            target:
                "Businesses, service centers, and organizations managing multiple reservable resources that need to control availability, scheduling conflicts, and utilization levels.",

            support:
                "60 days post-delivery support",

            useCases: [
                "Room reservations",
                "Equipment reservations",
                "Facility management",
                "Business resources",
                "Shared spaces",
                "Service centers",
                "Laboratories",
                "Operational resources",
                "Multi-resource bookings",
            ],

            includes: [
                "Scheduling engine",
                "Multi-resource reservations",
                "Availability management",
                "Conflict detection",
                "Resource allocation",
                "Booking rules",
                "Recurring events",
                "Timezone support",
                "Utilization dashboard",
                "Utilization metrics",
                "Resource calendars",
                "Responsive interface",
                "Prisma",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
            ],

            notIncludes: [
                "IoT physical monitoring",
                "Hardware access control",
                "Complete enterprise ERP",
                "Native mobile applications",
                "Physical facility management systems",
                "Advanced enterprise analytics",
            ],

            features: [
                "Multi-resource Reservations",
                "Resource Allocation",
                "Availability Management",
                "Conflict Detection",
                "Utilization Monitoring",
                "Scheduling Rules",
                "Resource Calendars",
                "Recurring Reservations",
                "Timezone Support",
                "Utilization Dashboard",
                "Resource Analytics",
                "Responsive Design",
            ],

            deliverables: [
                "Published scheduling system",
                "Reservation engine",
                "Resource management",
                "Resource calendars",
                "Conflict detection",
                "Availability management",
                "Resource allocation",
                "Utilization dashboard",
                "Resource metrics",
                "Source code",
                "Technical documentation",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Centralized Resource Management",

                    description:
                        "Allows multiple reservable resources to be managed from a single platform.",
                },

                {
                    title: "Conflict Prevention",

                    description:
                        "The system validates availability to prevent incompatible assignments and overlapping reservations.",
                },

                {
                    title: "Improved Utilization",

                    description:
                        "Utilization monitoring helps identify how resources are being used and detect periods of low utilization.",
                },

                {
                    title: "Operational Control",

                    description:
                        "The dashboard provides a centralized view of reservations, availability, and resource utilization.",
                },
            ],

            process: [
                {
                    title: "Resource Modeling",

                    description:
                        "We define resources, categories, capacities, availability, and booking rules.",
                },

                {
                    title: "Reservation Engine",

                    description:
                        "We build the engine responsible for managing individual and multi-resource reservations.",
                },

                {
                    title: "Conflict Detection",

                    description:
                        "We implement validations to identify scheduling overlaps and availability conflicts.",
                },

                {
                    title: "Utilization Dashboard",

                    description:
                        "We build metrics and visualizations for monitoring resource utilization.",
                },

                {
                    title: "Testing and Launch",

                    description:
                        "We validate reservations, conflicts, recurring schedules, availability, assignments, and metrics before launch.",
                },
            ],

            faq: [
                {
                    question: "What is a Resource Scheduler?",

                    answer:
                        "It is a system designed to manage the availability and booking of multiple resources such as rooms, equipment, facilities, or shared spaces.",
                },

                {
                    question: "Can it reserve multiple resources at once?",

                    answer:
                        "Yes. The system supports reservations involving multiple resources and validates availability before confirmation.",
                },

                {
                    question: "Does it detect reservation conflicts?",

                    answer:
                        "Yes. The scheduling engine validates existing reservations to identify potential time or availability conflicts.",
                },

                {
                    question: "Does it include a utilization dashboard?",

                    answer:
                        "Yes. The system includes a dashboard for monitoring resource usage and availability metrics.",
                },
            ],
        },

        pt: {
            name: "Agendador de Recursos",

            title: "Sistema Avançado de Agendamento de Recursos",

            level: "🔴 Especialista",

            category: "Sistemas de Agenda e Calendário",

            description:
                "Sistema avançado de reservas e agendamento de múltiplos recursos com detecção de conflitos, regras de disponibilidade, alocação de recursos e dashboard de monitoramento de utilização.",

            time: "6-9 semanas",

            imageAlt:
                "Sistema de agendamento de recursos com reservas múltiplas, detecção de conflitos e dashboard de utilização",

            target:
                "Empresas, centros de serviços e organizações que administram múltiplos recursos reserváveis e precisam controlar disponibilidade, conflitos e níveis de utilização.",

            support:
                "60 dias de suporte pós-entrega",

            useCases: [
                "Reserva de salas",
                "Reserva de equipamentos",
                "Gestão de instalações",
                "Recursos empresariais",
                "Espaços compartilhados",
                "Centros de serviços",
                "Laboratórios",
                "Recursos operacionais",
                "Reservas múltiplas",
            ],

            includes: [
                "Motor de agendamento",
                "Reservas de múltiplos recursos",
                "Gerenciamento de disponibilidade",
                "Detecção de conflitos",
                "Alocação de recursos",
                "Regras de reserva",
                "Eventos recorrentes",
                "Suporte a fusos horários",
                "Dashboard de utilização",
                "Métricas de utilização",
                "Calendários de recursos",
                "Interface responsiva",
                "Prisma",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
            ],

            notIncludes: [
                "Monitoramento físico por IoT",
                "Controle de acesso por hardware",
                "ERP empresarial completo",
                "Aplicativos móveis nativos",
                "Sistemas físicos de gestão de instalações",
                "Análise empresarial avançada",
            ],

            features: [
                "Multi-resource Reservations",
                "Resource Allocation",
                "Availability Management",
                "Conflict Detection",
                "Utilization Monitoring",
                "Scheduling Rules",
                "Resource Calendars",
                "Recurring Reservations",
                "Timezone Support",
                "Utilization Dashboard",
                "Resource Analytics",
                "Responsive Design",
            ],

            deliverables: [
                "Sistema de agendamento publicado",
                "Motor de reservas",
                "Gerenciamento de recursos",
                "Calendários de recursos",
                "Detecção de conflitos",
                "Gerenciamento de disponibilidade",
                "Alocação de recursos",
                "Dashboard de utilização",
                "Métricas de recursos",
                "Código-fonte",
                "Documentação técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Gerenciamento centralizado de recursos",

                    description:
                        "Permite administrar múltiplos recursos reserváveis a partir de uma única plataforma.",
                },

                {
                    title: "Prevenção de conflitos",

                    description:
                        "O sistema valida a disponibilidade para evitar atribuições incompatíveis e reservas sobrepostas.",
                },

                {
                    title: "Melhor aproveitamento",

                    description:
                        "O monitoramento de utilização permite identificar como os recursos estão sendo utilizados e detectar períodos de baixa utilização.",
                },

                {
                    title: "Controle operacional",

                    description:
                        "O dashboard fornece uma visão centralizada das reservas, disponibilidade e utilização dos recursos.",
                },
            ],

            process: [
                {
                    title: "Modelagem de recursos",

                    description:
                        "Definimos recursos, categorias, capacidades, disponibilidade e regras de reserva.",
                },

                {
                    title: "Motor de reservas",

                    description:
                        "Construímos o motor responsável pelo gerenciamento de reservas individuais e de múltiplos recursos.",
                },

                {
                    title: "Detecção de conflitos",

                    description:
                        "Implementamos validações para identificar sobreposições e conflitos de disponibilidade.",
                },

                {
                    title: "Dashboard de utilização",

                    description:
                        "Construímos métricas e visualizações para monitorar a utilização dos recursos.",
                },

                {
                    title: "Testes e lançamento",

                    description:
                        "Validamos reservas, conflitos, recorrências, disponibilidade, alocações e métricas antes da publicação.",
                },
            ],

            faq: [
                {
                    question: "O que é um Resource Scheduler?",

                    answer:
                        "É um sistema desenvolvido para gerenciar a disponibilidade e reserva de múltiplos recursos, como salas, equipamentos, instalações ou espaços.",
                },

                {
                    question: "Pode reservar vários recursos ao mesmo tempo?",

                    answer:
                        "Sim. O sistema contempla reservas envolvendo múltiplos recursos e valida a disponibilidade antes da confirmação.",
                },

                {
                    question: "Detecta conflitos de reservas?",

                    answer:
                        "Sim. O motor de agendamento valida as reservas existentes para identificar possíveis conflitos de horário ou disponibilidade.",
                },

                {
                    question: "Inclui um dashboard de utilização?",

                    answer:
                        "Sim. O sistema contempla um dashboard para visualizar métricas relacionadas ao uso e disponibilidade dos recursos.",
                },
            ],
        },
    },
};