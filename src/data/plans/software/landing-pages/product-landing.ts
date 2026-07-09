import type {
    ServicePlan,
} from "@/types/plan.types";

export const productLanding: ServicePlan = {
    core: {
        // ────────────────────────────────────
        // Identidad
        // ────────────────────────────────────

        id: "LND-004",

        slug: "product-landing",

        // ────────────────────────────────────
        // Comercial
        // ────────────────────────────────────

        complexity: "⭐⭐⭐⭐ (4/5)",

        price: "$550 - $950 USD",

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
            "GSAP",
            "Lenis",
            "Server Actions",
        ],

        technologies: [
            "Next.js App Router",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion",
            "GSAP",
            "Lenis",
            "Server Actions",
            "Route Handlers",
            "React Hook Form",
            "next-seo",
        ],

        integrations: [
            "Google Analytics 4",
            "Google Tag Manager",
            "Meta Pixel",
            "Microsoft Clarity",
            "Hotjar",
            "Resend",
            "Mailchimp",
            "Calendly",
        ],

        // ────────────────────────────────────
        // Multimedia
        // ────────────────────────────────────

        heroImage:
            "/images/services/software/landing-pages/product/hero.png",

        image:
            "/images/services/software/landing-pages/product/cover.webp",
    },

    translations: {
        es: {
            name: "Landing de Producto",

            title: "Landing de Producto",

            level: "🔴 Premium",

            category: "Landing Pages",

            description:
                "Landing page premium enfocada en presentar un producto mediante storytelling visual, animaciones avanzadas y una experiencia inmersiva que incrementa la percepción de valor.",

            time: "4-6 semanas",

            imageAlt:
                "Landing page premium para presentación de productos",

            target:
                "Empresas que lanzan productos digitales o físicos y desean generar impacto visual y altas tasas de conversión.",

            support:
                "30 días de soporte post-entrega",

            useCases: [
                "Lanzamiento de productos",
                "Productos tecnológicos",
                "Productos físicos",
                "Aplicaciones móviles",
                "Campañas premium",
            ],

            includes: [
                "Diseño UX/UI Premium",
                "Storytelling visual",
                "Animaciones avanzadas",
                "Smooth Scroll",
                "Galería interactiva",
                "Comparador visual",
                "Formulario inteligente",
                "Optimización SEO",
                "Optimización Core Web Vitals",
                "Lazy Loading avanzado",
            ],

            notIncludes: [
                "Panel administrativo",
                "Base de datos empresarial",
                "Sistema e-commerce completo",
            ],

            features: [
                "Hero cinematográfico",
                "Storytelling por secciones",
                "Animaciones GSAP",
                "Framer Motion",
                "Smooth Scroll",
                "Carga progresiva de imágenes",
                "Videos optimizados",
                "Responsive Premium",
                "SEO avanzado",
                "Microinteracciones",
            ],

            deliverables: [
                "Landing Page Premium",
                "Código fuente",
                "Manual técnico",
                "Configuración de analítica",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Mayor percepción de valor",
                    description:
                        "El producto se presenta mediante una experiencia visual que aumenta la confianza del usuario.",
                },
                {
                    title: "Experiencia inmersiva",
                    description:
                        "Las animaciones y transiciones generan una navegación moderna y memorable.",
                },
                {
                    title: "Alto rendimiento",
                    description:
                        "Las imágenes y recursos se cargan de forma progresiva para mantener una excelente velocidad.",
                },
            ],

            process: [
                {
                    title: "Discovery",
                    description:
                        "Analizamos el producto y definimos la narrativa visual de la landing.",
                },
                {
                    title: "Diseño Premium",
                    description:
                        "Diseñamos una experiencia enfocada en resaltar cada beneficio del producto.",
                },
                {
                    title: "Desarrollo",
                    description:
                        "Implementamos animaciones, optimización de recursos y comportamiento interactivo.",
                },
            ],

            faq: [
                {
                    question:
                        "¿Las animaciones afectan el rendimiento?",
                    answer:
                        "No. Se implementan siguiendo buenas prácticas para mantener excelentes métricas de Core Web Vitals.",
                },
                {
                    question:
                        "¿Puedo incluir videos del producto?",
                    answer:
                        "Sí. La landing está preparada para integrar videos optimizados y galerías multimedia.",
                },
                {
                    question:
                        "¿Está optimizada para campañas publicitarias?",
                    answer:
                        "Sí. Además del storytelling visual, mantiene una estructura enfocada en la conversión.",
                },
            ],
        },

        en: {

            name: "Product Landing Page",

            title: "Product Landing Page",

            level: "🔴 Premium",

            category: "Landing Pages",

            description:
                "A premium landing page designed to showcase a product through visual storytelling, advanced animations, and an immersive experience that enhances perceived value and drives higher conversions.",

            time: "4–6 weeks",

            imageAlt:
                "Premium landing page for product showcase",

            target:
                "Businesses launching digital or physical products that want to create a strong visual impact and achieve high conversion rates.",

            support:
                "30 days of post-launch support",

            useCases: [
                "Product launches",
                "Technology products",
                "Physical products",
                "Mobile applications",
                "Premium marketing campaigns",
            ],

            includes: [
                "Premium UI/UX design",
                "Visual storytelling",
                "Advanced animations",
                "Smooth scrolling",
                "Interactive gallery",
                "Visual comparison section",
                "Smart contact form",
                "Technical SEO",
                "Core Web Vitals optimization",
                "Advanced lazy loading",
            ],

            notIncludes: [
                "Admin dashboard",
                "Enterprise database",
                "Complete eCommerce platform",
            ],

            features: [
                "Cinematic hero section",
                "Storytelling sections",
                "GSAP animations",
                "Framer Motion",
                "Smooth scrolling",
                "Progressive image loading",
                "Optimized videos",
                "Premium responsive design",
                "Advanced SEO",
                "Microinteractions",
            ],

            deliverables: [
                "Premium landing page",
                "Source code",
                "Technical documentation",
                "Analytics setup",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Enhanced Perceived Value",
                    description:
                        "Your product is presented through a visually engaging experience that builds trust and increases its perceived value.",
                },
                {
                    title: "Immersive User Experience",
                    description:
                        "Advanced animations and seamless transitions create a modern and memorable browsing experience.",
                },
                {
                    title: "High Performance",
                    description:
                        "Images and media are progressively loaded to deliver exceptional speed and performance.",
                },
            ],

            process: [
                {
                    title: "Discovery",
                    description:
                        "We analyze your product and define the visual narrative for the landing page.",
                },
                {
                    title: "Premium Design",
                    description:
                        "We craft an experience focused on highlighting every key benefit of your product.",
                },
                {
                    title: "Development",
                    description:
                        "We implement animations, resource optimization, and interactive functionality.",
                },
            ],

            faq: [
                {
                    question:
                        "Do the animations affect performance?",
                    answer:
                        "No. All animations are implemented following best practices to maintain excellent Core Web Vitals scores.",
                },
                {
                    question:
                        "Can I include product videos?",
                    answer:
                        "Yes. The landing page is designed to support optimized videos and multimedia galleries.",
                },
                {
                    question:
                        "Is it optimized for advertising campaigns?",
                    answer:
                        "Yes. In addition to visual storytelling, the structure is built to maximize conversions from paid campaigns.",
                },
            ],
        },

        pt: {

            name: "Landing Page de Produto",

            title: "Landing Page de Produto",

            level: "🔴 Premium",

            category: "Landing Pages",

            description:
                "Uma landing page premium desenvolvida para apresentar um produto por meio de storytelling visual, animações avançadas e uma experiência imersiva que aumenta o valor percebido e impulsiona as conversões.",

            time: "4–6 semanas",

            imageAlt:
                "Landing page premium para apresentação de produtos",

            target:
                "Empresas que lançam produtos digitais ou físicos e desejam causar um forte impacto visual e alcançar altas taxas de conversão.",

            support:
                "30 dias de suporte após a entrega",

            useCases: [
                "Lançamento de produtos",
                "Produtos tecnológicos",
                "Produtos físicos",
                "Aplicativos móveis",
                "Campanhas premium",
            ],

            includes: [
                "Design UI/UX Premium",
                "Storytelling visual",
                "Animações avançadas",
                "Rolagem suave (Smooth Scroll)",
                "Galeria interativa",
                "Comparação visual",
                "Formulário inteligente",
                "SEO técnico",
                "Otimização de Core Web Vitals",
                "Lazy Loading avançado",
            ],

            notIncludes: [
                "Painel administrativo",
                "Banco de dados empresarial",
                "Plataforma completa de e-commerce",
            ],

            features: [
                "Hero section cinematográfica",
                "Storytelling por seções",
                "Animações com GSAP",
                "Framer Motion",
                "Rolagem suave (Smooth Scroll)",
                "Carregamento progressivo de imagens",
                "Vídeos otimizados",
                "Design responsivo premium",
                "SEO avançado",
                "Microinterações",
            ],

            deliverables: [
                "Landing Page Premium",
                "Código-fonte",
                "Documentação técnica",
                "Configuração de ferramentas de análise",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Maior Valor Percebido",
                    description:
                        "O produto é apresentado por meio de uma experiência visual que transmite confiança e aumenta seu valor percebido.",
                },
                {
                    title: "Experiência Imersiva",
                    description:
                        "Animações avançadas e transições suaves proporcionam uma navegação moderna e memorável.",
                },
                {
                    title: "Alto Desempenho",
                    description:
                        "Imagens e recursos são carregados de forma progressiva para garantir excelente velocidade e performance.",
                },
            ],

            process: [
                {
                    title: "Discovery",
                    description:
                        "Analisamos o produto e definimos a narrativa visual da landing page.",
                },
                {
                    title: "Design Premium",
                    description:
                        "Criamos uma experiência focada em destacar cada benefício do produto.",
                },
                {
                    title: "Desenvolvimento",
                    description:
                        "Implementamos animações, otimização de recursos e funcionalidades interativas.",
                },
            ],

            faq: [
                {
                    question:
                        "As animações afetam o desempenho?",
                    answer:
                        "Não. Todas as animações são implementadas seguindo boas práticas para manter excelentes métricas de Core Web Vitals.",
                },
                {
                    question:
                        "Posso incluir vídeos do produto?",
                    answer:
                        "Sim. A landing page está preparada para integrar vídeos otimizados e galerias multimídia.",
                },
                {
                    question:
                        "Ela é otimizada para campanhas publicitárias?",
                    answer:
                        "Sim. Além do storytelling visual, sua estrutura é desenvolvida para maximizar as conversões em campanhas pagas.",
                },
            ],
        },
    },
};