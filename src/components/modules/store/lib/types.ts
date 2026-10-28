
export type ProductPromotion = {
  name: string;
  date: string; // YYYY-MM-DD
  discountPercent: number;
  promotionalPrice: number;
};

export type Product = {
  id: string;
  nombre: string;
  descripcion: string;
  categoria: string;
  precio: number;
  imagen: string;
  disponible: boolean;
  destacado: boolean;
  promotion?: ProductPromotion;
};

export type LoadResult = {
  products: Product[];
  source: "sheet" | "demo";
  error?: string;
};
