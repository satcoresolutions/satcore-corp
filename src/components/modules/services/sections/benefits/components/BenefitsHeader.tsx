import type {
  BenefitsHeaderProps,
} from "../types/benefits.types";

export default function BenefitsHeader({
  title,
  description,
}: BenefitsHeaderProps) {
  return (
    <div
      className="
        mx-auto
        max-w-3xl
        text-center
      "
    >
      <h2
        className="
          text-4xl
          font-bold
          md:text-5xl
        "
      >
        {title}
      </h2>

      <p
        className="
          mt-4
          text-lg
        "
        style={{
          color:
            "var(--color-text-muted)",
        }}
      >
        {description}
      </p>
    </div>
  );
}