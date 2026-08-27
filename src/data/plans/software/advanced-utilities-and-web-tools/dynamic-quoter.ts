import type {
    ServicePlan,
} from "@/types/plan.types";

export const dynamicQuoter: ServicePlan = {
    core: {
        id: "APP-002",

        slug: "dynamic-quoter",

        complexity: "⭐⭐⭐⭐ (4/5)",

        price: "$750 - $1,500 USD",

        pricingType: "fixed",

        automationLevel: "high",

        stack: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
        ],

        technologies: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Client-side Pricing Engine",
            "Multi-variable Matrix Pricing",
            "Dynamic State Management",
            "Instant Price Calculation",
            "PDF Generation",
            "Invoice Compilation",
            "Dynamic Layout Calculation",
            "Type-safe Logic",
            "Responsive UI",
        ],

        integrations: [
            "PDF Generation Services",
            "REST APIs",
            "Email Services",
            "External Pricing Sources",
        ],

        heroImage:
            "/images/services/software/hero/hero-dynamic-quoter.png",

        image:
            "/images/services/software/hero/hero-dynamic-quoter.png",
    },

    translations: {
        es: {
            name:
                "Cotizador Dinámico",

            title:
                "Cotizador Web Dinámico",

            level:
                "🟠 Avanzado",

            category:
                "Utilidades Avanzadas y Herramientas Web",

            description:
                "Cotizador web dinámico diseñado para procesar múltiples variables de precio, calcular automáticamente configuraciones comerciales y generar documentos PDF de cotización con una estructura limpia y profesional.",

            time:
                "4-7 semanas",

            imageAlt:
                "Cotizador web dinámico con cálculo de precios y generación automática de PDF",

            target:
                "Empresas y equipos comerciales que necesitan automatizar procesos de cotización donde el precio depende de múltiples variables, cantidades, opciones o configuraciones.",

            support:
                "45 días soporte post-entrega",

            useCases: [
                "Cotizaciones comerciales",
                "Configuradores de productos",
                "Cotizadores de servicios",
                "Presupuestos empresariales",
                "Configuradores de precios",
                "Ventas B2B",
                "Propuestas comerciales",
            ],

            includes: [
                "Cotizador dinámico",
                "Motor de precios",
                "Matriz de variables",
                "Cálculo automático de precios",
                "Gestión dinámica de estados",
                "Actualización instantánea",
                "Generación de PDF",
                "Compilación de factura o cotización",
                "Diseño responsive",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
            ],

            notIncludes: [
                "Sistema contable completo",
                "ERP empresarial",
                "Pasarela de pagos completa",
                "Facturación electrónica certificada",
                "Aplicación móvil nativa",
                "Sistema CRM empresarial completo",
            ],

            features: [
                "Dynamic Pricing",
                "Multi-variable Pricing Matrix",
                "Instant Price Updates",
                "Dynamic State Management",
                "Automated Quote Calculation",
                "PDF Generation",
                "Invoice PDF Compilation",
                "Dynamic Layout Calculations",
                "Type-safe Logic",
                "Responsive Design",
            ],

            deliverables: [
                "Cotizador web publicado",
                "Motor de cálculo de precios",
                "Matriz de variables",
                "Sistema de actualización de precios",
                "Generador PDF",
                "Plantilla de cotización",
                "Documento PDF generado",
                "Interfaz responsive",
                "Código fuente",
                "Documentación técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Cotización automatizada",

                    description:
                        "Permite calcular automáticamente precios según múltiples variables y configuraciones seleccionadas por el usuario.",
                },

                {
                    title:
                        "Menor trabajo manual",

                    description:
                        "Reduce la necesidad de realizar cálculos y preparar documentos de cotización manualmente.",
                },

                {
                    title:
                        "PDF profesional",

                    description:
                        "Genera documentos PDF estructurados con una presentación limpia de los productos, servicios, cantidades y precios.",
                },

                {
                    title:
                        "Precios dinámicos",

                    description:
                        "Los valores pueden recalcularse instantáneamente cuando cambian cantidades, opciones o variables de configuración.",
                },
            ],

            process: [
                {
                    title:
                        "Modelado de precios",

                    description:
                        "Definimos las variables, reglas, cantidades, opciones y combinaciones que determinan el precio final.",
                },

                {
                    title:
                        "Construcción de la matriz",

                    description:
                        "Implementamos la matriz de precios y las relaciones entre variables para producir cálculos consistentes.",
                },

                {
                    title:
                        "Desarrollo del cotizador",

                    description:
                        "Construimos la interfaz interactiva utilizando Next.js, TypeScript y Tailwind CSS.",
                },

                {
                    title:
                        "Generación del documento",

                    description:
                        "Implementamos la compilación automática del contenido y la generación del documento PDF.",
                },

                {
                    title:
                        "Pruebas comerciales",

                    description:
                        "Validamos diferentes combinaciones de variables, precios, cantidades y formatos de documento antes del lanzamiento.",
                },
            ],

            faq: [
                {
                    question:
                        "¿Qué es un cotizador dinámico?",

                    answer:
                        "Es una herramienta web que calcula automáticamente el precio de una solución según variables, cantidades, opciones o configuraciones seleccionadas por el usuario.",
                },

                {
                    question:
                        "¿Puede manejar múltiples variables?",

                    answer:
                        "Sí. El sistema puede procesar matrices de precios con múltiples variables y combinaciones.",
                },

                {
                    question:
                        "¿Genera PDF?",

                    answer:
                        "Sí. El cotizador contempla la generación automática de documentos PDF con la información calculada.",
                },

                {
                    question:
                        "¿Los precios se actualizan inmediatamente?",

                    answer:
                        "Sí. El motor client-side permite recalcular los valores inmediatamente cuando se modifican las variables.",
                },
            ],
        },

        en: {
            name:
                "Dynamic Quoter",

            title:
                "Dynamic Web Quoter",

            level:
                "🟠 Advanced",

            category:
                "Advanced Utilities & Web Tools",

            description:
                "Dynamic web quoting tool designed to process multiple pricing variables, automatically calculate commercial configurations, and generate clean professional quote PDF documents.",

            time:
                "4-7 weeks",

            imageAlt:
                "Dynamic web quoting tool with price calculation and automatic PDF generation",

            target:
                "Companies and sales teams that need to automate quoting processes where pricing depends on multiple variables, quantities, options, or configurations.",

            support:
                "45 days post-delivery support",

            useCases: [
                "Business quotations",
                "Product configurators",
                "Service quotations",
                "Business estimates",
                "Pricing configurators",
                "B2B sales",
                "Commercial proposals",
            ],

            includes: [
                "Dynamic quoter",
                "Pricing engine",
                "Variable matrix",
                "Automatic price calculation",
                "Dynamic state management",
                "Instant updates",
                "PDF generation",
                "Quote or invoice compilation",
                "Responsive design",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
            ],

            notIncludes: [
                "Complete accounting system",
                "Enterprise ERP",
                "Complete payment gateway",
                "Certified electronic invoicing",
                "Native mobile application",
                "Complete enterprise CRM",
            ],

            features: [
                "Dynamic Pricing",
                "Multi-variable Pricing Matrix",
                "Instant Price Updates",
                "Dynamic State Management",
                "Automated Quote Calculation",
                "PDF Generation",
                "Invoice PDF Compilation",
                "Dynamic Layout Calculations",
                "Type-safe Logic",
                "Responsive Design",
            ],

            deliverables: [
                "Published web quoter",
                "Pricing calculation engine",
                "Variable matrix",
                "Price update system",
                "PDF generator",
                "Quote template",
                "Generated PDF document",
                "Responsive interface",
                "Source code",
                "Technical documentation",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Automated Quoting",

                    description:
                        "Automatically calculates prices according to multiple variables and configurations selected by the user.",
                },

                {
                    title:
                        "Reduced Manual Work",

                    description:
                        "Reduces the need to manually calculate prices and prepare quotation documents.",
                },

                {
                    title:
                        "Professional PDF",

                    description:
                        "Generates structured PDF documents with a clean presentation of products, services, quantities, and prices.",
                },

                {
                    title:
                        "Dynamic Pricing",

                    description:
                        "Values can be recalculated instantly when quantities, options, or configuration variables change.",
                },
            ],

            process: [
                {
                    title:
                        "Pricing Model",

                    description:
                        "We define variables, rules, quantities, options, and combinations that determine the final price.",
                },

                {
                    title:
                        "Matrix Construction",

                    description:
                        "We implement the pricing matrix and relationships between variables to produce consistent calculations.",
                },

                {
                    title:
                        "Quoter Development",

                    description:
                        "We build the interactive interface using Next.js, TypeScript, and Tailwind CSS.",
                },

                {
                    title:
                        "Document Generation",

                    description:
                        "We implement automatic content compilation and PDF document generation.",
                },

                {
                    title:
                        "Commercial Testing",

                    description:
                        "We validate different variable combinations, prices, quantities, and document formats before launch.",
                },
            ],

            faq: [
                {
                    question:
                        "What is a dynamic quoter?",

                    answer:
                        "It is a web tool that automatically calculates a solution's price based on variables, quantities, options, or configurations selected by the user.",
                },

                {
                    question:
                        "Can it handle multiple variables?",

                    answer:
                        "Yes. The system can process pricing matrices with multiple variables and combinations.",
                },

                {
                    question:
                        "Does it generate PDFs?",

                    answer:
                        "Yes. The quoter includes automatic PDF document generation with the calculated information.",
                },

                {
                    question:
                        "Are prices updated instantly?",

                    answer:
                        "Yes. The client-side engine can recalculate values immediately when variables are modified.",
                },
            ],
        },

        pt: {
            name:
                "Cotador Dinâmico",

            title:
                "Cotador Web Dinâmico",

            level:
                "🟠 Avançado",

            category:
                "Utilidades Avançadas e Ferramentas Web",

            description:
                "Cotador web dinâmico desenvolvido para processar múltiplas variáveis de preço, calcular automaticamente configurações comerciais e gerar documentos PDF de orçamento com uma estrutura limpa e profissional.",

            time:
                "4-7 semanas",

            imageAlt:
                "Cotador web dinâmico com cálculo de preços e geração automática de PDF",

            target:
                "Empresas e equipes comerciais que precisam automatizar processos de orçamento nos quais o preço depende de múltiplas variáveis, quantidades, opções ou configurações.",

            support:
                "45 dias de suporte pós-entrega",

            useCases: [
                "Orçamentos comerciais",
                "Configuradores de produtos",
                "Orçamentos de serviços",
                "Estimativas empresariais",
                "Configuradores de preços",
                "Vendas B2B",
                "Propostas comerciais",
            ],

            includes: [
                "Cotador dinâmico",
                "Motor de preços",
                "Matriz de variáveis",
                "Cálculo automático de preços",
                "Gerenciamento dinâmico de estado",
                "Atualização instantânea",
                "Geração de PDF",
                "Compilação de orçamento ou fatura",
                "Design responsivo",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
            ],

            notIncludes: [
                "Sistema contábil completo",
                "ERP empresarial",
                "Gateway de pagamento completo",
                "Faturamento eletrônico certificado",
                "Aplicação móvel nativa",
                "CRM empresarial completo",
            ],

            features: [
                "Dynamic Pricing",
                "Multi-variable Pricing Matrix",
                "Instant Price Updates",
                "Dynamic State Management",
                "Automated Quote Calculation",
                "PDF Generation",
                "Invoice PDF Compilation",
                "Dynamic Layout Calculations",
                "Type-safe Logic",
                "Responsive Design",
            ],

            deliverables: [
                "Cotador web publicado",
                "Motor de cálculo de preços",
                "Matriz de variáveis",
                "Sistema de atualização de preços",
                "Gerador de PDF",
                "Modelo de orçamento",
                "Documento PDF gerado",
                "Interface responsiva",
                "Código-fonte",
                "Documentação técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Orçamento automatizado",

                    description:
                        "Permite calcular automaticamente preços de acordo com múltiplas variáveis e configurações selecionadas pelo usuário.",
                },

                {
                    title:
                        "Menos trabalho manual",

                    description:
                        "Reduz a necessidade de realizar cálculos e preparar documentos de orçamento manualmente.",
                },

                {
                    title:
                        "PDF profissional",

                    description:
                        "Gera documentos PDF estruturados com uma apresentação limpa de produtos, serviços, quantidades e preços.",
                },

                {
                    title:
                        "Preços dinâmicos",

                    description:
                        "Os valores podem ser recalculados instantaneamente quando quantidades, opções ou variáveis de configuração são alteradas.",
                },
            ],

            process: [
                {
                    title:
                        "Modelagem de preços",

                    description:
                        "Definimos as variáveis, regras, quantidades, opções e combinações que determinam o preço final.",
                },

                {
                    title:
                        "Construção da matriz",

                    description:
                        "Implementamos a matriz de preços e as relações entre variáveis para produzir cálculos consistentes.",
                },

                {
                    title:
                        "Desenvolvimento do cotador",

                    description:
                        "Construímos a interface interativa utilizando Next.js, TypeScript e Tailwind CSS.",
                },

                {
                    title:
                        "Geração do documento",

                    description:
                        "Implementamos a compilação automática do conteúdo e a geração do documento PDF.",
                },

                {
                    title:
                        "Testes comerciais",

                    description:
                        "Validamos diferentes combinações de variáveis, preços, quantidades e formatos de documento antes do lançamento.",
                },
            ],

            faq: [
                {
                    question:
                        "O que é um cotador dinâmico?",

                    answer:
                        "É uma ferramenta web que calcula automaticamente o preço de uma solução com base em variáveis, quantidades, opções ou configurações selecionadas pelo usuário.",
                },

                {
                    question:
                        "Pode trabalhar com múltiplas variáveis?",

                    answer:
                        "Sim. O sistema pode processar matrizes de preços com múltiplas variáveis e combinações.",
                },

                {
                    question:
                        "Gera PDFs?",

                    answer:
                        "Sim. O cotador contempla a geração automática de documentos PDF com as informações calculadas.",
                },

                {
                    question:
                        "Os preços são atualizados instantaneamente?",

                    answer:
                        "Sim. O mecanismo client-side permite recalcular os valores imediatamente quando as variáveis são modificadas.",
                },
            ],
        },
    },
};