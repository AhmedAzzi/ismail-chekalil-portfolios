import { createFileRoute } from "@tanstack/react-router";
import { profile } from "@/lib/portfolio-data";
import { useLanguage } from "@/hooks/useLanguage";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Ismail Chekalil" },
      { name: "description", content: "Get in touch for research collaboration, consulting or training." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useLanguage();
  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <div className="text-xs font-mono text-primary uppercase tracking-[0.2em]">{t("contact_kicker")}</div>
      <h1 className="mt-3 font-display text-4xl md:text-6xl font-bold text-balance">
        {t("contact_title")}
      </h1>
      <p className="mt-6 text-lg text-muted-foreground max-w-xl">{t("contact_desc")}</p>

      <div className="mt-14 grid md:grid-cols-2 gap-6">
        <a
          href={`mailto:${profile.email}`}
          className="group p-8 rounded-xl border border-border bg-card hover:border-primary/40 transition"
        >
          <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">{t("contact_email_l")}</div>
          <div className="mt-3 font-display text-xl group-hover:text-primary transition break-all">{profile.email}</div>
          <div className="mt-2 text-sm text-muted-foreground">{t("contact_email_d")}</div>
        </a>
        <a
          href={`tel:${profile.phone.replace(/\s/g, "")}`}
          className="group p-8 rounded-xl border border-border bg-card hover:border-primary/40 transition"
        >
          <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">{t("contact_phone_l")}</div>
          <div className="mt-3 font-display text-xl group-hover:text-primary transition">{profile.phone}</div>
          <div className="mt-2 text-sm text-muted-foreground">{t("contact_phone_d")}</div>
        </a>
        <div className="p-8 rounded-xl border border-border bg-card">
          <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">{t("contact_loc_l")}</div>
          <div className="mt-3 font-display text-xl">{profile.location}</div>
          <div className="mt-2 text-sm text-muted-foreground">{profile.affiliation}</div>
        </div>
        <div className="p-8 rounded-xl border border-border bg-card">
          <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">{t("contact_eng_l")}</div>
          <ul className="mt-3 text-sm text-muted-foreground space-y-1.5">
            <li className="flex gap-2"><span className="text-primary">›</span> {t("contact_eng_1")}</li>
            <li className="flex gap-2"><span className="text-primary">›</span> {t("contact_eng_2")}</li>
            <li className="flex gap-2"><span className="text-primary">›</span> {t("contact_eng_3")}</li>
            <li className="flex gap-2"><span className="text-primary">›</span> {t("contact_eng_4")}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
