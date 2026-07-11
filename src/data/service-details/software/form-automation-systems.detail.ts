import type {
  ServiceDetail,
} from "@/types/service-detail.types";

import {
  softwarePlans,
} from "@/data/plans/software/landing-pages";

export const formAutomationSystemsDetail: ServiceDetail = {
  core: {
    id: "SRV-FAS",

    slug: "form-automation-systems",

    name: "Form Automation Systems",

    pillar: "software",

    icon: "file-text",

    heroImage: "/images/services/software/hero/hero.png",

    plans: [],
  },

  translations: {
    es: {
      title: "Sistemas de Automatización de Formularios",

      subtitle: "Simplifica la recopilación de datos",

      description: "Creamos sistemas de automatización de formularios que streamline la recopilación, procesamiento y gestión de datos. Desde formularios simples hasta flujos complejos, proporcionamos soluciones que reducen tiempo y errores.",

      overview: {
        title: "¿Qué es la Automatización de Formularios?",

        description: "La automatización de formularios es el proceso de digitalizar y automatizar la recolección de información mediante formularios. Incluye diseño, validación, envío automático, integración con bases de datos y generación de reportes.",

        image: "/images/subservices/software/form-automation.png",

        imageAlt: "Automatización de formularios",

        useCases: [
          "Solicitudes de empleo",
          "Encuestas y cuestionarios",
          "Registro de eventos",
          "Solicitudes de servicio",
          "Evaluaciones y evaluaciones",
        ],
      },

      workflow: {
        badge: "Metodología",

        title: "¿Cómo desarrollamos tu Sistema?",

        description: "Creamos sistemas de formularios automatizados eficientes.",

        steps: [
          {
            title: "Análisis",
            description: "Definimos los datos a recopilar y el flujo requerido."
          },
          {
            title: "Diseño",
            description: "Diseñamos los formularios con validaciones necesarias."
          },
          {
            title: "Desarrollo",
            description: "Implementamos el sistema con automatización."
          },
          {
            title: "Integración",
            description: "Conectamos con tus sistemas y herramientas."
          },
          {
            title: "Pruebas",
            description: "Verificamos el funcionamiento óptimo."
          },
        ],
      },

      useCases: {
        title: "¿Cuándo necesitas Automatización de Formularios?",

        description: "La automatización de formularios es ideal para cualquier proceso de recopilación de datos.",

        useCases: [
          {
            title: "Eficiencia",
            description: "Reduce el tiempo de procesamiento de solicitudes."
          },
          {
            title: "Precisión",
            description: "Elimina errores de entrada de datos manual."
          },
          {
            title: "Tiempo Real",
            description: "Recibe datos instantáneamente cuando se envíen."
          },
          {
            title: "Organización",
            description: "Almacena y organiza datos automáticamente."
          },
          {
            title: "Integración",
            description: "Conecta datos con tu CRM o base de datos."
          },
          {
            title: "Analítica",
            description: "Genera reportes y visualizaciones de datos."
          },
        ],
      },

      features: {
        title: "¿Qué incluye nuestro servicio?",

        description: "Creamos sistemas de formularios automatizados completos.",

        features: [
          {
            title: "Constructor de Formularios",
            description: "Interfaz visual para crear y diseñar formularios."
          },
          {
            title: "Validación",
            description: "Reglas de validación automáticas para datos."
          },
          {
            title: "Envío Automático",
            description: "Notificaciones y acciones tras el envío."
          },
          {
            title: "Base de Datos",
            description: "Almacenamiento estructurado de respuestas."
          },
          {
            title: "Exportación",
            description: "Exporta datos a Excel, PDF, CSV."
          },
          {
            title: "Firmas Digitales",
            description: "Captura de firmas electrónicas."
          },
          {
            title: "Archivos Adjuntos",
            description: "Subida de documentos e imágenes."
          },
          {
            title: "Cálculos",
            description: "Lógica condicional y cálculos automáticos."
          },
        ],
      },

      plansSection: {
        title: "Elige el plan ideal",

        description: "Todos nuestros planes utilizan la misma metodología de trabajo. La diferencia está en el nivel de personalización, funcionalidades e integraciones incluidas en cada uno.",
      },

      seo: {
        title: "Automatización de Formularios | SatCore Solutions",

        description: "Desarrollo de sistemas de automatización de formularios para empresas.",
        keywords: [
          "automatización de formularios",
          "formularios",
          "recopilación de datos",
          "nextjs",
        ],
      },
    },

    en: {
      title: "Form Automation Systems",

      subtitle: "Simplify data collection",

      description: "We create form automation systems that streamline the collection, processing, and management of data. From simple forms to complex flows, we provide solutions that save time and reduce errors.",

      overview: {
        title: "What is Form Automation?",

        description: "Form automation is the process of digitizing and automating information collection through forms. It includes design, validation, automatic submission, database integration, and report generation.",

        image: "/images/subservices/form-automation-systems/forms.png",

        imageAlt: "Form automation",

        useCases: [
          "Job applications",
          "Surveys and questionnaires",
          "Event registration",
          "Service requests",
          "Assessments and evaluations",
        ],
      },

      workflow: {
        badge: "Our Process",

        title: "How We Build Your System",

        description: "We create efficient automated form systems.",

        steps: [
          {
            title: "Analysis",
            description: "We define the data to collect and required flow.",
          },
          {
            title: "Design",
            description: "We design forms with necessary validations.",
          },
          {
            title: "Development",
            description: "We implement the system with automation.",
          },
          {
            title: "Integration",
            description: "We connect with your systems and tools.",
          },
          {
            title: "Testing",
            description: "We verify optimal functionality.",
          },
        ],
      },

      useCases: {
        title: "When Do You Need Form Automation?",

        description: "Form automation is ideal for any data collection process.",

        useCases: [
          {
            title: "Efficiency",
            description: "Reduce request processing time.",
          },
          {
            title: "Accuracy",
            description: "Eliminate manual data entry errors.",
          },
          {
            title: "Real-Time",
            description: "Receive data instantly when submitted.",
          },
          {
            title: "Organization",
            description: "Store and organize data automatically.",
          },
          {
            title: "Integration",
            description: "Connect data with your CRM or database.",
          },
          {
            title: "Analytics",
            description: "Generate reports and data visualizations.",
          },
        ],
      },

      features: {
        title: "What's Included?",

        description: "We create complete automated form systems.",

        features: [
          {
            title: "Form Builder",
            description: "Visual interface for creating and designing forms.",
          },
          {
            title: "Validation",
            description: "Automatic validation rules for data.",
          },
          {
            title: "Automatic Submission",
            description: "Notifications and actions after submission.",
          },
          {
            title: "Database",
            description: "Structured storage of responses.",
          },
          {
            title: "Export",
            description: "Export data to Excel, PDF, CSV.",
          },
          {
            title: "Digital Signatures",
            description: "Electronic signature capture.",
          },
          {
            title: "File Attachments",
            description: "Upload of documents and images.",
          },
          {
            title: "Calculations",
            description: "Conditional logic and automatic calculations.",
          },
        ],
      },

      plansSection: {
        title: "Choose the Right Plan",

        description: "All of our plans follow the same proven development process. The difference lies in the level of customization, features, and integrations included in each option.",
      },

      seo: {
        title: "Form Automation | SatCore Solutions",

        description: "Development of form automation systems for businesses.",
        keywords: [
          "form automation",
          "forms",
          "data collection",
          "nextjs",
        ],
      },
    },

    pt: {
      title: "Sistemas de Automatização de Formulários",

      subtitle: "Simplifique a coleta de dados",

      description: "Criamos sistemas de automatização de formulários que simplificam a coleta, processamento e gestão de dados. De formulários simples a fluxos complexos, fornecemos soluções que economizam tempo e reduzem erros.",

      overview: {
        title: "O que é a Automatização de Formulários?",

        description: "A automatização de formulários é o processo de digitalizar e automatizar a coleta de informação através de formulários. Inclui design, validação, envio automático, integração com banco de dados e geração de relatórios.",

        image: "/images/subservices/form-automation-systems/forms.png",

        imageAlt: "Automatização de formulários",

        useCases: [
          "Candidaturas de emprego",
          "Pesquisas e questionários",
          "Registro de eventos",
          "Solicitações de serviço",
          "Avaliações e avaliações",
        ],
      },

      workflow: {
        badge: "Nosso Processo",

        title: "Como Desenvolvemos seu Sistema",

        description: "Criamos sistemas de formulários automatizados eficientes.",

        steps: [
          {
            title: "Análise",
            description: "Definimos os dados a coletar e o fluxo requerido.",
          },
          {
            title: "Design",
            description: "Criamos os formulários com validações necessárias.",
          },
          {
            title: "Desenvolvimento",
            description: "Implementamos o sistema com automatização.",
          },
          {
            title: "Integração",
            description: "Conectamos com seus sistemas e ferramentas.",
          },
          {
            title: "Testes",
            description: "Verificamos o funcionamento ótimo.",
          },
        ],
      },

      useCases: {
        title: "Quando Você Precisa de Automatização de Formulários?",

        description: "A automatização de formulários é ideal para qualquer processo de coleta de dados.",

        useCases: [
          {
            title: "Eficiência",
            description: "Reduza o tempo de processamento de solicitações.",
          },
          {
            title: "Precisão",
            description: "Elimine erros de entrada de dados manual.",
          },
          {
            title: "Tempo Real",
            description: "Receba dados instantaneamente quando enviados.",
          },
          {
            title: "Organização",
            description: "Armazene e organize dados automaticamente.",
          },
          {
            title: "Integração",
            description: "Conecte dados com seu CRM ou banco de dados.",
          },
          {
            title: "Analítica",
            description: "Gere relatórios e visualizações de dados.",
          },
        ],
      },

      features: {
        title: "O Que Está Incluído?",

        description: "Criamos sistemas de formulários automatizados completos.",

        features: [
          {
            title: "Construtor de Formulários",
            description: "Interface visual para criar e diseñar formulários.",
          },
          {
            title: "Validação",
            description: "Regras de validação automáticas para dados.",
          },
          {
            title: "Envio Automático",
            description: "Notificações e ações após o envio.",
          },
          {
            title: "Base de Dados",
            description: "Armazenamento estruturado de respostas.",
          },
          {
            title: "Exportação",
            description: "Exporte dados para Excel, PDF, CSV.",
          },
          {
            title: "Assinaturas Digitais",
            description: "Captura de assinaturas eletrônicas.",
          },
          {
            title: "Arquivos Anexados",
            description: "Upload de documentos e imagens.",
          },
          {
            title: "Cálculos",
            description: "Lógica condicional e cálculos automáticos.",
          },
        ],
      },

      plansSection: {
        title: "Escolha o Plano Ideal",

        description: "Todos os nossos planos seguem a mesma metodologia de desenvolvimento. A diferença está no nível de personalização, funcionalidades e integrações incluídas em cada opção.",
      },

      seo: {
        title: "Automatização de Formulários | SatCore Solutions",

        description: "Desenvolvimento de sistemas de automatização de formulários para empresas.",
        keywords: [
          "automatização de formulários",
          "formulários",
          "coleta de dados",
          "nextjs",
        ],
      },
    },
  },
  plans: []
};