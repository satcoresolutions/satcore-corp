import type { Pillar }  from "@/types/pillar.types";

import {
    Search,
    Palette,
    Code,
    Rocket,
    RefreshCw,
} from "lucide-react";

export const cyberSecurity: Pillar = {
    core: {
        id: "cybersecurity",

        pillar: "cybersecurity",

        slug: "cybersecurity",

        name: "Cybersecurity",

        icon: "shield",

        type: "Cybersecurity",

        image:
            "/img/services/cybersecurity/cover.webp",

        images: [
            "/img/services/cybersecurity/1.webp",
            "/img/services/cybersecurity/2.webp",
        ],

        technologies: [
            // OPERATING SYSTEMS
            "Linux",
            "Windows Server",

            // SECURITY FRAMEWORKS
            "OWASP",
            "MITRE ATT&CK",
            "NIST",
            "CIS Controls",

            // PENTESTING
            "Kali Linux",
            "Metasploit",
            "Burp Suite",
            "Nmap",
            "Wireshark",

            // VULNERABILITY SCANNING
            "OpenVAS",
            "Nessus",

            // CLOUD SECURITY
            "AWS",
            "Azure",

            // AUTOMATION
            "Python",
            "Bash",

            // VERSION CONTROL
            "Git",
            "GitHub",
        ],
    },

    href: "/services/cybersecurity",
    translations: {
        es: {
            title:
                "Ciberseguridad",

            category:
                "Ciberseguridad",

            description:
                "Protege tu organización con soluciones integrales de ciberseguridad diseñadas para identificar vulnerabilidades, fortalecer tu infraestructura y reducir riesgos mediante las mejores prácticas del sector.",

            imageAlt:
                "Servicio de ciberseguridad",

            hero: {
                badge:
                    "Ciberseguridad",
            },

            techStack: {
                title:
                    "Tecnologías que utilizamos",

                description:
                    "Utilizamos frameworks, herramientas y plataformas líderes en la industria para evaluar, proteger, monitorear y fortalecer tu infraestructura digital.",
            },

            serviceCatalog: {
                title:
                    "Nuestros servicios",

                description:
                    "Explora nuestras soluciones de ciberseguridad diseñadas para proteger tu empresa, mejorar su resiliencia y garantizar el cumplimiento de estándares de seguridad.",
            },

            process: {
                title:
                    "Nuestro proceso de seguridad",

                description:
                    "Seguimos una metodología estructurada para identificar amenazas, evaluar riesgos, implementar controles y mejorar continuamente la postura de seguridad de tu organización.",

                steps: [
                    {
                        title:
                            "Evaluación",

                        subtitle:
                            "Analizamos tu infraestructura, identificamos riesgos y definimos el alcance de la evaluación de seguridad.",

                        icon: Search,
                    },

                    {
                        title:
                            "Análisis de seguridad",

                        subtitle:
                            "Realizamos análisis de vulnerabilidades, pruebas de penetración y revisiones de configuración.",

                        icon: Palette,
                    },

                    {
                        title:
                            "Remediación",

                        subtitle:
                            "Fortalecemos los sistemas, aplicamos buenas prácticas de seguridad y corregimos las vulnerabilidades detectadas.",

                        icon: Code,
                    },

                    {
                        title:
                            "Validación",

                        subtitle:
                            "Verificamos los controles implementados, realizamos pruebas finales y entregamos informes detallados.",

                        icon: Rocket,
                    },

                    {
                        title:
                            "Protección continua",

                        subtitle:
                            "Brindamos recomendaciones, monitoreo y mejoras continuas para mantener un alto nivel de seguridad.",

                        icon: RefreshCw,
                    },
                ],
            },
            scope: {
                title:
                    "Alcance del servicio",

                description:
                    "Nuestros servicios de ciberseguridad están diseñados para identificar riesgos, fortalecer tu infraestructura y mejorar la postura de seguridad de tu organización mediante las mejores prácticas del sector.",

                cards: [
                    {
                        title:
                            "Incluye",

                        type: "include",

                        items: [
                            "Evaluación de seguridad",
                            "Análisis de vulnerabilidades",
                            "Revisión de la infraestructura",
                            "Recomendaciones de hardening",
                            "Informe de buenas prácticas",
                            "Resumen ejecutivo",
                            "Documentación técnica",
                        ],
                    },
                    {
                        title:
                            "No incluye",

                        type: "exclude",

                        items: [
                            "Centro de operaciones de seguridad (SOC) 24/7",
                            "Servicios administrados de seguridad",
                            "Respuesta a incidentes permanente",
                            "Procesos de certificación normativa",
                            "Reemplazo de hardware",
                        ],
                    },
                ],
            },

            pricing: {
                title:
                    "Planes y precios",

                description:
                    "Cada organización tiene necesidades de seguridad diferentes. Adaptamos nuestros servicios según tu infraestructura, nivel de riesgo y objetivos del negocio.",

                plans: [
                    {
                        title:
                            "Evaluación de seguridad",

                        price:
                            "Desde USD 300",

                        time:
                            "2-5 días hábiles",
                    },
                    {
                        title:
                            "Análisis de vulnerabilidades",

                        price:
                            "Desde USD 600",

                        time:
                            "1-2 semanas",
                    },
                    {
                        title:
                            "Pruebas de penetración",

                        price:
                            "Desde USD 1.200",

                        time:
                            "2-4 semanas",
                    },
                    {
                        title:
                            "Auditoría empresarial",

                        price:
                            "Cotización personalizada",

                        time:
                            "Según el alcance del proyecto",
                    },
                ],
            },

            guarantee: {
                title:
                    "Nuestro compromiso",

                description:
                    "Cada servicio incluye documentación detallada, recomendaciones priorizadas y acompañamiento profesional para fortalecer la seguridad de tu organización.",

                cards: [
                    {
                        title:
                            "Resultados verificados",

                        description:
                            "Todas las vulnerabilidades identificadas son documentadas, validadas y priorizadas según su nivel de riesgo, junto con recomendaciones claras para su remediación.",

                        icon:
                            "shield-check",
                    },
                    {
                        title:
                            "Acompañamiento posterior",

                        description:
                            "Brindamos orientación durante la implementación de las mejoras, resolvemos dudas técnicas y validamos las correcciones aplicadas.",

                        icon:
                            "wrench",
                    },
                ],
            },
            requirements: {
                title:
                    "¿Qué necesitamos de ti?",

                description:
                    "Conocer tu infraestructura, objetivos de negocio y necesidades de seguridad nos permite realizar una evaluación precisa y adaptada a tu organización.",

                items: [
                    {
                        title:
                            "Información de la infraestructura",

                        description:
                            "Comparte información sobre tus sistemas, red, aplicaciones y cualquier documentación técnica relevante.",
                    },
                    {
                        title:
                            "Interlocutor principal",

                        description:
                            "Designa una persona de contacto para facilitar la comunicación y coordinar el proceso de evaluación.",
                    },
                    {
                        title:
                            "Definición del alcance",

                        description:
                            "Especifica los activos, aplicaciones, redes o entornos que harán parte de la auditoría o evaluación de seguridad.",
                    },
                    {
                        title:
                            "Autorización de accesos",

                        description:
                            "Proporciona las credenciales, accesos VPN, cuentas de prueba o permisos necesarios para realizar las actividades acordadas.",
                    },
                    {
                        title:
                            "Disponibilidad",

                        description:
                            "Garantiza la disponibilidad del personal y de los sistemas durante la evaluación para agilizar el proceso y validar los resultados.",
                    },
                    {
                        title:
                            "Colaboración",

                        description:
                            "Participa en la revisión de hallazgos, responde las consultas técnicas y colabora en la planificación de las acciones correctivas.",
                    },
                ],
            },

            legal: {
                title:
                    "Confidencialidad y aspectos legales",

                description:
                    "Todos nuestros servicios de ciberseguridad se desarrollan bajo acuerdos claros de confidencialidad, protección de datos y propiedad de los entregables.",

                items: [
                    {
                        element:
                            "Informes de seguridad",

                        owner:
                            "Cliente",

                        license:
                            "Propiedad total",
                    },
                    {
                        element:
                            "Resultados de la evaluación",

                        owner:
                            "Cliente",

                        license:
                            "Confidencial",
                    },
                    {
                        element:
                            "Herramientas de terceros",

                        owner:
                            "Terceros",

                        license:
                            "Según sus respectivas licencias",
                    },
                    {
                        element:
                            "Metodología y frameworks",

                        owner:
                            "SatCore Solutions",

                        license:
                            "No transferible",
                    },
                ],
            },

            cta: {
                title:
                    "¿Listo para fortalecer tu ciberseguridad?",

                description:
                    "Conversemos sobre tu infraestructura, identifiquemos los riesgos y diseñemos una estrategia para proteger tu organización.",

                button:
                    "Solicitar evaluación de seguridad",
            },
        },

        en: {
            title:
                "Cybersecurity",

            category:
                "Cybersecurity",

            description:
                "Protect your organization with comprehensive cybersecurity solutions designed to identify vulnerabilities, strengthen your infrastructure, and reduce security risks through industry best practices.",

            imageAlt:
                "Cybersecurity service",

            hero: {
                badge:
                    "Cybersecurity",
            },

            techStack: {
                title:
                    "Technologies We Use",

                description:
                    "We leverage industry-leading security frameworks, tools, and platforms to assess, protect, monitor, and strengthen your digital infrastructure.",
            },

            serviceCatalog: {
                title:
                    "Our Services",

                description:
                    "Explore our cybersecurity solutions designed to safeguard your business, improve resilience, and ensure compliance with security standards.",
            },

            process: {
                title:
                    "Our Security Process",

                description:
                    "We follow a structured methodology to identify threats, assess risks, implement protections, and continuously improve your security posture.",

                steps: [
                    {
                        title:
                            "Assessment",

                        subtitle:
                            "We analyze your infrastructure, identify risks, and define the scope of the security assessment.",

                        icon: Search,
                    },

                    {
                        title:
                            "Security Analysis",

                        subtitle:
                            "We perform vulnerability assessments, penetration testing, and configuration reviews.",

                        icon: Palette,
                    },

                    {
                        title:
                            "Remediation",

                        subtitle:
                            "We strengthen systems, apply security best practices, and mitigate identified vulnerabilities.",

                        icon: Code,
                    },

                    {
                        title:
                            "Validation",

                        subtitle:
                            "We verify implemented controls, perform final testing, and deliver comprehensive security reports.",

                        icon: Rocket,
                    },

                    {
                        title:
                            "Continuous Protection",

                        subtitle:
                            "We provide ongoing recommendations, monitoring, and continuous security improvements.",

                        icon: RefreshCw,
                    },
                ],
            },
            scope: {
                title:
                    "Cybersecurity Coverage",

                description:
                    "Our cybersecurity services are designed to identify risks, strengthen your infrastructure, and improve your organization's security posture through industry best practices.",

                cards: [
                    {
                        title:
                            "Included",

                        type: "include",

                        items: [
                            "Security assessment",
                            "Vulnerability scanning",
                            "Infrastructure security review",
                            "Configuration hardening recommendations",
                            "Security best practices report",
                            "Executive summary",
                            "Technical documentation",
                        ],
                    },
                    {
                        title:
                            "Not Included",

                        type: "exclude",

                        items: [
                            "24/7 Security Operations Center (SOC)",
                            "Managed security services",
                            "Incident response retainers",
                            "Regulatory certification processes",
                            "Hardware replacement",
                        ],
                    },
                ],
            },

            pricing: {
                title:
                    "Plans & Pricing",

                description:
                    "Every organization has different security needs. Our services are tailored to your infrastructure, risk level, and business objectives.",

                plans: [
                    {
                        title:
                            "Security Assessment",

                        price:
                            "From $300 USD",

                        time:
                            "2–5 business days",
                    },
                    {
                        title:
                            "Vulnerability Assessment",

                        price:
                            "From $600 USD",

                        time:
                            "1–2 weeks",
                    },
                    {
                        title:
                            "Penetration Testing",

                        price:
                            "From $1,200 USD",

                        time:
                            "2–4 weeks",
                    },
                    {
                        title:
                            "Enterprise Security Audit",

                        price:
                            "Custom quotation",

                        time:
                            "According to project scope",
                    },
                ],
            },

            guarantee: {
                title:
                    "Our Commitment",

                description:
                    "Every security engagement includes detailed documentation, actionable recommendations, and professional guidance to help improve your cybersecurity posture.",

                cards: [
                    {
                        title:
                            "Verified Results",

                        description:
                            "Every identified vulnerability is documented, validated, and prioritized according to its impact, along with practical remediation recommendations.",

                        icon:
                            "shield-check",
                    },
                    {
                        title:
                            "Post-Assessment Support",

                        description:
                            "We provide guidance during the remediation process, answer technical questions, and help validate implemented security improvements.",

                        icon:
                            "wrench",
                    },
                ],
            },
            requirements: {
                title:
                    "What do we need from you?",

                description:
                    "Understanding your infrastructure, business objectives, and security concerns allows us to deliver an effective cybersecurity assessment tailored to your organization.",

                items: [
                    {
                        title:
                            "Infrastructure Information",

                        description:
                            "Provide an overview of your systems, network architecture, applications, and any relevant technical documentation.",
                    },
                    {
                        title:
                            "Primary Contact",

                        description:
                            "Assign a technical or business representative to facilitate communication and coordinate the assessment process.",
                    },
                    {
                        title:
                            "Scope Definition",

                        description:
                            "Clearly define the assets, applications, networks, or environments that will be included in the security assessment.",
                    },
                    {
                        title:
                            "Access Authorization",

                        description:
                            "Provide the required credentials, VPN access, test accounts, or permissions necessary to perform the agreed security activities.",
                    },
                    {
                        title:
                            "Availability",

                        description:
                            "Ensure the necessary personnel and systems are available during the assessment to minimize delays and facilitate validation.",
                    },
                    {
                        title:
                            "Collaboration",

                        description:
                            "Review findings, answer technical questions, and participate in remediation planning to maximize the value of the assessment.",
                    },
                ],
            },

            legal: {
                title:
                    "Confidentiality & Legal Considerations",

                description:
                    "Every cybersecurity engagement is governed by clear agreements covering confidentiality, data protection, reporting, and ownership of deliverables.",

                items: [
                    {
                        element:
                            "Security Reports",

                        owner:
                            "Client",

                        license:
                            "Full ownership",
                    },
                    {
                        element:
                            "Assessment Results",

                        owner:
                            "Client",

                        license:
                            "Confidential",
                    },
                    {
                        element:
                            "Third-party Tools",

                        owner:
                            "Third Parties",

                        license:
                            "Subject to their respective licenses",
                    },
                    {
                        element:
                            "Methodology & Frameworks",

                        owner:
                            "SatCore Solutions",

                        license:
                            "Non-transferable",
                    },
                ],
            },

            cta: {
                title:
                    "Ready to strengthen your cybersecurity?",

                description:
                    "Let's identify vulnerabilities, reduce risks, and build a stronger security posture for your business.",

                button:
                    "Request a Security Assessment",
            },
        },


        pt: {
            title:
                "Cibersegurança",

            category:
                "Cibersegurança",

            description:
                "Proteja sua organização com soluções completas de cibersegurança desenvolvidas para identificar vulnerabilidades, fortalecer sua infraestrutura e reduzir riscos por meio das melhores práticas do mercado.",

            imageAlt:
                "Serviço de cibersegurança",

            hero: {
                badge:
                    "Cibersegurança",
            },

            techStack: {
                title:
                    "Tecnologias que utilizamos",

                description:
                    "Utilizamos frameworks, ferramentas e plataformas líderes do setor para avaliar, proteger, monitorar e fortalecer sua infraestrutura digital.",
            },

            serviceCatalog: {
                title:
                    "Nossos serviços",

                description:
                    "Conheça nossas soluções de cibersegurança desenvolvidas para proteger sua empresa, aumentar sua resiliência e garantir conformidade com os padrões de segurança.",
            },

            process: {
                title:
                    "Nosso processo de segurança",

                description:
                    "Seguimos uma metodologia estruturada para identificar ameaças, avaliar riscos, implementar controles e melhorar continuamente a postura de segurança da sua organização.",

                steps: [
                    {
                        title:
                            "Avaliação",

                        subtitle:
                            "Analisamos sua infraestrutura, identificamos riscos e definimos o escopo da avaliação de segurança.",

                        icon: Search,
                    },

                    {
                        title:
                            "Análise de segurança",

                        subtitle:
                            "Realizamos avaliações de vulnerabilidades, testes de invasão e revisões de configuração.",

                        icon: Palette,
                    },

                    {
                        title:
                            "Remediação",

                        subtitle:
                            "Fortalecemos os sistemas, aplicamos boas práticas de segurança e corrigimos as vulnerabilidades identificadas.",

                        icon: Code,
                    },

                    {
                        title:
                            "Validação",

                        subtitle:
                            "Verificamos os controles implementados, realizamos testes finais e entregamos relatórios completos.",

                        icon: Rocket,
                    },

                    {
                        title:
                            "Proteção contínua",

                        subtitle:
                            "Fornecemos recomendações, monitoramento e melhorias contínuas para manter um alto nível de segurança.",

                        icon: RefreshCw,
                    },
                ],
            },

            scope: {
                title:
                    "Escopo do serviço",

                description:
                    "Nossos serviços de cibersegurança foram desenvolvidos para identificar riscos, fortalecer sua infraestrutura e melhorar a postura de segurança da sua organização por meio das melhores práticas do mercado.",

                cards: [
                    {
                        title:
                            "Inclui",

                        type: "include",

                        items: [
                            "Avaliação de segurança",
                            "Análise de vulnerabilidades",
                            "Revisão da infraestrutura",
                            "Recomendações de hardening",
                            "Relatório de boas práticas",
                            "Resumo executivo",
                            "Documentação técnica",
                        ],
                    },
                    {
                        title:
                            "Não inclui",

                        type: "exclude",

                        items: [
                            "Centro de Operações de Segurança (SOC) 24/7",
                            "Serviços gerenciados de segurança",
                            "Resposta contínua a incidentes",
                            "Processos de certificação regulatória",
                            "Substituição de hardware",
                        ],
                    },
                ],
            },

            pricing: {
                title:
                    "Planos e preços",

                description:
                    "Cada organização possui necessidades diferentes de segurança. Adaptamos nossos serviços conforme sua infraestrutura, nível de risco e objetivos do negócio.",

                plans: [
                    {
                        title:
                            "Avaliação de Segurança",

                        price:
                            "A partir de US$ 300",

                        time:
                            "2–5 dias úteis",
                    },
                    {
                        title:
                            "Análise de Vulnerabilidades",

                        price:
                            "A partir de US$ 600",

                        time:
                            "1–2 semanas",
                    },
                    {
                        title:
                            "Teste de Penetração",

                        price:
                            "A partir de US$ 1.200",

                        time:
                            "2–4 semanas",
                    },
                    {
                        title:
                            "Auditoria Corporativa",

                        price:
                            "Orçamento personalizado",

                        time:
                            "Conforme o escopo do projeto",
                    },
                ],
            },

            guarantee: {
                title:
                    "Nosso compromisso",

                description:
                    "Cada projeto inclui documentação detalhada, recomendações priorizadas e suporte profissional para fortalecer a segurança da sua organização.",

                cards: [
                    {
                        title:
                            "Resultados verificados",

                        description:
                            "Todas as vulnerabilidades identificadas são documentadas, validadas e priorizadas de acordo com seu nível de risco, juntamente com recomendações práticas para correção.",

                        icon:
                            "shield-check",
                    },
                    {
                        title:
                            "Suporte pós-avaliação",

                        description:
                            "Fornecemos orientação durante a implementação das melhorias, esclarecemos dúvidas técnicas e ajudamos a validar as correções realizadas.",

                        icon:
                            "wrench",
                    },
                ],
            },
            requirements: {
                title:
                    "O que precisamos de você?",

                description:
                    "Compreender sua infraestrutura, objetivos de negócio e necessidades de segurança nos permite realizar uma avaliação precisa e personalizada para sua organização.",

                items: [
                    {
                        title:
                            "Informações da infraestrutura",

                        description:
                            "Compartilhe informações sobre seus sistemas, rede, aplicações e qualquer documentação técnica relevante.",
                    },
                    {
                        title:
                            "Contato principal",

                        description:
                            "Defina um responsável para facilitar a comunicação e coordenar todo o processo de avaliação.",
                    },
                    {
                        title:
                            "Definição do escopo",

                        description:
                            "Especifique os ativos, aplicações, redes ou ambientes que serão incluídos na auditoria ou avaliação de segurança.",
                    },
                    {
                        title:
                            "Autorização de acesso",

                        description:
                            "Forneça credenciais, acesso VPN, contas de teste ou permissões necessárias para executar as atividades acordadas.",
                    },
                    {
                        title:
                            "Disponibilidade",

                        description:
                            "Garanta a disponibilidade da equipe e dos sistemas durante a avaliação para facilitar a validação dos resultados.",
                    },
                    {
                        title:
                            "Colaboração",

                        description:
                            "Participe da análise dos resultados, responda às dúvidas técnicas e colabore na definição das ações de correção.",
                    },
                ],
            },

            legal: {
                title:
                    "Confidencialidade e aspectos legais",

                description:
                    "Todos os nossos serviços de cibersegurança são realizados sob acordos claros de confidencialidade, proteção de dados e propriedade dos entregáveis.",

                items: [
                    {
                        element:
                            "Relatórios de segurança",

                        owner:
                            "Cliente",

                        license:
                            "Propriedade total",
                    },
                    {
                        element:
                            "Resultados da avaliação",

                        owner:
                            "Cliente",

                        license:
                            "Confidencial",
                    },
                    {
                        element:
                            "Ferramentas de terceiros",

                        owner:
                            "Terceiros",

                        license:
                            "Conforme suas respectivas licenças",
                    },
                    {
                        element:
                            "Metodologia e frameworks",

                        owner:
                            "SatCore Solutions",

                        license:
                            "Intransferível",
                    },
                ],
            },

            cta: {
                title:
                    "Pronto para fortalecer sua cibersegurança?",

                description:
                    "Vamos analisar sua infraestrutura, identificar riscos e implementar uma estratégia para proteger sua organização.",

                button:
                    "Solicitar avaliação de segurança",
            },
        },
    },
};