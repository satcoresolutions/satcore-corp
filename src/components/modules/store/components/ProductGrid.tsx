
import type { Product } from "../content-types";
import { ProductCard } from "./ProductCard";

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <p
        className="
          rounded-2xl border border-white/10
          bg-surface px-6 py-10
          text-center text-sm leading-relaxed
          text-text-secondary
        "
        role="status"
      >
        No hay programas con ese filtro.
        Prueba otra categoría o borra la búsqueda.
      </p>
    );
  }

  return (
    <div
      className="
        grid grid-cols-1 gap-5
        sm:grid-cols-2
        lg:grid-cols-3
        xl:gap-6
      "
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}
