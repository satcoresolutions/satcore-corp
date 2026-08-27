import type { ServicePlan } from "@/types/plan.types";

export const certificateGenerator: ServicePlan = {
    core: {
        id: "REP-003",

        slug: "certificate-generator",

        complexity: "⭐⭐⭐⭐ (4/5)",

        price: "$850 - $1,500 USD",

        pricingType: "fixed",

        automationLevel: "high",

        stack: [
            "Next.js",
            "TypeScript",
            "PDF Generation",
            "QR Verification",
        ],

        technologies: [
            "Next.js",
            "TypeScript",
            "PDF Generation",
            "QR Code Generation",
            "Certificate Rendering",
            "Verification Pages",
            "Digital Signatures Support",
            "Unique Certificate IDs",
            "Template Rendering",
            "Responsive Design",
        ],

        integrations: [
            "QR Code Services",
            "PDF Generation Libraries",
            "Database Systems",
            "Authentication Services",
        ],

        heroImage:
            "/images/services/software/hero/hero-certificate-generator.png",

        image:
            "/images/services/software/hero/hero-certificate-generator.png",
    },

    translations: {
        es: {
            name: "Certificate Generator",

            title: "Generador de Certificados",

            level: "🟠 Avanzado",

            category: "Reportes y Generación de Documentos",

            description:
                "Sistema para generar certificados digitales automáticamente, con renderizado de plantillas, códigos QR de verificación y soporte para firmas digitales.",

            time: "5-8 semanas",

            imageAlt:
                "Generador de certificados digitales con código QR y verificación",

            target:
                "Instituciones educativas, organizaciones, empresas y plataformas que necesitan emitir certificados digitales verificables de manera automatizada.",

            support:
                "45 días soporte post-entrega",

            useCases: [
                "Certificados educativos",
                "Certificados de participación",
                "Constancias digitales",
                "Certificados de cursos",
                "Diplomas digitales",
                "Reconocimientos",
                "Certificados empresariales",
                "Verificación documental",
            ],

            includes: [
                "Generación automática de certificados",
                "Plantillas de certificados",
                "Renderizado PDF",
                "Identificadores únicos",
                "Códigos QR",
                "Página de verificación",
                "Validación de certificados",
                "Datos personalizados",
                "Soporte para firmas digitales",
                "Historial de certificados",
                "Diseño responsive",
            ],

            notIncludes: [
                "Certificación digital gubernamental",
                "Firma electrónica cualificada",
                "Autoridad certificadora propia",
                "Infraestructura PKI empresarial",
                "Integración con sistemas gubernamentales",
            ],

            features: [
                "Automated Certificate Rendering",
                "QR Verification",
                "Certificate Templates",
                "Unique Certificate IDs",
                "PDF Generation",
                "Verification Pages",
                "Digital Signature Support",
                "Certificate Validation",
                "Custom Data",
                "Certificate History",
            ],

            deliverables: [
                "Generador de certificados",
                "Plantillas personalizadas",
                "Sistema de renderizado PDF",
                "Generación de códigos QR",
                "Sistema de verificación",
                "Identificadores únicos",
                "Soporte para firmas digitales",
                "Historial de certificados",
                "Código fuente",
                "Documentación técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Emisión automatizada",

                    description:
                        "Permite generar certificados a partir de información estructurada sin crear manualmente cada documento.",
                },

                {
                    title: "Verificación mediante QR",

                    description:
                        "Los certificados pueden incorporar códigos QR que dirigen a una estructura de verificación digital.",
                },

                {
                    title: "Identificación única",

                    description:
                        "Cada certificado puede disponer de un identificador único para facilitar su consulta y validación.",
                },

                {
                    title: "Plantillas personalizadas",

                    description:
                        "La generación basada en plantillas permite adaptar los certificados a diferentes organizaciones, programas y eventos.",
                },
            ],

            process: [
                {
                    title: "Diseño del certificado",

                    description:
                        "Definimos la estructura visual, campos, información institucional y elementos de validación.",
                },

                {
                    title: "Configuración de plantillas",

                    description:
                        "Construimos plantillas reutilizables para generar certificados con información personalizada.",
                },

                {
                    title: "Sistema de verificación",

                    description:
                        "Implementamos identificadores únicos y códigos QR conectados con una estructura de verificación digital.",
                },

                {
                    title: "Generación y pruebas",

                    description:
                        "Validamos el renderizado PDF, datos, códigos QR, consulta de certificados y diferentes escenarios de emisión.",
                },
            ],

            faq: [
                {
                    question: "¿Qué es un Certificate Generator?",

                    answer:
                        "Es un sistema que permite generar certificados digitales automáticamente utilizando plantillas y datos personalizados.",
                },

                {
                    question: "¿Los certificados pueden verificarse?",

                    answer:
                        "Sí. El sistema contempla códigos QR e identificadores únicos que pueden utilizarse para consultar información de verificación.",
                },

                {
                    question: "¿Puede generar certificados en PDF?",

                    answer:
                        "Sí. Los certificados pueden renderizarse y entregarse como documentos PDF.",
                },

                {
                    question: "¿Soporta firmas digitales?",

                    answer:
                        "La arquitectura contempla soporte para integrar mecanismos de firma digital, dependiendo del proveedor y requisitos específicos del proyecto.",
                },
            ],
        },

        en: {
            name: "Certificate Generator",

            title: "Certificate Generator",

            level: "🟠 Advanced",

            category: "Reporting & Document Generation",

            description:
                "System for automatically generating digital certificates with template rendering, QR verification, and digital signature support.",

            time: "5-8 weeks",

            imageAlt:
                "Digital certificate generator with QR verification",

            target:
                "Educational institutions, organizations, businesses, and platforms that need to automatically issue verifiable digital certificates.",

            support:
                "45 days post-delivery support",

            useCases: [
                "Educational certificates",
                "Participation certificates",
                "Digital records",
                "Course certificates",
                "Digital diplomas",
                "Recognition certificates",
                "Business certificates",
                "Document verification",
            ],

            includes: [
                "Automated certificate generation",
                "Certificate templates",
                "PDF rendering",
                "Unique identifiers",
                "QR codes",
                "Verification page",
                "Certificate validation",
                "Custom data",
                "Digital signature support",
                "Certificate history",
                "Responsive design",
            ],

            notIncludes: [
                "Government-certified digital credentials",
                "Qualified electronic signatures",
                "Own certification authority",
                "Enterprise PKI infrastructure",
                "Government system integrations",
            ],

            features: [
                "Automated Certificate Rendering",
                "QR Verification",
                "Certificate Templates",
                "Unique Certificate IDs",
                "PDF Generation",
                "Verification Pages",
                "Digital Signature Support",
                "Certificate Validation",
                "Custom Data",
                "Certificate History",
            ],

            deliverables: [
                "Certificate generator",
                "Custom templates",
                "PDF rendering system",
                "QR code generation",
                "Verification system",
                "Unique identifiers",
                "Digital signature support",
                "Certificate history",
                "Source code",
                "Technical documentation",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Automated Issuance",

                    description:
                        "Generates certificates from structured information without manually creating each document.",
                },

                {
                    title: "QR Verification",

                    description:
                        "Certificates can include QR codes that direct users to a digital verification structure.",
                },

                {
                    title: "Unique Identification",

                    description:
                        "Each certificate can have a unique identifier to facilitate lookup and validation.",
                },

                {
                    title: "Custom Templates",

                    description:
                        "Template-based generation allows certificates to be adapted to different organizations, programs, and events.",
                },
            ],

            process: [
                {
                    title: "Certificate Design",

                    description:
                        "We define visual structure, fields, institutional information, and verification elements.",
                },

                {
                    title: "Template Configuration",

                    description:
                        "We build reusable templates for generating certificates with personalized information.",
                },

                {
                    title: "Verification System",

                    description:
                        "We implement unique identifiers and QR codes connected to a digital verification structure.",
                },

                {
                    title: "Generation and Testing",

                    description:
                        "We validate PDF rendering, data, QR codes, certificate lookup, and different issuance scenarios.",
                },
            ],

            faq: [
                {
                    question: "What is a Certificate Generator?",

                    answer:
                        "It is a system that automatically generates digital certificates using templates and personalized data.",
                },

                {
                    question: "Can certificates be verified?",

                    answer:
                        "Yes. The system supports QR codes and unique identifiers that can be used to access verification information.",
                },

                {
                    question: "Can it generate PDF certificates?",

                    answer:
                        "Yes. Certificates can be rendered and delivered as PDF documents.",
                },

                {
                    question: "Does it support digital signatures?",

                    answer:
                        "The architecture supports integration with digital signature mechanisms depending on the provider and specific project requirements.",
                },
            ],
        },

        pt: {
            name: "Certificate Generator",

            title: "Gerador de Certificados",

            level: "🟠 Avançado",

            category: "Relatórios e Geração de Documentos",

            description:
                "Sistema para gerar certificados digitais automaticamente, com renderização de modelos, códigos QR de verificação e suporte a assinaturas digitais.",

            time: "5-8 semanas",

            imageAlt:
                "Gerador de certificados digitais com código QR e verificação",

            target:
                "Instituições educacionais, organizações, empresas e plataformas que precisam emitir certificados digitais verificáveis de forma automatizada.",

            support:
                "45 dias de suporte pós-entrega",

            useCases: [
                "Certificados educacionais",
                "Certificados de participação",
                "Declarações digitais",
                "Certificados de cursos",
                "Diplomas digitais",
                "Reconhecimentos",
                "Certificados empresariais",
                "Verificação documental",
            ],

            includes: [
                "Geração automática de certificados",
                "Modelos de certificados",
                "Renderização PDF",
                "Identificadores únicos",
                "Códigos QR",
                "Página de verificação",
                "Validação de certificados",
                "Dados personalizados",
                "Suporte a assinaturas digitais",
                "Histórico de certificados",
                "Design responsivo",
            ],

            notIncludes: [
                "Certificação digital governamental",
                "Assinatura eletrônica qualificada",
                "Autoridade certificadora própria",
                "Infraestrutura PKI empresarial",
                "Integrações com sistemas governamentais",
            ],

            features: [
                "Automated Certificate Rendering",
                "QR Verification",
                "Certificate Templates",
                "Unique Certificate IDs",
                "PDF Generation",
                "Verification Pages",
                "Digital Signature Support",
                "Certificate Validation",
                "Custom Data",
                "Certificate History",
            ],

            deliverables: [
                "Gerador de certificados",
                "Modelos personalizados",
                "Sistema de renderização PDF",
                "Geração de códigos QR",
                "Sistema de verificação",
                "Identificadores únicos",
                "Suporte a assinaturas digitais",
                "Histórico de certificados",
                "Código-fonte",
                "Documentação técnica",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Emissão automatizada",

                    description:
                        "Permite gerar certificados a partir de informações estruturadas sem criar manualmente cada documento.",
                },

                {
                    title: "Verificação por QR",

                    description:
                        "Os certificados podem incorporar códigos QR que direcionam para uma estrutura de verificação digital.",
                },

                {
                    title: "Identificação única",

                    description:
                        "Cada certificado pode possuir um identificador único para facilitar sua consulta e validação.",
                },

                {
                    title: "Modelos personalizados",

                    description:
                        "A geração baseada em modelos permite adaptar certificados a diferentes organizações, programas e eventos.",
                },
            ],

            process: [
                {
                    title: "Design do certificado",

                    description:
                        "Definimos a estrutura visual, campos, informações institucionais e elementos de validação.",
                },

                {
                    title: "Configuração dos modelos",

                    description:
                        "Construímos modelos reutilizáveis para gerar certificados com informações personalizadas.",
                },

                {
                    title: "Sistema de verificação",

                    description:
                        "Implementamos identificadores únicos e códigos QR conectados a uma estrutura de verificação digital.",
                },

                {
                    title: "Geração e testes",

                    description:
                        "Validamos a renderização PDF, dados, códigos QR, consulta dos certificados e diferentes cenários de emissão.",
                },
            ],

            faq: [
                {
                    question: "O que é um Certificate Generator?",

                    answer:
                        "É um sistema que permite gerar certificados digitais automaticamente utilizando modelos e dados personalizados.",
                },

                {
                    question: "Os certificados podem ser verificados?",

                    answer:
                        "Sim. O sistema contempla códigos QR e identificadores únicos que podem ser utilizados para consultar informações de verificação.",
                },

                {
                    question: "Pode gerar certificados em PDF?",

                    answer:
                        "Sim. Os certificados podem ser renderizados e entregues como documentos PDF.",
                },

                {
                    question: "Suporta assinaturas digitais?",

                    answer:
                        "A arquitetura contempla suporte para integração com mecanismos de assinatura digital, dependendo do fornecedor e dos requisitos específicos do projeto.",
                },
            ],
        },
    },
};