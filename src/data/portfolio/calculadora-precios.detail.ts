import type { PortfolioProject } from "@/types/portfolio.types";

export const calculadoraPreciosDetail: PortfolioProject = {
    id: "satcore-calculadora-precios",

    plan: "satcore-suite",

    category: "software",

    service: "advanced-utilities-and-web-tools",

    image: "/images/projects/satcore_calculadora_precios.png",

    href: "https://satcore-calculadora-precios.vercel.app/",

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
            title: "Price Calculator | SatCore Suite",

            description:
                "A business pricing tool designed to help entrepreneurs and small businesses calculate selling prices based on costs, target profit margins, and applicable fees. Part of SatCore Suite, a collection of modular digital tools for business management.",

            imageAlt:
                "SatCore Suite Price Calculator web application for business pricing and profit margin calculations.",

            category: "Software",
        },

        es: {
            title: "Calculadora de Precios | SatCore Suite",

            description:
                "Herramienta digital para ayudar a emprendedores y pequeños negocios a calcular precios de venta a partir de sus costos, el margen de ganancia deseado y las comisiones aplicables. Forma parte de SatCore Suite, un conjunto de herramientas digitales modulares para la gestión de negocios.",

            imageAlt:
                "Aplicación web Calculadora de Precios de SatCore Suite para calcular precios de venta y márgenes de ganancia.",

            category: "Software",
        },

        pt: {
            title: "Calculadora de Preços | SatCore Suite",

            description:
                "Ferramenta digital para ajudar empreendedores e pequenos negócios a calcular preços de venda com base nos custos, na margem de lucro desejada e nas comissões aplicáveis. Faz parte da SatCore Suite, um conjunto de ferramentas digitais modulares para a gestão de negócios.",

            imageAlt:
                "Aplicação web Calculadora de Preços da SatCore Suite para calcular preços de venda e margens de lucro.",

            category: "Software",
        },
    },
};