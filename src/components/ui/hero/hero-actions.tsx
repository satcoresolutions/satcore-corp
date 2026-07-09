import type {
  HeroActionsProps,
} from "./hero.types";

export default function HeroActions({
  children,
  className = "",
}: HeroActionsProps) {
  return (
    <div
      className={`
        flex

        flex-col
        sm:flex-row

        items-start
        sm:items-center

        gap-4

        pt-2

        ${className}
      `}
    >
      {children}
    </div>
  );
}