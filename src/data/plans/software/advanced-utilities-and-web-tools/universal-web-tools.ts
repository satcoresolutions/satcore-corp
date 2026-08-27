import type {
    ServicePlan,
} from "@/types/plan.types";

export const universalWebTools: ServicePlan = {
    core: {
        // ────────────────────────────────────
        // Identidad
        // ────────────────────────────────────

        id: "APP-004",

        slug: "universal-web-tools",

        // ────────────────────────────────────
        // Comercial
        // ────────────────────────────────────

        complexity: "⭐⭐⭐ (3/5)",

        price: "$180 - $450 USD",

        pricingType: "fixed",

        automationLevel: "high",

        // ────────────────────────────────────
        // Técnico
        // ────────────────────────────────────

        stack: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
        ],

        technologies: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Client-side Logic",
            "Dynamic Interfaces",
            "Reusable Components",
            "Form Validation",
            "State Management",
            "Interactive UI",
            "Responsive Design",
            "Type-safe Logic",
        ],

        integrations: [
            "REST APIs",
            "External Data Sources",
            "Third-party Services",
        ],

        // ────────────────────────────────────
        // Multimedia
        // ────────────────────────────────────

        heroImage:
            "/images/services/software/hero/hero-universal-web-tools.png",

        image:
            "/images/services/software/hero/hero-universal-web-tools.png",
    },

    translations: {
        // ═════════════════════════════════════
        // ESPAÑOL
        // ═════════════════════════════════════

        es: {
            name:
                "Herramientas Web Universales",

            title:
                "Herramientas Web Universales",

            level:
                "🟡 Intermedio",

            category:
                "Utilidades Avanzadas y Herramientas Web",

            description:
                "Herramientas web interactivas y personalizadas diseñadas para resolver necesidades específicas de usuarios, empresas y proyectos digitales mediante interfaces dinámicas, lógica personalizada y componentes reutilizables.",

            time:
                "2-4 semanas",

            imageAlt:
                "Herramientas web universales e interactivas",

            target:
                "Empresas, profesionales, instituciones y proyectos digitales que necesitan implementar herramientas web específicas para automatizar tareas, facilitar procesos, consultar información o mejorar la experiencia de sus usuarios.",

            support:
                "30 días soporte post-entrega",

            useCases: [
                "Herramientas interactivas",
                "Generadores de contenido",
                "Conversores",
                "Validadores",
                "Calculadoras especializadas",
                "Buscadores personalizados",
                "Herramientas de consulta",
                "Utilidades empresariales",
                "Herramientas educativas",
                "Herramientas administrativas",
            ],

            includes: [
                "Herramienta web personalizada",
                "Interfaz interactiva",
                "Lógica personalizada",
                "Componentes reutilizables",
                "Validación de entradas",
                "Manejo de estados",
                "Resultados dinámicos",
                "Diseño responsive",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
            ],

            notIncludes: [
                "Backend complejo",
                "Base de datos empresarial",
                "Aplicación móvil nativa",
                "Sistema avanzado de autenticación",
                "Procesamiento masivo de datos",
                "Infraestructura cloud administrada",
            ],

            features: [
                "Interactive Web Tools",
                "Custom Logic",
                "Dynamic Interfaces",
                "Reusable Components",
                "Input Validation",
                "State Management",
                "Dynamic Results",
                "Type-safe Logic",
                "Responsive Design",
                "Client-side Processing",
            ],

            deliverables: [
                "Herramienta web publicada",
                "Interfaz interactiva",
                "Lógica personalizada",
                "Componentes reutilizables",
                "Validación de entradas",
                "Resultados dinámicos",
                "Diseño responsive",
                "Código fuente",
                "Documentación técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Soluciones personalizadas",

                    description:
                        "Cada herramienta puede diseñarse específicamente para resolver una necesidad funcional concreta del proyecto.",
                },

                {
                    title:
                        "Experiencia interactiva",

                    description:
                        "Las interfaces dinámicas permiten que los usuarios interactúen directamente con la herramienta y obtengan resultados de forma inmediata.",
                },

                {
                    title:
                        "Componentes reutilizables",

                    description:
                        "La arquitectura permite construir herramientas mediante componentes reutilizables que facilitan futuras ampliaciones.",
                },

                {
                    title:
                        "Automatización",

                    description:
                        "Las herramientas pueden automatizar tareas repetitivas y simplificar procesos que anteriormente requerían intervención manual.",
                },
            ],

            process: [
                {
                    title:
                        "Definición de la necesidad",

                    description:
                        "Identificamos el problema, proceso o tarea que la herramienta debe resolver y definimos sus reglas funcionales.",
                },

                {
                    title:
                        "Diseño de la herramienta",

                    description:
                        "Diseñamos la estructura de interacción, entradas, resultados y componentes necesarios para la herramienta.",
                },

                {
                    title:
                        "Construcción de la lógica",

                    description:
                        "Implementamos las reglas, algoritmos y comportamientos necesarios utilizando TypeScript.",
                },

                {
                    title:
                        "Desarrollo de interfaz",

                    description:
                        "Construimos una interfaz responsive utilizando Next.js, TypeScript y Tailwind CSS.",
                },

                {
                    title:
                        "Validación y pruebas",

                    description:
                        "Probamos diferentes escenarios de uso para garantizar que la herramienta funcione correctamente y responda a las condiciones definidas.",
                },
            ],

            faq: [
                {
                    question:
                        "¿Qué son las Herramientas Web Universales?",

                    answer:
                        "Son herramientas digitales personalizadas diseñadas para resolver tareas, procesos o necesidades específicas directamente desde una interfaz web.",
                },

                {
                    question:
                        "¿Qué tipo de herramientas pueden desarrollarse?",

                    answer:
                        "Se pueden desarrollar generadores, conversores, validadores, buscadores, calculadoras especializadas, herramientas de consulta, utilidades empresariales y muchas otras soluciones interactivas.",
                },

                {
                    question:
                        "¿Pueden funcionar sin backend?",

                    answer:
                        "Sí. Muchas herramientas pueden funcionar completamente en el navegador cuando no necesitan almacenar información ni realizar procesamiento en servidor.",
                },

                {
                    question:
                        "¿Pueden conectarse con APIs?",

                    answer:
                        "Sí. Las herramientas pueden integrarse con APIs externas y fuentes de datos cuando el proyecto requiere información dinámica.",
                },
            ],
        },

        // ═════════════════════════════════════
        // ENGLISH
        // ═════════════════════════════════════

        en: {
            name:
                "Universal Web Tools",

            title:
                "Universal Web Tools",

            level:
                "🟡 Intermediate",

            category:
                "Advanced Utilities & Web Tools",

            description:
                "Interactive and customized web tools designed to solve specific needs for users, businesses, and digital projects through dynamic interfaces, custom logic, and reusable components.",

            time:
                "2-4 weeks",

            imageAlt:
                "Universal interactive web tools",

            target:
                "Companies, professionals, institutions, and digital projects that need specific web tools to automate tasks, simplify processes, access information, or improve user experiences.",

            support:
                "30 days post-delivery support",

            useCases: [
                "Interactive tools",
                "Content generators",
                "Converters",
                "Validators",
                "Specialized calculators",
                "Custom search tools",
                "Information tools",
                "Business utilities",
                "Educational tools",
                "Administrative tools",
            ],

            includes: [
                "Custom web tool",
                "Interactive interface",
                "Custom logic",
                "Reusable components",
                "Input validation",
                "State management",
                "Dynamic results",
                "Responsive design",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
            ],

            notIncludes: [
                "Complex backend",
                "Enterprise database",
                "Native mobile application",
                "Advanced authentication system",
                "Large-scale data processing",
                "Managed cloud infrastructure",
            ],

            features: [
                "Interactive Web Tools",
                "Custom Logic",
                "Dynamic Interfaces",
                "Reusable Components",
                "Input Validation",
                "State Management",
                "Dynamic Results",
                "Type-safe Logic",
                "Responsive Design",
                "Client-side Processing",
            ],

            deliverables: [
                "Published web tool",
                "Interactive interface",
                "Custom logic",
                "Reusable components",
                "Input validation",
                "Dynamic results",
                "Responsive design",
                "Source code",
                "Technical documentation",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Custom Solutions",

                    description:
                        "Each tool can be specifically designed to solve a concrete functional need within the project.",
                },

                {
                    title:
                        "Interactive Experience",

                    description:
                        "Dynamic interfaces allow users to interact directly with the tool and obtain immediate results.",
                },

                {
                    title:
                        "Reusable Components",

                    description:
                        "The architecture allows tools to be built using reusable components that facilitate future extensions.",
                },

                {
                    title:
                        "Automation",

                    description:
                        "Web tools can automate repetitive tasks and simplify processes that previously required manual intervention.",
                },
            ],

            process: [
                {
                    title:
                        "Need Definition",

                    description:
                        "We identify the problem, process, or task the tool needs to solve and define its functional rules.",
                },

                {
                    title:
                        "Tool Design",

                    description:
                        "We design the interaction structure, inputs, results, and components required by the tool.",
                },

                {
                    title:
                        "Logic Development",

                    description:
                        "We implement the required rules, algorithms, and behaviors using TypeScript.",
                },

                {
                    title:
                        "Interface Development",

                    description:
                        "We build a responsive interface using Next.js, TypeScript, and Tailwind CSS.",
                },

                {
                    title:
                        "Validation and Testing",

                    description:
                        "We test different usage scenarios to ensure that the tool behaves correctly under the defined conditions.",
                },
            ],

            faq: [
                {
                    question:
                        "What are Universal Web Tools?",

                    answer:
                        "They are customized digital tools designed to solve specific tasks, processes, or needs through a web interface.",
                },

                {
                    question:
                        "What types of tools can be developed?",

                    answer:
                        "Generators, converters, validators, search tools, specialized calculators, information tools, business utilities, and many other interactive solutions can be developed.",
                },

                {
                    question:
                        "Can they work without a backend?",

                    answer:
                        "Yes. Many tools can operate entirely in the browser when they do not need server-side storage or processing.",
                },

                {
                    question:
                        "Can they connect to APIs?",

                    answer:
                        "Yes. Tools can integrate with external APIs and data sources when dynamic information is required.",
                },
            ],
        },

        // ═════════════════════════════════════
        // PORTUGUÊS
        // ═════════════════════════════════════

        pt: {
            name:
                "Ferramentas Web Universais",

            title:
                "Ferramentas Web Universais",

            level:
                "🟡 Intermediário",

            category:
                "Utilidades Avançadas e Ferramentas Web",

            description:
                "Ferramentas web interativas e personalizadas desenvolvidas para resolver necessidades específicas de usuários, empresas e projetos digitais por meio de interfaces dinâmicas, lógica personalizada e componentes reutilizáveis.",

            time:
                "2-4 semanas",

            imageAlt:
                "Ferramentas web universais e interativas",

            target:
                "Empresas, profissionais, instituições e projetos digitais que precisam implementar ferramentas web específicas para automatizar tarefas, simplificar processos, consultar informações ou melhorar a experiência dos usuários.",

            support:
                "30 dias de suporte pós-entrega",

            useCases: [
                "Ferramentas interativas",
                "Geradores de conteúdo",
                "Conversores",
                "Validadores",
                "Calculadoras especializadas",
                "Ferramentas de busca",
                "Ferramentas de consulta",
                "Utilidades empresariais",
                "Ferramentas educacionais",
                "Ferramentas administrativas",
            ],

            includes: [
                "Ferramenta web personalizada",
                "Interface interativa",
                "Lógica personalizada",
                "Componentes reutilizáveis",
                "Validação de entradas",
                "Gerenciamento de estado",
                "Resultados dinâmicos",
                "Design responsivo",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
            ],

            notIncludes: [
                "Backend complexo",
                "Banco de dados empresarial",
                "Aplicação móvel nativa",
                "Sistema avançado de autenticação",
                "Processamento massivo de dados",
                "Infraestrutura cloud gerenciada",
            ],

            features: [
                "Interactive Web Tools",
                "Custom Logic",
                "Dynamic Interfaces",
                "Reusable Components",
                "Input Validation",
                "State Management",
                "Dynamic Results",
                "Type-safe Logic",
                "Responsive Design",
                "Client-side Processing",
            ],

            deliverables: [
                "Ferramenta web publicada",
                "Interface interativa",
                "Lógica personalizada",
                "Componentes reutilizáveis",
                "Validação de entradas",
                "Resultados dinâmicos",
                "Design responsivo",
                "Código-fonte",
                "Documentação técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Soluções personalizadas",

                    description:
                        "Cada ferramenta pode ser projetada especificamente para resolver uma necessidade funcional concreta do projeto.",
                },

                {
                    title:
                        "Experiência interativa",

                    description:
                        "Interfaces dinâmicas permitem que os usuários interajam diretamente com a ferramenta e obtenham resultados imediatos.",
                },

                {
                    title:
                        "Componentes reutilizáveis",

                    description:
                        "A arquitetura permite construir ferramentas utilizando componentes reutilizáveis que facilitam futuras ampliações.",
                },

                {
                    title:
                        "Automação",

                    description:
                        "As ferramentas podem automatizar tarefas repetitivas e simplificar processos que anteriormente exigiam intervenção manual.",
                },
            ],

            process: [
                {
                    title:
                        "Definição da necessidade",

                    description:
                        "Identificamos o problema, processo ou tarefa que a ferramenta deve resolver e definimos suas regras funcionais.",
                },

                {
                    title:
                        "Design da ferramenta",

                    description:
                        "Projetamos a estrutura de interação, entradas, resultados e componentes necessários para a ferramenta.",
                },

                {
                    title:
                        "Construção da lógica",

                    description:
                        "Implementamos as regras, algoritmos e comportamentos necessários utilizando TypeScript.",
                },

                {
                    title:
                        "Desenvolvimento da interface",

                    description:
                        "Construímos uma interface responsiva utilizando Next.js, TypeScript e Tailwind CSS.",
                },

                {
                    title:
                        "Validação e testes",

                    description:
                        "Testamos diferentes cenários de uso para garantir que a ferramenta funcione corretamente e responda às condições definidas.",
                },
            ],

            faq: [
                {
                    question:
                        "O que são Ferramentas Web Universais?",

                    answer:
                        "São ferramentas digitais personalizadas desenvolvidas para resolver tarefas, processos ou necessidades específicas por meio de uma interface web.",
                },

                {
                    question:
                        "Que tipos de ferramentas podem ser desenvolvidos?",

                    answer:
                        "Podem ser desenvolvidos geradores, conversores, validadores, ferramentas de busca, calculadoras especializadas, ferramentas de consulta, utilidades empresariais e muitas outras soluções interativas.",
                },

                {
                    question:
                        "Podem funcionar sem backend?",

                    answer:
                        "Sim. Muitas ferramentas podem funcionar completamente no navegador quando não precisam de armazenamento ou processamento no servidor.",
                },

                {
                    question:
                        "Podem se conectar a APIs?",

                    answer:
                        "Sim. As ferramentas podem integrar APIs externas e fontes de dados quando o projeto necessita de informações dinâmicas.",
                },
            ],
        },
    },
};