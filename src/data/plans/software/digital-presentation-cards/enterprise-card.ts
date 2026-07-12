import type {
    ServicePlan,
} from "@/types/plan.types";

export const enterpriseCard: ServicePlan = {
    core: {
        // ────────────────────────────────────
        // Identidad
        // ────────────────────────────────────

        id: "CRD-002",

        slug: "enterprise-card",

        // ────────────────────────────────────
        // Comercial
        // ────────────────────────────────────

        complexity: "⭐⭐ (2/5)",

        price: "$250 - $380 USD",

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
            "PWA",
            "QR Code",
            "NFC Ready",
            "Theme System",
        ],

        integrations: [
            "Google Analytics",
            "Google Maps",
            "WhatsApp",
        ],

        // ────────────────────────────────────
        // Multimedia
        // ────────────────────────────────────

        heroImage:
            "/images/services/software/hero/hero-lp.png",

        image:
            "/images/services/software/hero/hero-lp.png",
    },

    translations: {
        es: {
            name: "Tarjeta Digital Empresarial",

            title:
                "Tarjeta Digital Empresarial",

            level: "🟡 Intermedio",

            category:
                "Tarjetas Digitales",

            description:
                "Sistema de tarjetas digitales corporativas con múltiples perfiles, identidad visual unificada y estructura preparada para empresas, equipos comerciales y organizaciones.",

            time: "1-2 semanas",

            imageAlt:
                "Tarjetas digitales empresariales",

            target:
                "Empresas, agencias, inmobiliarias, equipos comerciales, firmas de consultoría y organizaciones que necesitan múltiples tarjetas digitales bajo una misma identidad corporativa.",

            support:
                "15 días soporte post-entrega",

            useCases: [
                "Equipos comerciales",
                "Empresas",
                "Consultoras",
                "Inmobiliarias",
                "Agencias",
                "Representantes de ventas",
            ],

            includes: [
                "Múltiples perfiles",
                "Diseño corporativo unificado",
                "Variables globales de branding",
                "Logo corporativo",
                "Botones de contacto",
                "WhatsApp",
                "Correo electrónico",
                "Google Maps",
                "Código QR para cada perfil",
                "Instalable como PWA",
            ],

            notIncludes: [
                "Panel administrativo",
                "Base de datos",
                "Autenticación de usuarios",
                "CRM",
            ],

            features: [
                "Multi Perfil",
                "PWA",
                "Responsive",
                "Offline",
                "Variables de branding",
                "QR individual",
                "Compatible con NFC",
                "SEO optimizado",
            ],

            deliverables: [
                "Sistema de tarjetas corporativas",
                "Código fuente",
                "QR para cada colaborador",
                "Manual de uso",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Imagen corporativa consistente",

                    description:
                        "Todos los colaboradores mantienen el mismo diseño, identidad visual y experiencia de marca.",
                },

                {
                    title:
                        "Escalable",

                    description:
                        "La estructura está preparada para incorporar nuevos perfiles de forma sencilla.",
                },

                {
                    title:
                        "Sin servidores",

                    description:
                        "Arquitectura estática basada en Next.js, sin necesidad de bases de datos ni infraestructura compleja.",
                },
            ],

            process: [
                {
                    title:
                        "Definición de identidad",

                    description:
                        "Configuramos la identidad visual, colores, tipografías y estructura corporativa.",
                },

                {
                    title:
                        "Creación de perfiles",

                    description:
                        "Desarrollamos las tarjetas digitales de cada integrante del equipo.",
                },

                {
                    title:
                        "Entrega",

                    description:
                        "Publicamos el sistema y entregamos todos los códigos QR listos para utilizar.",
                },
            ],

            faq: [
                {
                    question:
                        "¿Cuántos perfiles incluye?",

                    answer:
                        "Incluye una estructura preparada para múltiples perfiles. La cantidad final depende de la propuesta comercial acordada.",
                },

                {
                    question:
                        "¿Todos mantienen el mismo diseño?",

                    answer:
                        "Sí. Todos los perfiles utilizan una identidad visual corporativa consistente y configurable.",
                },

                {
                    question:
                        "¿Es necesario tener una base de datos?",

                    answer:
                        "No. El sistema utiliza una arquitectura estática optimizada, lo que reduce costos de infraestructura y mantenimiento.",
                },
            ],
        },

        en: {
            name: "Enterprise Digital Card",

            title:
                "Enterprise Digital Card",

            level: "🟡 Intermediate",

            category:
                "Digital Business Cards",

            description:
                "Corporate digital business card system with multiple profiles, centralized branding and scalable architecture for companies and sales teams.",

            time: "1-2 weeks",

            imageAlt:
                "Enterprise digital business cards",

            target:
                "Companies, agencies, real estate firms, consulting businesses and sales teams requiring multiple digital cards under one unified brand.",

            support:
                "15 days post-delivery support",

            useCases: [
                "Sales teams",
                "Corporate staff",
                "Consulting firms",
                "Agencies",
                "Real estate companies",
                "Business networking",
            ],

            includes: [
                "Multiple employee profiles",
                "Centralized branding",
                "Corporate logo",
                "Theme variables",
                "Contact buttons",
                "WhatsApp",
                "Email",
                "Google Maps",
                "QR code for every profile",
                "Installable PWA",
            ],

            notIncludes: [
                "Admin dashboard",
                "Database",
                "Authentication",
                "CRM integrations",
            ],

            features: [
                "Multi Profile",
                "PWA",
                "Offline support",
                "Responsive",
                "Centralized branding",
                "Individual QR codes",
                "NFC ready",
                "SEO optimized",
            ],

            deliverables: [
                "Corporate digital card system",
                "Source code",
                "QR codes for each employee",
                "User guide",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Consistent branding",

                    description:
                        "Every employee shares the same professional design and corporate identity.",
                },

                {
                    title:
                        "Scalable architecture",

                    description:
                        "New employee profiles can be added easily while maintaining the same visual identity.",
                },

                {
                    title:
                        "Zero-database architecture",

                    description:
                        "Built with a static architecture that minimizes infrastructure costs and maintenance.",
                },
            ],

            process: [
                {
                    title:
                        "Brand setup",

                    description:
                        "We configure your corporate identity, colors and global theme variables.",
                },

                {
                    title:
                        "Profile creation",

                    description:
                        "We develop each employee's digital business card using the shared branding system.",
                },

                {
                    title:
                        "Deployment",

                    description:
                        "The complete system is published and every employee receives their own QR code.",
                },
            ],

            faq: [
                {
                    question:
                        "How many employee profiles are included?",

                    answer:
                        "The architecture supports multiple profiles. The exact number depends on the selected commercial proposal.",
                },

                {
                    question:
                        "Will every employee have the same design?",

                    answer:
                        "Yes. Every profile follows the same centralized corporate branding while maintaining individual contact information.",
                },

                {
                    question:
                        "Does it require a database?",

                    answer:
                        "No. It uses a static architecture that keeps hosting and maintenance costs very low.",
                },
            ],
        },
        pt: {
            name: "Cartão Digital Empresarial",

            title: "Cartão Digital Empresarial",

            level: "🟡 Intermediário",

            category: "Cartões Digitais",

            description:
                "Sistema de cartões digitais corporativos com múltiplos perfis, identidade visual unificada e estrutura preparada para empresas, equipes comerciais e organizações.",

            time: "1-2 semanas",

            imageAlt: "Cartões digitais empresariais",

            target:
                "Empresas, agências, imobiliárias, equipes comerciais, consultorias e organizações que precisam de múltiplos cartões digitais sob uma única identidade corporativa.",

            support: "15 dias de suporte pós-entrega",

            useCases: [
                "Equipes comerciais",
                "Empresas",
                "Consultorias",
                "Imobiliárias",
                "Agências",
                "Representantes de vendas",
            ],

            includes: [
                "Múltiplos perfis",
                "Design corporativo unificado",
                "Variáveis globais de branding",
                "Logotipo corporativo",
                "Botões de contato",
                "WhatsApp",
                "E-mail",
                "Google Maps",
                "QR Code para cada perfil",
                "Instalável como PWA",
            ],

            notIncludes: [
                "Painel administrativo",
                "Banco de dados",
                "Autenticação de usuários",
                "CRM",
            ],

            features: [
                "Múltiplos perfis",
                "PWA",
                "Responsivo",
                "Offline",
                "Variáveis de branding",
                "QR Code individual",
                "Compatível com NFC",
                "SEO otimizado",
            ],

            deliverables: [
                "Sistema de cartões corporativos",
                "Código-fonte",
                "QR Code para cada colaborador",
                "Manual de uso",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Imagem corporativa consistente",

                    description:
                        "Todos os colaboradores mantêm o mesmo design, identidade visual e experiência de marca.",
                },

                {
                    title: "Escalável",

                    description:
                        "A estrutura está preparada para incorporar novos perfis de forma simples.",
                },

                {
                    title: "Sem servidores",

                    description:
                        "Arquitetura estática baseada em Next.js, sem necessidade de bancos de dados ou infraestrutura complexa.",
                },
            ],

            process: [
                {
                    title: "Definição da identidade",

                    description:
                        "Configuramos a identidade visual, cores, tipografias e a estrutura corporativa.",
                },

                {
                    title: "Criação dos perfis",

                    description:
                        "Desenvolvemos os cartões digitais de cada integrante da equipe.",
                },

                {
                    title: "Entrega",

                    description:
                        "Publicamos o sistema e entregamos todos os QR Codes prontos para uso.",
                },
            ],

            faq: [
                {
                    question: "Quantos perfis estão incluídos?",

                    answer:
                        "Inclui uma estrutura preparada para múltiplos perfis. A quantidade final depende da proposta comercial acordada.",
                },

                {
                    question: "Todos mantêm o mesmo design?",

                    answer:
                        "Sim. Todos os perfis utilizam uma identidade visual corporativa consistente e configurável.",
                },

                {
                    question: "É necessário ter um banco de dados?",

                    answer:
                        "Não. O sistema utiliza uma arquitetura estática otimizada, reduzindo os custos de infraestrutura e manutenção.",
                },
            ],
        },
    },
};