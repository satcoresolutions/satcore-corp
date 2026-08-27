import type {
    ServicePlan,
} from "@/types/plan.types";

export const crmDashboard: ServicePlan = {
    core: {
        // ────────────────────────────────────
        // Identidad
        // ────────────────────────────────────

        id: "DAS-002",

        slug: "crm-dashboard",

        // ────────────────────────────────────
        // Comercial
        // ────────────────────────────────────

        complexity: "⭐⭐⭐⭐ (4/5)",

        price: "$2,100 - $4,000 USD",

        pricingType: "fixed",

        automationLevel: "high",

        // ────────────────────────────────────
        // Técnico
        // ────────────────────────────────────

        stack: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Shadcn/ui",
            "Recharts",
            "TanStack Table",
        ],

        technologies: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Shadcn/ui",
            "Recharts",
            "TanStack Table",
            "Client-side State",
            "Interactive Charts",
            "Data Filtering",
            "Type-safe Components",
        ],

        integrations: [
            "CRM APIs",
            "REST APIs",
            "Sales Data Sources",
            "Email Services",
        ],

        // ────────────────────────────────────
        // Multimedia
        // ────────────────────────────────────

        heroImage:
            "/images/services/software/hero/hero-crm-dashboard.png",

        image:
            "/images/services/software/hero/hero-crm-dashboard.png",
    },

    translations: {
        es: {
            name: "Dashboard CRM",

            title:
                "Dashboard Administrativo CRM",

            level: "🟠 Avanzado",

            category:
                "Dashboards Administrativos",

            description:
                "Dashboard CRM para centralizar el seguimiento de clientes, gestionar pipelines comerciales, visualizar métricas mediante gráficos interactivos y automatizar reportes de ventas.",

            time: "7-10 semanas",

            imageAlt:
                "Dashboard CRM con seguimiento de clientes, pipelines y gráficos de ventas",

            target:
                "Empresas y equipos comerciales que necesitan centralizar información de clientes, oportunidades, procesos de venta y métricas comerciales desde un panel administrativo.",

            support:
                "45 días soporte post-entrega",

            useCases: [
                "Gestión de clientes",
                "Seguimiento comercial",
                "Pipelines de ventas",
                "Equipos comerciales",
                "Reportes de ventas",
                "Métricas empresariales",
                "Gestión de oportunidades",
            ],

            includes: [
                "Dashboard CRM",
                "Seguimiento de clientes",
                "Pipeline comercial",
                "Gestión de oportunidades",
                "Tablas interactivas",
                "Filtros de información",
                "Gráficos interactivos",
                "Métricas comerciales",
                "Reportes de ventas",
                "Componentes responsive",
                "TanStack Table",
                "Recharts",
                "Shadcn/ui",
            ],

            notIncludes: [
                "Automatizaciones CRM empresariales complejas",
                "Integraciones ERP avanzadas",
                "Predicción de ventas mediante IA",
                "Aplicaciones móviles nativas",
                "Infraestructura de analítica empresarial completa",
            ],

            features: [
                "Client Activity Tracking",
                "Sales Pipelines",
                "Interactive Chart Layouts",
                "Automated Sales Reporting",
                "Data Tables",
                "Client-side Filtering",
                "Sales Metrics",
                "Type-safe Components",
                "TanStack Table",
                "Recharts",
                "Responsive Design",
            ],

            deliverables: [
                "Dashboard CRM publicado",
                "Sistema de seguimiento de clientes",
                "Pipeline comercial",
                "Tablas interactivas",
                "Gráficos comerciales",
                "Reportes de ventas",
                "Código fuente",
                "Documentación técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Visión comercial centralizada",

                    description:
                        "Permite visualizar clientes, oportunidades y procesos comerciales desde un único panel administrativo.",
                },

                {
                    title:
                        "Seguimiento de oportunidades",

                    description:
                        "Los pipelines permiten organizar y supervisar las diferentes etapas del proceso comercial.",
                },

                {
                    title:
                        "Análisis de ventas",

                    description:
                        "Los gráficos y reportes facilitan la interpretación de métricas comerciales y el seguimiento del rendimiento.",
                },

                {
                    title:
                        "Información filtrable",

                    description:
                        "Las tablas y filtros permiten explorar grandes cantidades de información desde el navegador.",
                },
            ],

            process: [
                {
                    title:
                        "Diseño del CRM",

                    description:
                        "Definimos clientes, oportunidades, etapas del pipeline, métricas y estructuras de información.",
                },

                {
                    title:
                        "Desarrollo del dashboard",

                    description:
                        "Construimos el dashboard utilizando Next.js, TypeScript, Tailwind CSS, Shadcn/ui y TanStack Table.",
                },

                {
                    title:
                        "Visualización de métricas",

                    description:
                        "Implementamos gráficos interactivos y estructuras de análisis utilizando Recharts.",
                },

                {
                    title:
                        "Reportes y pruebas",

                    description:
                        "Configuramos las estructuras de reportes y validamos filtros, tablas, métricas y navegación antes del lanzamiento.",
                },
            ],

            faq: [
                {
                    question:
                        "¿Qué es un CRM Dashboard?",

                    answer:
                        "Es un panel administrativo orientado a gestionar y visualizar información relacionada con clientes, oportunidades, procesos comerciales y métricas de ventas.",
                },

                {
                    question:
                        "¿Puede gestionar pipelines de ventas?",

                    answer:
                        "Sí. El sistema permite representar las diferentes etapas de un proceso comercial y realizar seguimiento de las oportunidades.",
                },

                {
                    question:
                        "¿Incluye gráficos interactivos?",

                    answer:
                        "Sí. El dashboard utiliza Recharts para construir visualizaciones y gráficos interactivos.",
                },

                {
                    question:
                        "¿Puede generar reportes de ventas?",

                    answer:
                        "Sí. El sistema contempla estructuras para automatizar y presentar reportes relacionados con las métricas comerciales.",
                },
            ],
        },
        en: {
            name: "CRM Dashboard",

            title:
                "CRM Administrative Dashboard",

            level: "🟠 Advanced",

            category:
                "Administrative Dashboards",

            description:
                "CRM dashboard designed to centralize customer tracking, manage sales pipelines, visualize metrics through interactive charts, and automate sales reporting.",

            time: "7-10 weeks",

            imageAlt:
                "CRM dashboard with customer tracking, sales pipelines, and sales charts",

            target:
                "Businesses and sales teams that need to centralize customer information, opportunities, sales processes, and commercial metrics from an administrative dashboard.",

            support:
                "45 days post-delivery support",

            useCases: [
                "Customer management",
                "Sales tracking",
                "Sales pipelines",
                "Sales teams",
                "Sales reporting",
                "Business metrics",
                "Opportunity management",
            ],

            includes: [
                "CRM Dashboard",
                "Customer tracking",
                "Sales pipeline",
                "Opportunity management",
                "Interactive tables",
                "Data filtering",
                "Interactive charts",
                "Sales metrics",
                "Sales reports",
                "Responsive components",
                "TanStack Table",
                "Recharts",
                "Shadcn/ui",
            ],

            notIncludes: [
                "Complex enterprise CRM automations",
                "Advanced ERP integrations",
                "AI-powered sales forecasting",
                "Native mobile applications",
                "Complete enterprise analytics infrastructure",
            ],

            features: [
                "Client Activity Tracking",
                "Sales Pipelines",
                "Interactive Chart Layouts",
                "Automated Sales Reporting",
                "Data Tables",
                "Client-side Filtering",
                "Sales Metrics",
                "Type-safe Components",
                "TanStack Table",
                "Recharts",
                "Responsive Design",
            ],

            deliverables: [
                "Published CRM Dashboard",
                "Customer tracking system",
                "Sales pipeline",
                "Interactive tables",
                "Sales charts",
                "Sales reports",
                "Source code",
                "Technical documentation",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Centralized Sales Overview",

                    description:
                        "Provides a centralized view of customers, opportunities, and sales processes from a single administrative dashboard.",
                },

                {
                    title:
                        "Opportunity Tracking",

                    description:
                        "Sales pipelines make it possible to organize and monitor the different stages of the sales process.",
                },

                {
                    title:
                        "Sales Analysis",

                    description:
                        "Charts and reports make it easier to interpret sales metrics and monitor performance.",
                },

                {
                    title:
                        "Filterable Information",

                    description:
                        "Tables and filters allow users to explore large amounts of information directly from the browser.",
                },
            ],

            process: [
                {
                    title:
                        "CRM Design",

                    description:
                        "We define customers, opportunities, pipeline stages, metrics, and information structures.",
                },

                {
                    title:
                        "Dashboard Development",

                    description:
                        "We build the dashboard using Next.js, TypeScript, Tailwind CSS, Shadcn/ui, and TanStack Table.",
                },

                {
                    title:
                        "Metrics Visualization",

                    description:
                        "We implement interactive charts and analytical structures using Recharts.",
                },

                {
                    title:
                        "Reporting and Testing",

                    description:
                        "We configure reporting structures and validate filters, tables, metrics, and navigation before launch.",
                },
            ],

            faq: [
                {
                    question:
                        "What is a CRM Dashboard?",

                    answer:
                        "It is an administrative dashboard designed to manage and visualize information related to customers, opportunities, sales processes, and sales metrics.",
                },

                {
                    question:
                        "Can it manage sales pipelines?",

                    answer:
                        "Yes. The system allows different stages of a sales process to be represented and opportunities to be tracked throughout the pipeline.",
                },

                {
                    question:
                        "Does it include interactive charts?",

                    answer:
                        "Yes. The dashboard uses Recharts to build interactive visualizations and charts.",
                },

                {
                    question:
                        "Can it generate sales reports?",

                    answer:
                        "Yes. The system provides structures for automating and presenting reports related to sales metrics.",
                },
            ],
        },
        pt: {
            name: "Dashboard CRM",

            title:
                "Dashboard Administrativo CRM",

            level: "🟠 Avançado",

            category:
                "Dashboards Administrativos",

            description:
                "Dashboard CRM desenvolvido para centralizar o acompanhamento de clientes, gerenciar pipelines comerciais, visualizar métricas por meio de gráficos interativos e automatizar relatórios de vendas.",

            time: "7-10 semanas",

            imageAlt:
                "Dashboard CRM com acompanhamento de clientes, pipelines de vendas e gráficos comerciais",

            target:
                "Empresas e equipes comerciais que precisam centralizar informações de clientes, oportunidades, processos de vendas e métricas comerciais em um dashboard administrativo.",

            support:
                "45 dias de suporte pós-entrega",

            useCases: [
                "Gestão de clientes",
                "Acompanhamento comercial",
                "Pipelines de vendas",
                "Equipes comerciais",
                "Relatórios de vendas",
                "Métricas empresariais",
                "Gestão de oportunidades",
            ],

            includes: [
                "Dashboard CRM",
                "Acompanhamento de clientes",
                "Pipeline comercial",
                "Gestão de oportunidades",
                "Tabelas interativas",
                "Filtros de informações",
                "Gráficos interativos",
                "Métricas comerciais",
                "Relatórios de vendas",
                "Componentes responsivos",
                "TanStack Table",
                "Recharts",
                "Shadcn/ui",
            ],

            notIncludes: [
                "Automações CRM empresariais complexas",
                "Integrações ERP avançadas",
                "Previsão de vendas com IA",
                "Aplicações móveis nativas",
                "Infraestrutura completa de análise empresarial",
            ],

            features: [
                "Client Activity Tracking",
                "Sales Pipelines",
                "Interactive Chart Layouts",
                "Automated Sales Reporting",
                "Data Tables",
                "Client-side Filtering",
                "Sales Metrics",
                "Type-safe Components",
                "TanStack Table",
                "Recharts",
                "Responsive Design",
            ],

            deliverables: [
                "Dashboard CRM publicado",
                "Sistema de acompanhamento de clientes",
                "Pipeline comercial",
                "Tabelas interativas",
                "Gráficos comerciais",
                "Relatórios de vendas",
                "Código-fonte",
                "Documentação técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Visão Comercial Centralizada",

                    description:
                        "Permite visualizar clientes, oportunidades e processos comerciais a partir de um único dashboard administrativo.",
                },

                {
                    title:
                        "Acompanhamento de Oportunidades",

                    description:
                        "Os pipelines permitem organizar e acompanhar as diferentes etapas do processo comercial.",
                },

                {
                    title:
                        "Análise de Vendas",

                    description:
                        "Os gráficos e relatórios facilitam a interpretação das métricas comerciais e o acompanhamento do desempenho.",
                },

                {
                    title:
                        "Informações Filtráveis",

                    description:
                        "As tabelas e filtros permitem explorar grandes quantidades de informações diretamente pelo navegador.",
                },
            ],

            process: [
                {
                    title:
                        "Definição do CRM",

                    description:
                        "Definimos clientes, oportunidades, etapas do pipeline, métricas e estruturas de informações.",
                },

                {
                    title:
                        "Desenvolvimento do Dashboard",

                    description:
                        "Construímos o dashboard utilizando Next.js, TypeScript, Tailwind CSS, Shadcn/ui e TanStack Table.",
                },

                {
                    title:
                        "Visualização de Métricas",

                    description:
                        "Implementamos gráficos interativos e estruturas de análise utilizando Recharts.",
                },

                {
                    title:
                        "Relatórios e Testes",

                    description:
                        "Configuramos as estruturas de relatórios e validamos filtros, tabelas, métricas e navegação antes do lançamento.",
                },
            ],

            faq: [
                {
                    question:
                        "O que é um CRM Dashboard?",

                    answer:
                        "É um dashboard administrativo destinado a gerenciar e visualizar informações relacionadas a clientes, oportunidades, processos comerciais e métricas de vendas.",
                },

                {
                    question:
                        "Pode gerenciar pipelines de vendas?",

                    answer:
                        "Sim. O sistema permite representar as diferentes etapas de um processo comercial e acompanhar as oportunidades ao longo do pipeline.",
                },

                {
                    question:
                        "Inclui gráficos interativos?",

                    answer:
                        "Sim. O dashboard utiliza Recharts para criar visualizações e gráficos interativos.",
                },

                {
                    question:
                        "Pode gerar relatórios de vendas?",

                    answer:
                        "Sim. O sistema contempla estruturas para automatizar e apresentar relatórios relacionados às métricas comerciais.",
                },
            ],
        },
    },
};