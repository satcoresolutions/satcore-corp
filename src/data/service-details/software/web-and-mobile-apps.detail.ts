import type {
  ServiceDetail,
} from "@/types/service-detail.types";

import {
  softwarePlans,
} from "@/data/plans/software/landing-pages";

export const webAndMobileAppsDetail: ServiceDetail = {
  core: {
    id: "SRV-WMA",

    slug: "web-and-mobile-apps",

    name: "Web & Mobile Apps",

    pillar: "software",

    icon: "smartphone",

    heroImage: "/images/services/software/web-and-mobile-apps/hero/hero.png",

    plans: [],
  },

  translations: {
    es: {
      title: "Aplicaciones Web y Móviles",

      subtitle: "Soluciones digitales para tu negocio",

      description: "Desarrollamos aplicaciones web y móviles que resuelven necesidades específicas de tu negocio. Desde apps internas hasta productos para usuarios finales, proporcionamos soluciones personalizadas.",

      overview: {
        title: "¿Qué son las Aplicaciones Web y Móviles?",

        description: "Las aplicaciones web y móviles son programas desarrollados a medida para realizar funciones específicas. Las web funcionan en navegadores; las móviles se instalan en dispositivos y pueden acceder a funciones nativas del dispositivo.",

        image: "/images/subservices/web-and-mobile-apps/apps.png",

        imageAlt: "Aplicaciones web y móviles",

        useCases: [
          "Apps corporativas",
          "Apps para clientes",
          "Dashboards móviles",
          "Herramientas internas",
          "Productos SaaS",
        ],
      },

      workflow: {
        badge: "Metodología",

        title: "¿Cómo desarrollamos tu Aplicación?",

        description: "Creamos aplicaciones personalizadas de alta calidad.",

        steps: [
          {
            title: "Requisitos",
            description: "Definimos las funcionalidades y objetivos."
          },
          {
            title: "Diseño",
            description: "Creamos wireframes y prototipos."
          },
          {
            title: "Desarrollo",
            description: "Implementamos la aplicación."
          },
          {
            title: "Pruebas",
            description: "Verificamos funcionalidad y rendimiento."
          },
          {
            title: "Lanzamiento",
            description: "Publicamos en tiendas o web."
          },
        ],
      },

      useCases: {
        title: "¿Cuándo necesitas una Aplicación?",

        description: "Las aplicaciones son ideales para resolver necesidades específicas.",

        useCases: [
          {
            title: "Automatización",
            description: "Automatiza procesos de tu negocio."
          },
          {
            title: "Acceso Móvil",
            description: "Permite acceso desde cualquier lugar."
          },
          {
            title: "Experiencia",
            description: "Ofrece una experiencia personalizada."
          },
          {
            title: "Productividad",
            description: "Mejora la productividad de tu equipo."
          },
          {
            title: "Engagement",
            description: "Mantén engagement con tus clientes."
          },
          {
            title: "Datos",
            description: "Recolecta y analiza datos en tiempo real."
          },
        ],
      },

      features: {
        title: "¿Qué incluye nuestro servicio?",

        description: "Creamos aplicaciones web y móviles completas.",

        features: [
          {
            title: "Diseño UX/UI",
            description: "Interfaz intuitiva y atractiva."
          },
          {
            title: "Desarrollo Web",
            description: "Aplicaciones web responsivas."
          },
          {
            title: "Desarrollo Móvil",
            description: "Apps para iOS y Android."
          },
          {
            title: "Backend",
            description: "API y base de datos robustos."
          },
          {
            title: "Integraciones",
            description: "Conexión con servicios externos."
          },
          {
            title: "Seguridad",
            description: "Protección de datos y autenticación."
          },
          {
            title: "Mantenimiento",
            description: "Soporte y actualizaciones."
          },
          {
            title: "Analytics",
            description: "Seguimiento de uso y métricas."
          },
        ],
      },

      plansSection: {
        title: "Elige el plan ideal",

        description: "Todos nuestros planes utilizan la misma metodología de trabajo. La diferencia está en el nivel de personalización, funcionalidades e integraciones incluidas en cada uno.",
      },

      seo: {
        title: "Apps Web y Móviles | SatCore Solutions",

        description: "Desarrollo de aplicaciones web y móviles personalizadas.",
        keywords: [
          "app",
          "aplicación web",
          "aplicación móvil",
          "desarrollo móvil",
          "nextjs",
        ],
      },
    },

    en: {
      title: "Web & Mobile Apps",

      subtitle: "Digital solutions for your business",

      description: "We develop web and mobile apps that solve specific business needs. From internal apps to end-user products, we provide customized solutions.",

      overview: {
        title: "What are Web & Mobile Apps?",

        description: "Web and mobile apps are custom-built programs to perform specific functions. Web apps run in browsers; mobile apps install on devices and can access native device features.",

        image: "/images/subservices/web-and-mobile-apps/apps.png",

        imageAlt: "Web and mobile apps",

        useCases: [
          "Corporate apps",
          "Customer apps",
          "Mobile dashboards",
          "Internal tools",
          "SaaS products",
        ],
      },

      workflow: {
        badge: "Our Process",

        title: "How We Build Your App",

        description: "We create high-quality customized applications.",

        steps: [
          {
            title: "Requirements",
            description: "We define features and objectives.",
          },
          {
            title: "Design",
            description: "We create wireframes and prototypes.",
          },
          {
            title: "Development",
            description: "We implement the application.",
          },
          {
            title: "Testing",
            description: "We verify functionality and performance.",
          },
          {
            title: "Launch",
            description: "We publish to stores or web.",
          },
        ],
      },

      useCases: {
        title: "When Do You Need an App?",

        description: "Apps are ideal for solving specific needs.",

        useCases: [
          {
            title: "Automation",
            description: "Automate your business processes.",
          },
          {
            title: "Mobile Access",
            description: "Allow access from anywhere.",
          },
          {
            title: "Experience",
            description: "Offer a personalized experience.",
          },
          {
            title: "Productivity",
            description: "Improve your team's productivity.",
          },
          {
            title: "Engagement",
            description: "Keep engagement with your customers.",
          },
          {
            title: "Data",
            description: "Collect and analyze data in real-time.",
          },
        ],
      },

      features: {
        title: "What's Included?",

        description: "We create complete web and mobile apps.",

        features: [
          {
            title: "UX/UI Design",
            description: "Intuitive, attractive interface.",
          },
          {
            title: "Web Development",
            description: "Responsive web applications.",
          },
          {
            title: "Mobile Development",
            description: "Apps for iOS and Android.",
          },
          {
            title: "Backend",
            description: "Robust API and database.",
          },
          {
            title: "Integrations",
            description: "Connection with external services.",
          },
          {
            title: "Security",
            description: "Data protection and authentication.",
          },
          {
            title: "Maintenance",
            description: "Support and updates.",
          },
          {
            title: "Analytics",
            description: "Usage tracking and metrics.",
          },
        ],
      },

      plansSection: {
        title: "Choose the Right Plan",

        description: "All of our plans follow the same proven development process. The difference lies in the level of customization, features, and integrations included in each option.",
      },

      seo: {
        title: "Web & Mobile Apps | SatCore Solutions",

        description: "Development of customized web and mobile applications.",
        keywords: [
          "app",
          "web app",
          "mobile app",
          "app development",
          "nextjs",
        ],
      },
    },

    pt: {
      title: "Aplicativos Web e Mobile",

      subtitle: "Soluções digitais para seu negócio",

      description: "Desenvolvemos aplicativos web e mobile que resolvem necessidades específicas do seu negócio. De apps internos a produtos para usuários finais, fornecemos soluções personalizadas.",

      overview: {
        title: "O que são Aplicativos Web e Mobile?",

        description: "Os aplicativos web e mobile são programas desenvolvidos sob medida para realizar funções específicas. Os web funcionam em navegadores; os mobile se instalam em dispositivos e podem acessar funções nativas.",

        image: "/images/subservices/web-and-mobile-apps/apps.png",

        imageAlt: "Aplicativos web e mobile",

        useCases: [
          "Apps corporativos",
          "Apps para clientes",
          "Dashboards mobile",
          "Ferramentas internas",
          "Produtos SaaS",
        ],
      },

      workflow: {
        badge: "Nosso Processo",

        title: "Como Desenvolvemos seu Aplicativo",

        description: "Criamos aplicativos personalizados de alta qualidade.",

        steps: [
          {
            title: "Requisitos",
            description: "Definimos as funcionalidades e objetivos.",
          },
          {
            title: "Design",
            description: "Criamos wireframes e protótipos.",
          },
          {
            title: "Desenvolvimento",
            description: "Implementamos o aplicativo.",
          },
          {
            title: "Testes",
            description: "Verificamos funcionalidade e desempenho.",
          },
          {
            title: "Lançamento",
            description: "Publicamos em lojas ou web.",
          },
        ],
      },

      useCases: {
        title: "Quando Você Precisa de um Aplicativo?",

        description: "Os aplicativos são ideais para resolver necessidades específicas.",

        useCases: [
          {
            title: "Automatização",
            description: "Automatize processos do seu negócio.",
          },
          {
            title: "Acesso Mobile",
            description: "Permita acesso de qualquer lugar.",
          },
          {
            title: "Experiência",
            description: "Ofereça uma experiência personalizada.",
          },
          {
            title: "Produtividade",
            description: "Melhore a produtividade da sua equipe.",
          },
          {
            title: "Engajamento",
            description: "Mantenha engajamento com seus clientes.",
          },
          {
            title: "Dados",
            description: "Reúna e analise dados em tempo real.",
          },
        ],
      },

      features: {
        title: "O Que Está Incluído?",

        description: "Criamos aplicativos web e mobile completos.",

        features: [
          {
            title: "Design UX/UI",
            description: "Interface intuitiva e atraente.",
          },
          {
            title: "Desenvolvimento Web",
            description: "Aplicativos web responsivos.",
          },
          {
            title: "Desenvolvimento Mobile",
            description: "Apps para iOS e Android.",
          },
          {
            title: "Backend",
            description: "API e banco de dados robustos.",
          },
          {
            title: "Integrações",
            description: "Conexão com serviços externos.",
          },
          {
            title: "Segurança",
            description: "Proteção de dados e autenticação.",
          },
          {
            title: "Manutenção",
            description: "Suporte e atualizações.",
          },
          {
            title: "Analytics",
            description: "Acompanhamento de uso e métricas.",
          },
        ],
      },

      plansSection: {
        title: "Escolha o Plano Ideal",

        description: "Todos os nossos planos seguem a mesma metodologia de desenvolvimento. A diferença está no nível de personalização, funcionalidades e integrações incluídas em cada opção.",
      },

      seo: {
        title: "Apps Web e Mobile | SatCore Solutions",

        description: "Desenvolvimento de aplicativos web e mobile personalizados.",
        keywords: [
          "app",
          "aplicativo web",
          "aplicativo mobile",
          "desenvolvimento mobile",
          "nextjs",
        ],
      },
    },
  },
  plans: []
};