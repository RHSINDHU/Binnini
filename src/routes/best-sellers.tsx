import { createFileRoute } from "@tanstack/react-router";
import { ProductCard } from "@/components/site/ProductCard";
import { Section } from "@/components/site/Section";
import { bestSellers } from "@/lib/products";

export const Route = createFileRoute("/best-sellers")({
  head: () => ({
    meta: [
      { title: "Best Sellers — BINNINI" },
      {
        name: "description",
        content:
          "Little Favorites: the Binnini rainbow hoodie, happy bear plush and rainbow backpack families love most.",
      },
      { property: "og:title", content: "Best Sellers — BINNINI" },
      { property: "og:description", content: "The pieces families keep coming back for." },
    ],
  }),
  component: BestSellers,
});

function BestSellers() {
  return (
    <Section title="Little Favorites ⭐" subtitle="The pieces families keep coming back for.">
      <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
        {bestSellers.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </Section>
  );
}
