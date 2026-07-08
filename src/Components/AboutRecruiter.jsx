import { motion } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";
import { resumeData } from "../data";
import { theme } from "../theme";
import { FadeIn, SectionHeader } from "./Section";

function Panel({ children, dark, className = "" }) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
      className={`border ${className}`}
      style={{
        background: dark ? "#111118" : "#ffffff",
        borderColor: dark ? theme.lineDark : theme.lineLight,
        borderRadius: 8,
      }}
    >
      {children}
    </motion.div>
  );
}

export default function AboutRecruiter({ dark }) {
  const text = dark ? "#f4f4f5" : "#18181b";
  const muted = dark ? "#a1a1aa" : "#52525b";
  const band = dark ? "#0a0a0f" : theme.paper;
  const line = dark ? theme.lineDark : theme.lineLight;

  return (
    <>
      <section id="capabilities" className="px-5 py-16 sm:px-6 lg:py-24" style={{ background: band }}>
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <SectionHeader
              label="Capabilities"
              title="Practical product skills"
              intro="I focus on practical implementation work: interfaces, APIs, data flows, and mobile features that connect into complete user journeys."
              dark={dark}
            />
          </FadeIn>

          <div className="grid gap-4 md:grid-cols-2">
            {resumeData.capabilities.map((capability, index) => (
              <FadeIn key={capability.title} delay={index * 0.06}>
                <Panel dark={dark} className="h-full p-5 sm:p-6">
                  <h3 className="text-lg font-black" style={{ color: text, fontFamily: theme.fonts.display }}>
                    {capability.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7" style={{ color: muted, fontFamily: theme.fonts.body }}>
                    {capability.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {capability.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-md border px-2.5 py-1 text-xs font-bold"
                        style={{ borderColor: line, color: muted, fontFamily: theme.fonts.body }}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </Panel>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="px-5 py-16 sm:px-6 lg:py-24" style={{ background: dark ? "#0d0d14" : "#ffffff" }}>
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <FadeIn>
            <SectionHeader
              label="About"
              title="A developer with hands-on product builds"
              intro={resumeData.summary}
              dark={dark}
            />
          </FadeIn>

          <FadeIn delay={0.1}>
            <Panel dark={dark} className="p-5 sm:p-6">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em]" style={{ color: muted, fontFamily: theme.fonts.meta }}>
                Quick facts
              </p>
              <dl>
                {resumeData.quickFacts.map(([label, value]) => (
                  <div
                    key={label}
                    className="flex gap-4 border-b py-3 last:border-b-0"
                    style={{ borderColor: line }}
                  >
                    <dt className="w-28 shrink-0 text-xs font-bold uppercase tracking-[0.12em]" style={{ color: muted, fontFamily: theme.fonts.meta }}>
                      {label}
                    </dt>
                    <dd className="text-sm font-semibold leading-6" style={{ color: text, fontFamily: theme.fonts.body }}>
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Panel>
          </FadeIn>
        </div>
      </section>

      <section id="skills" className="px-5 py-16 sm:px-6 lg:py-20" style={{ background: band }}>
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <SectionHeader
              label="Skills"
              title="Tools connected to shipped work"
              intro="The strongest proof is in the projects above; this is the compact stack overview."
              dark={dark}
            />
          </FadeIn>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {resumeData.skills.map((group, index) => (
              <FadeIn key={group.category} delay={index * 0.04}>
                <Panel dark={dark} className="h-full p-4">
                  <p className="text-xs font-black uppercase tracking-[0.14em]" style={{ color: theme.accent }}>
                    {group.category}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="text-sm leading-6" style={{ color: muted, fontFamily: theme.fonts.body }}>
                        {item}
                      </span>
                    ))}
                  </div>
                </Panel>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="px-5 py-16 sm:px-6 lg:py-24" style={{ background: dark ? "#0d0d14" : "#ffffff" }}>
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <SectionHeader
              label="Credentials"
              title="Education and additional learning"
              dark={dark}
            />
          </FadeIn>

          <div className="grid gap-5 lg:grid-cols-[1fr_1fr]">
            <FadeIn>
              <Panel dark={dark} className="p-5 sm:p-6">
                <div className="mb-5 flex items-center gap-2">
                  <GraduationCap size={18} style={{ color: theme.accent }} />
                  <h3 className="font-black" style={{ color: text, fontFamily: theme.fonts.display }}>
                    Education
                  </h3>
                </div>
                <div className="grid gap-4">
                  {resumeData.education.map((item) => (
                    <div key={item.degree} className="border-b pb-4 last:border-b-0 last:pb-0" style={{ borderColor: line }}>
                      <p className="font-bold" style={{ color: text, fontFamily: theme.fonts.body }}>
                        {item.degree}
                      </p>
                      <p className="mt-1 text-sm leading-6" style={{ color: muted, fontFamily: theme.fonts.body }}>
                        {item.institution}
                      </p>
                      <p className="mt-2 text-xs font-bold uppercase tracking-[0.12em]" style={{ color: theme.accent, fontFamily: theme.fonts.meta }}>
                        {item.period}{item.grade ? ` / ${item.grade}` : ""}
                      </p>
                    </div>
                  ))}
                </div>
              </Panel>
            </FadeIn>

            <FadeIn delay={0.1}>
              <Panel dark={dark} className="p-5 sm:p-6">
                <div className="mb-5 flex items-center gap-2">
                  <Award size={18} style={{ color: theme.accent }} />
                  <h3 className="font-black" style={{ color: text, fontFamily: theme.fonts.display }}>
                    Certifications
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {resumeData.certifications.map((cert) => (
                    <span key={cert} className="rounded-md border px-3 py-2 text-sm font-semibold" style={{ borderColor: line, color: muted, fontFamily: theme.fonts.body }}>
                      {cert}
                    </span>
                  ))}
                </div>
              </Panel>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
