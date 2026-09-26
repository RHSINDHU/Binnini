import { createFileRoute } from "@tanstack/react-router";
import { ProductCard } from "@/components/site/ProductCard";
import { Section } from "@/components/site/Section";
import { newArrivals } from "@/lib/products";

export const Route = createFileRoute("/new-arrivals")({
  head: () => ({
    meta: [
      { title: "New Arrivals — BINNINI" },
      {
        name: "description",
        content:
          "Fresh from Binnini: the newest cloud tees, starry pajamas, sunny caps and gift sets for little adventurers.",
      },
      { property: "og:title", content: "New Arrivals — BINNINI" },
      { property: "og:description", content: "Just unpacked and ready for new adventures." },
    ],
  }),
  component: NewArrivals,
});

function NewArrivals() {
  return (
    <Section title="Fresh From Binnini 🌈" subtitle="Just unpacked and ready for new adventures.">
      <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
        {newArrivals.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </Section>
  );
}
