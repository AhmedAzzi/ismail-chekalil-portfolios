import { type Language } from "@/lib/translations";
import { domains, projects, publications } from "./portfolio-data";
import type { Domain, Project, Publication } from "./portfolio-data";

import pmiLogo from "@/assets/certs/pmi.png";
import sandvikLogo from "@/assets/certs/sandvik.png";
import hexagonLogo from "@/assets/certs/hexagon.png";
import seiLogo from "@/assets/certs/sei.png";
import kukaLogo from "@/assets/certs/kuka.png";
import heidenhainLogo from "@/assets/certs/heidenhain.png";

export type Experience = {
  role: string;
  org: string;
  period: string;
  current: boolean;
  points: string[];
};

export type Education = {
  degree: string;
  school: string;
  year: string;
};

export type PortfolioData = {
  domains: Domain[];
  projects: Project[];
  publications: Publication[];
  experience: Experience[];
  education: Education[];
  certs: { title: string; image: any }[];
};

const enData: PortfolioData = {
  domains,
  projects,
  publications,
  experience: [
    {
      role: "Technical Research Assistant",
      org: "KFUPM — IRC Intelligent Manufacturing & Robotics",
      period: "Jan 2024 – Present",
      current: true,
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
      current: false,
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
      current: false,
      points: ["Taught Non-Destructive Testing (NDT) — UT, RT, MT, PT.", "Led practical physics sessions."],
    },
    {
      role: "Part-time Freelancer — IKYTOOL",
      org: "CAD, 3D printing, reverse engineering",
      period: "2019 – 2023",
      current: false,
      points: [
        "Delivered CAD and 3D printing services and reverse-engineered components for prototyping and repair.",
      ],
    },
  ],
  education: [
    {
      degree: "PhD — Mechanical Engineering (Manufacturing & Production)",
      school: "University of Djillali Liabes",
      year: "2023",
    },
    {
      degree: "Master's — Mechanical Engineering (Production)",
      school: "National Polytechnic School — Maurice Audin",
      year: "2018",
    },
    {
      degree: "Bachelor's — Mechanical Engineering (Production)",
      school: "National Polytechnic School — Maurice Audin",
      year: "2018",
    },
  ],
  certs: [
    { title: "PMP — Project Management Institute (2025)", image: pmiLogo },
    { title: "Metal Cutting Technology — SANDVIK (2024)", image: sandvikLogo },
    { title: "Hexagon CMM & Absolute Arm (2023)", image: hexagonLogo },
    { title: "SEI Laser Cut (2023)", image: seiLogo },
    { title: "ERM KUKA Robot (2023)", image: kukaLogo },
    { title: "Heidenhain 5-axis controller (2022)", image: heidenhainLogo },
  ],
};

const frData: PortfolioData = {
  ...enData,
  domains: enData.domains.map(d => ({ ...d })),
  projects: enData.projects.map(p => ({ ...p })),
  experience: [
    {
      role: "Assistant de Recherche Technique",
      org: "KFUPM — IRC Fabrication Intelligente et Robotique",
      period: "Jan 2024 – Présent",
      current: true,
      points: [
        "Pionnier en FA métallique, composite et polymère (SLM 280, Meltio DED, FDM).",
        "Gestion des laboratoires de fabrication additive et soustractive.",
        "Encadrement d'étudiants et chercheurs en FA et conception pour la fabrication.",
        "Mène des recherches à fort impact sur la fabrication durable.",
        "Supervision du tournage CNC 4 axes (Index B400, Siemens 840sl) avec NX CAM et contrôle in-situ.",
      ],
    },
    {
      role: "Ingénieur Mécanique",
      org: "Plateforme Technologique — Technologie Industrielle, Algérie",
      period: "Déc 2022 – Déc 2023",
      current: false,
      points: [
        "Supervision de l'installation et de la mise en service d'équipements industriels (>2M$).",
        "Programmation et opération HERMLE C400 5 axes (Heidenhain 640).",
        "Formation sur soudage laser KUKA, bras Hexagon CMM, jets d'eau, laser SEI.",
        "Conseil en ingénierie et support CAO/FAO pour les clients industriels.",
      ],
    },
    {
      role: "Enseignant Vacataire",
      org: "Université de Chlef",
      period: "2019 – 2022",
      current: false,
      points: ["Enseignement des Contrôles Non Destructifs (CND) — UT, RT, MT, PT.", "Direction de séances pratiques de physique."],
    },
    {
      role: "Freelance à Temps Partiel — IKYTOOL",
      org: "CAO, impression 3D, rétro-ingénierie",
      period: "2019 – 2023",
      current: false,
      points: [
        "Services de CAO et impression 3D, rétro-ingénierie de composants pour le prototypage et la réparation.",
      ],
    },
  ],
  education: [
    {
      degree: "Doctorat — Génie Mécanique (Fabrication et Production)",
      school: "Université Djillali Liabes",
      year: "2023",
    },
    {
      degree: "Master — Génie Mécanique (Production)",
      school: "École Nationale Polytechnique — Maurice Audin",
      year: "2018",
    },
    {
      degree: "Licence — Génie Mécanique (Production)",
      school: "École Nationale Polytechnique — Maurice Audin",
      year: "2018",
    },
  ],
  certs: [
    { title: "PMP — Project Management Institute (2025)", image: pmiLogo },
    { title: "Technologie de Coupe des Métaux — SANDVIK (2024)", image: sandvikLogo },
    { title: "Hexagon CMM et Bras Absolu (2023)", image: hexagonLogo },
    { title: "Découpe Laser SEI (2023)", image: seiLogo },
    { title: "Robot ERM KUKA (2023)", image: kukaLogo },
    { title: "Contrôleur 5 axes Heidenhain (2022)", image: heidenhainLogo },
  ],
};

