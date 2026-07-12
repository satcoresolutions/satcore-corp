import type {
    ServicePlan,
} from "@/types/plan.types";

export const personalCard: ServicePlan = {
    core: {
        // ────────────────────────────────────
        // Identidad
        // ────────────────────────────────────

        id: "CRD-001",

        slug: "personal-card",

        // ────────────────────────────────────
        // Comercial
        // ────────────────────────────────────

        complexity: "⭐ (1/5)",

        price: "$150 - $250 USD",

        pricingType: "fixed",

        automationLevel: "low",

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
            "PWA",
            "QR Code",
            "NFC Ready",
        ],

        integrations: [
            "Google Analytics",
            "Google Maps",
            "WhatsApp",
        ],

        // ────────────────────────────────────
        // Multimedia
        // ────────────────────────────────────

        heroImage:
            "/images/services/software/hero/hero-lp.png",

        image:
            "/images/services/software/hero/hero-lp.png",
    },

    translations: {
        es: {
            name: "Tarjeta Digital Personal",

            title:
                "Tarjeta Digital Personal",

            level: "🟢 Básico",

            category:
                "Tarjetas Digitales",

            description:
                "Tarjeta de presentación digital tipo PWA diseñada para compartir tu información profesional mediante QR o NFC, optimizada para dispositivos móviles y disponible incluso sin conexión.",

            time: "3-5 días",

            imageAlt:
                "Tarjeta de presentación digital personal",

            target:
                "Profesionales independientes, freelancers, consultores, ejecutivos, asesores comerciales y emprendedores que desean reemplazar las tarjetas físicas por una solución digital moderna.",

            support:
                "7 días soporte post-entrega",

            useCases: [
                "Networking profesional",
                "Eventos y conferencias",
                "Reuniones comerciales",
                "Tarjeta mediante QR",
                "Tarjeta mediante NFC",
                "Firma de correo",
            ],

            includes: [
                "Perfil profesional personalizado",
                "Fotografía o logotipo",
                "Información de contacto",
                "Enlaces a redes sociales",
                "Botón de WhatsApp",
                "Botón de llamada",
                "Botón de correo",
                "Ubicación en Google Maps",
                "Código QR listo para compartir",
                "Instalable como aplicación (PWA)",
            ],

            notIncludes: [
                "Panel administrativo",
                "Múltiples perfiles",
                "Base de datos",
                "Gestión de empleados",
                "Automatizaciones",
            ],

            features: [
                "100% Responsive",
                "Progressive Web App (PWA)",
                "Funciona sin internet",
                "Carga ultrarrápida",
                "Optimizada para SEO",
                "Compatible con QR",
                "Compatible con NFC",
                "Guardar contacto automáticamente",
            ],

            deliverables: [
                "Tarjeta digital publicada",
                "Código fuente",
                "Código QR",
                "Manual básico de uso",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Siempre disponible",

                    description:
                        "Tu tarjeta funciona como una aplicación web instalable y puede abrirse incluso sin conexión gracias al almacenamiento offline.",
                },

                {
                    title:
                        "Comparte en segundos",

                    description:
                        "Entrega tu información profesional mediante un simple enlace, código QR o tarjeta NFC sin instalar aplicaciones adicionales.",
                },

                {
                    title:
                        "Imagen profesional",

                    description:
                        "Ofrece una experiencia moderna, elegante y mucho más completa que una tarjeta de presentación tradicional.",
                },
            ],

            process: [
                {
                    title:
                        "Recolección de información",

                    description:
                        "Recibimos tu información profesional, fotografía, logotipo, redes sociales y datos de contacto.",
                },

                {
                    title:
                        "Diseño y desarrollo",

                    description:
                        "Construimos una tarjeta digital completamente personalizada y optimizada para dispositivos móviles.",
                },

                {
                    title:
                        "Entrega",

                    description:
                        "Publicamos la tarjeta, generamos el código QR y entregamos todo listo para compartir.",
                },
            ],

            faq: [
                {
                    question:
                        "¿Necesito instalar alguna aplicación?",

                    answer:
                        "No. La tarjeta funciona directamente desde cualquier navegador y además puede instalarse como aplicación PWA si el usuario lo desea.",
                },

                {
                    question:
                        "¿Puedo compartirla mediante un código QR?",

                    answer:
                        "Sí. Incluimos un código QR listo para imprimir o utilizar en presentaciones, redes sociales y material publicitario.",
                },

                {
                    question:
                        "¿Funciona con tarjetas NFC?",

                    answer:
                        "Sí. Está preparada para utilizarse con tarjetas NFC compatibles, permitiendo compartir tu información con solo acercar la tarjeta a un teléfono compatible.",
                },
            ],
        },

        en: {
            name: "Personal Digital Card",

            title:
                "Personal Digital Card",

            level: "🟢 Basic",

            category:
                "Digital Business Cards",

            description:
                "A Progressive Web App (PWA) business card designed to share your professional information through QR codes or NFC, fully optimized for mobile devices and available even offline.",

            time: "3-5 days",

            imageAlt:
                "Personal digital business card",

            target:
                "Freelancers, consultants, entrepreneurs, sales professionals and executives looking for a modern replacement for traditional business cards.",

            support:
                "7 days post-delivery support",

            useCases: [
                "Professional networking",
                "Business meetings",
                "Events and conferences",
                "QR business card",
                "NFC business card",
                "Email signature",
            ],

            includes: [
                "Custom professional profile",
                "Profile picture or logo",
                "Contact information",
                "Social media links",
                "WhatsApp button",
                "Call button",
                "Email button",
                "Google Maps location",
                "Ready-to-use QR code",
                "Installable PWA",
            ],

            notIncludes: [
                "Admin dashboard",
                "Multiple profiles",
                "Database",
                "Employee management",
                "Advanced automations",
            ],

            features: [
                "100% Responsive",
                "Progressive Web App",
                "Offline support",
                "Fast loading",
                "SEO optimized",
                "QR compatible",
                "NFC compatible",
                "One-tap contact saving",
            ],

            deliverables: [
                "Published digital card",
                "Source code",
                "QR code",
                "Quick user guide",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Always available",

                    description:
                        "Works as an installable web application and remains accessible even without an internet connection.",
                },

                {
                    title:
                        "Instant sharing",

                    description:
                        "Share your professional profile instantly using a link, QR code or NFC card.",
                },

                {
                    title:
                        "Modern professional image",

                    description:
                        "Provide a premium digital experience that goes far beyond a traditional paper business card.",
                },
            ],

            process: [
                {
                    title:
                        "Information gathering",

                    description:
                        "We collect your professional information, logo, photo and contact details.",
                },

                {
                    title:
                        "Design & development",

                    description:
                        "We create a fully customized mobile-first digital business card.",
                },

                {
                    title:
                        "Deployment",

                    description:
                        "Your card is published online and delivered with its QR code ready to share.",
                },
            ],

            faq: [
                {
                    question:
                        "Do I need to install an app?",

                    answer:
                        "No. It works directly in any browser and can also be installed as a Progressive Web App.",
                },

                {
                    question:
                        "Can I share it using a QR code?",

                    answer:
                        "Yes. A ready-to-use QR code is included for printing, presentations and marketing materials.",
                },

                {
                    question:
                        "Is it compatible with NFC cards?",

                    answer:
                        "Yes. It is designed to work with compatible NFC business cards for instant contact sharing.",
                },
            ],
        },
        pt: {
            name: "Cartão Digital Pessoal",

            title: "Cartão Digital Pessoal",

            level: "🟢 Básico",

            category: "Cartões Digitais",

            description:
                "Cartão de visita digital no formato PWA, desenvolvido para compartilhar suas informações profissionais por meio de QR Code ou NFC, otimizado para dispositivos móveis e disponível mesmo sem conexão com a internet.",

            time: "3-5 dias",

            imageAlt: "Cartão de visita digital pessoal",

            target:
                "Profissionais autônomos, freelancers, consultores, executivos, representantes comerciais e empreendedores que desejam substituir os cartões físicos por uma solução digital moderna.",

            support: "7 dias de suporte pós-entrega",

            useCases: [
                "Networking profissional",
                "Eventos e conferências",
                "Reuniões comerciais",
                "Cartão via QR Code",
                "Cartão via NFC",
                "Assinatura de e-mail",
            ],

            includes: [
                "Perfil profissional personalizado",
                "Foto ou logotipo",
                "Informações de contato",
                "Links para redes sociais",
                "Botão do WhatsApp",
                "Botão de ligação",
                "Botão de e-mail",
                "Localização no Google Maps",
                "QR Code pronto para compartilhar",
                "Instalável como aplicativo (PWA)",
            ],

            notIncludes: [
                "Painel administrativo",
                "Múltiplos perfis",
                "Banco de dados",
                "Gerenciamento de funcionários",
                "Automações",
            ],

            features: [
                "100% Responsivo",
                "Progressive Web App (PWA)",
                "Funciona sem internet",
                "Carregamento ultrarrápido",
                "Otimizado para SEO",
                "Compatível com QR Code",
                "Compatível com NFC",
                "Salvar contato automaticamente",
            ],

            deliverables: [
                "Cartão digital publicado",
                "Código-fonte",
                "QR Code",
                "Manual básico de uso",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Sempre disponível",

                    description:
                        "Seu cartão funciona como um aplicativo web instalável e pode ser aberto mesmo sem conexão com a internet graças ao armazenamento offline.",
                },

                {
                    title: "Compartilhe em segundos",

                    description:
                        "Compartilhe suas informações profissionais por meio de um simples link, QR Code ou cartão NFC, sem a necessidade de instalar aplicativos adicionais.",
                },

                {
                    title: "Imagem profissional",

                    description:
                        "Ofereça uma experiência moderna, elegante e muito mais completa do que um cartão de visita tradicional.",
                },
            ],

            process: [
                {
                    title: "Coleta de informações",

                    description:
                        "Recebemos suas informações profissionais, foto, logotipo, redes sociais e dados de contato.",
                },

                {
                    title: "Design e desenvolvimento",

                    description:
                        "Desenvolvemos um cartão digital totalmente personalizado e otimizado para dispositivos móveis.",
                },

                {
                    title: "Entrega",

                    description:
                        "Publicamos o cartão, geramos o QR Code e entregamos tudo pronto para compartilhar.",
                },
            ],

            faq: [
                {
                    question: "Preciso instalar algum aplicativo?",

                    answer:
                        "Não. O cartão funciona diretamente em qualquer navegador e também pode ser instalado como um aplicativo PWA, caso o usuário deseje.",
                },

                {
                    question: "Posso compartilhá-lo por meio de um QR Code?",

                    answer:
                        "Sim. Incluímos um QR Code pronto para impressão ou para uso em apresentações, redes sociais e materiais publicitários.",
                },

                {
                    question: "Funciona com cartões NFC?",

                    answer:
                        "Sim. Está preparado para funcionar com cartões NFC compatíveis, permitindo compartilhar suas informações apenas aproximando o cartão de um smartphone compatível.",
                },
            ],
        },
    },
};