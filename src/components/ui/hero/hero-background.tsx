import Image from "next/image";

import type {
  HeroBackgroundProps,
} from "./hero.types";

export default function HeroBackground({
  src,
  alt = "",
  priority = false,
  className = "",
}: HeroBackgroundProps) {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className={`
          object-cover
          object-center

          ${className}
        `}
      />

      <div
        className="
          absolute
          inset-0

          bg-background/80
        "
      />
    </>
  );
}