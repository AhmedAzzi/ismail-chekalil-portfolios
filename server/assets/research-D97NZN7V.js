import { jsxs, jsx } from "react/jsx-runtime";
import { p as publications } from "./portfolio-data-BlMOvQPR.js";
import { u as useLanguage } from "./router-BcMEhxjV.js";
import "@tanstack/react-router";
import "react";
function ResearchPage() {
  const {
    t
  } = useLanguage();
  return /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-7xl px-6 py-20", children: [
    /* @__PURE__ */ jsx("div", { className: "text-xs font-mono text-primary uppercase tracking-[0.2em]", children: t("res_page_kicker") }),
    /* @__PURE__ */ jsx("h1", { className: "mt-3 font-display text-4xl md:text-5xl font-bold max-w-3xl text-balance", children: t("res_page_title") }),
    /* @__PURE__ */ jsx("p", { className: "mt-5 text-lg text-muted-foreground max-w-2xl", children: t("res_page_desc") }),
    /* @__PURE__ */ jsx("ol", { className: "mt-12 divide-y divide-border border border-border rounded-xl overflow-hidden bg-card", children: publications.map((p, i) => /* @__PURE__ */ jsx("li", { className: "group", children: /* @__PURE__ */ jsxs("a", { href: p.url, target: "_blank", rel: "noopener noreferrer", className: "grid md:grid-cols-12 gap-4 p-6 hover:bg-secondary/60 transition", children: [
      /* @__PURE__ */ jsx("div", { className: "md:col-span-1 font-mono text-sm text-muted-foreground", children: String(i + 1).padStart(2, "0") }),
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-8", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-display font-semibold leading-snug group-hover:text-primary transition", children: p.title }),
        /* @__PURE__ */ jsx("div", { className: "mt-1 text-sm text-muted-foreground italic", children: p.venue })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "md:col-span-2 flex items-start", children: /* @__PURE__ */ jsx("span", { className: "text-[10px] uppercase tracking-wider px-2 py-1 rounded-md bg-secondary border border-border text-muted-foreground", children: p.topic }) }),
      /* @__PURE__ */ jsx("div", { className: "md:col-span-1 flex items-start justify-end font-mono text-sm text-muted-foreground", children: p.year })
    ] }) }, p.url)) }),
    /* @__PURE__ */ jsx("div", { className: "mt-10 text-sm text-muted-foreground", children: t("res_page_note") })
  ] });
}
export {
  ResearchPage as component
};
