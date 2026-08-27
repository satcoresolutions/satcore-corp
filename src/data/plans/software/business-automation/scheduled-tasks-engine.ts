import type { ServicePlan } from "@/types/plan.types";

export const scheduledTasksEngine: ServicePlan = {
    core: {
        id: "AUTO-003",

        slug: "scheduled-tasks-engine",

        complexity: "⭐⭐⭐⭐ (4/5)",

        price: "$1,250 - $2,250 USD",

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
            "Cron Jobs",
            "Background Processing",
            "Task Queues",
            "Recurring Jobs",
            "Job Scheduling",
            "Retry Processing",
            "Execution Tracking",
            "Event-driven Architecture",
        ],

        integrations: [
            "REST APIs",
            "Webhooks",
            "Database Systems",
            "External APIs",
            "Background Processing Services",
        ],

        heroImage:
            "/images/services/software/hero/hero-scheduled-tasks-engine.png",

        image:
            "/images/services/software/hero/hero-scheduled-tasks-engine.png",
    },

    translations: {
        es: {
            name: "Scheduled Tasks Engine",

            title: "Motor de Tareas Programadas",

            level: "🟠 Avanzado",

            category: "Automatización Empresarial",

            description:
                "Motor para ejecutar tareas programadas y procesos recurrentes mediante cron jobs, colas de procesamiento y trabajos en segundo plano.",

            time: "5-8 semanas",

            imageAlt:
                "Motor de tareas programadas con cron jobs y procesamiento en segundo plano",

            target:
                "Empresas y plataformas digitales que necesitan ejecutar procesos automáticamente en horarios definidos o de forma recurrente.",

            support:
                "45 días soporte post-entrega",

            useCases: [
                "Tareas programadas",
                "Procesos recurrentes",
                "Limpieza automática de datos",
                "Generación periódica de reportes",
                "Sincronización de información",
                "Procesamiento en segundo plano",
                "Mantenimiento automatizado",
                "Procesos nocturnos",
            ],

            includes: [
                "Motor de tareas programadas",
                "Cron jobs",
                "Tareas recurrentes",
                "Colas de procesamiento",
                "Background jobs",
                "Programación de ejecuciones",
                "Reintentos automáticos",
                "Seguimiento de ejecuciones",
                "Estados de tareas",
                "Manejo de errores",
                "Logs de procesamiento",
                "Ejecuciones periódicas",
            ],

            notIncludes: [
                "Infraestructura cloud empresarial completa",
                "Orquestador distribuido de Big Data",
                "Sistema Kubernetes administrado",
                "Procesamiento científico de alto rendimiento",
                "Infraestructura de servidores dedicada",
            ],

            features: [
                "Cron Jobs",
                "Recurring Tasks",
                "Background Processing",
                "Task Queues",
                "Job Scheduling",
                "Retry Processing",
                "Execution Tracking",
                "Task States",
                "Error Handling",
                "Processing Logs",
                "Automated Jobs",
            ],

            deliverables: [
                "Motor de tareas programadas",
                "Sistema de cron jobs",
                "Colas de procesamiento",
                "Trabajos recurrentes",
                "Procesamiento en segundo plano",
                "Sistema de reintentos",
                "Seguimiento de ejecuciones",
                "Logs de procesamiento",
                "Código fuente",
                "Documentación técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Procesos recurrentes",

                    description:
                        "Permite ejecutar automáticamente tareas que deben repetirse en horarios o intervalos determinados.",
                },

                {
                    title: "Procesamiento en segundo plano",

                    description:
                        "Las tareas pesadas pueden ejecutarse fuera del flujo principal de la aplicación.",
                },

                {
                    title: "Ejecuciones programadas",

                    description:
                        "Permite definir cuándo y con qué frecuencia deben ejecutarse diferentes procesos.",
                },

                {
                    title: "Mayor control operativo",

                    description:
                        "El seguimiento de estados y ejecuciones facilita supervisar los procesos automatizados.",
                },
            ],

            process: [
                {
                    title: "Identificación de tareas",

                    description:
                        "Definimos qué procesos deben ejecutarse automáticamente y cuáles son sus dependencias.",
                },

                {
                    title: "Configuración de horarios",

                    description:
                        "Establecemos frecuencias, intervalos, cron jobs y condiciones de ejecución.",
                },

                {
                    title: "Implementación de colas",

                    description:
                        "Configuramos trabajos en segundo plano y colas para procesar las tareas de forma controlada.",
                },

                {
                    title: "Monitoreo y pruebas",

                    description:
                        "Validamos ejecuciones, errores, reintentos, estados y comportamiento de las tareas programadas.",
                },
            ],

            faq: [
                {
                    question: "¿Qué es un Scheduled Tasks Engine?",

                    answer:
                        "Es un sistema que permite programar y ejecutar automáticamente tareas y procesos recurrentes.",
                },

                {
                    question: "¿Qué son los cron jobs?",

                    answer:
                        "Son mecanismos utilizados para programar la ejecución automática de tareas en horarios o intervalos determinados.",
                },

                {
                    question: "¿Puede ejecutar tareas en segundo plano?",

                    answer:
                        "Sí. El sistema puede utilizar background jobs y colas para ejecutar procesos sin bloquear las operaciones principales.",
                },

                {
                    question: "¿Puede manejar tareas recurrentes?",

                    answer:
                        "Sí. Las tareas pueden configurarse para ejecutarse periódicamente según una frecuencia definida.",
                },
            ],
        },

        en: {
            name: "Scheduled Tasks Engine",

            title: "Scheduled Tasks Engine",

            level: "🟠 Advanced",

            category: "Business Automation",

            description:
                "Engine for executing scheduled and recurring processes through cron jobs, processing queues, and background jobs.",

            time: "5-8 weeks",

            imageAlt:
                "Scheduled task engine with cron jobs and background processing",

            target:
                "Businesses and digital platforms that need to automatically execute processes at defined times or on recurring schedules.",

            support:
                "45 days post-delivery support",

            useCases: [
                "Scheduled tasks",
                "Recurring processes",
                "Automatic data cleanup",
                "Periodic report generation",
                "Data synchronization",
                "Background processing",
                "Automated maintenance",
                "Overnight processes",
            ],

            includes: [
                "Scheduled task engine",
                "Cron jobs",
                "Recurring tasks",
                "Processing queues",
                "Background jobs",
                "Execution scheduling",
                "Automatic retries",
                "Execution tracking",
                "Task states",
                "Error handling",
                "Processing logs",
                "Recurring executions",
            ],

            notIncludes: [
                "Complete enterprise cloud infrastructure",
                "Distributed Big Data orchestrator",
                "Managed Kubernetes infrastructure",
                "High-performance scientific computing",
                "Dedicated server infrastructure",
            ],

            features: [
                "Cron Jobs",
                "Recurring Tasks",
                "Background Processing",
                "Task Queues",
                "Job Scheduling",
                "Retry Processing",
                "Execution Tracking",
                "Task States",
                "Error Handling",
                "Processing Logs",
                "Automated Jobs",
            ],

            deliverables: [
                "Scheduled task engine",
                "Cron job system",
                "Processing queues",
                "Recurring jobs",
                "Background processing",
                "Retry system",
                "Execution tracking",
                "Processing logs",
                "Source code",
                "Technical documentation",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Recurring Processes",

                    description:
                        "Automatically executes tasks that need to repeat at defined times or intervals.",
                },

                {
                    title: "Background Processing",

                    description:
                        "Heavy tasks can run outside the application's main request flow.",
                },

                {
                    title: "Scheduled Execution",

                    description:
                        "Defines when and how frequently different processes should execute.",
                },

                {
                    title: "Operational Control",

                    description:
                        "Execution and state tracking makes automated processes easier to monitor.",
                },
            ],

            process: [
                {
                    title: "Task Identification",

                    description:
                        "We define which processes should run automatically and identify their dependencies.",
                },

                {
                    title: "Schedule Configuration",

                    description:
                        "We configure frequencies, intervals, cron jobs, and execution conditions.",
                },

                {
                    title: "Queue Implementation",

                    description:
                        "We configure background jobs and queues to process tasks in a controlled manner.",
                },

                {
                    title: "Monitoring and Testing",

                    description:
                        "We validate executions, errors, retries, states, and scheduled task behavior.",
                },
            ],

            faq: [
                {
                    question: "What is a Scheduled Tasks Engine?",

                    answer:
                        "It is a system for scheduling and automatically executing recurring tasks and processes.",
                },

                {
                    question: "What are cron jobs?",

                    answer:
                        "They are mechanisms used to schedule automatic task execution at defined times or intervals.",
                },

                {
                    question: "Can it run background tasks?",

                    answer:
                        "Yes. The system can use background jobs and queues to execute processes without blocking the application's main operations.",
                },

                {
                    question: "Can it handle recurring tasks?",

                    answer:
                        "Yes. Tasks can be configured to run periodically according to a defined schedule.",
                },
            ],
        },

        pt: {
            name: "Scheduled Tasks Engine",

            title: "Motor de Tarefas Programadas",

            level: "🟠 Avançado",

            category: "Automação Empresarial",

            description:
                "Motor para executar tarefas programadas e processos recorrentes por meio de cron jobs, filas de processamento e trabalhos em segundo plano.",

            time: "5-8 semanas",

            imageAlt:
                "Motor de tarefas programadas com cron jobs e processamento em segundo plano",

            target:
                "Empresas e plataformas digitais que precisam executar processos automaticamente em horários definidos ou de forma recorrente.",

            support:
                "45 dias de suporte pós-entrega",

            useCases: [
                "Tarefas programadas",
                "Processos recorrentes",
                "Limpeza automática de dados",
                "Geração periódica de relatórios",
                "Sincronização de informações",
                "Processamento em segundo plano",
                "Manutenção automatizada",
                "Processos noturnos",
            ],

            includes: [
                "Motor de tarefas programadas",
                "Cron jobs",
                "Tarefas recorrentes",
                "Filas de processamento",
                "Background jobs",
                "Programação de execuções",
                "Retentativas automáticas",
                "Acompanhamento de execuções",
                "Estados das tarefas",
                "Tratamento de erros",
                "Logs de processamento",
                "Execuções periódicas",
            ],

            notIncludes: [
                "Infraestrutura cloud empresarial completa",
                "Orquestrador distribuído de Big Data",
                "Infraestrutura Kubernetes gerenciada",
                "Processamento científico de alto desempenho",
                "Infraestrutura dedicada de servidores",
            ],

            features: [
                "Cron Jobs",
                "Recurring Tasks",
                "Background Processing",
                "Task Queues",
                "Job Scheduling",
                "Retry Processing",
                "Execution Tracking",
                "Task States",
                "Error Handling",
                "Processing Logs",
                "Automated Jobs",
            ],

            deliverables: [
                "Motor de tarefas programadas",
                "Sistema de cron jobs",
                "Filas de processamento",
                "Trabalhos recorrentes",
                "Processamento em segundo plano",
                "Sistema de retentativas",
                "Acompanhamento de execuções",
                "Logs de processamento",
                "Código-fonte",
                "Documentação técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Processos recorrentes",

                    description:
                        "Permite executar automaticamente tarefas que precisam se repetir em horários ou intervalos determinados.",
                },

                {
                    title: "Processamento em segundo plano",

                    description:
                        "Tarefas pesadas podem ser executadas fora do fluxo principal da aplicação.",
                },

                {
                    title: "Execuções programadas",

                    description:
                        "Permite definir quando e com que frequência diferentes processos devem ser executados.",
                },

                {
                    title: "Maior controle operacional",

                    description:
                        "O acompanhamento dos estados e execuções facilita a supervisão dos processos automatizados.",
                },
            ],

            process: [
                {
                    title: "Identificação das tarefas",

                    description:
                        "Definimos quais processos devem ser executados automaticamente e quais são suas dependências.",
                },

                {
                    title: "Configuração dos horários",

                    description:
                        "Estabelecemos frequências, intervalos, cron jobs e condições de execução.",
                },

                {
                    title: "Implementação das filas",

                    description:
                        "Configuramos trabalhos em segundo plano e filas para processar as tarefas de forma controlada.",
                },

                {
                    title: "Monitoramento e testes",

                    description:
                        "Validamos execuções, erros, retentativas, estados e comportamento das tarefas programadas.",
                },
            ],

            faq: [
                {
                    question: "O que é um Scheduled Tasks Engine?",

                    answer:
                        "É um sistema que permite programar e executar automaticamente tarefas e processos recorrentes.",
                },

                {
                    question: "O que são cron jobs?",

                    answer:
                        "São mecanismos utilizados para programar a execução automática de tarefas em horários ou intervalos determinados.",
                },

                {
                    question: "Pode executar tarefas em segundo plano?",

                    answer:
                        "Sim. O sistema pode utilizar background jobs e filas para executar processos sem bloquear as operações principais.",
                },

                {
                    question: "Pode lidar com tarefas recorrentes?",

                    answer:
                        "Sim. As tarefas podem ser configuradas para serem executadas periodicamente de acordo com uma frequência definida.",
                },
            ],
        },
    },
};