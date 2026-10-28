import Image from "next/image";
import type { Product } from "../content-types";
import { isPromotionActive } from "../lib/promotions";
import { PlatformChips } from "./PlatformChips";
import { Price } from "./Price";
import Button from "@/components/ui/button";

export function ProductCard({
  product,
}: {
  product: Product;
}) {
  const {
    name,
    vendor,
    summary,
    price,
    originalPrice,
    billing,
    platforms = [],
    rating,
    badge,
    color,
    image,
    promotion,
  } = product;


  const activePromotion = isPromotionActive(promotion)
    ? promotion
    : undefined;

  const hasDiscount =
    activePromotion != null &&
    activePromotion.discountPercent > 0 &&
    activePromotion.discountPercent < 100 &&
    activePromotion.promotionalPrice > 0 &&
    activePromotion.promotionalPrice < price;

  const displayedBadge = hasDiscount
    ? `-${activePromotion.discountPercent}%`
    : badge;

  const formattedDate = activePromotion
    ? new Intl.DateTimeFormat("es-CO", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      timeZone: "UTC",
    }).format(new Date(`${activePromotion.date}T00:00:00Z`))
    : "";

  return (
    <article
      className="
        group relative flex h-full flex-col overflow-hidden
        rounded-2xl border border-white/8
        bg-surface
        transition-all duration-300 ease-out
        hover:-translate-y-1
        hover:border-accent/30
        hover:shadow-[0_16px_45px_rgba(0,0,0,0.20)]
      "
    >
      {/* Imagen del producto */}
      <div
        className="
          relative isolate aspect-16/10
          overflow-hidden bg-surface-secondary
        "
      >
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            sizes="
              (max-width: 640px) 100vw,
              (max-width: 1024px) 50vw,
              33vw
            "
            className="
              object-cover
              transition-transform duration-500
              group-hover:scale-[1.04]
            "
          />
        ) : (
          <div
            className="
              flex h-full items-center justify-center
              text-5xl font-semibold text-white
            "
            style={{
              backgroundColor: color || "#132A8E",
            }}
            aria-hidden="true"
          >
            {name?.[0]?.toUpperCase() ?? "?"}
          </div>
        )}

        {/* Degradado para mejorar la legibilidad del badge */}
        <div
          className="
            pointer-events-none absolute inset-0
            bg-linear-to-t from-black/35
            via-transparent to-black/10
          "
        />

        {/* Badge de descuento o etiqueta del producto */}
        {displayedBadge && (
          <span
            className="
      absolute left-3 top-3 z-10
      inline-flex items-center
      rounded-lg border border-accent/25
      bg-black/80 px-3 py-1.5
      text-xs font-bold tracking-wide
      text-secondary shadow-lg backdrop-blur-md
    "
          >
            {displayedBadge}
          </span>
        )}
      </div>

      {/* Información del producto */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {/* Proveedor y valoración */}
        <div className="mb-3 flex items-center justify-between gap-3">
          <span
            className="
              truncate text-xs font-medium
              uppercase tracking-[0.12em]
              text-text-muted
            "
          >
            {vendor || "SatCore Solutions"}
          </span>

          {rating != null && (
            <span
              className="
                inline-flex shrink-0 items-center gap-1
                text-xs font-medium text-text-secondary
              "
              aria-label={`Valoración: ${Number(rating).toFixed(1)} de 5`}
            >
              <span className="text-amber-400" aria-hidden="true">
                ★
              </span>

              {Number(rating).toFixed(1)}

              <span className="text-text-muted">/5</span>
            </span>
          )}
        </div>

        {/* Nombre */}
        <h3
          className="
            text-lg font-semibold leading-snug
            tracking-tight text-text-primary
            transition-colors duration-200
            group-hover:text-accent
          "
        >
          {name}
        </h3>

        {/* Descripción */}
        <p
          className="
            mt-2 line-clamp-3 min-h-18
            text-sm leading-6 text-text-secondary
          "
        >
          {summary}
        </p>

        {/* Plataformas compatibles */}
        {platforms.length > 0 && (
          <div className="mt-4">
            <PlatformChips platforms={platforms} />
          </div>
        )}

        {/* Información de la promoción */}
        {activePromotion && (
          <div
            className="
              mt-4 rounded-xl
              border border-accent/15
              bg-accent/5 px-3.5 py-3
            "
          >
            <p className="text-sm font-semibold text-accent">
              {activePromotion.name}
            </p>

            <p className="mt-1 text-xs text-text-secondary">
              Oferta hasta el {formattedDate}
            </p>
          </div>
        )}

        {/* Precio y compra */}
        <div className="mt-auto pt-6">
          <div className="mb-4 border-t border-white/8" />

          <div
            className="
              flex flex-col gap-4
              sm:flex-row sm:items-end sm:justify-between
            "
          >
            {/* Precio */}
            <div className="min-w-0">
              <span
                className="
                  mb-1 block text-xs font-medium
                  text-text-secondary
                "
              >
                {activePromotion
                  ? "Precio promocional"
                  : "Precio"}
              </span>

              <Price
                value={price}
                original={originalPrice}
                billing={billing}
                promotion={activePromotion}
              />
            </div>

            {/* Acción de compra */}
            <div className="shrink-0 sm:pb-0.5">
              <Button
                variant="subtle"
                onClick={() => {
                  // Conectar aquí el flujo de compra.
                }}
              >
                Comprar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
