import { cva } from "class-variance-authority";

export const formVariants = cva(
  [
    "w-full",
    "max-w-xl",
    "mx-auto",
    "space-y-6"
  ]
);

export const formContentVariants = cva(
  [
    "card",
    "space-y-4"
  ]
);