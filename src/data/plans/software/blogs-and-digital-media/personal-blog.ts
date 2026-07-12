import type {
    ServicePlan,
} from "@/types/plan.types";

export const personalBlog: ServicePlan = {
    core: {
        // ────────────────────────────────────
        // Identidad
        // ────────────────────────────────────

        id: "BLG-001",

        slug: "personal-blog",

        // ────────────────────────────────────
        // Comercial
        // ────────────────────────────────────

        complexity: "⭐⭐⭐ (3/5)",

        price: "$500 - $850 USD",

        pricingType: "fixed",

        automationLevel: "medium",

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
            "Markdown",
            "MDX",
            "Incremental Static Regeneration",
        ],

        integrations: [
            "Google Analytics",
            "Google Search Console",
            "Resend",
        ],

        // ────────────────────────────────────
        // Multimedia
        // ────────────────────────────────────

        heroImage:
            "/images/services/software/hero/hero-personal-blog.png",

        image:
            "/images/services/software/hero/hero-personal-blog.png",
    },

    translations: {
        es: {
            name: "Blog Personal",

            title:
                "Blog Personal",

            level: "🟡 Intermedio",

            category:
                "Blogs y Medios Digitales",

            description:
                "Blog profesional construido con Next.js y Markdown/MDX, optimizado para SEO, carga instantánea y publicación rápida de contenido mediante generación estática incremental.",

            time: "3-5 semanas",

            imageAlt:
                "Blog personal profesional",

            target:
                "Creadores de contenido, desarrolladores, escritores, consultores, educadores y profesionales que desean compartir conocimiento mediante un blog moderno.",

            support:
                "30 días soporte post-entrega",

            useCases: [
                "Blog personal",
                "Blog técnico",
                "Documentación",
                "Marca personal",
                "Contenido educativo",
                "Portafolio de artículos",
            ],

            includes: [
                "Página principal",
                "Listado de artículos",
                "Página individual",
                "Categorías",
                "Etiquetas",
                "Buscador",
                "SEO técnico",
                "Responsive Design",
                "Markdown / MDX",
            ],

            notIncludes: [
                "Múltiples autores",
                "Panel administrativo",
                "Base de datos",
                "Comentarios",
            ],

            features: [
                "Markdown",
                "MDX",
                "Tag Routing",
                "Text Search",
                "ISR",
                "SEO optimizado",
                "Carga instantánea",
                "Arquitectura escalable",
            ],

            deliverables: [
                "Blog publicado",
                "Código fuente",
                "Guía para publicar artículos",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Publicación sencilla",

                    description:
                        "Crea nuevos artículos utilizando archivos Markdown sin depender de una base de datos.",
                },

                {
                    title:
                        "Excelente rendimiento",

                    description:
                        "Las páginas se generan de forma estática ofreciendo tiempos de carga extremadamente rápidos.",
                },

                {
                    title:
                        "Mayor visibilidad",

                    description:
                        "La estructura está optimizada para SEO y facilita el posicionamiento del contenido en buscadores.",
                },
            ],

            process: [
                {
                    title:
                        "Planificación",

                    description:
                        "Definimos la estructura del blog, categorías, etiquetas y contenido inicial.",
                },

                {
                    title:
                        "Desarrollo",

                    description:
                        "Construimos una plataforma optimizada utilizando Next.js, Markdown y generación estática.",
                },

                {
                    title:
                        "Publicación",

                    description:
                        "Realizamos pruebas finales, optimizamos SEO y publicamos el sitio.",
                },
            ],

            faq: [
                {
                    question:
                        "¿Cómo publico nuevos artículos?",

                    answer:
                        "Solo debes agregar un nuevo archivo Markdown o MDX siguiendo la estructura del proyecto.",
                },

                {
                    question:
                        "¿Necesita una base de datos?",

                    answer:
                        "No. Todo el contenido se genera desde archivos locales para maximizar el rendimiento.",
                },

                {
                    question:
                        "¿Está optimizado para Google?",

                    answer:
                        "Sí. Incluye SEO técnico, metadatos dinámicos y generación estática incremental para una excelente indexación.",
                },
            ],
        },

        en: {
            name: "Personal Blog",

            title:
                "Personal Blog",

            level: "🟡 Intermediate",

            category:
                "Blogs & Digital Media",

            description:
                "Professional blog powered by Next.js and Markdown/MDX, optimized for SEO, instant loading and fast publishing using Incremental Static Regeneration.",

            time: "3-5 weeks",

            imageAlt:
                "Professional personal blog",

            target:
                "Content creators, developers, writers, consultants, educators and professionals looking to publish high-quality content.",

            support:
                "30 days post-delivery support",

            useCases: [
                "Personal blog",
                "Technical blog",
                "Knowledge base",
                "Personal branding",
                "Educational content",
                "Article portfolio",
            ],

            includes: [
                "Homepage",
                "Article listing",
                "Single article pages",
                "Categories",
                "Tags",
                "Search",
                "Technical SEO",
                "Responsive Design",
                "Markdown / MDX",
            ],

            notIncludes: [
                "Multiple authors",
                "Admin dashboard",
                "Database",
                "Comments",
            ],

            features: [
                "Markdown",
                "MDX",
                "Tag routing",
                "Text search",
                "ISR",
                "SEO optimized",
                "Instant loading",
                "Scalable architecture",
            ],

            deliverables: [
                "Published blog",
                "Source code",
                "Content publishing guide",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Simple publishing",

                    description:
                        "Create new articles using Markdown files without relying on a database.",
                },

                {
                    title:
                        "Outstanding performance",

                    description:
                        "Static generation ensures extremely fast loading speeds for every article.",
                },

                {
                    title:
                        "Better visibility",

                    description:
                        "The blog follows SEO best practices to maximize search engine visibility.",
                },
            ],

            process: [
                {
                    title:
                        "Planning",

                    description:
                        "We organize the content structure, categories and tagging strategy.",
                },

                {
                    title:
                        "Development",

                    description:
                        "We build a fast publishing platform using Next.js, Markdown and ISR.",
                },

                {
                    title:
                        "Deployment",

                    description:
                        "Performance and SEO are optimized before launching the blog.",
                },
            ],

            faq: [
                {
                    question:
                        "How do I publish new articles?",

                    answer:
                        "Simply create a new Markdown or MDX file following the project structure.",
                },

                {
                    question:
                        "Does it require a database?",

                    answer:
                        "No. All content is generated from local files to maximize performance.",
                },

                {
                    question:
                        "Is it SEO optimized?",

                    answer:
                        "Yes. The blog includes technical SEO, dynamic metadata and Incremental Static Regeneration.",
                },
            ],
        },
        pt: {
            name: "Blog Pessoal",

            title: "Blog Pessoal",

            level: "🟡 Intermediário",

            category: "Blogs e Mídias Digitais",

            description:
                "Blog profissional desenvolvido com Next.js e Markdown/MDX, otimizado para SEO, carregamento instantâneo e publicação rápida de conteúdo por meio de Incremental Static Regeneration.",

            time: "3-5 semanas",

            imageAlt: "Blog pessoal profissional",

            target:
                "Criadores de conteúdo, desenvolvedores, escritores, consultores, educadores e profissionais que desejam compartilhar conhecimento por meio de um blog moderno.",

            support: "30 dias de suporte pós-entrega",

            useCases: [
                "Blog pessoal",
                "Blog técnico",
                "Documentação",
                "Marca pessoal",
                "Conteúdo educacional",
                "Portfólio de artigos",
            ],

            includes: [
                "Página inicial",
                "Lista de artigos",
                "Página individual do artigo",
                "Categorias",
                "Tags",
                "Busca",
                "SEO técnico",
                "Design responsivo",
                "Markdown / MDX",
            ],

            notIncludes: [
                "Múltiplos autores",
                "Painel administrativo",
                "Banco de dados",
                "Comentários",
            ],

            features: [
                "Markdown",
                "MDX",
                "Tag Routing",
                "Text Search",
                "ISR",
                "SEO otimizado",
                "Carregamento instantâneo",
                "Arquitetura escalável",
            ],

            deliverables: [
                "Blog publicado",
                "Código-fonte",
                "Guia para publicação de artigos",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Publicação simples",

                    description:
                        "Crie novos artigos utilizando arquivos Markdown sem depender de um banco de dados.",
                },

                {
                    title: "Excelente desempenho",

                    description:
                        "As páginas são geradas estaticamente, proporcionando tempos de carregamento extremamente rápidos.",
                },

                {
                    title: "Maior visibilidade",

                    description:
                        "A estrutura é otimizada para SEO, facilitando o posicionamento do conteúdo nos mecanismos de busca.",
                },
            ],

            process: [
                {
                    title: "Planejamento",

                    description:
                        "Definimos a estrutura do blog, categorias, tags e o conteúdo inicial.",
                },

                {
                    title: "Desenvolvimento",

                    description:
                        "Desenvolvemos uma plataforma otimizada utilizando Next.js, Markdown e geração estática.",
                },

                {
                    title: "Publicação",

                    description:
                        "Realizamos os testes finais, otimizamos o SEO e publicamos o site.",
                },
            ],

            faq: [
                {
                    question: "Como publico novos artigos?",

                    answer:
                        "Basta adicionar um novo arquivo Markdown ou MDX seguindo a estrutura do projeto.",
                },

                {
                    question: "É necessário um banco de dados?",

                    answer:
                        "Não. Todo o conteúdo é gerado a partir de arquivos locais para maximizar o desempenho.",
                },

                {
                    question: "O blog é otimizado para o Google?",

                    answer:
                        "Sim. Inclui SEO técnico, metadados dinâmicos e Incremental Static Regeneration para garantir excelente indexação.",
                },
            ],
        },
    },
};