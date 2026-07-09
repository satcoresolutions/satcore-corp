import type {
    ServicePlan,
} from "@/types/plan.types";

export const saasLanding: ServicePlan = {
    core: {
        // ────────────────────────────────────
        // Identidad
        // ────────────────────────────────────

        id: "LND-003",

        slug: "saas-landing",

        // ────────────────────────────────────
        // Comercial
        // ────────────────────────────────────

        complexity: "⭐⭐⭐ (3/5)",

        price: "$600 - $1,000 USD",

        pricingType: "fixed",

        automationLevel: "high",

        // ────────────────────────────────────
        // Técnico
        // ────────────────────────────────────

        stack: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "React",
            "Server Actions",
            "Route Handlers",
            "Framer Motion",
            "Zod",
        ],

        technologies: [
            "Next.js App Router",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion",
            "Server Actions",
            "Route Handlers",
            "Zod",
            "React Hook Form",
            "next-intl",
            "next-seo",
        ],

        integrations: [
            "Google Analytics 4",
            "Google Tag Manager",
            "Meta Pixel",
            "Microsoft Clarity",
            "Resend",
            "Calendly",
            "HubSpot",
            "Mailchimp",
            "Stripe Checkout",
        ],

        // ────────────────────────────────────
        // Multimedia
        // ────────────────────────────────────

        heroImage:
            "/images/services/software/landing-pages/saas/hero.png",

        image:
            "/images/services/software/landing-pages/saas/cover.webp",
    },

    translations: {
        es: {
            name: "Landing SaaS",

            title: "Landing SaaS",

            level: "🟠 Avanzado",

            category: "Landing Pages",

            description:
                "Landing premium diseñada para productos SaaS, plataformas digitales y aplicaciones. Presenta funcionalidades de manera interactiva, genera confianza y maximiza la conversión de usuarios.",

            time: "3-5 semanas",

            imageAlt:
                "Landing page para productos SaaS",

            target:
                "Empresas tecnológicas, startups, plataformas digitales y productos SaaS que necesitan presentar su solución de forma profesional.",

            support:
                "30 días de soporte post-entrega",

            useCases: [
                "Lanzamiento de un SaaS",
                "Software empresarial",
                "Aplicaciones web",
                "Aplicaciones móviles",
                "Herramientas digitales",
            ],

            includes: [
                "Diseño UX/UI premium",
                "Hero interactivo",
                "Showcase de funcionalidades",
                "Pricing interactivo",
                "Comparador de planes",
                "Testimonios dinámicos",
                "Animaciones avanzadas",
                "Modo oscuro y claro",
                "Formulario inteligente",
                "SEO técnico",
                "Optimización Core Web Vitals",
            ],

            notIncludes: [
                "Panel administrativo",
                "Base de datos personalizada",
                "Sistema completo SaaS",
            ],

            features: [
                "Feature Showcase",
                "Product Preview",
                "Pricing Toggle",
                "Dark / Light Mode",
                "Framer Motion",
                "Server Actions",
                "SEO Avanzado",
                "Responsive Premium",
                "Microinteracciones",
                "Alta velocidad",
            ],

            deliverables: [
                "Landing SaaS completa",
                "Código fuente",
                "Documentación técnica",
                "Configuración de analítica",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Presentación profesional",
                    description:
                        "Diseñada para transmitir confianza y aumentar la conversión de productos tecnológicos.",
                },
                {
                    title: "Experiencia interactiva",
                    description:
                        "Animaciones, previews y componentes dinámicos mejoran la percepción del producto.",
                },
                {
                    title: "Escalable",
                    description:
                        "La arquitectura permite evolucionar posteriormente hacia un producto SaaS completo.",
                },
            ],

            process: [
                {
                    title: "Arquitectura",
                    description:
                        "Definimos la estructura de la landing según el flujo de conversión del producto.",
                },
                {
                    title: "Diseño",
                    description:
                        "Creamos una interfaz moderna con componentes interactivos y experiencia premium.",
                },
                {
                    title: "Optimización",
                    description:
                        "Implementamos SEO, analítica y optimización de rendimiento antes del despliegue.",
                },
            ],

            faq: [
                {
                    question:
                        "¿Incluye comparador de planes?",
                    answer:
                        "Sí. Podemos implementar pricing dinámico con comparación entre planes.",
                },
                {
                    question:
                        "¿Puedo mostrar capturas del producto?",
                    answer:
                        "Sí. Incluye secciones especializadas para showcase del software y demostraciones.",
                },
                {
                    question:
                        "¿Puede conectarse con Stripe o Calendly?",
                    answer:
                        "Sí. Se pueden integrar herramientas como Stripe Checkout, Calendly, HubSpot y plataformas de email marketing.",
                },
            ],
        },

        en: {
            name: "SaaS Landing Page",

            title: "SaaS Landing Page",

            level: "🟠 Advanced",

            category: "Landing Pages",

            description:
                "A premium landing page designed for SaaS products, digital platforms, and applications. It showcases features interactively, builds trust, and maximizes user conversions.",

            time: "3–5 weeks",

            imageAlt:
                "Landing page for SaaS products",

            target:
                "Technology companies, startups, digital platforms, and SaaS businesses that need to present their solution professionally.",

            support:
                "30 days of post-launch support",

            useCases: [
                "SaaS product launch",
                "Enterprise software",
                "Web applications",
                "Mobile applications",
                "Digital tools",
            ],

            includes: [
                "Premium UI/UX design",
                "Interactive hero section",
                "Feature showcase",
                "Interactive pricing",
                "Plan comparison",
                "Dynamic testimonials",
                "Advanced animations",
                "Dark & Light mode",
                "Smart contact form",
                "Technical SEO",
                "Core Web Vitals optimization",
            ],

            notIncludes: [
                "Admin dashboard",
                "Custom database",
                "Complete SaaS platform",
            ],

            features: [
                "Feature Showcase",
                "Product Preview",
                "Pricing Toggle",
                "Dark / Light Mode",
                "Framer Motion",
                "Server Actions",
                "Advanced SEO",
                "Premium Responsive Design",
                "Microinteractions",
                "High Performance",
            ],

            deliverables: [
                "Complete SaaS landing page",
                "Source code",
                "Technical documentation",
                "Analytics setup",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Professional Product Presentation",
                    description:
                        "Designed to build trust and increase conversions for technology products.",
                },
                {
                    title: "Interactive User Experience",
                    description:
                        "Animations, product previews, and dynamic components enhance the perceived value of your product.",
                },
                {
                    title: "Scalable Architecture",
                    description:
                        "Built on an architecture that can later evolve into a complete SaaS platform.",
                },
            ],

            process: [
                {
                    title: "Architecture",
                    description:
                        "We define the landing page structure based on your product's conversion funnel.",
                },
                {
                    title: "Design",
                    description:
                        "We create a modern interface with interactive components and a premium user experience.",
                },
                {
                    title: "Optimization",
                    description:
                        "We implement SEO, analytics, and performance optimizations before deployment.",
                },
            ],

            faq: [
                {
                    question:
                        "Does it include a pricing comparison section?",
                    answer:
                        "Yes. We can implement dynamic pricing with feature and plan comparisons.",
                },
                {
                    question:
                        "Can I showcase product screenshots?",
                    answer:
                        "Yes. It includes dedicated sections for software showcases, screenshots, and product demonstrations.",
                },
                {
                    question:
                        "Can it integrate with Stripe or Calendly?",
                    answer:
                        "Yes. We can integrate tools such as Stripe Checkout, Calendly, HubSpot, and email marketing platforms.",
                },
            ],
        },

        pt: {
            name: "Landing Page SaaS",

            title: "Landing Page SaaS",

            level: "🟠 Avançado",

            category: "Landing Pages",

            description:
                "Uma landing page premium desenvolvida para produtos SaaS, plataformas digitais e aplicativos. Apresenta funcionalidades de forma interativa, transmite confiança e maximiza a conversão de usuários.",

            time: "3–5 semanas",

            imageAlt:
                "Landing page para produtos SaaS",

            target:
                "Empresas de tecnologia, startups, plataformas digitais e negócios SaaS que precisam apresentar sua solução de forma profissional.",

            support:
                "30 dias de suporte após a entrega",

            useCases: [
                "Lançamento de um SaaS",
                "Software empresarial",
                "Aplicações web",
                "Aplicativos móveis",
                "Ferramentas digitais",
            ],

            includes: [
                "Design UI/UX premium",
                "Hero section interativa",
                "Showcase de funcionalidades",
                "Tabela de preços interativa",
                "Comparação de planos",
                "Depoimentos dinâmicos",
                "Animações avançadas",
                "Modo claro e escuro",
                "Formulário inteligente",
                "SEO técnico",
                "Otimização de Core Web Vitals",
            ],

            notIncludes: [
                "Painel administrativo",
                "Banco de dados personalizado",
                "Plataforma SaaS completa",
            ],

            features: [
                "Showcase de Funcionalidades",
                "Pré-visualização do Produto",
                "Alternância de Preços",
                "Modo Claro / Escuro",
                "Framer Motion",
                "Server Actions",
                "SEO Avançado",
                "Design Responsivo Premium",
                "Microinterações",
                "Alto Desempenho",
            ],

            deliverables: [
                "Landing Page SaaS completa",
                "Código-fonte",
                "Documentação técnica",
                "Configuração de ferramentas de análise",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Apresentação Profissional",
                    description:
                        "Projetada para transmitir confiança e aumentar as conversões de produtos tecnológicos.",
                },
                {
                    title: "Experiência Interativa",
                    description:
                        "Animações, pré-visualizações do produto e componentes dinâmicos melhoram a percepção da solução.",
                },
                {
                    title: "Arquitetura Escalável",
                    description:
                        "A arquitetura permite evoluir posteriormente para uma plataforma SaaS completa.",
                },
            ],

            process: [
                {
                    title: "Arquitetura",
                    description:
                        "Definimos a estrutura da landing page de acordo com o funil de conversão do produto.",
                },
                {
                    title: "Design",
                    description:
                        "Criamos uma interface moderna com componentes interativos e uma experiência premium.",
                },
                {
                    title: "Otimização",
                    description:
                        "Implementamos SEO, ferramentas de análise e otimizações de desempenho antes da publicação.",
                },
            ],

            faq: [
                {
                    question:
                        "Inclui comparação de planos?",
                    answer:
                        "Sim. Podemos implementar uma tabela de preços dinâmica com comparação entre planos.",
                },
                {
                    question:
                        "Posso exibir capturas de tela do produto?",
                    answer:
                        "Sim. Inclui seções dedicadas para showcase do software, capturas de tela e demonstrações do produto.",
                },
                {
                    question:
                        "Pode integrar com Stripe ou Calendly?",
                    answer:
                        "Sim. Podemos integrar ferramentas como Stripe Checkout, Calendly, HubSpot e plataformas de e-mail marketing.",
                },
            ],
        },
    },
};