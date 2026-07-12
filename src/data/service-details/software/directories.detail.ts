import type {
  ServiceDetail,
} from "@/types/service-detail.types";

import {
  directories,
} from "@/data/plans/software/directories";

export const directoriesDetail: ServiceDetail = {
  core: {
    id: "SRV-DIR",

    slug: "directories",

    name: "Directories",

    pillar: "software",

    icon: "list",

    heroImage: "/images/services/software/hero/hero.png",

    plans: directories,
  },

  translations: {
    es: {
      title: "Directorios",

      subtitle: "Catálogos organizados de empresas y profesionales",

      description: "Creamos directorios online que conectan usuarios con negocios y profesionales. Cada directorio está optimizado para búsquedas, SEO y una experiencia de usuario que facilita encontrar lo que se necesita.",

      overview: {
        title: "¿Qué es un Directorio?",

        description: "Un directorio es una plataforma que organiza y muestra información de negocios, profesionales o servicios de manera categorizada. Permite a los usuarios buscar, filtrar y encontrar proveedores de servicios de forma eficiente.",

        image: "/images/subservices/software/directorios.png",

        imageAlt: "Directorio profesional",

        useCases: [
          "Directorio de empresas",
          "Directorio de profesionales",
          "Directorio de servicios",
          "Guías locales",
          "Directorios especializados por industria",
        ],
      },

      workflow: {
        badge: "Metodología",

        title: "¿Cómo desarrollamos tu Directorio?",

        description: "Creamos directorios optimizados para búsqueda y descubrimiento.",

        steps: [
          {
            title: "Planificación",
            description: "Definimos estructura, categorías y funcionalidades."
          },
          {
            title: "Diseño",
            description: "Creamos una interfaz de navegación intuitiva."
          },
          {
            title: "Desarrollo",
            description: "Implementamos el directorio con sistema de búsqueda avanzada."
          },
          {
            title: "Gestión de Contenido",
            description: "Sistema para que negocios reclamen y actualicen su perfil."
          },
          {
            title: "SEO",
            description: "Optimización para aparecer en búsquedas locales."
          },
        ],
      },

      useCases: {
        title: "¿Cuándo necesitas un Directorio?",

        description: "Los directorios son ideales para conectar proveedores con consumidores.",

        useCases: [
          {
            title: "Visibilidad",
            description: "Ayuda a negocios a ser encontrados por clientes potenciales."
          },
          {
            title: "SEO Local",
            description: "Mejora el posicionamiento en búsquedas locales."
          },
          {
            title: "Credibilidad",
            description: "Los negocios listados ganan credibilidad."
          },
          {
            title: "Comparación",
            description: "Usuarios pueden comparar opciones fácilmente."
          },
          {
            title: "Generación de Leads",
            description: "Conecta directamente negocios con clientes interesados."
          },
          {
            title: "Revenue",
            description: "Monetiza mediante listados destacados y publicidad."
          },
        ],
      },

      features: {
        title: "¿Qué incluye nuestro servicio?",

        description: "Creamos directorios completos con todas las funcionalidades necesarias.",

        features: [
          {
            title: "Búsqueda Avanzada",
            description: "Filtros por ubicación, categoría, rating y más."
          },
          {
            title: "Perfiles de Negocio",
            description: "Páginas detalladas con información, fotos y contactos."
          },
          {
            title: "Sistema de Reseñas",
            description: "Reseñas y ratings de usuarios."
          },
          {
            title: "Mapas Integrados",
            description: "Visualización de ubicación en Google Maps."
          },
          {
            title: "Claim de Perfiles",
            description: "Sistema para que negocios reclamen su perfil."
          },
          {
            title: "Listados Destacados",
            description: "Opciones premium para mayor visibilidad."
          },
          {
            title: "Diseño Responsivo",
            description: "Perfecto en todos los dispositivos."
          },
          {
            title: "SEO Local",
            description: "Optimización para búsquedas locales."
          },
        ],
      },

      plansSection: {
        title: "Elige el plan ideal",

        description: "Todos nuestros planes utilizan la misma metodología de trabajo. La diferencia está en el nivel de personalización, funcionalidades e integraciones incluidas en cada uno.",
      },

      seo: {
        title: "Directorios | SatCore Solutions",

        description: "Desarrollo de directorios online para conectar negocios con clientes.",
        keywords: [
          "directorio",
          "directorio de empresas",
          "directorio de profesionales",
          "seo local",
          "nextjs",
        ],
      },
    },

    en: {
      title: "Directories",

      subtitle: "Organized catalogs of businesses and professionals",

      description: "We create online directories that connect users with businesses and professionals. Each directory is optimized for searches, SEO, and a user experience that makes finding what they need easy.",

      overview: {
        title: "What is a Directory?",

        description: "A directory is a platform that organizes and displays information about businesses, professionals, or services in a categorized way. It allows users to search, filter, and find service providers efficiently.",

        image: "/images/subservices/directories/directory.png",

        imageAlt: "Professional directory",

        useCases: [
          "Business directory",
          "Professionals directory",
          "Services directory",
          "Local guides",
          "Industry-specific directories",
        ],
      },

      workflow: {
        badge: "Our Process",

        title: "How We Build Your Directory",

        description: "We create directories optimized for search and discovery.",

        steps: [
          {
            title: "Planning",
            description: "We define structure, categories, and functionalities.",
          },
          {
            title: "Design",
            description: "We create an intuitive navigation interface.",
          },
          {
            title: "Development",
            description: "We implement the directory with advanced search system.",
          },
          {
            title: "Content Management",
            description: "System for businesses to claim and update their profile.",
          },
          {
            title: "SEO",
            description: "Optimization to appear in local searches.",
          },
        ],
      },

      useCases: {
        title: "When Do You Need a Directory?",

        description: "Directories are ideal for connecting providers with consumers.",

        useCases: [
          {
            title: "Visibility",
            description: "Helps businesses be found by potential customers.",
          },
          {
            title: "Local SEO",
            description: "Improves positioning in local searches.",
          },
          {
            title: "Credibility",
            description: "Listed businesses gain credibility.",
          },
          {
            title: "Comparison",
            description: "Users can easily compare options.",
          },
          {
            title: "Lead Generation",
            description: "Directly connects businesses with interested customers.",
          },
          {
            title: "Revenue",
            description: "Monetize through featured listings and advertising.",
          },
        ],
      },

      features: {
        title: "What's Included?",

        description: "We create complete directories with all necessary functionalities.",

        features: [
          {
            title: "Advanced Search",
            description: "Filters by location, category, rating, and more.",
          },
          {
            title: "Business Profiles",
            description: "Detailed pages with information, photos, and contacts.",
          },
          {
            title: "Review System",
            description: "User reviews and ratings.",
          },
          {
            title: "Integrated Maps",
            description: "Location display on Google Maps.",
          },
          {
            title: "Profile Claiming",
            description: "System for businesses to claim their profile.",
          },
          {
            title: "Featured Listings",
            description: "Premium options for greater visibility.",
          },
          {
            title: "Responsive Design",
            description: "Perfect on all devices.",
          },
          {
            title: "Local SEO",
            description: "Optimization for local searches.",
          },
        ],
      },

      plansSection: {
        title: "Choose the Right Plan",

        description: "All of our plans follow the same proven development process. The difference lies in the level of customization, features, and integrations included in each option.",
      },

      seo: {
        title: "Directories | SatCore Solutions",

        description: "Development of online directories to connect businesses with customers.",
        keywords: [
          "directory",
          "business directory",
          "professionals directory",
          "local seo",
          "nextjs",
        ],
      },
    },

    pt: {
      title: "Diretórios",

      subtitle: "Catálogos organizados de empresas e profissionais",

      description: "Criamos diretórios online que conectam usuários com negócios e profissionais. Cada diretório é otimizado para buscas, SEO e uma experiência do usuário que facilita encontrar o que precisa.",

      overview: {
        title: "O que é um Diretório?",

        description: "Um diretório é uma plataforma que organiza e exibe informações de negócios, profissionais ou serviços de forma categorizada. Permite que usuários busquem, filtrem e encontrem prestadores de serviços de forma eficiente.",

        image: "/images/subservices/directories/directory.png",

        imageAlt: "Diretório profissional",

        useCases: [
          "Diretório de empresas",
          "Diretório de profissionais",
          "Diretório de serviços",
          "Guias locais",
          "Diretórios especializados por indústria",
        ],
      },

      workflow: {
        badge: "Nosso Processo",

        title: "Como Desenvolvemos seu Diretório",

        description: "Criamos diretórios otimizados para busca e descoberta.",

        steps: [
          {
            title: "Planejamento",
            description: "Definimos estrutura, categorias e funcionalidades.",
          },
          {
            title: "Design",
            description: "Criamos uma interface de navegação intuitiva.",
          },
          {
            title: "Desenvolvimento",
            description: "Implementamos o diretório com sistema de busca avançada.",
          },
          {
            title: "Gestão de Conteúdo",
            description: "Sistema para negócios reclamarem e atualizarem seu perfil.",
          },
          {
            title: "SEO",
            description: "Otimização para aparecer em buscas locais.",
          },
        ],
      },

      useCases: {
        title: "Quando Você Precisa de um Diretório?",

        description: "Os diretórios são ideais para conectar fornecedores com consumidores.",

        useCases: [
          {
            title: "Visibilidade",
            description: "Ajuda negócios a serem encontrados por clientes potenciais.",
          },
          {
            title: "SEO Local",
            description: "Melhora o posicionamento em buscas locais.",
          },
          {
            title: "Credibilidade",
            description: "Negócios listados ganham credibilidade.",
          },
          {
            title: "Comparação",
            description: "Usuários podem comparar opções facilmente.",
          },
          {
            title: "Geração de Leads",
            description: "Conecta diretamente negócios com clientes interessados.",
          },
          {
            title: "Receita",
            description: "Monetize através de listagens em destaque e publicidade.",
          },
        ],
      },

      features: {
        title: "O Que Está Incluído?",

        description: "Criamos diretórios completos com todas as funcionalidades necessárias.",

        features: [
          {
            title: "Busca Avançada",
            description: "Filtros por localização, categoria, rating e mais.",
          },
          {
            title: "Perfis de Negócio",
            description: "Páginas detalhadas com informações, fotos e contatos.",
          },
          {
            title: "Sistema de Avaliações",
            description: "Avaliações e ratings de usuários.",
          },
          {
            title: "Mapas Integrados",
            description: "Visualização de localização no Google Maps.",
          },
          {
            title: "Claim de Perfis",
            description: "Sistema para negócios reclamarem seu perfil.",
          },
          {
            title: "Listagens em Destaque",
            description: "Opções premium para maior visibilidade.",
          },
          {
            title: "Design Responsivo",
            description: "Perfeito em todos os dispositivos.",
          },
          {
            title: "SEO Local",
            description: "Otimização para buscas locais.",
          },
        ],
      },

      plansSection: {
        title: "Escolha o Plano Ideal",

        description: "Todos os nossos planos seguem a mesma metodologia de desenvolvimento. A diferença está no nível de personalização, funcionalidades e integrações incluídas em cada opção.",
      },

      seo: {
        title: "Diretórios | SatCore Solutions",

        description: "Desenvolvimento de diretórios online para conectar negócios com clientes.",
        keywords: [
          "diretório",
          "diretório de empresas",
          "diretório de profissionais",
          "seo local",
          "nextjs",
        ],
      },
    },
  },
  plans: []
};