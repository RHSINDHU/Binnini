import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { products, type Product } from "@/lib/products";

export type CartLine = {
  slug: string;
  color?: string;
  size?: string;
  qty: number;
};

type CartContextValue = {
  lines: CartLine[];
  count: number;
  subtotal: number;
  shipping: number;
  total: number;
  drawerOpen: boolean;
  bump: number;
  setDrawerOpen: (open: boolean) => void;
  add: (item: Omit<CartLine, "qty"> & { qty?: number }) => void;
  setQty: (index: number, qty: number) => void;
  remove: (index: number) => void;
  wishlist: string[];
  toggleWishlist: (slug: string) => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "binnini-cart";
const WISH_KEY = "binnini-wishlist";

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [bump, setBump] = useState(0);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setLines(JSON.parse(raw));
      const wraw = localStorage.getItem(WISH_KEY);
      if (wraw) setWishlist(JSON.parse(wraw));
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      /* ignore */
    }
  }, [lines]);

  useEffect(() => {
    try {
      localStorage.setItem(WISH_KEY, JSON.stringify(wishlist));
    } catch {
      /* ignore */
    }
  }, [wishlist]);

  const add = useCallback<CartContextValue["add"]>((item) => {
    setLines((prev) => {
      const idx = prev.findIndex(
        (l) => l.slug === item.slug && l.color === item.color && l.size === item.size,
      );
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = { ...next[idx], qty: next[idx].qty + (item.qty ?? 1) };
        return next;
      }
      return [...prev, { ...item, qty: item.qty ?? 1 }];
    });
    setBump((b) => b + 1);
    setDrawerOpen(true);
  }, []);

  const setQty = useCallback((index: number, qty: number) => {
    setLines((prev) =>
      qty <= 0
        ? prev.filter((_, i) => i !== index)
        : prev.map((l, i) => (i === index ? { ...l, qty } : l)),
    );
  }, []);

  const remove = useCallback((index: number) => {
    setLines((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const toggleWishlist = useCallback((slug: string) => {
    setWishlist((prev) => (prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]));
  }, []);

  const value = useMemo<CartContextValue>(() => {
    const count = lines.reduce((n, l) => n + l.qty, 0);
    const subtotal = lines.reduce((sum, l) => {
      const p = products.find((x) => x.slug === l.slug);
      return sum + (p ? p.price * l.qty : 0);
    }, 0);
    const shipping = subtotal === 0 || subtotal >= 75 ? 0 : 5.9;
    return {
      lines,
      count,
      subtotal,
      shipping,
      total: subtotal + shipping,
      drawerOpen,
      bump,
      setDrawerOpen,
      add,
      setQty,
      remove,
      wishlist,
      toggleWishlist,
    };
  }, [lines, drawerOpen, bump, add, setQty, remove, wishlist, toggleWishlist]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}

export const lineProduct = (line: CartLine): Product | undefined =>
  products.find((p) => p.slug === line.slug);
