import type {
  PortfolioProject,
} from "@/types/portfolio.types";

export const wayraToursBookingProject: PortfolioProject = {
  id:
    "wayra-tours-booking",

  plan:
    "basic-booking",

  category:
    "software",

  service:
    "landing",

  image:
    "/images/projects/wayra_tours_booking.png",

  href:
    "https://wayra-tours-eight.vercel.app/",

  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Google Analytics",
    "Google Tag Manager",
  ],

  featured: true,

  translations: {
    en: {
      title:
        "Wayra Tours - Booking & Tour Management",

      description:
        "Interactive booking and reservation platform for mountain and nature tourism. Features real-time calendar availability selection, multi-day itinerary management, group capacity tracking, and streamlined booking request flows.",

      imageAlt:
        "Wayra Tours booking and excursion reservation platform preview.",

      category:
        "Software",
    },

    es: {
      title:
        "Wayra Tours - Reservas y Gestión de Excursiones",

      description:
        "Plataforma interactiva de reservas y agendamiento para turismo de naturaleza y montaña. Incluye selección de fechas en tiempo real mediante calendario, gestión de itinerarios, control de cupos para grupos y flujos optimizados de confirmación de reservas.",

      imageAlt:
        "Vista previa de la plataforma de reservas y excursiones de Wayra Tours.",

      category:
        "Software",
    },

    pt: {
      title:
        "Wayra Tours - Reservas e Gestão de Excursões",

      description:
        "Plataforma interativa de reservas e agendamento para turismo de natureza e montanha. Inclui seleção de datas em tempo real via calendário, gestão de itinerários, controle de vagas para grupos e fluxos otimizados de solicitação de reservas.",

      imageAlt:
        "Pré-visualização da plataforma de reservas e excursões da Wayra Tours.",

      category:
        "Software",
    },
  },
};