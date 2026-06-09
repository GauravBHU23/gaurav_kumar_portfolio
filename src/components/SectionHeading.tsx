import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
}

export default function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
  return (
    <Reveal className="mb-12 text-center">
      <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-brand-400">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
        <span className="gradient-text">{title}</span>
      </h2>
      <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-brand-500 to-violet-500" />
    </Reveal>
  );
}
