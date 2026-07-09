export const inputVariants = {
  default: {
    background:
      "var(--surface)",

    border:
      "1px solid var(--border)",

    color:
      "var(--text-secondary)",
  },

  filled: {
    background:
      "var(--surface-secondary)",

    border:
      "1px solid transparent",

    color:
      "var(--text-primary)",
  },

  ghost: {
    background:
      "transparent",

    border:
      "1px solid var(--border)",

    color:
      "var(--text-secondary)",
  },
} as const;