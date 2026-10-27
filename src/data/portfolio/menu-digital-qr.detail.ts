import type { PortfolioProject } from "@/types/portfolio.types";

export const menuDigitalQrDetail: PortfolioProject = {
    id: "satcore-menu-digital-qr",

    plan: "satcore-suite",

    category: "software",

    service: "advanced-utilities-and-web-tools",

    image: "/images/projects/satcore_menu_digital_qr.png",

    href: "https://satcore-menu-digital-qr.vercel.app/",

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
            title: "Digital QR Menu | SatCore Suite",

            description:
                "A digital menu solution designed for restaurants and food businesses to showcase their menu and help customers explore available dishes through a QR-accessible interface. Part of SatCore Suite, a collection of modular digital tools for business management.",

            imageAlt:
                "SatCore Suite Digital QR Menu web application for displaying restaurant menus.",

            category: "Software",
        },

        es: {
            title: "Menú Digital QR | SatCore Suite",

            description:
                "Solución digital para restaurantes y negocios gastronómicos que permite presentar su carta y facilitar la consulta de platos disponibles mediante una interfaz accesible con código QR. Forma parte de SatCore Suite, un conjunto de herramientas digitales modulares para la gestión de negocios.",

            imageAlt:
                "Aplicación web Menú Digital QR de SatCore Suite para mostrar la carta de un restaurante.",

            category: "Software",
        },

        pt: {
            title: "Cardápio Digital QR | SatCore Suite",

            description:
                "Solução digital para restaurantes e negócios gastronômicos que permite apresentar o cardápio e facilitar a consulta dos pratos disponíveis por meio de uma interface acessível por código QR. Faz parte da SatCore Suite, um conjunto de ferramentas digitais modulares para a gestão de negócios.",

            imageAlt:
                "Aplicação web Cardápio Digital QR da SatCore Suite para exibir o cardápio de um restaurante.",

            category: "Software",
        },
    },
};