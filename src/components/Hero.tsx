"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaHackerrank } from "react-icons/fa";
import {
  SiLeetcode,
  SiNextdotjs,
  SiReact,
  SiPython,
  SiFastapi,
  SiDocker,
} from "react-icons/si";
import { HiArrowDown, HiDownload } from "react-icons/hi";
import { profile, socials } from "@/data/resume";
import TypingRoles from "./TypingRoles";

const socialLinks = [
  { href: socials.linkedin, icon: FaLinkedin, label: "LinkedIn" },
  { href: socials.github, icon: FaGithub, label: "GitHub" },
  { href: socials.hackerrank, icon: FaHackerrank, label: "HackerRank" },
  { href: socials.leetcode, icon: SiLeetcode, label: "LeetCode" },
];

const stats = [
  { value: "98.47%ile", label: "Naukri Young Turks" },
  { value: "1000+", label: "Problems Solved" },
  { value: "3+", label: "Major Projects" },
  { value: "MCA", label: "BHU, Varanasi" },
];

// Tech badges that orbit / float around the profile photo.
const techBadges = [
  { icon: SiNextdotjs, color: "#e2e8f0", className: "-left-4 top-6" },
  { icon: SiReact, color: "#61DAFB", className: "-right-3 top-10" },
  { icon: SiPython, color: "#3776AB", className: "left-2 bottom-4" },
  { icon: SiFastapi, color: "#009688", className: "-right-5 bottom-12" },
  { icon: SiDocker, color: "#2496ED", className: "left-1/2 -top-4 -translate-x-1/2" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24"
    >
      {/* Glow orbs */}
      <div className="pointer-events-none absolute -left-20 top-24 h-72 w-72 rounded-full bg-brand-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-24 h-72 w-72 rounded-full bg-violet-600/20 blur-3xl" />

      <div className="section-pad grid items-center gap-12 md:grid-cols-2">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="mb-3 font-medium text-brand-500 dark:text-brand-300">
            👋 Hi, I&apos;m
          </p>
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            <span className="text-slate-900 dark:text-white">
              {profile.name.split(" ")[0]}
            </span>{" "}
            <span className="gradient-text">
              {profile.name.split(" ").slice(1).join(" ")}
            </span>
          </h1>
          <h2 className="mt-3 flex min-h-[2.2rem] items-center text-xl font-semibold text-slate-700 dark:text-slate-300 sm:text-2xl">
            <span className="mr-2">I&apos;m a</span>
            <TypingRoles roles={profile.roles} />
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-600 dark:text-slate-400">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 transition-all hover:-translate-y-0.5 hover:bg-brand-500"
            >
              View My Work
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-black/15 px-6 py-3 text-sm font-semibold text-slate-800 transition-all hover:-translate-y-0.5 hover:border-brand-400 hover:text-brand-500 dark:border-white/15 dark:text-white dark:hover:text-brand-300"
            >
              <HiDownload /> Download CV
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="text-2xl text-slate-500 transition-colors hover:text-brand-500 dark:text-slate-400 dark:hover:text-brand-300"
              >
                <s.icon />
              </a>
            ))}
          </div>

          {/* Quick stats */}
          <div className="mt-10 grid max-w-lg grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.12 }}
                className="glass rounded-xl px-3 py-3 text-center"
              >
                <p className="text-base font-bold text-slate-900 dark:text-white sm:text-lg lg:text-xl">
                  {s.value}
                </p>
                <p className="mt-0.5 text-[11px] leading-tight text-slate-600 dark:text-slate-400">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Photo */}
        <motion.div
          className="flex flex-col items-center gap-7"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          {/* Photo + orbiting tech badges */}
          <div className="relative">
            <div className="relative animate-float">
              <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-brand-500 via-sky-400 to-violet-500 opacity-60 blur-xl" />
              <div className="relative h-60 w-60 overflow-hidden rounded-full border-4 border-white/20 shadow-2xl ring-2 ring-brand-500/30 sm:h-72 sm:w-72 lg:h-80 lg:w-80">
                <Image
                  src={profile.photo}
                  alt={profile.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 240px, 320px"
                  className="object-cover [object-position:center_25%]"
                />
              </div>
            </div>

            {/* Floating tech badges around the photo */}
            {techBadges.map((b, i) => (
              <motion.span
                key={i}
                className={`glass absolute flex h-12 w-12 items-center justify-center rounded-xl shadow-lg ${b.className}`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
                transition={{
                  opacity: { delay: 0.6 + i * 0.12, duration: 0.4 },
                  scale: { delay: 0.6 + i * 0.12, duration: 0.4 },
                  y: {
                    delay: 1 + i * 0.2,
                    duration: 3 + i * 0.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              >
                <b.icon className="text-2xl" style={{ color: b.color }} />
              </motion.span>
            ))}
          </div>

          {/* "Currently working on" card — fills the space under the photo */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="glass w-full max-w-xs rounded-2xl p-4"
          >
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-500 dark:text-emerald-400">
                Currently working on
              </span>
            </div>
            <p className="mt-2 text-sm font-medium text-slate-900 dark:text-white">
              SLCR — Decision Support System
            </p>
            <p className="mt-0.5 text-xs text-slate-600 dark:text-slate-400">
              Project Assistant @ Civil Engg. Dept, IIT (BHU)
            </p>
          </motion.div>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-2xl text-slate-500 hover:text-brand-300"
      >
        <HiArrowDown />
      </a>
    </section>
  );
}
