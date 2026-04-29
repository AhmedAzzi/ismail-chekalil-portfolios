import { jsx, jsxs } from "react/jsx-runtime";
import { createRootRoute, Link, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter, useRouter } from "@tanstack/react-router";
import { useState, useEffect, useCallback, createContext, useContext } from "react";
const translations = {
  en: {
    name: "Ismail Chekalil",
    // Nav
    nav_home: "Home",
    nav_expertise: "Expertise",
    nav_projects: "Projects",
    nav_research: "Research",
    nav_cv: "CV",
    nav_contact: "Contact",
    nav_experience: "Experience",
    // Hero / Home
    hero_status: "Available for research collaboration & consulting",
    hero_subtitle: "Manufacturing & Materials Researcher",
    hero_tagline: "Bridging metal additive manufacturing, friction stir welding and sustainable processes — from microstructure to industrial application.",
    hero_cta_projects: "Explore projects",
    hero_cta_research: "Research publications",
    // Stats
    stat_papers: "Peer-reviewed papers",
    stat_domains: "Engineering domains",
    stat_phd: "Mechanical Engineering",
    stat_pmp: "Project Management",
    // About (home)
    about_kicker: "01 — About",
    about_title: "From microstructure to industry.",
    about_p1: "Mechanical engineering researcher (PhD) focused on manufacturing and materials, specializing in metal additive manufacturing and friction stir welding with strong emphasis on corrosion behavior and process optimization.",
    about_p2_pre: "Currently a Technical Research Assistant at the ",
    about_p2_org: "Interdisciplinary Research Center for Intelligent Manufacturing & Robotics",
    about_p2_post: " at KFUPM — managing additive and subtractive manufacturing labs, mentoring researchers, and contributing to high-impact sustainable manufacturing projects.",
    about_p3: "Author of peer-reviewed papers on FSW, corrosion and AI-assisted process modeling, and a certified Project Management Professional bridging the gap between research and industrial deployment.",
    // Expertise preview
    expertise_kicker: "02 — Expertise",
    expertise_title: "Eight engineering domains.",
    expertise_all: "All domains →",
    // Projects preview
    projects_kicker: "04 — Selected work",
    projects_title: "Project gallery.",
    projects_view_all: "View all →",
    // CTA
    cta_title: "Looking for a research or industrial partner?",
    cta_desc: "From process development to lab-scale manufacturing studies — let's discuss how I can support your project.",
    cta_contact: "Get in touch",
    cta_cv: "Download CV",
    // Timeline
    timeline_kicker: "03 — Career path",
    timeline_title: "Experience & Education.",
    timeline_desc: "A professional journey spanning research, industry and academia — from precision machining labs to AI-assisted manufacturing research.",
    // Expertise page
    exp_page_kicker: "Expertise",
    exp_page_title: "Specialized domains across manufacturing & materials.",
    exp_page_desc: "A multidisciplinary toolkit covering metal & polymer additive manufacturing, advanced welding, precision machining, materials characterization and engineering management.",
    // Projects page
    proj_page_kicker: "Projects",
    proj_page_title: "A gallery of applied engineering work.",
    proj_page_desc: "From process development on industrial machines to lab-scale studies — each project links a manufacturing question to a measurable outcome.",
    filter_all: "All",
    // Research page
    res_page_kicker: "Research",
    res_page_title: "Peer-reviewed publications.",
    res_page_desc: "Selected journal articles spanning friction stir welding, corrosion, AI-assisted process modeling and sustainable manufacturing.",
    res_page_note: "Each entry links to the publisher's record. For full bibliographic references, see the CV.",
    // CV page
    cv_kicker: "Curriculum Vitae",
    cv_role: "Mechanical Engineer · PhD · PMP",
    cv_view_pdf: "View PDF",
    cv_download: "Download CV",
    cv_experience: "Experience",
    cv_education: "Education",
    cv_contact_h: "Contact",
    cv_certs_h: "Certifications",
    cv_tools_h: "Languages & Tools",
    // Contact page
    contact_kicker: "Contact",
    contact_title: "Let's build something precise.",
    contact_desc: "Open to research collaborations, industrial consulting and training engagements in additive manufacturing, welding and materials engineering.",
    contact_email_l: "Email",
    contact_email_d: "Best for project inquiries and collaboration.",
    contact_phone_l: "Phone",
    contact_phone_d: "Available during KSA business hours.",
    contact_loc_l: "Location",
    contact_eng_l: "Engagements",
    contact_eng_1: "Research collaboration",
    contact_eng_2: "Industrial consulting",
    contact_eng_3: "Technical training",
    contact_eng_4: "Reviewing & advisory",
    // Footer
    footer_role: "Mechanical Engineering · Manufacturing & Materials Research"
  },
  fr: {
    name: "Ismail Chekalil",
    nav_home: "Accueil",
    nav_expertise: "Expertise",
    nav_projects: "Projets",
    nav_research: "Recherche",
    nav_cv: "CV",
    nav_contact: "Contact",
    nav_experience: "Parcours",
    hero_status: "Disponible pour collaborations de recherche et conseil",
    hero_subtitle: "Chercheur en fabrication et matériaux",
    hero_tagline: "Au croisement de la fabrication additive métallique, du soudage par friction-malaxage et des procédés durables — de la microstructure à l'application industrielle.",
    hero_cta_projects: "Voir les projets",
    hero_cta_research: "Publications scientifiques",
    stat_papers: "Articles évalués",
    stat_domains: "Domaines d'ingénierie",
    stat_phd: "Génie Mécanique",
    stat_pmp: "Gestion de projet",
    about_kicker: "01 — À propos",
    about_title: "De la microstructure à l'industrie.",
    about_p1: "Chercheur en génie mécanique (PhD) spécialisé en fabrication et matériaux, avec une expertise en fabrication additive métallique et soudage par friction-malaxage, axé sur la corrosion et l'optimisation des procédés.",
    about_p2_pre: "Actuellement Assistant de Recherche Technique au ",
    about_p2_org: "Centre de Recherche Interdisciplinaire en Fabrication Intelligente & Robotique",
    about_p2_post: " à KFUPM — gestion des laboratoires de fabrication additive et soustractive, encadrement de chercheurs et contribution à des projets de fabrication durable.",
    about_p3: "Auteur d'articles évalués sur le FSW, la corrosion et la modélisation assistée par IA, et certifié PMP — au service du transfert recherche-industrie.",
    expertise_kicker: "02 — Expertise",
    expertise_title: "Huit domaines d'ingénierie.",
    expertise_all: "Tous les domaines →",
    projects_kicker: "04 — Travaux sélectionnés",
    projects_title: "Galerie de projets.",
    projects_view_all: "Voir tout →",
    cta_title: "À la recherche d'un partenaire recherche ou industriel ?",
    cta_desc: "Du développement de procédés aux études à l'échelle laboratoire — discutons de la façon dont je peux soutenir votre projet.",
    cta_contact: "Me contacter",
    cta_cv: "Télécharger le CV",
    timeline_kicker: "03 — Parcours professionnel",
    timeline_title: "Expérience & Formation.",
    timeline_desc: "Un parcours professionnel entre recherche, industrie et enseignement — des laboratoires d'usinage de précision à la recherche en fabrication assistée par IA.",
    exp_page_kicker: "Expertise",
    exp_page_title: "Domaines spécialisés en fabrication & matériaux.",
    exp_page_desc: "Une boîte à outils pluridisciplinaire couvrant la fabrication additive métallique et polymère, le soudage avancé, l'usinage de précision, la caractérisation des matériaux et la gestion de projet.",
    proj_page_kicker: "Projets",
    proj_page_title: "Une galerie d'ingénierie appliquée.",
    proj_page_desc: "Du développement de procédés sur machines industrielles aux études laboratoire — chaque projet relie une question de fabrication à un résultat mesurable.",
    filter_all: "Tous",
    res_page_kicker: "Recherche",
    res_page_title: "Publications évaluées par les pairs.",
    res_page_desc: "Articles de revues couvrant le soudage par friction-malaxage, la corrosion, la modélisation assistée par IA et la fabrication durable.",
    res_page_note: "Chaque entrée mène à la fiche de l'éditeur. Pour les références complètes, voir le CV.",
    cv_kicker: "Curriculum Vitae",
    cv_role: "Ingénieur Mécanique · PhD · PMP",
    cv_view_pdf: "Voir le PDF",
    cv_download: "Télécharger le CV",
    cv_experience: "Expérience",
    cv_education: "Formation",
    cv_contact_h: "Contact",
    cv_certs_h: "Certifications",
    cv_tools_h: "Logiciels & Outils",
    contact_kicker: "Contact",
    contact_title: "Construisons quelque chose de précis.",
    contact_desc: "Ouvert aux collaborations de recherche, au conseil industriel et aux formations en fabrication additive, soudage et ingénierie des matériaux.",
    contact_email_l: "Email",
    contact_email_d: "Idéal pour les demandes de projet et collaborations.",
    contact_phone_l: "Téléphone",
    contact_phone_d: "Disponible aux heures ouvrables (KSA).",
    contact_loc_l: "Localisation",
    contact_eng_l: "Engagements",
    contact_eng_1: "Collaboration de recherche",
    contact_eng_2: "Conseil industriel",
    contact_eng_3: "Formation technique",
    contact_eng_4: "Relecture & conseil scientifique",
    footer_role: "Génie Mécanique · Recherche en Fabrication & Matériaux"
  },
  ar: {
    name: "إسماعيل شيقاليل",
    nav_home: "الرئيسية",
    nav_expertise: "الخبرات",
    nav_projects: "المشاريع",
    nav_research: "الأبحاث",
    nav_cv: "السيرة الذاتية",
    nav_contact: "اتصل بي",
    nav_experience: "المسيرة",
    hero_status: "متاح للتعاون البحثي والاستشارات",
    hero_subtitle: "باحث في التصنيع والمواد",
    hero_tagline: "ربط التصنيع الإضافي للمعادن، واللحام بالاحتكاك والخلط، والعمليات المستدامة — من البنية المجهرية إلى التطبيق الصناعي.",
    hero_cta_projects: "استكشاف المشاريع",
    hero_cta_research: "المنشورات البحثية",
    stat_papers: "أبحاث محكّمة",
    stat_domains: "مجالات هندسية",
    stat_phd: "هندسة ميكانيكية",
    stat_pmp: "إدارة المشاريع",
    about_kicker: "01 — نبذة",
    about_title: "من البنية المجهرية إلى الصناعة.",
    about_p1: "باحث في الهندسة الميكانيكية (دكتوراه) متخصص في التصنيع والمواد، مع خبرة في التصنيع الإضافي للمعادن واللحام بالاحتكاك والخلط، مع تركيز على سلوك التآكل وتحسين العمليات.",
    about_p2_pre: "حاليًا مساعد باحث تقني في ",
    about_p2_org: "مركز البحث متعدد التخصصات للتصنيع الذكي والروبوتات",
    about_p2_post: " بجامعة الملك فهد للبترول والمعادن — إدارة مختبرات التصنيع الإضافي والطرحي، وتدريب الباحثين، والمساهمة في مشاريع التصنيع المستدام.",
    about_p3: "مؤلف لأبحاث محكّمة حول اللحام بالاحتكاك والتآكل والنمذجة المعتمدة على الذكاء الاصطناعي، وحاصل على شهادة PMP لربط البحث بالتطبيق الصناعي.",
    expertise_kicker: "02 — الخبرات",
    expertise_title: "ثمانية مجالات هندسية.",
    expertise_all: "كل المجالات →",
    projects_kicker: "04 — أعمال مختارة",
    projects_title: "معرض المشاريع.",
    projects_view_all: "عرض الكل →",
    cta_title: "تبحث عن شريك بحثي أو صناعي؟",
    cta_desc: "من تطوير العمليات إلى الدراسات المخبرية — لنناقش كيف يمكنني دعم مشروعك.",
    cta_contact: "تواصل معي",
    cta_cv: "تحميل السيرة الذاتية",
    timeline_kicker: "03 — المسيرة المهنية",
    timeline_title: "الخبرة والتعليم.",
    timeline_desc: "مسيرة مهنية تمتد عبر البحث والصناعة والأكاديميا — من مختبرات التشغيل الدقيق إلى أبحاث التصنيع المعزز بالذكاء الاصطناعي.",
    exp_page_kicker: "الخبرات",
    exp_page_title: "مجالات متخصصة في التصنيع والمواد.",
    exp_page_desc: "مجموعة متعددة التخصصات تغطي التصنيع الإضافي للمعادن والبوليمرات، اللحام المتقدم، التشغيل الدقيق، توصيف المواد وإدارة المشاريع.",
    proj_page_kicker: "المشاريع",
    proj_page_title: "معرض للأعمال الهندسية التطبيقية.",
    proj_page_desc: "من تطوير العمليات على الآلات الصناعية إلى الدراسات المخبرية — كل مشروع يربط سؤالًا تصنيعيًا بنتيجة قابلة للقياس.",
    filter_all: "الكل",
    res_page_kicker: "الأبحاث",
    res_page_title: "منشورات علمية محكّمة.",
    res_page_desc: "مقالات منشورة تغطي اللحام بالاحتكاك، التآكل، النمذجة المعتمدة على الذكاء الاصطناعي والتصنيع المستدام.",
    res_page_note: "كل عنوان يقود إلى صفحة الناشر. للمراجع الكاملة، راجع السيرة الذاتية.",
    cv_kicker: "السيرة الذاتية",
    cv_role: "مهندس ميكانيكي · دكتوراه · PMP",
    cv_view_pdf: "عرض PDF",
    cv_download: "تحميل السيرة",
    cv_experience: "الخبرة المهنية",
    cv_education: "التعليم",
    cv_contact_h: "التواصل",
    cv_certs_h: "الشهادات",
    cv_tools_h: "البرمجيات والأدوات",
    contact_kicker: "التواصل",
    contact_title: "لنبنِ شيئًا دقيقًا.",
    contact_desc: "منفتح على التعاون البحثي والاستشارات الصناعية والتدريب في التصنيع الإضافي واللحام وهندسة المواد.",
    contact_email_l: "البريد الإلكتروني",
    contact_email_d: "الأنسب لاستفسارات المشاريع والتعاون.",
    contact_phone_l: "الهاتف",
    contact_phone_d: "متاح خلال ساعات العمل في السعودية.",
    contact_loc_l: "الموقع",
    contact_eng_l: "أنواع التعاون",
    contact_eng_1: "تعاون بحثي",
    contact_eng_2: "استشارات صناعية",
    contact_eng_3: "تدريب تقني",
    contact_eng_4: "مراجعة واستشارات علمية",
    footer_role: "هندسة ميكانيكية · أبحاث التصنيع والمواد"
  }
};
const LanguageContext = createContext(void 0);
const STORAGE_KEY = "ic-lang";
function LanguageProvider({ children }) {
  const [lang, setLangState] = useState("en");
  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved && (saved === "en" || saved === "fr" || saved === "ar")) {
      setLangState(saved);
    }
  }, []);
  const isRTL = lang === "ar";
  const setLang = useCallback((l) => {
    setLangState(l);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, l);
    }
  }, []);
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang, isRTL]);
  const t = useCallback((key) => translations[lang]?.[key] ?? key, [lang]);
  return /* @__PURE__ */ jsx(LanguageContext.Provider, { value: { lang, setLang, t, isRTL }, children });
}
function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
function useTheme() {
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") {
      setTheme(saved);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }
    setMounted(true);
  }, []);
  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);
  const toggleTheme = () => {
    setTheme((prev) => prev === "dark" ? "light" : "dark");
  };
  return { theme, toggleTheme, mounted };
}
function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { t, lang, setLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const links = [
    { href: "#hero", label: t("nav_home") },
    { href: "#expertise", label: t("nav_expertise") },
    { href: "#timeline", label: t("nav_experience") },
    { href: "#projects", label: t("nav_projects") },
    { href: "#research", label: t("nav_research") },
    { href: "#contact", label: t("nav_contact") }
  ];
  const langs = [
    { code: "en", label: "EN" },
    { code: "fr", label: "FR" },
    { code: "ar", label: "عر" }
  ];
  const cycleLang = () => {
    const idx = langs.findIndex((l) => l.code === lang);
    setLang(langs[(idx + 1) % langs.length].code);
  };
  return /* @__PURE__ */ jsxs("header", { className: "sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 h-16 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("a", { href: "#hero", className: "flex items-center gap-3 group", children: [
        /* @__PURE__ */ jsx("div", { className: "relative w-10 h-10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 100 100", className: "w-full h-full overflow-visible group-hover:scale-110 transition-transform duration-500", children: [
          /* @__PURE__ */ jsx(
            "path",
            {
              d: "M 25,20 L 45,20 M 35,20 L 35,80 M 25,80 L 45,80 M 80,25 A 30,30 0 0,0 80,75",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "8",
              strokeLinecap: "square",
              className: "text-border transition-colors group-hover:text-muted-foreground/30"
            }
          ),
          /* @__PURE__ */ jsx(
            "path",
            {
              d: "M 25,20 L 45,20 M 35,20 L 35,80 M 25,80 L 45,80 M 80,25 A 30,30 0 0,0 80,75",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "8",
              strokeLinecap: "square",
              className: "text-primary animate-[laser-cut_3s_ease-in-out_infinite_alternate]",
              style: { strokeDasharray: "220", strokeDashoffset: "220" }
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "leading-tight", children: [
          /* @__PURE__ */ jsx("div", { className: "font-display font-semibold tracking-tight", children: t("name") }),
          /* @__PURE__ */ jsx("div", { className: "text-[10px] uppercase tracking-[0.2em] text-muted-foreground", children: "PhD · PMP" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx("nav", { className: "hidden md:flex items-center gap-1", children: links.map((l) => /* @__PURE__ */ jsx(
          "a",
          {
            href: l.href,
            className: "px-3 py-2 text-sm rounded-md transition-colors text-muted-foreground hover:text-foreground hover:bg-secondary/50",
            children: l.label
          },
          l.href
        )) }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: cycleLang,
            "aria-label": "Change language",
            className: "px-2.5 py-1.5 rounded-md border border-border text-xs font-mono text-muted-foreground hover:text-foreground hover:bg-secondary transition min-w-[44px]",
            children: langs.find((l) => l.code === lang)?.label
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: toggleTheme,
            "aria-label": "Toggle theme",
            className: "p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition",
            children: theme === "dark" ? /* @__PURE__ */ jsxs("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
              /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "5" }),
              /* @__PURE__ */ jsx("path", { d: "M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" })
            ] }) : /* @__PURE__ */ jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ jsx("path", { d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" }) })
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setOpen((v) => !v),
            className: "md:hidden text-muted-foreground hover:text-foreground",
            "aria-label": "Menu",
            children: /* @__PURE__ */ jsx("svg", { width: "22", height: "22", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ jsx("path", { d: "M4 6h16M4 12h16M4 18h16" }) })
          }
        )
      ] })
    ] }),
    open && /* @__PURE__ */ jsx("div", { className: "md:hidden border-t border-border bg-background", children: /* @__PURE__ */ jsx("div", { className: "px-4 py-3 flex flex-col", children: links.map((l) => /* @__PURE__ */ jsx(
      "a",
      {
        href: l.href,
        onClick: () => setOpen(false),
        className: "py-2 text-sm text-muted-foreground hover:text-foreground",
        children: l.label
      },
      l.href
    )) }) })
  ] });
}
function SiteFooter() {
  const { t } = useLanguage();
  return /* @__PURE__ */ jsx("footer", { className: "border-t border-border", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("div", { className: "font-display font-semibold", children: t("name") }),
      /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground mt-1", children: t("footer_role") })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "text-xs text-muted-foreground font-mono", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " — Khobar, Saudi Arabia"
    ] })
  ] }) });
}
const appCss = "/ismail-chekalil-portfolios/assets/styles-BGbPZPT2.css";
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-display font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-display text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-copper px-4 py-2 text-sm font-medium text-primary-foreground",
        children: "Back to home"
      }
    ) })
  ] }) });
}
const Route$6 = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Ismail Chekalil — Mechanical Engineering · Manufacturing & Materials" },
      {
        name: "description",
        content: "Portfolio of Ismail Chekalil, PhD — researcher in metal additive manufacturing, friction stir welding and sustainable manufacturing."
      },
      { property: "og:title", content: "Ismail Chekalil — Engineering Portfolio" },
      {
        property: "og:description",
        content: "Mechanical engineering researcher specialized in additive manufacturing, FSW and materials."
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com"
      }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500&family=Cairo:wght@500;600;700&family=IBM+Plex+Sans+Arabic:wght@400;500;600&display=swap"
      },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  return /* @__PURE__ */ jsx(LanguageProvider, { children: /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsx(SiteHeader, {}),
    /* @__PURE__ */ jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsx(Outlet, {}) }),
    /* @__PURE__ */ jsx(SiteFooter, {})
  ] }) });
}
const $$splitComponentImporter$5 = () => import("./research-D97NZN7V.js");
const Route$5 = createFileRoute("/research")({
  head: () => ({
    meta: [{
      title: "Research — Ismail Chekalil"
    }, {
      name: "description",
      content: "Peer-reviewed publications in friction stir welding, corrosion, AI-assisted manufacturing and sustainability."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./projects-I6ssQqo_.js");
const Route$4 = createFileRoute("/projects")({
  head: () => ({
    meta: [{
      title: "Projects — Ismail Chekalil"
    }, {
      name: "description",
      content: "Selected engineering projects across additive manufacturing, welding, machining and materials."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./expertise-LCWjYW3t.js");
const Route$3 = createFileRoute("/expertise")({
  head: () => ({
    meta: [{
      title: "Expertise — Ismail Chekalil"
    }, {
      name: "description",
      content: "Engineering domains: additive manufacturing, FSW, machining, materials, design and consulting."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./cv-CyNtNImU.js");
const Route$2 = createFileRoute("/cv")({
  head: () => ({
    meta: [{
      title: "CV — Ismail Chekalil"
    }, {
      name: "description",
      content: "Curriculum vitae of Ismail Chekalil — PhD Mechanical Engineering, PMP."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./contact-CChIy_MW.js");
const Route$1 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact — Ismail Chekalil"
    }, {
      name: "description",
      content: "Get in touch for research collaboration, consulting or training."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-R_kCzVwc.js");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Ismail Chekalil — Mechanical Engineering Portfolio"
    }, {
      name: "description",
      content: "PhD researcher in metal additive manufacturing, friction stir welding and sustainable manufacturing."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const ResearchRoute = Route$5.update({
  id: "/research",
  path: "/research",
  getParentRoute: () => Route$6
});
const ProjectsRoute = Route$4.update({
  id: "/projects",
  path: "/projects",
  getParentRoute: () => Route$6
});
const ExpertiseRoute = Route$3.update({
  id: "/expertise",
  path: "/expertise",
  getParentRoute: () => Route$6
});
const CvRoute = Route$2.update({
  id: "/cv",
  path: "/cv",
  getParentRoute: () => Route$6
});
const ContactRoute = Route$1.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$6
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$6
});
const rootRouteChildren = {
  IndexRoute,
  ContactRoute,
  CvRoute,
  ExpertiseRoute,
  ProjectsRoute,
  ResearchRoute
};
const routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
function DefaultErrorComponent({ error, reset }) {
  const router2 = useRouter();
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("div", { className: "mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10", children: /* @__PURE__ */ jsx(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-8 w-8 text-destructive",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2,
        children: /* @__PURE__ */ jsx(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold tracking-tight text-foreground", children: "Something went wrong" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "An unexpected error occurred. Please try again." }),
    false,
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex items-center justify-center gap-3", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const getRouter = () => {
  const router2 = createRouter({
    routeTree,
    context: {},
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultErrorComponent: DefaultErrorComponent
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  router as r,
  useLanguage as u
};
