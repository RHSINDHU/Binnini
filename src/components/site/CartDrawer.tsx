import { Link } from "@tanstack/react-router";
import { Minus, Plus, X } from "lucide-react";
import { lineProduct, useCart } from "@/lib/cart";
import { formatPrice } from "@/lib/products";

export function CartDrawer() {
  const { drawerOpen, setDrawerOpen, lines, setQty, remove, subtotal, shipping, total } = useCart();

  if (!drawerOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end" role="dialog" aria-label="Shopping bag">
      <button
        type="button"
        aria-label="Close cart"
        className="absolute inset-0 bg-foreground/30 backdrop-blur-sm"
        onClick={() => setDrawerOpen(false)}
      />
      <aside className="relative flex h-full w-full max-w-md flex-col bg-background shadow-lift">
        <div className="flex items-center justify-between border-b border-border/60 px-5 py-4">
          <h2 className="font-display text-xl">Your bag</h2>
          <button
            type="button"
            aria-label="Close cart"
            onClick={() => setDrawerOpen(false)}
            className="rounded-full p-2 hover:bg-muted"
          >
            <X className="size-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {lines.length === 0 ? (
            <p className="py-16 text-center text-sm text-muted-foreground">
              Your bag is empty — let's find something joyful. 🌈
            </p>
          ) : (
            <ul className="space-y-4">
              {lines.map((line, i) => {
                const p = lineProduct(line);
                if (!p) return null;
                return (
                  <li key={`${line.slug}-${i}`} className="flex gap-3">
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      width={912}
                      height={912}
                      className="size-20 shrink-0 rounded-2xl object-cover"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-semibold">{p.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {[line.color, line.size].filter(Boolean).join(" · ") || "One size"}
                      </p>
                      <div className="mt-2 flex items-center gap-3">
                        <div className="flex items-center gap-2 rounded-full bg-muted px-2 py-1">
                          <button
                            type="button"
                            aria-label="Decrease quantity"
                            onClick={() => setQty(i, line.qty - 1)}
                          >
                            <Minus className="size-3.5" />
                          </button>
                          <span className="w-5 text-center text-sm font-semibold">{line.qty}</span>
                          <button
                            type="button"
                            aria-label="Increase quantity"
                            onClick={() => setQty(i, line.qty + 1)}
                          >
                            <Plus className="size-3.5" />
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => remove(i)}
                          className="text-xs text-muted-foreground underline"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                    <p className="font-display">{formatPrice(p.price * line.qty)}</p>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <div className="space-y-2 border-t border-border/60 px-5 py-4 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Subtotal</span>
            <span className="font-semibold">{formatPrice(subtotal)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Shipping estimate</span>
            <span className="font-semibold">
              {shipping === 0 ? "Free" : formatPrice(shipping)}
            </span>
          </div>
          <div className="flex justify-between font-display text-lg">
            <span>Total</span>
            <span>{formatPrice(total)}</span>
          </div>
          <Link
            to="/cart"
            onClick={() => setDrawerOpen(false)}
            className="mt-2 block rounded-full py-3 text-center font-bold"
            style={{ background: "var(--coral)", color: "var(--navy)" }}
          >
            View bag & checkout
          </Link>
        </div>
      </aside>
    </div>
  );
}
