import type {
    ServicePlan,
} from "@/types/plan.types";

export const saasDashboard: ServicePlan = {
    core: {
        // ────────────────────────────────────
        // Identidad
        // ────────────────────────────────────

        id: "DAS-003",

        slug: "saas-dashboard",

        // ────────────────────────────────────
        // Comercial
        // ────────────────────────────────────

        complexity: "⭐⭐⭐⭐⭐ (5/5)",

        price: "$3,000 - $5,500 USD",

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
            "Stripe APIs",
            "Client-side State",
            "Real-time State Processing",
            "Advanced Data Filtering",
            "Type-safe Components",
        ],

        integrations: [
            "Stripe",
            "Stripe APIs",
            "REST APIs",
            "Analytics APIs",
            "Notification Services",
        ],

        // ────────────────────────────────────
        // Multimedia
        // ────────────────────────────────────

        heroImage:
            "/images/services/software/hero/hero-saas-dashboard.png",

        image:
            "/images/services/software/hero/hero-saas-dashboard.png",
    },

    translations: {
        es: {
            name: "Dashboard SaaS",

            title:
                "Dashboard Administrativo SaaS",

            level: "🔴 Avanzado",

            category:
                "Dashboards Administrativos",

            description:
                "Dashboard avanzado para plataformas SaaS con monitoreo de uso mediante Stripe, gestión de permisos de equipos y visualización de múltiples métricas empresariales.",

            time: "10-14 semanas",

            imageAlt:
                "Dashboard SaaS con métricas, monitoreo de uso y gestión de equipos",

            target:
                "Empresas de software, productos SaaS y plataformas digitales que necesitan administrar equipos, monitorear consumo, visualizar métricas y controlar permisos desde un panel centralizado.",

            support:
                "60 días soporte post-entrega",

            useCases: [
                "Plataformas SaaS",
                "Software empresarial",
                "Gestión de suscripciones",
                "Monitoreo de uso",
                "Paneles de métricas",
                "Gestión de equipos",
                "Analítica de producto",
                "Administración de cuentas",
            ],

            includes: [
                "Dashboard SaaS",
                "Monitoreo de uso",
                "Integración con Stripe",
                "Métricas de consumo",
                "Gestión de equipos",
                "Gestión de permisos",
                "Gráficos multi-métrica",
                "Tablas avanzadas",
                "Filtros estructurales",
                "Procesamiento de estado",
                "Visualización de datos",
                "Panel administrativo",
                "Diseño responsive",
            ],

            notIncludes: [
                "Infraestructura completa de billing de Stripe",
                "Arquitectura enterprise distribuida",
                "Data warehouse empresarial",
                "Modelos avanzados de inteligencia artificial",
                "Aplicaciones móviles nativas",
            ],

            features: [
                "Stripe Usage Monitoring",
                "Usage Meters",
                "Team Permission Management",
                "Multi-metric Charts",
                "Real-time State Processing",
                "Heavy Client-side Filtering",
                "Advanced Data Tables",
                "Subscription Metrics",
                "Type-safe Layouts",
                "Stripe API Integration",
                "Recharts",
                "TanStack Table",
            ],

            deliverables: [
                "Dashboard SaaS publicado",
                "Panel de monitoreo de uso",
                "Integración con Stripe",
                "Sistema de gestión de equipos",
                "Sistema de permisos",
                "Dashboard multi-métrica",
                "Tablas y filtros avanzados",
                "Código fuente",
                "Documentación técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Monitoreo del consumo",

                    description:
                        "Permite visualizar métricas de uso y consumo asociadas a una plataforma SaaS mediante integración con Stripe.",
                },

                {
                    title:
                        "Gestión de equipos",

                    description:
                        "Centraliza la administración de miembros, roles y permisos dentro de la plataforma.",
                },

                {
                    title:
                        "Métricas avanzadas",

                    description:
                        "Permite combinar diferentes indicadores en visualizaciones multi-métrica para facilitar el análisis del producto.",
                },

                {
                    title:
                        "Análisis interactivo",

                    description:
                        "Los filtros y tablas avanzadas permiten explorar grandes volúmenes de información directamente desde la interfaz.",
                },
            ],

            process: [
                {
                    title:
                        "Arquitectura de métricas",

                    description:
                        "Definimos las métricas de producto, consumo, suscripciones y actividad que deberá mostrar el dashboard.",
                },

                {
                    title:
                        "Integración de datos",

                    description:
                        "Integramos Stripe y las fuentes de información necesarias para alimentar las métricas y estructuras administrativas.",
                },

                {
                    title:
                        "Gestión de equipos",

                    description:
                        "Implementamos las vistas de equipos, roles y permisos para administrar el acceso dentro de la plataforma.",
                },

                {
                    title:
                        "Visualización avanzada",

                    description:
                        "Construimos gráficos multi-métrica, tablas y filtros avanzados para facilitar el análisis de la información.",
                },

                {
                    title:
                        "Pruebas y optimización",

                    description:
                        "Validamos el procesamiento de estados, filtros, métricas e integraciones antes de publicar el dashboard.",
                },
            ],

            faq: [
                {
                    question:
                        "¿Qué diferencia existe entre el CRM Dashboard y el SaaS Dashboard?",

                    answer:
                        "El CRM Dashboard está enfocado en clientes, oportunidades y procesos comerciales. El SaaS Dashboard está orientado a productos de software y agrega monitoreo de uso, métricas de suscripción, gestión de equipos y permisos.",
                },

                {
                    question:
                        "¿Incluye integración con Stripe?",

                    answer:
                        "Sí. El plan contempla integración con las APIs de Stripe para obtener información relacionada con uso y métricas de la plataforma.",
                },

                {
                    question:
                        "¿Puede gestionar equipos y permisos?",

                    answer:
                        "Sí. El dashboard incluye vistas para administrar miembros de equipos y controlar sus roles y permisos.",
                },

                {
                    question:
                        "¿Qué son los gráficos multi-métrica?",

                    answer:
                        "Son visualizaciones que permiten representar diferentes indicadores dentro de una misma estructura para facilitar el análisis y comparación de métricas.",
                },

                {
                    question:
                        "¿Los datos se actualizan en tiempo real?",

                    answer:
                        "El sistema está preparado para procesar estados y actualizar información dinámicamente. La disponibilidad de datos en tiempo real dependerá de las APIs y fuentes integradas en el proyecto.",
                },
            ],
        },
        en: {
            name: "SaaS Dashboard",

            title:
                "SaaS Administrative Dashboard",

            level: "🔴 Advanced",

            category:
                "Administrative Dashboards",

            description:
                "Advanced dashboard for SaaS platforms with Stripe usage monitoring, team permission management, and visualization of multiple business metrics.",

            time: "10-14 weeks",

            imageAlt:
                "SaaS dashboard with metrics, usage monitoring, and team management",

            target:
                "Software companies, SaaS products, and digital platforms that need to manage teams, monitor usage, visualize metrics, and control permissions from a centralized dashboard.",

            support:
                "60 days post-delivery support",

            useCases: [
                "SaaS platforms",
                "Enterprise software",
                "Subscription management",
                "Usage monitoring",
                "Metrics dashboards",
                "Team management",
                "Product analytics",
                "Account administration",
            ],

            includes: [
                "SaaS Dashboard",
                "Usage monitoring",
                "Stripe integration",
                "Usage metrics",
                "Team management",
                "Permission management",
                "Multi-metric charts",
                "Advanced tables",
                "Structural filters",
                "State processing",
                "Data visualization",
                "Administrative dashboard",
                "Responsive design",
            ],

            notIncludes: [
                "Complete Stripe billing infrastructure",
                "Distributed enterprise architecture",
                "Enterprise data warehouse",
                "Advanced artificial intelligence models",
                "Native mobile applications",
            ],

            features: [
                "Stripe Usage Monitoring",
                "Usage Meters",
                "Team Permission Management",
                "Multi-metric Charts",
                "Real-time State Processing",
                "Heavy Client-side Filtering",
                "Advanced Data Tables",
                "Subscription Metrics",
                "Type-safe Layouts",
                "Stripe API Integration",
                "Recharts",
                "TanStack Table",
            ],

            deliverables: [
                "Published SaaS Dashboard",
                "Usage monitoring dashboard",
                "Stripe integration",
                "Team management system",
                "Permission management system",
                "Multi-metric dashboard",
                "Advanced tables and filters",
                "Source code",
                "Technical documentation",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Usage Monitoring",

                    description:
                        "Provides visibility into usage and consumption metrics associated with a SaaS platform through Stripe integration.",
                },

                {
                    title:
                        "Team Management",

                    description:
                        "Centralizes the management of team members, roles, and permissions within the platform.",
                },

                {
                    title:
                        "Advanced Metrics",

                    description:
                        "Allows multiple indicators to be combined into multi-metric visualizations to facilitate product analysis.",
                },

                {
                    title:
                        "Interactive Analysis",

                    description:
                        "Advanced filters and tables allow users to explore large volumes of information directly from the interface.",
                },
            ],

            process: [
                {
                    title:
                        "Metrics Architecture",

                    description:
                        "We define the product, usage, subscription, and activity metrics that the dashboard will display.",
                },

                {
                    title:
                        "Data Integration",

                    description:
                        "We integrate Stripe and the required information sources to power the metrics and administrative structures.",
                },

                {
                    title:
                        "Team Management",

                    description:
                        "We implement team, role, and permission views to manage access within the platform.",
                },

                {
                    title:
                        "Advanced Visualization",

                    description:
                        "We build multi-metric charts, tables, and advanced filters to facilitate information analysis.",
                },

                {
                    title:
                        "Testing and Optimization",

                    description:
                        "We validate state processing, filters, metrics, and integrations before publishing the dashboard.",
                },
            ],

            faq: [
                {
                    question:
                        "What is the difference between the CRM Dashboard and the SaaS Dashboard?",

                    answer:
                        "The CRM Dashboard focuses on customers, opportunities, and sales processes. The SaaS Dashboard is designed for software products and adds usage monitoring, subscription metrics, team management, and permissions.",
                },

                {
                    question:
                        "Does it include Stripe integration?",

                    answer:
                        "Yes. The plan includes integration with Stripe APIs to retrieve information related to platform usage and metrics.",
                },

                {
                    question:
                        "Can it manage teams and permissions?",

                    answer:
                        "Yes. The dashboard includes views for managing team members and controlling their roles and permissions.",
                },

                {
                    question:
                        "What are multi-metric charts?",

                    answer:
                        "They are visualizations that allow different indicators to be represented within the same structure to facilitate the analysis and comparison of metrics.",
                },

                {
                    question:
                        "Is the data updated in real time?",

                    answer:
                        "The system is designed to process states and update information dynamically. Real-time data availability will depend on the APIs and data sources integrated into the project.",
                },
            ],
        },
        pt: {
            name: "Dashboard SaaS",

            title:
                "Dashboard Administrativo SaaS",

            level: "🔴 Avançado",

            category:
                "Dashboards Administrativos",

            description:
                "Dashboard avançado para plataformas SaaS com monitoramento de uso por meio do Stripe, gerenciamento de permissões de equipes e visualização de múltiplas métricas empresariais.",

            time: "10-14 semanas",

            imageAlt:
                "Dashboard SaaS com métricas, monitoramento de uso e gerenciamento de equipes",

            target:
                "Empresas de software, produtos SaaS e plataformas digitais que precisam gerenciar equipes, monitorar consumo, visualizar métricas e controlar permissões a partir de um dashboard centralizado.",

            support:
                "60 dias de suporte pós-entrega",

            useCases: [
                "Plataformas SaaS",
                "Software empresarial",
                "Gestão de assinaturas",
                "Monitoramento de uso",
                "Dashboards de métricas",
                "Gestão de equipes",
                "Análise de produto",
                "Administração de contas",
            ],

            includes: [
                "Dashboard SaaS",
                "Monitoramento de uso",
                "Integração com Stripe",
                "Métricas de consumo",
                "Gestão de equipes",
                "Gestão de permissões",
                "Gráficos multi-métrica",
                "Tabelas avançadas",
                "Filtros estruturais",
                "Processamento de estados",
                "Visualização de dados",
                "Painel administrativo",
                "Design responsivo",
            ],

            notIncludes: [
                "Infraestrutura completa de billing do Stripe",
                "Arquitetura empresarial distribuída",
                "Data warehouse empresarial",
                "Modelos avançados de inteligência artificial",
                "Aplicações móveis nativas",
            ],

            features: [
                "Stripe Usage Monitoring",
                "Usage Meters",
                "Team Permission Management",
                "Multi-metric Charts",
                "Real-time State Processing",
                "Heavy Client-side Filtering",
                "Advanced Data Tables",
                "Subscription Metrics",
                "Type-safe Layouts",
                "Stripe API Integration",
                "Recharts",
                "TanStack Table",
            ],

            deliverables: [
                "Dashboard SaaS publicado",
                "Painel de monitoramento de uso",
                "Integração com Stripe",
                "Sistema de gestão de equipes",
                "Sistema de permissões",
                "Dashboard multi-métrica",
                "Tabelas e filtros avançados",
                "Código-fonte",
                "Documentação técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Monitoramento do Consumo",

                    description:
                        "Permite visualizar métricas de uso e consumo associadas a uma plataforma SaaS por meio da integração com o Stripe.",
                },

                {
                    title:
                        "Gestão de Equipes",

                    description:
                        "Centraliza a administração de membros, funções e permissões dentro da plataforma.",
                },

                {
                    title:
                        "Métricas Avançadas",

                    description:
                        "Permite combinar diferentes indicadores em visualizações multi-métrica para facilitar a análise do produto.",
                },

                {
                    title:
                        "Análise Interativa",

                    description:
                        "Os filtros e as tabelas avançadas permitem explorar grandes volumes de informações diretamente pela interface.",
                },
            ],

            process: [
                {
                    title:
                        "Arquitetura de Métricas",

                    description:
                        "Definimos as métricas de produto, consumo, assinaturas e atividade que o dashboard deverá apresentar.",
                },

                {
                    title:
                        "Integração de Dados",

                    description:
                        "Integramos o Stripe e as fontes de informação necessárias para alimentar as métricas e estruturas administrativas.",
                },

                {
                    title:
                        "Gestão de Equipes",

                    description:
                        "Implementamos as visualizações de equipes, funções e permissões para administrar o acesso dentro da plataforma.",
                },

                {
                    title:
                        "Visualização Avançada",

                    description:
                        "Construímos gráficos multi-métrica, tabelas e filtros avançados para facilitar a análise das informações.",
                },

                {
                    title:
                        "Testes e Otimização",

                    description:
                        "Validamos o processamento de estados, filtros, métricas e integrações antes de publicar o dashboard.",
                },
            ],

            faq: [
                {
                    question:
                        "Qual é a diferença entre o CRM Dashboard e o SaaS Dashboard?",

                    answer:
                        "O CRM Dashboard é focado em clientes, oportunidades e processos comerciais. O SaaS Dashboard é voltado para produtos de software e adiciona monitoramento de uso, métricas de assinatura, gestão de equipes e permissões.",
                },

                {
                    question:
                        "Inclui integração com o Stripe?",

                    answer:
                        "Sim. O plano contempla integração com as APIs do Stripe para obter informações relacionadas ao uso e às métricas da plataforma.",
                },

                {
                    question:
                        "Pode gerenciar equipes e permissões?",

                    answer:
                        "Sim. O dashboard inclui visualizações para administrar membros das equipes e controlar suas funções e permissões.",
                },

                {
                    question:
                        "O que são gráficos multi-métrica?",

                    answer:
                        "São visualizações que permitem representar diferentes indicadores dentro de uma mesma estrutura para facilitar a análise e comparação das métricas.",
                },

                {
                    question:
                        "Os dados são atualizados em tempo real?",

                    answer:
                        "O sistema está preparado para processar estados e atualizar informações dinamicamente. A disponibilidade de dados em tempo real dependerá das APIs e fontes de dados integradas ao projeto.",
                },
            ],
        },
    },
};