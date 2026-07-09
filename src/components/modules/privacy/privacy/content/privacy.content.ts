import type {
  PrivacyContent,
} from "../types/privacy.types";

export const privacyContent = {
  en: {
    header: {

      title: "Privacy Policy",

      description:
        "We are committed to protecting your personal information and handling it responsibly, transparently, and in compliance with applicable data protection regulations.",
    },

    items: [
      {
        title: "1. Information We Collect",
        description:
          "We collect information such as your name, email address, phone number, and any other data you voluntarily provide through contact forms or direct communication.",
      },
      {
        title: "2. How We Use Your Information",
        description:
          "We use your information to manage requests, provide our services, improve the user experience, and send communications related to our products and services.",
      },
      {
        title: "3. Data Protection",
        description:
          "We implement technical and organizational security measures to protect your information against unauthorized access, loss, misuse, or alteration.",
      },
      {
        title: "4. Cookies and Tracking Technologies",
        description:
          "Our website may use cookies and similar technologies to improve your browsing experience and analyze website usage.",
      },
      {
        title: "5. Your Rights",
        description:
          "You may request access to, correction of, or deletion of your personal data at any time by contacting us at satcoresolutions@gmail.com.",
      },
      {
        title: "6. Governing Law",
        description:
          "This Privacy Policy is governed by Colombia's Personal Data Protection Law (Law 1581 of 2012) and other applicable regulations.",
      },
    ],
  },

  es: {
    header: {

      title: "Política de Privacidad",

      description:
        "Nos comprometemos a proteger tu información personal y tratarla de forma responsable, transparente y conforme a la normativa vigente sobre protección de datos.",
    },

    items: [
      {
        title: "1. Información que recopilamos",
        description:
          "Recopilamos datos como nombre, correo electrónico, teléfono y otra información proporcionada voluntariamente a través de formularios o contacto directo.",
      },
      {
        title: "2. Uso de la información",
        description:
          "Utilizamos la información para gestionar solicitudes, prestar nuestros servicios, mejorar la experiencia del usuario y enviar comunicaciones relacionadas con nuestros servicios.",
      },
      {
        title: "3. Protección de datos",
        description:
          "Implementamos medidas de seguridad técnicas y administrativas para proteger la información contra accesos no autorizados, pérdida o alteración.",
      },
      {
        title: "4. Cookies y tecnologías de seguimiento",
        description:
          "Nuestro sitio puede utilizar cookies para mejorar la experiencia del usuario y analizar el comportamiento dentro de la plataforma.",
      },
      {
        title: "5. Derechos del usuario",
        description:
          "El usuario puede solicitar acceso, corrección o eliminación de sus datos personales en cualquier momento escribiendo a satcoresolutions@gmail.com.",
      },
      {
        title: "6. Legislación aplicable",
        description:
          "Esta política se rige por la Ley 1581 de 2012 de protección de datos personales en Colombia.",
      },
    ],
  },

  pt: {
    header: {

      title: "Política de Privacidade",

      description:
        "Estamos comprometidos em proteger suas informações pessoais e tratá-las de forma responsável, transparente e em conformidade com a legislação aplicável de proteção de dados.",
    },

    items: [
      {
        title: "1. Informações que Coletamos",
        description:
          "Coletamos informações como nome, e-mail, telefone e outros dados fornecidos voluntariamente por meio de formulários ou contato direto.",
      },
      {
        title: "2. Uso das Informações",
        description:
          "Utilizamos essas informações para gerenciar solicitações, prestar nossos serviços, melhorar a experiência do usuário e enviar comunicações relacionadas aos nossos serviços.",
      },
      {
        title: "3. Proteção de Dados",
        description:
          "Implementamos medidas técnicas e administrativas de segurança para proteger as informações contra acesso não autorizado, perda, uso indevido ou alteração.",
      },
      {
        title: "4. Cookies e Tecnologias de Rastreamento",
        description:
          "Nosso site pode utilizar cookies e tecnologias semelhantes para melhorar a experiência de navegação e analisar o uso da plataforma.",
      },
      {
        title: "5. Direitos do Usuário",
        description:
          "O usuário pode solicitar acesso, correção ou exclusão de seus dados pessoais a qualquer momento entrando em contato pelo e-mail satcoresolutions@gmail.com.",
      },
      {
        title: "6. Legislação Aplicável",
        description:
          "Esta política é regida pela Lei 1581 de 2012 sobre proteção de dados pessoais da Colômbia e pelas demais normas aplicáveis.",
      },
    ],
  },
} satisfies Record<string, PrivacyContent>;