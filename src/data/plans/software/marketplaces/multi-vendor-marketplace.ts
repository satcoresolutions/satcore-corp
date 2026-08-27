import type {
    ServicePlan,
} from "@/types/plan.types";

export const multiVendorMarketplace: ServicePlan = {
    core: {
        // ────────────────────────────────────
        // Identidad
        // ────────────────────────────────────

        id: "MKT-002",

        slug: "multi-vendor-marketplace",

        // ────────────────────────────────────
        // Comercial
        // ────────────────────────────────────

        complexity: "⭐⭐⭐⭐⭐ (5/5)",

        price: "$4,500 - $8,500+ USD",

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
            "Stripe Connect",
        ],

        technologies: [
            "Next.js",
            "NestJS",
            "TypeScript",
            "Prisma ORM",
            "PostgreSQL",
            "Stripe Connect",
            "Multi-tenant Architecture",
            "Vendor Management",
            "Payment Splitting",
            "Automated Payouts",
            "Merchant Panels",
            "REST API",
        ],

        integrations: [
            "Stripe Connect",
            "Stripe",
            "Cloudinary",
            "Resend",
            "Google Analytics",
        ],

        // ────────────────────────────────────
        // Multimedia
        // ────────────────────────────────────

        heroImage:
            "/images/services/software/hero/hero-multi-vendor-marketplace.png",

        image:
            "/images/services/software/hero/hero-multi-vendor-marketplace.png",
    },

    translations: {
        es: {
            name: "Marketplace Multi-Vendedor",

            title:
                "Plataforma Marketplace Multi-Vendedor",

            level: "🔴 Avanzado",

            category:
                "Marketplaces",

            description:
                "Plataforma marketplace avanzada para múltiples vendedores con aislamiento de información, paneles independientes, distribución automatizada de pagos mediante Stripe Connect y estructuras multi-tenant.",

            time: "14-20 semanas",

            imageAlt:
                "Marketplace multi-vendedor con paneles de comerciantes y pagos automatizados",

            target:
                "Empresas, plataformas comerciales y proyectos digitales que necesitan operar un marketplace con múltiples vendedores, paneles independientes, separación de información y procesos automatizados de distribución de pagos.",

            support:
                "90 días soporte post-entrega",

            useCases: [
                "Marketplaces multi-vendedor",
                "Plataformas comerciales",
                "Comercio electrónico distribuido",
                "Plataformas de vendedores",
                "Marketplaces especializados",
                "Plataformas de servicios",
                "Comercio multi-tenant",
                "Plataformas con pagos distribuidos",
            ],

            includes: [
                "Marketplace multi-vendedor",
                "Arquitectura multi-tenant",
                "Aislamiento de vendedores",
                "Paneles independientes para vendedores",
                "Gestión de productos",
                "Gestión de catálogos",
                "Carrito multi-artículo",
                "Gestión de pedidos",
                "Stripe Connect",
                "Distribución de pagos",
                "Liquidaciones automatizadas",
                "Gestión de cuentas de vendedores",
                "Gestión de comisiones",
                "Estados de pagos",
                "Control de acceso",
                "Gestión de usuarios",
                "Panel administrativo",
                "Registros de auditoría",
                "Base de datos relacional",
                "Diseño responsive",
            ],

            notIncludes: [
                "Infraestructura financiera regulada personalizada",
                "Sistemas bancarios propios",
                "Contabilidad empresarial completa",
                "Integraciones ERP no contempladas",
                "Aplicaciones móviles nativas",
                "Arquitecturas enterprise altamente distribuidas",
            ],

            features: [
                "Multi-Vendor Marketplace",
                "Multi-tenant Vendor Isolation",
                "Stripe Connect",
                "Automated Vendor Payouts",
                "Payment Splitting",
                "Merchant Panels",
                "Vendor Management",
                "Product Management",
                "Order Management",
                "Commission Management",
                "Payment State Management",
                "Access Control",
                "Audit Logs",
                "Prisma ORM",
                "REST API",
                "Responsive Design",
            ],

            deliverables: [
                "Marketplace multi-vendedor publicado",
                "Arquitectura multi-tenant",
                "Paneles de vendedores",
                "Sistema de gestión de productos",
                "Carrito multi-artículo",
                "Sistema de pedidos",
                "Integración con Stripe Connect",
                "Distribución automatizada de pagos",
                "Sistema de comisiones",
                "Panel administrativo",
                "Registros de auditoría",
                "Base de datos configurada",
                "Código fuente",
                "Documentación técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Ecosistema multi-vendedor",

                    description:
                        "Permite operar múltiples vendedores dentro de una misma plataforma manteniendo separadas sus operaciones e información.",
                },

                {
                    title:
                        "Pagos automatizados",

                    description:
                        "Stripe Connect permite estructurar procesos de distribución de pagos y liquidaciones para los diferentes vendedores.",
                },

                {
                    title:
                        "Paneles independientes",

                    description:
                        "Cada vendedor puede disponer de un espacio administrativo para gestionar sus productos, pedidos, información y operaciones.",
                },

                {
                    title:
                        "Aislamiento de información",

                    description:
                        "La arquitectura multi-tenant permite separar la información y operaciones de cada vendedor dentro de la plataforma.",
                },

                {
                    title:
                        "Automatización comercial",

                    description:
                        "La integración de pagos, pedidos, comisiones y operaciones de vendedores permite reducir procesos manuales dentro del marketplace.",
                },
            ],

            process: [
                {
                    title:
                        "Arquitectura multi-vendedor",

                    description:
                        "Diseñamos vendedores, cuentas, productos, pedidos, comisiones, pagos y estructuras de aislamiento de información.",
                },

                {
                    title:
                        "Desarrollo del marketplace",

                    description:
                        "Construimos la plataforma utilizando Next.js, NestJS, TypeScript, Prisma y PostgreSQL.",
                },

                {
                    title:
                        "Paneles de comerciantes",

                    description:
                        "Implementamos espacios administrativos independientes para que cada vendedor pueda gestionar sus productos, pedidos y operaciones.",
                },

                {
                    title:
                        "Integración de pagos",

                    description:
                        "Integramos Stripe Connect para estructurar la distribución de pagos, cuentas conectadas y flujos automatizados de liquidación.",
                },

                {
                    title:
                        "Aislamiento y seguridad",

                    description:
                        "Configuramos las capas de acceso y separación de información necesarias para mantener aisladas las operaciones de cada vendedor.",
                },

                {
                    title:
                        "Pruebas y lanzamiento",

                    description:
                        "Realizamos pruebas de vendedores, carritos, pedidos, pagos, comisiones, permisos y diferentes escenarios de operación antes del lanzamiento.",
                },
            ],

            faq: [
                {
                    question:
                        "¿Qué diferencia existe entre Basic Marketplace y Multi-Vendor Marketplace?",

                    answer:
                        "Basic Marketplace está orientado a un catálogo centralizado con asignación de productos a vendedores y carrito unificado. Multi-Vendor Marketplace agrega arquitectura multi-tenant, paneles independientes, aislamiento de vendedores y distribución automatizada de pagos mediante Stripe Connect.",
                },

                {
                    question:
                        "¿Cada vendedor puede tener su propio panel?",

                    answer:
                        "Sí. El plan Multi-Vendor Marketplace contempla paneles independientes para que cada vendedor pueda administrar sus productos, pedidos e información correspondiente.",
                },

                {
                    question:
                        "¿Incluye Stripe Connect?",

                    answer:
                        "Sí. El plan contempla integración con Stripe Connect para gestionar cuentas conectadas y estructurar flujos de distribución y liquidación de pagos.",
                },

                {
                    question:
                        "¿Los pagos pueden distribuirse automáticamente?",

                    answer:
                        "Sí. La arquitectura contempla procesos automatizados para distribuir los pagos correspondientes a los diferentes vendedores según las reglas configuradas para el marketplace.",
                },

                {
                    question:
                        "¿La información de cada vendedor está aislada?",

                    answer:
                        "Sí. El sistema utiliza estructuras de aislamiento multi-tenant y control de acceso para limitar la información y operaciones disponibles para cada vendedor.",
                },

                {
                    question:
                        "¿Puede manejar comisiones por vendedor?",

                    answer:
                        "Sí. El sistema puede incorporar estructuras de comisiones y calcular los valores correspondientes según las reglas comerciales definidas para cada operación.",
                },

                {
                    question:
                        "¿Puede manejar múltiples productos en un mismo carrito?",

                    answer:
                        "Sí. El marketplace contempla un carrito multi-artículo que puede contener productos asociados a diferentes vendedores.",
                },
            ],
        },
        en: {
            name: "Multi-Vendor Marketplace",

            title:
                "Multi-Vendor Marketplace Platform",

            level: "🔴 Advanced",

            category:
                "Marketplaces",

            description:
                "Advanced marketplace platform for multiple vendors with information isolation, independent dashboards, automated payment distribution through Stripe Connect, and multi-tenant architecture.",

            time: "14-20 weeks",

            imageAlt:
                "Multi-vendor marketplace with merchant dashboards and automated payments",

            target:
                "Companies, commercial platforms, and digital projects that need to operate a marketplace with multiple vendors, independent dashboards, information separation, and automated payment distribution processes.",

            support:
                "90 days post-delivery support",

            useCases: [
                "Multi-vendor marketplaces",
                "Commercial platforms",
                "Distributed e-commerce",
                "Vendor platforms",
                "Specialized marketplaces",
                "Service platforms",
                "Multi-tenant commerce",
                "Platforms with distributed payments",
            ],

            includes: [
                "Multi-vendor marketplace",
                "Multi-tenant architecture",
                "Vendor isolation",
                "Independent vendor dashboards",
                "Product management",
                "Catalog management",
                "Multi-item cart",
                "Order management",
                "Stripe Connect",
                "Payment distribution",
                "Automated payouts",
                "Vendor account management",
                "Commission management",
                "Payment status management",
                "Access control",
                "User management",
                "Administrative dashboard",
                "Audit logs",
                "Relational database",
                "Responsive design",
            ],

            notIncludes: [
                "Custom regulated financial infrastructure",
                "Proprietary banking systems",
                "Complete enterprise accounting",
                "ERP integrations not included in the scope",
                "Native mobile applications",
                "Highly distributed enterprise architectures",
            ],

            features: [
                "Multi-Vendor Marketplace",
                "Multi-tenant Vendor Isolation",
                "Stripe Connect",
                "Automated Vendor Payouts",
                "Payment Splitting",
                "Merchant Panels",
                "Vendor Management",
                "Product Management",
                "Order Management",
                "Commission Management",
                "Payment State Management",
                "Access Control",
                "Audit Logs",
                "Prisma ORM",
                "REST API",
                "Responsive Design",
            ],

            deliverables: [
                "Published multi-vendor marketplace",
                "Multi-tenant architecture",
                "Vendor dashboards",
                "Product management system",
                "Multi-item cart",
                "Order management system",
                "Stripe Connect integration",
                "Automated payment distribution",
                "Commission system",
                "Administrative dashboard",
                "Audit logs",
                "Configured database",
                "Source code",
                "Technical documentation",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Multi-vendor ecosystem",

                    description:
                        "Allows multiple vendors to operate within the same platform while keeping their operations and information separated.",
                },

                {
                    title:
                        "Automated payments",

                    description:
                        "Stripe Connect enables structured payment distribution and payout processes for different vendors.",
                },

                {
                    title:
                        "Independent dashboards",

                    description:
                        "Each vendor can have an administrative space to manage their products, orders, information, and operations.",
                },

                {
                    title:
                        "Information isolation",

                    description:
                        "The multi-tenant architecture allows the information and operations of each vendor to be separated within the platform.",
                },

                {
                    title:
                        "Commercial automation",

                    description:
                        "The integration of payments, orders, commissions, and vendor operations helps reduce manual processes within the marketplace.",
                },
            ],

            process: [
                {
                    title:
                        "Multi-vendor architecture",

                    description:
                        "We design vendors, accounts, products, orders, commissions, payments, and information-isolation structures.",
                },

                {
                    title:
                        "Marketplace development",

                    description:
                        "We build the platform using Next.js, NestJS, TypeScript, Prisma, and PostgreSQL.",
                },

                {
                    title:
                        "Merchant dashboards",

                    description:
                        "We implement independent administrative spaces so each vendor can manage their products, orders, and operations.",
                },

                {
                    title:
                        "Payment integration",

                    description:
                        "We integrate Stripe Connect to structure payment distribution, connected accounts, and automated payout workflows.",
                },

                {
                    title:
                        "Isolation and security",

                    description:
                        "We configure the access and information-separation layers required to keep each vendor's operations isolated.",
                },

                {
                    title:
                        "Testing and launch",

                    description:
                        "We perform tests for vendors, carts, orders, payments, commissions, permissions, and different operational scenarios before launch.",
                },
            ],

            faq: [
                {
                    question:
                        "What is the difference between Basic Marketplace and Multi-Vendor Marketplace?",

                    answer:
                        "Basic Marketplace is focused on a centralized catalog with product assignment to vendors and a unified shopping cart. Multi-Vendor Marketplace adds multi-tenant architecture, independent dashboards, vendor isolation, and automated payment distribution through Stripe Connect.",
                },

                {
                    question:
                        "Can each vendor have their own dashboard?",

                    answer:
                        "Yes. The Multi-Vendor Marketplace plan includes independent dashboards so each vendor can manage their products, orders, and corresponding information.",
                },

                {
                    question:
                        "Does it include Stripe Connect?",

                    answer:
                        "Yes. The plan includes Stripe Connect integration to manage connected accounts and structure payment distribution and payout workflows.",
                },

                {
                    question:
                        "Can payments be distributed automatically?",

                    answer:
                        "Yes. The architecture supports automated processes for distributing payments to different vendors according to the rules configured for the marketplace.",
                },

                {
                    question:
                        "Is each vendor's information isolated?",

                    answer:
                        "Yes. The system uses multi-tenant isolation structures and access control to limit the information and operations available to each vendor.",
                },

                {
                    question:
                        "Can it handle commissions per vendor?",

                    answer:
                        "Yes. The system can incorporate commission structures and calculate the corresponding amounts according to the commercial rules defined for each transaction.",
                },

                {
                    question:
                        "Can it handle multiple products in the same cart?",

                    answer:
                        "Yes. The marketplace includes a multi-item cart that can contain products associated with different vendors.",
                },
            ],
        },
        pt: {
            name: "Marketplace Multi-Vendedor",

            title:
                "Plataforma de Marketplace Multi-Vendedor",

            level: "🔴 Avançado",

            category:
                "Marketplaces",

            description:
                "Plataforma avançada de marketplace para múltiplos vendedores, com isolamento de informações, painéis independentes, distribuição automatizada de pagamentos por meio do Stripe Connect e arquitetura multi-tenant.",

            time: "14-20 semanas",

            imageAlt:
                "Marketplace multi-vendedor com painéis de comerciantes e pagamentos automatizados",

            target:
                "Empresas, plataformas comerciais e projetos digitais que precisam operar um marketplace com múltiplos vendedores, painéis independentes, separação de informações e processos automatizados de distribuição de pagamentos.",

            support:
                "90 dias de suporte pós-entrega",

            useCases: [
                "Marketplaces multi-vendedor",
                "Plataformas comerciais",
                "Comércio eletrônico distribuído",
                "Plataformas de vendedores",
                "Marketplaces especializados",
                "Plataformas de serviços",
                "Comércio multi-tenant",
                "Plataformas com pagamentos distribuídos",
            ],

            includes: [
                "Marketplace multi-vendedor",
                "Arquitetura multi-tenant",
                "Isolamento de vendedores",
                "Painéis independentes para vendedores",
                "Gestão de produtos",
                "Gestão de catálogos",
                "Carrinho com múltiplos itens",
                "Gestão de pedidos",
                "Stripe Connect",
                "Distribuição de pagamentos",
                "Liquidações automatizadas",
                "Gestão de contas de vendedores",
                "Gestão de comissões",
                "Gestão de status de pagamentos",
                "Controle de acesso",
                "Gestão de usuários",
                "Painel administrativo",
                "Registros de auditoria",
                "Banco de dados relacional",
                "Design responsivo",
            ],

            notIncludes: [
                "Infraestrutura financeira regulamentada personalizada",
                "Sistemas bancários próprios",
                "Contabilidade empresarial completa",
                "Integrações ERP não contempladas",
                "Aplicativos móveis nativos",
                "Arquiteturas empresariais altamente distribuídas",
            ],

            features: [
                "Multi-Vendor Marketplace",
                "Multi-tenant Vendor Isolation",
                "Stripe Connect",
                "Automated Vendor Payouts",
                "Payment Splitting",
                "Merchant Panels",
                "Vendor Management",
                "Product Management",
                "Order Management",
                "Commission Management",
                "Payment State Management",
                "Access Control",
                "Audit Logs",
                "Prisma ORM",
                "REST API",
                "Responsive Design",
            ],

            deliverables: [
                "Marketplace multi-vendedor publicado",
                "Arquitetura multi-tenant",
                "Painéis de vendedores",
                "Sistema de gestão de produtos",
                "Carrinho com múltiplos itens",
                "Sistema de gestão de pedidos",
                "Integração com Stripe Connect",
                "Distribuição automatizada de pagamentos",
                "Sistema de comissões",
                "Painel administrativo",
                "Registros de auditoria",
                "Banco de dados configurado",
                "Código-fonte",
                "Documentação técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Ecossistema multi-vendedor",

                    description:
                        "Permite operar múltiplos vendedores dentro da mesma plataforma, mantendo suas operações e informações separadas.",
                },

                {
                    title:
                        "Pagamentos automatizados",

                    description:
                        "O Stripe Connect permite estruturar processos de distribuição de pagamentos e liquidações para os diferentes vendedores.",
                },

                {
                    title:
                        "Painéis independentes",

                    description:
                        "Cada vendedor pode ter um espaço administrativo para gerenciar seus produtos, pedidos, informações e operações.",
                },

                {
                    title:
                        "Isolamento de informações",

                    description:
                        "A arquitetura multi-tenant permite separar as informações e operações de cada vendedor dentro da plataforma.",
                },

                {
                    title:
                        "Automação comercial",

                    description:
                        "A integração de pagamentos, pedidos, comissões e operações dos vendedores ajuda a reduzir processos manuais dentro do marketplace.",
                },
            ],

            process: [
                {
                    title:
                        "Arquitetura multi-vendedor",

                    description:
                        "Projetamos vendedores, contas, produtos, pedidos, comissões, pagamentos e estruturas de isolamento de informações.",
                },

                {
                    title:
                        "Desenvolvimento do marketplace",

                    description:
                        "Construímos a plataforma utilizando Next.js, NestJS, TypeScript, Prisma e PostgreSQL.",
                },

                {
                    title:
                        "Painéis de comerciantes",

                    description:
                        "Implementamos espaços administrativos independentes para que cada vendedor possa gerenciar seus produtos, pedidos e operações.",
                },

                {
                    title:
                        "Integração de pagamentos",

                    description:
                        "Integramos o Stripe Connect para estruturar a distribuição de pagamentos, contas conectadas e fluxos automatizados de liquidação.",
                },

                {
                    title:
                        "Isolamento e segurança",

                    description:
                        "Configuramos as camadas de acesso e separação de informações necessárias para manter isoladas as operações de cada vendedor.",
                },

                {
                    title:
                        "Testes e lançamento",

                    description:
                        "Realizamos testes de vendedores, carrinhos, pedidos, pagamentos, comissões, permissões e diferentes cenários de operação antes do lançamento.",
                },
            ],

            faq: [
                {
                    question:
                        "Qual é a diferença entre Basic Marketplace e Multi-Vendor Marketplace?",

                    answer:
                        "O Basic Marketplace é voltado para um catálogo centralizado com atribuição de produtos a vendedores e carrinho unificado. O Multi-Vendor Marketplace adiciona arquitetura multi-tenant, painéis independentes, isolamento de vendedores e distribuição automatizada de pagamentos por meio do Stripe Connect.",
                },

                {
                    question:
                        "Cada vendedor pode ter seu próprio painel?",

                    answer:
                        "Sim. O plano Multi-Vendor Marketplace contempla painéis independentes para que cada vendedor possa gerenciar seus produtos, pedidos e informações correspondentes.",
                },

                {
                    question:
                        "Inclui Stripe Connect?",

                    answer:
                        "Sim. O plano contempla integração com o Stripe Connect para gerenciar contas conectadas e estruturar fluxos de distribuição e liquidação de pagamentos.",
                },

                {
                    question:
                        "Os pagamentos podem ser distribuídos automaticamente?",

                    answer:
                        "Sim. A arquitetura contempla processos automatizados para distribuir os pagamentos correspondentes aos diferentes vendedores de acordo com as regras configuradas para o marketplace.",
                },

                {
                    question:
                        "As informações de cada vendedor ficam isoladas?",

                    answer:
                        "Sim. O sistema utiliza estruturas de isolamento multi-tenant e controle de acesso para limitar as informações e operações disponíveis para cada vendedor.",
                },

                {
                    question:
                        "Pode gerenciar comissões por vendedor?",

                    answer:
                        "Sim. O sistema pode incorporar estruturas de comissões e calcular os valores correspondentes de acordo com as regras comerciais definidas para cada operação.",
                },

                {
                    question:
                        "Pode gerenciar vários produtos no mesmo carrinho?",

                    answer:
                        "Sim. O marketplace contempla um carrinho com múltiplos itens que pode conter produtos associados a diferentes vendedores.",
                },
            ],
        },
    },
};