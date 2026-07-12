import type {
    ServicePlan,
} from "@/types/plan.types";

export const premiumCorporate: ServicePlan = {
    core: {
        // ────────────────────────────────────
        // Identidad
        // ────────────────────────────────────

        id: "BIZ-003",

        slug: "premium-corporate",

        // ────────────────────────────────────
        // Comercial
        // ────────────────────────────────────

        complexity: "⭐⭐⭐⭐⭐ (5/5)",

        price: "$1,500 - $2,500 USD",

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
            "ISR",
            "Headless CMS",
            "Prisma",
            "Internationalization",
            "Dynamic Routing",
            "Geolocation Rendering",
        ],

        integrations: [
            "Google Analytics",
            "Google Search Console",
            "Google Maps",
            "Cloudinary",
            "Resend",
        ],

        // ────────────────────────────────────
        // Multimedia
        // ────────────────────────────────────

        heroImage:
            "/images/services/software/hero/hero-premium-corporate.png",

        image:
            "/images/services/software/hero/hero-premium-corporate.png",
    },

    translations: {
        es: {
            name: "Sitio Web Corporativo Premium",

            title:
                "Sitio Web Corporativo Premium",

            level: "🔴 Premium",

            category:
                "Sitios Web Empresariales",

            description:
                "Plataforma corporativa de nivel enterprise diseñada para empresas internacionales con múltiples idiomas, contenido localizado, personalización por región y una arquitectura preparada para escalar a nivel global.",

            time: "8-12 semanas",

            imageAlt:
                "Sitio web corporativo premium",

            target:
                "Corporaciones internacionales, grupos empresariales, empresas multinacionales, compañías tecnológicas y organizaciones que requieren una presencia digital global.",

            support:
                "60 días soporte post-entrega",

            useCases: [
                "Corporaciones internacionales",
                "Empresas multinacionales",
                "Grupos empresariales",
                "Empresas SaaS",
                "Tecnología",
                "Organizaciones globales",
            ],

            includes: [
                "Página principal premium",
                "Múltiples departamentos",
                "Servicios corporativos",
                "Blog empresarial",
                "Centro de recursos",
                "Carreras",
                "Formulario inteligente",
                "Motor multilenguaje",
                "SEO internacional",
                "Headless CMS",
            ],

            notIncludes: [
                "ERP",
                "CRM empresarial",
                "Marketplace",
                "Intranet corporativa",
            ],

            features: [
                "Dynamic Multi-language",
                "International SEO",
                "Geolocation Rendering",
                "Prisma ORM",
                "Headless CMS",
                "ISR",
                "Performance +95",
                "Dynamic Metadata",
            ],

            deliverables: [
                "Sitio corporativo publicado",
                "Código fuente",
                "Documentación técnica",
                "Manual administrativo",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Presencia internacional",

                    description:
                        "Ofrece una experiencia localizada para diferentes países e idiomas desde una única plataforma.",
                },

                {
                    title:
                        "Arquitectura Enterprise",

                    description:
                        "Preparado para manejar grandes volúmenes de contenido, múltiples departamentos y crecimiento continuo.",
                },

                {
                    title:
                        "SEO Global",

                    description:
                        "Implementación de estrategias de SEO internacional, metadatos dinámicos e indexación por idioma y región.",
                },
            ],

            process: [
                {
                    title:
                        "Consultoría estratégica",

                    description:
                        "Analizamos la estructura corporativa, mercados objetivo y estrategia internacional del negocio.",
                },

                {
                    title:
                        "Arquitectura y desarrollo",

                    description:
                        "Diseñamos una plataforma escalable con internacionalización, contenido dinámico y una experiencia premium.",
                },

                {
                    title:
                        "Optimización y lanzamiento",

                    description:
                        "Realizamos auditorías de rendimiento, SEO, accesibilidad y calidad antes de la puesta en producción.",
                },
            ],

            faq: [
                {
                    question:
                        "¿Puede mostrar contenido diferente según el país?",

                    answer:
                        "Sí. Es posible personalizar contenido, idioma, metadatos y experiencia dependiendo de la ubicación del visitante.",
                },

                {
                    question:
                        "¿Cuántos idiomas soporta?",

                    answer:
                        "La arquitectura está preparada para soportar múltiples idiomas y seguir creciendo conforme la empresa se expanda.",
                },

                {
                    question:
                        "¿Está preparado para SEO internacional?",

                    answer:
                        "Sí. Implementamos buenas prácticas como metadatos localizados, URLs internacionales, etiquetas hreflang y optimización para buscadores globales.",
                },
            ],
        },

        en: {
            name: "Premium Corporate Website",

            title:
                "Premium Corporate Website",

            level: "🔴 Premium",

            category:
                "Business Websites",

            description:
                "Enterprise-grade corporate platform built for international companies requiring multilingual content, localized experiences and a highly scalable architecture.",

            time: "8-12 weeks",

            imageAlt:
                "Premium corporate website",

            target:
                "International corporations, multinational companies, enterprise organizations and technology businesses operating across multiple regions.",

            support:
                "60 days post-delivery support",

            useCases: [
                "International corporations",
                "Enterprise companies",
                "Technology businesses",
                "Global organizations",
                "Corporate groups",
                "SaaS companies",
            ],

            includes: [
                "Premium homepage",
                "Corporate departments",
                "Services",
                "Business blog",
                "Resource center",
                "Careers",
                "Smart contact forms",
                "Multilingual engine",
                "International SEO",
                "Headless CMS",
            ],

            notIncludes: [
                "ERP",
                "Enterprise CRM",
                "Marketplace",
                "Corporate intranet",
            ],

            features: [
                "Dynamic multilingual engine",
                "International SEO",
                "Geolocation rendering",
                "Prisma ORM",
                "Headless CMS",
                "ISR",
                "95+ Lighthouse score",
                "Dynamic metadata",
            ],

            deliverables: [
                "Published enterprise website",
                "Source code",
                "Technical documentation",
                "Administration manual",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Global digital presence",

                    description:
                        "Deliver localized experiences for multiple countries and languages through a single scalable platform.",
                },

                {
                    title:
                        "Enterprise architecture",

                    description:
                        "Designed to support large organizations with extensive content and continuous growth.",
                },

                {
                    title:
                        "International SEO",

                    description:
                        "Built with multilingual SEO, localized metadata and regional indexing best practices.",
                },
            ],

            process: [
                {
                    title:
                        "Strategic consulting",

                    description:
                        "We define the international architecture, business goals and localization strategy.",
                },

                {
                    title:
                        "Architecture & development",

                    description:
                        "We build a scalable multilingual platform with premium UX and enterprise-grade architecture.",
                },

                {
                    title:
                        "Optimization & deployment",

                    description:
                        "Performance, SEO and accessibility audits are completed before production deployment.",
                },
            ],

            faq: [
                {
                    question:
                        "Can the website display different content based on the visitor's country?",

                    answer:
                        "Yes. The platform can deliver localized content, metadata and user experiences according to the visitor's region.",
                },

                {
                    question:
                        "How many languages are supported?",

                    answer:
                        "The architecture supports multiple languages and can easily expand as your business grows internationally.",
                },

                {
                    question:
                        "Is it optimized for international SEO?",

                    answer:
                        "Yes. We implement multilingual SEO best practices including localized metadata, hreflang tags and regional URL strategies.",
                },
            ],
        },
        pt: {
            name: "Site Corporativo Premium",

            title: "Site Corporativo Premium",

            level: "🔴 Premium",

            category: "Sites Corporativos",

            description:
                "Plataforma corporativa de nível enterprise desenvolvida para empresas internacionais, com múltiplos idiomas, conteúdo localizado, personalização por região e uma arquitetura preparada para escalar globalmente.",

            time: "8-12 semanas",

            imageAlt: "Site corporativo premium",

            target:
                "Corporações internacionais, grupos empresariais, empresas multinacionais, companhias de tecnologia e organizações que necessitam de uma presença digital global.",

            support: "60 dias de suporte pós-entrega",

            useCases: [
                "Corporações internacionais",
                "Empresas multinacionais",
                "Grupos empresariais",
                "Empresas SaaS",
                "Tecnologia",
                "Organizações globais",
            ],

            includes: [
                "Página inicial premium",
                "Múltiplos departamentos",
                "Serviços corporativos",
                "Blog corporativo",
                "Central de recursos",
                "Carreiras",
                "Formulário inteligente",
                "Motor multilíngue",
                "SEO internacional",
                "Headless CMS",
            ],

            notIncludes: [
                "ERP",
                "CRM corporativo",
                "Marketplace",
                "Intranet corporativa",
            ],

            features: [
                "Dynamic Multi-language",
                "International SEO",
                "Geolocation Rendering",
                "Prisma ORM",
                "Headless CMS",
                "ISR",
                "Performance +95",
                "Dynamic Metadata",
            ],

            deliverables: [
                "Site corporativo publicado",
                "Código-fonte",
                "Documentação técnica",
                "Manual administrativo",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Presença internacional",

                    description:
                        "Ofereça uma experiência localizada para diferentes países e idiomas a partir de uma única plataforma.",
                },

                {
                    title: "Arquitetura Enterprise",

                    description:
                        "Preparada para gerenciar grandes volumes de conteúdo, múltiplos departamentos e crescimento contínuo.",
                },

                {
                    title: "SEO Global",

                    description:
                        "Implementação de estratégias de SEO internacional, metadados dinâmicos e indexação por idioma e região.",
                },
            ],

            process: [
                {
                    title: "Consultoria estratégica",

                    description:
                        "Analisamos a estrutura corporativa, os mercados-alvo e a estratégia internacional da empresa.",
                },

                {
                    title: "Arquitetura e desenvolvimento",

                    description:
                        "Projetamos uma plataforma escalável com internacionalização, conteúdo dinâmico e uma experiência premium.",
                },

                {
                    title: "Otimização e lançamento",

                    description:
                        "Realizamos auditorias de desempenho, SEO, acessibilidade e qualidade antes da publicação em produção.",
                },
            ],

            faq: [
                {
                    question:
                        "O site pode exibir conteúdos diferentes de acordo com o país?",

                    answer:
                        "Sim. É possível personalizar conteúdo, idioma, metadados e a experiência do usuário conforme a localização do visitante.",
                },

                {
                    question:
                        "Quantos idiomas são suportados?",

                    answer:
                        "A arquitetura está preparada para suportar múltiplos idiomas e continuar crescendo à medida que a empresa se expande.",
                },

                {
                    question:
                        "O site está preparado para SEO internacional?",

                    answer:
                        "Sim. Implementamos boas práticas como metadados localizados, URLs internacionais, tags hreflang e otimização para mecanismos de busca globais.",
                },
            ],
        },
    },
};