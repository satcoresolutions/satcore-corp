import type {
  ServiceDetail,
} from "@/types/service-detail.types";

import {
  softwarePlans,
} from "@/data/plans/software/landing-pages";

export const professionalPortfoliosDetail: ServiceDetail = {
  core: {
    id: "SRV-PP",

    slug: "professional-portfolios",

    name: "Professional Portfolios",

    pillar: "software",

    icon: "briefcase",

    heroImage: "/images/services/software/professional-portfolios/hero/hero.png",

    plans: [],
  },

  translations: {
    es: {
      title: "Portafolios Profesionales",

      subtitle: "展示 tu trabajo de manera impactante",

      description: "Creamos portafolios profesionales que muestran tu trabajo de manera visual y atractiva. Desde portfolios para diseñadores hasta profesionales independientes, cada proyecto está diseñado para impresionar y convertir.",

      overview: {
        title: "¿Qué es un Portafolio Profesional?",

        description: "Un portafolio profesional es un sitio web que展示 tu trabajo, proyectos y habilidades. Es esencial para demostrar tu experiencia y atraer clientes o empleadores potenciales.",

        image: "/images/subservices/professional-portfolios/portfolio.png",

        imageAlt: "Portafolio profesional",

        useCases: [
          "Portafolio de diseñadores",
          "Portafolio de fotografía",
          "Portafolio de arquitectos",
          "Portafolio de escritores",
          "Portafolio personal",
        ],
      },

      workflow: {
        badge: "Metodología",

        title: "¿Cómo desarrollamos tu Portafolio?",

        description: "Creamos portafolios que muestran lo mejor de tu trabajo.",

        steps: [
          {
            title: "Análisis",
            description: "Estudiamos tu trabajo y objetivo profesional."
          },
          {
            title: "Diseño",
            description: "Creamos un diseño que destaca tus proyectos."
          },
          {
            title: "Desarrollo",
            description: "Implementamos el portafolio con galerías y animaciones."
          },
          {
            title: "Contenido",
            description: "Organizamos y mostramos tu trabajo."
          },
          {
            title: "Publicación",
            description: "Publicamos y optimizamos para búsquedas."
          },
        ],
      },

      useCases: {
        title: "¿Cuándo necesitas un Portafolio?",

        description: "Todo profesional necesita un portafolio para mostrar su trabajo.",

        useCases: [
          {
            title: "Credibilidad",
            description: "Demuestra tu experiencia y habilidades."
          },
          {
            title: "Visibilidad",
            description: "Sé encontrado por clientes potenciales."
          },
          {
            title: "Primera Impresión",
            description: "Crea una impresión profesional duradera."
          },
          {
            title: "Conversión",
            description: "Convierte visitantes en clientes."
          },
          {
            title: "Diferenciación",
            description: "Destaca sobre otros profesionales."
          },
          {
            title: "Actualización",
            description: "Mantén tu trabajo actualizado y accesible."
          },
        ],
      },

      features: {
        title: "¿Qué incluye nuestro servicio?",

        description: "Creamos portafolios profesionales con impacto visual.",

        features: [
          {
            title: "Diseño Visual",
            description: "Diseño atractivo que destaca tu trabajo."
          },
          {
            title: "Galerías",
            description: "展示 de proyectos con imágenes de alta calidad."
          },
          {
            title: "Caso de Estudio",
            description: "Páginas detalladas por proyecto."
          },
          {
            title: "Información de Contacto",
            description: "Formulario y datos de contacto claros."
          },
          {
            title: "Blog",
            description: "Espacio para compartir conocimientos."
          },
          {
            title: "Optimización SEO",
            description: "Posicionamiento en búsquedas."
          },
          {
            title: "Diseño Responsivo",
            description: "Perfecto en todos los dispositivos."
          },
          {
            title: "Velocidad",
            description: "Carga rápida para mejor experiencia."
          },
        ],
      },

      plansSection: {
        title: "Elige el plan ideal",

        description: "Todos nuestros planes utilizan la misma metodología de trabajo. La diferencia está en el nivel de personalización, funcionalidades e integraciones incluidas en cada uno.",
      },

      seo: {
        title: "Portafolios Profesionales | SatCore Solutions",

        description: "Desarrollo de portafolios profesionales para展示 tu trabajo.",
        keywords: [
          "portafolio",
          "portafolio profesional",
          "portfolio",
          "diseñador",
          "fotógrafo",
          "nextjs",
        ],
      },
    },

    en: {
      title: "Professional Portfolios",

      subtitle: "Showcase your work impressively",

      description: "We create professional portfolios that showcase your work in a visual and attractive way. From designer portfolios to independent professionals, each project is designed to impress and convert.",

      overview: {
        title: "What is a Professional Portfolio?",

        description: "A professional portfolio is a website that showcases your work, projects, and skills. It's essential to demonstrate your expertise and attract potential clients or employers.",

        image: "/images/subservices/professional-portfolios/portfolio.png",

        imageAlt: "Professional portfolio",

        useCases: [
          "Designer portfolios",
          "Photography portfolios",
          "Architect portfolios",
          "Writer portfolios",
          "Personal portfolio",
        ],
      },

      workflow: {
        badge: "Our Process",

        title: "How We Build Your Portfolio",

        description: "We create portfolios that showcase your best work.",

        steps: [
          {
            title: "Analysis",
            description: "We study your work and professional goals.",
          },
          {
            title: "Design",
            description: "We create a design that highlights your projects.",
          },
          {
            title: "Development",
            description: "We implement the portfolio with galleries and animations.",
          },
          {
            title: "Content",
            description: "We organize and showcase your work.",
          },
          {
            title: "Publishing",
            description: "We publish and optimize for search.",
          },
        ],
      },

      useCases: {
        title: "When Do You Need a Portfolio?",

        description: "Every professional needs a portfolio to showcase their work.",

        useCases: [
          {
            title: "Credibility",
            description: "Demonstrate your expertise and skills.",
          },
          {
            title: "Visibility",
            description: "Be found by potential clients.",
          },
          {
            title: "First Impression",
            description: "Create a lasting professional impression.",
          },
          {
            title: "Conversion",
            description: "Convert visitors into clients.",
          },
          {
            title: "Differentiation",
            description: "Stand out from other professionals.",
          },
          {
            title: "Updates",
            description: "Keep your work current and accessible.",
          },
        ],
      },

      features: {
        title: "What's Included?",

        description: "We create professional portfolios with visual impact.",

        features: [
          {
            title: "Visual Design",
            description: "Attractive design that highlights your work.",
          },
          {
            title: "Galleries",
            description: "Project showcase with high-quality images.",
          },
          {
            title: "Case Studies",
            description: "Detailed pages per project.",
          },
          {
            title: "Contact Info",
            description: "Clear contact form and details.",
          },
          {
            title: "Blog",
            description: "Space to share knowledge.",
          },
          {
            title: "SEO Optimization",
            description: "Search engine positioning.",
          },
          {
            title: "Responsive Design",
            description: "Perfect on all devices.",
          },
          {
            title: "Speed",
            description: "Fast loading for better experience.",
          },
        ],
      },

      plansSection: {
        title: "Choose the Right Plan",

        description: "All of our plans follow the same proven development process. The difference lies in the level of customization, features, and integrations included in each option.",
      },

      seo: {
        title: "Professional Portfolios | SatCore Solutions",

        description: "Development of professional portfolios to showcase your work.",
        keywords: [
          "portfolio",
          "professional portfolio",
          "designer",
          "photographer",
          "nextjs",
        ],
      },
    },

    pt: {
      title: "Portfólios Profissionais",

      subtitle: "Mostre seu trabalho de forma impactante",

      description: "Criamos portfólios profissionais que mostram seu trabalho de forma visual e atraente. De portfólios de designers a profissionais independentes, cada projeto é diseñado para impressionar e converter.",

      overview: {
        title: "O que é um Portfólio Profissional?",

        description: "Um portfólio profissional é um site que mostra seu trabalho, projetos e habilidades. É essencial para demonstrar sua experiência e atrair clientes ou empregadores potenciais.",

        image: "/images/subservices/professional-portfolios/portfolio.png",

        imageAlt: "Portfólio profissional",

        useCases: [
          "Portfólio de designers",
          "Portfólio de fotografia",
          "Portfólio de arquitetos",
          "Portfólio de escritores",
          "Portfólio pessoal",
        ],
      },

      workflow: {
        badge: "Nosso Processo",

        title: "Como Desenvolvemos seu Portfólio",

        description: "Criamos portfólios que mostram o melhor do seu trabalho.",

        steps: [
          {
            title: "Análise",
            description: "Estudamos seu trabalho e objetivo profissional.",
          },
          {
            title: "Design",
            description: "Criamos um design que destaca seus projetos.",
          },
          {
            title: "Desenvolvimento",
            description: "Implementamos o portfólio com galerias e animações.",
          },
          {
            title: "Conteúdo",
            description: "Organizamos e mostramos seu trabalho.",
          },
          {
            title: "Publicação",
            description: "Publicamos e otimizamos para buscas.",
          },
        ],
      },

      useCases: {
        title: "Quando Você Precisa de um Portfólio?",

        description: "Todo profissional precisa de um portfólio para mostrar seu trabalho.",

        useCases: [
          {
            title: "Credibilidade",
            description: "Demonstre sua experiência e habilidades.",
          },
          {
            title: "Visibilidade",
            description: "Seja encontrado por clientes potenciais.",
          },
          {
            title: "Primeira Impressão",
            description: "Crie uma impressão profissional duradoura.",
          },
          {
            title: "Conversão",
            description: "Converta visitantes em clientes.",
          },
          {
            title: "Diferenciação",
            description: "Destaque-se de outros profissionais.",
          },
          {
            title: "Atualização",
            description: "Mantenha seu trabalho atualizado e acessível.",
          },
        ],
      },

      features: {
        title: "O Que Está Incluído?",

        description: "Criamos portfólios profissionais com impacto visual.",

        features: [
          {
            title: "Design Visual",
            description: "Design atraente que destaca seu trabalho.",
          },
          {
            title: "Galerias",
            description: "展示 de projetos com imagens de alta qualidade.",
          },
          {
            title: "Casos de Estudo",
            description: "Páginas detalhadas por projeto.",
          },
          {
            title: "Informações de Contato",
            description: "Formulário e dados de contato claros.",
          },
          {
            title: "Blog",
            description: "Espaço para compartilhar conhecimentos.",
          },
          {
            title: "Otimização SEO",
            description: "Posicionamento em buscas.",
          },
          {
            title: "Design Responsivo",
            description: "Perfeito em todos os dispositivos.",
          },
          {
            title: "Velocidade",
            description: "Carregamento rápido para melhor experiência.",
          },
        ],
      },

      plansSection: {
        title: "Escolha o Plano Ideal",

        description: "Todos os nossos planos seguem a mesma metodologia de desenvolvimento. A diferença está no nível de personalização, funcionalidades e integrações incluídas em cada opção.",
      },

      seo: {
        title: "Portfólios Profissionais | SatCore Solutions",

        description: "Desenvolvimento de portfólios profissionais para mostrar seu trabalho.",
        keywords: [
          "portfólio",
          "portfólio profissional",
          "designer",
          "fotógrafo",
          "nextjs",
        ],
      },
    },
  },
  plans: []
};