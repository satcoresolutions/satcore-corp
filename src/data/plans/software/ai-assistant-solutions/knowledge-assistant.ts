import type { ServicePlan } from "@/types/plan.types";

export const knowledgeAssistant: ServicePlan = {
    core: {
        id: "AI-002",

        slug: "knowledge-assistant",

        complexity: "⭐⭐⭐⭐⭐ (5/5)",

        price: "$1,750 - $3,000 USD",

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
            "RAG",
            "Semantic Search",
            "Document Indexing",
            "Embeddings",
            "Contextual Retrieval",
            "Document Processing",
            "Streaming Responses",
            "AI Workflows",
        ],

        integrations: [
            "OpenAI APIs",
            "Vector Database",
            "Cloud Storage",
            "Document APIs",
            "Authentication Services",
        ],

        heroImage:
            "/images/services/software/hero/hero-knowledge-assistant.png",

        image:
            "/images/services/software/hero/hero-knowledge-assistant.png",
    },

    translations: {
        es: {
            name: "Knowledge Assistant",

            title: "Asistente Inteligente de Conocimiento",

            level: "🔴 Experto",

            category: "Soluciones de Asistentes de IA",

            description:
                "Asistente de conocimiento basado en RAG para indexar documentación, realizar búsquedas semánticas y generar respuestas contextualizadas utilizando la información disponible.",

            time: "7-10 semanas",

            imageAlt:
                "Asistente de conocimiento con búsqueda semántica, documentación indexada y respuestas contextualizadas",

            target:
                "Empresas y organizaciones que necesitan convertir documentación interna en una fuente de conocimiento consultable mediante inteligencia artificial.",

            support:
                "60 días soporte post-entrega",

            useCases: [
                "Documentación empresarial",
                "Bases de conocimiento",
                "Manuales internos",
                "Soporte corporativo",
                "Búsqueda semántica",
                "Consultas documentales",
                "Asistentes internos",
                "Knowledge bases",
            ],

            includes: [
                "Asistente de conocimiento",
                "Indexación documental",
                "Búsqueda semántica",
                "Vector Database",
                "Embeddings",
                "Retrieval-Augmented Generation",
                "Recuperación contextual",
                "Respuestas basadas en documentos",
                "Procesamiento documental",
                "Interfaz conversacional",
                "Streaming de respuestas",
                "OpenAI APIs",
                "Next.js",
                "TypeScript",
            ],

            notIncludes: [
                "Entrenamiento de modelos propietarios",
                "Migraciones documentales ilimitadas",
                "OCR empresarial completo",
                "Automatizaciones multiagente",
                "Data warehouse empresarial",
                "Aplicaciones móviles nativas",
            ],

            features: [
                "Retrieval-Augmented Generation",
                "Semantic Search",
                "Document Indexing",
                "Vector Embeddings",
                "Contextual Retrieval",
                "Knowledge Base",
                "Document Processing",
                "AI Chat",
                "Streaming Responses",
                "Source-aware Responses",
            ],

            deliverables: [
                "Knowledge Assistant publicado",
                "Base de conocimiento",
                "Indexación documental",
                "Búsqueda semántica",
                "Vector Database",
                "Pipeline RAG",
                "Interfaz conversacional",
                "Procesamiento de documentos",
                "Código fuente",
                "Documentación técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Conocimiento centralizado",

                    description:
                        "Convierte documentación empresarial en una fuente de conocimiento accesible mediante consultas en lenguaje natural.",
                },

                {
                    title: "Búsqueda semántica",

                    description:
                        "Permite encontrar información relacionada por significado y contexto, no únicamente mediante coincidencias exactas de palabras.",
                },

                {
                    title: "Respuestas contextualizadas",

                    description:
                        "El sistema recupera información relevante antes de generar respuestas para mejorar su relación con la documentación disponible.",
                },

                {
                    title: "Acceso inteligente a documentos",

                    description:
                        "Reduce la necesidad de navegar manualmente por grandes cantidades de documentación para encontrar información específica.",
                },
            ],

            process: [
                {
                    title: "Arquitectura del conocimiento",

                    description:
                        "Definimos las fuentes documentales, estructura de información, permisos y estrategia de recuperación.",
                },

                {
                    title: "Indexación y embeddings",

                    description:
                        "Procesamos la documentación y construimos representaciones vectoriales para habilitar búsquedas semánticas.",
                },

                {
                    title: "Pipeline RAG",

                    description:
                        "Implementamos recuperación contextual y generación de respuestas utilizando la información relevante recuperada.",
                },

                {
                    title: "Validación de respuestas",

                    description:
                        "Probamos consultas, recuperación documental, contexto y comportamiento del asistente antes del lanzamiento.",
                },
            ],

            faq: [
                {
                    question: "¿Qué es un Knowledge Assistant?",

                    answer:
                        "Es un asistente de IA conectado a una base de conocimiento que permite consultar documentación mediante lenguaje natural.",
                },

                {
                    question: "¿Qué es RAG?",

                    answer:
                        "RAG es una arquitectura que recupera información relevante de una fuente de conocimiento antes de generar una respuesta.",
                },

                {
                    question: "¿Puede trabajar con documentación empresarial?",

                    answer:
                        "Sí. Puede utilizar documentación previamente procesada e indexada como fuente de conocimiento para las consultas.",
                },

                {
                    question: "¿Utiliza búsqueda semántica?",

                    answer:
                        "Sí. La solución utiliza representaciones vectoriales para recuperar información relevante según el significado de la consulta.",
                },
            ],
        },

        en: {
            name: "Knowledge Assistant",

            title: "Intelligent Knowledge Assistant",

            level: "🔴 Expert",

            category: "AI Assistant Solutions",

            description:
                "RAG-based knowledge assistant designed to index documentation, perform semantic searches, and generate contextual responses using available information.",

            time: "7-10 weeks",

            imageAlt:
                "Knowledge assistant with semantic search, indexed documentation, and contextual responses",

            target:
                "Businesses and organizations that need to transform internal documentation into an AI-accessible knowledge source.",

            support:
                "60 days post-delivery support",

            useCases: [
                "Business documentation",
                "Knowledge bases",
                "Internal manuals",
                "Corporate support",
                "Semantic search",
                "Document queries",
                "Internal assistants",
                "Knowledge bases",
            ],

            includes: [
                "Knowledge assistant",
                "Document indexing",
                "Semantic search",
                "Vector Database",
                "Embeddings",
                "Retrieval-Augmented Generation",
                "Contextual retrieval",
                "Document-based responses",
                "Document processing",
                "Conversational interface",
                "Streaming responses",
                "OpenAI APIs",
                "Next.js",
                "TypeScript",
            ],

            notIncludes: [
                "Proprietary model training",
                "Unlimited document migrations",
                "Complete enterprise OCR",
                "Multi-agent automation",
                "Enterprise data warehouse",
                "Native mobile applications",
            ],

            features: [
                "Retrieval-Augmented Generation",
                "Semantic Search",
                "Document Indexing",
                "Vector Embeddings",
                "Contextual Retrieval",
                "Knowledge Base",
                "Document Processing",
                "AI Chat",
                "Streaming Responses",
                "Source-aware Responses",
            ],

            deliverables: [
                "Published Knowledge Assistant",
                "Knowledge base",
                "Document indexing",
                "Semantic search",
                "Vector Database",
                "RAG pipeline",
                "Conversational interface",
                "Document processing",
                "Source code",
                "Technical documentation",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Centralized Knowledge",

                    description:
                        "Transforms business documentation into a knowledge source accessible through natural language queries.",
                },

                {
                    title: "Semantic Search",

                    description:
                        "Finds related information based on meaning and context rather than relying only on exact keyword matches.",
                },

                {
                    title: "Contextual Responses",

                    description:
                        "Retrieves relevant information before generating responses to improve their relationship with available documentation.",
                },

                {
                    title: "Intelligent Document Access",

                    description:
                        "Reduces the need to manually navigate through large amounts of documentation to find specific information.",
                },
            ],

            process: [
                {
                    title: "Knowledge Architecture",

                    description:
                        "We define document sources, information structure, permissions, and retrieval strategy.",
                },

                {
                    title: "Indexing and Embeddings",

                    description:
                        "We process documentation and build vector representations to enable semantic search.",
                },

                {
                    title: "RAG Pipeline",

                    description:
                        "We implement contextual retrieval and response generation using relevant retrieved information.",
                },

                {
                    title: "Response Validation",

                    description:
                        "We test queries, document retrieval, context, and assistant behavior before launch.",
                },
            ],

            faq: [
                {
                    question: "What is a Knowledge Assistant?",

                    answer:
                        "It is an AI assistant connected to a knowledge base that allows users to query documentation using natural language.",
                },

                {
                    question: "What is RAG?",

                    answer:
                        "RAG is an architecture that retrieves relevant information from a knowledge source before generating a response.",
                },

                {
                    question: "Can it work with business documentation?",

                    answer:
                        "Yes. It can use processed and indexed documentation as a knowledge source for queries.",
                },

                {
                    question: "Does it use semantic search?",

                    answer:
                        "Yes. The solution uses vector representations to retrieve relevant information based on the meaning of a query.",
                },
            ],
        },

        pt: {
            name: "Knowledge Assistant",

            title: "Assistente Inteligente de Conhecimento",

            level: "🔴 Especialista",

            category: "Soluções de Assistentes de IA",

            description:
                "Assistente de conhecimento baseado em RAG para indexar documentação, realizar buscas semânticas e gerar respostas contextualizadas utilizando as informações disponíveis.",

            time: "7-10 semanas",

            imageAlt:
                "Assistente de conhecimento com busca semântica, documentação indexada e respostas contextualizadas",

            target:
                "Empresas e organizações que precisam transformar documentação interna em uma fonte de conhecimento consultável por inteligência artificial.",

            support:
                "60 dias de suporte pós-entrega",

            useCases: [
                "Documentação empresarial",
                "Bases de conhecimento",
                "Manuais internos",
                "Suporte corporativo",
                "Busca semântica",
                "Consultas documentais",
                "Assistentes internos",
                "Bases de conhecimento",
            ],

            includes: [
                "Assistente de conhecimento",
                "Indexação documental",
                "Busca semântica",
                "Vector Database",
                "Embeddings",
                "Retrieval-Augmented Generation",
                "Recuperação contextual",
                "Respostas baseadas em documentos",
                "Processamento documental",
                "Interface conversacional",
                "Streaming de respostas",
                "OpenAI APIs",
                "Next.js",
                "TypeScript",
            ],

            notIncludes: [
                "Treinamento de modelos proprietários",
                "Migrações documentais ilimitadas",
                "OCR empresarial completo",
                "Automações multiagentes",
                "Data warehouse empresarial",
                "Aplicativos móveis nativos",
            ],

            features: [
                "Retrieval-Augmented Generation",
                "Semantic Search",
                "Document Indexing",
                "Vector Embeddings",
                "Contextual Retrieval",
                "Knowledge Base",
                "Document Processing",
                "AI Chat",
                "Streaming Responses",
                "Source-aware Responses",
            ],

            deliverables: [
                "Knowledge Assistant publicado",
                "Base de conhecimento",
                "Indexação documental",
                "Busca semântica",
                "Vector Database",
                "Pipeline RAG",
                "Interface conversacional",
                "Processamento de documentos",
                "Código-fonte",
                "Documentação técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Conhecimento centralizado",

                    description:
                        "Transforma a documentação empresarial em uma fonte de conhecimento acessível por meio de consultas em linguagem natural.",
                },

                {
                    title: "Busca semântica",

                    description:
                        "Permite encontrar informações relacionadas por significado e contexto, e não apenas por correspondências exatas de palavras.",
                },

                {
                    title: "Respostas contextualizadas",

                    description:
                        "O sistema recupera informações relevantes antes de gerar respostas para melhorar sua relação com a documentação disponível.",
                },

                {
                    title: "Acesso inteligente a documentos",

                    description:
                        "Reduz a necessidade de navegar manualmente por grandes quantidades de documentação para encontrar informações específicas.",
                },
            ],

            process: [
                {
                    title: "Arquitetura do conhecimento",

                    description:
                        "Definimos as fontes documentais, estrutura das informações, permissões e estratégia de recuperação.",
                },

                {
                    title: "Indexação e embeddings",

                    description:
                        "Processamos a documentação e construímos representações vetoriais para permitir buscas semânticas.",
                },

                {
                    title: "Pipeline RAG",

                    description:
                        "Implementamos recuperação contextual e geração de respostas utilizando as informações relevantes recuperadas.",
                },

                {
                    title: "Validação das respostas",

                    description:
                        "Testamos consultas, recuperação documental, contexto e comportamento do assistente antes do lançamento.",
                },
            ],

            faq: [
                {
                    question: "O que é um Knowledge Assistant?",

                    answer:
                        "É um assistente de IA conectado a uma base de conhecimento que permite consultar documentação por meio de linguagem natural.",
                },

                {
                    question: "O que é RAG?",

                    answer:
                        "RAG é uma arquitetura que recupera informações relevantes de uma fonte de conhecimento antes de gerar uma resposta.",
                },

                {
                    question: "Pode trabalhar com documentação empresarial?",

                    answer:
                        "Sim. Pode utilizar documentação processada e indexada como fonte de conhecimento para as consultas.",
                },

                {
                    question: "Utiliza busca semântica?",

                    answer:
                        "Sim. A solução utiliza representações vetoriais para recuperar informações relevantes de acordo com o significado da consulta.",
                },
            ],
        },
    },
};