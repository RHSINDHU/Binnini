import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { useCart } from "@/lib/cart";

const nav = [
  { label: "Shop", to: "/shop" },
  { label: "New Arrivals", to: "/new-arrivals" },
  { label: "Best Sellers", to: "/best-sellers" },
  { label: "About Us", to: "/about" },
] as const;

export function Header() {
  const { count, setDrawerOpen, bump } = useCart();
  const [open, setOpen] = useState(false);
  const [bouncing, setBouncing] = useState(false);

  useEffect(() => {
    if (bump === 0) return;
    setBouncing(true);
    const t = setTimeout(() => setBouncing(false), 550);
    return () => clearTimeout(t);
  }, [bump]);

  return (
    <header className="sticky top-0 z-40">
      <div
        className="px-4 py-2 text-center text-xs font-semibold tracking-wide sm:text-sm"
        style={{ background: "var(--sunny)", color: "var(--navy)" }}
      >
        🌈 Little Things, Big Smiles — Welcome to Binnini!
      </div>

      <div className="border-b border-border/60 bg-background/85 backdrop-blur-md">
        <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-3 sm:px-6">
          <div className="flex min-w-0 items-center gap-2">
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setOpen((o) => !o)}
              className="rounded-full p-2 transition-colors hover:bg-muted lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>

<Link to="/" className="flex shrink-0 items-center">
  <img
    src="/logo.png"
    alt="Binnini"
    className="h-12 w-auto object-contain sm:h-14"
  />
</Link>

          </div>

          <nav className="hidden justify-center gap-8 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-sm font-semibold text-foreground/80 transition-colors hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <Link
              to="/shop"
              aria-label="Search products"
              className="rounded-full p-2 transition-colors hover:bg-muted"
            >
              <Search className="size-5" />
            </Link>
            <Link
              to="/about"
              aria-label="Account"
              className="hidden rounded-full p-2 transition-colors hover:bg-muted sm:block"
            >
              <User className="size-5" />
            </Link>
            <button
              type="button"
              aria-label={`Shopping bag, ${count} items`}
              onClick={() => setDrawerOpen(true)}
              className="relative rounded-full p-2 transition-colors hover:bg-muted"
            >
              <ShoppingBag className={`size-5 ${bouncing ? "bag-bounce" : ""}`} />
              {count > 0 && (
                <span
                  className="absolute -right-0.5 -top-0.5 grid min-w-5 place-items-center rounded-full px-1 text-[11px] font-bold"
                  style={{ background: "var(--coral)", color: "var(--navy)" }}
                >
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>

        {open && (
          <nav className="border-t border-border/60 bg-background px-4 py-3 lg:hidden">
            <ul className="flex flex-col">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-2 py-3 font-semibold hover:bg-muted"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
