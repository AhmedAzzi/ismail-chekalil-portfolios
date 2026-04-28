import { createFileRoute } from "@tanstack/react-router";
import { projects } from "@/lib/portfolio-data";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Ismail Chekalil" },
      { name: "description", content: "Selected engineering projects across additive manufacturing, welding, machining and materials." },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((p) => p.category)))],
    []
  );
  const [active, setActive] = useState("All");
  const list = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="text-xs font-mono text-primary uppercase tracking-[0.2em]">Projects</div>
      <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold max-w-3xl text-balance">
        A gallery of applied engineering work.
      </h1>
      <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
        From process development on industrial machines to lab-scale studies — each project links a manufacturing
        question to a measurable outcome.
      </p>

      <div className="mt-10 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`text-xs px-3 py-1.5 rounded-md border transition ${
              active === c
                ? "bg-copper text-primary-foreground border-transparent"
                : "border-border text-muted-foreground hover:text-foreground hover:bg-secondary"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map((p) => (
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
              <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
