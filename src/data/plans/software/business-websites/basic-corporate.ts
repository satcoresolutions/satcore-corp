import type {
    ServicePlan,
} from "@/types/plan.types";

export const basicCorporate: ServicePlan = {
    core: {
        // ────────────────────────────────────
        // Identidad
        // ────────────────────────────────────

        id: "BIZ-001",

        slug: "basic-corporate",

        // ────────────────────────────────────
        // Comercial
        // ────────────────────────────────────

        complexity: "⭐⭐⭐ (3/5)",

        price: "$650 - $1,000 USD",

        pricingType: "fixed",

        automationLevel: "medium",

        // ────────────────────────────────────
        // Técnico
        // ────────────────────────────────────

        stack: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
        ],

        technologies: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "ISR",
            "Headless CMS",
            "SEO",
        ],

        integrations: [
            "Google Analytics",
            "Google Search Console",
            "Resend",
            "Google Maps",
        ],

        // ────────────────────────────────────
        // Multimedia
        // ────────────────────────────────────

        heroImage:
            "/images/services/software/hero/hero-business-basic.png",

        image:
            "/images/services/software/hero/hero-business-basic.png",
    },

    translations: {
        es: {
            name: "Sitio Web Corporativo Básico",

            title:
                "Sitio Web Corporativo Básico",

            level: "🟡 Intermedio",

            category:
                "Sitios Web Empresariales",

            description:
                "Sitio web corporativo diseñado para empresas que necesitan una presencia profesional en Internet con páginas institucionales, optimización SEO y una estructura preparada para crecer.",

            time: "3-5 semanas",

            imageAlt:
                "Sitio web corporativo empresarial",

            target:
                "Empresas, pymes, consultoras, firmas profesionales, organizaciones y negocios que necesitan consolidar su presencia digital mediante un sitio corporativo moderno.",

            support:
                "30 días soporte post-entrega",

            useCases: [
                "Empresa corporativa",
                "Consultoras",
                "Firmas legales",
                "Servicios profesionales",
                "Empresas B2B",
                "Sitio institucional",
            ],

            includes: [
                "Página de inicio",
                "Acerca de la empresa",
                "Servicios",
                "Equipo",
                "Contacto",
                "Formulario de contacto",
                "Mapa de ubicación",
                "SEO técnico",
                "Diseño responsive",
            ],

            notIncludes: [
                "Portal de clientes",
                "Roles de usuario",
                "Multilenguaje dinámico",
                "Filtros avanzados",
            ],

            features: [
                "Incremental Static Regeneration",
                "SEO optimizado",
                "Responsive Design",
                "Metadatos personalizados",
                "Arquitectura escalable",
                "Headless CMS Ready",
                "Google Analytics",
                "Excelente rendimiento",
            ],

            deliverables: [
                "Sitio web publicado",
                "Código fuente",
                "Documentación básica",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Imagen profesional",

                    description:
                        "Fortalece la confianza de clientes y aliados mediante un sitio corporativo moderno y bien estructurado.",
                },

                {
                    title:
                        "Preparado para crecer",

                    description:
                        "La arquitectura permite incorporar nuevas secciones, servicios y funcionalidades sin rehacer el proyecto.",
                },

                {
                    title:
                        "SEO desde el inicio",

                    description:
                        "Implementamos buenas prácticas técnicas para mejorar la indexación y el posicionamiento en buscadores.",
                },
            ],

            process: [
                {
                    title:
                        "Levantamiento de información",

                    description:
                        "Analizamos la empresa, su identidad corporativa y los objetivos del sitio web.",
                },

                {
                    title:
                        "Diseño y desarrollo",

                    description:
                        "Construimos un sitio moderno, responsive y optimizado para rendimiento y SEO.",
                },

                {
                    title:
                        "Publicación",

                    description:
                        "Realizamos pruebas finales y desplegamos el sitio listo para producción.",
                },
            ],

            faq: [
                {
                    question:
                        "¿Puedo agregar nuevas páginas en el futuro?",

                    answer:
                        "Sí. La arquitectura está preparada para escalar con nuevas secciones y contenido.",
                },

                {
                    question:
                        "¿Está optimizado para Google?",

                    answer:
                        "Sí. Incluye SEO técnico, metadatos optimizados y buenas prácticas para motores de búsqueda.",
                },

                {
                    question:
                        "¿Incluye panel administrativo?",

                    answer:
                        "Puede prepararse para trabajar con un Headless CMS, aunque la implementación completa depende de los requerimientos del proyecto.",
                },
            ],
        },

        en: {
            name: "Basic Corporate Website",

            title:
                "Basic Corporate Website",

            level: "🟡 Intermediate",

            category:
                "Business Websites",

            description:
                "A professional corporate website designed for businesses that need a modern online presence with institutional pages, SEO optimization and a scalable architecture.",

            time: "3-5 weeks",

            imageAlt:
                "Corporate business website",

            target:
                "Companies, consulting firms, professional services, B2B businesses and organizations seeking a professional online presence.",

            support:
                "30 days post-delivery support",

            useCases: [
                "Corporate website",
                "Consulting firms",
                "Professional services",
                "Legal firms",
                "B2B companies",
                "Company website",
            ],

            includes: [
                "Homepage",
                "About page",
                "Services",
                "Team",
                "Contact page",
                "Contact form",
                "Google Maps",
                "Technical SEO",
                "Responsive design",
            ],

            notIncludes: [
                "Customer portal",
                "User roles",
                "Dynamic multilingual system",
                "Advanced filtering",
            ],

            features: [
                "Incremental Static Regeneration",
                "SEO optimized",
                "Responsive design",
                "Custom metadata",
                "Scalable architecture",
                "Headless CMS ready",
                "Google Analytics",
                "High performance",
            ],

            deliverables: [
                "Published website",
                "Source code",
                "Basic documentation",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Professional presence",

                    description:
                        "Build trust with customers through a modern and well-structured corporate website.",
                },

                {
                    title:
                        "Future-proof architecture",

                    description:
                        "Easily expand your website with new pages and services as your business grows.",
                },

                {
                    title:
                        "SEO ready",

                    description:
                        "Built following technical SEO best practices for maximum visibility.",
                },
            ],

            process: [
                {
                    title:
                        "Discovery",

                    description:
                        "We analyze your business, branding and website objectives.",
                },

                {
                    title:
                        "Design & development",

                    description:
                        "We build a responsive website optimized for performance and SEO.",
                },

                {
                    title:
                        "Deployment",

                    description:
                        "After testing and optimization, we publish your website in production.",
                },
            ],

            faq: [
                {
                    question:
                        "Can I add more pages later?",

                    answer:
                        "Yes. The architecture is designed to grow as your company evolves.",
                },

                {
                    question:
                        "Is it optimized for Google?",

                    answer:
                        "Yes. It includes technical SEO, optimized metadata and performance best practices.",
                },

                {
                    question:
                        "Does it include a CMS?",

                    answer:
                        "The project can be prepared for Headless CMS integration depending on your business requirements.",
                },
            ],
        },
        pt: {
            name: "Site Corporativo Básico",

            title: "Site Corporativo Básico",

            level: "🟡 Intermediário",

            category: "Sites Corporativos",

            description:
                "Site corporativo desenvolvido para empresas que precisam de uma presença profissional na internet, com páginas institucionais, otimização para SEO e uma estrutura preparada para crescer.",

            time: "3-5 semanas",

            imageAlt:
                "Site corporativo empresarial",

            target:
                "Empresas, PMEs, consultorias, escritórios profissionais, organizações e negócios que desejam consolidar sua presença digital por meio de um site corporativo moderno.",

            support:
                "30 dias de suporte pós-entrega",

            useCases: [
                "Empresa corporativa",
                "Consultorias",
                "Escritórios de advocacia",
                "Serviços profissionais",
                "Empresas B2B",
                "Site institucional",
            ],

            includes: [
                "Página inicial",
                "Sobre a empresa",
                "Serviços",
                "Equipe",
                "Contato",
                "Formulário de contato",
                "Mapa de localização",
                "SEO técnico",
                "Design responsivo",
            ],

            notIncludes: [
                "Portal do cliente",
                "Funções de usuário",
                "Multilíngue dinâmico",
                "Filtros avançados",
            ],

            features: [
                "Incremental Static Regeneration",
                "SEO otimizado",
                "Responsive Design",
                "Metadados personalizados",
                "Arquitetura escalável",
                "Headless CMS Ready",
                "Google Analytics",
                "Excelente desempenho",
            ],

            deliverables: [
                "Site publicado",
                "Código-fonte",
                "Documentação básica",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Imagem profissional",

                    description:
                        "Fortaleça a confiança de clientes e parceiros por meio de um site corporativo moderno e bem estruturado.",
                },

                {
                    title: "Preparado para crescer",

                    description:
                        "A arquitetura permite adicionar novas seções, serviços e funcionalidades sem a necessidade de refazer o projeto.",
                },

                {
                    title: "SEO desde o início",

                    description:
                        "Implementamos boas práticas técnicas para melhorar a indexação e o posicionamento nos mecanismos de busca.",
                },
            ],

            process: [
                {
                    title: "Levantamento de informações",

                    description:
                        "Analisamos a empresa, sua identidade corporativa e os objetivos do site.",
                },

                {
                    title: "Design e desenvolvimento",

                    description:
                        "Desenvolvemos um site moderno, responsivo e otimizado para desempenho e SEO.",
                },

                {
                    title: "Publicação",

                    description:
                        "Realizamos os testes finais e publicamos o site pronto para produção.",
                },
            ],

            faq: [
                {
                    question:
                        "Posso adicionar novas páginas no futuro?",

                    answer:
                        "Sim. A arquitetura foi preparada para crescer com novas seções e conteúdos.",
                },

                {
                    question:
                        "O site é otimizado para o Google?",

                    answer:
                        "Sim. Inclui SEO técnico, metadados otimizados e boas práticas para mecanismos de busca.",
                },

                {
                    question:
                        "Inclui painel administrativo?",

                    answer:
                        "O projeto pode ser preparado para funcionar com um Headless CMS, embora a implementação completa dependa dos requisitos específicos do projeto.",
                },
            ],
        },
    },
};