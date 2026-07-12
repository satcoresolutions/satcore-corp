import type {
    ServicePlan,
} from "@/types/plan.types";

export const personalPortfolio: ServicePlan = {
    core: {
        // ────────────────────────────────────
        // Identidad
        // ────────────────────────────────────

        id: "PRT-001",

        slug: "personal-portfolio",

        // ────────────────────────────────────
        // Comercial
        // ────────────────────────────────────

        complexity: "⭐⭐ (2/5)",

        price: "$380 - $550 USD",

        pricingType: "fixed",

        automationLevel: "low",

        // ────────────────────────────────────
        // Técnico
        // ────────────────────────────────────

        stack: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion",
        ],

        technologies: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion",
            "PWA",
            "Static Site Generation",
        ],

        integrations: [
            "Google Analytics",
            "Resend",
        ],

        // ────────────────────────────────────
        // Multimedia
        // ────────────────────────────────────

        heroImage:
            "/images/services/software/hero/hero-portfolio-personal.png",

        image:
            "/images/services/software/hero/hero-portfolio-personal.png",
    },

    translations: {
        es: {
            name: "Portafolio Personal",

            title:
                "Portafolio Personal",

            level: "🟢 Básico",

            category:
                "Portafolios Profesionales",

            description:
                "Portafolio profesional desarrollado como Progressive Web App para mostrar proyectos, experiencia y habilidades mediante una experiencia rápida, moderna y completamente responsive.",

            time: "2-3 semanas",

            imageAlt:
                "Portafolio personal para desarrolladores y profesionales",

            target:
                "Desarrolladores, diseñadores, freelancers, estudiantes, consultores y profesionales que desean fortalecer su marca personal y presentar su trabajo de manera profesional.",

            support:
                "15 días soporte post-entrega",

            useCases: [
                "Marca personal",
                "Portafolio para desarrolladores",
                "Portafolio UX/UI",
                "Currículum digital",
                "Búsqueda de empleo",
                "Freelancing",
            ],

            includes: [
                "Página de inicio",
                "Sección Acerca de",
                "Listado de proyectos",
                "Filtro de proyectos",
                "Stack tecnológico",
                "Formulario de contacto",
                "Animaciones suaves",
                "Optimización SEO",
                "PWA instalable",
            ],

            notIncludes: [
                "Panel administrativo",
                "CMS",
                "Blog",
                "Estudios de caso avanzados",
                "Contenido dinámico",
            ],

            features: [
                "100% Responsive",
                "Framer Motion",
                "PWA",
                "Static Site Generation",
                "Carga ultrarrápida",
                "SEO optimizado",
                "Datos desde JSON local",
                "Filtros interactivos",
            ],

            deliverables: [
                "Portafolio publicado",
                "Código fuente",
                "Manual de actualización",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Marca personal profesional",

                    description:
                        "Presenta tus habilidades y proyectos con una experiencia moderna que genera confianza desde el primer vistazo.",
                },

                {
                    title:
                        "Excelente rendimiento",

                    description:
                        "Construido con generación estática para obtener tiempos de carga extremadamente rápidos.",
                },

                {
                    title:
                        "Fácil de actualizar",

                    description:
                        "Toda la información puede modificarse mediante archivos JSON sin depender de bases de datos.",
                },
            ],

            process: [
                {
                    title:
                        "Planificación",

                    description:
                        "Definimos la estructura del portafolio, proyectos y contenido principal.",
                },

                {
                    title:
                        "Diseño y desarrollo",

                    description:
                        "Construimos una experiencia moderna con animaciones fluidas y diseño responsive.",
                },

                {
                    title:
                        "Publicación",

                    description:
                        "Optimizamos el rendimiento, realizamos pruebas y desplegamos el proyecto.",
                },
            ],

            faq: [
                {
                    question:
                        "¿Puedo agregar más proyectos después?",

                    answer:
                        "Sí. El portafolio está preparado para agregar nuevos proyectos fácilmente modificando los datos locales.",
                },

                {
                    question:
                        "¿Es compatible con dispositivos móviles?",

                    answer:
                        "Sí. Está diseñado bajo un enfoque Mobile First y funciona perfectamente en cualquier dispositivo.",
                },

                {
                    question:
                        "¿Necesita una base de datos?",

                    answer:
                        "No. Toda la información se genera desde archivos locales utilizando generación estática para maximizar el rendimiento.",
                },
            ],
        },

        en: {
            name: "Personal Portfolio",

            title:
                "Personal Portfolio",

            level: "🟢 Basic",

            category:
                "Professional Portfolios",

            description:
                "A Progressive Web App portfolio built to showcase projects, skills and experience through a fast, modern and highly responsive user experience.",

            time: "2-3 weeks",

            imageAlt:
                "Personal portfolio website",

            target:
                "Developers, designers, freelancers, consultants and professionals looking to strengthen their personal brand online.",

            support:
                "15 days post-delivery support",

            useCases: [
                "Developer portfolio",
                "Designer portfolio",
                "Personal branding",
                "Digital resume",
                "Freelancing",
                "Job applications",
            ],

            includes: [
                "Landing page",
                "About section",
                "Project gallery",
                "Project filters",
                "Technology stack",
                "Contact form",
                "Smooth animations",
                "SEO optimization",
                "Installable PWA",
            ],

            notIncludes: [
                "CMS",
                "Admin dashboard",
                "Blog",
                "Advanced case studies",
                "Dynamic content",
            ],

            features: [
                "Responsive Design",
                "Framer Motion",
                "PWA",
                "Static Site Generation",
                "Fast loading",
                "SEO optimized",
                "Local JSON data",
                "Interactive project filters",
            ],

            deliverables: [
                "Published portfolio",
                "Source code",
                "Update guide",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Professional online presence",

                    description:
                        "Showcase your work with a modern portfolio that helps build trust and credibility.",
                },

                {
                    title:
                        "High performance",

                    description:
                        "Static generation ensures excellent loading speeds and user experience.",
                },

                {
                    title:
                        "Easy maintenance",

                    description:
                        "Update projects easily through local JSON files without requiring a database.",
                },
            ],

            process: [
                {
                    title:
                        "Planning",

                    description:
                        "We organize your portfolio structure, content and featured projects.",
                },

                {
                    title:
                        "Design & development",

                    description:
                        "We build a responsive experience enhanced with smooth animations.",
                },

                {
                    title:
                        "Deployment",

                    description:
                        "We optimize performance, run final testing and publish the portfolio.",
                },
            ],

            faq: [
                {
                    question:
                        "Can I add more projects later?",

                    answer:
                        "Yes. New projects can be added easily by updating the local portfolio data.",
                },

                {
                    question:
                        "Does it work on mobile devices?",

                    answer:
                        "Absolutely. It follows a Mobile First approach and provides an excellent experience across all screen sizes.",
                },

                {
                    question:
                        "Does it require a database?",

                    answer:
                        "No. The portfolio is generated from local data files using Static Site Generation for maximum performance.",
                },
            ],
        },
        pt: {
            name: "Portfólio Pessoal",

            title: "Portfólio Pessoal",

            level: "🟢 Básico",

            category: "Portfólios Profissionais",

            description:
                "Portfólio profissional desenvolvido como Progressive Web App para apresentar projetos, experiência e habilidades por meio de uma experiência rápida, moderna e totalmente responsiva.",

            time: "2-3 semanas",

            imageAlt:
                "Portfólio pessoal para desenvolvedores e profissionais",

            target:
                "Desenvolvedores, designers, freelancers, estudantes, consultores e profissionais que desejam fortalecer sua marca pessoal e apresentar seu trabalho de forma profissional.",

            support:
                "15 dias de suporte pós-entrega",

            useCases: [
                "Marca pessoal",
                "Portfólio para desenvolvedores",
                "Portfólio UX/UI",
                "Currículo digital",
                "Busca de emprego",
                "Freelancing",
            ],

            includes: [
                "Página inicial",
                "Seção Sobre",
                "Lista de projetos",
                "Filtro de projetos",
                "Stack de tecnologias",
                "Formulário de contato",
                "Animações suaves",
                "Otimização para SEO",
                "PWA instalável",
            ],

            notIncludes: [
                "Painel administrativo",
                "CMS",
                "Blog",
                "Estudos de caso avançados",
                "Conteúdo dinâmico",
            ],

            features: [
                "100% Responsivo",
                "Framer Motion",
                "PWA",
                "Static Site Generation",
                "Carregamento ultrarrápido",
                "SEO otimizado",
                "Dados provenientes de JSON local",
                "Filtros interativos",
            ],

            deliverables: [
                "Portfólio publicado",
                "Código-fonte",
                "Manual de atualização",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Marca pessoal profissional",

                    description:
                        "Apresente suas habilidades e projetos com uma experiência moderna que transmite confiança desde o primeiro contato.",
                },

                {
                    title: "Excelente desempenho",

                    description:
                        "Desenvolvido com geração estática para proporcionar tempos de carregamento extremamente rápidos.",
                },

                {
                    title: "Fácil de atualizar",

                    description:
                        "Todas as informações podem ser alteradas por meio de arquivos JSON, sem depender de bancos de dados.",
                },
            ],

            process: [
                {
                    title: "Planejamento",

                    description:
                        "Definimos a estrutura do portfólio, os projetos e o conteúdo principal.",
                },

                {
                    title: "Design e desenvolvimento",

                    description:
                        "Criamos uma experiência moderna com animações fluidas e design responsivo.",
                },

                {
                    title: "Publicação",

                    description:
                        "Otimizamos o desempenho, realizamos testes e publicamos o projeto.",
                },
            ],

            faq: [
                {
                    question: "Posso adicionar mais projetos depois?",

                    answer:
                        "Sim. O portfólio está preparado para adicionar novos projetos facilmente, bastando modificar os dados locais.",
                },

                {
                    question: "É compatível com dispositivos móveis?",

                    answer:
                        "Sim. Foi desenvolvido com uma abordagem Mobile First e funciona perfeitamente em qualquer dispositivo.",
                },

                {
                    question: "Precisa de um banco de dados?",

                    answer:
                        "Não. Todas as informações são geradas a partir de arquivos locais utilizando geração estática para maximizar o desempenho.",
                },
            ],
        },
    },
};