import type {
  LanguageCode,
} from "./common.types";

export interface PortfolioTranslation {
  title: string;

  description: string;

  imageAlt: string;

  category: string;
}

export interface PortfolioProject {
  // Identidad
  id: string;

  // Relación con el plan
  plan: string;

  // Clasificación
  category: string;

  service: string;

  // Multimedia
  image: string;

  images?: string[];

  // Proyecto
  href: string;

  technologies?: string[];

  client?: string;

  year?: string;

  featured?: boolean;

  // Traducciones
  translations: Record<
    LanguageCode,
    PortfolioTranslation
  >;
}