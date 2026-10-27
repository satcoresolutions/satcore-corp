
import type { PortfolioProject } from "@/types/portfolio.types";

export const catalogoPedidosDetail: PortfolioProject = {
    id: "satcore-catalogo-pedidos",
    plan: "satcore-suite",
    category: "software",
    service: "advanced-utilities-and-web-tools",
    image: "/images/projects/satcore_catalogo_pedidos.png",
    href: "https://catalogo-pedidos-sand.vercel.app/",
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
            title: "Digital Catalog with Orders",
            description:
                "A digital catalog designed to help small businesses showcase their products and receive customer orders through a convenient online experience. It makes product discovery easier and helps organize the ordering process.",
            imageAlt:
                "SatCore digital product catalog and ordering application",
            category: "Software",
        },
        es: {
            title: "Catálogo de Pedidos",
            description:
                "Catálogo digital diseñado para que pequeños negocios presenten sus productos y reciban pedidos mediante una experiencia en línea práctica. Facilita la consulta de productos y ayuda a organizar el proceso de solicitud de pedidos.",
            imageAlt:
                "Aplicación de catálogo digital y gestión de pedidos de SatCore",
            category: "Software",
        },
        pt: {
            title: "Catálogo Digital com Pedidos",
            description:
                "Catálogo digital desenvolvido para que pequenos negócios apresentem seus produtos e recebam pedidos por meio de uma experiência online prática. Facilita a consulta de produtos e ajuda a organizar o processo de solicitação de pedidos.",
            imageAlt:
                "Aplicativo de catálogo digital e pedidos da SatCore",
            category: "Software",
        },
    },
};
