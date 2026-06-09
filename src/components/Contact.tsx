import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
  HiOutlineAcademicCap,
} from "react-icons/hi";
import { FaLinkedin, FaGithub, FaHackerrank } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import ContactForm from "./ContactForm";
import { profile, socials } from "@/data/resume";

const contactCards = [
  {
    icon: HiOutlineMail,
    label: "Institutional Email",
    value: profile.emailInstitutional,
    href: `mailto:${profile.emailInstitutional}`,
  },
  {
    icon: HiOutlineMail,
    label: "Personal Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: HiOutlinePhone,
    label: "Mobile",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/[^+\d]/g, "")}`,
  },
  {
    icon: HiOutlineLocationMarker,
    label: "Current Address",
    value: profile.address,
    href: undefined,
  },
  {
    icon: HiOutlineAcademicCap,
    label: "Institution",
    value: profile.institution,
    href: undefined,
  },
];

const socialLinks = [
  { href: socials.linkedin, icon: FaLinkedin, label: "LinkedIn" },
  { href: socials.github, icon: FaGithub, label: "GitHub" },
  { href: socials.hackerrank, icon: FaHackerrank, label: "HackerRank" },
  { href: socials.leetcode, icon: SiLeetcode, label: "LeetCode" },
];

export default function Contact() {
  return (
    <section id="contact" className="section-pad">
      <SectionHeading eyebrow="Let's connect" title="Get In Touch" />

      <Reveal>
        <p className="mx-auto mb-10 max-w-xl text-center text-slate-400">
          I&apos;m open to internships, freelance work, and collaboration. Feel
          free to reach out — I&apos;ll get back to you as soon as I can.
        </p>
      </Reveal>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Left — contact info + socials */}
        <Reveal className="flex flex-col gap-4">
          {contactCards.map((c) => {
            const Inner = (
              <div className="card flex h-full items-center gap-4">
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-brand-500/15 text-xl text-brand-300">
                  <c.icon />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">
                    {c.label}
                  </p>
                  <p className="mt-0.5 break-all text-sm font-medium text-slate-200">
                    {c.value}
                  </p>
                </div>
              </div>
            );
            return c.href ? (
              <a key={c.label} href={c.href} className="block">
                {Inner}
              </a>
            ) : (
              <div key={c.label}>{Inner}</div>
            );
          })}

          <div className="mt-2 flex gap-4">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="glass flex h-12 w-12 items-center justify-center rounded-full text-xl text-slate-300 transition-all hover:-translate-y-1 hover:text-brand-300"
              >
                <s.icon />
              </a>
            ))}
          </div>
        </Reveal>

        {/* Right — message form */}
        <Reveal delay={0.15}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
