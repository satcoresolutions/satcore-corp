import type { ServicePlan } from "@/types/plan.types";

export const teamCalendar: ServicePlan = {
    core: {
        id: "SCH-002",

        slug: "team-calendar",

        complexity: "⭐⭐⭐⭐ (4/5)",

        price: "$1,250 - $2,000 USD",

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
            "Shared Calendars",
            "Event Assignment",
            "Recurring Schedules",
            "Availability Management",
            "Timezone Support",
            "Calendar Synchronization",
            "Conflict Detection",
            "Type-safe Components",
        ],

        integrations: [
            "Calendar APIs",
            "Email Services",
            "REST APIs",
            "Notification Services",
        ],

        heroImage:
            "/images/services/software/hero/hero-team-calendar.png",

        image:
            "/images/services/software/hero/hero-team-calendar.png",
    },

    translations: {
        es: {
            name: "Calendario de Equipo",

            title: "Sistema de Calendario Compartido para Equipos",

            level: "🟠 Avanzado",

            category: "Sistemas de Agenda y Calendario",

            description:
                "Calendario colaborativo para equipos con calendarios compartidos, asignación de eventos, horarios recurrentes, gestión de disponibilidad y control de conflictos.",

            time: "5-7 semanas",

            imageAlt:
                "Calendario colaborativo de equipo con eventos compartidos y gestión de disponibilidad",

            target:
                "Empresas y equipos que necesitan coordinar reuniones, tareas, eventos, disponibilidad y horarios entre múltiples integrantes desde un calendario centralizado.",

            support:
                "45 días soporte post-entrega",

            useCases: [
                "Calendarios empresariales",
                "Equipos de trabajo",
                "Gestión de reuniones",
                "Asignación de eventos",
                "Planificación de equipos",
                "Horarios compartidos",
                "Gestión de disponibilidad",
                "Calendarios colaborativos",
            ],

            includes: [
                "Calendario compartido",
                "Gestión de eventos",
                "Asignación de eventos",
                "Eventos recurrentes",
                "Gestión de disponibilidad",
                "Detección de conflictos",
                "Soporte de zonas horarias",
                "Vista de calendario",
                "Gestión de participantes",
                "Interfaz responsive",
                "Prisma",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
            ],

            notIncludes: [
                "Videoconferencia integrada",
                "CRM empresarial",
                "Gestión avanzada de proyectos",
                "Aplicación móvil nativa",
                "Sistema completo de recursos humanos",
                "Automatización empresarial avanzada",
            ],

            features: [
                "Shared Calendars",
                "Event Assignment",
                "Recurring Schedules",
                "Availability Management",
                "Conflict Detection",
                "Timezone Support",
                "Team Scheduling",
                "Calendar Views",
                "Participant Management",
                "Responsive Design",
            ],

            deliverables: [
                "Calendario de equipo publicado",
                "Calendarios compartidos",
                "Sistema de eventos",
                "Asignación de eventos",
                "Horarios recurrentes",
                "Gestión de disponibilidad",
                "Detección de conflictos",
                "Gestión de participantes",
                "Código fuente",
                "Documentación técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Coordinación de equipos",

                    description:
                        "Facilita la coordinación de reuniones, eventos y horarios entre diferentes integrantes de un equipo.",
                },

                {
                    title: "Calendarios compartidos",

                    description:
                        "Permite centralizar información de diferentes miembros dentro de calendarios compartidos.",
                },

                {
                    title: "Planificación recurrente",

                    description:
                        "Los eventos recurrentes permiten automatizar la programación de reuniones y actividades periódicas.",
                },

                {
                    title: "Control de disponibilidad",

                    description:
                        "Permite conocer y administrar la disponibilidad de los integrantes para reducir conflictos de agenda.",
                },
            ],

            process: [
                {
                    title: "Arquitectura del calendario",

                    description:
                        "Definimos usuarios, equipos, calendarios, eventos, participantes y reglas de disponibilidad.",
                },

                {
                    title: "Calendarios compartidos",

                    description:
                        "Construimos las estructuras necesarias para compartir y visualizar calendarios entre integrantes.",
                },

                {
                    title: "Gestión de eventos",

                    description:
                        "Implementamos creación, edición, asignación y recurrencia de eventos.",
                },

                {
                    title: "Disponibilidad y conflictos",

                    description:
                        "Configuramos reglas para controlar disponibilidad y detectar conflictos entre eventos.",
                },

                {
                    title: "Pruebas y lanzamiento",

                    description:
                        "Validamos calendarios, participantes, recurrencias, zonas horarias, conflictos y navegación.",
                },
            ],

            faq: [
                {
                    question: "¿Qué es un Team Calendar?",

                    answer:
                        "Es un sistema de calendario compartido diseñado para coordinar eventos, reuniones y disponibilidad entre los integrantes de un equipo.",
                },

                {
                    question: "¿Permite compartir calendarios?",

                    answer:
                        "Sí. Los miembros pueden trabajar con calendarios compartidos y visualizar eventos asignados al equipo.",
                },

                {
                    question: "¿Soporta eventos recurrentes?",

                    answer:
                        "Sí. El sistema permite definir eventos y horarios que se repiten de acuerdo con reglas configuradas.",
                },

                {
                    question: "¿Puede detectar conflictos?",

                    answer:
                        "Sí. La arquitectura contempla validaciones de disponibilidad para identificar posibles conflictos de agenda.",
                },
            ],
        },

        en: {
            name: "Team Calendar",

            title: "Shared Team Calendar System",

            level: "🟠 Advanced",

            category: "Scheduling & Calendar Systems",

            description:
                "Collaborative team calendar with shared calendars, event assignments, recurring schedules, availability management, and scheduling conflict detection.",

            time: "5-7 weeks",

            imageAlt:
                "Collaborative team calendar with shared events and availability management",

            target:
                "Businesses and teams that need to coordinate meetings, tasks, events, availability, and schedules across multiple members through a centralized calendar.",

            support:
                "45 days post-delivery support",

            useCases: [
                "Business calendars",
                "Work teams",
                "Meeting management",
                "Event assignment",
                "Team planning",
                "Shared schedules",
                "Availability management",
                "Collaborative calendars",
            ],

            includes: [
                "Shared calendar",
                "Event management",
                "Event assignment",
                "Recurring events",
                "Availability management",
                "Conflict detection",
                "Timezone support",
                "Calendar views",
                "Participant management",
                "Responsive interface",
                "Prisma",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
            ],

            notIncludes: [
                "Integrated video conferencing",
                "Enterprise CRM",
                "Advanced project management",
                "Native mobile application",
                "Complete HR system",
                "Advanced enterprise automation",
            ],

            features: [
                "Shared Calendars",
                "Event Assignment",
                "Recurring Schedules",
                "Availability Management",
                "Conflict Detection",
                "Timezone Support",
                "Team Scheduling",
                "Calendar Views",
                "Participant Management",
                "Responsive Design",
            ],

            deliverables: [
                "Published team calendar",
                "Shared calendars",
                "Event system",
                "Event assignment",
                "Recurring schedules",
                "Availability management",
                "Conflict detection",
                "Participant management",
                "Source code",
                "Technical documentation",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Team Coordination",

                    description:
                        "Makes it easier to coordinate meetings, events, and schedules across team members.",
                },

                {
                    title: "Shared Calendars",

                    description:
                        "Centralizes information from multiple team members through shared calendars.",
                },

                {
                    title: "Recurring Planning",

                    description:
                        "Recurring events automate the scheduling of regular meetings and activities.",
                },

                {
                    title: "Availability Control",

                    description:
                        "Allows teams to manage member availability and reduce scheduling conflicts.",
                },
            ],

            process: [
                {
                    title: "Calendar Architecture",

                    description:
                        "We define users, teams, calendars, events, participants, and availability rules.",
                },

                {
                    title: "Shared Calendars",

                    description:
                        "We build the structures required to share and display calendars across team members.",
                },

                {
                    title: "Event Management",

                    description:
                        "We implement event creation, editing, assignment, and recurrence.",
                },

                {
                    title: "Availability and Conflicts",

                    description:
                        "We configure availability rules and conflict detection between events.",
                },

                {
                    title: "Testing and Launch",

                    description:
                        "We validate calendars, participants, recurring events, timezones, conflicts, and navigation.",
                },
            ],

            faq: [
                {
                    question: "What is a Team Calendar?",

                    answer:
                        "It is a shared calendar system designed to coordinate events, meetings, and availability among team members.",
                },

                {
                    question: "Can calendars be shared?",

                    answer:
                        "Yes. Members can work with shared calendars and view events assigned to the team.",
                },

                {
                    question: "Does it support recurring events?",

                    answer:
                        "Yes. The system supports events and schedules that repeat according to configured rules.",
                },

                {
                    question: "Can it detect conflicts?",

                    answer:
                        "Yes. The architecture includes availability validation to identify potential scheduling conflicts.",
                },
            ],
        },

        pt: {
            name: "Calendário de Equipe",

            title: "Sistema de Calendário Compartilhado para Equipes",

            level: "🟠 Avançado",

            category: "Sistemas de Agenda e Calendário",

            description:
                "Calendário colaborativo para equipes com calendários compartilhados, atribuição de eventos, horários recorrentes, gerenciamento de disponibilidade e detecção de conflitos.",

            time: "5-7 semanas",

            imageAlt:
                "Calendário colaborativo de equipe com eventos compartilhados e gerenciamento de disponibilidade",

            target:
                "Empresas e equipes que precisam coordenar reuniões, tarefas, eventos, disponibilidade e horários entre vários integrantes por meio de um calendário centralizado.",

            support:
                "45 dias de suporte pós-entrega",

            useCases: [
                "Calendários empresariais",
                "Equipes de trabalho",
                "Gerenciamento de reuniões",
                "Atribuição de eventos",
                "Planejamento de equipes",
                "Horários compartilhados",
                "Gerenciamento de disponibilidade",
                "Calendários colaborativos",
            ],

            includes: [
                "Calendário compartilhado",
                "Gerenciamento de eventos",
                "Atribuição de eventos",
                "Eventos recorrentes",
                "Gerenciamento de disponibilidade",
                "Detecção de conflitos",
                "Suporte a fusos horários",
                "Visualizações de calendário",
                "Gerenciamento de participantes",
                "Interface responsiva",
                "Prisma",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
            ],

            notIncludes: [
                "Videoconferência integrada",
                "CRM empresarial",
                "Gerenciamento avançado de projetos",
                "Aplicativo móvel nativo",
                "Sistema completo de RH",
                "Automação empresarial avançada",
            ],

            features: [
                "Shared Calendars",
                "Event Assignment",
                "Recurring Schedules",
                "Availability Management",
                "Conflict Detection",
                "Timezone Support",
                "Team Scheduling",
                "Calendar Views",
                "Participant Management",
                "Responsive Design",
            ],

            deliverables: [
                "Calendário de equipe publicado",
                "Calendários compartilhados",
                "Sistema de eventos",
                "Atribuição de eventos",
                "Horários recorrentes",
                "Gerenciamento de disponibilidade",
                "Detecção de conflitos",
                "Gerenciamento de participantes",
                "Código-fonte",
                "Documentação técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Coordenação de equipes",

                    description:
                        "Facilita a coordenação de reuniões, eventos e horários entre diferentes integrantes de uma equipe.",
                },

                {
                    title: "Calendários compartilhados",

                    description:
                        "Permite centralizar informações de diferentes membros em calendários compartilhados.",
                },

                {
                    title: "Planejamento recorrente",

                    description:
                        "Eventos recorrentes permitem automatizar a programação de reuniões e atividades periódicas.",
                },

                {
                    title: "Controle de disponibilidade",

                    description:
                        "Permite gerenciar a disponibilidade dos integrantes para reduzir conflitos de agenda.",
                },
            ],

            process: [
                {
                    title: "Arquitetura do calendário",

                    description:
                        "Definimos usuários, equipes, calendários, eventos, participantes e regras de disponibilidade.",
                },

                {
                    title: "Calendários compartilhados",

                    description:
                        "Construímos as estruturas necessárias para compartilhar e visualizar calendários entre integrantes.",
                },

                {
                    title: "Gerenciamento de eventos",

                    description:
                        "Implementamos criação, edição, atribuição e recorrência de eventos.",
                },

                {
                    title: "Disponibilidade e conflitos",

                    description:
                        "Configuramos regras para controlar disponibilidade e detectar conflitos entre eventos.",
                },

                {
                    title: "Testes e lançamento",

                    description:
                        "Validamos calendários, participantes, recorrências, fusos horários, conflitos e navegação.",
                },
            ],

            faq: [
                {
                    question: "O que é um Team Calendar?",

                    answer:
                        "É um sistema de calendário compartilhado projetado para coordenar eventos, reuniões e disponibilidade entre integrantes de uma equipe.",
                },

                {
                    question: "Permite compartilhar calendários?",

                    answer:
                        "Sim. Os membros podem trabalhar com calendários compartilhados e visualizar eventos atribuídos à equipe.",
                },

                {
                    question: "Suporta eventos recorrentes?",

                    answer:
                        "Sim. O sistema permite definir eventos e horários que se repetem de acordo com regras configuradas.",
                },

                {
                    question: "Pode detectar conflitos?",

                    answer:
                        "Sim. A arquitetura contempla validações de disponibilidade para identificar possíveis conflitos de agenda.",
                },
            ],
        },
    },
};