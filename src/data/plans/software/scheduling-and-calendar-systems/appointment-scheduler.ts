import type { ServicePlan } from "@/types/plan.types";

export const appointmentScheduler: ServicePlan = {
    core: {
        // ────────────────────────────────────
        // Identidad
        // ────────────────────────────────────

        id: "SCH-001",

        slug: "appointment-scheduler",

        // ────────────────────────────────────
        // Comercial
        // ────────────────────────────────────

        complexity: "⭐⭐⭐ (3/5)",

        price: "$850 - $1,350 USD",

        pricingType: "fixed",

        automationLevel: "high",

        // ────────────────────────────────────
        // Técnico
        // ────────────────────────────────────

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
            "Availability Management",
            "Recurring Events",
            "Timezone Support",
            "Appointment Booking",
            "Email Notifications",
            "Conflict Detection",
            "Type-safe Components",
        ],

        integrations: [
            "Calendar APIs",
            "Email Services",
            "Notification Services",
            "REST APIs",
        ],

        // ────────────────────────────────────
        // Multimedia
        // ────────────────────────────────────

        heroImage:
            "/images/services/software/hero/hero-appointment-scheduler.png",

        image:
            "/images/services/software/hero/hero-appointment-scheduler.png",
    },

    translations: {
        // ═════════════════════════════════════
        // ESPAÑOL
        // ═════════════════════════════════════

        es: {
            name: "Agendador de Citas",

            title: "Sistema Profesional de Agendamiento de Citas",

            level: "🟡 Intermedio",

            category: "Sistemas de Agenda y Calendario",

            description:
                "Sistema profesional de agendamiento de citas con gestión configurable de disponibilidad, reservas, reglas de horarios, soporte de zonas horarias y confirmaciones automáticas por correo electrónico.",

            time: "4-6 semanas",

            imageAlt:
                "Sistema de agendamiento de citas con calendario, disponibilidad y reservas",

            target:
                "Profesionales, empresas y negocios que necesitan permitir a sus clientes reservar citas y gestionar horarios disponibles mediante un sistema centralizado.",

            support:
                "30 días soporte post-entrega",

            useCases: [
                "Reserva de citas",
                "Consultas profesionales",
                "Servicios empresariales",
                "Reservas de reuniones",
                "Agendamiento de clientes",
                "Servicios por horario",
                "Calendarios de disponibilidad",
                "Reservas online",
            ],

            includes: [
                "Sistema de agendamiento",
                "Calendario de citas",
                "Gestión de disponibilidad",
                "Reglas de horarios",
                "Reserva de citas",
                "Confirmaciones por email",
                "Eventos recurrentes",
                "Soporte de zonas horarias",
                "Detección de conflictos",
                "Interfaz responsive",
                "Prisma",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
            ],

            notIncludes: [
                "Videoconferencia integrada",
                "Procesamiento de pagos",
                "CRM empresarial completo",
                "Aplicación móvil nativa",
                "Automatizaciones empresariales avanzadas",
                "Infraestructura completa de comunicación",
            ],

            features: [
                "Appointment Booking",
                "Availability Management",
                "Scheduling Rules",
                "Recurring Events",
                "Timezone Support",
                "Email Confirmations",
                "Conflict Detection",
                "Calendar Integration",
                "Responsive Design",
                "Type-safe Components",
            ],

            deliverables: [
                "Sistema de citas publicado",
                "Calendario de reservas",
                "Gestión de disponibilidad",
                "Reglas de horarios",
                "Confirmaciones por correo",
                "Gestión de eventos",
                "Soporte de zonas horarias",
                "Integración de calendario",
                "Código fuente",
                "Documentación técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Reservas centralizadas",

                    description:
                        "Permite gestionar las citas y reservas desde una única plataforma digital.",
                },

                {
                    title: "Disponibilidad configurable",

                    description:
                        "Permite definir horarios disponibles, reglas de reserva y condiciones de atención.",
                },

                {
                    title: "Confirmaciones automáticas",

                    description:
                        "Los clientes pueden recibir confirmaciones de sus reservas mediante correo electrónico.",
                },

                {
                    title: "Menos conflictos de horario",

                    description:
                        "El sistema controla la disponibilidad para reducir reservas simultáneas o incompatibles.",
                },
            ],

            process: [
                {
                    title: "Diseño del sistema de agenda",

                    description:
                        "Definimos tipos de citas, duración, disponibilidad, horarios y reglas de reserva.",
                },

                {
                    title: "Construcción del calendario",

                    description:
                        "Implementamos la interfaz de calendario y el flujo de selección de fechas y horarios.",
                },

                {
                    title: "Gestión de disponibilidad",

                    description:
                        "Configuramos reglas de disponibilidad, eventos recurrentes y control de conflictos.",
                },

                {
                    title: "Confirmaciones",

                    description:
                        "Integramos el sistema de confirmaciones y notificaciones por correo electrónico.",
                },

                {
                    title: "Pruebas y lanzamiento",

                    description:
                        "Validamos reservas, disponibilidad, zonas horarias, conflictos y comportamiento responsive.",
                },
            ],

            faq: [
                {
                    question: "¿Qué es un Appointment Scheduler?",

                    answer:
                        "Es un sistema que permite gestionar horarios disponibles y permitir que los usuarios reserven citas desde una plataforma digital.",
                },

                {
                    question: "¿Puede configurar horarios de disponibilidad?",

                    answer:
                        "Sí. El sistema permite definir reglas y períodos de disponibilidad para controlar cuándo pueden realizarse reservas.",
                },

                {
                    question: "¿Incluye confirmaciones por correo?",

                    answer:
                        "Sí. El sistema contempla confirmaciones automáticas por correo electrónico para las reservas.",
                },

                {
                    question: "¿Soporta zonas horarias?",

                    answer:
                        "Sí. La arquitectura contempla soporte para zonas horarias, especialmente útil cuando usuarios y servicios se encuentran en diferentes regiones.",
                },
            ],
        },

        // ═════════════════════════════════════
        // ENGLISH
        // ═════════════════════════════════════

        en: {
            name: "Appointment Scheduler",

            title: "Professional Appointment Scheduling System",

            level: "🟡 Intermediate",

            category: "Scheduling & Calendar Systems",

            description:
                "Professional appointment scheduling system with configurable availability management, booking rules, recurring events, timezone support, and automated email confirmations.",

            time: "4-6 weeks",

            imageAlt:
                "Appointment scheduling system with calendar, availability, and bookings",

            target:
                "Professionals, businesses, and service providers that need to allow customers to book appointments and manage availability through a centralized system.",

            support:
                "30 days post-delivery support",

            useCases: [
                "Appointment booking",
                "Professional consultations",
                "Business services",
                "Meeting reservations",
                "Customer scheduling",
                "Time-based services",
                "Availability calendars",
                "Online bookings",
            ],

            includes: [
                "Scheduling system",
                "Appointment calendar",
                "Availability management",
                "Scheduling rules",
                "Appointment booking",
                "Email confirmations",
                "Recurring events",
                "Timezone support",
                "Conflict detection",
                "Responsive interface",
                "Prisma",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
            ],

            notIncludes: [
                "Integrated video conferencing",
                "Payment processing",
                "Complete enterprise CRM",
                "Native mobile application",
                "Advanced enterprise automation",
                "Complete communication infrastructure",
            ],

            features: [
                "Appointment Booking",
                "Availability Management",
                "Scheduling Rules",
                "Recurring Events",
                "Timezone Support",
                "Email Confirmations",
                "Conflict Detection",
                "Calendar Integration",
                "Responsive Design",
                "Type-safe Components",
            ],

            deliverables: [
                "Published appointment system",
                "Booking calendar",
                "Availability management",
                "Scheduling rules",
                "Email confirmations",
                "Event management",
                "Timezone support",
                "Calendar integration",
                "Source code",
                "Technical documentation",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Centralized Bookings",

                    description:
                        "Allows appointments and reservations to be managed from a single digital platform.",
                },

                {
                    title: "Configurable Availability",

                    description:
                        "Allows businesses to define available hours, booking rules, and scheduling conditions.",
                },

                {
                    title: "Automated Confirmations",

                    description:
                        "Customers can receive automated email confirmations for their bookings.",
                },

                {
                    title: "Reduced Scheduling Conflicts",

                    description:
                        "The system manages availability to reduce overlapping or incompatible reservations.",
                },
            ],

            process: [
                {
                    title: "Scheduling System Design",

                    description:
                        "We define appointment types, durations, availability, schedules, and booking rules.",
                },

                {
                    title: "Calendar Construction",

                    description:
                        "We implement the calendar interface and date and time selection flow.",
                },

                {
                    title: "Availability Management",

                    description:
                        "We configure availability rules, recurring events, and conflict management.",
                },

                {
                    title: "Confirmations",

                    description:
                        "We integrate automated confirmation and email notification workflows.",
                },

                {
                    title: "Testing and Launch",

                    description:
                        "We validate bookings, availability, timezones, conflicts, and responsive behavior.",
                },
            ],

            faq: [
                {
                    question: "What is an Appointment Scheduler?",

                    answer:
                        "It is a system that manages available schedules and allows users to book appointments through a digital platform.",
                },

                {
                    question: "Can availability schedules be configured?",

                    answer:
                        "Yes. The system supports availability rules and periods for controlling when bookings can be made.",
                },

                {
                    question: "Does it include email confirmations?",

                    answer:
                        "Yes. The system supports automated email confirmations for appointments.",
                },

                {
                    question: "Does it support timezones?",

                    answer:
                        "Yes. The architecture supports timezone management, which is especially useful when users and services operate across different regions.",
                },
            ],
        },

        // ═════════════════════════════════════
        // PORTUGUÊS
        // ═════════════════════════════════════

        pt: {
            name: "Agendador de Consultas",

            title: "Sistema Profissional de Agendamento",

            level: "🟡 Intermediário",

            category: "Sistemas de Agenda e Calendário",

            description:
                "Sistema profissional de agendamento com gerenciamento configurável de disponibilidade, regras de horários, eventos recorrentes, suporte a fusos horários e confirmações automáticas por e-mail.",

            time: "4-6 semanas",

            imageAlt:
                "Sistema de agendamento com calendário, disponibilidade e reservas",

            target:
                "Profissionais, empresas e prestadores de serviços que precisam permitir que clientes reservem horários e gerenciem sua disponibilidade por meio de um sistema centralizado.",

            support:
                "30 dias de suporte pós-entrega",

            useCases: [
                "Agendamento de consultas",
                "Consultas profissionais",
                "Serviços empresariais",
                "Reservas de reuniões",
                "Agendamento de clientes",
                "Serviços por horário",
                "Calendários de disponibilidade",
                "Reservas online",
            ],

            includes: [
                "Sistema de agendamento",
                "Calendário de consultas",
                "Gerenciamento de disponibilidade",
                "Regras de horários",
                "Reserva de consultas",
                "Confirmações por e-mail",
                "Eventos recorrentes",
                "Suporte a fusos horários",
                "Detecção de conflitos",
                "Interface responsiva",
                "Prisma",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
            ],

            notIncludes: [
                "Videoconferência integrada",
                "Processamento de pagamentos",
                "CRM empresarial completo",
                "Aplicativo móvel nativo",
                "Automações empresariais avançadas",
                "Infraestrutura completa de comunicação",
            ],

            features: [
                "Appointment Booking",
                "Availability Management",
                "Scheduling Rules",
                "Recurring Events",
                "Timezone Support",
                "Email Confirmations",
                "Conflict Detection",
                "Calendar Integration",
                "Responsive Design",
                "Type-safe Components",
            ],

            deliverables: [
                "Sistema de agendamento publicado",
                "Calendário de reservas",
                "Gerenciamento de disponibilidade",
                "Regras de horários",
                "Confirmações por e-mail",
                "Gerenciamento de eventos",
                "Suporte a fusos horários",
                "Integração de calendário",
                "Código-fonte",
                "Documentação técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Reservas centralizadas",

                    description:
                        "Permite gerenciar consultas e reservas a partir de uma única plataforma digital.",
                },

                {
                    title: "Disponibilidade configurável",

                    description:
                        "Permite definir horários disponíveis, regras de reserva e condições de atendimento.",
                },

                {
                    title: "Confirmações automáticas",

                    description:
                        "Os clientes podem receber confirmações automáticas por e-mail para suas reservas.",
                },

                {
                    title: "Menos conflitos de horários",

                    description:
                        "O sistema controla a disponibilidade para reduzir reservas simultâneas ou incompatíveis.",
                },
            ],

            process: [
                {
                    title: "Design do sistema de agenda",

                    description:
                        "Definimos tipos de consultas, duração, disponibilidade, horários e regras de reserva.",
                },

                {
                    title: "Construção do calendário",

                    description:
                        "Implementamos a interface de calendário e o fluxo de seleção de datas e horários.",
                },

                {
                    title: "Gerenciamento de disponibilidade",

                    description:
                        "Configuramos regras de disponibilidade, eventos recorrentes e controle de conflitos.",
                },

                {
                    title: "Confirmações",

                    description:
                        "Integramos o sistema de confirmações e notificações por e-mail.",
                },

                {
                    title: "Testes e lançamento",

                    description:
                        "Validamos reservas, disponibilidade, fusos horários, conflitos e comportamento responsivo.",
                },
            ],

            faq: [
                {
                    question: "O que é um Appointment Scheduler?",

                    answer:
                        "É um sistema que permite gerenciar horários disponíveis e possibilita que usuários reservem consultas por meio de uma plataforma digital.",
                },

                {
                    question: "Pode configurar horários de disponibilidade?",

                    answer:
                        "Sim. O sistema permite definir regras e períodos de disponibilidade para controlar quando as reservas podem ser realizadas.",
                },

                {
                    question: "Inclui confirmações por e-mail?",

                    answer:
                        "Sim. O sistema contempla confirmações automáticas por e-mail para as reservas.",
                },

                {
                    question: "Suporta fusos horários?",

                    answer:
                        "Sim. A arquitetura contempla gerenciamento de fusos horários, especialmente útil quando usuários e serviços estão em diferentes regiões.",
                },
            ],
        },
    },
};