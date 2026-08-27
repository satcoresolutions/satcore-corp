import type {
    ServicePlan,
} from "@/types/plan.types";

export const basicBooking: ServicePlan = {
    core: {
        // ────────────────────────────────────
        // Identidad
        // ────────────────────────────────────

        id: "BKG-001",

        slug: "basic-booking",

        // ────────────────────────────────────
        // Comercial
        // ────────────────────────────────────

        complexity: "⭐⭐⭐ (3/5)",

        price: "$1,100 - $1,600 USD",

        pricingType: "fixed",

        automationLevel: "medium",

        // ────────────────────────────────────
        // Técnico
        // ────────────────────────────────────

        stack: [
            "Next.js",
            "NestJS",
            "TypeScript",
            "Prisma",
            "PostgreSQL",
        ],

        technologies: [
            "Next.js",
            "NestJS",
            "TypeScript",
            "Prisma ORM",
            "PostgreSQL",
            "Calendar APIs",
            "REST API",
            "JWT Authentication",
            "Transactional Booking Logic",
        ],

        integrations: [
            "Calendar APIs",
            "Resend",
            "Google Calendar",
        ],

        // ────────────────────────────────────
        // Multimedia
        // ────────────────────────────────────

        heroImage:
            "/images/services/software/hero/hero-basic-booking.png",

        image:
            "/images/services/software/hero/hero-basic-booking.png",
    },

    translations: {
        es: {
            name: "Reserva Básica",

            title:
                "Plataforma de Reservas Básica",

            level: "🟢 Básico",

            category:
                "Plataformas de Reservas",

            description:
                "Sistema de reservas profesional para gestionar disponibilidad, asignación de franjas horarias, estados de reserva y notificaciones automatizadas mediante una arquitectura segura y escalable.",

            time: "5-7 semanas",

            imageAlt:
                "Plataforma digital de reservas y gestión de horarios",

            target:
                "Empresas, profesionales, centros de atención, servicios y organizaciones que necesitan gestionar reservas mediante horarios disponibles y un sistema centralizado de control.",

            support:
                "30 días soporte post-entrega",

            useCases: [
                "Reservas de servicios",
                "Citas profesionales",
                "Consultas",
                "Salas y espacios",
                "Clases y sesiones",
                "Agenda de atención",
            ],

            includes: [
                "Sistema de reservas",
                "Asignación de franjas horarias",
                "Gestión de disponibilidad",
                "Estados de reserva",
                "Panel de administración",
                "Validación de usuarios",
                "Notificaciones básicas",
                "Integración con calendario",
                "Autenticación JWT",
                "Base de datos relacional",
                "Diseño responsive",
                "SEO técnico",
            ],

            notIncludes: [
                "Sincronización en tiempo real mediante WebSockets",
                "Disponibilidad multi-recurso avanzada",
                "Facturación automatizada",
                "Pagos recurrentes",
                "Lógica avanzada de múltiples calendarios",
            ],

            features: [
                "Time-slot Allocation",
                "Booking Status Management",
                "Availability Management",
                "Transactional Booking Logic",
                "JWT Authentication",
                "Calendar API Integration",
                "Automated Notification Hooks",
                "Prisma ORM",
                "REST API",
                "Responsive Design",
            ],

            deliverables: [
                "Plataforma de reservas publicada",
                "Panel de administración",
                "Código fuente",
                "Base de datos configurada",
                "Documentación técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Gestión organizada",

                    description:
                        "Centraliza las reservas, horarios disponibles y estados de atención dentro de una única plataforma.",
                },

                {
                    title:
                        "Prevención de conflictos",

                    description:
                        "La lógica transaccional permite controlar la asignación de horarios y reducir conflictos durante el proceso de reserva.",
                },

                {
                    title:
                        "Agenda automatizada",

                    description:
                        "Facilita la gestión de disponibilidad y permite integrar notificaciones básicas para mantener informados a los usuarios.",
                },
            ],

            process: [
                {
                    title:
                        "Diseño de disponibilidad",

                    description:
                        "Definimos horarios, franjas disponibles, reglas de reserva y estados del proceso.",
                },

                {
                    title:
                        "Desarrollo de la plataforma",

                    description:
                        "Construimos el sistema utilizando Next.js, NestJS, Prisma y PostgreSQL.",
                },

                {
                    title:
                        "Integración y pruebas",

                    description:
                        "Integramos calendarios y notificaciones, validamos las reservas y comprobamos el comportamiento del sistema antes del lanzamiento.",
                },
            ],

            faq: [
                {
                    question:
                        "¿Puede gestionar diferentes horarios?",

                    answer:
                        "Sí. El sistema permite configurar disponibilidad mediante franjas horarias y controlar el estado de cada reserva.",
                },

                {
                    question:
                        "¿Qué ocurre si dos usuarios intentan reservar el mismo horario?",

                    answer:
                        "La lógica transaccional permite validar la disponibilidad durante la operación para reducir el riesgo de sobre-reservas.",
                },

                {
                    question:
                        "¿Incluye integración con calendarios?",

                    answer:
                        "Sí. El plan permite integrar APIs de calendario para trabajar con información de disponibilidad y programación.",
                },

                {
                    question:
                        "¿Incluye pagos?",

                    answer:
                        "El plan básico no incluye flujos de facturación automatizada. Estas funcionalidades pertenecen al plan Advanced Booking.",
                },
            ],
        },
        en: {
            name: "Basic Booking",

            title:
                "Basic Booking Platform",

            level: "🟢 Basic",

            category:
                "Booking Platforms",

            description:
                "Professional booking system for managing availability, time-slot allocation, booking statuses, and automated notifications through a secure and scalable architecture.",

            time: "5-7 weeks",

            imageAlt:
                "Digital booking and scheduling platform",

            target:
                "Businesses, professionals, service centers, service providers, and organizations that need to manage bookings through available time slots and a centralized management system.",

            support:
                "30 days post-delivery support",

            useCases: [
                "Service bookings",
                "Professional appointments",
                "Consultations",
                "Rooms and spaces",
                "Classes and sessions",
                "Service scheduling",
            ],

            includes: [
                "Booking system",
                "Time-slot allocation",
                "Availability management",
                "Booking status management",
                "Administration panel",
                "User validation",
                "Basic notifications",
                "Calendar integration",
                "JWT authentication",
                "Relational database",
                "Responsive design",
                "Technical SEO",
            ],

            notIncludes: [
                "Real-time synchronization using WebSockets",
                "Advanced multi-resource availability",
                "Automated billing",
                "Recurring payments",
                "Advanced multi-calendar logic",
            ],

            features: [
                "Time-slot Allocation",
                "Booking Status Management",
                "Availability Management",
                "Transactional Booking Logic",
                "JWT Authentication",
                "Calendar API Integration",
                "Automated Notification Hooks",
                "Prisma ORM",
                "REST API",
                "Responsive Design",
            ],

            deliverables: [
                "Published booking platform",
                "Administration panel",
                "Source code",
                "Configured database",
                "Technical documentation",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Organized Management",

                    description:
                        "Centralizes bookings, available schedules, and service statuses within a single platform.",
                },

                {
                    title:
                        "Conflict Prevention",

                    description:
                        "Transactional logic helps control time-slot allocation and reduce conflicts during the booking process.",
                },

                {
                    title:
                        "Automated Scheduling",

                    description:
                        "Simplifies availability management and enables basic notification integrations to keep users informed.",
                },
            ],

            process: [
                {
                    title:
                        "Availability Design",

                    description:
                        "We define schedules, available time slots, booking rules, and process statuses.",
                },

                {
                    title:
                        "Platform Development",

                    description:
                        "We build the system using Next.js, NestJS, Prisma, and PostgreSQL.",
                },

                {
                    title:
                        "Integration and Testing",

                    description:
                        "We integrate calendars and notifications, validate bookings, and verify system behavior before launch.",
                },
            ],

            faq: [
                {
                    question:
                        "Can it manage different schedules?",

                    answer:
                        "Yes. The system allows availability to be configured through time slots and enables the status of each booking to be managed.",
                },

                {
                    question:
                        "What happens if two users try to book the same time slot?",

                    answer:
                        "Transactional logic validates availability during the operation to reduce the risk of overbooking.",
                },

                {
                    question:
                        "Does it include calendar integration?",

                    answer:
                        "Yes. The plan allows calendar APIs to be integrated for managing availability and scheduling information.",
                },

                {
                    question:
                        "Does it include payments?",

                    answer:
                        "The Basic plan does not include automated billing workflows. These features belong to the Advanced Booking plan.",
                },
            ],
        },
        pt: {
            name: "Reserva Básica",

            title:
                "Plataforma de Reservas Básica",

            level: "🟢 Básico",

            category:
                "Plataformas de Reservas",

            description:
                "Sistema profissional de reservas para gerenciar disponibilidade, alocação de horários, status das reservas e notificações automatizadas por meio de uma arquitetura segura e escalável.",

            time: "5-7 semanas",

            imageAlt:
                "Plataforma digital de reservas e gerenciamento de horários",

            target:
                "Empresas, profissionais, centros de atendimento, prestadores de serviços e organizações que precisam gerenciar reservas por meio de horários disponíveis e de um sistema centralizado de controle.",

            support:
                "30 dias de suporte pós-entrega",

            useCases: [
                "Reservas de serviços",
                "Agendamentos profissionais",
                "Consultas",
                "Salas e espaços",
                "Aulas e sessões",
                "Agenda de atendimento",
            ],

            includes: [
                "Sistema de reservas",
                "Alocação de horários",
                "Gerenciamento de disponibilidade",
                "Gerenciamento de status das reservas",
                "Painel administrativo",
                "Validação de usuários",
                "Notificações básicas",
                "Integração com calendário",
                "Autenticação JWT",
                "Banco de dados relacional",
                "Design responsivo",
                "SEO técnico",
            ],

            notIncludes: [
                "Sincronização em tempo real com WebSockets",
                "Disponibilidade avançada de múltiplos recursos",
                "Faturamento automatizado",
                "Pagamentos recorrentes",
                "Lógica avançada para múltiplos calendários",
            ],

            features: [
                "Time-slot Allocation",
                "Booking Status Management",
                "Availability Management",
                "Transactional Booking Logic",
                "JWT Authentication",
                "Calendar API Integration",
                "Automated Notification Hooks",
                "Prisma ORM",
                "REST API",
                "Responsive Design",
            ],

            deliverables: [
                "Plataforma de reservas publicada",
                "Painel administrativo",
                "Código-fonte",
                "Banco de dados configurado",
                "Documentação técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Gestão organizada",

                    description:
                        "Centraliza as reservas, os horários disponíveis e os status de atendimento em uma única plataforma.",
                },

                {
                    title:
                        "Prevenção de conflitos",

                    description:
                        "A lógica transacional ajuda a controlar a alocação de horários e reduzir conflitos durante o processo de reserva.",
                },

                {
                    title:
                        "Agenda automatizada",

                    description:
                        "Facilita o gerenciamento da disponibilidade e permite integrar notificações básicas para manter os usuários informados.",
                },
            ],

            process: [
                {
                    title:
                        "Definição da disponibilidade",

                    description:
                        "Definimos horários, períodos disponíveis, regras de reserva e status do processo.",
                },

                {
                    title:
                        "Desenvolvimento da plataforma",

                    description:
                        "Construímos o sistema utilizando Next.js, NestJS, Prisma e PostgreSQL.",
                },

                {
                    title:
                        "Integração e testes",

                    description:
                        "Integramos calendários e notificações, validamos as reservas e verificamos o comportamento do sistema antes do lançamento.",
                },
            ],

            faq: [
                {
                    question:
                        "Pode gerenciar diferentes horários?",

                    answer:
                        "Sim. O sistema permite configurar a disponibilidade por meio de horários e controlar o status de cada reserva.",
                },

                {
                    question:
                        "O que acontece se dois usuários tentarem reservar o mesmo horário?",

                    answer:
                        "A lógica transacional valida a disponibilidade durante a operação para reduzir o risco de reservas duplicadas.",
                },

                {
                    question:
                        "Inclui integração com calendários?",

                    answer:
                        "Sim. O plano permite integrar APIs de calendário para trabalhar com informações de disponibilidade e agendamento.",
                },

                {
                    question:
                        "Inclui pagamentos?",

                    answer:
                        "O plano básico não inclui fluxos de faturamento automatizado. Essas funcionalidades pertencem ao plano Advanced Booking.",
                },
            ],
        },
    },
};