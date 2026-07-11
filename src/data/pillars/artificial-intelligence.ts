import type { Pillar } from "@/types/pillar.types";

import {
  Search,
  Brain,
  Cpu,
  Rocket,
  RefreshCw,
} from "lucide-react";

export const artificialIntelligence: Pillar = {
  core: {
    id: "artificial-intelligence",

    pillar: "artificial-intelligence",

    slug: "artificial-intelligence",

    name: "Artificial Intelligence",

    icon: "brain",

    type: "Artificial Intelligence",

    image:
      "/images/hero/hero-ia.png",

    images: [
      "/img/services/artificial-intelligence/1.webp",
      "/img/services/artificial-intelligence/2.webp",
    ],

    technologies: [
      // Modelos de IA
      "OpenAI",
      "Claude",
      "Gemini",

      // Frameworks IA
      "LangChain",
      "LlamaIndex",
      "TensorFlow",

      // Backend
      "Python",
      "Node.js",

      // Bases de Datos
      "PostgreSQL",
      "MongoDB",
      "Redis",

      // Automatización
      "n8n",

      // Cloud & DevOps
      "Docker",
      "AWS",
      "Azure",
      "GCP",
      "Vercel",
      "Render",

      // Versionamiento
      "Git",
      "GitHub",
    ]
  },

  href: "/services/artificial-intelligence",

  translations: {
    es: {
      title:
        "Inteligencia Artificial",

      category:
        "Inteligencia Artificial",

      description:
        "Diseñamos y desarrollamos soluciones de inteligencia artificial que automatizan procesos, mejoran la toma de decisiones, optimizan operaciones y crean experiencias inteligentes mediante modelos de lenguaje y automatización avanzada.",

      imageAlt:
        "Servicio de inteligencia artificial",

      hero: {
        badge:
          "Inteligencia Artificial",
      },

      techStack: {
        title:
          "Tecnologías que utilizamos",

        description:
          "Trabajamos con modelos de IA de última generación, frameworks especializados, bases de datos vectoriales y plataformas cloud para construir soluciones inteligentes listas para producción.",
      },

      serviceCatalog: {
        title:
          "Nuestros servicios",

        description:
          "Explora nuestras soluciones de inteligencia artificial, desde agentes IA y chatbots hasta automatización inteligente e integraciones personalizadas.",
      },
      process: {
        title:
          "Nuestro proceso de implementación de IA",

        description:
          "Seguimos una metodología estructurada para identificar oportunidades de automatización, desarrollar soluciones inteligentes e integrarlas de forma segura dentro de tu negocio.",

        steps: [
          {
            title: "Descubrimiento",
            subtitle:
              "Analizamos tus procesos, objetivos y oportunidades donde la IA puede generar mayor impacto.",
            icon: Search,
          },
          {
            title: "Diseño de la solución",
            subtitle:
              "Definimos la arquitectura, los modelos de IA y las integraciones necesarias para el proyecto.",
            icon: Brain,
          },
          {
            title: "Desarrollo",
            subtitle:
              "Construimos agentes inteligentes, chatbots, automatizaciones o asistentes personalizados.",
            icon: Cpu,
          },
          {
            title: "Pruebas y despliegue",
            subtitle:
              "Validamos el rendimiento, realizamos pruebas y desplegamos la solución en producción.",
            icon: Rocket,
          },
          {
            title: "Optimización continua",
            subtitle:
              "Monitoreamos el desempeño, aplicamos mejoras y adaptamos la IA a nuevas necesidades.",
            icon: RefreshCw,
          },
        ],
      },

      scope: {
        title:
          "Soluciones inteligentes para tu empresa",

        description:
          "Nuestros servicios de inteligencia artificial abarcan desde automatizaciones sencillas hasta agentes inteligentes integrados con tus sistemas empresariales.",

        cards: [
          {
            title: "Incluye",

            type: "include",

            items: [
              "Análisis de procesos",
              "Desarrollo de agentes IA",
              "Chatbots inteligentes",
              "Automatización de tareas",
              "Integración con APIs y sistemas",
              "Documentación técnica",
              "Capacitación básica",
            ],
          },
          {
            title: "No incluye",

            type: "exclude",

            items: [
              "Licencias de modelos comerciales",
              "Infraestructura cloud",
              "Consumo de APIs de terceros",
              "Entrenamiento de modelos propietarios",
              "Migración completa de sistemas",
            ],
          },
        ],
      },

      pricing: {
        title:
          "Planes y precios",

        description:
          "Cada solución de IA se adapta al nivel de automatización, complejidad e integración requerido por tu empresa.",

        plans: [
          {
            title:
              "Chatbot Inteligente",

            price:
              "Desde $2.500.000 COP",

            time:
              "1-2 semanas",
          },
          {
            title:
              "Agente IA",

            price:
              "$5.000.000 - $12.000.000 COP",

            time:
              "2-6 semanas",
          },
          {
            title:
              "Automatización Empresarial",

            price:
              "$8.000.000 - $20.000.000 COP",

            time:
              "4-8 semanas",
          },
          {
            title:
              "Proyecto Personalizado",

            price:
              "Cotización personalizada",

            time:
              "Según el alcance del proyecto",
          },
        ],
      },

      guarantee: {
        title:
          "Nuestra garantía",

        description:
          "Desarrollamos soluciones de inteligencia artificial siguiendo buenas prácticas de seguridad, documentación y soporte para garantizar implementaciones confiables y escalables.",

        cards: [
          {
            title:
              "Garantía de 30 días",

            description:
              "Corregimos errores y realizamos ajustes menores detectados después de la entrega del proyecto.",

            icon:
              "shield-check",
          },
          {
            title:
              "Soporte y optimización",

            description:
              "Ofrecemos mantenimiento continuo, optimización de prompts, mejoras funcionales y adaptación a nuevos procesos empresariales.",

            icon:
              "wrench",
          },
        ],
      },
      requirements: {
        title:
          "¿Qué necesitamos de ti?",

        description:
          "Comprender tus procesos, objetivos y necesidades nos permite desarrollar soluciones de inteligencia artificial realmente útiles y alineadas con tu negocio.",

        items: [
          {
            title:
              "Objetivos del proyecto",

            description:
              "Explícanos qué problema deseas resolver y qué resultados esperas obtener mediante inteligencia artificial.",
          },
          {
            title:
              "Procesos actuales",

            description:
              "Comparte cómo funciona actualmente tu proceso para identificar oportunidades de automatización y optimización.",
          },
          {
            title:
              "Fuentes de información",

            description:
              "Proporciona documentación, bases de conocimiento, manuales o cualquier información que utilizará la IA.",
          },
          {
            title:
              "Accesos e integraciones",

            description:
              "Facilita los accesos necesarios a APIs, sistemas, bases de datos o plataformas que deban integrarse.",
          },
          {
            title:
              "Retroalimentación",

            description:
              "Prueba la solución y comparte observaciones para mejorar el comportamiento y precisión de la inteligencia artificial.",
          },
          {
            title:
              "Validación continua",

            description:
              "Aprueba cada etapa del proyecto para garantizar una implementación exitosa y dentro del cronograma.",
          },
        ],
      },

      legal: {
        title:
          "Propiedad intelectual y aspectos legales",

        description:
          "Definimos claramente la propiedad del software desarrollado, las integraciones utilizadas y las responsabilidades relacionadas con modelos y servicios de terceros.",

        items: [
          {
            element: "Código desarrollado",

            owner: "Cliente",

            license: "Uso ilimitado",
          },
          {
            element: "Prompts y configuraciones",

            owner: "Cliente",

            license: "Uso ilimitado",
          },
          {
            element: "Modelos de IA y APIs",

            owner: "Terceros",

            license: "Según el proveedor",
          },
          {
            element: "Arquitectura y metodología",

            owner: "SatCore Solutions",

            license: "No transferible",
          },
        ],
      },

      cta: {
        title:
          "¿Listo para implementar inteligencia artificial?",

        description:
          "Conversemos sobre tu proyecto y descubre cómo la IA puede automatizar procesos, optimizar operaciones y acelerar el crecimiento de tu empresa.",

        button:
          "Solicitar cotización",
      },
    },
    en: {
      title:
        "Artificial Intelligence",

      category:
        "Artificial Intelligence",

      description:
        "We design and develop intelligent AI solutions that automate processes, improve decision-making, optimize operations, and create personalized experiences through modern language models and intelligent automation.",

      imageAlt:
        "Artificial intelligence service",

      hero: {
        badge:
          "Artificial Intelligence",
      },

      techStack: {
        title:
          "Technologies we use",

        description:
          "We work with state-of-the-art AI models, automation frameworks, vector databases, and cloud platforms to build scalable and production-ready intelligent solutions.",
      },

      serviceCatalog: {
        title:
          "Our AI services",

        description:
          "Explore our artificial intelligence solutions, from AI agents and chatbots to intelligent automation and custom AI integrations.",
      },
      process: {
        title:
          "Our AI implementation process",

        description:
          "We follow a structured methodology to identify automation opportunities, develop intelligent solutions, and integrate them securely into your business.",

        steps: [
          {
            title: "Discovery",
            subtitle:
              "We analyze your business processes, goals, and automation opportunities.",
            icon: Search,
          },
          {
            title: "Solution Design",
            subtitle:
              "We define the architecture, AI models, and integrations required for your project.",
            icon: Brain,
          },
          {
            title: "Development",
            subtitle:
              "We build AI agents, intelligent chatbots, automations, and custom assistants.",
            icon: Cpu,
          },
          {
            title: "Testing & Deployment",
            subtitle:
              "We validate performance, perform testing, and deploy the solution into production.",
            icon: Rocket,
          },
          {
            title: "Continuous Optimization",
            subtitle:
              "We monitor performance and continuously improve the solution as your business evolves.",
            icon: RefreshCw,
          },
        ],
      },

      scope: {
        title:
          "Intelligent solutions for your business",

        description:
          "Our AI services range from simple workflow automation to enterprise-grade intelligent agents integrated with your existing systems.",

        cards: [
          {
            title: "Includes",

            type: "include",

            items: [
              "Business process analysis",
              "AI agent development",
              "Intelligent chatbots",
              "Workflow automation",
              "API and system integrations",
              "Technical documentation",
              "Basic training",
            ],
          },
          {
            title: "Does not include",

            type: "exclude",

            items: [
              "Commercial AI model licenses",
              "Cloud infrastructure",
              "Third-party API usage fees",
              "Custom model training",
              "Full system migration",
            ],
          },
        ],
      },

      pricing: {
        title:
          "Plans & pricing",

        description:
          "Each AI solution is tailored to the automation level, complexity, and integrations required by your organization.",

        plans: [
          {
            title:
              "AI Chatbot",

            price:
              "From $600 USD",

            time:
              "1–2 weeks",
          },
          {
            title:
              "AI Agent",

            price:
              "$1,200 - $3,000 USD",

            time:
              "2–6 weeks",
          },
          {
            title:
              "Business Automation",

            price:
              "$2,000 - $5,000 USD",

            time:
              "4–8 weeks",
          },
          {
            title:
              "Custom AI Solution",

            price:
              "Custom quote",

            time:
              "According to project scope",
          },
        ],
      },

      guarantee: {
        title:
          "Our guarantee",

        description:
          "Every AI project follows security best practices, proper documentation, and post-launch support to ensure reliable and scalable deployments.",

        cards: [
          {
            title:
              "30-Day Guarantee",

            description:
              "We fix bugs and make minor adjustments identified after project delivery.",

            icon:
              "shield-check",
          },
          {
            title:
              "Support & Optimization",

            description:
              "We provide continuous maintenance, prompt optimization, feature improvements, and adaptations as your business evolves.",

            icon:
              "wrench",
          },
        ],
      },
      requirements: {
        title:
          "What do we need from you?",

        description:
          "Understanding your business processes and objectives allows us to build AI solutions that deliver real value and measurable results.",

        items: [
          {
            title:
              "Project goals",

            description:
              "Tell us what challenges you want to solve and the outcomes you expect from artificial intelligence.",
          },
          {
            title:
              "Current workflows",

            description:
              "Explain how your current processes work so we can identify automation opportunities.",
          },
          {
            title:
              "Knowledge sources",

            description:
              "Provide documentation, manuals, knowledge bases, or any information the AI should use.",
          },
          {
            title:
              "Access & integrations",

            description:
              "Provide access to APIs, databases, platforms, or systems that need to be integrated.",
          },
          {
            title:
              "Feedback",

            description:
              "Test the solution and provide feedback to improve accuracy and overall performance.",
          },
          {
            title:
              "Project validation",

            description:
              "Approve project milestones on time to ensure a successful implementation.",
          },
        ],
      },

      legal: {
        title:
          "Intellectual property & legal",

        description:
          "We clearly define ownership of the developed software, third-party AI services, integrations, and all project deliverables.",

        items: [
          {
            element: "Developed software",

            owner: "Client",

            license: "Unlimited use",
          },
          {
            element: "Prompts & configurations",

            owner: "Client",

            license: "Unlimited use",
          },
          {
            element: "AI models & APIs",

            owner: "Third parties",

            license: "According to provider",
          },
          {
            element: "Architecture & methodology",

            owner: "SatCore Solutions",

            license: "Non-transferable",
          },
        ],
      },

      cta: {
        title:
          "Ready to implement Artificial Intelligence?",

        description:
          "Let's discuss your project and discover how AI can automate processes, optimize operations, and accelerate your business growth.",

        button:
          "Request a quote",
      },
    },
    pt: {
      title:
        "Inteligência Artificial",

      category:
        "Inteligência Artificial",

      description:
        "Projetamos e desenvolvemos soluções de inteligência artificial que automatizam processos, melhoram a tomada de decisões, otimizam operações e criam experiências inteligentes utilizando modelos modernos de IA e automação.",

      imageAlt:
        "Serviço de inteligência artificial",

      hero: {
        badge:
          "Inteligência Artificial",
      },

      techStack: {
        title:
          "Tecnologias que utilizamos",

        description:
          "Utilizamos modelos de IA de última geração, frameworks especializados, bancos de dados vetoriais e plataformas em nuvem para desenvolver soluções inteligentes escaláveis e prontas para produção.",
      },

      serviceCatalog: {
        title:
          "Nossos serviços",

        description:
          "Conheça nossas soluções de inteligência artificial, incluindo agentes de IA, chatbots, automação inteligente e integrações personalizadas.",
      },
      process: {
        title:
          "Nosso processo de implementação de IA",

        description:
          "Seguimos uma metodologia estruturada para identificar oportunidades de automação, desenvolver soluções inteligentes e integrá-las com segurança ao seu negócio.",

        steps: [
          {
            title: "Descoberta",
            subtitle:
              "Analisamos seus processos, objetivos e oportunidades para aplicação da IA.",
            icon: Search,
          },
          {
            title: "Projeto da solução",
            subtitle:
              "Definimos a arquitetura, os modelos de IA e as integrações necessárias.",
            icon: Brain,
          },
          {
            title: "Desenvolvimento",
            subtitle:
              "Criamos agentes de IA, chatbots inteligentes, automações e assistentes personalizados.",
            icon: Cpu,
          },
          {
            title: "Testes e implantação",
            subtitle:
              "Validamos o desempenho, realizamos testes e colocamos a solução em produção.",
            icon: Rocket,
          },
          {
            title: "Otimização contínua",
            subtitle:
              "Monitoramos o desempenho e evoluímos a solução conforme novas necessidades do negócio.",
            icon: RefreshCw,
          },
        ],
      },

      scope: {
        title:
          "Soluções inteligentes para sua empresa",

        description:
          "Nossos serviços de inteligência artificial vão desde automações simples até agentes inteligentes integrados aos seus sistemas corporativos.",

        cards: [
          {
            title: "Inclui",

            type: "include",

            items: [
              "Análise de processos",
              "Desenvolvimento de agentes de IA",
              "Chatbots inteligentes",
              "Automação de tarefas",
              "Integração com APIs e sistemas",
              "Documentação técnica",
              "Treinamento básico",
            ],
          },
          {
            title: "Não inclui",

            type: "exclude",

            items: [
              "Licenças de modelos comerciais",
              "Infraestrutura em nuvem",
              "Custos de APIs de terceiros",
              "Treinamento de modelos proprietários",
              "Migração completa de sistemas",
            ],
          },
        ],
      },

      pricing: {
        title:
          "Planos e preços",

        description:
          "Cada solução de IA é personalizada conforme o nível de automação, complexidade e integrações necessárias para sua empresa.",

        plans: [
          {
            title:
              "Chatbot Inteligente",

            price:
              "A partir de US$ 600",

            time:
              "1–2 semanas",
          },
          {
            title:
              "Agente de IA",

            price:
              "US$ 1.200 - US$ 3.000",

            time:
              "2–6 semanas",
          },
          {
            title:
              "Automação Empresarial",

            price:
              "US$ 2.000 - US$ 5.000",

            time:
              "4–8 semanas",
          },
          {
            title:
              "Projeto Personalizado",

            price:
              "Orçamento personalizado",

            time:
              "Conforme o escopo do projeto",
          },
        ],
      },

      guarantee: {
        title:
          "Nossa garantia",

        description:
          "Desenvolvemos soluções de inteligência artificial seguindo boas práticas de segurança, documentação e suporte para garantir implementações confiáveis e escaláveis.",

        cards: [
          {
            title:
              "Garantia de 30 dias",

            description:
              "Corrigimos erros e realizamos pequenos ajustes identificados após a entrega do projeto.",

            icon:
              "shield-check",
          },
          {
            title:
              "Suporte e otimização",

            description:
              "Oferecemos manutenção contínua, otimização de prompts, melhorias funcionais e adaptação às novas necessidades do seu negócio.",

            icon:
              "wrench",
          },
        ],
      },
      requirements: {
        title:
          "O que precisamos de você?",

        description:
          "Compreender seus processos e objetivos nos permite desenvolver soluções de inteligência artificial que realmente agreguem valor ao seu negócio.",

        items: [
          {
            title:
              "Objetivos do projeto",

            description:
              "Explique quais desafios deseja resolver e quais resultados espera alcançar com inteligência artificial.",
          },
          {
            title:
              "Processos atuais",

            description:
              "Mostre como seus processos funcionam atualmente para identificarmos oportunidades de automação.",
          },
          {
            title:
              "Fontes de conhecimento",

            description:
              "Forneça documentação, manuais, bases de conhecimento ou qualquer informação que será utilizada pela IA.",
          },
          {
            title:
              "Acessos e integrações",

            description:
              "Disponibilize acesso às APIs, bancos de dados, plataformas ou sistemas que deverão ser integrados.",
          },
          {
            title:
              "Feedback",

            description:
              "Teste a solução e envie observações para melhorar a precisão e o desempenho da inteligência artificial.",
          },
          {
            title:
              "Validação do projeto",

            description:
              "Aprove cada etapa do projeto dentro do prazo para garantir uma implementação bem-sucedida.",
          },
        ],
      },

      legal: {
        title:
          "Propriedade intelectual e aspectos legais",

        description:
          "Definimos claramente a propriedade do software desenvolvido, das integrações utilizadas e das responsabilidades relacionadas aos modelos e serviços de terceiros.",

        items: [
          {
            element: "Software desenvolvido",

            owner: "Cliente",

            license: "Uso ilimitado",
          },
          {
            element: "Prompts e configurações",

            owner: "Cliente",

            license: "Uso ilimitado",
          },
          {
            element: "Modelos de IA e APIs",

            owner: "Terceiros",

            license: "Conforme o fornecedor",
          },
          {
            element: "Arquitetura e metodologia",

            owner: "SatCore Solutions",

            license: "Intransferível",
          },
        ],
      },

      cta: {
        title:
          "Pronto para implementar Inteligência Artificial?",

        description:
          "Vamos conversar sobre seu projeto e descobrir como a IA pode automatizar processos, otimizar operações e acelerar o crescimento da sua empresa.",

        button:
          "Solicitar orçamento",
      },
    },
  },
};