import type {
  ServiceDetail,
} from "@/types/service-detail.types";

import {
  softwarePlans,
} from "@/data/plans/software/landing-pages";

export const reportingAndDocumentGenerationDetail: ServiceDetail = {
  core: {
    id: "SRV-RDG",

    slug: "reporting-and-document-generation",

    name: "Reporting & Document Generation",

    pillar: "software",

    icon: "file-text",

    heroImage: "/images/services/software/hero/hero.png",

    plans: [],
  },

  translations: {
    es: {
      title: "Reportes y Generación de Documentos",

      subtitle: "Automatiza la creación de documentos",

      description: "Desarrollamos sistemas de generación de documentos que automatizan la creación de reportes, facturas, contratos y más. Desde templates dinámicos hasta integración con bases de datos, proporcionamos soluciones completas.",

      overview: {
        title: "¿Qué es la Generación de Documentos?",

        description: "La generación de documentos es el proceso de crear documentos de forma automatizada a partir de plantillas y datos. Permite generar reportes, facturas, contratos y otros documentos de manera eficiente y sin errores.",

        image: "/images/subservices/software/reporting-generation.png",

        imageAlt: "Generación de documentos",

        useCases: [
          "Facturación automática",
          "Reportes personalizados",
          "Contratos dinámicos",
          "Certificados",
          "Documentos legales",
        ],
      },

      workflow: {
        badge: "Metodología",

        title: "¿Cómo desarrollamos tu Sistema?",

        description: "Creamos sistemas de generación de documentos automatizados.",

        steps: [
          {
            title: "Análisis",
            description: "Identificamos los documentos a generar y sus datos."
          },
          {
            title: "Diseño de Plantillas",
            description: "Creamos las plantillas con los campos necesarios."
          },
          {
            title: "Desarrollo",
            description: "Implementamos el sistema de generación."
          },
          {
            title: "Integración",
            description: "Conectamos con tus fuentes de datos."
          },
          {
            title: "Pruebas",
            description: "Verificamos la generación correcta de documentos."
          },
        ],
      },

      useCases: {
        title: "¿Cuándo necesitas Generación de Documentos?",

        description: "La automatización de documentos es ideal para procesos repetitivos.",

        useCases: [
          {
            title: "Eficiencia",
            description: "Reduce el tiempo de creación de documentos."
          },
          {
            title: "Consistencia",
            description: "Garantiza documentos uniformes y profesionales."
          },
          {
            title: "Escalabilidad",
            description: "Genera miles de documentos sin esfuerzo manual."
          },
          {
            title: "Reducción de Errores",
            description: "Elimina errores de transcripción manual."
          },
          {
            title: "Personalización",
            description: "Cada documento se adapta a las necesidades específicas."
          },
          {
            title: "Archivo",
            description: "Guarda automáticamente los documentos generados."
          },
        ],
      },

      features: {
        title: "¿Qué incluye nuestro servicio?",

        description: "Creamos sistemas de generación de documentos completos.",

        features: [
          {
            title: "Plantillas",
            description: "Crea y gestiona plantillas de documentos."
          },
          {
            title: "Campos Dinámicos",
            description: "Inserta datos automáticamente en documentos."
          },
          {
            title: "Múltiples Formatos",
            description: "Exporta a PDF, Word, Excel y más."
          },
          {
            title: "Firmas Digitales",
            description: "Incluye firmas electrónicas en documentos."
          },
          {
            title: "Automatización",
            description: "Genera documentos según eventos o programación."
          },
          {
            title: "Integración",
            description: "Conecta con tu CRM, base de datos o API."
          },
          {
            title: "Historial",
            description: "Mantén registro de documentos generados."
          },
          {
            title: "Seguridad",
            description: "Protección y control de acceso a documentos."
          },
        ],
      },

      plansSection: {
        title: "Elige el plan ideal",

        description: "Todos nuestros planes utilizan la misma metodología de trabajo. La diferencia está en el nivel de personalización, funcionalidades e integraciones incluidas en cada uno.",
      },

      seo: {
        title: "Generación de Documentos | SatCore Solutions",

        description: "Desarrollo de sistemas de generación de documentos y reportes automáticos.",
        keywords: [
          "generación de documentos",
          "reportes",
          "facturación",
          "automatización",
          "nextjs",
        ],
      },
    },

    en: {
      title: "Reporting & Document Generation",

      subtitle: "Automate document creation",

      description: "We develop document generation systems that automate the creation of reports, invoices, contracts, and more. From dynamic templates to database integration, we provide complete solutions.",

      overview: {
        title: "What is Document Generation?",

        description: "Document generation is the process of creating documents automatically from templates and data. It allows generating reports, invoices, contracts, and other documents efficiently and without errors.",

        image: "/images/subservices/reporting-and-document-generation/reports.png",

        imageAlt: "Document generation",

        useCases: [
          "Automatic invoicing",
          "Custom reports",
          "Dynamic contracts",
          "Certificates",
          "Legal documents",
        ],
      },

      workflow: {
        badge: "Our Process",

        title: "How We Build Your System",

        description: "We create automated document generation systems.",

        steps: [
          {
            title: "Analysis",
            description: "We identify documents to generate and their data.",
          },
          {
            title: "Template Design",
            description: "We create templates with required fields.",
          },
          {
            title: "Development",
            description: "We implement the generation system.",
          },
          {
            title: "Integration",
            description: "We connect with your data sources.",
          },
          {
            title: "Testing",
            description: "We verify correct document generation.",
          },
        ],
      },

      useCases: {
        title: "When Do You Need Document Generation?",

        description: "Document automation is ideal for repetitive processes.",

        useCases: [
          {
            title: "Efficiency",
            description: "Reduce document creation time.",
          },
          {
            title: "Consistency",
            description: "Ensure uniform, professional documents.",
          },
          {
            title: "Scalability",
            description: "Generate thousands of documents without manual effort.",
          },
          {
            title: "Error Reduction",
            description: "Eliminate manual transcription errors.",
          },
          {
            title: "Customization",
            description: "Each document adapts to specific needs.",
          },
          {
            title: "Archive",
            description: "Automatically save generated documents.",
          },
        ],
      },

      features: {
        title: "What's Included?",

        description: "We create complete document generation systems.",

        features: [
          {
            title: "Templates",
            description: "Create and manage document templates.",
          },
          {
            title: "Dynamic Fields",
            description: "Automatically insert data into documents.",
          },
          {
            title: "Multiple Formats",
            description: "Export to PDF, Word, Excel, and more.",
          },
          {
            title: "Digital Signatures",
            description: "Include electronic signatures in documents.",
          },
          {
            title: "Automation",
            description: "Generate documents based on events or schedule.",
          },
          {
            title: "Integration",
            description: "Connect with your CRM, database, or API.",
          },
          {
            title: "History",
            description: "Keep record of generated documents.",
          },
          {
            title: "Security",
            description: "Protection and access control for documents.",
          },
        ],
      },

      plansSection: {
        title: "Choose the Right Plan",

        description: "All of our plans follow the same proven development process. The difference lies in the level of customization, features, and integrations included in each option.",
      },

      seo: {
        title: "Document Generation | SatCore Solutions",

        description: "Development of document generation systems and automatic reports.",
        keywords: [
          "document generation",
          "reports",
          "invoicing",
          "automation",
          "nextjs",
        ],
      },
    },

    pt: {
      title: "Relatórios e Geração de Documentos",

      subtitle: "Automatize a criação de documentos",

      description: "Desenvolvemos sistemas de geração de documentos que automatizam a criação de relatórios, faturas, contratos e mais. De modelos dinâmicos à integração com banco de dados, fornecemos soluções completas.",

      overview: {
        title: "O que é a Geração de Documentos?",

        description: "A geração de documentos é o processo de criar documentos de forma automatizada a partir de modelos e dados. Permite gerar relatórios, faturas, contratos e outros documentos de forma eficiente e sem erros.",

        image: "/images/subservices/reporting-and-document-generation/reports.png",

        imageAlt: "Geração de documentos",

        useCases: [
          "Faturação automática",
          "Relatórios personalizados",
          "Contratos dinâmicos",
          "Certificados",
          "Documentos legais",
        ],
      },

      workflow: {
        badge: "Nosso Processo",

        title: "Como Desenvolvemos seu Sistema",

        description: "Criamos sistemas de geração de documentos automatizados.",

        steps: [
          {
            title: "Análise",
            description: "Identificamos os documentos a gerar e seus dados.",
          },
          {
            title: "Design de Modelos",
            description: "Criamos os modelos com os campos necessários.",
          },
          {
            title: "Desenvolvimento",
            description: "Implementamos o sistema de geração.",
          },
          {
            title: "Integração",
            description: "Conectamos com suas fontes de dados.",
          },
          {
            title: "Testes",
            description: "Verificamos a geração correta de documentos.",
          },
        ],
      },

      useCases: {
        title: "Quando Você Precisa de Geração de Documentos?",

        description: "A automatização de documentos é ideal para processos repetitivos.",

        useCases: [
          {
            title: "Eficiência",
            description: "Reduza o tempo de criação de documentos.",
          },
          {
            title: "Consistência",
            description: "Garanta documentos uniformes e profissionais.",
          },
          {
            title: "Escalabilidade",
            description: "Gere milhares de documentos sem esforço manual.",
          },
          {
            title: "Redução de Erros",
            description: "Elimine erros de transcrição manual.",
          },
          {
            title: "Personalização",
            description: "Cada documento se adapta às necessidades específicas.",
          },
          {
            title: "Arquivo",
            description: "Salve automaticamente os documentos gerados.",
          },
        ],
      },

      features: {
        title: "O Que Está Incluído?",

        description: "Criamos sistemas de geração de documentos completos.",

        features: [
          {
            title: "Modelos",
            description: "Crie e gerencie modelos de documentos.",
          },
          {
            title: "Campos Dinâmicos",
            description: "Insira dados automaticamente em documentos.",
          },
          {
            title: "Múltiplos Formatos",
            description: "Exporte para PDF, Word, Excel e mais.",
          },
          {
            title: "Assinaturas Digitais",
            description: "Inclua assinaturas eletrônicas em documentos.",
          },
          {
            title: "Automatização",
            description: "Gere documentos conforme eventos ou programação.",
          },
          {
            title: "Integração",
            description: "Conecte com seu CRM, banco de dados ou API.",
          },
          {
            title: "Histórico",
            description: "Mantenha registro de documentos gerados.",
          },
          {
            title: "Segurança",
            description: "Proteção e controle de acesso a documentos.",
          },
        ],
      },

      plansSection: {
        title: "Escolha o Plano Ideal",

        description: "Todos os nossos planos seguem a mesma metodologia de desenvolvimento. A diferença está no nível de personalização, funcionalidades e integrações incluídas em cada opção.",
      },

      seo: {
        title: "Geração de Documentos | SatCore Solutions",

        description: "Desenvolvimento de sistemas de geração de documentos e relatórios automáticos.",
        keywords: [
          "geração de documentos",
          "relatórios",
          "faturação",
          "automatização",
          "nextjs",
        ],
      },
    },
  },
  plans: []
};