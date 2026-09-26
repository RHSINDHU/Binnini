import { createFileRoute, Link } from "@tanstack/react-router";
import { ProductCard } from "@/components/site/ProductCard";
import { Section } from "@/components/site/Section";
import { categories, products } from "@/lib/products";

type ShopSearch = { category?: string };

export const Route = createFileRoute("/shop")({
  validateSearch: (search: Record<string, unknown>): ShopSearch =>
    typeof search.category === "string" ? { category: search.category } : {},
  head: () => ({
    meta: [
      { title: "Shop All — BINNINI" },
      {
        name: "description",
        content:
          "Browse every Binnini piece: soft kids' clothing, plush toys, backpacks, caps and gift sets in gentle pastel colors.",
      },
      { property: "og:title", content: "Shop All — BINNINI" },
      {
        property: "og:description",
        content: "Every Binnini little find, in one colorful place.",
      },
    ],
  }),
  component: Shop,
});

function Shop() {
  const { category } = Route.useSearch();
  const list = category ? products.filter((p) => p.category === category) : products;

  return (
    <Section title="Shop Binnini" subtitle="Little things, chosen with a lot of care.">
      <div className="mb-8 flex flex-wrap gap-2">
        <Link
          to="/shop"
          className="rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold"
          style={!category ? { background: "var(--sunny)" } : undefined}
        >
          All
        </Link>
        {categories.map((c) => (
          <Link
            key={c.name}
            to="/shop"
            search={{ category: c.name }}
            className="rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold"
            style={category === c.name ? { background: c.color } : undefined}
          >
            {c.emoji} {c.name}
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
        {list.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </Section>
  );
}
