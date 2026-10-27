import type { PortfolioProject } from "@/types/portfolio.types";

export const generadorFacturasDetail: PortfolioProject = {
    id: "satcore-generador-facturas",

    plan: "satcore-suite",

    category: "software",

    service: "advanced-utilities-and-web-tools",

    image: "/images/projects/satcore_generador_facturas.png",

    href: "https://generador-facturas-kappa.vercel.app/",

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
            title: "Invoice Generator | SatCore Suite",

            description:
                "A digital tool designed to help entrepreneurs and small businesses create and manage sales invoices and receipts with organized transaction details. Part of SatCore Suite, a collection of modular digital tools for business management.",

            imageAlt:
                "SatCore Suite Invoice Generator web application for creating sales invoices and organizing transaction details.",

            category: "Software",
        },

        es: {
            title: "Generador de Facturas | SatCore Suite",

            description:
                "Herramienta digital para ayudar a emprendedores y pequeños negocios a generar comprobantes de venta con información organizada de productos, valores e impuestos. Forma parte de SatCore Suite, un conjunto de herramientas digitales modulares para la gestión de negocios.",

            imageAlt:
                "Aplicación web Generador de Facturas de SatCore Suite para crear comprobantes de venta y organizar la información de las transacciones.",

            category: "Software",
        },

        pt: {
            title: "Gerador de Faturas | SatCore Suite",

            description:
                "Ferramenta digital para ajudar empreendedores e pequenos negócios a gerar comprovantes de venda com informações organizadas sobre produtos, valores e impostos. Faz parte da SatCore Suite, um conjunto de ferramentas digitais modulares para a gestão de negócios.",

            imageAlt:
                "Aplicação web Gerador de Faturas da SatCore Suite para criar comprovantes de venda e organizar informações das transações.",

            category: "Software",
        },
    },
};