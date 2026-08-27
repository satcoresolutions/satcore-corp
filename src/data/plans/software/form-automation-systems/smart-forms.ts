import type { ServicePlan } from "@/types/plan.types";

export const smartForms: ServicePlan = {
    core: {
        // ────────────────────────────────────
        // Identidad
        // ────────────────────────────────────

        id: "FORM-001",

        slug: "smart-forms",

        // ────────────────────────────────────
        // Comercial
        // ────────────────────────────────────

        complexity: "⭐⭐⭐ (3/5)",

        price: "$450 - $750 USD",

        pricingType: "fixed",

        automationLevel: "high",

        // ────────────────────────────────────
        // Técnico
        // ────────────────────────────────────

        stack: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Zod",
            "Server Actions",
        ],

        technologies: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Zod",
            "Server Actions",
            "Dynamic Forms",
            "Conditional Logic",
            "Validation Pipelines",
            "Reusable Field Components",
            "Secure Submissions",
            "Server-side Validation",
            "Type-safe Components",
        ],

        integrations: [
            "Email Services",
            "REST APIs",
            "Database Services",
            "Notification Services",
        ],

        // ────────────────────────────────────
        // Multimedia
        // ────────────────────────────────────

        heroImage:
            "/images/services/software/hero/hero-smart-forms.png",

        image:
            "/images/services/software/hero/hero-smart-forms.png",
    },

    translations: {
        // ═════════════════════════════════════
        // ESPAÑOL
        // ═════════════════════════════════════

        es: {
            name: "Formularios Inteligentes",

            title: "Sistema de Formularios Inteligentes",

            level: "🟡 Intermedio",

            category: "Sistemas de Automatización de Formularios",

            description:
                "Sistema de formularios dinámicos con reglas de validación configurables, componentes reutilizables, lógica condicional y procesamiento seguro de envíos mediante Server Actions.",

            time: "3-5 semanas",

            imageAlt:
                "Sistema de formularios inteligentes con validación dinámica y lógica condicional",

            target:
                "Empresas, profesionales y organizaciones que necesitan crear formularios digitales seguros, dinámicos y adaptables a diferentes procesos de captura de información.",

            support:
                "30 días soporte post-entrega",

            useCases: [
                "Formularios de contacto",
                "Registro de usuarios",
                "Solicitudes de información",
                "Formularios empresariales",
                "Captura de datos",
                "Procesos internos",
                "Formularios dinámicos",
                "Solicitudes de servicios",
            ],

            includes: [
                "Sistema de formularios",
                "Campos reutilizables",
                "Validación dinámica",
                "Reglas condicionales",
                "Validación con Zod",
                "Procesamiento mediante Server Actions",
                "Manejo seguro de envíos",
                "Mensajes de validación",
                "Estados de formulario",
                "Diseño responsive",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
            ],

            notIncludes: [
                "Constructor visual empresarial completo",
                "Automatizaciones externas avanzadas",
                "CRM empresarial",
                "Aplicación móvil nativa",
                "Procesamiento de pagos",
                "Sistema avanzado de analítica",
            ],

            features: [
                "Dynamic Form Fields",
                "Conditional Logic",
                "Validation Rules",
                "Zod Validation",
                "Reusable Components",
                "Server Actions",
                "Secure Submission Handling",
                "Form State Management",
                "Error Handling",
                "Responsive Design",
            ],

            deliverables: [
                "Sistema de formularios publicado",
                "Componentes de campos reutilizables",
                "Reglas de validación",
                "Lógica condicional",
                "Procesamiento seguro de formularios",
                "Mensajes de validación",
                "Gestión de estados",
                "Código fuente",
                "Documentación técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Formularios adaptables",

                    description:
                        "Permite construir formularios que modifican sus campos y comportamiento de acuerdo con las respuestas del usuario.",
                },

                {
                    title: "Validación confiable",

                    description:
                        "Zod permite establecer reglas de validación consistentes tanto para la estructura como para los datos enviados.",
                },

                {
                    title: "Componentes reutilizables",

                    description:
                        "Los campos reutilizables permiten mantener una arquitectura consistente y acelerar la creación de nuevos formularios.",
                },

                {
                    title: "Envíos seguros",

                    description:
                        "Server Actions permiten procesar las solicitudes en el servidor y reducir la exposición innecesaria de lógica sensible.",
                },
            ],

            process: [
                {
                    title: "Diseño del formulario",

                    description:
                        "Definimos los campos, estructuras, reglas y comportamiento esperado del formulario.",
                },

                {
                    title: "Construcción de componentes",

                    description:
                        "Creamos componentes reutilizables para campos, controles, mensajes y estados de formulario.",
                },

                {
                    title: "Validación y lógica",

                    description:
                        "Implementamos esquemas Zod y reglas condicionales para controlar los datos introducidos por los usuarios.",
                },

                {
                    title: "Procesamiento seguro",

                    description:
                        "Configuramos Server Actions para procesar y validar los envíos en el servidor.",
                },

                {
                    title: "Pruebas y lanzamiento",

                    description:
                        "Validamos formularios, errores, reglas condicionales, estados y diferentes escenarios de envío.",
                },
            ],

            faq: [
                {
                    question: "¿Qué son los Smart Forms?",

                    answer:
                        "Son formularios digitales que pueden modificar dinámicamente sus campos, reglas y comportamiento según la información proporcionada por el usuario.",
                },

                {
                    question: "¿Incluyen validación con Zod?",

                    answer:
                        "Sí. Zod se utiliza para definir y ejecutar esquemas de validación de los datos recibidos.",
                },

                {
                    question: "¿Pueden mostrar campos condicionales?",

                    answer:
                        "Sí. El sistema puede mostrar u ocultar campos dependiendo de las respuestas proporcionadas previamente.",
                },

                {
                    question: "¿Cómo se procesan los envíos?",

                    answer:
                        "Los formularios pueden utilizar Server Actions para procesar las solicitudes de forma controlada desde el servidor.",
                },
            ],
        },

        // ═════════════════════════════════════
        // ENGLISH
        // ═════════════════════════════════════

        en: {
            name: "Smart Forms",

            title: "Smart Form Automation System",

            level: "🟡 Intermediate",

            category: "Form Automation Systems",

            description:
                "Dynamic form system with configurable validation rules, reusable field components, conditional logic, and secure submission processing through Server Actions.",

            time: "3-5 weeks",

            imageAlt:
                "Smart form system with dynamic validation and conditional logic",

            target:
                "Businesses, professionals, and organizations that need secure, dynamic, and adaptable digital forms for different information collection processes.",

            support:
                "30 days post-delivery support",

            useCases: [
                "Contact forms",
                "User registration",
                "Information requests",
                "Business forms",
                "Data collection",
                "Internal processes",
                "Dynamic forms",
                "Service requests",
            ],

            includes: [
                "Form system",
                "Reusable fields",
                "Dynamic validation",
                "Conditional rules",
                "Zod validation",
                "Server Actions",
                "Secure submission handling",
                "Validation messages",
                "Form states",
                "Responsive design",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
            ],

            notIncludes: [
                "Complete enterprise visual form builder",
                "Advanced external automations",
                "Enterprise CRM",
                "Native mobile application",
                "Payment processing",
                "Advanced analytics system",
            ],

            features: [
                "Dynamic Form Fields",
                "Conditional Logic",
                "Validation Rules",
                "Zod Validation",
                "Reusable Components",
                "Server Actions",
                "Secure Submission Handling",
                "Form State Management",
                "Error Handling",
                "Responsive Design",
            ],

            deliverables: [
                "Published form system",
                "Reusable field components",
                "Validation rules",
                "Conditional logic",
                "Secure form processing",
                "Validation messages",
                "State management",
                "Source code",
                "Technical documentation",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Adaptive Forms",

                    description:
                        "Allows forms to dynamically modify their fields and behavior according to user responses.",
                },

                {
                    title: "Reliable Validation",

                    description:
                        "Zod provides consistent validation rules for the structure and data submitted by users.",
                },

                {
                    title: "Reusable Components",

                    description:
                        "Reusable fields provide a consistent architecture and accelerate the creation of new forms.",
                },

                {
                    title: "Secure Submissions",

                    description:
                        "Server Actions allow form requests to be processed on the server while reducing unnecessary exposure of sensitive logic.",
                },
            ],

            process: [
                {
                    title: "Form Design",

                    description:
                        "We define fields, structures, rules, and expected form behavior.",
                },

                {
                    title: "Component Development",

                    description:
                        "We create reusable components for fields, controls, messages, and form states.",
                },

                {
                    title: "Validation and Logic",

                    description:
                        "We implement Zod schemas and conditional rules to control submitted data.",
                },

                {
                    title: "Secure Processing",

                    description:
                        "We configure Server Actions to process and validate submissions on the server.",
                },

                {
                    title: "Testing and Launch",

                    description:
                        "We validate forms, errors, conditional rules, states, and different submission scenarios.",
                },
            ],

            faq: [
                {
                    question: "What are Smart Forms?",

                    answer:
                        "They are digital forms that can dynamically modify their fields, rules, and behavior according to the information provided by the user.",
                },

                {
                    question: "Does it include Zod validation?",

                    answer:
                        "Yes. Zod is used to define and execute validation schemas for submitted data.",
                },

                {
                    question: "Can it display conditional fields?",

                    answer:
                        "Yes. The system can display or hide fields depending on previously provided answers.",
                },

                {
                    question: "How are submissions processed?",

                    answer:
                        "Forms can use Server Actions to process requests in a controlled server-side environment.",
                },
            ],
        },

        // ═════════════════════════════════════
        // PORTUGUÊS
        // ═════════════════════════════════════

        pt: {
            name: "Formulários Inteligentes",

            title: "Sistema de Formulários Inteligentes",

            level: "🟡 Intermediário",

            category: "Sistemas de Automação de Formulários",

            description:
                "Sistema de formulários dinâmicos com regras de validação configuráveis, componentes reutilizáveis, lógica condicional e processamento seguro de envios através de Server Actions.",

            time: "3-5 semanas",

            imageAlt:
                "Sistema de formulários inteligentes com validação dinâmica e lógica condicional",

            target:
                "Empresas, profissionais e organizações que precisam criar formulários digitais seguros, dinâmicos e adaptáveis para diferentes processos de coleta de informações.",

            support:
                "30 dias de suporte pós-entrega",

            useCases: [
                "Formulários de contato",
                "Cadastro de usuários",
                "Solicitações de informações",
                "Formulários empresariais",
                "Coleta de dados",
                "Processos internos",
                "Formulários dinâmicos",
                "Solicitações de serviços",
            ],

            includes: [
                "Sistema de formulários",
                "Campos reutilizáveis",
                "Validação dinâmica",
                "Regras condicionais",
                "Validação com Zod",
                "Server Actions",
                "Processamento seguro de envios",
                "Mensagens de validação",
                "Estados do formulário",
                "Design responsivo",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
            ],

            notIncludes: [
                "Construtor visual empresarial completo",
                "Automações externas avançadas",
                "CRM empresarial",
                "Aplicativo móvel nativo",
                "Processamento de pagamentos",
                "Sistema avançado de análise",
            ],

            features: [
                "Dynamic Form Fields",
                "Conditional Logic",
                "Validation Rules",
                "Zod Validation",
                "Reusable Components",
                "Server Actions",
                "Secure Submission Handling",
                "Form State Management",
                "Error Handling",
                "Responsive Design",
            ],

            deliverables: [
                "Sistema de formulários publicado",
                "Componentes de campos reutilizáveis",
                "Regras de validação",
                "Lógica condicional",
                "Processamento seguro de formulários",
                "Mensagens de validação",
                "Gerenciamento de estados",
                "Código-fonte",
                "Documentação técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Formulários adaptáveis",

                    description:
                        "Permite construir formulários que modificam dinamicamente seus campos e comportamento de acordo com as respostas do usuário.",
                },

                {
                    title: "Validação confiável",

                    description:
                        "O Zod permite estabelecer regras de validação consistentes para a estrutura e os dados enviados.",
                },

                {
                    title: "Componentes reutilizáveis",

                    description:
                        "Os campos reutilizáveis mantêm uma arquitetura consistente e aceleram a criação de novos formulários.",
                },

                {
                    title: "Envios seguros",

                    description:
                        "Server Actions permitem processar as solicitações no servidor e reduzir a exposição desnecessária de lógica sensível.",
                },
            ],

            process: [
                {
                    title: "Design do formulário",

                    description:
                        "Definimos campos, estruturas, regras e comportamento esperado do formulário.",
                },

                {
                    title: "Construção de componentes",

                    description:
                        "Criamos componentes reutilizáveis para campos, controles, mensagens e estados do formulário.",
                },

                {
                    title: "Validação e lógica",

                    description:
                        "Implementamos esquemas Zod e regras condicionais para controlar os dados enviados.",
                },

                {
                    title: "Processamento seguro",

                    description:
                        "Configuramos Server Actions para processar e validar os envios no servidor.",
                },

                {
                    title: "Testes e lançamento",

                    description:
                        "Validamos formulários, erros, regras condicionais, estados e diferentes cenários de envio.",
                },
            ],

            faq: [
                {
                    question: "O que são Smart Forms?",

                    answer:
                        "São formulários digitais que podem modificar dinamicamente seus campos, regras e comportamento de acordo com as informações fornecidas pelo usuário.",
                },

                {
                    question: "Inclui validação com Zod?",

                    answer:
                        "Sim. O Zod é utilizado para definir e executar esquemas de validação dos dados recebidos.",
                },

                {
                    question: "Pode exibir campos condicionais?",

                    answer:
                        "Sim. O sistema pode mostrar ou ocultar campos dependendo das respostas fornecidas anteriormente.",
                },

                {
                    question: "Como os envios são processados?",

                    answer:
                        "Os formulários podem utilizar Server Actions para processar as solicitações de forma controlada no servidor.",
                },
            ],
        },
    },
};