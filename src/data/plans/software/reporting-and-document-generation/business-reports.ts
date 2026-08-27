import type { ServicePlan } from "@/types/plan.types";

export const businessReports: ServicePlan = {
    core: {
        id: "REP-002",

        slug: "business-reports",

        complexity: "⭐⭐⭐⭐ (4/5)",

        price: "$950 - $1,750 USD",

        pricingType: "fixed",

        automationLevel: "high",

        stack: [
            "Next.js",
            "TypeScript",
            "PDF Generation",
            "Excel Export",
        ],

        technologies: [
            "Next.js",
            "TypeScript",
            "PDF Generation",
            "Excel Export",
            "Interactive Reports",
            "Data Filtering",
            "Report Templates",
            "Data Tables",
            "Dynamic Aggregation",
            "CSV/Excel Processing",
            "Responsive Dashboards",
        ],

        integrations: [
            "REST APIs",
            "Database Systems",
            "Excel Export Services",
            "PDF Generation Libraries",
        ],

        heroImage:
            "/images/services/software/hero/hero-business-reports.png",

        image:
            "/images/services/software/hero/hero-business-reports.png",
    },

    translations: {
        es: {
            name: "Business Reports",

            title: "Reportes Empresariales",

            level: "🟠 Avanzado",

            category: "Reportes y Generación de Documentos",

            description:
                "Sistema de reportes empresariales interactivos con filtros de información, visualización de datos y exportación de resultados a Excel y PDF.",

            time: "5-8 semanas",

            imageAlt:
                "Sistema de reportes empresariales interactivos con filtros y exportación Excel",

            target:
                "Empresas y equipos que necesitan analizar información operativa o comercial mediante reportes interactivos y exportar los resultados para su gestión.",

            support:
                "45 días soporte post-entrega",

            useCases: [
                "Reportes empresariales",
                "Reportes comerciales",
                "Reportes financieros",
                "Análisis operativo",
                "Exportación Excel",
                "Reportes administrativos",
                "Análisis de datos",
                "Indicadores empresariales",
            ],

            includes: [
                "Reportes interactivos",
                "Tablas de datos",
                "Filtros dinámicos",
                "Búsqueda de información",
                "Ordenamiento de datos",
                "Agregación de información",
                "Exportación Excel",
                "Exportación PDF",
                "Plantillas de reportes",
                "Indicadores",
                "Diseño responsive",
                "Estructura reutilizable",
            ],

            notIncludes: [
                "Business Intelligence empresarial completo",
                "Data Warehouse",
                "Machine Learning",
                "ETL empresarial avanzado",
                "Infraestructura Big Data",
                "Analítica predictiva avanzada",
            ],

            features: [
                "Interactive Reports",
                "Excel Export",
                "PDF Export",
                "Data Filtering",
                "Data Tables",
                "Dynamic Aggregation",
                "Report Templates",
                "Searchable Data",
                "Sorting",
                "Business Metrics",
                "Responsive Design",
            ],

            deliverables: [
                "Sistema de reportes empresariales",
                "Reportes interactivos",
                "Filtros de información",
                "Tablas de datos",
                "Exportación Excel",
                "Exportación PDF",
                "Plantillas de reportes",
                "Indicadores empresariales",
                "Código fuente",
                "Documentación técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Información interactiva",

                    description:
                        "Permite explorar información mediante filtros, búsquedas, ordenamiento y estructuras dinámicas.",
                },

                {
                    title: "Exportación flexible",

                    description:
                        "Los resultados pueden exportarse en formatos como Excel y PDF para facilitar su distribución y análisis.",
                },

                {
                    title: "Análisis centralizado",

                    description:
                        "Los equipos pueden consultar diferentes indicadores y conjuntos de datos desde una misma plataforma.",
                },

                {
                    title: "Reportes reutilizables",

                    description:
                        "Las plantillas permiten construir diferentes reportes utilizando estructuras comunes y reutilizables.",
                },
            ],

            process: [
                {
                    title: "Definición de indicadores",

                    description:
                        "Identificamos los datos, métricas, filtros y estructuras necesarias para los reportes.",
                },

                {
                    title: "Construcción de reportes",

                    description:
                        "Desarrollamos las tablas, filtros, búsquedas y estructuras interactivas de análisis.",
                },

                {
                    title: "Exportaciones",

                    description:
                        "Implementamos la generación de archivos Excel y PDF a partir de los datos seleccionados.",
                },

                {
                    title: "Validación",

                    description:
                        "Probamos filtros, cálculos, exportaciones, tablas y diferentes escenarios de información.",
                },
            ],

            faq: [
                {
                    question: "¿Qué son Business Reports?",

                    answer:
                        "Son reportes interactivos orientados a analizar información empresarial y facilitar la consulta de indicadores y datos.", 
                },

                {
                    question: "¿Puede exportar a Excel?",

                    answer:
                        "Sí. El sistema contempla exportación de los resultados a archivos Excel.",
                },

                {
                    question: "¿Incluye filtros?",

                    answer:
                        "Sí. Los reportes pueden incorporar filtros para explorar diferentes conjuntos de información.",
                },

                {
                    question: "¿También puede generar PDF?",

                    answer:
                        "Sí. Los resultados pueden prepararse para exportación en formato PDF.",
                },
            ],
        },

        en: {
            name: "Business Reports",

            title: "Business Reports",

            level: "🟠 Advanced",

            category: "Reporting & Document Generation",

            description:
                "Interactive business reporting system with data filtering, visualization, and Excel and PDF export capabilities.",

            time: "5-8 weeks",

            imageAlt:
                "Interactive business reporting system with filters and Excel export",

            target:
                "Businesses and teams that need to analyze operational or commercial information through interactive reports and export results for further management.",

            support:
                "45 days post-delivery support",

            useCases: [
                "Business reports",
                "Sales reports",
                "Financial reports",
                "Operational analysis",
                "Excel export",
                "Administrative reports",
                "Data analysis",
                "Business indicators",
            ],

            includes: [
                "Interactive reports",
                "Data tables",
                "Dynamic filters",
                "Information search",
                "Data sorting",
                "Data aggregation",
                "Excel export",
                "PDF export",
                "Report templates",
                "Business indicators",
                "Responsive design",
                "Reusable architecture",
            ],

            notIncludes: [
                "Complete enterprise business intelligence",
                "Data warehouse",
                "Machine learning",
                "Advanced enterprise ETL",
                "Big Data infrastructure",
                "Advanced predictive analytics",
            ],

            features: [
                "Interactive Reports",
                "Excel Export",
                "PDF Export",
                "Data Filtering",
                "Data Tables",
                "Dynamic Aggregation",
                "Report Templates",
                "Searchable Data",
                "Sorting",
                "Business Metrics",
                "Responsive Design",
            ],

            deliverables: [
                "Business reporting system",
                "Interactive reports",
                "Data filters",
                "Data tables",
                "Excel export",
                "PDF export",
                "Report templates",
                "Business indicators",
                "Source code",
                "Technical documentation",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Interactive Information",

                    description:
                        "Allows users to explore information through filters, searches, sorting, and dynamic structures.",
                },

                {
                    title: "Flexible Export",

                    description:
                        "Results can be exported to formats such as Excel and PDF for distribution and analysis.",
                },

                {
                    title: "Centralized Analysis",

                    description:
                        "Teams can access different indicators and datasets from a single platform.",
                },

                {
                    title: "Reusable Reports",

                    description:
                        "Templates make it possible to build different reports using common reusable structures.",
                },
            ],

            process: [
                {
                    title: "Indicator Definition",

                    description:
                        "We identify the data, metrics, filters, and structures required for the reports.",
                },

                {
                    title: "Report Development",

                    description:
                        "We build interactive tables, filters, searches, and analytical structures.",
                },

                {
                    title: "Exports",

                    description:
                        "We implement Excel and PDF file generation from selected report data.",
                },

                {
                    title: "Validation",

                    description:
                        "We test filters, calculations, exports, tables, and different data scenarios.",
                },
            ],

            faq: [
                {
                    question: "What are Business Reports?",

                    answer:
                        "They are interactive reports designed to analyze business information and facilitate access to indicators and datasets.",
                },

                {
                    question: "Can it export to Excel?",

                    answer:
                        "Yes. The system supports exporting report results to Excel files.",
                },

                {
                    question: "Does it include filters?",

                    answer:
                        "Yes. Reports can include filters for exploring different information sets.",
                },

                {
                    question: "Can it also generate PDF?",

                    answer:
                        "Yes. Report results can also be prepared for PDF export.",
                },
            ],
        },

        pt: {
            name: "Business Reports",

            title: "Relatórios Empresariais",

            level: "🟠 Avançado",

            category: "Relatórios e Geração de Documentos",

            description:
                "Sistema de relatórios empresariais interativos com filtros de informações, visualização de dados e exportação para Excel e PDF.",

            time: "5-8 semanas",

            imageAlt:
                "Sistema de relatórios empresariais interativos com filtros e exportação Excel",

            target:
                "Empresas e equipes que precisam analisar informações operacionais ou comerciais por meio de relatórios interativos e exportar resultados para gestão.",

            support:
                "45 dias de suporte pós-entrega",

            useCases: [
                "Relatórios empresariais",
                "Relatórios comerciais",
                "Relatórios financeiros",
                "Análise operacional",
                "Exportação Excel",
                "Relatórios administrativos",
                "Análise de dados",
                "Indicadores empresariais",
            ],

            includes: [
                "Relatórios interativos",
                "Tabelas de dados",
                "Filtros dinâmicos",
                "Pesquisa de informações",
                "Ordenação de dados",
                "Agregação de informações",
                "Exportação Excel",
                "Exportação PDF",
                "Modelos de relatórios",
                "Indicadores",
                "Design responsivo",
                "Estrutura reutilizável",
            ],

            notIncludes: [
                "Business Intelligence empresarial completo",
                "Data Warehouse",
                "Machine Learning",
                "ETL empresarial avançado",
                "Infraestrutura Big Data",
                "Análise preditiva avançada",
            ],

            features: [
                "Interactive Reports",
                "Excel Export",
                "PDF Export",
                "Data Filtering",
                "Data Tables",
                "Dynamic Aggregation",
                "Report Templates",
                "Searchable Data",
                "Sorting",
                "Business Metrics",
                "Responsive Design",
            ],

            deliverables: [
                "Sistema de relatórios empresariais",
                "Relatórios interativos",
                "Filtros de informações",
                "Tabelas de dados",
                "Exportação Excel",
                "Exportação PDF",
                "Modelos de relatórios",
                "Indicadores empresariais",
                "Código-fonte",
                "Documentação técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Informação interativa",

                    description:
                        "Permite explorar informações por meio de filtros, pesquisas, ordenação e estruturas dinâmicas.",
                },

                {
                    title: "Exportação flexível",

                    description:
                        "Os resultados podem ser exportados para formatos como Excel e PDF para facilitar sua distribuição e análise.",
                },

                {
                    title: "Análise centralizada",

                    description:
                        "As equipes podem consultar diferentes indicadores e conjuntos de dados em uma única plataforma.",
                },

                {
                    title: "Relatórios reutilizáveis",

                    description:
                        "Os modelos permitem criar diferentes relatórios utilizando estruturas comuns e reutilizáveis.",
                },
            ],

            process: [
                {
                    title: "Definição de indicadores",

                    description:
                        "Identificamos dados, métricas, filtros e estruturas necessárias para os relatórios.",
                },

                {
                    title: "Construção dos relatórios",

                    description:
                        "Desenvolvemos tabelas, filtros, pesquisas e estruturas interativas de análise.",
                },

                {
                    title: "Exportações",

                    description:
                        "Implementamos a geração de arquivos Excel e PDF a partir dos dados selecionados.",
                },

                {
                    title: "Validação",

                    description:
                        "Testamos filtros, cálculos, exportações, tabelas e diferentes cenários de informação.",
                },
            ],

            faq: [
                {
                    question: "O que são Business Reports?",

                    answer:
                        "São relatórios interativos destinados a analisar informações empresariais e facilitar a consulta de indicadores e dados.",
                },

                {
                    question: "Pode exportar para Excel?",

                    answer:
                        "Sim. O sistema permite exportar os resultados dos relatórios para arquivos Excel.",
                },

                {
                    question: "Inclui filtros?",

                    answer:
                        "Sim. Os relatórios podem incorporar filtros para explorar diferentes conjuntos de informações.",
                },

                {
                    question: "Também pode gerar PDF?",

                    answer:
                        "Sim. Os resultados também podem ser preparados para exportação em formato PDF.",
                },
            ],
        },
    },
};