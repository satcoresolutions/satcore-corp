import type {
    ServicePlan,
} from "@/types/plan.types";

export const completeEcommerce: ServicePlan = {
    core: {
        // ────────────────────────────────────
        // Identidad
        // ────────────────────────────────────

        id: "ECO-003",

        slug: "complete-ecommerce",

        // ────────────────────────────────────
        // Comercial
        // ────────────────────────────────────

        complexity: "⭐⭐⭐⭐⭐ (5/5)",

        price: "$2,100 - $5,000 USD",

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
            "Stripe",
            "Payment Gateways",
            "Relational Database",
            "Inventory Validation",
            "Secure Webhooks",
        ],

        integrations: [
            "Stripe",
            "PayPal",
            "Mercado Pago",
            "Resend",
            "Google Analytics",
            "Google Search Console",
            "Cloudinary",
        ],

        // ────────────────────────────────────
        // Multimedia
        // ────────────────────────────────────

        heroImage:
            "/images/services/software/hero/hero-complete-ecommerce.png",

        image:
            "/images/services/software/hero/hero-complete-ecommerce.png",
    },

    translations: {
        es: {
            name: "E-commerce Completo",

            title:
                "E-commerce Completo",

            level: "🔴 Premium",

            category:
                "Sistemas E-commerce",

            description:
                "Plataforma de comercio electrónico de nivel empresarial con múltiples pasarelas de pago, gestión avanzada de inventario, variantes de productos y una arquitectura escalable preparada para operaciones comerciales de alta demanda.",

            time: "8-14 semanas",

            imageAlt:
                "Plataforma e-commerce empresarial",

            target:
                "Empresas, marcas consolidadas, distribuidores, retailers, fabricantes y negocios con operaciones comerciales que requieren una plataforma robusta y escalable.",

            support:
                "60 días soporte post-entrega",

            useCases: [
                "Tiendas online empresariales",
                "Retail",
                "Distribuidores",
                "Fabricantes",
                "Marcas internacionales",
                "Comercio electrónico B2C y B2B",
            ],

            includes: [
                "Catálogo avanzado",
                "Categorías ilimitadas",
                "Variantes de productos",
                "Carrito persistente",
                "Checkout seguro",
                "Múltiples pasarelas de pago",
                "Control de inventario",
                "Correos automáticos",
                "SEO avanzado",
                "Responsive Design",
            ],

            notIncludes: [
                "Marketplace Multi Vendor",
                "ERP",
                "CRM Empresarial",
                "Sistema POS",
            ],

            features: [
                "Multi Payment Gateway",
                "Inventory Validation",
                "Product Variants",
                "Secure Webhooks",
                "Prisma ORM",
                "Relational Database",
                "Advanced SEO",
                "Performance Optimized",
            ],

            deliverables: [
                "E-commerce publicado",
                "Código fuente",
                "Documentación técnica",
                "Manual administrativo",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Escalabilidad empresarial",

                    description:
                        "Diseñado para soportar grandes catálogos, múltiples categorías y operaciones comerciales en crecimiento.",
                },

                {
                    title:
                        "Proceso de compra robusto",

                    description:
                        "Integración con múltiples métodos de pago y validaciones automáticas para ofrecer una experiencia segura y confiable.",
                },

                {
                    title:
                        "Gestión inteligente",

                    description:
                        "La plataforma controla inventario, variantes y disponibilidad de productos antes de procesar cada pedido.",
                },
            ],

            process: [
                {
                    title:
                        "Arquitectura del negocio",

                    description:
                        "Definimos el catálogo, la estructura de productos, variantes, inventario y flujo completo de compra.",
                },

                {
                    title:
                        "Desarrollo",

                    description:
                        "Implementamos la lógica de negocio, integración de pagos, inventario, automatizaciones y arquitectura de datos.",
                },

                {
                    title:
                        "Validación y lanzamiento",

                    description:
                        "Realizamos pruebas funcionales, rendimiento, seguridad, pagos y despliegue en producción.",
                },
            ],

            faq: [
                {
                    question:
                        "¿Puede integrar varias pasarelas de pago?",

                    answer:
                        "Sí. La plataforma puede integrar múltiples proveedores de pago según los mercados y necesidades del negocio.",
                },

                {
                    question:
                        "¿Controla el inventario automáticamente?",

                    answer:
                        "Sí. Se implementan validaciones para verificar la disponibilidad del stock antes de confirmar una compra.",
                },

                {
                    question:
                        "¿Puede manejar variantes como talla o color?",

                    answer:
                        "Sí. La arquitectura soporta relaciones complejas para productos con múltiples variantes, atributos y combinaciones.",
                },
            ],
        },

        en: {
            name: "Complete E-commerce",

            title:
                "Complete E-commerce",

            level: "🔴 Premium",

            category:
                "E-commerce Systems",

            description:
                "Enterprise-grade e-commerce platform featuring multiple payment gateways, advanced inventory management, product variants and a scalable architecture for high-volume online businesses.",

            time: "8-14 weeks",

            imageAlt:
                "Enterprise e-commerce platform",

            target:
                "Established brands, retailers, manufacturers, distributors and companies requiring a robust and scalable online commerce platform.",

            support:
                "60 days post-delivery support",

            useCases: [
                "Enterprise online stores",
                "Retail",
                "Manufacturers",
                "Wholesale",
                "International brands",
                "B2B & B2C commerce",
            ],

            includes: [
                "Advanced product catalog",
                "Unlimited categories",
                "Product variants",
                "Persistent shopping cart",
                "Secure checkout",
                "Multiple payment gateways",
                "Inventory management",
                "Automatic emails",
                "Advanced SEO",
                "Responsive Design",
            ],

            notIncludes: [
                "Multi-vendor marketplace",
                "ERP",
                "Enterprise CRM",
                "POS System",
            ],

            features: [
                "Multi payment gateways",
                "Inventory validation",
                "Product variants",
                "Secure webhooks",
                "Prisma ORM",
                "Relational database",
                "Advanced SEO",
                "Performance optimized",
            ],

            deliverables: [
                "Published e-commerce platform",
                "Source code",
                "Technical documentation",
                "Administration manual",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Enterprise scalability",

                    description:
                        "Designed to support extensive product catalogs and growing commercial operations.",
                },

                {
                    title:
                        "Reliable checkout",

                    description:
                        "Multiple payment providers and secure purchase validation deliver a dependable shopping experience.",
                },

                {
                    title:
                        "Advanced inventory control",

                    description:
                        "Product availability and variants are validated automatically before every purchase.",
                },
            ],

            process: [
                {
                    title:
                        "Business architecture",

                    description:
                        "We define the catalog structure, inventory model, product variants and checkout workflow.",
                },

                {
                    title:
                        "Development",

                    description:
                        "We implement business logic, payment integrations, inventory validation and database architecture.",
                },

                {
                    title:
                        "Testing & deployment",

                    description:
                        "Security, performance, payments and business workflows are validated before production deployment.",
                },
            ],

            faq: [
                {
                    question:
                        "Can multiple payment gateways be integrated?",

                    answer:
                        "Yes. The platform supports multiple payment providers depending on your business requirements and target markets.",
                },

                {
                    question:
                        "Does it validate inventory automatically?",

                    answer:
                        "Yes. Inventory availability is verified before processing every order to reduce overselling risks.",
                },

                {
                    question:
                        "Can products have variants such as size and color?",

                    answer:
                        "Absolutely. The relational data model supports complex product variants, attributes and combinations.",
                },
            ],
        },
        pt: {
            name: "E-commerce Completo",

            title: "E-commerce Completo",

            level: "🔴 Premium",

            category: "Sistemas de E-commerce",

            description:
                "Plataforma de comércio eletrônico de nível empresarial com múltiplos gateways de pagamento, gerenciamento avançado de estoque, variantes de produtos e uma arquitetura escalável preparada para operações comerciais de alta demanda.",

            time: "8-14 semanas",

            imageAlt:
                "Plataforma empresarial de e-commerce",

            target:
                "Empresas, marcas consolidadas, distribuidores, varejistas, fabricantes e negócios com operações comerciais que necessitam de uma plataforma robusta e escalável.",

            support:
                "60 dias de suporte pós-entrega",

            useCases: [
                "Lojas virtuais empresariais",
                "Varejo",
                "Distribuidores",
                "Fabricantes",
                "Marcas internacionais",
                "Comércio eletrônico B2C e B2B",
            ],

            includes: [
                "Catálogo avançado",
                "Categorias ilimitadas",
                "Variantes de produtos",
                "Carrinho persistente",
                "Checkout seguro",
                "Múltiplos gateways de pagamento",
                "Controle de estoque",
                "E-mails automáticos",
                "SEO avançado",
                "Design responsivo",
            ],

            notIncludes: [
                "Marketplace Multi Vendor",
                "ERP",
                "CRM Empresarial",
                "Sistema POS",
            ],

            features: [
                "Multi Payment Gateway",
                "Inventory Validation",
                "Product Variants",
                "Secure Webhooks",
                "Prisma ORM",
                "Relational Database",
                "Advanced SEO",
                "Performance Optimized",
            ],

            deliverables: [
                "E-commerce publicado",
                "Código-fonte",
                "Documentação técnica",
                "Manual administrativo",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Escalabilidade empresarial",

                    description:
                        "Projetado para suportar grandes catálogos, múltiplas categorias e operações comerciais em constante crescimento.",
                },

                {
                    title:
                        "Processo de compra robusto",

                    description:
                        "Integração com diversos métodos de pagamento e validações automáticas para proporcionar uma experiência segura e confiável.",
                },

                {
                    title:
                        "Gerenciamento inteligente",

                    description:
                        "A plataforma controla o estoque, as variantes e a disponibilidade dos produtos antes de processar cada pedido.",
                },
            ],

            process: [
                {
                    title:
                        "Arquitetura do negócio",

                    description:
                        "Definimos o catálogo, a estrutura dos produtos, variantes, estoque e todo o fluxo de compra.",
                },

                {
                    title:
                        "Desenvolvimento",

                    description:
                        "Implementamos a lógica de negócio, integração com pagamentos, controle de estoque, automações e arquitetura de dados.",
                },

                {
                    title:
                        "Validação e lançamento",

                    description:
                        "Realizamos testes funcionais, de desempenho, segurança, pagamentos e a implantação em produção.",
                },
            ],

            faq: [
                {
                    question:
                        "É possível integrar vários gateways de pagamento?",

                    answer:
                        "Sim. A plataforma pode integrar múltiplos provedores de pagamento de acordo com os mercados e as necessidades do negócio.",
                },

                {
                    question:
                        "O sistema controla o estoque automaticamente?",

                    answer:
                        "Sim. São implementadas validações para verificar a disponibilidade do estoque antes de confirmar uma compra.",
                },

                {
                    question:
                        "É possível gerenciar variantes como tamanho ou cor?",

                    answer:
                        "Sim. A arquitetura suporta relações complexas para produtos com múltiplas variantes, atributos e combinações.",
                },
            ],
        },
    },
};