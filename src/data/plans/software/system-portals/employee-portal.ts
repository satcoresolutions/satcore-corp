import type {
    ServicePlan,
} from "@/types/plan.types";

export const employeePortal: ServicePlan = {
    core: {
        // ────────────────────────────────────
        // Identidad
        // ────────────────────────────────────

        id: "PRTL-002",

        slug: "employee-portal",

        // ────────────────────────────────────
        // Comercial
        // ────────────────────────────────────

        complexity: "⭐⭐⭐⭐ (4/5)",

        price: "$2,100 - $3,750 USD",

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
            "Role-based Access",
            "Audit Logs",
            "Task Management",
            "Time Tracking",
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
            "/images/services/software/hero/hero-employee-portal.png",

        image:
            "/images/services/software/hero/hero-employee-portal.png",
    },

    translations: {
        es: {
            name: "Portal de Empleados",

            title:
                "Portal de Empleados",

            level: "🟠 Avanzado",

            category:
                "Portales de Sistemas",

            description:
                "Portal interno para empleados con registro de horas, acceso a políticas y documentos internos, asignación de tareas y seguimiento de estados dentro de una plataforma administrativa segura.",

            time: "8-11 semanas",

            imageAlt:
                "Portal de empleados con registro de horas, tareas y políticas internas",

            target:
                "Empresas y organizaciones que necesitan centralizar procesos internos, gestionar empleados, registrar jornadas, distribuir tareas y proporcionar acceso controlado a políticas y documentos.",

            support:
                "45 días soporte post-entrega",

            useCases: [
                "Portales internos",
                "Gestión de empleados",
                "Registro de horas",
                "Control de jornadas",
                "Gestión de tareas",
                "Políticas internas",
                "Documentación empresarial",
                "Procesos internos",
            ],

            includes: [
                "Portal de empleados",
                "Autenticación segura",
                "Gestión de perfiles",
                "Registro de horas",
                "Historial de actividad",
                "Centro de políticas internas",
                "Gestión de documentos",
                "Asignación de tareas",
                "Estados de tareas",
                "Control de acceso",
                "Registro de auditoría",
                "Almacenamiento en la nube",
                "Panel administrativo",
                "Diseño responsive",
            ],

            notIncludes: [
                "Sistema completo de nómina",
                "Cálculo fiscal de salarios",
                "Control biométrico de asistencia",
                "Aplicaciones móviles nativas",
                "Infraestructura empresarial IAM completa",
            ],

            features: [
                "Employee Portal",
                "Time Tracking Logs",
                "Internal Policy Center",
                "Task Assignment",
                "Task State Management",
                "Employee Profiles",
                "Document Management",
                "Role-based Access",
                "Audit Logs",
                "Cloud Storage",
                "Prisma ORM",
                "REST API",
                "Responsive Design",
            ],

            deliverables: [
                "Portal de empleados publicado",
                "Sistema de autenticación",
                "Gestión de perfiles",
                "Registro de horas",
                "Centro de políticas internas",
                "Sistema de tareas",
                "Control de estados",
                "Sistema de documentos",
                "Código fuente",
                "Base de datos configurada",
                "Documentación técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Gestión interna centralizada",

                    description:
                        "Permite concentrar información, documentos, tareas y procesos internos en un único portal para empleados.",
                },

                {
                    title:
                        "Registro de actividad",

                    description:
                        "Facilita registrar horas y actividades relacionadas con la jornada o los procesos internos de la organización.",
                },

                {
                    title:
                        "Acceso a políticas",

                    description:
                        "Centraliza políticas, procedimientos y documentos internos para facilitar su consulta por parte de los empleados.",
                },

                {
                    title:
                        "Seguimiento de tareas",

                    description:
                        "Permite asignar tareas y controlar sus diferentes estados desde una estructura organizada.",
                },
            ],

            process: [
                {
                    title:
                        "Diseño del portal interno",

                    description:
                        "Definimos empleados, perfiles, roles, tareas, políticas, documentos y reglas de acceso.",
                },

                {
                    title:
                        "Desarrollo de la plataforma",

                    description:
                        "Construimos el sistema utilizando Next.js, NestJS, TypeScript, Prisma y PostgreSQL.",
                },

                {
                    title:
                        "Gestión de tareas y horarios",

                    description:
                        "Implementamos los módulos de registro de horas, asignación de tareas y seguimiento de estados.",
                },

                {
                    title:
                        "Centro documental",

                    description:
                        "Configuramos el espacio para consultar políticas, procedimientos y documentos internos almacenados de forma segura.",
                },

                {
                    title:
                        "Auditoría y pruebas",

                    description:
                        "Validamos permisos, registros, tareas, documentos y diferentes escenarios de acceso antes del lanzamiento.",
                },
            ],

            faq: [
                {
                    question:
                        "¿Puede registrar las horas de los empleados?",

                    answer:
                        "Sí. El portal contempla estructuras para registrar y consultar las horas o actividades asociadas a los empleados.",
                },

                {
                    question:
                        "¿Incluye un centro de políticas internas?",

                    answer:
                        "Sí. El sistema puede centralizar políticas, procedimientos y documentos internos para que los empleados puedan consultarlos.",
                },

                {
                    question:
                        "¿Puede asignar tareas a empleados?",

                    answer:
                        "Sí. El portal permite asignar tareas y realizar seguimiento de sus diferentes estados.",
                },

                {
                    question:
                        "¿Los empleados tienen diferentes niveles de acceso?",

                    answer:
                        "Sí. El sistema puede establecer diferentes niveles de acceso según los roles definidos para la organización.",
                },

                {
                    question:
                        "¿Incluye nómina?",

                    answer:
                        "No. El portal no incluye un sistema completo de nómina o cálculo fiscal de salarios.",
                },
            ],
        },
        en: {
            name: "Employee Portal",

            title:
                "Employee Portal",

            level: "🟠 Advanced",

            category:
                "System Portals",

            description:
                "Internal employee portal with time tracking, access to internal policies and documents, task assignment, and status tracking within a secure administrative platform.",

            time: "8-11 weeks",

            imageAlt:
                "Employee portal with time tracking, tasks, and internal policies",

            target:
                "Companies and organizations that need to centralize internal processes, manage employees, track working hours, distribute tasks, and provide controlled access to policies and documents.",

            support:
                "45 days post-delivery support",

            useCases: [
                "Internal portals",
                "Employee management",
                "Time tracking",
                "Work schedule tracking",
                "Task management",
                "Internal policies",
                "Business documentation",
                "Internal processes",
            ],

            includes: [
                "Employee portal",
                "Secure authentication",
                "Profile management",
                "Time tracking",
                "Activity history",
                "Internal policy center",
                "Document management",
                "Task assignment",
                "Task statuses",
                "Access control",
                "Audit logging",
                "Cloud storage",
                "Administrative dashboard",
                "Responsive design",
            ],

            notIncludes: [
                "Complete payroll system",
                "Payroll tax calculations",
                "Biometric attendance tracking",
                "Native mobile applications",
                "Complete enterprise IAM infrastructure",
            ],

            features: [
                "Employee Portal",
                "Time Tracking Logs",
                "Internal Policy Center",
                "Task Assignment",
                "Task State Management",
                "Employee Profiles",
                "Document Management",
                "Role-based Access",
                "Audit Logs",
                "Cloud Storage",
                "Prisma ORM",
                "REST API",
                "Responsive Design",
            ],

            deliverables: [
                "Published employee portal",
                "Authentication system",
                "Profile management",
                "Time tracking system",
                "Internal policy center",
                "Task management system",
                "Task status management",
                "Document management system",
                "Source code",
                "Configured database",
                "Technical documentation",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Centralized internal management",

                    description:
                        "Allows information, documents, tasks, and internal processes to be centralized in a single employee portal.",
                },

                {
                    title:
                        "Activity tracking",

                    description:
                        "Facilitates the recording of working hours and activities related to the organization's workday or internal processes.",
                },

                {
                    title:
                        "Policy access",

                    description:
                        "Centralizes policies, procedures, and internal documents to make them easily accessible to employees.",
                },

                {
                    title:
                        "Task tracking",

                    description:
                        "Allows tasks to be assigned and their different statuses to be monitored through an organized structure.",
                },
            ],

            process: [
                {
                    title:
                        "Internal portal design",

                    description:
                        "We define employees, profiles, roles, tasks, policies, documents, and access rules.",
                },

                {
                    title:
                        "Platform development",

                    description:
                        "We build the system using Next.js, NestJS, TypeScript, Prisma, and PostgreSQL.",
                },

                {
                    title:
                        "Task and time management",

                    description:
                        "We implement the time tracking, task assignment, and status tracking modules.",
                },

                {
                    title:
                        "Document center",

                    description:
                        "We configure the space for securely accessing policies, procedures, and internal documents.",
                },

                {
                    title:
                        "Auditing and testing",

                    description:
                        "We validate permissions, logs, tasks, documents, and different access scenarios before launch.",
                },
            ],

            faq: [
                {
                    question:
                        "Can it track employee working hours?",

                    answer:
                        "Yes. The portal includes structures for recording and viewing working hours or activities associated with employees.",
                },

                {
                    question:
                        "Does it include an internal policy center?",

                    answer:
                        "Yes. The system can centralize internal policies, procedures, and documents so employees can access them.",
                },

                {
                    question:
                        "Can tasks be assigned to employees?",

                    answer:
                        "Yes. The portal allows tasks to be assigned and their different statuses to be tracked.",
                },

                {
                    question:
                        "Do employees have different access levels?",

                    answer:
                        "Yes. The system can establish different access levels based on the roles defined for the organization.",
                },

                {
                    question:
                        "Does it include payroll?",

                    answer:
                        "No. The portal does not include a complete payroll system or payroll tax calculation.",
                },
            ],
        },
        pt: {
            name: "Portal de Funcionários",

            title:
                "Portal de Funcionários",

            level: "🟠 Avançado",

            category:
                "Portais de Sistemas",

            description:
                "Portal interno para funcionários com registro de horas, acesso a políticas e documentos internos, atribuição de tarefas e acompanhamento de status dentro de uma plataforma administrativa segura.",

            time: "8-11 semanas",

            imageAlt:
                "Portal de funcionários com registro de horas, tarefas e políticas internas",

            target:
                "Empresas e organizações que precisam centralizar processos internos, gerenciar funcionários, registrar jornadas de trabalho, distribuir tarefas e fornecer acesso controlado a políticas e documentos.",

            support:
                "45 dias de suporte pós-entrega",

            useCases: [
                "Portais internos",
                "Gestão de funcionários",
                "Registro de horas",
                "Controle de jornadas",
                "Gestão de tarefas",
                "Políticas internas",
                "Documentação empresarial",
                "Processos internos",
            ],

            includes: [
                "Portal de funcionários",
                "Autenticação segura",
                "Gestão de perfis",
                "Registro de horas",
                "Histórico de atividades",
                "Central de políticas internas",
                "Gestão de documentos",
                "Atribuição de tarefas",
                "Status das tarefas",
                "Controle de acesso",
                "Registro de auditoria",
                "Armazenamento em nuvem",
                "Painel administrativo",
                "Design responsivo",
            ],

            notIncludes: [
                "Sistema completo de folha de pagamento",
                "Cálculo de impostos sobre salários",
                "Controle biométrico de presença",
                "Aplicativos móveis nativos",
                "Infraestrutura IAM empresarial completa",
            ],

            features: [
                "Employee Portal",
                "Time Tracking Logs",
                "Internal Policy Center",
                "Task Assignment",
                "Task State Management",
                "Employee Profiles",
                "Document Management",
                "Role-based Access",
                "Audit Logs",
                "Cloud Storage",
                "Prisma ORM",
                "REST API",
                "Responsive Design",
            ],

            deliverables: [
                "Portal de funcionários publicado",
                "Sistema de autenticação",
                "Gestão de perfis",
                "Sistema de registro de horas",
                "Central de políticas internas",
                "Sistema de gerenciamento de tarefas",
                "Gerenciamento de status das tarefas",
                "Sistema de gerenciamento de documentos",
                "Código-fonte",
                "Banco de dados configurado",
                "Documentação técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Gestão interna centralizada",

                    description:
                        "Permite centralizar informações, documentos, tarefas e processos internos em um único portal para funcionários.",
                },

                {
                    title:
                        "Registro de atividades",

                    description:
                        "Facilita o registro de horas e atividades relacionadas à jornada de trabalho ou aos processos internos da organização.",
                },

                {
                    title:
                        "Acesso às políticas",

                    description:
                        "Centraliza políticas, procedimentos e documentos internos para facilitar sua consulta pelos funcionários.",
                },

                {
                    title:
                        "Acompanhamento de tarefas",

                    description:
                        "Permite atribuir tarefas e acompanhar seus diferentes status por meio de uma estrutura organizada.",
                },
            ],

            process: [
                {
                    title:
                        "Design do portal interno",

                    description:
                        "Definimos funcionários, perfis, funções, tarefas, políticas, documentos e regras de acesso.",
                },

                {
                    title:
                        "Desenvolvimento da plataforma",

                    description:
                        "Construímos o sistema utilizando Next.js, NestJS, TypeScript, Prisma e PostgreSQL.",
                },

                {
                    title:
                        "Gestão de tarefas e horários",

                    description:
                        "Implementamos os módulos de registro de horas, atribuição de tarefas e acompanhamento de status.",
                },

                {
                    title:
                        "Central de documentos",

                    description:
                        "Configuramos o espaço para consultar políticas, procedimentos e documentos internos armazenados com segurança.",
                },

                {
                    title:
                        "Auditoria e testes",

                    description:
                        "Validamos permissões, registros, tarefas, documentos e diferentes cenários de acesso antes do lançamento.",
                },
            ],

            faq: [
                {
                    question:
                        "O sistema pode registrar as horas dos funcionários?",

                    answer:
                        "Sim. O portal contempla estruturas para registrar e consultar as horas ou atividades associadas aos funcionários.",
                },

                {
                    question:
                        "Inclui uma central de políticas internas?",

                    answer:
                        "Sim. O sistema pode centralizar políticas, procedimentos e documentos internos para que os funcionários possam consultá-los.",
                },

                {
                    question:
                        "É possível atribuir tarefas aos funcionários?",

                    answer:
                        "Sim. O portal permite atribuir tarefas e acompanhar seus diferentes status.",
                },

                {
                    question:
                        "Os funcionários possuem diferentes níveis de acesso?",

                    answer:
                        "Sim. O sistema pode estabelecer diferentes níveis de acesso de acordo com as funções definidas para a organização.",
                },

                {
                    question:
                        "Inclui folha de pagamento?",

                    answer:
                        "Não. O portal não inclui um sistema completo de folha de pagamento ou cálculo de impostos sobre salários.",
                },
            ],
        },
    },
};