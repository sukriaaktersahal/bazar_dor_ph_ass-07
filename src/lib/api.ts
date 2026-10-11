// api.ts file details
const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://openapi.programming-hero.com/api/bazardor";

// typeScript types for API responses
export interface Product{
    id: number;
    name: string;
    slug?: string;
    emoji: string;
    unit: string;
    category: string;
    currentPrice: number;
    previousPrice?: number;
    change: number;
    description?: string;
    bazarPrices?: { bazar: string; price: number }[];
}

// interface 
export interface Category {
  id: number;
  name: string;
  slug: string;
  icon: string;
}

// get products 
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

// get product by category
export async function getProductsByCategory(category: string): Promise<Product[]> {
    try {
        const res = await fetch(`${BASE_URL}/products?category=${category}`, { cache: "no-store" });
        if (!res.ok) throw new Error("Category products fetch failed");
        const data = await res.json();
        return Array.isArray(data) ? data : data.products || [];
    } catch (err) {
        console.error("getProductsByCategory error:", err);
        return [];
    }
}

// get product by id or slug
export async function getProductById(idOrSlug: string | number): Promise<Product | null> {
    try {
        const res = await fetch(`${BASE_URL}/products/${idOrSlug}`, { cache: "no-store" });
        if (!res.ok) throw new Error("Product not found");
        return await res.json();
    } catch (err) {
        console.error("getProductById error:", err);
        return null;
    }
}

// all category
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

// get category by slug
export async function getCategoryBySlug(slug: string): Promise<Category | null> {
    try {
        const res = await fetch(`${BASE_URL}/categories/${slug}`, { cache: "no-store" });
        if (!res.ok) throw new Error("Category not found");
        return await res.json();
    } catch (err) {
        console.error("getCategoryBySlug error:", err);
        return null;
    }
}


