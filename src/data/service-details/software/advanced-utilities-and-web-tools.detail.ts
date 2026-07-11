import type {
  ServiceDetail,
} from "@/types/service-detail.types";

import {
  softwarePlans,
} from "@/data/plans/software/landing-pages";

export const advancedUtilitiesAndWebToolsDetail: ServiceDetail = {
  core: {
    id: "SRV-AU",

    slug: "advanced-utilities-and-web-tools",

    name: "Advanced Utilities & Web Tools",

    pillar: "software",

    icon: "wrench",

    heroImage: "/images/services/software/hero/hero.png",

    plans: [],
  },

  translations: {
    es: {
      title: "Utilidades Avanzadas y Herramientas Web",

      subtitle: "Soluciones personalizadas para optimizar procesos",

      description: "Desarrollamos utilitarias y herramientas web personalizadas que automatizan procesos específicos de tu negocio. Desde calculadoras especializadas hasta sistemas de conversión y herramientas de productividad, creamos soluciones a medida.",

      overview: {
        title: "¿Qué son las Utilidades Web?",

        description: "Las utilitarias web son aplicaciones especializadas diseñadas para realizar tareas específicas de forma eficiente. Pueden incluir calculadoras, convertidores, generadores, herramientas de productividad y cualquier aplicación web personalizada que necesites.",

        image: "/images/subservices/software/utilities-advanced.png",

        imageAlt: "Herramientas web avanzadas",

        useCases: [
          "Calculadoras especializadas",
          "Convertidores de formatos",
          "Generadores de documentos",
          "Herramientas de productividad",
          "Sistemas de comparación",
        ],
      },

      workflow: {
        badge: "Metodología",

        title: "¿Cómo desarrollamos tus Herramientas?",

        description: "Creamos soluciones personalizadas adaptadas a tus necesidades específicas.",

        steps: [
          {
            title: "Análisis de Requisitos",
            description: "Definimos la funcionalidad específica que necesitas."
          },
          {
            title: "Diseño UX",
            description: "Diseñamos una interfaz intuitiva y eficiente."
          },
          {
            title: "Desarrollo",
            description: "Implementamos la herramienta con las funcionalidades requeridas."
          },
          {
            title: "Pruebas",
            description: "Verificamos precisión y rendimiento de la herramienta."
          },
          {
            title: "Entrega",
            description: "Implementamos y capacitamos en el uso de la herramienta."
          },
        ],
      },

      useCases: {
        title: "¿Cuándo necesitas Utilidades Web?",

        description: "Las utilitarias web son ideales cuando necesitas automatizar tareas específicas o proporcionar herramientas a tus usuarios.",

        useCases: [
          {
            title: "Automatización",
            description: "Reduce tiempo en tareas repetitivas con procesos automatizados."
          },
          {
            title: "Experiencia de Usuario",
            description: "Proporciona herramientas útiles a tus clientes o usuarios."
          },
          {
            title: "Eficiencia",
            description: "Optimiza procesos internos con herramientas personalizadas."
          },
          {
            title: "Diferenciación",
            description: "Destaca tu negocio con herramientas únicas para tu industria."
          },
          {
            title: "Recopilación de Datos",
            description: "Recolecta información valiosa de tus usuarios."
          },
          {
            title: "Escalabilidad",
            description: "Maneja grandes volúmenes de usuarios simultáneos."
          },
        ],
      },

      features: {
        title: "¿Qué incluye nuestro servicio?",

        description: "Creamos utilitarias web completas con funcionalidades específicas para tu negocio.",

        features: [
          {
            title: "Diseño Personalizado",
            description: "Interfaz adaptada a la identidad de tu marca."
          },
          {
            title: "Funcionalidad Específica",
            description: "Cada herramienta diseñada para tu caso de uso exacto."
          },
          {
            title: "Alta Velocidad",
            description: "Procesamiento rápido de datos y resultados."
          },
          {
            title: "Integración API",
            description: "Conexión con tus sistemas y bases de datos."
          },
          {
            title: "Exportación",
            description: "Guarda o exporta resultados en múltiples formatos."
          },
          {
            title: "Diseño Responsivo",
            description: "Funciona perfectamente en todos los dispositivos."
          },
          {
            title: "Seguridad",
            description: "Protección de datos y transacciones seguras."
          },
          {
            title: "Soporte Técnico",
            description: "Mantenimiento y actualizaciones continuas."
          },
        ],
      },

      plansSection: {
        title: "Elige el plan ideal",

        description: "Todos nuestros planes utilizan la misma metodología de trabajo. La diferencia está en el nivel de personalización, funcionalidades e integraciones incluidas en cada uno.",
      },

      seo: {
        title: "Utilidades Web y Herramientas Avanzadas | SatCore Solutions",

        description: "Desarrollo de utilitarias web y herramientas personalizadas para optimizar procesos de tu negocio.",
        keywords: [
          "utilidades web",
          "herramientas web",
          "calculadoras web",
          "desarrollo web",
          "nextjs",
          "herramientas personalizadas",
        ],
      },
    },

    en: {
      title: "Advanced Utilities & Web Tools",

      subtitle: "Custom solutions to optimize processes",

      description: "We develop custom web utilities and tools that automate specific business processes. From specialized calculators to conversion systems and productivity tools, we create tailored solutions.",

      overview: {
        title: "What are Web Utilities?",

        description: "Web utilities are specialized applications designed to perform specific tasks efficiently. They can include calculators, converters, generators, productivity tools, and any custom web application you need.",

        image: "/images/subservices/advanced-utilities-and-web-tools/utilities.png",

        imageAlt: "Advanced web tools",

        useCases: [
          "Specialized calculators",
          "Format converters",
          "Document generators",
          "Productivity tools",
          "Comparison systems",
        ],
      },

      workflow: {
        badge: "Our Process",

        title: "How We Build Your Tools",

        description: "We create customized solutions tailored to your specific needs.",

        steps: [
          {
            title: "Requirements Analysis",
            description: "We define the specific functionality you need.",
          },
          {
            title: "UX Design",
            description: "We design an intuitive and efficient interface.",
          },
          {
            title: "Development",
            description: "We implement the tool with required functionalities.",
          },
          {
            title: "Testing",
            description: "We verify accuracy and performance.",
          },
          {
            title: "Delivery",
            description: "We deploy and train on tool usage.",
          },
        ],
      },

      useCases: {
        title: "When Do You Need Web Utilities?",

        description: "Web utilities are ideal when you need to automate specific tasks or provide tools to your users.",

        useCases: [
          {
            title: "Automation",
            description: "Reduce time on repetitive tasks with automated processes.",
          },
          {
            title: "User Experience",
            description: "Provide useful tools to your customers or users.",
          },
          {
            title: "Efficiency",
            description: "Optimize internal processes with custom tools.",
          },
          {
            title: "Differentiation",
            description: "Stand out with unique tools for your industry.",
          },
          {
            title: "Data Collection",
            description: "Gather valuable information from your users.",
          },
          {
            title: "Scalability",
            description: "Handle large volumes of concurrent users.",
          },
        ],
      },

      features: {
        title: "What's Included?",

        description: "We create complete web utilities with specific functionalities for your business.",

        features: [
          {
            title: "Custom Design",
            description: "Interface adapted to your brand identity.",
          },
          {
            title: "Specific Functionality",
            description: "Each tool designed for your exact use case.",
          },
          {
            title: "High Speed",
            description: "Fast data processing and results.",
          },
          {
            title: "API Integration",
            description: "Connection with your systems and databases.",
          },
          {
            title: "Export",
            description: "Save or export results in multiple formats.",
          },
          {
            title: "Responsive Design",
            description: "Works perfectly on all devices.",
          },
          {
            title: "Security",
            description: "Data protection and secure transactions.",
          },
          {
            title: "Technical Support",
            description: "Continuous maintenance and updates.",
          },
        ],
      },

      plansSection: {
        title: "Choose the Right Plan",

        description: "All of our plans follow the same proven development process. The difference lies in the level of customization, features, and integrations included in each option.",
      },

      seo: {
        title: "Advanced Web Utilities & Tools | SatCore Solutions",

        description: "Development of web utilities and custom tools to optimize your business processes.",
        keywords: [
          "web utilities",
          "web tools",
          "web calculators",
          "web development",
          "nextjs",
          "custom tools",
        ],
      },
    },

    pt: {
      title: "Utilitários Avançados e Ferramentas Web",

      subtitle: "Soluções personalizadas para otimizar processos",

      description: "Desenvolvemos utilitários e ferramentas web personalizadas que automatizam processos específicos do seu negócio. Desde calculadoras especializadas até sistemas de conversão e ferramentas de produtividade, criamos soluções sob medida.",

      overview: {
        title: "O que são Utilitários Web?",

        description: "Os utilitários web são aplicativos especializados projetados para realizar tarefas específicas de forma eficiente. Podem incluir calculadoras, conversores, geradores, ferramentas de produtividade e qualquer aplicativo web personalizado que você precise.",

        image: "/images/subservices/advanced-utilities-and-web-tools/utilities.png",

        imageAlt: "Ferramentas web avançadas",

        useCases: [
          "Calculadoras especializadas",
          "Conversores de formatos",
          "Geradores de documentos",
          "Ferramentas de produtividade",
          "Sistemas de comparação",
        ],
      },

      workflow: {
        badge: "Nosso Processo",

        title: "Como Desenvolvemos suas Ferramentas",

        description: "Criamos soluções personalizadas adaptadas às suas necessidades específicas.",

        steps: [
          {
            title: "Análise de Requisitos",
            description: "Definimos a funcionalidade específica que você precisa.",
          },
          {
            title: "Design UX",
            description: "Criamos uma interface intuitiva e eficiente.",
          },
          {
            title: "Desenvolvimento",
            description: "Implementamos a ferramenta com as funcionalidades requeridas.",
          },
          {
            title: "Testes",
            description: "Verificamos precisão e desempenho da ferramenta.",
          },
          {
            title: "Entrega",
            description: "Implementamos e capacitamos no uso da ferramenta.",
          },
        ],
      },

      useCases: {
        title: "Quando Você Precisa de Utilitários Web?",

        description: "Os utilitários web são ideais quando você precisa automatizar tarefas específicas ou fornecer ferramentas aos seus usuários.",

        useCases: [
          {
            title: "Automatização",
            description: "Reduza tempo em tarefas repetitivas com processos automatizados.",
          },
          {
            title: "Experiência do Usuário",
            description: "Forneça ferramentas úteis aos seus clientes ou usuários.",
          },
          {
            title: "Eficiência",
            description: "Otimize processos internos com ferramentas personalizadas.",
          },
          {
            title: "Diferenciação",
            description: "Destaque seu negócio com ferramentas únicas para sua indústria.",
          },
          {
            title: "Coleta de Dados",
            description: "Reúna informações valiosas dos seus usuários.",
          },
          {
            title: "Escalabilidade",
            description: "Manipule grandes volumes de usuários simultâneos.",
          },
        ],
      },

      features: {
        title: "O Que Está Incluído?",

        description: "Criamos utilitários web completos com funcionalidades específicas para seu negócio.",

        features: [
          {
            title: "Design Personalizado",
            description: "Interface adaptada à identidade da sua marca.",
          },
          {
            title: "Funcionalidade Específica",
            description: "Cada ferramenta diseñada para seu caso de uso exato.",
          },
          {
            title: "Alta Velocidade",
            description: "Processamento rápido de dados e resultados.",
          },
          {
            title: "Integração API",
            description: "Conexão com seus sistemas e bancos de dados.",
          },
          {
            title: "Exportação",
            description: "Salve ou exporte resultados em múltiplos formatos.",
          },
          {
            title: "Design Responsivo",
            description: "Funciona perfeitamente em todos os dispositivos.",
          },
          {
            title: "Segurança",
            description: "Proteção de dados e transações seguras.",
          },
          {
            title: "Suporte Técnico",
            description: "Manutenção e atualizações contínuas.",
          },
        ],
      },

      plansSection: {
        title: "Escolha o Plano Ideal",

        description: "Todos os nossos planos seguem a mesma metodologia de desenvolvimento. A diferença está no nível de personalização, funcionalidades e integrações incluídas em cada opção.",
      },

      seo: {
        title: "Utilitários Web e Ferramentas Avançadas | SatCore Solutions",

        description: "Desenvolvimento de utilitários web e ferramentas personalizadas para otimizar processos do seu negócio.",
        keywords: [
          "utilitários web",
          "ferramentas web",
          "calculadoras web",
          "desenvolvimento web",
          "nextjs",
          "ferramentas personalizadas",
        ],
      },
    },
  },
  plans: []
};