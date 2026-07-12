import type {
    ServicePlan,
} from "@/types/plan.types";

export const enterpriseWebsite: ServicePlan = {
    core: {
        // ────────────────────────────────────
        // Identidad
        // ────────────────────────────────────

        id: "BIZ-002",

        slug: "enterprise-website",

        // ────────────────────────────────────
        // Comercial
        // ────────────────────────────────────

        complexity: "⭐⭐⭐⭐ (4/5)",

        price: "$1,000 - $1,500 USD",

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
            "SEO",
            "Dynamic Routing",
        ],

        integrations: [
            "Google Analytics",
            "Google Search Console",
            "Resend",
            "Google Maps",
            "Cloudinary",
        ],

        // ────────────────────────────────────
        // Multimedia
        // ────────────────────────────────────

        heroImage:
            "/images/services/software/hero/hero-enterprise-website.png",

        image:
            "/images/services/software/hero/hero-enterprise-website.png",
    },

    translations: {
        es: {
            name: "Portal Empresarial",

            title:
                "Portal Empresarial",

            level: "🟠 Avanzado",

            category:
                "Sitios Web Empresariales",

            description:
                "Portal corporativo de alto nivel diseñado para organizaciones con múltiples departamentos, servicios y estructuras de contenido dinámicas, optimizado para SEO, rendimiento y escalabilidad.",

            time: "5-8 semanas",

            imageAlt:
                "Portal web empresarial",

            target:
                "Empresas medianas y grandes, corporaciones, instituciones, universidades, organizaciones y compañías que requieren una plataforma web escalable con múltiples áreas de contenido.",

            support:
                "45 días soporte post-entrega",

            useCases: [
                "Corporaciones",
                "Empresas multinacionales",
                "Universidades",
                "Instituciones",
                "Empresas B2B",
                "Portales corporativos",
            ],

            includes: [
                "Página principal personalizada",
                "Departamentos",
                "Servicios",
                "Equipo",
                "Noticias",
                "Carreras",
                "Formulario de contacto",
                "Headless CMS",
                "SEO avanzado",
                "Responsive Design",
            ],

            notIncludes: [
                "Multi idioma dinámico",
                "Geolocalización",
                "Roles empresariales avanzados",
                "Motor de personalización",
            ],

            features: [
                "Headless CMS",
                "Prisma ORM",
                "Incremental Static Regeneration",
                "Dynamic Routing",
                "Deep Relational Pages",
                "Dynamic Filtering",
                "SEO Avanzado",
                "Performance optimizado",
            ],

            deliverables: [
                "Portal empresarial publicado",
                "Código fuente",
                "Documentación técnica",
                "Guía administrativa",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Arquitectura empresarial",

                    description:
                        "Organiza grandes cantidades de contenido mediante una estructura modular y preparada para crecer.",
                },

                {
                    title:
                        "Administración eficiente",

                    description:
                        "El contenido puede administrarse fácilmente mediante un CMS desacoplado adaptado a las necesidades del negocio.",
                },

                {
                    title:
                        "Escalabilidad",

                    description:
                        "Preparado para incorporar nuevas áreas, departamentos, servicios y contenido sin afectar el rendimiento.",
                },
            ],

            process: [
                {
                    title:
                        "Análisis funcional",

                    description:
                        "Definimos la arquitectura de contenidos, departamentos, servicios y navegación corporativa.",
                },

                {
                    title:
                        "Diseño y desarrollo",

                    description:
                        "Construimos el portal utilizando una arquitectura moderna basada en Next.js, ISR y Headless CMS.",
                },

                {
                    title:
                        "Pruebas y despliegue",

                    description:
                        "Validamos rendimiento, SEO, accesibilidad y seguridad antes de publicar el proyecto.",
                },
            ],

            faq: [
                {
                    question:
                        "¿Puedo administrar el contenido sin programar?",

                    answer:
                        "Sí. El proyecto está preparado para integrarse con un Headless CMS que facilita la administración del contenido.",
                },

                {
                    question:
                        "¿Puede manejar múltiples departamentos?",

                    answer:
                        "Sí. Está diseñado para organizar servicios, departamentos, noticias, equipos y otras áreas mediante una arquitectura escalable.",
                },

                {
                    question:
                        "¿Está optimizado para SEO?",

                    answer:
                        "Sí. Incluye optimización técnica, metadatos dinámicos, estructura semántica y buenas prácticas de posicionamiento.",
                },
            ],
        },

        en: {
            name: "Enterprise Website",

            title:
                "Enterprise Website",

            level: "🟠 Advanced",

            category:
                "Business Websites",

            description:
                "A scalable enterprise website designed for organizations with multiple departments, services and dynamic content structures, optimized for SEO, performance and long-term growth.",

            time: "5-8 weeks",

            imageAlt:
                "Enterprise business portal",

            target:
                "Medium and large companies, corporations, universities, institutions and organizations requiring a scalable business platform.",

            support:
                "45 days post-delivery support",

            useCases: [
                "Enterprise portals",
                "Corporations",
                "Universities",
                "Institutions",
                "Technology companies",
                "B2B businesses",
            ],

            includes: [
                "Custom homepage",
                "Departments",
                "Services",
                "Team pages",
                "News section",
                "Careers",
                "Contact forms",
                "Headless CMS",
                "Advanced SEO",
                "Responsive Design",
            ],

            notIncludes: [
                "Dynamic multilingual engine",
                "Geolocation rendering",
                "Advanced enterprise permissions",
                "Content personalization",
            ],

            features: [
                "Headless CMS",
                "Prisma ORM",
                "Incremental Static Regeneration",
                "Dynamic Routing",
                "Deep Relational Pages",
                "Dynamic Filtering",
                "Advanced SEO",
                "Optimized performance",
            ],

            deliverables: [
                "Published enterprise website",
                "Source code",
                "Technical documentation",
                "Administration guide",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Enterprise architecture",

                    description:
                        "Manage complex content structures through a modular and scalable architecture.",
                },

                {
                    title:
                        "Easy content management",

                    description:
                        "A Headless CMS allows your team to update content without touching the codebase.",
                },

                {
                    title:
                        "Built to scale",

                    description:
                        "Designed to support new departments, services and business areas as your organization grows.",
                },
            ],

            process: [
                {
                    title:
                        "Discovery",

                    description:
                        "We define the content architecture, navigation and organizational structure.",
                },

                {
                    title:
                        "Design & development",

                    description:
                        "The portal is developed using Next.js, ISR, Prisma and a Headless CMS architecture.",
                },

                {
                    title:
                        "Testing & deployment",

                    description:
                        "Performance, SEO, accessibility and security validations are completed before production release.",
                },
            ],

            faq: [
                {
                    question:
                        "Can my team manage the content?",

                    answer:
                        "Yes. The project is prepared for Headless CMS integration, allowing non-technical users to update content easily.",
                },

                {
                    question:
                        "Can it support multiple departments?",

                    answer:
                        "Absolutely. The architecture is designed to organize departments, services, teams, news and other business sections.",
                },

                {
                    question:
                        "Is it SEO optimized?",

                    answer:
                        "Yes. It includes technical SEO, dynamic metadata and performance optimizations following modern best practices.",
                },
            ],
        },
        pt: {
            name: "Portal Empresarial",

            title: "Portal Empresarial",

            level: "🟠 Avançado",

            category: "Sites Corporativos",

            description:
                "Portal corporativo de alto nível desenvolvido para organizações com múltiplos departamentos, serviços e estruturas dinâmicas de conteúdo, otimizado para SEO, desempenho e escalabilidade.",

            time: "5-8 semanas",

            imageAlt: "Portal web corporativo",

            target:
                "Empresas de médio e grande porte, corporações, instituições, universidades, organizações e companhias que necessitam de uma plataforma web escalável com múltiplas áreas de conteúdo.",

            support: "45 dias de suporte pós-entrega",

            useCases: [
                "Corporações",
                "Empresas multinacionais",
                "Universidades",
                "Instituições",
                "Empresas B2B",
                "Portais corporativos",
            ],

            includes: [
                "Página inicial personalizada",
                "Departamentos",
                "Serviços",
                "Equipe",
                "Notícias",
                "Carreiras",
                "Formulário de contato",
                "Headless CMS",
                "SEO avançado",
                "Design responsivo",
            ],

            notIncludes: [
                "Multilíngue dinâmico",
                "Geolocalização",
                "Funções empresariais avançadas",
                "Mecanismo de personalização",
            ],

            features: [
                "Headless CMS",
                "Prisma ORM",
                "Incremental Static Regeneration",
                "Dynamic Routing",
                "Deep Relational Pages",
                "Dynamic Filtering",
                "SEO avançado",
                "Desempenho otimizado",
            ],

            deliverables: [
                "Portal empresarial publicado",
                "Código-fonte",
                "Documentação técnica",
                "Guia administrativo",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Arquitetura empresarial",

                    description:
                        "Organize grandes volumes de conteúdo por meio de uma estrutura modular preparada para crescer.",
                },

                {
                    title: "Administração eficiente",

                    description:
                        "O conteúdo pode ser gerenciado facilmente por meio de um Headless CMS adaptado às necessidades do negócio.",
                },

                {
                    title: "Escalabilidade",

                    description:
                        "Preparado para incorporar novas áreas, departamentos, serviços e conteúdos sem comprometer o desempenho.",
                },
            ],

            process: [
                {
                    title: "Análise funcional",

                    description:
                        "Definimos a arquitetura de conteúdo, departamentos, serviços e a navegação corporativa.",
                },

                {
                    title: "Design e desenvolvimento",

                    description:
                        "Desenvolvemos o portal utilizando uma arquitetura moderna baseada em Next.js, ISR e Headless CMS.",
                },

                {
                    title: "Testes e implantação",

                    description:
                        "Validamos desempenho, SEO, acessibilidade e segurança antes de publicar o projeto.",
                },
            ],

            faq: [
                {
                    question: "Posso gerenciar o conteúdo sem programar?",

                    answer:
                        "Sim. O projeto está preparado para integração com um Headless CMS, facilitando o gerenciamento do conteúdo.",
                },

                {
                    question: "O portal pode gerenciar múltiplos departamentos?",

                    answer:
                        "Sim. Foi desenvolvido para organizar serviços, departamentos, notícias, equipes e outras áreas por meio de uma arquitetura escalável.",
                },

                {
                    question: "O portal é otimizado para SEO?",

                    answer:
                        "Sim. Inclui otimização técnica, metadados dinâmicos, estrutura semântica e boas práticas de posicionamento nos mecanismos de busca.",
                },
            ],
        },
    },
};