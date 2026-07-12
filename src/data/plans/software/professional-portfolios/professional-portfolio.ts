import type {
    ServicePlan,
} from "@/types/plan.types";

export const professionalPortfolio: ServicePlan = {
    core: {
        // ────────────────────────────────────
        // Identidad
        // ────────────────────────────────────

        id: "PRT-002",

        slug: "professional-portfolio",

        // ────────────────────────────────────
        // Comercial
        // ────────────────────────────────────

        complexity: "⭐⭐⭐ (3/5)",

        price: "$550 - $750 USD",

        pricingType: "fixed",

        automationLevel: "medium",

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
        ],

        integrations: [
            "Google Analytics",
            "Resend",
            "Google Search Console",
        ],

        // ────────────────────────────────────
        // Multimedia
        // ────────────────────────────────────

        heroImage:
            "/images/services/software/hero/hero-professional-portfolio.png",

        image:
            "/images/services/software/hero/hero-professional-portfolio.png",
    },

    translations: {
        es: {
            name: "Portafolio Profesional",

            title:
                "Portafolio Profesional",

            level: "🟡 Intermedio",

            category:
                "Portafolios Profesionales",

            description:
                "Portafolio profesional de alto nivel con estudios de caso interactivos, navegación personalizada, animaciones avanzadas y una arquitectura optimizada para obtener un rendimiento superior al 95%.",

            time: "3-5 semanas",

            imageAlt:
                "Portafolio profesional interactivo",

            target:
                "Desarrolladores senior, diseñadores UX/UI, consultores, arquitectos de software, freelancers consolidados y profesionales que buscan destacar mediante una experiencia digital premium.",

            support:
                "30 días soporte post-entrega",

            useCases: [
                "Marca personal premium",
                "Portafolio para Senior Developers",
                "Portafolio UX/UI",
                "Consultoría tecnológica",
                "Aplicaciones laborales",
                "Freelancing internacional",
            ],

            includes: [
                "Página principal personalizada",
                "Estudios de caso (Case Studies)",
                "Galería avanzada de proyectos",
                "Rutas personalizadas",
                "Animaciones premium",
                "Timeline profesional",
                "Formulario de contacto",
                "SEO avanzado",
                "PWA instalable",
            ],

            notIncludes: [
                "CMS",
                "Panel administrativo",
                "Gestión de usuarios",
                "Marketplace",
            ],

            features: [
                "Framer Motion avanzado",
                "Case Studies interactivos",
                "Custom Routing",
                "PWA",
                "SSR / ISR Ready",
                "Performance +95",
                "SEO avanzado",
                "Core Web Vitals optimizados",
            ],

            deliverables: [
                "Portafolio profesional publicado",
                "Código fuente",
                "Guía de actualización",
                "Documentación técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Experiencia premium",

                    description:
                        "Cada proyecto puede presentarse como un estudio de caso completo con narrativa, imágenes, métricas y resultados.",
                },

                {
                    title:
                        "Rendimiento sobresaliente",

                    description:
                        "Optimizado para alcanzar puntuaciones superiores al 95% en Lighthouse y Core Web Vitals.",
                },

                {
                    title:
                        "Mayor impacto profesional",

                    description:
                        "Diseñado para transmitir experiencia, credibilidad y un alto nivel técnico frente a clientes o reclutadores.",
                },
            ],

            process: [
                {
                    title:
                        "Discovery",

                    description:
                        "Analizamos tus objetivos, proyectos destacados y estrategia de marca personal.",
                },

                {
                    title:
                        "Diseño y desarrollo",

                    description:
                        "Construimos una experiencia interactiva con navegación personalizada y animaciones fluidas.",
                },

                {
                    title:
                        "Optimización y despliegue",

                    description:
                        "Realizamos pruebas de rendimiento, SEO y accesibilidad antes de publicar el sitio.",
                },
            ],

            faq: [
                {
                    question:
                        "¿Qué diferencia este plan del Portafolio Personal?",

                    answer:
                        "Incluye estudios de caso completos, navegación personalizada, animaciones más avanzadas y una optimización mucho mayor en rendimiento y experiencia de usuario.",
                },

                {
                    question:
                        "¿Puedo mostrar proyectos con múltiples imágenes y secciones?",

                    answer:
                        "Sí. Cada proyecto puede convertirse en una página independiente con galerías, descripción del proceso, tecnologías utilizadas y resultados obtenidos.",
                },

                {
                    question:
                        "¿Está optimizado para SEO?",

                    answer:
                        "Sí. Implementamos buenas prácticas de SEO técnico, rendimiento y accesibilidad para maximizar la visibilidad del sitio.",
                },
            ],
        },

        en: {
            name: "Professional Portfolio",

            title:
                "Professional Portfolio",

            level: "🟡 Intermediate",

            category:
                "Professional Portfolios",

            description:
                "A premium portfolio featuring interactive case studies, custom routing, advanced animations and an optimized architecture capable of achieving Lighthouse scores above 95%.",

            time: "3-5 weeks",

            imageAlt:
                "Professional interactive portfolio",

            target:
                "Senior developers, UX/UI designers, consultants, software architects and experienced freelancers seeking a premium online presence.",

            support:
                "30 days post-delivery support",

            useCases: [
                "Premium personal branding",
                "Senior developer portfolio",
                "UX/UI portfolio",
                "Technology consulting",
                "International freelancing",
                "Professional resume",
            ],

            includes: [
                "Custom landing page",
                "Interactive case studies",
                "Advanced project gallery",
                "Custom routing",
                "Premium animations",
                "Professional timeline",
                "Contact form",
                "Advanced SEO",
                "Installable PWA",
            ],

            notIncludes: [
                "CMS",
                "Admin dashboard",
                "User management",
                "Marketplace",
            ],

            features: [
                "Advanced Framer Motion",
                "Interactive case studies",
                "Custom routing",
                "PWA",
                "ISR ready",
                "95+ Lighthouse score",
                "Advanced SEO",
                "Optimized Core Web Vitals",
            ],

            deliverables: [
                "Published professional portfolio",
                "Source code",
                "Update guide",
                "Technical documentation",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Premium presentation",

                    description:
                        "Present every project as a complete case study with storytelling, visuals and measurable outcomes.",
                },

                {
                    title:
                        "Outstanding performance",

                    description:
                        "Built to achieve excellent Lighthouse scores and exceptional user experience.",
                },

                {
                    title:
                        "Professional credibility",

                    description:
                        "Designed to impress recruiters, clients and companies with a polished digital experience.",
                },
            ],

            process: [
                {
                    title:
                        "Discovery",

                    description:
                        "We define your goals, featured projects and personal branding strategy.",
                },

                {
                    title:
                        "Design & development",

                    description:
                        "We build a highly interactive experience using custom navigation and smooth animations.",
                },

                {
                    title:
                        "Optimization & deployment",

                    description:
                        "Performance, SEO and accessibility are validated before publishing the portfolio.",
                },
            ],

            faq: [
                {
                    question:
                        "How is this different from the Personal Portfolio?",

                    answer:
                        "It includes advanced case studies, premium animations, custom routing and significantly higher optimization for performance and SEO.",
                },

                {
                    question:
                        "Can every project have its own page?",

                    answer:
                        "Yes. Each project can become a dedicated case study with galleries, process documentation and technical details.",
                },

                {
                    question:
                        "Is it optimized for SEO?",

                    answer:
                        "Absolutely. The project follows modern SEO best practices along with accessibility and performance optimizations.",
                },
            ],
        },
        pt: {
            name: "Portfólio Profissional",

            title: "Portfólio Profissional",

            level: "🟡 Intermediário",

            category: "Portfólios Profissionais",

            description:
                "Portfólio profissional de alto nível com estudos de caso interativos, navegação personalizada, animações avançadas e uma arquitetura otimizada para alcançar desempenho superior a 95%.",

            time: "3-5 semanas",

            imageAlt: "Portfólio profissional interativo",

            target:
                "Desenvolvedores sêniores, designers UX/UI, consultores, arquitetos de software, freelancers consolidados e profissionais que desejam se destacar por meio de uma experiência digital premium.",

            support: "30 dias de suporte pós-entrega",

            useCases: [
                "Marca pessoal premium",
                "Portfólio para Desenvolvedores Sêniores",
                "Portfólio UX/UI",
                "Consultoria em tecnologia",
                "Candidaturas a vagas",
                "Freelancing internacional",
            ],

            includes: [
                "Página inicial personalizada",
                "Estudos de caso (Case Studies)",
                "Galeria avançada de projetos",
                "Rotas personalizadas",
                "Animações premium",
                "Linha do tempo profissional",
                "Formulário de contato",
                "SEO avançado",
                "PWA instalável",
            ],

            notIncludes: [
                "CMS",
                "Painel administrativo",
                "Gerenciamento de usuários",
                "Marketplace",
            ],

            features: [
                "Framer Motion avançado",
                "Case Studies interativos",
                "Custom Routing",
                "PWA",
                "SSR / ISR Ready",
                "Performance +95",
                "SEO avançado",
                "Core Web Vitals otimizados",
            ],

            deliverables: [
                "Portfólio profissional publicado",
                "Código-fonte",
                "Guia de atualização",
                "Documentação técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Experiência premium",

                    description:
                        "Cada projeto pode ser apresentado como um estudo de caso completo, com narrativa, imagens, métricas e resultados.",
                },

                {
                    title: "Desempenho excepcional",

                    description:
                        "Otimizado para alcançar pontuações superiores a 95% no Lighthouse e nos Core Web Vitals.",
                },

                {
                    title: "Maior impacto profissional",

                    description:
                        "Desenvolvido para transmitir experiência, credibilidade e um alto nível técnico perante clientes e recrutadores.",
                },
            ],

            process: [
                {
                    title: "Discovery",

                    description:
                        "Analisamos seus objetivos, projetos de destaque e a estratégia da sua marca pessoal.",
                },

                {
                    title: "Design e desenvolvimento",

                    description:
                        "Criamos uma experiência interativa com navegação personalizada e animações fluidas.",
                },

                {
                    title: "Otimização e publicação",

                    description:
                        "Realizamos testes de desempenho, SEO e acessibilidade antes de publicar o site.",
                },
            ],

            faq: [
                {
                    question: "Qual é a diferença entre este plano e o Portfólio Pessoal?",

                    answer:
                        "Inclui estudos de caso completos, navegação personalizada, animações mais avançadas e uma otimização significativamente maior em desempenho e experiência do usuário.",
                },

                {
                    question:
                        "Posso apresentar projetos com várias imagens e seções?",

                    answer:
                        "Sim. Cada projeto pode se tornar uma página independente com galerias, descrição do processo, tecnologias utilizadas e resultados obtidos.",
                },

                {
                    question: "O site é otimizado para SEO?",

                    answer:
                        "Sim. Implementamos boas práticas de SEO técnico, desempenho e acessibilidade para maximizar a visibilidade do site.",
                },
            ],
        },
    },
};