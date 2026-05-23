import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { resumeData } from "../data";

/* ── Section Header ── */
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

/* ── FadeIn Animation ── */
function FadeIn({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── About Section ── */
function AboutSection({ dark }) {
  const facts = [
    ["Location", "Mumbai, India"],
    ["Degree", "B.Sc. Computer Science"],
    ["Focus", "Full-Stack & Mobile Dev"],
    ["Email", resumeData.email],
  ];

  return (
    <section
      id="about"
      className={`py-28 px-6 ${dark ? "bg-[#0d0d14]" : "bg-zinc-50"}`}
    >
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionHeader
            label="About Me"
            title="A little about who I am"
            dark={dark}
          />
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Summary */}
          <FadeIn delay={0.1}>
            <p
              className={`text-base leading-[1.85] ${
                dark ? "text-zinc-400" : "text-zinc-500"
              }`}
            >
              {resumeData.summary}
            </p>
          </FadeIn>

          {/* Quick facts */}
          <FadeIn delay={0.2}>
            <div
              className={`rounded-2xl border p-6 ${
                dark ? "bg-[#16161f] border-white/6" : "bg-white border-black/6"
              }`}
            >
              <p
                className={`text-xs font-bold tracking-widest uppercase mb-5 ${
                  dark ? "text-zinc-500" : "text-zinc-400"
                }`}
              >
                Quick Facts
              </p>

              <dl className="space-y-0">
                {facts.map(([label, val], i) => (
                  <div
                    key={label}
                    className={`flex justify-between items-baseline py-3.5 ${
                      i < facts.length - 1
                        ? `border-b ${
                            dark ? "border-white/5" : "border-black/5"
                          }`
                        : ""
                    }`}
                  >
                    <dt
                      className={`text-sm ${
                        dark ? "text-zinc-500" : "text-zinc-400"
                      }`}
                    >
                      {label}
                    </dt>
                    <dd
                      className={`text-sm font-semibold text-right max-w-[60%] break-words ${
                        dark ? "text-zinc-200" : "text-zinc-800"
                      }`}
                    >
                      {val}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ── Skills Section ── */
function Skills({ dark }) {
  return (
    <section
      id="skills"
      className={`py-28 px-6 ${dark ? "bg-[#0a0a0f]" : "bg-white"}`}
    >
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionHeader
            label="Skills"
            title="Technologies I work with"
            dark={dark}
          />
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {resumeData.skills.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: gi * 0.08, duration: 0.55 }}
              whileHover={{ y: -4 }}
              className={`rounded-2xl p-5 border transition-shadow duration-300 hover:shadow-xl ${
                dark
                  ? "bg-[#16161f] border-white/6 hover:shadow-emerald-500/5"
                  : "bg-zinc-50 border-black/6 hover:shadow-emerald-500/10"
              }`}
            >
              <p
                className={`text-[10px] font-black tracking-[2px] uppercase mb-4 ${
                  dark ? "text-emerald-400" : "text-emerald-600"
                }`}
              >
                {group.category}
              </p>

              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className={`text-xs font-medium px-2.5 py-1 rounded-lg ${
                      dark
                        ? "bg-emerald-400/8 text-zinc-300"
                        : "bg-emerald-600/8 text-zinc-700"
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Main Export (Wrapper) ── */
export default function About({ dark }) {
  return (
    <>
      <AboutSection dark={dark} />
      <Skills dark={dark} />
    </>
  );
}
