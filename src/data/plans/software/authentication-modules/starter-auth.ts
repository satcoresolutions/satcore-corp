import type {
    ServicePlan,
} from "@/types/plan.types";

export const starterAuth: ServicePlan = {
    core: {
        // ────────────────────────────────────
        // Identidad
        // ────────────────────────────────────

        id: "AUTH-001",

        slug: "starter-auth",

        // ────────────────────────────────────
        // Comercial
        // ────────────────────────────────────

        complexity: "⭐⭐ (2/5)",

        price: "$380 - $600 USD",

        pricingType: "fixed",

        automationLevel: "medium",

        // ────────────────────────────────────
        // Técnico
        // ────────────────────────────────────

        stack: [
            "Next.js",
            "TypeScript",
            "JWT",
            "Prisma",
            "PostgreSQL",
        ],

        technologies: [
            "Next.js API Routes",
            "TypeScript",
            "JWT",
            "Prisma ORM",
            "PostgreSQL",
            "Passport.js",
            "Password Hashing",
            "HTTP-only Cookies",
            "Email Validation",
        ],

        integrations: [
            "Email Services",
            "Resend",
        ],

        // ────────────────────────────────────
        // Multimedia
        // ────────────────────────────────────

        heroImage:
            "/images/services/software/hero/hero-starter-auth.png",

        image:
            "/images/services/software/hero/hero-starter-auth.png",
    },

    translations: {
        es: {
            name: "Autenticación Inicial",

            title:
                "Módulo de Autenticación Inicial",

            level: "🟢 Básico",

            category:
                "Módulos de Autenticación",

            description:
                "Módulo de autenticación seguro para gestionar registro e inicio de sesión de usuarios mediante contraseñas protegidas, tokens JWT, validación de correo electrónico y manejo de sesiones mediante cookies HTTP-only.",

            time: "2-3 semanas",

            imageAlt:
                "Módulo de autenticación y acceso seguro de usuarios",

            target:
                "Empresas, aplicaciones web, plataformas digitales y proyectos que necesitan incorporar un sistema seguro de registro, inicio de sesión y validación de usuarios.",

            support:
                "30 días soporte post-entrega",

            useCases: [
                "Registro de usuarios",
                "Inicio de sesión",
                "Aplicaciones web",
                "Plataformas digitales",
                "Portales privados",
                "Sistemas internos",
            ],

            includes: [
                "Registro de usuarios",
                "Inicio de sesión",
                "Hashing seguro de contraseñas",
                "Generación de tokens JWT",
                "Middleware de autenticación",
                "Validación de correo electrónico",
                "Manejo de sesiones",
                "Cookies HTTP-only",
                "Validación de credenciales",
                "Prisma ORM",
                "Base de datos relacional",
                "Diseño responsive",
            ],

            notIncludes: [
                "Control de acceso basado en roles",
                "Rotación avanzada de tokens",
                "Gestión de múltiples dispositivos",
                "Permisos granulares",
                "Autenticación empresarial avanzada",
            ],

            features: [
                "User Registration",
                "User Login",
                "Cryptographic Password Hashing",
                "JWT Token Creation",
                "Authentication Middleware",
                "Email Validation",
                "HTTP-only Cookie Sessions",
                "Credential Validation",
                "Prisma ORM",
                "REST API",
            ],

            deliverables: [
                "Módulo de autenticación implementado",
                "Flujos de registro e inicio de sesión",
                "Middleware JWT",
                "Estructura de validación de correo",
                "Código fuente",
                "Base de datos configurada",
                "Documentación técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Acceso seguro",

                    description:
                        "Protege el acceso de los usuarios mediante hashing criptográfico de contraseñas y validación segura de credenciales.",
                },

                {
                    title:
                        "Sesiones protegidas",

                    description:
                        "El uso de cookies HTTP-only permite gestionar las sesiones reduciendo la exposición directa de los tokens desde el navegador.",
                },

                {
                    title:
                        "Arquitectura escalable",

                    description:
                        "La estructura de autenticación puede evolucionar posteriormente hacia roles, permisos y gestión avanzada de sesiones.",
                },
            ],

            process: [
                {
                    title:
                        "Diseño de autenticación",

                    description:
                        "Definimos usuarios, credenciales, flujo de registro, inicio de sesión y validación de correo electrónico.",
                },

                {
                    title:
                        "Implementación de seguridad",

                    description:
                        "Implementamos hashing de contraseñas, generación de JWT y manejo seguro de sesiones mediante cookies HTTP-only.",
                },

                {
                    title:
                        "Integración y pruebas",

                    description:
                        "Integramos el módulo con la aplicación, validamos los flujos de acceso y realizamos pruebas de seguridad antes de la entrega.",
                },
            ],

            faq: [
                {
                    question:
                        "¿Incluye registro e inicio de sesión?",

                    answer:
                        "Sí. El módulo incluye los flujos principales de registro e inicio de sesión de usuarios.",
                },

                {
                    question:
                        "¿Cómo se protegen las contraseñas?",

                    answer:
                        "Las contraseñas se almacenan utilizando hashing criptográfico para evitar guardar las credenciales en texto plano.",
                },

                {
                    question:
                        "¿Utiliza JWT?",

                    answer:
                        "Sí. El módulo incluye generación y validación de tokens JWT para gestionar la autenticación de los usuarios.",
                },

                {
                    question:
                        "¿Las sesiones utilizan cookies?",

                    answer:
                        "Sí. El sistema contempla el manejo de sesiones mediante cookies HTTP-only para mejorar la protección de las credenciales de sesión.",
                },

                {
                    question:
                        "¿Incluye roles y permisos?",

                    answer:
                        "No en este plan. El control de acceso basado en roles y la gestión avanzada de permisos pertenecen al plan Advanced Auth.",
                },
            ],
        },
        en: {
            name: "Starter Authentication",

            title:
                "Starter Authentication Module",

            level: "🟢 Basic",

            category:
                "Authentication Modules",

            description:
                "Secure authentication module for managing user registration and login through protected passwords, JWT tokens, email validation, and session handling using HTTP-only cookies.",

            time: "2-3 weeks",

            imageAlt:
                "Authentication module and secure user access",

            target:
                "Businesses, web applications, digital platforms, and projects that need to implement a secure system for user registration, login, and user validation.",

            support:
                "30 days post-delivery support",

            useCases: [
                "User registration",
                "User login",
                "Web applications",
                "Digital platforms",
                "Private portals",
                "Internal systems",
            ],

            includes: [
                "User registration",
                "User login",
                "Secure password hashing",
                "JWT token generation",
                "Authentication middleware",
                "Email validation",
                "Session management",
                "HTTP-only cookies",
                "Credential validation",
                "Prisma ORM",
                "Relational database",
                "Responsive design",
            ],

            notIncludes: [
                "Role-Based Access Control",
                "Advanced token rotation",
                "Multi-device management",
                "Granular permissions",
                "Advanced enterprise authentication",
            ],

            features: [
                "User Registration",
                "User Login",
                "Cryptographic Password Hashing",
                "JWT Token Creation",
                "Authentication Middleware",
                "Email Validation",
                "HTTP-only Cookie Sessions",
                "Credential Validation",
                "Prisma ORM",
                "REST API",
            ],

            deliverables: [
                "Implemented authentication module",
                "Registration and login flows",
                "JWT middleware",
                "Email validation structure",
                "Source code",
                "Configured database",
                "Technical documentation",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Secure Access",

                    description:
                        "Protects user access through cryptographic password hashing and secure credential validation.",
                },

                {
                    title:
                        "Protected Sessions",

                    description:
                        "The use of HTTP-only cookies allows sessions to be managed while reducing direct exposure of tokens in the browser.",
                },

                {
                    title:
                        "Scalable Architecture",

                    description:
                        "The authentication structure can later evolve to support roles, permissions, and advanced session management.",
                },
            ],

            process: [
                {
                    title:
                        "Authentication Design",

                    description:
                        "We define users, credentials, registration flow, login, and email validation.",
                },

                {
                    title:
                        "Security Implementation",

                    description:
                        "We implement password hashing, JWT generation, and secure session management using HTTP-only cookies.",
                },

                {
                    title:
                        "Integration and Testing",

                    description:
                        "We integrate the module with the application, validate access flows, and perform security testing before delivery.",
                },
            ],

            faq: [
                {
                    question:
                        "Does it include registration and login?",

                    answer:
                        "Yes. The module includes the main user registration and login flows.",
                },

                {
                    question:
                        "How are passwords protected?",

                    answer:
                        "Passwords are stored using cryptographic hashing to prevent credentials from being stored in plain text.",
                },

                {
                    question:
                        "Does it use JWT?",

                    answer:
                        "Yes. The module includes JWT token generation and validation to manage user authentication.",
                },

                {
                    question:
                        "Do sessions use cookies?",

                    answer:
                        "Yes. The system uses HTTP-only cookies for session management to improve the protection of session credentials.",
                },

                {
                    question:
                        "Does it include roles and permissions?",

                    answer:
                        "Not in this plan. Role-Based Access Control and advanced permission management are included in the Advanced Auth plan.",
                },
            ],
        },
        pt: {
            name: "Autenticação Inicial",

            title:
                "Módulo de Autenticação Inicial",

            level: "🟢 Básico",

            category:
                "Módulos de Autenticação",

            description:
                "Módulo seguro de autenticação para gerenciar o registro e o login de usuários por meio de senhas protegidas, tokens JWT, validação de e-mail e gerenciamento de sessões utilizando cookies HTTP-only.",

            time: "2-3 semanas",

            imageAlt:
                "Módulo de autenticação e acesso seguro de usuários",

            target:
                "Empresas, aplicações web, plataformas digitais e projetos que precisam implementar um sistema seguro de registro, login e validação de usuários.",

            support:
                "30 dias de suporte pós-entrega",

            useCases: [
                "Registro de usuários",
                "Login de usuários",
                "Aplicações web",
                "Plataformas digitais",
                "Portais privados",
                "Sistemas internos",
            ],

            includes: [
                "Registro de usuários",
                "Login de usuários",
                "Hashing seguro de senhas",
                "Geração de tokens JWT",
                "Middleware de autenticação",
                "Validação de e-mail",
                "Gerenciamento de sessões",
                "Cookies HTTP-only",
                "Validação de credenciais",
                "Prisma ORM",
                "Banco de dados relacional",
                "Design responsivo",
            ],

            notIncludes: [
                "Controle de Acesso Baseado em Funções",
                "Rotação avançada de tokens",
                "Gerenciamento de múltiplos dispositivos",
                "Permissões granulares",
                "Autenticação empresarial avançada",
            ],

            features: [
                "User Registration",
                "User Login",
                "Cryptographic Password Hashing",
                "JWT Token Creation",
                "Authentication Middleware",
                "Email Validation",
                "HTTP-only Cookie Sessions",
                "Credential Validation",
                "Prisma ORM",
                "REST API",
            ],

            deliverables: [
                "Módulo de autenticação implementado",
                "Fluxos de registro e login",
                "Middleware JWT",
                "Estrutura de validação de e-mail",
                "Código-fonte",
                "Banco de dados configurado",
                "Documentação técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Acesso Seguro",

                    description:
                        "Protege o acesso dos usuários por meio de hashing criptográfico de senhas e validação segura de credenciais.",
                },

                {
                    title:
                        "Sessões Protegidas",

                    description:
                        "O uso de cookies HTTP-only permite gerenciar as sessões reduzindo a exposição direta dos tokens no navegador.",
                },

                {
                    title:
                        "Arquitetura Escalável",

                    description:
                        "A estrutura de autenticação pode posteriormente evoluir para oferecer suporte a funções, permissões e gerenciamento avançado de sessões.",
                },
            ],

            process: [
                {
                    title:
                        "Definição da Autenticação",

                    description:
                        "Definimos usuários, credenciais, fluxo de registro, login e validação de e-mail.",
                },

                {
                    title:
                        "Implementação de Segurança",

                    description:
                        "Implementamos hashing de senhas, geração de JWT e gerenciamento seguro de sessões utilizando cookies HTTP-only.",
                },

                {
                    title:
                        "Integração e Testes",

                    description:
                        "Integramos o módulo à aplicação, validamos os fluxos de acesso e realizamos testes de segurança antes da entrega.",
                },
            ],

            faq: [
                {
                    question:
                        "Inclui registro e login?",

                    answer:
                        "Sim. O módulo inclui os principais fluxos de registro e login de usuários.",
                },

                {
                    question:
                        "Como as senhas são protegidas?",

                    answer:
                        "As senhas são armazenadas utilizando hashing criptográfico para evitar que as credenciais sejam armazenadas em texto simples.",
                },

                {
                    question:
                        "Utiliza JWT?",

                    answer:
                        "Sim. O módulo inclui geração e validação de tokens JWT para gerenciar a autenticação dos usuários.",
                },

                {
                    question:
                        "As sessões utilizam cookies?",

                    answer:
                        "Sim. O sistema utiliza cookies HTTP-only para o gerenciamento das sessões, aumentando a proteção das credenciais de sessão.",
                },

                {
                    question:
                        "Inclui funções e permissões?",

                    answer:
                        "Não neste plano. O Controle de Acesso Baseado em Funções e o gerenciamento avançado de permissões fazem parte do plano Advanced Auth.",
                },
            ],
        },
    },
};