// Translate domains for FR
frData.domains[0].title = "Fusion sur Lit de Poudre (LPBF)";
frData.domains[0].short = "FA Métallique";
frData.domains[0].description = "Fabrication additive métallique par fusion sur lit de poudre : préparation de fabrication, développement de paramètres et post-traitement.";
frData.domains[0].bullets = ["SLM 280", "Préparation & paramètres", "Densité / finition de surface", "Structures treillis"];

frData.domains[1].title = "DED Fil Laser";
frData.domains[1].short = "Dépôt d'Énergie Dirigé";
frData.domains[1].description = "DED Fil Laser pour réparation, rechargement, pièces quasi nettes et grand format. Planification de processus, stratégies bi-matériaux.";
frData.domains[1].bullets = ["Cellule Robotique Meltio", "Réparation & rechargement", "Forme quasi nette", "FA bi-matériaux"];

frData.domains[2].title = "FA Polymères & Composites";
frData.domains[2].short = "FA Polymères / Composites";
frData.domains[2].description = "Fabrication additive polymère et composite : sélection des matériaux, optimisation des processus et évaluation des performances.";
frData.domains[2].bullets = ["FDM — D1000 / D600", "Renfort composite", "Structures légères", "R&D matière première biochar"];

frData.domains[3].title = "Soudage & FSW";
frData.domains[3].short = "Soudage par Friction-Malaxage";
frData.domains[3].description = "Spécialiste du soudage FSW des alliages d'aluminium avec focus sur le comportement mécanique, microdureté, corrosion et prédiction par IA.";
frData.domains[3].bullets = ["AA3003 / AA6082", "Cartographie microdureté", "Comportement corrosion", "Prédiction par ML"];

frData.domains[4].title = "Usinage de Précision";
frData.domains[4].short = "CNC / Soustractif";
frData.domains[4].description = "Expertise en usinage : outillage, tolérances, finition de surface et DFM. Tournage 4 axes (Index B400) et fraisage 5 axes (HERMLE C400) avec NX CAM.";
frData.domains[4].bullets = ["Tournage 4 axes", "Fraisage 5 axes", "NX CAM", "Surveillance in-situ"];

frData.domains[5].title = "Ingénierie des Matériaux";
frData.domains[5].short = "Matériaux & Caractérisation";
frData.domains[5].description = "Lien entre microstructure, processus de fabrication et performances. Caractérisation, analyse des défaillances et développement durable.";
frData.domains[5].bullets = ["Microstructure-propriétés", "Analyse de défaillance", "Procédés durables", "Caractérisation"];

frData.domains[6].title = "Conception & Rétro-ingénierie";
frData.domains[6].short = "CAO / DFM";
frData.domains[6].description = "Du concept à la CAO détaillée, prototypage et support de fabrication. Rétro-ingénierie via scan 3D et reconstruction CAO.";
frData.domains[6].bullets = ["Modélisation CAO", "DFM", "Scan 3D", "Inspection dimensionnelle"];

