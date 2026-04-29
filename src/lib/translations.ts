export type Language = "en" | "fr" | "ar";

type Dict = Record<string, string>;

export const translations: Record<Language, Dict> = {
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
    hero_tagline:
      "Bridging metal additive manufacturing, friction stir welding and sustainable processes — from microstructure to industrial application.",
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
    about_p1:
      "Mechanical engineering researcher (PhD) focused on manufacturing and materials, specializing in metal additive manufacturing and friction stir welding with strong emphasis on corrosion behavior and process optimization.",
    about_p2_pre: "Currently a Technical Research Assistant at the ",
    about_p2_org: "Interdisciplinary Research Center for Intelligent Manufacturing & Robotics",
    about_p2_post:
      " at KFUPM — managing additive and subtractive manufacturing labs, mentoring researchers, and contributing to high-impact sustainable manufacturing projects.",
    about_p3:
      "Author of peer-reviewed papers on FSW, corrosion and AI-assisted process modeling, and a certified Project Management Professional bridging the gap between research and industrial deployment.",

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
    cta_desc:
      "From process development to lab-scale manufacturing studies — let's discuss how I can support your project.",
    cta_contact: "Get in touch",
    cta_cv: "Download CV",

    // Timeline
    timeline_kicker: "03 — Career path",
    timeline_title: "Experience & Education.",
    timeline_desc: "A professional journey spanning research, industry and academia — from precision machining labs to AI-assisted manufacturing research.",

    // Expertise page
    exp_page_kicker: "Expertise",
    exp_page_title: "Specialized domains across manufacturing & materials.",
    exp_page_desc:
      "A multidisciplinary toolkit covering metal & polymer additive manufacturing, advanced welding, precision machining, materials characterization and engineering management.",

    // Projects page
    proj_page_kicker: "Projects",
    proj_page_title: "A gallery of applied engineering work.",
    proj_page_desc:
      "From process development on industrial machines to lab-scale studies — each project links a manufacturing question to a measurable outcome.",
    filter_all: "All",

    // Research page
    res_page_kicker: "Research",
    res_page_title: "Peer-reviewed publications.",
    res_page_desc:
      "Selected journal articles spanning friction stir welding, corrosion, AI-assisted process modeling and sustainable manufacturing.",
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
    contact_desc:
      "Open to research collaborations, industrial consulting and training engagements in additive manufacturing, welding and materials engineering.",
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
    footer_role: "Mechanical Engineering · Manufacturing & Materials Research",
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
    hero_tagline:
      "Au croisement de la fabrication additive métallique, du soudage par friction-malaxage et des procédés durables — de la microstructure à l'application industrielle.",
    hero_cta_projects: "Voir les projets",
    hero_cta_research: "Publications scientifiques",

    stat_papers: "Articles évalués",
    stat_domains: "Domaines d'ingénierie",
    stat_phd: "Génie Mécanique",
    stat_pmp: "Gestion de projet",

    about_kicker: "01 — À propos",
    about_title: "De la microstructure à l'industrie.",
    about_p1:
      "Chercheur en génie mécanique (PhD) spécialisé en fabrication et matériaux, avec une expertise en fabrication additive métallique et soudage par friction-malaxage, axé sur la corrosion et l'optimisation des procédés.",
    about_p2_pre: "Actuellement Assistant de Recherche Technique au ",
    about_p2_org: "Centre de Recherche Interdisciplinaire en Fabrication Intelligente & Robotique",
    about_p2_post:
      " à KFUPM — gestion des laboratoires de fabrication additive et soustractive, encadrement de chercheurs et contribution à des projets de fabrication durable.",
    about_p3:
      "Auteur d'articles évalués sur le FSW, la corrosion et la modélisation assistée par IA, et certifié PMP — au service du transfert recherche-industrie.",

    expertise_kicker: "02 — Expertise",
    expertise_title: "Huit domaines d'ingénierie.",
    expertise_all: "Tous les domaines →",

    projects_kicker: "04 — Travaux sélectionnés",
    projects_title: "Galerie de projets.",
    projects_view_all: "Voir tout →",

    cta_title: "À la recherche d'un partenaire recherche ou industriel ?",
    cta_desc:
      "Du développement de procédés aux études à l'échelle laboratoire — discutons de la façon dont je peux soutenir votre projet.",
    cta_contact: "Me contacter",
    cta_cv: "Télécharger le CV",

    timeline_kicker: "03 — Parcours professionnel",
    timeline_title: "Expérience & Formation.",
    timeline_desc: "Un parcours professionnel entre recherche, industrie et enseignement — des laboratoires d'usinage de précision à la recherche en fabrication assistée par IA.",

    exp_page_kicker: "Expertise",
    exp_page_title: "Domaines spécialisés en fabrication & matériaux.",
    exp_page_desc:
      "Une boîte à outils pluridisciplinaire couvrant la fabrication additive métallique et polymère, le soudage avancé, l'usinage de précision, la caractérisation des matériaux et la gestion de projet.",

    proj_page_kicker: "Projets",
    proj_page_title: "Une galerie d'ingénierie appliquée.",
    proj_page_desc:
      "Du développement de procédés sur machines industrielles aux études laboratoire — chaque projet relie une question de fabrication à un résultat mesurable.",
    filter_all: "Tous",

    res_page_kicker: "Recherche",
    res_page_title: "Publications évaluées par les pairs.",
    res_page_desc:
      "Articles de revues couvrant le soudage par friction-malaxage, la corrosion, la modélisation assistée par IA et la fabrication durable.",
    res_page_note:
      "Chaque entrée mène à la fiche de l'éditeur. Pour les références complètes, voir le CV.",

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
    contact_desc:
      "Ouvert aux collaborations de recherche, au conseil industriel et aux formations en fabrication additive, soudage et ingénierie des matériaux.",
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

    footer_role: "Génie Mécanique · Recherche en Fabrication & Matériaux",
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
    hero_tagline:
      "ربط التصنيع الإضافي للمعادن، واللحام بالاحتكاك والخلط، والعمليات المستدامة — من البنية المجهرية إلى التطبيق الصناعي.",
    hero_cta_projects: "استكشاف المشاريع",
    hero_cta_research: "المنشورات البحثية",

    stat_papers: "أبحاث محكّمة",
    stat_domains: "مجالات هندسية",
    stat_phd: "هندسة ميكانيكية",
    stat_pmp: "إدارة المشاريع",

    about_kicker: "01 — نبذة",
    about_title: "من البنية المجهرية إلى الصناعة.",
    about_p1:
      "باحث في الهندسة الميكانيكية (دكتوراه) متخصص في التصنيع والمواد، مع خبرة في التصنيع الإضافي للمعادن واللحام بالاحتكاك والخلط، مع تركيز على سلوك التآكل وتحسين العمليات.",
    about_p2_pre: "حاليًا مساعد باحث تقني في ",
    about_p2_org: "مركز البحث متعدد التخصصات للتصنيع الذكي والروبوتات",
    about_p2_post:
      " بجامعة الملك فهد للبترول والمعادن — إدارة مختبرات التصنيع الإضافي والطرحي، وتدريب الباحثين، والمساهمة في مشاريع التصنيع المستدام.",
    about_p3:
      "مؤلف لأبحاث محكّمة حول اللحام بالاحتكاك والتآكل والنمذجة المعتمدة على الذكاء الاصطناعي، وحاصل على شهادة PMP لربط البحث بالتطبيق الصناعي.",

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
    exp_page_desc:
      "مجموعة متعددة التخصصات تغطي التصنيع الإضافي للمعادن والبوليمرات، اللحام المتقدم، التشغيل الدقيق، توصيف المواد وإدارة المشاريع.",

    proj_page_kicker: "المشاريع",
    proj_page_title: "معرض للأعمال الهندسية التطبيقية.",
    proj_page_desc:
      "من تطوير العمليات على الآلات الصناعية إلى الدراسات المخبرية — كل مشروع يربط سؤالًا تصنيعيًا بنتيجة قابلة للقياس.",
    filter_all: "الكل",

    res_page_kicker: "الأبحاث",
    res_page_title: "منشورات علمية محكّمة.",
    res_page_desc:
      "مقالات منشورة تغطي اللحام بالاحتكاك، التآكل، النمذجة المعتمدة على الذكاء الاصطناعي والتصنيع المستدام.",
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
    contact_desc:
      "منفتح على التعاون البحثي والاستشارات الصناعية والتدريب في التصنيع الإضافي واللحام وهندسة المواد.",
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

    footer_role: "هندسة ميكانيكية · أبحاث التصنيع والمواد",
  },
};
