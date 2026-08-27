import type { ServicePlan } from "@/types/plan.types";

export const secureUploadPortal: ServicePlan = {
    core: {
        // ────────────────────────────────────
        // Identidad
        // ────────────────────────────────────

        id: "FILE-002",

        slug: "secure-upload-portal",

        // ────────────────────────────────────
        // Comercial
        // ────────────────────────────────────

        complexity: "⭐⭐⭐⭐ (4/5)",

        price: "$1,250 - $2,100 USD",

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
            "Authentication",
            "Authenticated Uploads",
            "File Validation",
            "Validation Pipelines",
            "Access Control",
            "Upload Sessions",
            "File Metadata",
            "Secure File Processing",
        ],

        integrations: [
            "Cloud Storage",
            "Upload APIs",
            "Authentication Services",
            "Email Services",
            "Database Services",
        ],

        // ────────────────────────────────────
        // Multimedia
        // ────────────────────────────────────

        heroImage:
            "/images/services/software/hero/hero-secure-upload-portal.png",

        image:
            "/images/services/software/hero/hero-secure-upload-portal.png",
    },

    translations: {
        es: {
            name: "Portal de Carga Segura",

            title: "Portal Seguro de Carga de Archivos",

            level: "🟠 Avanzado",

            category: "Gestión de Archivos y Documentos",

            description:
                "Portal autenticado para recibir archivos de usuarios mediante procesos de validación, control de acceso e integración con servicios de almacenamiento en la nube.",

            time: "5-7 semanas",

            imageAlt:
                "Portal seguro de carga de archivos con autenticación, validación y almacenamiento en la nube",

            target:
                "Empresas, instituciones y equipos que necesitan recibir documentos y archivos de usuarios mediante un portal seguro y controlado.",

            support:
                "45 días soporte post-entrega",

            useCases: [
                "Recepción de documentos",
                "Entrega de archivos",
                "Procesos administrativos",
                "Documentación de clientes",
                "Solicitudes empresariales",
                "Entrega de evidencias",
                "Carga de archivos privados",
                "Procesos de onboarding",
            ],

            includes: [
                "Portal de carga",
                "Autenticación de usuarios",
                "Uploads autenticados",
                "Validación de archivos",
                "Validación mediante pipelines",
                "Control de acceso",
                "Metadatos de archivos",
                "Integración Cloud Storage",
                "Gestión de sesiones",
                "Registro de archivos",
                "Estados de procesamiento",
                "Diseño responsive",
                "Next.js",
                "TypeScript",
                "Prisma",
            ],

            notIncludes: [
                "Almacenamiento ilimitado",
                "Antivirus empresarial dedicado",
                "OCR avanzado",
                "Firma digital certificada",
                "Gestión documental empresarial completa",
                "Migración masiva de archivos",
            ],

            features: [
                "Authenticated Uploads",
                "File Validation",
                "Validation Pipelines",
                "Access Control",
                "Cloud Storage",
                "Upload Sessions",
                "File Metadata",
                "Secure File Processing",
                "Authentication",
                "Upload Management",
            ],

            deliverables: [
                "Portal seguro publicado",
                "Sistema de autenticación",
                "Carga autenticada de archivos",
                "Validación de archivos",
                "Pipelines de validación",
                "Integración con almacenamiento cloud",
                "Gestión de metadatos",
                "Control de acceso",
                "Código fuente",
                "Documentación técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Carga controlada",

                    description:
                        "Permite recibir archivos de usuarios mediante un proceso estructurado y autenticado.",
                },

                {
                    title: "Validación de archivos",

                    description:
                        "Los archivos pueden ser validados antes de ser almacenados o procesados por el sistema.",
                },

                {
                    title: "Almacenamiento escalable",

                    description:
                        "La integración con servicios de almacenamiento en la nube permite separar la aplicación del almacenamiento físico de archivos.",
                },

                {
                    title: "Acceso protegido",

                    description:
                        "La autenticación y los permisos ayudan a controlar quién puede cargar y consultar información.",
                },
            ],

            process: [
                {
                    title: "Diseño del portal",

                    description:
                        "Definimos usuarios, tipos de archivos, reglas de carga, permisos y estados de procesamiento.",
                },

                {
                    title: "Autenticación",

                    description:
                        "Implementamos el acceso autenticado para controlar las operaciones de carga y consulta.",
                },

                {
                    title: "Pipeline de validación",

                    description:
                        "Configuramos validaciones para comprobar los archivos antes de almacenarlos.",
                },

                {
                    title: "Integración Cloud Storage",

                    description:
                        "Conectamos el portal con el servicio de almacenamiento seleccionado mediante APIs de carga.",
                },

                {
                    title: "Pruebas de seguridad",

                    description:
                        "Validamos autenticación, permisos, archivos, errores, sesiones y diferentes escenarios de carga.",
                },
            ],

            faq: [
                {
                    question: "¿Qué es un Secure Upload Portal?",

                    answer:
                        "Es un portal que permite a usuarios autenticados cargar archivos mediante reglas de validación y control de acceso.",
                },

                {
                    question: "¿Los usuarios deben autenticarse?",

                    answer:
                        "Sí. El sistema está diseñado para trabajar con cargas autenticadas y operaciones controladas.",
                },

                {
                    question: "¿Se validan los archivos antes de almacenarlos?",

                    answer:
                        "Sí. El portal contempla pipelines de validación para comprobar las características de los archivos antes de procesarlos.",
                },

                {
                    question: "¿Se integra con almacenamiento cloud?",

                    answer:
                        "Sí. El sistema puede conectarse a servicios de almacenamiento en la nube mediante APIs de carga.",
                },
            ],
        },

        en: {
            name: "Secure Upload Portal",

            title: "Secure File Upload Portal",

            level: "🟠 Advanced",

            category: "File & Document Management",

            description:
                "Authenticated portal for receiving user files through validation processes, access control, and cloud storage integration.",

            time: "5-7 weeks",

            imageAlt:
                "Secure file upload portal with authentication, validation, and cloud storage",

            target:
                "Businesses, institutions, and teams that need to receive documents and files from users through a secure and controlled portal.",

            support:
                "45 days post-delivery support",

            useCases: [
                "Document collection",
                "File delivery",
                "Administrative processes",
                "Customer documentation",
                "Business requests",
                "Evidence submission",
                "Private file uploads",
                "Onboarding processes",
            ],

            includes: [
                "Upload portal",
                "User authentication",
                "Authenticated uploads",
                "File validation",
                "Validation pipelines",
                "Access control",
                "File metadata",
                "Cloud Storage integration",
                "Session management",
                "File records",
                "Processing states",
                "Responsive design",
                "Next.js",
                "TypeScript",
                "Prisma",
            ],

            notIncludes: [
                "Unlimited storage",
                "Dedicated enterprise antivirus",
                "Advanced OCR",
                "Certified digital signatures",
                "Complete enterprise document management",
                "Mass file migration",
            ],

            features: [
                "Authenticated Uploads",
                "File Validation",
                "Validation Pipelines",
                "Access Control",
                "Cloud Storage",
                "Upload Sessions",
                "File Metadata",
                "Secure File Processing",
                "Authentication",
                "Upload Management",
            ],

            deliverables: [
                "Published secure portal",
                "Authentication system",
                "Authenticated file uploads",
                "File validation",
                "Validation pipelines",
                "Cloud storage integration",
                "Metadata management",
                "Access control",
                "Source code",
                "Technical documentation",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Controlled Uploads",

                    description:
                        "Allows files to be received from users through a structured and authenticated process.",
                },

                {
                    title: "File Validation",

                    description:
                        "Files can be validated before being stored or processed by the system.",
                },

                {
                    title: "Scalable Storage",

                    description:
                        "Cloud storage integration separates the application from physical file storage.",
                },

                {
                    title: "Protected Access",

                    description:
                        "Authentication and permissions help control who can upload and access information.",
                },
            ],

            process: [
                {
                    title: "Portal Design",

                    description:
                        "We define users, file types, upload rules, permissions, and processing states.",
                },

                {
                    title: "Authentication",

                    description:
                        "We implement authenticated access to control upload and file management operations.",
                },

                {
                    title: "Validation Pipeline",

                    description:
                        "We configure validations to verify files before storing them.",
                },

                {
                    title: "Cloud Storage Integration",

                    description:
                        "We connect the portal to the selected cloud storage service through upload APIs.",
                },

                {
                    title: "Security Testing",

                    description:
                        "We validate authentication, permissions, files, errors, sessions, and different upload scenarios.",
                },
            ],

            faq: [
                {
                    question: "What is a Secure Upload Portal?",

                    answer:
                        "It is a portal that allows authenticated users to upload files through validation rules and access controls.",
                },

                {
                    question: "Do users need to authenticate?",

                    answer:
                        "Yes. The system is designed to work with authenticated uploads and controlled operations.",
                },

                {
                    question: "Are files validated before storage?",

                    answer:
                        "Yes. The portal provides validation pipelines to verify file characteristics before processing them.",
                },

                {
                    question: "Can it integrate with cloud storage?",

                    answer:
                        "Yes. The system can connect to cloud storage services through upload APIs.",
                },
            ],
        },

        pt: {
            name: "Portal de Upload Seguro",

            title: "Portal Seguro de Upload de Arquivos",

            level: "🟠 Avançado",

            category: "Gestão de Arquivos e Documentos",

            description:
                "Portal autenticado para receber arquivos de usuários por meio de processos de validação, controle de acesso e integração com serviços de armazenamento em nuvem.",

            time: "5-7 semanas",

            imageAlt:
                "Portal seguro de upload de arquivos com autenticação, validação e armazenamento em nuvem",

            target:
                "Empresas, instituições e equipes que precisam receber documentos e arquivos de usuários por meio de um portal seguro e controlado.",

            support:
                "45 dias de suporte pós-entrega",

            useCases: [
                "Recebimento de documentos",
                "Entrega de arquivos",
                "Processos administrativos",
                "Documentação de clientes",
                "Solicitações empresariais",
                "Envio de evidências",
                "Upload de arquivos privados",
                "Processos de onboarding",
            ],

            includes: [
                "Portal de upload",
                "Autenticação de usuários",
                "Uploads autenticados",
                "Validação de arquivos",
                "Pipelines de validação",
                "Controle de acesso",
                "Metadados de arquivos",
                "Integração com Cloud Storage",
                "Gerenciamento de sessões",
                "Registro de arquivos",
                "Estados de processamento",
                "Design responsivo",
                "Next.js",
                "TypeScript",
                "Prisma",
            ],

            notIncludes: [
                "Armazenamento ilimitado",
                "Antivírus empresarial dedicado",
                "OCR avançado",
                "Assinatura digital certificada",
                "Gestão documental empresarial completa",
                "Migração massiva de arquivos",
            ],

            features: [
                "Authenticated Uploads",
                "File Validation",
                "Validation Pipelines",
                "Access Control",
                "Cloud Storage",
                "Upload Sessions",
                "File Metadata",
                "Secure File Processing",
                "Authentication",
                "Upload Management",
            ],

            deliverables: [
                "Portal seguro publicado",
                "Sistema de autenticação",
                "Upload autenticado de arquivos",
                "Validação de arquivos",
                "Pipelines de validação",
                "Integração com armazenamento cloud",
                "Gerenciamento de metadados",
                "Controle de acesso",
                "Código-fonte",
                "Documentação técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Uploads controlados",

                    description:
                        "Permite receber arquivos de usuários por meio de um processo estruturado e autenticado.",
                },

                {
                    title: "Validação de arquivos",

                    description:
                        "Os arquivos podem ser validados antes de serem armazenados ou processados pelo sistema.",
                },

                {
                    title: "Armazenamento escalável",

                    description:
                        "A integração com serviços de armazenamento em nuvem permite separar a aplicação do armazenamento físico dos arquivos.",
                },

                {
                    title: "Acesso protegido",

                    description:
                        "A autenticação e as permissões ajudam a controlar quem pode enviar e consultar informações.",
                },
            ],

            process: [
                {
                    title: "Design do portal",

                    description:
                        "Definimos usuários, tipos de arquivos, regras de upload, permissões e estados de processamento.",
                },

                {
                    title: "Autenticação",

                    description:
                        "Implementamos acesso autenticado para controlar operações de upload e consulta.",
                },

                {
                    title: "Pipeline de validação",

                    description:
                        "Configuramos validações para verificar os arquivos antes de armazená-los.",
                },

                {
                    title: "Integração com Cloud Storage",

                    description:
                        "Conectamos o portal ao serviço de armazenamento em nuvem selecionado por meio de APIs de upload.",
                },

                {
                    title: "Testes de segurança",

                    description:
                        "Validamos autenticação, permissões, arquivos, erros, sessões e diferentes cenários de upload.",
                },
            ],

            faq: [
                {
                    question: "O que é um Secure Upload Portal?",

                    answer:
                        "É um portal que permite que usuários autenticados enviem arquivos por meio de regras de validação e controle de acesso.",
                },

                {
                    question: "Os usuários precisam se autenticar?",

                    answer:
                        "Sim. O sistema foi desenvolvido para trabalhar com uploads autenticados e operações controladas.",
                },

                {
                    question: "Os arquivos são validados antes do armazenamento?",

                    answer:
                        "Sim. O portal contempla pipelines de validação para verificar as características dos arquivos antes do processamento.",
                },

                {
                    question: "Pode integrar com armazenamento em nuvem?",

                    answer:
                        "Sim. O sistema pode se conectar a serviços de armazenamento em nuvem por meio de APIs de upload.",
                },
            ],
        },
    },
};