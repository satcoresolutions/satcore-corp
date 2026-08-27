import type { ServicePlan } from "@/types/plan.types";

export const taskManager: ServicePlan = {
    core: {
        id: "PM-001",

        slug: "task-manager",

        complexity: "⭐⭐⭐ (3/5)",

        price: "$1,250 - $2,000 USD",

        pricingType: "fixed",

        automationLevel: "high",

        stack: [
            "Next.js",
            "TypeScript",
            "Prisma",
            "WebSockets",
        ],

        technologies: [
            "Next.js",
            "TypeScript",
            "Prisma",
            "WebSockets",
            "Task Management",
            "Task Assignment",
            "Progress Tracking",
            "Deadline Monitoring",
            "Task Status Management",
            "User Collaboration",
            "Real-time Updates",
            "Type-safe Components",
        ],

        integrations: [
            "WebSockets",
            "Database Services",
            "Authentication Services",
            "Notification Services",
        ],

        heroImage:
            "/images/services/software/hero/hero-task-manager.png",

        image:
            "/images/services/software/hero/hero-task-manager.png",
    },

    translations: {
        es: {
            name: "Gestor de Tareas",

            title: "Sistema de Gestión de Tareas",

            level: "🟡 Intermedio",

            category: "Sistemas de Gestión de Proyectos",

            description:
                "Sistema para crear, asignar y administrar tareas de proyectos, realizar seguimiento del progreso y controlar fechas límite desde un espacio centralizado.",

            time: "5-7 semanas",

            imageAlt:
                "Gestor de tareas con asignación, seguimiento de progreso y control de fechas límite",

            target:
                "Equipos, empresas y organizaciones que necesitan administrar tareas, responsables, estados y fechas límite dentro de proyectos colaborativos.",

            support:
                "45 días soporte post-entrega",

            useCases: [
                "Gestión de tareas",
                "Equipos de trabajo",
                "Proyectos empresariales",
                "Seguimiento de actividades",
                "Asignación de responsables",
                "Control de fechas límite",
                "Seguimiento de progreso",
                "Colaboración de equipos",
            ],

            includes: [
                "Gestor de tareas",
                "Creación de tareas",
                "Asignación de responsables",
                "Estados de tareas",
                "Seguimiento de progreso",
                "Control de fechas límite",
                "Prioridades",
                "Filtros de tareas",
                "Vista de tareas",
                "Actualizaciones en tiempo real",
                "WebSockets",
                "Base de datos Prisma",
                "Diseño responsive",
                "Next.js",
                "TypeScript",
            ],

            notIncludes: [
                "Automatizaciones empresariales complejas",
                "Gestión financiera de proyectos",
                "Planificación avanzada de recursos",
                "Aplicación móvil nativa",
                "Analítica empresarial avanzada",
                "Integraciones corporativas ilimitadas",
            ],

            features: [
                "Task Assignment",
                "Progress Tracking",
                "Deadline Monitoring",
                "Task Status Management",
                "Task Priorities",
                "Task Filtering",
                "Real-time Updates",
                "User Collaboration",
                "WebSockets",
                "Responsive Design",
            ],

            deliverables: [
                "Gestor de tareas publicado",
                "Sistema de asignación",
                "Seguimiento de progreso",
                "Control de fechas límite",
                "Estados de tareas",
                "Filtros de tareas",
                "Actualizaciones en tiempo real",
                "Base de datos",
                "Código fuente",
                "Documentación técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Asignación organizada",

                    description:
                        "Permite asignar tareas a responsables específicos y mantener una visión clara de las actividades pendientes.",
                },

                {
                    title: "Seguimiento del progreso",

                    description:
                        "Los estados y porcentajes de avance permiten conocer la evolución de cada tarea.",
                },

                {
                    title: "Control de fechas",

                    description:
                        "El sistema permite supervisar fechas límite y mantener las actividades dentro de los tiempos establecidos.",
                },

                {
                    title: "Colaboración en tiempo real",

                    description:
                        "Las actualizaciones mediante WebSockets permiten mantener sincronizada la información entre los usuarios.",
                },
            ],

            process: [
                {
                    title: "Diseño de tareas",

                    description:
                        "Definimos tareas, responsables, prioridades, estados, fechas límite y reglas de seguimiento.",
                },

                {
                    title: "Desarrollo del sistema",

                    description:
                        "Construimos el gestor utilizando Next.js, TypeScript y Prisma.",
                },

                {
                    title: "Actualizaciones en tiempo real",

                    description:
                        "Implementamos WebSockets para mantener sincronizados los cambios entre los usuarios.",
                },

                {
                    title: "Seguimiento y pruebas",

                    description:
                        "Validamos asignaciones, estados, fechas, filtros y actualizaciones antes del lanzamiento.",
                },
            ],

            faq: [
                {
                    question: "¿Qué es un Task Manager?",

                    answer:
                        "Es un sistema diseñado para crear, asignar, organizar y realizar seguimiento de tareas dentro de uno o varios proyectos.",
                },

                {
                    question: "¿Se pueden asignar tareas a diferentes usuarios?",

                    answer:
                        "Sí. Las tareas pueden asociarse con responsables específicos para facilitar la distribución del trabajo.",
                },

                {
                    question: "¿Permite controlar fechas límite?",

                    answer:
                        "Sí. Las tareas pueden incluir fechas límite para facilitar el seguimiento de los tiempos del proyecto.",
                },

                {
                    question: "¿Tiene actualizaciones en tiempo real?",

                    answer:
                        "Sí. El sistema puede utilizar WebSockets para sincronizar cambios entre usuarios.",
                },
            ],
        },

        en: {
            name: "Task Manager",

            title: "Task Management System",

            level: "🟡 Intermediate",

            category: "Project Management Systems",

            description:
                "System for creating, assigning, and managing project tasks, tracking progress, and monitoring deadlines from a centralized workspace.",

            time: "5-7 weeks",

            imageAlt:
                "Task manager with assignment, progress tracking, and deadline monitoring",

            target:
                "Teams, businesses, and organizations that need to manage tasks, responsibilities, statuses, and deadlines within collaborative projects.",

            support:
                "45 days post-delivery support",

            useCases: [
                "Task management",
                "Work teams",
                "Business projects",
                "Activity tracking",
                "Task assignment",
                "Deadline monitoring",
                "Progress tracking",
                "Team collaboration",
            ],

            includes: [
                "Task manager",
                "Task creation",
                "Task assignment",
                "Task statuses",
                "Progress tracking",
                "Deadline monitoring",
                "Priorities",
                "Task filters",
                "Task views",
                "Real-time updates",
                "WebSockets",
                "Prisma database",
                "Responsive design",
                "Next.js",
                "TypeScript",
            ],

            notIncludes: [
                "Complex enterprise automation",
                "Project financial management",
                "Advanced resource planning",
                "Native mobile application",
                "Advanced enterprise analytics",
                "Unlimited corporate integrations",
            ],

            features: [
                "Task Assignment",
                "Progress Tracking",
                "Deadline Monitoring",
                "Task Status Management",
                "Task Priorities",
                "Task Filtering",
                "Real-time Updates",
                "User Collaboration",
                "WebSockets",
                "Responsive Design",
            ],

            deliverables: [
                "Published task manager",
                "Assignment system",
                "Progress tracking",
                "Deadline monitoring",
                "Task statuses",
                "Task filters",
                "Real-time updates",
                "Database",
                "Source code",
                "Technical documentation",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Organized Assignment",

                    description:
                        "Allows tasks to be assigned to specific users while maintaining a clear view of pending activities.",
                },

                {
                    title: "Progress Tracking",

                    description:
                        "Statuses and progress indicators make it possible to monitor the evolution of each task.",
                },

                {
                    title: "Deadline Control",

                    description:
                        "The system helps monitor deadlines and keep activities aligned with project timelines.",
                },

                {
                    title: "Real-time Collaboration",

                    description:
                        "WebSocket updates keep project information synchronized between users.",
                },
            ],

            process: [
                {
                    title: "Task Design",

                    description:
                        "We define tasks, responsibilities, priorities, statuses, deadlines, and tracking rules.",
                },

                {
                    title: "System Development",

                    description:
                        "We build the task manager using Next.js, TypeScript, and Prisma.",
                },

                {
                    title: "Real-time Updates",

                    description:
                        "We implement WebSockets to keep changes synchronized between users.",
                },

                {
                    title: "Tracking and Testing",

                    description:
                        "We validate assignments, statuses, deadlines, filters, and updates before launch.",
                },
            ],

            faq: [
                {
                    question: "What is a Task Manager?",

                    answer:
                        "It is a system designed to create, assign, organize, and track tasks within one or multiple projects.",
                },

                {
                    question: "Can tasks be assigned to different users?",

                    answer:
                        "Yes. Tasks can be assigned to specific users to facilitate work distribution.",
                },

                {
                    question: "Can it monitor deadlines?",

                    answer:
                        "Yes. Tasks can include deadlines to help track project timelines.",
                },

                {
                    question: "Does it support real-time updates?",

                    answer:
                        "Yes. The system can use WebSockets to synchronize changes between users.",
                },
            ],
        },

        pt: {
            name: "Gerenciador de Tarefas",

            title: "Sistema de Gestão de Tarefas",

            level: "🟡 Intermediário",

            category: "Sistemas de Gestão de Projetos",

            description:
                "Sistema para criar, atribuir e administrar tarefas de projetos, acompanhar o progresso e controlar prazos a partir de um espaço centralizado.",

            time: "5-7 semanas",

            imageAlt:
                "Gerenciador de tarefas com atribuição, acompanhamento de progresso e controle de prazos",

            target:
                "Equipes, empresas e organizações que precisam administrar tarefas, responsáveis, estados e prazos dentro de projetos colaborativos.",

            support:
                "45 dias de suporte pós-entrega",

            useCases: [
                "Gestão de tarefas",
                "Equipes de trabalho",
                "Projetos empresariais",
                "Acompanhamento de atividades",
                "Atribuição de responsáveis",
                "Controle de prazos",
                "Acompanhamento de progresso",
                "Colaboração de equipes",
            ],

            includes: [
                "Gerenciador de tarefas",
                "Criação de tarefas",
                "Atribuição de responsáveis",
                "Estados das tarefas",
                "Acompanhamento de progresso",
                "Controle de prazos",
                "Prioridades",
                "Filtros de tarefas",
                "Visualização de tarefas",
                "Atualizações em tempo real",
                "WebSockets",
                "Banco de dados Prisma",
                "Design responsivo",
                "Next.js",
                "TypeScript",
            ],

            notIncludes: [
                "Automações empresariais complexas",
                "Gestão financeira de projetos",
                "Planejamento avançado de recursos",
                "Aplicativo móvel nativo",
                "Análises empresariais avançadas",
                "Integrações corporativas ilimitadas",
            ],

            features: [
                "Task Assignment",
                "Progress Tracking",
                "Deadline Monitoring",
                "Task Status Management",
                "Task Priorities",
                "Task Filtering",
                "Real-time Updates",
                "User Collaboration",
                "WebSockets",
                "Responsive Design",
            ],

            deliverables: [
                "Gerenciador de tarefas publicado",
                "Sistema de atribuição",
                "Acompanhamento de progresso",
                "Controle de prazos",
                "Estados das tarefas",
                "Filtros de tarefas",
                "Atualizações em tempo real",
                "Banco de dados",
                "Código-fonte",
                "Documentação técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Atribuição organizada",

                    description:
                        "Permite atribuir tarefas a responsáveis específicos e manter uma visão clara das atividades pendentes.",
                },

                {
                    title: "Acompanhamento do progresso",

                    description:
                        "Os estados e indicadores de progresso permitem acompanhar a evolução de cada tarefa.",
                },

                {
                    title: "Controle de prazos",

                    description:
                        "O sistema permite monitorar prazos e manter as atividades dentro do cronograma do projeto.",
                },

                {
                    title: "Colaboração em tempo real",

                    description:
                        "As atualizações por WebSockets mantêm as informações sincronizadas entre os usuários.",
                },
            ],

            process: [
                {
                    title: "Definição das tarefas",

                    description:
                        "Definimos tarefas, responsáveis, prioridades, estados, prazos e regras de acompanhamento.",
                },

                {
                    title: "Desenvolvimento do sistema",

                    description:
                        "Construímos o gerenciador utilizando Next.js, TypeScript e Prisma.",
                },

                {
                    title: "Atualizações em tempo real",

                    description:
                        "Implementamos WebSockets para manter as alterações sincronizadas entre os usuários.",
                },

                {
                    title: "Acompanhamento e testes",

                    description:
                        "Validamos atribuições, estados, prazos, filtros e atualizações antes do lançamento.",
                },
            ],

            faq: [
                {
                    question: "O que é um Task Manager?",

                    answer:
                        "É um sistema desenvolvido para criar, atribuir, organizar e acompanhar tarefas dentro de um ou vários projetos.",
                },

                {
                    question: "É possível atribuir tarefas a diferentes usuários?",

                    answer:
                        "Sim. As tarefas podem ser associadas a responsáveis específicos para facilitar a distribuição do trabalho.",
                },

                {
                    question: "Permite controlar prazos?",

                    answer:
                        "Sim. As tarefas podem incluir prazos para facilitar o acompanhamento do cronograma do projeto.",
                },

                {
                    question: "Possui atualizações em tempo real?",

                    answer:
                        "Sim. O sistema pode utilizar WebSockets para sincronizar alterações entre os usuários.",
                },
            ],
        },
    },
};