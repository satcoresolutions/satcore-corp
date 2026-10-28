import type { CategorySlug } from "./category";

export type Platform = "Windows" | "macOS" | "Linux" | "Web";
export type Billing = "perpetua" | "mensual" | "anual";
export type Badge = "Nuevo" | "Oferta";

export interface ProductPromotion {
  name: string;
  date: string; // YYYY-MM-DD
  discountPercent: number;
  promotionalPrice: number;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  vendor: string;
  category: CategorySlug;
  summary: string;

  price: number;
  originalPrice?: number;

  billing: Billing;
  platforms: Platform[];
  rating: number;

  badge?: Badge;
  color: string;
  image?: string;

  promotion?: ProductPromotion;
}