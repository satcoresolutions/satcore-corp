import type {
  PortfolioProject,
} from "@/types/portfolio.types";

export const personalCardTemplate: PortfolioProject = {
  id:
    "personal-card-template",

  plan:
    "personal-card",

  category:
    "software",

  service:
    "digital-card",

  image:
    "/images/projects/personal_card_template.png",

  href:
    "https://tu-demo.com",

  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
  ],

  featured: true,

  translations: {
    en: {
      title:
        "Personal Digital Card Template",

      description:
        "Professional digital business card template designed for personal networking. It includes contact information, social media links, downloadable vCard support, and QR/NFC compatibility for seamless sharing across devices.",

      imageAlt:
        "Professional personal digital business card template optimized for networking.",

      category:
        "Software",
    },

    es: {
      title:
        "Plantilla de Tarjeta Digital Personal",

      description:
        "Plantilla profesional de tarjeta de presentación digital diseñada para facilitar el networking y compartir información de contacto. Incluye enlaces a redes sociales, descarga de contacto (.vcf) y compatibilidad con códigos QR y tecnología NFC.",

      imageAlt:
        "Plantilla profesional de tarjeta digital personal optimizada para networking.",

      category:
        "Software",
    },

    pt: {
      title:
        "Modelo de Cartão Digital Pessoal",

      description:
        "Modelo profissional de cartão de visita digital desenvolvido para networking e compartilhamento de informações de contato. Inclui links para redes sociais, download de contato (.vcf) e compatibilidade com QR Code e tecnologia NFC.",

      imageAlt:
        "Modelo profissional de cartão digital pessoal otimizado para networking.",

      category:
        "Software",
    },
  },
};