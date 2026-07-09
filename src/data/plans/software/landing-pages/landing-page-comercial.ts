import type {
    ServicePlan,
} from "@/types/plan.types";

export const commercialLanding: ServicePlan = {
    core: {
        // ────────────────────────────────────
        // Identidad
        // ────────────────────────────────────

        id: "LND-002",

        slug: "commercial-landing",

        // ────────────────────────────────────
        // Comercial (no traducible)
        // ────────────────────────────────────

        complexity: "⭐⭐ (2/5)",

        price: "$400 - $550 USD",

        pricingType: "fixed",

        automationLevel: "medium",

        // ────────────────────────────────────
        // Técnico
        // ────────────────────────────────────

        stack: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Server Actions",
        ],

        technologies: [
            "Next.js",
            "Tailwind CSS",
            "TypeScript",
            "Route Handlers",
            "Google Analytics",
        ],

        integrations: [
            "Google Analytics",
            "Meta Pixel",
            "Google Tag Manager",
            "Email Marketing",
        ],

        // ────────────────────────────────────
        // Multimedia
        // ────────────────────────────────────

        heroImage:
            "/images/services/software/landing-pages/commercial/hero.png",

        image:
            "/images/services/software/landing-pages/commercial/cover.webp",
    },

    translations: {
        es: {
            name: "Landing Comercial",

            title: "Landing Comercial",

            level: "🟡 Intermedio",

            category: "Landing Pages",

            description:
                "Landing page diseñada para campañas comerciales con múltiples secciones enfocadas en incrementar conversiones mediante embudos de venta, testimonios y llamadas a la acción estratégicas.",

            time: "2-3 semanas",

            imageAlt:
                "Landing page comercial para campañas de marketing",

            target:
                "Empresas y negocios que desean vender productos o servicios mediante campañas digitales optimizadas.",

            support:
                "15 días de soporte post-entrega",

            useCases: [
                "Campañas de Google Ads",
                "Campañas de Meta Ads",
                "Venta de servicios",
                "Venta de productos",
                "Captación de prospectos",
            ],

            includes: [
                "Diseño UI/UX personalizado",
                "Embudo de ventas de múltiples secciones",
                "Formulario de conversión",
                "Sección de beneficios",
                "Testimonios interactivos",
                "Pricing interactivo",
                "Optimización SEO",
                "Optimización Core Web Vitals",
            ],

            notIncludes: [
                "Panel administrativo",
                "Base de datos personalizada",
                "Integraciones empresariales complejas",
            ],

            features: [
                "Hero de alta conversión",
                "Pricing interactivo",
                "Slider de testimonios",
                "Sección de beneficios",
                "Animaciones suaves",
                "Responsive Design",
                "SEO técnico",
                "Integración con analítica",
            ],

            deliverables: [
                "Landing page completa",
                "Código fuente",
                "Manual básico",
                "Configuración de analítica",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Mayor conversión",
                    description:
                        "Cada sección está diseñada para conducir al usuario hasta la acción de compra o contacto.",
                },
                {
                    title: "Ideal para campañas",
                    description:
                        "Optimizada para tráfico proveniente de Google Ads, Meta Ads y campañas de email marketing.",
                },
                {
                    title: "Experiencia profesional",
                    description:
                        "Diseño moderno, carga rápida y navegación enfocada en maximizar resultados.",
                },
            ],

            process: [
                {
                    title: "Planeación estratégica",
                    description:
                        "Definimos la estructura del embudo de ventas según el objetivo del negocio.",
                },
                {
                    title: "Diseño y desarrollo",
                    description:
                        "Creamos una experiencia visual optimizada para persuadir y convertir visitantes.",
                },
                {
                    title: "Optimización",
                    description:
                        "Configuramos métricas, SEO y rendimiento antes de la publicación.",
                },
            ],

            faq: [
                {
                    question:
                        "¿Incluye integración con herramientas de marketing?",
                    answer:
                        "Sí. Podemos integrar Google Analytics, Meta Pixel, Tag Manager y plataformas de email marketing.",
                },
                {
                    question:
                        "¿Puedo agregar varias secciones de productos?",
                    answer:
                        "Sí. Este plan está pensado para presentar uno o varios productos dentro del mismo embudo comercial.",
                },
                {
                    question:
                        "¿Está optimizada para publicidad digital?",
                    answer:
                        "Sí. La estructura está diseñada para maximizar la conversión de campañas pagadas.",
                },
            ],
        },

        en: {
            name: "Commercial Landing Page",

            title: "Commercial Landing Page",

            level: "🟡 Intermediate",

            category: "Landing Pages",

            description:
                "A landing page designed for marketing campaigns with multiple sections focused on increasing conversions through sales funnels, customer testimonials, and strategically placed calls to action.",

            time: "2–3 weeks",

            imageAlt:
                "Commercial landing page for marketing campaigns",

            target:
                "Businesses and companies looking to sell products or services through optimized digital marketing campaigns.",

            support:
                "15 days of post-launch support",

            useCases: [
                "Google Ads campaigns",
                "Meta Ads campaigns",
                "Service sales",
                "Product sales",
                "Lead generation",
            ],

            includes: [
                "Custom UI/UX design",
                "Multi-section sales funnel",
                "Lead generation form",
                "Benefits section",
                "Interactive testimonials",
                "Interactive pricing section",
                "SEO optimization",
                "Core Web Vitals optimization",
            ],

            notIncludes: [
                "Admin dashboard",
                "Custom database",
                "Complex enterprise integrations",
            ],

            features: [
                "High-converting hero section",
                "Interactive pricing",
                "Testimonials slider",
                "Benefits section",
                "Smooth animations",
                "Responsive design",
                "Technical SEO",
                "Analytics integration",
            ],

            deliverables: [
                "Complete landing page",
                "Source code",
                "Basic documentation",
                "Analytics setup",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Higher Conversion Rates",
                    description:
                        "Every section is designed to guide visitors toward making a purchase or getting in touch.",
                },
                {
                    title: "Perfect for Marketing Campaigns",
                    description:
                        "Optimized for traffic from Google Ads, Meta Ads, and email marketing campaigns.",
                },
                {
                    title: "Professional User Experience",
                    description:
                        "Modern design, fast loading times, and navigation focused on maximizing results.",
                },
            ],

            process: [
                {
                    title: "Strategic Planning",
                    description:
                        "We define the sales funnel structure based on your business objectives.",
                },
                {
                    title: "Design & Development",
                    description:
                        "We create a visually compelling experience optimized to persuade and convert visitors.",
                },
                {
                    title: "Optimization",
                    description:
                        "We configure analytics, SEO, and performance before launch.",
                },
            ],

            faq: [
                {
                    question:
                        "Does it include integrations with marketing tools?",
                    answer:
                        "Yes. We can integrate Google Analytics, Meta Pixel, Google Tag Manager, and email marketing platforms.",
                },
                {
                    question:
                        "Can I add multiple product sections?",
                    answer:
                        "Yes. This plan is designed to showcase one or multiple products within the same sales funnel.",
                },
                {
                    question:
                        "Is it optimized for digital advertising?",
                    answer:
                        "Yes. The structure is specifically designed to maximize conversions from paid advertising campaigns.",
                },
            ],
        },

        pt: {
            name: "Landing Page Comercial",

            title: "Landing Page Comercial",

            level: "🟡 Intermediário",

            category: "Landing Pages",

            description:
                "Landing page desenvolvida para campanhas de marketing, com múltiplas seções voltadas para aumentar as conversões por meio de funis de vendas, depoimentos de clientes e chamadas para ação estrategicamente posicionadas.",

            time: "2–3 semanas",

            imageAlt:
                "Landing page comercial para campanhas de marketing",

            target:
                "Empresas e negócios que desejam vender produtos ou serviços por meio de campanhas digitais otimizadas.",

            support:
                "15 dias de suporte após a entrega",

            useCases: [
                "Campanhas no Google Ads",
                "Campanhas no Meta Ads",
                "Venda de serviços",
                "Venda de produtos",
                "Geração de leads",
            ],

            includes: [
                "Design UI/UX personalizado",
                "Funil de vendas com múltiplas seções",
                "Formulário de conversão",
                "Seção de benefícios",
                "Depoimentos interativos",
                "Tabela de preços interativa",
                "Otimização para SEO",
                "Otimização de Core Web Vitals",
            ],

            notIncludes: [
                "Painel administrativo",
                "Banco de dados personalizado",
                "Integrações empresariais complexas",
            ],

            features: [
                "Hero section de alta conversão",
                "Tabela de preços interativa",
                "Carrossel de depoimentos",
                "Seção de benefícios",
                "Animações suaves",
                "Design responsivo",
                "SEO técnico",
                "Integração com ferramentas de análise",
            ],

            deliverables: [
                "Landing page completa",
                "Código-fonte",
                "Documentação básica",
                "Configuração de ferramentas de análise",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Maior Taxa de Conversão",
                    description:
                        "Cada seção é projetada para conduzir o visitante até a compra ou ao contato.",
                },
                {
                    title: "Ideal para Campanhas de Marketing",
                    description:
                        "Otimizada para tráfego proveniente do Google Ads, Meta Ads e campanhas de e-mail marketing.",
                },
                {
                    title: "Experiência Profissional",
                    description:
                        "Design moderno, carregamento rápido e navegação focada em maximizar resultados.",
                },
            ],

            process: [
                {
                    title: "Planejamento Estratégico",
                    description:
                        "Definimos a estrutura do funil de vendas de acordo com os objetivos do negócio.",
                },
                {
                    title: "Design e Desenvolvimento",
                    description:
                        "Criamos uma experiência visual otimizada para persuadir e converter visitantes.",
                },
                {
                    title: "Otimização",
                    description:
                        "Configuramos métricas, SEO e desempenho antes da publicação.",
                },
            ],

            faq: [
                {
                    question:
                        "Inclui integração com ferramentas de marketing?",
                    answer:
                        "Sim. Podemos integrar Google Analytics, Meta Pixel, Google Tag Manager e plataformas de e-mail marketing.",
                },
                {
                    question:
                        "Posso adicionar várias seções de produtos?",
                    answer:
                        "Sim. Este plano foi desenvolvido para apresentar um ou vários produtos dentro do mesmo funil de vendas.",
                },
                {
                    question:
                        "Está otimizada para publicidade digital?",
                    answer:
                        "Sim. A estrutura foi projetada para maximizar as conversões de campanhas pagas.",
                },
            ],
        }
    },
};