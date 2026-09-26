import hoodie from "@/assets/p-hoodie.jpg";
import bear from "@/assets/p-bear.jpg";
import backpack from "@/assets/p-backpack.jpg";
import tshirt from "@/assets/p-tshirt.jpg";
import cap from "@/assets/p-cap.jpg";
import pajamas from "@/assets/p-pajamas.jpg";

export type Product = {
  slug: string;
  name: string;
  price: number;
  image: string;
  category: "Clothing" | "Toys & Play" | "Accessories" | "Gifts";
  rating: number;
  reviews: number;
  colors: { name: string; token: string }[];
  sizes?: string[];
  badge?: "New" | "Best Seller";
  tagline: string;
  description: string;
  details: string[];
};

const clothingSizes = ["1-2Y", "3-4Y", "5-6Y", "7-8Y"];

export const products: Product[] = [
  {
    slug: "rainbow-hoodie",
    name: "Binnini Rainbow Hoodie",
    price: 42,
    image: hoodie,
    category: "Clothing",
    rating: 4.9,
    reviews: 128,
    colors: [
      { name: "Rainbow", token: "var(--coral)" },
      { name: "Sky", token: "var(--sky)" },
      { name: "Mint", token: "var(--mint)" },
    ],
    sizes: clothingSizes,
    badge: "Best Seller",
    tagline: "Extra-soft brushed cotton with a happy rainbow gradient.",
    description:
      "Our most-loved hoodie, cut a little roomier for climbing, running and afternoon naps. Brushed on the inside so it feels like a hug.",
    details: ["100% organic brushed cotton", "Machine washable at 30°", "Relaxed play-friendly fit"],
  },
  {
    slug: "happy-bear-plush",
    name: "Binnini Happy Bear Plush",
    price: 28,
    image: bear,
    category: "Toys & Play",
    rating: 5,
    reviews: 214,
    colors: [
      { name: "Honey", token: "var(--sunny)" },
      { name: "Cream", token: "var(--cream)" },
    ],
    badge: "Best Seller",
    tagline: "A cuddly first friend with a bow and a permanent smile.",
    description:
      "Weighted just enough to feel comforting at bedtime, with embroidered eyes and no small parts. Ready for adventures and quiet moments alike.",
    details: ["Recycled soft-fill stuffing", "Embroidered safety features", "Suitable from 0+"],
  },
  {
    slug: "rainbow-backpack",
    name: "Binnini Rainbow Backpack",
    price: 46,
    image: backpack,
    category: "Accessories",
    rating: 4.8,
    reviews: 96,
    colors: [
      { name: "Rainbow", token: "var(--lavender)" },
      { name: "Sunny", token: "var(--sunny)" },
    ],
    badge: "Best Seller",
    tagline: "Just-right size for snacks, crayons and one small dinosaur.",
    description:
      "Padded straps, a wipe-clean lining and a front pocket that fits a water bottle sideways. Designed for first days and every day after.",
    details: ["Water-repellent recycled canvas", "Padded adjustable straps", "Name label inside"],
  },
  {
    slug: "cloud-tshirt",
    name: "Binnini Cloud T-Shirt",
    price: 24,
    image: tshirt,
    category: "Clothing",
    rating: 4.7,
    reviews: 74,
    colors: [
      { name: "Sky", token: "var(--sky)" },
      { name: "Cream", token: "var(--cream)" },
      { name: "Mint", token: "var(--mint)" },
    ],
    sizes: clothingSizes,
    badge: "New",
    tagline: "Little clouds printed on breezy summer cotton.",
    description:
      "A soft everyday tee with a hand-drawn cloud print. Pre-washed so it keeps its shape through a hundred playground days.",
    details: ["Breathable jersey cotton", "Pre-washed, low shrink", "Soft-touch neck binding"],
  },
  {
    slug: "sunny-day-cap",
    name: "Binnini Sunny Day Cap",
    price: 22,
    image: cap,
    category: "Accessories",
    rating: 4.8,
    reviews: 61,
    colors: [
      { name: "Sunny", token: "var(--sunny)" },
      { name: "Coral", token: "var(--coral)" },
    ],
    sizes: ["S", "M"],
    badge: "New",
    tagline: "A tiny embroidered sun for very bright days.",
    description:
      "Lightweight cotton twill with an adjustable back strap and a curved brim that actually stays put while running.",
    details: ["Cotton twill, unlined", "Adjustable back strap", "Hand wash"],
  },
  {
    slug: "starry-night-pajamas",
    name: "Binnini Starry Night Pajamas",
    price: 38,
    image: pajamas,
    category: "Clothing",
    rating: 4.9,
    reviews: 143,
    colors: [
      { name: "Lavender", token: "var(--lavender)" },
      { name: "Sky", token: "var(--sky)" },
    ],
    sizes: clothingSizes,
    badge: "New",
    tagline: "Stars, softness and a smoother bedtime routine.",
    description:
      "A two-piece set in silky-soft cotton with gentle elastic and flat seams, so nothing scratches at 3am.",
    details: ["GOTS-certified cotton", "Flat, non-scratch seams", "Snug sleep-safe fit"],
  },
  {
    slug: "cloud-comfort-blanket",
    name: "Binnini Cloud Comfort Blanket",
    price: 34,
    image: bear,
    category: "Gifts",
    rating: 4.9,
    reviews: 52,
    colors: [
      { name: "Cream", token: "var(--cream)" },
      { name: "Mint", token: "var(--mint)" },
    ],
    badge: "New",
    tagline: "A first blanket made for dragging everywhere.",
    description:
      "Lightweight, breathable and machine washable — a gift that gets loved into softness.",
    details: ["Double-layer muslin cotton", "Gift-boxed", "80 × 80 cm"],
  },
  {
    slug: "little-adventure-gift-set",
    name: "Binnini Little Adventure Gift Set",
    price: 68,
    image: backpack,
    category: "Gifts",
    rating: 5,
    reviews: 37,
    colors: [{ name: "Rainbow", token: "var(--coral)" }],
    badge: "New",
    tagline: "Backpack, cap and plush, wrapped and ready.",
    description:
      "Our three little favorites in one ribboned box — the easiest birthday present you will ever give.",
    details: ["Includes 3 products", "Recycled gift packaging", "Free gift note"],
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

export const bestSellers = products.filter((p) => p.badge === "Best Seller").slice(0, 4);
export const newArrivals = products.filter((p) => p.badge === "New");

export const categories = [
  { name: "Clothing", emoji: "👕", color: "var(--sky)", blurb: "Soft layers for every day" },
  { name: "Toys & Play", emoji: "🧸", color: "var(--sunny)", blurb: "Cuddly friends & makers" },
  { name: "Accessories", emoji: "🎒", color: "var(--mint)", blurb: "Bags, caps & extras" },
  { name: "Gifts", emoji: "🎁", color: "var(--lavender)", blurb: "Wrapped and ready" },
] as const;

export const formatPrice = (value: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value);
