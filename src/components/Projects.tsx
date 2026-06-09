"use client";

import { motion } from "framer-motion";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FaRegFolderOpen } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import { projects } from "@/data/resume";

export default function Projects() {
  return (
    <section id="projects" className="section-pad">
      <SectionHeading eyebrow="My work" title="Featured Projects" />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="card group flex flex-col"
          >
            <div className="mb-4 flex items-center justify-between">
              <FaRegFolderOpen className="text-3xl text-brand-400" />
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${p.title}`}
                  className="text-xl text-slate-500 transition-colors hover:text-brand-300"
                >
                  <HiOutlineExternalLink />
                </a>
              )}
            </div>

            <h3 className="text-lg font-semibold text-slate-900 transition-colors group-hover:text-brand-500 dark:text-white dark:group-hover:text-brand-300">
              {p.title}
            </h3>
            <p className="mb-3 text-xs font-medium text-slate-500">{p.period}</p>

            <ul className="mb-4 flex-1 space-y-2">
              {p.points.map((pt, idx) => (
                <li
                  key={idx}
                  className="flex gap-2 text-sm leading-relaxed text-slate-400"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-500" />
                  {pt}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-md bg-white/5 px-2.5 py-1 text-xs font-medium text-brand-200"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
