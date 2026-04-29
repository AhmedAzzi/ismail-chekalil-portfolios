import design1 from "@/assets/projects/design-1.png";
import design2 from "@/assets/projects/design-2.png";
import lpbf1 from "@/assets/projects/lpbf-1.png";
import lwded1 from "@/assets/projects/lwded-1.png";
import machining1 from "@/assets/projects/machining-1.png";
import machining2 from "@/assets/projects/machining-2.png";
import mgmt1 from "@/assets/projects/mgmt-1.png";
import mgmt2 from "@/assets/projects/mgmt-2.png";
import mgmt3 from "@/assets/projects/mgmt-3.png";
import material1 from "@/assets/projects/material-1.png";
import material2 from "@/assets/projects/material-2.png";
import material3 from "@/assets/projects/material-3.png";
import materialLeather from "@/assets/projects/material-leather.png";
import material4 from "@/assets/projects/material-4.png";
import polymer1 from "@/assets/projects/polymer-1.png";
import welding1 from "@/assets/projects/welding-1.png";
import welding2 from "@/assets/projects/welding-2.png";
import machiningVideo from "@/assets/Videos/5 axis machining.mp4";
import lpbfVideo from "@/assets/Videos/VID20250721132619.mp4";
import polymerVideo from "@/assets/Videos/VID20260202120106.mp4";
import lwdedVideo from "@/assets/Videos/ok.mp4";

export type Domain = {
  slug: string;
  title: string;
  short: string;
  description: string;
  bullets: string[];
};

export const domains: Domain[] = [
  {
    slug: "metal-am-lpbf",
    title: "Laser Powder Bed Fusion",
    short: "Metal AM",
    description:
      "Metallic additive manufacturing via Laser Powder Bed Fusion: build preparation, parameter development and post-processing, optimizing density, surface finish and mechanical performance.",
    bullets: ["SLM 280", "Build prep & parameters", "Density / surface finish", "Lattice structures"],
  },
  {
    slug: "lwded",
    title: "Laser Wire DED",
    short: "Directed Energy Deposition",
    description:
      "Laser Wire Directed Energy Deposition for repair, cladding, near-net-shape and large-scale metal deposition. Process planning, material compatibility and dual-material strategies.",
    bullets: ["Meltio Robot Cell", "Repair & cladding", "Near-net-shape", "Dual-material AM"],
  },
  {
    slug: "polymers-composites",
    title: "Polymer & Composite AM",
    short: "Polymer / Composite AM",
    description:
      "Polymer and composite additive manufacturing: material selection, process optimization and performance evaluation for lightweight structures and functional prototypes.",
    bullets: ["FDM — D1000 / D600", "Composite reinforcement", "Lightweight structures", "Biochar feedstock R&D"],
  },
  {
    slug: "welding",
    title: "Welding & FSW",
    short: "Friction Stir Welding",
    description:
      "Specialist in Friction Stir Welding of aluminum alloys with focus on mechanical behavior, microhardness, corrosion and AI-based parameter prediction. Experience with GMAW dissimilar joints.",
    bullets: ["AA3003 / AA6082", "Microhardness mapping", "Corrosion behavior", "ML-based prediction"],
  },
  {
    slug: "machining",
    title: "Precision Machining",
    short: "CNC / Subtractive",
    description:
      "Hands-on machining expertise covering tooling, tolerances, surface finish and DFM. 4-axis turning (Index B400, Siemens 840sl) and 5-axis milling (HERMLE C400, Heidenhain 640) with NX CAM strategies.",
    bullets: ["4-axis turning", "5-axis milling", "NX CAM", "In-process monitoring"],
  },
  {
    slug: "materials",
    title: "Material Engineering",
    short: "Materials & Characterization",
    description:
      "Linking microstructure, manufacturing process and mechanical performance. Characterization, failure analysis and sustainable material development including clean leather processing.",
    bullets: ["Microstructure–property", "Failure analysis", "Sustainable processing", "Characterization"],
  },
  {
    slug: "design-re",
    title: "Design & Reverse Engineering",
    short: "CAD / DFM",
    description:
      "From concept to detailed CAD, prototyping and manufacturing support. Reverse engineering through 3D scanning, dimensional inspection and CAD reconstruction.",
    bullets: ["CAD modeling", "DFM", "3D scanning", "Dimensional inspection"],
  },
  {
    slug: "management",
    title: "Management, Consulting & Training",
    short: "Leadership",
    description:
      "Technical management of engineering projects, lab oversight, consulting and structured training. Translating complex problems into measurable, practical solutions.",
    bullets: ["Lab management", "Engineering consulting", "Mentorship & training", "PMP certified"],
  },
];

