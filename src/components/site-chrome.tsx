import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import type { Language } from "@/lib/translations";
import { useTheme } from "@/hooks/useTheme";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { t, lang, setLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const links = [
    { href: "#hero", label: t("nav_home") },
    { href: "#expertise", label: t("nav_expertise") },
    { href: "#timeline", label: t("nav_experience") },
    { href: "#projects", label: t("nav_projects") },
    { href: "#research", label: t("nav_research") },
    { href: "#contact", label: t("nav_contact") },
  ];

  const langs: { code: Language; label: string }[] = [
    { code: "en", label: "EN" },
    { code: "fr", label: "FR" },
    { code: "ar", label: "عر" },
  ];

  const cycleLang = () => {
    const idx = langs.findIndex((l) => l.code === lang);
    setLang(langs[(idx + 1) % langs.length].code);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 flex items-center justify-center shrink-0">
            <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible group-hover:scale-110 transition-transform duration-500">
              {/* Background etched track */}
              <path 
                d="M 25,20 L 45,20 M 35,20 L 35,80 M 25,80 L 45,80 M 80,25 A 30,30 0 0,0 80,75" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="8" 
                strokeLinecap="square"
                className="text-border transition-colors group-hover:text-muted-foreground/30"
              />
              
              {/* Active Laser Trace */}
              <path 
                d="M 25,20 L 45,20 M 35,20 L 35,80 M 25,80 L 45,80 M 80,25 A 30,30 0 0,0 80,75" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="8" 
                strokeLinecap="square"
                className="text-primary animate-[laser-cut_3s_ease-in-out_infinite_alternate]"
                style={{ strokeDasharray: "220", strokeDashoffset: "220" }}
              />
            </svg>
          </div>
          <div className="leading-tight">
            <div className="font-display font-semibold tracking-tight">{t("name")}</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">PhD · PMP</div>
          </div>
        </a>

        <div className="flex items-center gap-2">
          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-2 text-sm rounded-md transition-colors text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <button
            onClick={cycleLang}
            aria-label="Change language"
            className="px-2.5 py-1.5 rounded-md border border-border text-xs font-mono text-muted-foreground hover:text-foreground hover:bg-secondary transition min-w-[44px]"
          >
            {langs.find((l) => l.code === lang)?.label}
          </button>

          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition"
          >
            {theme === "dark" ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            )}
          </button>

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
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-3 flex flex-col">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm text-muted-foreground hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="font-display font-semibold">{t("name")}</div>
          <div className="text-xs text-muted-foreground mt-1">{t("footer_role")}</div>
        </div>
        <div className="text-xs text-muted-foreground font-mono">
          © {new Date().getFullYear()} — Khobar, Saudi Arabia
        </div>
      </div>
    </footer>
  );
}
