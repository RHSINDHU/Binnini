import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import hero from "@/assets/hero.jpg";
import story from "@/assets/story.jpg";
import { ProductCard } from "@/components/site/ProductCard";
import { Floaties, Section } from "@/components/site/Section";
import { bestSellers, categories, newArrivals, products } from "@/lib/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BINNINI — Little Things, Big Smiles 🌈" },
      {
        name: "description",
        content:
          "Shop Binnini: playful kids' clothing, plush toys, backpacks and gifts in soft pastel colors, made for colorful and comfortable childhood days.",
      },
      { property: "og:title", content: "BINNINI — Little Things, Big Smiles 🌈" },
      {
        property: "og:description",
        content: "Playful little finds made to bring more color, comfort and joy to childhood.",
      },
    ],
  }),
  component: Home,
});

const features = [
  { emoji: "🌿", title: "Made With Care", text: "Thoughtfully designed for little ones." },
  { emoji: "✨", title: "Made for Smiles", text: "Playful products that spark joy." },
  { emoji: "💛", title: "Parent Approved", text: "Designed with both kids and parents in mind." },
  { emoji: "🌈", title: "Childhood First", text: "Inspired by imagination, curiosity, and fun." },
];

const testimonials = [
  {
    quote:
      "Everything feels so thoughtfully designed. My daughter absolutely loves her Binnini hoodie!",
    name: "Sarah M.",
    color: "var(--sky)",
  },
  {
    quote:
      "The plush bear has not left my son's side since it arrived. Beautiful quality and it washes perfectly.",
    name: "Daniel R.",
    color: "var(--mint)",
  },
  {
    quote:
      "Finally a kids' brand that looks lovely in our home too. The packaging made gifting so easy.",
    name: "Priya K.",
    color: "var(--lavender)",
  },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <Floaties />
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:py-20">
          <div className="rise-in">
            <span
              className="inline-block rounded-full px-4 py-1.5 text-xs font-bold"
              style={{ background: "var(--mint)", color: "var(--navy)" }}
            >
              New season just landed
            </span>
            <h1 className="mt-5 font-display text-4xl leading-[1.05] sm:text-6xl">
              Little Things,
              <br />
              Big Smiles. 🌈
            </h1>
            <p className="mt-5 max-w-md text-base text-muted-foreground sm:text-lg">
              Playful little finds made to bring more color, comfort, and joy to childhood.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/shop"
                className="rounded-full px-6 py-3 font-bold transition-transform hover:-translate-y-0.5"
                style={{ background: "var(--coral)", color: "var(--navy)" }}
              >
                Shop Binnini
              </Link>
              <Link
                to="/new-arrivals"
                className="rounded-full border border-foreground/15 bg-card px-6 py-3 font-bold transition-transform hover:-translate-y-0.5"
              >
                Explore New Arrivals
              </Link>
            </div>
          </div>

          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-4 rounded-[3rem] opacity-70 blur-2xl"
              style={{
                background:
                  "linear-gradient(120deg, var(--sunny), var(--sky) 45%, var(--lavender))",
              }}
            />
            <img
              src={hero}
              alt="Happy children in pastel Binnini clothing playing with toys"
              width={1408}
              height={1104}
              className="relative w-full rounded-[2.5rem] object-cover shadow-lift"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <Section title="Made for Little Adventures" subtitle="Four little worlds to explore.">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => (
            <Link
              key={c.name}
              to="/shop"
              search={{ category: c.name }}
              className="lift group rounded-[2rem] p-6 pt-8"
              style={{ background: c.color }}
            >
              <span className="block text-5xl transition-transform duration-300 group-hover:scale-110">
                {c.emoji}
              </span>
              <h3 className="mt-6 font-display text-xl">{c.name}</h3>
              <p className="mt-1 text-sm text-foreground/70">{c.blurb}</p>
            </Link>
          ))}
        </div>
      </Section>

      {/* Best sellers */}
      <Section title="Little Favorites ⭐" subtitle="The pieces families keep coming back for.">
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {bestSellers.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </Section>

      {/* New arrivals */}
      <section
        className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20"
        style={{ background: "var(--sky)" }}
      >
        <Floaties />
        <div className="relative mx-auto max-w-7xl">
          <h2 className="font-display text-3xl sm:text-4xl">Fresh From Binnini 🌈</h2>
          <p className="mt-3 max-w-lg text-foreground/75">
            Just unpacked and ready for new adventures.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {newArrivals.slice(0, 4).map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
          <Link
            to="/new-arrivals"
            className="mt-8 inline-flex items-center gap-2 font-bold underline-offset-4 hover:underline"
          >
            Shop New Arrivals <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      {/* Brand story */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <img
            src={story}
            alt="Two children building with pastel wooden blocks at home"
            loading="lazy"
            width={1200}
            height={1200}
            className="w-full rounded-[2.5rem] object-cover shadow-soft"
          />
          <div>
            <h2 className="font-display text-3xl sm:text-4xl">Made for Little Moments</h2>
            <p className="mt-5 text-muted-foreground">
              Binnini was created for the little moments that make childhood magical — the first
              adventure, the favorite toy, the messy afternoon, the bedtime story, and every big
              smile in between.
            </p>
            <p className="mt-4 text-muted-foreground">
              We believe childhood should be colorful, comfortable, and full of imagination.
            </p>
            <Link
              to="/about"
              className="mt-7 inline-flex items-center gap-2 rounded-full px-6 py-3 font-bold transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--sunny)", color: "var(--navy)" }}
            >
              Our Story <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </Section>

      {/* Why parents love */}
      <Section title="Why Parents Love Binnini">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="card-soft lift p-6">
              <span className="text-3xl">{f.emoji}</span>
              <h3 className="mt-4 font-display text-lg">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section
        title="Smiles From Our Binnini Family 💛"
        style={{ background: "color-mix(in oklab, var(--mint) 45%, var(--cream))" }}
      >
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="card-soft flex h-full flex-col p-6">
              <blockquote className="text-foreground/85">“{t.quote}”</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span
                  className="grid size-9 place-items-center rounded-full font-bold"
                  style={{ background: t.color }}
                >
                  {t.name.charAt(0)}
                </span>
                <span className="text-sm font-semibold">— {t.name}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* Newsletter */}
      <Section>
        <div
          className="relative overflow-hidden rounded-[2.5rem] px-6 py-14 text-center sm:px-12"
          style={{
            background: "linear-gradient(135deg, var(--lavender), var(--sky) 60%, var(--mint))",
          }}
        >
          <Floaties />
          <div className="relative mx-auto max-w-xl">
            <h2 className="font-display text-3xl sm:text-4xl">Join the Binnini Family 🌈</h2>
            <p className="mt-3 text-foreground/80">
              Get first dibs on new arrivals, special surprises, and a little more joy delivered to
              your inbox.
            </p>
            <form
              className="mx-auto mt-7 flex max-w-md flex-col gap-3 sm:flex-row"
              onSubmit={(e) => e.preventDefault()}
            >
              <label className="sr-only" htmlFor="newsletter-email">
                Your email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="Your email address"
                className="flex-1 rounded-full border border-foreground/10 bg-background px-5 py-3 outline-none focus:ring-3 focus:ring-[var(--coral)]"
              />
              <button
                type="submit"
                className="rounded-full px-6 py-3 font-bold transition-transform hover:-translate-y-0.5"
                style={{ background: "var(--coral)", color: "var(--navy)" }}
              >
                Join the Fun
              </button>
            </form>
          </div>
        </div>
      </Section>

      {/* Instagram */}
      <Section title="Little Moments, Big Smiles 📸" subtitle="@binnini">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {[...products, ...products].slice(0, 6).map((p, i) => (
            <img
              key={`${p.slug}-${i}`}
              src={p.image}
              alt={`Binnini moment ${i + 1}`}
              loading="lazy"
              width={912}
              height={912}
              className="aspect-square w-full rounded-3xl object-cover transition-transform duration-300 hover:scale-[1.03]"
            />
          ))}
        </div>
      </Section>
    </>
  );
}
