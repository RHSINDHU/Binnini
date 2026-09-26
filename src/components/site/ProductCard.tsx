import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Heart, Star } from "lucide-react";
import { formatPrice, type Product } from "@/lib/products";
import { useCart } from "@/lib/cart";

export function ProductCard({ product }: { product: Product }) {
  const { add, wishlist, toggleWishlist } = useCart();
  const liked = wishlist.includes(product.slug);
  const [popped, setPopped] = useState(false);

  return (
    <article className="group card-soft lift relative flex flex-col overflow-hidden">
      <Link
        to="/product/$slug"
        params={{ slug: product.slug }}
        className="relative block overflow-hidden rounded-t-3xl"
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={912}
          height={912}
          className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>

      {product.badge && (
        <span
          className="absolute left-3 top-3 rounded-full px-3 py-1 text-[11px] font-bold"
          style={{
            background: product.badge === "New" ? "var(--mint)" : "var(--sunny)",
            color: "var(--navy)",
          }}
        >
          {product.badge === "New" ? "NEW" : "BEST SELLER"}
        </span>
      )}

      <button
        type="button"
        aria-label={liked ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
        aria-pressed={liked}
        onClick={() => {
          toggleWishlist(product.slug);
          setPopped(true);
          setTimeout(() => setPopped(false), 450);
        }}
        className="absolute right-3 top-3 grid size-9 place-items-center rounded-full bg-background/90 shadow-soft"
      >
        <Heart
          className={`size-4 ${popped ? "pop-heart" : ""}`}
          style={{ fill: liked ? "var(--coral)" : "transparent", color: "var(--coral)" }}
        />
      </button>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Star className="size-3.5" style={{ fill: "var(--sunny)", color: "var(--sunny)" }} />
          <span className="font-semibold text-foreground">{product.rating.toFixed(1)}</span>
          <span>({product.reviews})</span>
        </div>

        <h3 className="font-display text-base leading-snug">
          <Link to="/product/$slug" params={{ slug: product.slug }}>
            {product.name}
          </Link>
        </h3>

        <div className="flex items-center gap-1.5">
          {product.colors.map((c) => (
            <span
              key={c.name}
              title={c.name}
              className="size-4 rounded-full border border-border"
              style={{ background: c.token }}
            />
          ))}
        </div>

        <p className="mt-auto pt-2 font-display text-lg">{formatPrice(product.price)}</p>

        <button
          type="button"
          onClick={() =>
            add({ slug: product.slug, color: product.colors[0]?.name, size: product.sizes?.[1] })
          }
          className="mt-1 w-full rounded-full px-4 py-2.5 text-sm font-bold transition-transform hover:-translate-y-0.5"
          style={{ background: "var(--coral)", color: "var(--navy)" }}
        >
          Add to Cart
        </button>
      </div>
    </article>
  );
}
