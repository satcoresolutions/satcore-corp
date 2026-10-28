import type { Billing, ProductPromotion } from "../content-types";

const suffix: Record<Billing, string> = {
  perpetua: "Pago único",
  mensual: "/ mes",
  anual: "/ año",
};

const fmt = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  maximumFractionDigits: 0,
});

interface PriceProps {
  value: number;
  original?: number;
  billing: Billing;
  promotion?: ProductPromotion;
}

export function Price({
  value,
  original,
  billing,
  promotion,
}: PriceProps) {
  const hasPromotion =
    promotion != null &&
    promotion.discountPercent > 0 &&
    promotion.discountPercent < 100 &&
    promotion.promotionalPrice > 0 &&
    promotion.promotionalPrice < value;

  const displayedPrice = hasPromotion
    ? promotion.promotionalPrice
    : value;

  const previousPrice = hasPromotion
    ? value
    : original;

  return (
    <div className="flex min-w-0 flex-col items-start gap-1.5">
      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
        <strong className="text-2xl font-bold tracking-tight text-accent">
          {fmt.format(displayedPrice)}
        </strong>

        <span className="text-xs font-medium text-text-secondary">
          {suffix[billing]}
        </span>
      </div>

      {previousPrice != null && previousPrice > displayedPrice && (
        <span className="text-sm text-text-muted line-through">
          {fmt.format(previousPrice)}
        </span>
      )}
    </div>
  );
}
