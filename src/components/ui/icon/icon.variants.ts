import type {
  IconVariant,
  IconSize,
} from "./icon.types";

export const iconSizes: Record<
  IconSize,
  number
> = {
  xs: 18,
  sm: 22,
  md: 24,
  lg: 32,
  xl: 40,
  "2xl": 48,
};

export const iconVariants: Record<
  IconVariant,
  string
> = {
  default: "",

  muted: `
    opacity-50
  `,

  social: `
    opacity-70
    hover:opacity-100
    hover:scale-110
    transition-all
    duration-150
    cursor-pointer
  `,

  brand: `
    shrink-0
  `,
};