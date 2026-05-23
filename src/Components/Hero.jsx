import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { resumeData } from "../data";

import { Mail, ArrowDown, FileText, Download } from "lucide-react";

import {
  FaGithub as GithubIcon,
  FaLinkedin as LinkedInIcon,
} from "react-icons/fa";

export default function Hero({ dark }) {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

  /* Sliding roles */
  const roles = [
    "Full-Stack Developer",
    "React.js Enthusiast",
    "Problem Solver",
    "Node.js Developer",
  ];

  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        padding: "80px 24px 64px",
      }}
    >
      {/* Background glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[-100px] bottom-[-100px] h-[600px] w-[600px] blur-[120px] rounded-full pointer-events-none bg-gradient-to-r from-emerald-400/60 via-blue-500/40 to-violet-500/30"
      />

      <div
        style={{
          position: "absolute",
          top: "25%",
          right: "25%",
          width: 320,
          height: 320,
          borderRadius: "50%",
          filter: "blur(80px)",
          pointerEvents: "none",
          backgroundColor: dark
            ? "rgba(59,130,246,0.05)"
            : "rgba(96,165,250,0.06)",
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: 768,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`bg-clip-text text-transparent ${
            dark
              ? "bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500"
              : "bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700"
          }`}
          style={{
            fontSize: "clamp(42px, 9vw, 88px)",
            fontWeight: 900,
            lineHeight: 1.02,
            letterSpacing: "-0.06em",
            marginBottom: 18,
          }}
        >
          {resumeData.name}
        </motion.h1>

        {/* Typing animation */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{
            fontSize: "clamp(20px, 3vw, 30px)",
            fontWeight: 800,
            marginBottom: 24,
            height: 45,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={roles[roleIndex]}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              style={{
                position: "absolute",
                background:
                  "linear-gradient(135deg, #34d399 0%, #3b82f6 50%, #8b5cf6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                letterSpacing: "-0.03em",
                display: "inline-flex",
              }}
            >
              {roles[roleIndex].split("").map((letter, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { duration: 0.15, delay: i * 0.06 },
                    },
                  }}
                  style={{
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          style={{
            fontSize: "clamp(15px, 2vw, 18px)",
            lineHeight: 1.7,
            maxWidth: 520,
            margin: "0 auto 40px",
            color: dark ? "#a1a1aa" : "#71717a",
          }}
        >
          {resumeData.tagline}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            justifyContent: "center",
            marginBottom: 48,
          }}
        >
          <button
            onClick={() => scrollTo("projects")}
            style={{
              padding: "14px 28px",
              borderRadius: 9999,
              fontWeight: 600,
              fontSize: 14,
              color: "#ffffff",
              background: "linear-gradient(to right, #10b981, #3b82f6)",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 15px rgba(16,185,129,0.2)",
            }}
          >
            View Projects
          </button>

          <button
            onClick={() => scrollTo("contact")}
            style={{
              padding: "14px 28px",
              borderRadius: 9999,
              fontWeight: 600,
              fontSize: 14,
              border: dark
                ? "1px solid rgba(255,255,255,0.12)"
                : "1px solid rgba(0,0,0,0.12)",
              backgroundColor: "transparent",
              color: dark ? "#d4d4d8" : "#3f3f46",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >
            Get in Touch
          </button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          style={{
            display: "flex",
            gap: 20,
            justifyContent: "center",
          }}
        >
          {[
            {
              href: resumeData.github,
              Icon: GithubIcon,
              label: "GitHub",
            },
            {
              href: resumeData.linkedin,
              Icon: LinkedInIcon,
              label: "LinkedIn",
            },
            {
              href: `mailto:${resumeData.email}`,
              Icon: Mail,
              label: "Email",
            },
          ].map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              style={{
                width: 42,
                height: 42,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: dark
                  ? "1px solid rgba(255,255,255,0.1)"
                  : "1px solid rgba(0,0,0,0.1)",
                color: dark ? "#71717a" : "#71717a",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>

        {/* Scroll */}
        <motion.button
          onClick={() => scrollTo("about")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{
            position: "absolute",
            bottom: 32,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: dark ? "#52525b" : "#a1a1aa",
          }}
        >
          <span>Scroll</span>

          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={20} />
          </motion.span>
        </motion.button>
      </div>
      {/* Keyframes */}
      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }

          50% {
            opacity: 0.6;
            transform: scale(1.2);
          }
        }
      `}</style>
      {/* Bottom fade blend */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 160,
          pointerEvents: "none",
          background: dark
            ? "linear-gradient(to bottom, transparent, #09090b)"
            : "linear-gradient(to bottom, transparent, #ffffff)",
          zIndex: 20,
        }}
      />
    </section>
  );
}
