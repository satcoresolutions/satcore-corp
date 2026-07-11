import type {
  ServiceDetail,
} from "@/types/service-detail.types";

import {
  softwarePlans,
} from "@/data/plans/software/landing-pages";

export const administrativeDashboardsDetail: ServiceDetail = {
  core: {
    id: "SRV-AD",

    slug: "administrative-dashboards",

    name: "Administrative Dashboards",

    pillar: "software",

    icon: "layout-dashboard",

    heroImage: "/images/services/software/hero/hero.png",

    plans: [],
  },

  translations: {
    es: {
      title: "Dashboards Administrativos",

      subtitle: "Panel de control centralizado para tu negocio",

      description: "Creamos dashboards administrativos personalizados que consolidan toda la información crítica de tu negocio en un solo lugar. Visualiza métricas, gestiona operaciones y toma decisiones informadas con datos en tiempo real.",

      overview: {
        title: "¿Qué es un Dashboard Administrativo?",

        description: "Un dashboard administrativo es una interfaz visual que muestraKPIs, métricas y datos importantes de tu negocio de manera organizada. Permite monitorear el rendimiento, identificar tendencias y tomar decisiones basadas en datos.",

        image: "/images/subservices/software/dashboard.png",

        imageAlt: "Dashboard administrativo profesional",

        useCases: [
          "Monitoreo de métricas de negocio",
          "Gestión de operaciones",
          "Reporte de ventas",
          "Seguimiento de productividad",
          "Análisis de rendimiento",
        ],
      },

      workflow: {
        badge: "Metodología",

        title: "¿Cómo desarrollamos tu Dashboard?",

        description: "Creamos dashboards a medida que se adaptan a tus necesidades específicas.",

        steps: [
          {
            title: "Análisis de Requisitos",
            description: "Identificamos las métricas y datos críticos para tu negocio."
          },
          {
            title: "Diseño de Visualización",
            description: "Diseñamos gráficos y tablas que presentan la información claramente."
          },
          {
            title: "Desarrollo",
            description: "Implementamos el dashboard con conexiones a tus fuentes de datos."
          },
          {
            title: "Integración de Datos",
            description: "Conectamos APIs y bases de datos para datos en tiempo real."
          },
          {
            title: "Pruebas y Entrega",
            description: "Verificamos la funcionalidad y entregamos con capacitación."
          },
        ],
      },

      useCases: {
        title: "¿Cuándo necesitas un Dashboard?",

        description: "Los dashboards son esenciales para cualquier negocio que necesite tomar decisiones basadas en datos.",

        useCases: [
          {
            title: "Visibilidad Total",
            description: "Ten una visión completa de tu negocio en un solo panel."
          },
          {
            title: "Decisiones Informadas",
            description: "Toma decisiones basadas en datos reales y actualizados."
          },
          {
            title: "Monitoreo en Tiempo Real",
            description: "Observa el rendimiento de tu negocio en tiempo real."
          },
          {
            title: "Identificación de Tendencias",
            description: "Detecta patrones y tendencias antes de que sean problemas."
          },
          {
            title: "Reportes Automáticos",
            description: "Genera reportes automáticos sin manipulación manual."
          },
          {
            title: "Acceso Multi-usuario",
            description: "Comparte información con tu equipo de forma controlada."
          },
        ],
      },

      features: {
        title: "¿Qué incluye nuestro servicio?",

        description: "Construimos dashboards completos con todas las herramientas que necesitas.",

        features: [
          {
            title: "Gráficos Interactivos",
            description: "Visualizaciones dinámicas que permiten explorar los datos."
          },
          {
            title: "Datos en Tiempo Real",
            description: "Actualización automática de métricas y KPIs."
          },
          {
            title: "Filtros y Segmentación",
            description: "Análisis detallado por período, región, categoría y más."
          },
          {
            title: "Exportación de Reportes",
            description: "Exporta datos a Excel, PDF u otros formatos."
          },
          {
            title: "Alertas Configurables",
            description: "Notificaciones cuando se alcanzan umbrales críticos."
          },
          {
            title: "Diseño Responsivo",
            description: "Accede a tu dashboard desde cualquier dispositivo."
          },
          {
            title: "Autenticación Segura",
            description: "Control de acceso con roles y permisos definidos."
          },
          {
            title: "Personalización Total",
            description: "Interfaz adaptada a tus necesidades y preferencias."
          },
        ],
      },

      plansSection: {
        title: "Elige el plan ideal",

        description: "Todos nuestros planes utilizan la misma metodología de trabajo. La diferencia está en el nivel de personalización, funcionalidades e integraciones incluidas en cada uno.",
      },

      seo: {
        title: "Dashboards Administrativos | SatCore Solutions",

        description: "Diseño y desarrollo de dashboards administrativos personalizados con métricas en tiempo real.",
        keywords: [
          "dashboard",
          "panel de control",
          "dashboards administrativos",
          "business intelligence",
          "visualización de datos",
          "nextjs",
        ],
      },
    },

    en: {
      title: "Admin Dashboards",

      subtitle: "Centralized control panel for your business",

      description: "We create personalized admin dashboards that consolidate all your business critical information in one place. Visualize metrics, manage operations, and make informed decisions with real-time data.",

      overview: {
        title: "What is an Admin Dashboard?",

        description: "An admin dashboard is a visual interface that displays KPIs, metrics, and important business data in an organized way. It allows you to monitor performance, identify trends, and make data-driven decisions.",

        image: "/images/subservices/administrative-dashboards/dashboard.png",

        imageAlt: "Professional admin dashboard",

        useCases: [
          "Business metrics monitoring",
          "Operations management",
          "Sales reporting",
          "Productivity tracking",
          "Performance analysis",
        ],
      },

      workflow: {
        badge: "Our Process",

        title: "How We Build Your Dashboard",

        description: "We create customized dashboards tailored to your specific needs.",

        steps: [
          {
            title: "Requirements Analysis",
            description: "We identify the critical metrics and data for your business.",
          },
          {
            title: "Visualization Design",
            description: "We design charts and tables that present information clearly.",
          },
          {
            title: "Development",
            description: "We implement the dashboard with connections to your data sources.",
          },
          {
            title: "Data Integration",
            description: "We connect APIs and databases for real-time data.",
          },
          {
            title: "Testing & Delivery",
            description: "We verify functionality and deliver with training.",
          },
        ],
      },

      useCases: {
        title: "When Do You Need a Dashboard?",

        description: "Dashboards are essential for any business that needs to make data-driven decisions.",

        useCases: [
          {
            title: "Total Visibility",
            description: "Have a complete view of your business on a single panel.",
          },
          {
            title: "Informed Decisions",
            description: "Make decisions based on real, up-to-date data.",
          },
          {
            title: "Real-Time Monitoring",
            description: "Observe your business performance in real-time.",
          },
          {
            title: "Trend Identification",
            description: "Detect patterns and trends before they become problems.",
          },
          {
            title: "Automated Reports",
            description: "Generate automatic reports without manual manipulation.",
          },
          {
            title: "Multi-User Access",
            description: "Share information with your team in a controlled way.",
          },
        ],
      },

      features: {
        title: "What's Included?",

        description: "We build complete dashboards with all the tools you need.",

        features: [
          {
            title: "Interactive Charts",
            description: "Dynamic visualizations that allow you to explore data.",
          },
          {
            title: "Real-Time Data",
            description: "Automatic updates of metrics and KPIs.",
          },
          {
            title: "Filters & Segmentation",
            description: "Detailed analysis by period, region, category, and more.",
          },
          {
            title: "Report Export",
            description: "Export data to Excel, PDF, or other formats.",
          },
          {
            title: "Configurable Alerts",
            description: "Notifications when critical thresholds are reached.",
          },
          {
            title: "Responsive Design",
            description: "Access your dashboard from any device.",
          },
          {
            title: "Secure Authentication",
            description: "Access control with defined roles and permissions.",
          },
          {
            title: "Total Customization",
            description: "Interface adapted to your needs and preferences.",
          },
        ],
      },

      plansSection: {
        title: "Choose the Right Plan",

        description: "All of our plans follow the same proven development process. The difference lies in the level of customization, features, and integrations included in each option.",
      },

      seo: {
        title: "Admin Dashboards | SatCore Solutions",

        description: "Design and development of personalized admin dashboards with real-time metrics.",
        keywords: [
          "dashboard",
          "admin dashboard",
          "business intelligence",
          "data visualization",
          "nextjs",
        ],
      },
    },

    pt: {
      title: "Dashboards Administrativos",

      subtitle: "Painel de controle centralizado para seu negócio",

      description: "Criamos dashboards administrativos personalizados que consolidam todas as informações críticas do seu negócio em um só lugar. Visualize métricas, gerencie operações e tome decisões informadas com dados em tempo real.",

      overview: {
        title: "O que é um Dashboard Administrativo?",

        description: "Um dashboard administrativo é uma interface visual que exibe KPIs, métricas e dados importantes do seu negócio de forma organizada. Permite monitorar o desempenho, identificar tendências e tomar decisões baseadas em dados.",

        image: "/images/subservices/administrative-dashboards/dashboard.png",

        imageAlt: "Dashboard administrativo profissional",

        useCases: [
          "Monitoramento de métricas de negócio",
          "Gestão de operações",
          "Relatório de vendas",
          "Acompanhamento de produtividade",
          "Análise de desempenho",
        ],
      },

      workflow: {
        badge: "Nosso Processo",

        title: "Como Desenvolvemos seu Dashboard",

        description: "Criamos dashboards sob medida que se adaptam às suas necessidades específicas.",

        steps: [
          {
            title: "Análise de Requisitos",
            description: "Identificamos as métricas e dados críticos para seu negócio.",
          },
          {
            title: "Design de Visualização",
            description: "Definimos gráficos e tabelas que apresentam a informação claramente.",
          },
          {
            title: "Desenvolvimento",
            description: "Implementamos o dashboard com conexões às suas fontes de dados.",
          },
          {
            title: "Integração de Dados",
            description: "Conectamos APIs e bancos de dados para dados em tempo real.",
          },
          {
            title: "Testes e Entrega",
            description: "Verificamos a funcionalidade e entregamos com capacitação.",
          },
        ],
      },

      useCases: {
        title: "Quando Você Precisa de um Dashboard?",

        description: "Os dashboards são essenciais para qualquer negócio que precise tomar decisões baseadas em dados.",

        useCases: [
          {
            title: "Visibilidade Total",
            description: "Tenha uma visão completa do seu negócio em um único painel.",
          },
          {
            title: "Decisões Informadas",
            description: "Tome decisões baseadas em dados reais e atualizados.",
          },
          {
            title: "Monitoramento em Tempo Real",
            description: "Observe o desempenho do seu negócio em tempo real.",
          },
          {
            title: "Identificação de Tendências",
            description: "Detecte padrões e tendências antes que se tornem problemas.",
          },
          {
            title: "Relatórios Automáticos",
            description: "Gere relatórios automáticos sem manipulação manual.",
          },
          {
            title: "Acesso Multi-usuário",
            description: "Compartilhe informações com sua equipe de forma controlada.",
          },
        ],
      },

      features: {
        title: "O Que Está Incluído?",

        description: "Construimos dashboards completos com todas as ferramentas que você precisa.",

        features: [
          {
            title: "Gráficos Interativos",
            description: "Visualizações dinâmicas que permitem explorar os dados.",
          },
          {
            title: "Dados em Tempo Real",
            description: "Atualização automática de métricas e KPIs.",
          },
          {
            title: "Filtros e Segmentação",
            description: "Análise detalhada por período, região, categoria e mais.",
          },
          {
            title: "Exportação de Relatórios",
            description: "Exporte dados para Excel, PDF ou outros formatos.",
          },
          {
            title: "Alertas Configuráveis",
            description: "Notificações quando limites críticos são alcançados.",
          },
          {
            title: "Design Responsivo",
            description: "Acesse seu dashboard de qualquer dispositivo.",
          },
          {
            title: "Autenticação Segura",
            description: "Controle de acesso com funções e permissões definidas.",
          },
          {
            title: "Personalização Total",
            description: "Interface adaptada às suas necessidades e preferências.",
          },
        ],
      },

      plansSection: {
        title: "Escolha o Plano Ideal",

        description: "Todos os nossos planos seguem a mesma metodologia de desenvolvimento. A diferença está no nível de personalização, funcionalidades e integrações incluídas em cada opção.",
      },

      seo: {
        title: "Dashboards Administrativos | SatCore Solutions",

        description: "Design e desenvolvimento de dashboards administrativos personalizados com métricas em tempo real.",
        keywords: [
          "dashboard",
          "painel de controle",
          "dashboards administrativos",
          "business intelligence",
          "visualização de dados",
          "nextjs",
        ],
      },
    },
  },
  plans: []
};