frData.domains[7].title = "Management, Conseil & Formation";
frData.domains[7].short = "Leadership";
frData.domains[7].description = "Gestion technique de projets d'ingénierie, supervision de laboratoires, conseil et formation structurée.";
frData.domains[7].bullets = ["Gestion de labo", "Conseil en ingénierie", "Mentorat & formation", "Certifié PMP"];

// Projects for FR
frData.projects = frData.projects.map(p => {
  let cat = p.category;
  if (cat === "Laser Powder Bed Fusion") cat = "Fusion sur Lit de Poudre";
  else if (cat === "Directed Energy Deposition") cat = "Dépôt d'Énergie Dirigé";
  else if (cat === "Polymer / Composite AM") cat = "FA Polymères / Composites";
  else if (cat === "Friction Stir Welding") cat = "Soudage par Friction-Malaxage";
  else if (cat === "Precision Machining") cat = "Usinage de Précision";
  else if (cat === "Material Engineering") cat = "Ingénierie des Matériaux";
  else if (cat === "Design & RE") cat = "Conception & Rétro-ingénierie";
  else if (cat === "Management & Training") cat = "Management & Formation";
  else if (cat === "Welding") cat = "Soudage";
  else if (cat === "Sustainable Manufacturing") cat = "Fab. Durable";
  
  let title = p.title;
  let description = p.description;
  switch (p.title) {
    case "Lattice Structures via SLM":
      title = "Structures Treillis via SLM";
      description = "Géométries en treillis optimisées topologiquement, fabriquées par fusion sélective par laser pour des applications légères et rigides.";
      break;
    case "Laser Wire DED Deposition":
      title = "Dépôt DED Fil Laser";
      description = "DED fil laser robotisé pour pièces de forme quasi nette, rechargement et stratégies de construction bi-matériaux sur cellule Meltio.";
      break;
    case "Composite & Polymer Printing":
      title = "Impression Polymères & Composites";
      description = "Impression FDM grand format de pièces fonctionnelles en polymères et composites renforcés par fibres pour des prototypes allégés.";
      break;
    case "FSW of AA3003 Aluminum":
      title = "Soudage FSW de l'Aluminium AA3003";
      description = "Développement de procédés et cartographie de microdureté de joints en AA3003 soudés par friction-malaxage avec caractérisation de corrosion.";
      break;
    case "Dissimilar Joint Analysis":
      title = "Analyse de Joints Hétérogènes";
      description = "Étude métallurgique et mécanique de joints hétérogènes AISI 316 / AISI 304 soudés par GMAW pour la tuyauterie industrielle.";
      break;
    case "5-Axis Milling Strategies":
      title = "Stratégies de Fraisage 5 Axes";
      description = "Développement de parcours d'outils NX CAM pour l'usinage 5 axes HERMLE C400 de géométries complexes avec contrôle serré des tolérances.";
      break;
    case "CNC Turning & Monitoring":
      title = "Tournage CNC & Surveillance";
      description = "Tournage 4 axes Index B400 avec surveillance en cours de processus basée sur des capteurs et la vision pour un contrôle adaptatif.";
      break;
    case "Microstructure–Property Mapping":
      title = "Lien Microstructure–Propriétés";
      description = "Lien entre les paramètres de processus, la microstructure et les performances mécaniques des pièces soudées et fabriquées par impression 3D.";
      break;
    case "Corrosion Characterization":
      title = "Caractérisation de la Corrosion";
      description = "Études de corrosion électrochimique et gravimétrique de joints en aluminium soudés par friction-malaxage dans des environnements agressifs.";
      break;
    case "Failure & Damage Analysis":
      title = "Analyse de Défaillances & Dommages";
      description = "Modélisation X-FEM de l'endommagement de coudes de tuyaux en acier soumis à des charges combinées de pression et de flexion.";
      break;
    case "Clean Leather Manufacturing":
      title = "Fabrication Propre du Cuir";
      description = "Contrôle d'optimisation en temps réel de la découpe du cuir assistée par laser et ultrasons, réduisant l'impact environnemental industriel.";
      break;
    case "Mechanical Characterization":
      title = "Caractérisation Mécanique";
      description = "Essais de traction, de dureté et de fatigue corrélant la méthode de fabrication au comportement en service.";
      break;
    case "Reverse Engineering Workflow":
      title = "Flux de Travail de Rétro-ingénierie";
      description = "Numérisation 3D, inspection dimensionnelle et reconstruction CAO de composants existants pour réparation et refabrication.";
      break;
    case "CAD Design for Manufacturing":
      title = "Conception CAO pour la Fabrication";
      description = "Modélisation CAO fonctionnelle guidée par la fabricabilité, le choix des matériaux et les contraintes de performance.";
      break;
    case "Lab Management — Manufacturing":
      title = "Gestion de Laboratoire — Fabrication";
      description = "Supervision opérationnelle des laboratoires de fabrication additive et soustractive au centre IRC-IMR de la KFUPM.";
      break;
    case "Engineering Training Programs":
      title = "Programmes de Formation en Ingénierie";
      description = "Formation structurée en fabrication additive, usinage et métrologie pour étudiants, chercheurs et équipes industrielles.";
      break;
    case "Industrial Consulting":
      title = "Conseil Industriel";
      description = "Conseils en ingénierie sur mesure concernant la mise en service des machines, le choix des processus et l'optimisation de la production.";
      break;
    case "SLM 280 Process Demonstration":
      title = "Démonstration du Processus SLM 280";
      description = "Enregistrement en temps réel du processus de fabrication additive métallique SLM 280, illustrant l'interaction laser-poudre.";
      break;
    case "Robotic LWDED Printing":
      title = "Impression Robotisée LWDED";
      description = "Démonstration en direct du dépôt d'énergie dirigé par fil laser robotisé pour la fabrication additive métallique à grande échelle.";
      break;
    case "Large-Format FDM Operation":
      title = "Opération FDM Grand Format";
      description = "Impression FDM industrielle de composants polymères fonctionnels utilisant des systèmes d'extrusion à grande échelle.";
      break;
    case "5-Axis Machining (Hermle C400)":
      title = "Usinage 5 Axes (Hermle C400)";
      description = "Opération de fraisage simultané 5 axes sur HERMLE C400 pour des géométries complexes de haute précision.";
      break;
  }
  return { ...p, category: cat, title, description };
});

