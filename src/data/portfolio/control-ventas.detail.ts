import type { PortfolioProject } from "@/types/portfolio.types";

export const controlVentasDetail: PortfolioProject = {
    id: "satcore-control-ventas",

    plan: "satcore-suite",

    category: "software",

    service: "advanced-utilities-and-web-tools",

    image: "/images/projects/satcore_control_ventas.png",

    href: "https://satcore-control-ventas.vercel.app/",

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
            title: "Sales Management | SatCore Suite",

            description:
                "A digital sales management tool designed to help small businesses record transactions, monitor sales activity, analyze average transaction value, and identify best-selling products. Part of SatCore Suite, a collection of modular digital tools for business management.",

            imageAlt:
                "SatCore Suite Sales Management web application for tracking business sales and transactions.",

            category: "Software",
        },

        es: {
            title: "Control de Ventas | SatCore Suite",

            description:
                "Herramienta digital para ayudar a pequeños negocios a registrar transacciones, supervisar la actividad comercial, analizar el valor promedio de venta e identificar los productos más vendidos. Forma parte de SatCore Suite, un conjunto de herramientas digitales modulares para la gestión de negocios.",

            imageAlt:
                "Aplicación web Control de Ventas de SatCore Suite para registrar y consultar las ventas de un negocio.",

            category: "Software",
        },

        pt: {
            title: "Controle de Vendas | SatCore Suite",

            description:
                "Ferramenta digital para ajudar pequenos negócios a registrar transações, acompanhar a atividade comercial, analisar o valor médio das vendas e identificar os produtos mais vendidos. Faz parte da SatCore Suite, um conjunto de ferramentas digitais modulares para a gestão de negócios.",

            imageAlt:
                "Aplicação web Controle de Vendas da SatCore Suite para registrar e consultar as vendas de um negócio.",

            category: "Software",
        },
    },
};