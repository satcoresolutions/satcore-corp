import type {
  ServiceDetail,
} from "@/types/service-detail.types";

import {
  portals,
} from "@/data/plans/software/system-portals";

export const systemPortalsDetail: ServiceDetail = {
  core: {
    id: "SRV-SP",
    
    slug: "system-portals",
    
    name: "System Portals",
    
    pillar: "software",
    
    icon: "layout",
    
    heroImage: "/images/services/software/hero/hero.png",
    
    plans: portals,
  },

  translations: {
    es: {
      title: "Portales de Sistema",

      subtitle: "Centraliza el acceso a información y servicios",

      description:
        "Desarrollamos portales digitales personalizados para clientes, empleados, proveedores y organizaciones que necesitan centralizar información, servicios, procesos y herramientas en un único entorno seguro.",

      overview: {
        title: "¿Qué es un Portal de Sistema?",

        description:
          "Un portal de sistema es una plataforma web que centraliza información, servicios, documentos y funcionalidades para un grupo específico de usuarios. Permite ofrecer experiencias personalizadas según el tipo de usuario y sus permisos.",

        image:
          "/images/subservices/software/system-portals.png",

        imageAlt:
          "Portal de sistema para gestión de usuarios, información y servicios",

        useCases: [
          "Portales de clientes",
          "Portales de empleados",
          "Portales de proveedores",
          "Acceso a documentos",
          "Gestión de servicios",
          "Comunicación interna",
        ],
      },

      workflow: {
        badge: "Metodología",

        title: "¿Cómo desarrollamos tu Portal?",

        description:
          "Diseñamos y desarrollamos portales personalizados según los usuarios, procesos y necesidades de cada organización.",

        steps: [
          {
            title: "Análisis",
            description:
              "Identificamos los tipos de usuarios, procesos, información y servicios que tendrá el portal.",
          },
          {
            title: "Arquitectura",
            description:
              "Definimos la estructura de navegación, permisos, módulos y organización de la información.",
          },
          {
            title: "Diseño",
            description:
              "Diseñamos una interfaz clara y adaptada a las necesidades de cada tipo de usuario.",
          },
          {
            title: "Desarrollo",
            description:
              "Construimos el portal utilizando tecnologías modernas y componentes reutilizables.",
          },
          {
            title: "Integración y pruebas",
            description:
              "Integramos servicios externos y validamos permisos, funcionalidades, seguridad y experiencia de usuario.",
          },
        ],
      },

      useCases: {
        title: "¿Cuándo necesitas un Portal de Sistema?",

        description:
          "Los portales son ideales para organizaciones que necesitan ofrecer acceso controlado a información, servicios o procesos digitales.",

        useCases: [
          {
            title: "Clientes",
            description:
              "Ofrece a tus clientes acceso personalizado a servicios, documentos, solicitudes e información.",
          },
          {
            title: "Empleados",
            description:
              "Centraliza herramientas, información, documentos y procesos internos para colaboradores.",
          },
          {
            title: "Proveedores",
            description:
              "Facilita la gestión de proveedores, documentación, solicitudes y procesos de colaboración.",
          },
          {
            title: "Servicios",
            description:
              "Permite gestionar solicitudes, trámites y servicios desde un único entorno digital.",
          },
          {
            title: "Información",
            description:
              "Centraliza documentos, recursos y contenidos relevantes para cada grupo de usuarios.",
          },
          {
            title: "Acceso personalizado",
            description:
              "Presenta diferentes funcionalidades e información según el rol y permisos de cada usuario.",
          },
        ],
      },

      features: {
        title: "¿Qué incluye nuestro servicio?",

        description:
          "Creamos portales completos y adaptados a las necesidades de cada organización.",

        features: [
          {
            title: "Autenticación de Usuarios",
            description:
              "Sistema de acceso seguro para usuarios registrados.",
          },
          {
            title: "Roles y Permisos",
            description:
              "Controla qué información y funcionalidades puede utilizar cada usuario.",
          },
          {
            title: "Panel Personalizado",
            description:
              "Cada usuario puede acceder a una experiencia adaptada a su rol.",
          },
          {
            title: "Gestión de Documentos",
            description:
              "Permite consultar y gestionar documentos y recursos digitales.",
          },
          {
            title: "Módulos Personalizados",
            description:
              "Integramos las funcionalidades específicas que necesita tu organización.",
          },
          {
            title: "Formularios y Solicitudes",
            description:
              "Permite gestionar solicitudes, registros y procesos digitales.",
          },
          {
            title: "Diseño Responsive",
            description:
              "El portal funciona correctamente en dispositivos móviles, tablets y computadores.",
          },
          {
            title: "Integraciones",
            description:
              "Conectamos el portal con APIs, servicios y sistemas existentes.",
          },
        ],
      },

      plansSection: {
        title: "Elige el Portal Ideal",

        description:
          "Selecciona el tipo de portal que mejor se adapte a tu organización. Cada solución puede personalizarse según los usuarios, procesos, funcionalidades e integraciones requeridas.",
      },

      seo: {
        title: "Portales de Sistema | SatCore Solutions",

        description:
          "Desarrollo de portales digitales para clientes, empleados, proveedores y organizaciones.",

        keywords: [
          "portal web",
          "portal de clientes",
          "portal de empleados",
          "portal de proveedores",
          "sistema de portales",
          "Next.js",
          "TypeScript",
        ],
      },
    },

    en: {
      title: "System Portals",

      subtitle: "Centralize access to information and services",

      description:
        "We develop customized digital portals for customers, employees, suppliers, and organizations that need to centralize information, services, processes, and tools within a secure environment.",

      overview: {
        title: "What is a System Portal?",

        description:
          "A system portal is a web platform that centralizes information, services, documents, and functionality for a specific group of users. It provides personalized experiences based on user roles and permissions.",

        image:
          "/images/subservices/software/system-portals.png",

        imageAlt:
          "System portal for managing users, information, and services",

        useCases: [
          "Customer portals",
          "Employee portals",
          "Supplier portals",
          "Document access",
          "Service management",
          "Internal communication",
        ],
      },

      workflow: {
        badge: "Our Process",

        title: "How We Build Your Portal",

        description:
          "We design and develop customized portals according to each organization's users, processes, and requirements.",

        steps: [
          {
            title: "Analysis",
            description:
              "We identify user types, processes, information, and services required by the portal.",
          },
          {
            title: "Architecture",
            description:
              "We define navigation structure, permissions, modules, and information organization.",
          },
          {
            title: "Design",
            description:
              "We design a clear interface adapted to the needs of each user type.",
          },
          {
            title: "Development",
            description:
              "We build the portal using modern technologies and reusable components.",
          },
          {
            title: "Integration & Testing",
            description:
              "We integrate external services and validate permissions, functionality, security, and user experience.",
          },
        ],
      },

      useCases: {
        title: "When Do You Need a System Portal?",

        description:
          "Portals are ideal for organizations that need to provide controlled access to information, services, or digital processes.",

        useCases: [
          {
            title: "Customers",
            description:
              "Provide customers with personalized access to services, documents, requests, and information.",
          },
          {
            title: "Employees",
            description:
              "Centralize tools, information, documents, and internal processes for employees.",
          },
          {
            title: "Suppliers",
            description:
              "Facilitate supplier management, documentation, requests, and collaboration processes.",
          },
          {
            title: "Services",
            description:
              "Allow users to manage requests, procedures, and services from a single digital environment.",
          },
          {
            title: "Information",
            description:
              "Centralize documents, resources, and relevant content for each user group.",
          },
          {
            title: "Personalized Access",
            description:
              "Display different functionality and information according to each user's role and permissions.",
          },
        ],
      },

      features: {
        title: "What's Included?",

        description:
          "We create complete portals adapted to the specific needs of each organization.",

        features: [
          {
            title: "User Authentication",
            description:
              "Secure access system for registered users.",
          },
          {
            title: "Roles & Permissions",
            description:
              "Control which information and functionality each user can access.",
          },
          {
            title: "Personalized Dashboard",
            description:
              "Each user can access an experience adapted to their role.",
          },
          {
            title: "Document Management",
            description:
              "Allow users to access and manage digital documents and resources.",
          },
          {
            title: "Custom Modules",
            description:
              "Integrate the specific functionality required by your organization.",
          },
          {
            title: "Forms & Requests",
            description:
              "Manage requests, registrations, and digital processes.",
          },
          {
            title: "Responsive Design",
            description:
              "The portal works properly across mobile devices, tablets, and computers.",
          },
          {
            title: "Integrations",
            description:
              "Connect the portal with APIs, services, and existing systems.",
          },
        ],
      },

      plansSection: {
        title: "Choose the Right Portal",

        description:
          "Select the portal type that best fits your organization. Each solution can be customized according to the required users, processes, functionality, and integrations.",
      },

      seo: {
        title: "System Portals | SatCore Solutions",

        description:
          "Development of digital portals for customers, employees, suppliers, and organizations.",

        keywords: [
          "web portal",
          "customer portal",
          "employee portal",
          "supplier portal",
          "system portals",
          "Next.js",
          "TypeScript",
        ],
      },
    },

    pt: {
      title: "Portais de Sistema",

      subtitle: "Centralize o acesso a informações e serviços",

      description:
        "Desenvolvemos portais digitais personalizados para clientes, funcionários, fornecedores e organizações que precisam centralizar informações, serviços, processos e ferramentas em um ambiente seguro.",

      overview: {
        title: "O que é um Portal de Sistema?",

        description:
          "Um portal de sistema é uma plataforma web que centraliza informações, serviços, documentos e funcionalidades para um grupo específico de usuários. Ele oferece experiências personalizadas de acordo com as funções e permissões de cada usuário.",

        image:
          "/images/subservices/software/system-portals.png",

        imageAlt:
          "Portal de sistema para gestão de usuários, informações e serviços",

        useCases: [
          "Portais de clientes",
          "Portais de funcionários",
          "Portais de fornecedores",
          "Acesso a documentos",
          "Gestão de serviços",
          "Comunicação interna",
        ],
      },

      workflow: {
        badge: "Nosso Processo",

        title: "Como Desenvolvemos seu Portal",

        description:
          "Projetamos e desenvolvemos portais personalizados de acordo com os usuários, processos e necessidades de cada organização.",

        steps: [
          {
            title: "Análise",
            description:
              "Identificamos os tipos de usuários, processos, informações e serviços necessários no portal.",
          },
          {
            title: "Arquitetura",
            description:
              "Definimos a estrutura de navegação, permissões, módulos e organização das informações.",
          },
          {
            title: "Design",
            description:
              "Criamos uma interface clara e adaptada às necessidades de cada tipo de usuário.",
          },
          {
            title: "Desenvolvimento",
            description:
              "Construímos o portal utilizando tecnologias modernas e componentes reutilizáveis.",
          },
          {
            title: "Integração e Testes",
            description:
              "Integramos serviços externos e validamos permissões, funcionalidades, segurança e experiência do usuário.",
          },
        ],
      },

      useCases: {
        title: "Quando Você Precisa de um Portal de Sistema?",

        description:
          "Os portais são ideais para organizações que precisam oferecer acesso controlado a informações, serviços ou processos digitais.",

        useCases: [
          {
            title: "Clientes",
            description:
              "Ofereça aos seus clientes acesso personalizado a serviços, documentos, solicitações e informações.",
          },
          {
            title: "Funcionários",
            description:
              "Centralize ferramentas, informações, documentos e processos internos para colaboradores.",
          },
          {
            title: "Fornecedores",
            description:
              "Facilite a gestão de fornecedores, documentação, solicitações e processos de colaboração.",
          },
          {
            title: "Serviços",
            description:
              "Permita gerenciar solicitações, procedimentos e serviços a partir de um único ambiente digital.",
          },
          {
            title: "Informações",
            description:
              "Centralize documentos, recursos e conteúdos relevantes para cada grupo de usuários.",
          },
          {
            title: "Acesso Personalizado",
            description:
              "Apresente diferentes funcionalidades e informações de acordo com a função e as permissões de cada usuário.",
          },
        ],
      },

      features: {
        title: "O Que Está Incluído?",

        description:
          "Criamos portais completos e adaptados às necessidades de cada organização.",

        features: [
          {
            title: "Autenticação de Usuários",
            description:
              "Sistema seguro de acesso para usuários registrados.",
          },
          {
            title: "Funções e Permissões",
            description:
              "Controle quais informações e funcionalidades cada usuário pode acessar.",
          },
          {
            title: "Dashboard Personalizado",
            description:
              "Cada usuário pode acessar uma experiência adaptada à sua função.",
          },
          {
            title: "Gestão de Documentos",
            description:
              "Permite acessar e gerenciar documentos e recursos digitais.",
          },
          {
            title: "Módulos Personalizados",
            description:
              "Integramos as funcionalidades específicas necessárias para sua organização.",
          },
          {
            title: "Formulários e Solicitações",
            description:
              "Gerencie solicitações, registros e processos digitais.",
          },
          {
            title: "Design Responsivo",
            description:
              "O portal funciona corretamente em dispositivos móveis, tablets e computadores.",
          },
          {
            title: "Integrações",
            description:
              "Conectamos o portal com APIs, serviços e sistemas existentes.",
          },
        ],
      },

      plansSection: {
        title: "Escolha o Portal Ideal",

        description:
          "Selecione o tipo de portal que melhor atende à sua organização. Cada solução pode ser personalizada de acordo com usuários, processos, funcionalidades e integrações necessárias.",
      },

      seo: {
        title: "Portais de Sistema | SatCore Solutions",

        description:
          "Desenvolvimento de portais digitais para clientes, funcionários, fornecedores e organizações.",

        keywords: [
          "portal web",
          "portal de clientes",
          "portal de funcionários",
          "portal de fornecedores",
          "portais de sistema",
          "Next.js",
          "TypeScript",
        ],
      },
    },
  },

  plans: portals,
};