import type { Pillar } from "@/types/pillar.types";

import {
  Search,
  GraduationCap,
  Code,
  Rocket,
  RefreshCw,
} from "lucide-react";

export const education: Pillar = {
  core: {
    id: "education",

    pillar: "education",

    slug: "education",

    name: "Technology Education",

    icon: "graduation-cap",

    type: "Professional Training",

    image:
      "/images/hero/hero-educacion.png",

    images: [
      "/img/services/education/1.webp",
      "/img/services/education/2.webp",
    ],

    technologies: [
      // Frontend
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Angular",
      "Tailwind CSS",
      "Framer Motion",

      // Backend
      "Node.js",
      "Express",
      "NestJS",
      "Python",
      "GraphQL",
      "Prisma",

      // Bases de Datos
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "Firebase",
      "Supabase",

      // Cloud & DevOps
      "Docker",
      "AWS",
      "Azure",
      "GCP",
      "Vercel",
      "Render",
      "Git",
      "GitHub",

      // Inteligencia Artificial
      "OpenAI",
      "Claude",
      "Gemini",
      "LangChain",
      "LlamaIndex",
      "TensorFlow",

      // Testing
      "Playwright",
      "Selenium",

      // Ciberseguridad
      "Kali",
      "Nmap",
      "Metasploit",
      "Burp",
      "OWASP",
      "OpenVAS",
      "Nessus",
      "Wireshark",
      "Autopsy",
      "Volatility",
      "ZAP",

      // Diseño
      "Figma",
      "Canva",
      "Photoshop",
      "Illustrator",
      "CapCut",

      // CMS
      "Strapi",

      // Automatización
      "n8n",

      // Productividad
      "Notion",
      "Trello",
    ]
  },

  href: "/services/education",

  translations: {
    es: {
      title:
        "Educación Tecnológica",

      category:
        "Formación Profesional",

      description:
        "Desarrolla tus habilidades técnicas mediante cursos prácticos, mentorías personalizadas y formación especializada en desarrollo de software, ciberseguridad, inteligencia artificial y tecnologías modernas.",

      imageAlt:
        "Servicio de educación tecnológica",

      hero: {
        badge:
          "Formación Profesional",
      },

      techStack: {
        title:
          "Tecnologías que aprenderás",

        description:
          "Nuestros programas de formación están basados en tecnologías actuales y buenas prácticas de la industria, combinando teoría con proyectos reales.",
      },

      serviceCatalog: {
        title:
          "Nuestros programas",

        description:
          "Explora nuestros cursos, talleres y mentorías diseñados para impulsar el crecimiento de estudiantes y profesionales del sector tecnológico.",
      },
      process: {
        title:
          "Nuestro proceso de aprendizaje",

        description:
          "Seguimos una metodología práctica y progresiva que combina teoría, ejercicios y proyectos reales para desarrollar habilidades técnicas aplicables al entorno profesional.",

        steps: [
          {
            title:
              "Evaluación inicial",

            subtitle:
              "Conocemos tu nivel de experiencia, objetivos y áreas de interés para definir la mejor ruta de aprendizaje.",

            icon: Search,
          },
          {
            title:
              "Plan de formación",

            subtitle:
              "Diseñamos un plan de estudio personalizado con contenidos, recursos y actividades prácticas.",

            icon: GraduationCap,
          },
          {
            title:
              "Aprendizaje práctico",

            subtitle:
              "Desarrollamos proyectos reales, ejercicios guiados y retos que fortalecen tus habilidades técnicas.",

            icon: Code,
          },
          {
            title:
              "Evaluación",

            subtitle:
              "Revisamos tus avances, resolvemos dudas y validamos los conocimientos adquiridos.",

            icon: Rocket,
          },
          {
            title:
              "Acompañamiento",

            subtitle:
              "Brindamos mentoría continua, recomendaciones y recursos para seguir creciendo profesionalmente.",

            icon: RefreshCw,
          },
        ],
      },

      scope: {
        title:
          "¿Qué incluye la formación?",

        description:
          "Nuestros programas están diseñados para desarrollar habilidades técnicas mediante aprendizaje práctico, acompañamiento personalizado y proyectos del mundo real.",

        cards: [
          {
            title:
              "Incluye",

            type: "include",

            items: [
              "Clases en línea",
              "Mentorías personalizadas",
              "Proyectos prácticos",
              "Material de apoyo",
              "Código fuente de ejemplos",
              "Seguimiento del progreso",
              "Certificado de participación",
            ],
          },
          {
            title:
              "No incluye",

            type: "exclude",

            items: [
              "Títulos universitarios",
              "Certificaciones oficiales de terceros",
              "Equipos de cómputo",
              "Licencias de software comerciales",
              "Garantía de contratación laboral",
            ],
          },
        ],
      },

      pricing: {
        title:
          "Planes y precios",

        description:
          "Ofrecemos diferentes modalidades de formación adaptadas a estudiantes, profesionales y empresas.",

        plans: [
          {
            title:
              "Curso Individual",

            price:
              "Desde $300.000 COP",

            time:
              "4-8 semanas",
          },
          {
            title:
              "Mentoría Personalizada",

            price:
              "Desde $80.000 COP / hora",

            time:
              "Según disponibilidad",
          },
          {
            title:
              "Bootcamp Intensivo",

            price:
              "Desde $1.500.000 COP",

            time:
              "8-12 semanas",
          },
          {
            title:
              "Capacitación Empresarial",

            price:
              "Cotización personalizada",

            time:
              "Según el programa",
          },
        ],
      },
      guarantee: {
        title:
          "Nuestro compromiso",

        description:
          "Nos comprometemos a ofrecer una formación práctica, actualizada y orientada al mundo real, acompañándote durante todo tu proceso de aprendizaje.",

        cards: [
          {
            title:
              "Aprendizaje práctico",

            description:
              "Todos nuestros programas incluyen ejercicios, proyectos reales y ejemplos aplicados para fortalecer tus habilidades técnicas y facilitar el aprendizaje.",

            icon:
              "shield-check",
          },
          {
            title:
              "Acompañamiento continuo",

            description:
              "Brindamos mentoría, resolución de dudas y recomendaciones durante la formación para ayudarte a alcanzar tus objetivos profesionales.",

            icon:
              "wrench",
          },
        ],
      },

      requirements: {
        title:
          "¿Qué necesitamos de ti?",

        description:
          "Tu compromiso y participación activa son fundamentales para aprovechar al máximo nuestros cursos y mentorías.",

        items: [
          {
            title:
              "Motivación para aprender",

            description:
              "Tener interés por adquirir nuevos conocimientos y desarrollar habilidades técnicas.",
          },
          {
            title:
              "Equipo de trabajo",

            description:
              "Contar con un computador y conexión estable a Internet para realizar las actividades del curso.",
          },
          {
            title:
              "Participación activa",

            description:
              "Asistir a las sesiones, realizar los ejercicios y participar en las actividades propuestas.",
          },
          {
            title:
              "Tiempo de estudio",

            description:
              "Dedicar tiempo adicional para practicar y reforzar los conocimientos adquiridos.",
          },
          {
            title:
              "Retroalimentación",

            description:
              "Compartir dudas, comentarios y sugerencias para mejorar el proceso de aprendizaje.",
          },
          {
            title:
              "Compromiso",

            description:
              "Mantener constancia durante la formación para alcanzar los objetivos planteados.",
          },
        ],
      },

      legal: {
        title:
          "Propiedad intelectual y aspectos legales",

        description:
          "Todo el material educativo es desarrollado respetando la propiedad intelectual y las licencias de las herramientas utilizadas durante la formación.",

        items: [
          {
            element:
              "Material del curso",

            owner:
              "SatCore Solutions",

            license:
              "Uso personal del estudiante",
          },
          {
            element:
              "Proyectos desarrollados",

            owner:
              "Estudiante",

            license:
              "Uso personal y profesional",
          },
          {
            element:
              "Herramientas y software",

            owner:
              "Terceros",

            license:
              "Según su licencia",
          },
          {
            element:
              "Metodología de enseñanza",

            owner:
              "SatCore Solutions",

            license:
              "No transferible",
          },
        ],
      },

      cta: {
        title:
          "¿Listo para impulsar tu carrera tecnológica?",

        description:
          "Aprende con proyectos reales, mentoría personalizada y tecnologías modernas para desarrollar las habilidades que demanda la industria.",

        button:
          "Comenzar mi formación",
      },
    },

    en: {
      title:
        "Technology Education",

      category:
        "Professional Training",

      description:
        "Develop your technical skills through practical courses, personalized mentoring, and hands-on training in software development, cybersecurity, artificial intelligence, and modern technologies.",

      imageAlt:
        "Technology education service",

      hero: {
        badge:
          "Professional Training",
      },

      techStack: {
        title:
          "Technologies you will learn",

        description:
          "Our training programs are based on modern technologies and industry best practices, combining theory with real-world projects.",
      },

      serviceCatalog: {
        title:
          "Our training programs",

        description:
          "Explore our courses, workshops, and mentoring programs designed to help students and professionals advance their technical careers.",
      },
      process: {
        title:
          "Our learning process",

        description:
          "We follow a practical, step-by-step methodology that combines theory, hands-on exercises, and real-world projects to build professional technical skills.",

        steps: [
          {
            title:
              "Initial Assessment",

            subtitle:
              "We evaluate your experience, goals, and interests to create the best learning path.",

            icon: Search,
          },
          {
            title:
              "Learning Plan",

            subtitle:
              "We prepare a personalized roadmap with lessons, resources, and practical activities.",

            icon: GraduationCap,
          },
          {
            title:
              "Hands-on Learning",

            subtitle:
              "You develop real projects, guided exercises, and coding challenges throughout the program.",

            icon: Code,
          },
          {
            title:
              "Evaluation",

            subtitle:
              "We review your progress, answer questions, and validate your acquired knowledge.",

            icon: Rocket,
          },
          {
            title:
              "Continuous Mentoring",

            subtitle:
              "We provide ongoing guidance, feedback, and recommendations for your professional growth.",

            icon: RefreshCw,
          },
        ],
      },

      scope: {
        title:
          "What's included",

        description:
          "Our training programs combine practical learning, personalized mentoring, and real-world projects to prepare you for today's technology industry.",

        cards: [
          {
            title:
              "Includes",

            type: "include",

            items: [
              "Online classes",
              "Personalized mentoring",
              "Hands-on projects",
              "Learning materials",
              "Source code examples",
              "Progress tracking",
              "Certificate of completion",
            ],
          },
          {
            title:
              "Does not include",

            type: "exclude",

            items: [
              "University degrees",
              "Official third-party certifications",
              "Computer equipment",
              "Commercial software licenses",
              "Job placement guarantee",
            ],
          },
        ],
      },

      pricing: {
        title:
          "Plans & pricing",

        description:
          "Choose the learning format that best fits your goals, whether you're a student, professional, or business team.",

        plans: [
          {
            title:
              "Individual Course",

            price:
              "From $80 USD",

            time:
              "4–8 weeks",
          },
          {
            title:
              "Personal Mentoring",

            price:
              "From $25 USD / hour",

            time:
              "Flexible schedule",
          },
          {
            title:
              "Intensive Bootcamp",

            price:
              "From $400 USD",

            time:
              "8–12 weeks",
          },
          {
            title:
              "Corporate Training",

            price:
              "Custom quote",

            time:
              "According to program",
          },
        ],
      },
      guarantee: {
        title:
          "Our commitment",

        description:
          "We are committed to delivering practical, up-to-date training supported by continuous guidance throughout your learning journey.",

        cards: [
          {
            title:
              "Hands-on learning",

            description:
              "Every program includes practical exercises, real-world projects, and industry-based examples to strengthen your technical skills.",

            icon:
              "shield-check",
          },
          {
            title:
              "Continuous mentoring",

            description:
              "We provide ongoing guidance, answer your questions, and support your professional growth throughout the program.",

            icon:
              "wrench",
          },
        ],
      },

      requirements: {
        title:
          "What do we need from you?",

        description:
          "Your commitment and active participation are essential for getting the most out of our courses and mentoring programs.",

        items: [
          {
            title:
              "Motivation to learn",

            description:
              "A willingness to learn new technologies and improve your technical skills.",
          },
          {
            title:
              "Computer equipment",

            description:
              "A computer and a stable Internet connection to complete the training activities.",
          },
          {
            title:
              "Active participation",

            description:
              "Attend classes, complete exercises, and participate in practical activities.",
          },
          {
            title:
              "Study time",

            description:
              "Dedicate additional time to practice and reinforce what you learn.",
          },
          {
            title:
              "Feedback",

            description:
              "Share questions, suggestions, and feedback to improve the learning experience.",
          },
          {
            title:
              "Commitment",

            description:
              "Stay consistent throughout the program to achieve your learning goals.",
          },
        ],
      },

      legal: {
        title:
          "Intellectual property & legal",

        description:
          "All educational materials are provided while respecting intellectual property rights and the licenses of the technologies used during training.",

        items: [
          {
            element:
              "Course materials",

            owner:
              "SatCore Solutions",

            license:
              "Personal student use",
          },
          {
            element:
              "Student projects",

            owner:
              "Student",

            license:
              "Personal & professional use",
          },
          {
            element:
              "Software & tools",

            owner:
              "Third parties",

            license:
              "According to their licenses",
          },
          {
            element:
              "Teaching methodology",

            owner:
              "SatCore Solutions",

            license:
              "Non-transferable",
          },
        ],
      },

      cta: {
        title:
          "Ready to boost your technology career?",

        description:
          "Learn through real-world projects, personalized mentoring, and modern technologies to build the skills today's industry demands.",

        button:
          "Start learning",
      },
    },

    pt: {
      title:
        "Educação Tecnológica",

      category:
        "Formação Profissional",

      description:
        "Desenvolva suas habilidades técnicas por meio de cursos práticos, mentorias personalizadas e treinamentos especializados em desenvolvimento de software, cibersegurança, inteligência artificial e tecnologias modernas.",

      imageAlt:
        "Serviço de educação tecnológica",

      hero: {
        badge:
          "Formação Profissional",
      },

      techStack: {
        title:
          "Tecnologias que você aprenderá",

        description:
          "Nossos programas de treinamento utilizam tecnologias modernas e boas práticas do mercado, combinando teoria e projetos reais.",
      },

      serviceCatalog: {
        title:
          "Nossos programas",

        description:
          "Conheça nossos cursos, workshops e mentorias desenvolvidos para acelerar a carreira de estudantes e profissionais de tecnologia.",
      },
      process: {
        title:
          "Nosso processo de aprendizagem",

        description:
          "Seguimos uma metodologia prática e progressiva que combina teoria, exercícios e projetos reais para desenvolver competências técnicas voltadas ao mercado.",

        steps: [
          {
            title:
              "Avaliação inicial",

            subtitle:
              "Conhecemos seu nível de experiência, objetivos e interesses para definir a melhor trilha de aprendizagem.",

            icon: Search,
          },
          {
            title:
              "Plano de estudos",

            subtitle:
              "Criamos um plano personalizado com conteúdos, recursos e atividades práticas.",

            icon: GraduationCap,
          },
          {
            title:
              "Aprendizagem prática",

            subtitle:
              "Você desenvolve projetos reais, exercícios guiados e desafios durante toda a formação.",

            icon: Code,
          },
          {
            title:
              "Avaliação",

            subtitle:
              "Acompanhamos seu progresso, esclarecemos dúvidas e validamos os conhecimentos adquiridos.",

            icon: Rocket,
          },
          {
            title:
              "Mentoria contínua",

            subtitle:
              "Oferecemos acompanhamento, feedback e recomendações para seu crescimento profissional.",

            icon: RefreshCw,
          },
        ],
      },

      scope: {
        title:
          "O que está incluído",

        description:
          "Nossos programas de formação unem aprendizado prático, mentoria personalizada e projetos reais para preparar você para o mercado de tecnologia.",

        cards: [
          {
            title:
              "Inclui",

            type: "include",

            items: [
              "Aulas online",
              "Mentorias personalizadas",
              "Projetos práticos",
              "Material de apoio",
              "Exemplos de código-fonte",
              "Acompanhamento do progresso",
              "Certificado de conclusão",
            ],
          },
          {
            title:
              "Não inclui",

            type: "exclude",

            items: [
              "Diplomas universitários",
              "Certificações oficiais de terceiros",
              "Equipamentos de informática",
              "Licenças de software comerciais",
              "Garantia de emprego",
            ],
          },
        ],
      },

      pricing: {
        title:
          "Planos e preços",

        description:
          "Oferecemos diferentes modalidades de treinamento para estudantes, profissionais e empresas.",

        plans: [
          {
            title:
              "Curso Individual",

            price:
              "A partir de US$ 80",

            time:
              "4–8 semanas",
          },
          {
            title:
              "Mentoria Personalizada",

            price:
              "A partir de US$ 25/hora",

            time:
              "Horários flexíveis",
          },
          {
            title:
              "Bootcamp Intensivo",

            price:
              "A partir de US$ 400",

            time:
              "8–12 semanas",
          },
          {
            title:
              "Treinamento Corporativo",

            price:
              "Orçamento personalizado",

            time:
              "Conforme o programa",
          },
        ],
      },
      guarantee: {
        title:
          "Nosso compromisso",

        description:
          "Estamos comprometidos em oferecer uma formação prática, atualizada e focada no mercado, acompanhando você durante toda a jornada de aprendizagem.",

        cards: [
          {
            title:
              "Aprendizagem prática",

            description:
              "Todos os programas incluem exercícios, projetos reais e exemplos aplicados para desenvolver suas competências técnicas.",

            icon:
              "shield-check",
          },
          {
            title:
              "Mentoria contínua",

            description:
              "Oferecemos acompanhamento, esclarecimento de dúvidas e orientação durante toda a formação.",

            icon:
              "wrench",
          },
        ],
      },

      requirements: {
        title:
          "O que precisamos de você?",

        description:
          "Seu comprometimento e participação ativa são fundamentais para aproveitar ao máximo nossos cursos e mentorias.",

        items: [
          {
            title:
              "Vontade de aprender",

            description:
              "Ter interesse em adquirir novos conhecimentos e desenvolver habilidades técnicas.",
          },
          {
            title:
              "Equipamento",

            description:
              "Possuir um computador e uma conexão estável com a Internet para acompanhar as atividades.",
          },
          {
            title:
              "Participação ativa",

            description:
              "Participar das aulas, realizar os exercícios e desenvolver os projetos propostos.",
          },
          {
            title:
              "Tempo de estudo",

            description:
              "Reservar tempo para praticar e consolidar os conhecimentos adquiridos.",
          },
          {
            title:
              "Feedback",

            description:
              "Compartilhar dúvidas, sugestões e comentários durante a formação.",
          },
          {
            title:
              "Compromisso",

            description:
              "Manter dedicação durante todo o programa para alcançar seus objetivos.",
          },
        ],
      },

      legal: {
        title:
          "Propriedade intelectual e aspectos legais",

        description:
          "Todo o material didático é disponibilizado respeitando os direitos autorais e as licenças das tecnologias utilizadas durante a formação.",

        items: [
          {
            element:
              "Material do curso",

            owner:
              "SatCore Solutions",

            license:
              "Uso pessoal do aluno",
          },
          {
            element:
              "Projetos desenvolvidos",

            owner:
              "Aluno",

            license:
              "Uso pessoal e profissional",
          },
          {
            element:
              "Ferramentas e softwares",

            owner:
              "Terceiros",

            license:
              "Conforme suas licenças",
          },
          {
            element:
              "Metodologia de ensino",

            owner:
              "SatCore Solutions",

            license:
              "Intransferível",
          },
        ],
      },

      cta: {
        title:
          "Pronto para impulsionar sua carreira em tecnologia?",

        description:
          "Aprenda com projetos reais, mentoria personalizada e tecnologias modernas para desenvolver as competências que o mercado procura.",

        button:
          "Começar agora",
      },
    },
  },
};