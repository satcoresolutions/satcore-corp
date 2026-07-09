import type {
  OverviewHighlightsProps,
} from "../types/overview.types";

interface Props
  extends OverviewHighlightsProps {
  title: string;
}

export default function OverviewHighlights({
  title,
  items,
}: Props) {
  return (
    <div
      className="
        mt-10
      "
    >
      <h5
        className="
          mb-5
          text-lg
          font-semibold
        "
      >
        {title}
      </h5>

      <ul
        className="
          space-y-3
        "
      >
        {items.map((item) => (
          <li
            key={item}
            className="
              flex
              items-start
              gap-3
            "
          >
            <span>
              ✓
            </span>

            <span>
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}