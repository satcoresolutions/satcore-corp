import type {
    ServicePlan,
} from "@/types/plan.types";

export const onlineAcademy: ServicePlan = {
    core: {
        // ────────────────────────────────────
        // Identidad
        // ────────────────────────────────────

        id: "LMS-002",

        slug: "online-academy",

        // ────────────────────────────────────
        // Comercial
        // ────────────────────────────────────

        complexity: "🔴🔴🔴🔴🔴 (5/5)",

        price: "$4,500 - $7,500+ USD",

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
            "Video CDNs",
        ],

        technologies: [
            "Next.js",
            "NestJS",
            "TypeScript",
            "Prisma ORM",
            "PostgreSQL",
            "Video CDN",
            "Real-time Quiz Processing",
            "Certificate Rendering",
            "Subscription Management",
            "Course Data Layers",
            "Streaming State Control",
        ],

        integrations: [
            "Video CDN",
            "Cloud Storage",
            "Payment Gateway",
            "Subscription Platform",
            "Email Notifications",
        ],

        // ────────────────────────────────────
        // Multimedia
        // ────────────────────────────────────

        heroImage:
            "/images/services/software/hero/hero-online-academy.png",

        image:
            "/images/services/software/hero/hero-online-academy.png",
    },

    translations: {
        es: {
            name: "Academia Online",

            title:
                "Plataforma de Academia Online",

            level: "🔴 Avanzado",

            category:
                "Sistemas E-Learning (LMS)",

            description:
                "Plataforma educativa avanzada para gestionar cursos, evaluaciones en tiempo real, certificados digitales, suscripciones automatizadas y experiencias de aprendizaje completas desde un entorno centralizado.",

            time: "14-20 semanas",

            imageAlt:
                "Academia online con cursos, evaluaciones, certificados y suscripciones",

            target:
                "Instituciones educativas, empresas, academias digitales y organizaciones de formación que necesitan una plataforma LMS avanzada para administrar estudiantes, cursos, evaluaciones, certificados y modelos de suscripción.",

            support:
                "60 días soporte post-entrega",

            useCases: [
                "Academias online",
                "Instituciones educativas",
                "Plataformas de formación",
                "Educación profesional",
                "Capacitación empresarial",
                "Cursos especializados",
                "Programas educativos",
                "Plataformas por suscripción",
                "Certificación digital",
            ],

            includes: [
                "Plataforma LMS avanzada",
                "Gestión de cursos",
                "Módulos y lecciones",
                "Video streaming",
                "Seguimiento de progreso",
                "Dashboard de estudiantes",
                "Sistema avanzado de evaluaciones",
                "Procesamiento de cuestionarios",
                "Evaluación en tiempo real",
                "Matriz de valoración de evaluaciones",
                "Certificados digitales",
                "Renderizado de certificados",
                "Gestión de suscripciones",
                "Suscripciones automatizadas",
                "Integración con pagos",
                "Gestión de usuarios",
                "Control de acceso",
                "Base de datos relacional",
                "Diseño responsive",
            ],

            notIncludes: [
                "Infraestructura educativa enterprise altamente distribuida",
                "Producción audiovisual de cursos",
                "Marketplace educativo multi-organización",
                "Sistemas de proctoring especializados",
                "Integraciones institucionales no contempladas",
                "Aplicaciones móviles nativas",
            ],

            features: [
                "Live Quiz Valuation Matrices",
                "Real-time Quiz Processing",
                "Digital Certificate Rendering",
                "Automated Subscriptions",
                "Sequential Curriculum Unlocking",
                "Video Completion Tracking",
                "Student Dashboard",
                "Course Data Layers",
                "High-performance Streaming State Control",
                "Progress Tracking",
                "Subscription Management",
                "Payment Integration",
                "Prisma ORM",
                "REST API",
                "Responsive Design",
            ],

            deliverables: [
                "Plataforma LMS publicada",
                "Sistema avanzado de gestión de cursos",
                "Dashboard de estudiantes",
                "Sistema de evaluaciones",
                "Motor de procesamiento de cuestionarios",
                "Sistema de certificados digitales",
                "Renderizado de certificados",
                "Sistema de suscripciones",
                "Integración de pagos",
                "Sistema de seguimiento de progreso",
                "Código fuente",
                "Base de datos configurada",
                "Documentación técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Experiencia educativa completa",

                    description:
                        "Centraliza cursos, contenidos, evaluaciones, progreso, certificados y suscripciones dentro de una única plataforma educativa.",
                },

                {
                    title:
                        "Evaluaciones avanzadas",

                    description:
                        "Permite implementar cuestionarios y estructuras de valoración para procesar y evaluar el desempeño de los estudiantes.",
                },

                {
                    title:
                        "Certificación digital",

                    description:
                        "Permite generar y renderizar certificados digitales asociados a la finalización de cursos o programas educativos.",
                },

                {
                    title:
                        "Modelo de suscripción",

                    description:
                        "Facilita la creación de modelos educativos basados en suscripciones y automatización de los procesos asociados.",
                },

                {
                    title:
                        "Plataforma escalable",

                    description:
                        "La arquitectura permite ampliar la academia con nuevos cursos, estudiantes, evaluaciones, planes y funcionalidades educativas.",
                },
            ],

            process: [
                {
                    title:
                        "Arquitectura de la academia",

                    description:
                        "Definimos cursos, módulos, estudiantes, evaluaciones, certificados, suscripciones, planes y reglas de acceso.",
                },

                {
                    title:
                        "Desarrollo del LMS",

                    description:
                        "Construimos la plataforma utilizando Next.js, NestJS, TypeScript, Prisma y PostgreSQL.",
                },

                {
                    title:
                        "Sistema de aprendizaje",

                    description:
                        "Implementamos cursos, contenidos, streaming, seguimiento de progreso y desbloqueo secuencial del currículo.",
                },

                {
                    title:
                        "Evaluaciones y certificación",

                    description:
                        "Desarrollamos el procesamiento de cuestionarios, matrices de valoración y generación de certificados digitales.",
                },

                {
                    title:
                        "Suscripciones y pagos",

                    description:
                        "Integramos los servicios necesarios para gestionar planes, suscripciones y procesos de pago automatizados.",
                },

                {
                    title:
                        "Pruebas y lanzamiento",

                    description:
                        "Validamos rendimiento, reproducción de contenido, evaluaciones, certificados, suscripciones, permisos y experiencia de usuario antes del lanzamiento.",
                },
            ],

            faq: [
                {
                    question:
                        "¿Qué diferencia existe entre Course Platform y Online Academy?",

                    answer:
                        "Course Platform está orientada a ofrecer cursos online con seguimiento de progreso y evaluaciones básicas. Online Academy incorpora evaluaciones avanzadas, certificados digitales, suscripciones automatizadas y una arquitectura educativa más completa.",
                },

                {
                    question:
                        "¿Puede gestionar múltiples cursos?",

                    answer:
                        "Sí. La plataforma permite gestionar diferentes cursos, módulos, lecciones y programas educativos desde un entorno centralizado.",
                },

                {
                    question:
                        "¿Incluye certificados digitales?",

                    answer:
                        "Sí. El plan Online Academy incluye estructuras para generar y renderizar certificados digitales asociados a la finalización de cursos o programas.",
                },

                {
                    question:
                        "¿Incluye suscripciones automatizadas?",

                    answer:
                        "Sí. La plataforma contempla gestión de suscripciones y automatización de procesos asociados a planes educativos.",
                },

                {
                    question:
                        "¿Puede procesar evaluaciones en tiempo real?",

                    answer:
                        "Sí. El sistema contempla estructuras para procesar cuestionarios y evaluaciones dinámicamente según la arquitectura definida para el proyecto.",
                },

                {
                    question:
                        "¿Puede integrar pagos?",

                    answer:
                        "Sí. El plan contempla integración con servicios de pago para gestionar suscripciones y procesos de cobro según los requerimientos del proyecto.",
                },

                {
                    question:
                        "¿Incluye streaming de video?",

                    answer:
                        "Sí. La plataforma puede integrarse con servicios de video CDN para ofrecer contenido audiovisual con estructuras de seguimiento de reproducción y progreso.",
                },
            ],
        },

        en: {
            name: "Online Academy",

            title:
                "Online Academy Platform",

            level: "🔴 Advanced",

            category:
                "E-Learning Systems (LMS)",

            description:
                "Advanced educational platform for managing courses, real-time assessments, digital certificates, automated subscriptions, and complete learning experiences within a centralized environment.",

            time: "14-20 weeks",

            imageAlt:
                "Online academy with courses, assessments, certificates, and subscriptions",

            target:
                "Educational institutions, companies, digital academies, and training organizations that need an advanced LMS platform to manage students, courses, assessments, certificates, and subscription models.",

            support:
                "60 days post-delivery support",

            useCases: [
                "Online academies",
                "Educational institutions",
                "Training platforms",
                "Professional education",
                "Corporate training",
                "Specialized courses",
                "Educational programs",
                "Subscription-based platforms",
                "Digital certification",
            ],

            includes: [
                "Advanced LMS platform",
                "Course management",
                "Modules and lessons",
                "Video streaming",
                "Progress tracking",
                "Student dashboard",
                "Advanced assessment system",
                "Quiz processing",
                "Real-time assessment",
                "Assessment valuation matrices",
                "Digital certificates",
                "Certificate rendering",
                "Subscription management",
                "Automated subscriptions",
                "Payment integration",
                "User management",
                "Access control",
                "Relational database",
                "Responsive design",
            ],

            notIncludes: [
                "Highly distributed enterprise educational infrastructure",
                "Course video production",
                "Multi-organization educational marketplace",
                "Specialized proctoring systems",
                "Unspecified institutional integrations",
                "Native mobile applications",
            ],

            features: [
                "Live Quiz Valuation Matrices",
                "Real-time Quiz Processing",
                "Digital Certificate Rendering",
                "Automated Subscriptions",
                "Sequential Curriculum Unlocking",
                "Video Completion Tracking",
                "Student Dashboard",
                "Course Data Layers",
                "High-performance Streaming State Control",
                "Progress Tracking",
                "Subscription Management",
                "Payment Integration",
                "Prisma ORM",
                "REST API",
                "Responsive Design",
            ],

            deliverables: [
                "Published LMS platform",
                "Advanced course management system",
                "Student dashboard",
                "Assessment system",
                "Quiz processing engine",
                "Digital certificate system",
                "Certificate rendering",
                "Subscription system",
                "Payment integration",
                "Progress tracking system",
                "Source code",
                "Configured database",
                "Technical documentation",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Complete learning experience",

                    description:
                        "Centralizes courses, content, assessments, progress, certificates, and subscriptions within a single educational platform.",
                },

                {
                    title:
                        "Advanced assessments",

                    description:
                        "Allows the implementation of quizzes and valuation structures to process and evaluate student performance.",
                },

                {
                    title:
                        "Digital certification",

                    description:
                        "Enables digital certificates to be generated and rendered based on course or educational program completion.",
                },

                {
                    title:
                        "Subscription model",

                    description:
                        "Facilitates the creation of subscription-based educational models and automation of related processes.",
                },

                {
                    title:
                        "Scalable platform",

                    description:
                        "The architecture allows the academy to expand with new courses, students, assessments, plans, and educational features.",
                },
            ],

            process: [
                {
                    title:
                        "Academy architecture",

                    description:
                        "We define courses, modules, students, assessments, certificates, subscriptions, plans, and access rules.",
                },

                {
                    title:
                        "LMS development",

                    description:
                        "We build the platform using Next.js, NestJS, TypeScript, Prisma, and PostgreSQL.",
                },

                {
                    title:
                        "Learning system",

                    description:
                        "We implement courses, content, streaming, progress tracking, and sequential curriculum unlocking.",
                },

                {
                    title:
                        "Assessments and certification",

                    description:
                        "We develop quiz processing, valuation matrices, and digital certificate generation.",
                },

                {
                    title:
                        "Subscriptions and payments",

                    description:
                        "We integrate the required services to manage plans, subscriptions, and automated payment processes.",
                },

                {
                    title:
                        "Testing and launch",

                    description:
                        "We validate performance, content playback, assessments, certificates, subscriptions, permissions, and user experience before launch.",
                },
            ],

            faq: [
                {
                    question:
                        "What is the difference between Course Platform and Online Academy?",

                    answer:
                        "Course Platform is focused on delivering online courses with progress tracking and basic assessments. Online Academy adds advanced assessments, digital certificates, automated subscriptions, and a more complete educational architecture.",
                },

                {
                    question:
                        "Can it manage multiple courses?",

                    answer:
                        "Yes. The platform allows different courses, modules, lessons, and educational programs to be managed from a centralized environment.",
                },

                {
                    question:
                        "Does it include digital certificates?",

                    answer:
                        "Yes. The Online Academy plan includes structures for generating and rendering digital certificates associated with course or program completion.",
                },

                {
                    question:
                        "Does it include automated subscriptions?",

                    answer:
                        "Yes. The platform supports subscription management and automation of processes associated with educational plans.",
                },

                {
                    question:
                        "Can it process assessments in real time?",

                    answer:
                        "Yes. The system includes structures for dynamically processing quizzes and assessments according to the architecture defined for the project.",
                },

                {
                    question:
                        "Can it integrate payments?",

                    answer:
                        "Yes. The plan supports integration with payment services to manage subscriptions and payment processes according to project requirements.",
                },

                {
                    question:
                        "Does it include video streaming?",

                    answer:
                        "Yes. The platform can integrate with video CDN services to deliver audiovisual content with playback and progress tracking structures.",
                },
            ],
        },

        pt: {
            name: "Academia Online",

            title:
                "Plataforma de Academia Online",

            level: "🔴 Avançado",

            category:
                "Sistemas E-Learning (LMS)",

            description:
                "Plataforma educacional avançada para gerenciar cursos, avaliações em tempo real, certificados digitais, assinaturas automatizadas e experiências completas de aprendizagem em um ambiente centralizado.",

            time: "14-20 semanas",

            imageAlt:
                "Academia online com cursos, avaliações, certificados e assinaturas",

            target:
                "Instituições educacionais, empresas, academias digitais e organizações de formação que precisam de uma plataforma LMS avançada para gerenciar alunos, cursos, avaliações, certificados e modelos de assinatura.",

            support:
                "60 dias de suporte pós-entrega",

            useCases: [
                "Academias online",
                "Instituições educacionais",
                "Plataformas de formação",
                "Educação profissional",
                "Treinamento corporativo",
                "Cursos especializados",
                "Programas educacionais",
                "Plataformas por assinatura",
                "Certificação digital",
            ],

            includes: [
                "Plataforma LMS avançada",
                "Gestão de cursos",
                "Módulos e aulas",
                "Streaming de vídeo",
                "Acompanhamento de progresso",
                "Painel do aluno",
                "Sistema avançado de avaliações",
                "Processamento de questionários",
                "Avaliação em tempo real",
                "Matrizes de avaliação",
                "Certificados digitais",
                "Renderização de certificados",
                "Gestão de assinaturas",
                "Assinaturas automatizadas",
                "Integração com pagamentos",
                "Gestão de usuários",
                "Controle de acesso",
                "Banco de dados relacional",
                "Design responsivo",
            ],

            notIncludes: [
                "Infraestrutura educacional empresarial altamente distribuída",
                "Produção audiovisual de cursos",
                "Marketplace educacional multi-organização",
                "Sistemas especializados de proctoring",
                "Integrações institucionais não contempladas",
                "Aplicativos móveis nativos",
            ],

            features: [
                "Live Quiz Valuation Matrices",
                "Real-time Quiz Processing",
                "Digital Certificate Rendering",
                "Automated Subscriptions",
                "Sequential Curriculum Unlocking",
                "Video Completion Tracking",
                "Student Dashboard",
                "Course Data Layers",
                "High-performance Streaming State Control",
                "Progress Tracking",
                "Subscription Management",
                "Payment Integration",
                "Prisma ORM",
                "REST API",
                "Responsive Design",
            ],

            deliverables: [
                "Plataforma LMS publicada",
                "Sistema avançado de gestão de cursos",
                "Painel do aluno",
                "Sistema de avaliações",
                "Motor de processamento de questionários",
                "Sistema de certificados digitais",
                "Renderização de certificados",
                "Sistema de assinaturas",
                "Integração de pagamentos",
                "Sistema de acompanhamento de progresso",
                "Código-fonte",
                "Banco de dados configurado",
                "Documentação técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Experiência educacional completa",

                    description:
                        "Centraliza cursos, conteúdos, avaliações, progresso, certificados e assinaturas em uma única plataforma educacional.",
                },

                {
                    title:
                        "Avaliações avançadas",

                    description:
                        "Permite implementar questionários e estruturas de avaliação para processar e analisar o desempenho dos alunos.",
                },

                {
                    title:
                        "Certificação digital",

                    description:
                        "Permite gerar e renderizar certificados digitais associados à conclusão de cursos ou programas educacionais.",
                },

                {
                    title:
                        "Modelo de assinatura",

                    description:
                        "Facilita a criação de modelos educacionais baseados em assinaturas e a automação dos processos relacionados.",
                },

                {
                    title:
                        "Plataforma escalável",

                    description:
                        "A arquitetura permite ampliar a academia com novos cursos, alunos, avaliações, planos e funcionalidades educacionais.",
                },
            ],

            process: [
                {
                    title:
                        "Arquitetura da academia",

                    description:
                        "Definimos cursos, módulos, alunos, avaliações, certificados, assinaturas, planos e regras de acesso.",
                },

                {
                    title:
                        "Desenvolvimento do LMS",

                    description:
                        "Construímos a plataforma utilizando Next.js, NestJS, TypeScript, Prisma e PostgreSQL.",
                },

                {
                    title:
                        "Sistema de aprendizagem",

                    description:
                        "Implementamos cursos, conteúdos, streaming, acompanhamento de progresso e desbloqueio sequencial do currículo.",
                },

                {
                    title:
                        "Avaliações e certificação",

                    description:
                        "Desenvolvemos o processamento de questionários, matrizes de avaliação e geração de certificados digitais.",
                },

                {
                    title:
                        "Assinaturas e pagamentos",

                    description:
                        "Integramos os serviços necessários para gerenciar planos, assinaturas e processos de pagamento automatizados.",
                },

                {
                    title:
                        "Testes e lançamento",

                    description:
                        "Validamos desempenho, reprodução de conteúdo, avaliações, certificados, assinaturas, permissões e experiência do usuário antes do lançamento.",
                },
            ],

            faq: [
                {
                    question:
                        "Qual é a diferença entre Course Platform e Online Academy?",

                    answer:
                        "Course Platform é voltada para oferecer cursos online com acompanhamento de progresso e avaliações básicas. Online Academy adiciona avaliações avançadas, certificados digitais, assinaturas automatizadas e uma arquitetura educacional mais completa.",
                },

                {
                    question:
                        "Pode gerenciar vários cursos?",

                    answer:
                        "Sim. A plataforma permite gerenciar diferentes cursos, módulos, aulas e programas educacionais em um ambiente centralizado.",
                },

                {
                    question:
                        "Inclui certificados digitais?",

                    answer:
                        "Sim. O plano Online Academy inclui estruturas para gerar e renderizar certificados digitais associados à conclusão de cursos ou programas.",
                },

                {
                    question:
                        "Inclui assinaturas automatizadas?",

                    answer:
                        "Sim. A plataforma contempla a gestão de assinaturas e a automação de processos associados aos planos educacionais.",
                },

                {
                    question:
                        "Pode processar avaliações em tempo real?",

                    answer:
                        "Sim. O sistema contempla estruturas para processar questionários e avaliações dinamicamente de acordo com a arquitetura definida para o projeto.",
                },

                {
                    question:
                        "Pode integrar pagamentos?",

                    answer:
                        "Sim. O plano contempla integração com serviços de pagamento para gerenciar assinaturas e processos de cobrança de acordo com os requisitos do projeto.",
                },

                {
                    question:
                        "Inclui streaming de vídeo?",

                    answer:
                        "Sim. A plataforma pode ser integrada a serviços de vídeo CDN para oferecer conteúdos audiovisuais com estruturas de acompanhamento da reprodução e do progresso.",
                },
            ],
        },
    },
};