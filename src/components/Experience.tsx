import { HiBriefcase } from "react-icons/hi";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { experience } from "@/data/resume";

export default function Experience() {
  return (
    <section id="experience" className="section-pad">
      <SectionHeading eyebrow="Where I've worked" title="Work Experience" />

      <div className="mx-auto max-w-3xl space-y-8">
        {experience.map((e, i) => (
          <Reveal key={e.company} delay={i * 0.1}>
            <div className="card">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/15 text-xl text-brand-300">
                    <HiBriefcase />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {e.role}
                    </h3>
                    <p className="text-sm text-brand-200">{e.company}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-300">
                    {e.period}
                  </p>
                  <p className="text-xs text-slate-500">{e.place}</p>
                </div>
              </div>

              <ul className="mt-4 space-y-2.5">
                {e.points.map((pt, idx) => (
                  <li
                    key={idx}
                    className="flex gap-2.5 text-sm leading-relaxed text-slate-300"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-500" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
