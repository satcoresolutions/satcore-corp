import type { PortfolioProject } from "@/types/portfolio.types";

export const historialComprasDetail: PortfolioProject = {
    id: "satcore-historial-compras",

    plan: "satcore-suite",

    category: "software",

    service: "advanced-utilities-and-web-tools",

    image: "/images/projects/satcore_historial_compras.png",

    href: "https://historial-compras.vercel.app/",

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
            title: "Purchase History | SatCore Suite",

            description:
                "A digital purchase tracking tool designed to help small businesses organize expenses related to supplies, merchandise, and raw materials, with records categorized by supplier. Part of SatCore Suite, a collection of modular digital tools for business management.",

            imageAlt:
                "SatCore Suite Purchase History web application for organizing business purchases and supplier expenses.",

            category: "Software",
        },

        es: {
            title: "Historial de Compras | SatCore Suite",

            description:
                "Herramienta digital para organizar y consultar compras relacionadas con insumos, mercancía y materias primas, con registros clasificados por proveedor. Forma parte de SatCore Suite, un conjunto de herramientas digitales modulares para la gestión de negocios.",

            imageAlt:
                "Aplicación web Historial de Compras de SatCore Suite para organizar compras y gastos por proveedor.",

            category: "Software",
        },

        pt: {
            title: "Histórico de Compras | SatCore Suite",

            description:
                "Ferramenta digital para organizar e consultar compras de insumos, mercadorias e matérias-primas, com registros classificados por fornecedor. Faz parte da SatCore Suite, um conjunto de ferramentas digitais modulares para a gestão de negócios.",

            imageAlt:
                "Aplicação web Histórico de Compras da SatCore Suite para organizar compras e despesas por fornecedor.",

            category: "Software",
        },
    },
};