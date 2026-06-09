"use client";

import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaHackerrank,
  FaHeart,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
  HiArrowUp,
} from "react-icons/hi";
import { profile, socials } from "@/data/resume";

const quickLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#achievements", label: "Awards" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  { href: socials.linkedin, icon: FaLinkedin, label: "LinkedIn" },
  { href: socials.github, icon: FaGithub, label: "GitHub" },
  { href: socials.hackerrank, icon: FaHackerrank, label: "HackerRank" },
  { href: socials.leetcode, icon: SiLeetcode, label: "LeetCode" },
];

const contactItems = [
  { icon: HiOutlineMail, value: profile.email, href: `mailto:${profile.email}` },
  { icon: HiOutlineMail, value: profile.emailInstitutional, href: `mailto:${profile.emailInstitutional}` },
  {
    icon: HiOutlinePhone,
    value: profile.phone,
    href: `tel:${profile.phone.replace(/[^+\d]/g, "")}`,
  },
  { icon: HiOutlineLocationMarker, value: profile.location, href: undefined },
];

export default function Footer() {
  return (
    <footer className="relative mt-10 overflow-hidden border-t border-black/10 dark:border-white/10">
      {/* Gradient accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500 to-transparent" />

      {/* Soft glow */}
      <div className="pointer-events-none absolute -bottom-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-brand-600/15 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand / about */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <a
              href="#home"
              className="text-xl font-bold tracking-tight"
            >
              <span className="gradient-text">
                {profile.name.split(" ")[0]}
              </span>
              <span className="text-slate-900 dark:text-white">.dev</span>
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {profile.tagline}
            </p>
            <div className="mt-5 flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="glass flex h-10 w-10 items-center justify-center rounded-full text-lg text-slate-600 transition-all hover:-translate-y-1 hover:text-brand-500 dark:text-slate-300 dark:hover:text-brand-300"
                >
                  <s.icon />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 sm:grid-cols-1">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="group inline-flex items-center text-sm text-slate-600 transition-colors hover:text-brand-500 dark:text-slate-400 dark:hover:text-brand-300"
                  >
                    <span className="mr-0 h-px w-0 bg-brand-500 transition-all duration-300 group-hover:mr-2 group-hover:w-4" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
              Get in Touch
            </h3>
            <ul className="space-y-3">
              {contactItems.map((c, i) => {
                const content = (
                  <span className="flex items-start gap-2.5 text-sm text-slate-600 transition-colors dark:text-slate-400">
                    <c.icon className="mt-0.5 flex-shrink-0 text-base text-brand-500 dark:text-brand-400" />
                    <span className="break-all">{c.value}</span>
                  </span>
                );
                return (
                  <li key={i}>
                    {c.href ? (
                      <a href={c.href} className="hover:text-brand-500 dark:hover:text-brand-300">
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </li>
                );
              })}
            </ul>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
              Let&apos;s Work Together
            </h3>
            <p className="mb-4 text-sm text-slate-600 dark:text-slate-400">
              Open to internships, freelance & full-time roles.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 transition-all hover:-translate-y-0.5 hover:bg-brand-500"
            >
              <HiOutlineMail className="text-base" /> Hire Me
            </a>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-black/10 pt-6 dark:border-white/10 sm:flex-row">
          <p className="flex items-center gap-1.5 text-center text-sm text-slate-600 dark:text-slate-400 sm:text-left">
            © {new Date().getFullYear()} {profile.name}. Built with
            <FaHeart className="animate-pulse text-rose-500" /> using Next.js &
            TypeScript.
          </p>

          <a
            href="#home"
            className="group flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-brand-500 dark:text-slate-400 dark:hover:text-brand-300"
          >
            Back to top
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-black/10 transition-transform group-hover:-translate-y-1 dark:border-white/15">
              <HiArrowUp />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
