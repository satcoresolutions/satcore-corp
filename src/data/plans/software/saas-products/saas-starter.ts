import type {
    ServicePlan,
} from "@/types/plan.types";

export const saasStarter: ServicePlan = {
    core: {
        // ────────────────────────────────────
        // Identidad
        // ────────────────────────────────────

        id: "SAAS-001",

        slug: "saas-starter",

        // ────────────────────────────────────
        // Comercial
        // ────────────────────────────────────

        complexity: "⭐⭐⭐⭐ (4/5)",

        price: "$3,500 - $5,500 USD",

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
            "Redis",
            "Docker",
        ],

        technologies: [
            "Next.js",
            "NestJS",
            "TypeScript",
            "Prisma",
            "Redis",
            "Docker",
            "REST API",
            "Authentication",
            "Authorization",
            "Billing States",
            "Feature Tier Gating",
            "User Account Management",
            "Subscription Management",
            "Type-safe Architecture",
        ],

        integrations: [
            "Payment APIs",
            "Billing Services",
            "Email Services",
            "REST APIs",
            "Authentication Providers",
        ],

        // ────────────────────────────────────
        // Multimedia
        // ────────────────────────────────────

        heroImage:
            "/images/services/software/hero/hero-saas-starter.png",

        image:
            "/images/services/software/hero/hero-saas-starter.png",
    },

    translations: {
        // ═════════════════════════════════════
        // ESPAÑOL
        // ═════════════════════════════════════

        es: {
            name:
                "SaaS Starter",

            title:
                "Plataforma SaaS Starter",

            level:
                "🟠 Avanzado",

            category:
                "Software as a Service",

            description:
                "Plataforma SaaS inicial diseñada para productos digitales basados en suscripciones, incorporando estados de facturación, control de funcionalidades por niveles y una estructura de gestión de cuentas de usuario.",

            time:
                "8-12 semanas",

            imageAlt:
                "Plataforma SaaS Starter con gestión de usuarios, facturación y funcionalidades por niveles",

            target:
                "Startups, empresas y equipos de producto que necesitan desarrollar un producto SaaS con gestión de cuentas, planes comerciales, suscripciones y control de funcionalidades.",

            support:
                "60 días soporte post-entrega",

            useCases: [
                "Plataformas SaaS",
                "Software por suscripción",
                "Productos digitales",
                "Gestión de usuarios",
                "Gestión de cuentas",
                "Planes de suscripción",
                "Control de funcionalidades",
                "Sistemas B2B",
            ],

            includes: [
                "Plataforma SaaS",
                "Frontend Next.js",
                "Backend NestJS",
                "Gestión de cuentas de usuario",
                "Autenticación",
                "Autorización",
                "Estados de facturación",
                "Gestión de suscripciones",
                "Feature tier gating",
                "Control de funcionalidades por plan",
                "API REST",
                "Prisma ORM",
                "Redis",
                "Docker",
                "Arquitectura TypeScript",
                "Componentes responsive",
            ],

            notIncludes: [
                "Arquitectura multi-tenant avanzada",
                "Routing por subdominios",
                "Aislamiento de datos por tenant",
                "Bases de datos independientes por organización",
                "Arquitectura empresarial de billing",
                "Aplicaciones móviles nativas",
                "Infraestructura cloud administrada",
            ],

            features: [
                "User Account Management",
                "Authentication",
                "Authorization",
                "Billing States",
                "Subscription Management",
                "Feature Tier Gating",
                "Plan-based Access Control",
                "REST API",
                "Prisma ORM",
                "Redis",
                "Docker",
                "Type-safe Architecture",
                "Responsive Design",
            ],

            deliverables: [
                "Plataforma SaaS publicada",
                "Frontend Next.js",
                "Backend NestJS",
                "Sistema de gestión de usuarios",
                "Sistema de autenticación",
                "Gestión de cuentas",
                "Gestión de suscripciones",
                "Estados de facturación",
                "Feature gating",
                "API REST",
                "Configuración Prisma",
                "Configuración Redis",
                "Configuración Docker",
                "Código fuente",
                "Documentación técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Base SaaS estructurada",

                    description:
                        "Proporciona una arquitectura inicial para desarrollar productos digitales basados en cuentas, suscripciones y funcionalidades controladas por niveles.",
                },

                {
                    title:
                        "Facturación integrada",

                    description:
                        "La plataforma incorpora estados de facturación que permiten representar el ciclo comercial de las suscripciones.",
                },

                {
                    title:
                        "Control de funcionalidades",

                    description:
                        "El feature tier gating permite determinar qué funcionalidades están disponibles según el nivel o plan del usuario.",
                },

                {
                    title:
                        "Gestión de cuentas",

                    description:
                        "Incluye una estructura centralizada para gestionar usuarios, autenticación, autorización y cuentas dentro de la plataforma.",
                },
            ],

            process: [
                {
                    title:
                        "Diseño del producto SaaS",

                    description:
                        "Definimos usuarios, cuentas, planes, suscripciones, estados de facturación y funcionalidades disponibles por nivel.",
                },

                {
                    title:
                        "Arquitectura backend",

                    description:
                        "Construimos los servicios backend utilizando NestJS, TypeScript, Prisma y Redis para organizar la lógica de negocio y persistencia.",
                },

                {
                    title:
                        "Desarrollo de la plataforma",

                    description:
                        "Desarrollamos la aplicación frontend utilizando Next.js y conectamos sus funcionalidades con los servicios backend.",
                },

                {
                    title:
                        "Billing y feature gating",

                    description:
                        "Implementamos los estados de facturación y las reglas necesarias para controlar funcionalidades según el plan contratado.",
                },

                {
                    title:
                        "Dockerización y validación",

                    description:
                        "Configuramos los servicios mediante Docker y validamos autenticación, cuentas, suscripciones, permisos y funcionalidades antes del lanzamiento.",
                },
            ],

            faq: [
                {
                    question:
                        "¿Qué es un SaaS Starter?",

                    answer:
                        "Es una plataforma inicial de Software as a Service diseñada para construir productos digitales basados en cuentas de usuario, suscripciones y funcionalidades organizadas por niveles.",
                },

                {
                    question:
                        "¿Incluye estados de facturación?",

                    answer:
                        "Sí. La plataforma contempla estados de facturación para representar y controlar diferentes situaciones dentro del ciclo de una suscripción.",
                },

                {
                    question:
                        "¿Qué es el feature tier gating?",

                    answer:
                        "Es un mecanismo que permite controlar qué funcionalidades puede utilizar un usuario dependiendo del nivel o plan asociado a su cuenta.",
                },

                {
                    question:
                        "¿Incluye gestión de usuarios?",

                    answer:
                        "Sí. El sistema incluye una estructura de gestión de cuentas, autenticación y autorización de usuarios.",
                },

                {
                    question:
                        "¿Puede evolucionar hacia un SaaS multi-tenant?",

                    answer:
                        "Sí. Puede utilizarse como base para desarrollar posteriormente una arquitectura multi-tenant con aislamiento de tenants y routing específico por organización.",
                },
            ],
        },

        // ═════════════════════════════════════
        // ENGLISH
        // ═════════════════════════════════════

        en: {
            name:
                "SaaS Starter",

            title:
                "SaaS Starter Platform",

            level:
                "🟠 Advanced",

            category:
                "Software as a Service",

            description:
                "Starter SaaS platform designed for subscription-based digital products, including billing states, tier-based feature gating, and a structured user account management layer.",

            time:
                "8-12 weeks",

            imageAlt:
                "SaaS Starter platform with user management, billing, and tier-based features",

            target:
                "Startups, companies, and product teams that need to build a SaaS product with account management, commercial plans, subscriptions, and feature access control.",

            support:
                "60 days post-delivery support",

            useCases: [
                "SaaS platforms",
                "Subscription software",
                "Digital products",
                "User management",
                "Account management",
                "Subscription plans",
                "Feature access control",
                "B2B systems",
            ],

            includes: [
                "SaaS platform",
                "Next.js frontend",
                "NestJS backend",
                "User account management",
                "Authentication",
                "Authorization",
                "Billing states",
                "Subscription management",
                "Feature tier gating",
                "Plan-based feature control",
                "REST API",
                "Prisma ORM",
                "Redis",
                "Docker",
                "TypeScript architecture",
                "Responsive components",
            ],

            notIncludes: [
                "Advanced multi-tenant architecture",
                "Subdomain routing",
                "Tenant data isolation",
                "Independent databases per organization",
                "Enterprise billing architecture",
                "Native mobile applications",
                "Managed cloud infrastructure",
            ],

            features: [
                "User Account Management",
                "Authentication",
                "Authorization",
                "Billing States",
                "Subscription Management",
                "Feature Tier Gating",
                "Plan-based Access Control",
                "REST API",
                "Prisma ORM",
                "Redis",
                "Docker",
                "Type-safe Architecture",
                "Responsive Design",
            ],

            deliverables: [
                "Published SaaS platform",
                "Next.js frontend",
                "NestJS backend",
                "User management system",
                "Authentication system",
                "Account management",
                "Subscription management",
                "Billing states",
                "Feature gating",
                "REST API",
                "Prisma configuration",
                "Redis configuration",
                "Docker configuration",
                "Source code",
                "Technical documentation",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Structured SaaS Foundation",

                    description:
                        "Provides an initial architecture for building digital products based on accounts, subscriptions, and tier-controlled features.",
                },

                {
                    title:
                        "Integrated Billing States",

                    description:
                        "The platform includes billing states that allow different situations within the subscription lifecycle to be represented.",
                },

                {
                    title:
                        "Feature Access Control",

                    description:
                        "Feature tier gating allows the platform to determine which functionality is available according to the user's plan or tier.",
                },

                {
                    title:
                        "Account Management",

                    description:
                        "Includes a centralized structure for managing users, authentication, authorization, and accounts within the platform.",
                },
            ],

            process: [
                {
                    title:
                        "SaaS Product Design",

                    description:
                        "We define users, accounts, plans, subscriptions, billing states, and features available at each tier.",
                },

                {
                    title:
                        "Backend Architecture",

                    description:
                        "We build backend services using NestJS, TypeScript, Prisma, and Redis to organize business logic and persistence.",
                },

                {
                    title:
                        "Platform Development",

                    description:
                        "We develop the frontend application using Next.js and connect its functionality with backend services.",
                },

                {
                    title:
                        "Billing and Feature Gating",

                    description:
                        "We implement billing states and the rules required to control features according to the subscribed plan.",
                },

                {
                    title:
                        "Dockerization and Validation",

                    description:
                        "We configure the services using Docker and validate authentication, accounts, subscriptions, permissions, and features before launch.",
                },
            ],

            faq: [
                {
                    question:
                        "What is a SaaS Starter?",

                    answer:
                        "It is an initial Software as a Service platform designed to build digital products based on user accounts, subscriptions, and tier-based features.",
                },

                {
                    question:
                        "Does it include billing states?",

                    answer:
                        "Yes. The platform includes billing states to represent and control different situations within the subscription lifecycle.",
                },

                {
                    question:
                        "What is feature tier gating?",

                    answer:
                        "It is a mechanism that controls which features a user can access depending on the level or plan associated with their account.",
                },

                {
                    question:
                        "Does it include user management?",

                    answer:
                        "Yes. The system includes account management, authentication, and user authorization structures.",
                },

                {
                    question:
                        "Can it evolve into a multi-tenant SaaS?",

                    answer:
                        "Yes. It can serve as a foundation for a future multi-tenant architecture with tenant isolation and organization-specific routing.",
                },
            ],
        },

        // ═════════════════════════════════════
        // PORTUGUÊS
        // ═════════════════════════════════════

        pt: {
            name:
                "SaaS Starter",

            title:
                "Plataforma SaaS Starter",

            level:
                "🟠 Avançado",

            category:
                "Software como Serviço",

            description:
                "Plataforma SaaS inicial desenvolvida para produtos digitais baseados em assinaturas, incluindo estados de faturamento, controle de funcionalidades por níveis e uma estrutura de gerenciamento de contas de usuários.",

            time:
                "8-12 semanas",

            imageAlt:
                "Plataforma SaaS Starter com gerenciamento de usuários, faturamento e funcionalidades por níveis",

            target:
                "Startups, empresas e equipes de produto que precisam desenvolver um produto SaaS com gerenciamento de contas, planos comerciais, assinaturas e controle de funcionalidades.",

            support:
                "60 dias de suporte pós-entrega",

            useCases: [
                "Plataformas SaaS",
                "Software por assinatura",
                "Produtos digitais",
                "Gestão de usuários",
                "Gestão de contas",
                "Planos de assinatura",
                "Controle de funcionalidades",
                "Sistemas B2B",
            ],

            includes: [
                "Plataforma SaaS",
                "Frontend Next.js",
                "Backend NestJS",
                "Gestão de contas de usuários",
                "Autenticação",
                "Autorização",
                "Estados de faturamento",
                "Gestão de assinaturas",
                "Feature tier gating",
                "Controle de funcionalidades por plano",
                "API REST",
                "Prisma ORM",
                "Redis",
                "Docker",
                "Arquitetura TypeScript",
                "Componentes responsivos",
            ],

            notIncludes: [
                "Arquitetura multi-tenant avançada",
                "Routing por subdomínios",
                "Isolamento de dados por tenant",
                "Bancos de dados independentes por organização",
                "Arquitetura empresarial de billing",
                "Aplicações móveis nativas",
                "Infraestrutura cloud gerenciada",
            ],

            features: [
                "User Account Management",
                "Authentication",
                "Authorization",
                "Billing States",
                "Subscription Management",
                "Feature Tier Gating",
                "Plan-based Access Control",
                "REST API",
                "Prisma ORM",
                "Redis",
                "Docker",
                "Type-safe Architecture",
                "Responsive Design",
            ],

            deliverables: [
                "Plataforma SaaS publicada",
                "Frontend Next.js",
                "Backend NestJS",
                "Sistema de gerenciamento de usuários",
                "Sistema de autenticação",
                "Gestão de contas",
                "Gestão de assinaturas",
                "Estados de faturamento",
                "Feature gating",
                "API REST",
                "Configuração Prisma",
                "Configuração Redis",
                "Configuração Docker",
                "Código-fonte",
                "Documentação técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Base SaaS estruturada",

                    description:
                        "Fornece uma arquitetura inicial para desenvolver produtos digitais baseados em contas, assinaturas e funcionalidades controladas por níveis.",
                },

                {
                    title:
                        "Estados de faturamento integrados",

                    description:
                        "A plataforma inclui estados de faturamento que permitem representar diferentes situações dentro do ciclo de uma assinatura.",
                },

                {
                    title:
                        "Controle de funcionalidades",

                    description:
                        "O feature tier gating permite determinar quais funcionalidades estão disponíveis de acordo com o nível ou plano do usuário.",
                },

                {
                    title:
                        "Gestão de contas",

                    description:
                        "Inclui uma estrutura centralizada para gerenciar usuários, autenticação, autorização e contas dentro da plataforma.",
                },
            ],

            process: [
                {
                    title:
                        "Definição do produto SaaS",

                    description:
                        "Definimos usuários, contas, planos, assinaturas, estados de faturamento e funcionalidades disponíveis por nível.",
                },

                {
                    title:
                        "Arquitetura backend",

                    description:
                        "Construímos os serviços backend utilizando NestJS, TypeScript, Prisma e Redis para organizar a lógica de negócio e persistência.",
                },

                {
                    title:
                        "Desenvolvimento da plataforma",

                    description:
                        "Desenvolvemos a aplicação frontend utilizando Next.js e conectamos suas funcionalidades aos serviços backend.",
                },

                {
                    title:
                        "Billing e feature gating",

                    description:
                        "Implementamos os estados de faturamento e as regras necessárias para controlar funcionalidades de acordo com o plano contratado.",
                },

                {
                    title:
                        "Dockerização e validação",

                    description:
                        "Configuramos os serviços utilizando Docker e validamos autenticação, contas, assinaturas, permissões e funcionalidades antes do lançamento.",
                },
            ],

            faq: [
                {
                    question:
                        "O que é um SaaS Starter?",

                    answer:
                        "É uma plataforma inicial de Software como Serviço desenvolvida para criar produtos digitais baseados em contas de usuários, assinaturas e funcionalidades organizadas por níveis.",
                },

                {
                    question:
                        "Inclui estados de faturamento?",

                    answer:
                        "Sim. A plataforma contempla estados de faturamento para representar e controlar diferentes situações durante o ciclo de uma assinatura.",
                },

                {
                    question:
                        "O que é feature tier gating?",

                    answer:
                        "É um mecanismo que permite controlar quais funcionalidades um usuário pode utilizar de acordo com o nível ou plano associado à sua conta.",
                },

                {
                    question:
                        "Inclui gestão de usuários?",

                    answer:
                        "Sim. O sistema inclui estruturas de gerenciamento de contas, autenticação e autorização de usuários.",
                },

                {
                    question:
                        "Pode evoluir para um SaaS multi-tenant?",

                    answer:
                        "Sim. Pode servir como base para uma futura arquitetura multi-tenant com isolamento de tenants e routing específico por organização.",
                },
            ],
        },
    },
};