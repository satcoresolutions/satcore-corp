export const cardVariants = {
  default: {
    background: "var(--color-surface)",
    border: "1px solid color-mix(in srgb, var(--color-text-muted) 15%, transparent)",
  },

  outlined: {
    background: "transparent",
    border: "1px solid color-mix(in srgb, var(--color-text-muted) 30%, transparent)",
  },

  glass: {
    background: "color-mix(in srgb, var(--color-surface) 40%, transparent)",
    border: "1px solid color-mix(in srgb, var(--color-text-primary) 12%, transparent)",
    backdropFilter: "blur(24px)",
    WebkitBackdropFilter: "blur(24px)",
    boxShadow: "0 8px 32px color-mix(in srgb, var(--color-background) 20%, transparent)",
  },

  featured: {
    background: `linear-gradient(
      135deg,
      color-mix(in srgb, var(--color-primary) 12%, var(--color-tertiary)),
      var(--color-tertiary)
    )`,
    border: "1px solid color-mix(in srgb, var(--color-primary) 40%, transparent)",
    boxShadow: `
      0 0 0 1px color-mix(in srgb, var(--color-primary) 15%, transparent),
      0 20px 45px -10px color-mix(in srgb, var(--color-primary) 30%, transparent)
    `,
  },

  premium: {
    background: `linear-gradient(
      145deg,
      color-mix(in srgb, var(--color-accent) 15%, var(--color-quaternary)),
      var(--color-quaternary)
    )`,
    border: "1px solid color-mix(in srgb, var(--color-accent) 45%, transparent)",
    boxShadow: `
      0 1px 0 0 color-mix(in srgb, white 8%, transparent) inset,
      0 24px 60px -12px color-mix(in srgb, var(--color-accent) 35%, transparent)
    `,
  },
} as const;