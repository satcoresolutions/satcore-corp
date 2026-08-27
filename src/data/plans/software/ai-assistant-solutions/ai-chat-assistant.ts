import type { ServicePlan } from "@/types/plan.types";

export const aiChatAssistant: ServicePlan = {
    core: {
        id: "AI-001",

        slug: "ai-chat-assistant",

        complexity: "⭐⭐⭐⭐ (4/5)",

        price: "$900 - $1,750 USD",

        pricingType: "fixed",

        automationLevel: "high",

        stack: [
            "Next.js",
            "TypeScript",
            "OpenAI APIs",
            "Vector Database",
        ],

        technologies: [
            "Next.js",
            "TypeScript",
            "OpenAI APIs",
            "Vector Database",
            "Streaming Responses",
            "Conversational AI",
            "Prompt Architecture",
            "Semantic Processing",
            "Chat Interface",
            "Context Management",
            "AI Workflows",
            "Type-safe Components",
        ],

        integrations: [
            "OpenAI APIs",
            "Vector Database",
            "Authentication Services",
            "External APIs",
        ],

        heroImage:
            "/images/services/software/hero/hero-ai-chat-assistant.png",

        image:
            "/images/services/software/hero/hero-ai-chat-assistant.png",
    },

    translations: {
        es: {
            name: "AI Chat Assistant",

            title: "Asistente Conversacional con IA",

            level: "🟠 Avanzado",

            category: "Soluciones de Asistentes de IA",

            description:
                "Asistente conversacional basado en inteligencia artificial con interfaz de chat, respuestas en streaming y una arquitectura reutilizable de prompts para construir experiencias inteligentes.",

            time: "5-7 semanas",

            imageAlt:
                "Asistente conversacional de inteligencia artificial con interfaz de chat y respuestas en tiempo real",

            target:
                "Empresas, profesionales y organizaciones que necesitan incorporar un asistente conversacional inteligente dentro de una plataforma web.",

            support:
                "45 días soporte post-entrega",

            useCases: [
                "Asistentes virtuales",
                "Atención automatizada",
                "Consultas inteligentes",
                "Soporte al usuario",
                "Asistentes empresariales",
                "Interfaces conversacionales",
                "Automatización de consultas",
                "Experiencias con IA",
            ],

            includes: [
                "Interfaz de chat con IA",
                "Integración con OpenAI APIs",
                "Respuestas en streaming",
                "Arquitectura de prompts",
                "Gestión de contexto",
                "Historial conversacional",
                "Manejo de mensajes",
                "Estados de generación",
                "Indicadores de respuesta",
                "Diseño responsive",
                "Next.js",
                "TypeScript",
                "Vector Database",
            ],

            notIncludes: [
                "Entrenamiento de modelos propios",
                "Sistema multiagente avanzado",
                "Procesamiento empresarial masivo de documentos",
                "Fine-tuning personalizado",
                "Infraestructura de IA empresarial completa",
                "Aplicaciones móviles nativas",
            ],

            features: [
                "Conversational Assistant",
                "Streaming Responses",
                "Reusable Prompt Architecture",
                "Context Management",
                "Chat Interface",
                "Conversation History",
                "AI Workflows",
                "OpenAI Integration",
                "Semantic Processing",
                "Responsive Design",
            ],

            deliverables: [
                "Asistente de IA publicado",
                "Interfaz conversacional",
                "Integración con OpenAI",
                "Streaming de respuestas",
                "Arquitectura de prompts",
                "Gestión de contexto",
                "Historial conversacional",
                "Código fuente",
                "Documentación técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Interacción conversacional",

                    description:
                        "Permite que los usuarios interactúen con un asistente de IA mediante una interfaz de conversación natural.",
                },

                {
                    title: "Respuestas en streaming",

                    description:
                        "Las respuestas pueden mostrarse progresivamente mientras el modelo genera el contenido.",
                },

                {
                    title: "Arquitectura reutilizable",

                    description:
                        "La estructura de prompts facilita adaptar el asistente a diferentes contextos, instrucciones y casos de uso.",
                },

                {
                    title: "Experiencia inteligente",

                    description:
                        "Integra capacidades de inteligencia artificial directamente dentro de una aplicación web moderna.",
                },
            ],

            process: [
                {
                    title: "Diseño conversacional",

                    description:
                        "Definimos el comportamiento del asistente, contexto, instrucciones y estructura de las conversaciones.",
                },

                {
                    title: "Integración de IA",

                    description:
                        "Integramos OpenAI APIs y construimos la arquitectura necesaria para gestionar las solicitudes.",
                },

                {
                    title: "Streaming y contexto",

                    description:
                        "Implementamos respuestas en streaming y mecanismos para conservar el contexto de la conversación.",
                },

                {
                    title: "Pruebas y optimización",

                    description:
                        "Validamos respuestas, prompts, estados de interfaz, errores y experiencia conversacional antes del lanzamiento.",
                },
            ],

            faq: [
                {
                    question: "¿Qué es un AI Chat Assistant?",

                    answer:
                        "Es un asistente conversacional basado en inteligencia artificial que permite interactuar con usuarios mediante una interfaz de chat.",
                },

                {
                    question: "¿Utiliza OpenAI?",

                    answer:
                        "Sí. La solución puede integrarse con OpenAI APIs para procesar las conversaciones y generar respuestas.",
                },

                {
                    question: "¿Las respuestas aparecen en tiempo real?",

                    answer:
                        "Sí. La interfaz puede utilizar streaming para mostrar progresivamente las respuestas generadas.",
                },

                {
                    question: "¿Se pueden personalizar los prompts?",

                    answer:
                        "Sí. La arquitectura permite definir y reutilizar instrucciones y estructuras de prompts según el caso de uso.",
                },
            ],
        },

        en: {
            name: "AI Chat Assistant",

            title: "AI Conversational Assistant",

            level: "🟠 Advanced",

            category: "AI Assistant Solutions",

            description:
                "AI-powered conversational assistant with chat interface, streaming responses, and reusable prompt architecture for building intelligent user experiences.",

            time: "5-7 weeks",

            imageAlt:
                "AI conversational assistant with chat interface and real-time responses",

            target:
                "Businesses, professionals, and organizations that need to integrate an intelligent conversational assistant into a web platform.",

            support:
                "45 days post-delivery support",

            useCases: [
                "Virtual assistants",
                "Automated support",
                "Intelligent queries",
                "User support",
                "Business assistants",
                "Conversational interfaces",
                "Query automation",
                "AI experiences",
            ],

            includes: [
                "AI chat interface",
                "OpenAI API integration",
                "Streaming responses",
                "Prompt architecture",
                "Context management",
                "Conversation history",
                "Message handling",
                "Generation states",
                "Response indicators",
                "Responsive design",
                "Next.js",
                "TypeScript",
                "Vector Database",
            ],

            notIncludes: [
                "Custom model training",
                "Advanced multi-agent system",
                "Large-scale enterprise document processing",
                "Custom fine-tuning",
                "Complete enterprise AI infrastructure",
                "Native mobile applications",
            ],

            features: [
                "Conversational Assistant",
                "Streaming Responses",
                "Reusable Prompt Architecture",
                "Context Management",
                "Chat Interface",
                "Conversation History",
                "AI Workflows",
                "OpenAI Integration",
                "Semantic Processing",
                "Responsive Design",
            ],

            deliverables: [
                "Published AI assistant",
                "Conversational interface",
                "OpenAI integration",
                "Response streaming",
                "Prompt architecture",
                "Context management",
                "Conversation history",
                "Source code",
                "Technical documentation",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Conversational Interaction",

                    description:
                        "Allows users to interact with an AI assistant through a natural conversational interface.",
                },

                {
                    title: "Streaming Responses",

                    description:
                        "Responses can be displayed progressively while the model generates the content.",
                },

                {
                    title: "Reusable Architecture",

                    description:
                        "The prompt structure makes it easier to adapt the assistant to different contexts, instructions, and use cases.",
                },

                {
                    title: "Intelligent Experience",

                    description:
                        "Integrates artificial intelligence capabilities directly into a modern web application.",
                },
            ],

            process: [
                {
                    title: "Conversational Design",

                    description:
                        "We define the assistant behavior, context, instructions, and conversation structure.",
                },

                {
                    title: "AI Integration",

                    description:
                        "We integrate OpenAI APIs and build the architecture required to process requests.",
                },

                {
                    title: "Streaming and Context",

                    description:
                        "We implement streaming responses and mechanisms for maintaining conversation context.",
                },

                {
                    title: "Testing and Optimization",

                    description:
                        "We validate responses, prompts, interface states, errors, and conversational experience before launch.",
                },
            ],

            faq: [
                {
                    question: "What is an AI Chat Assistant?",

                    answer:
                        "It is an AI-powered conversational assistant that allows users to interact through a chat interface.",
                },

                {
                    question: "Does it use OpenAI?",

                    answer:
                        "Yes. The solution can integrate with OpenAI APIs to process conversations and generate responses.",
                },

                {
                    question: "Are responses displayed in real time?",

                    answer:
                        "Yes. The interface can use streaming to progressively display generated responses.",
                },

                {
                    question: "Can prompts be customized?",

                    answer:
                        "Yes. The architecture allows instructions and prompt structures to be defined and reused according to the use case.",
                },
            ],
        },

        pt: {
            name: "AI Chat Assistant",

            title: "Assistente Conversacional com IA",

            level: "🟠 Avançado",

            category: "Soluções de Assistentes de IA",

            description:
                "Assistente conversacional baseado em inteligência artificial com interface de chat, respostas em streaming e arquitetura reutilizável de prompts para criar experiências inteligentes.",

            time: "5-7 semanas",

            imageAlt:
                "Assistente conversacional de inteligência artificial com interface de chat e respostas em tempo real",

            target:
                "Empresas, profissionais e organizações que precisam incorporar um assistente conversacional inteligente em uma plataforma web.",

            support:
                "45 dias de suporte pós-entrega",

            useCases: [
                "Assistentes virtuais",
                "Atendimento automatizado",
                "Consultas inteligentes",
                "Suporte ao usuário",
                "Assistentes empresariais",
                "Interfaces conversacionais",
                "Automação de consultas",
                "Experiências com IA",
            ],

            includes: [
                "Interface de chat com IA",
                "Integração com OpenAI APIs",
                "Respostas em streaming",
                "Arquitetura de prompts",
                "Gestão de contexto",
                "Histórico de conversas",
                "Gestão de mensagens",
                "Estados de geração",
                "Indicadores de resposta",
                "Design responsivo",
                "Next.js",
                "TypeScript",
                "Vector Database",
            ],

            notIncludes: [
                "Treinamento de modelos próprios",
                "Sistema multiagente avançado",
                "Processamento empresarial de grandes volumes de documentos",
                "Fine-tuning personalizado",
                "Infraestrutura empresarial completa de IA",
                "Aplicativos móveis nativos",
            ],

            features: [
                "Conversational Assistant",
                "Streaming Responses",
                "Reusable Prompt Architecture",
                "Context Management",
                "Chat Interface",
                "Conversation History",
                "AI Workflows",
                "OpenAI Integration",
                "Semantic Processing",
                "Responsive Design",
            ],

            deliverables: [
                "Assistente de IA publicado",
                "Interface conversacional",
                "Integração com OpenAI",
                "Streaming de respostas",
                "Arquitetura de prompts",
                "Gestão de contexto",
                "Histórico de conversas",
                "Código-fonte",
                "Documentação técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Interação conversacional",

                    description:
                        "Permite que os usuários interajam com um assistente de IA por meio de uma interface de conversação natural.",
                },

                {
                    title: "Respostas em streaming",

                    description:
                        "As respostas podem ser exibidas progressivamente enquanto o modelo gera o conteúdo.",
                },

                {
                    title: "Arquitetura reutilizável",

                    description:
                        "A estrutura de prompts facilita adaptar o assistente a diferentes contextos, instruções e casos de uso.",
                },

                {
                    title: "Experiência inteligente",

                    description:
                        "Integra recursos de inteligência artificial diretamente em uma aplicação web moderna.",
                },
            ],

            process: [
                {
                    title: "Design conversacional",

                    description:
                        "Definimos o comportamento do assistente, contexto, instruções e estrutura das conversas.",
                },

                {
                    title: "Integração de IA",

                    description:
                        "Integramos OpenAI APIs e construímos a arquitetura necessária para processar as solicitações.",
                },

                {
                    title: "Streaming e contexto",

                    description:
                        "Implementamos respostas em streaming e mecanismos para manter o contexto da conversa.",
                },

                {
                    title: "Testes e otimização",

                    description:
                        "Validamos respostas, prompts, estados da interface, erros e experiência conversacional antes do lançamento.",
                },
            ],

            faq: [
                {
                    question: "O que é um AI Chat Assistant?",

                    answer:
                        "É um assistente conversacional baseado em inteligência artificial que permite interagir com usuários por meio de uma interface de chat.",
                },

                {
                    question: "Utiliza OpenAI?",

                    answer:
                        "Sim. A solução pode ser integrada às OpenAI APIs para processar conversas e gerar respostas.",
                },

                {
                    question: "As respostas aparecem em tempo real?",

                    answer:
                        "Sim. A interface pode utilizar streaming para exibir progressivamente as respostas geradas.",
                },

                {
                    question: "Os prompts podem ser personalizados?",

                    answer:
                        "Sim. A arquitetura permite definir e reutilizar instruções e estruturas de prompts de acordo com o caso de uso.",
                },
            ],
        },
    },
};