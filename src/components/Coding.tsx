"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { platforms, certifications } from "@/data/resume";
import { HiBadgeCheck } from "react-icons/hi";

export default function Coding() {
  return (
    <section id="coding" className="section-pad">
      <SectionHeading
        eyebrow="Problem solving & achievements"
        title="Coding & Certifications"
      />

      {/* Platforms */}
      <div className="mb-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {platforms.map((p, i) => (
          <motion.a
            key={p.name}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className="card flex flex-col items-center text-center"
          >
            <p.icon
              className="mb-3 text-4xl"
              style={{ color: p.color }}
            />
            <h3 className="text-base font-semibold text-slate-900 dark:text-white">{p.name}</h3>
            <p className="mt-1 text-sm text-brand-200">{p.stat}</p>
          </motion.a>
        ))}
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
            <HiBadgeCheck className="mt-0.5 flex-shrink-0 text-xl text-brand-400" />
            <div>
              <p className="text-sm font-semibold text-slate-900 dark:text-white">{c.title}</p>
              <p className="text-xs text-slate-400">{c.issuer}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
