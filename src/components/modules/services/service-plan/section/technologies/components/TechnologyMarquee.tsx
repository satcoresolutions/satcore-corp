"use client";

import Marquee from "react-fast-marquee";

import TechnologyCard from "./TechnologyCard";

import type {
    TechnologyMarqueeProps,
} from "../types/technologies.types";

export default function TechnologyMarquee({
    technologies,
}: TechnologyMarqueeProps) {
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
                        <TechnologyCard
                            technology={technology}
                        />
                    </div>
                ))}
            </Marquee>
        </div>
    );
}