frData.publications = frData.publications.map(p => {
  let topic = p.topic;
  if (topic === "FSW · ML") topic = "FSW · Machine Learning";
  else if (topic === "Welding · Metallurgy") topic = "Soudage · Métallurgie";
  else if (topic === "Sustainable Mfg.") topic = "Fab. Durable";
  else if (topic === "Mechanics · FEM") topic = "Mécanique · FEM";
  return { ...p, topic };
});

const arData: PortfolioData = {
  ...enData,
  domains: enData.domains.map(d => ({ ...d })),
  projects: enData.projects.map(p => ({ ...p })),
  experience: [
    {
      role: "مساعد باحث تقني",
      org: "جامعة الملك فهد للبترول والمعادن — مركز الأبحاث للتصنيع الذكي والروبوتات",
      period: "يناير 2024 – الحاضر",
      current: true,
      points: [
        "ريادة التصنيع الإضافي للمعادن والمركبات والبوليمرات (SLM 280, Meltio DED, FDM).",
        "إدارة مختبرات التصنيع الإضافي والطرحي.",
        "توجيه الطلاب والباحثين في التصنيع الإضافي وتصميم التصنيع.",
        "قيادة أبحاث ذات تأثير عالٍ في التصنيع المستدام.",
        "الإشراف على الخراطة CNC ذات 4 محاور مع NX CAM والمراقبة أثناء العملية.",
      ],
    },
    {
      role: "مهندس ميكانيكي",
      org: "المنصة التكنولوجية — التكنولوجيا الصناعية، الجزائر",
      period: "ديسمبر 2022 – ديسمبر 2023",
      current: false,
      points: [
        "الإشراف على تركيب وتشغيل معدات صناعية بقيمة > 2 مليون دولار.",
        "برمجة وتشغيل آلة HERMLE C400 ذات 5 محاور.",
        "التدريب على اللحام بالليزر، أذرع Hexagon CMM، قطع المياه، وليزر SEI.",
        "تقديم الاستشارات الهندسية ودعم CAD/CAM للعملاء الصناعيين.",
      ],
    },
    {
      role: "محاضر بدوام جزئي",
      org: "جامعة الشلف",
      period: "2019 – 2022",
      current: false,
      points: ["تدريس الاختبارات غير الإتلافية (NDT) — UT, RT, MT, PT.", "قيادة جلسات الفيزياء العملية."],
    },
    {
      role: "عمل حر بدوام جزئي — IKYTOOL",
      org: "CAD، الطباعة ثلاثية الأبعاد، الهندسة العكسية",
      period: "2019 – 2023",
      current: false,
      points: [
        "تقديم خدمات CAD والطباعة ثلاثية الأبعاد والهندسة العكسية للمكونات للنماذج الأولية والإصلاح.",
      ],
    },
  ],
  education: [
    {
      degree: "دكتوراه — الهندسة الميكانيكية (التصنيع والإنتاج)",
      school: "جامعة جيلالي اليابس",
      year: "2023",
    },
    {
      degree: "ماجستير — الهندسة الميكانيكية (الإنتاج)",
      school: "المدرسة الوطنية المتعددة التقنيات — موريس أودان",
      year: "2018",
    },
    {
      degree: "بكالوريوس — الهندسة الميكانيكية (الإنتاج)",
      school: "المدرسة الوطنية المتعددة التقنيات — موريس أودان",
      year: "2018",
    },
  ],
  certs: [
    { title: "شهادة PMP — معهد إدارة المشاريع (2025)", image: pmiLogo },
    { title: "تكنولوجيا قطع المعادن — ساندفيك (2024)", image: sandvikLogo },
    { title: "Hexagon CMM والذراع المطلق (2023)", image: hexagonLogo },
    { title: "القطع بليزر SEI (2023)", image: seiLogo },
    { title: "روبوت ERM KUKA (2023)", image: kukaLogo },
    { title: "متحكم Heidenhain خماسي المحاور (2022)", image: heidenhainLogo },
  ],
};

