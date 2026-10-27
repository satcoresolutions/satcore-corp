import type { PortfolioProject } from "@/types/portfolio.types";

export const generadorRecibosDetail: PortfolioProject = {
    id: "satcore-generador-recibos",

    plan: "satcore-suite",

    category: "software",

    service: "advanced-utilities-and-web-tools",

    image: "/images/projects/satcore_generador_recibos.png",

    href: "https://generador-recibos-eight.vercel.app/",

    technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Vercel",
    ],

    featured: true,

    translations: {
        en: {
            title: "Receipt Generator | SatCore Suite",

            description:
                "A digital receipt generator designed to help entrepreneurs and small businesses create payment receipts and document cash payments or bank transfers. Part of SatCore Suite, a collection of modular digital tools for business management.",

            imageAlt:
                "SatCore Suite Receipt Generator web application for creating payment receipts and recording transactions.",

            category: "Software",
        },

        es: {
            title: "Generador de Recibos | SatCore Suite",

            description:
                "Herramienta digital para ayudar a emprendedores y pequeños negocios a generar recibos de pago y documentar abonos en efectivo o mediante transferencias. Forma parte de SatCore Suite, un conjunto de herramientas digitales modulares para la gestión de negocios.",

            imageAlt:
                "Aplicación web Generador de Recibos de SatCore Suite para crear comprobantes de pago y registrar transacciones.",

            category: "Software",
        },

        pt: {
            title: "Gerador de Recibos | SatCore Suite",

            description:
                "Ferramenta digital para ajudar empreendedores e pequenos negócios a gerar recibos de pagamento e documentar pagamentos em dinheiro ou por transferência bancária. Faz parte da SatCore Suite, um conjunto de ferramentas digitais modulares para a gestão de negócios.",

            imageAlt:
                "Aplicação web Gerador de Recibos da SatCore Suite para criar comprovantes de pagamento e registrar transações.",

            category: "Software",
        },
    },
};