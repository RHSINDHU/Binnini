import { createFileRoute, Link } from "@tanstack/react-router";
import story from "@/assets/story.jpg";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — BINNINI" },
      {
        name: "description",
        content:
          "Binnini was created for the little moments that make childhood magical. Read our story, shipping and returns, and how to reach us.",
      },
      { property: "og:title", content: "Our Story — BINNINI" },
      { property: "og:description", content: "Made for little moments, big smiles." },
    ],
  }),
  component: About,
});

const faqs = [
  {
    q: "How long does shipping take?",
    a: "Orders leave our studio within 1–2 business days. Standard delivery takes 3–5 business days, and shipping is free over $75.",
  },
  {
    q: "What is your returns policy?",
    a: "Unworn items can be returned within 30 days for a full refund. Return labels are free and included in every box.",
  },
  {
    q: "How should I wash Binnini clothing?",
    a: "Machine wash at 30° with similar colors and dry flat. Everything is pre-washed, so shrinking is minimal.",
  },
  {
    q: "How can I reach you?",
    a: "Email hello@binnini.com and a real person replies within one working day.",
  },
];

function About() {
  return (
    <>
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h1 className="font-display text-4xl sm:text-5xl">Made for Little Moments</h1>
            <p className="mt-5 text-muted-foreground">
              Binnini was created for the little moments that make childhood magical — the first
              adventure, the favorite toy, the messy afternoon, the bedtime story, and every big
              smile in between.
            </p>
            <p className="mt-4 text-muted-foreground">
              We believe childhood should be colorful, comfortable, and full of imagination. Every
              piece is designed in soft, gentle colors, made from kind materials, and tested by the
              toughest reviewers we know: kids.
            </p>
            <Link
              to="/shop"
              className="mt-7 inline-block rounded-full px-6 py-3 font-bold transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--coral)", color: "var(--navy)" }}
            >
              Shop Binnini
            </Link>
          </div>
          <img
            src={story}
            alt="Children playing with pastel wooden toys"
            loading="lazy"
            width={1200}
            height={1200}
            className="w-full rounded-[2.5rem] object-cover shadow-soft"
          />
        </div>
      </Section>

      <Section title="Good to know" style={{ background: "color-mix(in oklab, var(--sky) 40%, var(--cream))" }}>
        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((f) => (
            <div key={f.q} className="card-soft p-6">
              <h3 className="font-display text-lg">{f.q}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
