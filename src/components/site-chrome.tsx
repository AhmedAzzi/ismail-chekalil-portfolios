import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/expertise", label: "Expertise" },
  { to: "/projects", label: "Projects" },
  { to: "/research", label: "Research" },
  { to: "/cv", label: "CV" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="h-8 w-8 rounded-md bg-copper grid place-items-center font-display font-bold text-primary-foreground shadow-elevated">
            IC
          </span>
          <div className="leading-tight">
            <div className="font-display font-semibold tracking-tight">Ismail Chekalil</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">PhD · PMP</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => {
            const active = path === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`px-3 py-2 text-sm rounded-md transition-colors ${
                  active
                    ? "text-foreground bg-secondary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-muted-foreground hover:text-foreground"
          aria-label="Menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-3 flex flex-col">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-2 text-sm text-muted-foreground hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="font-display font-semibold">Ismail Chekalil</div>
          <div className="text-xs text-muted-foreground mt-1">
            Mechanical Engineering · Manufacturing & Materials Research
          </div>
        </div>
        <div className="text-xs text-muted-foreground font-mono">
          © {new Date().getFullYear()} — Khobar, Saudi Arabia
        </div>
      </div>
    </footer>
  );
}
