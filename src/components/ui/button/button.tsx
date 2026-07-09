import Link from "next/link";

import type { ButtonProps } from "./button.types";
import { buttonVariants } from "./button.variants";

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  ariaLabel,
  style,
  target,
  rel,
  ...props
}: ButtonProps) {
  const variantStyle = buttonVariants[variant];

  const classes = `
    inline-flex
    items-center
    justify-center
    px-5
    py-2
    text-sm
    font-medium
    transition-transform
    hover:scale-[1.02]
    ${className}
  `;

  if (href) {
    return (
      <Link
        href={href}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        className={classes}
        style={{
          ...variantStyle,
          borderRadius: "var(--radius-button)",
          ...style,
        }}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      {...props}
      aria-label={ariaLabel}
      className={classes}
      style={{
        ...variantStyle,
        borderRadius: "var(--radius-button)",
        ...style,
      }}
    >
      {children}
    </button>
  );
}