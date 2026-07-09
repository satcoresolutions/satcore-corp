import type {
  HeroBadgeProps,
} from "./hero.types";

export default function HeroBadge({
  children,
  className = "",
}: HeroBadgeProps) {
  return (
    <div
      className={`
        inline-flex
        w-fit

        items-center

        rounded-full

        border
        border-border

        bg-surface-secondary

        px-4
        py-2

        text-sm
        font-medium

        ${className}
      `}
    >
      {children}
    </div>
  );
}