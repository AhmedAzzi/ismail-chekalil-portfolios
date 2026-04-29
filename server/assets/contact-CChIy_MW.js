import { jsxs, jsx } from "react/jsx-runtime";
import { b as profile } from "./portfolio-data-BlMOvQPR.js";
import { u as useLanguage } from "./router-BcMEhxjV.js";
import "@tanstack/react-router";
import "react";
function ContactPage() {
  const {
    t
  } = useLanguage();
  return /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-5xl px-6 py-24", children: [
    /* @__PURE__ */ jsx("div", { className: "text-xs font-mono text-primary uppercase tracking-[0.2em]", children: t("contact_kicker") }),
    /* @__PURE__ */ jsx("h1", { className: "mt-3 font-display text-4xl md:text-6xl font-bold text-balance", children: t("contact_title") }),
    /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg text-muted-foreground max-w-xl", children: t("contact_desc") }),
    /* @__PURE__ */ jsxs("div", { className: "mt-14 grid md:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxs("a", { href: `mailto:${profile.email}`, className: "group p-8 rounded-xl border border-border bg-card hover:border-primary/40 transition", children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs font-mono uppercase tracking-wider text-muted-foreground", children: t("contact_email_l") }),
        /* @__PURE__ */ jsx("div", { className: "mt-3 font-display text-xl group-hover:text-primary transition break-all", children: profile.email }),
        /* @__PURE__ */ jsx("div", { className: "mt-2 text-sm text-muted-foreground", children: t("contact_email_d") })
      ] }),
      /* @__PURE__ */ jsxs("a", { href: `tel:${profile.phone.replace(/\s/g, "")}`, className: "group p-8 rounded-xl border border-border bg-card hover:border-primary/40 transition", children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs font-mono uppercase tracking-wider text-muted-foreground", children: t("contact_phone_l") }),
        /* @__PURE__ */ jsx("div", { className: "mt-3 font-display text-xl group-hover:text-primary transition", children: profile.phone }),
        /* @__PURE__ */ jsx("div", { className: "mt-2 text-sm text-muted-foreground", children: t("contact_phone_d") })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "p-8 rounded-xl border border-border bg-card", children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs font-mono uppercase tracking-wider text-muted-foreground", children: t("contact_loc_l") }),
        /* @__PURE__ */ jsx("div", { className: "mt-3 font-display text-xl", children: profile.location }),
        /* @__PURE__ */ jsx("div", { className: "mt-2 text-sm text-muted-foreground", children: profile.affiliation })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "p-8 rounded-xl border border-border bg-card", children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs font-mono uppercase tracking-wider text-muted-foreground", children: t("contact_eng_l") }),
        /* @__PURE__ */ jsxs("ul", { className: "mt-3 text-sm text-muted-foreground space-y-1.5", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-primary", children: "›" }),
            " ",
            t("contact_eng_1")
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-primary", children: "›" }),
            " ",
            t("contact_eng_2")
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-primary", children: "›" }),
            " ",
            t("contact_eng_3")
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-primary", children: "›" }),
            " ",
            t("contact_eng_4")
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  ContactPage as component
};
