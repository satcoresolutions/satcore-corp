import type {
  ServiceDetail,
} from "@/types/service-detail.types";

import {
  softwarePlans,
} from "@/data/plans/software/landing-pages";

export const customCrmDetail: ServiceDetail = {
  core: {
    id: "SRV-CRM",

    slug: "custom-crm",

    name: "Custom CRM",

    pillar: "software",

    icon: "database",

    heroImage: "/images/services/software/hero/hero.png",

    plans: [],
  },

  translations: {
    es: {
      title: "CRM Personalizado",

      subtitle: "Gestiona tus relaciones con clientes",

      description: "Desarrollamos sistemas CRM personalizados que se adaptan a tu proceso de ventas y atención al cliente. Desde seguimiento de leads hasta automatización de ventas, proporcionamos soluciones completas.",

      overview: {
        title: "¿Qué es un CRM?",

        description: "Un CRM (Customer Relationship Management) es un sistema que gestiona las relaciones con clientes. Incluye seguimiento de contactos, gestión de oportunidades, historial de interacciones y herramientas de ventas.",

      image: "/images/subservices/software/cmr-custom.png",

      imageAlt: "CRM personalizado",

        useCases: [
          "Gestión de ventas",
          "Seguimiento de leads",
          "Atención al cliente",
          "Marketing automation",
          "Análisis de clientes",
        ],
      },

      workflow: {
        badge: "Metodología",

        title: "¿Cómo desarrollamos tu CRM?",

        description: "Creamos CRMs personalizados que se adaptan a tu negocio.",

        steps: [
          {
            title: "Análisis",
            description: "Estudiamos tu proceso de ventas y necesidades."
          },
          {
            title: "Diseño",
            description: "Diseñamos la estructura y flujos de trabajo."
          },
          {
            title: "Desarrollo",
            description: "Implementamos el CRM con todas las funcionalidades."
          },
          {
            title: "Datos",
            description: "Migramos tus datos existentes al nuevo sistema."
          },
          {
            title: "Capacitación",
            description: "Entrenamos a tu equipo en el uso del CRM."
          },
        ],
      },

      useCases: {
        title: "¿Cuándo necesitas un CRM?",

        description: "Todo negocio que quiera gestionar mejor sus relaciones con clientes.",

        useCases: [
          {
            title: "Visibilidad",
            description: "Ten visibilidad completa de tu pipeline de ventas."
          },
          {
            title: "Organización",
            description: "Centraliza toda la información de clientes."
          },
          {
            title: "Automatización",
            description: "Automatiza tareas repetitivas de ventas."
          },
          {
            title: "Seguimiento",
            description: "No pierdas leads nunca más."
          },
          {
            title: "Reportes",
            description: "Toma decisiones basadas en datos reales."
          },
          {
            title: "Colaboración",
            description: "Mejora la coordinación de tu equipo."
          },
        ],
      },

      features: {
        title: "¿Qué incluye nuestro servicio?",

        description: "Creamos CRMs personalizados con todas las herramientas necesarias.",

        features: [
          {
            title: "Gestión de Contactos",
            description: "Base de datos completa de clientes."
          },
          {
            title: "Pipeline",
            description: "Visualización del proceso de ventas."
          },
          {
            title: "Gestión de Leads",
            description: "Seguimiento desde lead hasta cierre."
          },
          {
            title: "Tareas",
            description: "Asignación y seguimiento de tareas."
          },
          {
            title: "Notas",
            description: "Historial de interacciones con clientes."
          },
          {
            title: "Reportes",
            description: "Dashboards y métricas de ventas."
          },
          {
            title: "Automatización",
            description: "Workflows automáticos de ventas."
          },
          {
            title: "Integración",
            description: "Conecta con email, teléfono y otras herramientas."
          },
        ],
      },

      plansSection: {
        title: "Elige el plan ideal",

        description: "Todos nuestros planes utilizan la misma metodología de trabajo. La diferencia está en el nivel de personalización, funcionalidades e integraciones incluidas en cada uno.",
      },

      seo: {
        title: "CRM Personalizado | SatCore Solutions",

        description: "Desarrollo de sistemas CRM personalizados para gestionar relaciones con clientes.",
        keywords: [
          "crm",
          "customer relationship management",
          "gestión de clientes",
          "ventas",
          "nextjs",
        ],
      },
    },

    en: {
      title: "Custom CRM",

      subtitle: "Manage your customer relationships",

      description: "We develop personalized CRM systems that adapt to your sales and customer service process. From lead tracking to sales automation, we provide complete solutions.",

      overview: {
        title: "What is a CRM?",

        description: "A CRM (Customer Relationship Management) is a system that manages customer relationships. It includes contact tracking, opportunity management, interaction history, and sales tools.",

        image: "/images/subservices/custom-crm/crm.png",

        imageAlt: "Custom CRM",

        useCases: [
          "Sales management",
          "Lead tracking",
          "Customer service",
          "Marketing automation",
          "Customer analytics",
        ],
      },

      workflow: {
        badge: "Our Process",

        title: "How We Build Your CRM",

        description: "We create customized CRMs that fit your business.",

        steps: [
          {
            title: "Analysis",
            description: "We study your sales process and needs.",
          },
          {
            title: "Design",
            description: "We design structure and workflows.",
          },
          {
            title: "Development",
            description: "We implement the CRM with all functionalities.",
          },
          {
            title: "Data",
            description: "We migrate your existing data to the new system.",
          },
          {
            title: "Training",
            description: "We train your team on CRM usage.",
          },
        ],
      },

      useCases: {
        title: "When Do You Need a CRM?",

        description: "Any business that wants to better manage customer relationships.",

        useCases: [
          {
            title: "Visibility",
            description: "Have complete visibility into your sales pipeline.",
          },
          {
            title: "Organization",
            description: "Centralize all customer information.",
          },
          {
            title: "Automation",
            description: "Automate repetitive sales tasks.",
          },
          {
            title: "Tracking",
            description: "Never lose a lead again.",
          },
          {
            title: "Reports",
            description: "Make decisions based on real data.",
          },
          {
            title: "Collaboration",
            description: "Improve your team's coordination.",
          },
        ],
      },

      features: {
        title: "What's Included?",

        description: "We create customized CRMs with all necessary tools.",

        features: [
          {
            title: "Contact Management",
            description: "Complete customer database.",
          },
          {
            title: "Pipeline",
            description: "Visualization of the sales process.",
          },
          {
            title: "Lead Management",
            description: "Tracking from lead to close.",
          },
          {
            title: "Tasks",
            description: "Assignment and task tracking.",
          },
          {
            title: "Notes",
            description: "History of customer interactions.",
          },
          {
            title: "Reports",
            description: "Dashboards and sales metrics.",
          },
          {
            title: "Automation",
            description: "Automatic sales workflows.",
          },
          {
            title: "Integration",
            description: "Connect with email, phone, and other tools.",
          },
        ],
      },

      plansSection: {
        title: "Choose the Right Plan",

        description: "All of our plans follow the same proven development process. The difference lies in the level of customization, features, and integrations included in each option.",
      },

      seo: {
        title: "Custom CRM | SatCore Solutions",

        description: "Development of customized CRM systems to manage customer relationships.",
        keywords: [
          "crm",
          "customer relationship management",
          "customer management",
          "sales",
          "nextjs",
        ],
      },
    },

    pt: {
      title: "CRM Personalizado",

      subtitle: "Gerencie seus relacionamentos com clientes",

      description: "Desenvolvemos sistemas CRM personalizados que se adaptam ao seu processo de vendas e atendimento ao cliente. De acompanhamento de leads à automação de vendas, fornecemos soluções completas.",

      overview: {
        title: "O que é um CRM?",

        description: "Um CRM (Customer Relationship Management) é um sistema que gerencia relacionamentos com clientes. Inclui acompanhamento de contatos, gestão de oportunidades, histórico de interações e ferramentas de vendas.",

        image: "/images/subservices/custom-crm/crm.png",

        imageAlt: "CRM personalizado",

        useCases: [
          "Gestão de vendas",
          "Acompanhamento de leads",
          "Atendimento ao cliente",
          "Automação de marketing",
          "Análise de clientes",
        ],
      },

      workflow: {
        badge: "Nosso Processo",

        title: "Como Desenvolvemos seu CRM",

        description: "Criamos CRMs personalizados que se adaptam ao seu negócio.",

        steps: [
          {
            title: "Análise",
            description: "Estudamos seu processo de vendas e necessidades.",
          },
          {
            title: "Design",
            description: "Definimos a estrutura e fluxos de trabalho.",
          },
          {
            title: "Desenvolvimento",
            description: "Implementamos o CRM com todas as funcionalidades.",
          },
          {
            title: "Dados",
            description: "Migramos seus dados existentes para o novo sistema.",
          },
          {
            title: "Capacitação",
            description: "Treinamos sua equipe no uso do CRM.",
          },
        ],
      },

      useCases: {
        title: "Quando Você Precisa de um CRM?",

        description: "Todo negócio que quiser gerenciar melhor seus relacionamentos com clientes.",

        useCases: [
          {
            title: "Visibilidade",
            description: "Tenha visibilidade completa do seu funil de vendas.",
          },
          {
            title: "Organização",
            description: "Centralize todas as informações de clientes.",
          },
          {
            title: "Automatização",
            description: "Automatize tarefas repetitivas de vendas.",
          },
          {
            title: "Acompanhamento",
            description: "Nunca perca um lead novamente.",
          },
          {
            title: "Relatórios",
            description: "Tome decisões baseadas em dados reais.",
          },
          {
            title: "Colaboração",
            description: "Melhore a coordenação da sua equipe.",
          },
        ],
      },

      features: {
        title: "O Que Está Incluído?",

        description: "Criamos CRMs personalizados com todas as ferramentas necessárias.",

        features: [
          {
            title: "Gestão de Contatos",
            description: "Base de dados completa de clientes.",
          },
          {
            title: "Pipeline",
            description: "Visualização do processo de vendas.",
          },
          {
            title: "Gestão de Leads",
            description: "Acompanhamento desde lead até fechamento.",
          },
          {
            title: "Tarefas",
            description: "Atribuição e acompanhamento de tarefas.",
          },
          {
            title: "Notas",
            description: "Histórico de interações com clientes.",
          },
          {
            title: "Relatórios",
            description: "Dashboards e métricas de vendas.",
          },
          {
            title: "Automatização",
            description: "Fluxos de trabalho automáticos de vendas.",
          },
          {
            title: "Integração",
            description: "Conecte com email, telefone e outras ferramentas.",
          },
        ],
      },

      plansSection: {
        title: "Escolha o Plano Ideal",

        description: "Todos os nossos planos seguem a mesma metodologia de desenvolvimento. A diferença está no nível de personalização, funcionalidades e integrações incluídas em cada opção.",
      },

      seo: {
        title: "CRM Personalizado | SatCore Solutions",

        description: "Desenvolvimento de sistemas CRM personalizados para gerenciar relacionamentos com clientes.",
        keywords: [
          "crm",
          "customer relationship management",
          "gestão de clientes",
          "vendas",
          "nextjs",
        ],
      },
    },
  },
  plans: []
};