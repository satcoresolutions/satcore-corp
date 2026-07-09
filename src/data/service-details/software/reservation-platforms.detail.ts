import type {
  ServiceDetail,
} from "@/types/service-detail.types";

import {
  softwarePlans,
} from "@/data/plans/software/landing-pages";

export const reservationPlatformsDetail: ServiceDetail = {
  core: {
    id: "SRV-RP",

    slug: "reservation-platforms",

    name: "Reservation Platforms",

    pillar: "software",

    icon: "calendar",

    heroImage: "/images/services/software/reservation-platforms/hero/hero.png",

    plans: [],
  },

  translations: {
    es: {
      title: "Plataformas de Reservas",

      subtitle: "Gestiona reservas y citas online",

      description: "Creamos plataformas de reservas que permiten a tus clientes reservar citas, servicios o recursos de forma online. Desde salones hasta profesionales independientes, proporcionamos soluciones completas.",

      overview: {
        title: "¿Qué es una Plataforma de Reservas?",

        description: "Una plataforma de reservas es un sistema que permite a clientes reservar citas, horarios o servicios a través de internet. Incluye calendario de disponibilidad, confirmación automática y recordatorios.",

        image: "/images/subservices/reservation-platforms/reservation.png",

        imageAlt: "Plataforma de reservas",

        useCases: [
          "Reservas de citas médicas",
          "Reservas de servicios",
          "Alquiler de espacios",
          "Reservas de eventos",
          "Reservas de restaurantes",
        ],
      },

      workflow: {
        badge: "Metodología",

        title: "¿Cómo desarrollamos tu Plataforma?",

        description: "Creamos plataformas de reservas eficientes y fáciles de usar.",

        steps: [
          {
            title: "Análisis",
            description: "Estudiamos el proceso de reserva y tus necesidades."
          },
          {
            title: "Diseño",
            description: "Diseñamos el flujo de reserva óptimo."
          },
          {
            title: "Desarrollo",
            description: "Implementamos el sistema con calendario y pagos."
          },
          {
            title: "Integración",
            description: "Conectamos con tu calendario y sistemas."
          },
          {
            title: "Lanzamiento",
            description: "Publicamos y configuramos notificaciones."
          },
        ],
      },

      useCases: {
        title: "¿Cuándo necesitas una Plataforma de Reservas?",

        description: "Todo negocio que ofrezca citas o servicios necesita un sistema de reservas.",

        useCases: [
          {
            title: "Disponibilidad 24/7",
            description: "Clientes reservan en cualquier momento."
          },
          {
            title: "Reducción de Llamadas",
            description: "Menos llamadas para confirmar citas."
          },
          {
            title: "Optimización",
            description: " maximiza el uso de tu tiempo disponible."
          },
          {
            title: "Recordatorios",
            description: "Reduce no-shows con recordatorios automáticos."
          },
          {
            title: "Pagos",
            description: "Recibe pagos por adelantado."
          },
          {
            title: "Datos",
            description: "Recolecta información valiosa de clientes."
          },
        ],
      },

      features: {
        title: "¿Qué incluye nuestro servicio?",

        description: "Creamos plataformas de reservas completas con todas las herramientas.",

        features: [
          {
            title: "Calendario",
            description: "Gestión de disponibilidad en tiempo real."
          },
          {
            title: "Reservas Online",
            description: "Proceso de reserva simple y rápido."
          },
          {
            title: "Confirmación",
            description: "Confirmaciones y recordatorios automáticos."
          },
          {
            title: "Pagos",
            description: "Integración con pasarelas de pago."
          },
          {
            title: "Múltiples Recursos",
            description: "Gestiona varios servicios o profesionales."
          },
          {
            title: "Cancelaciones",
            description: "Política de cancelaciones configurable."
          },
          {
            title: "Reportes",
            description: "Estadísticas de reservas y revenue."
          },
          {
            title: "Integración",
            description: "Conecta con Google Calendar, etc."
          },
        ],
      },

      plansSection: {
        title: "Elige el plan ideal",

        description: "Todos nuestros planes utilizan la misma metodología de trabajo. La diferencia está en el nivel de personalización, funcionalidades e integraciones incluidas en cada uno.",
      },

      seo: {
        title: "Plataformas de Reservas | SatCore Solutions",

        description: "Desarrollo de plataformas de reservas online para negocios.",
        keywords: [
          "reservas",
          "citas",
          "reservas online",
          "agenda",
          "nextjs",
        ],
      },
    },

    en: {
      title: "Reservation Platforms",

      subtitle: "Manage bookings and appointments online",

      description: "We create reservation platforms that allow your customers to book appointments, services, or resources online. From salons to independent professionals, we provide complete solutions.",

      overview: {
        title: "What is a Reservation Platform?",

        description: "A reservation platform is a system that allows customers to book appointments, schedules, or services through the internet. It includes availability calendar, automatic confirmation, and reminders.",

        image: "/images/subservices/reservation-platforms/reservation.png",

        imageAlt: "Reservation platform",

        useCases: [
          "Medical appointment bookings",
          "Service bookings",
          "Space rentals",
          "Event bookings",
          "Restaurant reservations",
        ],
      },

      workflow: {
        badge: "Our Process",

        title: "How We Build Your Platform",

        description: "We create efficient, easy-to-use reservation platforms.",

        steps: [
          {
            title: "Analysis",
            description: "We study the booking process and your needs.",
          },
          {
            title: "Design",
            description: "We design the optimal booking flow.",
          },
          {
            title: "Development",
            description: "We implement the system with calendar and payments.",
          },
          {
            title: "Integration",
            description: "We connect with your calendar and systems.",
          },
          {
            title: "Launch",
            description: "We publish and configure notifications.",
          },
        ],
      },

      useCases: {
        title: "When Do You Need a Reservation Platform?",

        description: "Any business offering appointments or services needs a reservation system.",

        useCases: [
          {
            title: "24/7 Availability",
            description: "Customers book at any time.",
          },
          {
            title: "Reduced Calls",
            description: "Fewer calls to confirm appointments.",
          },
          {
            title: "Optimization",
            description: "Maximize your available time usage.",
          },
          {
            title: "Reminders",
            description: "Reduce no-shows with automatic reminders.",
          },
          {
            title: "Payments",
            description: "Receive payments in advance.",
          },
          {
            title: "Data",
            description: "Collect valuable customer information.",
          },
        ],
      },

      features: {
        title: "What's Included?",

        description: "We create complete reservation platforms with all the tools.",

        features: [
          {
            title: "Calendar",
            description: "Real-time availability management.",
          },
          {
            title: "Online Booking",
            description: "Simple, fast booking process.",
          },
          {
            title: "Confirmation",
            description: "Automatic confirmations and reminders.",
          },
          {
            title: "Payments",
            description: "Payment gateway integration.",
          },
          {
            title: "Multiple Resources",
            description: "Manage various services or professionals.",
          },
          {
            title: "Cancellations",
            description: "Configurable cancellation policy.",
          },
          {
            title: "Reports",
            description: "Booking and revenue statistics.",
          },
          {
            title: "Integration",
            description: "Connect with Google Calendar, etc.",
          },
        ],
      },

      plansSection: {
        title: "Choose the Right Plan",

        description: "All of our plans follow the same proven development process. The difference lies in the level of customization, features, and integrations included in each option.",
      },

      seo: {
        title: "Reservation Platforms | SatCore Solutions",

        description: "Development of online reservation platforms for businesses.",
        keywords: [
          "reservations",
          "appointments",
          "online booking",
          "schedule",
          "nextjs",
        ],
      },
    },

    pt: {
      title: "Plataformas de Reservas",

      subtitle: "Gerencie reservas e agendamentos online",

      description: "Criamos plataformas de reservas que permitem seus clientes reservar horários, serviços ou recursos online. De salões a profissionais independentes, fornecemos soluções completas.",

      overview: {
        title: "O que é uma Plataforma de Reservas?",

        description: "Uma plataforma de reservas é um sistema que permite clientes reservar horários, agendas ou serviços pela internet. Inclui calendário de disponibilidade, confirmação automática e lembretes.",

        image: "/images/subservices/reservation-platforms/reservation.png",

        imageAlt: "Plataforma de reservas",

        useCases: [
          "Reservas de consultas médicas",
          "Reservas de serviços",
          "Aluguel de espaços",
          "Reservas de eventos",
          "Reservas de restaurantes",
        ],
      },

      workflow: {
        badge: "Nosso Processo",

        title: "Como Desenvolvemos sua Plataforma",

        description: "Criamos plataformas de reservas eficientes e fáceis de usar.",

        steps: [
          {
            title: "Análise",
            description: "Estudamos o processo de reserva e suas necessidades.",
          },
          {
            title: "Design",
            description: "Criamos o fluxo de reserva ideal.",
          },
          {
            title: "Desenvolvimento",
            description: "Implementamos o sistema com calendário e pagamentos.",
          },
          {
            title: "Integração",
            description: "Conectamos com seu calendário e sistemas.",
          },
          {
            title: "Lançamento",
            description: "Publicamos e configuramos notificações.",
          },
        ],
      },

      useCases: {
        title: "Quando Você Precisa de uma Plataforma de Reservas?",

        description: "Todo negócio que oferece horários ou serviços precisa de um sistema de reservas.",

        useCases: [
          {
            title: "Disponibilidade 24/7",
            description: "Clientes reservam a qualquer momento.",
          },
          {
            title: "Redução de Chamadas",
            description: "Menos chamadas para confirmar horários.",
          },
          {
            title: "Otimização",
            description: "Maximize o uso do seu tempo disponível.",
          },
          {
            title: "Lembretes",
            description: "Reduza no-shows com lembretes automáticos.",
          },
          {
            title: "Pagamentos",
            description: "Receba pagamentos antecipados.",
          },
          {
            title: "Dados",
            description: "Reúna informações valiosas de clientes.",
          },
        ],
      },

      features: {
        title: "O Que Está Incluído?",

        description: "Criamos plataformas de reservas completas com todas as ferramentas.",

        features: [
          {
            title: "Calendário",
            description: "Gestão de disponibilidade em tempo real.",
          },
          {
            title: "Reservas Online",
            description: "Processo de reserva simples e rápido.",
          },
          {
            title: "Confirmação",
            description: "Confirmações e lembretes automáticos.",
          },
          {
            title: "Pagamentos",
            description: "Integração com gateways de pagamento.",
          },
          {
            title: "Múltiplos Recursos",
            description: "Gerencie vários serviços ou profissionais.",
          },
          {
            title: "Cancelamentos",
            description: "Política de cancelamentos configurável.",
          },
          {
            title: "Relatórios",
            description: "Estatísticas de reservas e receita.",
          },
          {
            title: "Integração",
            description: "Conecte com Google Calendar, etc.",
          },
        ],
      },

      plansSection: {
        title: "Escolha o Plano Ideal",

        description: "Todos os nossos planos seguem a mesma metodologia de desenvolvimento. A diferença está no nível de personalização, funcionalidades e integrações incluídas en cada opción.",
      },

      seo: {
        title: "Plataformas de Reservas | SatCore Solutions",

        description: "Desenvolvimento de plataformas de reservas online para negócios.",
        keywords: [
          "reservas",
          "agendamentos",
          "reservas online",
          "agenda",
          "nextjs",
        ],
      },
    },
  },
  plans: []
};