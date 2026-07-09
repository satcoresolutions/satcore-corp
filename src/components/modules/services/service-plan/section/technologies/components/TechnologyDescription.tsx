"use client";

interface TechnologyDescriptionProps {
  footer: string;
}

export default function TechnologyDescription({
  footer,
}: TechnologyDescriptionProps) {
  return (
    <div
      className="
        mx-auto
        mt-14
        max-w-3xl
        text-center
      "
    >
      <p
        className="
          text-base
          leading-relaxed
          text-primary
        "
      >
        {footer}
      </p>
    </div>
  );
}