import { jsxs, jsx } from "react/jsx-runtime";
import { d as domains } from "./portfolio-data-BlMOvQPR.js";
import { u as useLanguage } from "./router-BcMEhxjV.js";
import "@tanstack/react-router";
import "react";
function ExpertisePage() {
  const {
    t
  } = useLanguage();
  return /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-7xl px-6 py-20", children: [
    /* @__PURE__ */ jsx("div", { className: "text-xs font-mono text-primary uppercase tracking-[0.2em]", children: t("exp_page_kicker") }),
    /* @__PURE__ */ jsx("h1", { className: "mt-3 font-display text-4xl md:text-5xl font-bold max-w-3xl text-balance", children: t("exp_page_title") }),
    /* @__PURE__ */ jsx("p", { className: "mt-5 text-lg text-muted-foreground max-w-2xl", children: t("exp_page_desc") }),
    /* @__PURE__ */ jsx("div", { className: "mt-16 grid md:grid-cols-2 gap-6", children: domains.map((d, i) => /* @__PURE__ */ jsxs("article", { className: "rounded-xl border border-border bg-card p-7 hover:border-primary/40 transition", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-baseline justify-between", children: [
        /* @__PURE__ */ jsxs("span", { className: "font-mono text-xs text-muted-foreground", children: [
          "0",
          i + 1,
          " / 0",
          domains.length
        ] }),
        /* @__PURE__ */ jsx("span", { className: "font-mono text-[10px] uppercase tracking-wider text-primary", children: d.short })
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "mt-4 font-display text-2xl font-bold", children: d.title }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 text-muted-foreground leading-relaxed", children: d.description }),
      /* @__PURE__ */ jsx("ul", { className: "mt-5 flex flex-wrap gap-2", children: d.bullets.map((b) => /* @__PURE__ */ jsx("li", { className: "text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground border border-border", children: b }, b)) })
    ] }, d.slug)) })
  ] });
}
export {
  ExpertisePage as component
};
