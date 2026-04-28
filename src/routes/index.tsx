import { createFileRoute, Link } from "@tanstack/react-router";
import { profile, domains, projects } from "@/lib/portfolio-data";
import { useLanguage } from "@/hooks/useLanguage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ismail Chekalil — Mechanical Engineering Portfolio" },
      {
        name: "description",
        content:
          "PhD researcher in metal additive manufacturing, friction stir welding and sustainable manufacturing.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const { t } = useLanguage();
  const featured = projects.slice(0, 6);

  const statLabels = ["stat_papers", "stat_domains", "stat_phd", "stat_pmp"];

  return (
    <>
      {/* HERO */}
      <section className="relative bg-hero overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="absolute -top-40 -right-40 h-[420px] w-[420px] rounded-full bg-primary/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card/60 text-xs font-mono text-muted-foreground mb-8">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              {t("hero_status")}
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05] text-balance">
              {profile.name}.
              <span className="block text-muted-foreground font-medium mt-2 text-3xl md:text-5xl">
                {t("hero_subtitle")}.
              </span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl text-balance">
              {t("hero_tagline")}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 bg-copper text-primary-foreground px-5 py-3 rounded-md text-sm font-medium shadow-elevated hover:opacity-95 transition"
              >
                {t("hero_cta_projects")}
              </Link>
              <Link
                to="/research"
                className="inline-flex items-center gap-2 border border-border bg-card/60 text-foreground px-5 py-3 rounded-md text-sm font-medium hover:bg-secondary transition"
              >
                {t("hero_cta_research")}
              </Link>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-lg overflow-hidden border border-border">
            {profile.stats.map((s, i) => (
              <div key={i} className="bg-card p-6">
                <div className="font-display text-3xl md:text-4xl font-bold text-primary">{s.value}</div>
                <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">
                  {t(statLabels[i])}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="text-xs font-mono text-primary uppercase tracking-[0.2em]">{t("about_kicker")}</div>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold">{t("about_title")}</h2>
          </div>
          <div className="md:col-span-8 space-y-5 text-muted-foreground text-lg leading-relaxed">
            <p>{t("about_p1")}</p>
            <p>
              {t("about_p2_pre")}
              <span className="text-foreground">{t("about_p2_org")}</span>
              {t("about_p2_post")}
            </p>
            <p>{t("about_p3")}</p>
          </div>
        </div>
      </section>

      {/* EXPERTISE PREVIEW */}
      <section className="bg-card/30 border-y border-border">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="text-xs font-mono text-primary uppercase tracking-[0.2em]">{t("expertise_kicker")}</div>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold">{t("expertise_title")}</h2>
            </div>
            <Link to="/expertise" className="hidden md:inline text-sm text-muted-foreground hover:text-primary">
              {t("expertise_all")}
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-lg overflow-hidden border border-border">
            {domains.map((d, i) => (
              <div key={d.slug} className="bg-card p-6 hover:bg-secondary transition group">
                <div className="font-mono text-xs text-muted-foreground">0{i + 1}</div>
                <h3 className="mt-3 font-display text-lg font-semibold group-hover:text-primary transition">{d.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{d.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="text-xs font-mono text-primary uppercase tracking-[0.2em]">{t("projects_kicker")}</div>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold">{t("projects_title")}</h2>
          </div>
          <Link to="/projects" className="text-sm text-muted-foreground hover:text-primary">
            {t("projects_view_all")}
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((p) => (
            <article key={p.title} className="group rounded-lg overflow-hidden border border-border bg-card hover:border-primary/40 transition-all">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-5">
                <div className="text-[10px] font-mono uppercase tracking-wider text-primary">{p.category}</div>
                <h3 className="mt-2 font-display font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-10 md:p-16 grid-bg">
          <div className="relative max-w-2xl">
            <h2 className="font-display text-3xl md:text-4xl font-bold">{t("cta_title")}</h2>
            <p className="mt-4 text-muted-foreground text-lg">{t("cta_desc")}</p>
            <div className="mt-8 flex gap-3">
              <Link to="/contact" className="bg-copper text-primary-foreground px-5 py-3 rounded-md text-sm font-medium shadow-elevated">
                {t("cta_contact")}
              </Link>
              <Link to="/cv" className="border border-border px-5 py-3 rounded-md text-sm font-medium hover:bg-secondary">
                {t("cta_cv")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
