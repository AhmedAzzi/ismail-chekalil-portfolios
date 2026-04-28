import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/cv")({
  head: () => ({
    meta: [
      { title: "CV — Ismail Chekalil" },
      { name: "description", content: "Curriculum vitae of Ismail Chekalil — PhD Mechanical Engineering, PMP." },
    ],
  }),
  component: CVPage,
});

const experience = [
  {
    role: "Technical Research Assistant",
    org: "KFUPM — IRC Intelligent Manufacturing & Robotics",
    period: "Jan 2024 – Present",
    points: [
      "Pioneer metal, composite & polymer AM (SLM 280, Meltio DED, FDM Creatbot/Prusa).",
      "Manage additive & subtractive manufacturing labs.",
      "Mentor students and researchers in AM and Design for Manufacturing.",
      "Lead high-impact research in sustainable manufacturing.",
      "Oversee 4-axis CNC turning (Index B400, Siemens 840sl) with NX CAM and in-process monitoring.",
    ],
  },
  {
    role: "Mechanical Engineer",
    org: "Technological Platform — Industrial Technology, Algeria",
    period: "Dec 2022 – Dec 2023",
    points: [
      "Supervised installation and commissioning of >$2M of industrial equipment.",
      "Programmed and operated 5-axis HERMLE C400 (Heidenhain 640).",
      "Trained on KUKA laser welding, Hexagon CMM/Arm, FRITSCH granulometry, waterjets, SEI laser.",
      "Provided engineering consulting and CAD/CAM support to industrial clients.",
    ],
  },
  {
    role: "Part-time Lecturer",
    org: "University of Chlef",
    period: "2019 – 2022",
    points: ["Taught Non-Destructive Testing (NDT) — UT, RT, MT, PT.", "Led practical physics sessions."],
  },
  {
    role: "Part-time Freelancer — IKYTOOL",
    org: "CAD, 3D printing, reverse engineering",
    period: "2019 – 2023",
    points: ["Delivered CAD and 3D printing services and reverse-engineered components for prototyping and repair."],
  },
];

const education = [
  { degree: "PhD — Mechanical Engineering (Manufacturing & Production)", school: "University of Djillali Liabes", year: "2023" },
  { degree: "Master's — Mechanical Engineering (Production)", school: "National Polytechnic School — Maurice Audin", year: "2018" },
  { degree: "Bachelor's — Mechanical Engineering (Production)", school: "National Polytechnic School — Maurice Audin", year: "2018" },
];

const certs = [
  "PMP — Project Management Institute (2025)",
  "Metal Cutting Technology — SANDVIK (2024)",
  "Hexagon CMM & Absolute Arm (2023)",
  "SEI Laser Cut (2023)",
  "ERM KUKA Robot (2023)",
  "Heidenhain 5-axis controller (2022)",
];

function CVPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="text-xs font-mono text-primary uppercase tracking-[0.2em]">Curriculum Vitae</div>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold">Ismail Chekalil</h1>
          <div className="mt-2 text-muted-foreground">Mechanical Engineer · PhD · PMP</div>
        </div>
        <div className="flex gap-3">
          <a
            href="/Ismail_Chekalil_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-border px-4 py-2.5 rounded-md text-sm hover:bg-secondary"
          >
            View PDF
          </a>
          <a
            href="/Ismail_Chekalil_CV.pdf"
            download
            className="bg-copper text-primary-foreground px-4 py-2.5 rounded-md text-sm shadow-elevated"
          >
            Download CV
          </a>
        </div>
      </div>

      <div className="mt-14 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-8 space-y-12">
          <div>
            <h2 className="font-display text-2xl font-bold">Experience</h2>
            <div className="mt-6 space-y-8">
              {experience.map((e) => (
                <div key={e.role} className="relative pl-6 border-l border-border">
                  <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-primary" />
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display font-semibold">{e.role}</h3>
                    <span className="font-mono text-xs text-muted-foreground">{e.period}</span>
                  </div>
                  <div className="text-sm text-primary">{e.org}</div>
                  <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground list-disc pl-4">
                    {e.points.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold">Education</h2>
            <div className="mt-6 space-y-4">
              {education.map((ed) => (
                <div key={ed.degree} className="flex justify-between gap-4 p-4 rounded-lg border border-border bg-card">
                  <div>
                    <div className="font-medium">{ed.degree}</div>
                    <div className="text-sm text-muted-foreground">{ed.school}</div>
                  </div>
                  <div className="font-mono text-sm text-muted-foreground">{ed.year}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="md:col-span-4 space-y-8">
          <div className="p-6 rounded-xl border border-border bg-card">
            <h3 className="font-display font-semibold">Contact</h3>
            <div className="mt-3 text-sm text-muted-foreground space-y-1">
              <div>Khobar, Saudi Arabia</div>
              <div>chekalil1ismail@gmail.com</div>
              <div>+966 57 077 6926</div>
            </div>
          </div>
          <div className="p-6 rounded-xl border border-border bg-card">
            <h3 className="font-display font-semibold">Certifications</h3>
            <ul className="mt-3 text-sm text-muted-foreground space-y-2">
              {certs.map((c) => <li key={c} className="flex gap-2"><span className="text-primary">›</span>{c}</li>)}
            </ul>
          </div>
          <div className="p-6 rounded-xl border border-border bg-card">
            <h3 className="font-display font-semibold">Languages & Tools</h3>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              {["NX CAM", "Heidenhain", "Siemens 840sl", "SLM", "Meltio DED", "FDM", "Hexagon CMM", "Python / ML"].map((t) => (
                <span key={t} className="px-2 py-1 rounded-md border border-border bg-secondary">{t}</span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
