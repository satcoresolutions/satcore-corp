import type {
    ServicePlan,
} from "@/types/plan.types";

export const customerPortal: ServicePlan = {
    core: {
        // ────────────────────────────────────
        // Identidad
        // ────────────────────────────────────

        id: "PRTL-001",

        slug: "customer-portal",

        // ────────────────────────────────────
        // Comercial
        // ────────────────────────────────────

        complexity: "⭐⭐⭐⭐ (4/5)",

        price: "$1,750 - $3,000 USD",

        pricingType: "fixed",

        automationLevel: "medium",

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
            "Secure File Pipelines",
            "Audit Log Schemas",
            "Role-based Access",
            "REST API",
        ],

        integrations: [
            "Cloud Storage",
            "Email Services",
        ],

        // ────────────────────────────────────
        // Multimedia
        // ────────────────────────────────────

        heroImage:
            "/images/services/software/hero/hero-customer-portal.png",

        image:
            "/images/services/software/hero/hero-customer-portal.png",
    },

    translations: {
        es: {
            name: "Portal de Clientes",

            title:
                "Portal de Clientes",

            level: "🟠 Avanzado",

            category:
                "Portales de Sistemas",

            description:
                "Portal privado para clientes con gestión de perfiles, consulta y descarga de facturas, historial de tickets y acceso seguro a información y documentos personales.",

            time: "7-10 semanas",

            imageAlt:
                "Portal de clientes con facturas, tickets y gestión de perfil",

            target:
                "Empresas y organizaciones que necesitan ofrecer a sus clientes un espacio privado para consultar información, descargar documentos, gestionar su perfil y realizar seguimiento de solicitudes.",

            support:
                "45 días soporte post-entrega",

            useCases: [
                "Portales de clientes",
                "Gestión de facturas",
                "Soporte al cliente",
                "Historial de tickets",
                "Gestión de perfiles",
                "Descarga de documentos",
                "Servicios empresariales",
            ],

            includes: [
                "Portal privado de clientes",
                "Inicio de sesión seguro",
                "Gestión de perfil",
                "Descarga de facturas",
                "Historial de facturación",
                "Historial de tickets",
                "Seguimiento de solicitudes",
                "Gestión de documentos",
                "Almacenamiento en la nube",
                "Control de acceso",
                "Registro de actividad",
                "Base de datos relacional",
                "Diseño responsive",
            ],

            notIncludes: [
                "Sistema completo de facturación",
                "Chat en tiempo real",
                "Aplicación móvil nativa",
                "Integraciones empresariales no contempladas",
                "Automatizaciones complejas de soporte",
            ],

            features: [
                "Customer Portal",
                "Secure Authentication",
                "Invoice Downloading",
                "Ticket History",
                "Profile Management",
                "Document Management",
                "Secure File Pipelines",
                "Access Control",
                "Audit Logs",
                "Cloud Storage",
                "Prisma ORM",
                "REST API",
                "Responsive Design",
            ],

            deliverables: [
                "Portal de clientes publicado",
                "Sistema de autenticación",
                "Gestión de perfiles",
                "Sistema de descarga de facturas",
                "Historial de tickets",
                "Gestión de documentos",
                "Almacenamiento configurado",
                "Código fuente",
                "Base de datos configurada",
                "Documentación técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Acceso centralizado",

                    description:
                        "Permite que cada cliente consulte su información, documentos, facturas y solicitudes desde un único espacio privado.",
                },

                {
                    title:
                        "Información personalizada",

                    description:
                        "Cada usuario puede acceder únicamente a la información asociada a su cuenta mediante capas de acceso controladas.",
                },

                {
                    title:
                        "Gestión documental",

                    description:
                        "Facilita la consulta y descarga segura de facturas y otros documentos almacenados en la plataforma.",
                },

                {
                    title:
                        "Seguimiento de solicitudes",

                    description:
                        "Permite consultar el historial y estado de tickets o solicitudes realizadas al equipo de soporte.",
                },
            ],

            process: [
                {
                    title:
                        "Arquitectura del portal",

                    description:
                        "Definimos usuarios, perfiles, documentos, facturas, tickets y reglas de acceso para cada cliente.",
                },

                {
                    title:
                        "Desarrollo del sistema",

                    description:
                        "Construimos el portal utilizando Next.js, NestJS, TypeScript, Prisma y PostgreSQL.",
                },

                {
                    title:
                        "Gestión documental",

                    description:
                        "Implementamos los flujos seguros para almacenar, consultar y descargar archivos mediante almacenamiento en la nube.",
                },

                {
                    title:
                        "Seguridad y auditoría",

                    description:
                        "Configuramos las capas de acceso y estructuras de registro de actividad para proteger la información del cliente.",
                },

                {
                    title:
                        "Pruebas y lanzamiento",

                    description:
                        "Validamos autenticación, permisos, documentos, facturas, tickets y navegación antes de publicar el portal.",
                },
            ],

            faq: [
                {
                    question:
                        "¿Qué puede consultar un cliente desde el portal?",

                    answer:
                        "El cliente puede consultar información de su perfil, facturas, documentos y el historial de tickets o solicitudes disponibles para su cuenta.",
                },

                {
                    question:
                        "¿Puede descargar sus facturas?",

                    answer:
                        "Sí. El portal contempla un sistema para consultar y descargar las facturas asociadas al cliente.",
                },

                {
                    question:
                        "¿Los clientes pueden modificar su información?",

                    answer:
                        "Sí. El portal puede incluir gestión y actualización de la información personal o empresarial permitida por el sistema.",
                },

                {
                    question:
                        "¿Puede almacenar documentos?",

                    answer:
                        "Sí. El sistema puede integrarse con almacenamiento en la nube para gestionar documentos y archivos de forma segura.",
                },

                {
                    question:
                        "¿Cada cliente puede ver la información de otros clientes?",

                    answer:
                        "No. El sistema utiliza capas de control de acceso para limitar la información disponible según la cuenta autenticada.",
                },
            ],
        },
        en: {
            name: "Customer Portal",

            title:
                "Customer Portal",

            level: "🟠 Advanced",

            category:
                "System Portals",

            description:
                "Private customer portal with profile management, invoice viewing and downloading, ticket history, and secure access to personal information and documents.",

            time: "7-10 weeks",

            imageAlt:
                "Customer portal with invoices, tickets, and profile management",

            target:
                "Companies and organizations that need to provide their customers with a private space to access information, download documents, manage their profiles, and track support requests.",

            support:
                "45 days post-delivery support",

            useCases: [
                "Customer portals",
                "Invoice management",
                "Customer support",
                "Ticket history",
                "Profile management",
                "Document downloading",
                "Business services",
            ],

            includes: [
                "Private customer portal",
                "Secure login",
                "Profile management",
                "Invoice downloading",
                "Billing history",
                "Ticket history",
                "Request tracking",
                "Document management",
                "Cloud storage",
                "Access control",
                "Activity logging",
                "Relational database",
                "Responsive design",
            ],

            notIncludes: [
                "Complete billing system",
                "Real-time chat",
                "Native mobile application",
                "Unspecified enterprise integrations",
                "Complex support automation",
            ],

            features: [
                "Customer Portal",
                "Secure Authentication",
                "Invoice Downloading",
                "Ticket History",
                "Profile Management",
                "Document Management",
                "Secure File Pipelines",
                "Access Control",
                "Audit Logs",
                "Cloud Storage",
                "Prisma ORM",
                "REST API",
                "Responsive Design",
            ],

            deliverables: [
                "Published customer portal",
                "Authentication system",
                "Profile management",
                "Invoice download system",
                "Ticket history",
                "Document management",
                "Configured cloud storage",
                "Source code",
                "Configured database",
                "Technical documentation",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Centralized access",

                    description:
                        "Allows each customer to access their information, documents, invoices, and requests from a single private space.",
                },

                {
                    title:
                        "Personalized information",

                    description:
                        "Each user can access only the information associated with their account through controlled access layers.",
                },

                {
                    title:
                        "Document management",

                    description:
                        "Facilitates the secure viewing and downloading of invoices and other documents stored on the platform.",
                },

                {
                    title:
                        "Request tracking",

                    description:
                        "Allows customers to view the history and status of tickets or requests submitted to the support team.",
                },
            ],

            process: [
                {
                    title:
                        "Portal architecture",

                    description:
                        "We define users, profiles, documents, invoices, tickets, and access rules for each customer.",
                },

                {
                    title:
                        "System development",

                    description:
                        "We build the portal using Next.js, NestJS, TypeScript, Prisma, and PostgreSQL.",
                },

                {
                    title:
                        "Document management",

                    description:
                        "We implement secure workflows for storing, viewing, and downloading files through cloud storage.",
                },

                {
                    title:
                        "Security and auditing",

                    description:
                        "We configure access layers and activity logging structures to protect customer information.",
                },

                {
                    title:
                        "Testing and launch",

                    description:
                        "We validate authentication, permissions, documents, invoices, tickets, and navigation before publishing the portal.",
                },
            ],

            faq: [
                {
                    question:
                        "What can a customer access from the portal?",

                    answer:
                        "Customers can access their profile information, invoices, documents, and the ticket or request history available for their account.",
                },

                {
                    question:
                        "Can customers download their invoices?",

                    answer:
                        "Yes. The portal includes a system for viewing and downloading invoices associated with the customer.",
                },

                {
                    question:
                        "Can customers update their information?",

                    answer:
                        "Yes. The portal can include management and updating of personal or business information allowed by the system.",
                },

                {
                    question:
                        "Can the portal store documents?",

                    answer:
                        "Yes. The system can integrate with cloud storage to securely manage documents and files.",
                },

                {
                    question:
                        "Can one customer see another customer's information?",

                    answer:
                        "No. The system uses access control layers to restrict the available information according to the authenticated account.",
                },
            ],
        },
        pt: {
            name: "Portal do Cliente",

            title:
                "Portal do Cliente",

            level: "🟠 Avançado",

            category:
                "Portais de Sistemas",

            description:
                "Portal privado para clientes com gerenciamento de perfis, consulta e download de faturas, histórico de tickets e acesso seguro a informações e documentos pessoais.",

            time: "7-10 semanas",

            imageAlt:
                "Portal do cliente com faturas, tickets e gerenciamento de perfil",

            target:
                "Empresas e organizações que precisam oferecer aos seus clientes um espaço privado para consultar informações, baixar documentos, gerenciar seu perfil e acompanhar solicitações de suporte.",

            support:
                "45 dias de suporte pós-entrega",

            useCases: [
                "Portais de clientes",
                "Gerenciamento de faturas",
                "Suporte ao cliente",
                "Histórico de tickets",
                "Gerenciamento de perfis",
                "Download de documentos",
                "Serviços empresariais",
            ],

            includes: [
                "Portal privado de clientes",
                "Login seguro",
                "Gerenciamento de perfil",
                "Download de faturas",
                "Histórico de faturamento",
                "Histórico de tickets",
                "Acompanhamento de solicitações",
                "Gerenciamento de documentos",
                "Armazenamento em nuvem",
                "Controle de acesso",
                "Registro de atividades",
                "Banco de dados relacional",
                "Design responsivo",
            ],

            notIncludes: [
                "Sistema completo de faturamento",
                "Chat em tempo real",
                "Aplicativo móvel nativo",
                "Integrações empresariais não contempladas",
                "Automações complexas de suporte",
            ],

            features: [
                "Customer Portal",
                "Secure Authentication",
                "Invoice Downloading",
                "Ticket History",
                "Profile Management",
                "Document Management",
                "Secure File Pipelines",
                "Access Control",
                "Audit Logs",
                "Cloud Storage",
                "Prisma ORM",
                "REST API",
                "Responsive Design",
            ],

            deliverables: [
                "Portal de clientes publicado",
                "Sistema de autenticação",
                "Gerenciamento de perfis",
                "Sistema de download de faturas",
                "Histórico de tickets",
                "Gerenciamento de documentos",
                "Armazenamento em nuvem configurado",
                "Código-fonte",
                "Banco de dados configurado",
                "Documentação técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Acesso centralizado",

                    description:
                        "Permite que cada cliente consulte suas informações, documentos, faturas e solicitações a partir de um único espaço privado.",
                },

                {
                    title:
                        "Informações personalizadas",

                    description:
                        "Cada usuário pode acessar somente as informações associadas à sua conta por meio de camadas de acesso controladas.",
                },

                {
                    title:
                        "Gerenciamento de documentos",

                    description:
                        "Facilita a consulta e o download seguro de faturas e outros documentos armazenados na plataforma.",
                },

                {
                    title:
                        "Acompanhamento de solicitações",

                    description:
                        "Permite consultar o histórico e o status de tickets ou solicitações enviadas à equipe de suporte.",
                },
            ],

            process: [
                {
                    title:
                        "Arquitetura do portal",

                    description:
                        "Definimos usuários, perfis, documentos, faturas, tickets e regras de acesso para cada cliente.",
                },

                {
                    title:
                        "Desenvolvimento do sistema",

                    description:
                        "Construímos o portal utilizando Next.js, NestJS, TypeScript, Prisma e PostgreSQL.",
                },

                {
                    title:
                        "Gerenciamento de documentos",

                    description:
                        "Implementamos fluxos seguros para armazenar, consultar e baixar arquivos por meio de armazenamento em nuvem.",
                },

                {
                    title:
                        "Segurança e auditoria",

                    description:
                        "Configuramos as camadas de acesso e estruturas de registro de atividades para proteger as informações dos clientes.",
                },

                {
                    title:
                        "Testes e lançamento",

                    description:
                        "Validamos autenticação, permissões, documentos, faturas, tickets e navegação antes de publicar o portal.",
                },
            ],

            faq: [
                {
                    question:
                        "O que um cliente pode consultar no portal?",

                    answer:
                        "O cliente pode consultar informações do seu perfil, faturas, documentos e o histórico de tickets ou solicitações disponíveis para sua conta.",
                },

                {
                    question:
                        "Os clientes podem baixar suas faturas?",

                    answer:
                        "Sim. O portal inclui um sistema para consultar e baixar as faturas associadas ao cliente.",
                },

                {
                    question:
                        "Os clientes podem atualizar suas informações?",

                    answer:
                        "Sim. O portal pode incluir o gerenciamento e a atualização das informações pessoais ou empresariais permitidas pelo sistema.",
                },

                {
                    question:
                        "O portal pode armazenar documentos?",

                    answer:
                        "Sim. O sistema pode ser integrado a serviços de armazenamento em nuvem para gerenciar documentos e arquivos com segurança.",
                },

                {
                    question:
                        "Um cliente pode visualizar as informações de outro cliente?",

                    answer:
                        "Não. O sistema utiliza camadas de controle de acesso para limitar as informações disponíveis de acordo com a conta autenticada.",
                },
            ],
        },
    },
};