import type {
  ServiceDetail,
} from "@/types/service-detail.types";

import {
  softwarePlans,
} from "@/data/plans/software/landing-pages";

export const communicationSystemsDetail: ServiceDetail = {
  core: {
    id: "SRV-CS",

    slug: "communication-systems",

    name: "Communication Systems",

    pillar: "software",

    icon: "message-circle",

    heroImage: "/images/services/software/hero/hero.png",

    plans: [],
  },

  translations: {
    es: {
      title: "Sistemas de Comunicación",

      subtitle: "Conecta con tu equipo y clientes",

      description: "Desarrollamos sistemas de comunicación personalizados que facilitan la interacción entre tu equipo y tus clientes. Desde chatbots hasta centros de mensajes, creamos soluciones que mejoran la experiencia de comunicación.",

      overview: {
        title: "¿Qué es un Sistema de Comunicación?",

        description: "Un sistema de comunicación es una plataforma que permite el intercambio de información entre usuarios. Puede incluir mensajería instantánea, chats de soporte, sistemas de notificaciones y más.",

        image: "/images/subservices/software/sistema-comunicacion.png",

        imageAlt: "Sistema de comunicación",

        useCases: [
          "Soporte al cliente",
          "Comunicación interna",
          "Notificaciones",
          "Chat en vivo",
          "Mensajería empresarial",
        ],
      },

      workflow: {
        badge: "Metodología",

        title: "¿Cómo desarrollamos tu Sistema?",

        description: "Creamos sistemas de comunicación adaptados a tus necesidades específicas.",

        steps: [
          {
            title: "Análisis",
            description: "Estudiamos tus necesidades de comunicación."
          },
          {
            title: "Diseño",
            description: "Diseñamos la arquitectura del sistema."
          },
          {
            title: "Desarrollo",
            description: "Implementamos las funcionalidades requeridas."
          },
          {
            title: "Integración",
            description: "Conectamos con tus sistemas existentes."
          },
          {
            title: "Pruebas",
            description: "Verificamos el funcionamiento óptimo."
          },
        ],
      },

      useCases: {
        title: "¿Cuándo necesitas un Sistema de Comunicación?",

        description: "Todo negocio necesita sistemas eficientes de comunicación.",

        useCases: [
          {
            title: "Soporte 24/7",
            description: "Atención a clientes en cualquier momento."
          },
          {
            title: "Colaboración",
            description: "Mejora la comunicación de tu equipo."
          },
          {
            title: "Notificaciones",
            description: "Mantén informados a tus usuarios."
          },
          {
            title: "Automatización",
            description: "Responde automáticamente consultas comunes."
          },
          {
            title: "Historial",
            description: "Guarda registro de todas las conversaciones."
          },
          {
            title: "Escalabilidad",
            description: "Maneja múltiples conversaciones simultáneas."
          },
        ],
      },

      features: {
        title: "¿Qué incluye nuestro servicio?",

        description: "Creamos sistemas de comunicación completos con todas las funcionalidades necesarias.",

        features: [
          {
            title: "Chat en Vivo",
            description: "Comunicación en tiempo real con tus clientes."
          },
          {
            title: "Mensajería",
            description: "Sistema de mensajería integrado."
          },
          {
            title: "Notificaciones",
            description: "Alertas y notificaciones push."
          },
          {
            title: "Multicanal",
            description: "Web, WhatsApp, Email, SMS integrados."
          },
          {
            title: "Chatbots",
            description: "Asistentes automáticos para respuestas rápidas."
          },
          {
            title: "Historial",
            description: "Registro completo de conversaciones."
          },
          {
            title: "Reportes",
            description: "Estadísticas de comunicación."
          },
          {
            title: "Integración CRM",
            description: "Conexión con tu sistema de gestión."
          },
        ],
      },

      plansSection: {
        title: "Elige el plan ideal",

        description: "Todos nuestros planes utilizan la misma metodología de trabajo. La diferencia está en el nivel de personalización, funcionalidades e integraciones incluidas en cada uno.",
      },

      seo: {
        title: "Sistemas de Comunicación | SatCore Solutions",

        description: "Desarrollo de sistemas de comunicación personalizados para empresas.",
        keywords: [
          "sistemas de comunicación",
          "chat",
          "mensajería",
          "soporte al cliente",
          "nextjs",
        ],
      },
    },

    en: {
      title: "Communication Systems",

      subtitle: "Connect with your team and customers",

      description: "We develop personalized communication systems that facilitate interaction between your team and your customers. From chatbots to message centers, we create solutions that improve the communication experience.",

      overview: {
        title: "What is a Communication System?",

        description: "A communication system is a platform that allows information exchange between users. It can include instant messaging, support chats, notification systems, and more.",

        image: "/images/subservices/communication-systems/communication.png",

        imageAlt: "Communication system",

        useCases: [
          "Customer support",
          "Internal communication",
          "Notifications",
          "Live chat",
          "Enterprise messaging",
        ],
      },

      workflow: {
        badge: "Our Process",

        title: "How We Build Your System",

        description: "We create communication systems tailored to your specific needs.",

        steps: [
          {
            title: "Analysis",
            description: "We study your communication needs.",
          },
          {
            title: "Design",
            description: "We design the system architecture.",
          },
          {
            title: "Development",
            description: "We implement the required functionalities.",
          },
          {
            title: "Integration",
            description: "We connect with your existing systems.",
          },
          {
            title: "Testing",
            description: "We verify optimal functionality.",
          },
        ],
      },

      useCases: {
        title: "When Do You Need a Communication System?",

        description: "Every business needs efficient communication systems.",

        useCases: [
          {
            title: "24/7 Support",
            description: "Customer support at any time.",
          },
          {
            title: "Collaboration",
            description: "Improve your team's communication.",
          },
          {
            title: "Notifications",
            description: "Keep your users informed.",
          },
          {
            title: "Automation",
            description: "Automatically respond to common queries.",
          },
          {
            title: "History",
            description: "Keep a record of all conversations.",
          },
          {
            title: "Scalability",
            description: "Handle multiple simultaneous conversations.",
          },
        ],
      },

      features: {
        title: "What's Included?",

        description: "We create complete communication systems with all necessary functionalities.",

        features: [
          {
            title: "Live Chat",
            description: "Real-time communication with your customers.",
          },
          {
            title: "Messaging",
            description: "Integrated messaging system.",
          },
          {
            title: "Notifications",
            description: "Push alerts and notifications.",
          },
          {
            title: "Multichannel",
            description: "Web, WhatsApp, Email, SMS integrated.",
          },
          {
            title: "Chatbots",
            description: "Automatic assistants for quick responses.",
          },
          {
            title: "History",
            description: "Complete conversation logs.",
          },
          {
            title: "Reports",
            description: "Communication statistics.",
          },
          {
            title: "CRM Integration",
            description: "Connection with your management system.",
          },
        ],
      },

      plansSection: {
        title: "Choose the Right Plan",

        description: "All of our plans follow the same proven development process. The difference lies in the level of customization, features, and integrations included in each option.",
      },

      seo: {
        title: "Communication Systems | SatCore Solutions",

        description: "Development of personalized communication systems for businesses.",
        keywords: [
          "communication systems",
          "chat",
          "messaging",
          "customer support",
          "nextjs",
        ],
      },
    },

    pt: {
      title: "Sistemas de Comunicação",

      subtitle: "Conecte-se com sua equipe e clientes",

      description: "Desenvolvemos sistemas de comunicação personalizados que facilitam a interação entre sua equipe e seus clientes. De chatbots a центры de mensagens, criamos soluções que melhoram a experiência de comunicação.",

      overview: {
        title: "O que é um Sistema de Comunicação?",

        description: "Um sistema de comunicação é uma plataforma que permite a troca de informações entre usuários. Pode incluir mensagens instantâneas, chats de suporte, sistemas de notificações e mais.",

        image: "/images/subservices/communication-systems/communication.png",

        imageAlt: "Sistema de comunicação",

        useCases: [
          "Suporte ao cliente",
          "Comunicação interna",
          "Notificações",
          "Chat ao vivo",
          "Mensagens empresariais",
        ],
      },

      workflow: {
        badge: "Nosso Processo",

        title: "Como Desenvolvemos seu Sistema",

        description: "Criamos sistemas de comunicação adaptados às suas necessidades específicas.",

        steps: [
          {
            title: "Análise",
            description: "Estudamos suas necessidades de comunicação.",
          },
          {
            title: "Design",
            description: "Definimos a arquitetura do sistema.",
          },
          {
            title: "Desenvolvimento",
            description: "Implementamos as funcionalidades requeridas.",
          },
          {
            title: "Integração",
            description: "Conectamos com seus sistemas existentes.",
          },
          {
            title: "Testes",
            description: "Verificamos o funcionamento ótimo.",
          },
        ],
      },

      useCases: {
        title: "Quando Você Precisa de um Sistema de Comunicação?",

        description: "Todo negócio precisa de sistemas eficientes de comunicação.",

        useCases: [
          {
            title: "Suporte 24/7",
            description: "Atendimento a clientes a qualquer momento.",
          },
          {
            title: "Colaboração",
            description: "Melhore a comunicação da sua equipe.",
          },
          {
            title: "Notificações",
            description: "Mantenha seus usuários informados.",
          },
          {
            title: "Automatização",
            description: "Responda automaticamente consultas comuns.",
          },
          {
            title: "Histórico",
            description: "Mantenha registro de todas as conversas.",
          },
          {
            title: "Escalabilidade",
            description: "Manipule múltiplas conversas simultâneas.",
          },
        ],
      },

      features: {
        title: "O Que Está Incluído?",

        description: "Criamos sistemas de comunicação completos com todas as funcionalidades necessárias.",

        features: [
          {
            title: "Chat ao Vivo",
            description: "Comunicação em tempo real com seus clientes.",
          },
          {
            title: "Mensagens",
            description: "Sistema de mensagens integrado.",
          },
          {
            title: "Notificações",
            description: "Alertas e notificações push.",
          },
          {
            title: "Multicanal",
            description: "Web, WhatsApp, Email, SMS integrados.",
          },
          {
            title: "Chatbots",
            description: "Assistentes automáticos para respostas rápidas.",
          },
          {
            title: "Histórico",
            description: "Registro completo de conversas.",
          },
          {
            title: "Relatórios",
            description: "Estatísticas de comunicação.",
          },
          {
            title: "Integração CRM",
            description: "Conexão com seu sistema de gestão.",
          },
        ],
      },

      plansSection: {
        title: "Escolha o Plano Ideal",

        description: "Todos os nossos planos seguem a mesma metodologia de desenvolvimento. A diferença está no nível de personalização, funcionalidades e integrações incluídas em cada opção.",
      },

      seo: {
        title: "Sistemas de Comunicação | SatCore Solutions",

        description: "Desenvolvimento de sistemas de comunicação personalizados para empresas.",
        keywords: [
          "sistemas de comunicação",
          "chat",
          "mensagens",
          "suporte ao cliente",
          "nextjs",
        ],
      },
    },
  },
  plans: []
};