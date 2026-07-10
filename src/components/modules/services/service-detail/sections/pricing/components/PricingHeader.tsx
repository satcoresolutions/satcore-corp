"use client";

interface PricingHeaderProps {
  title: string;

  description: string;
}

export default function PricingHeader({
  title,
  description,
}: PricingHeaderProps) {
  return (
    <header
      className="
        mx-auto
        mb-16
        max-w-3xl
        text-center
      "
    >
      <h2
      >
        {title}
      </h2>

      <p
        className="
          mx-auto
        pt-2
          text-text-primary
        "
      >
        {description}
      </p>
    </header>
  );
}