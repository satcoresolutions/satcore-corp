import type { ServicePlan } from "@/types/plan.types";

export const kanbanWorkspace: ServicePlan = {
    core: {
        id: "PM-002",

        slug: "kanban-workspace",

        complexity: "⭐⭐⭐⭐ (4/5)",

        price: "$1,750 - $2,750 USD",

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
            "Kanban Boards",
            "Drag and Drop",
            "Workflow Automation",
            "Team Collaboration",
            "Real-time Updates",
            "Task Management",
            "Board Management",
            "Column Management",
            "Type-safe Components",
        ],

        integrations: [
            "WebSockets",
            "Database Services",
            "Authentication Services",
            "Notification Services",
        ],

        heroImage:
            "/images/services/software/hero/hero-kanban-workspace.png",

        image:
            "/images/services/software/hero/hero-kanban-workspace.png",
    },

    translations: {
        es: {
            name: "Espacio de Trabajo Kanban",

            title: "Workspace Kanban Colaborativo",

            level: "🟠 Avanzado",

            category: "Sistemas de Gestión de Proyectos",

            description:
                "Workspace Kanban para administrar flujos de trabajo mediante tableros visuales, tarjetas de tareas, operaciones drag-and-drop, automatizaciones y colaboración en tiempo real.",

            time: "6-8 semanas",

            imageAlt:
                "Workspace Kanban con tableros drag-and-drop, flujos de trabajo y colaboración",

            target:
                "Equipos de desarrollo, empresas y organizaciones que necesitan visualizar y administrar procesos mediante flujos de trabajo Kanban colaborativos.",

            support:
                "45 días soporte post-entrega",

            useCases: [
                "Tableros Kanban",
                "Gestión de proyectos",
                "Equipos de desarrollo",
                "Flujos de trabajo",
                "Gestión de tareas",
                "Colaboración empresarial",
                "Procesos operativos",
                "Seguimiento visual",
            ],

            includes: [
                "Workspace Kanban",
                "Tableros visuales",
                "Columnas configurables",
                "Tarjetas de tareas",
                "Drag-and-drop",
                "Estados de trabajo",
                "Automatización de workflows",
                "Colaboración de equipos",
                "Actualizaciones en tiempo real",
                "WebSockets",
                "Base de datos Prisma",
                "Filtros",
                "Diseño responsive",
                "Next.js",
                "TypeScript",
            ],

            notIncludes: [
                "Automatizaciones empresariales ilimitadas",
                "Gestión financiera avanzada",
                "Planificación avanzada de recursos",
                "Aplicaciones móviles nativas",
                "IA para planificación automática",
                "Integraciones corporativas ilimitadas",
            ],

            features: [
                "Drag-and-drop Boards",
                "Workflow Automation",
                "Team Collaboration",
                "Kanban Columns",
                "Task Cards",
                "Real-time Updates",
                "Board Management",
                "Task Management",
                "WebSockets",
                "Responsive Design",
            ],

            deliverables: [
                "Workspace Kanban publicado",
                "Tableros configurables",
                "Columnas de workflow",
                "Tarjetas de tareas",
                "Drag-and-drop",
                "Automatizaciones básicas",
                "Colaboración en tiempo real",
                "Base de datos",
                "Código fuente",
                "Documentación técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Flujo de trabajo visual",

                    description:
                        "Permite representar procesos mediante columnas y tarjetas para facilitar la comprensión del estado de cada actividad.",
                },

                {
                    title: "Gestión flexible",

                    description:
                        "Los usuarios pueden mover tareas entre diferentes etapas mediante operaciones drag-and-drop.",
                },

                {
                    title: "Colaboración de equipos",

                    description:
                        "Los equipos pueden trabajar sobre los mismos tableros y mantener actualizada la información del proyecto.",
                },

                {
                    title: "Actualizaciones en tiempo real",

                    description:
                        "WebSockets permiten sincronizar cambios del tablero entre los usuarios conectados.",
                },
            ],

            process: [
                {
                    title: "Diseño del workflow",

                    description:
                        "Definimos columnas, estados, reglas de movimiento, tarjetas y estructuras de colaboración.",
                },

                {
                    title: "Construcción del tablero",

                    description:
                        "Desarrollamos los tableros Kanban y sus componentes de interacción.",
                },

                {
                    title: "Drag-and-drop",

                    description:
                        "Implementamos operaciones para mover tarjetas entre las diferentes etapas del flujo.",
                },

                {
                    title: "Colaboración en tiempo real",

                    description:
                        "Integramos WebSockets para sincronizar las modificaciones entre usuarios.",
                },

                {
                    title: "Pruebas y lanzamiento",

                    description:
                        "Validamos movimientos, estados, permisos, colaboración y persistencia de datos.",
                },
            ],

            faq: [
                {
                    question: "¿Qué es un Kanban Workspace?",

                    answer:
                        "Es un espacio de trabajo visual donde las tareas se organizan mediante columnas que representan diferentes etapas de un proceso.",
                },

                {
                    question: "¿Las tareas se pueden mover entre columnas?",

                    answer:
                        "Sí. El sistema utiliza interacción drag-and-drop para mover tarjetas entre diferentes etapas.",
                },

                {
                    question: "¿Puede automatizar workflows?",

                    answer:
                        "Sí. Puede incorporar reglas de automatización para ejecutar acciones según determinados cambios de estado.",
                },

                {
                    question: "¿Permite colaboración en tiempo real?",

                    answer:
                        "Sí. WebSockets permiten mantener los tableros sincronizados entre los usuarios.",
                },
            ],
        },

        en: {
            name: "Kanban Workspace",

            title: "Collaborative Kanban Workspace",

            level: "🟠 Advanced",

            category: "Project Management Systems",

            description:
                "Kanban workspace for managing workflows through visual boards, task cards, drag-and-drop operations, workflow automation, and real-time collaboration.",

            time: "6-8 weeks",

            imageAlt:
                "Kanban workspace with drag-and-drop boards, workflows, and collaboration",

            target:
                "Development teams, businesses, and organizations that need to visualize and manage processes through collaborative Kanban workflows.",

            support:
                "45 days post-delivery support",

            useCases: [
                "Kanban boards",
                "Project management",
                "Development teams",
                "Workflows",
                "Task management",
                "Business collaboration",
                "Operational processes",
                "Visual tracking",
            ],

            includes: [
                "Kanban workspace",
                "Visual boards",
                "Configurable columns",
                "Task cards",
                "Drag-and-drop",
                "Workflow statuses",
                "Workflow automation",
                "Team collaboration",
                "Real-time updates",
                "WebSockets",
                "Prisma database",
                "Filters",
                "Responsive design",
                "Next.js",
                "TypeScript",
            ],

            notIncludes: [
                "Unlimited enterprise automation",
                "Advanced financial management",
                "Advanced resource planning",
                "Native mobile applications",
                "AI-powered automatic planning",
                "Unlimited corporate integrations",
            ],

            features: [
                "Drag-and-drop Boards",
                "Workflow Automation",
                "Team Collaboration",
                "Kanban Columns",
                "Task Cards",
                "Real-time Updates",
                "Board Management",
                "Task Management",
                "WebSockets",
                "Responsive Design",
            ],

            deliverables: [
                "Published Kanban workspace",
                "Configurable boards",
                "Workflow columns",
                "Task cards",
                "Drag-and-drop",
                "Basic automations",
                "Real-time collaboration",
                "Database",
                "Source code",
                "Technical documentation",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Visual Workflow",

                    description:
                        "Represents processes through columns and cards, making the status of each activity easier to understand.",
                },

                {
                    title: "Flexible Management",

                    description:
                        "Users can move tasks between different stages through drag-and-drop interactions.",
                },

                {
                    title: "Team Collaboration",

                    description:
                        "Teams can work on shared boards while keeping project information synchronized.",
                },

                {
                    title: "Real-time Updates",

                    description:
                        "WebSockets synchronize board changes between connected users.",
                },
            ],

            process: [
                {
                    title: "Workflow Design",

                    description:
                        "We define columns, statuses, movement rules, cards, and collaboration structures.",
                },

                {
                    title: "Board Development",

                    description:
                        "We develop Kanban boards and their interactive components.",
                },

                {
                    title: "Drag-and-drop",

                    description:
                        "We implement interactions for moving cards between workflow stages.",
                },

                {
                    title: "Real-time Collaboration",

                    description:
                        "We integrate WebSockets to synchronize modifications between users.",
                },

                {
                    title: "Testing and Launch",

                    description:
                        "We validate movements, statuses, permissions, collaboration, and data persistence.",
                },
            ],

            faq: [
                {
                    question: "What is a Kanban Workspace?",

                    answer:
                        "It is a visual workspace where tasks are organized through columns representing different stages of a process.",
                },

                {
                    question: "Can tasks be moved between columns?",

                    answer:
                        "Yes. The system uses drag-and-drop interactions to move cards between stages.",
                },

                {
                    question: "Can it automate workflows?",

                    answer:
                        "Yes. Workflow automation rules can execute actions based on specific state changes.",
                },

                {
                    question: "Does it support real-time collaboration?",

                    answer:
                        "Yes. WebSockets keep boards synchronized between users.",
                },
            ],
        },

        pt: {
            name: "Workspace Kanban",

            title: "Workspace Kanban Colaborativo",

            level: "🟠 Avançado",

            category: "Sistemas de Gestão de Projetos",

            description:
                "Workspace Kanban para administrar fluxos de trabalho por meio de quadros visuais, cartões de tarefas, operações drag-and-drop, automações e colaboração em tempo real.",

            time: "6-8 semanas",

            imageAlt:
                "Workspace Kanban com quadros drag-and-drop, fluxos de trabalho e colaboração",

            target:
                "Equipes de desenvolvimento, empresas e organizações que precisam visualizar e administrar processos por meio de fluxos de trabalho Kanban colaborativos.",

            support:
                "45 dias de suporte pós-entrega",

            useCases: [
                "Quadros Kanban",
                "Gestão de projetos",
                "Equipes de desenvolvimento",
                "Fluxos de trabalho",
                "Gestão de tarefas",
                "Colaboração empresarial",
                "Processos operacionais",
                "Acompanhamento visual",
            ],

            includes: [
                "Workspace Kanban",
                "Quadros visuais",
                "Colunas configuráveis",
                "Cartões de tarefas",
                "Drag-and-drop",
                "Estados de trabalho",
                "Automação de workflows",
                "Colaboração de equipes",
                "Atualizações em tempo real",
                "WebSockets",
                "Banco de dados Prisma",
                "Filtros",
                "Design responsivo",
                "Next.js",
                "TypeScript",
            ],

            notIncludes: [
                "Automações empresariais ilimitadas",
                "Gestão financeira avançada",
                "Planejamento avançado de recursos",
                "Aplicativos móveis nativos",
                "IA para planejamento automático",
                "Integrações corporativas ilimitadas",
            ],

            features: [
                "Drag-and-drop Boards",
                "Workflow Automation",
                "Team Collaboration",
                "Kanban Columns",
                "Task Cards",
                "Real-time Updates",
                "Board Management",
                "Task Management",
                "WebSockets",
                "Responsive Design",
            ],

            deliverables: [
                "Workspace Kanban publicado",
                "Quadros configuráveis",
                "Colunas de workflow",
                "Cartões de tarefas",
                "Drag-and-drop",
                "Automações básicas",
                "Colaboração em tempo real",
                "Banco de dados",
                "Código-fonte",
                "Documentação técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Fluxo de trabalho visual",

                    description:
                        "Permite representar processos por meio de colunas e cartões para facilitar a compreensão do estado de cada atividade.",
                },

                {
                    title: "Gestão flexível",

                    description:
                        "Os usuários podem mover tarefas entre diferentes etapas por meio de operações drag-and-drop.",
                },

                {
                    title: "Colaboração de equipes",

                    description:
                        "As equipes podem trabalhar nos mesmos quadros e manter as informações do projeto atualizadas.",
                },

                {
                    title: "Atualizações em tempo real",

                    description:
                        "WebSockets permitem sincronizar alterações do quadro entre os usuários conectados.",
                },
            ],

            process: [
                {
                    title: "Definição do workflow",

                    description:
                        "Definimos colunas, estados, regras de movimentação, cartões e estruturas de colaboração.",
                },

                {
                    title: "Construção do quadro",

                    description:
                        "Desenvolvemos os quadros Kanban e seus componentes de interação.",
                },

                {
                    title: "Drag-and-drop",

                    description:
                        "Implementamos operações para mover cartões entre as diferentes etapas do fluxo.",
                },

                {
                    title: "Colaboração em tempo real",

                    description:
                        "Integramos WebSockets para sincronizar modificações entre os usuários.",
                },

                {
                    title: "Testes e lançamento",

                    description:
                        "Validamos movimentos, estados, permissões, colaboração e persistência dos dados.",
                },
            ],

            faq: [
                {
                    question: "O que é um Kanban Workspace?",

                    answer:
                        "É um espaço de trabalho visual onde as tarefas são organizadas por meio de colunas que representam diferentes etapas de um processo.",
                },

                {
                    question: "As tarefas podem ser movidas entre colunas?",

                    answer:
                        "Sim. O sistema utiliza interação drag-and-drop para mover cartões entre diferentes etapas.",
                },

                {
                    question: "Pode automatizar workflows?",

                    answer:
                        "Sim. Pode incorporar regras de automação para executar ações de acordo com determinadas mudanças de estado.",
                },

                {
                    question: "Permite colaboração em tempo real?",

                    answer:
                        "Sim. WebSockets permitem manter os quadros sincronizados entre os usuários.",
                },
            ],
        },
    },
};