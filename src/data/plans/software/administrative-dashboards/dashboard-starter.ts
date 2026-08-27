import type {
    ServicePlan,
} from "@/types/plan.types";

export const dashboardStarter: ServicePlan = {
    core: {
        // ────────────────────────────────────
        // Identidad
        // ────────────────────────────────────

        id: "DAS-001",

        slug: "dashboard-starter",

        // ────────────────────────────────────
        // Comercial
        // ────────────────────────────────────

        complexity: "⭐⭐⭐ (3/5)",

        price: "$1,250 - $2,100 USD",

        pricingType: "fixed",

        automationLevel: "medium",

        // ────────────────────────────────────
        // Técnico
        // ────────────────────────────────────

        stack: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Shadcn/ui",
            "Recharts",
        ],

        technologies: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Shadcn/ui",
            "Recharts",
            "Responsive Layouts",
            "Type-safe Components",
            "Client-side State",
        ],

        integrations: [
            "Chart Libraries",
            "REST APIs",
        ],

        // ────────────────────────────────────
        // Multimedia
        // ────────────────────────────────────

        heroImage:
            "/images/services/software/hero/hero-dashboard-starter.png",

        image:
            "/images/services/software/hero/hero-dashboard-starter.png",
    },

    translations: {
        es: {
            name: "Dashboard Inicial",

            title:
                "Dashboard Administrativo Inicial",

            level: "🟢 Básico",

            category:
                "Dashboards Administrativos",

            description:
                "Dashboard administrativo profesional con estructura responsive, navegación adaptable, grids de contenido y visualizaciones mediante datos simulados para construir una base sólida de administración.",

            time: "5-7 semanas",

            imageAlt:
                "Dashboard administrativo responsive con gráficos y panel de navegación",

            target:
                "Empresas, organizaciones y proyectos digitales que necesitan una interfaz administrativa moderna para visualizar y organizar información desde un panel centralizado.",

            support:
                "30 días soporte post-entrega",

            useCases: [
                "Paneles administrativos",
                "Sistemas internos",
                "Portales empresariales",
                "Paneles de gestión",
                "Visualización de datos",
                "Interfaces de administración",
            ],

            includes: [
                "Estructura de dashboard",
                "Navegación responsive",
                "Menú lateral adaptable",
                "Grids de contenido",
                "Tarjetas informativas",
                "Visualizaciones de datos",
                "Gráficos básicos",
                "Datos simulados",
                "Componentes reutilizables",
                "Diseño responsive",
                "Tailwind CSS",
                "Shadcn/ui",
            ],

            notIncludes: [
                "Integración con datos productivos",
                "Procesamiento de datos en tiempo real",
                "Filtros estructurales avanzados",
                "Reportes automatizados",
                "Gestión avanzada de usuarios y permisos",
            ],

            features: [
                "Responsive Navigation",
                "Dashboard Layout Shell",
                "Base Layout Grids",
                "Mock-data Visualizations",
                "Type-safe Components",
                "Reusable UI Components",
                "Responsive Design",
                "Recharts",
                "Shadcn/ui",
                "Tailwind CSS",
            ],

            deliverables: [
                "Dashboard administrativo publicado",
                "Sistema de navegación responsive",
                "Estructura de layouts",
                "Componentes visuales",
                "Visualizaciones con datos simulados",
                "Código fuente",
                "Documentación técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Interfaz organizada",

                    description:
                        "Centraliza diferentes tipos de información dentro de una estructura administrativa clara y fácil de navegar.",
                },

                {
                    title:
                        "Diseño adaptable",

                    description:
                        "La navegación y los componentes se adaptan a diferentes tamaños de pantalla para mantener una experiencia consistente.",
                },

                {
                    title:
                        "Base escalable",

                    description:
                        "La arquitectura permite evolucionar posteriormente hacia dashboards conectados con datos reales, filtros y métricas avanzadas.",
                },
            ],

            process: [
                {
                    title:
                        "Arquitectura del dashboard",

                    description:
                        "Definimos la estructura de navegación, layouts, grids, tarjetas y áreas principales del panel administrativo.",
                },

                {
                    title:
                        "Desarrollo de la interfaz",

                    description:
                        "Construimos los componentes utilizando Next.js, TypeScript, Tailwind CSS y Shadcn/ui.",
                },

                {
                    title:
                        "Visualización y pruebas",

                    description:
                        "Integramos visualizaciones con datos simulados y validamos la experiencia responsive antes del lanzamiento.",
                },
            ],

            faq: [
                {
                    question:
                        "¿Qué incluye el Dashboard Starter?",

                    answer:
                        "Incluye la estructura principal del dashboard, navegación responsive, grids, componentes administrativos y visualizaciones utilizando datos simulados.",
                },

                {
                    question:
                        "¿Los datos son reales?",

                    answer:
                        "No. Este plan utiliza datos simulados para construir y demostrar la interfaz. La integración con datos productivos puede desarrollarse como una funcionalidad adicional.",
                },

                {
                    question:
                        "¿Es responsive?",

                    answer:
                        "Sí. La interfaz está diseñada para adaptarse a diferentes tamaños de pantalla.",
                },

                {
                    question:
                        "¿Puede evolucionar a un dashboard avanzado?",

                    answer:
                        "Sí. La arquitectura puede ampliarse posteriormente con datos reales, filtros avanzados, métricas y funcionalidades específicas del negocio.",
                },
            ],
        },
        en: {
            name: "Starter Dashboard",

            title:
                "Starter Administrative Dashboard",

            level: "🟢 Basic",

            category:
                "Administrative Dashboards",

            description:
                "Professional administrative dashboard with a responsive structure, adaptive navigation, content grids, and mock-data visualizations to provide a solid foundation for administration.",

            time: "5-7 weeks",

            imageAlt:
                "Responsive administrative dashboard with charts and navigation panel",

            target:
                "Businesses, organizations, and digital projects that need a modern administrative interface to visualize and organize information from a centralized dashboard.",

            support:
                "30 days post-delivery support",

            useCases: [
                "Administrative dashboards",
                "Internal systems",
                "Enterprise portals",
                "Management dashboards",
                "Data visualization",
                "Administration interfaces",
            ],

            includes: [
                "Dashboard structure",
                "Responsive navigation",
                "Adaptive sidebar",
                "Content grids",
                "Information cards",
                "Data visualizations",
                "Basic charts",
                "Mock data",
                "Reusable components",
                "Responsive design",
                "Tailwind CSS",
                "Shadcn/ui",
            ],

            notIncludes: [
                "Production data integration",
                "Real-time data processing",
                "Advanced structural filtering",
                "Automated reporting",
                "Advanced user and permission management",
            ],

            features: [
                "Responsive Navigation",
                "Dashboard Layout Shell",
                "Base Layout Grids",
                "Mock-data Visualizations",
                "Type-safe Components",
                "Reusable UI Components",
                "Responsive Design",
                "Recharts",
                "Shadcn/ui",
                "Tailwind CSS",
            ],

            deliverables: [
                "Published administrative dashboard",
                "Responsive navigation system",
                "Layout structure",
                "Visual components",
                "Mock-data visualizations",
                "Source code",
                "Technical documentation",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Organized Interface",

                    description:
                        "Centralizes different types of information within a clear and easy-to-navigate administrative structure.",
                },

                {
                    title:
                        "Adaptive Design",

                    description:
                        "Navigation and components adapt to different screen sizes to maintain a consistent user experience.",
                },

                {
                    title:
                        "Scalable Foundation",

                    description:
                        "The architecture can later evolve into dashboards connected to real data, advanced filters, and enhanced metrics.",
                },
            ],

            process: [
                {
                    title:
                        "Dashboard Architecture",

                    description:
                        "We define the navigation structure, layouts, grids, cards, and main areas of the administrative dashboard.",
                },

                {
                    title:
                        "Interface Development",

                    description:
                        "We build the components using Next.js, TypeScript, Tailwind CSS, and Shadcn/ui.",
                },

                {
                    title:
                        "Visualization and Testing",

                    description:
                        "We integrate mock-data visualizations and validate the responsive experience before launch.",
                },
            ],

            faq: [
                {
                    question:
                        "What does the Dashboard Starter include?",

                    answer:
                        "It includes the main dashboard structure, responsive navigation, grids, administrative components, and visualizations using mock data.",
                },

                {
                    question:
                        "Is the data real?",

                    answer:
                        "No. This plan uses mock data to build and demonstrate the interface. Production data integration can be developed as an additional feature.",
                },

                {
                    question:
                        "Is it responsive?",

                    answer:
                        "Yes. The interface is designed to adapt to different screen sizes.",
                },

                {
                    question:
                        "Can it evolve into an advanced dashboard?",

                    answer:
                        "Yes. The architecture can later be expanded with real data, advanced filters, metrics, and business-specific functionality.",
                },
            ],
        },
        pt: {
            name: "Dashboard Inicial",

            title:
                "Dashboard Administrativo Inicial",

            level: "🟢 Básico",

            category:
                "Dashboards Administrativos",

            description:
                "Dashboard administrativo profissional com estrutura responsiva, navegação adaptável, grids de conteúdo e visualizações com dados simulados para construir uma base sólida de administração.",

            time: "5-7 semanas",

            imageAlt:
                "Dashboard administrativo responsivo com gráficos e painel de navegação",

            target:
                "Empresas, organizações e projetos digitais que precisam de uma interface administrativa moderna para visualizar e organizar informações a partir de um dashboard centralizado.",

            support:
                "30 dias de suporte pós-entrega",

            useCases: [
                "Dashboards administrativos",
                "Sistemas internos",
                "Portais empresariais",
                "Dashboards de gestão",
                "Visualização de dados",
                "Interfaces administrativas",
            ],

            includes: [
                "Estrutura de dashboard",
                "Navegação responsiva",
                "Barra lateral adaptável",
                "Grids de conteúdo",
                "Cartões informativos",
                "Visualizações de dados",
                "Gráficos básicos",
                "Dados simulados",
                "Componentes reutilizáveis",
                "Design responsivo",
                "Tailwind CSS",
                "Shadcn/ui",
            ],

            notIncludes: [
                "Integração com dados de produção",
                "Processamento de dados em tempo real",
                "Filtros estruturais avançados",
                "Relatórios automatizados",
                "Gerenciamento avançado de usuários e permissões",
            ],

            features: [
                "Responsive Navigation",
                "Dashboard Layout Shell",
                "Base Layout Grids",
                "Mock-data Visualizations",
                "Type-safe Components",
                "Reusable UI Components",
                "Responsive Design",
                "Recharts",
                "Shadcn/ui",
                "Tailwind CSS",
            ],

            deliverables: [
                "Dashboard administrativo publicado",
                "Sistema de navegação responsiva",
                "Estrutura de layouts",
                "Componentes visuais",
                "Visualizações com dados simulados",
                "Código-fonte",
                "Documentação técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Interface Organizada",

                    description:
                        "Centraliza diferentes tipos de informações em uma estrutura administrativa clara e fácil de navegar.",
                },

                {
                    title:
                        "Design Adaptável",

                    description:
                        "A navegação e os componentes se adaptam a diferentes tamanhos de tela para manter uma experiência consistente.",
                },

                {
                    title:
                        "Base Escalável",

                    description:
                        "A arquitetura pode posteriormente evoluir para dashboards conectados a dados reais, filtros avançados e métricas aprimoradas.",
                },
            ],

            process: [
                {
                    title:
                        "Arquitetura do Dashboard",

                    description:
                        "Definimos a estrutura de navegação, layouts, grids, cartões e áreas principais do painel administrativo.",
                },

                {
                    title:
                        "Desenvolvimento da Interface",

                    description:
                        "Construímos os componentes utilizando Next.js, TypeScript, Tailwind CSS e Shadcn/ui.",
                },

                {
                    title:
                        "Visualização e Testes",

                    description:
                        "Integramos visualizações com dados simulados e validamos a experiência responsiva antes do lançamento.",
                },
            ],

            faq: [
                {
                    question:
                        "O que inclui o Dashboard Starter?",

                    answer:
                        "Inclui a estrutura principal do dashboard, navegação responsiva, grids, componentes administrativos e visualizações utilizando dados simulados.",
                },

                {
                    question:
                        "Os dados são reais?",

                    answer:
                        "Não. Este plano utiliza dados simulados para construir e demonstrar a interface. A integração com dados de produção pode ser desenvolvida como uma funcionalidade adicional.",
                },

                {
                    question:
                        "É responsivo?",

                    answer:
                        "Sim. A interface foi projetada para se adaptar a diferentes tamanhos de tela.",
                },

                {
                    question:
                        "Pode evoluir para um dashboard avançado?",

                    answer:
                        "Sim. A arquitetura pode posteriormente ser ampliada com dados reais, filtros avançados, métricas e funcionalidades específicas do negócio.",
                },
            ],
        },
    },
};