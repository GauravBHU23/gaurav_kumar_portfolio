import { IconType } from "react-icons";
import {
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiSolidity,
  SiNextdotjs,
  SiFastapi,
  SiDjango,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiDocker,
  SiPostgresql,
  SiMongodb,
  SiGooglemaps,
  SiPostman,
  SiLinux,
  SiGit,
  SiGithub,
  SiHackerrank,
  SiGeeksforgeeks,
  SiLeetcode,
  SiEthereum,
} from "react-icons/si";
import { FaJava, FaDatabase, FaCode, FaMapMarkedAlt } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

/* ------------------------------------------------------------------ */
/* Profile                                                             */
/* ------------------------------------------------------------------ */

export const profile = {
  name: "Gaurav Kumar",
  title: "Full-Stack Developer · Data & GIS · Problem Solver",
  // Rotating roles for the animated typing effect in the Hero.
  roles: [
    "Software Engineer",
    "Software Developer",
    "Full-Stack Developer",
    "Data & GIS Analyst",
    "Problem Solver",
  ],
  location: "Varanasi, Uttar Pradesh, India",
  email: "gauravkum1275@gmail.com",
  email2: "gauravkumar2580@bhu.ac.in",
  phone: "+91-8709393673",
  photo: "/Gaurav_icon.png",
  resumeUrl: "/Gaurav_MCA_2026_Resume.pdf",
  summary:
    "MCA graduate from Banaras Hindu University and Project Assistant at IIT (BHU), Varanasi. I build full-stack web applications with Next.js, FastAPI, and Docker, work on blockchain DApps, and analyze large-scale geospatial data. I love optimizing systems, building predictive models, and solving hard problems with clean code.",
  tagline:
    "I build full-stack apps, blockchain DApps & data-driven systems that ship fast.",
};

export const socials = {
  linkedin: "https://www.linkedin.com/",
  github: "https://github.com/",
  hackerrank: "https://www.hackerrank.com/",
  leetcode: "https://leetcode.com/",
};

/* ------------------------------------------------------------------ */
/* Experience                                                          */
/* ------------------------------------------------------------------ */

export interface Experience {
  role: string;
  company: string;
  period: string;
  place: string;
  points: string[];
}