arData.domains[0].title = "دمج قاع المسحوق بالليزر";
arData.domains[0].short = "التصنيع الإضافي للمعادن";
arData.domains[0].description = "التصنيع الإضافي المعدني عبر دمج قاع المسحوق بالليزر: تحضير البناء وتطوير المعلمات والمعالجة اللاحقة.";
arData.domains[0].bullets = ["SLM 280", "تحضير البناء", "الكثافة / السطح", "هياكل شبكية"];

arData.domains[1].title = "ترسيب الطاقة الموجهة بالليزر";
arData.domains[1].short = "ترسيب الطاقة الموجهة";
arData.domains[1].description = "ترسيب الطاقة الموجهة بأسلاك الليزر للإصلاح والتكسية والترسيب المعدني واسع النطاق.";
arData.domains[1].bullets = ["خلية روبوت Meltio", "الإصلاح والتكسية", "شكل شبه صافي", "مواد مزدوجة"];

arData.domains[2].title = "التصنيع الإضافي للبوليمر والمركبات";
arData.domains[2].short = "البوليمر / المركبات";
arData.domains[2].description = "التصنيع الإضافي للبوليمر والمركبات: اختيار المواد، تحسين العمليات وتقييم الأداء للهياكل خفيفة الوزن.";
arData.domains[2].bullets = ["FDM — D1000 / D600", "تعزيز مركب", "هياكل خفيفة", "مواد الفحم الحيوي"];

arData.domains[3].title = "اللحام واللحام بالاحتكاك الخلطي";
arData.domains[3].short = "اللحام بالاحتكاك الخلطي";
arData.domains[3].description = "متخصص في اللحام بالاحتكاك الخلطي لسبائك الألومنيوم مع التركيز على السلوك الميكانيكي والتآكل والتنبؤ بالذكاء الاصطناعي.";
arData.domains[3].bullets = ["AA3003 / AA6082", "تخطيط الصلادة", "سلوك التآكل", "تنبؤ بالتعلم الآلي"];

arData.domains[4].title = "التشغيل الدقيق";
arData.domains[4].short = "التشغيل الطرحي / CNC";
arData.domains[4].description = "خبرة عملية في التشغيل الآلي تغطي الأدوات والتفاوتات وجودة السطح. خراطة بـ 4 محاور وتفريز بـ 5 محاور مع NX CAM.";
arData.domains[4].bullets = ["خراطة بـ 4 محاور", "تفريز بـ 5 محاور", "NX CAM", "مراقبة أثناء العملية"];

