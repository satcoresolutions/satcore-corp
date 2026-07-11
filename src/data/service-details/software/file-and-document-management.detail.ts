import type {
  ServiceDetail,
} from "@/types/service-detail.types";

import {
  softwarePlans,
} from "@/data/plans/software/landing-pages";

export const fileAndDocumentManagementDetail: ServiceDetail = {
  core: {
    id: "SRV-FDM",

    slug: "file-and-document-management",

    name: "File & Document Management",

    pillar: "software",

    icon: "folder",

    heroImage: "/images/services/software/hero/hero.png",

    plans: [],
  },

  translations: {
    es: {
      title: "Gestión de Archivos y Documentos",

      subtitle: "Organiza y controla tu documentación",

      description: "Desarrollamos sistemas de gestión documental que permiten almacenar, organizar, buscar y compartir documentos de manera segura. Desde repositorios corporativos hasta sistemas de control de versiones, proporcionamos soluciones completas.",

      overview: {
        title: "¿Qué es un Sistema de Gestión Documental?",

        description: "Un sistema de gestión documental es una plataforma que permite almacenar, organizar y administrar documentos digitales. Incluye versionado, búsqueda, permisos y flujos de trabajo para aprobar documentos.",

        image: "/images/subservices/software/file-management.png",

        imageAlt: "Gestión de documentos",

        useCases: [
          "Repositorios corporativos",
          "Gestión de contratos",
          "Archivo digital",
          "Control de versiones",
          "Colaboración en documentos",
        ],
      },

      workflow: {
        badge: "Metodología",

        title: "¿Cómo desarrollamos tu Sistema?",

        description: "Creamos sistemas de gestión documental adaptados a tus necesidades.",

        steps: [
          {
            title: "Análisis",
            description: "Estudiamos tus requisitos y estructura documental."
          },
          {
            title: "Diseño",
            description: "Diseñamos la estructura de carpetas y permisos."
          },
          {
            title: "Desarrollo",
            description: "Implementamos el sistema con todas las funcionalidades."
          },
          {
            title: "Integración",
            description: "Conectamos con tus sistemas existentes."
          },
          {
            title: "Capacitación",
            description: "Entrenamos a tu equipo en el uso del sistema."
          },
        ],
      },

      useCases: {
        title: "¿Cuándo necesitas Gestión Documental?",

        description: "Todo negocio que maneje documentos necesita un sistema organizado.",

        useCases: [
          {
            title: "Organización",
            description: "Centraliza todos tus documentos en un solo lugar."
          },
          {
            title: "Búsqueda",
            description: "Encuentra documentos rápidamente con búsqueda avanzada."
          },
          {
            title: "Seguridad",
            description: "Protege documentos sensibles con permisos y encryption."
          },
          {
            title: "Colaboración",
            description: "Comparte documentos con tu equipo de forma controlada."
          },
          {
            title: "Versionado",
            description: "Mantén historial de cambios en tus documentos."
          },
          {
            title: "Cumplimiento",
            description: "Cumple con regulaciones de retención documental."
          },
        ],
      },

      features: {
        title: "¿Qué incluye nuestro servicio?",

        description: "Creamos sistemas de gestión documental completos y seguros.",

        features: [
          {
            title: "Almacenamiento",
            description: "Espacio seguro y escalable para tus documentos."
          },
          {
            title: "Organización",
            description: "Estructura de carpetas y etiquetas personalizable."
          },
          {
            title: "Búsqueda",
            description: "Búsqueda full-text y filtros avanzados."
          },
          {
            title: "Versionado",
            description: "Control de versiones automático."
          },
          {
            title: "Permisos",
            description: "Control de acceso granular por usuario o grupo."
          },
          {
            title: "Flujos de Trabajo",
            description: "Aprobación y revisión de documentos."
          },
          {
            title: "Audit Trail",
            description: "Registro de quién accedió y modificó cada documento."
          },
          {
            title: "Sincronización",
            description: "Sincronización con dispositivos locales."
          },
        ],
      },

      plansSection: {
        title: "Elige el plan ideal",

        description: "Todos nuestros planes utilizan la misma metodología de trabajo. La diferencia está en el nivel de personalización, funcionalidades e integraciones incluidas en cada uno.",
      },

      seo: {
        title: "Gestión de Documentos | SatCore Solutions",

        description: "Desarrollo de sistemas de gestión documental para empresas.",
        keywords: [
          "gestión documental",
          "documentos",
          "repositorio",
          "control de versiones",
          "nextjs",
        ],
      },
    },

    en: {
      title: "File & Document Management",

      subtitle: "Organize and control your documentation",

      description: "We develop document management systems that allow storing, organizing, searching, and sharing documents securely. From corporate repositories to version control systems, we provide complete solutions.",

      overview: {
        title: "What is a Document Management System?",

        description: "A document management system is a platform that allows storing, organizing, and managing digital documents. It includes versioning, search, permissions, and workflows for approving documents.",

        image: "/images/subservices/file-and-document-management/documents.png",

        imageAlt: "Document management",

        useCases: [
          "Corporate repositories",
          "Contract management",
          "Digital archive",
          "Version control",
          "Document collaboration",
        ],
      },

      workflow: {
        badge: "Our Process",

        title: "How We Build Your System",

        description: "We create document management systems tailored to your needs.",

        steps: [
          {
            title: "Analysis",
            description: "We study your requirements and document structure.",
          },
          {
            title: "Design",
            description: "We design folder structure and permissions.",
          },
          {
            title: "Development",
            description: "We implement the system with all functionalities.",
          },
          {
            title: "Integration",
            description: "We connect with your existing systems.",
          },
          {
            title: "Training",
            description: "We train your team on system usage.",
          },
        ],
      },

      useCases: {
        title: "When Do You Need Document Management?",

        description: "Every business that handles documents needs an organized system.",

        useCases: [
          {
            title: "Organization",
            description: "Centralize all your documents in one place.",
          },
          {
            title: "Search",
            description: "Find documents quickly with advanced search.",
          },
          {
            title: "Security",
            description: "Protect sensitive documents with permissions and encryption.",
          },
          {
            title: "Collaboration",
            description: "Share documents with your team in a controlled way.",
          },
          {
            title: "Versioning",
            description: "Maintain change history in your documents.",
          },
          {
            title: "Compliance",
            description: "Comply with document retention regulations.",
          },
        ],
      },

      features: {
        title: "What's Included?",

        description: "We create complete, secure document management systems.",

        features: [
          {
            title: "Storage",
            description: "Secure, scalable space for your documents.",
          },
          {
            title: "Organization",
            description: "Customizable folder structure and tags.",
          },
          {
            title: "Search",
            description: "Full-text search and advanced filters.",
          },
          {
            title: "Versioning",
            description: "Automatic version control.",
          },
          {
            title: "Permissions",
            description: "Granular access control by user or group.",
          },
          {
            title: "Workflows",
            description: "Document approval and review.",
          },
          {
            title: "Audit Trail",
            description: "Record of who accessed and modified each document.",
          },
          {
            title: "Synchronization",
            description: "Synchronization with local devices.",
          },
        ],
      },

      plansSection: {
        title: "Choose the Right Plan",

        description: "All of our plans follow the same proven development process. The difference lies in the level of customization, features, and integrations included in each option.",
      },

      seo: {
        title: "Document Management | SatCore Solutions",

        description: "Development of document management systems for businesses.",
        keywords: [
          "document management",
          "documents",
          "repository",
          "version control",
          "nextjs",
        ],
      },
    },

    pt: {
      title: "Gestão de Arquivos e Documentos",

      subtitle: "Organize e controle sua documentação",

      description: "Desenvolvemos sistemas de gestão documental que permitem armazenar, organizar, buscar e compartilhar documentos de forma segura. De repositórios corporativos a sistemas de controle de versão, fornecemos soluções completas.",

      overview: {
        title: "O que é um Sistema de Gestão Documental?",

        description: "Um sistema de gestão documental é uma plataforma que permite armazenar, organizar e gerenciar documentos digitais. Inclui versionamento, busca, permissões e fluxos de trabalho para aprovação de documentos.",

        image: "/images/subservices/file-and-document-management/documents.png",

        imageAlt: "Gestão de documentos",

        useCases: [
          "Repositórios corporativos",
          "Gestão de contratos",
          "Arquivo digital",
          "Controle de versão",
          "Colaboração em documentos",
        ],
      },

      workflow: {
        badge: "Nosso Processo",

        title: "Como Desenvolvemos seu Sistema",

        description: "Criamos sistemas de gestão documental adaptados às suas necessidades.",

        steps: [
          {
            title: "Análise",
            description: "Estudamos seus requisitos e estrutura documental.",
          },
          {
            title: "Design",
            description: "Definimos a estrutura de pastas e permissões.",
          },
          {
            title: "Desenvolvimento",
            description: "Implementamos o sistema com todas as funcionalidades.",
          },
          {
            title: "Integração",
            description: "Conectamos com seus sistemas existentes.",
          },
          {
            title: "Capacitação",
            description: "Treinamos sua equipe no uso do sistema.",
          },
        ],
      },

      useCases: {
        title: "Quando Você Precisa de Gestão Documental?",

        description: "Todo negócio que manipula documentos precisa de um sistema organizado.",

        useCases: [
          {
            title: "Organização",
            description: "Centralize todos os seus documentos em um só lugar.",
          },
          {
            title: "Busca",
            description: "Encontre documentos rapidamente com busca avançada.",
          },
          {
            title: "Segurança",
            description: "Proteja documentos sensíveis com permissões e criptografia.",
          },
          {
            title: "Colaboração",
            description: "Compartilhe documentos com sua equipe de forma controlada.",
          },
          {
            title: "Versionamento",
            description: "Mantenha histórico de alterações nos seus documentos.",
          },
          {
            title: "Conformidade",
            description: "Cumpra com regulamentações de retenção documental.",
          },
        ],
      },

      features: {
        title: "O Que Está Incluído?",

        description: "Criamos sistemas de gestão documental completos e seguros.",

        features: [
          {
            title: "Armazenamento",
            description: "Espaço seguro e escalável para seus documentos.",
          },
          {
            title: "Organização",
            description: "Estrutura de pastas e tags personalizável.",
          },
          {
            title: "Busca",
            description: "Busca full-text e filtros avançados.",
          },
          {
            title: "Versionamento",
            description: "Controle de versão automático.",
          },
          {
            title: "Permissões",
            description: "Controle de acesso granular por usuário ou grupo.",
          },
          {
            title: "Fluxos de Trabalho",
            description: "Aprovação e revisão de documentos.",
          },
          {
            title: "Audit Trail",
            description: "Registro de quem acessou e modificou cada documento.",
          },
          {
            title: "Sincronização",
            description: "Sincronização com dispositivos locais.",
          },
        ],
      },

      plansSection: {
        title: "Escolha o Plano Ideal",

        description: "Todos os nossos planos seguem a mesma metodologia de desenvolvimento. A diferença está no nível de personalização, funcionalidades e integrações incluídas em cada opção.",
      },

      seo: {
        title: "Gestão de Documentos | SatCore Solutions",

        description: "Desenvolvimento de sistemas de gestão documental para empresas.",
        keywords: [
          "gestão documental",
          "documentos",
          "repositório",
          "controle de versão",
          "nextjs",
        ],
      },
    },
  },
  plans: []
};