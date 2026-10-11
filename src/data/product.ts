// product data if api fails
import {Product} from "@/lib/api";

export const fallbackProducts: Product[] = [
  { id: 1, name: "স্বর্ণমাছি চাল", slug: "swarnamachi-chal", emoji: "🍚", unit: "প্রতি কেজি", category: "চাল", currentPrice: 148, change: 2.1, description: "উন্নত মানের সরু চাল" },
  { id: 2, name: "মিনিকেট চাল", slug: "miniket-chal", emoji: "🍚", unit: "প্রতি কেজি", category: "চাল", currentPrice: 99, change: -2.9, description: "নিত্যপ্রয়োজনীয় সাদা চাল" },
  { id: 3, name: "নাজিরশাইল চাল", slug: "nazirshail-chal", emoji: "🍚", unit: "প্রতি কেজি", category: "চাল", currentPrice: 98, change: 0, description: "প্রিমিয়াম নাজিরশাইল" },
  { id: 4, name: "পেঁয়াজ", slug: "peyaj", emoji: "🧅", unit: "প্রতি কেজি", category: "সবজি", currentPrice: 120, change: 2.8, description: "দেশি পেঁয়াজ" },
  { id: 5, name: "আলু", slug: "alu", emoji: "🥔", unit: "প্রতি কেজি", category: "সবজি", currentPrice: 55, change: -2.9, description: "মুক্তাগাছা আলু" },
  { id: 6, name: "ইলিশ মাছ", slug: "ilish-mach", emoji: "🐟", unit: "প্রতি কেজি", category: "মাছ", currentPrice: 1850, change: 5.6, description: "পদ্মার ইলিশ" },
  { id: 7, name: "ডিম", slug: "dim", emoji: "🥚", unit: "প্রতি ডজন", category: "প্রোটিন", currentPrice: 140, change: -2.8, description: "ফার্মের ডিম" },
  { id: 8, name: "সয়াবিন তেল", slug: "soyabin-tel", emoji: "🫙", unit： "প্রতি লিটার", category: "তেল", currentPrice： 185, change： 1.5, description： "সয়াবিন রিফাইন্ড" },
];
  