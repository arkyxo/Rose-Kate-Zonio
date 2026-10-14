import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import asset_a1c55936 from "./assets/asset-a1c55936.jpg";
import asset_0900cf5c from "./assets/asset-0900cf5c.pdf";
import asset_9c6f492b from "./assets/asset-9c6f492b.pdf";
import asset_9fd9590f from "./assets/asset-9fd9590f.png";
import asset_84111716 from "./assets/asset-84111716.png";
import asset_96c75af1 from "./assets/asset-96c75af1.png";
import asset_b5acca38 from "./assets/asset-b5acca38.png";
import asset_12b1b727 from "./assets/asset-12b1b727.png";
import asset_2567e649 from "./assets/asset-2567e649.png";
import asset_dc866c64 from "./assets/asset-dc866c64.png";
import asset_e9ee8d5e from "./assets/asset-e9ee8d5e.png";
import asset_44876619 from "./assets/asset-44876619.png";
import asset_3c66e1fc from "./assets/asset-3c66e1fc.png";
import asset_247d2abe from "./assets/asset-247d2abe.png";
import asset_83b2b79f from "./assets/asset-83b2b79f.png";
import asset_b5f6c886 from "./assets/asset-b5f6c886.png";
import asset_b1aa8886 from "./assets/asset-b1aa8886.png";
import asset_c5fca167 from "./assets/asset-c5fca167.png";
import asset_5994d1fb from "./assets/asset-5994d1fb.png";
import asset_56bd5b63 from "./assets/asset-56bd5b63.png";
import asset_a8e20bfa from "./assets/asset-a8e20bfa.png";
import asset_06a80c2f from "./assets/asset-06a80c2f.jpg";
import asset_b2fc0f05 from "./assets/asset-b2fc0f05.jpg";
import asset_f42ac97a from "./assets/asset-f42ac97a.jpg";
import asset_3e6b708c from "./assets/asset-3e6b708c.jpg";
import asset_9e429332 from "./assets/asset-9e429332.jpg";
import asset_54b305ed from "./assets/asset-54b305ed.png";
import asset_4ce99605 from "./assets/asset-4ce99605.png";
import asset_11af5d6e from "./assets/asset-11af5d6e.png";
import techbizLogo from "./assets/techbizacademy-logo.png";
import asset_77ad849f from "./assets/asset-77ad849f.png";
import asset_39871438 from "./assets/asset-39871438.png";
import asset_96851f8e from "./assets/asset-96851f8e.png";
import asset_5fd2cb0e from "./assets/asset-5fd2cb0e.png";
import amaLogo from "./assets/ama-logo.png";
import appBuildersLogo from "./assets/appbuildersph-logo.png";
import fgwbLogo from "./assets/forgirlswhobuild-logo.png";
import kuryenteThumb from "./assets/kuryentewatch.png";
import hackathonStage from "./assets/appbuilders-hackathon-stage.jpg";
import hackathonGroup from "./assets/appbuilders-hackathon-group.jpg";

function makeIcon(paths) {
  return function Icon({ size = 24, className = "", ...props }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        {...props}
      >
        {paths}
      </svg>
    );
  };
}