export const experience: Experience[] = [
  {
    role: "Project Assistant — SLCR (DSS)",
    company: "Civil Engineering Department, IIT (BHU)",
    period: "Sep 2025 – Present",
    place: "Varanasi, UP",
    points: [
      "Working on the SLCR project, building a Decision Support System (DSS) for the Civil Engineering Department using computational models to analyze institutional datasets and improve decision-making accuracy by 25%.",
      "Optimized backend data pipelines in Python, reducing automated data analysis processing time by 80% (from 4 hours to 45 minutes).",
      "Collaborated with senior research leads to develop 5+ predictive models, cutting project resource forecasting errors by 15%.",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Education                                                           */
/* ------------------------------------------------------------------ */

export interface Education {
  institute: string;
  degree: string;
  detail: string;
  period: string;
  place: string;
}

export const education: Education[] = [
  {
    institute: "Banaras Hindu University (BHU)",
    degree: "Master of Computer Applications (MCA)",
    detail: "CGPA — 6.84",
    period: "2023 – 2025",
    place: "Varanasi, UP",
  },
  {
    institute: "Kisan College Sohsarai (PPU Patna)",
    degree: "Bachelor of Science (Mathematics)",
    detail: "Percentage — 77.37%",
    period: "2019 – 2022",
    place: "Nalanda, Bihar",
  },
  {
    institute: "K.S.T College, Sohsarai (BSEB Patna)",
    degree: "I.Sc — Intermediate of Science (PCM)",
    detail: "Percentage — 74.60%",
    period: "2017 – 2019",
    place: "Nalanda, Bihar",
  },
  {
    institute: "Bari Pahari R H/S School (BSEB Patna)",
    degree: "Matriculation (10th)",
    detail: "Percentage — 64.40%",
    period: "2016 – 2017",
    place: "Nalanda, Bihar",
  },
];

/* ------------------------------------------------------------------ */
/* Projects                                                            */
/* ------------------------------------------------------------------ */

export interface Project {
  title: string;
  period: string;
  stack: string[];
  points: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    title: "Blockchain-Based Secure Voting App",
    period: "Jan 2026",
    stack: ["Solidity", "React", "Node.js", "Ethereum", "Web3.js"],
    points: [
      "Engineered a decentralized application (DApp) on the Ethereum network, reducing transaction latency by 12% through optimized Smart Contract logic.",
      "Implemented secure wallet authentication for 100% tamper-proof voter verification using Web3.js and MetaMask integration.",
    ],
    link: "#",
  },
  {
    title: "Employee Management Portal",
    period: "Nov 2025",
    stack: ["Next.js", "FastAPI", "Docker", "PostgreSQL"],
    points: [
      "Developed a multi-tier dashboard with Next.js and FastAPI managing 500+ employee records with sub-200ms API response times.",
      "Deployed containerized microservices using Docker, reducing local setup and deployment time by 60%.",
    ],
    link: "#",
  },
  {
    title: "Geospatial Analysis & Mapping",
    period: "Sep 2025",
    stack: ["ArcMap GIS", "Python", "Google Earth Engine"],
    points: [
      "Processed large-scale spatial datasets using ArcMap GIS, identifying 3 high-priority development zones through advanced thematic mapping.",
      "Built Python automation scripts that saved 10+ hours per week of manual data entry for geographic attribute tables.",
    ],
    link: "#",
  },
];

/* ------------------------------------------------------------------ */
/* Skills                                                              */
/* ------------------------------------------------------------------ */

export interface Skill {
  name: string;
  icon: IconType;
  color: string;
}

export const languages: Skill[] = [
  { name: "C++", icon: SiCplusplus, color: "#00599C" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Java", icon: FaJava, color: "#E76F00" },
  { name: "SQL", icon: FaDatabase, color: "#4479A1" },
  { name: "Solidity", icon: SiSolidity, color: "#363636" },
];

export const frameworks: Skill[] = [
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "React.js", icon: SiReact, color: "#61DAFB" },
  { name: "FastAPI", icon: SiFastapi, color: "#009688" },
  { name: "Django", icon: SiDjango, color: "#0C9D5B" },
  { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
];

export const dataGis: Skill[] = [
  { name: "Google Earth Engine", icon: SiGooglemaps, color: "#34A853" },
  { name: "ArcMap GIS", icon: FaMapMarkedAlt, color: "#2C7FB8" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Ethereum", icon: SiEthereum, color: "#7B7BEE" },
  { name: "REST APIs", icon: FaCode, color: "#FF7C1F" },
];

export const tools: Skill[] = [
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#181717" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  { name: "Linux (Ubuntu)", icon: SiLinux, color: "#FCC624" },
  { name: "VS Code", icon: VscVscode, color: "#007ACC" },
  { name: "Docker Desktop", icon: SiDocker, color: "#2496ED" },
];

export const coursework: string[] = [
  "DSA",
  "Operating Systems",
  "OOPs Concepts",
  "Computer Networks",
  "DBMS",
  "Predictive Modeling",
  "Web Development",
  "Software Engineering",
];

/* ------------------------------------------------------------------ */
/* Coding Platforms                                                    */
/* ------------------------------------------------------------------ */

export interface Platform {
  name: string;
  stat: string;
  icon: IconType;
  color: string;
  link: string;
}

export const platforms: Platform[] = [
  {
    name: "Coding Ninjas",
    stat: "1000+ Solved · Top 1% Globally",
    icon: FaCode,
    color: "#FF7C1F",
    link: "#",
  },
  {
    name: "HackerRank",
    stat: "Gold Badges · 200+ Solved",
    icon: SiHackerrank,
    color: "#00EA64",
    link: socials.hackerrank,
  },
  {
    name: "LeetCode + GFG",
    stat: "300+ Combined DSA Problems",
    icon: SiLeetcode,
    color: "#FFA116",
    link: socials.leetcode,
  },
  {
    name: "GeeksforGeeks",
    stat: "Active Problem Solver",
    icon: SiGeeksforgeeks,
    color: "#2F8D46",
    link: "#",
  },
];

/* ------------------------------------------------------------------ */
/* Certifications                                                      */
/* ------------------------------------------------------------------ */

export interface Certification {
  title: string;
  issuer: string;
}

export const certifications: Certification[] = [
  { title: "OOPs in Java", issuer: "Coding Ninjas" },
  { title: "Responsive Web Development", issuer: "Infosys" },
  { title: "Python & SQL", issuer: "HackerRank" },
  { title: "DSA Certificate", issuer: "Data Flair" },
];
