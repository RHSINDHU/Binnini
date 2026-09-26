import type { ReactNode } from "react";

export function Section({
  title,
  subtitle,
  children,
  className = "",
  style,
}: {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <section className={`px-4 py-16 sm:px-6 sm:py-20 ${className}`} style={style}>
      <div className="mx-auto max-w-7xl">
        {title && (
          <div className="mb-8 max-w-2xl">
            <h2 className="font-display text-3xl sm:text-4xl">{title}</h2>
            {subtitle && <p className="mt-3 text-muted-foreground">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export function Floaties() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <span className="float-slow absolute left-[6%] top-[14%] text-3xl">⭐</span>
      <span className="float-slower absolute right-[9%] top-[22%] text-4xl">☁️</span>
      <span className="float-slow absolute bottom-[18%] left-[16%] text-3xl">🌈</span>
      <span className="float-slower absolute bottom-[10%] right-[18%] text-2xl">💛</span>
    </div>
  );
}