arData.domains[5].title = "هندسة المواد";
arData.domains[5].short = "المواد والتوصيف";
arData.domains[5].description = "الربط بين البنية المجهرية وعملية التصنيع والأداء الميكانيكي. التوصيف، تحليل الانهيار والتطوير المستدام.";
arData.domains[5].bullets = ["البنية المجهرية والخواص", "تحليل الانهيار", "معالجة مستدامة", "التوصيف"];

arData.domains[6].title = "التصميم والهندسة العكسية";
arData.domains[6].short = "CAD / DFM";
arData.domains[6].description = "من المفهوم إلى التصميم التفصيلي، النمذجة ودعم التصنيع. الهندسة العكسية عبر المسح ثلاثي الأبعاد وإعادة البناء.";
arData.domains[6].bullets = ["نمذجة CAD", "التصميم للتصنيع", "مسح ثلاثي الأبعاد", "فحص الأبعاد"];

arData.domains[7].title = "الإدارة والاستشارات والتدريب";
arData.domains[7].short = "القيادة";
arData.domains[7].description = "الإدارة الفنية للمشاريع الهندسية، والإشراف على المختبرات، وتقديم الاستشارات والتدريب المنظم.";
arData.domains[7].bullets = ["إدارة المختبرات", "الاستشارات الهندسية", "التوجيه والتدريب", "حاصل على PMP"];

