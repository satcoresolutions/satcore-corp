import type {
  HeroTitleProps,
} from "./hero.types";

export default function HeroTitle({
  children,
  className = "",
}: HeroTitleProps) {
  return (
    <h1
      className={`
        max-w-5xl

        text-4xl
        md:text-6xl
        lg:text-7xl

        font-bold

        leading-tight
        tracking-tight

        ${className}
      `}
    >
      {children}
    </h1>
  );
}