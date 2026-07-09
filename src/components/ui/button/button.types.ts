import type {
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "accent"
  | "subtle"
  | "ghost"
  | "outline"
  | "glass"
  | "gradient";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;

  href?: string;

  variant?: ButtonVariant;

  target?:
    | "_self"
    | "_blank"
    | "_parent"
    | "_top";

  rel?: string;

  ariaLabel?: string;
}