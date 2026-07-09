import Image from "next/image";

import type {
  HeroImageProps,
} from "./hero.types";

export default function HeroImage({
  src,
  alt,
  priority = false,
  className = "",
}: HeroImageProps) {
  return (
    <div
      className={`
        relative

        w-full
        max-w-2xl

        ${className}
      `}
    >
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={1200}
        priority={priority}
        className="
          h-auto
          w-full
          object-contain
        "
      />
    </div>
  );
}