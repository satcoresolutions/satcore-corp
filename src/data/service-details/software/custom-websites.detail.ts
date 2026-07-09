import type {
  ServiceDetail,
} from "@/types/service-detail.types";

import {
  softwarePlans,
} from "@/data/plans/software/landing-pages";

export const customWebsitesDetail: ServiceDetail = {
  core: {
    id: "SRV-CW",

    slug: "custom-websites",

    name: "Custom Websites",

    pillar: "software",

    icon: "globe",

    heroImage: "/images/services/software/custom-websites/hero/hero.png",

    plans: [],
  },

  translations: {
    es: {
      title: "Sitios Web Personalizados",

      subtitle: "Desarrollo web a medida",

      description: "Creamos sitios web personalizados que se adaptan exactamente a tus necesidades. Desde landing pages hasta portales complejos, cada proyecto se desarrolla con tecnología moderna y diseño único.",

      overview: {
        title: "¿Qué es un Sitio Web Personalizado?",

        description: "Un sitio web personalizado es una aplicación web desarrollada específicamente para tus requisitos únicos. No utiliza plantillas genéricas, sino que se construye desde cero para cumplir tus objetivos específicos.",

        image: "/images/subservices/custom-websites/custom.png",

        imageAlt: "Sitio web personalizado",

        useCases: [
          "Landing pages de conversión",
          "Portales web",
          "Aplicaciones web",
          "Sitios corporativos",
          "Plataformas educativas",
        ],
      },

      workflow: {
        badge: "Metodología",

        title: "¿Cómo desarrollamos tu Sitio?",

        description: "Seguimos un proceso estructurado para crear sitios web únicos.",

        steps: [
          {
            title: "Requisitos",
            description: "Analizamos tus necesidades y objetivos."
          },
          {
            title: "Diseño",
            description: "Creamos mockups y prototipos personalizados."
          },
          {
            title: "Desarrollo",
            description: "Implementamos con tecnologías modernas."
          },
          {
            title: "Pruebas",
            description: "Verificamos funcionalidad y rendimiento."
          },
          {
            title: "Lanzamiento",
            description: "Publicamos y optimizamos para SEO."
          },
        ],
      },

      useCases: {
        title: "¿Cuándo necesitas un Sitio Personalizado?",

        description: "Cuando necesitas funcionalidades específicas que las plantillas no ofrecen.",

        useCases: [
          {
            title: "Diferenciación",
            description: "Destaca con un diseño único."
          },
          {
            title: "Funcionalidad",
            description: "Implementa características específicas."
          },
          {
            title: "Rendimiento",
            description: "Optimización máxima de velocidad."
          },
          {
            title: "Escalabilidad",
            description: "El sitio crece con tu negocio."
          },
          {
            title: "Control",
            description: "Control total sobre el código."
          },
          {
            title: "Integración",
            description: "Conecta con sistemas existentes."
          },
        ],
      },

      features: {
        title: "¿Qué incluye nuestro servicio?",

        description: "Creamos sitios web personalizados de alta calidad.",

        features: [
          {
            title: "Diseño Único",
            description: "Diseño feito sob medida para tu marca."
          },
          {
            title: "Tecnología Moderna",
            description: "Next.js, React, TypeScript."
          },
          {
            title: "Responsive",
            description: "Perfecto en todos los dispositivos."
          },
          {
            title: "SEO",
            description: "Optimizado para motores de búsqueda."
          },
          {
            title: "Rápido",
            description: "Carga ultrarrápida."
          },
          {
            title: "Seguro",
            description: "Mejores prácticas de seguridad."
          },
          {
            title: "Accesible",
            description: "Cumple con estándares WCAG."
          },
          {
            title: "Mantenimiento",
            description: "Soporte continuo disponible."
          },
        ],
      },

      plansSection: {
        title: "Elige el plan ideal",

        description: "Todos nuestros planes utilizan la misma metodología de trabajo. La diferencia está en el nivel de personalización, funcionalidades e integraciones incluidas en cada uno.",
      },

      seo: {
        title: "Sitios Web Personalizados | SatCore Solutions",

        description: "Desarrollo de sitios web personalizados con tecnología moderna.",
        keywords: [
          "sitio web personalizado",
          "desarrollo web",
          "web a medida",
          "nextjs",
          "react",
        ],
      },
    },

    en: {
      title: "Custom Websites",

      subtitle: "Custom web development",

      description: "We create custom websites that adapt exactly to your needs. From landing pages to complex portals, each project is developed with modern technology and unique design.",

      overview: {
        title: "What is a Custom Website?",

        description: "A custom website is a web application developed specifically for your unique requirements. It doesn't use generic templates, but is built from scratch to meet your specific goals.",

        image: "/images/subservices/custom-websites/custom.png",

        imageAlt: "Custom website",

        useCases: [
          "Conversion landing pages",
          "Web portals",
          "Web applications",
          "Corporate websites",
          "Educational platforms",
        ],
      },

      workflow: {
        badge: "Our Process",

        title: "How We Build Your Site",

        description: "We follow a structured process to create unique websites.",

        steps: [
          {
            title: "Requirements",
            description: "We analyze your needs and goals.",
          },
          {
            title: "Design",
            description: "We create custom mockups and prototypes.",
          },
          {
            title: "Development",
            description: "We implement with modern technologies.",
          },
          {
            title: "Testing",
            description: "We verify functionality and performance.",
          },
          {
            title: "Launch",
            description: "We publish and optimize for SEO.",
          },
        ],
      },

      useCases: {
        title: "When Do You Need a Custom Website?",

        description: "When you need specific features that templates don't offer.",

        useCases: [
          {
            title: "Differentiation",
            description: "Stand out with unique design.",
          },
          {
            title: "Functionality",
            description: "Implement specific features.",
          },
          {
            title: "Performance",
            description: "Maximum speed optimization.",
          },
          {
            title: "Scalability",
            description: "Site grows with your business.",
          },
          {
            title: "Control",
            description: "Full control over code.",
          },
          {
            title: "Integration",
            description: "Connect with existing systems.",
          },
        ],
      },

      features: {
        title: "What's Included?",

        description: "We create high-quality custom websites.",

        features: [
          {
            title: "Unique Design",
            description: "Custom design for your brand.",
          },
          {
            title: "Modern Technology",
            description: "Next.js, React, TypeScript.",
          },
          {
            title: "Responsive",
            description: "Perfect on all devices.",
          },
          {
            title: "SEO",
            description: "Optimized for search engines.",
          },
          {
            title: "Fast",
            description: "Ultra-fast loading.",
          },
          {
            title: "Secure",
            description: "Best security practices.",
          },
          {
            title: "Accessible",
            description: "WCAG compliant.",
          },
          {
            title: "Maintenance",
            description: " ongoing support available.",
          },
        ],
      },

      plansSection: {
        title: "Choose the Right Plan",

        description: "All of our plans follow the same proven development process. The difference lies in the level of customization, features, and integrations included in each option.",
      },

      seo: {
        title: "Custom Websites | SatCore Solutions",

        description: "Custom website development with modern technology.",
        keywords: [
          "custom website",
          "web development",
          "custom web",
          "nextjs",
          "react",
        ],
      },
    },

    pt: {
      title: "Sites Web Personalizados",

      subtitle: "Desenvolvimento web sob medida",

      description: "Criamos sites web personalizados que se adaptam exatamente às suas necessidades. De landing pages a portais complexos, cada projeto é desenvolvido com tecnologia moderna e design único.",

      overview: {
        title: "O que é um Site Web Personalizado?",

        description: "Um site web personalizado é uma aplicação web desenvolvida especificamente para seus requisitos únicos. Não utiliza modelos genéricos, mas é construído do zero para atender seus objetivos específicos.",

        image: "/images/subservices/custom-websites/custom.png",

        imageAlt: "Site web personalizado",

        useCases: [
          "Landing pages de conversão",
          "Portais web",
          "Aplicações web",
          "Sites corporativos",
          "Plataformas educacionais",
        ],
      },

      workflow: {
        badge: "Nosso Processo",

        title: "Como Desenvolvemos seu Site",

        description: "Seguimos um processo estruturado para criar sites web únicos.",

        steps: [
          {
            title: "Requisitos",
            description: "Analisamos suas necessidades e objetivos.",
          },
          {
            title: "Design",
            description: "Criamos mockups e protótipos personalizados.",
          },
          {
            title: "Desenvolvimento",
            description: "Implementamos com tecnologias modernas.",
          },
          {
            title: "Testes",
            description: "Verificamos funcionalidade e desempenho.",
          },
          {
            title: "Lançamento",
            description: "Publicamos e otimizamos para SEO.",
          },
        ],
      },

      useCases: {
        title: "Quando Você Precisa de um Site Personalizado?",

        description: "Quando você precisa de funcionalidades específicas que os modelos não oferecem.",

        useCases: [
          {
            title: "Diferenciação",
            description: "Destaque-se com design único.",
          },
          {
            title: "Funcionalidade",
            description: "Implemente funcionalidades específicas.",
          },
          {
            title: "Desempenho",
            description: "Otimização máxima de velocidade.",
          },
          {
            title: "Escalabilidade",
            description: "O site cresce com seu negócio.",
          },
          {
            title: "Controle",
            description: "Controle total sobre o código.",
          },
          {
            title: "Integração",
            description: "Conecte com sistemas existentes.",
          },
        ],
      },

      features: {
        title: "O Que Está Incluído?",

        description: "Criamos sites web personalizados de alta qualidade.",

        features: [
          {
            title: "Design Único",
            description: "Design feito sob medida para sua marca.",
          },
          {
            title: "Tecnologia Moderna",
            description: "Next.js, React, TypeScript.",
          },
          {
            title: "Responsivo",
            description: "Perfeito em todos os dispositivos.",
          },
          {
            title: "SEO",
            description: "Otimizado para motores de busca.",
          },
          {
            title: "Rápido",
            description: "Carregamento ultrarrápido.",
          },
          {
            title: "Seguro",
            description: "Melhores práticas de segurança.",
          },
          {
            title: "Acessível",
            description: "Compatível com padrões WCAG.",
          },
          {
            title: "Manutenção",
            description: "Suporte contínuo disponível.",
          },
        ],
      },

      plansSection: {
        title: "Escolha o Plano Ideal",

        description: "Todos os nossos planos seguem a mesma metodologia de desenvolvimento. A diferença está no nível de personalização, funcionalidades e integrações incluídas em cada opção.",
      },

      seo: {
        title: "Sites Web Personalizados | SatCore Solutions",

        description: "Desenvolvimento de sites web personalizados com tecnologia moderna.",
        keywords: [
          "site web personalizado",
          "desenvolvimento web",
          "web sob medida",
          "nextjs",
          "react",
        ],
      },
    },
  },
  plans: []
};