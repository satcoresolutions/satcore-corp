import type {
    ServicePlan,
} from "@/types/plan.types";

export const apiDocumentation: ServicePlan = {
    core: {
        // ────────────────────────────────────
        // Identidad
        // ────────────────────────────────────

        id: "DOC-002",

        slug: "api-documentation",

        // ────────────────────────────────────
        // Comercial
        // ────────────────────────────────────

        complexity: "⭐⭐⭐⭐ (4/5)",

        price: "$1,000 - $1,850 USD",

        pricingType: "fixed",

        automationLevel: "high",

        // ────────────────────────────────────
        // Técnico
        // ────────────────────────────────────

        stack: [
            "Next.js",
            "MDX",
            "TypeScript",
            "Tailwind CSS",
        ],

        technologies: [
            "Next.js",
            "MDX",
            "TypeScript",
            "Tailwind CSS",
            "API Documentation",
            "Syntax Highlighting",
            "Dynamic Sidebar",
            "OpenAPI Integration",
            "Interactive API Consoles",
            "Code Examples",
            "Responsive Layouts",
            "Type-safe Components",
        ],

        integrations: [
            "REST APIs",
            "OpenAPI",
            "Swagger",
            "Authentication APIs",
            "External API Services",
        ],

        // ────────────────────────────────────
        // Multimedia
        // ────────────────────────────────────

        heroImage:
            "/images/services/software/hero/hero-api-documentation.png",

        image:
            "/images/services/software/hero/hero-api-documentation.png",
    },

    translations: {
        // ═════════════════════════════════════
        // ESPAÑOL
        // ═════════════════════════════════════

        es: {
            name:
                "Documentación API",

            title:
                "Plataforma de Documentación API",

            level:
                "🟠 Avanzado",

            category:
                "Documentación de Sistemas",

            description:
                "Plataforma de documentación API inspirada en experiencias como Redoc y Swagger, con navegación estructurada, ejemplos de código, resaltado de sintaxis y consolas interactivas para explorar y ejecutar solicitudes de API.",

            time:
                "4-7 semanas",

            imageAlt:
                "Documentación API con consola interactiva, ejemplos de código y navegación lateral",

            target:
                "Empresas, equipos de desarrollo y productos digitales que necesitan presentar APIs de forma profesional, documentar endpoints y facilitar la integración técnica de desarrolladores.",

            support:
                "45 días soporte post-entrega",

            useCases: [
                "Documentación REST API",
                "Portales para desarrolladores",
                "Documentación de SDKs",
                "Documentación de APIs privadas",
                "Documentación de APIs públicas",
                "Developer Portals",
                "Guías de integración",
                "Referencia de endpoints",
            ],

            includes: [
                "Portal de documentación API",
                "Documentación MDX",
                "Navegación lateral dinámica",
                "Documentación de endpoints",
                "Ejemplos de código",
                "Resaltado de sintaxis",
                "Consola interactiva",
                "Diseño side-by-side",
                "Layouts responsive",
                "Estructura inspirada en Redoc/Swagger",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
            ],

            notIncludes: [
                "Desarrollo de la API backend",
                "Infraestructura completa de la API",
                "Sistema completo de autenticación",
                "Gestión empresarial de usuarios",
                "Aplicaciones móviles nativas",
                "Gateway empresarial de APIs",
            ],

            features: [
                "API Reference",
                "Interactive API Console",
                "Side-by-side Documentation",
                "Code Syntax Highlighting",
                "Dynamic Sidebar",
                "Endpoint Documentation",
                "Request Examples",
                "Response Examples",
                "OpenAPI Integration",
                "Responsive Developer Portal",
            ],

            deliverables: [
                "Portal API publicado",
                "Documentación de endpoints",
                "Navegación dinámica",
                "Ejemplos de solicitudes",
                "Ejemplos de respuestas",
                "Consola interactiva",
                "Resaltado de sintaxis",
                "Integración OpenAPI cuando aplique",
                "Código fuente",
                "Documentación técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Experiencia para desarrolladores",

                    description:
                        "Proporciona una interfaz especializada para que desarrolladores puedan comprender y utilizar una API de forma más rápida.",
                },

                {
                    title:
                        "Referencia centralizada",

                    description:
                        "Permite documentar endpoints, parámetros, respuestas, autenticación y ejemplos dentro de una única plataforma.",
                },

                {
                    title:
                        "Pruebas interactivas",

                    description:
                        "Las consolas interactivas permiten explorar solicitudes y respuestas directamente desde la documentación cuando la API lo permite.",
                },

                {
                    title:
                        "Documentación profesional",

                    description:
                        "La estructura side-by-side facilita visualizar simultáneamente la explicación del endpoint y sus ejemplos técnicos.",
                },
            ],

            process: [
                {
                    title:
                        "Análisis de la API",

                    description:
                        "Identificamos endpoints, métodos HTTP, parámetros, respuestas, autenticación y modelos de datos que deben documentarse.",
                },

                {
                    title:
                        "Arquitectura documental",

                    description:
                        "Diseñamos la estructura de navegación, categorías, referencias y páginas de documentación.",
                },

                {
                    title:
                        "Construcción de referencia API",

                    description:
                        "Implementamos la documentación de endpoints, parámetros, respuestas y ejemplos de código.",
                },

                {
                    title:
                        "Consola interactiva",

                    description:
                        "Configuramos una experiencia interactiva para permitir explorar y ejecutar solicitudes cuando la API y sus políticas de acceso lo permiten.",
                },

                {
                    title:
                        "Pruebas y publicación",

                    description:
                        "Validamos ejemplos, navegación, layouts responsive, sintaxis, solicitudes y respuestas antes del lanzamiento.",
                },
            ],

            faq: [
                {
                    question:
                        "¿Qué es una documentación API?",

                    answer:
                        "Es una plataforma que explica cómo utilizar una API, incluyendo endpoints, métodos, parámetros, respuestas, autenticación y ejemplos de integración.",
                },

                {
                    question:
                        "¿Puede incluir una consola interactiva?",

                    answer:
                        "Sí. Puede incorporar una consola para explorar y ejecutar solicitudes de API cuando las condiciones de acceso y seguridad del servicio lo permiten.",
                },

                {
                    question:
                        "¿Puede integrarse con OpenAPI?",

                    answer:
                        "Sí. La arquitectura puede trabajar con especificaciones OpenAPI para estructurar y representar información de los endpoints.",
                },

                {
                    question:
                        "¿Está pensada para desarrolladores?",

                    answer:
                        "Sí. El producto está orientado principalmente a equipos técnicos y desarrolladores que necesitan integrar o consumir APIs.",
                },
            ],
        },

        // ═════════════════════════════════════
        // ENGLISH
        // ═════════════════════════════════════

        en: {
            name:
                "API Documentation",

            title:
                "API Documentation Platform",

            level:
                "🟠 Advanced",

            category:
                "System Documentation",

            description:
                "API documentation platform inspired by Redoc and Swagger experiences, featuring structured navigation, code examples, syntax highlighting, and interactive consoles for exploring and executing API requests.",

            time:
                "4-7 weeks",

            imageAlt:
                "API documentation with interactive console, code examples, and sidebar navigation",

            target:
                "Companies, development teams, and digital products that need to present APIs professionally, document endpoints, and simplify technical integration for developers.",

            support:
                "45 days post-delivery support",

            useCases: [
                "REST API documentation",
                "Developer portals",
                "SDK documentation",
                "Private API documentation",
                "Public API documentation",
                "Developer portals",
                "Integration guides",
                "Endpoint references",
            ],

            includes: [
                "API documentation portal",
                "MDX documentation",
                "Dynamic sidebar",
                "Endpoint documentation",
                "Code examples",
                "Syntax highlighting",
                "Interactive console",
                "Side-by-side layout",
                "Responsive layouts",
                "Redoc/Swagger-inspired structure",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
            ],

            notIncludes: [
                "Backend API development",
                "Complete API infrastructure",
                "Complete authentication system",
                "Enterprise user management",
                "Native mobile applications",
                "Enterprise API gateway",
            ],

            features: [
                "API Reference",
                "Interactive API Console",
                "Side-by-side Documentation",
                "Code Syntax Highlighting",
                "Dynamic Sidebar",
                "Endpoint Documentation",
                "Request Examples",
                "Response Examples",
                "OpenAPI Integration",
                "Responsive Developer Portal",
            ],

            deliverables: [
                "Published API portal",
                "Endpoint documentation",
                "Dynamic navigation",
                "Request examples",
                "Response examples",
                "Interactive console",
                "Syntax highlighting",
                "OpenAPI integration when applicable",
                "Source code",
                "Technical documentation",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Developer Experience",

                    description:
                        "Provides a specialized interface that helps developers understand and use an API more efficiently.",
                },

                {
                    title:
                        "Centralized Reference",

                    description:
                        "Documents endpoints, parameters, responses, authentication, and examples within a single platform.",
                },

                {
                    title:
                        "Interactive Testing",

                    description:
                        "Interactive consoles allow users to explore requests and responses directly from the documentation when supported by the API.",
                },

                {
                    title:
                        "Professional Documentation",

                    description:
                        "The side-by-side structure makes it possible to view endpoint explanations and technical examples simultaneously.",
                },
            ],

            process: [
                {
                    title:
                        "API Analysis",

                    description:
                        "We identify endpoints, HTTP methods, parameters, responses, authentication, and data models that need to be documented.",
                },

                {
                    title:
                        "Documentation Architecture",

                    description:
                        "We design the navigation, categories, references, and documentation page structure.",
                },

                {
                    title:
                        "API Reference Construction",

                    description:
                        "We implement endpoint documentation, parameters, responses, and code examples.",
                },

                {
                    title:
                        "Interactive Console",

                    description:
                        "We configure an interactive experience for exploring and executing API requests when access conditions and service policies allow it.",
                },

                {
                    title:
                        "Testing and Publishing",

                    description:
                        "We validate examples, navigation, responsive layouts, syntax, requests, and responses before launch.",
                },
            ],

            faq: [
                {
                    question:
                        "What is API documentation?",

                    answer:
                        "It is a platform explaining how to use an API, including endpoints, methods, parameters, responses, authentication, and integration examples.",
                },

                {
                    question:
                        "Can it include an interactive console?",

                    answer:
                        "Yes. It can include a console for exploring and executing API requests when the service's access and security conditions allow it.",
                },

                {
                    question:
                        "Can it integrate with OpenAPI?",

                    answer:
                        "Yes. The architecture can work with OpenAPI specifications to structure and represent endpoint information.",
                },

                {
                    question:
                        "Is it designed for developers?",

                    answer:
                        "Yes. The product is primarily designed for technical teams and developers who need to integrate with or consume APIs.",
                },
            ],
        },

        // ═════════════════════════════════════
        // PORTUGUÊS
        // ═════════════════════════════════════

        pt: {
            name:
                "Documentação de API",

            title:
                "Plataforma de Documentação de API",

            level:
                "🟠 Avançado",

            category:
                "Documentação de Sistemas",

            description:
                "Plataforma de documentação de API inspirada nas experiências do Redoc e Swagger, com navegação estruturada, exemplos de código, destaque de sintaxe e consoles interativos para explorar e executar requisições de API.",

            time:
                "4-7 semanas",

            imageAlt:
                "Documentação de API com console interativo, exemplos de código e navegação lateral",

            target:
                "Empresas, equipes de desenvolvimento e produtos digitais que precisam apresentar APIs profissionalmente, documentar endpoints e facilitar a integração técnica de desenvolvedores.",

            support:
                "45 dias de suporte pós-entrega",

            useCases: [
                "Documentação REST API",
                "Portais para desenvolvedores",
                "Documentação de SDKs",
                "Documentação de APIs privadas",
                "Documentação de APIs públicas",
                "Developer Portals",
                "Guias de integração",
                "Referência de endpoints",
            ],

            includes: [
                "Portal de documentação API",
                "Documentação MDX",
                "Sidebar dinâmico",
                "Documentação de endpoints",
                "Exemplos de código",
                "Destaque de sintaxe",
                "Console interativo",
                "Layout side-by-side",
                "Layouts responsivos",
                "Estrutura inspirada em Redoc/Swagger",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
            ],

            notIncludes: [
                "Desenvolvimento da API backend",
                "Infraestrutura completa da API",
                "Sistema completo de autenticação",
                "Gerenciamento empresarial de usuários",
                "Aplicações móveis nativas",
                "Gateway empresarial de APIs",
            ],

            features: [
                "API Reference",
                "Interactive API Console",
                "Side-by-side Documentation",
                "Code Syntax Highlighting",
                "Dynamic Sidebar",
                "Endpoint Documentation",
                "Request Examples",
                "Response Examples",
                "OpenAPI Integration",
                "Responsive Developer Portal",
            ],

            deliverables: [
                "Portal API publicado",
                "Documentação de endpoints",
                "Navegação dinâmica",
                "Exemplos de requisições",
                "Exemplos de respostas",
                "Console interativo",
                "Destaque de sintaxe",
                "Integração OpenAPI quando aplicável",
                "Código-fonte",
                "Documentação técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Experiência para desenvolvedores",

                    description:
                        "Fornece uma interface especializada para que desenvolvedores possam compreender e utilizar uma API com mais eficiência.",
                },

                {
                    title:
                        "Referência centralizada",

                    description:
                        "Permite documentar endpoints, parâmetros, respostas, autenticação e exemplos em uma única plataforma.",
                },

                {
                    title:
                        "Testes interativos",

                    description:
                        "Os consoles interativos permitem explorar requisições e respostas diretamente da documentação quando suportado pela API.",
                },

                {
                    title:
                        "Documentação profissional",

                    description:
                        "A estrutura side-by-side permite visualizar simultaneamente a explicação do endpoint e seus exemplos técnicos.",
                },
            ],

            process: [
                {
                    title:
                        "Análise da API",

                    description:
                        "Identificamos endpoints, métodos HTTP, parâmetros, respostas, autenticação e modelos de dados que precisam ser documentados.",
                },

                {
                    title:
                        "Arquitetura documental",

                    description:
                        "Projetamos a estrutura de navegação, categorias, referências e páginas de documentação.",
                },

                {
                    title:
                        "Construção da referência API",

                    description:
                        "Implementamos a documentação de endpoints, parâmetros, respostas e exemplos de código.",
                },

                {
                    title:
                        "Console interativo",

                    description:
                        "Configuramos uma experiência interativa para explorar e executar requisições quando as condições de acesso e segurança do serviço permitirem.",
                },

                {
                    title:
                        "Testes e publicação",

                    description:
                        "Validamos exemplos, navegação, layouts responsivos, sintaxe, requisições e respostas antes do lançamento.",
                },
            ],

            faq: [
                {
                    question:
                        "O que é documentação de API?",

                    answer:
                        "É uma plataforma que explica como utilizar uma API, incluindo endpoints, métodos, parâmetros, respostas, autenticação e exemplos de integração.",
                },

                {
                    question:
                        "Pode incluir um console interativo?",

                    answer:
                        "Sim. Pode incorporar um console para explorar e executar requisições de API quando as condições de acesso e segurança do serviço permitirem.",
                },

                {
                    question:
                        "Pode integrar com OpenAPI?",

                    answer:
                        "Sim. A arquitetura pode trabalhar com especificações OpenAPI para estruturar e representar informações dos endpoints.",
                },

                {
                    question:
                        "É projetada para desenvolvedores?",

                    answer:
                        "Sim. O produto é principalmente voltado para equipes técnicas e desenvolvedores que precisam integrar ou consumir APIs.",
                },
            ],
        },
    },
};