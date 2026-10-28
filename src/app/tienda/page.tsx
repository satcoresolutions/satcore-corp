
import Hero from "@/components/modules/store/components/Hero";
import { Catalog } from "@/components/modules/store/components/Catalog";
import { Features } from "@/components/modules/store/components/Features";

import { loadProducts } from "@/components/modules/store/lib/products";
import { features } from "@/components/modules/store/content/features";

export const revalidate = 300;

function slugifyCategory(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default async function HomePage() {
  const result = await loadProducts();

  // Productos disponibles para mostrar en el catálogo.
  const products = result.products.filter(
    (product) => product.disponible
  );

  // Categorías generadas desde la columna "categoria".
  const categories = Array.from(
    new Map(
      products
        .map((product) => product.categoria.trim())
        .filter((name) => name.length > 0)
        .map((name) => {
          const slug = slugifyCategory(name);

          return [
            slug,
            {
              slug,
              name,
              description: "",
            },
          ];
        })
    ).values()
  );

  return (
    <main>
      <Hero total={products.length} />

      <Catalog
        products={products}
        categories={categories}
      />

      <Features features={features} />
    </main>
  );
}
