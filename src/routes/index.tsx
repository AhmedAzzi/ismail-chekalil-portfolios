import { createFileRoute } from "@tanstack/react-router";
import { profile } from "@/lib/portfolio-data";
import { localizedData } from "@/lib/localized-data";
import { useLanguage } from "@/hooks/useLanguage";
import { useState, useMemo, useCallback, useEffect, type ReactNode } from "react";
import { useInView } from "@/hooks/useInView";

/* ─── Typewriter Effect ────────────────────────────────── */

function Typewriter({ 
  text, 
  speed = 70, 
  delay = 0.5, 
  className = "" 
}: { 
  text: string; 
  speed?: number; 
  delay?: number; 
  className?: string 
}) {
  const [displayText, setDisplayText] = useState("");
  const [mounted, setMounted] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    let i = 0;
    setDisplayText("");
    setIsDone(false);

    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayText(text.slice(0, i + 1));
        i++;
        if (i >= text.length) {
          clearInterval(interval);
          setIsDone(true);
        }
      }, speed);
      return () => clearInterval(interval);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [text, speed, delay, mounted]);

  return (
    <span className={className} suppressHydrationWarning>
      {displayText}
      {mounted && !isDone && (
        <span className="inline-block w-[0.15em] h-[0.9em] bg-primary ml-1 animate-pulse align-middle" />
      )}
    </span>
  );
}

/* ─── Scroll-animation wrapper ─────────────────────────── */

