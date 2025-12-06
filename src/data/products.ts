import heroSneakers from "@/assets/hero-sneakers.jpg";
import productWatch from "@/assets/product-watch.jpg";
import productBackpack from "@/assets/product-backpack.jpg";
import productHeadphones from "@/assets/product-headphones.jpg";
import productSunglasses from "@/assets/product-sunglasses.jpg";
import productMug from "@/assets/product-mug.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  hoverImage?: string;
  category: string;
  badge?: string;
  rating: number;
  reviews: number;
  description: string;
  colors?: string[];
  sizes?: string[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "Classic White Sneakers",
    price: 129,
    originalPrice: 159,
    image: heroSneakers,
    category: "Footwear",
    badge: "Best Seller",
    rating: 4.9,
    reviews: 328,
    description: "Premium white leather sneakers crafted for everyday elegance. Features a cushioned insole and durable outsole.",
    colors: ["White", "Black", "Gray"],
    sizes: ["7", "8", "9", "10", "11", "12"],
  },
  {
    id: "2",
    name: "Minimalist Leather Watch",
    price: 249,
    image: productWatch,
    category: "Accessories",
    badge: "New",
    rating: 4.8,
    reviews: 156,
    description: "Elegant timepiece with genuine leather strap and Swiss movement. Water-resistant up to 50m.",
    colors: ["Brown", "Black", "Navy"],
  },
  {
    id: "3",
    name: "Urban Canvas Backpack",
    price: 89,
    originalPrice: 110,
    image: productBackpack,
    category: "Bags",
    rating: 4.7,
    reviews: 203,
    description: "Spacious and durable backpack with laptop compartment. Perfect for work or travel.",
    colors: ["Gray", "Black", "Olive"],
  },
  {
    id: "4",
    name: "Premium Wireless Headphones",
    price: 299,
    image: productHeadphones,
    category: "Electronics",
    badge: "Popular",
    rating: 4.9,
    reviews: 512,
    description: "Studio-quality sound with active noise cancellation. 30-hour battery life.",
    colors: ["Black", "Silver", "White"],
  },
  {
    id: "5",
    name: "Classic Wayfarer Sunglasses",
    price: 159,
    image: productSunglasses,
    category: "Accessories",
    rating: 4.6,
    reviews: 189,
    description: "Timeless style with polarized lenses. UV400 protection for all-day comfort.",
    colors: ["Black", "Tortoise"],
  },
  {
    id: "6",
    name: "Artisan Ceramic Mug",
    price: 34,
    image: productMug,
    category: "Home",
    rating: 4.8,
    reviews: 87,
    description: "Hand-crafted ceramic mug with a minimalist design. Microwave and dishwasher safe.",
    colors: ["White", "Cream", "Gray"],
  },
];

export const categories = [
  { name: "All", count: products.length },
  { name: "Footwear", count: products.filter(p => p.category === "Footwear").length },
  { name: "Accessories", count: products.filter(p => p.category === "Accessories").length },
  { name: "Bags", count: products.filter(p => p.category === "Bags").length },
  { name: "Electronics", count: products.filter(p => p.category === "Electronics").length },
  { name: "Home", count: products.filter(p => p.category === "Home").length },
];
