import type {
  ServiceDetail,
} from "@/types/service-detail.types";

import {
  softwarePlans,
} from "@/data/plans/software/landing-pages";

export const aiAssistantSolutionsDetail: ServiceDetail = {
  core: {
    id: "SRV-AI",

    slug: "ai-assistant-solutions",

    name: "AI Assistant Solutions",

    pillar: "software",

    icon: "bot",

    heroImage: "/images/services/software/ai-assistant-solutions/hero/hero.png",

    plans: [],
  },

  translations: {
    es: {
      title: "Asistentes de IA",

      subtitle: "Automatización inteligente con chatbots personalizados",

      description: "Implementamos asistentes de inteligencia artificial personalizados que automatizan la atención al cliente, responden preguntas frecuentes y mejoran la experiencia del usuario. Cada solución se adapta a las necesidades específicas de tu negocio para maximizar la eficiencia.",

      overview: {
        title: "¿Qué es un Asistente de IA?",

        description: "Un asistente de IA es un programa inteligente que utiliza inteligencia artificial para conversar con usuarios, responder preguntas y realizar tareas de forma automatizada. Pueden integrarse en tu sitio web, app o plataformas de mensajería para proporcionar soporte 24/7.",

        image: "/images/subservices/ai-assistant-solutions/ai-assistant.png",

        imageAlt: "Asistente de IA profesional",

        useCases: [
          "Soporte al cliente automatizado",
          "Asistencia en ventas",
          "Resolución de dudas frecuentes",
          "Gestión de reservas y citas",
          "Interacción en tiempo real",
        ],
      },

      workflow: {
        badge: "Metodología",

        title: "¿Cómo desarrollamos tu Asistente de IA?",

        description: "Creamos asistentes de IA personalizados que entienden el contexto de tu negocio.",

        steps: [
          {
            title: "Análisis de Necesidades",
            description: "Estudiamos tu negocio, clientes y casos de uso para diseñar el asistente ideal."
          },
          {
            title: "Diseño de Conversaciones",
            description: "Creamos flujos de conversación naturales que guían al usuario hacia su objetivo."
          },
          {
            title: "Entrenamiento del Modelo",
            description: "alimentamos el asistente con información relevante de tu negocio para respuestas precisas."
          },
          {
            title: "Integración",
            description: "Conectamos el asistente con tu sitio web, app o plataformas de mensajería."
          },
          {
            title: "Optimización Continua",
            description: "Monitoreamos el rendimiento y mejoramos las respuestas basándonos en interacciones reales."
          },
        ],
      },

      useCases: {
        title: "¿Cuándo necesitas un Asistente de IA?",

        description: "Los asistentes de IA son ideales para automatizar procesos y mejorar la atención al cliente.",

        useCases: [
          {
            title: "Soporte 24/7",
            description: "Atención inmediata a tus clientes en cualquier momento, sin esperas ni límites."
          },
          {
            title: "Reducción de Cargas",
            description: "Disminuye la carga de trabajo de tu equipo respondiendo preguntas rutinarias."
          },
          {
            title: "Respuestas Consistencia",
            description: "Garantiza respuestas coherentes y precisas en todas las interacciones."
          },
          {
            title: "Escalabilidad",
            description: "Maneja múltiples conversaciones simultáneas sin degradar la calidad."
          },
          {
            title: "Recopilación de Datos",
            description: "Recolecta información valiosa sobre clientes y sus necesidades."
          },
          {
            title: "Integración con CRM",
            description: "Conecta con tus sistemas para una visión completa del cliente."
          },
        ],
      },

      features: {
        title: "¿Qué incluye nuestro servicio?",

        description: "Construimos asistentes de IA completos con capacidades avanzadas para tu negocio.",

        features: [
          {
            title: "Conversación Natural",
            description: "Lenguaje natural y contexto que simula una conversación humana."
          },
          {
            title: "Multicanal",
            description: "Integración en web, WhatsApp, Telegram, Slack y más."
          },
          {
            title: "Base de Conocimiento",
            description: "Información entrenada con tus documentos, políticas y productos."
          },
          {
            title: "Transferencia a Humano",
            description: "Escalamiento fluido a agentes humanos cuando sea necesario."
          },
          {
            title: "Analíticas",
            description: "Dashboards con métricas de uso, satisfacción y optimización."
          },
          {
            title: "Personalización de Marca",
            description: "Apariencia y tono adaptados a la identidad de tu empresa."
          },
          {
            title: "Integraciones API",
            description: "Conexión con tu CRM, ERP y otros sistemas empresariales."
          },
          {
            title: "Aprendizaje Continuo",
            description: "Mejora automática basada en interacciones y feedback."
          },
        ],
      },

      plansSection: {
        title: "Elige el plan ideal",

        description: "Todos nuestros planes utilizan la misma metodología de trabajo. La diferencia está en el nivel de personalización, funcionalidades e integraciones incluidas en cada uno.",
      },

      seo: {
        title: "Asistentes de IA | SatCore Solutions",

        description: "Implementación de chatbots inteligentes y asistentes virtuales personalizados para automatizar tu atención al cliente.",
        keywords: [
          "asistente de ia",
          "chatbot",
          "inteligencia artificial",
          "automatización",
          "soporte al cliente",
          "nextjs",
        ],
      },
    },

    en: {
      title: "AI Assistants",

      subtitle: "Intelligent automation with personalized chatbots",

      description: "We implement personalized artificial intelligence assistants that automate customer support, answer frequently asked questions, and improve user experience. Each solution is tailored to your business specific needs to maximize efficiency.",

      overview: {
        title: "What is an AI Assistant?",

        description: "An AI assistant is an intelligent program that uses artificial intelligence to chat with users, answer questions, and perform tasks automatically. They can be integrated into your website, app, or messaging platforms to provide 24/7 support.",

        image: "/images/subservices/ai-assistant-solutions/ai-assistant.png",

        imageAlt: "Professional AI assistant",

        useCases: [
          "Automated customer support",
          "Sales assistance",
          "FAQ resolution",
          "Booking and appointment management",
          "Real-time interaction",
        ],
      },

      workflow: {
        badge: "Our Process",

        title: "How We Build Your AI Assistant",

        description: "We create personalized AI assistants that understand your business context.",

        steps: [
          {
            title: "Needs Analysis",
            description: "We study your business, customers, and use cases to design the ideal assistant.",
          },
          {
            title: "Conversation Design",
            description: "We create natural conversation flows that guide users toward their goal.",
          },
          {
            title: "Model Training",
            description: "We train the assistant with relevant business information for accurate responses.",
          },
          {
            title: "Integration",
            description: "We connect the assistant to your website, app, or messaging platforms.",
          },
          {
            title: "Continuous Optimization",
            description: "We monitor performance and improve responses based on real interactions.",
          },
        ],
      },

      useCases: {
        title: "When Do You Need an AI Assistant?",

        description: "AI assistants are ideal for automating processes and improving customer support.",

        useCases: [
          {
            title: "24/7 Support",
            description: "Immediate assistance to your customers at any time, without waits or limits.",
          },
          {
            title: "Workload Reduction",
            description: "Decrease your team's workload by answering routine questions.",
          },
          {
            title: "Consistent Responses",
            description: "Guarantee coherent and accurate responses in all interactions.",
          },
          {
            title: "Scalability",
            description: "Handle multiple simultaneous conversations without degrading quality.",
          },
          {
            title: "Data Collection",
            description: "Gather valuable information about customers and their needs.",
          },
          {
            title: "CRM Integration",
            description: "Connect with your systems for a complete customer view.",
          },
        ],
      },

      features: {
        title: "What's Included?",

        description: "We build complete AI assistants with advanced capabilities for your business.",

        features: [
          {
            title: "Natural Conversation",
            description: "Natural language and context that simulates human conversation.",
          },
          {
            title: "Multichannel",
            description: "Integration on web, WhatsApp, Telegram, Slack, and more.",
          },
          {
            title: "Knowledge Base",
            description: "Information trained with your documents, policies, and products.",
          },
          {
            title: "Human Handoff",
            description: "Smooth escalation to human agents when needed.",
          },
          {
            title: "Analytics",
            description: "Dashboards with usage metrics, satisfaction, and optimization.",
          },
          {
            title: "Brand Personalization",
            description: "Appearance and tone adapted to your company identity.",
          },
          {
            title: "API Integrations",
            description: "Connection with your CRM, ERP, and other business systems.",
          },
          {
            title: "Continuous Learning",
            description: "Automatic improvement based on interactions and feedback.",
          },
        ],
      },

      plansSection: {
        title: "Choose the Right Plan",

        description: "All of our plans follow the same proven development process. The difference lies in the level of customization, features, and integrations included in each option.",
      },

      seo: {
        title: "AI Assistants | SatCore Solutions",

        description: "Implementation of intelligent chatbots and personalized virtual assistants to automate your customer support.",
        keywords: [
          "ai assistant",
          "chatbot",
          "artificial intelligence",
          "automation",
          "customer support",
          "nextjs",
        ],
      },
    },

    pt: {
      title: "Assistentes de IA",

      subtitle: "Automatização inteligente com chatbots personalizados",

      description: "Implementamos assistentes de inteligência artificial personalizados que automatizam o suporte ao cliente, respondem perguntas frequentes e melhoram a experiência do usuário. Cada solução é adaptada às necessidades específicas do seu negócio para maximizar a eficiência.",

      overview: {
        title: "O que é um Assistente de IA?",

        description: "Um assistente de IA é um programa inteligente que usa inteligência artificial para conversar com usuários, responder perguntas e realizar tarefas automaticamente. Podem ser integrados ao seu site, app ou plataformas de mensageria para fornecer suporte 24/7.",

        image: "/images/subservices/ai-assistant-solutions/ai-assistant.png",

        imageAlt: "Assistente de IA profissional",

        useCases: [
          "Suporte automatizado ao cliente",
          "Assistência em vendas",
          "Resolução de dúvidas frequentes",
          "Gestão de reservas e agendamentos",
          "Interação em tempo real",
        ],
      },

      workflow: {
        badge: "Nosso Processo",

        title: "Como Desenvolvemos seu Assistente de IA",

        description: "Criamos assistentes de IA personalizados que entendem o contexto do seu negócio.",

        steps: [
          {
            title: "Análise de Necessidades",
            description: "Estudamos seu negócio, clientes e casos de uso para diseñar o assistente ideal.",
          },
          {
            title: "Design de Conversas",
            description: "Criamos fluxos de conversa naturais que guiam o usuário até seu objetivo.",
          },
          {
            title: "Treinamento do Modelo",
            description: "Alimentamos o assistente com informações relevantes do seu negócio para respostas precisas.",
          },
          {
            title: "Integração",
            description: "Conectamos o assistente ao seu site, app ou plataformas de mensageria.",
          },
          {
            title: "Otimização Contínua",
            description: "Monitoramos o desempenho e melhoramos as respostas baseadas em interações reais.",
          },
        ],
      },

      useCases: {
        title: "Quando Você Precisa de um Assistente de IA?",

        description: "Os assistentes de IA são ideais para automatizar processos e melhorar o suporte ao cliente.",

        useCases: [
          {
            title: "Suporte 24/7",
            description: "Atendimento imediato aos seus clientes a qualquer momento, sem esperas ou limites.",
          },
          {
            title: "Redução de Carga",
            description: "Diminua a carga de trabalho da sua equipe respondendo perguntas rotineiras.",
          },
          {
            title: "Respostas Consistentes",
            description: "Garanta respostas coerentes e precisas em todas as interações.",
          },
          {
            title: "Escalabilidade",
            description: "Manipule múltiplas conversas simultâneas sem degradar a qualidade.",
          },
          {
            title: "Coleta de Dados",
            description: "Reúna informações valiosas sobre clientes e suas necessidades.",
          },
          {
            title: "Integração com CRM",
            description: "Conecte-se com seus sistemas para uma visão completa do cliente.",
          },
        ],
      },

      features: {
        title: "O Que Está Incluído?",

        description: "Construimos assistentes de IA completos com capacidades avançadas para seu negócio.",

        features: [
          {
            title: "Conversa Natural",
            description: "Linguagem natural e contexto que simula uma conversa humana.",
          },
          {
            title: "Multicanal",
            description: "Integração em web, WhatsApp, Telegram, Slack e mais.",
          },
          {
            title: "Base de Conhecimento",
            description: "Informação treinada com seus documentos, políticas e produtos.",
          },
          {
            title: "Transferência para Humano",
            description: "Escalação fluida para agentes humanos quando necessário.",
          },
          {
            title: "Análises",
            description: "Dashboards com métricas de uso, satisfação e otimização.",
          },
          {
            title: "Personalização de Marca",
            description: "Aparência e tom adaptados à identidade da sua empresa.",
          },
          {
            title: "Integrações API",
            description: "Conexão com seu CRM, ERP e outros sistemas empresariais.",
          },
          {
            title: "Aprendizado Contínuo",
            description: "Melhoria automática baseada em interações e feedback.",
          },
        ],
      },

      plansSection: {
        title: "Escolha o Plano Ideal",

        description: "Todos os nossos planos seguem a mesma metodologia de desenvolvimento. A diferença está no nível de personalização, funcionalidades e integrações incluídas em cada opção.",
      },

      seo: {
        title: "Assistentes de IA | SatCore Solutions",

        description: "Implementação de chatbots inteligentes e assistentes virtuais personalizados para automatizar seu suporte ao cliente.",
        keywords: [
          "assistente de ia",
          "chatbot",
          "inteligência artificial",
          "automatização",
          "suporte ao cliente",
          "nextjs",
        ],
      },
    },
  },
  plans: []
};