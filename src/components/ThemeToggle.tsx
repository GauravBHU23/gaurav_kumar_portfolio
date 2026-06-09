"use client";

import { useEffect, useState } from "react";
import { HiSun, HiMoon } from "react-icons/hi";

type Theme = "light" | "dark";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const current =
      document.documentElement.classList.contains("dark") ? "dark" : "light";
    setTheme(current);
    setMounted(true);
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* ignore */
    }
  }

  // Avoid hydration mismatch — render a stable placeholder until mounted.
  if (!mounted) {
    return (
      <span
        aria-hidden
        className="flex h-9 w-9 items-center justify-center rounded-full"
      />
    );
  }

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-lg text-slate-600 transition-colors hover:border-brand-400 hover:text-brand-500 dark:border-white/15 dark:text-slate-300 dark:hover:text-brand-300"
    >
      {theme === "dark" ? <HiSun /> : <HiMoon />}
    </button>
  );
}
