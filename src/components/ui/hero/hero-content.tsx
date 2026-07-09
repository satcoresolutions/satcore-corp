import type { HeroContentProps } from "./hero.types";
import clsx from "clsx";

import {
  heroAlignment,
} from "./hero.variants";

import type {
  HeroVariant,
} from "./hero.types";

interface Props extends HeroContentProps {
  variant?: HeroVariant;
}

export default function HeroContent({
  children,
  className = "",
  variant = "default",
}: Props) {
  const isCentered =
    variant === "default" ||
    variant === "center";

  return (
    <div
      className={clsx(
        "relative z-10 w-full flex flex-col gap-6 px-6 md:px-8 lg:px-12",

        // width control
        isCentered
          ? "max-w-4xl mx-auto items-center"
          : "max-w-7xl",

        // alignment
        heroAlignment[variant],

        className
      )}
    >
      {children}
    </div>
  );
}