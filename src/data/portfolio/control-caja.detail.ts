import type { PortfolioProject } from "@/types/portfolio.types";

export const controlCajaDetail: PortfolioProject = {
    id: "satcore-control-caja",

    plan: "satcore-suite",

    category: "software",

    service: "advanced-utilities-and-web-tools",

    image: "/images/projects/satcore_control_caja.png",

    href: "https://satcore-control-caja.vercel.app/",

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
            title: "Cash Management | SatCore Suite",

            description:
                "A digital cash management tool designed to help small businesses track income and expenses, monitor cash and bank balances, manage cash register openings and closings, and review cash reconciliation differences. Part of SatCore Suite, a collection of modular digital tools for business management.",

            imageAlt:
                "SatCore Suite Cash Management web application for tracking business income, expenses, balances, and cash reconciliation.",

            category: "Software",
        },

        es: {
            title: "Control de Caja | SatCore Suite",

            description:
                "Herramienta digital para ayudar a pequeños negocios a registrar ingresos y egresos, consultar saldos de caja y banco, gestionar aperturas y cierres, y revisar diferencias en los arqueos. Forma parte de SatCore Suite, un conjunto de herramientas digitales modulares para la gestión de negocios.",

            imageAlt:
                "Aplicación web Control de Caja de SatCore Suite para gestionar ingresos, egresos, saldos y arqueos del negocio.",

            category: "Software",
        },

        pt: {
            title: "Controle de Caixa | SatCore Suite",

            description:
                "Ferramenta digital para ajudar pequenos negócios a registrar receitas e despesas, consultar saldos de caixa e banco, gerenciar aberturas e fechamentos e verificar diferenças na conferência de caixa. Faz parte da SatCore Suite, um conjunto de ferramentas digitais modulares para a gestão de negócios.",

            imageAlt:
                "Aplicação web Controle de Caixa da SatCore Suite para gerenciar receitas, despesas, saldos e conferências de caixa.",

            category: "Software",
        },
    },
};