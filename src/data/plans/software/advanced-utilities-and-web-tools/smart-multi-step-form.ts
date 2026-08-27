import type {
    ServicePlan,
} from "@/types/plan.types";

export const smartMultiStepForm: ServicePlan = {
    core: {
        id: "APP-003",

        slug: "smart-multi-step-form",

        complexity: "⭐⭐⭐ (3/5)",

        price: "$250 - $450 USD",

        pricingType: "fixed",

        automationLevel: "high",

        stack: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Zod",
        ],

        technologies: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Zod",
            "Client-side State Management",
            "Dynamic Step Routing",
            "Schema Validation",
            "Session State Caching",
            "Conditional Logic",
            "Multi-step Forms",
            "Dynamic Form Fields",
            "Type-safe Validation",
            "Responsive UI",
        ],

        integrations: [
            "REST APIs",
            "Email Services",
            "Authentication Providers",
            "CRM APIs",
        ],

        heroImage:
            "/images/services/software/hero/hero-smart-multi-step-form.png",

        image:
            "/images/services/software/hero/hero-smart-multi-step-form.png",
    },

    translations: {
        es: {
            name:
                "Formulario Inteligente Multi-Step",

            title:
                "Formulario Inteligente Multi-Step",

            level:
                "🟡 Intermedio",

            category:
                "Utilidades Avanzadas y Herramientas Web",

            description:
                "Formulario web inteligente de múltiples pasos con lógica de navegación dinámica, validación mediante esquemas Zod y almacenamiento temporal del estado de sesión para crear experiencias de formulario adaptativas.",

            time:
                "2-4 semanas",

            imageAlt:
                "Formulario web inteligente de múltiples pasos con validación y navegación dinámica",

            target:
                "Empresas, organizaciones y proyectos digitales que necesitan formularios complejos capaces de mostrar diferentes pasos, campos y rutas dependiendo de las respuestas del usuario.",

            support:
                "30 días soporte post-entrega",

            useCases: [
                "Formularios de registro",
                "Formularios de admisión",
                "Encuestas inteligentes",
                "Formularios de cotización",
                "Procesos de solicitud",
                "Onboarding de usuarios",
                "Formularios condicionales",
                "Evaluaciones digitales",
            ],

            includes: [
                "Formulario multi-step",
                "Navegación dinámica",
                "Lógica condicional",
                "Rutas dinámicas",
                "Validación Zod",
                "Esquemas tipados",
                "Gestión de estado",
                "Cache de sesión",
                "Campos dinámicos",
                "Validación por paso",
                "Persistencia temporal del progreso",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
            ],

            notIncludes: [
                "Sistema completo de autenticación",
                "Backend empresarial complejo",
                "CRM completo",
                "Aplicación móvil nativa",
                "Sistema avanzado de analítica",
                "Infraestructura cloud administrada",
            ],

            features: [
                "Multi-step Forms",
                "Dynamic Branch Routing",
                "Conditional Logic",
                "Zod Schema Validation",
                "Step State Management",
                "Session State Caching",
                "Dynamic Form Fields",
                "Progress Persistence",
                "Type-safe Validation",
                "Responsive Design",
            ],

            deliverables: [
                "Formulario multi-step publicado",
                "Sistema de navegación dinámica",
                "Lógica condicional",
                "Esquemas Zod",
                "Validación por pasos",
                "Gestión de estado",
                "Cache de sesión",
                "Campos dinámicos",
                "Interfaz responsive",
                "Código fuente",
                "Documentación técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Flujos adaptativos",

                    description:
                        "El formulario puede modificar los pasos siguientes dependiendo de las respuestas proporcionadas por el usuario.",
                },

                {
                    title:
                        "Validación estructurada",

                    description:
                        "Los esquemas Zod permiten validar los datos de cada paso antes de permitir que el usuario continúe.",
                },

                {
                    title:
                        "Continuidad de sesión",

                    description:
                        "El estado temporal permite conservar el progreso del usuario durante el proceso multi-step.",
                },

                {
                    title:
                        "Experiencia simplificada",

                    description:
                        "Dividir procesos complejos en pasos facilita la interacción y reduce la cantidad de información presentada simultáneamente.",
                },
            ],

            process: [
                {
                    title:
                        "Diseño del flujo",

                    description:
                        "Definimos los pasos, campos, condiciones y rutas que forman parte del proceso.",
                },

                {
                    title:
                        "Definición de esquemas",

                    description:
                        "Creamos esquemas Zod para validar las entradas correspondientes a cada etapa del formulario.",
                },

                {
                    title:
                        "Implementación de rutas",

                    description:
                        "Construimos la lógica de navegación para determinar dinámicamente qué paso debe mostrarse según las respuestas.",
                },

                {
                    title:
                        "Gestión del estado",

                    description:
                        "Implementamos el almacenamiento temporal del progreso y el estado de los diferentes pasos.",
                },

                {
                    title:
                        "Validación y pruebas",

                    description:
                        "Probamos diferentes rutas, respuestas, errores de validación y escenarios de recuperación del estado.",
                },
            ],

            faq: [
                {
                    question:
                        "¿Qué es un formulario multi-step?",

                    answer:
                        "Es un formulario dividido en diferentes etapas para presentar información progresivamente y facilitar procesos que requieren múltiples datos.",
                },

                {
                    question:
                        "¿Puede cambiar los pasos según las respuestas?",

                    answer:
                        "Sí. La lógica de branching permite determinar dinámicamente qué pasos y campos deben mostrarse según las respuestas anteriores.",
                },

                {
                    question:
                        "¿Utiliza Zod para validar?",

                    answer:
                        "Sí. Zod permite definir esquemas de validación tipados para controlar los datos introducidos en cada etapa.",
                },

                {
                    question:
                        "¿Se conserva el progreso?",

                    answer:
                        "Sí. El estado de los pasos puede almacenarse temporalmente durante la sesión para permitir recuperar el progreso del formulario.",
                },
            ],
        },

        en: {
            name:
                "Smart Multi-step Form",

            title:
                "Smart Multi-step Form",

            level:
                "🟡 Intermediate",

            category:
                "Advanced Utilities & Web Tools",

            description:
                "Smart multi-step web form with dynamic navigation logic, Zod schema validation, and temporary session state caching for adaptive form experiences.",

            time:
                "2-4 weeks",

            imageAlt:
                "Smart multi-step web form with validation and dynamic navigation",

            target:
                "Companies, organizations, and digital projects that need complex forms capable of displaying different steps, fields, and routes depending on user responses.",

            support:
                "30 days post-delivery support",

            useCases: [
                "Registration forms",
                "Application forms",
                "Smart surveys",
                "Quotation forms",
                "Request processes",
                "User onboarding",
                "Conditional forms",
                "Digital assessments",
            ],

            includes: [
                "Multi-step form",
                "Dynamic navigation",
                "Conditional logic",
                "Dynamic routing",
                "Zod validation",
                "Typed schemas",
                "State management",
                "Session caching",
                "Dynamic fields",
                "Step validation",
                "Temporary progress persistence",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
            ],

            notIncludes: [
                "Complete authentication system",
                "Complex enterprise backend",
                "Complete CRM",
                "Native mobile application",
                "Advanced analytics system",
                "Managed cloud infrastructure",
            ],

            features: [
                "Multi-step Forms",
                "Dynamic Branch Routing",
                "Conditional Logic",
                "Zod Schema Validation",
                "Step State Management",
                "Session State Caching",
                "Dynamic Form Fields",
                "Progress Persistence",
                "Type-safe Validation",
                "Responsive Design",
            ],

            deliverables: [
                "Published multi-step form",
                "Dynamic navigation system",
                "Conditional logic",
                "Zod schemas",
                "Step validation",
                "State management",
                "Session cache",
                "Dynamic fields",
                "Responsive interface",
                "Source code",
                "Technical documentation",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Adaptive Flows",

                    description:
                        "The form can modify subsequent steps depending on the answers provided by the user.",
                },

                {
                    title:
                        "Structured Validation",

                    description:
                        "Zod schemas validate each step's data before allowing the user to continue.",
                },

                {
                    title:
                        "Session Continuity",

                    description:
                        "Temporary state storage preserves user progress throughout the multi-step process.",
                },

                {
                    title:
                        "Simplified Experience",

                    description:
                        "Breaking complex processes into multiple steps makes interaction easier and reduces the amount of information displayed at once.",
                },
            ],

            process: [
                {
                    title:
                        "Flow Design",

                    description:
                        "We define the steps, fields, conditions, and routes that make up the process.",
                },

                {
                    title:
                        "Schema Definition",

                    description:
                        "We create Zod schemas to validate inputs corresponding to each form stage.",
                },

                {
                    title:
                        "Route Implementation",

                    description:
                        "We build navigation logic to dynamically determine which step should be displayed based on previous answers.",
                },

                {
                    title:
                        "State Management",

                    description:
                        "We implement temporary storage for progress and state across the different form steps.",
                },

                {
                    title:
                        "Validation and Testing",

                    description:
                        "We test different routes, responses, validation errors, and state recovery scenarios.",
                },
            ],

            faq: [
                {
                    question:
                        "What is a multi-step form?",

                    answer:
                        "It is a form divided into different stages to progressively collect information and simplify processes requiring multiple data points.",
                },

                {
                    question:
                        "Can steps change based on responses?",

                    answer:
                        "Yes. Branching logic dynamically determines which steps and fields should be displayed based on previous responses.",
                },

                {
                    question:
                        "Does it use Zod for validation?",

                    answer:
                        "Yes. Zod allows typed validation schemas to be defined for controlling data entered at each stage.",
                },

                {
                    question:
                        "Is progress preserved?",

                    answer:
                        "Yes. Step state can be temporarily cached during the session so the user's form progress can be recovered.",
                },
            ],
        },

        pt: {
            name:
                "Formulário Inteligente Multi-step",

            title:
                "Formulário Inteligente Multi-step",

            level:
                "🟡 Intermediário",

            category:
                "Utilidades Avançadas e Ferramentas Web",

            description:
                "Formulário web inteligente de múltiplas etapas com lógica de navegação dinâmica, validação por esquemas Zod e armazenamento temporário do estado da sessão para criar experiências adaptativas.",

            time:
                "2-4 semanas",

            imageAlt:
                "Formulário web inteligente de múltiplas etapas com validação e navegação dinâmica",

            target:
                "Empresas, organizações e projetos digitais que precisam de formulários complexos capazes de apresentar diferentes etapas, campos e rotas dependendo das respostas do usuário.",

            support:
                "30 dias de suporte pós-entrega",

            useCases: [
                "Formulários de cadastro",
                "Formulários de admissão",
                "Pesquisas inteligentes",
                "Formulários de orçamento",
                "Processos de solicitação",
                "Onboarding de usuários",
                "Formulários condicionais",
                "Avaliações digitais",
            ],

            includes: [
                "Formulário multi-step",
                "Navegação dinâmica",
                "Lógica condicional",
                "Rotas dinâmicas",
                "Validação Zod",
                "Esquemas tipados",
                "Gerenciamento de estado",
                "Cache de sessão",
                "Campos dinâmicos",
                "Validação por etapa",
                "Persistência temporária do progresso",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
            ],

            notIncludes: [
                "Sistema completo de autenticação",
                "Backend empresarial complexo",
                "CRM completo",
                "Aplicação móvel nativa",
                "Sistema avançado de análise",
                "Infraestrutura cloud gerenciada",
            ],

            features: [
                "Multi-step Forms",
                "Dynamic Branch Routing",
                "Conditional Logic",
                "Zod Schema Validation",
                "Step State Management",
                "Session State Caching",
                "Dynamic Form Fields",
                "Progress Persistence",
                "Type-safe Validation",
                "Responsive Design",
            ],

            deliverables: [
                "Formulário multi-step publicado",
                "Sistema de navegação dinâmica",
                "Lógica condicional",
                "Esquemas Zod",
                "Validação por etapas",
                "Gerenciamento de estado",
                "Cache de sessão",
                "Campos dinâmicos",
                "Interface responsiva",
                "Código-fonte",
                "Documentação técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Fluxos adaptativos",

                    description:
                        "O formulário pode modificar as etapas seguintes de acordo com as respostas fornecidas pelo usuário.",
                },

                {
                    title:
                        "Validação estruturada",

                    description:
                        "Os esquemas Zod permitem validar os dados de cada etapa antes de permitir que o usuário continue.",
                },

                {
                    title:
                        "Continuidade da sessão",

                    description:
                        "O estado temporário permite preservar o progresso do usuário durante o processo multi-step.",
                },

                {
                    title:
                        "Experiência simplificada",

                    description:
                        "Dividir processos complexos em etapas facilita a interação e reduz a quantidade de informações apresentadas simultaneamente.",
                },
            ],

            process: [
                {
                    title:
                        "Definição do fluxo",

                    description:
                        "Definimos as etapas, campos, condições e rotas que fazem parte do processo.",
                },

                {
                    title:
                        "Definição dos esquemas",

                    description:
                        "Criamos esquemas Zod para validar as entradas correspondentes a cada etapa do formulário.",
                },

                {
                    title:
                        "Implementação das rotas",

                    description:
                        "Construímos a lógica de navegação para determinar dinamicamente qual etapa deve ser exibida de acordo com as respostas.",
                },

                {
                    title:
                        "Gerenciamento do estado",

                    description:
                        "Implementamos o armazenamento temporário do progresso e do estado das diferentes etapas.",
                },

                {
                    title:
                        "Validação e testes",

                    description:
                        "Testamos diferentes rotas, respostas, erros de validação e cenários de recuperação do estado.",
                },
            ],

            faq: [
                {
                    question:
                        "O que é um formulário multi-step?",

                    answer:
                        "É um formulário dividido em diferentes etapas para apresentar informações progressivamente e facilitar processos que exigem múltiplos dados.",
                },

                {
                    question:
                        "Pode alterar as etapas de acordo com as respostas?",

                    answer:
                        "Sim. A lógica de branching permite determinar dinamicamente quais etapas e campos devem ser apresentados de acordo com as respostas anteriores.",
                },

                {
                    question:
                        "Utiliza Zod para validação?",

                    answer:
                        "Sim. O Zod permite definir esquemas de validação tipados para controlar os dados inseridos em cada etapa.",
                },

                {
                    question:
                        "O progresso é preservado?",

                    answer:
                        "Sim. O estado das etapas pode ser armazenado temporariamente durante a sessão para permitir recuperar o progresso do formulário.",
                },
            ],
        },
    },
};