import type { ServicePlan } from "@/types/plan.types";

export const membershipPortal: ServicePlan = {
    core: {
        id: "MEM-001",

        slug: "membership-portal",

        complexity: "⭐⭐⭐⭐ (4/5)",

        price: "$1,500 - $2,500 USD",

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
            "Authentication",
            "Membership Management",
            "Role-based Access",
            "Gated Content",
            "Profile Management",
            "Protected Routes",
            "Subscription States",
            "Responsive Design",
        ],

        integrations: [
            "Stripe",
            "Prisma",
            "Authentication Services",
            "Email Services",
        ],

        heroImage:
            "/images/services/software/hero/hero-membership-portal.png",

        image:
            "/images/services/software/hero/hero-membership-portal.png",
    },

    translations: {
        es: {
            name: "Membership Portal",

            title: "Portal de Membresías",

            level: "🟠 Avanzado",

            category: "Plataformas de Membresía",

            description:
                "Portal privado para miembros con autenticación, acceso a contenido premium, gestión de perfiles y control de acceso basado en membresías.",

            time: "6-9 semanas",

            imageAlt:
                "Portal de membresías con contenido premium, autenticación y perfiles de usuarios",

            target:
                "Creadores, empresas, organizaciones y plataformas que necesitan ofrecer contenido exclusivo y gestionar miembros desde un portal privado.",

            support:
                "45 días soporte post-entrega",

            useCases: [
                "Portales privados",
                "Membresías digitales",
                "Contenido premium",
                "Comunidades privadas",
                "Cursos exclusivos",
                "Programas de membresía",
                "Perfiles de miembros",
                "Contenido restringido",
            ],

            includes: [
                "Autenticación de miembros",
                "Registro de usuarios",
                "Inicio de sesión",
                "Perfiles de miembros",
                "Contenido premium",
                "Rutas protegidas",
                "Control de acceso",
                "Roles de membresía",
                "Estados de membresía",
                "Gestión de contenido restringido",
                "Integración Stripe",
                "Persistencia mediante Prisma",
                "Diseño responsive",
            ],

            notIncludes: [
                "Sistema de suscripciones empresarial completo",
                "Automatizaciones avanzadas de facturación",
                "Aplicaciones móviles nativas",
                "Marketplace",
                "Sistema LMS completo",
                "Analítica empresarial avanzada",
            ],

            features: [
                "Member Authentication",
                "Premium Content",
                "Profile Management",
                "Protected Routes",
                "Membership Roles",
                "Gated Content",
                "Access Control",
                "Membership States",
                "User Profiles",
                "Responsive Design",
            ],

            deliverables: [
                "Portal de membresías publicado",
                "Sistema de autenticación",
                "Perfiles de miembros",
                "Contenido premium",
                "Rutas protegidas",
                "Control de acceso",
                "Roles de membresía",
                "Integración con Stripe",
                "Base de datos Prisma",
                "Código fuente",
                "Documentación técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Contenido protegido",

                    description:
                        "Permite restringir el acceso a contenido según el estado y rol de cada miembro.",
                },

                {
                    title: "Experiencia privada",

                    description:
                        "Los miembros disponen de un espacio personalizado para acceder a su contenido y administrar su perfil.",
                },

                {
                    title: "Control de membresías",

                    description:
                        "La plataforma permite organizar usuarios mediante roles y estados de membresía.",
                },

                {
                    title: "Gestión centralizada",

                    description:
                        "La información de los miembros y sus permisos puede administrarse desde una estructura centralizada.",
                },
            ],

            process: [
                {
                    title: "Diseño de membresías",

                    description:
                        "Definimos usuarios, roles, estados de membresía, perfiles y reglas de acceso al contenido.",
                },

                {
                    title: "Desarrollo del portal",

                    description:
                        "Construimos el portal privado utilizando Next.js, TypeScript y componentes responsive.",
                },

                {
                    title: "Control de acceso",

                    description:
                        "Implementamos rutas protegidas y reglas para controlar el acceso al contenido premium.",
                },

                {
                    title: "Integración y pruebas",

                    description:
                        "Integramos Stripe y Prisma y validamos autenticación, permisos, perfiles y contenido restringido.",
                },
            ],

            faq: [
                {
                    question: "¿Qué es un Membership Portal?",

                    answer:
                        "Es un portal privado donde los miembros pueden iniciar sesión, administrar su perfil y acceder a contenido exclusivo.",
                },

                {
                    question: "¿Puede restringir contenido?",

                    answer:
                        "Sí. El sistema permite proteger contenido y determinar qué usuarios pueden acceder según sus roles o estado de membresía.",
                },

                {
                    question: "¿Incluye perfiles de usuarios?",

                    answer:
                        "Sí. Cada miembro puede disponer de un perfil dentro del portal.",
                },

                {
                    question: "¿Puede integrarse con Stripe?",

                    answer:
                        "Sí. La arquitectura contempla integración con Stripe para gestionar los aspectos relacionados con las membresías y pagos.",
                },
            ],
        },

        en: {
            name: "Membership Portal",

            title: "Membership Portal",

            level: "🟠 Advanced",

            category: "Membership Platforms",

            description:
                "Private member portal with authentication, premium content access, profile management, and membership-based access control.",

            time: "6-9 weeks",

            imageAlt:
                "Membership portal with premium content, authentication, and user profiles",

            target:
                "Creators, businesses, organizations, and platforms that need to provide exclusive content and manage members through a private portal.",

            support:
                "45 days post-delivery support",

            useCases: [
                "Private portals",
                "Digital memberships",
                "Premium content",
                "Private communities",
                "Exclusive courses",
                "Membership programs",
                "Member profiles",
                "Restricted content",
            ],

            includes: [
                "Member authentication",
                "User registration",
                "Login",
                "Member profiles",
                "Premium content",
                "Protected routes",
                "Access control",
                "Membership roles",
                "Membership states",
                "Restricted content management",
                "Stripe integration",
                "Prisma persistence",
                "Responsive design",
            ],

            notIncludes: [
                "Complete enterprise subscription system",
                "Advanced billing automations",
                "Native mobile applications",
                "Marketplace",
                "Complete LMS",
                "Advanced enterprise analytics",
            ],

            features: [
                "Member Authentication",
                "Premium Content",
                "Profile Management",
                "Protected Routes",
                "Membership Roles",
                "Gated Content",
                "Access Control",
                "Membership States",
                "User Profiles",
                "Responsive Design",
            ],

            deliverables: [
                "Published membership portal",
                "Authentication system",
                "Member profiles",
                "Premium content",
                "Protected routes",
                "Access control",
                "Membership roles",
                "Stripe integration",
                "Prisma database",
                "Source code",
                "Technical documentation",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Protected Content",

                    description:
                        "Restricts content access according to each member's status and role.",
                },

                {
                    title: "Private Experience",

                    description:
                        "Members have a personalized space to access content and manage their profile.",
                },

                {
                    title: "Membership Control",

                    description:
                        "The platform organizes users through membership roles and states.",
                },

                {
                    title: "Centralized Management",

                    description:
                        "Member information and access permissions can be managed through a centralized structure.",
                },
            ],

            process: [
                {
                    title: "Membership Design",

                    description:
                        "We define users, roles, membership states, profiles, and content access rules.",
                },

                {
                    title: "Portal Development",

                    description:
                        "We build the private portal using Next.js, TypeScript, and responsive components.",
                },

                {
                    title: "Access Control",

                    description:
                        "We implement protected routes and rules to control access to premium content.",
                },

                {
                    title: "Integration and Testing",

                    description:
                        "We integrate Stripe and Prisma and validate authentication, permissions, profiles, and restricted content.",
                },
            ],

            faq: [
                {
                    question: "What is a Membership Portal?",

                    answer:
                        "It is a private portal where members can log in, manage their profile, and access exclusive content.",
                },

                {
                    question: "Can it restrict content?",

                    answer:
                        "Yes. The system can protect content and determine access according to user roles or membership status.",
                },

                {
                    question: "Does it include user profiles?",

                    answer:
                        "Yes. Each member can have a profile within the portal.",
                },

                {
                    question: "Can it integrate with Stripe?",

                    answer:
                        "Yes. The architecture supports Stripe integration for membership and payment-related functionality.",
                },
            ],
        },

        pt: {
            name: "Membership Portal",

            title: "Portal de Membros",

            level: "🟠 Avançado",

            category: "Plataformas de Membros",

            description:
                "Portal privado para membros com autenticação, acesso a conteúdo premium, gerenciamento de perfis e controle de acesso baseado em associações.",

            time: "6-9 semanas",

            imageAlt:
                "Portal de membros com conteúdo premium, autenticação e perfis de usuários",

            target:
                "Criadores, empresas, organizações e plataformas que precisam oferecer conteúdo exclusivo e gerenciar membros por meio de um portal privado.",

            support:
                "45 dias de suporte pós-entrega",

            useCases: [
                "Portais privados",
                "Associações digitais",
                "Conteúdo premium",
                "Comunidades privadas",
                "Cursos exclusivos",
                "Programas de membros",
                "Perfis de membros",
                "Conteúdo restrito",
            ],

            includes: [
                "Autenticação de membros",
                "Cadastro de usuários",
                "Login",
                "Perfis de membros",
                "Conteúdo premium",
                "Rotas protegidas",
                "Controle de acesso",
                "Funções de membros",
                "Estados de associação",
                "Gestão de conteúdo restrito",
                "Integração Stripe",
                "Persistência com Prisma",
                "Design responsivo",
            ],

            notIncludes: [
                "Sistema empresarial completo de assinaturas",
                "Automações avançadas de faturamento",
                "Aplicativos móveis nativos",
                "Marketplace",
                "LMS completo",
                "Análises empresariais avançadas",
            ],

            features: [
                "Member Authentication",
                "Premium Content",
                "Profile Management",
                "Protected Routes",
                "Membership Roles",
                "Gated Content",
                "Access Control",
                "Membership States",
                "User Profiles",
                "Responsive Design",
            ],

            deliverables: [
                "Portal de membros publicado",
                "Sistema de autenticação",
                "Perfis de membros",
                "Conteúdo premium",
                "Rotas protegidas",
                "Controle de acesso",
                "Funções de membros",
                "Integração com Stripe",
                "Banco de dados Prisma",
                "Código-fonte",
                "Documentação técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Conteúdo protegido",

                    description:
                        "Permite restringir o acesso ao conteúdo de acordo com o status e a função de cada membro.",
                },

                {
                    title: "Experiência privada",

                    description:
                        "Os membros possuem um espaço personalizado para acessar conteúdos e gerenciar seu perfil.",
                },

                {
                    title: "Controle de membros",

                    description:
                        "A plataforma permite organizar usuários por funções e estados de associação.",
                },

                {
                    title: "Gestão centralizada",

                    description:
                        "As informações dos membros e suas permissões podem ser administradas por meio de uma estrutura centralizada.",
                },
            ],

            process: [
                {
                    title: "Design das associações",

                    description:
                        "Definimos usuários, funções, estados de associação, perfis e regras de acesso ao conteúdo.",
                },

                {
                    title: "Desenvolvimento do portal",

                    description:
                        "Construímos o portal privado utilizando Next.js, TypeScript e componentes responsivos.",
                },

                {
                    title: "Controle de acesso",

                    description:
                        "Implementamos rotas protegidas e regras para controlar o acesso ao conteúdo premium.",
                },

                {
                    title: "Integração e testes",

                    description:
                        "Integramos Stripe e Prisma e validamos autenticação, permissões, perfis e conteúdo restrito.",
                },
            ],

            faq: [
                {
                    question: "O que é um Membership Portal?",

                    answer:
                        "É um portal privado onde os membros podem fazer login, gerenciar seu perfil e acessar conteúdos exclusivos.",
                },

                {
                    question: "Pode restringir conteúdo?",

                    answer:
                        "Sim. O sistema permite proteger conteúdos e determinar quais usuários podem acessá-los de acordo com suas funções ou status.",
                },

                {
                    question: "Inclui perfis de usuários?",

                    answer:
                        "Sim. Cada membro pode ter um perfil dentro do portal.",
                },

                {
                    question: "Pode integrar com Stripe?",

                    answer:
                        "Sim. A arquitetura contempla integração com Stripe para funcionalidades relacionadas a membros e pagamentos.",
                },
            ],
        },
    },
};