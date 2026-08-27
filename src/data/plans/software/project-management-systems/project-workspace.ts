import type { ServicePlan } from "@/types/plan.types";

export const projectWorkspace: ServicePlan = {
    core: {
        id: "PM-003",

        slug: "project-workspace",

        complexity: "⭐⭐⭐⭐⭐ (5/5)",

        price: "$2,500 - $4,000 USD",

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
            "Project Workspaces",
            "Timeline Visualization",
            "Project Milestones",
            "Activity History",
            "Reporting Dashboard",
            "Task Management",
            "Team Collaboration",
            "Real-time Updates",
            "Project Analytics",
            "Type-safe Components",
        ],

        integrations: [
            "WebSockets",
            "Database Services",
            "Authentication Services",
            "Notification Services",
            "Reporting Services",
        ],

        heroImage:
            "/images/services/software/hero/hero-project-workspace.png",

        image:
            "/images/services/software/hero/hero-project-workspace.png",
    },

    translations: {
        es: {
            name: "Workspace de Proyecto",

            title: "Espacio de Trabajo Integral para Proyectos",

            level: "🔴 Avanzado",

            category: "Sistemas de Gestión de Proyectos",

            description:
                "Workspace integral para gestionar proyectos mediante líneas de tiempo, hitos, actividades, colaboración de equipos y dashboards de reportes.",

            time: "8-12 semanas",

            imageAlt:
                "Workspace de proyecto con timeline, hitos, historial de actividad y dashboard de reportes",

            target:
                "Empresas, equipos de proyectos y organizaciones que necesitan centralizar planificación, ejecución, seguimiento, colaboración y análisis de proyectos.",

            support:
                "60 días soporte post-entrega",

            useCases: [
                "Gestión integral de proyectos",
                "Planificación de proyectos",
                "Líneas de tiempo",
                "Gestión de hitos",
                "Equipos colaborativos",
                "Seguimiento de actividades",
                "Reportes de proyectos",
                "Análisis de progreso",
                "Gestión empresarial",
            ],

            includes: [
                "Workspace de proyectos",
                "Gestión de proyectos",
                "Timeline visual",
                "Hitos de proyecto",
                "Gestión de tareas",
                "Historial de actividad",
                "Dashboard de reportes",
                "Métricas de proyecto",
                "Seguimiento de progreso",
                "Colaboración de equipos",
                "Actualizaciones en tiempo real",
                "WebSockets",
                "Base de datos Prisma",
                "Diseño responsive",
                "Next.js",
                "TypeScript",
            ],

            notIncludes: [
                "ERP empresarial completo",
                "Gestión financiera empresarial avanzada",
                "Planificación automática mediante IA",
                "Aplicaciones móviles nativas",
                "Business Intelligence empresarial completo",
                "Integraciones corporativas ilimitadas",
            ],

            features: [
                "Timeline Visualization",
                "Project Milestones",
                "Activity History",
                "Reporting Dashboard",
                "Project Analytics",
                "Task Management",
                "Team Collaboration",
                "Progress Tracking",
                "Real-time Updates",
                "WebSockets",
                "Project Management",
            ],

            deliverables: [
                "Workspace de proyecto publicado",
                "Timeline visual",
                "Sistema de hitos",
                "Gestión de tareas",
                "Historial de actividades",
                "Dashboard de reportes",
                "Métricas de proyecto",
                "Colaboración en tiempo real",
                "Base de datos",
                "Código fuente",
                "Documentación técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Planificación centralizada",

                    description:
                        "Permite organizar tareas, hitos, responsables y fechas desde un único espacio de trabajo.",
                },

                {
                    title: "Visualización temporal",

                    description:
                        "Las líneas de tiempo permiten comprender la planificación y evolución de las diferentes etapas del proyecto.",
                },

                {
                    title: "Trazabilidad de actividades",

                    description:
                        "El historial conserva información sobre las actividades realizadas dentro del workspace.",
                },

                {
                    title: "Análisis del proyecto",

                    description:
                        "El dashboard de reportes facilita el seguimiento del progreso y la interpretación de métricas del proyecto.",
                },
            ],

            process: [
                {
                    title: "Arquitectura del proyecto",

                    description:
                        "Definimos proyectos, tareas, hitos, usuarios, responsables, fechas y estructuras de colaboración.",
                },

                {
                    title: "Timeline y milestones",

                    description:
                        "Construimos la visualización temporal y las estructuras necesarias para administrar hitos y etapas.",
                },

                {
                    title: "Actividad y colaboración",

                    description:
                        "Implementamos historial de actividad y mecanismos de colaboración entre los miembros del proyecto.",
                },

                {
                    title: "Dashboard de reportes",

                    description:
                        "Desarrollamos métricas y reportes para visualizar el progreso y rendimiento del proyecto.",
                },

                {
                    title: "Tiempo real y pruebas",

                    description:
                        "Integramos WebSockets y validamos tareas, hitos, timelines, actividad, reportes y permisos.",
                },
            ],

            faq: [
                {
                    question: "¿Qué es un Project Workspace?",

                    answer:
                        "Es un espacio centralizado para planificar, ejecutar, supervisar y analizar un proyecto y sus actividades.",
                },

                {
                    question: "¿Incluye una línea de tiempo?",

                    answer:
                        "Sí. El workspace incluye una visualización temporal para representar etapas, tareas y hitos del proyecto.",
                },

                {
                    question: "¿Permite administrar hitos?",

                    answer:
                        "Sí. Los milestones permiten establecer puntos importantes dentro del ciclo de vida del proyecto.",
                },

                {
                    question: "¿Incluye reportes?",

                    answer:
                        "Sí. Incluye un dashboard orientado al seguimiento de progreso, métricas y actividad del proyecto.",
                },
            ],
        },

        en: {
            name: "Project Workspace",

            title: "Comprehensive Project Workspace",

            level: "🔴 Advanced",

            category: "Project Management Systems",

            description:
                "Comprehensive workspace for managing projects through timelines, milestones, activity history, team collaboration, and reporting dashboards.",

            time: "8-12 weeks",

            imageAlt:
                "Project workspace with timeline, milestones, activity history, and reporting dashboard",

            target:
                "Businesses, project teams, and organizations that need to centralize project planning, execution, tracking, collaboration, and analysis.",

            support:
                "60 days post-delivery support",

            useCases: [
                "Comprehensive project management",
                "Project planning",
                "Project timelines",
                "Milestone management",
                "Collaborative teams",
                "Activity tracking",
                "Project reporting",
                "Progress analysis",
                "Business management",
            ],

            includes: [
                "Project workspace",
                "Project management",
                "Visual timeline",
                "Project milestones",
                "Task management",
                "Activity history",
                "Reporting dashboard",
                "Project metrics",
                "Progress tracking",
                "Team collaboration",
                "Real-time updates",
                "WebSockets",
                "Prisma database",
                "Responsive design",
                "Next.js",
                "TypeScript",
            ],

            notIncludes: [
                "Complete enterprise ERP",
                "Advanced enterprise financial management",
                "AI-powered automatic planning",
                "Native mobile applications",
                "Complete enterprise business intelligence",
                "Unlimited corporate integrations",
            ],

            features: [
                "Timeline Visualization",
                "Project Milestones",
                "Activity History",
                "Reporting Dashboard",
                "Project Analytics",
                "Task Management",
                "Team Collaboration",
                "Progress Tracking",
                "Real-time Updates",
                "WebSockets",
                "Project Management",
            ],

            deliverables: [
                "Published project workspace",
                "Visual timeline",
                "Milestone system",
                "Task management",
                "Activity history",
                "Reporting dashboard",
                "Project metrics",
                "Real-time collaboration",
                "Database",
                "Source code",
                "Technical documentation",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Centralized Planning",

                    description:
                        "Organizes tasks, milestones, responsibilities, and dates from a single workspace.",
                },

                {
                    title: "Timeline Visualization",

                    description:
                        "Timelines provide a clear view of project planning and the evolution of different project stages.",
                },

                {
                    title: "Activity Traceability",

                    description:
                        "Activity history preserves information about actions performed within the workspace.",
                },

                {
                    title: "Project Analysis",

                    description:
                        "The reporting dashboard helps monitor progress and interpret project metrics.",
                },
            ],

            process: [
                {
                    title: "Project Architecture",

                    description:
                        "We define projects, tasks, milestones, users, responsibilities, dates, and collaboration structures.",
                },

                {
                    title: "Timeline and Milestones",

                    description:
                        "We build the timeline visualization and structures required to manage project stages and milestones.",
                },

                {
                    title: "Activity and Collaboration",

                    description:
                        "We implement activity history and collaboration mechanisms for project members.",
                },

                {
                    title: "Reporting Dashboard",

                    description:
                        "We develop metrics and reports to visualize project progress and performance.",
                },

                {
                    title: "Real-time and Testing",

                    description:
                        "We integrate WebSockets and validate tasks, milestones, timelines, activity, reports, and permissions.",
                },
            ],

            faq: [
                {
                    question: "What is a Project Workspace?",

                    answer:
                        "It is a centralized workspace for planning, executing, monitoring, and analyzing a project and its activities.",
                },

                {
                    question: "Does it include a timeline?",

                    answer:
                        "Yes. The workspace includes a timeline visualization for representing project stages, tasks, and milestones.",
                },

                {
                    question: "Can it manage milestones?",

                    answer:
                        "Yes. Milestones represent important points throughout the project lifecycle.",
                },

                {
                    question: "Does it include reporting?",

                    answer:
                        "Yes. It includes a dashboard focused on project progress, metrics, and activity.",
                },
            ],
        },

        pt: {
            name: "Workspace de Projeto",

            title: "Espaço de Trabalho Integral para Projetos",

            level: "🔴 Avançado",

            category: "Sistemas de Gestão de Projetos",

            description:
                "Workspace completo para administrar projetos por meio de linhas do tempo, marcos, histórico de atividades, colaboração de equipes e dashboards de relatórios.",

            time: "8-12 semanas",

            imageAlt:
                "Workspace de projeto com timeline, marcos, histórico de atividades e dashboard de relatórios",

            target:
                "Empresas, equipes de projetos e organizações que precisam centralizar planejamento, execução, acompanhamento, colaboração e análise de projetos.",

            support:
                "60 dias de suporte pós-entrega",

            useCases: [
                "Gestão integral de projetos",
                "Planejamento de projetos",
                "Linhas do tempo",
                "Gestão de marcos",
                "Equipes colaborativas",
                "Acompanhamento de atividades",
                "Relatórios de projetos",
                "Análise de progresso",
                "Gestão empresarial",
            ],

            includes: [
                "Workspace de projetos",
                "Gestão de projetos",
                "Timeline visual",
                "Marcos do projeto",
                "Gestão de tarefas",
                "Histórico de atividades",
                "Dashboard de relatórios",
                "Métricas do projeto",
                "Acompanhamento de progresso",
                "Colaboração de equipes",
                "Atualizações em tempo real",
                "WebSockets",
                "Banco de dados Prisma",
                "Design responsivo",
                "Next.js",
                "TypeScript",
            ],

            notIncludes: [
                "ERP empresarial completo",
                "Gestão financeira empresarial avançada",
                "Planejamento automático com IA",
                "Aplicativos móveis nativos",
                "Business Intelligence empresarial completo",
                "Integrações corporativas ilimitadas",
            ],

            features: [
                "Timeline Visualization",
                "Project Milestones",
                "Activity History",
                "Reporting Dashboard",
                "Project Analytics",
                "Task Management",
                "Team Collaboration",
                "Progress Tracking",
                "Real-time Updates",
                "WebSockets",
                "Project Management",
            ],

            deliverables: [
                "Workspace de projeto publicado",
                "Timeline visual",
                "Sistema de marcos",
                "Gestão de tarefas",
                "Histórico de atividades",
                "Dashboard de relatórios",
                "Métricas do projeto",
                "Colaboração em tempo real",
                "Banco de dados",
                "Código-fonte",
                "Documentação técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Planejamento centralizado",

                    description:
                        "Permite organizar tarefas, marcos, responsáveis e datas a partir de um único espaço de trabalho.",
                },

                {
                    title: "Visualização temporal",

                    description:
                        "As linhas do tempo permitem compreender o planejamento e a evolução das diferentes etapas do projeto.",
                },

                {
                    title: "Rastreabilidade de atividades",

                    description:
                        "O histórico conserva informações sobre as atividades realizadas dentro do workspace.",
                },

                {
                    title: "Análise do projeto",

                    description:
                        "O dashboard de relatórios facilita o acompanhamento do progresso e a interpretação das métricas do projeto.",
                },
            ],

            process: [
                {
                    title: "Arquitetura do projeto",

                    description:
                        "Definimos projetos, tarefas, marcos, usuários, responsáveis, datas e estruturas de colaboração.",
                },

                {
                    title: "Timeline e milestones",

                    description:
                        "Construímos a visualização temporal e as estruturas necessárias para administrar marcos e etapas.",
                },

                {
                    title: "Atividade e colaboração",

                    description:
                        "Implementamos histórico de atividades e mecanismos de colaboração entre os membros do projeto.",
                },

                {
                    title: "Dashboard de relatórios",

                    description:
                        "Desenvolvemos métricas e relatórios para visualizar o progresso e desempenho do projeto.",
                },

                {
                    title: "Tempo real e testes",

                    description:
                        "Integramos WebSockets e validamos tarefas, marcos, timelines, atividades, relatórios e permissões.",
                },
            ],

            faq: [
                {
                    question: "O que é um Project Workspace?",

                    answer:
                        "É um espaço centralizado para planejar, executar, acompanhar e analisar um projeto e suas atividades.",
                },

                {
                    question: "Inclui uma linha do tempo?",

                    answer:
                        "Sim. O workspace inclui uma visualização temporal para representar etapas, tarefas e marcos do projeto.",
                },

                {
                    question: "Permite administrar marcos?",

                    answer:
                        "Sim. Os milestones permitem estabelecer pontos importantes dentro do ciclo de vida do projeto.",
                },

                {
                    question: "Inclui relatórios?",

                    answer:
                        "Sim. Inclui um dashboard orientado ao acompanhamento de progresso, métricas e atividades do projeto.",
                },
            ],
        },
    },
};