function Anim({
  children,
  className = "",
  direction = "up",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "scale" | "fade";
  delay?: number;
}) {
  const [ref, inView] = useInView<HTMLDivElement>(0.12);
  return (
    <div
      ref={ref}
      className={`anim-base anim-${direction} ${inView ? "in-view" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}

/* ─── Image Lightbox ───────────────────────────────────── */

function Lightbox({
  src,
  video,
  alt,
  onClose,
}: {
  src: string;
  video?: string;
  alt: string;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 lightbox-backdrop"
      style={{ background: "oklch(0 0 0 / 0.85)" }}
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/70 hover:text-white transition z-10"
        aria-label="Close"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>
      <div className="relative max-w-5xl max-h-[85vh] lightbox-image" onClick={(e) => e.stopPropagation()}>
        {video ? (
          <video
            src={video}
            poster={src || undefined}
            controls
            autoPlay
            loop
            muted
            playsInline
            className="max-w-full max-h-[85vh] rounded-xl shadow-2xl"
          />
        ) : (
          <img
            src={src || ""}
            alt={alt}
            className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
          />
        )}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent rounded-b-xl pointer-events-none">
          <p className="text-white text-sm font-medium">{alt}</p>
        </div>
      </div>
    </div>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ismail Chekalil — Mechanical Engineering Portfolio" },
      {
        name: "description",
        content:
          "PhD researcher in metal additive manufacturing, friction stir welding and sustainable manufacturing.",
      },
    ],
  }),
  component: HomePage,
});

/* ─── Page ─────────────────────────────────────────────── */

function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
      <TimelineSection />
      <ProjectsSection />
      <ResearchSection />
      <ContactSection />
      <CTASection />
    </>
  );
}

/* ─── Hero ─────────────────────────────────────────────── */

function HeroSection() {
  const { t } = useLanguage();
  const statLabels = ["stat_papers", "stat_domains", "stat_phd", "stat_pmp"];

  return (
    <section id="hero" className="relative bg-hero overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute -top-40 -right-40 h-[420px] w-[420px] rounded-full bg-primary/20 blur-3xl float-slow" />
      <div className="absolute bottom-20 -left-32 h-[300px] w-[300px] rounded-full bg-accent/10 blur-3xl float-slower" />
      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-32">
        <div className="max-w-3xl">
          <Anim direction="down" delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card/60 text-xs font-mono text-muted-foreground mb-8">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              {t("hero_status")}
            </div>
          </Anim>
          <div className="mt-8">
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05] text-balance">
              <Typewriter text={t("name")} />
              <span 
                className="inline-block text-primary animate-[text-reveal_1s_cubic-bezier(0.16,1,0.3,1)_both]" 
                style={{ animationDelay: "2.0s" }}
              >
                .
              </span>
              <span 
                className="block w-full text-muted-foreground font-medium mt-2 text-3xl md:text-5xl animate-[text-reveal_1.2s_cubic-bezier(0.16,1,0.3,1)_both]" 
                style={{ animationDelay: "2.4s" }}
              >
                {t("hero_subtitle")}.
              </span>
            </h1>
          </div>
          <Anim direction="up" delay={0.25}>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl text-balance">
              {t("hero_tagline")}
            </p>
          </Anim>
          <Anim direction="up" delay={0.35}>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-copper text-primary-foreground px-5 py-3 rounded-md text-sm font-medium shadow-elevated hover:opacity-95 hover:scale-[1.02] transition-all duration-200"
              >
                {t("hero_cta_projects")}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
              </a>
              <a
                href="#research"
                className="inline-flex items-center gap-2 border border-border bg-card/60 text-foreground px-5 py-3 rounded-md text-sm font-medium hover:bg-secondary hover:scale-[1.02] transition-all duration-200"
              >
                {t("hero_cta_research")}
              </a>
            </div>
          </Anim>
        </div>

        <Anim direction="up" delay={0.45}>
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-lg overflow-hidden border border-border">
            {profile.stats.map((s, i) => (
              <div key={i} className="bg-card p-6 hover:bg-secondary/40 transition-colors duration-300">
                <div className="font-display text-3xl md:text-4xl font-bold text-primary">{s.value}</div>
                <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">
                  {t(statLabels[i])}
                </div>
              </div>
            ))}
          </div>
        </Anim>
      </div>
    </section>
  );
}

/* ─── About ────────────────────────────────────────────── */

function AboutSection() {
  const { t } = useLanguage();
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <Anim direction="left">
            <div className="text-xs font-mono text-primary uppercase tracking-[0.2em]">{t("about_kicker")}</div>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold">{t("about_title")}</h2>
          </Anim>
        </div>
        <div className="md:col-span-8 space-y-5 text-muted-foreground text-lg leading-relaxed">
          <Anim direction="right" delay={0.1}><p>{t("about_p1")}</p></Anim>
          <Anim direction="right" delay={0.2}>
            <p>
              {t("about_p2_pre")}
              <span className="text-foreground">{t("about_p2_org")}</span>
              {t("about_p2_post")}
            </p>
          </Anim>
          <Anim direction="right" delay={0.3}><p>{t("about_p3")}</p></Anim>
        </div>
      </div>
    </section>
  );
}

/* ─── Expertise ────────────────────────────────────────── */

function ExpertiseSection() {
  const { t, lang } = useLanguage();
  const domains = localizedData[lang].domains;
  return (
    <section id="expertise" className="bg-card/30 border-y border-border">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <Anim direction="up">
          <div className="mb-12">
            <div className="text-xs font-mono text-primary uppercase tracking-[0.2em]">
              {t("expertise_kicker")}
            </div>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold">{t("expertise_title")}</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">{t("exp_page_desc")}</p>
          </div>
        </Anim>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-lg overflow-hidden border border-border">
          {domains.map((d, i) => (
            <Anim key={d.slug} direction="scale" delay={0.05 * i}>
              <div className="bg-card p-6 hover:bg-secondary transition group h-full">
                <div className="font-mono text-xs text-muted-foreground">0{i + 1}</div>
                <h3 className="mt-3 font-display text-lg font-semibold group-hover:text-primary transition">
                  {d.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{d.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {d.bullets.map((b) => (
                    <span
                      key={b}
                      className="text-[10px] px-2 py-0.5 rounded bg-secondary text-muted-foreground border border-border"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </Anim>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Timeline ─────────────────────────────────────────── */

type TimelineEntry = {
  period: string;
  title: string;
  org: string;
  description?: string;
  points?: string[];
  current?: boolean;
  type: "work" | "edu";
};

function TimelineSection() {
  const { t, lang } = useLanguage();
  
  const timelineItems = useMemo<TimelineEntry[]>(() => {
    const data = localizedData[lang];
    return [
      ...data.experience.map((e) => ({
        period: e.period,
        title: e.role,
        org: e.org,
        points: e.points,
        current: e.current,
        type: "work" as const,
      })),
      ...data.education.map((ed) => ({
        period: ed.year,
        title: ed.degree,
        org: ed.school,
        type: "edu" as const,
      })),
    ];
  }, [lang]);
  
  const certs = localizedData[lang].certs;
  return (
    <section id="timeline" className="mx-auto max-w-7xl px-6 py-24">
      {/* ── Centered header ── */}
      <div className="text-center mb-20">
        <div className="text-xs font-mono text-primary uppercase tracking-[0.2em]">
          {t("timeline_kicker")}
        </div>
        <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
          {t("cv_experience")} <span className="text-primary">&</span>{" "}
          <span className="text-primary">{t("cv_education")}</span>
        </h2>
        <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-copper" />
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">{t("timeline_desc")}</p>
      </div>

      {/* ── Alternating timeline ── */}
      <div className="relative">
        {/* Center vertical line — desktop */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 timeline-line" />
        {/* Left vertical line — mobile */}
        <div className="md:hidden absolute left-[15px] top-0 bottom-0 w-0.5 timeline-line" />

        <div className="space-y-12 md:space-y-16">
          {timelineItems.map((item, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div key={item.title + item.period} className="relative">
                {/* ── Dot — center on desktop, left on mobile ── */}
                <div className="absolute left-[15px] md:left-1/2 -translate-x-1/2 top-8 md:top-1/2 md:-translate-y-1/2 z-10">
                  <div
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      item.current
                        ? "bg-primary shadow-[0_0_20px_oklch(0.74_0.16_55/0.6)]"
                        : "bg-accent shadow-[0_0_12px_oklch(0.78_0.14_220/0.4)]"
                    }`}
                  />
                </div>

                {/* ── Card layout ── */}
                {/* Mobile: always right of the line */}
                <div className="md:hidden pl-10">
                  <TimelineCard item={item} t={t} />
                </div>

                {/* Desktop: alternating grid */}
                <div className="hidden md:grid md:grid-cols-[1fr_4rem_1fr] items-center">
                  {isLeft ? (
                    <>
                      <div className="flex justify-end pr-4">
                        <TimelineCard item={item} t={t} />
                      </div>
                      <div />
                      <div />
                    </>
                  ) : (
                    <>
                      <div />
                      <div />
                      <div className="pl-4">
                        <TimelineCard item={item} t={t} />
                      </div>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Certifications ── */}
      <div className="mt-24">
        <h3 className="font-display text-xl font-bold mb-8 text-center">{t("cv_certs_h")}</h3>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certs.map((c) => (
            <div
              key={c.title}
              className="flex items-center gap-6 p-6 rounded-2xl border border-border bg-card hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1"
            >
              <div className="shrink-0 h-20 w-20 md:h-24 md:w-24 rounded-xl bg-white flex items-center justify-center p-3 overflow-hidden shadow-sm border border-black/5">
                <img src={c.image} alt={c.title} className="w-full h-full object-contain" />
              </div>
              <span className="text-lg md:text-xl font-display font-bold text-foreground leading-tight">{c.title}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

/* ── Timeline Card ──────────────────────────────────────── */

function TimelineCard({ item, t }: { item: TimelineEntry; t: (key: string) => string }) {
  const icon =
    item.type === "work" ? (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
        <path d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      </svg>
    ) : (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
      </svg>
    );

  return (
    <div
      className={`group max-w-md rounded-xl border bg-card p-6 transition-all duration-300 hover:shadow-[0_0_50px_oklch(0.74_0.16_55/0.08)] ${
        item.current
          ? "border-primary/40 shadow-[0_0_30px_oklch(0.74_0.16_55/0.06)]"
          : "border-border hover:border-primary/30"
      }`}
    >
      {/* Period badge */}
      <div className="flex items-center gap-2 mb-3">
        {icon}
        <span
          className={`font-mono text-xs px-2.5 py-1 rounded-md border ${
            item.current
              ? "bg-primary/10 text-primary border-primary/30"
              : "bg-secondary text-muted-foreground border-border"
          }`}
        >
          {item.period}
        </span>
      </div>

      {/* Title & org */}
      <h4 className="font-display font-bold text-lg leading-snug">{item.title}</h4>
      <div className="text-sm text-primary mt-1 uppercase tracking-wider font-medium">{item.org}</div>

      {/* Points */}
      {item.points && (
        <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
          {item.points.map((p) => (
            <li key={p} className="flex gap-2 leading-relaxed">
              <span className="text-primary mt-0.5 shrink-0">›</span>
              {p}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/* ─── Projects ─────────────────────────────────────────── */

function ProjectsSection() {
  const { t, lang } = useLanguage();
  const projects = localizedData[lang].projects;
  const categories = useMemo(() => ["All", ...Array.from(new Set(projects.map((p) => p.category)))], [projects]);
  const [active, setActive] = useState("All");
  
  // Reset active category when language changes to avoid empty state
  useEffect(() => {
    setActive("All");
  }, [lang]);

  const list = active === "All" ? projects : projects.filter((p) => p.category === active);
  const [lightbox, setLightbox] = useState<{ src?: string; alt: string; video?: string } | null>(null);

  return (
    <section id="projects" className="bg-card/30 border-y border-border">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <Anim direction="up">
          <div className="text-xs font-mono text-primary uppercase tracking-[0.2em]">
            {t("projects_kicker")}
          </div>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold">{t("proj_page_title")}</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">{t("proj_page_desc")}</p>
        </Anim>

        <Anim direction="up" delay={0.1}>
          <div className="mt-10 flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`text-xs px-3 py-1.5 rounded-md border transition-all duration-200 ${
                  active === c
                    ? "bg-copper text-primary-foreground border-transparent scale-105"
                    : "border-border text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {c === "All" ? t("filter_all") : c}
              </button>
            ))}
          </div>
        </Anim>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((p, i) => (
            <Anim key={p.title} direction="up" delay={0.05 * (i % 6)}>
              <article className="group rounded-lg overflow-hidden border border-border bg-card hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_40px_oklch(0.74_0.16_55/0.06)]">
                <div
                  className="aspect-[4/3] overflow-hidden bg-muted relative cursor-pointer"
                  onClick={() => setLightbox({ src: p.image, alt: p.title, video: p.video })}
                >
                  {p.video ? (
                    <video
                      src={p.video}
                      preload="metadata"
                      muted
                      loop
                      playsInline
                      onMouseEnter={(e) => e.currentTarget.play()}
                      onMouseLeave={(e) => {
                        e.currentTarget.pause();
                        e.currentTarget.currentTime = 0;
                      }}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <img
                      src={p.image || ""}
                      alt={p.title}
                      loading="lazy"
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  )}
                  {/* Zoom overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full p-3 flex items-center justify-center">
                      {p.video ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2">
                          <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                      ) : (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                          <circle cx="11" cy="11" r="8" />
                          <path d="m21 21-4.35-4.35M11 8v6M8 11h6" />
                        </svg>
                      )}
                    </div>
                  </div>
                  {p.video && (
                    <div className="absolute top-3 right-3 px-2 py-1 bg-black/60 backdrop-blur-md rounded text-[9px] font-mono uppercase tracking-widest text-white border border-white/10 flex items-center gap-1.5 shadow-lg">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                      Video
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-primary">{p.category}</div>
                  <h3 className="mt-2 font-display font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.description}</p>
                </div>
              </article>
            </Anim>
          ))}
        </div>
      </div>

      {/* Image lightbox */}
      {lightbox && (
        <Lightbox 
          src={lightbox.src || ""} 
          video={lightbox.video}
          alt={lightbox.alt} 
          onClose={() => setLightbox(null)} 
        />
      )}
    </section>
  );
}

/* ─── Research ─────────────────────────────────────────── */

function ResearchSection() {
  const { t, lang } = useLanguage();
  const publications = localizedData[lang].publications;
  return (
    <section id="research" className="mx-auto max-w-7xl px-6 py-24">
      <div className="text-xs font-mono text-primary uppercase tracking-[0.2em]">{t("res_page_kicker")}</div>
      <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold">{t("res_page_title")}</h2>
      <p className="mt-4 text-lg text-muted-foreground max-w-2xl">{t("res_page_desc")}</p>

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
                <h3 className="font-display font-semibold leading-snug group-hover:text-primary transition">
                  {p.title}
                </h3>
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
      <div className="mt-6 text-sm text-muted-foreground">{t("res_page_note")}</div>
    </section>
  );
}

/* ─── Contact ──────────────────────────────────────────── */

function ContactSection() {
  const { t } = useLanguage();
  return (
    <section id="contact" className="bg-card/30 border-y border-border">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <div className="text-xs font-mono text-primary uppercase tracking-[0.2em]">{t("contact_kicker")}</div>
        <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-balance">
          {t("contact_title")}
        </h2>
        <p className="mt-6 text-lg text-muted-foreground max-w-xl">{t("contact_desc")}</p>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          <a
            href={`mailto:${profile.email}`}
            className="group p-8 rounded-xl border border-border bg-card hover:border-primary/40 transition"
          >
            <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
              {t("contact_email_l")}
            </div>
            <div className="mt-3 font-display text-xl group-hover:text-primary transition break-all">
              {profile.email}
            </div>
            <div className="mt-2 text-sm text-muted-foreground">{t("contact_email_d")}</div>
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
            className="group p-8 rounded-xl border border-border bg-card hover:border-primary/40 transition"
          >
            <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
              {t("contact_phone_l")}
            </div>
            <div className="mt-3 font-display text-xl group-hover:text-primary transition">{profile.phone}</div>
            <div className="mt-2 text-sm text-muted-foreground">{t("contact_phone_d")}</div>
          </a>
          <div className="p-8 rounded-xl border border-border bg-card">
            <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
              {t("contact_loc_l")}
            </div>
            <div className="mt-3 font-display text-xl">{profile.location}</div>
            <div className="mt-2 text-sm text-muted-foreground">{profile.affiliation}</div>
          </div>
          <div className="p-8 rounded-xl border border-border bg-card">
            <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
              {t("contact_eng_l")}
            </div>
            <ul className="mt-3 text-sm text-muted-foreground space-y-1.5">
              <li className="flex gap-2"><span className="text-primary">›</span> {t("contact_eng_1")}</li>
              <li className="flex gap-2"><span className="text-primary">›</span> {t("contact_eng_2")}</li>
              <li className="flex gap-2"><span className="text-primary">›</span> {t("contact_eng_3")}</li>
              <li className="flex gap-2"><span className="text-primary">›</span> {t("contact_eng_4")}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── CTA ──────────────────────────────────────────────── */

function CTASection() {
  const { t } = useLanguage();
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-10 md:p-16 grid-bg">
        <div className="relative max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold">{t("cta_title")}</h2>
          <p className="mt-4 text-muted-foreground text-lg">{t("cta_desc")}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="bg-copper text-primary-foreground px-5 py-3 rounded-md text-sm font-medium shadow-elevated"
            >
              {t("cta_contact")}
            </a>
            <a
              href="/Ismail_Chekalil_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border bg-card/60 px-5 py-3 rounded-md text-sm font-medium hover:bg-secondary transition"
            >
              {t("cv_view_pdf")}
            </a>
            <a
              href="/Ismail_Chekalil_CV.pdf"
              download
              className="border border-border bg-card/60 px-5 py-3 rounded-md text-sm font-medium hover:bg-secondary transition"
            >
              {t("cta_cv")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
