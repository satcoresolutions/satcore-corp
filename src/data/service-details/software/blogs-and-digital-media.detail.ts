import type {
  ServiceDetail,
} from "@/types/service-detail.types";

import {
  softwarePlans,
} from "@/data/plans/software/landing-pages";

export const blogsAndDigitalMediaDetail: ServiceDetail = {
  core: {
    id: "SRV-BDM",

    slug: "blogs-and-digital-media",

    name: "Blogs & Digital Media",

    pillar: "software",

    icon: "book-open",

    heroImage: "/images/services/software/blogs-and-digital-media/hero/hero.png",

    plans: [],
  },

  translations: {
    es: {
      title: "Blogs y Medios Digitales",

      subtitle: "Plataformas de contenido para tu marca",

      description: "Creamos blogs y plataformas de medios digitales que te permiten publicar contenido de manera eficiente. Cada proyecto está diseñado para atraer lectores, mejorar tu SEO y construir una comunidad comprometida autour de tu marca.",

      overview: {
        title: "¿Qué es un Blog o Plataforma de Medios?",

        description: "Un blog o plataforma de medios digitales es un espacio donde puedes publicar artículos, noticias y contenido multimedia. Está diseñado para atraer audiencia, mejorar el posicionamiento en buscadores y establecer tu autoridad en tu industria.",

        image: "/images/subservices/blogs-and-digital-media/blog.png",

        imageAlt: "Blog profesional",

        useCases: [
          "Blog corporativo",
          "Revista digital",
          "Portal de noticias",
          "Contenido educativo",
          "Blog personal o profesional",
        ],
      },

      workflow: {
        badge: "Metodología",

        title: "¿Cómo desarrollamos tu Blog?",

        description: "Creamos plataformas de contenido optimizadas para atraer y retener audiencia.",

        steps: [
          {
            title: "Planificación",
            description: "Definimos la estrategia de contenido y estructura del sitio."
          },
          {
            title: "Diseño",
            description: "Creamos un diseño que facilita la lectura y navegación."
          },
          {
            title: "Desarrollo",
            description: "Implementamos la plataforma con sistema de gestión de contenido."
          },
          {
            title: "Configuración SEO",
            description: "Optimizamos para motores de búsqueda y redes sociales."
          },
          {
            title: "Lanzamiento",
            description: "Publicamos y configuramos herramientas analíticas."
          },
        ],
      },

      useCases: {
        title: "¿Cuándo necesitas un Blog?",

        description: "Un blog es esencial para cualquier estrategia de marketing de contenidos efectiva.",

        useCases: [
          {
            title: "Marketing de Contenidos",
            description: "Crea contenido valioso que atraiga y engagement a tu audiencia."
          },
          {
            title: "SEO",
            description: "Mejora tu posicionamiento en motores de búsqueda."
          },
          {
            title: "Autoridad",
            description: "Establece tu marca como experta en tu industria."
          },
          {
            title: "Comunidad",
            description: "Construye una comunidad alrededor de tu marca."
          },
          {
            title: "Conversión",
            description: "Convierte lectores en leads y clientes."
          },
          {
            title: "Tráfico",
            description: "Genera tráfico orgánico constante a tu sitio."
          },
        ],
      },

      features: {
        title: "¿Qué incluye nuestro servicio?",

        description: "Creamos blogs y plataformas de medios completos con todas las herramientas necesarias.",

        features: [
          {
            title: "Sistema de Gestión",
            description: "Panel fácil de usar para publicar y gestionar contenido."
          },
          {
            title: "Categorías y Etiquetas",
            description: "Organización eficiente del contenido."
          },
          {
            title: "Comentarios",
            description: "Sistema de comentarios con moderación."
          },
          {
            title: "Newsletter",
            description: "Integración con herramientas de email marketing."
          },
          {
            title: "Optimización SEO",
            description: "Metadatos, URLs amigables y estructura optimizada."
          },
          {
            title: "Diseño Responsivo",
            description: "Experiencia perfecta en todos los dispositivos."
          },
          {
            title: "Velocidad",
            description: "Carga rápida para mejor experiencia y SEO."
          },
          {
            title: "Redes Sociales",
            description: "Integración para compartir en redes sociales."
          },
        ],
      },

      plansSection: {
        title: "Elige el plan ideal",

        description: "Todos nuestros planes utilizan la misma metodología de trabajo. La diferencia está en el nivel de personalización, funcionalidades e integraciones incluidas en cada uno.",
      },

      seo: {
        title: "Blogs y Medios Digitales | SatCore Solutions",

        description: "Diseño y desarrollo de blogs profesionales y plataformas de medios digitales para tu estrategia de contenido.",
        keywords: [
          "blog",
          "medios digitales",
          "publicación de contenido",
          "cms",
          "marketing de contenidos",
          "nextjs",
        ],
      },
    },

    en: {
      title: "Blogs & Digital Media",

      subtitle: "Content platforms for your brand",

      description: "We create blogs and digital media platforms that allow you to publish content efficiently. Each project is designed to attract readers, improve your SEO, and build a committed community around your brand.",

      overview: {
        title: "What is a Blog or Digital Media Platform?",

        description: "A blog or digital media platform is a space where you can publish articles, news, and multimedia content. It's designed to attract an audience, improve search engine positioning, and establish your authority in your industry.",

        image: "/images/subservices/blogs-and-digital-media/blog.png",

        imageAlt: "Professional blog",

        useCases: [
          "Corporate blog",
          "Digital magazine",
          "News portal",
          "Educational content",
          "Personal or professional blog",
        ],
      },

      workflow: {
        badge: "Our Process",

        title: "How We Build Your Blog",

        description: "We create content platforms optimized to attract and retain an audience.",

        steps: [
          {
            title: "Planning",
            description: "We define the content strategy and site structure.",
          },
          {
            title: "Design",
            description: "We create a design that facilitates reading and navigation.",
          },
          {
            title: "Development",
            description: "We implement the platform with a content management system.",
          },
          {
            title: "SEO Configuration",
            description: "We optimize for search engines and social media.",
          },
          {
            title: "Launch",
            description: "We publish and configure analytics tools.",
          },
        ],
      },

      useCases: {
        title: "When Do You Need a Blog?",

        description: "A blog is essential for any effective content marketing strategy.",

        useCases: [
          {
            title: "Content Marketing",
            description: "Create valuable content that attracts and engages your audience.",
          },
          {
            title: "SEO",
            description: "Improve your search engine positioning.",
          },
          {
            title: "Authority",
            description: "Establish your brand as an expert in your industry.",
          },
          {
            title: "Community",
            description: "Build a community around your brand.",
          },
          {
            title: "Conversion",
            description: "Convert readers into leads and customers.",
          },
          {
            title: "Traffic",
            description: "Generate constant organic traffic to your site.",
          },
        ],
      },

      features: {
        title: "What's Included?",

        description: "We create complete blogs and media platforms with all necessary tools.",

        features: [
          {
            title: "Management System",
            description: "Easy-to-use panel for publishing and managing content.",
          },
          {
            title: "Categories & Tags",
            description: "Efficient content organization.",
          },
          {
            title: "Comments",
            description: "Comment system with moderation.",
          },
          {
            title: "Newsletter",
            description: "Integration with email marketing tools.",
          },
          {
            title: "SEO Optimization",
            description: "Metadata, friendly URLs, and optimized structure.",
          },
          {
            title: "Responsive Design",
            description: "Perfect experience on all devices.",
          },
          {
            title: "Speed",
            description: "Fast loading for better experience and SEO.",
          },
          {
            title: "Social Media",
            description: "Integration for sharing on social networks.",
          },
        ],
      },

      plansSection: {
        title: "Choose the Right Plan",

        description: "All of our plans follow the same proven development process. The difference lies in the level of customization, features, and integrations included in each option.",
      },

      seo: {
        title: "Blogs & Digital Media | SatCore Solutions",

        description: "Design and development of professional blogs and digital media platforms for your content strategy.",
        keywords: [
          "blog",
          "digital media",
          "content publishing",
          "cms",
          "content marketing",
          "nextjs",
        ],
      },
    },

    pt: {
      title: "Blogs e Mídia Digital",

      subtitle: "Plataformas de conteúdo para sua marca",

      description: "Criamos blogs e plataformas de mídia digital que permitem publicar conteúdo de forma eficiente. Cada projeto é diseñado para atrair leitores, melhorar seu SEO e construir uma comunidade engajada autour de sua marca.",

      overview: {
        title: "O que é um Blog ou Plataforma de Mídia Digital?",

        description: "Um blog ou plataforma de mídia digital é um espaço onde você pode publicar artigos, notícias e conteúdo multimídia. Foi diseñado para atrair audiência, melhorar o posicionamento em buscadores e estabelecer sua autoridade em sua indústria.",

        image: "/images/subservices/blogs-and-digital-media/blog.png",

        imageAlt: "Blog profissional",

        useCases: [
          "Blog corporativo",
          "Revista digital",
          "Portal de notícias",
          "Conteúdo educativo",
          "Blog pessoal ou profissional",
        ],
      },

      workflow: {
        badge: "Nosso Processo",

        title: "Como Desenvolvemos seu Blog",

        description: "Criamos plataformas de conteúdo otimizadas para atrair e reter audiência.",

        steps: [
          {
            title: "Planejamento",
            description: "Definimos a estratégia de conteúdo e estrutura do site.",
          },
          {
            title: "Design",
            description: "Criamos um design que facilita a leitura e navegação.",
          },
          {
            title: "Desenvolvimento",
            description: "Implementamos a plataforma com sistema de gestão de conteúdo.",
          },
          {
            title: "Configuração SEO",
            description: "Otimizamos para motores de busca e redes sociais.",
          },
          {
            title: "Lançamento",
            description: "Publicamos e configuramos ferramentas analíticas.",
          },
        ],
      },

      useCases: {
        title: "Quando Você Precisa de um Blog?",

        description: "Um blog é essencial para qualquer estratégia de marketing de conteúdo eficaz.",

        useCases: [
          {
            title: "Marketing de Conteúdo",
            description: "Crie conteúdo valioso que atraia e engaje sua audiência.",
          },
          {
            title: "SEO",
            description: "Melhore seu posicionamento em motores de busca.",
          },
          {
            title: "Autoridade",
            description: "Estabeleça sua marca como especialista em sua indústria.",
          },
          {
            title: "Comunidade",
            description: "Construa uma comunidade вокруг sua marca.",
          },
          {
            title: "Conversão",
            description: "Converta leitores em leads e clientes.",
          },
          {
            title: "Tráfego",
            description: "Gere tráfego orgânico constante para seu site.",
          },
        ],
      },

      features: {
        title: "O Que Está Incluído?",

        description: "Criamos blogs e plataformas de mídia completos com todas as ferramentas necessárias.",

        features: [
          {
            title: "Sistema de Gestão",
            description: "Painel fácil de usar para publicar e gerenciar conteúdo.",
          },
          {
            title: "Categorias e Tags",
            description: "Organização eficiente do conteúdo.",
          },
          {
            title: "Comentários",
            description: "Sistema de comentários com moderação.",
          },
          {
            title: "Newsletter",
            description: "Integração com ferramentas de email marketing.",
          },
          {
            title: "Otimização SEO",
            description: "Metadados, URLs amigáveis e estrutura otimizada.",
          },
          {
            title: "Design Responsivo",
            description: "Experiência perfeita em todos os dispositivos.",
          },
          {
            title: "Velocidade",
            description: "Carregamento rápido para melhor experiência e SEO.",
          },
          {
            title: "Redes Sociais",
            description: "Integração para compartilhar em redes sociais.",
          },
        ],
      },

      plansSection: {
        title: "Escolha o Plano Ideal",

        description: "Todos os nossos planos seguem a mesma metodologia de desenvolvimento. A diferença está no nível de personalização, funcionalidades e integrações incluídas em cada opção.",
      },

      seo: {
        title: "Blogs e Mídia Digital | SatCore Solutions",

        description: "Design e desenvolvimento de blogs profissionais e plataformas de mídia digital para sua estratégia de conteúdo.",
        keywords: [
          "blog",
          "mídia digital",
          "publicação de conteúdo",
          "cms",
          "marketing de conteúdo",
          "nextjs",
        ],
      },
    },
  },
  plans: []
};