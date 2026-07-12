import type {
    ServicePlan,
} from "@/types/plan.types";

export const digitalMagazine: ServicePlan = {
    core: {
        // ────────────────────────────────────
        // Identidad
        // ────────────────────────────────────

        id: "BLG-003",

        slug: "digital-magazine",

        // ────────────────────────────────────
        // Comercial
        // ────────────────────────────────────

        complexity: "⭐⭐⭐⭐⭐ (5/5)",

        price: "$1,500 - $2,250 USD",

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
            "Web Push API",
            "Content Management",
            "Analytics",
        ],

        integrations: [
            "Google Analytics",
            "Google Search Console",
            "Resend",
            "Cloudinary",
            "Web Push Notification API",
        ],

        // ────────────────────────────────────
        // Multimedia
        // ────────────────────────────────────

        heroImage:
            "/images/services/software/hero/hero-digital-magazine.png",

        image:
            "/images/services/software/hero/hero-digital-magazine.png",
    },

    translations: {
        es: {
            name: "Revista Digital",

            title:
                "Revista Digital",

            level: "🔴 Premium",

            category:
                "Blogs y Medios Digitales",

            description:
                "Plataforma editorial digital de alto rendimiento diseñada para medios, publicaciones y organizaciones que necesitan administrar grandes volúmenes de contenido con layouts avanzados, banners dinámicos y comunicación directa con sus lectores.",

            time: "8-12 semanas",

            imageAlt:
                "Revista digital profesional",

            target:
                "Medios digitales, revistas online, empresas editoriales, organizaciones de noticias y marcas con estrategias avanzadas de contenido.",

            support:
                "60 días soporte post-entrega",

            useCases: [
                "Revistas digitales",
                "Medios online",
                "Portales de noticias",
                "Publicaciones empresariales",
                "Contenido editorial",
                "Comunidades digitales",
            ],

            includes: [
                "Homepage editorial",
                "Categorías avanzadas",
                "Artículos destacados",
                "Autores",
                "Etiquetas",
                "Buscador avanzado",
                "Gestión de banners",
                "SEO avanzado",
                "Sistema de notificaciones",
                "Diseño responsive",
            ],

            notIncludes: [
                "Marketplace",
                "Sistema de suscripciones premium",
                "Paywall",
                "CMS externo completo",
            ],

            features: [
                "High Traffic Layouts",
                "Advanced Banner Management",
                "Web Push Notifications",
                "Prisma ORM",
                "ISR",
                "Dynamic Content",
                "Analytics Integration",
                "Performance Optimization",
            ],

            deliverables: [
                "Revista digital publicada",
                "Código fuente",
                "Documentación técnica",
                "Manual administrativo",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Preparado para alto tráfico",

                    description:
                        "Arquitectura optimizada para manejar grandes cantidades de visitantes y publicaciones simultáneas.",
                },

                {
                    title:
                        "Mayor monetización",

                    description:
                        "Permite administrar espacios publicitarios mediante banners dinámicos y configurables.",
                },

                {
                    title:
                        "Conexión con lectores",

                    description:
                        "Las notificaciones push permiten enviar novedades directamente a los usuarios.",
                },
            ],

            process: [
                {
                    title:
                        "Arquitectura editorial",

                    description:
                        "Diseñamos la estructura del medio, categorías, publicaciones, autores y flujo de contenido.",
                },

                {
                    title:
                        "Desarrollo avanzado",

                    description:
                        "Implementamos layouts editoriales, gestión dinámica de banners, contenido y notificaciones push.",
                },

                {
                    title:
                        "Optimización y lanzamiento",

                    description:
                        "Realizamos pruebas de rendimiento, SEO, experiencia de usuario y estabilidad antes de producción.",
                },
            ],

            faq: [
                {
                    question:
                        "¿Puede soportar miles de artículos?",

                    answer:
                        "Sí. La arquitectura está diseñada para manejar grandes volúmenes de contenido mediante generación incremental y estructuras optimizadas.",
                },

                {
                    question:
                        "¿Puedo administrar espacios publicitarios?",

                    answer:
                        "Sí. Incluye una estructura preparada para gestionar banners y ubicaciones publicitarias dinámicas.",
                },

                {
                    question:
                        "¿Permite enviar notificaciones a usuarios?",

                    answer:
                        "Sí. Puede integrarse Web Push Notification API para enviar alertas sobre nuevos artículos o publicaciones importantes.",
                },
            ],
        },

        en: {
            name: "Digital Magazine",

            title:
                "Digital Magazine",

            level: "🔴 Premium",

            category:
                "Blogs & Digital Media",

            description:
                "High-performance digital publishing platform designed for media companies and organizations managing large content volumes with advanced layouts, dynamic banners and direct reader communication.",

            time: "8-12 weeks",

            imageAlt:
                "Professional digital magazine",

            target:
                "Digital media companies, online magazines, publishers, news organizations and brands with advanced content strategies.",

            support:
                "60 days post-delivery support",

            useCases: [
                "Digital magazines",
                "Online media",
                "News portals",
                "Corporate publications",
                "Editorial platforms",
                "Digital communities",
            ],

            includes: [
                "Editorial homepage",
                "Advanced categories",
                "Featured articles",
                "Authors",
                "Tags",
                "Advanced search",
                "Banner management",
                "Advanced SEO",
                "Notification system",
                "Responsive design",
            ],

            notIncludes: [
                "Marketplace",
                "Premium subscriptions",
                "Paywall",
                "External full CMS",
            ],

            features: [
                "High traffic layouts",
                "Advanced banner management",
                "Web Push notifications",
                "Prisma ORM",
                "ISR",
                "Dynamic content",
                "Analytics integration",
                "Performance optimization",
            ],

            deliverables: [
                "Published digital magazine",
                "Source code",
                "Technical documentation",
                "Administration manual",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "High traffic ready",

                    description:
                        "Optimized architecture capable of supporting large audiences and frequent publishing.",
                },

                {
                    title:
                        "Advertising capabilities",

                    description:
                        "Dynamic banner management enables flexible monetization opportunities.",
                },

                {
                    title:
                        "Direct audience connection",

                    description:
                        "Push notifications allow publishers to engage readers instantly.",
                },
            ],

            process: [
                {
                    title:
                        "Editorial architecture",

                    description:
                        "We define the content structure, categories, authors and publishing workflow.",
                },

                {
                    title:
                        "Advanced development",

                    description:
                        "We implement editorial layouts, dynamic banners, content management and push notifications.",
                },

                {
                    title:
                        "Optimization & launch",

                    description:
                        "Performance, SEO, usability and stability are validated before production release.",
                },
            ],

            faq: [
                {
                    question:
                        "Can it handle thousands of articles?",

                    answer:
                        "Yes. The architecture is designed for large content volumes using incremental generation and optimized data structures.",
                },

                {
                    question:
                        "Can advertising spaces be managed?",

                    answer:
                        "Yes. The platform supports configurable dynamic banner placements.",
                },

                {
                    question:
                        "Can it send notifications to readers?",

                    answer:
                        "Yes. Web Push Notification API integration allows sending alerts about new articles and updates.",
                },
            ],
        },
        pt: {
            name: "Revista Digital",

            title: "Revista Digital",

            level: "🔴 Premium",

            category: "Blogs e Mídias Digitais",

            description:
                "Plataforma editorial digital de alto desempenho desenvolvida para mídias, publicações e organizações que precisam gerenciar grandes volumes de conteúdo com layouts avançados, banners dinâmicos e comunicação direta com seus leitores.",

            time: "8-12 semanas",

            imageAlt:
                "Revista digital profissional",

            target:
                "Mídias digitais, revistas online, empresas editoriais, organizações de notícias e marcas com estratégias avançadas de conteúdo.",

            support:
                "60 dias de suporte pós-entrega",

            useCases: [
                "Revistas digitais",
                "Mídias online",
                "Portais de notícias",
                "Publicações empresariais",
                "Conteúdo editorial",
                "Comunidades digitais",
            ],

            includes: [
                "Homepage editorial",
                "Categorias avançadas",
                "Artigos em destaque",
                "Autores",
                "Tags",
                "Busca avançada",
                "Gerenciamento de banners",
                "SEO avançado",
                "Sistema de notificações",
                "Design responsivo",
            ],

            notIncludes: [
                "Marketplace",
                "Sistema de assinaturas premium",
                "Paywall",
                "CMS externo completo",
            ],

            features: [
                "High Traffic Layouts",
                "Advanced Banner Management",
                "Web Push Notifications",
                "Prisma ORM",
                "ISR",
                "Dynamic Content",
                "Analytics Integration",
                "Performance Optimization",
            ],

            deliverables: [
                "Revista digital publicada",
                "Código-fonte",
                "Documentação técnica",
                "Manual administrativo",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Preparada para alto tráfego",

                    description:
                        "Arquitetura otimizada para gerenciar grandes quantidades de visitantes e publicações simultâneas.",
                },

                {
                    title:
                        "Maior monetização",

                    description:
                        "Permite gerenciar espaços publicitários por meio de banners dinâmicos e configuráveis.",
                },

                {
                    title:
                        "Conexão com leitores",

                    description:
                        "As notificações push permitem enviar novidades diretamente aos usuários.",
                },
            ],

            process: [
                {
                    title:
                        "Arquitetura editorial",

                    description:
                        "Projetamos a estrutura da mídia, categorias, publicações, autores e fluxo de conteúdo.",
                },

                {
                    title:
                        "Desenvolvimento avançado",

                    description:
                        "Implementamos layouts editoriais, gerenciamento dinâmico de banners, conteúdos e notificações push.",
                },

                {
                    title:
                        "Otimização e lançamento",

                    description:
                        "Realizamos testes de desempenho, SEO, experiência do usuário e estabilidade antes da publicação em produção.",
                },
            ],

            faq: [
                {
                    question:
                        "Pode suportar milhares de artigos?",

                    answer:
                        "Sim. A arquitetura foi desenvolvida para gerenciar grandes volumes de conteúdo utilizando geração incremental e estruturas otimizadas.",
                },

                {
                    question:
                        "Posso gerenciar espaços publicitários?",

                    answer:
                        "Sim. Inclui uma estrutura preparada para gerenciar banners e posições publicitárias dinâmicas.",
                },

                {
                    question:
                        "Permite enviar notificações aos usuários?",

                    answer:
                        "Sim. Pode ser integrada a Web Push Notification API para enviar alertas sobre novos artigos ou publicações importantes.",
                },
            ],
        },
    },
};