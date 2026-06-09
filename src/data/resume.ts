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
  SiCodechef,
} from "react-icons/si";
import {
  FaJava,
  FaDatabase,
  FaCode,
  FaMapMarkedAlt,
  FaServer,
} from "react-icons/fa";
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
  email: "Gauravkum1275@gmail.com",
  emailInstitutional: "Gaurav.saf.civ26@itbhu.ac.in",
  phone: "+91-8709393673",
  address: "Sir Goverdhanpur, Near Sir Gate-BHU, Varanasi, UP 221005",
  institution: "Indian Institute of Technology (BHU), Varanasi",
  photo: "/Gaurav_icon.png",
  resumeUrl: "/Gaurav_MCA_2026_Resume.pdf",
  summary:
    "I'm Gaurav Kumar, an MCA graduate from Banaras Hindu University and currently a Project Assistant at the Civil Engineering Department, IIT (BHU), Varanasi — where I work on the SLCR Decision Support System. I build full-stack web applications with Next.js, FastAPI, Django and Docker, develop blockchain DApps on Ethereum, and analyze large-scale geospatial data using GIS tools and GeoServer. With 1000+ DSA problems solved across Coding Ninjas, LeetCode, HackerRank, GeeksforGeeks and CodeChef, I love turning complex problems into clean, scalable, and efficient solutions.",
  tagline:
    "I Build Full-Stack Applications, Blockchain DApps & Data-driven Systems that Ship Fast.",
};

export const socials = {
  linkedin: "https://www.linkedin.com/in/gaurav-kumar-104264296",
  github: "https://github.com/GauravBHU23",
  hackerrank: "https://www.hackerrank.com/profile/gauravkum1275",
  leetcode: "https://leetcode.com/u/gauravkum1275/",
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
    link: "https://github.com/GauravBHU23/BlockChain-Voting-System-Project",
  },
  {
    title: "Employee Management Portal",
    period: "Nov 2025",
    stack: ["Next.js", "FastAPI", "Docker", "PostgreSQL"],
    points: [
      "Developed a multi-tier dashboard with Next.js and FastAPI managing 500+ employee records with sub-200ms API response times.",
      "Deployed containerized microservices using Docker, reducing local setup and deployment time by 60%.",
    ],
    link: "https://github.com/GauravBHU23/Employee-Management-System-2",
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
  { name: "GeoServer", icon: FaServer, color: "#5C9CCC" },
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
    name: "LeetCode",
    stat: "300+ DSA Problems Solved",
    icon: SiLeetcode,
    color: "#FFA116",
    link: socials.leetcode,
  },
  {
    name: "GeeksforGeeks",
    stat: "Active Problem Solver",
    icon: SiGeeksforgeeks,
    color: "#2F8D46",
    link: "https://www.geeksforgeeks.org/profile/gauravktir1",
  },
  {
    name: "CodeChef",
    stat: "Active Competitive Coder",
    icon: SiCodechef,
    color: "#A98261",
    link: "https://www.codechef.com/users/gauravkum1275",
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
  {
    title: "The Joy of Computing Using Python (Elite)",
    issuer: "NPTEL · IIT Madras",
  },
  {
    title: "SAWIT.AI Learnathon — Generative AI",
    issuer: "GUVI · HCLTech · Google for Developers",
  },
  {
    title: "Machine Learning for All",
    issuer: "University of London · Coursera",
  },
  {
    title: "Responsive Web Development (HTML5, CSS3, JS)",
    issuer: "Infosys Springboard",
  },
  {
    title: "My APPSSDC, My Website — Web Design",
    issuer: "GUVI · APSSDC",
  },
  { title: "OOPs in Java", issuer: "Coding Ninjas" },
  { title: "Python & SQL", issuer: "HackerRank" },
  { title: "DSA Certificate", issuer: "Data Flair" },
  {
    title: "Tata Crucible Corporate Quiz 2025 (Participation)",
    issuer: "Tata Group · Unstop",
  },
];

/* ------------------------------------------------------------------ */
/* Achievements / Awards                                               */
/* ------------------------------------------------------------------ */

export interface Achievement {
  title: string;
  detail: string;
  highlight?: boolean;
}

export const achievements: Achievement[] = [
  {
    title: "Naukri Campus Young Turks",
    detail:
      "Scored 98.47 percentile in India's largest skill contest (Certificate of Merit).",
    highlight: true,
  },
  {
    title: "Top 1% on Coding Ninjas",
    detail: "Ranked in the top 1% of global users with 1000+ problems solved.",
  },
  {
    title: "Gold Badges on HackerRank",
    detail: "Earned Gold badges in Python, C++ and SQL (200+ challenges).",
  },
  {
    title: "300+ DSA Problems",
    detail:
      "Active competitive coder across LeetCode, GeeksforGeeks and CodeChef.",
  },
];

/* ------------------------------------------------------------------ */
/* Testimonials                                                        */
/* ------------------------------------------------------------------ */

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  image?: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Gaurav is a quick learner and a dependable problem solver. He optimized our data pipelines significantly and brought a strong analytical mindset to the SLCR project.",
    name: "Dr. Akash Tiwari",
    role: "Research Associate · Civil Engineering Dept, IIT (BHU)",
    image: "/profile.webp",
  },
  {
    quote:
      "One of the most consistent and motivated students I've mentored. His command over DSA and full-stack development is impressive, and he delivers clean, well-structured code.",
    name: "Dr. Gaurav Barnwal",
    role: "Faculty Mentor · Dept. of Computer Science, BHU",
    image: "/FA000237.jpeg",
  },
  {
    quote:
      "Collaborating with Gaurav on our Blockchain Voting DApp was great — he's detail-oriented, takes ownership, and is always willing to help the team debug tough issues.",
    name: "Sudhanshu, Muskan & Aarish",
    role: "Project Teammates · Blockchain Voting DApp",
    image: "/Gaurav_icon.png",
  },
];
