"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { languages, frameworks, dataGis, tools, Skill } from "@/data/resume";

// Brand colors that are near-white or near-black render invisibly on one of the
// two themes, so we let them follow the text color (theme-aware) instead.
const neutralIcons = new Set(["#000000", "#181717", "#FFFFFF", "#363636"]);

function SkillGrid({ items }: { items: Skill[] }) {
  return (
    <div className="grid grid-cols-3 gap-4 sm:grid-cols-4">
      {items.map((s, i) => {
        const isNeutral = neutralIcons.has(s.color);
        return (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.04 }}
            whileHover={{ y: -6 }}
            className="glass flex flex-col items-center gap-2 rounded-xl p-4 transition-colors hover:border-brand-500/50"
          >
            <s.icon
              className={`text-3xl drop-shadow-sm sm:text-4xl ${
                isNeutral ? "text-slate-800 dark:text-slate-100" : ""
              }`}
              style={
                isNeutral
                  ? undefined
                  : {
                      color: s.color,
                      // subtle outline so bright icons (e.g. yellow) stay
                      // readable on the light theme's pale card background.
                      filter:
                        "drop-shadow(0 0 0.5px rgba(15,23,42,0.35))",
                    }
              }
            />
            <span className="text-center text-xs font-medium text-slate-600 dark:text-slate-300 sm:text-sm">
              {s.name}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}

const groups = [
  { title: "Languages", items: languages },
  { title: "Web Technologies & Frameworks", items: frameworks },
  { title: "Data, GIS & APIs", items: dataGis },
  { title: "Developer Tools", items: tools },
];

export default function Skills() {
  return (
    <section id="skills" className="section-pad">
      <SectionHeading eyebrow="What I work with" title="Technical Skills" />

      <div className="space-y-12">
        {groups.map((g, i) => (
          <Reveal key={g.title} delay={i * 0.05}>
            <h3 className="mb-5 text-center text-lg font-semibold text-slate-200 sm:text-left">
              {g.title}
            </h3>
            <SkillGrid items={g.items} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
