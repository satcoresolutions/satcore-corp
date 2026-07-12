import type {
    ServicePlan,
} from "@/types/plan.types";

export const corporateBlog: ServicePlan = {
    core: {
        // ────────────────────────────────────
        // Identidad
        // ────────────────────────────────────

        id: "BLG-002",

        slug: "corporate-blog",

        // ────────────────────────────────────
        // Comercial
        // ────────────────────────────────────

        complexity: "⭐⭐⭐⭐ (4/5)",

        price: "$850 - $1,350 USD",

        pricingType: "fixed",

        automationLevel: "high",

        // ────────────────────────────────────
        // Técnico
        // ────────────────────────────────────

        stack: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
        ],

        technologies: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Prisma",
            "Incremental Static Regeneration",
            "Role-based Content",
            "Analytics Dashboard",
        ],

        integrations: [
            "Google Analytics",
            "Google Search Console",
            "Resend",
            "Cloudinary",
        ],

        // ────────────────────────────────────
        // Multimedia
        // ────────────────────────────────────

        heroImage:
            "/images/services/software/hero/hero-corporate-blog.png",

        image:
            "/images/services/software/hero/hero-corporate-blog.png",
    },

    translations: {
        es: {
            name: "Blog Corporativo",

            title:
                "Blog Corporativo",

            level: "🟠 Avanzado",

            category:
                "Blogs y Medios Digitales",

            description:
                "Plataforma editorial diseñada para empresas que necesitan administrar contenido mediante múltiples autores, base de datos relacional, paneles analíticos y una arquitectura optimizada para SEO.",

            time: "5-7 semanas",

            imageAlt:
                "Blog corporativo profesional",

            target:
                "Empresas, agencias, startups, organizaciones y equipos de marketing que publican contenido de forma continua y requieren colaboración entre varios autores.",

            support:
                "45 días soporte post-entrega",

            useCases: [
                "Marketing de contenidos",
                "Blog empresarial",
                "Noticias corporativas",
                "Centro de recursos",
                "Inbound Marketing",
                "Knowledge Base",
            ],

            includes: [
                "Página principal",
                "Listado de artículos",
                "Página de artículo",
                "Categorías",
                "Etiquetas",
                "Buscador",
                "Autores",
                "Base de datos Prisma",
                "SEO avanzado",
                "Responsive Design",
            ],

            notIncludes: [
                "Revista digital",
                "Notificaciones Push",
                "Publicidad dinámica",
                "Gestión editorial avanzada",
            ],

            features: [
                "Prisma ORM",
                "Multiple Authors",
                "Role-based Content",
                "Analytics Dashboard",
                "ISR",
                "Advanced SEO",
                "Dynamic Routing",
                "Fast Loading",
            ],

            deliverables: [
                "Blog corporativo publicado",
                "Código fuente",
                "Documentación técnica",
                "Guía de administración",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Colaboración entre equipos",

                    description:
                        "Permite que varios autores publiquen contenido manteniendo una estructura organizada y consistente.",
                },

                {
                    title:
                        "Contenido administrable",

                    description:
                        "Toda la información puede almacenarse en una base de datos para facilitar la administración y el crecimiento del proyecto.",
                },

                {
                    title:
                        "Mayor alcance",

                    description:
                        "Una estrategia SEO sólida y una arquitectura optimizada ayudan a incrementar el tráfico orgánico.",
                },
            ],

            process: [
                {
                    title:
                        "Arquitectura editorial",

                    description:
                        "Definimos categorías, autores, estructura de contenido y estrategia SEO.",
                },

                {
                    title:
                        "Desarrollo",

                    description:
                        "Construimos la plataforma utilizando Next.js, Prisma e Incremental Static Regeneration.",
                },

                {
                    title:
                        "Optimización y lanzamiento",

                    description:
                        "Realizamos pruebas de rendimiento, SEO y experiencia de usuario antes de publicar el sitio.",
                },
            ],

            faq: [
                {
                    question:
                        "¿Puede tener varios autores?",

                    answer:
                        "Sí. El sistema está preparado para administrar publicaciones realizadas por múltiples autores o equipos editoriales.",
                },

                {
                    question:
                        "¿Los artículos se almacenan en una base de datos?",

                    answer:
                        "Sí. Este plan utiliza Prisma para gestionar el contenido mediante una base de datos relacional.",
                },

                {
                    question:
                        "¿Incluye estadísticas del blog?",

                    answer:
                        "Sí. Puede integrarse con herramientas analíticas para medir visitas, comportamiento de usuarios y rendimiento del contenido.",
                },
            ],
        },

        en: {
            name: "Corporate Blog",

            title:
                "Corporate Blog",

            level: "🟠 Advanced",

            category:
                "Blogs & Digital Media",

            description:
                "Professional publishing platform designed for businesses requiring multiple authors, relational database storage, analytics integration and an SEO-focused architecture.",

            time: "5-7 weeks",

            imageAlt:
                "Professional corporate blog",

            target:
                "Companies, agencies, startups and marketing teams publishing content regularly with multiple contributors.",

            support:
                "45 days post-delivery support",

            useCases: [
                "Content marketing",
                "Company blog",
                "Corporate news",
                "Resource center",
                "Inbound marketing",
                "Knowledge base",
            ],

            includes: [
                "Homepage",
                "Article listing",
                "Article pages",
                "Categories",
                "Tags",
                "Search",
                "Author profiles",
                "Prisma database",
                "Advanced SEO",
                "Responsive Design",
            ],

            notIncludes: [
                "Digital magazine",
                "Push notifications",
                "Dynamic advertising",
                "Advanced editorial workflow",
            ],

            features: [
                "Prisma ORM",
                "Multiple authors",
                "Role-based content",
                "Analytics dashboard",
                "ISR",
                "Advanced SEO",
                "Dynamic routing",
                "Fast loading",
            ],

            deliverables: [
                "Published corporate blog",
                "Source code",
                "Technical documentation",
                "Administration guide",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Team collaboration",

                    description:
                        "Multiple writers can publish content while maintaining a consistent editorial structure.",
                },

                {
                    title:
                        "Structured content management",

                    description:
                        "A relational database makes it easy to organize, update and scale your content over time.",
                },

                {
                    title:
                        "Better organic visibility",

                    description:
                        "Advanced SEO and a performant architecture help increase search engine traffic.",
                },
            ],

            process: [
                {
                    title:
                        "Editorial planning",

                    description:
                        "We define categories, author roles, content structure and SEO strategy.",
                },

                {
                    title:
                        "Development",

                    description:
                        "The platform is built using Next.js, Prisma and Incremental Static Regeneration.",
                },

                {
                    title:
                        "Optimization & deployment",

                    description:
                        "Performance, SEO and usability are validated before production deployment.",
                },
            ],

            faq: [
                {
                    question:
                        "Can multiple authors publish articles?",

                    answer:
                        "Yes. The platform supports multiple contributors with an organized publishing workflow.",
                },

                {
                    question:
                        "Are articles stored in a database?",

                    answer:
                        "Yes. Content is managed through a relational database using Prisma ORM.",
                },

                {
                    question:
                        "Does it include analytics?",

                    answer:
                        "Yes. It can integrate with analytics tools to monitor traffic, user behavior and content performance.",
                },
            ],
        },
        pt: {
            name: "Blog Corporativo",

            title: "Blog Corporativo",

            level: "🟠 Avançado",

            category: "Blogs e Mídias Digitais",

            description:
                "Plataforma editorial desenvolvida para empresas que precisam gerenciar conteúdo com múltiplos autores, banco de dados relacional, painéis analíticos e uma arquitetura otimizada para SEO.",

            time: "5-7 semanas",

            imageAlt:
                "Blog corporativo profissional",

            target:
                "Empresas, agências, startups, organizações e equipes de marketing que publicam conteúdo continuamente e precisam de colaboração entre vários autores.",

            support:
                "45 dias de suporte pós-entrega",

            useCases: [
                "Marketing de conteúdo",
                "Blog empresarial",
                "Notícias corporativas",
                "Central de recursos",
                "Inbound Marketing",
                "Knowledge Base",
            ],

            includes: [
                "Página inicial",
                "Lista de artigos",
                "Página do artigo",
                "Categorias",
                "Tags",
                "Busca",
                "Autores",
                "Banco de dados Prisma",
                "SEO avançado",
                "Design responsivo",
            ],

            notIncludes: [
                "Revista digital",
                "Notificações Push",
                "Publicidade dinâmica",
                "Gestão editorial avançada",
            ],

            features: [
                "Prisma ORM",
                "Multiple Authors",
                "Role-based Content",
                "Analytics Dashboard",
                "ISR",
                "Advanced SEO",
                "Dynamic Routing",
                "Fast Loading",
            ],

            deliverables: [
                "Blog corporativo publicado",
                "Código-fonte",
                "Documentação técnica",
                "Guia de administração",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Colaboração entre equipes",

                    description:
                        "Permite que vários autores publiquem conteúdo mantendo uma estrutura organizada e consistente.",
                },

                {
                    title:
                        "Conteúdo administrável",

                    description:
                        "Todas as informações podem ser armazenadas em um banco de dados para facilitar o gerenciamento e o crescimento do projeto.",
                },

                {
                    title:
                        "Maior alcance",

                    description:
                        "Uma estratégia sólida de SEO e uma arquitetura otimizada ajudam a aumentar o tráfego orgânico.",
                },
            ],

            process: [
                {
                    title:
                        "Arquitetura editorial",

                    description:
                        "Definimos categorias, autores, estrutura de conteúdo e estratégia de SEO.",
                },

                {
                    title:
                        "Desenvolvimento",

                    description:
                        "Construímos a plataforma utilizando Next.js, Prisma e Incremental Static Regeneration.",
                },

                {
                    title:
                        "Otimização e lançamento",

                    description:
                        "Realizamos testes de desempenho, SEO e experiência do usuário antes de publicar o site.",
                },
            ],

            faq: [
                {
                    question:
                        "Pode ter vários autores?",

                    answer:
                        "Sim. O sistema está preparado para gerenciar publicações realizadas por múltiplos autores ou equipes editoriais.",
                },

                {
                    question:
                        "Os artigos são armazenados em um banco de dados?",

                    answer:
                        "Sim. Este plano utiliza Prisma para gerenciar o conteúdo por meio de um banco de dados relacional.",
                },

                {
                    question:
                        "Inclui estatísticas do blog?",

                    answer:
                        "Sim. Pode ser integrado com ferramentas analíticas para medir visitas, comportamento dos usuários e desempenho do conteúdo.",
                },
            ],
        },
    },
};