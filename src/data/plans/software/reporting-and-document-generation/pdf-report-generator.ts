import type { ServicePlan } from "@/types/plan.types";

export const pdfReportGenerator: ServicePlan = {
    core: {
        id: "REP-001",

        slug: "pdf-report-generator",

        complexity: "⭐⭐⭐ (3/5)",

        price: "$450 - $850 USD",

        pricingType: "fixed",

        automationLevel: "high",

        stack: [
            "Next.js",
            "TypeScript",
            "PDF Generation",
        ],

        technologies: [
            "Next.js",
            "TypeScript",
            "PDF Generation",
            "Document Templates",
            "Dynamic Rendering",
            "Data-driven Documents",
            "Reusable Components",
            "Responsive Layouts",
        ],

        integrations: [
            "PDF Generation Libraries",
            "REST APIs",
            "Database Systems",
            "Cloud Storage",
        ],

        heroImage:
            "/images/services/software/hero/hero-pdf-report-generator.png",

        image:
            "/images/services/software/hero/hero-pdf-report-generator.png",
    },

    translations: {
        es: {
            name: "PDF Report Generator",

            title: "Generador de Reportes PDF",

            level: "🟡 Intermedio",

            category: "Reportes y Generación de Documentos",

            description:
                "Sistema para generar reportes PDF dinámicos a partir de datos estructurados utilizando plantillas de documentos reutilizables y layouts profesionales.",

            time: "3-5 semanas",

            imageAlt:
                "Generador de reportes PDF con plantillas dinámicas de documentos",

            target:
                "Empresas, profesionales y plataformas digitales que necesitan generar documentos PDF de forma automatizada a partir de información estructurada.",

            support:
                "30 días soporte post-entrega",

            useCases: [
                "Reportes empresariales",
                "Informes administrativos",
                "Documentos personalizados",
                "Facturas",
                "Constancias",
                "Resúmenes de información",
                "Reportes operativos",
            ],

            includes: [
                "Generación dinámica de PDF",
                "Plantillas reutilizables",
                "Layouts personalizados",
                "Renderizado de datos",
                "Encabezados y pies de página",
                "Tablas dinámicas",
                "Secciones configurables",
                "Formato profesional",
                "Descarga de documentos",
                "Componentes reutilizables",
                "Diseño responsive para generación",
            ],

            notIncludes: [
                "Sistema empresarial completo de reportes",
                "Firma digital certificada",
                "Verificación mediante QR",
                "Generación masiva de documentos",
                "Infraestructura documental empresarial",
            ],

            features: [
                "Dynamic PDF Generation",
                "Reusable Templates",
                "Dynamic Tables",
                "Document Rendering",
                "Custom Layouts",
                "Data-driven Documents",
                "PDF Export",
                "Reusable Components",
                "Document Sections",
                "Professional Formatting",
            ],

            deliverables: [
                "Generador de reportes PDF",
                "Plantillas de documentos",
                "Layouts personalizados",
                "Sistema de renderizado",
                "Tablas dinámicas",
                "Exportación PDF",
                "Componentes reutilizables",
                "Código fuente",
                "Documentación técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Generación automatizada",

                    description:
                        "Permite convertir información estructurada en documentos PDF de forma consistente y automatizada.",
                },

                {
                    title: "Plantillas reutilizables",

                    description:
                        "Las plantillas permiten mantener una estructura documental consistente y facilitar futuros reportes.",
                },

                {
                    title: "Documentos profesionales",

                    description:
                        "Los layouts personalizados permiten producir documentos visualmente organizados y adaptados a cada necesidad.",
                },

                {
                    title: "Escalabilidad documental",

                    description:
                        "La arquitectura basada en componentes permite reutilizar estructuras para diferentes tipos de documentos.",
                },
            ],

            process: [
                {
                    title: "Diseño documental",

                    description:
                        "Definimos la estructura, secciones, campos, tablas y elementos visuales del documento.",
                },

                {
                    title: "Construcción de plantillas",

                    description:
                        "Creamos plantillas reutilizables para representar diferentes tipos de información.",
                },

                {
                    title: "Implementación del generador",

                    description:
                        "Desarrollamos el sistema de generación dinámica de PDF utilizando Next.js y TypeScript.",
                },

                {
                    title: "Pruebas y validación",

                    description:
                        "Validamos datos, layouts, tablas, saltos de página y generación final de los documentos.",
                },
            ],

            faq: [
                {
                    question: "¿Qué es un PDF Report Generator?",

                    answer:
                        "Es un sistema que transforma información estructurada en documentos PDF utilizando plantillas y estructuras de diseño reutilizables.",
                },

                {
                    question: "¿Puede utilizar diferentes plantillas?",

                    answer:
                        "Sí. La arquitectura permite definir diferentes plantillas según el tipo de documento que se necesite generar.",
                },

                {
                    question: "¿Puede generar tablas dinámicas?",

                    answer:
                        "Sí. Los documentos pueden incorporar tablas cuyos datos se generan dinámicamente.",
                },

                {
                    question: "¿Los documentos pueden descargarse?",

                    answer:
                        "Sí. Los documentos generados pueden prepararse para descarga en formato PDF.",
                },
            ],
        },

        en: {
            name: "PDF Report Generator",

            title: "PDF Report Generator",

            level: "🟡 Intermediate",

            category: "Reporting & Document Generation",

            description:
                "System for generating dynamic PDF reports from structured data using reusable document templates and professional layouts.",

            time: "3-5 weeks",

            imageAlt:
                "PDF report generator with dynamic document templates",

            target:
                "Businesses, professionals, and digital platforms that need to automatically generate PDF documents from structured information.",

            support:
                "30 days post-delivery support",

            useCases: [
                "Business reports",
                "Administrative reports",
                "Custom documents",
                "Invoices",
                "Certificates",
                "Information summaries",
                "Operational reports",
            ],

            includes: [
                "Dynamic PDF generation",
                "Reusable templates",
                "Custom layouts",
                "Data rendering",
                "Headers and footers",
                "Dynamic tables",
                "Configurable sections",
                "Professional formatting",
                "Document downloads",
                "Reusable components",
                "Responsive generation layouts",
            ],

            notIncludes: [
                "Complete enterprise reporting system",
                "Certified digital signatures",
                "QR verification",
                "Mass document generation",
                "Enterprise document infrastructure",
            ],

            features: [
                "Dynamic PDF Generation",
                "Reusable Templates",
                "Dynamic Tables",
                "Document Rendering",
                "Custom Layouts",
                "Data-driven Documents",
                "PDF Export",
                "Reusable Components",
                "Document Sections",
                "Professional Formatting",
            ],

            deliverables: [
                "PDF report generator",
                "Document templates",
                "Custom layouts",
                "Rendering system",
                "Dynamic tables",
                "PDF export",
                "Reusable components",
                "Source code",
                "Technical documentation",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Automated Generation",

                    description:
                        "Transforms structured information into consistent PDF documents automatically.",
                },

                {
                    title: "Reusable Templates",

                    description:
                        "Templates maintain consistent document structures and simplify future reporting requirements.",
                },

                {
                    title: "Professional Documents",

                    description:
                        "Custom layouts produce organized documents adapted to specific business requirements.",
                },

                {
                    title: "Document Scalability",

                    description:
                        "A component-based architecture allows structures to be reused across different document types.",
                },
            ],

            process: [
                {
                    title: "Document Design",

                    description:
                        "We define document structure, sections, fields, tables, and visual elements.",
                },

                {
                    title: "Template Construction",

                    description:
                        "We create reusable templates for representing different types of information.",
                },

                {
                    title: "Generator Implementation",

                    description:
                        "We develop the dynamic PDF generation system using Next.js and TypeScript.",
                },

                {
                    title: "Testing and Validation",

                    description:
                        "We validate data, layouts, tables, page breaks, and final document generation.",
                },
            ],

            faq: [
                {
                    question: "What is a PDF Report Generator?",

                    answer:
                        "It is a system that transforms structured information into PDF documents using reusable templates and layout structures.",
                },

                {
                    question: "Can it use different templates?",

                    answer:
                        "Yes. The architecture supports different templates according to the type of document being generated.",
                },

                {
                    question: "Can it generate dynamic tables?",

                    answer:
                        "Yes. Documents can include tables populated dynamically from application data.",
                },

                {
                    question: "Can generated documents be downloaded?",

                    answer:
                        "Yes. Generated documents can be prepared for download as PDF files.",
                },
            ],
        },

        pt: {
            name: "PDF Report Generator",

            title: "Gerador de Relatórios PDF",

            level: "🟡 Intermediário",

            category: "Relatórios e Geração de Documentos",

            description:
                "Sistema para gerar relatórios PDF dinâmicos a partir de dados estruturados utilizando modelos de documentos reutilizáveis e layouts profissionais.",

            time: "3-5 semanas",

            imageAlt:
                "Gerador de relatórios PDF com modelos dinâmicos de documentos",

            target:
                "Empresas, profissionais e plataformas digitais que precisam gerar documentos PDF automaticamente a partir de informações estruturadas.",

            support:
                "30 dias de suporte pós-entrega",

            useCases: [
                "Relatórios empresariais",
                "Relatórios administrativos",
                "Documentos personalizados",
                "Faturas",
                "Certificados",
                "Resumos de informações",
                "Relatórios operacionais",
            ],

            includes: [
                "Geração dinâmica de PDF",
                "Modelos reutilizáveis",
                "Layouts personalizados",
                "Renderização de dados",
                "Cabeçalhos e rodapés",
                "Tabelas dinâmicas",
                "Seções configuráveis",
                "Formatação profissional",
                "Download de documentos",
                "Componentes reutilizáveis",
                "Layouts responsivos",
            ],

            notIncludes: [
                "Sistema empresarial completo de relatórios",
                "Assinatura digital certificada",
                "Verificação por QR",
                "Geração massiva de documentos",
                "Infraestrutura documental empresarial",
            ],

            features: [
                "Dynamic PDF Generation",
                "Reusable Templates",
                "Dynamic Tables",
                "Document Rendering",
                "Custom Layouts",
                "Data-driven Documents",
                "PDF Export",
                "Reusable Components",
                "Document Sections",
                "Professional Formatting",
            ],

            deliverables: [
                "Gerador de relatórios PDF",
                "Modelos de documentos",
                "Layouts personalizados",
                "Sistema de renderização",
                "Tabelas dinâmicas",
                "Exportação PDF",
                "Componentes reutilizáveis",
                "Código-fonte",
                "Documentação técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Geração automatizada",

                    description:
                        "Permite transformar informações estruturadas em documentos PDF de forma consistente e automatizada.",
                },

                {
                    title: "Modelos reutilizáveis",

                    description:
                        "Os modelos permitem manter uma estrutura documental consistente e facilitar futuros relatórios.",
                },

                {
                    title: "Documentos profissionais",

                    description:
                        "Layouts personalizados permitem produzir documentos organizados e adaptados a cada necessidade.",
                },

                {
                    title: "Escalabilidade documental",

                    description:
                        "A arquitetura baseada em componentes permite reutilizar estruturas para diferentes tipos de documentos.",
                },
            ],

            process: [
                {
                    title: "Design documental",

                    description:
                        "Definimos a estrutura, seções, campos, tabelas e elementos visuais do documento.",
                },

                {
                    title: "Construção dos modelos",

                    description:
                        "Criamos modelos reutilizáveis para representar diferentes tipos de informações.",
                },

                {
                    title: "Implementação do gerador",

                    description:
                        "Desenvolvemos o sistema de geração dinâmica de PDF utilizando Next.js e TypeScript.",
                },

                {
                    title: "Testes e validação",

                    description:
                        "Validamos dados, layouts, tabelas, quebras de página e geração final dos documentos.",
                },
            ],

            faq: [
                {
                    question: "O que é um PDF Report Generator?",

                    answer:
                        "É um sistema que transforma informações estruturadas em documentos PDF utilizando modelos e estruturas de design reutilizáveis.",
                },

                {
                    question: "Pode utilizar diferentes modelos?",

                    answer:
                        "Sim. A arquitetura permite definir diferentes modelos de acordo com o tipo de documento necessário.",
                },

                {
                    question: "Pode gerar tabelas dinâmicas?",

                    answer:
                        "Sim. Os documentos podem incorporar tabelas cujos dados são gerados dinamicamente.",
                },

                {
                    question: "Os documentos podem ser baixados?",

                    answer:
                        "Sim. Os documentos gerados podem ser preparados para download em formato PDF.",
                },
            ],
        },
    },
};