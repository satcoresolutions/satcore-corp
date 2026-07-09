import type {
  HeroVariant,
  HeroHeight,
} from "./hero.types";

/* 🧱 LAYOUT CORE */
export const heroVariants: Record<HeroVariant, string> = {
  default: `
    flex
    flex-col
    items-center
    justify-center
  `,

  center: `
    flex
    flex-col
    items-center
    justify-center
  `,

  /* 🆕 HERO EDITORIAL */
  editorial: `
    flex
    flex-col
    items-center
    justify-center
  `,

  split: `
    grid
    grid-cols-1
    lg:grid-cols-2
    items-center
    gap-12
  `,

  "image-left": `
    grid
    grid-cols-1
    lg:grid-cols-2
    items-center
    gap-12
  `,

  "image-right": `
    grid
    grid-cols-1
    lg:grid-cols-2
    items-center
    gap-12
  `,

  video: `
    grid
    grid-cols-1
    lg:grid-cols-2
    items-center
    gap-10
  `,

  media: `
    relative
    flex
    items-center
    justify-center
    overflow-hidden
  `,

  product: `
    grid
    grid-cols-1
    lg:grid-cols-12
    items-center
    gap-10
  `,
};

/* 📏 HEIGHT SYSTEM */
export const heroHeights: Record<HeroHeight, string> = {
  sm: `min-h-[40vh]`,
  md: `min-h-[60vh]`,
  lg: `min-h-[80vh]`,
  full: `min-h-screen`,
};

/* 🧠 TEXT ALIGNMENT */
export const heroAlignment: Record<HeroVariant, string> = {
  default: `text-center`,

  center: `text-center`,

  /* 🆕 */
  editorial: `text-center`,

  split: `text-left`,

  "image-left": `text-left`,

  "image-right": `text-left`,

  video: `text-left`,

  media: `text-center`,

  product: `text-left`,
};

/* 📦 CONTENT POSITIONING HELPERS */
export const heroContentPlacement: Record<HeroVariant, string> = {
  default: `
    mx-auto
    max-w-3xl
  `,

  center: `
    mx-auto
    max-w-3xl
  `,

  /* 🆕 */
  editorial: `
    mx-auto
    max-w-4xl
  `,

  split: ``,

  "image-left": ``,

  "image-right": ``,

  video: ``,

  media: `
    absolute
    inset-0
    flex
    items-center
    justify-center
  `,

  product: ``,
};