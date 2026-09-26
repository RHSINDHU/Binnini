import { createFileRoute, Link } from "@tanstack/react-router";
import { Minus, Plus, Trash2 } from "lucide-react";
import { lineProduct, useCart } from "@/lib/cart";
import { formatPrice } from "@/lib/products";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Your Bag — BINNINI" },
      { name: "description", content: "Review your Binnini bag and head to checkout." },
      { property: "og:title", content: "Your Bag — BINNINI" },
      { property: "og:description", content: "Review your Binnini bag and head to checkout." },
    ],
  }),
  component: CartPage,
});

function CartPage() {
  const { lines, setQty, remove, subtotal, shipping, total } = useCart();

  return (
    <Section title="Your bag">
      {lines.length === 0 ? (
        <div className="card-soft p-10 text-center">
          <p className="text-muted-foreground">Your bag is empty — let's find something joyful. 🌈</p>
          <Link
            to="/shop"
            className="mt-6 inline-block rounded-full px-6 py-3 font-bold"
            style={{ background: "var(--coral)", color: "var(--navy)" }}
          >
            Start shopping
          </Link>
        </div>
      ) : (
        <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          <ul className="space-y-4">
            {lines.map((line, i) => {
              const p = lineProduct(line);
              if (!p) return null;
              return (
                <li key={`${line.slug}-${i}`} className="card-soft flex gap-4 p-4">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    width={912}
                    height={912}
                    className="size-24 shrink-0 rounded-2xl object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <Link
                      to="/product/$slug"
                      params={{ slug: p.slug }}
                      className="font-display text-lg"
                    >
                      {p.name}
                    </Link>
                    <p className="text-xs text-muted-foreground">
                      {[line.color, line.size].filter(Boolean).join(" · ") || "One size"}
                    </p>
                    <div className="mt-3 flex items-center gap-4">
                      <div className="flex items-center gap-3 rounded-full bg-muted px-3 py-1.5">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          onClick={() => setQty(i, line.qty - 1)}
                        >
                          <Minus className="size-4" />
                        </button>
                        <span className="w-5 text-center font-semibold">{line.qty}</span>
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          onClick={() => setQty(i, line.qty + 1)}
                        >
                          <Plus className="size-4" />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => remove(i)}
                        aria-label={`Remove ${p.name}`}
                        className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
                      >
                        <Trash2 className="size-4" /> Remove
                      </button>
                    </div>
                  </div>
                  <p className="font-display text-lg">{formatPrice(p.price * line.qty)}</p>
                </li>
              );
            })}
          </ul>

          <aside className="card-soft h-fit space-y-3 p-6">
            <h2 className="font-display text-xl">Order summary</h2>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="font-semibold">{formatPrice(subtotal)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Shipping estimate</span>
              <span className="font-semibold">
                {shipping === 0 ? "Free" : formatPrice(shipping)}
              </span>
            </div>
            <div className="flex justify-between border-t border-border pt-3 font-display text-lg">
              <span>Total</span>
              <span>{formatPrice(total)}</span>
            </div>
            <button
              type="button"
              className="mt-2 w-full rounded-full py-3 font-bold transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--coral)", color: "var(--navy)" }}
            >
              Checkout
            </button>
            <p className="text-center text-xs text-muted-foreground">
              Free shipping on orders over $75 🌈
            </p>
          </aside>
        </div>
      )}
    </Section>
  );
}
