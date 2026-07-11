import HeroActions
  from "./HeroActions";

import type {
  HeroContentProps,
} from "../types/services-hero.types";

export default function HeroContent({
  content,
}: HeroContentProps) {
  return (
    <div
      className="
        flex
        min-h-screen
        flex-col
        items-center
        justify-center
        gap-8
        text-center
      "
    >
      <span
        className="
          text-sm
          font-medium
          uppercase
          tracking-[0.2em]
        "
      >
        {content.badge}
      </span>

      <h1
        className="
          max-w-5xl
          text-5xl
          font-bold
          md:text-7xl
        "
      >
        {content.title}
      </h1>

      <p
        className="
          max-w-2xl
          text-lg
        "
      >
        {content.description}
      </p>

      <HeroActions
        primaryAction={
          content.primaryAction
        }
        secondaryAction={
          content.secondaryAction
        }
      />
    </div>
  );
}