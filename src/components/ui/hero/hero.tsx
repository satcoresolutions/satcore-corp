import type {
  HeroProps,
} from "./hero.types";

import {
  heroVariants,
  heroHeights,
} from "./hero.variants";

export default function Hero({
  children,
  variant = "default",
  height = "full",
  className = "",
  style,
  backgroundImage,
  overlay = false,
}: HeroProps) {
  return (
    <section
      style={{
        ...style,

        ...(backgroundImage && {
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }),
      }}
      className={`
        relative
        flex
        items-center
        overflow-hidden

        ${heroVariants[variant]}
        ${heroHeights[height]}

        ${className}
      `}
    >
      {overlay && backgroundImage && (
        <div
          className="
            absolute
            inset-0
            bg-black/60
          "
        />
      )}

      <div
        className="
          relative
          z-10
          w-full
        "
      >
        {children}
      </div>
    </section>
  );
}