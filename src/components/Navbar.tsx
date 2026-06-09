"use client";

import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { profile } from "@/data/resume";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#coding", label: "Coding" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg shadow-black/20" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#home" className="text-lg font-bold tracking-tight">
          <span className="gradient-text">{profile.name.split(" ")[0]}</span>
          <span className="text-slate-900 dark:text-white">.dev</span>
        </a>

        {/* Desktop */}
        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-brand-500 dark:text-slate-300 dark:hover:text-brand-300"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-500"
            >
              Resume
            </a>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="text-2xl text-slate-700 dark:text-white"
          >
            {open ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="glass border-t border-white/10 md:hidden">
          <ul className="flex flex-col px-5 py-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-medium text-slate-700 transition-colors hover:text-brand-500 dark:text-slate-200 dark:hover:text-brand-300"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-full bg-brand-600 px-4 py-2 text-center text-base font-semibold text-white"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
