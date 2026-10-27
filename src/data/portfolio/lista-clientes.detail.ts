import type { PortfolioProject } from "@/types/portfolio.types";

export const listaClientesDetail: PortfolioProject = {
    id: "satcore-lista-clientes",

    plan: "satcore-suite",

    category: "software",

    service: "advanced-utilities-and-web-tools",

    image: "/images/projects/satcore_lista_clientes.png",

    href: "https://lista-clientes-theta.vercel.app/",

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
            title: "Customer List | SatCore Suite",

            description:
                "A lightweight customer management tool designed to help small businesses organize contact information, search and update customer records, track relationship status, and manage follow-ups. Part of SatCore Suite, a collection of modular digital tools for business management.",

            imageAlt:
                "SatCore Suite Customer List web application for organizing customer contacts and managing follow-ups.",

            category: "Software",
        },

        es: {
            title: "Lista de Clientes | SatCore Suite",

            description:
                "Herramienta ligera de gestión de clientes para organizar información de contacto, buscar y actualizar registros, consultar el estado de las relaciones comerciales y gestionar seguimientos. Forma parte de SatCore Suite, un conjunto de herramientas digitales modulares para la gestión de negocios.",

            imageAlt:
                "Aplicación web Lista de Clientes de SatCore Suite para organizar contactos y gestionar seguimientos comerciales.",

            category: "Software",
        },

        pt: {
            title: "Lista de Clientes | SatCore Suite",

            description:
                "Ferramenta leve de gestão de clientes para organizar informações de contato, pesquisar e atualizar registros, acompanhar o status dos relacionamentos comerciais e gerenciar retornos. Faz parte da SatCore Suite, um conjunto de ferramentas digitais modulares para a gestão de negócios.",

            imageAlt:
                "Aplicação web Lista de Clientes da SatCore Suite para organizar contatos e gerenciar acompanhamentos comerciais.",

            category: "Software",
        },
    },
};