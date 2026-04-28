import { createFileRoute } from "@tanstack/react-router";
import { domains } from "@/lib/portfolio-data";
import { useLanguage } from "@/hooks/useLanguage";

export const Route = createFileRoute("/expertise")({
  head: () => ({
    meta: [
      { title: "Expertise — Ismail Chekalil" },
      { name: "description", content: "Engineering domains: additive manufacturing, FSW, machining, materials, design and consulting." },
    ],
  }),
  component: ExpertisePage,
});

function ExpertisePage() {
  const { t } = useLanguage();
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="text-xs font-mono text-primary uppercase tracking-[0.2em]">{t("exp_page_kicker")}</div>
      <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold max-w-3xl text-balance">
        {t("exp_page_title")}
      </h1>
      <p className="mt-5 text-lg text-muted-foreground max-w-2xl">{t("exp_page_desc")}</p>

      <div className="mt-16 grid md:grid-cols-2 gap-6">
        {domains.map((d, i) => (
          <article key={d.slug} className="rounded-xl border border-border bg-card p-7 hover:border-primary/40 transition">
            <div className="flex items-baseline justify-between">
              <span className="font-mono text-xs text-muted-foreground">0{i + 1} / 0{domains.length}</span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-primary">{d.short}</span>
            </div>
            <h2 className="mt-4 font-display text-2xl font-bold">{d.title}</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">{d.description}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {d.bullets.map((b) => (
                <li key={b} className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground border border-border">
                  {b}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
