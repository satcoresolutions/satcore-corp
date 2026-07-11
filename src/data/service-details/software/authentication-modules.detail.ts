import type {
  ServiceDetail,
} from "@/types/service-detail.types";

import {
  softwarePlans,
} from "@/data/plans/software/landing-pages";

export const authenticationModulesDetail: ServiceDetail = {
  core: {
    id: "SRV-AM",

    slug: "authentication-modules",

    name: "Authentication Modules",

    pillar: "software",

    icon: "lock",

    heroImage: "/images/services/software/hero/hero.png",

    plans: [],
  },

  translations: {
    es: {
      title: "Módulos de Autenticación",

      subtitle: "Seguridad robusta para tu plataforma",

      description: "Implementamos sistemas de autenticación seguros y modernos que protegen tu plataforma y tus usuarios. Desde inicio de sesión tradicional hasta autenticación biométrica y basada en tokens, proporcionamos soluciones completas.",

      overview: {
        title: "¿Qué es un Módulo de Autenticación?",

        description: "Un módulo de autenticación es un sistema que verifica la identidad de los usuarios antes de permitir el acceso a una aplicación. Incluye registro, inicio de sesión, recuperación de contraseña y verificación de identidad.",

        image: "/images/subservices/software/modulos-autenticacion.png",

        imageAlt: "Módulo de autenticación seguro",

        useCases: [
          "Inicio de sesión seguro",
          "Registro de usuarios",
          "Recuperación de contraseña",
          "Autenticación de dos factores",
          "Inicio de sesión social",
        ],
      },

      workflow: {
        badge: "Metodología",

        title: "¿Cómo implementamos tu Sistema?",

        description: "Creamos sistemas de autenticación seguros y fáciles de usar.",

        steps: [
          {
            title: "Análisis de Requisitos",
            description: "Definimos los requisitos de seguridad y experiencia de usuario."
          },
          {
            title: "Diseño de Arquitectura",
            description: "Diseñamos la arquitectura de autenticación más adecuada."
          },
          {
            title: "Desarrollo",
            description: "Implementamos el sistema con las mejores prácticas de seguridad."
          },
          {
            title: "Integración",
            description: "Conectamos con tu aplicación y sistemas existentes."
          },
          {
            title: "Pruebas de Seguridad",
            description: "Verificamos que el sistema sea seguro contra vulnerabilidades."
          },
        ],
      },

      useCases: {
        title: "¿Cuándo necesitas un Sistema de Autenticación?",

        description: "Todo sistema que maneje información de usuarios necesita un sistema de autenticación robusto.",

        useCases: [
          {
            title: "Protección de Datos",
            description: "Protege la información sensible de tus usuarios."
          },
          {
            title: "Cumplimiento normativo",
            description: "Cumple con regulaciones como GDPR y leyes de privacidad."
          },
          {
            title: "Experiencia de Usuario",
            description: "Proporciona un proceso de inicio de sesión fluido y seguro."
          },
          {
            title: "Prevención de Fraude",
            description: "Evita accesos no autorizados y actividades maliciosas."
          },
          {
            title: "Acceso Controlado",
            description: "Gestiona permisos y roles de usuario de forma granular."
          },
          {
            title: "Confianza",
            description: "Genera confianza en tus usuarios con prácticas de seguridad modernas."
          },
        ],
      },

      features: {
        title: "¿Qué incluye nuestro servicio?",

        description: "Implementamos sistemas de autenticación completos con las últimas medidas de seguridad.",

        features: [
          {
            title: "Registro e Inicio de Sesión",
            description: "Flujo completo de autenticación con validación robusta."
          },
          {
            title: "Recuperación de Contraseña",
            description: "Sistema seguro de recuperación mediante email."
          },
          {
            title: "Autenticación de Dos Factores",
            description: "Capa adicional de seguridad con 2FA."
          },
          {
            title: "Inicio de Sesión Social",
            description: "Integración con Google, Facebook, Apple y más."
          },
          {
            title: "Autenticación con Tokens",
            description: "JWT y tokens seguros para APIs."
          },
          {
            title: "Biometría",
            description: "Soporte para huella digital y reconocimiento facial."
          },
          {
            title: "Gestión de Sesiones",
            description: "Control de sesiones activas y cierre remoto."
          },
          {
            title: "Auditoría",
            description: "Logs detallados de actividad de usuario."
          },
        ],
      },

      plansSection: {
        title: "Elige el plan ideal",

        description: "Todos nuestros planes utilizan la misma metodología de trabajo. La diferencia está en el nivel de personalización, funcionalidades e integraciones incluidas en cada uno.",
      },

      seo: {
        title: "Módulos de Autenticación | SatCore Solutions",

        description: "Implementación de sistemas de autenticación seguros con 2FA, tokens JWT y autenticación social.",
        keywords: [
          "autenticación",
          "login",
          "seguridad",
          "2FA",
          "JWT",
          "autenticación social",
          "nextjs",
        ],
      },
    },

    en: {
      title: "Authentication Modules",

      subtitle: "Robust security for your platform",

      description: "We implement secure, modern authentication systems that protect your platform and users. From traditional login to biometric and token-based authentication, we provide complete solutions.",

      overview: {
        title: "What is an Authentication Module?",

        description: "An authentication module is a system that verifies user identity before granting access to an application. It includes registration, login, password recovery, and identity verification.",

        image: "/images/subservices/authentication-modules/auth.png",

        imageAlt: "Secure authentication module",

        useCases: [
          "Secure login",
          "User registration",
          "Password recovery",
          "Two-factor authentication",
          "Social login",
        ],
      },

      workflow: {
        badge: "Our Process",

        title: "How We Implement Your System",

        description: "We create secure, user-friendly authentication systems.",

        steps: [
          {
            title: "Requirements Analysis",
            description: "We define security requirements and user experience goals.",
          },
          {
            title: "Architecture Design",
            description: "We design the most suitable authentication architecture.",
          },
          {
            title: "Development",
            description: "We implement the system with security best practices.",
          },
          {
            title: "Integration",
            description: "We connect with your application and existing systems.",
          },
          {
            title: "Security Testing",
            description: "We verify the system is secure against vulnerabilities.",
          },
        ],
      },

      useCases: {
        title: "When Do You Need an Authentication System?",

        description: "Every system that handles user information needs a robust authentication system.",

        useCases: [
          {
            title: "Data Protection",
            description: "Protect your users' sensitive information.",
          },
          {
            title: "Regulatory Compliance",
            description: "Comply with regulations like GDPR and privacy laws.",
          },
          {
            title: "User Experience",
            description: "Provide a smooth, secure login process.",
          },
          {
            title: "Fraud Prevention",
            description: "Prevent unauthorized access and malicious activity.",
          },
          {
            title: "Access Control",
            description: "Manage user permissions and roles granularly.",
          },
          {
            title: "Trust",
            description: "Build user trust with modern security practices.",
          },
        ],
      },

      features: {
        title: "What's Included?",

        description: "We implement complete authentication systems with the latest security measures.",

        features: [
          {
            title: "Registration & Login",
            description: "Complete authentication flow with robust validation.",
          },
          {
            title: "Password Recovery",
            description: "Secure recovery system via email.",
          },
          {
            title: "Two-Factor Authentication",
            description: "Additional security layer with 2FA.",
          },
          {
            title: "Social Login",
            description: "Integration with Google, Facebook, Apple, and more.",
          },
          {
            title: "Token Authentication",
            description: "Secure JWT and tokens for APIs.",
          },
          {
            title: "Biometrics",
            description: "Support for fingerprint and facial recognition.",
          },
          {
            title: "Session Management",
            description: "Active session control and remote logout.",
          },
          {
            title: "Audit",
            description: "Detailed user activity logs.",
          },
        ],
      },

      plansSection: {
        title: "Choose the Right Plan",

        description: "All of our plans follow the same proven development process. The difference lies in the level of customization, features, and integrations included in each option.",
      },

      seo: {
        title: "Authentication Modules | SatCore Solutions",

        description: "Implementation of secure authentication systems with 2FA, JWT tokens, and social authentication.",
        keywords: [
          "authentication",
          "login",
          "security",
          "2FA",
          "JWT",
          "social login",
          "nextjs",
        ],
      },
    },

    pt: {
      title: "Módulos de Autenticação",

      subtitle: "Segurança robusta para sua plataforma",

      description: "Implementamos sistemas de autenticação seguros e modernos que protegem sua plataforma e usuários. Do login tradicional à autenticação biométrica e baseada em tokens, fornecemos soluções completas.",

      overview: {
        title: "O que é um Módulo de Autenticação?",

        description: "Um módulo de autenticação é um sistema que verifica a identidade do usuário antes de permitir acesso a um aplicativo. Inclui registro, login, recuperação de senha e verificação de identidade.",

        image: "/images/subservices/authentication-modules/auth.png",

        imageAlt: "Módulo de autenticação seguro",

        useCases: [
          "Login seguro",
          "Registro de usuários",
          "Recuperação de senha",
          "Autenticação de dois fatores",
          "Login social",
        ],
      },

      workflow: {
        badge: "Nosso Processo",

        title: "Como Implementamos seu Sistema",

        description: "Criamos sistemas de autenticação seguros e fáceis de usar.",

        steps: [
          {
            title: "Análise de Requisitos",
            description: "Definimos os requisitos de segurança e experiência do usuário.",
          },
          {
            title: "Design de Arquitetura",
            description: "Definimos a arquitetura de autenticação mais adequada.",
          },
          {
            title: "Desenvolvimento",
            description: "Implementamos o sistema com as melhores práticas de segurança.",
          },
          {
            title: "Integração",
            description: "Conectamos com seu aplicativo e sistemas existentes.",
          },
          {
            title: "Testes de Segurança",
            description: "Verificamos que o sistema seja seguro contra vulnerabilidades.",
          },
        ],
      },

      useCases: {
        title: "Quando Você Precisa de um Sistema de Autenticação?",

        description: "Todo sistema que manipula informações de usuários precisa de um sistema de autenticação robusto.",

        useCases: [
          {
            title: "Proteção de Dados",
            description: "Proteja as informações sensíveis dos seus usuários.",
          },
          {
            title: "Conformidade Regulatória",
            description: "Cumpra com regulamentações como LGPD e leis de privacidade.",
          },
          {
            title: "Experiência do Usuário",
            description: "Forneça um processo de login fluido e seguro.",
          },
          {
            title: "Prevenção de Fraude",
            description: "Evite acessos não autorizados e atividades maliciosas.",
          },
          {
            title: "Acesso Controlado",
            description: "Gerencie permissões e funções de usuário de forma granular.",
          },
          {
            title: "Confiança",
            description: "Gere confiança nos seus usuários com práticas de segurança modernas.",
          },
        ],
      },

      features: {
        title: "O Que Está Incluído?",

        description: "Implementamos sistemas de autenticação completos com as últimas medidas de segurança.",

        features: [
          {
            title: "Registro e Login",
            description: "Fluxo completo de autenticação com validação robusta.",
          },
          {
            title: "Recuperação de Senha",
            description: "Sistema seguro de recuperação via email.",
          },
          {
            title: "Autenticação de Dois Fatores",
            description: "Camada adicional de segurança com 2FA.",
          },
          {
            title: "Login Social",
            description: "Integração com Google, Facebook, Apple e mais.",
          },
          {
            title: "Autenticação com Tokens",
            description: "JWT e tokens seguros para APIs.",
          },
          {
            title: "Biometria",
            description: "Suporte para impressão digital e reconhecimento facial.",
          },
          {
            title: "Gestão de Sessões",
            description: "Controle de sessões ativas e logout remoto.",
          },
          {
            title: "Auditoria",
            description: "Logs detalhados de atividade do usuário.",
          },
        ],
      },

      plansSection: {
        title: "Escolha o Plano Ideal",

        description: "Todos os nossos planos seguem a mesma metodologia de desenvolvimento. A diferença está no nível de personalização, funcionalidades e integrações incluídas em cada opção.",
      },

      seo: {
        title: "Módulos de Autenticação | SatCore Solutions",

        description: "Implementação de sistemas de autenticação seguros com 2FA, tokens JWT e autenticação social.",
        keywords: [
          "autenticação",
          "login",
          "segurança",
          "2FA",
          "JWT",
          "login social",
          "nextjs",
        ],
      },
    },
  },
  plans: []
};