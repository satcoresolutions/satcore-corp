import type {
    ServicePlan,
} from "@/types/plan.types";

export const advancedBooking: ServicePlan = {
    core: {
        // ────────────────────────────────────
        // Identidad
        // ────────────────────────────────────

        id: "BKG-002",

        slug: "advanced-booking",

        // ────────────────────────────────────
        // Comercial
        // ────────────────────────────────────

        complexity: "⭐⭐⭐⭐⭐ (5/5)",

        price: "$1,750 - $3,250 USD",

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
            "PostgreSQL",
            "WebSockets",
        ],

        technologies: [
            "Next.js",
            "NestJS",
            "TypeScript",
            "Prisma ORM",
            "PostgreSQL",
            "Calendar APIs",
            "WebSockets",
            "REST API",
            "JWT Authentication",
            "Transactional Booking Logic",
            "Real-time Synchronization",
            "Multi-resource Availability",
        ],

        integrations: [
            "Calendar APIs",
            "Google Calendar",
            "Resend",
            "Payment APIs",
            "Billing APIs",
        ],

        // ────────────────────────────────────
        // Multimedia
        // ────────────────────────────────────

        heroImage:
            "/images/services/software/hero/hero-advanced-booking.png",

        image:
            "/images/services/software/hero/hero-advanced-booking.png",
    },

    translations: {
        es: {
            name: "Reserva Avanzada",

            title:
                "Plataforma de Reservas Avanzada",

            level: "🔴 Avanzado",

            category:
                "Plataformas de Reservas",

            description:
                "Plataforma avanzada de reservas con sincronización en tiempo real, gestión de disponibilidad de múltiples recursos, control transaccional de reservas y flujos automatizados de facturación.",

            time: "8-12 semanas",

            imageAlt:
                "Plataforma avanzada de reservas con sincronización en tiempo real",

            target:
                "Empresas, plataformas de servicios, centros especializados y organizaciones que necesitan gestionar múltiples recursos, disponibilidad dinámica y procesos avanzados de reserva y facturación.",

            support:
                "60 días soporte post-entrega",

            useCases: [
                "Plataformas de reservas",
                "Centros médicos",
                "Hoteles y alojamientos",
                "Espacios y salas",
                "Servicios profesionales",
                "Centros deportivos",
                "Plataformas multi-recurso",
                "Sistemas de citas avanzadas",
            ],

            includes: [
                "Sistema avanzado de reservas",
                "Sincronización en tiempo real",
                "WebSockets",
                "Disponibilidad multi-recurso",
                "Gestión avanzada de calendarios",
                "Control transaccional",
                "Prevención de sobre-reservas",
                "Estados de reserva",
                "Flujos automatizados de facturación",
                "Integración con calendarios",
                "Autenticación JWT",
                "Panel administrativo",
                "Notificaciones automatizadas",
                "Base de datos relacional",
                "Diseño responsive",
            ],

            notIncludes: [
                "Arquitecturas enterprise altamente distribuidas",
                "Sistemas de facturación fiscal específicos por país",
                "Integraciones empresariales no contempladas",
                "Desarrollo de aplicaciones móviles nativas",
            ],

            features: [
                "Real-time WebSockets",
                "Live Availability Synchronization",
                "Multi-resource Availability",
                "Atomic Transaction Handling",
                "Overbooking Prevention",
                "JWT User State Validation",
                "Calendar API Integration",
                "Automated Billing Workflows",
                "Booking State Management",
                "Real-time Notifications",
                "Prisma ORM",
                "REST API",
                "Responsive Design",
            ],

            deliverables: [
                "Plataforma avanzada de reservas publicada",
                "Panel administrativo",
                "Sistema de disponibilidad multi-recurso",
                "Sincronización en tiempo real",
                "Flujos de facturación automatizada",
                "Código fuente",
                "Base de datos configurada",
                "Documentación técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Disponibilidad en tiempo real",

                    description:
                        "La sincronización mediante WebSockets permite actualizar la disponibilidad y los estados de reserva sin depender de recargas manuales.",
                },

                {
                    title:
                        "Gestión multi-recurso",

                    description:
                        "Permite administrar simultáneamente diferentes recursos, espacios, profesionales o servicios dentro de una misma plataforma.",
                },

                {
                    title:
                        "Menos conflictos de reserva",

                    description:
                        "La gestión transaccional de las operaciones ayuda a evitar conflictos y sobre-reservas durante procesos concurrentes.",
                },

                {
                    title:
                        "Facturación automatizada",

                    description:
                        "Los flujos automatizados permiten conectar las reservas con procesos de facturación y cobro según las reglas del negocio.",
                },
            ],

            process: [
                {
                    title:
                        "Arquitectura de reservas",

                    description:
                        "Diseñamos la estructura de recursos, calendarios, disponibilidad, estados y reglas de reserva.",
                },

                {
                    title:
                        "Desarrollo del sistema",

                    description:
                        "Construimos la plataforma utilizando Next.js, NestJS, Prisma, PostgreSQL y WebSockets.",
                },

                {
                    title:
                        "Sincronización en tiempo real",

                    description:
                        "Implementamos canales de comunicación en tiempo real para mantener actualizada la disponibilidad entre los usuarios y el sistema.",
                },

                {
                    title:
                        "Automatización",

                    description:
                        "Integramos calendarios, notificaciones y flujos automatizados de facturación según las necesidades del proyecto.",
                },

                {
                    title:
                        "Pruebas y lanzamiento",

                    description:
                        "Realizamos pruebas de concurrencia, disponibilidad, reservas y sincronización antes de publicar la plataforma.",
                },
            ],

            faq: [
                {
                    question:
                        "¿Qué diferencia existe entre Basic Booking y Advanced Booking?",

                    answer:
                        "Basic Booking está orientado a sistemas de reservas con horarios y disponibilidad estándar. Advanced Booking incorpora sincronización en tiempo real, múltiples recursos, disponibilidad avanzada y flujos automatizados de facturación.",
                },

                {
                    question:
                        "¿Puede manejar varios recursos al mismo tiempo?",

                    answer:
                        "Sí. El sistema puede gestionar diferentes recursos como profesionales, salas, espacios, servicios o equipos mediante reglas de disponibilidad.",
                },

                {
                    question:
                        "¿Las reservas se actualizan en tiempo real?",

                    answer:
                        "Sí. La plataforma utiliza WebSockets para sincronizar cambios de disponibilidad y estados de reserva en tiempo real.",
                },

                {
                    question:
                        "¿Cómo ayuda el sistema a evitar sobre-reservas?",

                    answer:
                        "Las operaciones críticas de reserva utilizan lógica transaccional para validar y confirmar la disponibilidad de los recursos durante la operación.",
                },

                {
                    question:
                        "¿Incluye facturación automatizada?",

                    answer:
                        "Sí. El plan Advanced Booking contempla flujos automatizados de facturación e integración con servicios de pago o facturación según los requerimientos del proyecto.",
                },

                {
                    question:
                        "¿Puede integrarse con calendarios externos?",

                    answer:
                        "Sí. La plataforma puede integrarse con APIs de calendario para sincronizar disponibilidad, eventos y programación.",
                },
            ],
        },
        en: {
            name: "Advanced Booking",

            title:
                "Advanced Booking Platform",

            level: "🔴 Advanced",

            category:
                "Booking Platforms",

            description:
                "Advanced booking platform with real-time synchronization, multi-resource availability management, transactional booking control, and automated billing workflows.",

            time: "8-12 weeks",

            imageAlt:
                "Advanced booking platform with real-time synchronization",

            target:
                "Businesses, service platforms, specialized centers, and organizations that need to manage multiple resources, dynamic availability, and advanced booking and billing processes.",

            support:
                "60 days post-delivery support",

            useCases: [
                "Booking platforms",
                "Medical centers",
                "Hotels and accommodations",
                "Spaces and rooms",
                "Professional services",
                "Sports centers",
                "Multi-resource platforms",
                "Advanced appointment systems",
            ],

            includes: [
                "Advanced booking system",
                "Real-time synchronization",
                "WebSockets",
                "Multi-resource availability",
                "Advanced calendar management",
                "Transactional control",
                "Overbooking prevention",
                "Booking status management",
                "Automated billing workflows",
                "Calendar integration",
                "JWT authentication",
                "Administration panel",
                "Automated notifications",
                "Relational database",
                "Responsive design",
            ],

            notIncludes: [
                "Highly distributed enterprise architectures",
                "Country-specific tax billing systems",
                "Unspecified enterprise integrations",
                "Native mobile application development",
            ],

            features: [
                "Real-time WebSockets",
                "Live Availability Synchronization",
                "Multi-resource Availability",
                "Atomic Transaction Handling",
                "Overbooking Prevention",
                "JWT User State Validation",
                "Calendar API Integration",
                "Automated Billing Workflows",
                "Booking State Management",
                "Real-time Notifications",
                "Prisma ORM",
                "REST API",
                "Responsive Design",
            ],

            deliverables: [
                "Published advanced booking platform",
                "Administration panel",
                "Multi-resource availability system",
                "Real-time synchronization",
                "Automated billing workflows",
                "Source code",
                "Configured database",
                "Technical documentation",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Real-time Availability",

                    description:
                        "WebSocket-based synchronization allows availability and booking statuses to be updated without relying on manual page refreshes.",
                },

                {
                    title:
                        "Multi-resource Management",

                    description:
                        "Allows different resources, spaces, professionals, or services to be managed simultaneously within a single platform.",
                },

                {
                    title:
                        "Fewer Booking Conflicts",

                    description:
                        "Transactional operation management helps prevent conflicts and overbooking during concurrent booking processes.",
                },

                {
                    title:
                        "Automated Billing",

                    description:
                        "Automated workflows allow bookings to be connected with billing and payment processes according to business rules.",
                },
            ],

            process: [
                {
                    title:
                        "Booking Architecture",

                    description:
                        "We design the structure of resources, calendars, availability, statuses, and booking rules.",
                },

                {
                    title:
                        "System Development",

                    description:
                        "We build the platform using Next.js, NestJS, Prisma, PostgreSQL, and WebSockets.",
                },

                {
                    title:
                        "Real-time Synchronization",

                    description:
                        "We implement real-time communication channels to keep availability synchronized between users and the system.",
                },

                {
                    title:
                        "Automation",

                    description:
                        "We integrate calendars, notifications, and automated billing workflows according to the project's requirements.",
                },

                {
                    title:
                        "Testing and Launch",

                    description:
                        "We perform concurrency, availability, booking, and synchronization tests before publishing the platform.",
                },
            ],

            faq: [
                {
                    question:
                        "What is the difference between Basic Booking and Advanced Booking?",

                    answer:
                        "Basic Booking is designed for booking systems with standard schedules and availability. Advanced Booking adds real-time synchronization, multiple resources, advanced availability management, and automated billing workflows.",
                },

                {
                    question:
                        "Can it manage multiple resources at the same time?",

                    answer:
                        "Yes. The system can manage different resources such as professionals, rooms, spaces, services, or equipment through availability rules.",
                },

                {
                    question:
                        "Are bookings updated in real time?",

                    answer:
                        "Yes. The platform uses WebSockets to synchronize availability changes and booking statuses in real time.",
                },

                {
                    question:
                        "How does the system help prevent overbooking?",

                    answer:
                        "Critical booking operations use transactional logic to validate and confirm resource availability during the operation.",
                },

                {
                    question:
                        "Does it include automated billing?",

                    answer:
                        "Yes. The Advanced Booking plan includes automated billing workflows and integration with payment or billing services according to the project's requirements.",
                },

                {
                    question:
                        "Can it integrate with external calendars?",

                    answer:
                        "Yes. The platform can integrate with calendar APIs to synchronize availability, events, and schedules.",
                },
            ],
        },
        pt: {
            name: "Reserva Avançada",

            title:
                "Plataforma de Reservas Avançada",

            level: "🔴 Avançado",

            category:
                "Plataformas de Reservas",

            description:
                "Plataforma avançada de reservas com sincronização em tempo real, gerenciamento de disponibilidade de múltiplos recursos, controle transacional de reservas e fluxos automatizados de faturamento.",

            time: "8-12 semanas",

            imageAlt:
                "Plataforma avançada de reservas com sincronização em tempo real",

            target:
                "Empresas, plataformas de serviços, centros especializados e organizações que precisam gerenciar múltiplos recursos, disponibilidade dinâmica e processos avançados de reservas e faturamento.",

            support:
                "60 dias de suporte pós-entrega",

            useCases: [
                "Plataformas de reservas",
                "Centros médicos",
                "Hotéis e acomodações",
                "Espaços e salas",
                "Serviços profissionais",
                "Centros esportivos",
                "Plataformas de múltiplos recursos",
                "Sistemas avançados de agendamento",
            ],

            includes: [
                "Sistema avançado de reservas",
                "Sincronização em tempo real",
                "WebSockets",
                "Disponibilidade de múltiplos recursos",
                "Gerenciamento avançado de calendários",
                "Controle transacional",
                "Prevenção de reservas duplicadas",
                "Gerenciamento de status das reservas",
                "Fluxos automatizados de faturamento",
                "Integração com calendários",
                "Autenticação JWT",
                "Painel administrativo",
                "Notificações automatizadas",
                "Banco de dados relacional",
                "Design responsivo",
            ],

            notIncludes: [
                "Arquiteturas enterprise altamente distribuídas",
                "Sistemas de faturamento fiscal específicos por país",
                "Integrações empresariais não especificadas",
                "Desenvolvimento de aplicativos móveis nativos",
            ],

            features: [
                "Real-time WebSockets",
                "Live Availability Synchronization",
                "Multi-resource Availability",
                "Atomic Transaction Handling",
                "Overbooking Prevention",
                "JWT User State Validation",
                "Calendar API Integration",
                "Automated Billing Workflows",
                "Booking State Management",
                "Real-time Notifications",
                "Prisma ORM",
                "REST API",
                "Responsive Design",
            ],

            deliverables: [
                "Plataforma avançada de reservas publicada",
                "Painel administrativo",
                "Sistema de disponibilidade de múltiplos recursos",
                "Sincronização em tempo real",
                "Fluxos automatizados de faturamento",
                "Código-fonte",
                "Banco de dados configurado",
                "Documentação técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Disponibilidade em Tempo Real",

                    description:
                        "A sincronização baseada em WebSockets permite atualizar a disponibilidade e os status das reservas sem depender de atualizações manuais da página.",
                },

                {
                    title:
                        "Gestão de Múltiplos Recursos",

                    description:
                        "Permite gerenciar simultaneamente diferentes recursos, espaços, profissionais ou serviços dentro de uma única plataforma.",
                },

                {
                    title:
                        "Menos Conflitos de Reserva",

                    description:
                        "O gerenciamento transacional das operações ajuda a evitar conflitos e reservas duplicadas durante processos de reserva simultâneos.",
                },

                {
                    title:
                        "Faturamento Automatizado",

                    description:
                        "Os fluxos automatizados permitem conectar as reservas aos processos de faturamento e pagamento de acordo com as regras do negócio.",
                },
            ],

            process: [
                {
                    title:
                        "Arquitetura de Reservas",

                    description:
                        "Projetamos a estrutura de recursos, calendários, disponibilidade, status e regras de reserva.",
                },

                {
                    title:
                        "Desenvolvimento do Sistema",

                    description:
                        "Construímos a plataforma utilizando Next.js, NestJS, Prisma, PostgreSQL e WebSockets.",
                },

                {
                    title:
                        "Sincronização em Tempo Real",

                    description:
                        "Implementamos canais de comunicação em tempo real para manter a disponibilidade sincronizada entre os usuários e o sistema.",
                },

                {
                    title:
                        "Automação",

                    description:
                        "Integramos calendários, notificações e fluxos automatizados de faturamento de acordo com os requisitos do projeto.",
                },

                {
                    title:
                        "Testes e Lançamento",

                    description:
                        "Realizamos testes de concorrência, disponibilidade, reservas e sincronização antes de publicar a plataforma.",
                },
            ],

            faq: [
                {
                    question:
                        "Qual é a diferença entre Basic Booking e Advanced Booking?",

                    answer:
                        "O Basic Booking é voltado para sistemas de reservas com horários e disponibilidade padrão. O Advanced Booking adiciona sincronização em tempo real, múltiplos recursos, gerenciamento avançado de disponibilidade e fluxos automatizados de faturamento.",
                },

                {
                    question:
                        "Pode gerenciar vários recursos ao mesmo tempo?",

                    answer:
                        "Sim. O sistema pode gerenciar diferentes recursos, como profissionais, salas, espaços, serviços ou equipamentos por meio de regras de disponibilidade.",
                },

                {
                    question:
                        "As reservas são atualizadas em tempo real?",

                    answer:
                        "Sim. A plataforma utiliza WebSockets para sincronizar alterações de disponibilidade e status das reservas em tempo real.",
                },

                {
                    question:
                        "Como o sistema ajuda a evitar reservas duplicadas?",

                    answer:
                        "As operações críticas de reserva utilizam lógica transacional para validar e confirmar a disponibilidade dos recursos durante a operação.",
                },

                {
                    question:
                        "Inclui faturamento automatizado?",

                    answer:
                        "Sim. O plano Advanced Booking contempla fluxos automatizados de faturamento e integração com serviços de pagamento ou faturamento de acordo com os requisitos do projeto.",
                },

                {
                    question:
                        "Pode ser integrado a calendários externos?",

                    answer:
                        "Sim. A plataforma pode ser integrada a APIs de calendário para sincronizar disponibilidade, eventos e agendamentos.",
                },
            ],
        },
    },
};