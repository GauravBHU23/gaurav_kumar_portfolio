"use client";

import { useState, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiPaperAirplane, HiExclamationCircle, HiCheck } from "react-icons/hi";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    website: "", // honeypot
  });

  // After a successful send, auto-return to the form after a few seconds
  // so the visitor can send another message without clicking anything.
  useEffect(() => {
    if (status !== "success") return;
    const id = setTimeout(() => setStatus("idle"), 5000);
    return () => clearTimeout(id);
  }, [status]);

  const update =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setForm({ name: "", email: "", message: "", website: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  const inputClass =
    "w-full rounded-xl border border-black/10 bg-black/[0.03] px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-colors focus:border-brand-500 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-500 dark:focus:bg-white/[0.07]";

  // ---- Success card (replaces the form once a message is sent) ----
  if (status === "success") {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.92, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="card flex flex-col items-center justify-center py-12 text-center"
        >
          {/* Animated check badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 200, damping: 14 }}
            className="relative mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/15"
          >
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/30" />
            <motion.span
              initial={{ scale: 0, rotate: -30 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 220, damping: 12 }}
              className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/40"
            >
              <HiCheck className="text-3xl" />
            </motion.span>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl font-bold text-slate-900 dark:text-white"
          >
            Message Sent! 🎉
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-2 max-w-xs text-sm text-slate-600 dark:text-slate-400"
          >
            Thanks for reaching out! I&apos;ve received your message and will get
            back to you soon.
          </motion.p>

          <motion.button
            type="button"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            onClick={() => setStatus("idle")}
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-black/10 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-all hover:-translate-y-0.5 hover:border-brand-400 hover:text-brand-500 dark:border-white/15 dark:text-slate-200 dark:hover:text-brand-300"
          >
            <HiPaperAirplane className="rotate-90 text-base" /> Send another message
          </motion.button>

          {/* Auto-return hint + progress bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-6 w-full max-w-xs"
          >
            <p className="mb-2 text-center text-xs text-slate-500 dark:text-slate-500">
              Returning to the form…
            </p>
            <div className="h-1 w-full overflow-hidden rounded-full bg-black/10 dark:bg-white/10">
              <motion.div
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{ duration: 5, ease: "linear" }}
                className="h-full rounded-full bg-gradient-to-r from-brand-500 to-violet-500"
              />
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
            Name
          </label>
          <input
            id="name"
            type="text"
            required
            value={form.name}
            onChange={update("name")}
            placeholder="Your name"
            className={inputClass}
            disabled={status === "loading"}
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={update("email")}
            placeholder="you@example.com"
            className={inputClass}
            disabled={status === "loading"}
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={update("message")}
          placeholder="Write your message..."
          className={`${inputClass} resize-none`}
          disabled={status === "loading"}
        />
      </div>

      {/* Honeypot — hidden from real users */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        value={form.website}
        onChange={update("website")}
        className="hidden"
        aria-hidden="true"
      />

      <button
        type="submit"
        disabled={status === "loading"}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 transition-all hover:bg-brand-500 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
            Sending...
          </>
        ) : (
          <>
            <HiPaperAirplane className="rotate-90 text-base" /> Send Message
          </>
        )}
      </button>

      {status === "error" && (
        <motion.p
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 rounded-lg bg-red-500/10 px-4 py-3 text-sm text-red-500 dark:text-red-300"
        >
          <HiExclamationCircle className="flex-shrink-0 text-lg" />
          {errorMsg || "Could not send your message. Please try again."}
        </motion.p>
      )}
    </form>
  );
}
