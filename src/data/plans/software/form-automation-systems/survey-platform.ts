import type { ServicePlan } from "@/types/plan.types";

export const surveyPlatform: ServicePlan = {
    core: {
        id: "FORM-002",

        slug: "survey-platform",

        complexity: "⭐⭐⭐⭐ (4/5)",

        price: "$750 - $1,250 USD",

        pricingType: "fixed",

        automationLevel: "high",

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
            "Multi-step Surveys",
            "Conditional Questions",
            "Response Management",
            "Response Analytics",
            "Survey Logic",
            "Validation Pipelines",
            "Progress Tracking",
            "Type-safe Components",
        ],

        integrations: [
            "Email Services",
            "Database Services",
            "Analytics Services",
            "REST APIs",
            "Notification Services",
        ],

        heroImage:
            "/images/services/software/hero/hero-survey-platform.png",

        image:
            "/images/services/software/hero/hero-survey-platform.png",
    },

    translations: {
        es: {
            name: "Plataforma de Encuestas",

            title: "Plataforma de Encuestas Dinámicas",

            level: "🟠 Avanzado",

            category: "Sistemas de Automatización de Formularios",

            description:
                "Plataforma de encuestas con formularios multi-paso, preguntas condicionales, validación dinámica, seguimiento del progreso y dashboard de análisis de respuestas.",

            time: "5-7 semanas",

            imageAlt:
                "Plataforma de encuestas con preguntas condicionales y dashboard de respuestas",

            target:
                "Empresas, investigadores, instituciones y organizaciones que necesitan recopilar información mediante encuestas estructuradas y analizar las respuestas obtenidas.",

            support:
                "45 días soporte post-entrega",

            useCases: [
                "Encuestas de satisfacción",
                "Investigación de mercado",
                "Evaluaciones",
                "Encuestas internas",
                "Investigación académica",
                "Recopilación de opiniones",
                "Estudios de usuarios",
                "Formularios de evaluación",
            ],

            includes: [
                "Sistema de encuestas",
                "Encuestas multi-paso",
                "Preguntas condicionales",
                "Lógica de encuesta",
                "Validación con Zod",
                "Seguimiento de progreso",
                "Gestión de respuestas",
                "Dashboard de respuestas",
                "Métricas básicas",
                "Filtros de respuestas",
                "Diseño responsive",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
            ],

            notIncludes: [
                "Analítica estadística avanzada",
                "Machine Learning",
                "Panel empresarial de BI",
                "Aplicación móvil nativa",
                "Integraciones empresariales ilimitadas",
                "Sistema completo de CRM",
            ],

            features: [
                "Multi-step Surveys",
                "Conditional Questions",
                "Survey Logic",
                "Response Collection",
                "Response Analytics",
                "Progress Tracking",
                "Dynamic Validation",
                "Response Filtering",
                "Survey Management",
                "Responsive Design",
            ],

            deliverables: [
                "Plataforma de encuestas publicada",
                "Constructor de encuestas",
                "Flujos multi-paso",
                "Preguntas condicionales",
                "Sistema de respuestas",
                "Dashboard de análisis",
                "Métricas de respuestas",
                "Filtros de información",
                "Código fuente",
                "Documentación técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Encuestas dinámicas",

                    description:
                        "Permite crear recorridos de encuesta que se adaptan según las respuestas proporcionadas por cada participante.",
                },

                {
                    title: "Mejor experiencia de respuesta",

                    description:
                        "Los formularios multi-paso permiten dividir encuestas extensas en secciones más fáciles de completar.",
                },

                {
                    title: "Análisis centralizado",

                    description:
                        "El dashboard permite consultar las respuestas y visualizar métricas básicas desde un único lugar.",
                },

                {
                    title: "Información estructurada",

                    description:
                        "La validación y estructura de las preguntas ayuda a mantener respuestas consistentes y utilizables.",
                },
            ],

            process: [
                {
                    title: "Diseño de la encuesta",

                    description:
                        "Definimos preguntas, secciones, opciones de respuesta y objetivos de recopilación de información.",
                },

                {
                    title: "Construcción multi-paso",

                    description:
                        "Implementamos el flujo de navegación entre secciones y el seguimiento del progreso.",
                },

                {
                    title: "Lógica condicional",

                    description:
                        "Configuramos preguntas dinámicas que aparecen según las respuestas anteriores.",
                },

                {
                    title: "Dashboard de respuestas",

                    description:
                        "Construimos estructuras para consultar respuestas, métricas y filtros de información.",
                },

                {
                    title: "Validación y lanzamiento",

                    description:
                        "Probamos diferentes recorridos, validaciones, respuestas y escenarios antes de publicar la plataforma.",
                },
            ],

            faq: [
                {
                    question: "¿Qué es una Survey Platform?",

                    answer:
                        "Es una plataforma diseñada para crear encuestas digitales, recopilar respuestas y analizar la información obtenida.",
                },

                {
                    question: "¿Puede manejar encuestas multi-paso?",

                    answer:
                        "Sí. Las encuestas pueden dividirse en diferentes pasos o secciones para facilitar la experiencia del participante.",
                },

                {
                    question: "¿Puede mostrar preguntas según respuestas anteriores?",

                    answer:
                        "Sí. La plataforma contempla lógica condicional para adaptar las preguntas según las respuestas proporcionadas.",
                },

                {
                    question: "¿Incluye análisis de respuestas?",

                    answer:
                        "Sí. Incluye un dashboard para consultar respuestas y métricas básicas relacionadas con la encuesta.",
                },
            ],
        },

        en: {
            name: "Survey Platform",

            title: "Dynamic Survey Platform",

            level: "🟠 Advanced",

            category: "Form Automation Systems",

            description:
                "Survey platform with multi-step surveys, conditional questions, dynamic validation, progress tracking, and response analytics dashboard.",

            time: "5-7 weeks",

            imageAlt:
                "Survey platform with conditional questions and response analytics dashboard",

            target:
                "Businesses, researchers, institutions, and organizations that need to collect structured information through surveys and analyze the resulting responses.",

            support:
                "45 days post-delivery support",

            useCases: [
                "Customer satisfaction surveys",
                "Market research",
                "Assessments",
                "Internal surveys",
                "Academic research",
                "Opinion collection",
                "User studies",
                "Evaluation forms",
            ],

            includes: [
                "Survey system",
                "Multi-step surveys",
                "Conditional questions",
                "Survey logic",
                "Zod validation",
                "Progress tracking",
                "Response management",
                "Response dashboard",
                "Basic metrics",
                "Response filtering",
                "Responsive design",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
            ],

            notIncludes: [
                "Advanced statistical analytics",
                "Machine Learning",
                "Enterprise BI dashboard",
                "Native mobile application",
                "Unlimited enterprise integrations",
                "Complete CRM system",
            ],

            features: [
                "Multi-step Surveys",
                "Conditional Questions",
                "Survey Logic",
                "Response Collection",
                "Response Analytics",
                "Progress Tracking",
                "Dynamic Validation",
                "Response Filtering",
                "Survey Management",
                "Responsive Design",
            ],

            deliverables: [
                "Published survey platform",
                "Survey builder",
                "Multi-step workflows",
                "Conditional questions",
                "Response system",
                "Analytics dashboard",
                "Response metrics",
                "Information filters",
                "Source code",
                "Technical documentation",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Dynamic Surveys",

                    description:
                        "Allows survey flows to adapt according to each participant's responses.",
                },

                {
                    title: "Better Response Experience",

                    description:
                        "Multi-step forms divide longer surveys into smaller and easier sections.",
                },

                {
                    title: "Centralized Analysis",

                    description:
                        "The dashboard allows responses and basic metrics to be reviewed from a single location.",
                },

                {
                    title: "Structured Information",

                    description:
                        "Validation and structured questions help maintain consistent and usable responses.",
                },
            ],

            process: [
                {
                    title: "Survey Design",

                    description:
                        "We define questions, sections, response options, and information collection objectives.",
                },

                {
                    title: "Multi-step Construction",

                    description:
                        "We implement navigation between sections and progress tracking.",
                },

                {
                    title: "Conditional Logic",

                    description:
                        "We configure dynamic questions that appear according to previous responses.",
                },

                {
                    title: "Response Dashboard",

                    description:
                        "We build structures for reviewing responses, metrics, and information filters.",
                },

                {
                    title: "Validation and Launch",

                    description:
                        "We test different flows, validations, responses, and scenarios before publishing the platform.",
                },
            ],

            faq: [
                {
                    question: "What is a Survey Platform?",

                    answer:
                        "It is a platform designed to create digital surveys, collect responses, and analyze the resulting information.",
                },

                {
                    question: "Can it handle multi-step surveys?",

                    answer:
                        "Yes. Surveys can be divided into multiple steps or sections to improve the participant experience.",
                },

                {
                    question: "Can questions depend on previous answers?",

                    answer:
                        "Yes. The platform supports conditional logic to adapt questions according to previous responses.",
                },

                {
                    question: "Does it include response analytics?",

                    answer:
                        "Yes. It includes a dashboard for reviewing responses and basic survey metrics.",
                },
            ],
        },

        pt: {
            name: "Plataforma de Pesquisas",

            title: "Plataforma de Pesquisas Dinâmicas",

            level: "🟠 Avançado",

            category: "Sistemas de Automação de Formulários",

            description:
                "Plataforma de pesquisas com formulários em várias etapas, perguntas condicionais, validação dinâmica, acompanhamento de progresso e dashboard de análise de respostas.",

            time: "5-7 semanas",

            imageAlt:
                "Plataforma de pesquisas com perguntas condicionais e dashboard de respostas",

            target:
                "Empresas, pesquisadores, instituições e organizações que precisam coletar informações estruturadas por meio de pesquisas e analisar as respostas obtidas.",

            support:
                "45 dias de suporte pós-entrega",

            useCases: [
                "Pesquisas de satisfação",
                "Pesquisa de mercado",
                "Avaliações",
                "Pesquisas internas",
                "Pesquisa acadêmica",
                "Coleta de opiniões",
                "Estudos de usuários",
                "Formulários de avaliação",
            ],

            includes: [
                "Sistema de pesquisas",
                "Pesquisas em várias etapas",
                "Perguntas condicionais",
                "Lógica de pesquisa",
                "Validação com Zod",
                "Acompanhamento de progresso",
                "Gerenciamento de respostas",
                "Dashboard de respostas",
                "Métricas básicas",
                "Filtros de respostas",
                "Design responsivo",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
            ],

            notIncludes: [
                "Análise estatística avançada",
                "Machine Learning",
                "Dashboard empresarial de BI",
                "Aplicativo móvel nativo",
                "Integrações empresariais ilimitadas",
                "Sistema CRM completo",
            ],

            features: [
                "Multi-step Surveys",
                "Conditional Questions",
                "Survey Logic",
                "Response Collection",
                "Response Analytics",
                "Progress Tracking",
                "Dynamic Validation",
                "Response Filtering",
                "Survey Management",
                "Responsive Design",
            ],

            deliverables: [
                "Plataforma de pesquisas publicada",
                "Construtor de pesquisas",
                "Fluxos em várias etapas",
                "Perguntas condicionais",
                "Sistema de respostas",
                "Dashboard de análise",
                "Métricas de respostas",
                "Filtros de informações",
                "Código-fonte",
                "Documentação técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Pesquisas dinâmicas",

                    description:
                        "Permite criar fluxos de pesquisa que se adaptam de acordo com as respostas fornecidas por cada participante.",
                },

                {
                    title: "Melhor experiência de resposta",

                    description:
                        "Os formulários em várias etapas permitem dividir pesquisas extensas em seções mais fáceis de preencher.",
                },

                {
                    title: "Análise centralizada",

                    description:
                        "O dashboard permite consultar respostas e métricas básicas a partir de um único local.",
                },

                {
                    title: "Informações estruturadas",

                    description:
                        "A validação e a estrutura das perguntas ajudam a manter respostas consistentes e utilizáveis.",
                },
            ],

            process: [
                {
                    title: "Design da pesquisa",

                    description:
                        "Definimos perguntas, seções, opções de resposta e objetivos de coleta de informações.",
                },

                {
                    title: "Construção em várias etapas",

                    description:
                        "Implementamos a navegação entre seções e o acompanhamento do progresso.",
                },

                {
                    title: "Lógica condicional",

                    description:
                        "Configuramos perguntas dinâmicas que aparecem de acordo com as respostas anteriores.",
                },

                {
                    title: "Dashboard de respostas",

                    description:
                        "Construímos estruturas para consultar respostas, métricas e filtros de informações.",
                },

                {
                    title: "Validação e lançamento",

                    description:
                        "Testamos diferentes fluxos, validações, respostas e cenários antes de publicar a plataforma.",
                },
            ],

            faq: [
                {
                    question: "O que é uma Survey Platform?",

                    answer:
                        "É uma plataforma desenvolvida para criar pesquisas digitais, coletar respostas e analisar as informações obtidas.",
                },

                {
                    question: "Pode trabalhar com pesquisas em várias etapas?",

                    answer:
                        "Sim. As pesquisas podem ser divididas em diferentes etapas ou seções para facilitar a experiência do participante.",
                },

                {
                    question: "Pode mostrar perguntas de acordo com respostas anteriores?",

                    answer:
                        "Sim. A plataforma contempla lógica condicional para adaptar as perguntas de acordo com as respostas fornecidas.",
                },

                {
                    question: "Inclui análise de respostas?",

                    answer:
                        "Sim. Inclui um dashboard para consultar respostas e métricas básicas relacionadas à pesquisa.",
                },
            ],
        },
    },
};