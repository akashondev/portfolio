import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { resumeData } from "../data";
import { theme } from "../theme";
import { FadeIn, SectionHeader } from "./Section";

function ProjectCard({ project, index, dark }) {
  const text = dark ? "#f4f4f5" : "#18181b";
  const muted = dark ? "#a1a1aa" : "#52525b";
  const panel = dark ? "#111118" : "#ffffff";
  const line = dark ? theme.lineDark : theme.lineLight;

  return (
    <FadeIn delay={index * 0.08}>
      <motion.article
        whileHover={{ y: -4, boxShadow: dark ? "0 18px 42px rgba(0,0,0,0.34)" : "0 18px 42px rgba(77,73,252,0.12)" }}
        transition={{ type: "spring", stiffness: 260, damping: 24 }}
        className="grid gap-6 border p-5 sm:p-6 lg:grid-cols-[0.8fr_1.2fr]"
        style={{ background: panel, borderColor: line, borderRadius: 8 }}
      >
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em]" style={{ color: muted, fontFamily: theme.fonts.meta }}>
            Case study 0{index + 1}
          </p>
          <h3 className="text-2xl font-black leading-tight" style={{ color: text, fontFamily: theme.fonts.display }}>
            {project.title}
          </h3>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((item) => (
              <span
                key={item}
                className="rounded-md border px-2.5 py-1 text-xs font-bold"
                style={{
                  borderColor: line,
                  color: dark ? "#d4d4d8" : "#3f3f46",
                  background: dark ? "rgba(255,255,255,0.03)" : "#fafafa",
                }}
              >
                {item}
              </span>
            ))}
          </div>
          {project.githubLink && (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.githubLink ? (
              <motion.a
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-10 items-center gap-2 rounded-md border px-4 text-sm font-bold transition hover:opacity-75"
                style={{ borderColor: line, color: text }}
                whileHover={{ y: -2 }}
              >
                GitHub
                <FaGithub size={15} />
              </motion.a>
            ) : null}
          </div>
          )}
        </div>

        <div className="grid gap-5">
          {[
            ["Problem", project.problem],
            ["What I built", project.built],
            ["My contribution", project.role],
          ].map(([label, value]) => (
            <div key={label}>
              <p className="mb-1 text-xs font-bold uppercase tracking-[0.14em]" style={{ color: theme.accent, fontFamily: theme.fonts.meta }}>
                {label}
              </p>
              <p className="text-sm leading-7" style={{ color: muted, fontFamily: theme.fonts.body }}>
                {value}
              </p>
            </div>
          ))}

          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em]" style={{ color: theme.accent, fontFamily: theme.fonts.meta }}>
              Technical highlights
            </p>
            <ul className="grid gap-2">
              {project.highlights.map((item) => (
                <li key={item} className="flex gap-2 text-sm leading-6" style={{ color: muted, fontFamily: theme.fonts.body }}>
                  <CheckCircle2 className="mt-1 shrink-0" size={15} style={{ color: theme.accent }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.article>
    </FadeIn>
  );
}

export default function ProjectsRecruiter({ dark }) {
  return (
    <section
      id="projects"
      className="px-5 py-16 sm:px-6 lg:py-24"
      style={{ background: dark ? "#0d0d14" : "#ffffff" }}
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeader
            label="Selected work"
            title="Projects with real product flows"
            intro="Each project highlights the problem, the technical choices, and where I contributed without relying on broken demos or vague descriptions."
            dark={dark}
          />
        </FadeIn>

        <div className="grid gap-5">
          {resumeData.projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} dark={dark} />
          ))}
        </div>
      </div>
    </section>
  );
}