const Mail = makeIcon(<><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></>);
const Github = makeIcon(<path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />);
const GithubIcon = Github;
const Linkedin = makeIcon(<><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></>);
const Download = makeIcon(<><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></>);
const Eye = makeIcon(<><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></>);
const Sun = makeIcon(<><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></>);
const Moon = makeIcon(<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />);
const ArrowUp = makeIcon(<><path d="m5 12 7-7 7 7" /><path d="M12 19V5" /></>);
const Search = makeIcon(<><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></>);
const ExternalLink = makeIcon(<><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></>);
const Network = makeIcon(<><rect x="9" y="2" width="6" height="6" rx="1" /><rect x="2" y="16" width="6" height="6" rx="1" /><rect x="16" y="16" width="6" height="6" rx="1" /><path d="M12 8v4M12 12H5v4M12 12h7v4" /></>);
const GraduationCap = makeIcon(<><path d="M22 10 12 5 2 10l10 5 10-5Z" /><path d="M6 12v5c3 2 9 2 12 0v-5" /><path d="M22 10v6" /></>);
const Code2 = makeIcon(<><path d="m18 16 4-4-4-4" /><path d="m6 8-4 4 4 4" /><path d="m14.5 4-5 16" /></>);
const Briefcase = makeIcon(<><rect width="20" height="14" x="2" y="7" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></>);
const CheckCircle2 = makeIcon(<><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" /></>);
const Clock = makeIcon(<><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></>);
const Circle = makeIcon(<circle cx="12" cy="12" r="10" />);
const FileText = makeIcon(<><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M10 9H8" /><path d="M16 13H8" /><path d="M16 17H8" /></>);
const ChevronDown = makeIcon(<path d="m6 9 6 6 6-6" />);
const Menu = makeIcon(<><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></>);
const X = makeIcon(<><path d="M18 6 6 18" /><path d="m6 6 12 12" /></>);
const MapPin = makeIcon(<><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></>);
const ImageIcon = makeIcon(<><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.1-3.1a2 2 0 0 0-2.83 0L6 21" /></>);
const ArrowUpRight = makeIcon(<><path d="M7 7h10v10" /><path d="M7 17 17 7" /></>);
const ArrowLeftRight = makeIcon(<><path d="M8 3 4 7l4 4" /><path d="M4 7h16" /><path d="m16 21 4-4-4-4" /><path d="M20 17H4" /></>);
const ArrowRight = makeIcon(<><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>);
const User = makeIcon(<><circle cx="12" cy="8" r="5" /><path d="M20 21a8 8 0 0 0-16 0" /></>);
const Trophy = makeIcon(<><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" /></>);
const Users = makeIcon(<><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>);
const Wrench = makeIcon(<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />);

const PanelLeft = makeIcon(<><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M9 3v18" /></>);
const Contrast = makeIcon(<><circle cx="12" cy="12" r="10" /><path d="M12 18a6 6 0 0 0 0-12v12z" /></>);
const LayoutGrid = makeIcon(<><rect width="7" height="7" x="3" y="3" rx="1" /><rect width="7" height="7" x="14" y="3" rx="1" /><rect width="7" height="7" x="14" y="14" rx="1" /><rect width="7" height="7" x="3" y="14" rx="1" /></>);
const Layers = makeIcon(<><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" /><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" /><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" /></>);
const Award = makeIcon(<><circle cx="12" cy="8" r="6" /><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" /></>);
const House = makeIcon(<><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></>);

const PROFILE = {
  name: "RK",
  role: "Software & Networking/IT",
  subrole: "Computer Engineering · Software & Networking/IT",
  email: "rkzonio1@gmail.com",
  github: "https://github.com/arkyxo",
  githubUsername: "arkyxo",
  linkedin: "https://www.linkedin.com/in/rkzonio/",
  location: "Rizal, Philippines",
};

const hasLink = (u) => !!u && u !== "#";

const RESUME_FILES = [
  {
    label: "Software CV",
    eyebrow: "Software Engineering · Full-Stack · QA",
    filename: "Rose_Kate_Zonio_Software_CV.pdf",
    url: asset_0900cf5c,
    blurb:
      "Targets Software Engineering, Full-Stack Development, and QA internships. Leads with URSAC Simulation Academy, Salo Sa Antipolo, and CineLookUp.",
    tags: ["Python", "JavaScript", "React", "Node.js", "Laravel", "Django", "MySQL", "Firebase"],
  },
  {
    label: "Network CV",
    eyebrow: "Network Administration · IT Support · Cybersecurity",
    filename: "Rose_Kate_Zonio_Network_CV.pdf",
    url: asset_9c6f492b,
    blurb:
      "Targets Network Administration, IT Support, and Cybersecurity internships. Leads with the Home Network Device Monitor and SPES IT support experience.",
    tags: ["TCP/IP", "Subnetting", "DNS/DHCP", "VLANs", "Cisco Packet Tracer", "Network Security"],
  },
];
const RESUMES = RESUME_FILES;

const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "activities", label: "Activities" },
  { id: "labs", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "certifications", label: "Certs" },
  { id: "github-activity", label: "GitHub" },
];

const SKILL_LEVELS = {
  core: { dot: "bg-red-400", glow: "dot-glow-red", text: "text-red-400", label: "Core competency", code: "CORE", chipBg: "bg-red-400", chipText: "text-slate-950", desc: "Comfortable using this independently in real projects and troubleshooting scenarios." },
  working: { dot: "bg-amber-400", glow: "dot-glow-amber", text: "text-amber-400", label: "Guided practice", code: "GUIDED", chipBg: "bg-amber-400", chipText: "text-slate-950", desc: "Can apply this with documentation, references, or guidance close at hand." },
  basic: { dot: "bg-blue-400", glow: "dot-glow-blue", text: "text-blue-400", label: "Basic familiarity", code: "BASIC", chipBg: "bg-blue-400", chipText: "text-slate-950", desc: "Understands the fundamentals through hands-on labs and coursework." },
  learning: { dot: "bg-slate-500", glow: "dot-glow-gray", text: "text-slate-400", label: "Currently learning", code: "NEW", chipBg: "bg-slate-500", chipText: "text-white", desc: "Just getting started — actively studying this right now." },
};

const SKILLS = [
  {
    category: "Software",
    blurb: "Full-stack web, Python, Lua, databases",
    icon: Code2,
    items: [
      { name: "JavaScript", level: "working", abbr: "JS" , icon: asset_9fd9590f },
      { name: "HTML", level: "working", abbr: "HTML" , icon: asset_84111716 },
      { name: "CSS", level: "working", abbr: "CSS" , icon: asset_96c75af1 },
      { name: "React", level: "working", abbr: "JSX" , icon: asset_b5acca38 },
      { name: "Tailwind CSS", level: "working", abbr: "TW" , icon: asset_12b1b727 },
      { name: "Python", level: "working", abbr: "PY" , icon: asset_2567e649 },
      { name: "Lua (Roblox)", level: "working", abbr: "LUA" , icon: asset_dc866c64 },
      { name: "Git", level: "working", abbr: "GIT", icon: asset_e9ee8d5e },
      { name: "GitHub", level: "working", abbr: "GH", icon: asset_44876619 },
      { name: "VS Code", level: "working", abbr: "VS", icon: asset_3c66e1fc },
      { name: "Microsoft SQL Server", level: "basic", abbr: "MS", icon: asset_247d2abe },
      { name: "Firebase / Firestore", level: "basic", abbr: "FB" , icon: asset_83b2b79f },
      { name: "SQL", level: "basic", abbr: "SQL" , icon: asset_b5f6c886 },
      { name: "MySQL", level: "basic", abbr: "My" , icon: asset_b1aa8886 },
      { name: "PostgreSQL", level: "learning", abbr: "PG" , icon: asset_c5fca167 },
      { name: "R", level: "learning", abbr: "R" , icon: asset_5994d1fb },
      { name: "Docker", level: "learning", abbr: "DKR" , icon: asset_56bd5b63 },
      { name: "Vite", level: "working", abbr: "VITE", icon: "https://cdn.simpleicons.org/vite" },
      { name: "Node.js", level: "basic", abbr: "NODE", icon: "https://cdn.simpleicons.org/nodedotjs" },
      { name: "Express", level: "basic", abbr: "EXP", icon: "https://cdn.simpleicons.org/express" },
      { name: "SQLite", level: "basic", abbr: "SQLT", icon: "https://cdn.simpleicons.org/sqlite" },
      { name: "Progressive Web Apps (PWA)", level: "basic", abbr: "PWA", icon: "https://cdn.simpleicons.org/pwa" },
      { name: "OCR (Tesseract.js)", level: "learning", abbr: "OCR" },
      { name: "Local AI with Ollama", level: "learning", abbr: "AI", icon: "https://cdn.simpleicons.org/ollama" },
      { name: "REST API Integration", level: "basic", abbr: "API" },
    ],
  },
  {
    category: "Networking & IT",
    blurb: "Subnetting, VLANs, monitoring, IT support",
    icon: Network,
    items: [
      { name: "Cisco Packet Tracer", level: "working", abbr: "CPT", icon: asset_a8e20bfa },
      { name: "Subnetting / VLSM", level: "working", abbr: "VLSM" },
      { name: "Python Network Scripting", level: "working", abbr: "PY" },
      { name: "Hardware & Software Troubleshooting", level: "working", abbr: "H/S" },
      { name: "Command-Line Administration", level: "working", abbr: "CLI" },
      { name: "VLANs & Inter-VLAN Routing", level: "basic", abbr: "VLAN" },
      { name: "Cisco IOS CLI", level: "basic", abbr: "IOS" },
      { name: "TCP/IP, DNS & DHCP", level: "basic", abbr: "TCP" },
      { name: "Network Security Fundamentals", level: "basic", abbr: "SEC" },
      { name: "Windows Server Basics", level: "basic", abbr: "WIN" },
      { name: "Linux (WSL)", level: "learning", abbr: "WSL" },
    ],
  },
];

const SKILL_LEGEND = ["core", "working", "basic", "learning"].filter((lvl) =>
  SKILLS.some((group) => group.items.some((item) => item.level === lvl))
);

const RFID_PROJECT = {
  title: "RFID-Based Automatic Parking Slot System",
  eyebrow: "Hardware + Software",
  meta: "Group Project · Academic · March 2024",
  status: "Completed",
  description: [
    "A team-built parking system that reads ",
    { hl: "RFID" },
    " cards to show real-time slot availability, alert attendants when a slot is chosen, and handle ",
    { hl: "automated billing" },
    " — hardware, a VB.NET app, and a SQL database working as one flow.",
  ],
  highlights: [
    "RFID reader integrated with a custom VB.NET application",
    "SQL database tracking slot occupancy in real time",
    "Complete flow demonstrated: ID scan, slot selection, payment",
  ],
  tags: ["VB.NET", "SQL", "RFID", "Hardware Integration"],
  github: "https://github.com/EngrPrenz/Robinson-s-Mall-RFID-Parking-System",
  thumbnail: asset_06a80c2f,
};

const LAB_CATEGORIES = ["All", "Monitoring", "Hardware"];

const LABS = [
  {
    title: "Home Network Device Monitor",
    eyebrow: "Python Network Monitor",
    meta: "Independent Project · 2026",
    category: "Monitoring",
    status: "Completed",
    description: [
      "A single-file Python monitor (standard library only) that sweeps the whole home subnet with ",
      { hl: "parallel pings" },
      ", discovers every connected device, and raises a ",
      { hl: "stranger alarm" },
      " on Telegram/Discord when an unapproved device joins.",
    ],
    highlights: [
      "Device-approval system with real-time Telegram/Discord alerts",
      "Internet-outage detector that separates ISP failures from local ones",
      "SQLite history of uptime, ping, packet loss, and jitter per device",
    ],
    tags: ["Python", "SQLite", "Ping Sweep", "Telegram/Discord Alerts"],
    github: "https://github.com/arkyxo/home-network-monitor",
    thumbnail: asset_b2fc0f05,
  },
  { ...RFID_PROJECT, category: "Hardware" },
];

const STATUS_STYLES = {
  Completed: { dot: "bg-red-400", text: "text-red-300", label: "COMPLETED" },
  "In Progress": { dot: "bg-amber-400", text: "text-amber-300", label: "IN PROGRESS" },
  Planned: { dot: "bg-slate-500", text: "text-slate-400", label: "PLANNED" },
};

const WEBAPP_CATEGORIES = ["All", "Freelance", "Academic", "Thesis", "Hackathon"];

const WEB_APPS_LIST = [
  {
    title: "CineLookUp",
    eyebrow: "Movie Browsing App",
    meta: "Group Project · Academic · Apr 2024",
    category: "Academic",
    status: "Completed",
    description: [
      "A ",
      { hl: "group academic project" },
      " centered on ",
      { hl: "API integration" },
      " — pulling live movie listings, details, and search results from an external data source instead of a static database.",
    ],
    highlights: [
      "Live movie data pulled from a third-party API",
      "Search and browse interface for exploring titles",
      "Built and delivered as a team academic project",
    ],
    tags: ["React", "Vite", "JavaScript", "HTML", "Firebase", "TMDb API"],
    github: "https://github.com/arkyxo/CineLookUp",
    docs: "https://drive.google.com/file/d/1XKAlyra-MNK6gRcbQP-T2tMv4SkDx6T6/view?usp=drive_link",
    privateDemo: true,
    thumbnail: asset_f42ac97a,
  },
  {
    title: "Salo Sa Antipolo",
    eyebrow: "Restaurant POS System",
    meta: "Client Project · Jan 2026",
    category: "Freelance",
    status: "Completed",
    description: [
      "A restaurant point-of-sale web app built on ",
      { hl: "Firebase" },
      ": real-time order management, a ",
      { hl: "revenue dashboard" },
      ", standardized ",
      { hl: "VAT and service-charge billing" },
      " logic, and ",
      { hl: "category-based ordering" },
      " rules.",
    ],
    highlights: [
      "Real-time order sync across multiple terminals via Firestore",
      "Daily / weekly / monthly revenue charts",
      "Standardized 6% service charge and VAT computation",
      "Delivered with technical documentation, client training, and a formal handover for production use",
    ],
    tags: ["HTML", "CSS", "JavaScript", "Python", "React", "Firebase", "Tailwind"],
    github: "https://github.com/EngrPrenz/Salo-sa-SD",
    docs: "#",
    privateDemo: true,
    thumbnail: asset_3e6b708c,
  },
  {
    title: "URSAC Simulation Academy",
    eyebrow: "Roblox Game · Thesis",
    meta: "Thesis Project · Academic · Feb 2026",
    category: "Thesis",
    status: "Completed",
    description: [
      "A full Roblox game simulating a complete ",
      { hl: "university journey" },
      " — quest system, player interactions, and education progression built in ",
      { hl: "Lua" },
      ". Published publicly and maintained with weekly bug-fix updates driven by player reports.",
    ],
    highlights: [
      "Built both the in-game environments and the Lua quest/progression logic",
      "Published publicly and updated weekly from player feedback",
    ],
    tags: ["Lua", "Roblox Studio", "Game Design"],
    github: null,
    view: "https://www.roblox.com/games/133137084199842/URSAC-Simulator-Academy",
    thumbnail: asset_9e429332,
  },
  {
    title: "KuryenteWatch",
    eyebrow: "Household Energy App · Hackathon",
    meta: "Group Project · AppBuilders PH Hackathon · Oct 2026",
    category: "Hackathon",
    status: "Completed",
    description: [
      "A household electricity tracker built in 24 hours. Snap a photo of your ",
      { hl: "electric meter" },
      " or an appliance label and it reads the numbers with ",
      { hl: "OCR" },
      ", estimates your bill and appliance usage, flags ",
      { hl: "unusual usage jumps" },
      ", and answers energy questions through a local AI assistant. Works offline, and your data stays on your device.",
    ],
    highlights: [
      "Meter and appliance-label photo reading with OCR",
      "Bill estimates, usage history and usage-jump alerts",
      "Local AI Energy Assistant (Ollama) with a built-in offline fallback",
      "Installable PWA that works without internet",
    ],
    tags: ["React", "Vite", "Node.js", "Express", "SQLite", "PWA", "Ollama"],
    github: "https://github.com/dioxaaa/Kuryente-Watch-AppBuilder-Hackaton",
    view: "https://dist-web-ddfpdfbm.devinapps.com",
    thumbnail: kuryenteThumb,
  },
];

const SOFTWARE_ORDER = ["URSAC Simulation Academy", "Salo Sa Antipolo", "KuryenteWatch", "CineLookUp"];
const WEB_APPS = [...WEB_APPS_LIST].sort((a, b) => SOFTWARE_ORDER.indexOf(a.title) - SOFTWARE_ORDER.indexOf(b.title));

const yearOf = (p) => (p.meta && (p.meta.match(/(\d{4})/) || [])[1]) || "—";
const contextOf = (p) => (p.meta ? p.meta.split(" · ")[0] : p.category || "Lab");
const chunk = (arr, size) => {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
};
const LOGO_SKILLS = SKILLS.flatMap((g) => g.items).filter((item) => item.icon);
const ALL_PROJECTS = [...WEB_APPS, ...LABS]
  .filter((p, i, arr) => arr.findIndex((q) => q.title === p.title) === i)
  .sort((a, b) => (+yearOf(b) || 0) - (+yearOf(a) || 0));
const trackOf = (title) => {
  const inSoftware = WEB_APPS.some((p) => p.title === title);
  const inNetwork = LABS.some((p) => p.title === title);
  if (inSoftware && inNetwork) return "Both";
  return inSoftware ? "Software" : "Networking & IT";
};
const taglineOf = (p) => (p.eyebrow ? p.eyebrow.split(" · ")[0] : p.meta);
const slugOf = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const PROJECT_BY_SLUG = Object.fromEntries(ALL_PROJECTS.map((p) => [slugOf(p.title), p]));

const CERTIFICATIONS = [
  {
    image: asset_54b305ed,
    name: "Network Security",
    org: "Google",
    group: "Networking & IT",
    category: "Security",
    date: "August 4, 2026",
    expires: null,
    credentialId: "YIFFE8OFQH60",
    status: "Earned",
    skills: ["Network Architecture", "Intrusion Detection", "Security Hardening", "Incident Response", "Network Traffic Analysis", "Google SecOps"],
    verifyLabel: "Verify",
    verifyUrl: "https://coursera.org/verify/specialization/YIFFE8OFQH60",
    certificateUrl: "https://coursera.org/verify/specialization/YIFFE8OFQH60",
  },
  {
    image: amaLogo,
    name: "Cyber Threat Intelligence Analysis (CTIA) Level III",
    org: "AMA University · TESDA-recognized · 92-hour training",
    group: "Networking & IT",
    category: "Cybersecurity",
    date: "Upcoming",
    expires: null,
    credentialId: null,
    status: "Upcoming",
    skills: ["Cyber Threat Intelligence", "Threat Analysis", "Digital Defense"],
  },
];

const HACKATHON_LINKEDIN = "https://lnkd.in/p/ghcHxX-M";
const KURYENTE_GITHUB = "https://github.com/dioxaaa/Kuryente-Watch-AppBuilder-Hackaton";

const FEATURED_ACTIVITY = {
  label: "Latest",
  date: "October 9 — 10, 2026",
  title: "AppBuilders PH Hackathon",
  location: "Cyberzone, SM Makati",
  description:
    "24 hours to build, ship, and demo with AI. My team built KuryenteWatch, a local-first household electricity app, during the remote Build Day and pitched it through a video.",
  image: hackathonGroup,
  inset: hackathonStage,
  links: [
    { label: "Read my LinkedIn post", url: HACKATHON_LINKEDIN },
    { label: "See the project on GitHub", url: KURYENTE_GITHUB },
  ],
};

const EXPERIENCE_PATHWAYS = [
  { id: "hackathon", label: "Hackathon", caption: "Competitions & builds" },
  { id: "internship", label: "Internship", caption: "Industry training" },
  { id: "organization", label: "Organization", caption: "Student orgs" },
  { id: "work", label: "Work Experience", caption: "Jobs & programs" },
];

const PATHWAY_ICONS = { hackathon: Trophy, internship: GraduationCap, organization: Users, work: Briefcase };

const EXPERIENCE = [
  {
    company: "TechBizAcademy",
    pathway: "internship",
    position: "SOC Analyst Intern",
    logo: techbizLogo,
    duration: "Oct - Nov (240 Hours)",
    type: "Networking & IT · Internship",
    description: "",
  },
  {
    company: "AppBuilders PH Hackathon",
    pathway: "hackathon",
    position: "Hackathon",
    logo: appBuildersLogo,
    duration: "Oct 9 — 10, 2026",
    type: "Software · Competition",
    description:
      "Built KuryenteWatch with my team in a 24-hour build and pitched it through a video — a local-first household electricity app (React PWA, Express, SQLite) that reads meter and appliance-label photos with OCR, estimates bills and appliance usage, flags unusual usage jumps, and answers questions through an Energy Assistant that runs on a local Ollama model or fully offline.",
  },
  {
    company: "GCash Hackathon",
    pathway: "hackathon",
    position: "Hackathon",
    logo: asset_4ce99605,
    duration: "Sept 2026",
    type: "Software · Competition",
    description:
      "Built, designed and pitched an AI-powered concept that digitizes handwritten sales records for small business owners — extracting entries and producing basic profit/loss summaries — and presented a prototype to GCash judges with a team of classmates.",
  },
  {
    company: "Special Program for Employment of Students (DOLE)",
    pathway: "work",
    position: "SPES",
    logo: asset_11af5d6e,
    duration: "May 2026",
    type: "Networking & IT · Government Program",
    description:
      "Provided IT support and hardware troubleshooting, and handled data entry and digital filing for the department — all while studying Computer Engineering full-time.",
  },
  {
    company: "For Girls Who Build",
    pathway: "organization",
    position: "Member",
    logo: fgwbLogo,
    duration: "Oct 2026 — Present",
    type: "Organization · Member",
    description: "Accepted into the For Girls Who Build community in October 2026.",
  },
  {
    company: "Association of Concerned Computer Engineering Students (ACCESS)",
    pathway: "organization",
    position: "Technical Team",
    logo: asset_77ad849f,
    duration: "2023 — 2024",
    type: "Organization · Member",
    description: "Supported the technical operations and activities of the organization.",
  },
];

const EDUCATION = [
  {
    level: "Bachelor's Degree",
    program: "BS in Computer Engineering",
    institution: "University of Rizal System — Antipolo Campus",
    duration: "2023 — 2027",
    logo: asset_39871438,
  },
  {
    level: "Senior High School",
    program: "General Academic Strand (GAS)",
    institution: "San Juan National High School",
    duration: "2021 — 2023",
    logo: asset_96851f8e,
  },
];

const HERO_SIDES = [
  {
    id: "webapps",
    word: "Websites",
    tail: "on One Side.",
    label: "Software",
    count: WEB_APPS.length,
  },
  {
    id: "labs",
    word: "Networks",
    tail: "on the Other.",
    label: "Networking",
    count: LABS.length,
  },
];

const theme = {
  dark: {
    bg: "bg-black",
    bgSoft: "bg-neutral-900",
    surface: "bg-neutral-900/60",
    surfaceSolid: "bg-neutral-900",
    border: "border-neutral-800",
    text: "text-neutral-100",
    textMuted: "text-neutral-400",
    textFaint: "text-neutral-500",
    accent: "text-red-400",
    accentBg: "bg-red-400",
    navBg: "bg-black/70",
    ring: "ring-neutral-800",
  },
  light: {
    bg: "bg-slate-50",
    bgSoft: "bg-white",
    surface: "bg-white",
    surfaceSolid: "bg-white",
    border: "border-slate-200",
    text: "text-slate-900",
    textMuted: "text-slate-600",
    textFaint: "text-slate-400",
    accent: "text-red-600",
    accentBg: "bg-red-500",
    navBg: "bg-white/80",
    ring: "ring-slate-200",
  },
};

function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const h = document.documentElement;
        const scrollTop = h.scrollTop || document.body.scrollTop;
        const scrollHeight = (h.scrollHeight || document.body.scrollHeight) - h.clientHeight;
        setProgress(scrollHeight > 0 ? Math.min(1, scrollTop / scrollHeight) : 0);
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return progress;
}

function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function Reveal({ children, className = "", delay = 0 }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function NetworkCanvas({ isDark }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d");
    const reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width, height, dpr;
    let nodes = [];
    let packets = [];
    let rafId;

    const NODE_COUNT_BASE = 42;
    const MAX_DIST = 170;

    function resize() {
      width = container.clientWidth;
      height = container.clientHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function init() {
      resize();
      const count = isDark
        ? Math.round(Math.min(NODE_COUNT_BASE * 1.6, Math.max(22, (width * height) / 22000)))
        : Math.round(Math.min(NODE_COUNT_BASE * 0.7, Math.max(12, (width * height) / 50000)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.4 + 1.6,
      }));
      packets = [];
    }

    function maybeSpawnPacket(edges) {
      if (edges.length === 0) return;
      if (Math.random() < 0.02 && packets.length < 10) {
        const e = edges[Math.floor(Math.random() * edges.length)];
        packets.push({ a: e.a, b: e.b, t: 0, speed: 0.006 + Math.random() * 0.006 });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);
      const lineColor = isDark ? "45, 212, 191" : "100, 116, 139";
      const nodeColor = isDark ? "163, 163, 163" : "100, 116, 139";
      const packetColor = isDark ? "251, 191, 36" : "217, 119, 6";

      const edges = [];
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const opacity = (1 - dist / MAX_DIST) * (isDark ? 0.75 : 0.45);
            ctx.strokeStyle = `rgba(${lineColor}, ${opacity})`;
            ctx.lineWidth = isDark ? 1 : 0.75;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
            edges.push({ a, b });
          }
        }
      }

      if (!reduced && isDark) maybeSpawnPacket(edges);

      packets = packets.filter((p) => p.t <= 1);
      for (const p of packets) {
        p.t += p.speed;
        const x = p.a.x + (p.b.x - p.a.x) * p.t;
        const y = p.a.y + (p.b.y - p.a.y) * p.t;
        ctx.beginPath();
        ctx.arc(x, y, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${packetColor}, 0.9)`;
        ctx.shadowColor = `rgba(${packetColor}, 0.8)`;
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, isDark ? n.r : n.r * 0.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${nodeColor}, ${isDark ? 0.95 : 0.55})`;
        ctx.fill();
      }
    }

    function loop() {
      draw();
      rafId = requestAnimationFrame(loop);
    }

    init();
    if (reduced) {
      draw();
    } else {
      loop();
    }

    const ro = new ResizeObserver(() => {
      init();
    });
    ro.observe(container);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, [isDark]);

  return (
    <div ref={containerRef} aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  );
}

function StatusTag({ status, styles }) {
  const s = styles[status] || styles[Object.keys(styles)[0]];
  return (
    <span className={`inline-flex items-center gap-1.5 font-mono text-xs tracking-wider ${s.text}`}>
      {s.label}
    </span>
  );
}

function renderDescription(description, t) {
  if (typeof description === "string") return description;
  return description.map((part, i) =>
    typeof part === "string" ? (
      <React.Fragment key={i}>{part}</React.Fragment>
    ) : (
      <span key={i} className="font-medium">
        {part.hl}
      </span>
    )
  );
}

function SectionHeading({ eyebrow, title, subtitle, caption, icon: Icon, t }) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
      <p className={`inline-flex items-center gap-2 font-mono text-xs tracking-widest ${t.accent} mb-3`}>
        {Icon && <Icon size={13} />} {eyebrow}
      </p>
      <h2 className={`font-display text-3xl sm:text-4xl font-bold ${t.text} mb-2`}>{title}</h2>
      {subtitle && <p className={`font-body text-sm sm:text-base ${t.textMuted} mx-auto`}>{subtitle}</p>}
      {caption && <p className={`font-mono text-xs ${t.textFaint} mt-3`}>{caption}</p>}
    </div>
  );
}