export type Project = {
  title: string;
  category: string;
  description: string;
  image?: string;
  video?: string;
};

export const projects: Project[] = [
  {
    title: "Lattice Structures via SLM",
    category: "Laser Powder Bed Fusion",
    description: "Topology-optimized lattice geometries fabricated by Selective Laser Melting for lightweight, high-stiffness applications.",
    image: lpbf1,
  },
  {
    title: "Laser Wire DED Deposition",
    category: "Directed Energy Deposition",
    description: "Robotic Laser Wire DED for near-net-shape parts, cladding and dual-material build strategies on a Meltio robot cell.",
    image: lwded1,
  },
  {
    title: "Composite & Polymer Printing",
    category: "Polymer / Composite AM",
    description: "Large-format FDM of functional polymer and fiber-reinforced composite parts for lightweight engineering prototypes.",
    image: polymer1,
  },
  {
    title: "FSW of AA3003 Aluminum",
    category: "Friction Stir Welding",
    description: "Process development and microhardness mapping of friction stir welded AA3003 joints with corrosion characterization.",
    image: welding1,
  },
  {
    title: "Dissimilar Joint Analysis",
    category: "Welding",
    description: "Metallurgical and mechanical investigation of dissimilar AISI 316 / AISI 304 GMAW joints for industrial piping.",
    image: welding2,
  },
  {
    title: "5-Axis Milling Strategies",
    category: "Precision Machining",
    description: "NX CAM toolpath development for HERMLE C400 5-axis machining of complex geometries with tight tolerance control.",
    image: machining1,
  },
  {
    title: "CNC Turning & Monitoring",
    category: "Precision Machining",
    description: "Index B400 4-axis turning with sensor and vision-based in-process monitoring for adaptive control.",
    image: machining2,
  },
  {
    title: "Microstructure–Property Mapping",
    category: "Material Engineering",
    description: "Linking processing parameters to microstructure and resulting mechanical performance across welded and additively manufactured parts.",
    image: material1,
  },
  {
    title: "Corrosion Characterization",
    category: "Material Engineering",
    description: "Electrochemical and gravimetric corrosion studies of friction stir welded aluminum joints in aggressive environments.",
    image: material2,
  },
  {
    title: "Failure & Damage Analysis",
    category: "Material Engineering",
    description: "X-FEM modeling of damage in steel pipe elbows under combined pressure and bending loads.",
    image: material3,
  },
  {
    title: "Clean Leather Manufacturing",
    category: "Sustainable Manufacturing",
    description: "Real-time optimization control for laser- and ultrasonic-assisted leather cutting, reducing environmental impact in industrial practice.",
    image: materialLeather,
  },
  {
    title: "Mechanical Characterization",
    category: "Material Engineering",
    description: "Tensile, hardness and fatigue testing protocols correlating manufacturing route to in-service behavior.",
    image: material4,
  },
  {
    title: "Reverse Engineering Workflow",
    category: "Design & RE",
    description: "3D scanning, dimensional inspection and CAD reconstruction of legacy components for repair and re-manufacture.",
    image: design1,
  },
  {
    title: "CAD Design for Manufacturing",
    category: "Design & RE",
    description: "Functional CAD modeling driven by manufacturability, material selection and performance constraints.",
    image: design2,
  },
  {
    title: "Lab Management — Manufacturing",
    category: "Management & Training",
    description: "Operational oversight of additive and subtractive manufacturing labs at KFUPM IRC-IMR.",
    image: mgmt1,
  },
  {
    title: "Engineering Training Programs",
    category: "Management & Training",
    description: "Structured training in additive manufacturing, machining and metrology for students, researchers and industry teams.",
    image: mgmt2,
  },
  {
    title: "Industrial Consulting",
    category: "Management & Training",
    description: "Tailored engineering consulting on machine commissioning, process selection and production optimization.",
    image: mgmt3,
  },
  {
    title: "SLM 280 Process Demonstration",
    category: "Laser Powder Bed Fusion",
    description: "Real-time recording of the SLM 280 metallic additive manufacturing process, showcasing laser-powder interaction.",
    video: lpbfVideo,
  },
  {
    title: "Robotic LWDED Printing",
    category: "Directed Energy Deposition",
    description: "Live demonstration of robotic Laser Wire Directed Energy Deposition for large-scale metal additive manufacturing.",
    video: lwdedVideo,
  },
  {
    title: "Large-Format FDM Operation",
    category: "Polymer / Composite AM",
    description: "Industrial FDM printing of functional polymer components using large-scale extrusion systems.",
    video: polymerVideo,
  },
  {
    title: "5-Axis Machining (Hermle C400)",
    category: "Precision Machining",
    description: "Simultaneous 5-axis milling operation on the HERMLE C400 for high-precision complex geometries.",
    video: machiningVideo,
  },
];

