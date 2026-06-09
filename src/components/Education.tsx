import { HiAcademicCap } from "react-icons/hi";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { education } from "@/data/resume";

export default function Education() {
  return (
    <section id="education" className="section-pad">
      <SectionHeading eyebrow="My background" title="Education" />

      <div className="relative mx-auto max-w-3xl">
        {/* Timeline line */}
        <div className="absolute left-4 top-2 h-full w-px bg-gradient-to-b from-brand-500 via-violet-500/50 to-transparent sm:left-1/2" />

        <div className="space-y-10">
          {education.map((e, i) => (
            <Reveal key={e.institute} delay={i * 0.08}>
              <div
                className={`relative pl-12 sm:w-1/2 sm:pl-0 ${
                  i % 2 === 0
                    ? "sm:ml-auto sm:pl-10 sm:text-left"
                    : "sm:mr-auto sm:pr-10 sm:text-right"
                }`}
              >
                {/* Dot */}
                <span
                  className={`absolute left-2.5 top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-brand-500 ring-4 ring-brand-500/20 sm:left-auto ${
                    i % 2 === 0 ? "sm:-left-12" : "sm:-right-12"
                  }`}
                />
                <div className="card">
                  <div className="mb-1 flex items-center gap-2 sm:justify-start">
                    <HiAcademicCap className="text-lg text-brand-400" />
                    <span className="text-xs font-semibold uppercase tracking-wide text-brand-300">
                      {e.period}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                    {e.institute}
                  </h3>
                  <p className="mt-1 text-sm text-slate-300">{e.degree}</p>
                  <p className="mt-1 text-sm font-medium text-brand-200">
                    {e.detail}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">{e.place}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
