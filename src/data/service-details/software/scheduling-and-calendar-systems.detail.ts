import type {
  ServiceDetail,
} from "@/types/service-detail.types";

import {
  softwarePlans,
} from "@/data/plans/software/landing-pages";

export const schedulingAndCalendarSystemsDetail: ServiceDetail = {
  core: {
    id: "SRV-SCS",

    slug: "scheduling-and-calendar-systems",

    name: "Scheduling & Calendar Systems",

    pillar: "software",

    icon: "calendar",

    heroImage: "/images/services/software/hero/hero.png",

    plans: [],
  },

  translations: {
    es: {
      title: "Sistemas de Agenda y Calendario",

      subtitle: "Organiza tu tiempo efectivamente",

      description: "Desarrollamos sistemas de agenda y calendario que帮助你更好地管理时间。从会议安排到活动规划，我们提供完整的解决方案。",

      overview: {
        title: "¿Qué es un Sistema de Agenda?",

        description: "Un sistema de agenda y calendario es una herramienta que permite planificar eventos, reuniones y actividades. Incluye calendario, recordatorios, programación de eventos y colaboración.",

       image: "/images/subservices/software/calendar-system.png",

        imageAlt: "Sistema de agenda",

        useCases: [
          "Gestión de reuniones",
          "Programación de eventos",
          "Calendario colaborativo",
          "Reservas de recursos",
          "Recordatorios",
        ],
      },

      workflow: {
        badge: "Metodología",

        title: "¿Cómo desarrollamos tu Sistema?",

        description: "Creamos sistemas de agenda personalizados.",

        steps: [
          {
            title: "Análisis",
            description: "Estudiamos tus necesidades de programación."
          },
          {
            title: "Diseño",
            description: "Diseñamos la interfaz de calendario."
          },
          {
            title: "Desarrollo",
            description: "Implementamos el sistema con todas las funcionalidades."
          },
          {
            title: "Integración",
            description: "Conectamos con tus calendarios existentes."
          },
          {
            title: "Pruebas",
            description: "Verificamos el funcionamiento óptimo."
          },
        ],
      },

      useCases: {
        title: "¿Cuándo necesitas un Sistema de Agenda?",

        description: "Todo profesional o equipo necesita organizar su tiempo.",

        useCases: [
          {
            title: "Organización",
            description: "Mantén todas tus actividades organizadas."
          },
          {
            title: "Colaboración",
            description: "Comparte calendarios con tu equipo."
          },
          {
            title: "Recordatorios",
            description: "Nunca pierdas una reunión o evento."
          },
          {
            title: "Productividad",
            description: "Optimiza el uso de tu tiempo."
          },
          {
            title: "Integración",
            description: "Sincroniza con otros calendarios."
          },
          {
            title: "Visibilidad",
            description: "Ten una visión clara de tu disponibilidad."
          },
        ],
      },

      features: {
        title: "¿Qué incluye nuestro servicio?",

        description: "Creamos sistemas de agenda completos.",

        features: [
          {
            title: "Calendario Interactivo",
            description: "Visualiza y gestiona eventos fácilmente."
          },
          {
            title: "Eventos Recurrentes",
            description: "Programa eventos que se repiten."
          },
          {
            title: "Recordatorios",
            description: "Notificaciones por email, push o SMS."
          },
          {
            title: "Calendarios Compartidos",
            description: "Colaboración con múltiples usuarios."
          },
          {
            title: "Reserva de Recursos",
            description: "Reserva salas, equipos o espacios."
          },
          {
            title: "Integración",
            description: "Sincroniza con Google Calendar, Outlook."
          },
          {
            title: "Zonas Horarias",
            description: "Gestión de múltiples zonas horarias."
          },
          {
            title: "Privacidad",
            description: "Controla qué eventos son visibles."
          },
        ],
      },

      plansSection: {
        title: "Elige el plan ideal",

        description: "Todos nuestros planes utilizan la misma metodología de trabajo. La diferencia está en el nivel de personalización, funcionalidades e integraciones incluidas en cada uno.",
      },

      seo: {
        title: "Sistemas de Agenda | SatCore Solutions",

        description: "Desarrollo de sistemas de agenda y calendario para profesionales y equipos.",
        keywords: [
          "agenda",
          "calendario",
          "programación",
          "eventos",
          "nextjs",
        ],
      },
    },

    en: {
      title: "Scheduling & Calendar Systems",

      subtitle: "Organize your time effectively",

      description: "We develop scheduling and calendar systems that help you manage time better. From meeting scheduling to event planning, we provide complete solutions.",

      overview: {
        title: "What is a Scheduling System?",

        description: "A scheduling and calendar system is a tool that allows planning events, meetings, and activities. It includes calendar, reminders, event scheduling, and collaboration.",

        image: "/images/subservices/scheduling-and-calendar-systems/calendar.png",

        imageAlt: "Scheduling system",

        useCases: [
          "Meeting management",
          "Event scheduling",
          "Collaborative calendar",
          "Resource booking",
          "Reminders",
        ],
      },

      workflow: {
        badge: "Our Process",

        title: "How We Build Your System",

        description: "We create personalized scheduling systems.",

        steps: [
          {
            title: "Analysis",
            description: "We study your scheduling needs.",
          },
          {
            title: "Design",
            description: "We design the calendar interface.",
          },
          {
            title: "Development",
            description: "We implement the system with all functionalities.",
          },
          {
            title: "Integration",
            description: "We connect with your existing calendars.",
          },
          {
            title: "Testing",
            description: "We verify optimal functionality.",
          },
        ],
      },

      useCases: {
        title: "When Do You Need a Scheduling System?",

        description: "Every professional or team needs to organize their time.",

        useCases: [
          {
            title: "Organization",
            description: "Keep all your activities organized.",
          },
          {
            title: "Collaboration",
            description: "Share calendars with your team.",
          },
          {
            title: "Reminders",
            description: "Never miss a meeting or event.",
          },
          {
            title: "Productivity",
            description: "Optimize your time usage.",
          },
          {
            title: "Integration",
            description: "Synchronize with other calendars.",
          },
          {
            title: "Visibility",
            description: "Have a clear view of your availability.",
          },
        ],
      },

      features: {
        title: "What's Included?",

        description: "We create complete scheduling systems.",

        features: [
          {
            title: "Interactive Calendar",
            description: "View and manage events easily.",
          },
          {
            title: "Recurring Events",
            description: "Schedule events that repeat.",
          },
          {
            title: "Reminders",
            description: "Notifications by email, push, or SMS.",
          },
          {
            title: "Shared Calendars",
            description: "Collaboration with multiple users.",
          },
          {
            title: "Resource Booking",
            description: "Book rooms, equipment, or spaces.",
          },
          {
            title: "Integration",
            description: "Sync with Google Calendar, Outlook.",
          },
          {
            title: "Time Zones",
            description: "Manage multiple time zones.",
          },
          {
            title: "Privacy",
            description: "Control which events are visible.",
          },
        ],
      },

      plansSection: {
        title: "Choose the Right Plan",

        description: "All of our plans follow the same proven development process. The difference lies in the level of customization, features, and integrations included in each option.",
      },

      seo: {
        title: "Scheduling Systems | SatCore Solutions",

        description: "Development of scheduling and calendar systems for professionals and teams.",
        keywords: [
          "scheduling",
          "calendar",
          "events",
          "time management",
          "nextjs",
        ],
      },
    },

    pt: {
      title: "Sistemas de Agenda e Calendário",

      subtitle: "Organize seu tempo efetivamente",

      description: "Desenvolvemos sistemas de agenda e calendário que ajudam você a gerenciar melhor o tempo. De agendamento de reuniões a planejamento de eventos, fornecemos soluções completas.",

      overview: {
        title: "O que é um Sistema de Agenda?",

        description: "Um sistema de agenda e calendário é uma ferramenta que permite planejar eventos, reuniões e atividades. Inclui calendário, lembretes, agendamento de eventos e colaboração.",

        image: "/images/subservices/scheduling-and-calendar-systems/calendar.png",

        imageAlt: "Sistema de agenda",

        useCases: [
          "Gestão de reuniões",
          "Agendamento de eventos",
          "Calendário colaborativo",
          "Reserva de recursos",
          "Lembretes",
        ],
      },

      workflow: {
        badge: "Nosso Processo",

        title: "Como Desenvolvemos seu Sistema",

        description: "Criamos sistemas de agenda personalizados.",

        steps: [
          {
            title: "Análise",
            description: "Estudamos suas necessidades de agendamento.",
          },
          {
            title: "Design",
            description: "Criamos a interface do calendário.",
          },
          {
            title: "Desenvolvimento",
            description: "Implementamos o sistema com todas as funcionalidades.",
          },
          {
            title: "Integração",
            description: "Conectamos com seus calendários existentes.",
          },
          {
            title: "Testes",
            description: "Verificamos o funcionamento ótimo.",
          },
        ],
      },

      useCases: {
        title: "Quando Você Precisa de um Sistema de Agenda?",

        description: "Todo profissional ou equipe precisa organizar seu tempo.",

        useCases: [
          {
            title: "Organização",
            description: "Mantenha todas as suas atividades organizadas.",
          },
          {
            title: "Colaboração",
            description: "Compartilhe calendários com sua equipe.",
          },
          {
            title: "Lembretes",
            description: "Nunca perca uma reunião ou evento.",
          },
          {
            title: "Produtividade",
            description: "Otimize o uso do seu tempo.",
          },
          {
            title: "Integração",
            description: "Sincronize com outros calendários.",
          },
          {
            title: "Visibilidade",
            description: "Tenha uma visão clara da sua disponibilidade.",
          },
        ],
      },

      features: {
        title: "O Que Está Incluído?",

        description: "Criamos sistemas de agenda completos.",

        features: [
          {
            title: "Calendário Interativo",
            description: "Visualize e gerencie eventos facilmente.",
          },
          {
            title: "Eventos Recorrentes",
            description: "Programe eventos que se repetem.",
          },
          {
            title: "Lembretes",
            description: "Notificações por email, push ou SMS.",
          },
          {
            title: "Calendários Compartilhados",
            description: "Colaboração com múltiplos usuários.",
          },
          {
            title: "Reserva de Recursos",
            description: "Reserve salas, equipamentos ou espaços.",
          },
          {
            title: "Integração",
            description: "Sincronize com Google Calendar, Outlook.",
          },
          {
            title: "Fusos Horários",
            description: "Gestão de múltiplos fusos horários.",
          },
          {
            title: "Privacidade",
            description: "Controle quais eventos são visíveis.",
          },
        ],
      },

      plansSection: {
        title: "Escolha o Plano Ideal",

        description: "Todos os nossos planos seguem a mesma metodologia de desenvolvimento. A diferença está no nível de personalização, funcionalidades e integrações incluídas em cada opção.",
      },

      seo: {
        title: "Sistemas de Agenda | SatCore Solutions",

        description: "Desenvolvimento de sistemas de agenda e calendário para profissionais e equipes.",
        keywords: [
          "agenda",
          "calendário",
          "agendamento",
          "eventos",
          "nextjs",
        ],
      },
    },
  },
  plans: []
};