export type Publication = {
  title: string;
  venue: string;
  year: string;
  url: string;
  topic: string;
};

export const publications: Publication[] = [
  {
    title: "Effect of corrosive environments on the mechanical properties of FSW joints of AA3003",
    venue: "Journal of Materials Research and Technology",
    year: "2024",
    url: "https://www.sciencedirect.com/science/article/pii/S2238785424021720",
    topic: "Corrosion · FSW",
  },
  {
    title: "Corrosion behavior of AA3003 friction stir welded joints",
    venue: "Colloids and Surfaces A",
    year: "2024",
    url: "https://www.sciencedirect.com/science/article/pii/S0927775723017570",
    topic: "Corrosion · FSW",
  },
  {
    title: "Prediction of mechanical behavior of FSW joints of AA3003 aluminum",
    venue: "Frattura ed Integrità Strutturale",
    year: "2020",
    url: "https://www.fracturae.com/index.php/fis/article/view/2851",
    topic: "FSW · Modeling",
  },
  {
    title: "Prediction & optimization of mechanical properties in FSWed AA6082-T6 joints (RSM & ANN)",
    venue: "Int. Journal of Advanced Manufacturing Technology",
    year: "2025",
    url: "https://link.springer.com/article/10.1007/s00170-025-17240-w",
    topic: "FSW · ML",
  },
  {
    title: "Influence of GMAW parameters on dissimilar AISI 316 / AISI 304 welded joints",
    venue: "J. of Materials Engineering and Performance",
    year: "2025",
    url: "https://link.springer.com/article/10.1007/s11665-025-13110-4",
    topic: "Welding · Metallurgy",
  },
  {
    title: "AI-based prediction of maximum temperature in FSW of AA3003",
    venue: "Int. Journal of Advanced Manufacturing Technology",
    year: "2025",
    url: "https://link.springer.com/article/10.1007/s00170-025-16847-3",
    topic: "FSW · AI",
  },
  {
    title: "Real-time optimization control for sustainable laser leather cutting",
    venue: "Scientific Reports (Nature)",
    year: "2025",
    url: "https://www.nature.com/articles/s41598-025-19032-4",
    topic: "Sustainable Mfg.",
  },
  {
    title: "Ultrasonic vs laser-assisted machining for sustainable leather cutting",
    venue: "Scientific Reports (Nature)",
    year: "2025",
    url: "https://www.nature.com/articles/s41598-025-05181-z",
    topic: "Sustainable Mfg.",
  },
  {
    title: "Hybrid deep learning model to predict UTS of FSW joints",
    venue: "Engineering Applications of Artificial Intelligence",
    year: "2025",
    url: "https://www.sciencedirect.com/science/article/pii/S0952197625010012",
    topic: "FSW · Deep Learning",
  },
  {
    title: "Predicting damage in steel pipe elbows under pressure & bending using X-FEM",
    venue: "Int. Journal of Steel Structures",
    year: "2025",
    url: "https://link.springer.com/article/10.1007/s13296-025-00953-9",
    topic: "Mechanics · FEM",
  },
];

export const profile = {
  name: "Ismail Chekalil",
  title: "Mechanical Engineer · PhD · PMP",
  subtitle: "Manufacturing & Materials Researcher",
  tagline:
    "Bridging metal additive manufacturing, friction stir welding and sustainable processes — from microstructure to industrial application.",
  location: "Khobar, Saudi Arabia",
  email: "chekalil1ismail@gmail.com",
  phone: "+966 57 077 6926",
  affiliation:
    "Interdisciplinary Research Center for Intelligent Manufacturing & Robotics — KFUPM",
  stats: [
    { value: "10+", label: "Peer-reviewed papers" },
    { value: "8", label: "Engineering domains" },
    { value: "PhD", label: "Mechanical Engineering" },
    { value: "PMP", label: "Project Management" },
  ],
};
