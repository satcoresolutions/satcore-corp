import type {
    ServiceDetail,
} from "@/types/service-detail.types";

import {
    softwarePlans,
} from "@/data/plans/software/landing-pages";

export const digitalPresentationCardsDetail: ServiceDetail = {
    core: {
        id: "SRV-DPC",

        slug: "digital-presentation-cards",

        name: "Digital Presentation Cards",

        pillar: "software",

        icon: "credit-card",

        heroImage: "/images/services/software/hero/hero.png",

        plans: [],
    },

    translations: {
        es: {
            title: "Tarjetas de Presentación Digitales (PWA)",

            subtitle: "Comparte tu información profesional de forma moderna y accesible.",

            description: "Desarrollamos tarjetas de presentación digitales con tecnología Progressive Web App (PWA), optimizadas para dispositivos móviles y diseñadas para compartir tu información mediante enlaces, códigos QR o tecnología NFC sin necesidad de aplicaciones adicionales.",

            overview: {
                title: "¿Qué es una Tarjeta de Presentación Digital?",

                description: "Es una solución digital que reemplaza la tarjeta de presentación tradicional, permitiendo compartir información profesional, datos de contacto, redes sociales, portafolio y otros recursos desde una única página optimizada para cualquier dispositivo.",

                image: "/images/subservices/software/presentation-card.png",

                imageAlt: "Tarjeta de presentación digital profesional",

                useCases: [
                    "Profesionales independientes",
                    "Empresas y equipos comerciales",
                    "Networking en eventos",
                    "Consultores y freelancers",
                    "Emprendedores y marcas personales",
                ],
            },

            workflow: {
                badge: "Metodología",

                title: "¿Cómo desarrollamos tu Tarjeta Digital?",

                description: "Seguimos un proceso estructurado para crear una presentación profesional, rápida y optimizada para compartir.",

                steps: [
                    {
                        title: "Descubrimiento",
                        description: "Analizamos tu perfil, marca y la información que deseas presentar."
                    },
                    {
                        title: "Arquitectura del contenido",
                        description: "Organizamos la información para facilitar el acceso a tus datos de contacto y servicios."
                    },
                    {
                        title: "Diseño UI/UX",
                        description: "Creamos una interfaz moderna alineada con tu identidad visual."
                    },
                    {
                        title: "Desarrollo",
                        description: "Construimos una Progressive Web App optimizada para velocidad, compatibilidad y experiencia de usuario."
                    },
                    {
                        title: "Optimización y publicación",
                        description: "Realizamos pruebas, optimizamos el rendimiento y entregamos tu tarjeta lista para compartir."
                    },
                ],
            },

            useCases: {
                title: "¿Cuándo necesitas una Tarjeta Digital?",

                description: "Las tarjetas digitales son ideales para compartir información profesional de manera rápida y efectiva.",

                useCases: [
                    {
                        title: "Networking Profesional",
                        description: "Comparte tus datos de contacto en reuniones y eventos."
                    },
                    {
                        title: "Equipos Comerciales",
                        description: "Facilita que los clientes accedan a la información de cada asesor."
                    },
                    {
                        title: "Marca Personal",
                        description: "Presenta tu perfil profesional desde un único enlace."
                    },
                    {
                        title: "Empresas",
                        description: "Digitaliza las tarjetas de presentación de todo tu equipo."
                    },
                    {
                        title: "Freelancers",
                        description: "Comparte tu portafolio, servicios y canales de contacto."
                    },
                    {
                        title: "Emprendedores",
                        description: "Proyecta una imagen moderna y profesional."
                    },
                ],
            },

            features: {
                title: "¿Qué incluye nuestro servicio?",

                description: "Cada tarjeta digital incorpora funcionalidades diseñadas para mejorar tu presencia profesional.",

                features: [
                    {
                        title: "Diseño Personalizado",
                        description: "Interfaz adaptada a la identidad visual de tu marca."
                    },
                    {
                        title: "Optimización Móvil",
                        description: "Experiencia fluida en smartphones, tablets y computadores."
                    },
                    {
                        title: "Tecnología PWA",
                        description: "Instalable y accesible desde cualquier dispositivo compatible."
                    },
                    {
                        title: "Compatibilidad QR y NFC",
                        description: "Comparte tu tarjeta mediante códigos QR o tarjetas NFC."
                    },
                    {
                        title: "Modo Offline",
                        description: "Disponibilidad de contenido gracias al almacenamiento en caché."
                    },
                    {
                        title: "Sin Base de Datos",
                        description: "Arquitectura estática más segura, rápida y sencilla de mantener."
                    },
                    {
                        title: "Alta Velocidad",
                        description: "Optimización enfocada en tiempos de carga mínimos."
                    },
                    {
                        title: "Escalabilidad",
                        description: "Preparada para incorporar nuevas secciones y funcionalidades."
                    },
                ],
            },

            plansSection: {
                title: "Elige el plan ideal",

                description: "Todos nuestros planes utilizan la misma metodología de trabajo. La diferencia está en el nivel de personalización, funcionalidades e integraciones incluidas en cada uno.",
            },

            seo: {
                title: "Tarjetas de Presentación Digitales PWA | SatCore Solutions",

                description: "Diseño y desarrollo de tarjetas de presentación digitales con tecnología PWA, optimizadas para dispositivos móviles y listas para compartir mediante QR o NFC.",

                keywords: [
                    "tarjeta digital",
                    "tarjeta de presentación digital",
                    "PWA",
                    "QR",
                    "NFC",
                    "nextjs",
                    "desarrollo web",
                ],
            },
        },
        en: {
            title: "Digital Business Cards (PWA)",

            subtitle: "Share your professional information in a modern and accessible way.",

            description: "We develop digital business cards powered by Progressive Web App (PWA) technology, optimized for mobile devices and designed to let you share your professional information through links, QR codes, or NFC technology without requiring additional applications.",

            overview: {
                title: "What is a Digital Business Card?",

                description: "A digital solution that replaces the traditional business card, allowing you to share your professional information, contact details, social media profiles, portfolio, and other resources from a single page optimized for any device.",

                image: "/images/services/software/digital-presentation-cards/digital-presentation-card.png",

                imageAlt: "Professional digital business card",

                useCases: [
                    "Independent Professionals",
                    "Businesses and Sales Teams",
                    "Networking Events",
                    "Consultants and Freelancers",
                    "Entrepreneurs and Personal Brands",
                ],
            },

            workflow: {
                badge: "Methodology",

                title: "How Do We Develop Your Digital Business Card?",

                description: "We follow a structured process to create a professional, fast, and easy-to-share digital business card.",

                steps: [
                    {
                        title: "Discovery",
                        description: "We analyze your profile, brand, and the information you want to present."
                    },
                    {
                        title: "Content Architecture",
                        description: "We organize your information to provide quick access to your contact details and services."
                    },
                    {
                        title: "UI/UX Design",
                        description: "We create a modern interface aligned with your visual identity."
                    },
                    {
                        title: "Development",
                        description: "We build a Progressive Web App optimized for speed, compatibility, and user experience."
                    },
                    {
                        title: "Optimization & Deployment",
                        description: "We test, optimize performance, and deliver your digital business card ready to share."
                    },
                ],
            },

            useCases: {
                title: "When Do You Need a Digital Business Card?",

                description: "Digital business cards are ideal for sharing professional information quickly and effectively.",

                useCases: [
                    {
                        title: "Professional Networking",
                        description: "Share your contact information during meetings and events."
                    },
                    {
                        title: "Sales Teams",
                        description: "Help customers easily access each representative's information."
                    },
                    {
                        title: "Personal Branding",
                        description: "Present your professional profile through a single link."
                    },
                    {
                        title: "Businesses",
                        description: "Digitize business cards across your entire organization."
                    },
                    {
                        title: "Freelancers",
                        description: "Share your portfolio, services, and contact channels."
                    },
                    {
                        title: "Entrepreneurs",
                        description: "Project a modern and professional image."
                    },
                ],
            },

            features: {
                title: "What's Included in Our Service?",

                description: "Every digital business card includes features designed to strengthen your professional presence.",

                features: [
                    {
                        title: "Custom Design",
                        description: "An interface tailored to your brand's visual identity."
                    },
                    {
                        title: "Mobile Optimization",
                        description: "A seamless experience across smartphones, tablets, and desktop computers."
                    },
                    {
                        title: "PWA Technology",
                        description: "Installable and accessible from any compatible device."
                    },
                    {
                        title: "QR & NFC Compatibility",
                        description: "Share your business card using QR codes or NFC cards."
                    },
                    {
                        title: "Offline Mode",
                        description: "Content remains available thanks to offline caching."
                    },
                    {
                        title: "Database-Free Architecture",
                        description: "A static architecture that is more secure, faster, and easier to maintain."
                    },
                    {
                        title: "High Performance",
                        description: "Optimized to deliver minimal loading times."
                    },
                    {
                        title: "Scalability",
                        description: "Built to support future sections and additional features."
                    },
                ],
            },

            plansSection: {
                title: "Choose the Right Plan",

                description: "All our plans follow the same development methodology. The difference lies in the level of customization, features, and integrations included in each plan.",
            },

            seo: {
                title: "PWA Digital Business Cards | SatCore Solutions",

                description: "Design and development of PWA digital business cards optimized for mobile devices and ready to be shared via QR codes or NFC.",

                keywords: [
                    "digital business card",
                    "business card",
                    "PWA",
                    "QR",
                    "NFC",
                    "Next.js",
                    "web development",
                ],
            },
        },
        pt: {
            title: "Cartões de Visita Digitais (PWA)",

            subtitle: "Compartilhe suas informações profissionais de forma moderna e acessível.",

            description: "Desenvolvemos cartões de visita digitais com tecnologia Progressive Web App (PWA), otimizados para dispositivos móveis e projetados para compartilhar suas informações profissionais por meio de links, códigos QR ou tecnologia NFC, sem a necessidade de aplicativos adicionais.",

            overview: {
                title: "O que é um Cartão de Visita Digital?",

                description: "É uma solução digital que substitui o cartão de visita tradicional, permitindo compartilhar informações profissionais, dados de contato, redes sociais, portfólio e outros recursos em uma única página otimizada para qualquer dispositivo.",

                image: "/images/services/software/digital-presentation-cards/digital-presentation-card.png",

                imageAlt: "Cartão de visita digital profissional",

                useCases: [
                    "Profissionais Autônomos",
                    "Empresas e Equipes Comerciais",
                    "Networking em Eventos",
                    "Consultores e Freelancers",
                    "Empreendedores e Marcas Pessoais",
                ],
            },

            workflow: {
                badge: "Metodologia",

                title: "Como Desenvolvemos o Seu Cartão de Visita Digital?",

                description: "Seguimos um processo estruturado para criar um cartão de visita profissional, rápido e otimizado para compartilhamento.",

                steps: [
                    {
                        title: "Descoberta",
                        description: "Analisamos seu perfil, sua marca e as informações que deseja apresentar."
                    },
                    {
                        title: "Arquitetura de Conteúdo",
                        description: "Organizamos as informações para facilitar o acesso aos seus dados de contato e serviços."
                    },
                    {
                        title: "Design UI/UX",
                        description: "Criamos uma interface moderna alinhada à identidade visual da sua marca."
                    },
                    {
                        title: "Desenvolvimento",
                        description: "Construímos uma Progressive Web App otimizada para velocidade, compatibilidade e experiência do usuário."
                    },
                    {
                        title: "Otimização e Publicação",
                        description: "Realizamos testes, otimizamos o desempenho e entregamos seu cartão pronto para ser compartilhado."
                    },
                ],
            },

            useCases: {
                title: "Quando Você Precisa de um Cartão de Visita Digital?",

                description: "Os cartões de visita digitais são ideais para compartilhar informações profissionais de forma rápida e eficiente.",

                useCases: [
                    {
                        title: "Networking Profissional",
                        description: "Compartilhe seus dados de contato em reuniões e eventos."
                    },
                    {
                        title: "Equipes Comerciais",
                        description: "Facilite o acesso dos clientes às informações de cada consultor."
                    },
                    {
                        title: "Marca Pessoal",
                        description: "Apresente seu perfil profissional por meio de um único link."
                    },
                    {
                        title: "Empresas",
                        description: "Digitalize os cartões de visita de toda a sua equipe."
                    },
                    {
                        title: "Freelancers",
                        description: "Compartilhe seu portfólio, serviços e canais de contato."
                    },
                    {
                        title: "Empreendedores",
                        description: "Projete uma imagem moderna e profissional."
                    },
                ],
            },

            features: {
                title: "O Que Está Incluído em Nosso Serviço?",

                description: "Cada cartão de visita digital inclui recursos desenvolvidos para fortalecer sua presença profissional.",

                features: [
                    {
                        title: "Design Personalizado",
                        description: "Interface adaptada à identidade visual da sua marca."
                    },
                    {
                        title: "Otimização para Dispositivos Móveis",
                        description: "Experiência fluida em smartphones, tablets e computadores."
                    },
                    {
                        title: "Tecnologia PWA",
                        description: "Instalável e acessível em qualquer dispositivo compatível."
                    },
                    {
                        title: "Compatibilidade com QR e NFC",
                        description: "Compartilhe seu cartão utilizando códigos QR ou cartões NFC."
                    },
                    {
                        title: "Modo Offline",
                        description: "Conteúdo disponível mesmo sem conexão graças ao armazenamento em cache."
                    },
                    {
                        title: "Arquitetura sem Banco de Dados",
                        description: "Uma arquitetura estática mais segura, rápida e fácil de manter."
                    },
                    {
                        title: "Alto Desempenho",
                        description: "Otimizado para oferecer tempos de carregamento mínimos."
                    },
                    {
                        title: "Escalabilidade",
                        description: "Preparado para incorporar novas seções e funcionalidades."
                    },
                ],
            },

            plansSection: {
                title: "Escolha o Plano Ideal",

                description: "Todos os nossos planos seguem a mesma metodologia de desenvolvimento. A diferença está no nível de personalização, recursos e integrações incluídos em cada plano.",
            },

            seo: {
                title: "Cartões de Visita Digitais PWA | SatCore Solutions",

                description: "Design e desenvolvimento de cartões de visita digitais com tecnologia PWA, otimizados para dispositivos móveis e prontos para compartilhamento por QR Code ou NFC.",

                keywords: [
                    "cartão de visita digital",
                    "cartão digital",
                    "PWA",
                    "QR Code",
                    "NFC",
                    "Next.js",
                    "desenvolvimento web",
                ],
            },
        },
    },
    plans: []
};