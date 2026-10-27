
import type { PortfolioProject } from "@/types/portfolio.types";

export const catalogoBasicoDetail: PortfolioProject = {
    id: "satcore-catalogo-basico",
    plan: "satcore-suite",
    category: "software",
    service: "advanced-utilities-and-web-tools",
    image: "/images/projects/satcore_catalogo_basico.png",
    href: "https://catalogo-basico-six.vercel.app/",
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
            title: "Basic Digital Catalog",
            description:
                "A digital product catalog that helps small businesses and entrepreneurs organize and showcase their products online. It provides customers with a convenient way to browse available products and discover a business's offering.",
            imageAlt:
                "SatCore Basic Digital Catalog application",
            category: "Software",
        },
        es: {
            title: "Catálogo Básico Digital",
            description:
                "Catálogo digital de productos que ayuda a pequeños negocios y emprendedores a organizar y presentar su oferta comercial en línea. Facilita que los clientes consulten los productos disponibles y conozcan lo que ofrece cada negocio.",
            imageAlt:
                "Aplicación Catálogo Básico Digital de SatCore",
            category: "Software",
        },
        pt: {
            title: "Catálogo Digital Básico",
            description:
                "Catálogo digital de produtos que ajuda pequenos negócios e empreendedores a organizar e apresentar sua oferta comercial online. Facilita a consulta dos produtos disponíveis e permite que os clientes conheçam o que cada negócio oferece.",
            imageAlt:
                "Aplicativo Catálogo Digital Básico da SatCore",
            category: "Software",
        },
    },
};
