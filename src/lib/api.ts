// url for api calls
const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://openapi.programming-hero.com/api/bazardor";

// interfaces markkkketprice
export interface MarketPrice {
    market: string;
    division: string;
    min: number;
    max: number;
}

// interface product
export interface Product {
  id: number;
  slug: string;
    nameBn: string;
    category: string;
    categoryNameBn: string;
    categoryIcon: string;
    unit: string;
  image: string;
    today: number;
    yesterday: number;
    lastWeek: number;
    lastMonth: number;
    change: {
    dir: "up" | "down" | "flat";
    pct: number;
  };
  markets: MarketPrice[];
}  

// interface category
export interface Category {
  id: string;
  slug: string;
    nameBn: string;
    icon: string;
}

// getting all products
export async function getAllProducts(): Promise<Product[]> {
  try {
    const res = await fetch(`${BASE_URL}/products`, { cache: "no-store" });
    if (!res.ok) throw new Error("Products fetch failed");
    const data = await res.json();
    return Array.isArray(data) ? data : data.products || [];
  } catch (err) {
    console.error("getAllProducts error:", err);
    return [];
  }
}

// getting product by category
export async function getProductsByCategory(
  category: string
): Promise<Product[]> {
    try {
    const res = await fetch(`${BASE_URL}/products?category=${category}`, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Category products fetch failed");
    const data = await res.json();
    return Array.isArray(data) ? data : data.products || [];
  } catch (err) {
    console.error("getProductsByCategory error:", err);
    return [];
  }
}

// getting product by id
export async function getProductById(
  idOrSlug: string | number
): Promise<Product | null> {
    try {
    const res = await fetch(`${BASE_URL}/products/${idOrSlug}`, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Product not found");
    return await res.json();
  } catch (err) {
    console.error("getProductById error:", err);
    return null;
  }
}

// GETTING ALL CATEGORIES
export async function getAllCategories(): Promise<Category[]> {
  try {
    const res = await fetch(`${BASE_URL}/categories`, { cache: "no-store" });
    if (!res.ok) throw new Error("Categories fetch failed");
    const data = await res.json();
    return Array.isArray(data) ? data : data.categories || [];
  } catch (err) {
    console.error("getAllCategories error:", err);
    return [];
  }
}

// gatting category by slug
export async function getCategoryBySlug(
    slug: string
): Promise<Category | null> {
    try {
    const res = await fetch(`${BASE_URL}/categories/${slug}`, {
        cache: "no-store",
    });
    if (!res.ok) throw new Error("Category not found");
    return await res.json();
  } catch (err) {
    console.error("getCategoryBySlug error:", err);
    return null;
  }
}

