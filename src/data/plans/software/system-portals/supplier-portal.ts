import type {
    ServicePlan,
} from "@/types/plan.types";

export const supplierPortal: ServicePlan = {
    core: {
        // ────────────────────────────────────
        // Identidad
        // ────────────────────────────────────

        id: "PRTL-003",

        slug: "supplier-portal",

        // ────────────────────────────────────
        // Comercial
        // ────────────────────────────────────

        complexity: "⭐⭐⭐⭐⭐ (5/5)",

        price: "$2,500 - $4,500 USD",

        pricingType: "fixed",

        automationLevel: "high",

        // ────────────────────────────────────
        // Técnico
        // ────────────────────────────────────

        stack: [
            "Next.js",
            "NestJS",
            "TypeScript",
            "Prisma",
            "PostgreSQL",
            "Cloud Storage",
        ],

        technologies: [
            "Next.js",
            "NestJS",
            "TypeScript",
            "Prisma ORM",
            "PostgreSQL",
            "Cloud Storage",
            "CSV Processing",
            "File Validation",
            "Purchase Order Management",
            "Role-based Access",
            "Audit Logs",
            "REST API",
        ],

        integrations: [
            "Cloud Storage",
            "CSV Processing",
            "ERP APIs",
        ],

        // ────────────────────────────────────
        // Multimedia
        // ────────────────────────────────────

        heroImage:
            "/images/services/software/hero/hero-supplier-portal.png",

        image:
            "/images/services/software/hero/hero-supplier-portal.png",
    },

    translations: {
        es: {
            name: "Portal de Proveedores",

            title:
                "Portal de Proveedores",

            level: "🔴 Avanzado",

            category:
                "Portales de Sistemas",

            description:
                "Portal empresarial para proveedores con carga masiva de datos mediante CSV, validación de múltiples archivos, gestión documental y seguimiento del estado de órdenes de compra.",

            time: "9-13 semanas",

            imageAlt:
                "Portal de proveedores con carga CSV, validación de archivos y órdenes de compra",

            target:
                "Empresas y organizaciones que necesitan conectar proveedores con sus procesos internos mediante un portal seguro para intercambio de información, documentos, archivos y seguimiento de órdenes de compra.",

            support:
                "60 días soporte post-entrega",

            useCases: [
                "Gestión de proveedores",
                "Órdenes de compra",
                "Carga masiva de datos",
                "Procesamiento CSV",
                "Intercambio documental",
                "Procesos de abastecimiento",
                "Gestión de compras",
                "Portales empresariales",
            ],

            includes: [
                "Portal de proveedores",
                "Autenticación segura",
                "Gestión de perfiles",
                "Carga masiva CSV",
                "Validación de archivos",
                "Carga de múltiples archivos",
                "Control de documentos",
                "Órdenes de compra",
                "Estados de órdenes",
                "Seguimiento de pedidos",
                "Control de acceso",
                "Registros de auditoría",
                "Almacenamiento en la nube",
                "Panel administrativo",
                "Diseño responsive",
            ],

            notIncludes: [
                "ERP completo",
                "Sistema contable empresarial",
                "Automatización completa de compras",
                "Integraciones ERP no contempladas",
                "Aplicaciones móviles nativas",
            ],

            features: [
                "Supplier Portal",
                "Bulk CSV Upload",
                "CSV Data Validation",
                "Multi-file Validation Gates",
                "Purchase Order Management",
                "Purchase Order Status",
                "Document Management",
                "Secure File Pipelines",
                "Role-based Access",
                "Audit Logs",
                "Cloud Storage",
                "Prisma ORM",
                "REST API",
                "Responsive Design",
            ],

            deliverables: [
                "Portal de proveedores publicado",
                "Sistema de autenticación",
                "Gestión de perfiles",
                "Sistema de carga CSV",
                "Validación de archivos",
                "Gestión documental",
                "Sistema de órdenes de compra",
                "Seguimiento de estados",
                "Registros de auditoría",
                "Código fuente",
                "Base de datos configurada",
                "Documentación técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Intercambio estructurado de información",

                    description:
                        "Permite centralizar el intercambio de datos y documentos entre la empresa y sus proveedores mediante un portal controlado.",
                },

                {
                    title:
                        "Carga masiva",

                    description:
                        "Facilita la incorporación de grandes cantidades de información mediante archivos CSV y procesos estructurados de validación.",
                },

                {
                    title:
                        "Validación de archivos",

                    description:
                        "Los procesos de validación permiten comprobar diferentes archivos antes de incorporarlos al sistema.",
                },

                {
                    title:
                        "Seguimiento de órdenes",

                    description:
                        "Permite consultar y controlar los diferentes estados de las órdenes de compra desde un espacio centralizado.",
                },

                {
                    title:
                        "Trazabilidad",

                    description:
                        "Los registros de auditoría permiten mantener información sobre determinadas acciones realizadas dentro del portal.",
                },
            ],

            process: [
                {
                    title:
                        "Arquitectura de proveedores",

                    description:
                        "Definimos proveedores, usuarios, documentos, archivos, órdenes de compra, estados y reglas de acceso.",
                },

                {
                    title:
                        "Desarrollo del portal",

                    description:
                        "Construimos la plataforma utilizando Next.js, NestJS, TypeScript, Prisma y PostgreSQL.",
                },

                {
                    title:
                        "Carga y validación de datos",

                    description:
                        "Implementamos los procesos de carga masiva mediante CSV y las validaciones necesarias para controlar los archivos recibidos.",
                },

                {
                    title:
                        "Gestión de órdenes",

                    description:
                        "Construimos las estructuras para consultar órdenes de compra y realizar seguimiento de sus diferentes estados.",
                },

                {
                    title:
                        "Auditoría y pruebas",

                    description:
                        "Validamos archivos, permisos, órdenes, documentos y registros de actividad antes de publicar el portal.",
                },
            ],

            faq: [
                {
                    question:
                        "¿Puede manejar múltiples proveedores?",

                    answer:
                        "Sí. El portal está diseñado para gestionar diferentes proveedores y separar la información asociada a cada cuenta.",
                },

                {
                    question:
                        "¿Permite cargar archivos CSV?",

                    answer:
                        "Sí. El plan incluye estructuras para realizar cargas masivas de información mediante archivos CSV.",
                },

                {
                    question:
                        "¿Valida los archivos antes de procesarlos?",

                    answer:
                        "Sí. El sistema contempla procesos de validación para comprobar los archivos antes de incorporarlos a la plataforma.",
                },

                {
                    question:
                        "¿Puede gestionar órdenes de compra?",

                    answer:
                        "Sí. El portal permite consultar órdenes de compra y realizar seguimiento de sus diferentes estados.",
                },

                {
                    question:
                        "¿Incluye integración con un ERP?",

                    answer:
                        "El portal puede prepararse para integrarse con sistemas ERP mediante APIs, pero las integraciones específicas dependerán del proyecto.",
                },

                {
                    question:
                        "¿Tiene registros de auditoría?",

                    answer:
                        "Sí. El sistema contempla estructuras de auditoría para registrar determinadas acciones realizadas dentro del portal.",
                },
            ],
        },
        en: {
            name: "Supplier Portal",

            title:
                "Supplier Portal",

            level: "🔴 Advanced",

            category:
                "System Portals",

            description:
                "Enterprise supplier portal with bulk CSV data uploads, multi-file validation, document management, and purchase order status tracking.",

            time: "9-13 weeks",

            imageAlt:
                "Supplier portal with CSV uploads, file validation, and purchase orders",

            target:
                "Companies and organizations that need to connect suppliers with their internal processes through a secure portal for exchanging information, documents, files, and tracking purchase orders.",

            support:
                "60 days post-delivery support",

            useCases: [
                "Supplier management",
                "Purchase orders",
                "Bulk data uploads",
                "CSV processing",
                "Document exchange",
                "Procurement processes",
                "Purchase management",
                "Enterprise portals",
            ],

            includes: [
                "Supplier portal",
                "Secure authentication",
                "Profile management",
                "Bulk CSV upload",
                "File validation",
                "Multi-file upload",
                "Document management",
                "Purchase orders",
                "Order statuses",
                "Order tracking",
                "Access control",
                "Audit logs",
                "Cloud storage",
                "Administrative dashboard",
                "Responsive design",
            ],

            notIncludes: [
                "Complete ERP",
                "Enterprise accounting system",
                "Complete purchasing automation",
                "Unspecified ERP integrations",
                "Native mobile applications",
            ],

            features: [
                "Supplier Portal",
                "Bulk CSV Upload",
                "CSV Data Validation",
                "Multi-file Validation Gates",
                "Purchase Order Management",
                "Purchase Order Status",
                "Document Management",
                "Secure File Pipelines",
                "Role-based Access",
                "Audit Logs",
                "Cloud Storage",
                "Prisma ORM",
                "REST API",
                "Responsive Design",
            ],

            deliverables: [
                "Published supplier portal",
                "Authentication system",
                "Profile management",
                "CSV upload system",
                "File validation",
                "Document management",
                "Purchase order system",
                "Status tracking",
                "Audit logs",
                "Source code",
                "Configured database",
                "Technical documentation",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Structured information exchange",

                    description:
                        "Allows data and document exchange between the company and its suppliers to be centralized through a controlled portal.",
                },

                {
                    title:
                        "Bulk uploads",

                    description:
                        "Facilitates the incorporation of large amounts of information through CSV files and structured validation processes.",
                },

                {
                    title:
                        "File validation",

                    description:
                        "Validation processes allow different files to be checked before they are incorporated into the system.",
                },

                {
                    title:
                        "Order tracking",

                    description:
                        "Allows users to view and manage the different statuses of purchase orders from a centralized space.",
                },

                {
                    title:
                        "Traceability",

                    description:
                        "Audit logs help maintain information about specific actions performed within the portal.",
                },
            ],

            process: [
                {
                    title:
                        "Supplier architecture",

                    description:
                        "We define suppliers, users, documents, files, purchase orders, statuses, and access rules.",
                },

                {
                    title:
                        "Portal development",

                    description:
                        "We build the platform using Next.js, NestJS, TypeScript, Prisma, and PostgreSQL.",
                },

                {
                    title:
                        "Data upload and validation",

                    description:
                        "We implement bulk upload processes using CSV files and the necessary validations to control received files.",
                },

                {
                    title:
                        "Order management",

                    description:
                        "We build structures for viewing purchase orders and tracking their different statuses.",
                },

                {
                    title:
                        "Auditing and testing",

                    description:
                        "We validate files, permissions, orders, documents, and activity logs before publishing the portal.",
                },
            ],

            faq: [
                {
                    question:
                        "Can it manage multiple suppliers?",

                    answer:
                        "Yes. The portal is designed to manage different suppliers and separate the information associated with each account.",
                },

                {
                    question:
                        "Does it support CSV file uploads?",

                    answer:
                        "Yes. The plan includes structures for performing bulk information uploads through CSV files.",
                },

                {
                    question:
                        "Does it validate files before processing them?",

                    answer:
                        "Yes. The system includes validation processes to check files before incorporating them into the platform.",
                },

                {
                    question:
                        "Can it manage purchase orders?",

                    answer:
                        "Yes. The portal allows users to view purchase orders and track their different statuses.",
                },

                {
                    question:
                        "Does it include ERP integration?",

                    answer:
                        "The portal can be prepared to integrate with ERP systems through APIs, but specific integrations will depend on the project.",
                },

                {
                    question:
                        "Does it include audit logs?",

                    answer:
                        "Yes. The system includes audit structures for recording specific actions performed within the portal.",
                },
            ],
        },
        pt: {
            name: "Portal de Fornecedores",

            title:
                "Portal de Fornecedores",

            level: "🔴 Avançado",

            category:
                "Portais de Sistemas",

            description:
                "Portal empresarial para fornecedores com upload em massa de dados por meio de CSV, validação de múltiplos arquivos, gerenciamento de documentos e acompanhamento do status de pedidos de compra.",

            time: "9-13 semanas",

            imageAlt:
                "Portal de fornecedores com upload de CSV, validação de arquivos e pedidos de compra",

            target:
                "Empresas e organizações que precisam conectar fornecedores aos seus processos internos por meio de um portal seguro para troca de informações, documentos, arquivos e acompanhamento de pedidos de compra.",

            support:
                "60 dias de suporte pós-entrega",

            useCases: [
                "Gestão de fornecedores",
                "Pedidos de compra",
                "Upload em massa de dados",
                "Processamento de CSV",
                "Intercâmbio de documentos",
                "Processos de abastecimento",
                "Gestão de compras",
                "Portais empresariais",
            ],

            includes: [
                "Portal de fornecedores",
                "Autenticação segura",
                "Gestão de perfis",
                "Upload em massa de CSV",
                "Validação de arquivos",
                "Upload de múltiplos arquivos",
                "Gestão de documentos",
                "Pedidos de compra",
                "Status dos pedidos",
                "Acompanhamento de pedidos",
                "Controle de acesso",
                "Registros de auditoria",
                "Armazenamento em nuvem",
                "Painel administrativo",
                "Design responsivo",
            ],

            notIncludes: [
                "ERP completo",
                "Sistema contábil empresarial",
                "Automação completa de compras",
                "Integrações com ERP não contempladas",
                "Aplicativos móveis nativos",
            ],

            features: [
                "Supplier Portal",
                "Bulk CSV Upload",
                "CSV Data Validation",
                "Multi-file Validation Gates",
                "Purchase Order Management",
                "Purchase Order Status",
                "Document Management",
                "Secure File Pipelines",
                "Role-based Access",
                "Audit Logs",
                "Cloud Storage",
                "Prisma ORM",
                "REST API",
                "Responsive Design",
            ],

            deliverables: [
                "Portal de fornecedores publicado",
                "Sistema de autenticação",
                "Gestão de perfis",
                "Sistema de upload de CSV",
                "Validação de arquivos",
                "Gestão de documentos",
                "Sistema de pedidos de compra",
                "Acompanhamento de status",
                "Registros de auditoria",
                "Código-fonte",
                "Banco de dados configurado",
                "Documentação técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Intercâmbio estruturado de informações",

                    description:
                        "Permite centralizar a troca de dados e documentos entre a empresa e seus fornecedores por meio de um portal controlado.",
                },

                {
                    title:
                        "Upload em massa",

                    description:
                        "Facilita a incorporação de grandes quantidades de informações por meio de arquivos CSV e processos estruturados de validação.",
                },

                {
                    title:
                        "Validação de arquivos",

                    description:
                        "Os processos de validação permitem verificar diferentes arquivos antes de incorporá-los ao sistema.",
                },

                {
                    title:
                        "Acompanhamento de pedidos",

                    description:
                        "Permite consultar e controlar os diferentes status dos pedidos de compra a partir de um espaço centralizado.",
                },

                {
                    title:
                        "Rastreabilidade",

                    description:
                        "Os registros de auditoria permitem manter informações sobre determinadas ações realizadas dentro do portal.",
                },
            ],

            process: [
                {
                    title:
                        "Arquitetura de fornecedores",

                    description:
                        "Definimos fornecedores, usuários, documentos, arquivos, pedidos de compra, status e regras de acesso.",
                },

                {
                    title:
                        "Desenvolvimento do portal",

                    description:
                        "Construímos a plataforma utilizando Next.js, NestJS, TypeScript, Prisma e PostgreSQL.",
                },

                {
                    title:
                        "Upload e validação de dados",

                    description:
                        "Implementamos os processos de upload em massa por meio de arquivos CSV e as validações necessárias para controlar os arquivos recebidos.",
                },

                {
                    title:
                        "Gestão de pedidos",

                    description:
                        "Construímos as estruturas para consultar pedidos de compra e acompanhar seus diferentes status.",
                },

                {
                    title:
                        "Auditoria e testes",

                    description:
                        "Validamos arquivos, permissões, pedidos, documentos e registros de atividades antes de publicar o portal.",
                },
            ],

            faq: [
                {
                    question:
                        "O sistema pode gerenciar vários fornecedores?",

                    answer:
                        "Sim. O portal foi projetado para gerenciar diferentes fornecedores e separar as informações associadas a cada conta.",
                },

                {
                    question:
                        "Permite fazer upload de arquivos CSV?",

                    answer:
                        "Sim. O plano inclui estruturas para realizar uploads em massa de informações por meio de arquivos CSV.",
                },

                {
                    question:
                        "Os arquivos são validados antes do processamento?",

                    answer:
                        "Sim. O sistema contempla processos de validação para verificar os arquivos antes de incorporá-los à plataforma.",
                },

                {
                    question:
                        "Pode gerenciar pedidos de compra?",

                    answer:
                        "Sim. O portal permite consultar pedidos de compra e acompanhar seus diferentes status.",
                },

                {
                    question:
                        "Inclui integração com um ERP?",

                    answer:
                        "O portal pode ser preparado para integrar-se a sistemas ERP por meio de APIs, mas as integrações específicas dependerão do projeto.",
                },

                {
                    question:
                        "Possui registros de auditoria?",

                    answer:
                        "Sim. O sistema contempla estruturas de auditoria para registrar determinadas ações realizadas dentro do portal.",
                },
            ],
        },
    },
};