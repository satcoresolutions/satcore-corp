export const paginationVariants = {
  default: {
    background: "transparent",
  },

  outlined: {
    background: "transparent",

    border:
      "1px solid color-mix(in srgb, var(--color-primary) 50%, transparent)",
  },

  subtle: {
    background:
      "color-mix(in srgb, var(--color-surface) 96%, var(--color-background))",

    border:
      "1px solid color-mix(in srgb, var(--color-text-muted) 8%, transparent)",
  },

  floating: {
    background:
      "color-mix(in srgb, var(--color-surface) 92%, transparent)",

    backdropFilter: "blur(18px)",

    border:
      "1px solid color-mix(in srgb, white 12%, transparent)",

    boxShadow: `
      0 8px 24px rgba(0,0,0,.06),
      0 20px 48px rgba(0,0,0,.08)
    `,
  },

  glass: {
    background:
      "color-mix(in srgb, var(--color-surface) 82%, transparent)",

    backdropFilter: "blur(20px)",

    border:
      "1px solid color-mix(in srgb, white 14%, transparent)",

    boxShadow:
      "0 12px 32px rgba(0,0,0,.08)",
  },
} as const;