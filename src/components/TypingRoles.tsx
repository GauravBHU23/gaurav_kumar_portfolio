"use client";

import { useEffect, useState } from "react";

interface TypingRolesProps {
  roles: string[];
  className?: string;
}

export default function TypingRoles({ roles, className }: TypingRolesProps) {
  const [index, setIndex] = useState(0); // which word
  const [sub, setSub] = useState(0); // how many chars shown
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  // Blinking cursor
  useEffect(() => {
    const id = setInterval(() => setBlink((b) => !b), 500);
    return () => clearInterval(id);
  }, []);

  // Typing / deleting engine
  useEffect(() => {
    if (roles.length === 0) return;

    const current = roles[index];

    // Pause at the end of a fully-typed word before deleting.
    if (!deleting && sub === current.length) {
      const id = setTimeout(() => setDeleting(true), 1400);
      return () => clearTimeout(id);
    }

    // Move to the next word once fully deleted.
    if (deleting && sub === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % roles.length);
      return;
    }

    const id = setTimeout(
      () => setSub((s) => s + (deleting ? -1 : 1)),
      deleting ? 45 : 90
    );
    return () => clearTimeout(id);
  }, [sub, deleting, index, roles]);

  const text = roles.length ? roles[index].substring(0, sub) : "";

  return (
    <span className={className} aria-label={roles.join(", ")}>
      <span className="gradient-text">{text}</span>
      <span
        className={`ml-0.5 inline-block w-[3px] -translate-y-0.5 self-stretch bg-brand-400 transition-opacity ${
          blink ? "opacity-100" : "opacity-0"
        }`}
        style={{ height: "1em" }}
        aria-hidden
      />
    </span>
  );
}
