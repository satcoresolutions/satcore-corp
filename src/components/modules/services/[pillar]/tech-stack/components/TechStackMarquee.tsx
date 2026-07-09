"use client";

import Marquee from "react-fast-marquee";

import TechStackItem
  from "./TechStackItem";

import type {
  TechStackMarqueeProps,
} from "../types/tech-stack.types";

export default function TechStackMarquee({
  technologies,
}: TechStackMarqueeProps) {
  return (
    <div
      className="
        relative
        overflow-hidden
        marquee-fade
      "
    >
      <Marquee
        autoFill
        speed={50}
        pauseOnHover
        gradient
        gradientColor="var(--color-background)"
      >
        {technologies.map((technology) => (
          <div
            key={technology}
            className="
              flex
              items-center
              justify-center
              px-12.5
            "
          >
            <TechStackItem
              technology={technology}
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}