"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { platforms } from "@/data/resume";
import { HiOutlineExternalLink } from "react-icons/hi";

export default function Coding() {
  return (
    <section id="coding" className="section-pad">
      <SectionHeading
        eyebrow="Competitive programming"
        title="Coding Profiles"
      />

      {/* Platforms */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {platforms.map((p, i) => {
          const hasLink = p.link && p.link !== "#";
          return (
            <motion.a
              key={p.name}
              href={hasLink ? p.link : undefined}
              target={hasLink ? "_blank" : undefined}
              rel={hasLink ? "noreferrer" : undefined}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className={`card flex flex-col items-center text-center ${
                hasLink ? "cursor-pointer" : "cursor-default"
              }`}
            >
              <p.icon className="mb-3 text-4xl" style={{ color: p.color }} />
              <h3 className="flex items-center gap-1.5 text-base font-semibold text-slate-900 dark:text-white">
                {p.name}
                {hasLink && (
                  <HiOutlineExternalLink className="text-sm text-slate-400" />
                )}
              </h3>
              <p className="mt-1 text-sm text-brand-200">{p.stat}</p>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}
