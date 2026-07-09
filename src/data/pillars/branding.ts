import type { Pillar } from "@/types/pillar.types";

import {
  Search,
  Palette,
  Code,
  Rocket,
  RefreshCw,
} from "lucide-react";

export const branding: Pillar = {
  core: {
    id: "branding",

    pillar: "branding",

    slug: "branding",

    name: "Branding",

    icon: "palette",

    type: "Brand Identity",

    image:
      "/img/services/branding/cover.webp",

    images: [
      "/img/services/branding/1.webp",
      "/img/services/branding/2.webp",
    ],

    technologies: [
      "Figma",
      "Adobe Illustrator",
      "Adobe Photoshop",
      "Adobe InDesign",
      "Adobe After Effects",
      "Canva",
    ],
  },

  href: "/services/branding",

  translations: {
    es: {
      title:
        "Branding",

      category:
        "Identidad de Marca",

      description:
        "Creamos identidades de marca estratégicas que comunican los valores de tu empresa, fortalecen el reconocimiento en el mercado y generan confianza mediante un diseño visual coherente.",

      imageAlt:
        "Servicio de branding",

      hero: {
        badge:
          "Identidad de Marca",
      },

      techStack: {
        title:
          "Herramientas que utilizamos",

        description:
          "Utilizamos herramientas profesionales de diseño y branding para crear identidades visuales sólidas, escalables y memorables.",
      },

      serviceCatalog: {
        title:
          "Nuestros servicios",

        description:
          "Explora nuestras soluciones de branding diseñadas para construir una marca sólida, coherente y diferenciadora.",
      },
      process: {
        title:
          "Nuestro proceso de branding",

        description:
          "Seguimos una metodología estratégica enfocada en comprender tu negocio, construir una identidad diferenciadora y entregar una imagen de marca sólida y consistente.",

        steps: [
          {
            title: "Descubrimiento",
            subtitle:
              "Analizamos tu negocio, audiencia, valores y posicionamiento.",
            icon: Search,
          },
          {
            title: "Estrategia",
            subtitle:
              "Definimos la personalidad, dirección visual y posicionamiento de la marca.",
            icon: Palette,
          },
          {
            title: "Diseño de identidad",
            subtitle:
              "Creamos el logotipo, paleta de colores, tipografía y sistema visual.",
            icon: Code,
          },
          {
            title: "Presentación",
            subtitle:
              "Presentamos la propuesta, realizamos ajustes y validamos el diseño.",
            icon: Rocket,
          },
          {
            title: "Entrega",
            subtitle:
              "Entregamos los archivos finales, manual de marca y recursos gráficos.",
            icon: RefreshCw,
          },
        ],
      },

      scope: {
        title:
          "Una identidad visual completa",

        description:
          "Nuestro servicio de branding proporciona todos los elementos necesarios para construir una marca profesional, coherente y memorable.",

        cards: [
          {
            title: "Incluye",

            type: "include",

            items: [
              "Diseño de logotipo",
              "Paleta de colores",
              "Selección tipográfica",
              "Manual de marca",
              "Sistema de identidad visual",
              "Archivos editables",
              "Versiones para impresión y medios digitales",
            ],
          },
          {
            title: "No incluye",

            type: "exclude",

            items: [
              "Desarrollo web",
              "Campañas de marketing digital",
              "Servicios de impresión",
              "Producción de empaques",
              "Registro legal de marca",
            ],
          },
        ],
      },

      pricing: {
        title:
          "Planes y precios",

        description:
          "Cada empresa tiene necesidades diferentes. Ofrecemos paquetes flexibles que se adaptan al tamaño y objetivos de tu marca.",

        plans: [
          {
            title:
              "Diseño de Logotipo",

            price:
              "Desde $1.200.000 COP",

            time:
              "3-5 días hábiles",
          },
          {
            title:
              "Identidad Visual",

            price:
              "$2.500.000 - $5.000.000 COP",

            time:
              "1-2 semanas",
          },
          {
            title:
              "Branding Completo",

            price:
              "$5.000.000 - $10.000.000 COP",

            time:
              "2-4 semanas",
          },
          {
            title:
              "Paquete Personalizado",

            price:
              "Cotización personalizada",

            time:
              "Según el alcance del proyecto",
          },
        ],
      },
      guarantee: {
        title:
          "Nuestra garantía",

        description:
          "Cada proyecto de branding está respaldado por un proceso estratégico, estándares profesionales de diseño y acompañamiento después de la entrega para garantizar un resultado de alta calidad.",

        cards: [
          {
            title:
              "Garantía de 30 días",

            description:
              "Incluye ajustes menores y correcciones durante los 30 días posteriores a la entrega. No contempla nuevos conceptos ni rediseños completos.",

            icon:
              "shield-check",
          },
          {
            title:
              "Acompañamiento de marca",

            description:
              "Ofrecemos soporte para futuras actualizaciones de identidad visual, piezas gráficas y evolución de la marca conforme crezca tu negocio.",

            icon:
              "wrench",
          },
        ],
      },

      requirements: {
        title:
          "¿Qué necesitamos de ti?",

        description:
          "Conocer tu empresa, tus objetivos y la personalidad de tu marca nos permite diseñar una identidad visual alineada con tu visión.",

        items: [
          {
            title:
              "Información del negocio",

            description:
              "Cuéntanos sobre tu empresa, servicios, valores y público objetivo.",
          },
          {
            title:
              "Objetivos de la marca",

            description:
              "Explícanos qué deseas comunicar y cómo quieres que tu marca sea percibida.",
          },
          {
            title:
              "Referencias visuales",

            description:
              "Comparte ejemplos de estilos, colores o marcas que te inspiren.",
          },
          {
            title:
              "Material existente",

            description:
              "Si cuentas con logotipos, colores o elementos gráficos actuales, compártelos con nosotros.",
          },
          {
            title:
              "Retroalimentación",

            description:
              "Revisa las propuestas y proporciona comentarios oportunamente para avanzar en el proyecto.",
          },
          {
            title:
              "Aprobaciones oportunas",

            description:
              "Aprueba las entregas dentro de los tiempos acordados para mantener el cronograma.",
          },
        ],
      },

      legal: {
        title:
          "Propiedad intelectual y aspectos legales",

        description:
          "Todos nuestros proyectos de branding establecen claramente la propiedad, licencias y entrega de los activos gráficos desarrollados.",

        items: [
          {
            element: "Logotipo final",

            owner: "Cliente",

            license: "Uso ilimitado",
          },
          {
            element: "Manual de marca",

            owner: "Cliente",

            license: "Uso ilimitado",
          },
          {
            element: "Fuentes y recursos externos",

            owner: "Terceros",

            license: "Según su licencia",
          },
          {
            element: "Proceso creativo",

            owner: "SatCore Solutions",

            license: "No transferible",
          },
        ],
      },

      cta: {
        title:
          "¿Listo para construir tu marca?",

        description:
          "Creemos una identidad visual profesional que transmita confianza, diferencie tu negocio y fortalezca tu presencia en el mercado.",

        button:
          "Solicitar cotización",
      },
    },

    en: {
      title:
        "Branding",

      category:
        "Brand Identity",

      description:
        "We create strategic brand identities that communicate your company's values, strengthen market recognition, and build trust with your audience through consistent visual design.",

      imageAlt:
        "Branding service",

      hero: {
        badge:
          "Brand Identity",
      },

      techStack: {
        title:
          "Tools we use",

        description:
          "We leverage industry-leading design and branding tools to create scalable, professional, and memorable visual identities.",
      },

      serviceCatalog: {
        title:
          "Our branding services",

        description:
          "Discover our branding solutions designed to help businesses build a strong, consistent, and recognizable brand presence.",
      },
      process: {
        title:
          "Our branding process",

        description:
          "We follow a strategic branding methodology focused on understanding your business, creating a distinctive identity, and delivering consistent visual assets that strengthen your brand.",

        steps: [
          {
            title: "Discovery",
            subtitle:
              "We learn about your business, audience, values, and market positioning.",
            icon: Search,
          },
          {
            title: "Brand Strategy",
            subtitle:
              "We define the visual direction, personality, and positioning of your brand.",
            icon: Palette,
          },
          {
            title: "Identity Design",
            subtitle:
              "We design the logo, color palette, typography, and complete visual system.",
            icon: Code,
          },
          {
            title: "Presentation",
            subtitle:
              "We present, refine, and validate the proposed brand identity.",
            icon: Rocket,
          },
          {
            title: "Delivery",
            subtitle:
              "We deliver the final files, brand guidelines, and all approved assets.",
            icon: RefreshCw,
          },
        ],
      },

      scope: {
        title:
          "A complete visual identity",

        description:
          "Our branding service is designed to provide everything needed to build a consistent, professional, and memorable brand.",

        cards: [
          {
            title: "Includes",

            type: "include",

            items: [
              "Logo design",
              "Color palette",
              "Typography selection",
              "Brand guidelines",
              "Visual identity system",
              "Editable source files",
              "Exported files for print and digital use",
            ],
          },
          {
            title: "Does not include",

            type: "exclude",

            items: [
              "Website development",
              "Digital marketing campaigns",
              "Printing services",
              "Product packaging production",
              "Trademark registration",
            ],
          },
        ],
      },

      pricing: {
        title:
          "Plans & pricing",

        description:
          "Every brand has different needs. We offer flexible branding packages tailored to your business stage and goals.",

        plans: [
          {
            title:
              "Logo Design",

            price:
              "From $300 USD",

            time:
              "3–5 business days",
          },
          {
            title:
              "Visual Identity",

            price:
              "$600 - $1,200 USD",

            time:
              "1–2 weeks",
          },
          {
            title:
              "Complete Branding",

            price:
              "$1,200 - $2,500 USD",

            time:
              "2–4 weeks",
          },
          {
            title:
              "Custom Brand Package",

            price:
              "Custom quote",

            time:
              "According to project scope",
          },
        ],
      },
      guarantee: {
        title:
          "Our guarantee",

        description:
          "Every branding project is backed by a structured design process, professional quality standards, and post-delivery support to ensure your brand is delivered with confidence.",

        cards: [
          {
            title:
              "30-Day Revision Guarantee",

            description:
              "Minor adjustments and corrections are included for up to 30 days after delivery. New concepts or major redesigns are not included.",

            icon:
              "shield-check",
          },
          {
            title:
              "Brand Evolution Support",

            description:
              "We offer ongoing support for future branding updates, additional assets, marketing materials, and visual identity expansions.",

            icon:
              "wrench",
          },
        ],
      },

      requirements: {
        title:
          "What do we need from you?",

        description:
          "Understanding your business, audience, and goals allows us to build a brand identity that truly represents your company.",

        items: [
          {
            title:
              "Business information",

            description:
              "Tell us about your company, services, values, and target audience.",
          },
          {
            title:
              "Brand objectives",

            description:
              "Share what you want your brand to communicate and achieve.",
          },
          {
            title:
              "Visual references",

            description:
              "Provide examples of styles, colors, or brands that inspire you.",
          },
          {
            title:
              "Existing assets",

            description:
              "If available, share your current logo, colors, typography, or brand materials.",
          },
          {
            title:
              "Feedback",

            description:
              "Review proposals and provide constructive feedback within the agreed timeline.",
          },
          {
            title:
              "Timely approvals",

            description:
              "Approve milestones on time to keep the project moving according to schedule.",
          },
        ],
      },

      legal: {
        title:
          "Intellectual property & legal",

        description:
          "Our branding projects include clear agreements regarding ownership, licensing, and delivery of all approved design assets.",

        items: [
          {
            element: "Final logo",

            owner: "Client",

            license: "Unlimited use",
          },
          {
            element: "Brand guidelines",

            owner: "Client",

            license: "Unlimited use",
          },
          {
            element: "Fonts & external resources",

            owner: "Third parties",

            license: "According to their license",
          },
          {
            element: "Creative process",

            owner: "SatCore Solutions",

            license: "Non-transferable",
          },
        ],
      },

      cta: {
        title:
          "Ready to build your brand?",

        description:
          "Let's create a professional visual identity that helps your business stand out and build trust with your audience.",

        button:
          "Request a quote",
      },
    },

    pt: {
      title:
        "Branding",

      category:
        "Identidade de Marca",

      description:
        "Criamos identidades de marca estratégicas que comunicam os valores da sua empresa, fortalecem o reconhecimento no mercado e geram confiança por meio de um design visual consistente.",

      imageAlt:
        "Serviço de branding",

      hero: {
        badge:
          "Identidade de Marca",
      },

      techStack: {
        title:
          "Ferramentas que utilizamos",

        description:
          "Utilizamos ferramentas profissionais de design e branding para criar identidades visuais sólidas, escaláveis e memoráveis.",
      },

      serviceCatalog: {
        title:
          "Nossos serviços",

        description:
          "Conheça nossas soluções de branding desenvolvidas para construir uma marca forte, consistente e reconhecida pelo mercado.",
      },
      process: {
        title:
          "Nosso processo de branding",

        description:
          "Seguimos uma metodologia estratégica para compreender seu negócio, desenvolver uma identidade única e entregar uma marca consistente e memorável.",

        steps: [
          {
            title: "Descoberta",
            subtitle:
              "Entendemos seu negócio, público, valores e posicionamento.",
            icon: Search,
          },
          {
            title: "Estratégia",
            subtitle:
              "Definimos a personalidade, direção visual e posicionamento da marca.",
            icon: Palette,
          },
          {
            title: "Design da identidade",
            subtitle:
              "Criamos o logotipo, paleta de cores, tipografia e sistema visual.",
            icon: Code,
          },
          {
            title: "Apresentação",
            subtitle:
              "Apresentamos a proposta, realizamos ajustes e validamos o resultado.",
            icon: Rocket,
          },
          {
            title: "Entrega",
            subtitle:
              "Entregamos os arquivos finais, manual da marca e todos os materiais aprovados.",
            icon: RefreshCw,
          },
        ],
      },

      scope: {
        title:
          "Uma identidade visual completa",

        description:
          "Nosso serviço de branding fornece todos os elementos necessários para construir uma marca profissional, consistente e memorável.",

        cards: [
          {
            title: "Inclui",

            type: "include",

            items: [
              "Design de logotipo",
              "Paleta de cores",
              "Seleção tipográfica",
              "Manual da marca",
              "Sistema de identidade visual",
              "Arquivos editáveis",
              "Arquivos para impressão e mídias digitais",
            ],
          },
          {
            title: "Não inclui",

            type: "exclude",

            items: [
              "Desenvolvimento de websites",
              "Campanhas de marketing digital",
              "Serviços de impressão",
              "Produção de embalagens",
              "Registro de marca",
            ],
          },
        ],
      },

      pricing: {
        title:
          "Planos e preços",

        description:
          "Cada empresa possui necessidades diferentes. Oferecemos pacotes flexíveis para atender ao estágio e aos objetivos da sua marca.",

        plans: [
          {
            title:
              "Design de Logotipo",

            price:
              "A partir de US$ 300",

            time:
              "3–5 dias úteis",
          },
          {
            title:
              "Identidade Visual",

            price:
              "US$ 600 - US$ 1.200",

            time:
              "1–2 semanas",
          },
          {
            title:
              "Branding Completo",

            price:
              "US$ 1.200 - US$ 2.500",

            time:
              "2–4 semanas",
          },
          {
            title:
              "Pacote Personalizado",

            price:
              "Orçamento personalizado",

            time:
              "Conforme o escopo do projeto",
          },
        ],
      },
      guarantee: {
        title:
          "Nossa garantia",

        description:
          "Cada projeto de branding é desenvolvido com um processo estratégico, padrões profissionais de design e suporte após a entrega para garantir um resultado de excelência.",

        cards: [
          {
            title:
              "Garantia de 30 dias",

            description:
              "Inclui pequenos ajustes e correções durante os 30 dias após a entrega. Novos conceitos ou reformulações completas não estão incluídos.",

            icon:
              "shield-check",
          },
          {
            title:
              "Suporte à evolução da marca",

            description:
              "Oferecemos suporte para futuras atualizações da identidade visual, materiais gráficos e expansão da marca.",

            icon:
              "wrench",
          },
        ],
      },

      requirements: {
        title:
          "O que precisamos de você?",

        description:
          "Conhecer sua empresa, seus objetivos e a personalidade da marca nos permite criar uma identidade visual alinhada com sua visão.",

        items: [
          {
            title:
              "Informações da empresa",

            description:
              "Conte-nos sobre sua empresa, serviços, valores e público-alvo.",
          },
          {
            title:
              "Objetivos da marca",

            description:
              "Explique o que deseja comunicar e como quer que sua marca seja percebida.",
          },
          {
            title:
              "Referências visuais",

            description:
              "Compartilhe exemplos de estilos, cores ou marcas que o inspiram.",
          },
          {
            title:
              "Materiais existentes",

            description:
              "Caso possua logotipo, cores ou materiais gráficos atuais, envie-os para nossa equipe.",
          },
          {
            title:
              "Feedback",

            description:
              "Analise as propostas e envie seus comentários dentro do prazo acordado.",
          },
          {
            title:
              "Aprovações",

            description:
              "Aprove cada etapa no prazo para manter o cronograma do projeto.",
          },
        ],
      },

      legal: {
        title:
          "Propriedade intelectual e aspectos legais",

        description:
          "Nossos projetos de branding incluem acordos claros sobre propriedade, licenciamento e entrega de todos os ativos gráficos aprovados.",

        items: [
          {
            element: "Logotipo final",

            owner: "Cliente",

            license: "Uso ilimitado",
          },
          {
            element: "Manual da marca",

            owner: "Cliente",

            license: "Uso ilimitado",
          },
          {
            element: "Fontes e recursos externos",

            owner: "Terceiros",

            license: "Conforme a licença",
          },
          {
            element: "Processo criativo",

            owner: "SatCore Solutions",

            license: "Intransferível",
          },
        ],
      },

      cta: {
        title:
          "Pronto para construir sua marca?",

        description:
          "Vamos criar uma identidade visual profissional que transmita confiança, diferencie seu negócio e fortaleça sua presença no mercado.",

        button:
          "Solicitar orçamento",
      },
    },
  },
};