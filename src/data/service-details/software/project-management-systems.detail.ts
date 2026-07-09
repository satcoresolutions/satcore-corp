import type {
  ServiceDetail,
} from "@/types/service-detail.types";

import {
  softwarePlans,
} from "@/data/plans/software/landing-pages";

export const projectManagementSystemsDetail: ServiceDetail = {
  core: {
    id: "SRV-PMS",

    slug: "project-management-systems",

    name: "Project Management Systems",

    pillar: "software",

    icon: "check-square",

    heroImage: "/images/services/software/project-management-systems/hero/hero.png",

    plans: [],
  },

  translations: {
    es: {
      title: "Sistemas de Gestión de Proyectos",

      subtitle: "Organiza y sigue tus proyectos",

      description: "Desarrollamos sistemas de gestión de proyectos que te permiten planificar, ejecutar y supervisar proyectos de manera eficiente. Desde tableros kanban hasta cronogramas, proporcionamos herramientas completas.",

      overview: {
        title: "¿Qué es un Sistema de Gestión de Proyectos?",

        description: "Un sistema de gestión de proyectos es una herramienta que permite organizar tareas, asignar responsabilidades, seguir el progreso y colaborar en proyectos. Ayuda a equipos a trabajar de forma más eficiente.",

        image: "/images/subservices/project-management-systems/project.png",

        imageAlt: "Gestión de proyectos",

        useCases: [
          "Gestión de proyectos ágiles",
          "Seguimiento de tareas",
          "Planificación de recursos",
          "Colaboración en equipo",
          "Control de presupuestos",
        ],
      },

      workflow: {
        badge: "Metodología",

        title: "¿Cómo desarrollamos tu Sistema?",

        description: "Creamos sistemas de gestión de proyectos adaptados a tu metodología.",

        steps: [
          {
            title: "Análisis",
            description: "Estudiamos tus necesidades y metodología de trabajo."
          },
          {
            title: "Diseño",
            description: "Diseñamos la estructura y flujos de trabajo."
          },
          {
            title: "Desarrollo",
            description: "Implementamos el sistema con todas las funcionalidades."
          },
          {
            title: "Integración",
            description: "Conectamos con tus herramientas existentes."
          },
          {
            title: "Capacitación",
            description: "Entrenamos a tu equipo en el uso del sistema."
          },
        ],
      },

      useCases: {
        title: "¿Cuándo necesitas un Sistema de Gestión?",

        description: "Todo equipo que maneje proyectos necesita un sistema de gestión.",

        useCases: [
          {
            title: "Organización",
            description: "Mantén todas las tareas y proyectos organizados."
          },
          {
            title: "Colaboración",
            description: "Mejora la comunicación y colaboración del equipo."
          },
          {
            title: "Visibilidad",
            description: "Ten visibilidad completa del estado de cada proyecto."
          },
          {
            title: "Productividad",
            description: "Optimiza el flujo de trabajo del equipo."
          },
          {
            title: "Responsabilidad",
            description: "Asigna tareas y responsabilidades claramente."
          },
          {
            title: "Reporting",
            description: "Genera reportes de progreso automáticamente."
          },
        ],
      },

      features: {
        title: "¿Qué incluye nuestro servicio?",

        description: "Creamos sistemas de gestión de proyectos completos.",

        features: [
          {
            title: "Tableros Kanban",
            description: "Visualización visual del flujo de trabajo."
          },
          {
            title: "Listas de Tareas",
            description: "Gestión detallada de tareas y subtareas."
          },
          {
            title: "Cronogramas",
            description: "Planificación temporal con diagramas de Gantt."
          },
          {
            title: "Asignación",
            description: "Asigna tareas a miembros del equipo."
          },
          {
            title: "Comentarios",
            description: "Colaboración y comunicación en cada tarea."
          },
          {
            title: "Archivos",
            description: "Adjunta documentos y archivos a tareas."
          },
          {
            title: "Notificaciones",
            description: "Alertas sobre actualizaciones y fechas límite."
          },
          {
            title: "Reportes",
            description: "Reportes de progreso y productividad."
          },
        ],
      },

      plansSection: {
        title: "Elige el plan ideal",

        description: "Todos nuestros planes utilizan la misma metodología de trabajo. La diferencia está en el nivel de personalización, funcionalidades e integraciones incluidas en cada uno.",
      },

      seo: {
        title: "Gestión de Proyectos | SatCore Solutions",

        description: "Desarrollo de sistemas de gestión de proyectos para equipos.",
        keywords: [
          "gestión de proyectos",
          "project management",
          "kanban",
          "tareas",
          "nextjs",
        ],
      },
    },

    en: {
      title: "Project Management Systems",

      subtitle: "Organize and track your projects",

      description: "We develop project management systems that allow you to plan, execute, and monitor projects efficiently. From kanban boards to timelines, we provide complete tools.",

      overview: {
        title: "What is a Project Management System?",

        description: "A project management system is a tool that allows organizing tasks, assigning responsibilities, tracking progress, and collaborating on projects. It helps teams work more efficiently.",

        image: "/images/subservices/project-management-systems/project.png",

        imageAlt: "Project management",

        useCases: [
          "Agile project management",
          "Task tracking",
          "Resource planning",
          "Team collaboration",
          "Budget control",
        ],
      },

      workflow: {
        badge: "Our Process",

        title: "How We Build Your System",

        description: "We create project management systems tailored to your methodology.",

        steps: [
          {
            title: "Analysis",
            description: "We study your needs and work methodology.",
          },
          {
            title: "Design",
            description: "We design structure and workflows.",
          },
          {
            title: "Development",
            description: "We implement the system with all functionalities.",
          },
          {
            title: "Integration",
            description: "We connect with your existing tools.",
          },
          {
            title: "Training",
            description: "We train your team on system usage.",
          },
        ],
      },

      useCases: {
        title: "When Do You Need a Management System?",

        description: "Every team that manages projects needs a management system.",

        useCases: [
          {
            title: "Organization",
            description: "Keep all tasks and projects organized.",
          },
          {
            title: "Collaboration",
            description: "Improve team communication and collaboration.",
          },
          {
            title: "Visibility",
            description: "Have complete visibility into each project status.",
          },
          {
            title: "Productivity",
            description: "Optimize team workflow.",
          },
          {
            title: "Accountability",
            description: "Assign tasks and responsibilities clearly.",
          },
          {
            title: "Reporting",
            description: "Generate progress reports automatically.",
          },
        ],
      },

      features: {
        title: "What's Included?",

        description: "We create complete project management systems.",

        features: [
          {
            title: "Kanban Boards",
            description: "Visual workflow visualization.",
          },
          {
            title: "Task Lists",
            description: "Detailed task and subtask management.",
          },
          {
            title: "Timelines",
            description: "Time planning with Gantt charts.",
          },
          {
            title: "Assignment",
            description: "Assign tasks to team members.",
          },
          {
            title: "Comments",
            description: "Collaboration and communication on each task.",
          },
          {
            title: "Files",
            description: "Attach documents and files to tasks.",
          },
          {
            title: "Notifications",
            description: "Alerts about updates and deadlines.",
          },
          {
            title: "Reports",
            description: "Progress and productivity reports.",
          },
        ],
      },

      plansSection: {
        title: "Choose the Right Plan",

        description: "All of our plans follow the same proven development process. The difference lies in the level of customization, features, and integrations included in each option.",
      },

      seo: {
        title: "Project Management | SatCore Solutions",

        description: "Development of project management systems for teams.",
        keywords: [
          "project management",
          "kanban",
          "tasks",
          "nextjs",
        ],
      },
    },

    pt: {
      title: "Sistemas de Gestão de Projetos",

      subtitle: "Organize e acompanhe seus projetos",

      description: "Desenvolvemos sistemas de gestão de projetos que permitem planejar, executar e monitorar projetos de forma eficiente. De tabuleiros kanban a cronogramas, fornecemos ferramentas completas.",

      overview: {
        title: "O que é um Sistema de Gestão de Projetos?",

        description: "Um sistema de gestão de projetos é uma ferramenta que permite organizar tarefas, atribuir responsabilidades, acompanhar o progresso e colaborar em projetos. Ajuda equipes a trabalhar de forma mais eficiente.",

        image: "/images/subservices/project-management-systems/project.png",

        imageAlt: "Gestão de projetos",

        useCases: [
          "Gestão de projetos ágeis",
          "Acompanhamento de tarefas",
          "Planejamento de recursos",
          "Colaboração em equipe",
          "Controle de orçamentos",
        ],
      },

      workflow: {
        badge: "Nosso Processo",

        title: "Como Desenvolvemos seu Sistema",

        description: "Criamos sistemas de gestão de projetos adaptados à sua metodologia.",

        steps: [
          {
            title: "Análise",
            description: "Estudamos suas necessidades e metodologia de trabalho.",
          },
          {
            title: "Design",
            description: "Definimos a estrutura e fluxos de trabalho.",
          },
          {
            title: "Desenvolvimento",
            description: "Implementamos o sistema com todas as funcionalidades.",
          },
          {
            title: "Integração",
            description: "Conectamos com suas ferramentas existentes.",
          },
          {
            title: "Capacitação",
            description: "Treinamos sua equipe no uso do sistema.",
          },
        ],
      },

      useCases: {
        title: "Quando Você Precisa de um Sistema de Gestão?",

        description: "Toda equipe que manipula projetos precisa de um sistema de gestão.",

        useCases: [
          {
            title: "Organização",
            description: "Mantenha todas as tarefas e projetos organizados.",
          },
          {
            title: "Colaboração",
            description: "Melhore a comunicação e colaboração da equipe.",
          },
          {
            title: "Visibilidade",
            description: "Tenha visibilidade completa do estado de cada projeto.",
          },
          {
            title: "Produtividade",
            description: "Otimize o fluxo de trabalho da equipe.",
          },
          {
            title: "Responsabilidade",
            description: "Atribua tarefas e responsabilidades claramente.",
          },
          {
            title: "Relatórios",
            description: "Gere relatórios de progresso automaticamente.",
          },
        ],
      },

      features: {
        title: "O Que Está Incluído?",

        description: "Criamos sistemas de gestão de projetos completos.",

        features: [
          {
            title: "Tabuleiros Kanban",
            description: "Visualização visual do fluxo de trabalho.",
          },
          {
            title: "Listas de Tarefas",
            description: "Gestão detalhada de tarefas e subtarefas.",
          },
          {
            title: "Cronogramas",
            description: "Planejamento temporal com diagramas de Gantt.",
          },
          {
            title: "Atribuição",
            description: "Atribua tarefas a membros da equipe.",
          },
          {
            title: "Comentários",
            description: "Colaboração e comunicação em cada tarefa.",
          },
          {
            title: "Arquivos",
            description: "Anexe documentos e arquivos a tarefas.",
          },
          {
            title: "Notificações",
            description: "Alertas sobre atualizações e prazos.",
          },
          {
            title: "Relatórios",
            description: "Relatórios de progresso e produtividade.",
          },
        ],
      },

      plansSection: {
        title: "Escolha o Plano Ideal",

        description: "Todos os nossos planos seguem a mesma metodologia de desenvolvimento. A diferença está no nível de personalização, funcionalidades e integrações incluídas em cada opção.",
      },

      seo: {
        title: "Gestão de Projetos | SatCore Solutions",

        description: "Desenvolvimento de sistemas de gestão de projetos para equipes.",
        keywords: [
          "gestão de projetos",
          "project management",
          "kanban",
          "tarefas",
          "nextjs",
        ],
      },
    },
  },
  plans: []
};