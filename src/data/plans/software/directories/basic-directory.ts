import type {
    ServicePlan,
} from "@/types/plan.types";

export const basicDirectory: ServicePlan = {
    core: {
        // ────────────────────────────────────
        // Identidad
        // ────────────────────────────────────

        id: "DIR-001",

        slug: "basic-directory",

        // ────────────────────────────────────
        // Comercial
        // ────────────────────────────────────

        complexity: "⭐⭐⭐⭐ (4/5)",

        price: "$1,350 - $2,000 USD",

        pricingType: "fixed",

        automationLevel: "medium",

        // ────────────────────────────────────
        // Técnico
        // ────────────────────────────────────

        stack: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Prisma",
            "PostgreSQL",
        ],

        technologies: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Prisma ORM",
            "PostgreSQL",
            "Server-side Rendering",
            "Relational Queries",
        ],

        integrations: [
            "Google Analytics",
            "Google Maps",
            "Cloudinary",
            "Resend",
        ],

        // ────────────────────────────────────
        // Multimedia
        // ────────────────────────────────────

        heroImage:
            "/images/services/software/hero/hero-basic-directory.png",

        image:
            "/images/services/software/hero/hero-basic-directory.png",
    },

    translations: {
        es: {
            name: "Directorio Básico",

            title:
                "Directorio Básico",

            level: "🟠 Avanzado",

            category:
                "Directorios",

            description:
                "Sistema de directorio profesional con categorías organizadas, búsqueda textual, paginación y estructura relacional para administrar registros de negocios, servicios o entidades.",

            time: "6-8 semanas",

            imageAlt:
                "Sistema de directorio digital",

            target:
                "Empresas, comunidades, asociaciones y organizaciones que necesitan listar negocios, profesionales, servicios o recursos mediante una plataforma organizada.",

            support:
                "45 días soporte post-entrega",

            useCases: [
                "Directorios empresariales",
                "Listado de proveedores",
                "Directorio profesional",
                "Comunidades",
                "Guías comerciales",
                "Catálogos de servicios",
            ],

            includes: [
                "Listado de entidades",
                "Categorías",
                "Página individual",
                "Búsqueda textual",
                "Paginación",
                "Filtros básicos",
                "SEO técnico",
                "Diseño responsive",
                "Base de datos relacional",
            ],

            notIncludes: [
                "Mapas interactivos",
                "Geolocalización avanzada",
                "Filtros dinámicos complejos",
                "Actualización en tiempo real",
            ],

            features: [
                "Server-side Listing Processing",
                "Relational Database",
                "Text Search",
                "Category Routing",
                "Pagination",
                "Prisma ORM",
                "SEO Optimized",
                "Responsive Design",
            ],

            deliverables: [
                "Directorio publicado",
                "Código fuente",
                "Documentación técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Información organizada",

                    description:
                        "Permite estructurar miles de registros mediante categorías y relaciones eficientes.",
                },

                {
                    title:
                        "Búsqueda rápida",

                    description:
                        "Los usuarios pueden encontrar información relevante mediante consultas optimizadas.",
                },

                {
                    title:
                        "Base escalable",

                    description:
                        "La arquitectura permite evolucionar hacia un directorio con mapas y filtros avanzados.",
                },
            ],

            process: [
                {
                    title:
                        "Modelado de datos",

                    description:
                        "Definimos entidades, categorías, relaciones y estructura de búsqueda.",
                },

                {
                    title:
                        "Desarrollo",

                    description:
                        "Construimos el sistema utilizando Next.js, Prisma y PostgreSQL.",
                },

                {
                    title:
                        "Optimización",

                    description:
                        "Probamos rendimiento, búsquedas y experiencia de navegación antes del lanzamiento.",
                },
            ],

            faq: [
                {
                    question:
                        "¿Cuántos registros puede manejar?",

                    answer:
                        "La arquitectura está preparada para manejar grandes cantidades de registros mediante consultas optimizadas.",
                },

                {
                    question:
                        "¿Puedo agregar nuevas categorías?",

                    answer:
                        "Sí. El sistema está diseñado para crecer con nuevas categorías y tipos de entidades.",
                },

                {
                    question:
                        "¿Incluye mapas?",

                    answer:
                        "No en este plan. Los mapas interactivos y geolocalización avanzada pertenecen al plan Advanced Directory.",
                },
            ],
        },

        en: {
            name: "Basic Directory",

            title:
                "Basic Directory",

            level: "🟠 Advanced",

            category:
                "Directories",

            description:
                "Professional directory system with organized categories, text search, pagination and relational structures for managing businesses, services or entities.",

            time: "6-8 weeks",

            imageAlt:
                "Digital directory system",

            target:
                "Companies, communities and organizations needing to list businesses, professionals, services or resources through an organized platform.",

            support:
                "45 days post-delivery support",

            useCases: [
                "Business directories",
                "Professional listings",
                "Service directories",
                "Communities",
                "Commercial guides",
                "Resource catalogs",
            ],

            includes: [
                "Entity listings",
                "Categories",
                "Detail pages",
                "Text search",
                "Pagination",
                "Basic filters",
                "Technical SEO",
                "Responsive design",
                "Relational database",
            ],

            notIncludes: [
                "Interactive maps",
                "Advanced geolocation",
                "Complex filters",
                "Real-time updates",
            ],

            features: [
                "Server-side listing processing",
                "Relational database",
                "Text search",
                "Category routing",
                "Pagination",
                "Prisma ORM",
                "SEO optimized",
                "Responsive design",
            ],

            deliverables: [
                "Published directory",
                "Source code",
                "Technical documentation",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Organized information",

                    description:
                        "Manage thousands of records through structured categories and relationships.",
                },

                {
                    title:
                        "Fast discovery",

                    description:
                        "Users can quickly find relevant information through optimized search.",
                },

                {
                    title:
                        "Scalable foundation",

                    description:
                        "The architecture can evolve into an advanced directory with maps and complex filtering.",
                },
            ],

            process: [
                {
                    title:
                        "Data modeling",

                    description:
                        "We define entities, categories, relationships and search structures.",
                },

                {
                    title:
                        "Development",

                    description:
                        "We build the system using Next.js, Prisma and PostgreSQL.",
                },

                {
                    title:
                        "Optimization",

                    description:
                        "Performance and navigation experience are tested before launch.",
                },
            ],

            faq: [
                {
                    question:
                        "How many records can it handle?",

                    answer:
                        "The architecture supports large datasets through optimized relational queries.",
                },

                {
                    question:
                        "Can I add new categories?",

                    answer:
                        "Yes. The system is designed to expand with new categories and entity types.",
                },

                {
                    question:
                        "Does it include maps?",

                    answer:
                        "No. Interactive maps and advanced geolocation are included in the Advanced Directory plan.",
                },
            ],
        },
        pt: {
            name: "Diretório Básico",

            title: "Diretório Básico",

            level: "🟠 Avançado",

            category: "Diretórios",

            description:
                "Sistema de diretório profissional com categorias organizadas, busca textual, paginação e estrutura relacional para gerenciar registros de empresas, serviços ou entidades.",

            time: "6-8 semanas",

            imageAlt:
                "Sistema de diretório digital",

            target:
                "Empresas, comunidades, associações e organizações que precisam listar negócios, profissionais, serviços ou recursos por meio de uma plataforma organizada.",

            support:
                "45 dias de suporte pós-entrega",

            useCases: [
                "Diretórios empresariais",
                "Lista de fornecedores",
                "Diretório profissional",
                "Comunidades",
                "Guias comerciais",
                "Catálogos de serviços",
            ],

            includes: [
                "Lista de entidades",
                "Categorias",
                "Página individual",
                "Busca textual",
                "Paginação",
                "Filtros básicos",
                "SEO técnico",
                "Design responsivo",
                "Banco de dados relacional",
            ],

            notIncludes: [
                "Mapas interativos",
                "Geolocalização avançada",
                "Filtros dinâmicos complexos",
                "Atualização em tempo real",
            ],

            features: [
                "Server-side Listing Processing",
                "Relational Database",
                "Text Search",
                "Category Routing",
                "Pagination",
                "Prisma ORM",
                "SEO Optimized",
                "Responsive Design",
            ],

            deliverables: [
                "Diretório publicado",
                "Código-fonte",
                "Documentação técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Informações organizadas",

                    description:
                        "Permite estruturar milhares de registros por meio de categorias e relacionamentos eficientes.",
                },

                {
                    title:
                        "Busca rápida",

                    description:
                        "Os usuários podem encontrar informações relevantes por meio de consultas otimizadas.",
                },

                {
                    title:
                        "Base escalável",

                    description:
                        "A arquitetura permite evoluir para um diretório com mapas e filtros avançados.",
                },
            ],

            process: [
                {
                    title:
                        "Modelagem de dados",

                    description:
                        "Definimos entidades, categorias, relacionamentos e a estrutura de busca.",
                },

                {
                    title:
                        "Desenvolvimento",

                    description:
                        "Construímos o sistema utilizando Next.js, Prisma e PostgreSQL.",
                },

                {
                    title:
                        "Otimização",

                    description:
                        "Testamos desempenho, buscas e experiência de navegação antes do lançamento.",
                },
            ],

            faq: [
                {
                    question:
                        "Quantos registros o sistema pode gerenciar?",

                    answer:
                        "A arquitetura está preparada para gerenciar grandes quantidades de registros por meio de consultas otimizadas.",
                },

                {
                    question:
                        "Posso adicionar novas categorias?",

                    answer:
                        "Sim. O sistema foi desenvolvido para crescer com novas categorias e tipos de entidades.",
                },

                {
                    question:
                        "Inclui mapas?",

                    answer:
                        "Não neste plano. Mapas interativos e geolocalização avançada fazem parte do plano Advanced Directory.",
                },
            ],
        },
    },
};