import type {
    ServicePlan,
} from "@/types/plan.types";

export const saasMultiTenant: ServicePlan = {
    core: {
        // ────────────────────────────────────
        // Identidad
        // ────────────────────────────────────

        id: "SAAS-002",

        slug: "saas-multi-tenant",

        // ────────────────────────────────────
        // Comercial
        // ────────────────────────────────────

        complexity: "⭐⭐⭐⭐⭐ (5/5)",

        price: "$5,500 - $11,000+ USD",

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
            "Multi-Tenant Architecture",
            "Subdomain Routing",
            "Tenant Isolation",
            "Tenant Context",
            "Dynamic Database Routing",
            "Row-Level Isolation",
            "Schema Isolation",
            "Billing Middleware",
            "Feature Tier Gating",
            "Role-based Access Control",
            "REST API",
            "Redis Caching",
            "Type-safe Architecture",
        ],

        integrations: [
            "Payment APIs",
            "Billing Services",
            "Email Services",
            "REST APIs",
            "Authentication Providers",
            "DNS Services",
            "Cloud Infrastructure",
        ],

        // ────────────────────────────────────
        // Multimedia
        // ────────────────────────────────────

        heroImage:
            "/images/services/software/hero/hero-saas-multi-tenant.png",

        image:
            "/images/services/software/hero/hero-saas-multi-tenant.png",
    },

    translations: {
        // ═════════════════════════════════════
        // ESPAÑOL
        // ═════════════════════════════════════

        es: {
            name:
                "SaaS Multi-Tenant",

            title:
                "Plataforma SaaS Multi-Tenant",

            level:
                "🔴 Experto",

            category:
                "Software as a Service",

            description:
                "Plataforma SaaS multi-tenant diseñada para operar múltiples organizaciones dentro de una infraestructura compartida, incorporando routing estricto por subdominios, aislamiento de tenants y estrategias dinámicas de aislamiento de datos.",

            time:
                "12-20 semanas",

            imageAlt:
                "Plataforma SaaS multi-tenant con routing por subdominios, aislamiento de tenants y arquitectura backend avanzada",

            target:
                "Empresas de tecnología, startups SaaS y organizaciones que necesitan operar múltiples clientes o empresas dentro de una misma plataforma manteniendo separados sus datos, usuarios y contextos.",

            support:
                "90 días soporte post-entrega",

            useCases: [
                "SaaS B2B",
                "Plataformas multi-tenant",
                "Software empresarial",
                "Workspaces empresariales",
                "Portales para clientes",
                "Plataformas por organización",
                "Sistemas de suscripción",
                "Productos SaaS escalables",
                "Plataformas white-label",
            ],

            includes: [
                "Plataforma SaaS multi-tenant",
                "Frontend Next.js",
                "Backend NestJS",
                "Gestión de tenants",
                "Tenant context",
                "Routing por subdominios",
                "Resolución dinámica de tenants",
                "Aislamiento de tenants",
                "Aislamiento por filas",
                "Aislamiento por schema",
                "Routing dinámico de base de datos",
                "Gestión de usuarios",
                "Roles y permisos",
                "Billing middleware",
                "Gestión de suscripciones",
                "Feature tier gating",
                "API REST",
                "Prisma ORM",
                "Redis",
                "Docker",
            ],

            notIncludes: [
                "Infraestructura cloud administrada permanentemente",
                "Data warehouse empresarial",
                "Sistema completo de Business Intelligence",
                "Aplicaciones móviles nativas",
                "Arquitectura completa de microservicios distribuidos",
                "Soporte DevOps 24/7",
                "Migraciones empresariales masivas",
            ],

            features: [
                "Multi-Tenant Architecture",
                "Tenant Isolation",
                "Subdomain Routing",
                "Tenant Context",
                "Dynamic Database Routing",
                "Row-Level Isolation",
                "Schema Isolation",
                "Billing Middleware",
                "Subscription Management",
                "Feature Tier Gating",
                "Role-based Access Control",
                "REST API",
                "Prisma ORM",
                "Redis Caching",
                "Docker",
                "Type-safe Architecture",
                "Responsive Design",
            ],

            deliverables: [
                "Plataforma SaaS multi-tenant publicada",
                "Frontend Next.js",
                "Backend NestJS",
                "Sistema de gestión de tenants",
                "Tenant context",
                "Routing por subdominios",
                "Resolución dinámica de tenants",
                "Sistema de aislamiento de datos",
                "Aislamiento por filas o schema",
                "Arquitectura de base de datos dinámica",
                "Gestión de usuarios",
                "Roles y permisos",
                "Billing middleware",
                "Gestión de suscripciones",
                "Feature gating",
                "API REST",
                "Configuración Prisma",
                "Configuración Redis",
                "Dockerización",
                "Código fuente",
                "Documentación técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Aislamiento de tenants",

                    description:
                        "Permite mantener separados los datos, usuarios, configuraciones y contextos de diferentes organizaciones dentro de una misma plataforma.",
                },

                {
                    title:
                        "Routing estricto por subdominio",

                    description:
                        "Cada organización puede ser identificada mediante un subdominio y asociada dinámicamente con su contexto correspondiente dentro de la plataforma.",
                },

                {
                    title:
                        "Aislamiento de datos flexible",

                    description:
                        "La arquitectura puede utilizar aislamiento por filas, schemas o bases de datos dinámicas dependiendo de los requerimientos del proyecto.",
                },

                {
                    title:
                        "Billing por tenant",

                    description:
                        "El middleware de billing permite aplicar estados de suscripción y reglas comerciales específicas para cada organización.",
                },

                {
                    title:
                        "Arquitectura preparada para escalar",

                    description:
                        "La combinación de NestJS, Prisma, Redis y Docker proporciona una base técnica preparada para aumentar organizaciones, usuarios y operaciones.",
                },
            ],

            process: [
                {
                    title:
                        "Diseño de la arquitectura multi-tenant",

                    description:
                        "Definimos tenants, organizaciones, usuarios, roles, permisos, planes, suscripciones y reglas de aislamiento.",
                },

                {
                    title:
                        "Diseño del routing",

                    description:
                        "Construimos la estrategia de resolución de tenants y el routing por subdominios necesario para identificar cada organización.",
                },

                {
                    title:
                        "Diseño del aislamiento",

                    description:
                        "Seleccionamos la estrategia adecuada de aislamiento mediante filas, schemas o bases de datos según los requisitos técnicos y de seguridad.",
                },

                {
                    title:
                        "Desarrollo del backend",

                    description:
                        "Construimos los módulos backend utilizando NestJS, Prisma y Redis para gestionar tenants, usuarios, permisos, billing y funcionalidades.",
                },

                {
                    title:
                        "Billing y feature gating",

                    description:
                        "Implementamos middleware de billing y reglas de acceso para controlar las funcionalidades disponibles según el plan de cada organización.",
                },

                {
                    title:
                        "Dockerización y pruebas multi-tenant",

                    description:
                        "Configuramos Docker y validamos routing, aislamiento de datos, autenticación, permisos, billing y operaciones entre múltiples tenants.",
                },
            ],

            faq: [
                {
                    question:
                        "¿Qué es una plataforma SaaS multi-tenant?",

                    answer:
                        "Es una plataforma que permite que múltiples organizaciones utilicen el mismo sistema mientras mantienen separados sus datos, usuarios, configuraciones y contextos.",
                },

                {
                    question:
                        "¿Cada organización puede utilizar un subdominio?",

                    answer:
                        "Sí. La arquitectura contempla routing estricto por subdominios para identificar y cargar dinámicamente el contexto correspondiente a cada tenant.",
                },

                {
                    question:
                        "¿Cómo se pueden aislar los datos?",

                    answer:
                        "El sistema puede utilizar aislamiento lógico por filas, schemas independientes o bases de datos separadas o dinámicas dependiendo de los requisitos del proyecto.",
                },

                {
                    question:
                        "¿Incluye billing por tenant?",

                    answer:
                        "Sí. El middleware de billing permite gestionar estados de suscripción y aplicar reglas comerciales específicas para cada organización.",
                },

                {
                    question:
                        "¿Puede utilizar diferentes planes SaaS?",

                    answer:
                        "Sí. Cada organización puede asociarse a un nivel de suscripción y las funcionalidades pueden controlarse mediante feature tier gating.",
                },

                {
                    question:
                        "¿Cuál es la diferencia frente al SaaS Starter?",

                    answer:
                        "El SaaS Starter está orientado a una estructura SaaS inicial, mientras que el Multi-Tenant añade aislamiento de organizaciones, routing por subdominios y estrategias avanzadas de separación de datos.",
                },
            ],
        },

        // ═════════════════════════════════════
        // ENGLISH
        // ═════════════════════════════════════

        en: {
            name:
                "Multi-Tenant SaaS",

            title:
                "Multi-Tenant SaaS Platform",

            level:
                "🔴 Expert",

            category:
                "Software as a Service",

            description:
                "Multi-tenant SaaS platform designed to operate multiple organizations within shared infrastructure, incorporating strict subdomain routing, tenant isolation, and dynamic data isolation strategies.",

            time:
                "12-20 weeks",

            imageAlt:
                "Multi-tenant SaaS platform with subdomain routing, tenant isolation, and advanced backend architecture",

            target:
                "Technology companies, SaaS startups, and organizations that need to operate multiple customers or companies within the same platform while keeping their data, users, and contexts separated.",

            support:
                "90 days post-delivery support",

            useCases: [
                "B2B SaaS",
                "Multi-tenant platforms",
                "Enterprise software",
                "Business workspaces",
                "Customer portals",
                "Organization-based platforms",
                "Subscription systems",
                "Scalable SaaS products",
                "White-label platforms",
            ],

            includes: [
                "Multi-tenant SaaS platform",
                "Next.js frontend",
                "NestJS backend",
                "Tenant management",
                "Tenant context",
                "Subdomain routing",
                "Dynamic tenant resolution",
                "Tenant isolation",
                "Row-level isolation",
                "Schema isolation",
                "Dynamic database routing",
                "User management",
                "Roles and permissions",
                "Billing middleware",
                "Subscription management",
                "Feature tier gating",
                "REST API",
                "Prisma ORM",
                "Redis",
                "Docker",
            ],

            notIncludes: [
                "Fully managed cloud infrastructure",
                "Enterprise data warehouse",
                "Complete Business Intelligence system",
                "Native mobile applications",
                "Complete distributed microservices architecture",
                "24/7 DevOps support",
                "Large-scale enterprise migrations",
            ],

            features: [
                "Multi-Tenant Architecture",
                "Tenant Isolation",
                "Subdomain Routing",
                "Tenant Context",
                "Dynamic Database Routing",
                "Row-Level Isolation",
                "Schema Isolation",
                "Billing Middleware",
                "Subscription Management",
                "Feature Tier Gating",
                "Role-based Access Control",
                "REST API",
                "Prisma ORM",
                "Redis Caching",
                "Docker",
                "Type-safe Architecture",
                "Responsive Design",
            ],

            deliverables: [
                "Published multi-tenant SaaS platform",
                "Next.js frontend",
                "NestJS backend",
                "Tenant management system",
                "Tenant context",
                "Subdomain routing",
                "Dynamic tenant resolution",
                "Data isolation system",
                "Row-level or schema isolation",
                "Dynamic database architecture",
                "User management",
                "Roles and permissions",
                "Billing middleware",
                "Subscription management",
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
                        "Tenant Isolation",

                    description:
                        "Keeps data, users, configurations, and contexts from different organizations separated within the same platform.",
                },

                {
                    title:
                        "Strict Subdomain Routing",

                    description:
                        "Each organization can be identified through a subdomain and dynamically associated with its corresponding platform context.",
                },

                {
                    title:
                        "Flexible Data Isolation",

                    description:
                        "The architecture can use row-level, schema-level, or dynamic database isolation depending on project requirements.",
                },

                {
                    title:
                        "Tenant-based Billing",

                    description:
                        "Billing middleware allows subscription states and commercial rules to be applied independently to each organization.",
                },

                {
                    title:
                        "Scalable Architecture",

                    description:
                        "NestJS, Prisma, Redis, and Docker provide a technical foundation prepared to support increasing organizations, users, and operations.",
                },
            ],

            process: [
                {
                    title:
                        "Multi-Tenant Architecture Design",

                    description:
                        "We define tenants, organizations, users, roles, permissions, plans, subscriptions, and isolation rules.",
                },

                {
                    title:
                        "Routing Architecture",

                    description:
                        "We build tenant resolution and subdomain routing strategies required to identify each organization.",
                },

                {
                    title:
                        "Isolation Strategy",

                    description:
                        "We select the appropriate isolation strategy using rows, schemas, or databases according to technical and security requirements.",
                },

                {
                    title:
                        "Backend Development",

                    description:
                        "We build backend modules using NestJS, Prisma, and Redis to manage tenants, users, permissions, billing, and features.",
                },

                {
                    title:
                        "Billing and Feature Gating",

                    description:
                        "We implement billing middleware and access rules to control features available according to each organization's plan.",
                },

                {
                    title:
                        "Dockerization and Multi-Tenant Testing",

                    description:
                        "We configure Docker and validate routing, data isolation, authentication, permissions, billing, and operations across multiple tenants.",
                },
            ],

            faq: [
                {
                    question:
                        "What is a multi-tenant SaaS platform?",

                    answer:
                        "It is a platform that allows multiple organizations to use the same system while keeping their data, users, configurations, and contexts separated.",
                },

                {
                    question:
                        "Can each organization use a subdomain?",

                    answer:
                        "Yes. The architecture supports strict subdomain routing to identify and dynamically load the context associated with each tenant.",
                },

                {
                    question:
                        "How can tenant data be isolated?",

                    answer:
                        "The system can use logical row-level isolation, independent schemas, or separate or dynamic databases depending on project requirements.",
                },

                {
                    question:
                        "Does it include billing per tenant?",

                    answer:
                        "Yes. Billing middleware supports subscription states and commercial rules specific to each organization.",
                },

                {
                    question:
                        "Can it support different SaaS plans?",

                    answer:
                        "Yes. Each organization can be associated with a subscription tier and features can be controlled through feature tier gating.",
                },

                {
                    question:
                        "What is the difference from SaaS Starter?",

                    answer:
                        "SaaS Starter focuses on an initial SaaS structure, while Multi-Tenant adds organization isolation, subdomain routing, and advanced data separation strategies.",
                },
            ],
        },

        // ═════════════════════════════════════
        // PORTUGUÊS
        // ═════════════════════════════════════

        pt: {
            name:
                "SaaS Multi-Tenant",

            title:
                "Plataforma SaaS Multi-Tenant",

            level:
                "🔴 Especialista",

            category:
                "Software como Serviço",

            description:
                "Plataforma SaaS multi-tenant desenvolvida para operar múltiplas organizações dentro de uma infraestrutura compartilhada, incorporando routing rigoroso por subdomínios, isolamento de tenants e estratégias dinâmicas de isolamento de dados.",

            time:
                "12-20 semanas",

            imageAlt:
                "Plataforma SaaS multi-tenant com routing por subdomínios, isolamento de tenants e arquitetura backend avançada",

            target:
                "Empresas de tecnologia, startups SaaS e organizações que precisam operar múltiplos clientes ou empresas dentro da mesma plataforma mantendo separados seus dados, usuários e contextos.",

            support:
                "90 dias de suporte pós-entrega",

            useCases: [
                "SaaS B2B",
                "Plataformas multi-tenant",
                "Software empresarial",
                "Workspaces empresariais",
                "Portais para clientes",
                "Plataformas por organização",
                "Sistemas de assinatura",
                "Produtos SaaS escaláveis",
                "Plataformas white-label",
            ],

            includes: [
                "Plataforma SaaS multi-tenant",
                "Frontend Next.js",
                "Backend NestJS",
                "Gestão de tenants",
                "Tenant context",
                "Routing por subdomínios",
                "Resolução dinâmica de tenants",
                "Isolamento de tenants",
                "Isolamento por linhas",
                "Isolamento por schema",
                "Routing dinâmico de banco de dados",
                "Gestão de usuários",
                "Funções e permissões",
                "Billing middleware",
                "Gestão de assinaturas",
                "Feature tier gating",
                "API REST",
                "Prisma ORM",
                "Redis",
                "Docker",
            ],

            notIncludes: [
                "Infraestrutura cloud totalmente gerenciada",
                "Data warehouse empresarial",
                "Sistema completo de Business Intelligence",
                "Aplicações móveis nativas",
                "Arquitetura completa de microsserviços distribuídos",
                "Suporte DevOps 24/7",
                "Migrações empresariais de grande escala",
            ],

            features: [
                "Multi-Tenant Architecture",
                "Tenant Isolation",
                "Subdomain Routing",
                "Tenant Context",
                "Dynamic Database Routing",
                "Row-Level Isolation",
                "Schema Isolation",
                "Billing Middleware",
                "Subscription Management",
                "Feature Tier Gating",
                "Role-based Access Control",
                "REST API",
                "Prisma ORM",
                "Redis Caching",
                "Docker",
                "Type-safe Architecture",
                "Responsive Design",
            ],

            deliverables: [
                "Plataforma SaaS multi-tenant publicada",
                "Frontend Next.js",
                "Backend NestJS",
                "Sistema de gestão de tenants",
                "Tenant context",
                "Routing por subdomínios",
                "Resolução dinâmica de tenants",
                "Sistema de isolamento de dados",
                "Isolamento por linhas ou schema",
                "Arquitetura dinâmica de banco de dados",
                "Gestão de usuários",
                "Funções e permissões",
                "Billing middleware",
                "Gestão de assinaturas",
                "Feature gating",
                "API REST",
                "Configuração Prisma",
                "Configuração Redis",
                "Dockerização",
                "Código-fonte",
                "Documentação técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Isolamento de tenants",

                    description:
                        "Permite manter separados os dados, usuários, configurações e contextos de diferentes organizações dentro da mesma plataforma.",
                },

                {
                    title:
                        "Routing rigoroso por subdomínio",

                    description:
                        "Cada organização pode ser identificada por meio de um subdomínio e associada dinamicamente ao seu contexto correspondente dentro da plataforma.",
                },

                {
                    title:
                        "Isolamento de dados flexível",

                    description:
                        "A arquitetura pode utilizar isolamento por linhas, schemas ou bancos de dados dinâmicos de acordo com os requisitos do projeto.",
                },

                {
                    title:
                        "Billing por tenant",

                    description:
                        "O middleware de billing permite aplicar estados de assinatura e regras comerciais específicas para cada organização.",
                },

                {
                    title:
                        "Arquitetura preparada para crescimento",

                    description:
                        "NestJS, Prisma, Redis e Docker fornecem uma base técnica preparada para aumentar organizações, usuários e operações.",
                },
            ],

            process: [
                {
                    title:
                        "Definição da arquitetura multi-tenant",

                    description:
                        "Definimos tenants, organizações, usuários, funções, permissões, planos, assinaturas e regras de isolamento.",
                },

                {
                    title:
                        "Arquitetura de routing",

                    description:
                        "Construímos a estratégia de resolução de tenants e o routing por subdomínios necessário para identificar cada organização.",
                },

                {
                    title:
                        "Estratégia de isolamento",

                    description:
                        "Selecionamos a estratégia adequada de isolamento utilizando linhas, schemas ou bancos de dados de acordo com os requisitos técnicos e de segurança.",
                },

                {
                    title:
                        "Desenvolvimento do backend",

                    description:
                        "Construímos os módulos backend utilizando NestJS, Prisma e Redis para gerenciar tenants, usuários, permissões, billing e funcionalidades.",
                },

                {
                    title:
                        "Billing e feature gating",

                    description:
                        "Implementamos middleware de billing e regras de acesso para controlar as funcionalidades disponíveis de acordo com o plano de cada organização.",
                },

                {
                    title:
                        "Dockerização e testes multi-tenant",

                    description:
                        "Configuramos Docker e validamos routing, isolamento de dados, autenticação, permissões, billing e operações entre múltiplos tenants.",
                },
            ],

            faq: [
                {
                    question:
                        "O que é uma plataforma SaaS multi-tenant?",

                    answer:
                        "É uma plataforma que permite que múltiplas organizações utilizem o mesmo sistema enquanto mantêm separados seus dados, usuários, configurações e contextos.",
                },

                {
                    question:
                        "Cada organização pode utilizar um subdomínio?",

                    answer:
                        "Sim. A arquitetura contempla routing rigoroso por subdomínios para identificar e carregar dinamicamente o contexto correspondente a cada tenant.",
                },

                {
                    question:
                        "Como os dados dos tenants podem ser isolados?",

                    answer:
                        "O sistema pode utilizar isolamento lógico por linhas, schemas independentes ou bancos de dados separados ou dinâmicos dependendo dos requisitos do projeto.",
                },

                {
                    question:
                        "Inclui billing por tenant?",

                    answer:
                        "Sim. O middleware de billing permite gerenciar estados de assinatura e aplicar regras comerciais específicas para cada organização.",
                },

                {
                    question:
                        "Pode trabalhar com diferentes planos SaaS?",

                    answer:
                        "Sim. Cada organização pode ser associada a um nível de assinatura e as funcionalidades podem ser controladas por meio de feature tier gating.",
                },

                {
                    question:
                        "Qual é a diferença em relação ao SaaS Starter?",

                    answer:
                        "O SaaS Starter é focado em uma estrutura SaaS inicial, enquanto o Multi-Tenant adiciona isolamento de organizações, routing por subdomínios e estratégias avançadas de separação de dados.",
                },
            ],
        },
    },
};