import type {
    ServicePlan,
} from "@/types/plan.types";

export const coursePlatform: ServicePlan = {
    core: {
        // ────────────────────────────────────
        // Identidad
        // ────────────────────────────────────

        id: "LMS-001",

        slug: "course-platform",

        // ────────────────────────────────────
        // Comercial
        // ────────────────────────────────────

        complexity: "🟠🟠🟠🟠 (4/5)",

        price: "$3,000 - $5,000 USD",

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
            "Video CDNs",
        ],

        technologies: [
            "Next.js",
            "NestJS",
            "TypeScript",
            "Prisma ORM",
            "PostgreSQL",
            "Video CDN",
            "Video Streaming",
            "Course Data Layers",
            "Quiz Processing",
        ],

        integrations: [
            "Video CDN",
            "Cloud Storage",
            "Email Notifications",
        ],

        // ────────────────────────────────────
        // Multimedia
        // ────────────────────────────────────

        heroImage:
            "/images/services/software/hero/hero-course-platform.png",

        image:
            "/images/services/software/hero/hero-course-platform.png",
    },

    translations: {
        es: {
            name: "Plataforma de Cursos",

            title:
                "Plataforma de Cursos Online",

            level: "🟠 Avanzado",

            category:
                "Sistemas E-Learning (LMS)",

            description:
                "Plataforma de aprendizaje online para gestionar cursos, contenidos, videos, progreso de estudiantes, evaluaciones y desbloqueo secuencial del currículo mediante una arquitectura educativa escalable.",

            time: "10-14 semanas",

            imageAlt:
                "Plataforma de cursos online con videos, progreso y dashboard de estudiantes",

            target:
                "Empresas, instituciones educativas, profesionales y proyectos de formación que necesitan ofrecer cursos online con contenidos estructurados, seguimiento del progreso y acceso controlado al material educativo.",

            support:
                "45 días soporte post-entrega",

            useCases: [
                "Cursos online",
                "Plataformas educativas",
                "Capacitación empresarial",
                "Formación profesional",
                "Academias digitales",
                "Cursos por módulos",
                "Programas de formación",
                "Educación online",
            ],

            includes: [
                "Plataforma de cursos",
                "Gestión de cursos",
                "Módulos y lecciones",
                "Contenido educativo",
                "Video streaming",
                "Seguimiento de progreso",
                "Control de finalización de videos",
                "Desbloqueo secuencial de contenidos",
                "Dashboard de estudiantes",
                "Evaluaciones",
                "Procesamiento de cuestionarios",
                "Gestión de usuarios",
                "Control de acceso",
                "Base de datos relacional",
                "Diseño responsive",
            ],

            notIncludes: [
                "Clases en vivo",
                "Certificados digitales avanzados",
                "Suscripciones automatizadas",
                "Sistema avanzado de pagos recurrentes",
                "Marketplace de cursos multi-instructor",
                "Analítica educativa avanzada",
            ],

            features: [
                "Sequential Curriculum Unlocking",
                "Video Completion Tracking",
                "Student Dashboard",
                "Course Data Layers",
                "Video Streaming State Control",
                "Quiz Processing Engine",
                "Course Management",
                "Lesson Management",
                "Progress Tracking",
                "User Access Control",
                "Prisma ORM",
                "REST API",
                "Responsive Design",
            ],

            deliverables: [
                "Plataforma de cursos publicada",
                "Sistema de gestión de cursos",
                "Módulos y lecciones",
                "Sistema de reproducción de videos",
                "Seguimiento de progreso",
                "Dashboard de estudiantes",
                "Sistema de evaluaciones",
                "Desbloqueo secuencial de contenidos",
                "Código fuente",
                "Base de datos configurada",
                "Documentación técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Aprendizaje estructurado",

                    description:
                        "Permite organizar cursos mediante módulos y lecciones para proporcionar una experiencia educativa progresiva y ordenada.",
                },

                {
                    title:
                        "Control del progreso",

                    description:
                        "El sistema permite registrar el avance de los estudiantes y controlar la finalización de los contenidos audiovisuales.",
                },

                {
                    title:
                        "Contenido progresivo",

                    description:
                        "El desbloqueo secuencial permite controlar el acceso a nuevas lecciones según el progreso definido para cada curso.",
                },

                {
                    title:
                        "Experiencia centralizada",

                    description:
                        "El dashboard de estudiantes concentra cursos, progreso, contenidos y evaluaciones dentro de un único espacio.",
                },
            ],

            process: [
                {
                    title:
                        "Arquitectura educativa",

                    description:
                        "Definimos cursos, módulos, lecciones, usuarios, progreso, evaluaciones y reglas de acceso al contenido.",
                },

                {
                    title:
                        "Desarrollo de la plataforma",

                    description:
                        "Construimos el sistema utilizando Next.js, NestJS, TypeScript, Prisma y PostgreSQL.",
                },

                {
                    title:
                        "Integración de video",

                    description:
                        "Implementamos la reproducción de contenido audiovisual y las estructuras necesarias para registrar el progreso de los estudiantes.",
                },

                {
                    title:
                        "Sistema de progreso",

                    description:
                        "Desarrollamos el seguimiento de finalización, desbloqueo secuencial y dashboard personalizado para cada estudiante.",
                },

                {
                    title:
                        "Evaluaciones y pruebas",

                    description:
                        "Implementamos cuestionarios, procesamiento de respuestas y validamos los diferentes flujos de aprendizaje antes del lanzamiento.",
                },
            ],

            faq: [
                {
                    question:
                        "¿Puede gestionar diferentes cursos?",

                    answer:
                        "Sí. La plataforma permite crear y gestionar diferentes cursos organizados mediante módulos, lecciones y contenidos educativos.",
                },

                {
                    question:
                        "¿Los estudiantes pueden ver videos?",

                    answer:
                        "Sí. El sistema contempla integración con servicios de video CDN para ofrecer contenido audiovisual dentro de los cursos.",
                },

                {
                    question:
                        "¿Puede registrar el progreso de los estudiantes?",

                    answer:
                        "Sí. La plataforma registra el progreso y el estado de finalización de los contenidos para cada estudiante.",
                },

                {
                    question:
                        "¿Qué significa desbloqueo secuencial?",

                    answer:
                        "Significa que determinadas lecciones o contenidos pueden permanecer bloqueados hasta que el estudiante complete los contenidos requeridos previamente.",
                },

                {
                    question:
                        "¿Incluye evaluaciones?",

                    answer:
                        "Sí. El plan incluye estructuras para crear cuestionarios y procesar las respuestas de los estudiantes.",
                },

                {
                    question:
                        "¿Incluye certificados?",

                    answer:
                        "No en este plan. Los sistemas avanzados de certificados digitales pertenecen al plan Online Academy.",
                },
            ],
        },

        en: {
            name: "Course Platform",

            title:
                "Online Course Platform",

            level: "🟠 Advanced",

            category:
                "E-Learning Systems (LMS)",

            description:
                "Online learning platform for managing courses, content, videos, student progress, assessments, and sequential curriculum unlocking through a scalable educational architecture.",

            time: "10-14 weeks",

            imageAlt:
                "Online course platform with videos, progress tracking, and student dashboard",

            target:
                "Companies, educational institutions, professionals, and training projects that need to offer online courses with structured content, progress tracking, and controlled access to educational materials.",

            support:
                "45 days post-delivery support",

            useCases: [
                "Online courses",
                "Educational platforms",
                "Corporate training",
                "Professional training",
                "Digital academies",
                "Module-based courses",
                "Training programs",
                "Online education",
            ],

            includes: [
                "Course platform",
                "Course management",
                "Modules and lessons",
                "Educational content",
                "Video streaming",
                "Progress tracking",
                "Video completion tracking",
                "Sequential content unlocking",
                "Student dashboard",
                "Assessments",
                "Quiz processing",
                "User management",
                "Access control",
                "Relational database",
                "Responsive design",
            ],

            notIncludes: [
                "Live classes",
                "Advanced digital certificates",
                "Automated subscriptions",
                "Advanced recurring payment system",
                "Multi-instructor course marketplace",
                "Advanced educational analytics",
            ],

            features: [
                "Sequential Curriculum Unlocking",
                "Video Completion Tracking",
                "Student Dashboard",
                "Course Data Layers",
                "Video Streaming State Control",
                "Quiz Processing Engine",
                "Course Management",
                "Lesson Management",
                "Progress Tracking",
                "User Access Control",
                "Prisma ORM",
                "REST API",
                "Responsive Design",
            ],

            deliverables: [
                "Published course platform",
                "Course management system",
                "Modules and lessons",
                "Video playback system",
                "Progress tracking",
                "Student dashboard",
                "Assessment system",
                "Sequential content unlocking",
                "Source code",
                "Configured database",
                "Technical documentation",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Structured learning",

                    description:
                        "Allows courses to be organized through modules and lessons to provide a progressive and structured learning experience.",
                },

                {
                    title:
                        "Progress tracking",

                    description:
                        "The system records student progress and tracks the completion of audiovisual content.",
                },

                {
                    title:
                        "Progressive content",

                    description:
                        "Sequential unlocking allows access to new lessons to be controlled according to the progress defined for each course.",
                },

                {
                    title:
                        "Centralized experience",

                    description:
                        "The student dashboard brings courses, progress, content, and assessments together in a single space.",
                },
            ],

            process: [
                {
                    title:
                        "Educational architecture",

                    description:
                        "We define courses, modules, lessons, users, progress, assessments, and content access rules.",
                },

                {
                    title:
                        "Platform development",

                    description:
                        "We build the system using Next.js, NestJS, TypeScript, Prisma, and PostgreSQL.",
                },

                {
                    title:
                        "Video integration",

                    description:
                        "We implement audiovisual content playback and the structures required to track student progress.",
                },

                {
                    title:
                        "Progress system",

                    description:
                        "We develop completion tracking, sequential unlocking, and a personalized dashboard for each student.",
                },

                {
                    title:
                        "Assessments and testing",

                    description:
                        "We implement quizzes, response processing, and validate the different learning flows before launch.",
                },
            ],

            faq: [
                {
                    question:
                        "Can it manage different courses?",

                    answer:
                        "Yes. The platform allows different courses to be created and managed through modules, lessons, and educational content.",
                },

                {
                    question:
                        "Can students watch videos?",

                    answer:
                        "Yes. The system supports integration with video CDN services to deliver audiovisual content within courses.",
                },

                {
                    question:
                        "Can it track student progress?",

                    answer:
                        "Yes. The platform tracks progress and content completion status for each student.",
                },

                {
                    question:
                        "What does sequential unlocking mean?",

                    answer:
                        "It means that certain lessons or content can remain locked until the student completes the previously required content.",
                },

                {
                    question:
                        "Does it include assessments?",

                    answer:
                        "Yes. The plan includes structures for creating quizzes and processing student responses.",
                },

                {
                    question:
                        "Does it include certificates?",

                    answer:
                        "Not in this plan. Advanced digital certificate systems are included in the Online Academy plan.",
                },
            ],
        },

        pt: {
            name: "Plataforma de Cursos",

            title:
                "Plataforma de Cursos Online",

            level: "🟠 Avançado",

            category:
                "Sistemas E-Learning (LMS)",

            description:
                "Plataforma de aprendizagem online para gerenciar cursos, conteúdos, vídeos, progresso dos alunos, avaliações e desbloqueio sequencial do currículo por meio de uma arquitetura educacional escalável.",

            time: "10-14 semanas",

            imageAlt:
                "Plataforma de cursos online com vídeos, acompanhamento de progresso e painel do aluno",

            target:
                "Empresas, instituições educacionais, profissionais e projetos de formação que precisam oferecer cursos online com conteúdos estruturados, acompanhamento de progresso e acesso controlado ao material educacional.",

            support:
                "45 dias de suporte pós-entrega",

            useCases: [
                "Cursos online",
                "Plataformas educacionais",
                "Treinamento corporativo",
                "Formação profissional",
                "Academias digitais",
                "Cursos por módulos",
                "Programas de formação",
                "Educação online",
            ],

            includes: [
                "Plataforma de cursos",
                "Gestão de cursos",
                "Módulos e aulas",
                "Conteúdo educacional",
                "Streaming de vídeo",
                "Acompanhamento de progresso",
                "Acompanhamento da conclusão de vídeos",
                "Desbloqueio sequencial de conteúdos",
                "Painel do aluno",
                "Avaliações",
                "Processamento de questionários",
                "Gestão de usuários",
                "Controle de acesso",
                "Banco de dados relacional",
                "Design responsivo",
            ],

            notIncludes: [
                "Aulas ao vivo",
                "Certificados digitais avançados",
                "Assinaturas automatizadas",
                "Sistema avançado de pagamentos recorrentes",
                "Marketplace de cursos multi-instrutor",
                "Análise educacional avançada",
            ],

            features: [
                "Sequential Curriculum Unlocking",
                "Video Completion Tracking",
                "Student Dashboard",
                "Course Data Layers",
                "Video Streaming State Control",
                "Quiz Processing Engine",
                "Course Management",
                "Lesson Management",
                "Progress Tracking",
                "User Access Control",
                "Prisma ORM",
                "REST API",
                "Responsive Design",
            ],

            deliverables: [
                "Plataforma de cursos publicada",
                "Sistema de gestão de cursos",
                "Módulos e aulas",
                "Sistema de reprodução de vídeos",
                "Acompanhamento de progresso",
                "Painel do aluno",
                "Sistema de avaliações",
                "Desbloqueio sequencial de conteúdos",
                "Código-fonte",
                "Banco de dados configurado",
                "Documentação técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Aprendizagem estruturada",

                    description:
                        "Permite organizar cursos por meio de módulos e aulas para proporcionar uma experiência educacional progressiva e organizada.",
                },

                {
                    title:
                        "Acompanhamento do progresso",

                    description:
                        "O sistema registra o progresso dos alunos e acompanha a conclusão dos conteúdos audiovisuais.",
                },

                {
                    title:
                        "Conteúdo progressivo",

                    description:
                        "O desbloqueio sequencial permite controlar o acesso a novas aulas de acordo com o progresso definido para cada curso.",
                },

                {
                    title:
                        "Experiência centralizada",

                    description:
                        "O painel do aluno reúne cursos, progresso, conteúdos e avaliações em um único espaço.",
                },
            ],

            process: [
                {
                    title:
                        "Arquitetura educacional",

                    description:
                        "Definimos cursos, módulos, aulas, usuários, progresso, avaliações e regras de acesso aos conteúdos.",
                },

                {
                    title:
                        "Desenvolvimento da plataforma",

                    description:
                        "Construímos o sistema utilizando Next.js, NestJS, TypeScript, Prisma e PostgreSQL.",
                },

                {
                    title:
                        "Integração de vídeo",

                    description:
                        "Implementamos a reprodução de conteúdos audiovisuais e as estruturas necessárias para registrar o progresso dos alunos.",
                },

                {
                    title:
                        "Sistema de progresso",

                    description:
                        "Desenvolvemos o acompanhamento de conclusão, desbloqueio sequencial e painel personalizado para cada aluno.",
                },

                {
                    title:
                        "Avaliações e testes",

                    description:
                        "Implementamos questionários, processamento de respostas e validamos os diferentes fluxos de aprendizagem antes do lançamento.",
                },
            ],

            faq: [
                {
                    question:
                        "Pode gerenciar diferentes cursos?",

                    answer:
                        "Sim. A plataforma permite criar e gerenciar diferentes cursos organizados por módulos, aulas e conteúdos educacionais.",
                },

                {
                    question:
                        "Os alunos podem assistir a vídeos?",

                    answer:
                        "Sim. O sistema permite integração com serviços de vídeo CDN para disponibilizar conteúdos audiovisuais dentro dos cursos.",
                },

                {
                    question:
                        "Pode acompanhar o progresso dos alunos?",

                    answer:
                        "Sim. A plataforma registra o progresso e o status de conclusão dos conteúdos para cada aluno.",
                },

                {
                    question:
                        "O que significa desbloqueio sequencial?",

                    answer:
                        "Significa que determinadas aulas ou conteúdos podem permanecer bloqueados até que o aluno conclua os conteúdos previamente exigidos.",
                },

                {
                    question:
                        "Inclui avaliações?",

                    answer:
                        "Sim. O plano inclui estruturas para criar questionários e processar as respostas dos alunos.",
                },

                {
                    question:
                        "Inclui certificados?",

                    answer:
                        "Não neste plano. Os sistemas avançados de certificados digitais pertencem ao plano Online Academy.",
                },
            ],
        },
    },
};