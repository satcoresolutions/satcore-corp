import type {
  ServiceDetail,
} from "@/types/service-detail.types";

import {
  softwarePlans,
} from "@/data/plans/software/landing-pages";

export const landingPagesDetail: ServiceDetail = {
  core: {
    id: "SRV-LP",

    slug: "landing-pages",

    name: "Landing Pages",

    pillar: "software",

    icon: "globe",

    heroImage: "/images/services/software/landing-pages/hero/hero.png",

    plans: softwarePlans,
  },

  translations: {
    es: {
      title: "Landing Pages Profesionales",

      subtitle: "Captación de leads y optimización de conversiones",

      description: "Diseñamos landing pages estratégicas enfocadas en convertir visitantes en clientes potenciales. Cada proyecto combina diseño, velocidad, experiencia de usuario y una estructura optimizada para maximizar el rendimiento de tus campañas de marketing.",

      overview: {
        title: "¿Qué es una Landing Page?",

        description: "Una landing page es una página web diseñada con un único objetivo: lograr una conversión. A diferencia de un sitio web tradicional, elimina distracciones y dirige al usuario hacia una acción específica, como solicitar una cotización, registrarse, descargar un recurso o realizar una compra.",

        image: "/images/subservices/landing-pages/landing-page.png",

        imageAlt: "Diseño profesional de Landing Pages",

        useCases: [
          "Captación de clientes potenciales",
          "Campañas de Google Ads y Meta Ads",
          "Lanzamiento de nuevos productos o servicios",
          "Validación de ideas de negocio",
          "Generación de registros para eventos",
        ],
      },

      workflow: {
        badge: "Metodología",

        title: "¿Cómo desarrollamos tu Landing Page?",

        description: "Seguimos un proceso estructurado que nos permite crear páginas rápidas, atractivas y enfocadas en resultados.",

        steps: [
          {
            title: "Descubrimiento",
            description: "Analizamos tu negocio, objetivos, público objetivo y propuesta de valor."
          },
          {
            title: "Arquitectura del contenido",
            description: "Definimos la estructura de la página, los mensajes principales y las llamadas a la acción."
          },
          {
            title: "Diseño UI/UX",
            description: "Diseñamos una interfaz moderna enfocada en transmitir confianza y facilitar la conversión."
          },
          {
            title: "Desarrollo",
            description: "Construimos la landing page utilizando tecnologías modernas con un enfoque en rendimiento, SEO y responsividad."
          },
          {
            title: "Optimización y publicación",
            description: "Realizamos pruebas, optimizamos tiempos de carga y publicamos el proyecto listo para recibir tráfico."
          },
        ],
      },

      useCases: {
        title: "¿Cuándo necesitas una Landing Page?",

        description: "Las landing pages son ideales cuando deseas obtener resultados concretos a partir de una campaña o una oferta específica.",

        useCases: [
          {
            title: "Publicidad Digital",
            description: "Dirige el tráfico de campañas pagas hacia una página diseñada para convertir."
          },
          {
            title: "Captación de Leads",
            description: "Obtén información de clientes potenciales mediante formularios optimizados."
          },
          {
            title: "Lanzamiento de Productos",
            description: "Presenta nuevos productos o servicios con un mensaje claro y persuasivo."
          },
          {
            title: "Eventos y Webinars",
            description: "Incrementa el número de registros para eventos presenciales o virtuales."
          },
          {
            title: "Validación de Negocios",
            description: "Mide el interés real de una idea antes de invertir en un desarrollo más grande."
          },
          {
            title: "Promociones Especiales",
            description: "Impulsa campañas temporales con una página enfocada exclusivamente en la oferta."
          },
        ],
      },

      features: {
        title: "¿Qué incluye nuestro servicio?",

        description: "Cada landing page incorpora buenas prácticas de diseño, desarrollo y optimización para ofrecer el máximo rendimiento.",

        features: [
          {
            title: "Diseño Personalizado",
            description: "Interfaz alineada con la identidad visual de tu marca."
          },
          {
            title: "Responsive Design",
            description: "Experiencia optimizada para computadores, tablets y dispositivos móviles."
          },
          {
            title: "Optimización SEO",
            description: "Estructura preparada para mejorar la indexación en motores de búsqueda."
          },
          {
            title: "Alta Velocidad",
            description: "Optimización de recursos para lograr tiempos de carga mínimos."
          },
          {
            title: "Formularios Inteligentes",
            description: "Captura de información con validaciones y enfoque en la conversión."
          },
          {
            title: "Integraciones",
            description: "Conexión con CRM, herramientas de email marketing, analítica y automatización."
          },
          {
            title: "Buenas Prácticas UX",
            description: "Jerarquía visual y llamadas a la acción orientadas a mejorar la conversión."
          },
          {
            title: "Escalabilidad",
            description: "Arquitectura preparada para futuras mejoras y crecimiento del proyecto."
          },
        ],
      },

      plansSection: {
        title: "Elige el plan ideal",

        description: "Todos nuestros planes utilizan la misma metodología de trabajo. La diferencia está en el nivel de personalización, funcionalidades e integraciones incluidas en cada uno.",
      },

      seo: {
        title: "Landing Pages Profesionales | SatCore Solutions",

        description: "Diseño y desarrollo de Landing Pages enfocadas en captación de leads, campañas de marketing y optimización de conversiones.",

        keywords: [
          "landing pages",
          "captación de leads",
          "marketing digital",
          "nextjs",
          "desarrollo web",
          "conversiones",
        ],
      },
    },

    en: {
      title: "Professional Landing Pages",

      subtitle: "Lead generation and conversion optimization",

      description: "We design strategic landing pages focused on turning visitors into qualified leads. Every project combines modern design, performance, user experience, and a conversion-driven structure to maximize the results of your marketing campaigns.",

      overview: {
        title: "What is a Landing Page?",

        description: "A landing page is a web page designed with a single objective: driving conversions. Unlike a traditional website, it removes distractions and guides visitors toward a specific action, such as requesting a quote, signing up, downloading a resource, or making a purchase.",

        image: "/images/subservices/landing-pages/landing-page.png",

        imageAlt: "Professional Landing Page Design",

        useCases: [
          "Lead generation",
          "Google Ads and Meta Ads campaigns",
          "Product and service launches",
          "Business idea validation",
          "Event registrations",
        ],
      },

      workflow: {
        badge: "Our Process",

        title: "How We Build Your Landing Page",

        description: "We follow a structured process to create fast, engaging, and conversion-focused landing pages.",

        steps: [
          {
            title: "Discovery",
            description: "We analyze your business, objectives, target audience, and unique value proposition.",
          },
          {
            title: "Content Strategy",
            description: "We define the page structure, messaging, and calls to action that will drive conversions.",
          },
          {
            title: "UI/UX Design",
            description: "We design a modern, user-friendly interface focused on trust, usability, and engagement.",
          },
          {
            title: "Development",
            description: "We build your landing page using modern technologies with a strong focus on performance, SEO, and responsiveness.",
          },
          {
            title: "Optimization & Launch",
            description: "We perform testing, optimize loading speed, and deploy your landing page fully ready to receive traffic.",
          },
        ],
      },

      useCases: {
        title: "When Do You Need a Landing Page?",

        description: "Landing pages are the ideal solution when your goal is to achieve measurable results from a specific campaign or offer.",

        useCases: [
          {
            title: "Digital Advertising",
            description: "Send paid traffic to a page specifically designed to maximize conversions.",
          },
          {
            title: "Lead Generation",
            description: "Capture qualified leads using optimized forms and persuasive calls to action.",
          },
          {
            title: "Product Launches",
            description: "Introduce new products or services with a focused and compelling message.",
          },
          {
            title: "Events & Webinars",
            description: "Increase registrations for online or in-person events with a dedicated registration page.",
          },
          {
            title: "Business Validation",
            description: "Measure market interest before investing in a larger product or platform.",
          },
          {
            title: "Limited-Time Promotions",
            description: "Boost seasonal campaigns or special offers with a page dedicated to a single objective.",
          },
        ],
      },

      features: {
        title: "What's Included?",

        description: "Every landing page includes modern design, best development practices, and optimization techniques to maximize performance and conversions.",

        features: [
          {
            title: "Custom Design",
            description: "A unique interface tailored to your brand identity and business goals.",
          },
          {
            title: "Responsive Design",
            description: "Optimized experience across desktops, tablets, and mobile devices.",
          },
          {
            title: "SEO Optimization",
            description: "Built with search engine best practices to improve visibility and indexing.",
          },
          {
            title: "High Performance",
            description: "Optimized assets and code to achieve fast loading times.",
          },
          {
            title: "Smart Forms",
            description: "Conversion-focused forms with validation and user-friendly interactions.",
          },
          {
            title: "Integrations",
            description: "Connect with CRMs, email marketing platforms, analytics, and automation tools.",
          },
          {
            title: "UX Best Practices",
            description: "Clear visual hierarchy and strategic calls to action that improve conversion rates.",
          },
          {
            title: "Scalable Architecture",
            description: "Built with a foundation that supports future growth and new features.",
          },
        ],
      },

      plansSection: {
        title: "Choose the Right Plan",

        description: "All of our plans follow the same proven development process. The difference lies in the level of customization, features, and integrations included in each option.",
      },

      seo: {
        title: "Professional Landing Pages | SatCore Solutions",

        description: "Landing page design and development focused on lead generation, marketing campaigns, and conversion optimization.",

        keywords: [
          "landing pages",
          "lead generation",
          "digital marketing",
          "nextjs",
          "web development",
          "conversions",
        ],
      },
    },

    pt: {
      title: "Landing Pages Profissionais",

      subtitle: "Captação de leads e otimização de conversões",

      description: "Desenvolvemos landing pages estratégicas focadas em transformar visitantes em clientes potenciais. Cada projeto combina design moderno, alto desempenho, excelente experiência do usuário e uma estrutura orientada para maximizar os resultados das suas campanhas de marketing.",

      overview: {
        title: "O que é uma Landing Page?",

        description: "Uma landing page é uma página criada com um único objetivo: gerar conversões. Diferentemente de um site tradicional, ela elimina distrações e direciona o visitante para uma ação específica, como solicitar um orçamento, cadastrar-se, baixar um material ou realizar uma compra.",

        image: "/images/subservices/landing-pages/landing-page.png",

        imageAlt: "Design profissional de Landing Pages",

        useCases: [
          "Captação de leads",
          "Campanhas no Google Ads e Meta Ads",
          "Lançamento de produtos e serviços",
          "Validação de ideias de negócio",
          "Inscrições para eventos",
        ],
      },

      workflow: {
        badge: "Nosso Processo",

        title: "Como Desenvolvemos sua Landing Page",

        description: "Seguimos um processo estruturado para criar landing pages rápidas, atrativas e focadas em conversão.",

        steps: [
          {
            title: "Descoberta",
            description: "Analisamos seu negócio, objetivos, público-alvo e proposta de valor.",
          },
          {
            title: "Estratégia de Conteúdo",
            description: "Definimos a estrutura da página, as mensagens principais e as chamadas para ação que impulsionam conversões.",
          },
          {
            title: "Design UI/UX",
            description: "Criamos uma interface moderna, intuitiva e voltada para transmitir confiança e facilitar a conversão.",
          },
          {
            title: "Desenvolvimento",
            description: "Construímos a landing page utilizando tecnologias modernas, priorizando desempenho, SEO e responsividade.",
          },
          {
            title: "Otimização e Publicação",
            description: "Realizamos testes, otimizamos o tempo de carregamento e publicamos a página pronta para receber visitantes.",
          },
        ],
      },

      useCases: {
        title: "Quando Você Precisa de uma Landing Page?",

        description: "Landing pages são ideais quando o objetivo é obter resultados concretos a partir de uma campanha ou oferta específica.",

        useCases: [
          {
            title: "Publicidade Digital",
            description: "Direcione o tráfego de campanhas pagas para uma página desenvolvida para maximizar conversões.",
          },
          {
            title: "Captação de Leads",
            description: "Obtenha contatos qualificados por meio de formulários otimizados e chamadas para ação estratégicas.",
          },
          {
            title: "Lançamento de Produtos",
            description: "Apresente novos produtos ou serviços com uma mensagem clara e altamente persuasiva.",
          },
          {
            title: "Eventos e Webinars",
            description: "Aumente o número de inscrições para eventos presenciais ou online com uma página dedicada.",
          },
          {
            title: "Validação de Negócios",
            description: "Avalie o interesse do mercado antes de investir em um produto ou plataforma completa.",
          },
          {
            title: "Promoções Especiais",
            description: "Impulsione campanhas sazonais ou ofertas limitadas com uma página focada em um único objetivo.",
          },
        ],
      },

      features: {
        title: "O Que Está Incluído?",

        description: "Cada landing page é desenvolvida com design moderno, boas práticas de desenvolvimento e otimizações para garantir máximo desempenho e conversão.",

        features: [
          {
            title: "Design Personalizado",
            description: "Interface exclusiva alinhada à identidade visual e aos objetivos do seu negócio.",
          },
          {
            title: "Design Responsivo",
            description: "Experiência otimizada para computadores, tablets e dispositivos móveis.",
          },
          {
            title: "Otimização para SEO",
            description: "Estrutura preparada para melhorar a indexação e a visibilidade nos mecanismos de busca.",
          },
          {
            title: "Alto Desempenho",
            description: "Código e recursos otimizados para garantir carregamento rápido.",
          },
          {
            title: "Formulários Inteligentes",
            description: "Formulários focados em conversão, com validações e excelente experiência para o usuário.",
          },
          {
            title: "Integrações",
            description: "Conecte sua landing page a CRMs, plataformas de e-mail marketing, ferramentas de análise e automação.",
          },
          {
            title: "Boas Práticas de UX",
            description: "Hierarquia visual clara e chamadas para ação estratégicas para aumentar a taxa de conversão.",
          },
          {
            title: "Arquitetura Escalável",
            description: "Estrutura preparada para crescer junto com o seu negócio e receber novas funcionalidades.",
          },
        ],
      },

      plansSection: {
        title: "Escolha o Plano Ideal",

        description: "Todos os nossos planos seguem a mesma metodologia de desenvolvimento. A diferença está no nível de personalização, funcionalidades e integrações incluídas em cada opção.",
      },

      seo: {
        title: "Landing Pages Profissionais | SatCore Solutions",

        description: "Design e desenvolvimento de landing pages voltadas para captação de leads, campanhas de marketing e otimização de conversões.",

        keywords: [
          "landing pages",
          "captação de leads",
          "marketing digital",
          "nextjs",
          "desenvolvimento web",
          "conversões",
        ],
      },
    },
  },
  plans: []
};