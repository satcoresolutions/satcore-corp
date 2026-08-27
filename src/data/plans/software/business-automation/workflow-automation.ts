import type { ServicePlan } from "@/types/plan.types";

export const workflowAutomation: ServicePlan = {
    core: {
        id: "AUTO-001",

        slug: "workflow-automation",

        complexity: "⭐⭐⭐⭐ (4/5)",

        price: "$1,000 - $2,000 USD",

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
            "Workflow Engine",
            "Background Jobs",
            "Webhooks",
            "Event-driven Architecture",
            "Trigger Management",
            "Conditional Logic",
            "Task Queues",
            "Workflow State Management",
        ],

        integrations: [
            "REST APIs",
            "Webhooks",
            "Email Services",
            "External Business Systems",
            "Background Processing Services",
        ],

        heroImage:
            "/images/services/software/hero/hero-workflow-automation.png",

        image:
            "/images/services/software/hero/hero-workflow-automation.png",
    },

    translations: {
        es: {
            name: "Workflow Automation",

            title: "Automatización de Flujos de Trabajo",

            level: "🟠 Avanzado",

            category: "Automatización Empresarial",

            description:
                "Sistema de automatización empresarial para ejecutar flujos de trabajo de múltiples etapas mediante eventos, disparadores, reglas y procesos automatizados.",

            time: "5-8 semanas",

            imageAlt:
                "Sistema de automatización de flujos de trabajo empresariales",

            target:
                "Empresas y equipos que necesitan automatizar procesos repetitivos, coordinar múltiples acciones y ejecutar operaciones basadas en eventos o condiciones.",

            support:
                "45 días soporte post-entrega",

            useCases: [
                "Automatización empresarial",
                "Flujos administrativos",
                "Procesos comerciales",
                "Aprobaciones internas",
                "Procesos basados en eventos",
                "Automatización de tareas",
                "Integración entre sistemas",
                "Procesos multietapa",
            ],

            includes: [
                "Motor de workflows",
                "Flujos de múltiples etapas",
                "Sistema de triggers",
                "Reglas condicionales",
                "Acciones automatizadas",
                "Gestión de estados",
                "Procesamiento en segundo plano",
                "Integración mediante webhooks",
                "Historial de ejecuciones",
                "Manejo de errores",
                "Reintentos de procesos",
                "Arquitectura orientada a eventos",
            ],

            notIncludes: [
                "Plataforma BPM empresarial completa",
                "Automatización robótica de procesos (RPA)",
                "Infraestructura cloud empresarial completa",
                "Integraciones propietarias no documentadas",
                "Sistema de inteligencia artificial autónoma",
            ],

            features: [
                "Multi-step Workflows",
                "Trigger-based Automation",
                "Conditional Logic",
                "Background Jobs",
                "Webhook Processing",
                "Event-driven Architecture",
                "Workflow State Management",
                "Automated Actions",
                "Execution History",
                "Error Handling",
                "Retry Processing",
            ],

            deliverables: [
                "Motor de automatización",
                "Flujos empresariales",
                "Sistema de triggers",
                "Reglas condicionales",
                "Acciones automatizadas",
                "Procesamiento en segundo plano",
                "Integraciones mediante webhooks",
                "Historial de ejecuciones",
                "Código fuente",
                "Documentación técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Procesos automatizados",

                    description:
                        "Permite ejecutar procesos empresariales de forma automática reduciendo tareas manuales y repetitivas.",
                },

                {
                    title: "Flujos multietapa",

                    description:
                        "Los workflows permiten encadenar diferentes acciones y decisiones dentro de un mismo proceso empresarial.",
                },

                {
                    title: "Arquitectura orientada a eventos",

                    description:
                        "Los procesos pueden ejecutarse como respuesta a eventos, webhooks o condiciones determinadas.",
                },

                {
                    title: "Mayor consistencia operativa",

                    description:
                        "La automatización permite ejecutar procesos siguiendo reglas previamente definidas y mantener una lógica uniforme.",
                },
            ],

            process: [
                {
                    title: "Mapeo del proceso",

                    description:
                        "Identificamos las etapas, eventos, condiciones, acciones y dependencias del proceso empresarial.",
                },

                {
                    title: "Diseño del workflow",

                    description:
                        "Definimos triggers, reglas condicionales, estados y acciones que forman parte del flujo.",
                },

                {
                    title: "Implementación",

                    description:
                        "Construimos el motor de automatización y conectamos los diferentes servicios y procesos.",
                },

                {
                    title: "Pruebas y monitoreo",

                    description:
                        "Validamos ejecuciones, errores, reintentos, estados y comportamiento de los workflows.",
                },
            ],

            faq: [
                {
                    question: "¿Qué es Workflow Automation?",

                    answer:
                        "Es un sistema que permite automatizar procesos empresariales mediante una secuencia de acciones, reglas y eventos.",
                },

                {
                    question: "¿Puede ejecutar workflows de múltiples etapas?",

                    answer:
                        "Sí. El sistema permite encadenar diferentes pasos y acciones dentro de un mismo flujo automatizado.",
                },

                {
                    question: "¿Puede trabajar con webhooks?",

                    answer:
                        "Sí. Los webhooks pueden utilizarse como mecanismos para activar procesos automáticamente cuando ocurre un evento externo.",
                },

                {
                    question: "¿Incluye procesamiento en segundo plano?",

                    answer:
                        "Sí. Los procesos pueden ejecutarse mediante trabajos en segundo plano para evitar bloquear las operaciones principales de la aplicación.",
                },
            ],
        },

        en: {
            name: "Workflow Automation",

            title: "Workflow Automation",

            level: "🟠 Advanced",

            category: "Business Automation",

            description:
                "Business automation system for executing multi-step workflows through events, triggers, rules, and automated processes.",

            time: "5-8 weeks",

            imageAlt:
                "Business workflow automation system",

            target:
                "Businesses and teams that need to automate repetitive processes, coordinate multiple actions, and execute operations based on events or conditions.",

            support:
                "45 days post-delivery support",

            useCases: [
                "Business automation",
                "Administrative workflows",
                "Sales processes",
                "Internal approvals",
                "Event-driven processes",
                "Task automation",
                "System integrations",
                "Multi-step processes",
            ],

            includes: [
                "Workflow engine",
                "Multi-step workflows",
                "Trigger system",
                "Conditional rules",
                "Automated actions",
                "State management",
                "Background processing",
                "Webhook integration",
                "Execution history",
                "Error handling",
                "Process retries",
                "Event-driven architecture",
            ],

            notIncludes: [
                "Complete enterprise BPM platform",
                "Robotic Process Automation (RPA)",
                "Complete enterprise cloud infrastructure",
                "Undocumented proprietary integrations",
                "Autonomous artificial intelligence system",
            ],

            features: [
                "Multi-step Workflows",
                "Trigger-based Automation",
                "Conditional Logic",
                "Background Jobs",
                "Webhook Processing",
                "Event-driven Architecture",
                "Workflow State Management",
                "Automated Actions",
                "Execution History",
                "Error Handling",
                "Retry Processing",
            ],

            deliverables: [
                "Automation engine",
                "Business workflows",
                "Trigger system",
                "Conditional rules",
                "Automated actions",
                "Background processing",
                "Webhook integrations",
                "Execution history",
                "Source code",
                "Technical documentation",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Automated Processes",

                    description:
                        "Automates business processes while reducing manual and repetitive tasks.",
                },

                {
                    title: "Multi-step Workflows",

                    description:
                        "Workflows can chain different actions and decisions within a single business process.",
                },

                {
                    title: "Event-driven Architecture",

                    description:
                        "Processes can execute in response to events, webhooks, or predefined conditions.",
                },

                {
                    title: "Operational Consistency",

                    description:
                        "Automation ensures processes follow predefined rules and maintain consistent execution logic.",
                },
            ],

            process: [
                {
                    title: "Process Mapping",

                    description:
                        "We identify process stages, events, conditions, actions, and dependencies.",
                },

                {
                    title: "Workflow Design",

                    description:
                        "We define triggers, conditional rules, states, and actions within the workflow.",
                },

                {
                    title: "Implementation",

                    description:
                        "We build the automation engine and connect the required services and processes.",
                },

                {
                    title: "Testing and Monitoring",

                    description:
                        "We validate executions, errors, retries, states, and workflow behavior.",
                },
            ],

            faq: [
                {
                    question: "What is Workflow Automation?",

                    answer:
                        "It is a system that automates business processes through sequences of actions, rules, and events.",
                },

                {
                    question: "Can it execute multi-step workflows?",

                    answer:
                        "Yes. The system can chain multiple steps and actions within a single automated workflow.",
                },

                {
                    question: "Can it work with webhooks?",

                    answer:
                        "Yes. Webhooks can be used to trigger processes automatically when external events occur.",
                },

                {
                    question: "Does it include background processing?",

                    answer:
                        "Yes. Processes can run through background jobs without blocking the application's main operations.",
                },
            ],
        },

        pt: {
            name: "Workflow Automation",

            title: "Automação de Fluxos de Trabalho",

            level: "🟠 Avançado",

            category: "Automação Empresarial",

            description:
                "Sistema de automação empresarial para executar fluxos de trabalho de múltiplas etapas por meio de eventos, gatilhos, regras e processos automatizados.",

            time: "5-8 semanas",

            imageAlt:
                "Sistema de automação de fluxos de trabalho empresariais",

            target:
                "Empresas e equipes que precisam automatizar processos repetitivos, coordenar múltiplas ações e executar operações baseadas em eventos ou condições.",

            support:
                "45 dias de suporte pós-entrega",

            useCases: [
                "Automação empresarial",
                "Fluxos administrativos",
                "Processos comerciais",
                "Aprovações internas",
                "Processos baseados em eventos",
                "Automação de tarefas",
                "Integração entre sistemas",
                "Processos de múltiplas etapas",
            ],

            includes: [
                "Motor de workflows",
                "Fluxos de múltiplas etapas",
                "Sistema de triggers",
                "Regras condicionais",
                "Ações automatizadas",
                "Gerenciamento de estados",
                "Processamento em segundo plano",
                "Integração por webhooks",
                "Histórico de execuções",
                "Tratamento de erros",
                "Retentativas de processos",
                "Arquitetura orientada a eventos",
            ],

            notIncludes: [
                "Plataforma BPM empresarial completa",
                "Automação robótica de processos (RPA)",
                "Infraestrutura cloud empresarial completa",
                "Integrações proprietárias não documentadas",
                "Sistema autônomo de inteligência artificial",
            ],

            features: [
                "Multi-step Workflows",
                "Trigger-based Automation",
                "Conditional Logic",
                "Background Jobs",
                "Webhook Processing",
                "Event-driven Architecture",
                "Workflow State Management",
                "Automated Actions",
                "Execution History",
                "Error Handling",
                "Retry Processing",
            ],

            deliverables: [
                "Motor de automação",
                "Fluxos empresariais",
                "Sistema de triggers",
                "Regras condicionais",
                "Ações automatizadas",
                "Processamento em segundo plano",
                "Integrações por webhooks",
                "Histórico de execuções",
                "Código-fonte",
                "Documentação técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Processos automatizados",

                    description:
                        "Permite executar processos empresariais automaticamente, reduzindo tarefas manuais e repetitivas.",
                },

                {
                    title: "Fluxos de múltiplas etapas",

                    description:
                        "Os workflows permitem encadear diferentes ações e decisões dentro de um mesmo processo empresarial.",
                },

                {
                    title: "Arquitetura orientada a eventos",

                    description:
                        "Os processos podem ser executados em resposta a eventos, webhooks ou condições determinadas.",
                },

                {
                    title: "Maior consistência operacional",

                    description:
                        "A automação permite executar processos seguindo regras previamente definidas e manter uma lógica uniforme.",
                },
            ],

            process: [
                {
                    title: "Mapeamento do processo",

                    description:
                        "Identificamos etapas, eventos, condições, ações e dependências do processo empresarial.",
                },

                {
                    title: "Design do workflow",

                    description:
                        "Definimos triggers, regras condicionais, estados e ações que fazem parte do fluxo.",
                },

                {
                    title: "Implementação",

                    description:
                        "Construímos o motor de automação e conectamos os serviços e processos necessários.",
                },

                {
                    title: "Testes e monitoramento",

                    description:
                        "Validamos execuções, erros, retentativas, estados e comportamento dos workflows.",
                },
            ],

            faq: [
                {
                    question: "O que é Workflow Automation?",

                    answer:
                        "É um sistema que permite automatizar processos empresariais por meio de uma sequência de ações, regras e eventos.",
                },

                {
                    question: "Pode executar workflows de múltiplas etapas?",

                    answer:
                        "Sim. O sistema permite encadear diferentes etapas e ações dentro de um mesmo fluxo automatizado.",
                },

                {
                    question: "Pode trabalhar com webhooks?",

                    answer:
                        "Sim. Webhooks podem ser utilizados para ativar processos automaticamente quando ocorre um evento externo.",
                },

                {
                    question: "Inclui processamento em segundo plano?",

                    answer:
                        "Sim. Os processos podem ser executados por meio de trabalhos em segundo plano sem bloquear as operações principais da aplicação.",
                },
            ],
        },
    },
};