import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { profile, coursework } from "@/data/resume";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";

const facts = [
  { icon: HiOutlineLocationMarker, label: "Location", value: profile.location },
  { icon: HiOutlineMail, label: "Email", value: profile.email },
  { icon: HiOutlinePhone, label: "Phone", value: profile.phone },
];

export default function About() {
  return (
    <section id="about" className="section-pad">
      <SectionHeading eyebrow="Get to know me" title="About Me" />

      <div className="grid gap-10 md:grid-cols-5">
        <Reveal className="md:col-span-3">
          <div className="card h-full">
            <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">
              Who I am
            </h3>
            <p className="leading-relaxed text-slate-300">{profile.summary}</p>

            <div className="mt-6 space-y-3">
              {facts.map((f) => (
                <div key={f.label} className="flex items-center gap-3 text-sm">
                  <f.icon className="text-lg text-brand-400" />
                  <span className="text-slate-400">{f.label}:</span>
                  <span className="text-slate-200">{f.value}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="md:col-span-2">
          <div className="card h-full">
            <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">
              Coursework
            </h3>
            <div className="flex flex-wrap gap-2">
              {coursework.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1.5 text-sm font-medium text-brand-200"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
