import type {
  ServiceDetail,
} from "@/types/service-detail.types";

import {
  softwarePlans,
} from "@/data/plans/software/landing-pages";

export const enterpriseResourcePlanningDetail: ServiceDetail = {
  core: {
    id: "SRV-ERP",

    slug: "enterprise-resource-planning",

    name: "Enterprise Resource Planning",

    pillar: "software",

    icon: "package",

    heroImage: "/images/services/software/enterprise-resource-planning/hero/hero.png",

    plans: [],
  },

  translations: {
    es: {
      title: "Sistemas ERP",

      subtitle: "Gestión integral de recursos empresariales",

      description: "Desarrollamos sistemas ERP (Enterprise Resource Planning) que integran todos los procesos de tu empresa. Desde finanzas hasta inventario, proporcionamos soluciones completas para gestionar tu negocio.",

      overview: {
        title: "¿Qué es un Sistema ERP?",

        description: "Un sistema ERP es una plataforma que integra y gestiona todos los procesos empresariales: finanzas, inventario, compras, ventas, recursos humanos y más en un solo sistema unificado.",

        image: "/images/subservices/enterprise-resource-planning/erp.png",

        imageAlt: "Sistema ERP",

        useCases: [
          "Gestión financiera",
          "Gestión de inventario",
          "Control de producción",
          "Gestión de proyectos",
          "Recursos humanos",
        ],
      },

      workflow: {
        badge: "Metodología",

        title: "¿Cómo desarrollamos tu ERP?",

        description: "Creamos sistemas ERP personalizados que se adaptan a tu empresa.",

        steps: [
          {
            title: "Análisis",
            description: "Estudiamos todos los procesos de tu empresa."
          },
          {
            title: "Diseño",
            description: "Diseñamos la integración de módulos."
          },
          {
            title: "Desarrollo",
            description: "Implementamos los módulos necesarios."
          },
          {
            title: "Migración",
            description: "Migramos datos de sistemas anteriores."
          },
          {
            title: "Capacitación",
            description: "Entrenamos a tu equipo en el uso del ERP."
          },
        ],
      },

      useCases: {
        title: "¿Cuándo necesitas un ERP?",

        description: "Las empresas que crecen necesitan integrar sus procesos.",

        useCases: [
          {
            title: "Integración",
            description: "Unifica todos los procesos en un solo sistema."
          },
          {
            title: "Visibilidad",
            description: "Ten visión completa de tu empresa."
          },
          {
            title: "Eficiencia",
            description: "Elimina redundancias y errores manuales."
          },
          {
            title: "Reportes",
            description: "Genera reportes consolidados de toda la empresa."
          },
          {
            title: "Trazabilidad",
            description: "Rastrea productos, transacciones y más."
          },
          {
            title: "Escalabilidad",
            description: "El sistema crece con tu empresa."
          },
        ],
      },

      features: {
        title: "¿Qué incluye nuestro servicio?",

        description: "Creamos sistemas ERP completos con todos los módulos necesarios.",

        features: [
          {
            title: "Finanzas",
            description: "Contabilidad, facturación, reportes financieros."
          },
          {
            title: "Inventario",
            description: "Gestión de stock, movimientos, alertas."
          },
          {
            title: "Compras",
            description: "Gestión de proveedores y pedidos."
          },
          {
            title: "Ventas",
            description: "Pedidos, facturación, seguimiento."
          },
          {
            title: "Producción",
            description: "Planificación y control de producción."
          },
          {
            title: "RRHH",
            description: "Gestión de empleados, nóminas."
          },
          {
            title: "Proyectos",
            description: "Gestión de proyectos y recursos."
          },
          {
            title: "BI",
            description: "Business intelligence y analíticas."
          },
        ],
      },

      plansSection: {
        title: "Elige el plan ideal",

        description: "Todos nuestros planes utilizan la misma metodología de trabajo. La diferencia está en el nivel de personalización, funcionalidades e integraciones incluidas en cada uno.",
      },

      seo: {
        title: "Sistemas ERP | SatCore Solutions",

        description: "Desarrollo de sistemas ERP personalizados para gestionar tu empresa.",
        keywords: [
          "erp",
          "enterprise resource planning",
          "gestión empresarial",
          "sistema integrado",
          "nextjs",
        ],
      },
    },

    en: {
      title: "Enterprise Resource Planning",

      subtitle: "Comprehensive business resource management",

      description: "We develop ERP (Enterprise Resource Planning) systems that integrate all your company processes. From finance to inventory, we provide complete solutions to manage your business.",

      overview: {
        title: "What is an ERP System?",

        description: "An ERP system is a platform that integrates and manages all business processes: finance, inventory, purchases, sales, human resources, and more in a single unified system.",

        image: "/images/subservices/enterprise-resource-planning/erp.png",

        imageAlt: "ERP system",

        useCases: [
          "Financial management",
          "Inventory management",
          "Production control",
          "Project management",
          "Human resources",
        ],
      },

      workflow: {
        badge: "Our Process",

        title: "How We Build Your ERP",

        description: "We create customized ERP systems that fit your company.",

        steps: [
          {
            title: "Analysis",
            description: "We study all your company processes.",
          },
          {
            title: "Design",
            description: "We design module integration.",
          },
          {
            title: "Development",
            description: "We implement the required modules.",
          },
          {
            title: "Migration",
            description: "We migrate data from previous systems.",
          },
          {
            title: "Training",
            description: "We train your team on ERP usage.",
          },
        ],
      },

      useCases: {
        title: "When Do You Need an ERP?",

        description: "Growing companies need to integrate their processes.",

        useCases: [
          {
            title: "Integration",
            description: "Unify all processes in a single system.",
          },
          {
            title: "Visibility",
            description: "Have complete view of your company.",
          },
          {
            title: "Efficiency",
            description: "Eliminate redundancies and manual errors.",
          },
          {
            title: "Reports",
            description: "Generate consolidated company reports.",
          },
          {
            title: "Traceability",
            description: "Track products, transactions, and more.",
          },
          {
            title: "Scalability",
            description: "System grows with your company.",
          },
        ],
      },

      features: {
        title: "What's Included?",

        description: "We create complete ERP systems with all necessary modules.",

        features: [
          {
            title: "Finance",
            description: "Accounting, invoicing, financial reports.",
          },
          {
            title: "Inventory",
            description: "Stock management, movements, alerts.",
          },
          {
            title: "Purchases",
            description: "Supplier and order management.",
          },
          {
            title: "Sales",
            description: "Orders, invoicing, tracking.",
          },
          {
            title: "Production",
            description: "Production planning and control.",
          },
          {
            title: "HR",
            description: "Employee management, payroll.",
          },
          {
            title: "Projects",
            description: "Project and resource management.",
          },
          {
            title: "BI",
            description: "Business intelligence and analytics.",
          },
        ],
      },

      plansSection: {
        title: "Choose the Right Plan",

        description: "All of our plans follow the same proven development process. The difference lies in the level of customization, features, and integrations included in each option.",
      },

      seo: {
        title: "ERP Systems | SatCore Solutions",

        description: "Development of customized ERP systems to manage your company.",
        keywords: [
          "erp",
          "enterprise resource planning",
          "business management",
          "integrated system",
          "nextjs",
        ],
      },
    },

    pt: {
      title: "Enterprise Resource Planning",

      subtitle: "Gestão integral de recursos empresariais",

      description: "Desenvolvemos sistemas ERP (Enterprise Resource Planning) que integram todos os processos da sua empresa. De finanças a inventário, fornecemos soluções completas para gerenciar seu negócio.",

      overview: {
        title: "O que é um Sistema ERP?",

        description: "Um sistema ERP é uma plataforma que integra e gerencia todos os processos empresariais: finanças, inventário, compras, vendas, recursos humanos e mais em um único sistema unificado.",

        image: "/images/subservices/enterprise-resource-planning/erp.png",

        imageAlt: "Sistema ERP",

        useCases: [
          "Gestão financeira",
          "Gestão de inventário",
          "Controle de produção",
          "Gestão de projetos",
          "Recursos humanos",
        ],
      },

      workflow: {
        badge: "Nosso Processo",

        title: "Como Desenvolvemos seu ERP",

        description: "Criamos sistemas ERP personalizados que se adaptam à sua empresa.",

        steps: [
          {
            title: "Análise",
            description: "Estudamos todos os processos da sua empresa.",
          },
          {
            title: "Design",
            description: "Definimos a integração de módulos.",
          },
          {
            title: "Desenvolvimento",
            description: "Implementamos os módulos necessários.",
          },
          {
            title: "Migração",
            description: "Migramos dados de sistemas anteriores.",
          },
          {
            title: "Capacitação",
            description: "Treinamos sua equipe no uso do ERP.",
          },
        ],
      },

      useCases: {
        title: "Quando Você Precisa de um ERP?",

        description: "Empresas em crescimento precisam integrar seus processos.",

        useCases: [
          {
            title: "Integração",
            description: "Unifica todos os processos em um único sistema.",
          },
          {
            title: "Visibilidade",
            description: "Tenha visão completa da sua empresa.",
          },
          {
            title: "Eficiência",
            description: "Elimina redundâncias e erros manuais.",
          },
          {
            title: "Relatórios",
            description: "Gera relatórios consolidados da empresa.",
          },
          {
            title: "Rastreabilidade",
            description: "Rastreia produtos, transações e mais.",
          },
          {
            title: "Escalabilidade",
            description: "O sistema cresce com sua empresa.",
          },
        ],
      },

      features: {
        title: "O Que Está Incluído?",

        description: "Criamos sistemas ERP completos com todos os módulos necessários.",

        features: [
          {
            title: "Finanças",
            description: "Contabilidade, faturamento, relatórios financeiros.",
          },
          {
            title: "Inventário",
            description: "Gestão de stock, movimentos, alertas.",
          },
          {
            title: "Compras",
            description: "Gestão de fornecedores e pedidos.",
          },
          {
            title: "Vendas",
            description: "Pedidos, faturamento, acompanhamento.",
          },
          {
            title: "Produção",
            description: "Planejamento e controle de produção.",
          },
          {
            title: "RH",
            description: "Gestão de funcionários, folha de pagamento.",
          },
          {
            title: "Projetos",
            description: "Gestão de projetos e recursos.",
          },
          {
            title: "BI",
            description: "Business intelligence e análises.",
          },
        ],
      },

      plansSection: {
        title: "Escolha o Plano Ideal",

        description: "Todos os nossos planos seguem a mesma metodologia de desenvolvimento. A diferença está no nível de personalização, funcionalidades e integrações incluídas em cada opção.",
      },

      seo: {
        title: "Sistemas ERP | SatCore Solutions",

        description: "Desenvolvimento de sistemas ERP personalizados para gerenciar sua empresa.",
        keywords: [
          "erp",
          "enterprise resource planning",
          "gestão empresarial",
          "sistema integrado",
          "nextjs",
        ],
      },
    },
  },
  plans: []
};