import type {
  OverviewContentProps,
} from "../types/overview.types";

export default function OverviewContent({
  title,
  description,
}: OverviewContentProps) {
  return (
    <div
      className="
        space-y-6
      "
    >
      <h2
        className="
          text-4xl
          font-bold
        "
      >
        {title}
      </h2>

      <p
        className="
          text-lg
          leading-8
          text-text-primary
        "
      >
        {description}
      </p>
    </div>
  );
}