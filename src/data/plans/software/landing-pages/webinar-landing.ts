import type {
    ServicePlan,
} from "@/types/plan.types";

export const webinarLanding: ServicePlan = {
    core: {
        // ────────────────────────────────────
        // Identidad
        // ────────────────────────────────────

        id: "LND-006",

        slug: "webinar-landing",

        // ────────────────────────────────────
        // Comercial
        // ────────────────────────────────────

        complexity: "⭐⭐⭐ (3/5)",

        price: "$380 - $550 USD",

        pricingType: "fixed",

        automationLevel: "high",

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
            "Google Calendar",
            "Zoom",
            "Google Meet",
            "YouTube Live",
            "Vimeo",
            "Resend",
            "Mailchimp",
            "Calendly",
        ],

        // ────────────────────────────────────
        // Multimedia
        // ────────────────────────────────────

        heroImage:
            "/images/services/software/landing-pages/webinar/hero.png",

        image:
            "/images/services/software/landing-pages/webinar/cover.webp",
    },

    translations: {
        es: {
            name: "Landing para Webinar",

            title: "Landing para Webinar",

            level: "🟠 Avanzado",

            category: "Landing Pages",

            description:
                "Landing profesional para webinars, masterclasses, clases en vivo y eventos virtuales con registro de asistentes, integración de plataformas de streaming y recordatorios automáticos.",

            time: "2-4 semanas",

            imageAlt:
                "Landing page para webinars y eventos virtuales",

            target:
                "Empresas, coaches, consultores, academias, creadores de contenido y organizaciones que realizan eventos online.",

            support:
                "15 días de soporte post-evento",

            useCases: [
                "Webinars",
                "Masterclass",
                "Cursos en vivo",
                "Charlas virtuales",
                "Eventos online",
                "Presentaciones de producto",
            ],

            includes: [
                "Hero de conversión",
                "Formulario de registro",
                "Agenda del webinar",
                "Perfil del presentador",
                "Integración con streaming",
                "Recordatorios automáticos",
                "Countdown dinámico",
                "SEO optimizado",
            ],

            notIncludes: [
                "Sistema LMS completo",
                "Venta de cursos",
                "Panel administrativo",
            ],

            features: [
                "Streaming embebido",
                "Countdown",
                "Registro de asistentes",
                "Agenda del evento",
                "Responsive Design",
                "Animaciones suaves",
                "SEO técnico",
                "Automatización de correos",
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
                    title: "Mayor tasa de registro",
                    description:
                        "Una estructura optimizada incrementa la cantidad de asistentes registrados.",
                },
                {
                    title: "Automatización",
                    description:
                        "Los participantes reciben recordatorios y confirmaciones automáticamente.",
                },
                {
                    title: "Experiencia profesional",
                    description:
                        "El webinar se presenta con una imagen moderna y confiable que aumenta la participación.",
                },
            ],

            process: [
                {
                    title: "Planeación",
                    description:
                        "Definimos la estructura del webinar, el flujo de registro y las integraciones necesarias.",
                },
                {
                    title: "Diseño",
                    description:
                        "Creamos una landing enfocada en maximizar registros y transmitir confianza.",
                },
                {
                    title: "Implementación",
                    description:
                        "Configuramos formularios, plataformas de streaming, analítica y automatizaciones antes de la publicación.",
                },
            ],

            faq: [
                {
                    question:
                        "¿Se puede integrar Zoom o Google Meet?",
                    answer:
                        "Sí. Podemos integrar Zoom, Google Meet, Microsoft Teams, Vimeo o YouTube Live según las necesidades del proyecto.",
                },
                {
                    question:
                        "¿Incluye recordatorios automáticos?",
                    answer:
                        "Sí. Se pueden configurar correos automáticos antes del inicio del webinar.",
                },
                {
                    question:
                        "¿Puedo mostrar el webinar directamente en la página?",
                    answer:
                        "Sí. Es posible incrustar la transmisión en vivo utilizando plataformas compatibles mediante iframe o reproductores embebidos.",
                },
            ],
        },

        en: {
            name: "Webinar Landing Page",

            title: "Webinar Landing Page",

            level: "🟠 Advanced",

            category: "Landing Pages",

            description:
                "A professional landing page for webinars, masterclasses, live sessions, and virtual events featuring attendee registration, streaming platform integration, and automated reminders.",

            time: "2–4 weeks",

            imageAlt:
                "Landing page for webinars and virtual events",

            target:
                "Businesses, coaches, consultants, online academies, content creators, and organizations that host virtual events.",

            support:
                "15 days of post-event support",

            useCases: [
                "Webinars",
                "Masterclasses",
                "Live courses",
                "Virtual talks",
                "Online events",
                "Product presentations",
            ],

            includes: [
                "High-converting hero section",
                "Registration form",
                "Webinar agenda",
                "Presenter profile",
                "Streaming platform integration",
                "Automated reminders",
                "Dynamic countdown timer",
                "SEO optimization",
            ],

            notIncludes: [
                "Complete LMS platform",
                "Course sales system",
                "Admin dashboard",
            ],

            features: [
                "Embedded live streaming",
                "Countdown timer",
                "Attendee registration",
                "Event agenda",
                "Responsive design",
                "Smooth animations",
                "Technical SEO",
                "Email automation",
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
                    title: "Higher Registration Rates",
                    description:
                        "An optimized structure helps maximize the number of webinar registrations.",
                },
                {
                    title: "Automation",
                    description:
                        "Participants automatically receive confirmations and reminder emails before the event.",
                },
                {
                    title: "Professional Experience",
                    description:
                        "Present your webinar with a modern, trustworthy design that encourages higher attendance and engagement.",
                },
            ],

            process: [
                {
                    title: "Planning",
                    description:
                        "We define the webinar structure, registration flow, and required integrations.",
                },
                {
                    title: "Design",
                    description:
                        "We create a landing page focused on maximizing registrations and building trust.",
                },
                {
                    title: "Implementation",
                    description:
                        "We configure forms, streaming platforms, analytics, and automations before launch.",
                },
            ],

            faq: [
                {
                    question:
                        "Can it integrate with Zoom or Google Meet?",
                    answer:
                        "Yes. We can integrate Zoom, Google Meet, Microsoft Teams, Vimeo, or YouTube Live based on your project's requirements.",
                },
                {
                    question:
                        "Does it include automated reminders?",
                    answer:
                        "Yes. Automated email reminders can be scheduled before the webinar begins.",
                },
                {
                    question:
                        "Can I stream the webinar directly on the landing page?",
                    answer:
                        "Yes. Live broadcasts can be embedded using compatible streaming platforms through iframes or embedded media players.",
                },
            ],
        },

        pt: {
            name: "Landing Page para Webinar",

            title: "Landing Page para Webinar",

            level: "🟠 Avançado",

            category: "Landing Pages",

            description:
                "Uma landing page profissional para webinars, masterclasses, aulas ao vivo e eventos virtuais, com inscrição de participantes, integração com plataformas de streaming e lembretes automáticos.",

            time: "2–4 semanas",

            imageAlt:
                "Landing page para webinars e eventos virtuais",

            target:
                "Empresas, coaches, consultores, academias online, criadores de conteúdo e organizações que realizam eventos virtuais.",

            support:
                "15 dias de suporte após o evento",

            useCases: [
                "Webinars",
                "Masterclasses",
                "Cursos ao vivo",
                "Palestras virtuais",
                "Eventos online",
                "Apresentações de produtos",
            ],

            includes: [
                "Hero section de alta conversão",
                "Formulário de inscrição",
                "Agenda do webinar",
                "Perfil do apresentador",
                "Integração com plataformas de streaming",
                "Lembretes automáticos",
                "Contador regressivo dinâmico",
                "Otimização para SEO",
            ],

            notIncludes: [
                "Plataforma LMS completa",
                "Sistema de venda de cursos",
                "Painel administrativo",
            ],

            features: [
                "Streaming incorporado",
                "Contador regressivo",
                "Inscrição de participantes",
                "Agenda do evento",
                "Design responsivo",
                "Animações suaves",
                "SEO técnico",
                "Automação de e-mails",
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
                    title: "Maior Taxa de Inscrições",
                    description:
                        "Uma estrutura otimizada aumenta significativamente o número de participantes inscritos.",
                },
                {
                    title: "Automação",
                    description:
                        "Os participantes recebem automaticamente confirmações e lembretes antes do evento.",
                },
                {
                    title: "Experiência Profissional",
                    description:
                        "O webinar é apresentado com uma imagem moderna e confiável, aumentando a participação e o engajamento.",
                },
            ],

            process: [
                {
                    title: "Planejamento",
                    description:
                        "Definimos a estrutura do webinar, o fluxo de inscrição e as integrações necessárias.",
                },
                {
                    title: "Design",
                    description:
                        "Criamos uma landing page focada em maximizar as inscrições e transmitir confiança.",
                },
                {
                    title: "Implementação",
                    description:
                        "Configuramos formulários, plataformas de streaming, ferramentas de análise e automações antes da publicação.",
                },
            ],

            faq: [
                {
                    question:
                        "É possível integrar Zoom ou Google Meet?",
                    answer:
                        "Sim. Podemos integrar Zoom, Google Meet, Microsoft Teams, Vimeo ou YouTube Live de acordo com as necessidades do projeto.",
                },
                {
                    question:
                        "Inclui lembretes automáticos?",
                    answer:
                        "Sim. É possível configurar e-mails automáticos para serem enviados antes do início do webinar.",
                },
                {
                    question:
                        "Posso transmitir o webinar diretamente na página?",
                    answer:
                        "Sim. A transmissão ao vivo pode ser incorporada utilizando plataformas compatíveis por meio de iframes ou players incorporados.",
                },
            ],
        },
    },
};