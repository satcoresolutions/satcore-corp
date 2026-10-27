import type { PortfolioProject } from "@/types/portfolio.types";

export const cuponeraDigitalDetail: PortfolioProject = {
    id: "satcore-cuponera-digital",

    plan: "satcore-suite",

    category: "software",

    service: "advanced-utilities-and-web-tools",

    image: "/images/projects/satcore_cuponera_digital.png",

    href: "https://cuponera-digital.vercel.app/",

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
            title: "Digital Coupon Book | SatCore Suite",

            description:
                "A digital coupon management application designed to help businesses organize promotional offers and present discounts to their customers. Part of SatCore Suite, a collection of modular digital tools for business management.",

            imageAlt:
                "SatCore Suite Digital Coupon Book web application for managing promotional offers and discounts.",

            category: "Software",
        },

        es: {
            title: "Cuponera Digital | SatCore Suite",

            description:
                "Aplicación digital para organizar y presentar cupones de descuento y ofertas promocionales para los clientes de un negocio. Forma parte de SatCore Suite, un conjunto de herramientas digitales modulares para la gestión de negocios.",

            imageAlt:
                "Aplicación web Cuponera Digital de SatCore Suite para presentar promociones y descuentos.",

            category: "Software",
        },

        pt: {
            title: "Cuponera Digital | SatCore Suite",

            description:
                "Aplicação digital para organizar e apresentar cupons de desconto e ofertas promocionais aos clientes de um negócio. Faz parte da SatCore Suite, um conjunto de ferramentas digitais modulares para a gestão de negócios.",

            imageAlt:
                "Aplicação web Cuponera Digital da SatCore Suite para apresentar promoções e descontos.",

            category: "Software",
        },
    },
};