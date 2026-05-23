import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { resumeData } from "../data";

import { ExternalLink } from "lucide-react";
import { FaCertificate } from "react-icons/fa";

/* ── Helpers ── */
function SectionHeader({ label, title, dark }) {
  return (
    <div className="mb-12">
      <p
        className={`text-xs font-bold tracking-[3px] uppercase mb-3 ${
          dark ? "text-emerald-400" : "text-emerald-600"
        }`}
      >
        {label}
      </p>

      <h2
        className={`text-4xl md:text-5xl font-black tracking-tight mb-4 ${
          dark ? "text-white" : "text-zinc-900"
        }`}
      >
        {title}
      </h2>

      <div className="w-14 h-1 rounded-full bg-gradient-to-r from-emerald-400 to-blue-500" />
    </div>
  );
}

function FadeIn({ children, delay = 0, className = "" }) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-60px",
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Projects Section ── */
function Projectss({ dark }) {
  return (
    <section
      id="projects"
      className={`py-28 px-6 ${dark ? "bg-[#0d0d14]" : "bg-zinc-50"}`}
    >
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionHeader
            label="Projects"
            title="Things I've built"
            dark={dark}
          />
        </FadeIn>

        <div className="space-y-6">
          {resumeData.projects.map((proj, pi) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                delay: pi * 0.12,
                duration: 0.6,
              }}
              whileHover={{ y: -3 }}
              className={`relative rounded-2xl p-8 md:p-10 border overflow-hidden transition-shadow duration-300 hover:shadow-2xl ${
                dark
                  ? "bg-[#16161f] border-white/6 hover:shadow-emerald-500/5"
                  : "bg-white border-black/6 hover:shadow-zinc-200"
              }`}
            >
              {/* Background number */}
              <span
                className={`absolute top-0 right-4 text-[120px] font-black leading-none select-none pointer-events-none ${
                  dark ? "text-white/[0.03]" : "text-black/[0.04]"
                }`}
              >
                0{pi + 1}
              </span>

              <div className="relative z-10">
                {/* Title */}
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3
                    className={`text-xl md:text-2xl font-bold tracking-tight ${
                      dark ? "text-white" : "text-zinc-900"
                    }`}
                  >
                    {proj.title}
                  </h3>

                  {proj.link && (
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noreferrer"
                      className={`flex items-center gap-1 text-xs font-semibold transition-colors ${
                        dark
                          ? "text-emerald-400 hover:text-emerald-300"
                          : "text-emerald-600 hover:text-emerald-700"
                      }`}
                    >
                      Live <ExternalLink size={13} />
                    </a>
                  )}
                </div>

                {/* Description */}
                <p
                  className={`text-sm leading-relaxed mb-5 max-w-2xl ${
                    dark ? "text-zinc-400" : "text-zinc-500"
                  }`}
                >
                  {proj.description}
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className={`text-xs font-semibold px-3 py-1 rounded-md ${
                        dark
                          ? "bg-emerald-400/10 text-emerald-400"
                          : "bg-emerald-600/10 text-emerald-700"
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                <ul className="space-y-1.5">
                  {proj.highlights.map((h) => (
                    <li
                      key={h}
                      className={`flex items-start gap-2 text-sm ${
                        dark ? "text-zinc-500" : "text-zinc-400"
                      }`}
                    >
                      <span
                        className={`mt-0.5 font-bold ${
                          dark ? "text-emerald-400" : "text-emerald-600"
                        }`}
                      >
                        ›
                      </span>

                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Education Section ── */
function Education({ dark }) {
  return (
    <section
      id="education"
      className={`py-28 px-6 ${dark ? "bg-[#0a0a0f]" : "bg-white"}`}
    >
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionHeader
            label="Education & Certifications"
            title="My learning journey"
            dark={dark}
          />
        </FadeIn>

        {/* Education */}
        <div className="space-y-4 mb-16">
          {resumeData.education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                delay: i * 0.1,
                duration: 0.55,
              }}
              whileHover={{ y: -2 }}
              className={`flex gap-5 items-start rounded-2xl p-6 border transition-shadow duration-300 hover:shadow-lg ${
                dark
                  ? "bg-[#16161f] border-white/6 hover:shadow-emerald-500/5"
                  : "bg-zinc-50 border-black/6 hover:shadow-zinc-200"
              }`}
            >
              <div className="w-3 h-3 rounded-full mt-1.5 flex-shrink-0 bg-gradient-to-br from-emerald-400 to-blue-500" />

              <div>
                <p
                  className={`text-base font-bold mb-1 ${
                    dark ? "text-white" : "text-zinc-900"
                  }`}
                >
                  {edu.degree}
                </p>

                <p
                  className={`text-sm mb-2 ${
                    dark ? "text-zinc-500" : "text-zinc-400"
                  }`}
                >
                  {edu.institution}
                </p>

                <div className="flex gap-4 flex-wrap">
                  <span
                    className={`text-xs font-semibold ${
                      dark ? "text-emerald-400" : "text-emerald-600"
                    }`}
                  >
                    {edu.period}
                  </span>

                  {edu.grade && (
                    <span
                      className={`text-xs ${
                        dark ? "text-zinc-500" : "text-zinc-400"
                      }`}
                    >
                      {edu.grade}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <FadeIn delay={0.1}>
          <div className="flex items-center gap-2 mb-5">
            <FaCertificate
              className={dark ? "text-emerald-400" : "text-emerald-600"}
              size={14}
            />

            <p
              className={`text-xs font-bold tracking-[3px] uppercase ${
                dark ? "text-emerald-400" : "text-emerald-600"
              }`}
            >
              Certifications
            </p>
          </div>
        </FadeIn>

        <div className="flex flex-wrap gap-3 mb-16">
          {resumeData.certifications.map((cert, i) => (
            <motion.div
              key={cert}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.06,
                duration: 0.4,
              }}
              whileHover={{ y: -2 }}
              className={`px-4 py-2.5 rounded-xl text-sm font-medium border transition-shadow duration-300 cursor-default ${
                dark
                  ? "bg-[#16161f] border-white/6 text-zinc-300 hover:border-emerald-400/20"
                  : "bg-zinc-50 border-black/6 text-zinc-700 hover:border-emerald-500/20"
              }`}
            >
              {cert}
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        {resumeData.achievements.length > 0 && (
          <>
            <FadeIn delay={0.1}>
              <p
                className={`text-xs font-bold tracking-[3px] uppercase mb-5 ${
                  dark ? "text-emerald-400" : "text-emerald-600"
                }`}
              >
                Achievements
              </p>
            </FadeIn>

            {resumeData.achievements.map((a) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`flex gap-5 items-start rounded-2xl p-6 border ${
                  dark
                    ? "bg-[#16161f] border-white/6"
                    : "bg-zinc-50 border-black/6"
                }`}
              >
                <div className="w-3 h-3 rounded-full mt-1.5 flex-shrink-0 bg-gradient-to-br from-amber-400 to-yellow-500" />

                <div>
                  <p
                    className={`text-base font-bold mb-1 ${
                      dark ? "text-white" : "text-zinc-900"
                    }`}
                  >
                    {a.title}
                  </p>

                  <p
                    className={`text-sm leading-relaxed ${
                      dark ? "text-zinc-500" : "text-zinc-400"
                    }`}
                  >
                    {a.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </>
        )}
      </div>
    </section>
  );
}

/* ── Combined Export ── */
export default function Projects({ dark }) {
  return (
    <>
      <Projectss dark={dark} />
      <Education dark={dark} />
    </>
  );
}
