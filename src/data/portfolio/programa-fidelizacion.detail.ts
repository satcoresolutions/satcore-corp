import type { PortfolioProject } from "@/types/portfolio.types";

export const programaFidelizacionDetail: PortfolioProject = {
    id: "satcore-programa-fidelizacion",

    plan: "satcore-suite",

    category: "software",

    service: "advanced-utilities-and-web-tools",

    image: "/images/projects/satcore_programa_fidelizacion.png",

    href: "https://programa-fidelizacion.vercel.app/",

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
            title: "Loyalty Program | SatCore Suite",

            description:
                "A digital customer loyalty tool designed to help small businesses encourage repeat purchases through points and rewards. Part of SatCore Suite, a collection of modular digital tools for business management.",

            imageAlt:
                "SatCore Suite Loyalty Program web application for customer rewards and repeat-purchase incentives.",

            category: "Software",
        },

        es: {
            title: "Programa de Fidelización | SatCore Suite",

            description:
                "Herramienta digital para ayudar a pequeños negocios a incentivar las compras recurrentes mediante programas de puntos y recompensas para sus clientes. Forma parte de SatCore Suite, un conjunto de herramientas digitales modulares para la gestión de negocios.",

            imageAlt:
                "Aplicación web Programa de Fidelización de SatCore Suite para gestionar recompensas e incentivar nuevas compras.",

            category: "Software",
        },

        pt: {
            title: "Programa de Fidelidade | SatCore Suite",

            description:
                "Ferramenta digital para ajudar pequenos negócios a incentivar compras recorrentes por meio de programas de pontos e recompensas para clientes. Faz parte da SatCore Suite, um conjunto de ferramentas digitais modulares para a gestão de negócios.",

            imageAlt:
                "Aplicação web Programa de Fidelidade da SatCore Suite para gerenciar recompensas e incentivar novas compras.",

            category: "Software",
        },
    },
};