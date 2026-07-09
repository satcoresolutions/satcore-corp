import type {
  ServiceDetail,
} from "@/types/service-detail.types";

import {
  softwarePlans,
} from "@/data/plans/software/landing-pages";

export const elearningSystemsDetail: ServiceDetail = {
  core: {
    id: "SRV-ELS",

    slug: "elearning-systems",

    name: "E-Learning Systems",

    pillar: "software",

    icon: "graduation-cap",

    heroImage: "/images/services/software/elearning-systems/hero/hero.png",

    plans: [],
  },

  translations: {
    es: {
      title: "Sistemas de E-Learning",

      subtitle: "Plataformas de educación online",

      description: "Creamos plataformas de aprendizaje electrónico que permiten crear, administrar y entregar cursos online. Desde videotutoriales hasta evaluaciones interactivas, proporcionamos herramientas completas para la educación digital.",

      overview: {
        title: "¿Qué es un Sistema de E-Learning?",

        description: "Un sistema de e-learning es una plataforma que permite la entrega de educación a través de internet. Incluye gestión de cursos, evaluaciones, progreso de estudiantes, certificados y herramientas de interacción.",

        image: "/images/subservices/elearning-systems/elearning.png",

        imageAlt: "Sistema de e-learning",

        useCases: [
          "Cursos online",
          "Capacitación empresarial",
          "Plataformas de formación",
          "Tutoría virtual",
          "Certificaciones profesionales",
        ],
      },

      workflow: {
        badge: "Metodología",

        title: "¿Cómo desarrollamos tu Plataforma?",

        description: "Creamos plataformas de e-learning completas y efectivas.",

        steps: [
          {
            title: "Análisis",
            description: "Estudiamos tus necesidades educativas y objetivos."
          },
          {
            title: "Diseño",
            description: "Diseñamos la estructura de cursos y experiencia de usuario."
          },
          {
            title: "Desarrollo",
            description: "Implementamos la plataforma con todas las funcionalidades."
          },
          {
            title: "Contenido",
            description: "Configuramos la gestión de contenido y recursos."
          },
          {
            title: "Lanzamiento",
            description: "Publicamos y capacitamos en el uso de la plataforma."
          },
        ],
      },

      useCases: {
        title: "¿Cuándo necesitas un Sistema de E-Learning?",

        description: "El e-learning es ideal para democratizar el acceso al conocimiento.",

        useCases: [
          {
            title: "Educación a Distancia",
            description: "Alcanza estudiantes en cualquier ubicación geográfica."
          },
          {
            title: "Escalabilidad",
            description: "Educa a miles de estudiantes sin límites físicos."
          },
          {
            title: "Costos",
            description: "Reduce costos de formación comparado con métodos tradicionales."
          },
          {
            title: "Flexibilidad",
            description: "Estudiantes aprenden a su propio ritmo."
          },
          {
            title: "Seguimiento",
            description: "Monitorea el progreso y rendimiento de estudiantes."
          },
          {
            title: "Actualización",
            description: "Actualiza contenido fácilmente y rápido."
          },
        ],
      },

      features: {
        title: "¿Qué incluye nuestro servicio?",

        description: "Creamos sistemas de e-learning completos con todas las herramientas educativas.",

        features: [
          {
            title: "Gestión de Cursos",
            description: "Crea y administra cursos, módulos y lecciones."
          },
          {
            title: "Contenido Multimedia",
            description: "Soporte para video, audio, documentos y quizzes."
          },
          {
            title: "Evaluaciones",
            description: "Crea exámenes, quizzes y tareas con corrección automática."
          },
          {
            title: "Progreso",
            description: "Seguimiento visual del avance del estudiante."
          },
          {
            title: "Certificados",
            description: "Generación automática de certificados al completar cursos."
          },
          {
            title: "Foros",
            description: "Espacios de discusión entre estudiantes."
          },
          {
            title: "Gamificación",
            description: "Puntos, badges y niveles para motivar el aprendizaje."
          },
          {
            title: "Análisis",
            description: "Reportes detallados de rendimiento y engagement."
          },
        ],
      },

      plansSection: {
        title: "Elige el plan ideal",

        description: "Todos nuestros planes utilizan la misma metodología de trabajo. La diferencia está en el nivel de personalización, funcionalidades e integraciones incluidas en cada uno.",
      },

      seo: {
        title: "Sistemas de E-Learning | SatCore Solutions",

        description: "Desarrollo de plataformas de e-learning para educación online y capacitación empresarial.",
        keywords: [
          "e-learning",
          "cursos online",
          "educación a distancia",
          "plataforma educativa",
          "nextjs",
        ],
      },
    },

    en: {
      title: "E-Learning Systems",

      subtitle: "Online education platforms",

      description: "We create electronic learning platforms that allow creating, managing, and delivering online courses. From video tutorials to interactive assessments, we provide complete tools for digital education.",

      overview: {
        title: "What is an E-Learning System?",

        description: "An e-learning system is a platform that allows delivering education through the internet. It includes course management, assessments, student progress, certificates, and interaction tools.",

        image: "/images/subservices/elearning-systems/elearning.png",

        imageAlt: "E-learning system",

        useCases: [
          "Online courses",
          "Corporate training",
          "Training platforms",
          "Virtual tutoring",
          "Professional certifications",
        ],
      },

      workflow: {
        badge: "Our Process",

        title: "How We Build Your Platform",

        description: "We create complete, effective e-learning platforms.",

        steps: [
          {
            title: "Analysis",
            description: "We study your educational needs and objectives.",
          },
          {
            title: "Design",
            description: "We design course structure and user experience.",
          },
          {
            title: "Development",
            description: "We implement the platform with all functionalities.",
          },
          {
            title: "Content",
            description: "We configure content and resource management.",
          },
          {
            title: "Launch",
            description: "We publish and train on platform usage.",
          },
        ],
      },

      useCases: {
        title: "When Do You Need an E-Learning System?",

        description: "E-learning is ideal for democratizing access to knowledge.",

        useCases: [
          {
            title: "Distance Education",
            description: "Reach students in any geographic location.",
          },
          {
            title: "Scalability",
            description: "Educate thousands of students without physical limits.",
          },
          {
            title: "Costs",
            description: "Reduce training costs compared to traditional methods.",
          },
          {
            title: "Flexibility",
            description: "Students learn at their own pace.",
          },
          {
            title: "Tracking",
            description: "Monitor student progress and performance.",
          },
          {
            title: "Updates",
            description: "Update content easily and quickly.",
          },
        ],
      },

      features: {
        title: "What's Included?",

        description: "We create complete e-learning systems with all educational tools.",

        features: [
          {
            title: "Course Management",
            description: "Create and manage courses, modules, and lessons.",
          },
          {
            title: "Multimedia Content",
            description: "Support for video, audio, documents, and quizzes.",
          },
          {
            title: "Assessments",
            description: "Create exams, quizzes, and assignments with auto-grading.",
          },
          {
            title: "Progress",
            description: "Visual tracking of student advancement.",
          },
          {
            title: "Certificates",
            description: "Automatic certificate generation upon course completion.",
          },
          {
            title: "Forums",
            description: "Discussion spaces between students.",
          },
          {
            title: "Gamification",
            description: "Points, badges, and levels to motivate learning.",
          },
          {
            title: "Analytics",
            description: "Detailed performance and engagement reports.",
          },
        ],
      },

      plansSection: {
        title: "Choose the Right Plan",

        description: "All of our plans follow the same proven development process. The difference lies in the level of customization, features, and integrations included in each option.",
      },

      seo: {
        title: "E-Learning Systems | SatCore Solutions",

        description: "Development of e-learning platforms for online education and corporate training.",
        keywords: [
          "e-learning",
          "online courses",
          "distance education",
          "educational platform",
          "nextjs",
        ],
      },
    },

    pt: {
      title: "Sistemas de E-Learning",

      subtitle: "Plataformas de educação online",

      description: "Criamos plataformas de aprendizado eletrônico que permitem criar, gerenciar e entregar cursos online. De videotutoriais a avaliações interativas, fornecemos ferramentas completas para educação digital.",

      overview: {
        title: "O que é um Sistema de E-Learning?",

        description: "Um sistema de e-learning é uma plataforma que permite a entrega de educação pela internet. Inclui gestão de cursos, avaliações, progresso de estudantes, certificados e ferramentas de interação.",

        image: "/images/subservices/elearning-systems/elearning.png",

        imageAlt: "Sistema de e-learning",

        useCases: [
          "Cursos online",
          "Treinamento corporativo",
          "Plataformas de formação",
          "Tutoria virtual",
          "Certificações profissionais",
        ],
      },

      workflow: {
        badge: "Nosso Processo",

        title: "Como Desenvolvemos sua Plataforma",

        description: "Criamos plataformas de e-learning completas e eficazes.",

        steps: [
          {
            title: "Análise",
            description: "Estudamos suas necessidades educacionais e objetivos.",
          },
          {
            title: "Design",
            description: "Definimos a estrutura de cursos e experiência do usuário.",
          },
          {
            title: "Desenvolvimento",
            description: "Implementamos a plataforma com todas as funcionalidades.",
          },
          {
            title: "Conteúdo",
            description: "Configuramos a gestão de conteúdo e recursos.",
          },
          {
            title: "Lançamento",
            description: "Publicamos e capacitamos no uso da plataforma.",
          },
        ],
      },

      useCases: {
        title: "Quando Você Precisa de um Sistema de E-Learning?",

        description: "O e-learning é ideal para democratizar o acesso ao conhecimento.",

        useCases: [
          {
            title: "Educação a Distância",
            description: "Alcance estudantes em qualquer localização geográfica.",
          },
          {
            title: "Escalabilidade",
            description: "Eduque milhares de estudantes sem limites físicos.",
          },
          {
            title: "Custos",
            description: "Reduza custos de formação comparado com métodos tradicionais.",
          },
          {
            title: "Flexibilidade",
            description: "Estudantes aprendem no seu próprio ritmo.",
          },
          {
            title: "Acompanhamento",
            description: "Monitore o progresso e desempenho dos estudantes.",
          },
          {
            title: "Atualização",
            description: "Atualize conteúdo facilmente e rápido.",
          },
        ],
      },

      features: {
        title: "O Que Está Incluído?",

        description: "Criamos sistemas de e-learning completos com todas as ferramentas educacionais.",

        features: [
          {
            title: "Gestão de Cursos",
            description: "Crie e gerencie cursos, módulos e lições.",
          },
          {
            title: "Conteúdo Multimídia",
            description: "Suporte para vídeo, áudio, documentos e quizzes.",
          },
          {
            title: "Avaliações",
            description: "Crie exames, quizzes e tarefas com correção automática.",
          },
          {
            title: "Progresso",
            description: "Acompanhamento visual do avanço do estudante.",
          },
          {
            title: "Certificados",
            description: "Geração automática de certificados ao completar cursos.",
          },
          {
            title: "Fóruns",
            description: "Espaços de discussão entre estudantes.",
          },
          {
            title: "Gamificação",
            description: "Pontos, badges e níveis para motivar o aprendizado.",
          },
          {
            title: "Análises",
            description: "Relatórios detalhados de desempenho e engajamento.",
          },
        ],
      },

      plansSection: {
        title: "Escolha o Plano Ideal",

        description: "Todos os nossos planos seguem a mesma metodologia de desenvolvimento. A diferença está no nível de personalização, funcionalidades e integrações incluídas em cada opção.",
      },

      seo: {
        title: "Sistemas de E-Learning | SatCore Solutions",

        description: "Desenvolvimento de plataformas de e-learning para educação online e treinamento corporativo.",
        keywords: [
          "e-learning",
          "cursos online",
          "educação a distância",
          "plataforma educacional",
          "nextjs",
        ],
      },
    },
  },
  plans: []
};