import type {
  CSSProperties,
} from "react";

import type {
  BadgeVariant,
} from "./badge.types";

export const badgeVariants: Record<
  BadgeVariant,
  CSSProperties
> = {
  default: {
    background:
      "color-mix(in srgb, var(--color-surface) 92%, white 8%)",

    color:
      "var(--color-text-secondary)",

    border:
      "1px solid var(--color-border)",

    boxShadow:
      "0 1px 2px rgba(0,0,0,.06)",
  },

  primary: {
    background:
      "var(--color-primary)",

    color:
      "var(--color-accent)",

    border:
      "1px solid transparent",

    boxShadow:
      "0 8px 18px color-mix(in srgb, var(--color-primary) 28%, transparent)",
  },

  secondary: {
    background:
      "var(--color-secondary)",

    color:
     "var(--color-quaternary)",

    border:
      "1px solid transparent",

    boxShadow:
      "0 6px 14px color-mix(in srgb, var(--color-secondary) 20%, transparent)",
  },

  glass: {
    background:
      "var(--color-background)",

    backdropFilter:
      "blur(14px)",

    WebkitBackdropFilter:
      "blur(14px)",

    border:
      "1px solid rgba(255,255,255,.18)",

    color:
      "var(--color-primary)",

    boxShadow:
      "0 8px 24px rgba(0,0,0,.10)",
  },

  success: {
    background:
      "color-mix(in srgb, var(--color-success) 14%, transparent)",

    color:
      "var(--color-success)",

    border:
      "1px solid color-mix(in srgb, var(--color-success) 30%, transparent)",
  },

  warning: {
    background:
      "color-mix(in srgb, var(--color-warning) 14%, transparent)",

    color:
      "var(--color-warning)",

    border:
      "1px solid color-mix(in srgb, var(--color-warning) 30%, transparent)",
  },

  danger: {
    background:
      "color-mix(in srgb, var(--color-danger) 14%, transparent)",

    color:
      "var(--color-danger)",

    border:
      "1px solid color-mix(in srgb, var(--color-danger) 30%, transparent)",
  },
};