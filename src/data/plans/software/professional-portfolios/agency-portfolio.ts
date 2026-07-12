import type {
    ServicePlan,
} from "@/types/plan.types";

export const agencyPortfolio: ServicePlan = {
    core: {
        // ────────────────────────────────────
        // Identidad
        // ────────────────────────────────────

        id: "PRT-003",

        slug: "agency-portfolio",

        // ────────────────────────────────────
        // Comercial
        // ────────────────────────────────────

        complexity: "⭐⭐⭐⭐ (4/5)",

        price: "$850 - $1,250 USD",

        pricingType: "fixed",

        automationLevel: "high",

        // ────────────────────────────────────
        // Técnico
        // ────────────────────────────────────

        stack: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion",
        ],

        technologies: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion",
            "PWA",
            "Static Site Generation",
            "Incremental Static Regeneration",
            "Dynamic Routing",
            "Page Transitions",
        ],

        integrations: [
            "Google Analytics",
            "Google Search Console",
            "Resend",
            "Google Maps",
        ],

        // ────────────────────────────────────
        // Multimedia
        // ────────────────────────────────────

        heroImage:
            "/images/services/software/hero/hero-agency-portfolio.png",

        image:
            "/images/services/software/hero/hero-agency-portfolio.png",
    },

    translations: {
        es: {
            name: "Portafolio para Agencia",

            title:
                "Portafolio para Agencia",

            level: "🔴 Premium",

            category:
                "Portafolios Profesionales",

            description:
                "Portafolio premium para agencias digitales, estudios creativos y software houses con navegación avanzada, múltiples categorías de proyectos, transiciones fluidas y una arquitectura escalable orientada al máximo rendimiento.",

            time: "5-8 semanas",

            imageAlt:
                "Portafolio premium para agencia digital",

            target:
                "Agencias digitales, estudios de diseño, software houses, empresas tecnológicas y equipos creativos que necesitan presentar múltiples servicios, proyectos y casos de éxito bajo una experiencia premium.",

            support:
                "45 días soporte post-entrega",

            useCases: [
                "Agencias digitales",
                "Software Houses",
                "Estudios creativos",
                "Empresas de tecnología",
                "Consultoras",
                "Product Studios",
            ],

            includes: [
                "Página principal premium",
                "Portafolio por categorías",
                "Case Studies avanzados",
                "Servicios",
                "Equipo",
                "Testimonios",
                "Formulario de contacto",
                "Animaciones premium",
                "Rutas dinámicas",
                "PWA instalable",
            ],

            notIncludes: [
                "CMS Headless",
                "Panel administrativo",
                "Autenticación",
                "Marketplace",
            ],

            features: [
                "Framer Motion avanzado",
                "Page Transitions",
                "Dynamic Routing",
                "Multi Category Portfolio",
                "PWA",
                "Performance +95",
                "SEO avanzado",
                "Core Web Vitals optimizados",
            ],

            deliverables: [
                "Portafolio corporativo publicado",
                "Código fuente",
                "Documentación técnica",
                "Guía de actualización",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Experiencia de alto nivel",

                    description:
                        "Una interfaz diseñada para transmitir confianza, profesionalismo y el nivel de calidad esperado de una agencia moderna.",
                },

                {
                    title:
                        "Arquitectura escalable",

                    description:
                        "Preparado para crecer con nuevas categorías, servicios, proyectos y páginas sin afectar el rendimiento.",
                },

                {
                    title:
                        "Máximo rendimiento",

                    description:
                        "Optimizado para obtener puntuaciones superiores al 95% en Lighthouse manteniendo animaciones fluidas y navegación rápida.",
                },
            ],

            process: [
                {
                    title:
                        "Discovery",

                    description:
                        "Analizamos la estructura de la agencia, servicios, proyectos y objetivos comerciales.",
                },

                {
                    title:
                        "UX/UI y desarrollo",

                    description:
                        "Diseñamos una experiencia premium con arquitectura escalable, animaciones avanzadas y navegación dinámica.",
                },

                {
                    title:
                        "Optimización y lanzamiento",

                    description:
                        "Realizamos pruebas de rendimiento, accesibilidad y SEO antes de desplegar el proyecto en producción.",
                },
            ],

            faq: [
                {
                    question:
                        "¿Puedo organizar los proyectos por categorías?",

                    answer:
                        "Sí. El portafolio está diseñado para manejar múltiples categorías, filtros y páginas independientes para cada proyecto.",
                },

                {
                    question:
                        "¿Incluye estudios de caso completos?",

                    answer:
                        "Sí. Cada proyecto puede convertirse en un Case Study con imágenes, proceso, resultados y tecnologías utilizadas.",
                },

                {
                    question:
                        "¿Es escalable para agregar nuevos servicios?",

                    answer:
                        "Sí. La arquitectura está preparada para incorporar nuevos servicios, categorías y proyectos manteniendo un excelente rendimiento.",
                },
            ],
        },

        en: {
            name: "Agency Portfolio",

            title:
                "Agency Portfolio",

            level: "🔴 Premium",

            category:
                "Professional Portfolios",

            description:
                "Premium portfolio for digital agencies, creative studios and software houses featuring dynamic routing, advanced page transitions, multi-category project architecture and exceptional performance.",

            time: "5-8 weeks",

            imageAlt:
                "Premium agency portfolio",

            target:
                "Digital agencies, software houses, creative studios, technology companies and consulting firms looking for a premium online presence.",

            support:
                "45 days post-delivery support",

            useCases: [
                "Digital agencies",
                "Software houses",
                "Creative studios",
                "Technology companies",
                "Consulting firms",
                "Product studios",
            ],

            includes: [
                "Premium homepage",
                "Multi-category portfolio",
                "Advanced case studies",
                "Services pages",
                "Team section",
                "Testimonials",
                "Contact page",
                "Premium animations",
                "Dynamic routing",
                "Installable PWA",
            ],

            notIncludes: [
                "Headless CMS",
                "Admin dashboard",
                "Authentication",
                "Marketplace",
            ],

            features: [
                "Advanced Framer Motion",
                "Page transitions",
                "Dynamic routing",
                "Multi-category portfolio",
                "PWA",
                "95+ Lighthouse score",
                "Advanced SEO",
                "Optimized Core Web Vitals",
            ],

            deliverables: [
                "Published agency portfolio",
                "Source code",
                "Technical documentation",
                "Update guide",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Premium digital experience",

                    description:
                        "Designed to communicate professionalism, trust and high-quality work through an engaging user experience.",
                },

                {
                    title:
                        "Scalable architecture",

                    description:
                        "Built to grow with additional services, projects and categories without sacrificing performance.",
                },

                {
                    title:
                        "Exceptional performance",

                    description:
                        "Optimized to achieve Lighthouse scores above 95 while maintaining smooth animations and fast navigation.",
                },
            ],

            process: [
                {
                    title:
                        "Discovery",

                    description:
                        "We define the agency structure, services, featured projects and business goals.",
                },

                {
                    title:
                        "UX/UI & development",

                    description:
                        "We create a premium experience using scalable architecture, advanced animations and dynamic navigation.",
                },

                {
                    title:
                        "Optimization & deployment",

                    description:
                        "Performance, accessibility and SEO are validated before the final production deployment.",
                },
            ],

            faq: [
                {
                    question:
                        "Can projects be organized into categories?",

                    answer:
                        "Yes. The architecture supports multiple categories, filters and dedicated pages for every project.",
                },

                {
                    question:
                        "Does it include complete case studies?",

                    answer:
                        "Yes. Every project can become a fully detailed case study including visuals, process, technologies and outcomes.",
                },

                {
                    question:
                        "Can new services and projects be added later?",

                    answer:
                        "Absolutely. The architecture is designed to scale while maintaining excellent performance and user experience.",
                },
            ],
        },
        pt: {
            name: "Portfólio para Agência",

            title: "Portfólio para Agência",

            level: "🔴 Premium",

            category: "Portfólios Profissionais",

            description:
                "Portfólio premium para agências digitais, estúdios criativos e software houses com navegação avançada, múltiplas categorias de projetos, transições fluidas e uma arquitetura escalável voltada para o máximo desempenho.",

            time: "5-8 semanas",

            imageAlt:
                "Portfólio premium para agência digital",

            target:
                "Agências digitais, estúdios de design, software houses, empresas de tecnologia e equipes criativas que precisam apresentar diversos serviços, projetos e casos de sucesso por meio de uma experiência premium.",

            support:
                "45 dias de suporte pós-entrega",

            useCases: [
                "Agências digitais",
                "Software Houses",
                "Estúdios criativos",
                "Empresas de tecnologia",
                "Consultorias",
                "Product Studios",
            ],

            includes: [
                "Página inicial premium",
                "Portfólio por categorias",
                "Case Studies avançados",
                "Serviços",
                "Equipe",
                "Depoimentos",
                "Formulário de contato",
                "Animações premium",
                "Rotas dinâmicas",
                "PWA instalável",
            ],

            notIncludes: [
                "CMS Headless",
                "Painel administrativo",
                "Autenticação",
                "Marketplace",
            ],

            features: [
                "Framer Motion avançado",
                "Page Transitions",
                "Dynamic Routing",
                "Portfólio com múltiplas categorias",
                "PWA",
                "Performance +95",
                "SEO avançado",
                "Core Web Vitals otimizados",
            ],

            deliverables: [
                "Portfólio corporativo publicado",
                "Código-fonte",
                "Documentação técnica",
                "Guia de atualização",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Experiência de alto nível",

                    description:
                        "Uma interface desenvolvida para transmitir confiança, profissionalismo e o nível de qualidade esperado de uma agência moderna.",
                },

                {
                    title: "Arquitetura escalável",

                    description:
                        "Preparada para crescer com novas categorias, serviços, projetos e páginas sem comprometer o desempenho.",
                },

                {
                    title: "Máximo desempenho",

                    description:
                        "Otimizado para alcançar pontuações superiores a 95% no Lighthouse, mantendo animações fluidas e navegação rápida.",
                },
            ],

            process: [
                {
                    title: "Discovery",

                    description:
                        "Analisamos a estrutura da agência, os serviços, os projetos e os objetivos comerciais.",
                },

                {
                    title: "UX/UI e desenvolvimento",

                    description:
                        "Projetamos uma experiência premium com arquitetura escalável, animações avançadas e navegação dinâmica.",
                },

                {
                    title: "Otimização e lançamento",

                    description:
                        "Realizamos testes de desempenho, acessibilidade e SEO antes de publicar o projeto em produção.",
                },
            ],

            faq: [
                {
                    question:
                        "Posso organizar os projetos por categorias?",

                    answer:
                        "Sim. O portfólio foi desenvolvido para gerenciar múltiplas categorias, filtros e páginas independentes para cada projeto.",
                },

                {
                    question:
                        "Inclui estudos de caso completos?",

                    answer:
                        "Sim. Cada projeto pode ser transformado em um Case Study com imagens, processo, resultados e tecnologias utilizadas.",
                },

                {
                    question:
                        "É escalável para adicionar novos serviços?",

                    answer:
                        "Sim. A arquitetura foi preparada para incorporar novos serviços, categorias e projetos, mantendo um excelente desempenho.",
                },
            ],
        },
    },
};