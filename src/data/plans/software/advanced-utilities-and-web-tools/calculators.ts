import type {
    ServicePlan,
} from "@/types/plan.types";

export const calculators: ServicePlan = {
    core: {
        // ────────────────────────────────────
        // Identidad
        // ────────────────────────────────────

        id: "APP-001",

        slug: "calculators",

        // ────────────────────────────────────
        // Comercial
        // ────────────────────────────────────

        complexity: "⭐⭐⭐ (3/5)",

        price: "$200 - $380 USD",

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
            "Client-side Engines",
            "Algorithmic Frontend Scripts",
            "Mathematical Immutability",
            "Instant Data Updates",
            "Dynamic Calculations",
            "Type-safe Logic",
            "Responsive UI",
        ],

        integrations: [
            "REST APIs",
            "External Data Sources",
        ],

        // ────────────────────────────────────
        // Multimedia
        // ────────────────────────────────────

        heroImage:
            "/images/services/software/hero/hero-calculators.png",

        image:
            "/images/services/software/hero/hero-calculators.png",
    },

    translations: {
        // ═════════════════════════════════════
        // ESPAÑOL
        // ═════════════════════════════════════

        es: {
            name:
                "Calculadoras",

            title:
                "Calculadoras Web Personalizadas",

            level:
                "🟡 Intermedio",

            category:
                "Utilidades Avanzadas y Herramientas Web",

            description:
                "Calculadoras web personalizadas desarrolladas con motores de cálculo del lado del cliente para ejecutar algoritmos, actualizar datos instantáneamente y proporcionar resultados dinámicos dentro de una interfaz responsive.",

            time:
                "2-4 semanas",

            imageAlt:
                "Calculadora web personalizada con resultados dinámicos y actualización instantánea de datos",

            target:
                "Empresas, profesionales y proyectos digitales que necesitan implementar calculadoras personalizadas para realizar operaciones, estimaciones, conversiones o análisis directamente desde el navegador.",

            support:
                "30 días soporte post-entrega",

            useCases: [
                "Calculadoras financieras",
                "Calculadoras comerciales",
                "Calculadoras técnicas",
                "Calculadoras de precios",
                "Calculadoras de estimaciones",
                "Conversores de unidades",
                "Herramientas matemáticas",
                "Herramientas empresariales",
            ],

            includes: [
                "Calculadora web personalizada",
                "Motor de cálculo client-side",
                "Algoritmos personalizados",
                "Actualización instantánea de resultados",
                "Validación de entradas",
                "Manejo de estados",
                "Lógica matemática",
                "Interfaz responsive",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
            ],

            notIncludes: [
                "Backend complejo",
                "Base de datos empresarial",
                "Aplicación móvil nativa",
                "Sistema avanzado de autenticación",
                "Procesamiento masivo de datos",
                "Infraestructura cloud administrada",
            ],

            features: [
                "Custom Calculations",
                "Client-side Calculation Engine",
                "Algorithmic Frontend Scripts",
                "Instant Data Updates",
                "Mathematical Immutability",
                "Input Validation",
                "Dynamic Results",
                "Type-safe Logic",
                "Responsive Design",
            ],

            deliverables: [
                "Calculadora web publicada",
                "Motor de cálculo",
                "Algoritmos personalizados",
                "Validación de entradas",
                "Actualización instantánea de resultados",
                "Interfaz responsive",
                "Código fuente",
                "Documentación técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Resultados instantáneos",

                    description:
                        "Los cálculos se ejecutan directamente en el navegador permitiendo actualizar los resultados inmediatamente después de modificar los datos.",
                },

                {
                    title:
                        "Lógica personalizada",

                    description:
                        "Cada calculadora puede incorporar algoritmos específicos adaptados a las reglas matemáticas o comerciales del proyecto.",
                },

                {
                    title:
                        "Experiencia interactiva",

                    description:
                        "La actualización dinámica de los resultados permite una experiencia de uso rápida y fluida.",
                },

                {
                    title:
                        "Arquitectura type-safe",

                    description:
                        "TypeScript permite estructurar y validar la lógica de cálculo para reducir errores durante el desarrollo.",
                },
            ],

            process: [
                {
                    title:
                        "Definición de variables",

                    description:
                        "Identificamos las entradas, variables, constantes y reglas matemáticas necesarias para realizar cada cálculo.",
                },

                {
                    title:
                        "Construcción del algoritmo",

                    description:
                        "Implementamos la lógica de cálculo mediante scripts frontend estructurados y tipados.",
                },

                {
                    title:
                        "Desarrollo de interfaz",

                    description:
                        "Construimos la interfaz utilizando Next.js, TypeScript y Tailwind CSS.",
                },

                {
                    title:
                        "Actualización dinámica",

                    description:
                        "Configuramos el estado de la aplicación para recalcular y actualizar los resultados inmediatamente.",
                },

                {
                    title:
                        "Validación y pruebas",

                    description:
                        "Probamos diferentes combinaciones de valores y escenarios para validar la precisión de los resultados.",
                },
            ],

            faq: [
                {
                    question:
                        "¿Qué tipo de calculadoras pueden desarrollarse?",

                    answer:
                        "Se pueden desarrollar calculadoras financieras, comerciales, técnicas, matemáticas, de precios, estimaciones, conversiones y otros modelos personalizados.",
                },

                {
                    question:
                        "¿Los cálculos se realizan en tiempo real?",

                    answer:
                        "Sí. El motor de cálculo del lado del cliente permite actualizar los resultados inmediatamente cuando cambian los valores de entrada.",
                },

                {
                    question:
                        "¿Se pueden utilizar fórmulas personalizadas?",

                    answer:
                        "Sí. La lógica puede adaptarse a fórmulas, reglas matemáticas y condiciones específicas del proyecto.",
                },

                {
                    question:
                        "¿Necesita un backend?",

                    answer:
                        "No necesariamente. Las calculadoras pueden funcionar completamente del lado del cliente cuando la lógica no requiere procesamiento o almacenamiento en servidor.",
                },
            ],
        },

        // ═════════════════════════════════════
        // ENGLISH
        // ═════════════════════════════════════

        en: {
            name:
                "Calculators",

            title:
                "Custom Web Calculators",

            level:
                "🟡 Intermediate",

            category:
                "Advanced Utilities & Web Tools",

            description:
                "Custom web calculators built with client-side calculation engines to execute algorithms, update data instantly, and provide dynamic results through a responsive interface.",

            time:
                "2-4 weeks",

            imageAlt:
                "Custom web calculator with dynamic results and instant data updates",

            target:
                "Companies, professionals, and digital projects that need custom calculators for operations, estimations, conversions, pricing, or analysis directly in the browser.",

            support:
                "30 days post-delivery support",

            useCases: [
                "Financial calculators",
                "Business calculators",
                "Technical calculators",
                "Pricing calculators",
                "Estimation calculators",
                "Unit converters",
                "Mathematical tools",
                "Business utilities",
            ],

            includes: [
                "Custom web calculator",
                "Client-side calculation engine",
                "Custom algorithms",
                "Instant result updates",
                "Input validation",
                "State management",
                "Mathematical logic",
                "Responsive interface",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
            ],

            notIncludes: [
                "Complex backend",
                "Enterprise database",
                "Native mobile application",
                "Advanced authentication system",
                "Large-scale data processing",
                "Managed cloud infrastructure",
            ],

            features: [
                "Custom Calculations",
                "Client-side Calculation Engine",
                "Algorithmic Frontend Scripts",
                "Instant Data Updates",
                "Mathematical Immutability",
                "Input Validation",
                "Dynamic Results",
                "Type-safe Logic",
                "Responsive Design",
            ],

            deliverables: [
                "Published web calculator",
                "Calculation engine",
                "Custom algorithms",
                "Input validation",
                "Instant result updates",
                "Responsive interface",
                "Source code",
                "Technical documentation",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Instant Results",

                    description:
                        "Calculations run directly in the browser, allowing results to update immediately when input data changes.",
                },

                {
                    title:
                        "Custom Logic",

                    description:
                        "Each calculator can implement specific algorithms adapted to the project's mathematical or business rules.",
                },

                {
                    title:
                        "Interactive Experience",

                    description:
                        "Dynamic result updates provide a fast and fluid user experience.",
                },

                {
                    title:
                        "Type-safe Architecture",

                    description:
                        "TypeScript provides structured and validated calculation logic to reduce development errors.",
                },
            ],

            process: [
                {
                    title:
                        "Variable Definition",

                    description:
                        "We identify the inputs, variables, constants, and mathematical rules required for each calculation.",
                },

                {
                    title:
                        "Algorithm Construction",

                    description:
                        "We implement the calculation logic using structured and typed frontend scripts.",
                },

                {
                    title:
                        "Interface Development",

                    description:
                        "We build the interface using Next.js, TypeScript, and Tailwind CSS.",
                },

                {
                    title:
                        "Dynamic Updates",

                    description:
                        "We configure application state to recalculate and update results immediately.",
                },

                {
                    title:
                        "Validation and Testing",

                    description:
                        "We test different combinations of values and scenarios to validate calculation accuracy.",
                },
            ],

            faq: [
                {
                    question:
                        "What types of calculators can be developed?",

                    answer:
                        "Financial, business, technical, mathematical, pricing, estimation, conversion, and other custom calculators can be developed.",
                },

                {
                    question:
                        "Are calculations performed in real time?",

                    answer:
                        "Yes. The client-side calculation engine can update results immediately when input values change.",
                },

                {
                    question:
                        "Can custom formulas be used?",

                    answer:
                        "Yes. The logic can be adapted to project-specific formulas, mathematical rules, and conditions.",
                },

                {
                    question:
                        "Does it require a backend?",

                    answer:
                        "Not necessarily. Calculators can operate entirely on the client side when server-side processing or storage is not required.",
                },
            ],
        },

        // ═════════════════════════════════════
        // PORTUGUÊS
        // ═════════════════════════════════════

        pt: {
            name:
                "Calculadoras",

            title:
                "Calculadoras Web Personalizadas",

            level:
                "🟡 Intermediário",

            category:
                "Utilidades Avançadas e Ferramentas Web",

            description:
                "Calculadoras web personalizadas desenvolvidas com mecanismos de cálculo no lado do cliente para executar algoritmos, atualizar dados instantaneamente e apresentar resultados dinâmicos em uma interface responsiva.",

            time:
                "2-4 semanas",

            imageAlt:
                "Calculadora web personalizada com resultados dinâmicos e atualização instantânea de dados",

            target:
                "Empresas, profissionais e projetos digitais que precisam implementar calculadoras personalizadas para operações, estimativas, conversões, preços ou análises diretamente no navegador.",

            support:
                "30 dias de suporte pós-entrega",

            useCases: [
                "Calculadoras financeiras",
                "Calculadoras comerciais",
                "Calculadoras técnicas",
                "Calculadoras de preços",
                "Calculadoras de estimativas",
                "Conversores de unidades",
                "Ferramentas matemáticas",
                "Ferramentas empresariais",
            ],

            includes: [
                "Calculadora web personalizada",
                "Motor de cálculo client-side",
                "Algoritmos personalizados",
                "Atualização instantânea de resultados",
                "Validação de entradas",
                "Gerenciamento de estado",
                "Lógica matemática",
                "Interface responsiva",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
            ],

            notIncludes: [
                "Backend complexo",
                "Banco de dados empresarial",
                "Aplicação móvel nativa",
                "Sistema avançado de autenticação",
                "Processamento massivo de dados",
                "Infraestrutura cloud gerenciada",
            ],

            features: [
                "Custom Calculations",
                "Client-side Calculation Engine",
                "Algorithmic Frontend Scripts",
                "Instant Data Updates",
                "Mathematical Immutability",
                "Input Validation",
                "Dynamic Results",
                "Type-safe Logic",
                "Responsive Design",
            ],

            deliverables: [
                "Calculadora web publicada",
                "Motor de cálculo",
                "Algoritmos personalizados",
                "Validação de entradas",
                "Atualização instantânea de resultados",
                "Interface responsiva",
                "Código-fonte",
                "Documentação técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Resultados instantâneos",

                    description:
                        "Os cálculos são executados diretamente no navegador, permitindo atualizar os resultados imediatamente quando os dados de entrada são modificados.",
                },

                {
                    title:
                        "Lógica personalizada",

                    description:
                        "Cada calculadora pode incorporar algoritmos específicos adaptados às regras matemáticas ou comerciais do projeto.",
                },

                {
                    title:
                        "Experiência interativa",

                    description:
                        "A atualização dinâmica dos resultados proporciona uma experiência rápida e fluida.",
                },

                {
                    title:
                        "Arquitetura type-safe",

                    description:
                        "O TypeScript permite estruturar e validar a lógica de cálculo para reduzir erros durante o desenvolvimento.",
                },
            ],

            process: [
                {
                    title:
                        "Definição das variáveis",

                    description:
                        "Identificamos as entradas, variáveis, constantes e regras matemáticas necessárias para cada cálculo.",
                },

                {
                    title:
                        "Construção do algoritmo",

                    description:
                        "Implementamos a lógica de cálculo utilizando scripts frontend estruturados e tipados.",
                },

                {
                    title:
                        "Desenvolvimento da interface",

                    description:
                        "Construímos a interface utilizando Next.js, TypeScript e Tailwind CSS.",
                },

                {
                    title:
                        "Atualização dinâmica",

                    description:
                        "Configuramos o estado da aplicação para recalcular e atualizar os resultados imediatamente.",
                },

                {
                    title:
                        "Validação e testes",

                    description:
                        "Testamos diferentes combinações de valores e cenários para validar a precisão dos cálculos.",
                },
            ],

            faq: [
                {
                    question:
                        "Que tipos de calculadoras podem ser desenvolvidos?",

                    answer:
                        "Podem ser desenvolvidas calculadoras financeiras, comerciais, técnicas, matemáticas, de preços, estimativas, conversões e outros modelos personalizados.",
                },

                {
                    question:
                        "Os cálculos são realizados em tempo real?",

                    answer:
                        "Sim. O mecanismo de cálculo no lado do cliente permite atualizar os resultados imediatamente quando os valores de entrada são alterados.",
                },

                {
                    question:
                        "É possível utilizar fórmulas personalizadas?",

                    answer:
                        "Sim. A lógica pode ser adaptada às fórmulas, regras matemáticas e condições específicas do projeto.",
                },

                {
                    question:
                        "É necessário um backend?",

                    answer:
                        "Não necessariamente. As calculadoras podem funcionar totalmente no lado do cliente quando não há necessidade de processamento ou armazenamento no servidor.",
                },
            ],
        },
    },
};