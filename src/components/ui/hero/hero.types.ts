import type {
  CSSProperties,
  ReactNode,
} from "react";

/* ------------------------------
 * Variants
 * ------------------------------ */

export type HeroVariant =
  | "default"
  | "center"
  | "editorial"
  | "split"
  | "image-left"
  | "image-right"
  | "video"
  | "media"
  | "product";

export type HeroHeight =
  | "sm"
  | "md"
  | "lg"
  | "full";

/* ------------------------------
 * Base
 * ------------------------------ */

export interface HeroProps {
  children: ReactNode;
  variant?: HeroVariant;
  height?: HeroHeight;
  className?: string;
  style?: CSSProperties;
  backgroundImage?: string;
  overlay?: boolean;
}

/* ------------------------------
 * Content
 * ------------------------------ */

export interface HeroContentProps {
  children: ReactNode;
  className?: string;
}

export interface HeroBadgeProps {
  children: ReactNode;
  className?: string;
}

export interface HeroTitleProps {
  children: ReactNode;
  className?: string;
}

export interface HeroDescriptionProps {
  children: ReactNode;
  className?: string;
}

export interface HeroActionsProps {
  children: ReactNode;
  className?: string;
}

/* ------------------------------
 * Media
 * ------------------------------ */

export interface HeroImageProps {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}

export interface HeroBackgroundProps {
  src: string;
  alt?: string;
  priority?: boolean;
  className?: string;
}

export interface HeroVideoProps {
  src: string;
  poster?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  className?: string;
}

/* ------------------------------
 * Layout
 * ------------------------------ */

export interface HeroLayoutProps {
  children: ReactNode;
  reverse?: boolean;
  className?: string;
}

export interface HeroGridProps {
  className?: string;
}

/* ------------------------------
 * Effects
 * ------------------------------ */

export interface HeroGlowProps {
  className?: string;
}

export interface HeroParticlesProps {
  className?: string;
}

export interface HeroScrollIndicatorProps {
  className?: string;
}