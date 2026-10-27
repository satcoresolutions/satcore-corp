
import type { PortfolioProject } from "@/types/portfolio.types";

export const satcoreQrDetail: PortfolioProject = {
    id: "satcore-qr",
    plan: "satcore-suite",
    category: "software",
    service: "advanced-utilities-and-web-tools",
    image: "/images/projects/satcore_qr.png",
    href: "https://satcore-qr.vercel.app/",
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
            title: "SatCore QR",
            description:
                "A QR code generator that makes it easy to create and share codes for digital content, links, contact information, and other everyday needs. Designed to help entrepreneurs and small businesses connect their customers with useful information quickly and conveniently.",
            imageAlt:
                "SatCore QR code generator application",
            category: "Software",
        },
        es: {
            title: "SatCore QR",
            description:
                "Generador de códigos QR que facilita la creación y el uso compartido de códigos para contenido digital, enlaces, información de contacto y otras necesidades cotidianas. Diseñado para ayudar a emprendedores y pequeños negocios a conectar a sus clientes con información útil de forma rápida y práctica.",
            imageAlt:
                "Aplicación generadora de códigos QR de SatCore",
            category: "Software",
        },
        pt: {
            title: "SatCore QR",
            description:
                "Gerador de códigos QR que facilita a criação e o compartilhamento de códigos para conteúdo digital, links, informações de contato e outras necessidades do dia a dia. Desenvolvido para ajudar empreendedores e pequenos negócios a conectar seus clientes a informações úteis de forma rápida e prática.",
            imageAlt:
                "Aplicativo gerador de códigos QR da SatCore",
            category: "Software",
        },
    },
};
