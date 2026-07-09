import {
  CreditCard,
  Clock,
  ShieldCheck,
  RefreshCw,
  Scale,
  Lock,
  XCircle,
  UserCheck,
  Workflow,
} from "lucide-react";

import type {
  TermsContent,
} from "../types/terms.types";

export const termsContent = {
  en: {
    header: {
      title: "Terms & Conditions",

      description:
        "Clear, transparent, and well-defined terms designed to ensure trust and professionalism throughout every project.",
    },

    terms: [
      {
        title: "Payments & Billing",

        icon: CreditCard,

        content:
          "Advance payments vary depending on the project type (50%, 40%, or sprint-based). Payment methods: Nequi, Daviplata, PayU, and Mercado Pago.",
      },

      {
        title: "Delivery Timelines",

        icon: Clock,

        content:
          "Delivery times are estimates and depend on the project's technical complexity and timely client communication.",
      },

      {
        title: "Warranty & Support",

        icon: ShieldCheck,

        content:
          "Includes 30 days of post-delivery support for minor technical bug fixes.",
      },

      {
        title: "Changes & Project Scope",

        icon: RefreshCw,

        content:
          "Any request outside the originally agreed scope will be evaluated and quoted separately.",
      },

      {
        title: "Intellectual Property",

        icon: Scale,

        content:
          "The client obtains ownership of the project after full payment. Open-source libraries and third-party dependencies are excluded.",
      },

      {
        title: "Confidentiality",

        icon: Lock,

        content:
          "All client information is treated as confidential. A Non-Disclosure Agreement (NDA) can be signed upon request.",
      },

      {
        title: "Cancellations",

        icon: XCircle,

        content:
          "Before the project starts: full refund. During development: refund proportional to completed work. After delivery: no refunds.",
      },

      {
        title: "Client Responsibilities",

        icon: UserCheck,

        content:
          "Clients are responsible for providing accurate information, responding promptly, and reviewing project deliverables on time.",
      },

      {
        title: "Work Methodology",

        icon: Workflow,

        content:
          "We follow an agile, iterative, and results-driven approach with progressive deliveries designed for scalability.",
      },
    ],
  },

  es: {
    header: {
      title: "Términos y Condiciones",

      description:
        "Condiciones claras, transparentes y estructuradas para garantizar confianza y profesionalismo en cada proyecto.",
    },

    terms: [
      {
        title: "Pagos y Facturación",

        icon: CreditCard,

        content:
          "Anticipos según tipo de proyecto (50%, 40% o por sprints). Métodos: Nequi, Daviplata, PayU y Mercado Pago.",
      },

      {
        title: "Tiempos de Entrega",

        icon: Clock,

        content:
          "Los tiempos son estimados y dependen de la complejidad técnica del proyecto y de la comunicación oportuna del cliente.",
      },

      {
        title: "Garantía y Soporte",

        icon: ShieldCheck,

        content:
          "Incluye 30 días de soporte posterior a la entrega para la corrección de errores técnicos menores.",
      },

      {
        title: "Cambios y Alcance",

        icon: RefreshCw,

        content:
          "Todo cambio fuera del alcance inicialmente acordado será evaluado y cotizado por separado.",
      },

      {
        title: "Propiedad Intelectual",

        icon: Scale,

        content:
          "El cliente obtiene los derechos del proyecto una vez realizado el pago total. No incluye librerías de código abierto ni dependencias de terceros.",
      },

      {
        title: "Confidencialidad",

        icon: Lock,

        content:
          "Toda la información del cliente será tratada como confidencial. Es posible firmar un acuerdo de confidencialidad (NDA) cuando sea requerido.",
      },

      {
        title: "Cancelaciones",

        icon: XCircle,

        content:
          "Antes de iniciar el proyecto: reembolso total. Durante el desarrollo: reembolso proporcional al avance. Después de la entrega: no se realizan devoluciones.",
      },

      {
        title: "Responsabilidades del Cliente",

        icon: UserCheck,

        content:
          "El cliente debe proporcionar información clara, responder oportunamente y validar los entregables del proyecto.",
      },

      {
        title: "Modelo de Trabajo",

        icon: Workflow,

        content:
          "Trabajamos con una metodología ágil, iterativa y orientada a resultados, con entregas progresivas pensadas para el crecimiento del proyecto.",
      },
    ],
  },

  pt: {
    header: {
      title: "Termos e Condições",

      description:
        "Condições claras, transparentes e bem estruturadas para garantir confiança e profissionalismo em cada projeto.",
    },

    terms: [
      {
        title: "Pagamentos e Faturamento",

        icon: CreditCard,

        content:
          "Os adiantamentos variam conforme o tipo de projeto (50%, 40% ou por sprints). Métodos de pagamento: Nequi, Daviplata, PayU e Mercado Pago.",
      },

      {
        title: "Prazos de Entrega",

        icon: Clock,

        content:
          "Os prazos são estimativas e dependem da complexidade técnica do projeto e da comunicação eficiente do cliente.",
      },

      {
        title: "Garantia e Suporte",

        icon: ShieldCheck,

        content:
          "Inclui 30 dias de suporte após a entrega para correção de pequenos erros técnicos.",
      },

      {
        title: "Alterações e Escopo",

        icon: RefreshCw,

        content:
          "Qualquer solicitação fora do escopo inicialmente definido será analisada e orçada separadamente.",
      },

      {
        title: "Propriedade Intelectual",

        icon: Scale,

        content:
          "O cliente passa a ser o proprietário do projeto após o pagamento integral. Bibliotecas de código aberto e dependências de terceiros não estão incluídas.",
      },

      {
        title: "Confidencialidade",

        icon: Lock,

        content:
          "Todas as informações do cliente são tratadas como confidenciais. Um Acordo de Confidencialidade (NDA) poderá ser assinado, caso necessário.",
      },

      {
        title: "Cancelamentos",

        icon: XCircle,

        content:
          "Antes do início do projeto: reembolso integral. Durante o desenvolvimento: reembolso proporcional ao trabalho realizado. Após a entrega: não há reembolsos.",
      },

      {
        title: "Responsabilidades do Cliente",

        icon: UserCheck,

        content:
          "O cliente deve fornecer informações claras, responder dentro dos prazos e validar as entregas do projeto.",
      },

      {
        title: "Modelo de Trabalho",

        icon: Workflow,

        content:
          "Seguimos uma metodologia ágil, iterativa e orientada a resultados, com entregas progressivas preparadas para acompanhar o crescimento do projeto.",
      },
    ],
  },
} as const;