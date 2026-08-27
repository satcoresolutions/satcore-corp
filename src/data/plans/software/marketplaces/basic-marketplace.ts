import type {
    ServicePlan,
} from "@/types/plan.types";

export const basicMarketplace: ServicePlan = {
    core: {
        // ────────────────────────────────────
        // Identidad
        // ────────────────────────────────────

        id: "MKT-001",

        slug: "basic-marketplace",

        // ────────────────────────────────────
        // Comercial
        // ────────────────────────────────────

        complexity: "⭐⭐⭐⭐ (4/5)",

        price: "$3,000 - $4,500 USD",

        pricingType: "fixed",

        automationLevel: "high",

        // ────────────────────────────────────
        // Técnico
        // ────────────────────────────────────

        stack: [
            "Next.js",
            "NestJS",
            "TypeScript",
            "Prisma",
            "PostgreSQL",
            "Stripe",
        ],

        technologies: [
            "Next.js",
            "NestJS",
            "TypeScript",
            "Prisma ORM",
            "PostgreSQL",
            "Stripe",
            "Multi-vendor Catalog",
            "Shopping Cart",
            "Vendor Assignment",
            "REST API",
        ],

        integrations: [
            "Stripe",
            "Cloudinary",
            "Resend",
            "Google Analytics",
        ],

        // ────────────────────────────────────
        // Multimedia
        // ────────────────────────────────────

        heroImage:
            "/images/services/software/hero/hero-basic-marketplace.png",

        image:
            "/images/services/software/hero/hero-basic-marketplace.png",
    },

    translations: {
        es: {
            name: "Marketplace Básico",

            title:
                "Plataforma Marketplace Básica",

            level: "🟠 Avanzado",

            category:
                "Marketplaces",

            description:
                "Plataforma marketplace para centralizar un catálogo de productos, asignar productos a diferentes vendedores y gestionar carritos con múltiples artículos desde una experiencia de compra unificada.",

            time: "10-14 semanas",

            imageAlt:
                "Marketplace con catálogo centralizado, vendedores y carrito de compras",

            target:
                "Empresas y proyectos digitales que necesitan crear un marketplace donde diferentes vendedores puedan ofrecer productos dentro de un catálogo centralizado y los clientes puedan realizar compras mediante un carrito unificado.",

            support:
                "60 días soporte post-entrega",

            useCases: [
                "Marketplaces de productos",
                "Catálogos multi-vendedor",
                "Plataformas comerciales",
                "Tiendas con múltiples vendedores",
                "Comercio digital",
                "Plataformas de productos",
                "Catálogos centralizados",
                "Comercio multi-vendedor",
            ],

            includes: [
                "Marketplace centralizado",
                "Catálogo de productos",
                "Gestión de vendedores",
                "Asignación de productos a vendedores",
                "Páginas de productos",
                "Carrito multi-artículo",
                "Carrito unificado",
                "Gestión de pedidos",
                "Control de inventario básico",
                "Autenticación de usuarios",
                "Panel administrativo",
                "Gestión de categorías",
                "Base de datos relacional",
                "Diseño responsive",
            ],

            notIncludes: [
                "Liquidaciones automatizadas a vendedores",
                "Stripe Connect",
                "Paneles independientes para vendedores",
                "Arquitectura multi-tenant avanzada",
                "Facturación empresarial avanzada",
                "Aplicaciones móviles nativas",
            ],

            features: [
                "Centralized Product Catalog",
                "Vendor Assignment Routing",
                "Multi-item Cart",
                "Unified Shopping Cart",
                "Product Management",
                "Vendor Management",
                "Order Management",
                "Inventory Management",
                "Category Management",
                "User Authentication",
                "Prisma ORM",
                "REST API",
                "Responsive Design",
            ],

            deliverables: [
                "Marketplace publicado",
                "Catálogo centralizado",
                "Sistema de vendedores",
                "Asignación de productos",
                "Carrito multi-artículo",
                "Sistema de pedidos",
                "Panel administrativo",
                "Base de datos configurada",
                "Código fuente",
                "Documentación técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Catálogo centralizado",

                    description:
                        "Permite administrar productos de diferentes vendedores desde una estructura de catálogo unificada.",
                },

                {
                    title:
                        "Experiencia de compra unificada",

                    description:
                        "Los clientes pueden agregar múltiples productos al mismo carrito independientemente del vendedor asociado.",
                },

                {
                    title:
                        "Gestión de vendedores",

                    description:
                        "Permite organizar productos y pedidos asociados a diferentes vendedores dentro de una misma plataforma.",
                },

                {
                    title:
                        "Arquitectura escalable",

                    description:
                        "La estructura puede evolucionar posteriormente hacia un marketplace multi-vendedor con paneles independientes y pagos distribuidos.",
                },
            ],

            process: [
                {
                    title:
                        "Arquitectura del marketplace",

                    description:
                        "Definimos productos, vendedores, categorías, pedidos, carritos y relaciones necesarias para construir la plataforma.",
                },

                {
                    title:
                        "Desarrollo del catálogo",

                    description:
                        "Construimos el catálogo centralizado y las estructuras para administrar productos y asignarlos a diferentes vendedores.",
                },

                {
                    title:
                        "Implementación del carrito",

                    description:
                        "Desarrollamos el carrito multi-artículo y la lógica necesaria para procesar productos provenientes de diferentes vendedores.",
                },

                {
                    title:
                        "Gestión de pedidos",

                    description:
                        "Implementamos las estructuras para registrar pedidos, productos, vendedores y estados de compra.",
                },

                {
                    title:
                        "Pruebas y lanzamiento",

                    description:
                        "Validamos catálogo, vendedores, carrito, pedidos y navegación antes de publicar el marketplace.",
                },
            ],

            faq: [
                {
                    question:
                        "¿Qué es un marketplace?",

                    answer:
                        "Es una plataforma digital donde diferentes vendedores pueden ofrecer productos o servicios dentro de un catálogo común, mientras los clientes realizan sus compras desde una experiencia centralizada.",
                },

                {
                    question:
                        "¿Puede manejar diferentes vendedores?",

                    answer:
                        "Sí. El marketplace permite asociar productos con diferentes vendedores y gestionar la información correspondiente dentro de una estructura centralizada.",
                },

                {
                    question:
                        "¿Puede un cliente comprar productos de diferentes vendedores?",

                    answer:
                        "Sí. El carrito unificado permite agregar múltiples artículos asociados a diferentes vendedores dentro de una misma experiencia de compra.",
                },

                {
                    question:
                        "¿Incluye pagos divididos entre vendedores?",

                    answer:
                        "No en este plan. La distribución automatizada de pagos y liquidaciones mediante Stripe Connect pertenece al plan Multi-Vendor Marketplace.",
                },

                {
                    question:
                        "¿Los vendedores tienen su propio panel?",

                    answer:
                        "El plan básico contempla la gestión centralizada de vendedores. Los paneles independientes y estructuras avanzadas para vendedores pertenecen al plan Multi-Vendor Marketplace.",
                },
            ],
        },
        en: {
            name: "Basic Marketplace",

            title:
                "Basic Marketplace Platform",

            level: "🟠 Advanced",

            category:
                "Marketplaces",

            description:
                "Marketplace platform for centralizing a product catalog, assigning products to different vendors, and managing multi-item carts through a unified shopping experience.",

            time: "10-14 weeks",

            imageAlt:
                "Marketplace with centralized catalog, vendors, and shopping cart",

            target:
                "Companies and digital projects that need to create a marketplace where different vendors can offer products within a centralized catalog and customers can make purchases through a unified shopping cart.",

            support:
                "60 days post-delivery support",

            useCases: [
                "Product marketplaces",
                "Multi-vendor catalogs",
                "Commercial platforms",
                "Multi-vendor stores",
                "Digital commerce",
                "Product platforms",
                "Centralized catalogs",
                "Multi-vendor commerce",
            ],

            includes: [
                "Centralized marketplace",
                "Product catalog",
                "Vendor management",
                "Product-to-vendor assignment",
                "Product pages",
                "Multi-item cart",
                "Unified shopping cart",
                "Order management",
                "Basic inventory management",
                "User authentication",
                "Administrative dashboard",
                "Category management",
                "Relational database",
                "Responsive design",
            ],

            notIncludes: [
                "Automated vendor payouts",
                "Stripe Connect",
                "Independent vendor dashboards",
                "Advanced multi-tenant architecture",
                "Advanced enterprise billing",
                "Native mobile applications",
            ],

            features: [
                "Centralized Product Catalog",
                "Vendor Assignment Routing",
                "Multi-item Cart",
                "Unified Shopping Cart",
                "Product Management",
                "Vendor Management",
                "Order Management",
                "Inventory Management",
                "Category Management",
                "User Authentication",
                "Prisma ORM",
                "REST API",
                "Responsive Design",
            ],

            deliverables: [
                "Published marketplace",
                "Centralized catalog",
                "Vendor management system",
                "Product assignment system",
                "Multi-item cart",
                "Order management system",
                "Administrative dashboard",
                "Configured database",
                "Source code",
                "Technical documentation",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Centralized catalog",

                    description:
                        "Allows products from different vendors to be managed through a unified catalog structure.",
                },

                {
                    title:
                        "Unified shopping experience",

                    description:
                        "Customers can add multiple products to the same cart regardless of the associated vendor.",
                },

                {
                    title:
                        "Vendor management",

                    description:
                        "Allows products and orders associated with different vendors to be organized within the same platform.",
                },

                {
                    title:
                        "Scalable architecture",

                    description:
                        "The structure can later evolve into a multi-vendor marketplace with independent dashboards and distributed payments.",
                },
            ],

            process: [
                {
                    title:
                        "Marketplace architecture",

                    description:
                        "We define products, vendors, categories, orders, carts, and the relationships required to build the platform.",
                },

                {
                    title:
                        "Catalog development",

                    description:
                        "We build the centralized catalog and the structures required to manage products and assign them to different vendors.",
                },

                {
                    title:
                        "Cart implementation",

                    description:
                        "We develop the multi-item cart and the logic required to process products from different vendors.",
                },

                {
                    title:
                        "Order management",

                    description:
                        "We implement the structures required to register orders, products, vendors, and purchase statuses.",
                },

                {
                    title:
                        "Testing and launch",

                    description:
                        "We validate the catalog, vendors, cart, orders, and navigation before publishing the marketplace.",
                },
            ],

            faq: [
                {
                    question:
                        "What is a marketplace?",

                    answer:
                        "It is a digital platform where different vendors can offer products or services within a shared catalog, while customers make purchases through a centralized experience.",
                },

                {
                    question:
                        "Can it manage multiple vendors?",

                    answer:
                        "Yes. The marketplace allows products to be associated with different vendors and manages the corresponding information within a centralized structure.",
                },

                {
                    question:
                        "Can a customer purchase products from different vendors?",

                    answer:
                        "Yes. The unified shopping cart allows customers to add multiple items associated with different vendors within the same shopping experience.",
                },

                {
                    question:
                        "Does it include split payments between vendors?",

                    answer:
                        "Not in this plan. Automated payment distribution and vendor payouts through Stripe Connect are included in the Multi-Vendor Marketplace plan.",
                },

                {
                    question:
                        "Do vendors have their own dashboard?",

                    answer:
                        "The basic plan includes centralized vendor management. Independent dashboards and advanced vendor structures are included in the Multi-Vendor Marketplace plan.",
                },
            ],
        },
        pt: {
            name: "Marketplace Básico",

            title:
                "Plataforma de Marketplace Básica",

            level: "🟠 Avançado",

            category:
                "Marketplaces",

            description:
                "Plataforma de marketplace para centralizar um catálogo de produtos, atribuir produtos a diferentes vendedores e gerenciar carrinhos com múltiplos itens por meio de uma experiência de compra unificada.",

            time: "10-14 semanas",

            imageAlt:
                "Marketplace com catálogo centralizado, vendedores e carrinho de compras",

            target:
                "Empresas e projetos digitais que precisam criar um marketplace onde diferentes vendedores possam oferecer produtos dentro de um catálogo centralizado e os clientes possam realizar compras por meio de um carrinho unificado.",

            support:
                "60 dias de suporte pós-entrega",

            useCases: [
                "Marketplaces de produtos",
                "Catálogos multi-vendedor",
                "Plataformas comerciais",
                "Lojas com múltiplos vendedores",
                "Comércio digital",
                "Plataformas de produtos",
                "Catálogos centralizados",
                "Comércio multi-vendedor",
            ],

            includes: [
                "Marketplace centralizado",
                "Catálogo de produtos",
                "Gestão de vendedores",
                "Atribuição de produtos a vendedores",
                "Páginas de produtos",
                "Carrinho com múltiplos itens",
                "Carrinho unificado",
                "Gestão de pedidos",
                "Gestão básica de estoque",
                "Autenticação de usuários",
                "Painel administrativo",
                "Gestão de categorias",
                "Banco de dados relacional",
                "Design responsivo",
            ],

            notIncludes: [
                "Liquidações automatizadas para vendedores",
                "Stripe Connect",
                "Painéis independentes para vendedores",
                "Arquitetura multi-tenant avançada",
                "Faturamento empresarial avançado",
                "Aplicativos móveis nativos",
            ],

            features: [
                "Centralized Product Catalog",
                "Vendor Assignment Routing",
                "Multi-item Cart",
                "Unified Shopping Cart",
                "Product Management",
                "Vendor Management",
                "Order Management",
                "Inventory Management",
                "Category Management",
                "User Authentication",
                "Prisma ORM",
                "REST API",
                "Responsive Design",
            ],

            deliverables: [
                "Marketplace publicado",
                "Catálogo centralizado",
                "Sistema de gestão de vendedores",
                "Sistema de atribuição de produtos",
                "Carrinho com múltiplos itens",
                "Sistema de gestão de pedidos",
                "Painel administrativo",
                "Banco de dados configurado",
                "Código-fonte",
                "Documentação técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Catálogo centralizado",

                    description:
                        "Permite gerenciar produtos de diferentes vendedores por meio de uma estrutura de catálogo unificada.",
                },

                {
                    title:
                        "Experiência de compra unificada",

                    description:
                        "Os clientes podem adicionar vários produtos ao mesmo carrinho, independentemente do vendedor associado.",
                },

                {
                    title:
                        "Gestão de vendedores",

                    description:
                        "Permite organizar produtos e pedidos associados a diferentes vendedores dentro da mesma plataforma.",
                },

                {
                    title:
                        "Arquitetura escalável",

                    description:
                        "A estrutura pode evoluir posteriormente para um marketplace multi-vendedor com painéis independentes e pagamentos distribuídos.",
                },
            ],

            process: [
                {
                    title:
                        "Arquitetura do marketplace",

                    description:
                        "Definimos produtos, vendedores, categorias, pedidos, carrinhos e os relacionamentos necessários para construir a plataforma.",
                },

                {
                    title:
                        "Desenvolvimento do catálogo",

                    description:
                        "Construímos o catálogo centralizado e as estruturas necessárias para gerenciar produtos e atribuí-los a diferentes vendedores.",
                },

                {
                    title:
                        "Implementação do carrinho",

                    description:
                        "Desenvolvemos o carrinho com múltiplos itens e a lógica necessária para processar produtos provenientes de diferentes vendedores.",
                },

                {
                    title:
                        "Gestão de pedidos",

                    description:
                        "Implementamos as estruturas necessárias para registrar pedidos, produtos, vendedores e status das compras.",
                },

                {
                    title:
                        "Testes e lançamento",

                    description:
                        "Validamos o catálogo, vendedores, carrinho, pedidos e navegação antes de publicar o marketplace.",
                },
            ],

            faq: [
                {
                    question:
                        "O que é um marketplace?",

                    answer:
                        "É uma plataforma digital onde diferentes vendedores podem oferecer produtos ou serviços dentro de um catálogo comum, enquanto os clientes realizam suas compras por meio de uma experiência centralizada.",
                },

                {
                    question:
                        "Pode gerenciar diferentes vendedores?",

                    answer:
                        "Sim. O marketplace permite associar produtos a diferentes vendedores e gerenciar as informações correspondentes dentro de uma estrutura centralizada.",
                },

                {
                    question:
                        "Um cliente pode comprar produtos de diferentes vendedores?",

                    answer:
                        "Sim. O carrinho unificado permite adicionar vários itens associados a diferentes vendedores dentro da mesma experiência de compra.",
                },

                {
                    question:
                        "Inclui pagamentos divididos entre vendedores?",

                    answer:
                        "Não neste plano. A distribuição automatizada de pagamentos e as liquidações por meio do Stripe Connect fazem parte do plano Multi-Vendor Marketplace.",
                },

                {
                    question:
                        "Os vendedores possuem seu próprio painel?",

                    answer:
                        "O plano básico contempla a gestão centralizada de vendedores. Os painéis independentes e as estruturas avançadas para vendedores fazem parte do plano Multi-Vendor Marketplace.",
                },
            ],
        },
    },
};