arData.projects = arData.projects.map(p => {
  let cat = p.category;
  if (cat === "Laser Powder Bed Fusion") cat = "دمج قاع المسحوق بالليزر";
  else if (cat === "Directed Energy Deposition") cat = "ترسيب الطاقة الموجهة";
  else if (cat === "Polymer / Composite AM") cat = "البوليمر / المركبات";
  else if (cat === "Friction Stir Welding") cat = "اللحام بالاحتكاك الخلطي";
  else if (cat === "Precision Machining") cat = "التشغيل الدقيق";
  else if (cat === "Material Engineering") cat = "هندسة المواد";
  else if (cat === "Design & RE") cat = "التصميم والهندسة العكسية";
  else if (cat === "Management & Training") cat = "الإدارة والتدريب";
  else if (cat === "Welding") cat = "اللحام";
  else if (cat === "Sustainable Manufacturing") cat = "التصنيع المستدام";

  let title = p.title;
  let description = p.description;
  switch (p.title) {
    case "Lattice Structures via SLM":
      title = "هياكل شبكية عبر SLM";
      description = "هندسيات شبكية محسّنة طوبولوجيًا تم تصنيعها بواسطة الصهر الانتقائي بالليزر لتطبيقات خفيفة الوزن وعالية الصلابة.";
      break;
    case "Laser Wire DED Deposition":
      title = "ترسيب DED بأسلاك الليزر";
      description = "ترسيب DED بأسلاك الليزر الروبوتي للقطع شبه الصافية، والتكسية، واستراتيجيات البناء مزدوجة المواد على خلية Meltio.";
      break;
    case "Composite & Polymer Printing":
      title = "طباعة البوليمر والمركبات";
      description = "طباعة FDM واسعة النطاق للبوليمرات الوظيفية والأجزاء المركبة المقواة بالألياف للنماذج الأولية الهندسية خفيفة الوزن.";
      break;
    case "FSW of AA3003 Aluminum":
      title = "اللحام بالاحتكاك الخلطي لألمنيوم AA3003";
      description = "تطوير العمليات وتخطيط الصلادة المجهرية لوصلات AA3003 الملحومة بالاحتكاك الخلطي مع توصيف التآكل.";
      break;
    case "Dissimilar Joint Analysis":
      title = "تحليل الوصلات غير المتماثلة";
      description = "التحقيق المعدني والميكانيكي لوصلات GMAW غير المتماثلة AISI 316 / AISI 304 للأنابيب الصناعية.";
      break;
    case "5-Axis Milling Strategies":
      title = "استراتيجيات التفريز خماسي المحاور";
      description = "تطوير مسارات الأدوات NX CAM للتشغيل الآلي خماسي المحاور HERMLE C400 للأشكال الهندسية المعقدة مع التحكم الدقيق في التفاوتات.";
      break;
    case "CNC Turning & Monitoring":
      title = "الخراطة CNC والمراقبة";
      description = "خراطة رباعية المحاور Index B400 مع مراقبة أثناء العملية تعتمد على أجهزة الاستشعار والرؤية للتحكم التكيفي.";
      break;
    case "Microstructure–Property Mapping":
      title = "ربط البنية المجهرية بالخصائص";
      description = "ربط معلمات المعالجة بالبنية المجهرية والأداء الميكانيكي الناتج عبر الأجزاء الملحومة والمصنعة إضافيًا.";
      break;
    case "Corrosion Characterization":
      title = "توصيف التآكل";
      description = "دراسات التآكل الكهروكيميائي والوزني لوصلات الألمنيوم الملحومة بالاحتكاك الخلطي في بيئات قاسية.";
      break;
    case "Failure & Damage Analysis":
      title = "تحليل الانهيار والتلف";
      description = "نمذجة X-FEM للتلف في أكواع الأنابيب الفولاذية تحت أحمال الضغط والانحناء المجتمعة.";
      break;
    case "Clean Leather Manufacturing":
      title = "صناعة الجلود النظيفة";
      description = "التحكم في التحسين في الوقت الفعلي لقطع الجلود بمساعدة الليزر والموجات فوق الصوتية، وتقليل التأثير البيئي الصناعي.";
      break;
    case "Mechanical Characterization":
      title = "التوصيف الميكانيكي";
      description = "بروتوكولات اختبار الشد، الصلادة، والإجهاد لربط مسار التصنيع بالسلوك أثناء الخدمة.";
      break;
    case "Reverse Engineering Workflow":
      title = "سير عمل الهندسة العكسية";
      description = "المسح ثلاثي الأبعاد، وفحص الأبعاد، وإعادة البناء باستخدام CAD للمكونات القديمة بغرض إصلاحها أو إعادة تصنيعها.";
      break;
    case "CAD Design for Manufacturing":
      title = "تصميم CAD للتصنيع";
      description = "نمذجة CAD وظيفية مدفوعة بقابلية التصنيع، واختيار المواد، وقيود الأداء.";
      break;
    case "Lab Management — Manufacturing":
      title = "إدارة المختبرات — التصنيع";
      description = "الإشراف التشغيلي على مختبرات التصنيع الإضافي والطرحي في مركز IRC-IMR التابع لجامعة الملك فهد للبترول والمعادن.";
      break;
    case "Engineering Training Programs":
      title = "برامج التدريب الهندسي";
      description = "تدريب منظم في التصنيع الإضافي، والتشغيل الآلي، والمقاييس للطلاب والباحثين والفرق الصناعية.";
      break;
    case "Industrial Consulting":
      title = "الاستشارات الصناعية";
      description = "استشارات هندسية مخصصة حول تشغيل الآلات، واختيار العمليات، وتحسين الإنتاج.";
      break;
    case "SLM 280 Process Demonstration":
      title = "عرض عملية التصنيع (SLM 280)";
      description = "تسجيل حي لعملية التصنيع الإضافي المعدني SLM 280، يوضح التفاعل بين الليزر والمسحوق.";
      break;
    case "Robotic LWDED Printing":
      title = "طباعة LWDED الروبوتية";
      description = "عرض مباشر لترسيب الطاقة الموجهة بأسلاك الليزر الروبوتية للتصنيع الإضافي المعدني واسع النطاق.";
      break;
    case "Large-Format FDM Operation":
      title = "عملية الطباعة FDM واسعة النطاق";
      description = "طباعة FDM صناعية للمكونات البوليمرية الوظيفية باستخدام أنظمة بثق واسعة النطاق.";
      break;
    case "5-Axis Machining (Hermle C400)":
      title = "التشغيل الآلي خماسي المحاور (Hermle C400)";
      description = "عملية تفريز خماسية المحاور متزامنة على Hermle C400 للأشكال الهندسية المعقدة وعالية الدقة.";
      break;
  }
  return { ...p, category: cat, title, description };
});

arData.publications = arData.publications.map(p => {
  let topic = p.topic;
  if (topic.includes("FSW")) topic = topic.replace("FSW", "اللحام الخلطي");
  if (topic.includes("Welding")) topic = topic.replace("Welding", "اللحام");
  if (topic.includes("Metallurgy")) topic = topic.replace("Metallurgy", "التعدين");
  if (topic.includes("Sustainable Mfg.")) topic = "التصنيع المستدام";
  if (topic.includes("Mechanics")) topic = topic.replace("Mechanics", "الميكانيكا");
  return { ...p, topic };
});

export const localizedData: Record<Language, PortfolioData> = {
  en: enData,
  fr: frData,
  ar: arData,
};
