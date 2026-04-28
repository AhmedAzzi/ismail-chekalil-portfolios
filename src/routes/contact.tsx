import { createFileRoute } from "@tanstack/react-router";
import { profile } from "@/lib/portfolio-data";

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
  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <div className="text-xs font-mono text-primary uppercase tracking-[0.2em]">Contact</div>
      <h1 className="mt-3 font-display text-4xl md:text-6xl font-bold text-balance">
        Let's build something precise.
      </h1>
      <p className="mt-6 text-lg text-muted-foreground max-w-xl">
        Open to research collaborations, industrial consulting and training engagements in additive manufacturing,
        welding and materials engineering.
      </p>

      <div className="mt-14 grid md:grid-cols-2 gap-6">
        <a
          href={`mailto:${profile.email}`}
          className="group p-8 rounded-xl border border-border bg-card hover:border-primary/40 transition"
        >
          <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Email</div>
          <div className="mt-3 font-display text-xl group-hover:text-primary transition break-all">{profile.email}</div>
          <div className="mt-2 text-sm text-muted-foreground">Best for project inquiries and collaboration.</div>
        </a>
        <a
          href={`tel:${profile.phone.replace(/\s/g, "")}`}
          className="group p-8 rounded-xl border border-border bg-card hover:border-primary/40 transition"
        >
          <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Phone</div>
          <div className="mt-3 font-display text-xl group-hover:text-primary transition">{profile.phone}</div>
          <div className="mt-2 text-sm text-muted-foreground">Available during KSA business hours.</div>
        </a>
        <div className="p-8 rounded-xl border border-border bg-card">
          <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Location</div>
          <div className="mt-3 font-display text-xl">{profile.location}</div>
          <div className="mt-2 text-sm text-muted-foreground">{profile.affiliation}</div>
        </div>
        <div className="p-8 rounded-xl border border-border bg-card">
          <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Engagements</div>
          <ul className="mt-3 text-sm text-muted-foreground space-y-1.5">
            <li className="flex gap-2"><span className="text-primary">›</span> Research collaboration</li>
            <li className="flex gap-2"><span className="text-primary">›</span> Industrial consulting</li>
            <li className="flex gap-2"><span className="text-primary">›</span> Technical training</li>
            <li className="flex gap-2"><span className="text-primary">›</span> Reviewing & advisory</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
