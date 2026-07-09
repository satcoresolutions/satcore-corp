import type {
  HeroDescriptionProps,
} from "./hero.types";

export default function HeroDescription({
  children,
  className = "",
}: HeroDescriptionProps) {
  return (
    <p
      className={`
        max-w-3xl

        text-base
        md:text-lg

        leading-relaxed

        text-secondary

        ${className}
      `}
    >
      {children}
    </p>
  );
}