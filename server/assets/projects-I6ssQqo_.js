import { jsxs, jsx } from "react/jsx-runtime";
import { a as projects } from "./portfolio-data-BlMOvQPR.js";
import { useMemo, useState } from "react";
import { u as useLanguage } from "./router-BcMEhxjV.js";
import "@tanstack/react-router";
function ProjectsPage() {
  const {
    t
  } = useLanguage();
  const categories = useMemo(() => ["All", ...Array.from(new Set(projects.map((p) => p.category)))], []);
  const [active, setActive] = useState("All");
  const list = active === "All" ? projects : projects.filter((p) => p.category === active);
  return /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-7xl px-6 py-20", children: [
    /* @__PURE__ */ jsx("div", { className: "text-xs font-mono text-primary uppercase tracking-[0.2em]", children: t("proj_page_kicker") }),
    /* @__PURE__ */ jsx("h1", { className: "mt-3 font-display text-4xl md:text-5xl font-bold max-w-3xl text-balance", children: t("proj_page_title") }),
    /* @__PURE__ */ jsx("p", { className: "mt-5 text-lg text-muted-foreground max-w-2xl", children: t("proj_page_desc") }),
    /* @__PURE__ */ jsx("div", { className: "mt-10 flex flex-wrap gap-2", children: categories.map((c) => /* @__PURE__ */ jsx("button", { onClick: () => setActive(c), className: `text-xs px-3 py-1.5 rounded-md border transition ${active === c ? "bg-copper text-primary-foreground border-transparent" : "border-border text-muted-foreground hover:text-foreground hover:bg-secondary"}`, children: c === "All" ? t("filter_all") : c }, c)) }),
    /* @__PURE__ */ jsx("div", { className: "mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: list.map((p) => /* @__PURE__ */ jsxs("article", { className: "group rounded-lg overflow-hidden border border-border bg-card hover:border-primary/40 transition-all", children: [
      /* @__PURE__ */ jsx("div", { className: "aspect-[4/3] overflow-hidden bg-muted", children: /* @__PURE__ */ jsx("img", { src: p.image, alt: p.title, loading: "lazy", className: "h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" }) }),
      /* @__PURE__ */ jsxs("div", { className: "p-5", children: [
        /* @__PURE__ */ jsx("div", { className: "text-[10px] font-mono uppercase tracking-wider text-primary", children: p.category }),
        /* @__PURE__ */ jsx("h3", { className: "mt-2 font-display font-semibold", children: p.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: p.description })
      ] })
    ] }, p.title)) })
  ] });
}
export {
  ProjectsPage as component
};
