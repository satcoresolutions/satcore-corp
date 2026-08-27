import type { ServicePlan } from "@/types/plan.types";

export const subscriptionPlatform: ServicePlan = {
    core: {
        id: "MEM-002",

        slug: "subscription-platform",

        complexity: "⭐⭐⭐⭐⭐ (5/5)",

        price: "$2,250 - $4,000 USD",

        pricingType: "fixed",

        automationLevel: "high",

        stack: [
            "Next.js",
            "TypeScript",
            "Prisma",
            "Stripe",
        ],

        technologies: [
            "Next.js",
            "TypeScript",
            "Prisma",
            "Stripe",
            "Subscription Management",
            "Recurring Billing",
            "Payment Management",
            "Subscription Tiers",
            "Billing States",
            "Webhook Processing",
            "Protected Content",
            "Role-based Access",
            "Responsive Design",
        ],

        integrations: [
            "Stripe",
            "Stripe Webhooks",
            "Prisma",
            "Authentication Services",
            "Email Services",
        ],

        heroImage:
            "/images/services/software/hero/hero-subscription-platform.png",

        image:
            "/images/services/software/hero/hero-subscription-platform.png",
    },

    translations: {
        es: {
            name: "Subscription Platform",

            title: "Plataforma de Suscripciones",

            level: "🔴 Experto",

            category: "Plataformas de Membresía",

            description:
                "Plataforma de suscripciones con ciclos de facturación automatizados, diferentes niveles de membresía y gestión de pagos mediante Stripe.",

            time: "8-12 semanas",

            imageAlt:
                "Plataforma de suscripciones con planes, facturación recurrente y gestión de pagos",

            target:
                "Empresas y productos digitales que necesitan monetizar servicios o contenido mediante suscripciones recurrentes y diferentes niveles de acceso.",

            support:
                "60 días soporte post-entrega",

            useCases: [
                "Suscripciones digitales",
                "SaaS",
                "Contenido premium",
                "Planes recurrentes",
                "Membresías",
                "Servicios digitales",
                "Productos por suscripción",
                "Gestión de pagos",
            ],

            includes: [
                "Gestión de suscripciones",
                "Planes de suscripción",
                "Niveles de membresía",
                "Facturación recurrente",
                "Gestión de pagos",
                "Estados de suscripción",
                "Integración Stripe",
                "Stripe Webhooks",
                "Control de acceso",
                "Contenido restringido",
                "Gestión de usuarios",
                "Historial de pagos",
                "Prisma",
                "Diseño responsive",
            ],

            notIncludes: [
                "Procesamiento de pagos fuera de Stripe",
                "ERP financiero completo",
                "Contabilidad empresarial",
                "Aplicaciones móviles nativas",
                "Marketplace multi-vendedor",
                "Infraestructura financiera empresarial completa",
            ],

            features: [
                "Subscription Management",
                "Recurring Billing",
                "Subscription Tiers",
                "Payment Management",
                "Billing States",
                "Stripe Webhooks",
                "Membership Roles",
                "Gated Content",
                "Access Control",
                "Payment History",
                "User Management",
                "Responsive Design",
            ],

            deliverables: [
                "Plataforma de suscripciones publicada",
                "Planes de suscripción",
                "Gestión de ciclos de facturación",
                "Estados de suscripción",
                "Gestión de pagos",
                "Integración Stripe",
                "Webhooks de Stripe",
                "Control de acceso",
                "Historial de pagos",
                "Base de datos Prisma",
                "Código fuente",
                "Documentación técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Facturación recurrente",

                    description:
                        "Permite estructurar servicios mediante ciclos de cobro recurrentes gestionados a través de Stripe.",
                },

                {
                    title: "Planes escalables",

                    description:
                        "Los diferentes niveles de suscripción permiten ofrecer funcionalidades y contenidos según cada plan.",
                },

                {
                    title: "Estados automatizados",

                    description:
                        "Los eventos de Stripe permiten mantener actualizados los estados relacionados con las suscripciones y pagos.",
                },

                {
                    title: "Control de acceso",

                    description:
                        "El sistema puede utilizar el estado de suscripción para determinar qué funcionalidades o contenidos están disponibles.",
                },
            ],

            process: [
                {
                    title: "Diseño de planes",

                    description:
                        "Definimos niveles, precios, ciclos de facturación, beneficios y reglas de acceso.",
                },

                {
                    title: "Integración de Stripe",

                    description:
                        "Configuramos Stripe para gestionar suscripciones, pagos recurrentes y eventos de facturación.",
                },

                {
                    title: "Estados de suscripción",

                    description:
                        "Implementamos la sincronización de estados mediante webhooks y persistencia con Prisma.",
                },

                {
                    title: "Pruebas de facturación",

                    description:
                        "Validamos altas, cambios de plan, estados de pago, cancelaciones y control de acceso antes del lanzamiento.",
                },
            ],

            faq: [
                {
                    question: "¿Qué es una Subscription Platform?",

                    answer:
                        "Es una plataforma que permite ofrecer productos o servicios mediante planes de suscripción y cobros recurrentes.",
                },

                {
                    question: "¿Utiliza Stripe?",

                    answer:
                        "Sí. La solución utiliza Stripe para gestionar pagos y suscripciones recurrentes.",
                },

                {
                    question: "¿Puede manejar diferentes planes?",

                    answer:
                        "Sí. Se pueden definir diferentes niveles de suscripción con sus propias características y reglas de acceso.",
                },

                {
                    question: "¿Cómo se actualizan los estados de pago?",

                    answer:
                        "La arquitectura utiliza eventos y webhooks de Stripe para sincronizar los estados de suscripción y facturación.",
                },
            ],
        },

        en: {
            name: "Subscription Platform",

            title: "Subscription Platform",

            level: "🔴 Expert",

            category: "Membership Platforms",

            description:
                "Subscription platform with automated billing cycles, multiple membership tiers, and payment management through Stripe.",

            time: "8-12 weeks",

            imageAlt:
                "Subscription platform with plans, recurring billing, and payment management",

            target:
                "Businesses and digital products that need to monetize services or content through recurring subscriptions and different access levels.",

            support:
                "60 days post-delivery support",

            useCases: [
                "Digital subscriptions",
                "SaaS",
                "Premium content",
                "Recurring plans",
                "Memberships",
                "Digital services",
                "Subscription products",
                "Payment management",
            ],

            includes: [
                "Subscription management",
                "Subscription plans",
                "Membership tiers",
                "Recurring billing",
                "Payment management",
                "Subscription states",
                "Stripe integration",
                "Stripe Webhooks",
                "Access control",
                "Restricted content",
                "User management",
                "Payment history",
                "Prisma",
                "Responsive design",
            ],

            notIncludes: [
                "Payment processing outside Stripe",
                "Complete financial ERP",
                "Enterprise accounting",
                "Native mobile applications",
                "Multi-vendor marketplace",
                "Complete enterprise financial infrastructure",
            ],

            features: [
                "Subscription Management",
                "Recurring Billing",
                "Subscription Tiers",
                "Payment Management",
                "Billing States",
                "Stripe Webhooks",
                "Membership Roles",
                "Gated Content",
                "Access Control",
                "Payment History",
                "User Management",
                "Responsive Design",
            ],

            deliverables: [
                "Published subscription platform",
                "Subscription plans",
                "Billing cycle management",
                "Subscription states",
                "Payment management",
                "Stripe integration",
                "Stripe webhooks",
                "Access control",
                "Payment history",
                "Prisma database",
                "Source code",
                "Technical documentation",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Recurring Billing",

                    description:
                        "Supports recurring service billing cycles managed through Stripe.",
                },

                {
                    title: "Scalable Plans",

                    description:
                        "Multiple subscription tiers allow different features and content to be offered according to each plan.",
                },

                {
                    title: "Automated States",

                    description:
                        "Stripe events keep subscription and payment-related states synchronized.",
                },

                {
                    title: "Access Control",

                    description:
                        "Subscription status can determine which features or content are available to users.",
                },
            ],

            process: [
                {
                    title: "Plan Design",

                    description:
                        "We define tiers, pricing, billing cycles, benefits, and access rules.",
                },

                {
                    title: "Stripe Integration",

                    description:
                        "We configure Stripe to manage subscriptions, recurring payments, and billing events.",
                },

                {
                    title: "Subscription States",

                    description:
                        "We synchronize subscription states through webhooks and Prisma persistence.",
                },

                {
                    title: "Billing Testing",

                    description:
                        "We validate sign-ups, plan changes, payment states, cancellations, and access control before launch.",
                },
            ],

            faq: [
                {
                    question: "What is a Subscription Platform?",

                    answer:
                        "It is a platform that allows products or services to be offered through subscription plans and recurring payments.",
                },

                {
                    question: "Does it use Stripe?",

                    answer:
                        "Yes. The solution uses Stripe to manage payments and recurring subscriptions.",
                },

                {
                    question: "Can it manage different plans?",

                    answer:
                        "Yes. Multiple subscription tiers can be defined with their own features and access rules.",
                },

                {
                    question: "How are payment states updated?",

                    answer:
                        "The architecture uses Stripe events and webhooks to synchronize subscription and billing states.",
                },
            ],
        },

        pt: {
            name: "Subscription Platform",

            title: "Plataforma de Assinaturas",

            level: "🔴 Especialista",

            category: "Plataformas de Membros",

            description:
                "Plataforma de assinaturas com ciclos de cobrança automatizados, diferentes níveis de associação e gestão de pagamentos por meio do Stripe.",

            time: "8-12 semanas",

            imageAlt:
                "Plataforma de assinaturas com planos, cobrança recorrente e gestão de pagamentos",

            target:
                "Empresas e produtos digitais que precisam monetizar serviços ou conteúdos por meio de assinaturas recorrentes e diferentes níveis de acesso.",

            support:
                "60 dias de suporte pós-entrega",

            useCases: [
                "Assinaturas digitais",
                "SaaS",
                "Conteúdo premium",
                "Planos recorrentes",
                "Associações",
                "Serviços digitais",
                "Produtos por assinatura",
                "Gestão de pagamentos",
            ],

            includes: [
                "Gestão de assinaturas",
                "Planos de assinatura",
                "Níveis de associação",
                "Cobrança recorrente",
                "Gestão de pagamentos",
                "Estados de assinatura",
                "Integração Stripe",
                "Stripe Webhooks",
                "Controle de acesso",
                "Conteúdo restrito",
                "Gestão de usuários",
                "Histórico de pagamentos",
                "Prisma",
                "Design responsivo",
            ],

            notIncludes: [
                "Processamento de pagamentos fora do Stripe",
                "ERP financeiro completo",
                "Contabilidade empresarial",
                "Aplicativos móveis nativos",
                "Marketplace multivendedor",
                "Infraestrutura financeira empresarial completa",
            ],

            features: [
                "Subscription Management",
                "Recurring Billing",
                "Subscription Tiers",
                "Payment Management",
                "Billing States",
                "Stripe Webhooks",
                "Membership Roles",
                "Gated Content",
                "Access Control",
                "Payment History",
                "User Management",
                "Responsive Design",
            ],

            deliverables: [
                "Plataforma de assinaturas publicada",
                "Planos de assinatura",
                "Gestão dos ciclos de cobrança",
                "Estados de assinatura",
                "Gestão de pagamentos",
                "Integração Stripe",
                "Webhooks do Stripe",
                "Controle de acesso",
                "Histórico de pagamentos",
                "Banco de dados Prisma",
                "Código-fonte",
                "Documentação técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Cobrança recorrente",

                    description:
                        "Permite estruturar serviços por meio de ciclos de cobrança recorrentes gerenciados pelo Stripe.",
                },

                {
                    title: "Planos escaláveis",

                    description:
                        "Os diferentes níveis de assinatura permitem oferecer funcionalidades e conteúdos de acordo com cada plano.",
                },

                {
                    title: "Estados automatizados",

                    description:
                        "Os eventos do Stripe mantêm atualizados os estados relacionados às assinaturas e pagamentos.",
                },

                {
                    title: "Controle de acesso",

                    description:
                        "O estado da assinatura pode determinar quais funcionalidades ou conteúdos estão disponíveis.",
                },
            ],

            process: [
                {
                    title: "Design dos planos",

                    description:
                        "Definimos níveis, preços, ciclos de cobrança, benefícios e regras de acesso.",
                },

                {
                    title: "Integração do Stripe",

                    description:
                        "Configuramos o Stripe para gerenciar assinaturas, pagamentos recorrentes e eventos de cobrança.",
                },

                {
                    title: "Estados das assinaturas",

                    description:
                        "Implementamos a sincronização dos estados por meio de webhooks e persistência com Prisma.",
                },

                {
                    title: "Testes de cobrança",

                    description:
                        "Validamos inscrições, alterações de planos, estados de pagamento, cancelamentos e controle de acesso antes do lançamento.",
                },
            ],

            faq: [
                {
                    question: "O que é uma Subscription Platform?",

                    answer:
                        "É uma plataforma que permite oferecer produtos ou serviços por meio de planos de assinatura e pagamentos recorrentes.",
                },

                {
                    question: "Utiliza Stripe?",

                    answer:
                        "Sim. A solução utiliza Stripe para gerenciar pagamentos e assinaturas recorrentes.",
                },

                {
                    question: "Pode gerenciar diferentes planos?",

                    answer:
                        "Sim. Podem ser definidos diferentes níveis de assinatura com suas próprias características e regras de acesso.",
                },

                {
                    question: "Como os estados de pagamento são atualizados?",

                    answer:
                        "A arquitetura utiliza eventos e webhooks do Stripe para sincronizar os estados de assinatura e cobrança.",
                },
            ],
        },
    },
};