import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { p as publications, a as projects, d as domains, b as profile } from "./portfolio-data-BlMOvQPR.js";
import { u as useLanguage } from "./router-BcMEhxjV.js";
import { useRef, useState, useEffect, useMemo } from "react";
import "@tanstack/react-router";
const pmiLogo = "data:image/png;base64,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";
const sandvikLogo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAY1BMVEX///8QEBAAAAB5eXni4uL39/fy8vKXl5d9fX3FxcWysrINDQ0ICAjv7+/m5ubPz8+QkJDY2NgyMjJHR0e7u7shISGfn59SUlJpaWkqKipAQEBzc3MYGBhgYGCGhoZZWVmoqKj946itAAACaklEQVR4nO3aWZKrMAwFUMdAGAwGwpwB2P8qG6re608PshSqunQXEB8sQ7CwEBwOh8PhcDh/JUmldWxLRTV61dbj3A3SliYhGb4tssf586W6mSNTCkDeTMfYlqHpADp7Smm7ckJA2knpODoFQM+lx/D4gHxxnnwKQLL7XT46YHRc+lSA3XP6sQE5YHxMQP30rT8y4AMZHxHQQAqACOgf3jcAKqCKQAXAA/QDqABoAPAEYAHyG3ACkABJA50AJIAG3gJogBo8AUiA9WJAAq8ADuAOewrjAQKWAA5gvxqQXQ2YrwZM1h2oIU6AuElNWSN4Xr0LIDdfRBE6hQ4AYxkZwAAGMIABDGDA5YCRHNCaARE5IDYDpi8ATFufciH77PI/ejFt/tSbfBVWk7kGMznAvPUoF+opSEbz3kdOMbHA/CA4BCvNx7ff1JY2oHqPtIJ4s0xBOYyk96K9D1eWUU0p6JWtC6Pks7jTAerO3gOQw9TUZEvBpReq5G14TJvf9rxwJBdO7XClSt8GReRYN8vDEByZuS6cxroMiQEt6KMYIkCsJFPgAdADvCOMAgjqR6IAREBPGgcA+jiMCaAogh9AO/wjkAJEb3w9/gIgSbGXgSdAVC/kIvgChIYdE8ADiBj3P8EfICpUAQBwCvBWIgQg4g+eAAQ4D4xhPQ9gAKHTBWkhAAEi6TucMkABxyvajCKAA443dYcjo6SA4015UaGEMIBo1+4dVolAwPFMGLfB/QgrAeAgFNmkXE/xUgCOe7Lt08+/c8y+c4ECOA1xW+/r9hiU7+b0hdhUuFfa4TT7tw63czgcDofD4QTkB6usK6N0GwsmAAAAAElFTkSuQmCC";
const hexagonLogo = "data:image/png;base64,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";
const seiLogo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAk1BMVEX////5+/wIWp4FWpr8/v3X5vDP3OdlkrcAWJr2+Ppmkbjt8PEAT5kAU5gAUpMAVJQAVZ6zx9ni6e3c5u2owdUia6IeY58AS44AUJdXhKrt9PcLXKR4nLihuswASZPX3uO+0d6tws6Kqb8rdKQ2a51Ad6WUrseGrMs1dKxMfKQVW5Q5b50dZZVQhbVljKuEpsFIhaqYW8p0AAADzUlEQVR4nO2aC5OiOBDHIcHwkvcb4QiOosKo+/0/3Xaju+7WWnV15UjX3eVfNSMTqelfOqE7naBpSkpKSkpKSkpKSkpKSv8euS4xQNwpAGKAlSQGEBE1QE8N0BrEAFtqgEYntG7YmvhGCaABwEdNaB89kCWEALqriVEQAtixJnhKCJAIAGgIAWSvibyy6QDa1hB8RzgLmxQ8MNKlI3uPAMFABiA5AoQVVSjSD94MkFEtilbHGcDyt0QAgxUAQMa8E00+qjOGADkLR0lhXz+UmxnAYn5DEYtkxm4esLi1I0hI4iO4AzDOfWdxF9SVz9l9CDi3gqXXxonDLYttcqklRwBg3iSXNK/Lo8cAIJxirTbRA8sSJEMWgn2LF7gUSD0EYNZuIYJaNlkZMrQZfOLkt88eDAeHaNDUby8R9FV7yQKPMcY38NPOjTJDAmgLqv6daUmPo6sDcRc6O8sLhvuzJ3chNsBEGKvoKxHuDtXrRMjoes7YOvTu1pnHT48nT1SjH27AK5YXTIOMv8a8G3ciStttc6mmzzEoinLtg4L51/jRJr8MeCzN0cLmIPCLcd8AhGvb+ms5yk0SQACtZsWu665+6kngqx/frroYbgeClwC0n2Mwf+jQIUMzDEPX8eLJzb9L/3vZT3T75vf/bEPf4062V9NxHNOpQOahTX69S4/7g+mYs/DDuV07N/24xmbHfDTNaprm2my327Zt+17KrkNXP8sset3Jw5kX69DyvbIosuEx1+phHxTrm0q/XJclXPyFgj99SFac59nxuN+fQc7l0lyvw9CmEUiChOiSuK5r+4++/wkhmw8vhNgLcSc4/agHEtPybw8nRIMNKwufZ9PJMQ/b7YAdAwsiidEEavbzCxErvk4IAKbW020VkJzX2EkEgAiZOddUrpL6fas0XTgedhVS4AWjjm1iYMaUGHrZpRf1+5cG9ZCHs7t9KIwNad2cz71j++zxfIsiHAMYbahL7QZTg7Xx+HXJ8iAdYT3Ew12nJXtMS7k/9cuuylKciBtYj4t8MyfCpUvk2im5xaEwhkUpY+XpixLQPxAYvgGAI8ITwRaB3mA4QADGMpJ9KgkFwewBVtAUpzAL8hHqAka2P9CW8xAwq6Wxr61gDBDgRHZuVoUIMFI5QNMGFiAA3S6dzBGAcLs+2WN1THhiYpvoAbpDK0MfAKCjPLiMIBDFy6ehh1afEe3peTIBAOFm/bxZTQqgman2egH4ihpqgAM1QJtqtCfHPfXLA5L65QEpiQHE/x6A/B0ecgCDNAopKSkpKSkpKSkpKf2n9R0TqkV8D8m2qAAAAABJRU5ErkJggg==";
const kukaLogo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAmVBMVEX/VQD/////TwD/SwD/UgD//fv/kmH/up7/bj//pXr/2MX/ya//bTH/s5b/u6z/XRb/6t7/2cv/lmX/vaP/WQ3/9/P/lGv/8Oj/hlH/hEv/mWz/kGr/i13/eDz/Yh7/Yyf/q4b/ayj/fkb/xrL/ro7/w6f/fj3/zbr/m3P/jVf/f07/ZRb/hVf/39T/sJn/ax3/PQD/YQD/dCtyfmDIAAACWklEQVR4nO2Va5eaQAyG5xJgF7QCgqhVV10Vu7r18v9/XCcZUXt63Pbgx77PB5hr8iYzAaUAAAAAAAAAAAAAAAAAAAAAAOAhZK01vmmslY65DTXT/LKXIVll6Y/tLf2P+lF/XIhh14xcx35374m3SlM38jqjNzfUF59UzHlVdyE9s+Edzwiwr1rrpMehhIHm9sl+0zro+ngND8Yd88JT7NKojJvlyKuRXjl5IgeNAOp12XAwt/SVAFqm3EqVd2m6Ijqe0bMCzOJdDA+cpccCSA0qjrguvEP6EDlaz+1XPv5BgJrGEsmeA3sowBSrkv2vehf/PVZduhXlonUKRMB6I5F0O5LYxxmoOeHpRDUVILdmzCrq1rdABJQcmN6SN/xQwCc/KnWtUMXnER8n7hVs2x6CCKgTMd35i4AfcuPmTQJsxN1zofqcl2nLQ/B3wLxzDqpQbIuAyBJj8zsBdigntfZCzVJUJ0kS8+Z10U5BUwV314sF6M+P3Wm3201rfXcHzF5OIV7yt3GX6XvKwVMCqNhKga1dRdufLuogzZiUs17PmjI0vlrSoVWWPwFBlQq8KntrpeD6IaIRK9DZwdC0+i22YEV0/RDN5LqU2+OejyNbvjAdNqJXrSrBCQjkU6zMqdJBoMuzi1NCurgv56ScADfFEZKJuBlEidtXTfxNoWPsesGhTQronIf5Rn5GpPIwDPOQf4ejVeTp5yeuh56byv0GWrpV4XjsHsPGIx14vl0hkDGm2WgEadmGy2QzcdlhbktvY+1/CAAAAAAAAAAAAAAAAAAAAACA/4BfdrYgpNES5McAAAAASUVORK5CYII=";
const heidenhainLogo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAA1BMVEW1vQA1hNHUAAAAGUlEQVRIie3BgQAAAADDoPlT3+AEVQEA8AwJMAABlkGHgQAAAABJRU5ErkJggg==";
const enData = {
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
        "Oversee 4-axis CNC turning (Index B400, Siemens 840sl) with NX CAM and in-process monitoring."
      ]
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
        "Provided engineering consulting and CAD/CAM support to industrial clients."
      ]
    },
    {
      role: "Part-time Lecturer",
      org: "University of Chlef",
      period: "2019 – 2022",
      current: false,
      points: ["Taught Non-Destructive Testing (NDT) — UT, RT, MT, PT.", "Led practical physics sessions."]
    },
    {
      role: "Part-time Freelancer — IKYTOOL",
      org: "CAD, 3D printing, reverse engineering",
      period: "2019 – 2023",
      current: false,
      points: [
        "Delivered CAD and 3D printing services and reverse-engineered components for prototyping and repair."
      ]
    }
  ],
  education: [
    {
      degree: "PhD — Mechanical Engineering (Manufacturing & Production)",
      school: "University of Djillali Liabes",
      year: "2023"
    },
    {
      degree: "Master's — Mechanical Engineering (Production)",
      school: "National Polytechnic School — Maurice Audin",
      year: "2018"
    },
    {
      degree: "Bachelor's — Mechanical Engineering (Production)",
      school: "National Polytechnic School — Maurice Audin",
      year: "2018"
    }
  ],
  certs: [
    { title: "PMP — Project Management Institute (2025)", image: pmiLogo },
    { title: "Metal Cutting Technology — SANDVIK (2024)", image: sandvikLogo },
    { title: "Hexagon CMM & Absolute Arm (2023)", image: hexagonLogo },
    { title: "SEI Laser Cut (2023)", image: seiLogo },
    { title: "ERM KUKA Robot (2023)", image: kukaLogo },
    { title: "Heidenhain 5-axis controller (2022)", image: heidenhainLogo }
  ]
};
const frData = {
  ...enData,
  domains: enData.domains.map((d) => ({ ...d })),
  projects: enData.projects.map((p) => ({ ...p })),
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
        "Supervision du tournage CNC 4 axes (Index B400, Siemens 840sl) avec NX CAM et contrôle in-situ."
      ]
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
        "Conseil en ingénierie et support CAO/FAO pour les clients industriels."
      ]
    },
    {
      role: "Enseignant Vacataire",
      org: "Université de Chlef",
      period: "2019 – 2022",
      current: false,
      points: ["Enseignement des Contrôles Non Destructifs (CND) — UT, RT, MT, PT.", "Direction de séances pratiques de physique."]
    },
    {
      role: "Freelance à Temps Partiel — IKYTOOL",
      org: "CAO, impression 3D, rétro-ingénierie",
      period: "2019 – 2023",
      current: false,
      points: [
        "Services de CAO et impression 3D, rétro-ingénierie de composants pour le prototypage et la réparation."
      ]
    }
  ],
  education: [
    {
      degree: "Doctorat — Génie Mécanique (Fabrication et Production)",
      school: "Université Djillali Liabes",
      year: "2023"
    },
    {
      degree: "Master — Génie Mécanique (Production)",
      school: "École Nationale Polytechnique — Maurice Audin",
      year: "2018"
    },
    {
      degree: "Licence — Génie Mécanique (Production)",
      school: "École Nationale Polytechnique — Maurice Audin",
      year: "2018"
    }
  ],
  certs: [
    { title: "PMP — Project Management Institute (2025)", image: pmiLogo },
    { title: "Technologie de Coupe des Métaux — SANDVIK (2024)", image: sandvikLogo },
    { title: "Hexagon CMM et Bras Absolu (2023)", image: hexagonLogo },
    { title: "Découpe Laser SEI (2023)", image: seiLogo },
    { title: "Robot ERM KUKA (2023)", image: kukaLogo },
    { title: "Contrôleur 5 axes Heidenhain (2022)", image: heidenhainLogo }
  ]
};
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
frData.projects = frData.projects.map((p) => {
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
frData.publications = frData.publications.map((p) => {
  let topic = p.topic;
  if (topic === "FSW · ML") topic = "FSW · Machine Learning";
  else if (topic === "Welding · Metallurgy") topic = "Soudage · Métallurgie";
  else if (topic === "Sustainable Mfg.") topic = "Fab. Durable";
  else if (topic === "Mechanics · FEM") topic = "Mécanique · FEM";
  return { ...p, topic };
});
const arData = {
  ...enData,
  domains: enData.domains.map((d) => ({ ...d })),
  projects: enData.projects.map((p) => ({ ...p })),
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
        "الإشراف على الخراطة CNC ذات 4 محاور مع NX CAM والمراقبة أثناء العملية."
      ]
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
        "تقديم الاستشارات الهندسية ودعم CAD/CAM للعملاء الصناعيين."
      ]
    },
    {
      role: "محاضر بدوام جزئي",
      org: "جامعة الشلف",
      period: "2019 – 2022",
      current: false,
      points: ["تدريس الاختبارات غير الإتلافية (NDT) — UT, RT, MT, PT.", "قيادة جلسات الفيزياء العملية."]
    },
    {
      role: "عمل حر بدوام جزئي — IKYTOOL",
      org: "CAD، الطباعة ثلاثية الأبعاد، الهندسة العكسية",
      period: "2019 – 2023",
      current: false,
      points: [
        "تقديم خدمات CAD والطباعة ثلاثية الأبعاد والهندسة العكسية للمكونات للنماذج الأولية والإصلاح."
      ]
    }
  ],
  education: [
    {
      degree: "دكتوراه — الهندسة الميكانيكية (التصنيع والإنتاج)",
      school: "جامعة جيلالي اليابس",
      year: "2023"
    },
    {
      degree: "ماجستير — الهندسة الميكانيكية (الإنتاج)",
      school: "المدرسة الوطنية المتعددة التقنيات — موريس أودان",
      year: "2018"
    },
    {
      degree: "بكالوريوس — الهندسة الميكانيكية (الإنتاج)",
      school: "المدرسة الوطنية المتعددة التقنيات — موريس أودان",
      year: "2018"
    }
  ],
  certs: [
    { title: "شهادة PMP — معهد إدارة المشاريع (2025)", image: pmiLogo },
    { title: "تكنولوجيا قطع المعادن — ساندفيك (2024)", image: sandvikLogo },
    { title: "Hexagon CMM والذراع المطلق (2023)", image: hexagonLogo },
    { title: "القطع بليزر SEI (2023)", image: seiLogo },
    { title: "روبوت ERM KUKA (2023)", image: kukaLogo },
    { title: "متحكم Heidenhain خماسي المحاور (2022)", image: heidenhainLogo }
  ]
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
arData.projects = arData.projects.map((p) => {
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
arData.publications = arData.publications.map((p) => {
  let topic = p.topic;
  if (topic.includes("FSW")) topic = topic.replace("FSW", "اللحام الخلطي");
  if (topic.includes("Welding")) topic = topic.replace("Welding", "اللحام");
  if (topic.includes("Metallurgy")) topic = topic.replace("Metallurgy", "التعدين");
  if (topic.includes("Sustainable Mfg.")) topic = "التصنيع المستدام";
  if (topic.includes("Mechanics")) topic = topic.replace("Mechanics", "الميكانيكا");
  return { ...p, topic };
});
const localizedData = {
  en: enData,
  fr: frData,
  ar: arData
};
function useInView(threshold = 0.15, rootMargin = "0px 0px -60px 0px") {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold, rootMargin }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, rootMargin]);
  return [ref, inView];
}
function Typewriter({
  text,
  speed = 70,
  delay = 0.5,
  className = ""
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
    }, delay * 1e3);
    return () => clearTimeout(timer);
  }, [text, speed, delay, mounted]);
  return /* @__PURE__ */ jsxs("span", { className, suppressHydrationWarning: true, children: [
    displayText,
    mounted && !isDone && /* @__PURE__ */ jsx("span", { className: "inline-block w-[0.15em] h-[0.9em] bg-primary ml-1 animate-pulse align-middle" })
  ] });
}
function Anim({
  children,
  className = "",
  direction = "up",
  delay = 0
}) {
  const [ref, inView] = useInView(0.12);
  return /* @__PURE__ */ jsx("div", { ref, className: `anim-base anim-${direction} ${inView ? "in-view" : ""} ${className}`, style: delay ? {
    transitionDelay: `${delay}s`
  } : void 0, children });
}
function Lightbox({
  src,
  video,
  alt,
  onClose
}) {
  return /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 z-[100] flex items-center justify-center p-4 lightbox-backdrop", style: {
    background: "oklch(0 0 0 / 0.85)"
  }, onClick: onClose, children: [
    /* @__PURE__ */ jsx("button", { onClick: onClose, className: "absolute top-6 right-6 text-white/70 hover:text-white transition z-10", "aria-label": "Close", children: /* @__PURE__ */ jsx("svg", { width: "32", height: "32", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ jsx("path", { d: "M18 6L6 18M6 6l12 12" }) }) }),
    /* @__PURE__ */ jsxs("div", { className: "relative max-w-5xl max-h-[85vh] lightbox-image", onClick: (e) => e.stopPropagation(), children: [
      video ? /* @__PURE__ */ jsx("video", { src: video, poster: src || void 0, controls: true, autoPlay: true, loop: true, muted: true, playsInline: true, className: "max-w-full max-h-[85vh] rounded-xl shadow-2xl" }) : /* @__PURE__ */ jsx("img", { src: src || "", alt, className: "max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent rounded-b-xl pointer-events-none", children: /* @__PURE__ */ jsx("p", { className: "text-white text-sm font-medium", children: alt }) })
    ] })
  ] });
}
function HomePage() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(HeroSection, {}),
    /* @__PURE__ */ jsx(AboutSection, {}),
    /* @__PURE__ */ jsx(ExpertiseSection, {}),
    /* @__PURE__ */ jsx(TimelineSection, {}),
    /* @__PURE__ */ jsx(ProjectsSection, {}),
    /* @__PURE__ */ jsx(ResearchSection, {}),
    /* @__PURE__ */ jsx(ContactSection, {}),
    /* @__PURE__ */ jsx(CTASection, {})
  ] });
}
function HeroSection() {
  const {
    t
  } = useLanguage();
  const statLabels = ["stat_papers", "stat_domains", "stat_phd", "stat_pmp"];
  return /* @__PURE__ */ jsxs("section", { id: "hero", className: "relative bg-hero overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-bg opacity-60" }),
    /* @__PURE__ */ jsx("div", { className: "absolute -top-40 -right-40 h-[420px] w-[420px] rounded-full bg-primary/20 blur-3xl float-slow" }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-20 -left-32 h-[300px] w-[300px] rounded-full bg-accent/10 blur-3xl float-slower" }),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-7xl px-6 pt-24 pb-32", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-3xl", children: [
        /* @__PURE__ */ jsx(Anim, { direction: "down", delay: 0.1, children: /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card/60 text-xs font-mono text-muted-foreground mb-8", children: [
          /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary animate-pulse" }),
          t("hero_status")
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxs("h1", { className: "font-display text-5xl md:text-7xl font-bold leading-[1.05] text-balance", children: [
          /* @__PURE__ */ jsx(Typewriter, { text: t("name") }),
          /* @__PURE__ */ jsx("span", { className: "inline-block text-primary animate-[text-reveal_1s_cubic-bezier(0.16,1,0.3,1)_both]", style: {
            animationDelay: "2.0s"
          }, children: "." }),
          /* @__PURE__ */ jsxs("span", { className: "block w-full text-muted-foreground font-medium mt-2 text-3xl md:text-5xl animate-[text-reveal_1.2s_cubic-bezier(0.16,1,0.3,1)_both]", style: {
            animationDelay: "2.4s"
          }, children: [
            t("hero_subtitle"),
            "."
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(Anim, { direction: "up", delay: 0.25, children: /* @__PURE__ */ jsx("p", { className: "mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl text-balance", children: t("hero_tagline") }) }),
        /* @__PURE__ */ jsx(Anim, { direction: "up", delay: 0.35, children: /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxs("a", { href: "#projects", className: "inline-flex items-center gap-2 bg-copper text-primary-foreground px-5 py-3 rounded-md text-sm font-medium shadow-elevated hover:opacity-95 hover:scale-[1.02] transition-all duration-200", children: [
            t("hero_cta_projects"),
            /* @__PURE__ */ jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ jsx("path", { d: "M5 12h14m-7-7 7 7-7 7" }) })
          ] }),
          /* @__PURE__ */ jsx("a", { href: "#research", className: "inline-flex items-center gap-2 border border-border bg-card/60 text-foreground px-5 py-3 rounded-md text-sm font-medium hover:bg-secondary hover:scale-[1.02] transition-all duration-200", children: t("hero_cta_research") })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx(Anim, { direction: "up", delay: 0.45, children: /* @__PURE__ */ jsx("div", { className: "mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-lg overflow-hidden border border-border", children: profile.stats.map((s, i) => /* @__PURE__ */ jsxs("div", { className: "bg-card p-6 hover:bg-secondary/40 transition-colors duration-300", children: [
        /* @__PURE__ */ jsx("div", { className: "font-display text-3xl md:text-4xl font-bold text-primary", children: s.value }),
        /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground mt-1 uppercase tracking-wider", children: t(statLabels[i]) })
      ] }, i)) }) })
    ] })
  ] });
}
function AboutSection() {
  const {
    t
  } = useLanguage();
  return /* @__PURE__ */ jsx("section", { id: "about", className: "mx-auto max-w-7xl px-6 py-24", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-12 gap-12", children: [
    /* @__PURE__ */ jsx("div", { className: "md:col-span-4", children: /* @__PURE__ */ jsxs(Anim, { direction: "left", children: [
      /* @__PURE__ */ jsx("div", { className: "text-xs font-mono text-primary uppercase tracking-[0.2em]", children: t("about_kicker") }),
      /* @__PURE__ */ jsx("h2", { className: "mt-3 font-display text-3xl md:text-4xl font-bold", children: t("about_title") })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "md:col-span-8 space-y-5 text-muted-foreground text-lg leading-relaxed", children: [
      /* @__PURE__ */ jsx(Anim, { direction: "right", delay: 0.1, children: /* @__PURE__ */ jsx("p", { children: t("about_p1") }) }),
      /* @__PURE__ */ jsx(Anim, { direction: "right", delay: 0.2, children: /* @__PURE__ */ jsxs("p", { children: [
        t("about_p2_pre"),
        /* @__PURE__ */ jsx("span", { className: "text-foreground", children: t("about_p2_org") }),
        t("about_p2_post")
      ] }) }),
      /* @__PURE__ */ jsx(Anim, { direction: "right", delay: 0.3, children: /* @__PURE__ */ jsx("p", { children: t("about_p3") }) })
    ] })
  ] }) });
}
function ExpertiseSection() {
  const {
    t,
    lang
  } = useLanguage();
  const domains2 = localizedData[lang].domains;
  return /* @__PURE__ */ jsx("section", { id: "expertise", className: "bg-card/30 border-y border-border", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 py-24", children: [
    /* @__PURE__ */ jsx(Anim, { direction: "up", children: /* @__PURE__ */ jsxs("div", { className: "mb-12", children: [
      /* @__PURE__ */ jsx("div", { className: "text-xs font-mono text-primary uppercase tracking-[0.2em]", children: t("expertise_kicker") }),
      /* @__PURE__ */ jsx("h2", { className: "mt-3 font-display text-3xl md:text-4xl font-bold", children: t("expertise_title") }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-lg text-muted-foreground max-w-2xl", children: t("exp_page_desc") })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-lg overflow-hidden border border-border", children: domains2.map((d, i) => /* @__PURE__ */ jsx(Anim, { direction: "scale", delay: 0.05 * i, children: /* @__PURE__ */ jsxs("div", { className: "bg-card p-6 hover:bg-secondary transition group h-full", children: [
      /* @__PURE__ */ jsxs("div", { className: "font-mono text-xs text-muted-foreground", children: [
        "0",
        i + 1
      ] }),
      /* @__PURE__ */ jsx("h3", { className: "mt-3 font-display text-lg font-semibold group-hover:text-primary transition", children: d.title }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground line-clamp-3", children: d.description }),
      /* @__PURE__ */ jsx("div", { className: "mt-4 flex flex-wrap gap-1.5", children: d.bullets.map((b) => /* @__PURE__ */ jsx("span", { className: "text-[10px] px-2 py-0.5 rounded bg-secondary text-muted-foreground border border-border", children: b }, b)) })
    ] }) }, d.slug)) })
  ] }) });
}
function TimelineSection() {
  const {
    t,
    lang
  } = useLanguage();
  const timelineItems = useMemo(() => {
    const data = localizedData[lang];
    return [...data.experience.map((e) => ({
      period: e.period,
      title: e.role,
      org: e.org,
      points: e.points,
      current: e.current,
      type: "work"
    })), ...data.education.map((ed) => ({
      period: ed.year,
      title: ed.degree,
      org: ed.school,
      type: "edu"
    }))];
  }, [lang]);
  const certs = localizedData[lang].certs;
  return /* @__PURE__ */ jsxs("section", { id: "timeline", className: "mx-auto max-w-7xl px-6 py-24", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-20", children: [
      /* @__PURE__ */ jsx("div", { className: "text-xs font-mono text-primary uppercase tracking-[0.2em]", children: t("timeline_kicker") }),
      /* @__PURE__ */ jsxs("h2", { className: "mt-3 font-display text-4xl md:text-5xl font-bold", children: [
        t("cv_experience"),
        " ",
        /* @__PURE__ */ jsx("span", { className: "text-primary", children: "&" }),
        " ",
        /* @__PURE__ */ jsx("span", { className: "text-primary", children: t("cv_education") })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mx-auto mt-4 h-1 w-12 rounded-full bg-copper" }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg text-muted-foreground max-w-2xl mx-auto", children: t("timeline_desc") })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx("div", { className: "hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 timeline-line" }),
      /* @__PURE__ */ jsx("div", { className: "md:hidden absolute left-[15px] top-0 bottom-0 w-0.5 timeline-line" }),
      /* @__PURE__ */ jsx("div", { className: "space-y-12 md:space-y-16", children: timelineItems.map((item, i) => {
        const isLeft = i % 2 === 0;
        return /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute left-[15px] md:left-1/2 -translate-x-1/2 top-8 md:top-1/2 md:-translate-y-1/2 z-10", children: /* @__PURE__ */ jsx("div", { className: `w-4 h-4 rounded-full transition-all duration-300 ${item.current ? "bg-primary shadow-[0_0_20px_oklch(0.74_0.16_55/0.6)]" : "bg-accent shadow-[0_0_12px_oklch(0.78_0.14_220/0.4)]"}` }) }),
          /* @__PURE__ */ jsx("div", { className: "md:hidden pl-10", children: /* @__PURE__ */ jsx(TimelineCard, { item, t }) }),
          /* @__PURE__ */ jsx("div", { className: "hidden md:grid md:grid-cols-[1fr_4rem_1fr] items-center", children: isLeft ? /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("div", { className: "flex justify-end pr-4", children: /* @__PURE__ */ jsx(TimelineCard, { item, t }) }),
            /* @__PURE__ */ jsx("div", {}),
            /* @__PURE__ */ jsx("div", {})
          ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("div", {}),
            /* @__PURE__ */ jsx("div", {}),
            /* @__PURE__ */ jsx("div", { className: "pl-4", children: /* @__PURE__ */ jsx(TimelineCard, { item, t }) })
          ] }) })
        ] }, item.title + item.period);
      }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-24", children: [
      /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-bold mb-8 text-center", children: t("cv_certs_h") }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-6 max-w-5xl mx-auto", children: certs.map((c) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6 p-6 rounded-2xl border border-border bg-card hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1", children: [
        /* @__PURE__ */ jsx("div", { className: "shrink-0 h-20 w-20 md:h-24 md:w-24 rounded-xl bg-white flex items-center justify-center p-3 overflow-hidden shadow-sm border border-black/5", children: /* @__PURE__ */ jsx("img", { src: c.image, alt: c.title, className: "w-full h-full object-contain" }) }),
        /* @__PURE__ */ jsx("span", { className: "text-lg md:text-xl font-display font-bold text-foreground leading-tight", children: c.title })
      ] }, c.title)) })
    ] })
  ] });
}
function TimelineCard({
  item,
  t
}) {
  const icon = item.type === "work" ? /* @__PURE__ */ jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "text-primary", children: [
    /* @__PURE__ */ jsx("path", { d: "M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z" }),
    /* @__PURE__ */ jsx("path", { d: "M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" })
  ] }) : /* @__PURE__ */ jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "text-primary", children: [
    /* @__PURE__ */ jsx("path", { d: "M22 10v6M2 10l10-5 10 5-10 5z" }),
    /* @__PURE__ */ jsx("path", { d: "M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" })
  ] });
  return /* @__PURE__ */ jsxs("div", { className: `group max-w-md rounded-xl border bg-card p-6 transition-all duration-300 hover:shadow-[0_0_50px_oklch(0.74_0.16_55/0.08)] ${item.current ? "border-primary/40 shadow-[0_0_30px_oklch(0.74_0.16_55/0.06)]" : "border-border hover:border-primary/30"}`, children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
      icon,
      /* @__PURE__ */ jsx("span", { className: `font-mono text-xs px-2.5 py-1 rounded-md border ${item.current ? "bg-primary/10 text-primary border-primary/30" : "bg-secondary text-muted-foreground border-border"}`, children: item.period })
    ] }),
    /* @__PURE__ */ jsx("h4", { className: "font-display font-bold text-lg leading-snug", children: item.title }),
    /* @__PURE__ */ jsx("div", { className: "text-sm text-primary mt-1 uppercase tracking-wider font-medium", children: item.org }),
    item.points && /* @__PURE__ */ jsx("ul", { className: "mt-4 space-y-1.5 text-sm text-muted-foreground", children: item.points.map((p) => /* @__PURE__ */ jsxs("li", { className: "flex gap-2 leading-relaxed", children: [
      /* @__PURE__ */ jsx("span", { className: "text-primary mt-0.5 shrink-0", children: "›" }),
      p
    ] }, p)) })
  ] });
}
function ProjectsSection() {
  const {
    t,
    lang
  } = useLanguage();
  const projects2 = localizedData[lang].projects;
  const categories = useMemo(() => ["All", ...Array.from(new Set(projects2.map((p) => p.category)))], [projects2]);
  const [active, setActive] = useState("All");
  useEffect(() => {
    setActive("All");
  }, [lang]);
  const list = active === "All" ? projects2 : projects2.filter((p) => p.category === active);
  const [lightbox, setLightbox] = useState(null);
  return /* @__PURE__ */ jsxs("section", { id: "projects", className: "bg-card/30 border-y border-border", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 py-24", children: [
      /* @__PURE__ */ jsxs(Anim, { direction: "up", children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs font-mono text-primary uppercase tracking-[0.2em]", children: t("projects_kicker") }),
        /* @__PURE__ */ jsx("h2", { className: "mt-3 font-display text-3xl md:text-4xl font-bold", children: t("proj_page_title") }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-lg text-muted-foreground max-w-2xl", children: t("proj_page_desc") })
      ] }),
      /* @__PURE__ */ jsx(Anim, { direction: "up", delay: 0.1, children: /* @__PURE__ */ jsx("div", { className: "mt-10 flex flex-wrap gap-2", children: categories.map((c) => /* @__PURE__ */ jsx("button", { onClick: () => setActive(c), className: `text-xs px-3 py-1.5 rounded-md border transition-all duration-200 ${active === c ? "bg-copper text-primary-foreground border-transparent scale-105" : "border-border text-muted-foreground hover:text-foreground hover:bg-secondary"}`, children: c === "All" ? t("filter_all") : c }, c)) }) }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: list.map((p, i) => /* @__PURE__ */ jsx(Anim, { direction: "up", delay: 0.05 * (i % 6), children: /* @__PURE__ */ jsxs("article", { className: "group rounded-lg overflow-hidden border border-border bg-card hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_40px_oklch(0.74_0.16_55/0.06)]", children: [
        /* @__PURE__ */ jsxs("div", { className: "aspect-[4/3] overflow-hidden bg-muted relative cursor-pointer", onClick: () => setLightbox({
          src: p.image,
          alt: p.title,
          video: p.video
        }), children: [
          p.video ? /* @__PURE__ */ jsx("video", { src: p.video, preload: "metadata", muted: true, loop: true, playsInline: true, onMouseEnter: (e) => e.currentTarget.play(), onMouseLeave: (e) => {
            e.currentTarget.pause();
            e.currentTarget.currentTime = 0;
          }, className: "h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" }) : /* @__PURE__ */ jsx("img", { src: p.image || "", alt: p.title, loading: "lazy", className: "h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full p-3 flex items-center justify-center", children: p.video ? /* @__PURE__ */ jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "white", stroke: "white", strokeWidth: "2", children: /* @__PURE__ */ jsx("polygon", { points: "5 3 19 12 5 21 5 3" }) }) : /* @__PURE__ */ jsxs("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "white", strokeWidth: "2", children: [
            /* @__PURE__ */ jsx("circle", { cx: "11", cy: "11", r: "8" }),
            /* @__PURE__ */ jsx("path", { d: "m21 21-4.35-4.35M11 8v6M8 11h6" })
          ] }) }) }),
          p.video && /* @__PURE__ */ jsxs("div", { className: "absolute top-3 right-3 px-2 py-1 bg-black/60 backdrop-blur-md rounded text-[9px] font-mono uppercase tracking-widest text-white border border-white/10 flex items-center gap-1.5 shadow-lg", children: [
            /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-primary animate-pulse" }),
            "Video"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-5", children: [
          /* @__PURE__ */ jsx("div", { className: "text-[10px] font-mono uppercase tracking-wider text-primary", children: p.category }),
          /* @__PURE__ */ jsx("h3", { className: "mt-2 font-display font-semibold", children: p.title }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground line-clamp-2", children: p.description })
        ] })
      ] }) }, p.title)) })
    ] }),
    lightbox && /* @__PURE__ */ jsx(Lightbox, { src: lightbox.src || "", video: lightbox.video, alt: lightbox.alt, onClose: () => setLightbox(null) })
  ] });
}
function ResearchSection() {
  const {
    t,
    lang
  } = useLanguage();
  const publications2 = localizedData[lang].publications;
  return /* @__PURE__ */ jsxs("section", { id: "research", className: "mx-auto max-w-7xl px-6 py-24", children: [
    /* @__PURE__ */ jsx("div", { className: "text-xs font-mono text-primary uppercase tracking-[0.2em]", children: t("res_page_kicker") }),
    /* @__PURE__ */ jsx("h2", { className: "mt-3 font-display text-3xl md:text-4xl font-bold", children: t("res_page_title") }),
    /* @__PURE__ */ jsx("p", { className: "mt-4 text-lg text-muted-foreground max-w-2xl", children: t("res_page_desc") }),
    /* @__PURE__ */ jsx("ol", { className: "mt-12 divide-y divide-border border border-border rounded-xl overflow-hidden bg-card", children: publications2.map((p, i) => /* @__PURE__ */ jsx("li", { className: "group", children: /* @__PURE__ */ jsxs("a", { href: p.url, target: "_blank", rel: "noopener noreferrer", className: "grid md:grid-cols-12 gap-4 p-6 hover:bg-secondary/60 transition", children: [
      /* @__PURE__ */ jsx("div", { className: "md:col-span-1 font-mono text-sm text-muted-foreground", children: String(i + 1).padStart(2, "0") }),
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-8", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-display font-semibold leading-snug group-hover:text-primary transition", children: p.title }),
        /* @__PURE__ */ jsx("div", { className: "mt-1 text-sm text-muted-foreground italic", children: p.venue })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "md:col-span-2 flex items-start", children: /* @__PURE__ */ jsx("span", { className: "text-[10px] uppercase tracking-wider px-2 py-1 rounded-md bg-secondary border border-border text-muted-foreground", children: p.topic }) }),
      /* @__PURE__ */ jsx("div", { className: "md:col-span-1 flex items-start justify-end font-mono text-sm text-muted-foreground", children: p.year })
    ] }) }, p.url)) }),
    /* @__PURE__ */ jsx("div", { className: "mt-6 text-sm text-muted-foreground", children: t("res_page_note") })
  ] });
}
function ContactSection() {
  const {
    t
  } = useLanguage();
  return /* @__PURE__ */ jsx("section", { id: "contact", className: "bg-card/30 border-y border-border", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-5xl px-6 py-24", children: [
    /* @__PURE__ */ jsx("div", { className: "text-xs font-mono text-primary uppercase tracking-[0.2em]", children: t("contact_kicker") }),
    /* @__PURE__ */ jsx("h2", { className: "mt-3 font-display text-3xl md:text-5xl font-bold text-balance", children: t("contact_title") }),
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
  ] }) });
}
function CTASection() {
  const {
    t
  } = useLanguage();
  return /* @__PURE__ */ jsx("section", { className: "mx-auto max-w-7xl px-6 py-24", children: /* @__PURE__ */ jsx("div", { className: "relative overflow-hidden rounded-2xl border border-border bg-card p-10 md:p-16 grid-bg", children: /* @__PURE__ */ jsxs("div", { className: "relative max-w-2xl", children: [
    /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold", children: t("cta_title") }),
    /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground text-lg", children: t("cta_desc") }),
    /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
      /* @__PURE__ */ jsx("a", { href: "#contact", className: "bg-copper text-primary-foreground px-5 py-3 rounded-md text-sm font-medium shadow-elevated", children: t("cta_contact") }),
      /* @__PURE__ */ jsx("a", { href: "/Ismail_Chekalil_CV.pdf", target: "_blank", rel: "noopener noreferrer", className: "border border-border bg-card/60 px-5 py-3 rounded-md text-sm font-medium hover:bg-secondary transition", children: t("cv_view_pdf") }),
      /* @__PURE__ */ jsx("a", { href: "/Ismail_Chekalil_CV.pdf", download: true, className: "border border-border bg-card/60 px-5 py-3 rounded-md text-sm font-medium hover:bg-secondary transition", children: t("cta_cv") })
    ] })
  ] }) }) });
}
export {
  HomePage as component
};
