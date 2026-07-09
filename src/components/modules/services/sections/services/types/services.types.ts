import type {
  Pillar,
} from "@/types/pillar.types";


// ──────────────────────────────
// SECTION
// ──────────────────────────────

export interface ServicesProps {
  pillars: Pillar[];
}


// ──────────────────────────────
// HEADER
// ──────────────────────────────

export interface ServicesHeaderProps {

  title: string;

  description: string;
}


// ──────────────────────────────
// GRID
// ──────────────────────────────

export interface ServicesGridProps {

  pillars: Pillar[];

  buttonLabel: string;
}


// ──────────────────────────────
// CARD
// ──────────────────────────────

export interface ServicesCardProps {

  title: string;

  description: string;

  icon: Pillar["core"]["icon"];

  href: string;

  image: string;

  imageAlt: string;

}