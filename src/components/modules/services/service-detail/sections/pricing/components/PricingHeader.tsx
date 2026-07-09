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
        className="
          text-3xl
          font-bold
          tracking-tight
          md:text-4xl
        "
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