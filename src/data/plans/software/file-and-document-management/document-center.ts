import type { ServicePlan } from "@/types/plan.types";

export const documentCenter: ServicePlan = {
    core: {
        // ────────────────────────────────────
        // Identidad
        // ────────────────────────────────────

        id: "FILE-001",

        slug: "document-center",

        // ────────────────────────────────────
        // Comercial
        // ────────────────────────────────────

        complexity: "⭐⭐⭐ (3/5)",

        price: "$900 - $1,500 USD",

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
            "Document Categorization",
            "File Versioning",
            "Access Permissions",
            "Download Management",
            "Document Metadata",
            "Searchable Repository",
            "Type-safe Components",
        ],

        integrations: [
            "Cloud Storage",
            "Upload APIs",
            "Authentication Services",
            "Database Services",
        ],

        // ────────────────────────────────────
        // Multimedia
        // ────────────────────────────────────

        heroImage:
            "/images/services/software/hero/hero-document-center.png",

        image:
            "/images/services/software/hero/hero-document-center.png",
    },

    translations: {
        // ═════════════════════════════════════
        // ESPAÑOL
        // ═════════════════════════════════════

        es: {
            name: "Centro de Documentos",

            title: "Centro de Gestión Documental",

            level: "🟡 Intermedio",

            category: "Gestión de Archivos y Documentos",

            description:
                "Centro documental para almacenar, organizar y administrar archivos mediante categorías, historial de versiones, permisos de descarga y estructuras de acceso controlado.",

            time: "4-6 semanas",

            imageAlt:
                "Centro de documentos con almacenamiento categorizado, historial de versiones y permisos",

            target:
                "Empresas, equipos de trabajo y organizaciones que necesitan centralizar documentos, organizar archivos y controlar el acceso a información digital.",

            support:
                "45 días soporte post-entrega",

            useCases: [
                "Gestión documental",
                "Archivos empresariales",
                "Documentos internos",
                "Bibliotecas digitales",
                "Repositorios administrativos",
                "Gestión de contratos",
                "Documentación de proyectos",
                "Archivos de equipos",
            ],

            includes: [
                "Centro documental",
                "Almacenamiento categorizado",
                "Organización de archivos",
                "Historial de versiones",
                "Permisos de descarga",
                "Control de acceso",
                "Metadatos de documentos",
                "Gestión de archivos",
                "Repositorio searchable",
                "Base de datos Prisma",
                "Integración con Cloud Storage",
                "Diseño responsive",
                "Next.js",
                "TypeScript",
            ],

            notIncludes: [
                "Gestión documental empresarial avanzada",
                "Firma digital certificada",
                "OCR avanzado",
                "Clasificación automática mediante IA",
                "Migración masiva de documentos",
                "Infraestructura de almacenamiento empresarial personalizada",
            ],

            features: [
                "Document Categorization",
                "File Versioning",
                "Access Permissions",
                "Download Permissions",
                "Document Metadata",
                "File Management",
                "Searchable Repository",
                "Version History",
                "Access Control",
                "Responsive Design",
            ],

            deliverables: [
                "Centro documental publicado",
                "Sistema de categorías",
                "Almacenamiento de documentos",
                "Historial de versiones",
                "Control de permisos",
                "Gestión de descargas",
                "Repositorio documental",
                "Base de datos",
                "Código fuente",
                "Documentación técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Documentos centralizados",

                    description:
                        "Permite reunir documentos y archivos en un único espacio organizado y accesible.",
                },

                {
                    title: "Control de versiones",

                    description:
                        "El historial permite conservar diferentes versiones de un documento y facilitar su seguimiento.",
                },

                {
                    title: "Acceso controlado",

                    description:
                        "Los permisos permiten definir quién puede consultar o descargar determinados documentos.",
                },

                {
                    title: "Organización documental",

                    description:
                        "Las categorías y metadatos facilitan la clasificación y localización de los archivos.",
                },
            ],

            process: [
                {
                    title: "Arquitectura documental",

                    description:
                        "Definimos categorías, tipos de documentos, metadatos, permisos y estructuras de almacenamiento.",
                },

                {
                    title: "Desarrollo del repositorio",

                    description:
                        "Construimos la interfaz para cargar, organizar, consultar y administrar documentos.",
                },

                {
                    title: "Versionado y permisos",

                    description:
                        "Implementamos historial de versiones y reglas de acceso para proteger los documentos.",
                },

                {
                    title: "Integración de almacenamiento",

                    description:
                        "Conectamos el sistema con servicios de almacenamiento en la nube y APIs de carga de archivos.",
                },

                {
                    title: "Pruebas y lanzamiento",

                    description:
                        "Validamos cargas, descargas, permisos, versiones, categorías y navegación antes del lanzamiento.",
                },
            ],

            faq: [
                {
                    question: "¿Qué es un Document Center?",

                    answer:
                        "Es un sistema centralizado para almacenar, organizar y administrar documentos digitales dentro de una estructura controlada.",
                },

                {
                    question: "¿Incluye historial de versiones?",

                    answer:
                        "Sí. El sistema contempla estructuras para conservar y consultar diferentes versiones de los documentos.",
                },

                {
                    question: "¿Se pueden controlar las descargas?",

                    answer:
                        "Sí. Es posible establecer permisos para determinar qué usuarios pueden acceder o descargar determinados archivos.",
                },

                {
                    question: "¿Puede utilizar almacenamiento en la nube?",

                    answer:
                        "Sí. El sistema puede integrarse con servicios de Cloud Storage mediante APIs de carga y administración de archivos.",
                },
            ],
        },

        // ═════════════════════════════════════
        // ENGLISH
        // ═════════════════════════════════════

        en: {
            name: "Document Center",

            title: "Document Management Center",

            level: "🟡 Intermediate",

            category: "File & Document Management",

            description:
                "Document center for storing, organizing, and managing files through categories, version history, download permissions, and controlled access structures.",

            time: "4-6 weeks",

            imageAlt:
                "Document center with categorized storage, version history, and permissions",

            target:
                "Businesses, teams, and organizations that need to centralize documents, organize files, and control access to digital information.",

            support:
                "45 days post-delivery support",

            useCases: [
                "Document management",
                "Business files",
                "Internal documents",
                "Digital libraries",
                "Administrative repositories",
                "Contract management",
                "Project documentation",
                "Team files",
            ],

            includes: [
                "Document center",
                "Categorized storage",
                "File organization",
                "Version history",
                "Download permissions",
                "Access control",
                "Document metadata",
                "File management",
                "Searchable repository",
                "Prisma database",
                "Cloud Storage integration",
                "Responsive design",
                "Next.js",
                "TypeScript",
            ],

            notIncludes: [
                "Advanced enterprise document management",
                "Certified digital signatures",
                "Advanced OCR",
                "AI-powered automatic classification",
                "Mass document migration",
                "Custom enterprise storage infrastructure",
            ],

            features: [
                "Document Categorization",
                "File Versioning",
                "Access Permissions",
                "Download Permissions",
                "Document Metadata",
                "File Management",
                "Searchable Repository",
                "Version History",
                "Access Control",
                "Responsive Design",
            ],

            deliverables: [
                "Published document center",
                "Category system",
                "Document storage",
                "Version history",
                "Permission management",
                "Download management",
                "Document repository",
                "Database",
                "Source code",
                "Technical documentation",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Centralized Documents",

                    description:
                        "Provides a single organized space for storing and accessing documents and files.",
                },

                {
                    title: "Version Control",

                    description:
                        "Version history makes it possible to preserve and track different document versions.",
                },

                {
                    title: "Controlled Access",

                    description:
                        "Permissions determine which users can access or download specific documents.",
                },

                {
                    title: "Document Organization",

                    description:
                        "Categories and metadata make files easier to classify and locate.",
                },
            ],

            process: [
                {
                    title: "Document Architecture",

                    description:
                        "We define categories, document types, metadata, permissions, and storage structures.",
                },

                {
                    title: "Repository Development",

                    description:
                        "We build the interface for uploading, organizing, viewing, and managing documents.",
                },

                {
                    title: "Versioning and Permissions",

                    description:
                        "We implement version history and access rules to protect documents.",
                },

                {
                    title: "Storage Integration",

                    description:
                        "We connect the system to cloud storage services and file upload APIs.",
                },

                {
                    title: "Testing and Launch",

                    description:
                        "We validate uploads, downloads, permissions, versions, categories, and navigation before launch.",
                },
            ],

            faq: [
                {
                    question: "What is a Document Center?",

                    answer:
                        "It is a centralized system for storing, organizing, and managing digital documents within a controlled structure.",
                },

                {
                    question: "Does it include version history?",

                    answer:
                        "Yes. The system provides structures for preserving and reviewing different document versions.",
                },

                {
                    question: "Can downloads be controlled?",

                    answer:
                        "Yes. Permissions can determine which users can access or download specific files.",
                },

                {
                    question: "Can it use cloud storage?",

                    answer:
                        "Yes. The system can integrate with cloud storage services through file upload and management APIs.",
                },
            ],
        },

        // ═════════════════════════════════════
        // PORTUGUÊS
        // ═════════════════════════════════════

        pt: {
            name: "Central de Documentos",

            title: "Central de Gestão Documental",

            level: "🟡 Intermediário",

            category: "Gestão de Arquivos e Documentos",

            description:
                "Central documental para armazenar, organizar e administrar arquivos por meio de categorias, histórico de versões, permissões de download e estruturas de acesso controlado.",

            time: "4-6 semanas",

            imageAlt:
                "Central de documentos com armazenamento categorizado, histórico de versões e permissões",

            target:
                "Empresas, equipes e organizações que precisam centralizar documentos, organizar arquivos e controlar o acesso às informações digitais.",

            support:
                "45 dias de suporte pós-entrega",

            useCases: [
                "Gestão documental",
                "Arquivos empresariais",
                "Documentos internos",
                "Bibliotecas digitais",
                "Repositórios administrativos",
                "Gestão de contratos",
                "Documentação de projetos",
                "Arquivos de equipes",
            ],

            includes: [
                "Central documental",
                "Armazenamento categorizado",
                "Organização de arquivos",
                "Histórico de versões",
                "Permissões de download",
                "Controle de acesso",
                "Metadados de documentos",
                "Gerenciamento de arquivos",
                "Repositório pesquisável",
                "Banco de dados Prisma",
                "Integração com Cloud Storage",
                "Design responsivo",
                "Next.js",
                "TypeScript",
            ],

            notIncludes: [
                "Gestão documental empresarial avançada",
                "Assinaturas digitais certificadas",
                "OCR avançado",
                "Classificação automática com IA",
                "Migração massiva de documentos",
                "Infraestrutura personalizada de armazenamento empresarial",
            ],

            features: [
                "Document Categorization",
                "File Versioning",
                "Access Permissions",
                "Download Permissions",
                "Document Metadata",
                "File Management",
                "Searchable Repository",
                "Version History",
                "Access Control",
                "Responsive Design",
            ],

            deliverables: [
                "Central documental publicada",
                "Sistema de categorias",
                "Armazenamento de documentos",
                "Histórico de versões",
                "Controle de permissões",
                "Gerenciamento de downloads",
                "Repositório documental",
                "Banco de dados",
                "Código-fonte",
                "Documentação técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Documentos centralizados",

                    description:
                        "Permite reunir documentos e arquivos em um único espaço organizado e acessível.",
                },

                {
                    title: "Controle de versões",

                    description:
                        "O histórico permite conservar diferentes versões de um documento e facilitar seu acompanhamento.",
                },

                {
                    title: "Acesso controlado",

                    description:
                        "As permissões permitem definir quais usuários podem consultar ou baixar determinados documentos.",
                },

                {
                    title: "Organização documental",

                    description:
                        "Categorias e metadados facilitam a classificação e localização dos arquivos.",
                },
            ],

            process: [
                {
                    title: "Arquitetura documental",

                    description:
                        "Definimos categorias, tipos de documentos, metadados, permissões e estruturas de armazenamento.",
                },

                {
                    title: "Desenvolvimento do repositório",

                    description:
                        "Construímos a interface para carregar, organizar, consultar e administrar documentos.",
                },

                {
                    title: "Versionamento e permissões",

                    description:
                        "Implementamos histórico de versões e regras de acesso para proteger os documentos.",
                },

                {
                    title: "Integração de armazenamento",

                    description:
                        "Conectamos o sistema a serviços de armazenamento em nuvem e APIs de upload de arquivos.",
                },

                {
                    title: "Testes e lançamento",

                    description:
                        "Validamos uploads, downloads, permissões, versões, categorias e navegação antes do lançamento.",
                },
            ],

            faq: [
                {
                    question: "O que é um Document Center?",

                    answer:
                        "É um sistema centralizado para armazenar, organizar e administrar documentos digitais dentro de uma estrutura controlada.",
                },

                {
                    question: "Inclui histórico de versões?",

                    answer:
                        "Sim. O sistema contempla estruturas para conservar e consultar diferentes versões dos documentos.",
                },

                {
                    question: "É possível controlar os downloads?",

                    answer:
                        "Sim. É possível estabelecer permissões para determinar quais usuários podem acessar ou baixar determinados arquivos.",
                },

                {
                    question: "Pode utilizar armazenamento em nuvem?",

                    answer:
                        "Sim. O sistema pode ser integrado a serviços de Cloud Storage por meio de APIs de upload e gerenciamento de arquivos.",
                },
            ],
        },
    },
};