import type {
  ServiceDetail,
} from "@/types/service-detail.types";

import {
  softwarePlans,
} from "@/data/plans/software/landing-pages";

export const bookingAndAppointmentsDetail: ServiceDetail = {
  core: {
    id: "SRV-BKA",

    slug: "booking-and-appointments",

    name: "Booking & Appointments",

    pillar: "software",

    icon: "calendar-check",

    heroImage: "/images/services/software/hero/hero.png",

    plans: [],
  },

  translations: {
    es: {
      title: "Reservas y Citas",

      subtitle: "Gestiona tus reservas de forma eficiente",

      description: "Desarrollamos sistemas de reservas y citas que permiten a tus clientes agendar servicios, citas o alquileres de forma online. Todo el proceso desde la reserva hasta el recordatorio automatizado.",

      overview: {
        title: "¿Qué es un Sistema de Reservas?",

        description: "Un sistema de reservas y citas es una plataforma que permite a clientes reservar servicios, citas o recursos a través de internet. Incluye disponibilidad en tiempo real, confirmaciones y gestión completa.",

        image: "/images/subservices/software/booking-citas.png",

        imageAlt: "Sistema de reservas",

        useCases: [
          "Citas médicas",
          "Servicios profesionales",
          "Alquiler de equipos",
          "Reservas de espacios",
          "Clases y talleres",
        ],
      },

      workflow: {
        badge: "Metodología",

        title: "¿Cómo desarrollamos tu Sistema?",

        description: "Creamos sistemas de reservas eficientes y automatizados.",

        steps: [
          {
            title: "Análisis",
            description: "Estudiamos tu proceso de reserva actual."
          },
          {
            title: "Diseño",
            description: "Diseñamos el flujo de reserva óptimo."
          },
          {
            title: "Desarrollo",
            description: "Implementamos el sistema completo."
          },
          {
            title: "Integración",
            description: "Conectamos con tus sistemas existentes."
          },
          {
            title: "Pruebas",
            description: "Verificamos el funcionamiento."
          },
        ],
      },

      useCases: {
        title: "¿Cuándo necesitas este sistema?",

        description: "Todo negocio que ofrezca servicios programados.",

        useCases: [
          {
            title: "Disponibilidad Online",
            description: "Clientes reservan 24/7."
          },
          {
            title: "Reducción de Trabajo",
            description: "Menos llamadas y emails para gestionar citas."
          },
          {
            title: "Optimización",
            description: " maximiza la ocupación de tu tiempo."
          },
          {
            title: "Recordatorios",
            description: "Reduce no-shows con recordatorios."
          },
          {
            title: "Pagos",
            description: "Recibe pagos al momento de reservar."
          },
          {
            title: "Datos",
            description: "Analiza patrones de reserva."
          },
        ],
      },

      features: {
        title: "¿Qué incluye nuestro servicio?",

        description: "Creamos sistemas de reservas completos.",

        features: [
          {
            title: "Calendario",
            description: "Gestión de disponibilidad en tiempo real."
          },
          {
            title: "Reserva Online",
            description: "Proceso de reserva optimizado."
          },
          {
            title: "Confirmaciones",
            description: "Emails y SMS de confirmación."
          },
          {
            title: "Recordatorios",
            description: "Notificaciones automáticas."
          },
          {
            title: "Pagos",
            description: "Integración con pasarelas de pago."
          },
          {
            title: "Cancelaciones",
            description: "Política configurable."
          },
          {
            title: "Reportes",
            description: "Estadísticas de reservas."
          },
          {
            title: "Staff",
            description: "Gestión de empleados y servicios."
          },
        ],
      },

      plansSection: {
        title: "Elige el plan ideal",

        description: "Todos nuestros planes utilizan la misma metodología de trabajo. La diferencia está en el nivel de personalización, funcionalidades e integraciones incluidas en cada uno.",
      },

      seo: {
        title: "Reservas y Citas | SatCore Solutions",

        description: "Desarrollo de sistemas de reservas y citas online.",
        keywords: [
          "reservas",
          "citas",
          "agenda",
          "booking",
          "nextjs",
        ],
      },
    },

    en: {
      title: "Booking & Appointments",

      subtitle: "Manage your bookings efficiently",

      description: "We develop booking and appointment systems that allow your customers to schedule services, appointments, or rentals online. The entire process from booking to automated reminder.",

      overview: {
        title: "What is a Booking System?",

        description: "A booking and appointment system is a platform that allows customers to book services, appointments, or resources through the internet. It includes real-time availability, confirmations, and complete management.",

        image: "/images/subservices/booking-and-appointments/booking.png",

        imageAlt: "Booking system",

        useCases: [
          "Medical appointments",
          "Professional services",
          "Equipment rentals",
          "Space rentals",
          "Classes and workshops",
        ],
      },

      workflow: {
        badge: "Our Process",

        title: "How We Build Your System",

        description: "We create efficient, automated booking systems.",

        steps: [
          {
            title: "Analysis",
            description: "We study your current booking process.",
          },
          {
            title: "Design",
            description: "We design the optimal booking flow.",
          },
          {
            title: "Development",
            description: "We implement the complete system.",
          },
          {
            title: "Integration",
            description: "We connect with your existing systems.",
          },
          {
            title: "Testing",
            description: "We verify functionality.",
          },
        ],
      },

      useCases: {
        title: "When Do You Need This System?",

        description: "Any business offering scheduled services.",

        useCases: [
          {
            title: "Online Availability",
            description: "Customers book 24/7.",
          },
          {
            title: "Reduced Work",
            description: "Fewer calls and emails to manage appointments.",
          },
          {
            title: "Optimization",
            description: "Maximize your time occupancy.",
          },
          {
            title: "Reminders",
            description: "Reduce no-shows with reminders.",
          },
          {
            title: "Payments",
            description: "Receive payments at time of booking.",
          },
          {
            title: "Data",
            description: "Analyze booking patterns.",
          },
        ],
      },

      features: {
        title: "What's Included?",

        description: "We create complete booking systems.",

        features: [
          {
            title: "Calendar",
            description: "Real-time availability management.",
          },
          {
            title: "Online Booking",
            description: "Optimized booking process.",
          },
          {
            title: "Confirmations",
            description: "Email and SMS confirmations.",
          },
          {
            title: "Reminders",
            description: "Automatic notifications.",
          },
          {
            title: "Payments",
            description: "Payment gateway integration.",
          },
          {
            title: "Cancellations",
            description: "Configurable policy.",
          },
          {
            title: "Reports",
            description: "Booking statistics.",
          },
          {
            title: "Staff",
            description: "Employee and service management.",
          },
        ],
      },

      plansSection: {
        title: "Choose the Right Plan",

        description: "All of our plans follow the same proven development process. The difference lies in the level of customization, features, and integrations included in each option.",
      },

      seo: {
        title: "Booking & Appointments | SatCore Solutions",

        description: "Development of online booking and appointment systems.",
        keywords: [
          "booking",
          "appointments",
          "schedule",
          "reservation",
          "nextjs",
        ],
      },
    },

    pt: {
      title: "Reservas e Agendamentos",

      subtitle: "Gerencie suas reservas de forma eficiente",

      description: "Desenvolvemos sistemas de reservas e agendamentos que permitem seus clientes agendar serviços, horários ou locações online. Todo o processo desde a reserva até o lembrete automatizado.",

      overview: {
        title: "O que é um Sistema de Reservas?",

        description: "Um sistema de reservas e agendamentos é uma plataforma que permite clientes reservar serviços, horários ou recursos pela internet. Inclui disponibilidade em tempo real, confirmações e gestão completa.",

        image: "/images/subservices/booking-and-appointments/booking.png",

        imageAlt: "Sistema de reservas",

        useCases: [
          "Consultas médicas",
          "Serviços profissionais",
          "Aluguel de equipamentos",
          "Reserva de espaços",
          "Aulas e workshops",
        ],
      },

      workflow: {
        badge: "Nosso Processo",

        title: "Como Desenvolvemos seu Sistema",

        description: "Criamos sistemas de reservas eficientes e automatizados.",

        steps: [
          {
            title: "Análise",
            description: "Estudamos seu processo de reserva atual.",
          },
          {
            title: "Design",
            description: "Criamos o fluxo de reserva ideal.",
          },
          {
            title: "Desenvolvimento",
            description: "Implementamos o sistema completo.",
          },
          {
            title: "Integração",
            description: "Conectamos com seus sistemas existentes.",
          },
          {
            title: "Testes",
            description: "Verificamos o funcionamento.",
          },
        ],
      },

      useCases: {
        title: "Quando Você Precisa deste Sistema?",

        description: "Todo negócio que oferece serviços programados.",

        useCases: [
          {
            title: "Disponibilidade Online",
            description: "Clientes reservam 24/7.",
          },
          {
            title: "Redução de Trabalho",
            description: "Menos chamadas e emails para gerenciar horários.",
          },
          {
            title: "Otimização",
            description: "Maximize a ocupação do seu tempo.",
          },
          {
            title: "Lembretes",
            description: "Reduza no-shows com lembretes.",
          },
          {
            title: "Pagamentos",
            description: "Receba pagamentos no momento da reserva.",
          },
          {
            title: "Dados",
            description: "Analise padrões de reserva.",
          },
        ],
      },

      features: {
        title: "O Que Está Incluído?",

        description: "Criamos sistemas de reservas completos.",

        features: [
          {
            title: "Calendário",
            description: "Gestão de disponibilidade em tempo real.",
          },
          {
            title: "Reserva Online",
            description: "Processo de reserva otimizado.",
          },
          {
            title: "Confirmações",
            description: "Emails e SMS de confirmação.",
          },
          {
            title: "Lembretes",
            description: "Notificações automáticas.",
          },
          {
            title: "Pagamentos",
            description: "Integração com gateways de pagamento.",
          },
          {
            title: "Cancelamentos",
            description: "Política configurável.",
          },
          {
            title: "Relatórios",
            description: "Estatísticas de reservas.",
          },
          {
            title: "Staff",
            description: "Gestão de funcionários e serviços.",
          },
        ],
      },

      plansSection: {
        title: "Escolha o Plano Ideal",

        description: "Todos os nossos planos seguem a mesma metodologia de desenvolvimento. A diferença está no nível de personalização, funcionalidades e integrações incluídas em cada opção.",
      },

      seo: {
        title: "Reservas e Agendamentos | SatCore Solutions",

        description: "Desenvolvimento de sistemas de reservas e agendamentos online.",
        keywords: [
          "reservas",
          "agendamentos",
          "agenda",
          "booking",
          "nextjs",
        ],
      },
    },
  },
  plans: []
};