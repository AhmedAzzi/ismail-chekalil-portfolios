import { createFileRoute } from "@tanstack/react-router";
import { publications } from "@/lib/portfolio-data";
import { useLanguage } from "@/hooks/useLanguage";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research — Ismail Chekalil" },
      { name: "description", content: "Peer-reviewed publications in friction stir welding, corrosion, AI-assisted manufacturing and sustainability." },
    ],
  }),
  component: ResearchPage,
});

function ResearchPage() {
  const { t } = useLanguage();
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="text-xs font-mono text-primary uppercase tracking-[0.2em]">{t("res_page_kicker")}</div>
      <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold max-w-3xl text-balance">
        {t("res_page_title")}
      </h1>
      <p className="mt-5 text-lg text-muted-foreground max-w-2xl">{t("res_page_desc")}</p>

      <ol className="mt-12 divide-y divide-border border border-border rounded-xl overflow-hidden bg-card">
        {publications.map((p, i) => (
          <li key={p.url} className="group">
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="grid md:grid-cols-12 gap-4 p-6 hover:bg-secondary/60 transition"
            >
              <div className="md:col-span-1 font-mono text-sm text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="md:col-span-8">
                <h2 className="font-display font-semibold leading-snug group-hover:text-primary transition">
                  {p.title}
                </h2>
                <div className="mt-1 text-sm text-muted-foreground italic">{p.venue}</div>
              </div>
              <div className="md:col-span-2 flex items-start">
                <span className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-md bg-secondary border border-border text-muted-foreground">
                  {p.topic}
                </span>
              </div>
              <div className="md:col-span-1 flex items-start justify-end font-mono text-sm text-muted-foreground">
                {p.year}
              </div>
            </a>
          </li>
        ))}
      </ol>

      <div className="mt-10 text-sm text-muted-foreground">{t("res_page_note")}</div>
    </section>
  );
}
