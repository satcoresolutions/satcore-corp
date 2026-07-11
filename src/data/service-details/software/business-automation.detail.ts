import type {
  ServiceDetail,
} from "@/types/service-detail.types";

import {
  softwarePlans,
} from "@/data/plans/software/landing-pages";

export const businessAutomationDetail: ServiceDetail = {
  core: {
    id: "SRV-BA",

    slug: "business-automation",

    name: "Business Automation",

    pillar: "software",

    icon: "settings",

    heroImage: "/images/services/software/hero/hero.png",

    plans: [],
  },

  translations: {
    es: {
      title: "Automatización de Procesos",

      subtitle: "Optimiza y acelera tus operaciones",

      description: "Implementamos soluciones de automatización que eliminan tareas repetitivas y optimizan tus procesos de negocio. Desde flujos de trabajo automatizados hasta integraciones entre sistemas, reducimos errores y ahorramos tiempo.",

      overview: {
        title: "¿Qué es la Automatización de Procesos?",

        description: "La automatización de procesos consiste en utilizar tecnología para ejecutar tareas repetitivas de forma automática, sin intervención manual. Esto incluye flujos de trabajo, integraciones, notificaciones automáticas y más.",

        image: "/images/subservices/software/calendar-system.png",

        imageAlt: "Automatización de procesos",

        useCases: [
          "Flujos de trabajo automatizados",
          "Integración de sistemas",
          "Notificaciones automáticas",
          "Gestión de documentos",
          "Reportes automáticos",
        ],
      },

      workflow: {
        badge: "Metodología",

        title: "¿Cómo implementamos la Automatización?",

        description: "Analizamos y optimizamos tus procesos para automatizarlos eficientemente.",

        steps: [
          {
            title: "Auditoría de Procesos",
            description: "Analizamos tus procesos actuales para identificar oportunidades."
          },
          {
            title: "Diseño de Solución",
            description: "Diseñamos el flujo de automatización más eficiente."
          },
          {
            title: "Desarrollo",
            description: "Implementamos las automatizaciones con herramientas adecuadas."
          },
          {
            title: "Integración",
            description: "Conectamos los diferentes sistemas y aplicaciones."
          },
          {
            title: "Pruebas y Ajuste",
            description: "Verificamos el funcionamiento y optimizamos según sea necesario."
          },
        ],
      },

      useCases: {
        title: "¿Cuándo necesitas Automatización?",

        description: "La automatización es ideal cuando tienes procesos repetitivos que consumen tiempo.",

        useCases: [
          {
            title: "Reducción de Tiempo",
            description: "Elimina horas de trabajo manual en tareas repetitivas."
          },
          {
            title: "Menos Errores",
            description: "Reduce errores humanos en procesos críticos."
          },
          {
            title: "Escalabilidad",
            description: "Maneja mayor volumen sin aumentar personal."
          },
          {
            title: "Consistencia",
            description: "Garantiza que los procesos se ejecuten de la misma manera."
          },
          {
            title: "Visibilidad",
            description: "Obtén visibilidad en tiempo real del estado de tus procesos."
          },
          {
            title: "Cumplimiento",
            description: "Asegura que se cumplan los pasos requeridos en cada proceso."
          },
        ],
      },

      features: {
        title: "¿Qué incluye nuestro servicio?",

        description: "Implementamos soluciones de automatización completas adaptadas a tu negocio.",

        features: [
          {
            title: "Flujos de Trabajo",
            description: "Automatización de procesos paso a paso."
          },
          {
            title: "Integraciones API",
            description: "Conexión entre diferentes sistemas y aplicaciones."
          },
          {
            title: "Automatización de Email",
            description: "Notificaciones y comunicaciones automáticas."
          },
          {
            title: "Triggers y Eventos",
            description: "Acciones automáticas basadas en eventos específicos."
          },
          {
            title: "Gestión de Datos",
            description: "Sincronización y validación automática de datos."
          },
          {
            title: "Reportes Automáticos",
            description: "Generación y envío de reportes programados."
          },
          {
            title: "Panel de Control",
            description: "Monitoreo y gestión de automatizaciones."
          },
          {
            title: "Escalabilidad",
            description: "Soluciones que crecen con tu negocio."
          },
        ],
      },

      plansSection: {
        title: "Elige el plan ideal",

        description: "Todos nuestros planes utilizan la misma metodología de trabajo. La diferencia está en el nivel de personalización, funcionalidades e integraciones incluidas en cada uno.",
      },

      seo: {
        title: "Automatización de Procesos | SatCore Solutions",

        description: "Implementación de soluciones de automatización para optimizar procesos de negocio y reducir tiempo.",
        keywords: [
          "automatización",
          "automatización de procesos",
          "workflow",
          "integraciones",
          "nextjs",
          "optimización",
        ],
      },
    },

    en: {
      title: "Business Automation",

      subtitle: "Optimize and accelerate your operations",

      description: "We implement automation solutions that eliminate repetitive tasks and optimize your business processes. From automated workflows to system integrations, we reduce errors and save time.",

      overview: {
        title: "What is Process Automation?",

        description: "Process automation involves using technology to execute repetitive tasks automatically, without manual intervention. This includes workflows, integrations, automated notifications, and more.",

        image: "/images/subservices/business-automation/automation.png",

        imageAlt: "Process automation",

        useCases: [
          "Automated workflows",
          "System integrations",
          "Automated notifications",
          "Document management",
          "Automatic reports",
        ],
      },

      workflow: {
        badge: "Our Process",

        title: "How We Implement Automation",

        description: "We analyze and optimize your processes to automate them efficiently.",

        steps: [
          {
            title: "Process Audit",
            description: "We analyze your current processes to identify opportunities.",
          },
          {
            title: "Solution Design",
            description: "We design the most efficient automation flow.",
          },
          {
            title: "Development",
            description: "We implement automations with appropriate tools.",
          },
          {
            title: "Integration",
            description: "We connect different systems and applications.",
          },
          {
            title: "Testing & Adjustment",
            description: "We verify functionality and optimize as needed.",
          },
        ],
      },

      useCases: {
        title: "When Do You Need Automation?",

        description: "Automation is ideal when you have repetitive processes that consume time.",

        useCases: [
          {
            title: "Time Reduction",
            description: "Eliminate hours of manual work on repetitive tasks.",
          },
          {
            title: "Fewer Errors",
            description: "Reduce human errors in critical processes.",
          },
          {
            title: "Scalability",
            description: "Handle greater volume without adding staff.",
          },
          {
            title: "Consistency",
            description: "Ensure processes are executed the same way every time.",
          },
          {
            title: "Visibility",
            description: "Get real-time visibility into your process status.",
          },
          {
            title: "Compliance",
            description: "Ensure required steps are completed in each process.",
          },
        ],
      },

      features: {
        title: "What's Included?",

        description: "We implement complete automation solutions tailored to your business.",

        features: [
          {
            title: "Workflows",
            description: "Automation of processes step by step.",
          },
          {
            title: "API Integrations",
            description: "Connection between different systems and applications.",
          },
          {
            title: "Email Automation",
            description: "Automated notifications and communications.",
          },
          {
            title: "Triggers & Events",
            description: "Automatic actions based on specific events.",
          },
          {
            title: "Data Management",
            description: "Automatic data synchronization and validation.",
          },
          {
            title: "Automatic Reports",
            description: "Generation and delivery of scheduled reports.",
          },
          {
            title: "Control Panel",
            description: "Monitoring and management of automations.",
          },
          {
            title: "Scalability",
            description: "Solutions that grow with your business.",
          },
        ],
      },

      plansSection: {
        title: "Choose the Right Plan",

        description: "All of our plans follow the same proven development process. The difference lies in the level of customization, features, and integrations included in each option.",
      },

      seo: {
        title: "Business Automation | SatCore Solutions",

        description: "Implementation of automation solutions to optimize business processes and save time.",
        keywords: [
          "automation",
          "process automation",
          "workflow",
          "integrations",
          "nextjs",
          "optimization",
        ],
      },
    },

    pt: {
      title: "Automatização de Processos",

      subtitle: "Otimize e acelere suas operações",

      description: "Implementamos soluções de automatização que eliminam tarefas repetitivas e otimizam seus processos de negócio. Desde fluxos de trabalho automatizados até integrações entre sistemas, reduzimos erros e economizamos tempo.",

      overview: {
        title: "O que é a Automatização de Processos?",

        description: "A automatização de processos consiste em usar tecnologia para executar tarefas repetitivas de forma automática, sem intervenção manual. Isso inclui fluxos de trabalho, integrações, notificações automáticas e mais.",

        image: "/images/subservices/business-automation/automation.png",

        imageAlt: "Automatização de processos",

        useCases: [
          "Fluxos de trabalho automatizados",
          "Integração de sistemas",
          "Notificações automáticas",
          "Gestão de documentos",
          "Relatórios automáticos",
        ],
      },

      workflow: {
        badge: "Nosso Processo",

        title: "Como Implementamos a Automatização",

        description: "Analisamos e otimizamos seus processos para automatizá-los eficientemente.",

        steps: [
          {
            title: "Auditoria de Processos",
            description: "Analisamos seus processos atuais para identificar oportunidades.",
          },
          {
            title: "Design de Solução",
            description: "Definimos o fluxo de automatização mais eficiente.",
          },
          {
            title: "Desenvolvimento",
            description: "Implementamos as automatizações com ferramentas adequadas.",
          },
          {
            title: "Integração",
            description: "Conectamos os diferentes sistemas e aplicativos.",
          },
          {
            title: "Testes e Ajuste",
            description: "Verificamos o funcionamento e otimizamos conforme necessário.",
          },
        ],
      },

      useCases: {
        title: "Quando Você Precisa de Automatização?",

        description: "A automatização é ideal quando você tem processos repetitivos que consomem tempo.",

        useCases: [
          {
            title: "Redução de Tempo",
            description: "Elimina horas de trabalho manual em tarefas repetitivas.",
          },
          {
            title: "Menos Erros",
            description: "Reduz erros humanos em processos críticos.",
          },
          {
            title: "Escalabilidade",
            description: "Manipule maior volume sem aumentar equipe.",
          },
          {
            title: "Consistência",
            description: "Garante que os processos sejam executados da mesma maneira.",
          },
          {
            title: "Visibilidade",
            description: "Obtenha visibilidade em tempo real do estado dos seus processos.",
          },
          {
            title: "Conformidade",
            description: "Assegura que os passos requeridos sejam cumpridos em cada processo.",
          },
        ],
      },

      features: {
        title: "O Que Está Incluído?",

        description: "Implementamos soluções de automatização completas adaptadas ao seu negócio.",

        features: [
          {
            title: "Fluxos de Trabalho",
            description: "Automatização de processos passo a passo.",
          },
          {
            title: "Integrações API",
            description: "Conexão entre diferentes sistemas e aplicativos.",
          },
          {
            title: "Automatização de Email",
            description: "Notificações e comunicações automáticas.",
          },
          {
            title: "Triggers e Eventos",
            description: "Ações automáticas baseadas em eventos específicos.",
          },
          {
            title: "Gestão de Dados",
            description: "Sincronização e validação automática de dados.",
          },
          {
            title: "Relatórios Automáticos",
            description: "Geração e envio de relatórios programados.",
          },
          {
            title: "Painel de Controle",
            description: "Monitoramento e gestão de automatizações.",
          },
          {
            title: "Escalabilidade",
            description: "Soluções que crescem com seu negócio.",
          },
        ],
      },

      plansSection: {
        title: "Escolha o Plano Ideal",

        description: "Todos os nossos planos seguem a mesma metodologia de desenvolvimento. A diferença está no nível de personalização, funcionalidades e integrações incluídas em cada opção.",
      },

      seo: {
        title: "Automatização de Processos | SatCore Solutions",

        description: "Implementação de soluções de automatização para otimizar processos de negócio e economizar tempo.",
        keywords: [
          "automatização",
          "automatização de processos",
          "workflow",
          "integrações",
          "nextjs",
          "otimização",
        ],
      },
    },
  },
  plans: []
};