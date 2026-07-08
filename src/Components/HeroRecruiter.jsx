import { motion } from "framer-motion";
import { Mail, FileText, MapPin, ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { resumeData } from "../data";
import { theme } from "../theme";

const heroContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.08 },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] } },
};

export default function HeroRecruiter({ dark }) {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const text = dark ? "#f4f4f5" : "#18181b";
  const muted = dark ? "#a1a1aa" : "#52525b";
  const panel = dark ? "#111118" : "#ffffff";
  const line = dark ? theme.lineDark : theme.lineLight;
  const snapshotItems = [
    ["Role focus", "Full-stack web apps"],
    ["Frontend", "React, Tailwind, dashboards"],
    ["Backend", "Node.js, Express, REST APIs"],
    ["Data + mobile", "MongoDB, SQL, Android"],
  ];

  return (
    <section
      id="hero"
      className="px-5 pb-14 pt-[76px] sm:px-6 lg:pt-[84px]"
      style={{ background: dark ? "#0a0a0f" : theme.paper, color: text }}
    >
      <div className="mx-auto grid max-w-6xl gap-8 py-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:py-12">
        <motion.div variants={heroContainer} initial="hidden" animate="visible">
          <motion.div
            variants={heroItem}
            className="mb-6 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em]"
            style={{ borderColor: line, color: muted, fontFamily: theme.fonts.meta }}
          >
            <MapPin size={14} />
            {resumeData.location} / {resumeData.availability}
          </motion.div>

          <motion.h1
            variants={heroItem}
            className="max-w-4xl text-4xl font-black leading-[1.02] sm:text-5xl lg:text-6xl"
            style={{ fontFamily: theme.fonts.display }}
          >
            {resumeData.name}
            <span className="block" style={{ color: theme.accent }}>
              {resumeData.role}
            </span>
          </motion.h1>

          <motion.p
            variants={heroItem}
            className="mt-6 max-w-2xl text-base leading-8 sm:text-lg"
            style={{ color: muted, fontFamily: theme.fonts.body }}
          >
            {resumeData.tagline}
          </motion.p>

          <motion.div variants={heroItem} className="mt-8 flex flex-wrap gap-3">
            <motion.button
              onClick={() => scrollTo("contact")}
              className="inline-flex min-h-11 items-center gap-2 rounded-md px-5 text-sm font-bold text-white transition hover:opacity-90"
              style={{ background: theme.accent }}
              whileHover={{ y: -2, boxShadow: "0 14px 30px rgba(77,73,252,0.22)" }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail size={17} />
              Contact me
            </motion.button>
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-md border px-5 text-sm font-bold transition hover:border-zinc-500"
              style={{ borderColor: line, color: text }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <FileText size={17} />
              View resume
            </motion.a>
            <motion.button
              onClick={() => scrollTo("projects")}
              className="inline-flex min-h-11 items-center gap-2 rounded-md px-2 text-sm font-bold transition hover:opacity-75"
              style={{ color: theme.accent }}
              whileHover={{ x: 3 }}
            >
              Selected work
              <ArrowRight size={16} />
            </motion.button>
          </motion.div>

          <motion.div variants={heroItem} className="mt-8 flex min-w-0 flex-wrap items-center gap-3">
            <motion.a
              href={resumeData.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border transition hover:opacity-75"
              style={{ borderColor: line, color: text }}
              aria-label="GitHub profile"
              whileHover={{ y: -2, color: theme.accent }}
            >
              <FaGithub size={18} />
            </motion.a>
            <motion.a
              href={resumeData.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border transition hover:opacity-75"
              style={{ borderColor: line, color: text }}
              aria-label="LinkedIn profile"
              whileHover={{ y: -2, color: theme.accent }}
            >
              <FaLinkedin size={18} />
            </motion.a>
            <a
              href={`mailto:${resumeData.email}`}
              className="min-w-0 max-w-full break-all text-sm font-semibold underline-offset-4 hover:underline"
              style={{ color: muted, fontFamily: theme.fonts.body }}
            >
              {resumeData.email}
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.65, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -4, boxShadow: dark ? "0 20px 45px rgba(0,0,0,0.35)" : "0 20px 45px rgba(77,73,252,0.12)" }}
          className="border p-5 sm:p-6"
          style={{ background: panel, borderColor: line, borderRadius: 8 }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.16em]" style={{ color: muted, fontFamily: theme.fonts.meta }}>
            Profile snapshot
          </p>
          <div className="mt-5 grid grid-cols-1 gap-4">
            {snapshotItems.map(([label, value]) => (
              <div
                key={label}
                className="border-b pb-4"
                style={{ borderColor: line }}
              >
                <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.14em]" style={{ color: theme.accent, fontFamily: theme.fonts.meta }}>
                  {label}
                </p>
                <p className="text-sm font-semibold leading-6" style={{ color: text, fontFamily: theme.fonts.body }}>
                  {value}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm leading-7" style={{ color: muted, fontFamily: theme.fonts.body }}>
            Best fit: product teams hiring for React, Node, dashboard, API,
            database, or Android work.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
