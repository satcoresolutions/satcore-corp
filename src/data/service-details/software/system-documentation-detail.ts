import type {
  ServiceDetail,
} from "@/types/service-detail.types";

import {
  systemDocumentation,
} from "@/data/plans/software/system-documentation";

export const systemDocumentationDetail: ServiceDetail = {
  core: {
    id: "SRV-SD",

    slug: "system-documentation",

    name: "System Documentation",

    pillar: "software",

    icon: "book-open",

    heroImage: "/images/services/software/hero/hero.png",

    plans: systemDocumentation,
  },

  translations: {
    es: {
      title: "Documentación de Sistemas",

      subtitle:
        "Documenta, organiza y facilita el acceso al conocimiento de tus sistemas",

      description:
        "Desarrollamos soluciones de documentación digital para centralizar, organizar y facilitar el acceso a la información técnica y operativa de sistemas, aplicaciones, APIs y procesos digitales.",

      overview: {
        title: "¿Qué es la Documentación de Sistemas?",

        description:
          "La documentación de sistemas permite organizar y presentar información técnica, funcional y operativa de manera clara y accesible. Ayuda a equipos, usuarios y organizaciones a comprender, utilizar y mantener sus sistemas y servicios digitales.",

        image:
          "/images/subservices/software/system-documentation.png",

        imageAlt:
          "Documentación digital de sistemas, aplicaciones y APIs",

        useCases: [
          "Centros de ayuda",
          "Documentación de APIs",
          "Documentación técnica",
          "Manuales de sistemas",
          "Guías de usuario",
          "Bases de conocimiento",
        ],
      },

      workflow: {
        badge: "Metodología",

        title: "¿Cómo desarrollamos tu documentación?",

        description:
          "Organizamos la información de tus sistemas para crear documentación clara, estructurada y fácil de mantener.",

        steps: [
          {
            title: "Análisis",

            description:
              "Identificamos los sistemas, usuarios, procesos y contenidos que necesitan ser documentados.",
          },

          {
            title: "Estructuración",

            description:
              "Definimos categorías, navegación, jerarquías y relaciones entre los diferentes contenidos.",
          },

          {
            title: "Diseño",

            description:
              "Diseñamos una experiencia clara para facilitar la búsqueda y consulta de la información.",
          },

          {
            title: "Desarrollo",

            description:
              "Construimos la plataforma de documentación utilizando tecnologías modernas y componentes reutilizables.",
          },

          {
            title: "Publicación y mantenimiento",

            description:
              "Configuramos la documentación para que pueda actualizarse y evolucionar junto con los sistemas.",
          },
        ],
      },

      useCases: {
        title: "¿Cuándo necesitas Documentación de Sistemas?",

        description:
          "La documentación es fundamental cuando una organización necesita centralizar conocimiento técnico, operativo o funcional.",

        useCases: [
          {
            title: "Centros de ayuda",

            description:
              "Crea espacios donde los usuarios puedan encontrar respuestas, guías y soluciones a preguntas frecuentes.",
          },

          {
            title: "APIs",

            description:
              "Documenta endpoints, parámetros, respuestas, autenticación y ejemplos de integración.",
          },

          {
            title: "Sistemas internos",

            description:
              "Centraliza información técnica y operativa sobre las aplicaciones utilizadas por una organización.",
          },

          {
            title: "Guías de usuario",

            description:
              "Explica de forma clara cómo utilizar plataformas, aplicaciones y servicios digitales.",
          },

          {
            title: "Bases de conocimiento",

            description:
              "Organiza información y conocimiento para facilitar su consulta por equipos y usuarios.",
          },

          {
            title: "Documentación técnica",

            description:
              "Documenta arquitectura, componentes, configuraciones, procesos y aspectos técnicos de los sistemas.",
          },
        ],
      },

      features: {
        title: "¿Qué incluye nuestro servicio?",

        description:
          "Creamos soluciones de documentación adaptadas a las necesidades de cada sistema y organización.",

        features: [
          {
            title: "Centro de Ayuda",

            description:
              "Espacio centralizado para artículos, guías, preguntas frecuentes y recursos de soporte.",
          },

          {
            title: "Documentación de APIs",

            description:
              "Documentación estructurada para facilitar la integración y utilización de APIs.",
          },

          {
            title: "Documentación Técnica",

            description:
              "Organización de información técnica sobre arquitectura, componentes y sistemas.",
          },

          {
            title: "Guías de Usuario",

            description:
              "Documentación orientada a usuarios para explicar funcionalidades y procesos.",
          },

          {
            title: "Base de Conocimiento",

            description:
              "Centralización del conocimiento necesario para equipos y organizaciones.",
          },

          {
            title: "Búsqueda de Contenido",

            description:
              "Facilita la localización rápida de información dentro de la documentación.",
          },

          {
            title: "Categorías y Navegación",

            description:
              "Organización jerárquica para acceder fácilmente a diferentes tipos de contenido.",
          },

          {
            title: "Diseño Responsive",

            description:
              "La documentación funciona correctamente en dispositivos móviles, tablets y computadores.",
          },
        ],
      },

      plansSection: {
        title: "Elige la Documentación que Necesitas",

        description:
          "Selecciona el tipo de documentación que mejor se adapte a tus sistemas, usuarios y necesidades de información.",
      },

      seo: {
        title:
          "Documentación de Sistemas | SatCore Solutions",

        description:
          "Desarrollo de centros de ayuda, documentación de APIs, documentación técnica y bases de conocimiento.",

        keywords: [
          "documentación de sistemas",
          "documentación técnica",
          "documentación de APIs",
          "centro de ayuda",
          "base de conocimiento",
          "manuales digitales",
          "Next.js",
          "TypeScript",
        ],
      },
    },

    en: {
      title: "System Documentation",

      subtitle:
        "Document, organize, and simplify access to your system knowledge",

      description:
        "We develop digital documentation solutions to centralize, organize, and simplify access to technical and operational information for systems, applications, APIs, and digital processes.",

      overview: {
        title: "What is System Documentation?",

        description:
          "System documentation organizes and presents technical, functional, and operational information in a clear and accessible way. It helps teams, users, and organizations understand, use, and maintain their systems and digital services.",

        image:
          "/images/subservices/software/system-documentation.png",

        imageAlt:
          "Digital documentation for systems, applications, and APIs",

        useCases: [
          "Help centers",
          "API documentation",
          "Technical documentation",
          "System manuals",
          "User guides",
          "Knowledge bases",
        ],
      },

      workflow: {
        badge: "Our Process",

        title: "How We Build Your Documentation",

        description:
          "We organize your system information into clear, structured, and maintainable documentation.",

        steps: [
          {
            title: "Analysis",

            description:
              "We identify the systems, users, processes, and content that need to be documented.",
          },

          {
            title: "Structure",

            description:
              "We define categories, navigation, hierarchies, and relationships between different content areas.",
          },

          {
            title: "Design",

            description:
              "We design a clear experience that makes information easy to find and consult.",
          },

          {
            title: "Development",

            description:
              "We build the documentation platform using modern technologies and reusable components.",
          },

          {
            title: "Publishing & Maintenance",

            description:
              "We configure the documentation so it can evolve alongside your systems.",
          },
        ],
      },

      useCases: {
        title: "When Do You Need System Documentation?",

        description:
          "Documentation is essential when an organization needs to centralize technical, operational, or functional knowledge.",

        useCases: [
          {
            title: "Help Centers",

            description:
              "Create spaces where users can find answers, guides, and solutions to common questions.",
          },

          {
            title: "APIs",

            description:
              "Document endpoints, parameters, responses, authentication, and integration examples.",
          },

          {
            title: "Internal Systems",

            description:
              "Centralize technical and operational information about applications used by an organization.",
          },

          {
            title: "User Guides",

            description:
              "Clearly explain how to use platforms, applications, and digital services.",
          },

          {
            title: "Knowledge Bases",

            description:
              "Organize information and knowledge so teams and users can easily access it.",
          },

          {
            title: "Technical Documentation",

            description:
              "Document architecture, components, configurations, processes, and technical aspects of systems.",
          },
        ],
      },

      features: {
        title: "What's Included?",

        description:
          "We create documentation solutions adapted to the needs of each system and organization.",

        features: [
          {
            title: "Help Center",

            description:
              "Centralized space for articles, guides, frequently asked questions, and support resources.",
          },

          {
            title: "API Documentation",

            description:
              "Structured documentation that simplifies API integration and usage.",
          },

          {
            title: "Technical Documentation",

            description:
              "Organization of technical information about architecture, components, and systems.",
          },

          {
            title: "User Guides",

            description:
              "User-oriented documentation explaining features and processes.",
          },

          {
            title: "Knowledge Base",

            description:
              "Centralize the knowledge required by teams and organizations.",
          },

          {
            title: "Content Search",

            description:
              "Make it easy to quickly find information within the documentation.",
          },

          {
            title: "Categories & Navigation",

            description:
              "Hierarchical organization for easy access to different types of content.",
          },

          {
            title: "Responsive Design",

            description:
              "The documentation works properly across mobile devices, tablets, and computers.",
          },
        ],
      },

      plansSection: {
        title: "Choose the Documentation You Need",

        description:
          "Select the documentation type that best fits your systems, users, and information requirements.",
      },

      seo: {
        title:
          "System Documentation | SatCore Solutions",

        description:
          "Development of help centers, API documentation, technical documentation, and knowledge bases.",

        keywords: [
          "system documentation",
          "technical documentation",
          "API documentation",
          "help center",
          "knowledge base",
          "digital manuals",
          "Next.js",
          "TypeScript",
        ],
      },
    },

    pt: {
      title: "Documentação de Sistemas",

      subtitle:
        "Documente, organize e facilite o acesso ao conhecimento dos seus sistemas",

      description:
        "Desenvolvemos soluções de documentação digital para centralizar, organizar e facilitar o acesso a informações técnicas e operacionais de sistemas, aplicações, APIs e processos digitais.",

      overview: {
        title: "O que é Documentação de Sistemas?",

        description:
          "A documentação de sistemas permite organizar e apresentar informações técnicas, funcionais e operacionais de forma clara e acessível. Ela ajuda equipes, usuários e organizações a compreender, utilizar e manter seus sistemas e serviços digitais.",

        image:
          "/images/subservices/software/system-documentation.png",

        imageAlt:
          "Documentação digital de sistemas, aplicações e APIs",

        useCases: [
          "Centros de ajuda",
          "Documentação de APIs",
          "Documentação técnica",
          "Manuais de sistemas",
          "Guias de usuário",
          "Bases de conhecimento",
        ],
      },

      workflow: {
        badge: "Nosso Processo",

        title: "Como Desenvolvemos sua Documentação",

        description:
          "Organizamos as informações dos seus sistemas para criar uma documentação clara, estruturada e fácil de manter.",

        steps: [
          {
            title: "Análise",

            description:
              "Identificamos os sistemas, usuários, processos e conteúdos que precisam ser documentados.",
          },

          {
            title: "Estruturação",

            description:
              "Definimos categorias, navegação, hierarquias e relações entre os diferentes conteúdos.",
          },

          {
            title: "Design",

            description:
              "Criamos uma experiência clara para facilitar a busca e consulta das informações.",
          },

          {
            title: "Desenvolvimento",

            description:
              "Construímos a plataforma de documentação utilizando tecnologias modernas e componentes reutilizáveis.",
          },

          {
            title: "Publicação e Manutenção",

            description:
              "Configuramos a documentação para que possa evoluir junto com os sistemas.",
          },
        ],
      },

      useCases: {
        title: "Quando Você Precisa de Documentação de Sistemas?",

        description:
          "A documentação é essencial quando uma organização precisa centralizar conhecimento técnico, operacional ou funcional.",

        useCases: [
          {
            title: "Centros de Ajuda",

            description:
              "Crie espaços onde os usuários possam encontrar respostas, guias e soluções para perguntas frequentes.",
          },

          {
            title: "APIs",

            description:
              "Documente endpoints, parâmetros, respostas, autenticação e exemplos de integração.",
          },

          {
            title: "Sistemas Internos",

            description:
              "Centralize informações técnicas e operacionais sobre as aplicações utilizadas por uma organização.",
          },

          {
            title: "Guias de Usuário",

            description:
              "Explique de forma clara como utilizar plataformas, aplicações e serviços digitais.",
          },

          {
            title: "Bases de Conhecimento",

            description:
              "Organize informações e conhecimento para facilitar a consulta por equipes e usuários.",
          },

          {
            title: "Documentação Técnica",

            description:
              "Documente arquitetura, componentes, configurações, processos e aspectos técnicos dos sistemas.",
          },
        ],
      },

      features: {
        title: "O Que Está Incluído?",

        description:
          "Criamos soluções de documentação adaptadas às necessidades de cada sistema e organização.",

        features: [
          {
            title: "Central de Ajuda",

            description:
              "Espaço centralizado para artigos, guias, perguntas frequentes e recursos de suporte.",
          },

          {
            title: "Documentação de APIs",

            description:
              "Documentação estruturada para facilitar a integração e utilização de APIs.",
          },

          {
            title: "Documentação Técnica",

            description:
              "Organização de informações técnicas sobre arquitetura, componentes e sistemas.",
          },

          {
            title: "Guias de Usuário",

            description:
              "Documentação orientada ao usuário para explicar funcionalidades e processos.",
          },

          {
            title: "Base de Conhecimento",

            description:
              "Centralização do conhecimento necessário para equipes e organizações.",
          },

          {
            title: "Busca de Conteúdo",

            description:
              "Facilita a localização rápida de informações dentro da documentação.",
          },

          {
            title: "Categorias e Navegação",

            description:
              "Organização hierárquica para facilitar o acesso aos diferentes tipos de conteúdo.",
          },

          {
            title: "Design Responsivo",

            description:
              "A documentação funciona corretamente em dispositivos móveis, tablets e computadores.",
          },
        ],
      },

      plansSection: {
        title: "Escolha a Documentação que Precisa",

        description:
          "Selecione o tipo de documentação que melhor atende aos seus sistemas, usuários e necessidades de informação.",
      },

      seo: {
        title:
          "Documentação de Sistemas | SatCore Solutions",

        description:
          "Desenvolvimento de centros de ajuda, documentação de APIs, documentação técnica e bases de conhecimento.",

        keywords: [
          "documentação de sistemas",
          "documentação técnica",
          "documentação de APIs",
          "centro de ajuda",
          "base de conhecimento",
          "manuais digitais",
          "Next.js",
          "TypeScript",
        ],
      },
    },
  },

  plans: systemDocumentation,
};