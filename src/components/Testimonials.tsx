"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import { testimonials } from "@/data/resume";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-pad">
      <SectionHeading eyebrow="Kind words" title="Testimonials" />

      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.figure
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="card flex h-full flex-col"
          >
            <FaQuoteLeft className="mb-4 text-2xl text-brand-500/70 dark:text-brand-400/70" />

            <blockquote className="flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              “{t.quote}”
            </blockquote>

            <figcaption className="mt-6 flex items-center gap-3 border-t border-black/10 pt-4 dark:border-white/10">
              {t.image ? (
                <span className="relative h-11 w-11 flex-shrink-0 overflow-hidden rounded-full ring-2 ring-brand-500/30">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </span>
              ) : (
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-violet-500 text-sm font-bold text-white">
                  {t.name
                    .split(" ")
                    .map((w) => w[0])
                    .join("")
                    .slice(0, 2)
                    .toUpperCase()}
                </span>
              )}
              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  {t.name}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {t.role}
                </p>
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
