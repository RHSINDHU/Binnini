import { Link } from "@tanstack/react-router";
import { Facebook, Instagram } from "lucide-react";

const columns = [
  {
    title: "Shop",
    links: [
      { label: "All Products", to: "/shop" as const },
      { label: "New Arrivals", to: "/new-arrivals" as const },
      { label: "Best Sellers", to: "/best-sellers" as const },
      { label: "Gifts", to: "/shop" as const },
    ],
  },
  {
    title: "About",
    links: [
      { label: "Our Story", to: "/about" as const },
      { label: "Contact", to: "/about" as const },
      { label: "FAQ", to: "/about" as const },
      { label: "Shipping & Returns", to: "/about" as const },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Customer Service", to: "/about" as const },
      { label: "Shipping", to: "/about" as const },
      { label: "Returns", to: "/about" as const },
      { label: "Privacy Policy", to: "/about" as const },
      { label: "Terms", to: "/about" as const },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-card/60">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.3fr_repeat(3,1fr)]">
          <div>
            <div className="flex items-center gap-2">
              <span
                className="grid size-9 place-items-center rounded-2xl"
                style={{ background: "var(--coral)" }}
                aria-hidden
              >
                🌈
              </span>
              <span className="font-display text-2xl font-semibold">BINNINI</span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              Little Things, Big Smiles. Playful finds made to bring more color and joy to
              childhood.
            </p>
            <div className="mt-5 flex gap-2">
              {[
                { label: "Instagram", icon: <Instagram className="size-4" /> },
                { label: "TikTok", icon: <span className="text-xs font-bold">TT</span> },
                { label: "Pinterest", icon: <span className="text-xs font-bold">P</span> },
                { label: "Facebook", icon: <Facebook className="size-4" /> },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="grid size-9 place-items-center rounded-full bg-muted transition-transform hover:-translate-y-0.5"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-bold uppercase tracking-wide">{col.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-12 border-t border-border/60 pt-6 text-center text-sm text-muted-foreground">
          © 2026 Binnini. Little Things, Big Smiles. 🌈
        </p>
      </div>
    </footer>
  );
}
