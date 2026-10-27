import type { PortfolioProject } from "@/types/portfolio.types";

export const generadorCotizacionesDetail: PortfolioProject = {
    id: "satcore-generador-cotizaciones",

    plan: "satcore-suite",

    category: "software",

    service: "advanced-utilities-and-web-tools",

    image: "/images/projects/satcore_generador_cotizaciones.png",

    href: "https://satcore-generador-cotizaciones.vercel.app/",

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
            title: "Quote Generator | SatCore Suite",

            description:
                "A digital quotation tool designed to help entrepreneurs and small businesses prepare professional business quotes and export them as PDF documents. Part of SatCore Suite, a collection of modular digital tools for business management.",

            imageAlt:
                "SatCore Suite Quote Generator web application for creating and exporting professional business quotations.",

            category: "Software",
        },

        es: {
            title: "Generador de Cotizaciones | SatCore Suite",

            description:
                "Herramienta digital para ayudar a emprendedores y pequeños negocios a crear cotizaciones y presupuestos comerciales profesionales y exportarlos en PDF. Forma parte de SatCore Suite, un conjunto de herramientas digitales modulares para la gestión de negocios.",

            imageAlt:
                "Aplicación web Generador de Cotizaciones de SatCore Suite para crear y exportar presupuestos comerciales profesionales.",

            category: "Software",
        },

        pt: {
            title: "Gerador de Orçamentos | SatCore Suite",

            description:
                "Ferramenta digital para ajudar empreendedores e pequenos negócios a criar orçamentos comerciais profissionais e exportá-los em PDF. Faz parte da SatCore Suite, um conjunto de ferramentas digitais modulares para a gestão de negócios.",

            imageAlt:
                "Aplicação web Gerador de Orçamentos da SatCore Suite para criar e exportar propostas comerciais profissionais.",

            category: "Software",
        },
    },
};