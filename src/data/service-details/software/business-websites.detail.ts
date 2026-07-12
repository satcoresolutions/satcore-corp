import type {
  ServiceDetail,
} from "@/types/service-detail.types";

import {
  businessWebsites,
} from "@/data/plans/software/business-websites";

export const businessWebsitesDetail: ServiceDetail = {
  core: {
    id: "SRV-BW",

    slug: "business-websites",

    name: "Business Websites",

    pillar: "software",

    icon: "briefcase",

    heroImage: "/images/services/software/hero/hero.png",

    plans: businessWebsites,
  },

  translations: {
    es: {
      title: "Sitios Web Corporativos",

      subtitle: "Presencia profesional que transmite confianza",

      description: "Desarrollamos sitios web corporativos que representan profesionalmente tu empresa en el entorno digital. Cada proyecto combina diseño elegante, funcionalidad robusta y una estructura que facilita el contacto y la conversión de visitantes en clientes.",

      overview: {
        title: "¿Qué es un Sitio Web Corporativo?",

        description: "Un sitio web corporativo es la carta de presentación digital de tu empresa. Incluye información sobre la compañía, servicios, equipo, testimonios y datos de contacto. Está diseñado para generar confianza, atraer clientes potenciales y fortalecer la imagen de marca.",

        image: "/images/subservices/software/sitios-web.png",

        imageAlt: "Sitio web corporativo profesional",

        useCases: [
          "Presencia digital de empresas",
          "Sitios de servicios profesionales",
          "Portales corporativos",
          "Sitios para startups",
          "Web de pequeñas y medianas empresas",
        ],
      },

      workflow: {
        badge: "Metodología",

        title: "¿Cómo desarrollamos tu Sitio Web Corporativo?",

        description: "Seguimos un proceso estructurado para crear sitios web que representan efectivamente tu empresa.",

        steps: [
          {
            title: "Descubrimiento",
            description: "Analizamos tu empresa, valores, propuesta de valor y público objetivo."
          },
          {
            title: "Arquitectura de Información",
            description: "Definimos la estructura del sitio, las secciones clave y el flujo de navegación."
          },
          {
            title: "Diseño Visual",
            description: "Creamos un diseño profesional que refleja la identidad de tu marca."
          },
          {
            title: "Desarrollo",
            description: "Implementamos el sitio con tecnologías modernas, optimizado para rendimiento y SEO."
          },
          {
            title: "Lanzamiento",
            description: "Publicamos el sitio, configuramos analytics y entregamos las credenciales."
          },
        ],
      },

      useCases: {
        title: "¿Cuándo necesitas un Sitio Web Corporativo?",

        description: "Todo negocio moderno necesita una presencia digital profesional para competir y atraer clientes.",

        useCases: [
          {
            title: "Credibilidad",
            description: "Genera confianza en clientes potenciales con una presencia profesional en línea."
          },
          {
            title: "Información de Contacto",
            description: "Facilita que tus clientes te encuentren con datos de contacto claros y ubicación."
          },
          {
            title: "Generación de Leads",
            description: "Captura clientes potenciales a través de formularios y llamadas a la acción."
          },
          {
            title: " Marketing de Contenidos",
            description: "Comparte blog, noticias y actualizaciones para mantener engagement con clientes."
          },
          {
            title: "Diferenciación",
            description: "Destaca sobre la competencia con un diseño único y profesional."
          },
          {
            title: "Accesibilidad 24/7",
            description: "Tu negocio disponible las 24 horas para clientes potenciales en cualquier momento."
          },
        ],
      },

      features: {
        title: "¿Qué incluye nuestro servicio?",

        description: "Creamos sitios web corporativos completos con todo lo necesario para tu presencia digital.",

        features: [
          {
            title: "Diseño Profesional",
            description: "Interfaz diseñada para transmitir profesionalismo y confianza."
          },
          {
            title: "Sección Sobre Nosotros",
            description: "Espacio para presentar tu empresa, historia, valores y equipo."
          },
          {
            title: "Portafolio de Servicios",
            description: "展示你的服务with detailed descriptions and pricing options."
          },
          {
            title: "Formulario de Contacto",
            description: "Captura de leads con formularios optimizados y validación de datos."
          },
          {
            title: "Integración con Maps",
            description: "Ubicación visual de tu negocio con Google Maps integrado."
          },
          {
            title: "Blog o Noticias",
            description: "Sección para compartir contenido relevante y mejorar SEO."
          },
          {
            title: "Optimización SEO",
            description: "Posicionamiento en motores de búsqueda para mayor visibilidad."
          },
          {
            title: "Diseño Responsivo",
            description: "Experiencia óptima en todos los dispositivos y tamaños de pantalla."
          },
        ],
      },

      plansSection: {
        title: "Elige el plan ideal",

        description: "Todos nuestros planes utilizan la misma metodología de trabajo. La diferencia está en el nivel de personalización, funcionalidades e integraciones incluidas en cada uno.",
      },

      seo: {
        title: "Sitios Web Corporativos | SatCore Solutions",

        description: "Diseño y desarrollo de sitios web corporativos profesionales que transmiten confianza y generan resultados.",
        keywords: [
          "sitio web corporativo",
          "página web empresa",
          "sitio web profesional",
          "desarrollo web",
          "nextjs",
          "presencia digital",
        ],
      },
    },

    en: {
      title: "Corporate Websites",

      subtitle: "Professional presence that builds trust",

      description: "We develop corporate websites that professionally represent your company in the digital environment. Each project combines elegant design, robust functionality, and a structure that facilitates contact and conversion of visitors into customers.",

      overview: {
        title: "What is a Corporate Website?",

        description: "A corporate website is your company's digital business card. It includes information about the company, services, team, testimonials, and contact details. It's designed to generate trust, attract potential customers, and strengthen brand image.",

        image: "/images/subservices/business-websites/business-website.png",

        imageAlt: "Professional corporate website",

        useCases: [
          "Digital presence for businesses",
          "Professional services websites",
          "Corporate portals",
          "Startup websites",
          "Small and medium business websites",
        ],
      },

      workflow: {
        badge: "Our Process",

        title: "How We Build Your Corporate Website",

        description: "We follow a structured process to create websites that effectively represent your company.",

        steps: [
          {
            title: "Discovery",
            description: "We analyze your company, values, value proposition, and target audience.",
          },
          {
            title: "Information Architecture",
            description: "We define the site structure, key sections, and navigation flow.",
          },
          {
            title: "Visual Design",
            description: "We create a professional design that reflects your brand identity.",
          },
          {
            title: "Development",
            description: "We implement the site with modern technologies, optimized for performance and SEO.",
          },
          {
            title: "Launch",
            description: "We publish the site, configure analytics, and deliver credentials.",
          },
        ],
      },

      useCases: {
        title: "When Do You Need a Corporate Website?",

        description: "Every modern business needs a professional digital presence to compete and attract customers.",

        useCases: [
          {
            title: "Credibility",
            description: "Generate trust with potential customers through a professional online presence.",
          },
          {
            title: "Contact Information",
            description: "Make it easy for customers to find you with clear contact details and location.",
          },
          {
            title: "Lead Generation",
            description: "Capture potential customers through optimized forms and calls to action.",
          },
          {
            title: "Content Marketing",
            description: "Share blog posts, news, and updates to maintain customer engagement.",
          },
          {
            title: "Differentiation",
            description: "Stand out from the competition with a unique, professional design.",
          },
          {
            title: "24/7 Accessibility",
            description: "Your business available 24 hours for potential customers at any time.",
          },
        ],
      },

      features: {
        title: "What's Included?",

        description: "We create complete corporate websites with everything you need for your digital presence.",

        features: [
          {
            title: "Professional Design",
            description: "Interface designed to convey professionalism and trust.",
          },
          {
            title: "About Us Section",
            description: "Space to present your company, history, values, and team.",
          },
          {
            title: "Services Portfolio",
            description: "Showcase your services with detailed descriptions and pricing options.",
          },
          {
            title: "Contact Form",
            description: "Lead capture with optimized forms and data validation.",
          },
          {
            title: "Maps Integration",
            description: "Visual location of your business with integrated Google Maps.",
          },
          {
            title: "Blog or News",
            description: "Section to share relevant content and improve SEO.",
          },
          {
            title: "SEO Optimization",
            description: "Search engine positioning for greater visibility.",
          },
          {
            title: "Responsive Design",
            description: "Optimal experience on all devices and screen sizes.",
          },
        ],
      },

      plansSection: {
        title: "Choose the Right Plan",

        description: "All of our plans follow the same proven development process. The difference lies in the level of customization, features, and integrations included in each option.",
      },

      seo: {
        title: "Corporate Websites | SatCore Solutions",

        description: "Design and development of professional corporate websites that build trust and generate results.",
        keywords: [
          "corporate website",
          "business website",
          "company website",
          "web development",
          "nextjs",
          "digital presence",
        ],
      },
    },

    pt: {
      title: "Sites Corporativos",

      subtitle: "Presença profissional que transmite confiança",

      description: "Desenvolvemos sites corporativos que representam profissionalmente sua empresa no ambiente digital. Cada projeto combina design elegante, funcionalidade robusta e uma estrutura que facilita o contato e a conversão de visitantes em clientes.",

      overview: {
        title: "O que é um Site Corporativo?",

        description: "Um site corporativo é o cartão de visita digital da sua empresa. Inclui informações sobre a empresa, serviços, equipe, depoimentos e dados de contato. Foi diseñado para gerar confiança, atrair clientes potenciais e fortalecer a imagem da marca.",

        image: "/images/subservices/business-websites/business-website.png",

        imageAlt: "Site corporativo profissional",

        useCases: [
          "Presença digital de empresas",
          "Sites de serviços profissionais",
          "Portais corporativos",
          "Sites para startups",
          "Sites para pequenas e médias empresas",
        ],
      },

      workflow: {
        badge: "Nosso Processo",

        title: "Como Desenvolvemos seu Site Corporativo",

        description: "Seguimos um processo estruturado para criar sites que representam efetivamente sua empresa.",

        steps: [
          {
            title: "Descoberta",
            description: "Analisamos sua empresa, valores, proposta de valor e público-alvo.",
          },
          {
            title: "Arquitetura da Informação",
            description: "Definimos a estrutura do site, as seções-chave e o fluxo de navegação.",
          },
          {
            title: "Design Visual",
            description: "Criamos um design profissional que reflete a identidade da sua marca.",
          },
          {
            title: "Desenvolvimento",
            description: "Implementamos o site com tecnologias modernas, otimizado para desempenho e SEO.",
          },
          {
            title: "Lançamento",
            description: "Publicamos o site, configuramos analytics e entregamos as credenciais.",
          },
        ],
      },

      useCases: {
        title: "Quando Você Precisa de um Site Corporativo?",

        description: "Todo negócio moderno precisa de uma presença digital profissional para competir e atrair clientes.",

        useCases: [
          {
            title: "Credibilidade",
            description: "Gere confiança em clientes potenciais com uma presença profissional online.",
          },
          {
            title: "Informações de Contato",
            description: "Facilite que seus clientes te encontrem com dados de contato claros e localização.",
          },
          {
            title: "Geração de Leads",
            description: "Capture clientes potenciais através de formulários e chamadas para ação otimizados.",
          },
          {
            title: "Marketing de Conteúdo",
            description: "Compartilhe blog, notícias e atualizações para manter engajamento com clientes.",
          },
          {
            title: "Diferenciação",
            description: "Destaque-se da concorrência com um design único e profissional.",
          },
          {
            title: "Acessibilidade 24/7",
            description: "Seu negócio disponível 24 horas para clientes potenciais a qualquer momento.",
          },
        ],
      },

      features: {
        title: "O Que Está Incluído?",

        description: "Criamos sites corporativos completos com tudo o que você precisa para sua presença digital.",

        features: [
          {
            title: "Design Profissional",
            description: "Interface diseñada para transmitir profissionalismo e confiança.",
          },
          {
            title: "Seção Sobre Nós",
            description: "Espaço para apresentar sua empresa, história, valores e equipe.",
          },
          {
            title: "Portfólio de Serviços",
            description: "Mostre seus serviços com descrições detalhadas e opções de preços.",
          },
          {
            title: "Formulário de Contato",
            description: "Captura de leads com formulários otimizados e validação de dados.",
          },
          {
            title: "Integração com Maps",
            description: "Localização visual do seu negócio com Google Maps integrado.",
          },
          {
            title: "Blog ou Notícias",
            description: "Seção para compartilhar conteúdo relevante e melhorar SEO.",
          },
          {
            title: "Otimização SEO",
            description: "Posicionamento em motores de busca para maior visibilidade.",
          },
          {
            title: "Design Responsivo",
            description: "Experiência ótima em todos os dispositivos e tamanhos de tela.",
          },
        ],
      },

      plansSection: {
        title: "Escolha o Plano Ideal",

        description: "Todos os nossos planos seguem a mesma metodologia de desenvolvimento. A diferença está no nível de personalização, funcionalidades e integrações incluídas em cada opção.",
      },

      seo: {
        title: "Sites Corporativos | SatCore Solutions",

        description: "Design e desenvolvimento de sites corporativos profissionais que transmitem confiança e geram resultados.",
        keywords: [
          "site corporativo",
          "site empresarial",
          "site de empresa",
          "desenvolvimento web",
          "nextjs",
          "presença digital",
        ],
      },
    },
  },
  plans: []
};