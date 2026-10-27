
import type { PortfolioProject } from "@/types/portfolio.types";

export const satcoreCardDetail: PortfolioProject = {
    id: "satcore-card",
    plan: "satcore-suite",
    category: "software",
    service: "advanced-utilities-and-web-tools",
    image: "/images/projects/satcore_card.png",
    href: "https://satcore-card.vercel.app/",
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
            title: "SatCore Card",
            description:
                "A digital business card designed to share professional contact information through a simple, accessible online presence. It helps professionals and entrepreneurs present their contact details and make it easier for potential clients to connect with them.",
            imageAlt:
                "SatCore Card digital business card application",
            category: "Software",
        },
        es: {
            title: "SatCore Card",
            description:
                "Tarjeta de presentación digital diseñada para compartir información de contacto profesional mediante una presencia en línea sencilla y accesible. Permite a profesionales y emprendedores presentar sus datos de contacto y facilitar la conexión con potenciales clientes.",
            imageAlt:
                "Aplicación de tarjeta de presentación digital SatCore Card",
            category: "Software",
        },
        pt: {
            title: "SatCore Card",
            description:
                "Cartão de visita digital desenvolvido para compartilhar informações de contato profissional por meio de uma presença online simples e acessível. Ajuda profissionais e empreendedores a apresentar seus dados de contato e facilita a conexão com potenciais clientes.",
            imageAlt:
                "Aplicativo de cartão de visita digital SatCore Card",
            category: "Software",
        },
    },
};
