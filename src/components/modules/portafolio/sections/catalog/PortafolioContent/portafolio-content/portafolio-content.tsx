import type {
  PortfolioContentProps,
} from "./types/portafolio-content.types";

export default function PortfolioContent({
  children,
}: PortfolioContentProps) {
  return (
    <div
      className="
        min-w-0
        flex-1
      "
    >
      {children}
    </div>
  );
}