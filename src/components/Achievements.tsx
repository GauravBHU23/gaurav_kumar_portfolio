"use client";

import { motion } from "framer-motion";
import { HiBadgeCheck } from "react-icons/hi";
import { FaTrophy, FaAward, FaMedal } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { achievements, certifications } from "@/data/resume";

const icons = [FaTrophy, FaMedal, FaAward, FaMedal];

export default function Achievements() {
  return (
    <section id="achievements" className="section-pad">
      <SectionHeading
        eyebrow="Recognition & milestones"
        title="Achievements & Certifications"
      />

      {/* Achievements */}
      <div className="mb-14 grid gap-5 md:grid-cols-2">
        {achievements.map((a, i) => {
          const Icon = icons[i % icons.length];
          return (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative overflow-hidden rounded-2xl p-6 ${
                a.highlight
                  ? "bg-gradient-to-br from-brand-600 to-violet-600 text-white shadow-xl shadow-brand-600/30"
                  : "card"
              }`}
            >
              {a.highlight && (
                <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/10 blur-xl" />
              )}
              <div className="flex items-start gap-4">
                <span
                  className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl text-2xl ${
                    a.highlight
                      ? "bg-white/20 text-yellow-300"
                      : "bg-brand-500/15 text-brand-400"
                  }`}
                >
                  <Icon />
                </span>
                <div>
                  <h3
                    className={`text-lg font-bold ${
                      a.highlight ? "text-white" : "text-slate-900 dark:text-white"
                    }`}
                  >
                    {a.title}
                  </h3>
                  <p
                    className={`mt-1 text-sm leading-relaxed ${
                      a.highlight
                        ? "text-blue-50"
                        : "text-slate-600 dark:text-slate-400"
                    }`}
                  >
                    {a.detail}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Certifications */}
      <Reveal>
        <h3 className="mb-6 text-center text-xl font-semibold text-slate-900 dark:text-white">
          Certifications
        </h3>
      </Reveal>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="glass flex items-start gap-3 rounded-xl p-4"
          >
            <HiBadgeCheck className="mt-0.5 flex-shrink-0 text-xl text-brand-500 dark:text-brand-400" />
            <div>
              <p className="text-sm font-semibold text-slate-900 dark:text-white">
                {c.title}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {c.issuer}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
