import type {
  PortfolioProject,
} from "@/types/portfolio.types";


/* ============================
   CONTENT
============================ */

export interface PortfolioHeaderContent {
  title: string;

  description: string;
}


export interface PortfolioCTAContent {
  description: string;

  buttonLabel: string;

  href: string;
}


export interface PortfolioContent {
  header: PortfolioHeaderContent;

  cta: PortfolioCTAContent;
}


/* ============================
   HEADER
============================ */

export interface PortfolioHeaderProps {
  content: PortfolioHeaderContent;
}


/* ============================
   GRID
============================ */

export interface PortfolioGridProps {
  projects: PortfolioProjectView[];

  animationKey: React.Key;
}


/* ============================
   CARD
============================ */

export interface PortfolioCardProps {
  project: PortfolioProjectView;
}


/* ============================
   CTA
============================ */

export interface PortfolioCTAProps {
  content: PortfolioCTAContent;
}


/* ============================
   UI MODEL
============================ */

/**
 * Modelo preparado para renderizar.
 * No contiene translations.
 * El idioma ya fue resuelto en Portfolio.tsx.
 */
export interface PortfolioProjectView {
  id: string;

  title: string;

  description: string;

  imageAlt: string;

  image: string;

  href?: string;
}