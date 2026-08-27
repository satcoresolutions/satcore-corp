import type {
    ServicePlan,
} from "@/types/plan.types";

export const advancedAuth: ServicePlan = {
    core: {
        // ────────────────────────────────────
        // Identidad
        // ────────────────────────────────────

        id: "AUTH-002",

        slug: "advanced-auth",

        // ────────────────────────────────────
        // Comercial
        // ────────────────────────────────────

        complexity: "⭐⭐⭐⭐ (4/5)",

        price: "$750 - $1,250 USD",

        pricingType: "fixed",

        automationLevel: "high",

        // ────────────────────────────────────
        // Técnico
        // ────────────────────────────────────

        stack: [
            "Next.js",
            "NestJS",
            "TypeScript",
            "Passport.js",
            "JWT",
            "Prisma",
            "PostgreSQL",
        ],

        technologies: [
            "Next.js API Routes",
            "NestJS",
            "TypeScript",
            "Passport.js",
            "JWT",
            "Prisma ORM",
            "PostgreSQL",
            "Password Hashing",
            "HTTP-only Cookies",
            "RBAC",
            "Token Rotation",
            "Multi-device Sessions",
        ],

        integrations: [
            "Email Services",
            "Resend",
            "Authentication Providers",
        ],

        // ────────────────────────────────────
        // Multimedia
        // ────────────────────────────────────

        heroImage:
            "/images/services/software/hero/hero-advanced-auth.png",

        image:
            "/images/services/software/hero/hero-advanced-auth.png",
    },

    translations: {
        es: {
            name: "Autenticación Avanzada",

            title:
                "Módulo de Autenticación Avanzada",

            level: "🔴 Avanzado",

            category:
                "Módulos de Autenticación",

            description:
                "Sistema avanzado de autenticación y autorización con control de acceso basado en roles, rotación de tokens de sesión y gestión de sesiones en múltiples dispositivos.",

            time: "4-6 semanas",

            imageAlt:
                "Sistema avanzado de autenticación y control de acceso",

            target:
                "Empresas, plataformas digitales, aplicaciones SaaS y sistemas internos que necesitan administrar usuarios, roles, permisos y sesiones desde una arquitectura de seguridad más avanzada.",

            support:
                "45 días soporte post-entrega",

            useCases: [
                "Aplicaciones SaaS",
                "Plataformas empresariales",
                "Paneles administrativos",
                "Sistemas internos",
                "Portales con múltiples roles",
                "Plataformas multiusuario",
                "Sistemas con permisos diferenciados",
                "Aplicaciones con múltiples dispositivos",
            ],

            includes: [
                "Registro de usuarios",
                "Inicio de sesión",
                "Hashing criptográfico de contraseñas",
                "Autenticación JWT",
                "Passport.js",
                "Control de acceso basado en roles",
                "Gestión de roles",
                "Gestión de permisos",
                "Rotación de tokens de sesión",
                "Gestión de múltiples dispositivos",
                "Sesiones HTTP-only",
                "Validación de estado de usuario",
                "Middleware de autorización",
                "Panel de administración",
                "Base de datos relacional",
            ],

            notIncludes: [
                "Single Sign-On empresarial avanzado",
                "Integraciones SAML empresariales",
                "Identity Provider personalizado",
                "Autenticación biométrica nativa",
                "Infraestructura IAM empresarial completa",
            ],

            features: [
                "Role-Based Access Control",
                "JWT Authentication",
                "Cryptographic Password Hashing",
                "HTTP-only Cookie Sessions",
                "Session Token Rotation",
                "Multi-device Session Management",
                "User State Validation",
                "Role Management",
                "Permission Management",
                "Passport.js",
                "Prisma ORM",
                "REST API",
            ],

            deliverables: [
                "Módulo avanzado de autenticación",
                "Sistema RBAC",
                "Gestión de roles y permisos",
                "Rotación de tokens",
                "Gestión de sesiones multi-dispositivo",
                "Middleware de autenticación y autorización",
                "Código fuente",
                "Base de datos configurada",
                "Documentación técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Control de acceso",

                    description:
                        "Permite definir qué acciones puede realizar cada usuario según sus roles y permisos dentro de la aplicación.",
                },

                {
                    title:
                        "Sesiones más seguras",

                    description:
                        "La rotación de tokens y el manejo controlado de sesiones ayudan a reducir los riesgos asociados con credenciales de sesión comprometidas.",
                },

                {
                    title:
                        "Gestión multi-dispositivo",

                    description:
                        "Permite controlar las sesiones activas de un usuario desde diferentes dispositivos y aplicar reglas de seguridad centralizadas.",
                },

                {
                    title:
                        "Arquitectura escalable",

                    description:
                        "La estructura RBAC facilita incorporar nuevos roles, permisos y niveles de acceso a medida que crece la aplicación.",
                },
            ],

            process: [
                {
                    title:
                        "Diseño de roles y permisos",

                    description:
                        "Definimos usuarios, roles, permisos, recursos protegidos y reglas de acceso según las necesidades del proyecto.",
                },

                {
                    title:
                        "Implementación de autenticación",

                    description:
                        "Construimos el sistema utilizando JWT, Passport.js, hashing criptográfico y sesiones mediante cookies HTTP-only.",
                },

                {
                    title:
                        "Gestión avanzada de sesiones",

                    description:
                        "Implementamos rotación de tokens y lógica para administrar sesiones activas desde diferentes dispositivos.",
                },

                {
                    title:
                        "Pruebas de seguridad",

                    description:
                        "Validamos autenticación, autorización, permisos, sesiones y diferentes escenarios de acceso antes del lanzamiento.",
                },
            ],

            faq: [
                {
                    question:
                        "¿Qué diferencia existe entre Starter Auth y Advanced Auth?",

                    answer:
                        "Starter Auth proporciona autenticación esencial mediante registro, inicio de sesión y JWT. Advanced Auth agrega RBAC, gestión de roles y permisos, rotación de tokens y administración de sesiones en múltiples dispositivos.",
                },

                {
                    question:
                        "¿Qué es RBAC?",

                    answer:
                        "RBAC significa Role-Based Access Control o control de acceso basado en roles. Permite determinar qué recursos y acciones puede utilizar un usuario según el rol que tenga asignado.",
                },

                {
                    question:
                        "¿Puede manejar diferentes roles de usuario?",

                    answer:
                        "Sí. El sistema permite definir diferentes roles y asociarlos con permisos específicos dentro de la aplicación.",
                },

                {
                    question:
                        "¿Puede controlar sesiones desde varios dispositivos?",

                    answer:
                        "Sí. El plan Advanced Auth contempla lógica para gestionar sesiones activas de un mismo usuario desde diferentes dispositivos.",
                },

                {
                    question:
                        "¿Qué es la rotación de tokens?",

                    answer:
                        "Es una estrategia de seguridad que permite renovar los tokens de sesión periódicamente para reducir la exposición de credenciales de sesión de larga duración.",
                },

                {
                    question:
                        "¿Utiliza Passport.js?",

                    answer:
                        "Sí. El plan Advanced Auth contempla Passport.js como parte de la arquitectura de autenticación y estrategias de acceso.",
                },
            ],
        },
        en: {
            name: "Advanced Authentication",

            title:
                "Advanced Authentication Module",

            level: "🔴 Advanced",

            category:
                "Authentication Modules",

            description:
                "Advanced authentication and authorization system with role-based access control, session token rotation, and multi-device session management.",

            time: "4-6 weeks",

            imageAlt:
                "Advanced authentication and access control system",

            target:
                "Businesses, digital platforms, SaaS applications, and internal systems that need to manage users, roles, permissions, and sessions through a more advanced security architecture.",

            support:
                "45 days post-delivery support",

            useCases: [
                "SaaS applications",
                "Enterprise platforms",
                "Administration panels",
                "Internal systems",
                "Multi-role portals",
                "Multi-user platforms",
                "Systems with differentiated permissions",
                "Multi-device applications",
            ],

            includes: [
                "User registration",
                "User login",
                "Cryptographic password hashing",
                "JWT authentication",
                "Passport.js",
                "Role-Based Access Control",
                "Role management",
                "Permission management",
                "Session token rotation",
                "Multi-device management",
                "HTTP-only sessions",
                "User state validation",
                "Authorization middleware",
                "Administration panel",
                "Relational database",
            ],

            notIncludes: [
                "Advanced enterprise Single Sign-On",
                "Enterprise SAML integrations",
                "Custom Identity Provider",
                "Native biometric authentication",
                "Complete enterprise IAM infrastructure",
            ],

            features: [
                "Role-Based Access Control",
                "JWT Authentication",
                "Cryptographic Password Hashing",
                "HTTP-only Cookie Sessions",
                "Session Token Rotation",
                "Multi-device Session Management",
                "User State Validation",
                "Role Management",
                "Permission Management",
                "Passport.js",
                "Prisma ORM",
                "REST API",
            ],

            deliverables: [
                "Advanced authentication module",
                "RBAC system",
                "Role and permission management",
                "Token rotation",
                "Multi-device session management",
                "Authentication and authorization middleware",
                "Source code",
                "Configured database",
                "Technical documentation",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Access Control",

                    description:
                        "Allows you to define which actions each user can perform based on their roles and permissions within the application.",
                },

                {
                    title:
                        "More Secure Sessions",

                    description:
                        "Token rotation and controlled session management help reduce risks associated with compromised session credentials.",
                },

                {
                    title:
                        "Multi-device Management",

                    description:
                        "Allows active user sessions to be controlled across different devices and centralized security rules to be applied.",
                },

                {
                    title:
                        "Scalable Architecture",

                    description:
                        "The RBAC structure makes it easier to add new roles, permissions, and access levels as the application grows.",
                },
            ],

            process: [
                {
                    title:
                        "Role and Permission Design",

                    description:
                        "We define users, roles, permissions, protected resources, and access rules according to the project's requirements.",
                },

                {
                    title:
                        "Authentication Implementation",

                    description:
                        "We build the system using JWT, Passport.js, cryptographic password hashing, and HTTP-only cookie sessions.",
                },

                {
                    title:
                        "Advanced Session Management",

                    description:
                        "We implement token rotation and logic for managing active sessions across different devices.",
                },

                {
                    title:
                        "Security Testing",

                    description:
                        "We validate authentication, authorization, permissions, sessions, and different access scenarios before launch.",
                },
            ],

            faq: [
                {
                    question:
                        "What is the difference between Starter Auth and Advanced Auth?",

                    answer:
                        "Starter Auth provides essential authentication through registration, login, and JWT. Advanced Auth adds RBAC, role and permission management, token rotation, and multi-device session management.",
                },

                {
                    question:
                        "What is RBAC?",

                    answer:
                        "RBAC stands for Role-Based Access Control. It allows the system to determine which resources and actions a user can access based on their assigned role.",
                },

                {
                    question:
                        "Can it manage different user roles?",

                    answer:
                        "Yes. The system allows different roles to be defined and associated with specific permissions within the application.",
                },

                {
                    question:
                        "Can it manage sessions across multiple devices?",

                    answer:
                        "Yes. The Advanced Auth plan includes logic for managing active sessions for the same user across different devices.",
                },

                {
                    question:
                        "What is token rotation?",

                    answer:
                        "It is a security strategy that periodically renews session tokens to reduce the exposure associated with long-lived session credentials.",
                },

                {
                    question:
                        "Does it use Passport.js?",

                    answer:
                        "Yes. The Advanced Auth plan uses Passport.js as part of its authentication architecture and access strategies.",
                },
            ],
        },
        pt: {
            name: "Autenticação Avançada",

            title:
                "Módulo de Autenticação Avançada",

            level: "🔴 Avançado",

            category:
                "Módulos de Autenticação",

            description:
                "Sistema avançado de autenticação e autorização com controle de acesso baseado em funções, rotação de tokens de sessão e gerenciamento de sessões em múltiplos dispositivos.",

            time: "4-6 semanas",

            imageAlt:
                "Sistema avançado de autenticação e controle de acesso",

            target:
                "Empresas, plataformas digitais, aplicações SaaS e sistemas internos que precisam gerenciar usuários, funções, permissões e sessões por meio de uma arquitetura de segurança mais avançada.",

            support:
                "45 dias de suporte pós-entrega",

            useCases: [
                "Aplicações SaaS",
                "Plataformas empresariais",
                "Painéis administrativos",
                "Sistemas internos",
                "Portais com múltiplas funções",
                "Plataformas multiusuário",
                "Sistemas com permissões diferenciadas",
                "Aplicações com múltiplos dispositivos",
            ],

            includes: [
                "Registro de usuários",
                "Login de usuários",
                "Hashing criptográfico de senhas",
                "Autenticação JWT",
                "Passport.js",
                "Controle de Acesso Baseado em Funções",
                "Gerenciamento de funções",
                "Gerenciamento de permissões",
                "Rotação de tokens de sessão",
                "Gerenciamento de múltiplos dispositivos",
                "Sessões HTTP-only",
                "Validação do estado do usuário",
                "Middleware de autorização",
                "Painel administrativo",
                "Banco de dados relacional",
            ],

            notIncludes: [
                "Single Sign-On empresarial avançado",
                "Integrações SAML empresariais",
                "Identity Provider personalizado",
                "Autenticação biométrica nativa",
                "Infraestrutura IAM empresarial completa",
            ],

            features: [
                "Role-Based Access Control",
                "JWT Authentication",
                "Cryptographic Password Hashing",
                "HTTP-only Cookie Sessions",
                "Session Token Rotation",
                "Multi-device Session Management",
                "User State Validation",
                "Role Management",
                "Permission Management",
                "Passport.js",
                "Prisma ORM",
                "REST API",
            ],

            deliverables: [
                "Módulo avançado de autenticação",
                "Sistema RBAC",
                "Gerenciamento de funções e permissões",
                "Rotação de tokens",
                "Gerenciamento de sessões em múltiplos dispositivos",
                "Middleware de autenticação e autorização",
                "Código-fonte",
                "Banco de dados configurado",
                "Documentação técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Controle de Acesso",

                    description:
                        "Permite definir quais ações cada usuário pode realizar de acordo com suas funções e permissões dentro da aplicação.",
                },

                {
                    title:
                        "Sessões Mais Seguras",

                    description:
                        "A rotação de tokens e o gerenciamento controlado de sessões ajudam a reduzir os riscos associados a credenciais de sessão comprometidas.",
                },

                {
                    title:
                        "Gerenciamento Multi-dispositivo",

                    description:
                        "Permite controlar as sessões ativas de um usuário em diferentes dispositivos e aplicar regras de segurança centralizadas.",
                },

                {
                    title:
                        "Arquitetura Escalável",

                    description:
                        "A estrutura RBAC facilita a incorporação de novas funções, permissões e níveis de acesso conforme a aplicação cresce.",
                },
            ],

            process: [
                {
                    title:
                        "Definição de Funções e Permissões",

                    description:
                        "Definimos usuários, funções, permissões, recursos protegidos e regras de acesso de acordo com os requisitos do projeto.",
                },

                {
                    title:
                        "Implementação da Autenticação",

                    description:
                        "Construímos o sistema utilizando JWT, Passport.js, hashing criptográfico de senhas e sessões por meio de cookies HTTP-only.",
                },

                {
                    title:
                        "Gerenciamento Avançado de Sessões",

                    description:
                        "Implementamos rotação de tokens e lógica para gerenciar sessões ativas em diferentes dispositivos.",
                },

                {
                    title:
                        "Testes de Segurança",

                    description:
                        "Validamos autenticação, autorização, permissões, sessões e diferentes cenários de acesso antes do lançamento.",
                },
            ],

            faq: [
                {
                    question:
                        "Qual é a diferença entre Starter Auth e Advanced Auth?",

                    answer:
                        "O Starter Auth oferece autenticação essencial por meio de registro, login e JWT. O Advanced Auth adiciona RBAC, gerenciamento de funções e permissões, rotação de tokens e gerenciamento de sessões em múltiplos dispositivos.",
                },

                {
                    question:
                        "O que é RBAC?",

                    answer:
                        "RBAC significa Role-Based Access Control ou Controle de Acesso Baseado em Funções. Ele permite determinar quais recursos e ações um usuário pode acessar de acordo com a função atribuída a ele.",
                },

                {
                    question:
                        "Pode gerenciar diferentes funções de usuário?",

                    answer:
                        "Sim. O sistema permite definir diferentes funções e associá-las a permissões específicas dentro da aplicação.",
                },

                {
                    question:
                        "Pode gerenciar sessões em vários dispositivos?",

                    answer:
                        "Sim. O plano Advanced Auth contempla lógica para gerenciar sessões ativas de um mesmo usuário em diferentes dispositivos.",
                },

                {
                    question:
                        "O que é rotação de tokens?",

                    answer:
                        "É uma estratégia de segurança que permite renovar periodicamente os tokens de sessão para reduzir a exposição associada a credenciais de sessão de longa duração.",
                },

                {
                    question:
                        "Utiliza Passport.js?",

                    answer:
                        "Sim. O plano Advanced Auth utiliza Passport.js como parte da arquitetura de autenticação e das estratégias de acesso.",
                },
            ],
        },
    },
};