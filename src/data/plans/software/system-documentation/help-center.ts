import type {
    ServicePlan,
} from "@/types/plan.types";

export const helpCenter: ServicePlan = {
    core: {
        // ────────────────────────────────────
        // Identidad
        // ────────────────────────────────────

        id: "DOC-001",

        slug: "help-center",

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
            "MDX",
            "TypeScript",
            "Tailwind CSS",
        ],

        technologies: [
            "Next.js",
            "MDX",
            "TypeScript",
            "Tailwind CSS",
            "Static Content Generation",
            "Local Text Search",
            "Dynamic Categories",
            "Documentation Schema",
            "Dynamic Sidebar",
            "Syntax Highlighting",
            "Responsive Documentation",
            "Type-safe Components",
        ],

        integrations: [
            "Search APIs",
            "CMS",
            "Analytics Services",
        ],

        // ────────────────────────────────────
        // Multimedia
        // ────────────────────────────────────

        heroImage:
            "/images/services/software/hero/hero-help-center.png",

        image:
            "/images/services/software/hero/hero-help-center.png",
    },

    translations: {
        // ═════════════════════════════════════
        // ESPAÑOL
        // ═════════════════════════════════════

        es: {
            name:
                "Centro de Ayuda",

            title:
                "Centro de Ayuda y Documentación",

            level:
                "🟡 Intermedio",

            category:
                "Documentación de Sistemas",

            description:
                "Centro de ayuda desarrollado con Next.js y MDX para organizar documentación, guías y recursos mediante categorías dinámicas, búsqueda local instantánea y navegación estructurada.",

            time:
                "3-5 semanas",

            imageAlt:
                "Centro de ayuda con documentación organizada, búsqueda local y navegación por categorías",

            target:
                "Empresas, productos digitales y plataformas que necesitan centralizar documentación, guías de uso, preguntas frecuentes y recursos técnicos en una experiencia de navegación rápida y organizada.",

            support:
                "30 días soporte post-entrega",

            useCases: [
                "Centros de ayuda",
                "Documentación de productos",
                "Guías de usuario",
                "Preguntas frecuentes",
                "Manuales digitales",
                "Documentación técnica",
                "Bases de conocimiento",
                "Portales de soporte",
            ],

            includes: [
                "Centro de ayuda",
                "Documentación MDX",
                "Sistema de categorías",
                "Búsqueda local de texto",
                "Sidebar dinámico",
                "Navegación documental",
                "Resaltado de sintaxis",
                "Contenido estructurado",
                "Páginas responsive",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
            ],

            notIncludes: [
                "Sistema completo de soporte con tickets",
                "Chat de soporte en tiempo real",
                "CRM empresarial",
                "CMS empresarial completo",
                "Aplicación móvil nativa",
                "Infraestructura de búsqueda empresarial avanzada",
            ],

            features: [
                "Local Text Search",
                "Dynamic Category Organization",
                "MDX Documentation",
                "Dynamic Sidebar",
                "Syntax Highlighting",
                "Structured Documentation",
                "Static Content Generation",
                "Responsive Navigation",
                "Type-safe Components",
            ],

            deliverables: [
                "Centro de ayuda publicado",
                "Sistema de documentación",
                "Estructura de categorías",
                "Búsqueda local",
                "Sidebar dinámico",
                "Páginas MDX",
                "Resaltado de código",
                "Navegación responsive",
                "Código fuente",
                "Documentación técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Información centralizada",

                    description:
                        "Permite reunir guías, documentación, preguntas frecuentes y recursos de soporte dentro de una única plataforma.",
                },

                {
                    title:
                        "Búsqueda instantánea",

                    description:
                        "La búsqueda local permite encontrar rápidamente contenido relevante sin depender necesariamente de consultas externas.",
                },

                {
                    title:
                        "Organización estructurada",

                    description:
                        "Las categorías y estructuras dinámicas facilitan organizar grandes cantidades de documentación.",
                },

                {
                    title:
                        "Navegación eficiente",

                    description:
                        "El sidebar dinámico permite recorrer la documentación de forma clara y contextual.",
                },
            ],

            process: [
                {
                    title:
                        "Arquitectura documental",

                    description:
                        "Definimos categorías, secciones, páginas y relaciones necesarias para organizar la documentación.",
                },

                {
                    title:
                        "Configuración MDX",

                    description:
                        "Implementamos MDX para combinar contenido documental con componentes interactivos cuando sea necesario.",
                },

                {
                    title:
                        "Construcción de navegación",

                    description:
                        "Desarrollamos la estructura dinámica de categorías, sidebar y navegación entre documentos.",
                },

                {
                    title:
                        "Implementación de búsqueda",

                    description:
                        "Construimos el sistema de búsqueda local para encontrar contenido de manera rápida dentro de la documentación.",
                },

                {
                    title:
                        "Optimización y pruebas",

                    description:
                        "Validamos navegación, búsqueda, contenido, responsive design y rendimiento antes del lanzamiento.",
                },
            ],

            faq: [
                {
                    question:
                        "¿Qué es un Help Center?",

                    answer:
                        "Es una plataforma de documentación destinada a centralizar guías, preguntas frecuentes, manuales y recursos de ayuda para usuarios o equipos.",
                },

                {
                    question:
                        "¿Puede organizar documentación por categorías?",

                    answer:
                        "Sí. El sistema permite definir categorías y estructuras jerárquicas para organizar diferentes tipos de contenido.",
                },

                {
                    question:
                        "¿Incluye búsqueda?",

                    answer:
                        "Sí. El Help Center contempla búsqueda local de texto para encontrar rápidamente contenido dentro de la documentación.",
                },

                {
                    question:
                        "¿Puede utilizar MDX?",

                    answer:
                        "Sí. MDX permite crear documentación estructurada combinando Markdown con componentes React cuando se requiere contenido interactivo.",
                },
            ],
        },

        // ═════════════════════════════════════
        // ENGLISH
        // ═════════════════════════════════════

        en: {
            name:
                "Help Center",

            title:
                "Help Center & Documentation",

            level:
                "🟡 Intermediate",

            category:
                "System Documentation",

            description:
                "Help center built with Next.js and MDX to organize documentation, guides, and resources through dynamic categories, instant local text search, and structured navigation.",

            time:
                "3-5 weeks",

            imageAlt:
                "Help center with organized documentation, local search, and category navigation",

            target:
                "Companies, digital products, and platforms that need to centralize documentation, user guides, FAQs, and technical resources through a fast and organized browsing experience.",

            support:
                "30 days post-delivery support",

            useCases: [
                "Help centers",
                "Product documentation",
                "User guides",
                "Frequently asked questions",
                "Digital manuals",
                "Technical documentation",
                "Knowledge bases",
                "Support portals",
            ],

            includes: [
                "Help center",
                "MDX documentation",
                "Category system",
                "Local text search",
                "Dynamic sidebar",
                "Documentation navigation",
                "Syntax highlighting",
                "Structured content",
                "Responsive pages",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
            ],

            notIncludes: [
                "Complete support ticketing system",
                "Real-time support chat",
                "Enterprise CRM",
                "Complete enterprise CMS",
                "Native mobile application",
                "Advanced enterprise search infrastructure",
            ],

            features: [
                "Local Text Search",
                "Dynamic Category Organization",
                "MDX Documentation",
                "Dynamic Sidebar",
                "Syntax Highlighting",
                "Structured Documentation",
                "Static Content Generation",
                "Responsive Navigation",
                "Type-safe Components",
            ],

            deliverables: [
                "Published help center",
                "Documentation system",
                "Category structure",
                "Local search",
                "Dynamic sidebar",
                "MDX pages",
                "Code syntax highlighting",
                "Responsive navigation",
                "Source code",
                "Technical documentation",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Centralized Information",

                    description:
                        "Brings guides, documentation, FAQs, and support resources together in a single platform.",
                },

                {
                    title:
                        "Instant Search",

                    description:
                        "Local search allows users to quickly find relevant content without necessarily relying on external queries.",
                },

                {
                    title:
                        "Structured Organization",

                    description:
                        "Dynamic categories and structures make it easier to organize large amounts of documentation.",
                },

                {
                    title:
                        "Efficient Navigation",

                    description:
                        "The dynamic sidebar provides clear contextual navigation throughout the documentation.",
                },
            ],

            process: [
                {
                    title:
                        "Documentation Architecture",

                    description:
                        "We define categories, sections, pages, and relationships required to organize the documentation.",
                },

                {
                    title:
                        "MDX Configuration",

                    description:
                        "We implement MDX to combine documentation content with interactive components when required.",
                },

                {
                    title:
                        "Navigation Construction",

                    description:
                        "We build the dynamic category, sidebar, and document navigation structure.",
                },

                {
                    title:
                        "Search Implementation",

                    description:
                        "We build local text search to quickly find content throughout the documentation.",
                },

                {
                    title:
                        "Optimization and Testing",

                    description:
                        "We validate navigation, search, content, responsive design, and performance before launch.",
                },
            ],

            faq: [
                {
                    question:
                        "What is a Help Center?",

                    answer:
                        "It is a documentation platform designed to centralize guides, FAQs, manuals, and support resources for users or teams.",
                },

                {
                    question:
                        "Can documentation be organized by categories?",

                    answer:
                        "Yes. The system supports categories and hierarchical structures for organizing different types of content.",
                },

                {
                    question:
                        "Does it include search?",

                    answer:
                        "Yes. The Help Center includes local text search for quickly finding content within the documentation.",
                },

                {
                    question:
                        "Can it use MDX?",

                    answer:
                        "Yes. MDX allows structured documentation to combine Markdown with React components when interactive content is required.",
                },
            ],
        },

        // ═════════════════════════════════════
        // PORTUGUÊS
        // ═════════════════════════════════════

        pt: {
            name:
                "Central de Ajuda",

            title:
                "Central de Ajuda e Documentação",

            level:
                "🟡 Intermediário",

            category:
                "Documentação de Sistemas",

            description:
                "Central de ajuda desenvolvida com Next.js e MDX para organizar documentação, guias e recursos por meio de categorias dinâmicas, busca local instantânea e navegação estruturada.",

            time:
                "3-5 semanas",

            imageAlt:
                "Central de ajuda com documentação organizada, busca local e navegação por categorias",

            target:
                "Empresas, produtos digitais e plataformas que precisam centralizar documentação, guias de uso, perguntas frequentes e recursos técnicos em uma experiência de navegação rápida e organizada.",

            support:
                "30 dias de suporte pós-entrega",

            useCases: [
                "Centrais de ajuda",
                "Documentação de produtos",
                "Guias de usuário",
                "Perguntas frequentes",
                "Manuais digitais",
                "Documentação técnica",
                "Bases de conhecimento",
                "Portais de suporte",
            ],

            includes: [
                "Central de ajuda",
                "Documentação MDX",
                "Sistema de categorias",
                "Busca local de texto",
                "Sidebar dinâmico",
                "Navegação documental",
                "Destaque de sintaxe",
                "Conteúdo estruturado",
                "Páginas responsivas",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
            ],

            notIncludes: [
                "Sistema completo de tickets",
                "Chat de suporte em tempo real",
                "CRM empresarial",
                "CMS empresarial completo",
                "Aplicação móvel nativa",
                "Infraestrutura avançada de busca empresarial",
            ],

            features: [
                "Local Text Search",
                "Dynamic Category Organization",
                "MDX Documentation",
                "Dynamic Sidebar",
                "Syntax Highlighting",
                "Structured Documentation",
                "Static Content Generation",
                "Responsive Navigation",
                "Type-safe Components",
            ],

            deliverables: [
                "Central de ajuda publicada",
                "Sistema de documentação",
                "Estrutura de categorias",
                "Busca local",
                "Sidebar dinâmico",
                "Páginas MDX",
                "Destaque de sintaxe de código",
                "Navegação responsiva",
                "Código-fonte",
                "Documentação técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Informações centralizadas",

                    description:
                        "Permite reunir guias, documentação, perguntas frequentes e recursos de suporte em uma única plataforma.",
                },

                {
                    title:
                        "Busca instantânea",

                    description:
                        "A busca local permite encontrar rapidamente conteúdo relevante sem depender necessariamente de consultas externas.",
                },

                {
                    title:
                        "Organização estruturada",

                    description:
                        "Categorias e estruturas dinâmicas facilitam a organização de grandes quantidades de documentação.",
                },

                {
                    title:
                        "Navegação eficiente",

                    description:
                        "O sidebar dinâmico permite navegar pela documentação de forma clara e contextual.",
                },
            ],

            process: [
                {
                    title:
                        "Arquitetura documental",

                    description:
                        "Definimos categorias, seções, páginas e relações necessárias para organizar a documentação.",
                },

                {
                    title:
                        "Configuração MDX",

                    description:
                        "Implementamos MDX para combinar conteúdo documental com componentes interativos quando necessário.",
                },

                {
                    title:
                        "Construção da navegação",

                    description:
                        "Desenvolvemos a estrutura dinâmica de categorias, sidebar e navegação entre documentos.",
                },

                {
                    title:
                        "Implementação da busca",

                    description:
                        "Construímos o sistema de busca local para encontrar conteúdo rapidamente dentro da documentação.",
                },

                {
                    title:
                        "Otimização e testes",

                    description:
                        "Validamos navegação, busca, conteúdo, design responsivo e desempenho antes do lançamento.",
                },
            ],

            faq: [
                {
                    question:
                        "O que é uma Central de Ajuda?",

                    answer:
                        "É uma plataforma de documentação destinada a centralizar guias, perguntas frequentes, manuais e recursos de ajuda para usuários ou equipes.",
                },

                {
                    question:
                        "Pode organizar a documentação por categorias?",

                    answer:
                        "Sim. O sistema permite definir categorias e estruturas hierárquicas para organizar diferentes tipos de conteúdo.",
                },

                {
                    question:
                        "Inclui busca?",

                    answer:
                        "Sim. A Central de Ajuda contempla busca local de texto para encontrar rapidamente conteúdo dentro da documentação.",
                },

                {
                    question:
                        "Pode utilizar MDX?",

                    answer:
                        "Sim. O MDX permite criar documentação estruturada combinando Markdown com componentes React quando é necessário conteúdo interativo.",
                },
            ],
        },
    },
};