function ActivityLink({ link, t, isDark }) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noreferrer"
      className={`group inline-flex items-center gap-2 border-b pb-1.5 font-body text-sm font-medium ${t.text} ${isDark ? "border-neutral-600" : "border-slate-300"} hover:border-red-400 hover:text-red-400 transition-colors`}
    >
      {link.label}
      <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  );
}

function LatestActivities({ t, isDark }) {
  const f = FEATURED_ACTIVITY;
  const [swapped, setSwapped] = useState(false);
  const photos = [
    { src: f.image, alt: `${f.title} group photo`, position: "object-[center_75%]" },
    { src: f.inset, alt: `${f.title} stage`, position: "object-center" },
  ];
  const [main, small] = swapped ? [photos[1], photos[0]] : photos;
  return (
    <section id="activities" className="max-w-6xl mx-auto px-5 sm:px-8 py-24">
      <SectionHeading eyebrow="03 · OUT IN THE COMMUNITY" title="Latest Activities" caption="What I've been building and where I've been." icon={Trophy} t={t} />

      <Reveal>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative pb-10 pr-8 sm:pb-14 sm:pr-14">
            <img src={main.src} alt={main.alt} className={`aspect-[4/3] w-full rounded-3xl object-cover ${main.position} border ${t.border}`} />
            {f.inset && (
              <button
                type="button"
                onClick={() => setSwapped((v) => !v)}
                aria-label="Swap photos"
                title="Swap photos"
                className={`group absolute bottom-0 right-0 w-32 sm:w-44 overflow-hidden rounded-2xl ring-4 ${isDark ? "ring-black" : "ring-slate-50"} transition-transform hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-red-400`}
              >
                <img src={small.src} alt={small.alt} className={`block aspect-[4/3] w-full object-cover ${small.position}`} />
                <span className="absolute bottom-2 left-2 rounded-full bg-black/60 p-1.5 text-white transition-colors group-hover:text-red-400">
                  <ArrowLeftRight size={12} />
                </span>
              </button>
            )}
          </div>

          <div>
            <p className={`font-mono text-xs tracking-wide ${t.textMuted}`}>
              <span className={t.accent}>{f.label}</span> / {f.date}
            </p>
            <h3 className={`font-display font-bold text-3xl sm:text-4xl tracking-tight leading-tight ${t.text} mt-4`}>{f.title}</h3>
            <p className={`inline-flex items-center gap-1.5 font-body font-semibold text-base ${t.accent} mt-3`}>
              <MapPin size={15} /> {f.location}
            </p>
            <p className={`font-body text-base leading-relaxed ${t.textMuted} mt-5 max-w-lg`}>{f.description}</p>
            <div className="flex flex-wrap gap-x-8 gap-y-4 mt-8">
              {f.links.map((link) => (
                <ActivityLink key={link.label} link={link} t={t} isDark={isDark} />
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

const DOT_RADIUS_BY_LEVEL = [1.4, 2.2, 3, 3.8, 4.6];
const DOT_COLOR_BY_LEVEL = ["#fecaca", "#fca5a5", "#f87171", "#dc2626", "#7f1d1d"];

function GithubActivity({ t, isDark }) {
  const [status, setStatus] = useState("loading");
  const [weeks, setWeeks] = useState([]);
  const [stats, setStats] = useState({ total: 0, activeDays: 0, longest: 0, current: 0 });
  const scrollRef = useRef(null);

  useEffect(() => {
    let cancelled = false;
    fetch(`https://github-contributions-api.jogruber.de/v4/${PROFILE.githubUsername}?y=last`)
      .then((res) => {
        if (!res.ok) throw new Error("Request failed");
        return res.json();
      })
      .then((json) => {
        if (cancelled || !json || !Array.isArray(json.contributions)) throw new Error("Bad payload");
        const days = json.contributions;
        const total = days.reduce((acc, d) => acc + (d.count || 0), 0);
        const activeDays = days.filter((d) => d.count > 0).length;

        let longest = 0, run = 0;
        days.forEach((d) => {
          run = d.count > 0 ? run + 1 : 0;
          if (run > longest) longest = run;
        });
        let current = 0;
        for (let i = days.length - 1; i >= 0; i--) {
          if (days[i].count > 0) current++;
          else if (i === days.length - 1) continue;
          else break;
        }

        const cols = [];
        let currentWeek = new Array(7).fill(null);
        days.forEach((day) => {
          const dow = new Date(day.date + "T00:00:00").getDay();
          currentWeek[dow] = day;
          if (dow === 6) {
            cols.push(currentWeek);
            currentWeek = new Array(7).fill(null);
          }
        });
        if (currentWeek.some((d) => d !== null)) cols.push(currentWeek);

        if (!cancelled) {
          setWeeks(cols);
          setStats({ total, activeDays, longest, current });
          setStatus("ready");
        }
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (status === "ready" && scrollRef.current) {
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth;
    }
  }, [status]);

  const cell = 14;
  const topPad = 20;
  const width = weeks.length * cell;
  const height = topPad + 7 * cell;
  const emptyFill = isDark ? "#262626" : "#e2e8f0";

  const monthLabels = [];
  let lastMonth = -1;
  weeks.forEach((week, wi) => {
    const first = week.find((d) => d);
    if (!first) return;
    const m = new Date(first.date + "T00:00:00").getMonth();
    if (m !== lastMonth) {
      if (wi < weeks.length - 2 || lastMonth === -1) {
        monthLabels.push({ wi, label: new Date(first.date + "T00:00:00").toLocaleString("en", { month: "short" }) });
      }
      lastMonth = m;
    }
  });

  const statTiles = [
    { label: "Contributions", value: stats.total.toLocaleString() },
    { label: "Active days", value: stats.activeDays.toLocaleString() },
    { label: "Longest streak", value: `${stats.longest}d` },
  ];

  return (
    <section id="github-activity" className="max-w-6xl mx-auto px-5 sm:px-8 py-24">
      <Reveal>
        <div className="text-center mb-8 sm:mb-10">
          <p className={`inline-flex items-center gap-2 font-mono text-xs tracking-widest ${t.accent} mb-3`}>
            <Github size={13} /> 07 · GITHUB
          </p>
          <h2 className={`font-display text-3xl sm:text-4xl font-bold ${t.text}`}>Github Activity</h2>
          <p className={`font-body text-sm ${t.textFaint} mt-3`}>
            Live contribution data pulled directly from GitHub.
          </p>
        </div>
      </Reveal>

      <Reveal>
        <div className={`relative overflow-hidden rounded-3xl border ${t.border} ${t.surface} p-5 sm:p-8 shadow-xl ${isDark ? "shadow-black/20" : "shadow-slate-200/70"}`}>
          <div className="relative">
            <div className="flex items-center justify-between gap-4">
              <div className="flex min-w-0 items-center gap-3">
                <img
                  src={asset_a1c55936}
                  alt={`${PROFILE.githubUsername} avatar`}
                  className={`h-11 w-11 shrink-0 rounded-2xl object-cover ring-1 ${isDark ? "ring-neutral-700" : "ring-slate-200"}`}
                />
                <div className="min-w-0">
                  <p className={`font-display text-base sm:text-lg font-semibold leading-tight truncate ${t.text}`}>
                    @{PROFILE.githubUsername}
                  </p>
                  <p className={`font-body text-xs ${t.textFaint} leading-tight mt-0.5`}>Last 12 months</p>
                </div>
              </div>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className={`shrink-0 inline-flex items-center gap-1.5 rounded-full border ${t.border} px-3.5 py-2 font-body text-xs font-medium ${t.text} transition-all duration-300 hover:border-red-400/50 hover:text-red-400 hover:-translate-y-0.5`}
              >
                <span className="hidden sm:inline">View profile</span>
                <span className="sm:hidden">Profile</span>
                <ExternalLink size={12} />
              </a>
            </div>

            {status === "loading" && (
              <div className="mt-6 animate-pulse space-y-4" aria-label="Loading contribution data">
                <div className="grid grid-cols-3 gap-3">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className={`h-[74px] rounded-2xl ${isDark ? "bg-neutral-800/60" : "bg-slate-100"}`} />
                  ))}
                </div>
                <div className={`h-36 rounded-2xl ${isDark ? "bg-neutral-800/60" : "bg-slate-100"}`} />
              </div>
            )}

            {status === "error" && (
              <p className={`mt-6 rounded-2xl border border-dashed ${t.border} px-4 py-6 text-center font-body text-sm ${t.textMuted}`}>
                Couldn't load contribution data right now. You can view it directly on{" "}
                <a href={PROFILE.github} target="_blank" rel="noreferrer" className="text-red-400 hover:underline">
                  github.com
                </a>
                .
              </p>
            )}

            {status === "ready" && (
              <>
                <div className="mt-6 grid grid-cols-3 gap-2.5 sm:gap-3">
                  {statTiles.map((s) => (
                    <div
                      key={s.label}
                      className={`rounded-2xl border ${t.border} ${isDark ? "bg-black/40" : "bg-slate-50/80"} px-3 py-3 sm:px-4 sm:py-4`}
                    >
                      <p className={`font-display text-xl sm:text-3xl font-bold leading-none ${t.text}`}>{s.value}</p>
                      <p className={`font-body text-[10px] sm:text-xs ${t.textFaint} mt-1.5 sm:mt-2 leading-tight`}>{s.label}</p>
                    </div>
                  ))}
                </div>

                <div className={`mt-4 rounded-2xl border ${t.border} ${isDark ? "bg-black/40" : "bg-slate-50/80"} p-3 sm:p-5`}>
                  <div ref={scrollRef} className="overflow-x-auto pb-1">
                    <svg
                      viewBox={`0 0 ${width} ${height}`}
                      style={{ minWidth: `${width}px`, height: "auto" }}
                      className="block"
                    >
                      {monthLabels.map((m) => (
                        <text
                          key={m.wi}
                          x={m.wi * cell}
                          y={11}
                          fontSize="10"
                          fontFamily="Inter, system-ui, sans-serif"
                          fill={isDark ? "#737373" : "#94a3b8"}
                        >
                          {m.label}
                        </text>
                      ))}
                      {weeks.map((week, wi) =>
                        week.map((day, di) => {
                          if (!day) return null;
                          const level = day.level ?? 0;
                          const fill = level === 0 ? emptyFill : DOT_COLOR_BY_LEVEL[level];
                          return (
                            <rect
                              key={`${wi}-${di}`}
                              x={wi * cell + 1.5}
                              y={topPad + di * cell + 1.5}
                              width={cell - 3}
                              height={cell - 3}
                              rx={3.5}
                              fill={fill}
                              opacity={level === 0 ? 0.6 : 1}
                            >
                              <title>{`${day.count} contributions on ${day.date}`}</title>
                            </rect>
                          );
                        })
                      )}
                    </svg>
                  </div>

                  <div className={`mt-3 flex items-center justify-between gap-3 font-body text-[11px] ${t.textFaint}`}>
                    <span>{stats.current > 0 ? `${stats.current}-day current streak` : "Keep building"}</span>
                    <span className="inline-flex items-center gap-1.5">
                      Less
                      {[emptyFill, ...DOT_COLOR_BY_LEVEL.slice(1)].map((c, i) => (
                        <span key={i} className="h-2.5 w-2.5 rounded-[3px]" style={{ background: c }} />
                      ))}
                      More
                    </span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function eduProgress(duration) {
  const m = String(duration).match(/(\d{4})\D+(\d{4})/);
  if (!m) return { done: true, total: 1, elapsed: 1, startY: "", endY: "" };
  const start = new Date(+m[1], 5, 1).getTime();
  const end = new Date(+m[2], 3, 30).getTime();
  const total = Math.max(1, +m[2] - +m[1]);
  const elapsed = Math.max(0, Math.min(total, (Date.now() - start) / (365.25 * 864e5)));
  return { done: Date.now() >= end, total, elapsed, startY: m[1], endY: m[2] };
}
const initialsOf = (name) =>
  name.replace(/[—–-].*$/, "").split(" ").filter((w) => /^[A-Z]/.test(w)).slice(0, 3).map((w) => w[0]).join("");

function ExpDetails({ id, open, onToggle, description, t, light = false, onWhite = false }) {
  return (
    <>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={id}
        className={`mt-3 inline-flex items-center gap-1.5 font-mono text-xs tracking-wide ${onWhite ? "text-red-600" : light ? "text-red-300" : t.accent} hover:opacity-80 transition-opacity`}
      >
        What did I do
        <ChevronDown size={14} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <div id={id} className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <p className={`font-body text-sm leading-relaxed ${onWhite ? "text-slate-600" : light ? "text-white/70" : t.textMuted} pt-3`}>
            {description || "Details coming soon."}
          </p>
        </div>
      </div>
    </>
  );
}

function ExperienceSplit({ t, isDark, openExp, setOpenExp }) {
  const latest = EXPERIENCE[0];
  const firstPath = EXPERIENCE_PATHWAYS.some((p) => p.id === latest?.pathway) ? latest.pathway : EXPERIENCE_PATHWAYS[0].id;
  const [openPath, setOpenPath] = useState(firstPath);
  const [activePath, setActivePath] = useState(firstPath);
  const [selected, setSelected] = useState({});

  const active = EXPERIENCE_PATHWAYS.find((p) => p.id === activePath);
  const ActiveIcon = PATHWAY_ICONS[active.id] || Briefcase;
  const activeEntries = EXPERIENCE.filter((e) => e.pathway === active.id);
  const mainIdx = Math.min(selected[active.id] || 0, Math.max(activeEntries.length - 1, 0));
  const main = activeEntries[mainIdx];
  const detailsKey = `split-${active.id}-${mainIdx}`;

  const togglePath = (id) => {
    if (openPath === id) {
      setOpenPath(null);
      return;
    }
    setOpenPath(id);
    setActivePath(id);
    setOpenExp(null);
  };
  const pickEntry = (pathId, idx) => {
    setActivePath(pathId);
    setSelected((prev) => ({ ...prev, [pathId]: idx }));
    setOpenExp(null);
  };

  return (
    <div className="hidden md:grid grid-cols-5 gap-5 lg:gap-6 items-start">
      <div className="col-span-2 space-y-3">
        {EXPERIENCE_PATHWAYS.map((path, pi) => {
          const PathIcon = PATHWAY_ICONS[path.id] || Briefcase;
          const entries = EXPERIENCE.filter((e) => e.pathway === path.id);
          const isOpen = openPath === path.id;
          const isActive = activePath === path.id;
          return (
            <Reveal key={path.id} delay={pi * 70}>
              <div
                className={`rounded-2xl border ${isActive ? "border-red-400/40" : t.border} ${t.surface} transition-colors duration-300`}
              >
                <button
                  type="button"
                  onClick={() => togglePath(path.id)}
                  aria-expanded={isOpen}
                  aria-controls={`exp-split-${path.id}`}
                  className="w-full text-left p-4 flex items-center gap-3 rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400/60"
                >
                  <div
                    className={`h-10 w-10 shrink-0 rounded-xl border flex items-center justify-center transition-colors ${
                      isActive ? `border-red-400 ${t.accent}` : `${t.border} ${t.textMuted}`
                    }`}
                  >
                    <PathIcon size={18} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className={`font-mono text-[10px] tracking-[0.2em] uppercase ${t.accent}`}>{path.caption}</p>
                    <h3 className="font-display font-semibold text-base leading-tight">{path.label}</h3>
                  </div>
                  <span className={`shrink-0 rounded-full border ${t.border} px-2 py-0.5 font-mono text-[10px] ${t.textMuted}`}>
                    {String(entries.length).padStart(2, "0")}
                  </span>
                  <ChevronDown size={18} className={`shrink-0 ${t.textMuted} transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                </button>

                <div
                  id={`exp-split-${path.id}`}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="overflow-hidden">
                    <div className="px-3 pb-3 space-y-1">
                      {entries.length === 0 && (
                        <p className={`mx-1 rounded-xl border border-dashed ${t.border} p-3 font-mono text-xs ${t.textFaint}`}>
                          Next stop — coming soon.
                        </p>
                      )}
                      {entries.map((exp, idx) => {
                        const current = isActive && idx === mainIdx;
                        return (
                          <button
                            key={`${exp.company}-${idx}`}
                            type="button"
                            onClick={() => pickEntry(path.id, idx)}
                            aria-current={current ? "true" : undefined}
                            className={`relative w-full text-left flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400/60 ${
                              current ? (isDark ? "bg-neutral-900" : "bg-slate-100") : isDark ? "hover:bg-white/5" : "hover:bg-slate-50"
                            }`}
                          >
                            <span className={`absolute left-0 top-2 bottom-2 w-0.5 rounded-full transition-colors ${current ? "bg-red-400" : "bg-transparent"}`} />
                            <span className={`h-9 w-9 shrink-0 overflow-hidden rounded-lg border ${t.border} ${isDark ? "bg-black/40" : "bg-white"} ${t.accent} flex items-center justify-center`}>
                              {exp.logo ? (
                                <img src={exp.logo} alt="" className="h-full w-full object-cover" />
                              ) : (
                                <PathIcon size={14} />
                              )}
                            </span>
                            <span className="min-w-0 flex-1">
                              <span className="block font-body text-sm font-medium leading-snug truncate">{exp.company}</span>
                              <span className={`block font-mono text-[11px] ${t.textFaint} truncate`}>
                                {exp.position} · {exp.duration}
                              </span>
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={120} className="col-span-3 md:sticky md:top-24">
        <div
          className={`relative overflow-hidden rounded-[28px] p-7 lg:p-10 flex flex-col transition-shadow duration-500 hover:shadow-2xl hover:shadow-red-500/20 ${
            `border ${t.border} ${t.surface} ${isDark ? "text-white" : "text-slate-900 shadow-xl shadow-slate-200/60"}`
          }`}
        >
          <ActiveIcon size={220} className={`pointer-events-none absolute -right-14 -bottom-16 ${!isDark ? "text-slate-900/[0.05]" : "text-white/[0.04]"}`} />

          <div className="relative flex flex-wrap items-center gap-3">
            {main && main === latest && (
              <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[11px] tracking-[0.18em] uppercase ${!isDark ? "border-red-500/60 text-red-600" : "border-red-400/60 text-red-400"}`}>
                Latest
              </span>
            )}
            <span className={`inline-flex items-center gap-1.5 font-mono text-[11px] tracking-[0.18em] uppercase ${!isDark ? "text-slate-500" : "text-white/50"}`}>
              <ActiveIcon size={13} /> {active.label}
            </span>
            {activeEntries.length > 1 && (
              <span className={`ml-auto font-mono text-[11px] ${!isDark ? "text-slate-400" : "text-white/40"}`}>
                {String(mainIdx + 1).padStart(2, "0")} / {String(activeEntries.length).padStart(2, "0")}
              </span>
            )}
          </div>

          {!main ? (
            <div key={active.id} className="bento-swap-in relative mt-6">
              <h3 className="font-display text-3xl lg:text-4xl font-bold leading-tight tracking-tight">{active.label}</h3>
              <p className={`mt-3 font-mono text-sm ${!isDark ? "text-slate-500" : "text-white/50"}`}>Next stop — coming soon.</p>
            </div>
          ) : (
            <div key={detailsKey} className="bento-swap-in relative mt-6">
              <div className={`h-16 w-16 lg:h-20 lg:w-20 overflow-hidden rounded-2xl border flex items-center justify-center ${!isDark ? "border-slate-200 bg-slate-50" : "border-white/10 bg-white/5"}`}>
                {main.logo ? (
                  <img src={main.logo} alt={`${main.company} logo`} className="h-full w-full object-cover" />
                ) : (
                  <ActiveIcon size={28} />
                )}
              </div>
              <p className={`mt-6 font-mono text-xs tracking-wider ${!isDark ? "text-slate-500" : "text-white/50"}`}>{main.duration}</p>
              <h3
                className={`mt-2 max-w-xl font-display font-bold leading-tight tracking-tight ${
                  main.company.length > 32 ? "text-xl lg:text-[1.75rem]" : "text-2xl lg:text-4xl"
                }`}
              >
                {main.company}
              </h3>
              <p className={`mt-2 font-body text-base ${!isDark ? "text-slate-600" : "text-white/80"}`}>{main.position}</p>
              {main.type && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {main.type.split("·").map((tag) => (
                    <span key={tag} className={`rounded-full border px-3 py-1 font-mono text-[11px] ${!isDark ? "border-slate-200 bg-slate-100 text-slate-600" : "border-white/10 bg-white/5 text-white/60"}`}>
                      {tag.trim()}
                    </span>
                  ))}
                </div>
              )}
              <ExpDetails
                id={`exp-${detailsKey}`}
                open={openExp === detailsKey}
                onToggle={() => setOpenExp(openExp === detailsKey ? null : detailsKey)}
                description={main.description}
                t={t}
                light={isDark}
                onWhite={!isDark}
              />
            </div>
          )}
        </div>
      </Reveal>
    </div>
  );
}

function EducationCard({ edu, t, isDark }) {
  const { done, total, elapsed, startY, endY } = eduProgress(edu.duration);
  const currentYear = Math.min(total, Math.floor(elapsed) + 1);
  return (
    <div
      className={`card-glow group relative overflow-hidden rounded-3xl border ${t.border} ${t.surface} p-7 sm:p-8 h-full flex flex-col hover:border-red-400/40`}
    >
      <span
        aria-hidden="true"
        className={`pointer-events-none select-none absolute -bottom-6 -right-2 font-display font-bold leading-none text-[8rem] sm:text-[9rem] ${isDark ? "text-white/[0.035]" : "text-slate-900/[0.04]"}`}
      >
        {endY}
      </span>

      <div className="relative flex items-start justify-between gap-4">
        <div className="h-20 w-20 shrink-0 rounded-2xl bg-white shadow-lg shadow-black/10 ring-1 ring-black/5 flex items-center justify-center overflow-hidden p-2">
          {edu.logo ? (
            <img src={edu.logo} alt={edu.institution} className="h-full w-full object-contain" />
          ) : (
            <span className="font-mono text-base font-bold tracking-wider text-red-500">{initialsOf(edu.institution)}</span>
          )}
        </div>
        <span
          className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 font-mono text-[10px] font-medium tracking-widest ${
            done ? `${isDark ? "bg-neutral-800 text-neutral-400" : "bg-slate-100 text-slate-500"}` : "border border-red-400/60 text-red-400"
          }`}
        >
          {done ? "GRADUATED" : "IN PROGRESS"}
        </span>
      </div>

      <div className="relative mt-7">
        <span className={`inline-block rounded-md px-2 py-0.5 font-mono text-[10px] tracking-widest ${isDark ? "bg-neutral-800 text-neutral-300" : "bg-slate-100 text-slate-600"}`}>
          {edu.level.toUpperCase()}
        </span>
        <h3 className="font-display font-bold text-2xl sm:text-[1.7rem] tracking-tight leading-tight mt-3">{edu.program}</h3>
        <p className={`font-body text-sm sm:text-base ${t.textMuted} mt-2`}>{edu.institution}</p>
        {edu.note && <p className={`font-body text-sm leading-relaxed ${t.textMuted} mt-4`}>{edu.note}</p>}
      </div>

      <div className="relative mt-auto pt-8">
        <div className="flex items-end justify-between mb-3">
          <p className={`font-display text-lg font-semibold ${t.text}`}>
            {startY}
            <span className={`mx-2 ${t.textFaint}`}>→</span>
            {endY}
          </p>
          <span className={`font-mono text-[11px] tracking-wide ${t.textFaint}`}>
            {done ? "Completed" : `Year ${currentYear} of ${total}`}
          </span>
        </div>
        <div className="flex gap-1.5">
          {Array.from({ length: total }).map((_, i) => {
            const fill = Math.max(0, Math.min(1, elapsed - i)) * 100;
            return (
              <div key={i} className={`h-1.5 flex-1 rounded-full overflow-hidden ${isDark ? "bg-neutral-800" : "bg-slate-200"}`}>
                <div className="h-full rounded-full bg-red-400" style={{ width: `${fill}%` }} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const ALL_SKILL_ITEMS = SKILLS.flatMap((g) => g.items);
const pickSkills = (names) => names.map((n) => ALL_SKILL_ITEMS.find((i) => i.name === n)).filter(Boolean);

const AI_TOOLING = [
  { name: "Claude", abbr: "CL", icon: "https://cdn.simpleicons.org/claude" },
  { name: "ChatGPT", abbr: "GPT", icon: asset_5fd2cb0e },
  { name: "Gemini", abbr: "GEM", icon: "https://cdn.simpleicons.org/googlegemini" },
];

const SKILL_GROUPS = [
  { title: "Languages", items: pickSkills(["JavaScript", "HTML", "CSS", "Python", "Lua (Roblox)", "SQL", "R"]) },
  { title: "Frameworks & Libraries", items: pickSkills(["React", "Tailwind CSS", "Vite", "Node.js", "Express", "Progressive Web Apps (PWA)", "OCR (Tesseract.js)"]) },
  { title: "Databases", items: pickSkills(["Firebase / Firestore", "MySQL", "PostgreSQL", "Microsoft SQL Server", "SQLite"]) },
  { title: "Platforms & Tooling", items: pickSkills(["Git", "GitHub", "VS Code", "Docker", "Cisco Packet Tracer"]) },
  { title: "AI Tooling", items: [...AI_TOOLING, ...pickSkills(["Local AI with Ollama"])] },
];
const SKILL_TOTAL = SKILL_GROUPS.reduce((n, g) => n + g.items.length, 0);

function SkillTile({ item, t, isDark }) {
  const [broken, setBroken] = useState(false);
  const showImg = item.icon && !broken;
  return (
    <div className="flex flex-col items-center text-center gap-2.5" title={item.name}>
      <div className="relative">
        <div className={`h-14 w-14 rounded-2xl border ${t.border} ${isDark ? "bg-black/40" : "bg-slate-50"} flex items-center justify-center p-1.5 card-glow`}>
          {showImg ? (
            <div className="h-full w-full rounded-lg bg-white flex items-center justify-center p-1 shadow-sm">
              <img src={item.icon} alt={item.name} onError={() => setBroken(true)} className="h-full w-full object-contain" />
            </div>
          ) : (
            <span className={`font-mono text-[11px] font-bold tracking-wider ${t.accent}`}>{item.abbr}</span>
          )}
        </div>
      </div>
      <span className={`font-body text-xs sm:text-[13px] leading-snug ${t.textMuted}`}>{item.name}</span>
    </div>
  );
}

function SkillsArchive({ t, onClose, isDark }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className={`fixed inset-0 z-[60] overflow-y-auto ${t.bg} ${t.text}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10 sm:py-14">
        <button onClick={onClose} className={`inline-flex items-center gap-2 font-mono text-xs ${t.textMuted} hover:text-red-400 transition-colors`}>
          <ArrowRight size={14} className="rotate-180" /> Back to portfolio
        </button>
        <h1 className="font-display font-bold text-4xl sm:text-6xl mt-12">Tech Stack</h1>
        <p className={`font-mono text-sm ${t.accent} mt-3`}>Everything I build, configure, and debug with.</p>

        <div className="mt-12 space-y-12">
          {SKILL_GROUPS.map((group) => (
            <section key={group.title}>
              <div className="flex items-center gap-4 mb-7">
                <h2 className={`font-mono text-xs tracking-[0.25em] uppercase ${t.textFaint}`}>{group.title}</h2>
                <span className={`h-px flex-1 border-t ${t.border}`} />
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-x-4 gap-y-8">
                {group.items.map((item) => (
                  <SkillTile key={item.name} item={item} t={t} isDark={isDark} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectArchive({ t, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className={`fixed inset-0 z-[60] overflow-y-auto ${t.bg} ${t.text}`}>
      <div className="max-w-3xl mx-auto px-5 sm:px-8 py-10 sm:py-14">
        <button onClick={onClose} className={`inline-flex items-center gap-2 text-sm ${t.textMuted} hover:text-red-400 transition-colors`}>
          <ArrowRight size={14} className="rotate-180" /> Back to portfolio
        </button>
        <h1 className="font-display font-bold text-3xl sm:text-5xl mt-10">Project Log</h1>
        <p className={`text-sm sm:text-base ${t.textMuted} mt-3`}>Everything I've built, wired up, and shipped.</p>

        <ul className={`mt-10 border-t ${t.border}`}>
          {ALL_PROJECTS.map((p) => (
            <li key={p.title} className={`border-b ${t.border}`}>
              <a href={`#${slugOf(p.title)}`} className="group flex items-center gap-4 sm:gap-5 py-4 sm:py-5">
                <div className={`shrink-0 w-16 h-11 sm:w-20 sm:h-14 rounded-lg border ${t.border} overflow-hidden ${t.surfaceSolid}`}>
                  {p.thumbnail && <img src={p.thumbnail} alt="" loading="lazy" className="h-full w-full object-cover" />}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-display font-semibold group-hover:text-red-400 transition-colors">{p.title}</span>
                    {p.category && (
                      <span className={`text-xs ${t.textFaint}`}>{p.category}</span>
                    )}
                  </div>
                  <p className={`text-sm ${t.textMuted} mt-1 leading-snug`}>{taglineOf(p)}</p>
                </div>
                <span className={`hidden sm:block shrink-0 text-sm ${t.textFaint}`}>{trackOf(p.title)}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ProjectDetail({ t, project: p, onBack }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onBack();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onBack]);

  const images = (p.gallery && p.gallery.length ? p.gallery : [p.thumbnail]).filter(Boolean);
  const [slide, setSlide] = useState(0);
  const idx = ALL_PROJECTS.indexOf(p);
  const next = ALL_PROJECTS[(idx + 1) % ALL_PROJECTS.length];
  const links = [
    hasLink(p.view) && { label: /roblox\.com/.test(p.view) ? "Play on Roblox" : "Live demo", href: p.view },
    hasLink(p.github) && { label: "GitHub", href: p.github },
    hasLink(p.docs) && { label: "Docs", href: p.docs },
  ].filter(Boolean);
  const navBtn = `h-10 w-10 rounded-full border ${t.border} flex items-center justify-center transition-colors hover:border-red-400 hover:text-red-400 disabled:opacity-30 disabled:pointer-events-none`;

  return (
    <div className={`fixed inset-0 z-[60] overflow-y-auto ${t.bg} ${t.text}`}>
      <div className="max-w-3xl mx-auto px-5 sm:px-8 py-10 sm:py-14">
        <a href="#archive" className={`inline-flex items-center gap-2 text-sm ${t.textMuted} hover:text-red-400 transition-colors`}>
          <ArrowRight size={14} className="rotate-180" /> All projects
        </a>
        <h1 className="font-display font-bold text-3xl sm:text-5xl mt-10">{p.title}</h1>
        <p className={`mt-4 text-base sm:text-lg ${t.textMuted}`}>{taglineOf(p)}</p>

        <div className={`mt-10 py-4 border-y ${t.border} flex flex-wrap items-center justify-between gap-4`}>
          <div>
            <p className="font-medium">{contextOf(p)}</p>
            <p className={`text-sm ${t.textMuted}`}>
              {trackOf(p.title)} · {yearOf(p)}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-5 text-sm">
            {links.map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-1 ${t.textMuted} hover:text-red-400 transition-colors`}>
                {l.label} <ArrowUpRight size={14} />
              </a>
            ))}
            {p.privateDemo && <span className={t.textFaint}>Live demo is private</span>}
          </div>
        </div>

        {images.length > 0 && (
          <>
            <div className={`mt-8 rounded-2xl border ${t.border} overflow-hidden ${t.surfaceSolid}`}>
              <img src={images[slide]} alt={`${p.title} screenshot ${slide + 1}`} className="w-full h-auto block" />
            </div>
            {images.length > 1 && (
              <div className="mt-4 flex items-center justify-between">
                <span className={`font-mono text-sm ${t.textFaint}`}>
                  {slide + 1} / {images.length}
                </span>
                <div className="flex gap-2">
                  <button aria-label="Previous image" disabled={slide === 0} onClick={() => setSlide((n) => n - 1)} className={navBtn}>
                    <ArrowRight size={15} className="rotate-180" />
                  </button>
                  <button aria-label="Next image" disabled={slide === images.length - 1} onClick={() => setSlide((n) => n + 1)} className={navBtn}>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            )}
          </>
        )}

        <section className="mt-12">
          <h2 className="font-display font-semibold text-lg">Overview</h2>
          <p className={`mt-3 leading-relaxed ${t.textMuted}`}>{renderDescription(p.description, t)}</p>
        </section>

        {p.highlights && p.highlights.length > 0 && (
          <section className="mt-10">
            <h2 className="font-display font-semibold text-lg">Highlights</h2>
            <ul className="mt-3 space-y-2.5">
              {p.highlights.map((h) => (
                <li key={h} className={`flex gap-3 leading-relaxed ${t.textMuted}`}>
                  <span className="mt-3 h-px w-3 shrink-0 bg-current" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="mt-10">
          <h2 className="font-display font-semibold text-lg">Built with</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {p.tags.map((tag) => (
              <span key={tag} className={`rounded-full border ${t.border} px-3 py-1 text-sm ${t.textMuted}`}>{tag}</span>
            ))}
          </div>
        </section>

        {next && next !== p && (
          <a href={`#${slugOf(next.title)}`} className={`group mt-14 pt-6 border-t ${t.border} flex items-center justify-between gap-4`}>
            <span className={`text-sm ${t.textFaint}`}>Next project</span>
            <span className="inline-flex items-center gap-2 font-display font-semibold group-hover:text-red-400 transition-colors">
              {next.title} <ArrowRight size={15} />
            </span>
          </a>
        )}
      </div>
    </div>
  );
}

function ResumeArchive({ t, onClose, isDark }) {
  const [files, setFiles] = useState(RESUME_FILES);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    const created = [];
    const withBlobs = RESUME_FILES.map((r) => {
      try {
        const [header, base64] = r.url.split(",");
        const mime = header.match(/:(.*?);/)[1];
        const binary = atob(base64);
        const bytes = new Uint8Array(binary.length);
        for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
        const blobUrl = URL.createObjectURL(new Blob([bytes], { type: mime }));
        created.push(blobUrl);
        return { ...r, viewUrl: blobUrl };
      } catch {
        return { ...r, viewUrl: r.url };
      }
    });
    setFiles(withBlobs);
    return () => created.forEach((u) => URL.revokeObjectURL(u));
  }, []);

  return (
    <div className={`fixed inset-0 z-[60] overflow-y-auto ${t.bg} ${t.text}`}>
      <div className="max-w-4xl mx-auto px-5 sm:px-8 py-10 sm:py-14">
        <button onClick={onClose} className={`inline-flex items-center gap-2 font-mono text-xs ${t.textMuted} hover:text-red-400 transition-colors`}>
          <ArrowRight size={14} className="rotate-180" /> Back to portfolio
        </button>
        <h1 className="font-display font-bold text-4xl sm:text-6xl mt-12">Resumes</h1>
        <p className={`font-mono text-sm ${t.accent} mt-3`}>Two versions, tailored to what I'm applying for.</p>

        <div className="grid sm:grid-cols-2 gap-6 mt-12">
          {files.map((r) => (
            <div key={r.label} className={`h-full flex flex-col rounded-2xl border ${t.border} ${t.surface} p-6 card-glow`}>
              <p className={`font-mono text-[10px] tracking-widest uppercase ${t.accent}`}>{r.eyebrow}</p>
              <h3 className={`font-display font-bold text-xl mt-2 ${t.text}`}>{r.label}</h3>
              <p className={`font-body text-sm leading-relaxed ${t.textMuted} mt-3 flex-1`}>{r.blurb}</p>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {r.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`font-mono text-[10px] px-2 py-1 rounded-md border ${t.border} ${
                      isDark ? "bg-black/40" : "bg-slate-50"
                    } ${t.textMuted}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-2.5 mt-6">
                <a
                  href={r.viewUrl || r.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex-1 inline-flex items-center justify-center gap-2 rounded-lg border ${t.border} px-4 py-2.5 font-mono text-xs ${t.textMuted} hover:${t.accent} hover:border-red-400/50 transition-colors`}
                >
                  View <Eye size={14} />
                </a>
                <a
                  href={r.viewUrl || r.url}
                  download={r.filename}
                  className={`flex-1 inline-flex items-center justify-center gap-2 rounded-lg border border-red-400 px-4 py-2.5 font-mono text-xs ${t.accent} hover:bg-red-400/10 transition-colors`}
                >
                  Download <Download size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const SIDEBAR_GROUPS = [
  {
    label: null,
    items: [{ id: "hero", label: "Home", Icon: House }],
  },
  {
    label: "About Me",
    items: [
      { id: "about", label: "About", Icon: User },
      { id: "skills", label: "Skills", Icon: Layers, count: SKILL_TOTAL },
      { id: "activities", label: "Activities", Icon: Trophy },
    ],
  },
  {
    label: "Work",
    items: [
      { id: "labs", label: "Projects", Icon: LayoutGrid, count: ALL_PROJECTS.length },
      { id: "experience", label: "Experience", Icon: Briefcase, count: EXPERIENCE.length },
      { id: "certifications", label: "Certs", Icon: Award, count: CERTIFICATIONS.length },
    ],
  },
  {
    label: "Links",
    items: [
      { action: "resume", label: "Resume", Icon: Download, count: RESUMES.length },
      { href: PROFILE.github, label: "GitHub", Icon: Github },
      { href: PROFILE.linkedin, label: "LinkedIn", Icon: Linkedin },
    ],
  },
];

function Sidebar({ t, isDark, collapsed, onToggleCollapse, activeId, onNavigate, onToggleTheme, onOpenResumes, mailtoUrl }) {
  const hoverText = isDark ? "hover:text-neutral-100" : "hover:text-slate-900";
  const hoverBg = isDark ? "hover:bg-white/5" : "hover:bg-slate-900/[0.04]";
  const activeBg = isDark ? "bg-white/[0.06]" : "bg-slate-900/[0.05]";
  const iconBtn = `h-9 w-9 shrink-0 rounded-full border ${t.border} flex items-center justify-center ${t.textMuted} hover:text-red-400 hover:border-red-400/60 transition-colors`;

  return (
    <aside
      aria-label="Sidebar"
      className={`hidden lg:flex fixed top-3 bottom-3 left-3 z-40 flex-col rounded-3xl border ${t.border} backdrop-blur-md ${t.navBg} transition-[width] duration-300 overflow-hidden ${
        collapsed ? "w-[4.5rem]" : "w-64"
      }`}
    >
      <div className={`h-16 shrink-0 flex items-center ${collapsed ? "justify-center" : "justify-between pl-6 pr-3"}`}>
        {!collapsed && (
          <button
            onClick={() => onNavigate("hero")}
            aria-label={`${PROFILE.name}, back to top`}
            className={`font-display font-bold text-xl tracking-tight ${t.text} hover:text-red-400 transition-colors`}
          >
            {PROFILE.name}
          </button>
        )}
        <button
          onClick={onToggleCollapse}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          aria-expanded={!collapsed}
          title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          className={`h-9 w-9 rounded-xl flex items-center justify-center ${t.textMuted} ${hoverBg} hover:text-red-400 transition-colors`}
        >
          <PanelLeft size={17} />
        </button>
      </div>

      <div className={collapsed ? "px-3" : "px-4"}>
        <a
          href={mailtoUrl}
          target="_blank"
          rel="noopener noreferrer"
          title={collapsed ? "Contact" : undefined}
          aria-label="Contact"
          className={`flex items-center rounded-2xl border ${t.border} ${collapsed ? "h-11 justify-center" : "h-11 gap-3 px-4"} ${t.text} text-sm font-medium hover:border-red-400/60 hover:text-red-400 transition-colors`}
        >
          <Mail size={16} className="shrink-0" />
          {!collapsed && <span>Contact</span>}
        </a>
      </div>

      <nav className={`flex-1 min-h-0 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${collapsed ? "mt-4 pb-3 px-3" : "mt-4 pb-3 px-4"}`}>
        {SIDEBAR_GROUPS.map((group, gi) => (
          <div key={group.label || gi} className={gi > 0 ? (collapsed ? "mt-3" : "mt-4") : ""}>
            {group.label &&
              (collapsed ? (
                <div className={`mx-auto mb-2 h-px w-6 ${isDark ? "bg-neutral-800" : "bg-slate-200"}`} />
              ) : (
                <p className={`px-3 mb-1.5 font-mono text-[10px] tracking-widest uppercase ${t.textFaint}`}>{group.label}</p>
              ))}
            <ul className="space-y-0.5">
              {group.items.map((item) => {
                const active = item.id === "hero" ? !activeId : !!item.id && activeId === item.id;
                const Tag = item.href ? "a" : "button";
                const linkProps = item.href
                  ? { href: item.href, target: "_blank", rel: "noopener noreferrer" }
                  : { onClick: item.action === "resume" ? onOpenResumes : () => onNavigate(item.id) };
                return (
                  <li key={item.label}>
                    <Tag
                      {...linkProps}
                      title={collapsed ? item.label : undefined}
                      aria-label={collapsed ? item.label : undefined}
                      aria-current={active ? "true" : undefined}
                      className={`w-full h-9 flex items-center rounded-xl text-sm transition-colors ${collapsed ? "justify-center" : "gap-3 px-3"} ${
                        active ? `${activeBg} ${t.accent}` : `${t.textMuted} ${hoverBg} ${hoverText}`
                      }`}
                    >
                      <item.Icon size={16} className="shrink-0" />
                      {!collapsed && (
                        <>
                          <span className="flex-1 text-left font-medium">{item.label}</span>
                          {item.count != null && (
                            <span className={`font-mono text-[11px] ${active ? t.accent : t.textFaint}`}>
                              {String(item.count).padStart(2, "0")}
                            </span>
                          )}
                          {item.href && <ArrowUpRight size={14} className={t.textFaint} />}
                        </>
                      )}
                    </Tag>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      <div className={`shrink-0 border-t ${t.border} ${collapsed ? "py-3 flex flex-col items-center gap-2" : "px-5 py-3 flex items-center justify-between"}`}>
        {!collapsed && <span className={`font-mono text-[11px] tracking-wider ${t.textFaint}`}>GMT+8</span>}
        <div className={collapsed ? "flex flex-col gap-2" : "flex items-center gap-2"}>
          <button aria-label="Toggle theme" title="Toggle theme" onClick={onToggleTheme} className={iconBtn}>
            <Contrast size={15} />
          </button>
        </div>
      </div>
    </aside>
  );
}

function App() {
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectTab, setProjectTab] = useState("webapps");
  const [projectSearch, setProjectSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [activeId, setActiveId] = useState("");
  const [booting, setBooting] = useState(true);
  const [bootScreenMounted, setBootScreenMounted] = useState(true);
  const [bootBar, setBootBar] = useState(0);
  const [bootPct, setBootPct] = useState(0);
  const [openPath, setOpenPath] = useState(() => EXPERIENCE[0]?.pathway || EXPERIENCE_PATHWAYS[0].id);
  const [openExp, setOpenExp] = useState(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(() => {
    try {
      return localStorage.getItem("sidebar-collapsed") === "1";
    } catch {
      return false;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("sidebar-collapsed", sidebarCollapsed ? "1" : "0");
    } catch {}
  }, [sidebarCollapsed]);

  const t = isDark ? theme.dark : theme.light;
  const progress = useScrollProgress();

  const switchProjectTab = useCallback((tab) => {
    setProjectTab(tab);
    setActiveCategory("All");
    setProjectSearch("");
    setShowAllProjects(false);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 500);
      let current = "";
      NAV_LINKS.forEach((link) => {
        const el = document.getElementById(link.id);
        if (el && el.getBoundingClientRect().top <= 120) current = link.id;
      });
      setActiveId(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setBootBar(100));
    const hideTimer = setTimeout(() => setBooting(false), 3000);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(hideTimer);
    };
  }, []);

  useEffect(() => {
    const start = performance.now();
    let raf;
    const tick = (now) => {
      const p = Math.min(1, (now - start) / 3000);
      setBootPct(Math.round(100 * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (booting) {
      document.body.classList.add("overflow-hidden");
      return;
    }
    document.body.classList.remove("overflow-hidden");
    const unmountTimer = setTimeout(() => setBootScreenMounted(false), 900);
    return () => clearTimeout(unmountTimer);
  }, [booting]);

  const mailtoUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${PROFILE.email}&su=${encodeURIComponent(
    "Let's connect — Internship Opportunity"
  )}`;

  const filteredProjects = useMemo(() => {
    const source = projectTab === "labs" ? LABS : WEB_APPS;
    return source.filter((item) => {
      const matchesCategory = activeCategory === "All" || item.category === activeCategory;
      const q = projectSearch.trim().toLowerCase();
      const matchesSearch =
        q.length === 0 ||
        item.title.toLowerCase().includes(q) ||
        item.tags.some((tag) => tag.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [projectTab, activeCategory, projectSearch]);

  const projectCategories = projectTab === "labs" ? LAB_CATEGORIES : WEBAPP_CATEGORIES;

  const scrollToId = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  }, []);

  const [archiveOpen, setArchiveOpen] = useState(false);
  const [projectSlug, setProjectSlug] = useState(null);
  useEffect(() => {
    const sync = () => {
      const h = window.location.hash.slice(1);
      setArchiveOpen(h === "archive");
      setProjectSlug(PROJECT_BY_SLUG[h] ? h : null);
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);
  const openArchive = () => { window.location.hash = "archive"; };
  const closeProject = useCallback(() => { window.location.hash = "archive"; }, []);
  const closeArchive = useCallback(() => {
    window.history.replaceState(null, "", window.location.pathname + window.location.search);
    setArchiveOpen(false);
  }, []);

  const [skillsOpen, setSkillsOpen] = useState(false);
  useEffect(() => {
    const sync = () => setSkillsOpen(window.location.hash === "#all-skills");
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);
  const openSkills = () => { window.location.hash = "all-skills"; };
  const closeSkills = useCallback(() => {
    window.history.replaceState(null, "", window.location.pathname + window.location.search + "#skills");
    setSkillsOpen(false);
  }, []);

  const [resumesOpen, setResumesOpen] = useState(false);
  useEffect(() => {
    const sync = () => setResumesOpen(window.location.hash === "#resumes");
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);
  useEffect(() => {
    document.body.style.overflow = resumesOpen || archiveOpen || skillsOpen || projectSlug ? "hidden" : "";
  }, [resumesOpen, archiveOpen, skillsOpen, projectSlug]);
  const openResumes = () => { window.location.hash = "resumes"; };
  const closeResumes = useCallback(() => {
    window.history.replaceState(null, "", window.location.pathname + window.location.search);
    setResumesOpen(false);
  }, []);
  const featured = (projectTab === "labs" ? LABS : WEB_APPS).slice(0, 3);
  const [revealed, setRevealed] = useState({});
  const toggleReveal = (title) => setRevealed((r) => ({ ...r, [title]: !r[title] }));

  const openGroup = (tab) => {
    switchProjectTab(tab);
    scrollToId("labs");
  };

  return (
    <div
      className={`relative isolate min-h-screen ${t.bg} ${t.text} transition-[color,background-color,padding] duration-300 ${
        sidebarCollapsed ? "lg:pl-[5.25rem]" : "lg:pl-[16.75rem]"
      }`}
    >
      <NetworkCanvas isDark={isDark} />

      {bootScreenMounted && (
        <div
          className={`fixed inset-0 z-[70] flex flex-col justify-between overflow-hidden ${t.bg} transition-transform duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
            booting ? "translate-y-0" : "-translate-y-full pointer-events-none"
          }`}
          role="status"
          aria-label="Loading portfolio"
        >
          <div className="flex items-center justify-between px-6 sm:px-12 pt-7 sm:pt-10">
            <p className="font-display font-semibold text-lg tracking-tight flex items-center gap-2">
              RK
            </p>
          </div>

          <div className="px-6 sm:px-12">
            <p className={`font-mono text-xs sm:text-sm ${t.textMuted} flex items-center gap-2`}>
              <span className="text-red-400">›</span>
              {bootPct < 30
                ? "Initializing"
                : bootPct < 60
                ? "Loading projects"
                : bootPct < 95
                ? "Connecting the network"
                : "Ready"}
              <span className="animate-blink text-red-400">_</span>
            </p>
            <p className={`font-display text-lg sm:text-2xl font-medium tracking-tight mt-2 ${t.text}`}>
              PORTFOLIO
            </p>
          </div>

          <div>
            <div className="px-6 sm:px-12 flex items-end justify-between">
              <p
                className={`font-display font-bold tabular-nums leading-[0.85] tracking-tighter text-[28vw] sm:text-[14rem] ${t.text}`}
                aria-hidden="true"
              >
                {String(bootPct).padStart(2, "0")}
                <span className="text-red-400 text-[0.35em] align-top ml-1">%</span>
              </p>
            </div>
            <div className={`mt-6 sm:mt-8 h-[3px] w-full ${isDark ? "bg-neutral-800" : "bg-slate-200"}`}>
              <div className="h-full bg-red-400" style={{ width: `${bootPct}%` }} />
            </div>
          </div>
        </div>
      )}

      <div className="fixed top-0 left-0 right-0 z-50 bg-transparent" style={{ height: "2px" }}>
        <div
          className="h-full bg-red-400 transition-all duration-150 ease-out"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      <Sidebar
        t={t}
        isDark={isDark}
        collapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed((c) => !c)}
        activeId={activeId}
        onNavigate={scrollToId}
        onToggleTheme={() => setIsDark((d) => !d)}
        onOpenResumes={openResumes}
        mailtoUrl={mailtoUrl}
      />

      <header className={`lg:hidden fixed top-0 left-0 right-0 z-40 backdrop-blur-md ${t.navBg} border-b ${t.border}`}>
        <nav className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          <button
            onClick={() => scrollToId("hero")}
            aria-label={`${PROFILE.name}, back to top`}
            className={`font-display font-bold text-xl tracking-tight ${t.text} hover:text-red-400 transition-colors`}
          >
            {PROFILE.name}
          </button>

          <div className={`hidden md:flex items-center gap-1 rounded-full border ${t.border} p-1 font-mono text-[11px] tracking-wide uppercase`}>
            {NAV_LINKS.map((link) => {
              const active = activeId === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToId(link.id)}
                  aria-current={active ? "true" : undefined}
                  className={`rounded-full px-3.5 py-1.5 transition-colors ${
                    active ? `${isDark ? "bg-neutral-800" : "bg-slate-100"} ${t.accent}` : `${t.textMuted} ${isDark ? "hover:text-neutral-100" : "hover:text-slate-900"}`
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <button
              aria-label="Toggle theme"
              onClick={() => setIsDark((d) => !d)}
              className={`h-9 w-9 rounded-full border ${t.border} flex items-center justify-center ${t.textMuted} hover:text-red-400 hover:border-red-400/60 transition-colors`}
            >
              {isDark ? <Sun size={15} /> : <Moon size={15} />}
            </button>
            <button
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
              className={`md:hidden h-9 w-9 rounded-full flex items-center justify-center transition-colors ${
                menuOpen ? `border border-red-400 ${t.accent}` : `border ${t.border} ${t.textMuted}`
              }`}
            >
              {menuOpen ? <X size={15} /> : <Menu size={15} />}
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div className={`md:hidden border-t ${t.border} ${t.bg} px-5 pt-2 pb-5`}>
            <ul className={`divide-y ${isDark ? "divide-neutral-800" : "divide-slate-200"}`}>
              {NAV_LINKS.map((link, i) => {
                const active = activeId === link.id;
                return (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToId(link.id)}
                      aria-current={active ? "true" : undefined}
                      className="group w-full flex items-center gap-4 py-3.5 text-left"
                    >
                      <span className={`font-mono text-[10px] tracking-widest ${active ? t.accent : t.textFaint}`}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className={`flex-1 font-display font-semibold text-lg tracking-tight ${active ? t.accent : t.text} group-hover:text-red-400 transition-colors`}>
                        {link.label}
                      </span>
                      <ArrowRight size={15} className={`${active ? t.accent : t.textFaint} transition-transform group-hover:translate-x-0.5`} />
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </header>

      <section id="hero" className="relative pt-16 lg:pt-0 flex items-center overflow-hidden" style={{ minHeight: "92vh" }}>
        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-24 w-full">
          <h1 className="sr-only">Websites on One Side. Networks on the Other.</h1>

          <div className={`grid grid-cols-1 md:grid-cols-2 border-y ${t.border} md:divide-x ${isDark ? "divide-neutral-800" : "divide-slate-200"}`}>
            {HERO_SIDES.map((side, i) => (
              <Reveal key={side.id} delay={110 + i * 60} className="min-w-0">
                <div className={`py-10 md:py-14 ${i === 0 ? "md:pr-12" : `border-t ${t.border} md:border-t-0 md:pl-12`}`}>
                  <p className={`font-mono text-[11px] tracking-widest ${t.textFaint}`}>
                    {String(i + 1).padStart(2, "0")} / {side.label.toUpperCase()}
                  </p>
                  <h2 className="mt-5 font-display font-bold tracking-tight leading-[1.02] text-[clamp(2.75rem,6vw,4.5rem)]">
                    <span className={t.accent}>{side.word}</span>
                    <span className={`mt-1 block text-[0.5em] ${t.text}`}>
                      {side.tail}
                    </span>
                  </h2>
                  <button
                    onClick={() => { switchProjectTab(side.id); scrollToId("labs"); }}
                    className={`group mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest ${t.text} transition-colors hover:text-red-400`}
                  >
                    {side.label} projects <span className={t.textFaint}>({String(side.count).padStart(2, "0")})</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1"><ArrowRight size={14} /></span>
                  </button>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={240}>
            <div className="mt-10 flex justify-center">
              <div className="flex flex-nowrap items-center gap-2 sm:gap-3">
                <button
                  onClick={openResumes}
                  className="inline-flex h-10 sm:h-11 shrink-0 items-center gap-1.5 sm:gap-2 whitespace-nowrap rounded-full border border-slate-200 bg-white px-4 sm:px-6 font-body text-xs sm:text-sm font-semibold text-slate-950 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-100"
                >
                  <Download size={15} /> Resume
                </button>
                {[
                  { href: PROFILE.github, label: "GitHub", Icon: Github, ext: true },
                  { href: PROFILE.linkedin, label: "LinkedIn", Icon: Linkedin, ext: true },
                  { href: mailtoUrl, label: "Email", Icon: Mail, ext: false },
                ].map(({ href, label, Icon, ext }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    {...(ext ? { target: "_blank", rel: "noreferrer" } : {})}
                    className={`flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-2xl border ${t.border} ${t.surface} ${t.textMuted} backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-red-400/60 hover:text-red-400 hover:shadow-lg hover:shadow-red-400/20`}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="about" className="max-w-6xl mx-auto px-5 sm:px-8 py-24">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">
          <Reveal className="lg:col-span-3">
            <p className={`inline-flex items-center gap-2 font-mono text-xs tracking-widest ${t.accent} mb-3`}>
              <User size={13} /> 01 · WHO I AM
            </p>
            <h2 className={`font-display text-3xl sm:text-4xl font-bold ${t.text} mb-6`}>About Me</h2>
            <p className={`font-display text-xl sm:text-2xl font-medium leading-snug ${t.text}`}>
              Hi, I'm <span className={t.accent}>RK</span>. I'm a Computer Engineering student who builds
              software and understands the network it runs on.
            </p>
            <p className={`font-body leading-relaxed ${t.textMuted} mt-5 max-w-xl`}>
              I'm looking for an internship where both sides are useful.
            </p>
            <div className="mt-7 flex flex-nowrap items-stretch gap-2 sm:gap-2.5">
              <div
                className={`group inline-flex shrink-0 items-center gap-1.5 sm:gap-2.5 rounded-2xl sm:rounded-full border ${t.border} ${t.surface} py-1.5 pl-2 sm:pl-1.5 pr-2.5 sm:pr-4 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md`}
              >
                <span
                  className={`flex h-6 w-6 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full ${
                    isDark ? "bg-neutral-800" : "bg-slate-100"
                  } ${t.accent}`}
                >
                  <MapPin size={13} />
                </span>
                <span className="font-body text-[11px] sm:text-sm font-medium leading-tight sm:whitespace-nowrap">{PROFILE.location}</span>
              </div>
              <div className="inline-flex min-w-0 items-center gap-1.5 sm:gap-2.5 rounded-2xl sm:rounded-full border border-red-400/60 py-1.5 px-3 sm:px-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-red-400">
                <span className={`font-body text-[11px] sm:text-sm font-medium leading-tight sm:whitespace-nowrap ${t.accent}`}>Looking for an internship</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-2">
            {(() => {
              const hackathons = EXPERIENCE.filter((e) => e.pathway === "hackathon");
              return (
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className={`group relative overflow-hidden rounded-[28px] p-5 sm:p-7 min-h-[200px] sm:min-h-[240px] flex flex-col justify-end text-white transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-red-500/20 ${isDark ? "bg-neutral-900 ring-1 ring-white/10" : "bg-slate-950"}`}>
                    <div className="relative">
                      <p className="font-display text-6xl sm:text-8xl font-bold leading-none tracking-tight">{ALL_PROJECTS.length}</p>
                      <p className="font-body text-sm sm:text-base font-medium mt-3 text-white">Projects</p>
                      <p className="font-body text-xs text-white/50 mt-0.5">Software &amp; Networking</p>
                    </div>
                  </div>

                  <div className={`group relative overflow-hidden rounded-[28px] border ${t.border} p-5 sm:p-7 min-h-[200px] sm:min-h-[240px] flex flex-col justify-end transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-red-400/15 hover:border-red-400/40 ${isDark ? "bg-neutral-900" : "bg-white"}`}>
                    <div className="relative">
                      <p className="font-display text-6xl sm:text-8xl font-bold leading-none tracking-tight">{hackathons.length}</p>
                      <p className="font-body text-sm sm:text-base font-medium mt-3">Hackathon</p>
                      <p className={`font-body text-xs ${t.textMuted} mt-0.5`}>{hackathons.map((h) => h.company.replace(/ Hackathon$/, "")).join(", ") || "—"}</p>
                    </div>
                  </div>
                </div>
              );
            })()}
          </Reveal>
        </div>

        <div className="mt-20">
          <Reveal>
            <div className="flex items-center gap-4 mb-8">
              <p className={`inline-flex items-center gap-2 font-mono text-xs tracking-widest ${t.accent}`}>
                <GraduationCap size={14} /> FOUNDATION
              </p>
              <span className={`h-px flex-1 border-t ${t.border}`} />
              <span className={`font-mono text-xs tracking-widest ${t.textFaint} hidden sm:inline`}>EDUCATION</span>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-6">
            {EDUCATION.map((edu, i) => (
              <Reveal key={edu.program} delay={i * 100}>
                <EducationCard edu={edu} t={t} isDark={isDark} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-24">
          <div className="text-center mb-10">
            <Reveal>
              <p className={`inline-flex items-center gap-2 font-mono text-xs tracking-widest ${t.accent} mb-3`}>
                <Wrench size={13} /> 02 · TOOLKIT
              </p>
              <h2 className={`font-display text-2xl sm:text-3xl font-bold ${t.text} mb-4`}>Technical Skills</h2>
              <p className={`font-mono text-xs ${t.textFaint}`}>
                What I use to build software and keep networks running.
              </p>
            </Reveal>
          </div>

          <Reveal delay={140}>
            <div className="marquee-mask">
              <div
                className="marquee-track"
                style={{ animationDuration: `${LOGO_SKILLS.length * 3}s` }}
              >
                {[...LOGO_SKILLS, ...LOGO_SKILLS].map((item, i) => (
                  <div
                    key={item.name + i}
                    title={item.name}
                    className={`h-16 w-16 shrink-0 rounded-2xl border ${t.border} ${
                      isDark ? "bg-black/40" : "bg-slate-50"
                    } flex items-center justify-center p-2`}
                  >
                    <div className="h-full w-full rounded-lg bg-white flex items-center justify-center p-1.5 shadow-sm">
                      <img src={item.icon} alt={item.name} className="h-full w-full object-contain" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="mt-12 text-center">
            <button
              onClick={openSkills}
              className={`inline-flex items-center gap-2 rounded-lg border border-red-400 px-6 py-3 font-mono text-sm ${t.accent} hover:bg-red-400/10 transition-colors`}
            >
              View more skills ({SKILL_TOTAL}) <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>

      <LatestActivities t={t} isDark={isDark} />

      <section id="labs" className="max-w-6xl mx-auto px-5 sm:px-8 py-24">
        <div className="text-center mb-10 sm:mb-14">
          <p className={`inline-flex items-center gap-2 font-mono text-xs tracking-widest ${t.accent} mb-3`}>
            <Code2 size={13} /> {projectTab === "labs" ? "04 · NETWORKING & IT LOG" : "04 · SOFTWARE LOG"}
          </p>
          <div className="flex flex-wrap items-baseline justify-center gap-3">
            {[["webapps", "Software"], ["labs", "Networking & IT"]].map(([key, label], i) => (
              <React.Fragment key={key}>
                {i > 0 && <span className={`font-display text-2xl sm:text-3xl font-bold ${t.textFaint}`}>/</span>}
                <button
                  onClick={() => switchProjectTab(key)}
                  aria-pressed={projectTab === key}
                  className={`font-display text-2xl sm:text-3xl font-bold pb-1 border-b-2 transition-colors ${
                    projectTab === key ? `${t.text} border-red-400` : `${t.textFaint} border-transparent hover:${t.textMuted}`
                  }`}
                >
                  {label}
                </button>
              </React.Fragment>
            ))}
          </div>
          <p className={`font-mono text-xs ${t.textFaint} mt-3`}>
            A few things I've built. The full list lives in the project log.
          </p>
        </div>

        <div className="space-y-20 sm:space-y-28">
          {featured.map((item, i) => {
            const flip = i % 2 === 1;
            const GroupIcon = projectTab === "labs" ? Network : Code2;
            return (
              <Reveal key={item.title}>
                <div className="grid sm:grid-cols-12 items-center gap-y-6">
                  <div className={`sm:row-start-1 ${flip ? "sm:col-start-6 sm:col-end-13" : "sm:col-start-1 sm:col-end-8"}`}>
                    <div className={`group relative aspect-[16/10] rounded-lg overflow-hidden border ${t.border} ${t.surface}`}>
                      {item.thumbnail ? (
                        <>
                          <img
                            src={item.thumbnail}
                            alt={`${item.title} preview`}
                            loading="lazy"
                            decoding="async"
                            onClick={() => toggleReveal(item.title)}
                            className={`absolute left-2 top-2 sm:left-2.5 sm:top-2.5 h-[calc(100%-1rem)] w-[calc(100%-1rem)] sm:h-[calc(100%-1.25rem)] sm:w-[calc(100%-1.25rem)] rounded-md object-cover object-top cursor-pointer transition-[filter] duration-500 ease-out ${
                              revealed[item.title] ? "grayscale-0 contrast-100" : "grayscale contrast-125"
                            } group-hover:grayscale-0 group-hover:contrast-100`}
                          />
                          <span
                            className={`absolute bottom-3.5 right-3.5 sm:bottom-4 sm:right-4 font-mono text-[10px] tracking-widest uppercase px-2 py-1 rounded bg-black/50 text-white/80 transition-opacity duration-300 pointer-events-none ${
                              revealed[item.title] ? "opacity-0" : "opacity-100 sm:group-hover:opacity-0"
                            }`}
                          >
                            {revealed[item.title] ? "" : "Tap or hover"}
                          </span>
                        </>
                      ) : (
                        <div className={`absolute inset-0 flex flex-col items-center justify-center gap-3 bg-red-400/10 ${t.accent}`}>
                          <GroupIcon size={40} />
                          <span className="relative font-mono text-xs tracking-widest uppercase">{item.eyebrow}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className={`relative z-10 sm:row-start-1 ${flip ? "sm:col-start-1 sm:col-end-8" : "sm:col-start-6 sm:col-end-13 sm:text-right"}`}>
                    <p className={`font-mono text-xs tracking-wide ${t.accent}`}>{item.eyebrow}</p>
                    <h3 className={`font-display font-bold text-2xl sm:text-[28px] mt-1 ${t.text}`}>{item.title}</h3>
                    <div className={`mt-5 rounded-lg border ${t.border} p-5 shadow-xl font-body text-sm leading-relaxed ${t.textMuted} ${isDark ? "bg-neutral-800/95" : "bg-white"} text-left`}>
                      {renderDescription(item.description, t)}
                    </div>
                    <ul className={`mt-4 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs ${t.textMuted} ${flip ? "" : "sm:justify-end"}`}>
                      {item.tags.map((tag) => <li key={tag}>{tag}</li>)}
                    </ul>
                    <div className={`mt-4 flex items-center gap-4 ${t.textMuted} ${flip ? "" : "sm:justify-end"}`}>
                      {hasLink(item.github) && (
                        <a href={item.github} target="_blank" rel="noreferrer" aria-label={`${item.title} on GitHub`} className="hover:text-red-400 transition-colors"><Github size={19} /></a>
                      )}
                      {hasLink(item.view) && (
                        <a href={item.view} target="_blank" rel="noreferrer" aria-label={`${item.title} preview`} className="hover:text-red-400 transition-colors"><ExternalLink size={19} /></a>
                      )}
                      {item.privateDemo && (
                        <span role="img" aria-disabled="true" aria-label={`${item.title} live demo unavailable, private project`} title="Live demo unavailable: private project" className="opacity-30 cursor-not-allowed"><ExternalLink size={19} /></span>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-20 text-center">
          <button
            onClick={openArchive}
            className={`inline-flex items-center gap-2 rounded-lg border border-red-400 px-6 py-3 font-mono text-sm ${t.accent} hover:bg-red-400/10 transition-colors`}
          >
            View all my projects ({ALL_PROJECTS.length}) <ArrowRight size={15} />
          </button>
        </div>
      </section>

      <section id="experience" className="max-w-6xl mx-auto px-5 sm:px-8 py-24">
        <SectionHeading
          eyebrow="05 · TIMELINE"
          title="Experience"
          caption="Four pathways: hackathons, internships, organizations, and work experience."
          icon={Briefcase}
          t={t}
        />

        <ExperienceSplit t={t} isDark={isDark} openExp={openExp} setOpenExp={setOpenExp} />

        <div className="relative md:hidden">
          <div className="grid gap-4">
            {EXPERIENCE_PATHWAYS.map((path, pi) => {
              const PathIcon = PATHWAY_ICONS[path.id] || Briefcase;
              const entries = EXPERIENCE.filter((e) => e.pathway === path.id);
              const pathOpen = openPath === path.id;
              return (
                <Reveal key={path.id} delay={pi * 80} className="relative flex flex-col">
                  <button
                    type="button"
                    onClick={() => {
                      setOpenPath(pathOpen ? null : path.id);
                      setOpenExp(null);
                    }}
                    aria-expanded={pathOpen}
                    aria-controls={`exp-path-${path.id}`}
                    className={`relative w-full text-left rounded-2xl border ${pathOpen ? "border-red-400/40" : t.border} ${t.surface} p-4 flex items-center gap-3 transition-colors hover:border-red-400/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400/60`}
                  >
                    <div className={`h-10 w-10 shrink-0 rounded-xl border flex items-center justify-center transition-colors ${pathOpen ? `border-red-400 ${t.accent}` : `${t.border} ${t.textMuted}`}`}>
                      <PathIcon size={18} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className={`font-mono text-[10px] tracking-[0.2em] uppercase ${t.accent}`}>
                        Path {String(pi + 1).padStart(2, "0")}
                      </p>
                      <h3 className="font-display font-semibold text-base leading-tight">{path.label}</h3>
                      <p className={`font-body text-xs ${t.textFaint}`}>{path.caption}</p>
                    </div>
                    <span
                      className={`shrink-0 rounded-full border ${t.border} px-2 py-0.5 font-mono text-[10px] ${t.textMuted}`}
                      aria-label={`${entries.length} ${entries.length === 1 ? "entry" : "entries"}`}
                    >
                      {String(entries.length).padStart(2, "0")}
                    </span>
                    <ChevronDown size={18} className={`shrink-0 ${t.textMuted} transition-transform duration-300 ${pathOpen ? "rotate-180" : ""}`} />
                  </button>

                  <div
                    id={`exp-path-${path.id}`}
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${pathOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                  >
                  <div className="overflow-hidden">
                  <div className="relative pt-4 pb-1">
                    <div className="space-y-4">
                      {entries.length === 0 && (
                        <div>
                          <div className={`rounded-2xl border border-dashed ${t.border} p-4`}>
                            <p className={`font-mono text-xs ${t.textFaint}`}>Next stop — coming soon.</p>
                          </div>
                        </div>
                      )}

                      {entries.map((exp, i) => {
                        const key = `${path.id}-${i}`;
                        const open = openExp === key;
                        const RoleIcon = /software/i.test(exp.type) ? Code2 : /network/i.test(exp.type) ? Network : User;
                        const latest = EXPERIENCE.indexOf(exp) === 0;
                        return (
                          <div key={key}>
                            <div className={`card-glow rounded-2xl border ${t.border} ${t.surface} p-4 hover:border-red-400/40`}>
                              <div className="flex items-center gap-3">
                                <div className={`h-10 w-10 shrink-0 overflow-hidden rounded-xl border ${t.border} ${isDark ? "bg-black/40" : "bg-slate-50"} ${t.accent} flex items-center justify-center`}>
                                  {exp.logo ? (
                                    <img src={exp.logo} alt={`${exp.company} logo`} className="h-full w-full object-cover" />
                                  ) : (
                                    <RoleIcon size={16} />
                                  )}
                                </div>
                                <div className="min-w-0 flex-1">
                                  <span className={`block font-mono text-[11px] tracking-wider ${t.textMuted}`}>
                                    {exp.duration}
                                  </span>
                                  {latest && (
                                    <span className={`inline-flex items-center gap-1.5 font-mono text-[11px] ${t.accent}`}>
                                      Latest
                                    </span>
                                  )}
                                </div>
                              </div>
                              <h4 className="font-display font-semibold text-sm leading-snug mt-3">{exp.company}</h4>
                              <p className={`font-body text-xs ${t.textMuted} mt-0.5`}>{exp.position}</p>

                              <button
                                type="button"
                                onClick={() => setOpenExp(open ? null : key)}
                                aria-expanded={open}
                                aria-controls={`exp-details-${key}`}
                                className={`mt-3 inline-flex items-center gap-1.5 font-mono text-xs tracking-wide ${t.accent} hover:opacity-80 transition-opacity`}
                              >
                                What did I do
                                <ChevronDown size={14} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
                              </button>

                              <div
                                id={`exp-details-${key}`}
                                className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                              >
                                <div className="overflow-hidden">
                                  <p className={`font-body text-sm leading-relaxed ${t.textMuted} pt-3`}>
                                    {exp.description || "Details coming soon."}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="certifications">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-24">
          <SectionHeading
            eyebrow="06 · CREDENTIALS"
            title="Certifications"
            caption="Click Verify to confirm the credential."
            icon={CheckCircle2}
            t={t}
          />
          <div className={CERTIFICATIONS.length === 1 ? "max-w-xl mx-auto" : "grid md:grid-cols-2 gap-6"}>
            {CERTIFICATIONS.map((cert, i) => {
              const earned = !["In Progress", "Planned", "Upcoming"].includes(cert.status);
              const StatusIcon = earned ? CheckCircle2 : Clock;
              const pill = earned ? `border border-red-400/60 ${t.accent}` : "border border-amber-400/60 text-amber-500";
              const notch = `absolute top-0 h-6 w-6 -translate-y-1/2 rounded-full border ${isDark ? "border-neutral-700" : "border-slate-300"} ${t.bg}`;
              return (
                <Reveal key={cert.name} delay={i * 80} className="h-full">
                  <article className={`relative flex h-full flex-col overflow-hidden rounded-3xl border ${t.border} ${t.surface} transition-colors hover:border-red-400/40`}>
                    <div className="flex-1 p-6 sm:p-8">
                      <div className="flex items-start justify-between gap-4">
                        <div className={`flex h-14 w-24 shrink-0 items-center justify-center rounded-xl border ${t.border} bg-white p-2.5`}>
                          {cert.image ? (
                            <img src={cert.image} alt={`${cert.name} badge`} className="max-h-full max-w-full object-contain" />
                          ) : (
                            <StatusIcon size={24} className="text-slate-400" />
                          )}
                        </div>
                        <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[10px] font-medium tracking-widest uppercase ${pill}`}>
                          <StatusIcon size={11} /> {cert.status}
                        </span>
                      </div>

                      <p className={`font-mono text-[10px] tracking-widest uppercase ${t.textFaint} mt-7`}>
                        {[cert.group, cert.category].filter(Boolean).join(" · ")}
                      </p>
                      <h3 className={`font-display font-semibold text-xl sm:text-2xl tracking-tight leading-snug ${t.text} mt-2`}>{cert.name}</h3>
                      <p className={`font-body text-sm ${t.textMuted} mt-1`}>{cert.org}</p>
                      <p className={`font-body text-sm leading-relaxed ${t.textFaint} mt-5`}>
                        {cert.skills.map((skill, si) => (
                          <span key={skill}>
                            <span className={`whitespace-nowrap ${t.textMuted}`}>
                              {skill}
                              {si < cert.skills.length - 1 && <span className={`ml-1 ${t.accent}`}>/</span>}
                            </span>{" "}
                          </span>
                        ))}
                      </p>
                    </div>

                    <div className={`relative border-t border-dashed ${isDark ? "border-neutral-700" : "border-slate-300"} px-6 sm:px-8 py-5 flex flex-wrap items-center justify-between gap-4`}>
                      <span aria-hidden="true" className={`${notch} -left-3`} />
                      <span aria-hidden="true" className={`${notch} -right-3`} />
                      <div>
                        <p className={`font-mono text-[10px] tracking-widest uppercase ${t.textFaint}`}>{earned ? "Issued" : "Status"}</p>
                        <p className={`font-mono text-sm ${t.text} mt-1`}>{cert.date}</p>
                        <p className={`font-mono text-[10px] tracking-wide ${t.textFaint} mt-1 ${cert.credentialId ? "" : "invisible"}`} aria-hidden={!cert.credentialId}>
                          ID · {cert.credentialId || "—"}
                        </p>
                      </div>
                      {hasLink(cert.verifyUrl) ? (
                        <a
                          href={cert.verifyUrl}
                          target="_blank"
                          rel="noreferrer"
                          className={`inline-flex items-center gap-2 rounded-lg border border-red-400 px-4 py-2 font-mono text-xs ${t.accent} hover:bg-red-400/10 transition-colors`}
                        >
                          {cert.verifyLabel || "Verify"} <ExternalLink size={13} />
                        </a>
                      ) : (
                        <span className={`font-mono text-xs ${t.textFaint}`}>Verification soon</span>
                      )}
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <GithubActivity t={t} isDark={isDark} />

      <footer className={`border-t ${t.border}`}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className={`font-mono text-xs ${t.textFaint}`}>
            © {new Date().getFullYear()} {PROFILE.name}. Built with React + Tailwind CSS.
          </p>
          <div className="flex items-center gap-4">
            <a href={PROFILE.github} className={`${t.textFaint} hover:text-red-400`} aria-label="GitHub"><Github size={16} /></a>
            <a href={PROFILE.linkedin} className={`${t.textFaint} hover:text-red-400`} aria-label="LinkedIn"><Linkedin size={16} /></a>
            <a href={mailtoUrl} className={`${t.textFaint} hover:text-red-400`} aria-label="Email"><Mail size={16} /></a>
            <button onClick={openResumes} className={`font-mono text-xs ${t.textMuted} hover:text-red-400 flex items-center gap-1.5`}>
              <Download size={13} /> Resume
            </button>
          </div>
        </div>
      </footer>

      {archiveOpen && <ProjectArchive t={t} onClose={closeArchive} />}
      {projectSlug && <ProjectDetail key={projectSlug} t={t} project={PROJECT_BY_SLUG[projectSlug]} onBack={closeProject} />}
      {skillsOpen && <SkillsArchive t={t} onClose={closeSkills} isDark={isDark} />}
      {resumesOpen && <ResumeArchive t={t} onClose={closeResumes} isDark={isDark} />}

      {showTop && !menuOpen && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className={`group fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full ${t.surfaceSolid} ${t.text} flex items-center justify-center transition-colors hover:text-red-400`}
        >
          <svg viewBox="0 0 48 48" className="absolute inset-0 h-full w-full -rotate-90" aria-hidden="true">
            <circle cx="24" cy="24" r="22" fill="none" strokeWidth="2" className={isDark ? "stroke-neutral-800" : "stroke-slate-200"} />
            <circle
              cx="24"
              cy="24"
              r="22"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              className="stroke-red-400"
              strokeDasharray={2 * Math.PI * 22}
              strokeDashoffset={2 * Math.PI * 22 * (1 - progress)}
            />
          </svg>
          <ArrowUp size={16} className="relative transition-transform group-hover:-translate-y-0.5" />
        </button>
      )}

    </div>
  );
}

export default App;
