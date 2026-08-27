import type { ServicePlan } from "@/types/plan.types";

export const inspectionSystem: ServicePlan = {
    core: {
        id: "FORM-003",

        slug: "inspection-system",

        complexity: "⭐⭐⭐⭐ (4/5)",

        price: "$950 - $1,600 USD",

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
            "Inspection Checklists",
            "Dynamic Form Generation",
            "Conditional Logic",
            "Photo Attachments",
            "Validation Pipelines",
            "Inspection Records",
            "PDF Report Generation",
            "Report Workflows",
            "Type-safe Components",
        ],

        integrations: [
            "File Storage",
            "Email Services",
            "PDF Generation",
            "Database Services",
            "REST APIs",
        ],

        heroImage:
            "/images/services/software/hero/hero-inspection-system.png",

        image:
            "/images/services/software/hero/hero-inspection-system.png",
    },

    translations: {
        es: {
            name: "Sistema de Inspecciones",

            title: "Sistema Digital de Inspecciones y Reportes",

            level: "🟠 Avanzado",

            category: "Sistemas de Automatización de Formularios",

            description:
                "Sistema digital de inspecciones con generación de checklists, formularios dinámicos, adjuntos fotográficos, validación de resultados y flujos automatizados para generar reportes PDF.",

            time: "5-8 semanas",

            imageAlt:
                "Sistema de inspección digital con checklists, fotografías y generación de reportes PDF",

            target:
                "Empresas, técnicos, supervisores y organizaciones que necesitan digitalizar inspecciones, listas de verificación, evidencias fotográficas y generación de reportes.",

            support:
                "45 días soporte post-entrega",

            useCases: [
                "Inspecciones técnicas",
                "Listas de verificación",
                "Auditorías operativas",
                "Control de instalaciones",
                "Inspecciones de seguridad",
                "Mantenimiento",
                "Control de calidad",
                "Supervisión de procesos",
                "Reportes de campo",
            ],

            includes: [
                "Sistema de inspecciones",
                "Generación de checklists",
                "Formularios dinámicos",
                "Reglas condicionales",
                "Validación con Zod",
                "Adjuntos fotográficos",
                "Gestión de evidencias",
                "Registro de inspecciones",
                "Generación de reportes PDF",
                "Flujo de exportación",
                "Historial de inspecciones",
                "Diseño responsive",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
            ],

            notIncludes: [
                "Aplicación móvil nativa",
                "Procesamiento avanzado de imágenes",
                "Integraciones IoT",
                "Firma digital certificada",
                "ERP empresarial completo",
                "Analítica predictiva mediante IA",
            ],

            features: [
                "Inspection Checklists",
                "Dynamic Form Generation",
                "Conditional Logic",
                "Photo Attachments",
                "Evidence Management",
                "Inspection Records",
                "Validation Pipelines",
                "PDF Report Generation",
                "Report Workflows",
                "Inspection History",
                "Responsive Design",
            ],

            deliverables: [
                "Sistema de inspecciones publicado",
                "Checklists digitales",
                "Formularios dinámicos",
                "Adjuntos fotográficos",
                "Gestión de evidencias",
                "Historial de inspecciones",
                "Generación de reportes PDF",
                "Flujo de exportación",
                "Código fuente",
                "Documentación técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Inspecciones digitalizadas",

                    description:
                        "Permite reemplazar procesos manuales de inspección por formularios digitales estructurados y centralizados.",
                },

                {
                    title: "Evidencia fotográfica",

                    description:
                        "Los inspectores pueden asociar fotografías y evidencias a los diferentes puntos de una inspección.",
                },

                {
                    title: "Reportes automatizados",

                    description:
                        "Los resultados pueden convertirse en reportes PDF estructurados sin necesidad de elaborar manualmente cada documento.",
                },

                {
                    title: "Trazabilidad",

                    description:
                        "El historial permite conservar registros de inspecciones y consultar información de procesos anteriores.",
                },
            ],

            process: [
                {
                    title: "Diseño del checklist",

                    description:
                        "Definimos categorías, puntos de inspección, criterios, respuestas y reglas de validación.",
                },

                {
                    title: "Generación de formularios",

                    description:
                        "Construimos formularios dinámicos capaces de adaptarse a diferentes tipos de inspección.",
                },

                {
                    title: "Evidencias y fotografías",

                    description:
                        "Implementamos la carga y asociación de fotografías y evidencias con los registros correspondientes.",
                },

                {
                    title: "Reportes PDF",

                    description:
                        "Construimos el flujo para transformar los resultados de las inspecciones en documentos PDF estructurados.",
                },

                {
                    title: "Pruebas y lanzamiento",

                    description:
                        "Validamos checklists, adjuntos, formularios, registros, generación de documentos y diferentes escenarios de inspección.",
                },
            ],

            faq: [
                {
                    question: "¿Qué es un Inspection System?",

                    answer:
                        "Es un sistema digital diseñado para ejecutar inspecciones mediante checklists y formularios, registrar resultados y generar reportes.",
                },

                {
                    question: "¿Permite adjuntar fotografías?",

                    answer:
                        "Sí. Los registros de inspección pueden incorporar fotografías y otras evidencias asociadas a los puntos evaluados.",
                },

                {
                    question: "¿Puede generar reportes PDF?",

                    answer:
                        "Sí. El sistema contempla flujos para transformar los resultados de una inspección en reportes PDF estructurados.",
                },

                {
                    question: "¿Puede utilizar diferentes checklists?",

                    answer:
                        "Sí. La arquitectura permite trabajar con diferentes estructuras de checklist y formularios según el tipo de inspección.",
                },
            ],
        },

        en: {
            name: "Inspection System",

            title: "Digital Inspection and Reporting System",

            level: "🟠 Advanced",

            category: "Form Automation Systems",

            description:
                "Digital inspection system with checklist generation, dynamic forms, photo attachments, result validation, and automated PDF report generation workflows.",

            time: "5-8 weeks",

            imageAlt:
                "Digital inspection system with checklists, photos, and PDF report generation",

            target:
                "Businesses, technicians, supervisors, and organizations that need to digitize inspections, checklists, photographic evidence, and reporting workflows.",

            support:
                "45 days post-delivery support",

            useCases: [
                "Technical inspections",
                "Digital checklists",
                "Operational audits",
                "Facility inspections",
                "Safety inspections",
                "Maintenance",
                "Quality control",
                "Process supervision",
                "Field reports",
            ],

            includes: [
                "Inspection system",
                "Checklist generation",
                "Dynamic forms",
                "Conditional rules",
                "Zod validation",
                "Photo attachments",
                "Evidence management",
                "Inspection records",
                "PDF report generation",
                "Export workflow",
                "Inspection history",
                "Responsive design",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
            ],

            notIncludes: [
                "Native mobile application",
                "Advanced image processing",
                "IoT integrations",
                "Certified digital signatures",
                "Complete enterprise ERP",
                "AI-powered predictive analytics",
            ],

            features: [
                "Inspection Checklists",
                "Dynamic Form Generation",
                "Conditional Logic",
                "Photo Attachments",
                "Evidence Management",
                "Inspection Records",
                "Validation Pipelines",
                "PDF Report Generation",
                "Report Workflows",
                "Inspection History",
                "Responsive Design",
            ],

            deliverables: [
                "Published inspection system",
                "Digital checklists",
                "Dynamic forms",
                "Photo attachments",
                "Evidence management",
                "Inspection history",
                "PDF report generation",
                "Export workflow",
                "Source code",
                "Technical documentation",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Digital Inspections",

                    description:
                        "Replaces manual inspection processes with structured and centralized digital forms.",
                },

                {
                    title: "Photographic Evidence",

                    description:
                        "Inspectors can associate photographs and evidence with individual inspection points.",
                },

                {
                    title: "Automated Reports",

                    description:
                        "Inspection results can be transformed into structured PDF reports without manually creating each document.",
                },

                {
                    title: "Traceability",

                    description:
                        "Inspection history preserves records and allows previous processes to be reviewed.",
                },
            ],

            process: [
                {
                    title: "Checklist Design",

                    description:
                        "We define categories, inspection points, criteria, responses, and validation rules.",
                },

                {
                    title: "Form Generation",

                    description:
                        "We build dynamic forms that can adapt to different inspection types.",
                },

                {
                    title: "Evidence and Photos",

                    description:
                        "We implement photo and evidence uploads associated with the corresponding inspection records.",
                },

                {
                    title: "PDF Reports",

                    description:
                        "We build workflows for transforming inspection results into structured PDF documents.",
                },

                {
                    title: "Testing and Launch",

                    description:
                        "We validate checklists, attachments, forms, records, document generation, and different inspection scenarios.",
                },
            ],

            faq: [
                {
                    question: "What is an Inspection System?",

                    answer:
                        "It is a digital system designed to perform inspections using checklists and forms, record results, and generate reports.",
                },

                {
                    question: "Can it attach photographs?",

                    answer:
                        "Yes. Inspection records can include photographs and other evidence associated with evaluated inspection points.",
                },

                {
                    question: "Can it generate PDF reports?",

                    answer:
                        "Yes. The system includes workflows for transforming inspection results into structured PDF reports.",
                },

                {
                    question: "Can it use different checklists?",

                    answer:
                        "Yes. The architecture supports different checklist and form structures according to the inspection type.",
                },
            ],
        },

        pt: {
            name: "Sistema de Inspeções",

            title: "Sistema Digital de Inspeções e Relatórios",

            level: "🟠 Avançado",

            category: "Sistemas de Automação de Formulários",

            description:
                "Sistema digital de inspeções com geração de checklists, formulários dinâmicos, anexos fotográficos, validação de resultados e fluxos automatizados para geração de relatórios PDF.",

            time: "5-8 semanas",

            imageAlt:
                "Sistema de inspeção digital com checklists, fotografias e geração de relatórios PDF",

            target:
                "Empresas, técnicos, supervisores e organizações que precisam digitalizar inspeções, listas de verificação, evidências fotográficas e fluxos de relatórios.",

            support:
                "45 dias de suporte pós-entrega",

            useCases: [
                "Inspeções técnicas",
                "Listas de verificação",
                "Auditorias operacionais",
                "Inspeções de instalações",
                "Inspeções de segurança",
                "Manutenção",
                "Controle de qualidade",
                "Supervisão de processos",
                "Relatórios de campo",
            ],

            includes: [
                "Sistema de inspeções",
                "Geração de checklists",
                "Formulários dinâmicos",
                "Regras condicionais",
                "Validação com Zod",
                "Anexos fotográficos",
                "Gerenciamento de evidências",
                "Registros de inspeção",
                "Geração de relatórios PDF",
                "Fluxo de exportação",
                "Histórico de inspeções",
                "Design responsivo",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
            ],

            notIncludes: [
                "Aplicativo móvel nativo",
                "Processamento avançado de imagens",
                "Integrações IoT",
                "Assinatura digital certificada",
                "ERP empresarial completo",
                "Análise preditiva com IA",
            ],

            features: [
                "Inspection Checklists",
                "Dynamic Form Generation",
                "Conditional Logic",
                "Photo Attachments",
                "Evidence Management",
                "Inspection Records",
                "Validation Pipelines",
                "PDF Report Generation",
                "Report Workflows",
                "Inspection History",
                "Responsive Design",
            ],

            deliverables: [
                "Sistema de inspeções publicado",
                "Checklists digitais",
                "Formulários dinâmicos",
                "Anexos fotográficos",
                "Gerenciamento de evidências",
                "Histórico de inspeções",
                "Geração de relatórios PDF",
                "Fluxo de exportação",
                "Código-fonte",
                "Documentação técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Inspeções digitalizadas",

                    description:
                        "Permite substituir processos manuais de inspeção por formulários digitais estruturados e centralizados.",
                },

                {
                    title: "Evidências fotográficas",

                    description:
                        "Os inspetores podem associar fotografias e evidências aos diferentes pontos de uma inspeção.",
                },

                {
                    title: "Relatórios automatizados",

                    description:
                        "Os resultados das inspeções podem ser transformados em relatórios PDF estruturados sem a necessidade de criar manualmente cada documento.",
                },

                {
                    title: "Rastreabilidade",

                    description:
                        "O histórico permite manter registros de inspeções e consultar informações de processos anteriores.",
                },
            ],

            process: [
                {
                    title: "Design do checklist",

                    description:
                        "Definimos categorias, pontos de inspeção, critérios, respostas e regras de validação.",
                },

                {
                    title: "Geração de formulários",

                    description:
                        "Construímos formulários dinâmicos capazes de se adaptar a diferentes tipos de inspeção.",
                },

                {
                    title: "Evidências e fotografias",

                    description:
                        "Implementamos o envio e a associação de fotografias e evidências aos registros correspondentes.",
                },

                {
                    title: "Relatórios PDF",

                    description:
                        "Construímos o fluxo para transformar os resultados das inspeções em documentos PDF estruturados.",
                },

                {
                    title: "Testes e lançamento",

                    description:
                        "Validamos checklists, anexos, formulários, registros, geração de documentos e diferentes cenários de inspeção.",
                },
            ],

            faq: [
                {
                    question: "O que é um Inspection System?",

                    answer:
                        "É um sistema digital desenvolvido para realizar inspeções por meio de checklists e formulários, registrar resultados e gerar relatórios.",
                },

                {
                    question: "Permite anexar fotografias?",

                    answer:
                        "Sim. Os registros de inspeção podem incluir fotografias e outras evidências associadas aos pontos avaliados.",
                },

                {
                    question: "Pode gerar relatórios PDF?",

                    answer:
                        "Sim. O sistema contempla fluxos para transformar os resultados de uma inspeção em relatórios PDF estruturados.",
                },

                {
                    question: "Pode utilizar diferentes checklists?",

                    answer:
                        "Sim. A arquitetura permite trabalhar com diferentes estruturas de checklist e formulários de acordo com o tipo de inspeção.",
                },
            ],
        },
    },
};