import type { PortfolioProject } from "@/types/portfolio.types";

export const comandasDigitalesDetail: PortfolioProject = {
    id: "satcore-comandas-digitales",

    plan: "satcore-suite",

    category: "software",

    service: "advanced-utilities-and-web-tools",

    image: "/images/projects/satcore_comandas_digitales.png",

    href: "https://satcore-comandas-digitales.vercel.app/",

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
            title: "Digital Order Management | SatCore Suite",

            description:
                "A digital order management application designed to help restaurants and food businesses organize customer orders and streamline their service workflow. Part of SatCore Suite, a collection of modular digital tools for business management.",

            imageAlt:
                "SatCore Suite Digital Order Management web application for restaurant operations.",

            category: "Software",
        },

        es: {
            title: "Comandas Digitales | SatCore Suite",

            description:
                "Aplicación digital diseñada para ayudar a restaurantes y negocios gastronómicos a organizar sus pedidos y optimizar el flujo de trabajo del servicio. Forma parte de SatCore Suite, un conjunto de herramientas digitales modulares para la gestión de negocios.",

            imageAlt:
                "Aplicación web Comandas Digitales de SatCore Suite para organizar pedidos en negocios gastronómicos.",

            category: "Software",
        },

        pt: {
            title: "Comandas Digitais | SatCore Suite",

            description:
                "Aplicação digital desenvolvida para ajudar restaurantes e negócios gastronômicos a organizar pedidos e otimizar o fluxo de atendimento. Faz parte da SatCore Suite, um conjunto de ferramentas digitais modulares para a gestão de negócios.",

            imageAlt:
                "Aplicação web Comandas Digitais da SatCore Suite para organizar pedidos em negócios gastronômicos.",

            category: "Software",
        },
    },
};