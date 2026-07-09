import type {
    ServicePlan,
} from "@/types/plan.types";

export const eventLanding: ServicePlan = {
    core: {
        // ────────────────────────────────────
        // Identidad
        // ────────────────────────────────────

        id: "LND-005",

        slug: "event-landing",

        // ────────────────────────────────────
        // Comercial
        // ────────────────────────────────────

        complexity: "⭐⭐⭐ (3/5)",

        price: "$380 - $500 USD",

        pricingType: "fixed",

        automationLevel: "medium",

        // ────────────────────────────────────
        // Técnico
        // ────────────────────────────────────

        stack: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion",
            "Server Actions",
        ],

        technologies: [
            "Next.js App Router",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion",
            "Route Handlers",
            "React Hook Form",
            "next-seo",
        ],

        integrations: [
            "Google Analytics 4",
            "Google Tag Manager",
            "Meta Pixel",
            "Google Maps",
            "Google Calendar",
            "Resend",
            "Mailchimp",
        ],

        // ────────────────────────────────────
        // Multimedia
        // ────────────────────────────────────

        heroImage:
            "/images/services/software/landing-pages/event/hero.png",

        image:
            "/images/services/software/landing-pages/event/cover.webp",
    },

    translations: {
        es: {
            name: "Landing para Eventos",

            title: "Landing para Eventos",

            level: "🟠 Avanzado",

            category: "Landing Pages",

            description:
                "Landing diseñada para promocionar eventos, conferencias, lanzamientos y experiencias presenciales o virtuales con cronograma dinámico, cuenta regresiva y registro de asistentes.",

            time: "2-4 semanas",

            imageAlt:
                "Landing page para eventos y conferencias",

            target:
                "Empresas, organizadores de eventos, conferencias, workshops, congresos y lanzamientos de productos.",

            support:
                "15 días de soporte post-evento",

            useCases: [
                "Conferencias",
                "Seminarios",
                "Eventos corporativos",
                "Lanzamientos",
                "Workshops",
                "Ferias",
            ],

            includes: [
                "Hero promocional",
                "Cuenta regresiva",
                "Agenda del evento",
                "Sección de ponentes",
                "Formulario de inscripción",
                "Mapa de ubicación",
                "Galería multimedia",
                "Optimización SEO",
            ],

            notIncludes: [
                "Venta de entradas",
                "Streaming en vivo",
                "Panel administrativo",
            ],

            features: [
                "Countdown dinámico",
                "Cronograma del evento",
                "Perfil de ponentes",
                "Mapa interactivo",
                "Responsive Design",
                "Animaciones suaves",
                "SEO técnico",
                "Registro de asistentes",
            ],

            deliverables: [
                "Landing completa",
                "Código fuente",
                "Manual de administración",
                "Configuración de analítica",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Mayor asistencia",
                    description:
                        "Una presentación profesional aumenta el interés y la tasa de inscripción al evento.",
                },
                {
                    title: "Información organizada",
                    description:
                        "Los asistentes encuentran fácilmente horarios, ubicación, agenda y ponentes.",
                },
                {
                    title: "Preparada para campañas",
                    description:
                        "Optimizada para recibir tráfico desde redes sociales y campañas publicitarias.",
                },
            ],

            process: [
                {
                    title: "Planeación",
                    description:
                        "Definimos la estructura del evento y la información que se presentará.",
                },
                {
                    title: "Diseño",
                    description:
                        "Creamos una experiencia visual enfocada en generar expectativa y facilitar el registro.",
                },
                {
                    title: "Implementación",
                    description:
                        "Configuramos formularios, cuenta regresiva, agenda y analítica antes del lanzamiento.",
                },
            ],

            faq: [
                {
                    question:
                        "¿La cuenta regresiva se actualiza automáticamente?",
                    answer:
                        "Sí. El contador se sincroniza con la fecha configurada del evento.",
                },
                {
                    question:
                        "¿Puedo mostrar varios ponentes?",
                    answer:
                        "Sí. Se pueden incluir perfiles con fotografía, biografía, cargo y enlaces sociales.",
                },
                {
                    question:
                        "¿Incluye formulario de inscripción?",
                    answer:
                        "Sí. El formulario puede conectarse a correo electrónico o plataformas de email marketing.",
                },
            ],
        },

        en: {
            name: "Event Landing Page",

            title: "Event Landing Page",

            level: "🟠 Advanced",

            category: "Landing Pages",

            description:
                "A landing page designed to promote events, conferences, product launches, and both in-person and virtual experiences, featuring a dynamic schedule, countdown timer, and attendee registration.",

            time: "2–4 weeks",

            imageAlt:
                "Landing page for events and conferences",

            target:
                "Businesses, event organizers, conferences, workshops, conventions, and product launches.",

            support:
                "15 days of post-event support",

            useCases: [
                "Conferences",
                "Seminars",
                "Corporate events",
                "Product launches",
                "Workshops",
                "Trade shows",
            ],

            includes: [
                "Promotional hero section",
                "Countdown timer",
                "Event agenda",
                "Speakers section",
                "Registration form",
                "Location map",
                "Media gallery",
                "SEO optimization",
            ],

            notIncludes: [
                "Ticket sales",
                "Live streaming",
                "Admin dashboard",
            ],

            features: [
                "Dynamic countdown timer",
                "Event schedule",
                "Speaker profiles",
                "Interactive map",
                "Responsive design",
                "Smooth animations",
                "Technical SEO",
                "Attendee registration",
            ],

            deliverables: [
                "Complete landing page",
                "Source code",
                "Administration guide",
                "Analytics setup",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Increase Event Attendance",
                    description:
                        "A professional presentation generates greater interest and improves event registration rates.",
                },
                {
                    title: "Well-Organized Information",
                    description:
                        "Attendees can quickly find schedules, location details, agenda, and speaker information.",
                },
                {
                    title: "Campaign-Ready",
                    description:
                        "Optimized to receive traffic from social media and paid advertising campaigns.",
                },
            ],

            process: [
                {
                    title: "Planning",
                    description:
                        "We define the event structure and organize all the information to be presented.",
                },
                {
                    title: "Design",
                    description:
                        "We create a visually engaging experience focused on building anticipation and encouraging registrations.",
                },
                {
                    title: "Implementation",
                    description:
                        "We configure registration forms, countdown timer, event agenda, and analytics before launch.",
                },
            ],

            faq: [
                {
                    question:
                        "Does the countdown timer update automatically?",
                    answer:
                        "Yes. The countdown is automatically synchronized with the configured event date and time.",
                },
                {
                    question:
                        "Can I showcase multiple speakers?",
                    answer:
                        "Yes. You can include speaker profiles with photos, biographies, job titles, and social media links.",
                },
                {
                    question:
                        "Does it include a registration form?",
                    answer:
                        "Yes. The registration form can be connected to email notifications or email marketing platforms.",
                },
            ],
        },

        pt: {
            name: "Landing Page para Eventos",

            title: "Landing Page para Eventos",

            level: "🟠 Avançado",

            category: "Landing Pages",

            description:
                "Uma landing page desenvolvida para promover eventos, conferências, lançamentos e experiências presenciais ou virtuais, com cronograma dinâmico, contador regressivo e inscrição de participantes.",

            time: "2–4 semanas",

            imageAlt:
                "Landing page para eventos e conferências",

            target:
                "Empresas, organizadores de eventos, conferências, workshops, congressos e lançamentos de produtos.",

            support:
                "15 dias de suporte após o evento",

            useCases: [
                "Conferências",
                "Seminários",
                "Eventos corporativos",
                "Lançamentos de produtos",
                "Workshops",
                "Feiras",
            ],

            includes: [
                "Hero section promocional",
                "Contador regressivo",
                "Agenda do evento",
                "Seção de palestrantes",
                "Formulário de inscrição",
                "Mapa de localização",
                "Galeria multimídia",
                "Otimização para SEO",
            ],

            notIncludes: [
                "Venda de ingressos",
                "Transmissão ao vivo",
                "Painel administrativo",
            ],

            features: [
                "Contador regressivo dinâmico",
                "Cronograma do evento",
                "Perfis dos palestrantes",
                "Mapa interativo",
                "Design responsivo",
                "Animações suaves",
                "SEO técnico",
                "Inscrição de participantes",
            ],

            deliverables: [
                "Landing page completa",
                "Código-fonte",
                "Guia de administração",
                "Configuração de ferramentas de análise",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Maior Participação",
                    description:
                        "Uma apresentação profissional aumenta o interesse e melhora a taxa de inscrições no evento.",
                },
                {
                    title: "Informações Bem Organizadas",
                    description:
                        "Os participantes encontram facilmente horários, localização, programação e informações dos palestrantes.",
                },
                {
                    title: "Preparada para Campanhas",
                    description:
                        "Otimizada para receber tráfego de redes sociais e campanhas de publicidade paga.",
                },
            ],

            process: [
                {
                    title: "Planejamento",
                    description:
                        "Definimos a estrutura do evento e organizamos todas as informações que serão apresentadas.",
                },
                {
                    title: "Design",
                    description:
                        "Criamos uma experiência visual focada em gerar expectativa e facilitar as inscrições.",
                },
                {
                    title: "Implementação",
                    description:
                        "Configuramos formulários, contador regressivo, agenda do evento e ferramentas de análise antes da publicação.",
                },
            ],

            faq: [
                {
                    question:
                        "O contador regressivo é atualizado automaticamente?",
                    answer:
                        "Sim. O contador é sincronizado automaticamente com a data e o horário configurados para o evento.",
                },
                {
                    question:
                        "Posso exibir vários palestrantes?",
                    answer:
                        "Sim. É possível incluir perfis com foto, biografia, cargo e links para redes sociais.",
                },
                {
                    question:
                        "Inclui formulário de inscrição?",
                    answer:
                        "Sim. O formulário pode ser integrado ao e-mail ou a plataformas de e-mail marketing.",
                },
            ],
        },
    },
};