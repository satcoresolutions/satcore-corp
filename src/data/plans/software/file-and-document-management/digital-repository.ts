import type { ServicePlan } from "@/types/plan.types";

export const digitalRepository: ServicePlan = {
    core: {
        // ────────────────────────────────────
        // Identidad
        // ────────────────────────────────────

        id: "FILE-003",

        slug: "digital-repository",

        // ────────────────────────────────────
        // Comercial
        // ────────────────────────────────────

        complexity: "⭐⭐⭐⭐⭐ (5/5)",

        price: "$1,750 - $2,750 USD",

        pricingType: "fixed",

        automationLevel: "high",

        // ────────────────────────────────────
        // Técnico
        // ────────────────────────────────────

        stack: [
            "Next.js",
            "TypeScript",
            "Prisma",
            "Cloud Storage",
            "Upload APIs",
        ],

        technologies: [
            "Next.js",
            "TypeScript",
            "Prisma",
            "Cloud Storage",
            "Upload APIs",
            "Enterprise File Organization",
            "Advanced Search Indexing",
            "Document Metadata",
            "Access Permissions",
            "File Versioning",
            "Audit History",
            "Repository Management",
            "Search Filters",
            "Activity Tracking",
            "Type-safe Components",
        ],

        integrations: [
            "Cloud Storage",
            "Upload APIs",
            "Authentication Services",
            "Search Services",
            "Database Services",
            "Audit Services",
        ],

        // ────────────────────────────────────
        // Multimedia
        // ────────────────────────────────────

        heroImage:
            "/images/services/software/hero/hero-digital-repository.png",

        image:
            "/images/services/software/hero/hero-digital-repository.png",
    },

    translations: {
        es: {
            name: "Repositorio Digital",

            title: "Repositorio Digital Empresarial",

            level: "🔴 Avanzado",

            category: "Gestión de Archivos y Documentos",

            description:
                "Repositorio digital avanzado para organizar grandes volúmenes de archivos, indexar información para búsquedas, controlar permisos y conservar un historial de auditoría de las operaciones documentales.",

            time: "7-10 semanas",

            imageAlt:
                "Repositorio digital empresarial con búsqueda avanzada, organización de archivos e historial de auditoría",

            target:
                "Empresas e instituciones que necesitan administrar grandes cantidades de documentos mediante estructuras organizadas, búsquedas avanzadas, permisos y trazabilidad.",

            support:
                "60 días soporte post-entrega",

            useCases: [
                "Repositorios empresariales",
                "Bibliotecas digitales",
                "Gestión documental avanzada",
                "Archivos institucionales",
                "Bases documentales",
                "Repositorios de proyectos",
                "Documentación corporativa",
                "Historial de archivos",
                "Auditoría documental",
            ],

            includes: [
                "Repositorio digital",
                "Organización avanzada de archivos",
                "Categorías y metadatos",
                "Indexación de búsqueda",
                "Búsqueda avanzada",
                "Filtros documentales",
                "Control de permisos",
                "Versionado de archivos",
                "Historial de auditoría",
                "Registro de actividad",
                "Cloud Storage",
                "Base de datos Prisma",
                "Diseño responsive",
                "Next.js",
                "TypeScript",
            ],

            notIncludes: [
                "Infraestructura de almacenamiento ilimitada",
                "OCR empresarial avanzado",
                "Clasificación documental mediante IA",
                "Sistema ECM empresarial completo",
                "Migración documental masiva incluida",
                "Integraciones corporativas ilimitadas",
            ],

            features: [
                "Enterprise File Organization",
                "Advanced Search Indexing",
                "Document Metadata",
                "Access Permissions",
                "File Versioning",
                "Audit History",
                "Repository Management",
                "Search Filters",
                "Activity Tracking",
                "Cloud Storage",
                "Access Control",
            ],

            deliverables: [
                "Repositorio digital publicado",
                "Sistema de organización documental",
                "Indexación de búsqueda",
                "Búsqueda avanzada",
                "Filtros documentales",
                "Control de permisos",
                "Versionado de archivos",
                "Historial de auditoría",
                "Registro de actividad",
                "Código fuente",
                "Documentación técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Organización empresarial",

                    description:
                        "Permite estructurar grandes cantidades de documentos mediante categorías, metadatos y jerarquías de información.",
                },

                {
                    title: "Búsqueda avanzada",

                    description:
                        "La indexación permite localizar documentos utilizando diferentes criterios y filtros.",
                },

                {
                    title: "Trazabilidad documental",

                    description:
                        "El historial de auditoría permite registrar acciones relevantes realizadas sobre los documentos y el repositorio.",
                },

                {
                    title: "Control de acceso",

                    description:
                        "Los permisos permiten establecer diferentes niveles de acceso sobre archivos y recursos documentales.",
                },
            ],

            process: [
                {
                    title: "Arquitectura del repositorio",

                    description:
                        "Diseñamos categorías, jerarquías, metadatos, permisos y estructuras de almacenamiento.",
                },

                {
                    title: "Sistema de indexación",

                    description:
                        "Implementamos estructuras de indexación y búsqueda para facilitar la localización de documentos.",
                },

                {
                    title: "Control y versionado",

                    description:
                        "Configuramos permisos, versiones y reglas para administrar los documentos de forma controlada.",
                },

                {
                    title: "Auditoría documental",

                    description:
                        "Implementamos registros de actividad para conservar información sobre las operaciones realizadas dentro del repositorio.",
                },

                {
                    title: "Pruebas y lanzamiento",

                    description:
                        "Validamos búsquedas, filtros, permisos, versiones, registros y diferentes escenarios de administración documental.",
                },
            ],

            faq: [
                {
                    question: "¿Qué es un Digital Repository?",

                    answer:
                        "Es un repositorio digital diseñado para organizar, buscar, administrar y conservar grandes cantidades de archivos y documentos.",
                },

                {
                    question: "¿Incluye búsqueda avanzada?",

                    answer:
                        "Sí. El sistema contempla indexación y filtros para facilitar la localización de documentos.",
                },

                {
                    question: "¿Registra actividad documental?",

                    answer:
                        "Sí. El repositorio puede mantener un historial de auditoría de las operaciones relevantes realizadas sobre los archivos.",
                },

                {
                    question: "¿Permite administrar diferentes versiones?",

                    answer:
                        "Sí. El sistema contempla estructuras de versionado para conservar el historial de cambios de los documentos.",
                },
            ],
        },

        en: {
            name: "Digital Repository",

            title: "Enterprise Digital Repository",

            level: "🔴 Advanced",

            category: "File & Document Management",

            description:
                "Advanced digital repository for organizing large volumes of files, indexing information for search, controlling permissions, and maintaining document audit history.",

            time: "7-10 weeks",

            imageAlt:
                "Enterprise digital repository with advanced search, file organization, and audit history",

            target:
                "Businesses and institutions that need to manage large amounts of documents through organized structures, advanced search, permissions, and traceability.",

            support:
                "60 days post-delivery support",

            useCases: [
                "Enterprise repositories",
                "Digital libraries",
                "Advanced document management",
                "Institutional archives",
                "Document databases",
                "Project repositories",
                "Corporate documentation",
                "File history",
                "Document auditing",
            ],

            includes: [
                "Digital repository",
                "Advanced file organization",
                "Categories and metadata",
                "Search indexing",
                "Advanced search",
                "Document filters",
                "Access permissions",
                "File versioning",
                "Audit history",
                "Activity logging",
                "Cloud Storage",
                "Prisma database",
                "Responsive design",
                "Next.js",
                "TypeScript",
            ],

            notIncludes: [
                "Unlimited storage infrastructure",
                "Advanced enterprise OCR",
                "AI-powered document classification",
                "Complete enterprise ECM system",
                "Mass document migration",
                "Unlimited corporate integrations",
            ],

            features: [
                "Enterprise File Organization",
                "Advanced Search Indexing",
                "Document Metadata",
                "Access Permissions",
                "File Versioning",
                "Audit History",
                "Repository Management",
                "Search Filters",
                "Activity Tracking",
                "Cloud Storage",
                "Access Control",
            ],

            deliverables: [
                "Published digital repository",
                "Document organization system",
                "Search indexing",
                "Advanced search",
                "Document filters",
                "Permission management",
                "File versioning",
                "Audit history",
                "Activity logging",
                "Source code",
                "Technical documentation",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Enterprise Organization",

                    description:
                        "Allows large volumes of documents to be structured through categories, metadata, and information hierarchies.",
                },

                {
                    title: "Advanced Search",

                    description:
                        "Indexing allows documents to be located using different criteria and filters.",
                },

                {
                    title: "Document Traceability",

                    description:
                        "Audit history records relevant actions performed on documents and repository resources.",
                },

                {
                    title: "Access Control",

                    description:
                        "Permissions establish different access levels for files and document resources.",
                },
            ],

            process: [
                {
                    title: "Repository Architecture",

                    description:
                        "We design categories, hierarchies, metadata, permissions, and storage structures.",
                },

                {
                    title: "Indexing System",

                    description:
                        "We implement indexing and search structures to make documents easier to locate.",
                },

                {
                    title: "Control and Versioning",

                    description:
                        "We configure permissions, versions, and rules for controlled document management.",
                },

                {
                    title: "Document Auditing",

                    description:
                        "We implement activity logs to preserve information about operations performed within the repository.",
                },

                {
                    title: "Testing and Launch",

                    description:
                        "We validate search, filters, permissions, versions, logs, and different document management scenarios.",
                },
            ],

            faq: [
                {
                    question: "What is a Digital Repository?",

                    answer:
                        "It is a digital repository designed to organize, search, manage, and preserve large amounts of files and documents.",
                },

                {
                    question: "Does it include advanced search?",

                    answer:
                        "Yes. The system provides indexing and filters to make documents easier to locate.",
                },

                {
                    question: "Does it track document activity?",

                    answer:
                        "Yes. The repository can maintain an audit history of relevant operations performed on files.",
                },

                {
                    question: "Can it manage different versions?",

                    answer:
                        "Yes. The system provides versioning structures for preserving document change history.",
                },
            ],
        },

        pt: {
            name: "Repositório Digital",

            title: "Repositório Digital Empresarial",

            level: "🔴 Avançado",

            category: "Gestão de Arquivos e Documentos",

            description:
                "Repositório digital avançado para organizar grandes volumes de arquivos, indexar informações para pesquisa, controlar permissões e manter um histórico de auditoria das operações documentais.",

            time: "7-10 semanas",

            imageAlt:
                "Repositório digital empresarial com pesquisa avançada, organização de arquivos e histórico de auditoria",

            target:
                "Empresas e instituições que precisam administrar grandes quantidades de documentos por meio de estruturas organizadas, pesquisas avançadas, permissões e rastreabilidade.",

            support:
                "60 dias de suporte pós-entrega",

            useCases: [
                "Repositórios empresariais",
                "Bibliotecas digitais",
                "Gestão documental avançada",
                "Arquivos institucionais",
                "Bases documentais",
                "Repositórios de projetos",
                "Documentação corporativa",
                "Histórico de arquivos",
                "Auditoria documental",
            ],

            includes: [
                "Repositório digital",
                "Organização avançada de arquivos",
                "Categorias e metadados",
                "Indexação de pesquisa",
                "Pesquisa avançada",
                "Filtros documentais",
                "Permissões de acesso",
                "Versionamento de arquivos",
                "Histórico de auditoria",
                "Registro de atividades",
                "Cloud Storage",
                "Banco de dados Prisma",
                "Design responsivo",
                "Next.js",
                "TypeScript",
            ],

            notIncludes: [
                "Infraestrutura de armazenamento ilimitado",
                "OCR empresarial avançado",
                "Classificação documental com IA",
                "Sistema ECM empresarial completo",
                "Migração documental em massa",
                "Integrações corporativas ilimitadas",
            ],

            features: [
                "Enterprise File Organization",
                "Advanced Search Indexing",
                "Document Metadata",
                "Access Permissions",
                "File Versioning",
                "Audit History",
                "Repository Management",
                "Search Filters",
                "Activity Tracking",
                "Cloud Storage",
                "Access Control",
            ],

            deliverables: [
                "Repositório digital publicado",
                "Sistema de organização documental",
                "Indexação de pesquisa",
                "Pesquisa avançada",
                "Filtros documentais",
                "Controle de permissões",
                "Versionamento de arquivos",
                "Histórico de auditoria",
                "Registro de atividades",
                "Código-fonte",
                "Documentação técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Organização empresarial",

                    description:
                        "Permite estruturar grandes quantidades de documentos por meio de categorias, metadados e hierarquias de informações.",
                },

                {
                    title: "Pesquisa avançada",

                    description:
                        "A indexação permite localizar documentos utilizando diferentes critérios e filtros.",
                },

                {
                    title: "Rastreabilidade documental",

                    description:
                        "O histórico de auditoria permite registrar ações relevantes realizadas sobre documentos e recursos do repositório.",
                },

                {
                    title: "Controle de acesso",

                    description:
                        "As permissões permitem estabelecer diferentes níveis de acesso sobre arquivos e recursos documentais.",
                },
            ],

            process: [
                {
                    title: "Arquitetura do repositório",

                    description:
                        "Projetamos categorias, hierarquias, metadados, permissões e estruturas de armazenamento.",
                },

                {
                    title: "Sistema de indexação",

                    description:
                        "Implementamos estruturas de indexação e pesquisa para facilitar a localização dos documentos.",
                },

                {
                    title: "Controle e versionamento",

                    description:
                        "Configuramos permissões, versões e regras para administrar documentos de forma controlada.",
                },

                {
                    title: "Auditoria documental",

                    description:
                        "Implementamos registros de atividades para conservar informações sobre as operações realizadas no repositório.",
                },

                {
                    title: "Testes e lançamento",

                    description:
                        "Validamos pesquisas, filtros, permissões, versões, registros e diferentes cenários de gestão documental.",
                },
            ],

            faq: [
                {
                    question: "O que é um Digital Repository?",

                    answer:
                        "É um repositório digital desenvolvido para organizar, pesquisar, administrar e preservar grandes quantidades de arquivos e documentos.",
                },

                {
                    question: "Inclui pesquisa avançada?",

                    answer:
                        "Sim. O sistema contempla indexação e filtros para facilitar a localização dos documentos.",
                },

                {
                    question: "Registra atividades documentais?",

                    answer:
                        "Sim. O repositório pode manter um histórico de auditoria das operações relevantes realizadas sobre os arquivos.",
                },

                {
                    question: "Permite administrar diferentes versões?",

                    answer:
                        "Sim. O sistema contempla estruturas de versionamento para conservar o histórico de alterações dos documentos.",
                },
            ],
        },
    },
};