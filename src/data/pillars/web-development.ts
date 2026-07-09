import type { Pillar }  from "@/types/pillar.types";

import {
  Search,
  Palette,
  Code,
  Rocket,
  RefreshCw,
} from "lucide-react";

export const webDevelopment: Pillar = {
  core: {
    id: "web-development",

    pillar: "software",

    slug: "web-development",

    name: "Web Development",

    icon: "code",

    type: "Software Development",

    image:
      "/images/hero/hero-software.png",

    images: [
      "/img/services/web-development/1.webp",
      "/img/services/web-development/2.webp",
    ],

    technologies: [
      // FRONTEND
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Angular",

      // BACKEND
      "Node.js",
      "Express",
      "GraphQL",

      // DATABASE
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Firebase",

      // INFRA
      "AWS",
      "Vercel",
      "Docker",

      // TOOLS
      "Git",
      "GitHub",
    ],
  },

  href: "/services/software",

  translations: {
    es: {
      title:
        "Desarrollo Web",

      category:
        "Desarrollo Web",

      description:
        "Diseñamos y desarrollamos soluciones web modernas, escalables y de alto rendimiento para empresas que buscan fortalecer su presencia digital, optimizar procesos y acelerar su crecimiento.",

      imageAlt:
        "Servicio de desarrollo web",

      hero: {
        badge:
          "Desarrollo de Software",
      },

      techStack: {
        title:
          "Tecnologías que utilizamos",

        description:
          "Trabajamos con un stack moderno y probado para desarrollar aplicaciones rápidas, seguras y preparadas para escalar conforme crece tu negocio.",
      },

      serviceCatalog: {
        title:
          "Nuestros servicios",

        description:
          "Explora nuestras soluciones de desarrollo web diseñadas para cubrir diferentes necesidades, desde landing pages hasta plataformas empresariales.",
      },

      process: {
        title: "Nuestro proceso de trabajo",

        description:
          "Seguimos una metodología clara que garantiza calidad, comunicación constante y entregas enfocadas en resultados.",

        steps: [
          {
            title: "Descubrimiento",
            subtitle:
              "Entendemos tu negocio, objetivos y alcance del proyecto.",
            icon: Search,
          },
          {
            title: "Diseño UX/UI",
            subtitle:
              "Wireframes, prototipos y diseño visual profesional.",
            icon: Palette,
          },
          {
            title: "Desarrollo",
            subtitle:
              "Construcción del sistema frontend, backend y base de datos.",
            icon: Code,
          },
          {
            title: "Testing & Deploy",
            subtitle:
              "Pruebas, optimización y puesta en producción.",
            icon: Rocket,
          },
          {
            title: "Mantenimiento",
            subtitle:
              "Soporte, mejoras y evolución del sistema.",
            icon: RefreshCw,
          },
        ],
      },

      scope: {
        title:
          "Seguridad desde el desarrollo",

        description:
          "Aplicamos buenas prácticas de desarrollo seguro para proteger la información, reducir vulnerabilidades y construir aplicaciones confiables.",

        cards: [
          {
            title: "Incluye",

            type: "include",

            items: [
              "Diseño responsive (mobile, tablet, desktop)",
              "Hasta 10 páginas o secciones",
              "Formulario de contacto funcional",
              "Integración básica SEO",
              "Panel administrativo (CMS)",
              "Capacitación de uso",
              "Documentación básica",
            ],
          },
          {
            title: "No incluye",

            type: "exclude",

            items: [
              "Dominio y hosting",
              "Marketing digital",
              "Contenido o copywriting avanzado",
              "Integraciones de pago complejas",
              "Apps móviles nativas",
            ],
          },
        ],
      },

      pricing: {
        title:
          "Planes y precios",

        description:
          "Cada proyecto se adapta a las necesidades de tu empresa. Contamos con diferentes niveles de servicio para ajustarnos a tu presupuesto.",

        plans: [
          {
            title:
              "Landing Page",

            price:
              "$1.500.000 - $3.500.000",

            time:
              "2-3 semanas promedio",
          },
          {
            title:
              "Web Corporativa",

            price:
              "$4.000.000 - $15.000.000",

            time:
              "4-10 semanas promedio",
          },
          {
            title:
              "E-commerce",

            price:
              "$6.000.000 - $25.000.000",

            time:
              "6-16 semanas promedio",
          },
          {
            title:
              "Web App / SaaS",

            price:
              "Desde $15.000.000",

            time:
              "Cotización personalizada",
          },
        ],
      },

      guarantee: {
        title:
          "Nuestra garantía",

        description:
          "Respaldamos cada proyecto con buenas prácticas, documentación y acompañamiento durante la entrega para garantizar un resultado profesional.",

        cards: [
          {
            title:
              "Garantía de 30 días",

            description:
              "Incluye la corrección de errores y ajustes menores identificados después de la entrega del proyecto. No contempla nuevas funcionalidades ni cambios en el alcance acordado.",

            icon:
              "shield-check",
          },
          {
            title:
              "Plan de mantenimiento",

            description:
              "Ofrecemos mantenimiento continuo con actualizaciones de seguridad, copias de respaldo, soporte técnico y mejoras evolutivas según el plan contratado.",

            icon:
              "wrench",
          },
        ],
      },

      requirements: {
        title:
          "¿Qué necesitamos de ti?",

        description:
          "Conocer tus objetivos, tu negocio y los requerimientos del proyecto nos permite construir una solución alineada con tus expectativas.",

        items: [
          {
            title:
              "Información del proyecto",

            description:
              "Comparte los objetivos, el alcance y cualquier información relevante para comprender las necesidades de tu proyecto.",
          },
          {
            title:
              "Interlocutor principal",

            description:
              "Designa una persona responsable para centralizar la comunicación y agilizar la toma de decisiones.",
          },
          {
            title:
              "Revisión y aprobación",

            description:
              "Valida los avances y entregables dentro de los tiempos acordados para mantener el cronograma del proyecto.",
          },
          {
            title:
              "Accesos y recursos",

            description:
              "Proporciona los accesos necesarios a hosting, dominios, APIs, servicios de terceros u otros recursos técnicos.",
          },
          {
            title:
              "Cumplimiento del cronograma",

            description:
              "Realiza los pagos y entrega la información solicitada según las fechas establecidas para evitar retrasos.",
          },
          {
            title:
              "Participación activa",

            description:
              "Asiste a las reuniones de seguimiento y proporciona retroalimentación para garantizar el éxito del proyecto.",
          },
        ],
      },

      legal: {
        title:
          "Propiedad intelectual y aspectos legales",

        description:
          "Todos nuestros desarrollos contemplan acuerdos claros sobre propiedad intelectual, confidencialidad y entrega de los activos del proyecto.",

        items: [
          {
            element: "Código fuente",

            owner:
              "Cliente (post pago total)",

            license:
              "Uso ilimitado",
          },

          {
            element:
              "Diseño UI",

            owner:
              "Cliente",

            license:
              "Uso ilimitado",
          },

          {
            element:
              "Librerías externas",

            owner:
              "Terceros",

            license:
              "Open Source / MIT",
          },

          {
            element:
              "Metodología interna",

            owner:
              "SatCore Solutions",

            license:
              "No transferible",
          },
        ],
      },

      cta: {
        title:
          "¿Listo para comenzar tu proyecto?",

        description:
          "Conversemos sobre tu idea y construyamos una solución web moderna que impulse el crecimiento de tu negocio.",

        button:
          "Solicitar cotización",
      },
    },

    en: {
      title:
        "Web Development",

      category:
        "Web Development",

      description:
        "We design and develop modern, scalable, high-performance web solutions for businesses looking to strengthen their digital presence, optimize processes, and accelerate growth.",

      imageAlt:
        "Web development service",

      hero: {
        badge:
          "Software Development",
      },

      techStack: {
        title:
          "Technologies We Use",

        description:
          "We work with a modern and proven technology stack to build fast, secure, and scalable applications that grow alongside your business.",
      },

      serviceCatalog: {
        title:
          "Our Services",

        description:
          "Explore our web development solutions designed to meet different business needs, from landing pages to enterprise platforms.",
      },

      process: {
        title: "Our Development Process",

        description:
          "We follow a structured workflow that ensures quality, continuous communication, and results-driven deliveries.",

        steps: [
          {
            title: "Discovery",
            subtitle:
              "We understand your business, goals, and project scope.",
            icon: Search,
          },
          {
            title: "UX/UI Design",
            subtitle:
              "Wireframes, prototypes, and professional visual design.",
            icon: Palette,
          },
          {
            title: "Development",
            subtitle:
              "Building the frontend, backend, and database architecture.",
            icon: Code,
          },
          {
            title: "Testing & Deployment",
            subtitle:
              "Testing, optimization, and production deployment.",
            icon: Rocket,
          },
          {
            title: "Maintenance",
            subtitle:
              "Ongoing support, improvements, and system evolution.",
            icon: RefreshCw,
          },
        ],
      },

      scope: {
        title:
          "Security by Design",

        description:
          "We implement secure development best practices to protect your data, reduce vulnerabilities, and deliver reliable applications.",

        cards: [
          {
            title: "Included",

            type: "include",

            items: [
              "Responsive design (mobile, tablet, and desktop)",
              "Up to 10 pages or sections",
              "Fully functional contact form",
              "Basic SEO implementation",
              "Content Management System (CMS)",
              "User training session",
              "Basic project documentation",
            ],
          },
          {
            title: "Not Included",

            type: "exclude",

            items: [
              "Domain registration and hosting",
              "Digital marketing services",
              "Advanced content creation or copywriting",
              "Complex payment gateway integrations",
              "Native mobile applications",
            ],
          },
        ],
      },

      pricing: {
        title:
          "Plans & Pricing",

        description:
          "Every project is tailored to your business needs. We offer different service levels to match your goals and budget.",

        plans: [
          {
            title:
              "Landing Page",

            price:
              "$1,500,000 - $3,500,000",

            time:
             "2–3 weeks",
          },
          {
            title:
              "Corporate Website",

            price:
              "$4,000,000 - $15,000,000",

            time:
              "4–10 weeks",
          },
          {
            title:
              "E-commerce",

            price:
              "$6,000,000 - $25,000,000",

            time:
              "6–16 weeks",
          },
          {
            title:
              "Web App / SaaS",

            price:
              "Starting at $15,000,000",

            time:
              "Custom quote",
          },
        ],
      },

      guarantee: {
        title:
          "Our Guarantee",

        description:
          "Every project is backed by best practices, proper documentation, and post-delivery support to ensure a professional outcome.",

        cards: [
          {
            title:
              "30-Day Warranty",

            description:
              "Includes bug fixes and minor adjustments identified after project delivery. It does not cover new features or changes to the original project scope.",

            icon:
              "shield-check",
          },
          {
            title:
              "Maintenance Plan",

            description:
              "We provide ongoing maintenance with security updates, automated backups, technical support, and continuous improvements based on the selected maintenance plan.",

            icon:
              "wrench",
          },
        ],
      },

      requirements: {
        title:
          "What We Need From You",

        description:
          "Understanding your business, objectives, and project requirements allows us to build a solution aligned with your expectations.",

        items: [
          {
            title:
              "Project Information",

            description:
              "Share your goals, project scope, and any relevant information to help us fully understand your requirements.",
          },
          {
            title:
              "Primary Point of Contact",

            description:
              "Assign a dedicated person to centralize communication and streamline decision-making throughout the project.",
          },
          {
            title:
              "Review and Approval",

            description:
              "Review project milestones and deliverables within the agreed timeframes to keep the project on schedule.",
          },
          {
            title:
              "Access and Resources",

            description:
              "Provide access to hosting, domains, APIs, third-party services, and any other technical resources required for development.",
          },
          {
            title:
              "Project Timeline Commitment",

            description:
              "Ensure timely payments and provide the requested information according to the agreed schedule to avoid delays.",
          },
          {
            title:
              "Active Collaboration",

            description:
              "Participate in project meetings and provide timely feedback to help ensure a successful outcome.",
          },
        ],
      },

      legal: {
        title:
          "Intellectual Property & Legal",

        description:
          "Our projects include clear agreements regarding intellectual property, confidentiality, and the delivery of all project assets.",

        items: [
          {
            element:
              "Source Code",

            owner:
              "Client (after full payment)",

            license:
              "Unlimited Use",
          },

          {
            element:
              "UI Design",

            owner:
              "Client",

            license:
              "Unlimited Use",
          },

          {
            element:
              "Third-Party Libraries",

            owner:
              "Third Parties",

            license:
              "Open Source / MIT",
          },

          {
            element:
              "Internal Methodology",

            owner:
              "SatCore Solutions",

            license:
              "Non-transferable",
          },
        ],
      },

      cta: {
        title:
          "Ready to Start Your Project?",

        description:
          "Let's discuss your idea and build a modern web solution that helps your business grow.",

        button:
          "Request a Quote",
      },
    },

    pt: {
      title:
        "Desenvolvimento Web",

      category:
        "Desenvolvimento Web",

      description:
        "Projetamos e desenvolvemos soluções web modernas, escaláveis e de alto desempenho para empresas que desejam fortalecer sua presença digital, otimizar processos e acelerar seu crescimento.",

      imageAlt:
        "Serviço de desenvolvimento web",

      hero: {
        badge:
          "Desenvolvimento de Software",
      },

      techStack: {
        title:
          "Tecnologias que Utilizamos",

        description:
          "Trabalhamos com uma stack moderna e comprovada para desenvolver aplicações rápidas, seguras e preparadas para crescer junto com o seu negócio.",
      },

      serviceCatalog: {
        title:
          "Nossos Serviços",

        description:
          "Conheça nossas soluções de desenvolvimento web, criadas para atender diferentes necessidades, desde landing pages até plataformas corporativas.",
      },

      process: {
        title: "Nosso Processo de Desenvolvimento",

        description:
          "Seguimos um fluxo de trabalho estruturado que garante qualidade, comunicação contínua e entregas focadas em resultados.",

        steps: [
          {
            title: "Descoberta",
            subtitle:
              "Entendemos seu negócio, objetivos e o escopo do projeto.",
            icon: Search,
          },
          {
            title: "Design UX/UI",
            subtitle:
              "Wireframes, protótipos e design visual profissional.",
            icon: Palette,
          },
          {
            title: "Desenvolvimento",
            subtitle:
              "Construção da arquitetura de frontend, backend e banco de dados.",
            icon: Code,
          },
          {
            title: "Testes e Implantação",
            subtitle:
              "Testes, otimização e implantação em produção.",
            icon: Rocket,
          },
          {
            title: "Manutenção",
            subtitle:
              "Suporte contínuo, melhorias e evolução do sistema.",
            icon: RefreshCw,
          },
        ],
      },

      scope: {
        title:
          "Segurança Desde o Desenvolvimento",

        description:
          "Aplicamos boas práticas de desenvolvimento seguro para proteger seus dados, reduzir vulnerabilidades e criar aplicações confiáveis.",

        cards: [
          {
            title: "Inclui",

            type: "include",

            items: [
              "Design responsivo (mobile, tablet e desktop)",
              "Até 10 páginas ou seções",
              "Formulário de contato funcional",
              "Implementação básica de SEO",
              "Sistema de Gerenciamento de Conteúdo (CMS)",
              "Treinamento para utilização",
              "Documentação básica do projeto",
            ],
          },
          {
            title: "Não Inclui",

            type: "exclude",

            items: [
              "Registro de domínio e hospedagem",
              "Serviços de marketing digital",
              "Criação avançada de conteúdo ou copywriting",
              "Integrações complexas com gateways de pagamento",
              "Aplicativos móveis nativos",
            ],
          },
        ],
      },

      pricing: {
        title:
          "Planos e Preços",

        description:
          "Cada projeto é adaptado às necessidades da sua empresa. Oferecemos diferentes níveis de serviço para atender aos seus objetivos e orçamento.",

        plans: [
          {
            title:
              "Landing Page",

            price:
              "R$ 1.500.000 - R$ 3.500.000",

            time:
              "2–3 semanas",
          },
          {
            title:
              "Site Institucional",

            price:
              "R$ 4.000.000 - R$ 15.000.000",

            time:
              "4–10 semanas",
          },
          {
            title:
              "E-commerce",

            price:
              "R$ 6.000.000 - R$ 25.000.000",

            time:
              "6–16 semanas",
          },
          {
            title:
              "Aplicação Web / SaaS",

            price:
              "A partir de R$ 15.000.000",

            time:
              "Orçamento personalizado",
          },
        ],
      },

      guarantee: {
        title:
          "Nossa Garantia",

        description:
          "Todos os projetos são entregues seguindo boas práticas, documentação completa e suporte pós-entrega para garantir um resultado profissional.",

        cards: [
          {
            title:
              "Garantia de 30 Dias",

            description:
              "Inclui a correção de bugs e pequenos ajustes identificados após a entrega do projeto. Não contempla novas funcionalidades nem alterações no escopo originalmente acordado.",

            icon:
              "shield-check",
          },
          {
            title:
              "Plano de Manutenção",

            description:
              "Oferecemos manutenção contínua com atualizações de segurança, backups automáticos, suporte técnico e melhorias evolutivas de acordo com o plano contratado.",

            icon:
              "wrench",
          },
        ],
      },

      requirements: {
        title:
          "O Que Precisamos de Você",

        description:
          "Compreender seu negócio, seus objetivos e os requisitos do projeto nos permite desenvolver uma solução alinhada às suas expectativas.",

        items: [
          {
            title:
              "Informações do Projeto",

            description:
              "Compartilhe os objetivos, o escopo e todas as informações relevantes para que possamos compreender plenamente as necessidades do seu projeto.",
          },
          {
            title:
              "Responsável pelo Projeto",

            description:
              "Designe uma pessoa como principal ponto de contato para centralizar a comunicação e agilizar a tomada de decisões.",
          },
          {
            title:
              "Revisão e Aprovação",

            description:
              "Analise e aprove as entregas dentro dos prazos acordados para manter o cronograma do projeto em dia.",
          },
          {
            title:
              "Acessos e Recursos",

            description:
              "Forneça os acessos necessários a hospedagem, domínios, APIs, serviços de terceiros e demais recursos técnicos exigidos para o desenvolvimento.",
          },
          {
            title:
              "Cumprimento do Cronograma",

            description:
              "Realize os pagamentos e envie as informações solicitadas conforme o cronograma estabelecido para evitar atrasos.",
          },
          {
            title:
              "Participação Ativa",

            description:
              "Participe das reuniões de acompanhamento e forneça feedback contínuo para garantir o sucesso do projeto.",
          },
        ],
      },

      legal: {
        title:
          "Propriedade Intelectual e Aspectos Legais",

        description:
          "Nossos projetos incluem acordos claros sobre propriedade intelectual, confidencialidade e a entrega de todos os ativos desenvolvidos.",

        items: [
          {
            element:
              "Código-fonte",

            owner:
              "Cliente (após o pagamento integral)",

            license:
              "Uso ilimitado",
          },

          {
            element:
              "Design de UI",

            owner:
              "Cliente",

            license:
              "Uso ilimitado",
          },

          {
            element:
              "Bibliotecas de Terceiros",

            owner:
              "Terceiros",

            license:
              "Open Source / MIT",
          },

          {
            element:
              "Metodologia Interna",

            owner:
              "SatCore Solutions",

            license:
              "Intransferível",
          },
        ],
      },

      cta: {
        title:
          "Pronto para Começar Seu Projeto?",

        description:
          "Vamos conversar sobre sua ideia e desenvolver uma solução web moderna que impulsione o crescimento do seu negócio.",

        button:
          "Solicitar Orçamento",
      },
    },
  },
};