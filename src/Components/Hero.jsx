import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { resumeData } from "../data";
import { Mail, ArrowDown } from "lucide-react";
import {
  FaGithub as GithubIcon,
  FaLinkedin as LinkedInIcon,
} from "react-icons/fa";

const HERO_ROLES = ["Computer Science Graduate", "Full-Stack Developer"];

export default function Hero({ dark }) {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % HERO_ROLES.length);
    }, 5000);
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
      {/* Background glow — scale+opacity but on its own GPU layer */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.55, 0.7, 0.55],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          left: 150,
          bottom: 70,
          height: 250,
          width: 250,
          borderRadius: "50%",
          filter: "blur(100px)",
          pointerEvents: "none",
          background:
            "radial-gradient(circle at top left, #7c77fe 0%, #4F46C8 45%, #7E22CE 100%)",
          willChange: "transform, opacity",
          transform: "translateZ(0)",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "25%",
          right: "25%",
          width: 280,
          height: 280,
          borderRadius: "50%",
          filter: "blur(70px)",
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
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[#4D49FC]"
          style={{
            fontSize: "clamp(42px, 9vw, 88px)",
            fontWeight: 900,
            lineHeight: 1.02,
            letterSpacing: "-0.06em",
            marginBottom: 18,
            willChange: "transform",
          }}
        >
          {resumeData.name}
        </motion.h1>

        {/* Role — whole word fade instead of per-letter (massive perf win) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{
            fontFamily: "Google Sans Text",
            fontSize: "clamp(20px, 3vw, 30px)",
            fontWeight: 600,
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
              key={HERO_ROLES[roleIndex]}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              style={{
                position: "absolute",
                backgroundImage: dark // ← use backgroundImage, not background
                  ? "linear-gradient(135deg, #E5E4E2, #E5E4E2)"
                  : "linear-gradient(135deg, #3B3B3B, #3B3B3B)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent", // ← belt-and-suspenders fallback
                letterSpacing: "-0.03em",
                display: "inline-flex",
                willChange: "opacity",
              }}
            >
              {HERO_ROLES[roleIndex].split("").map((letter, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { duration: 0.4, delay: i * 0.05 },
                    },
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
          transition={{ duration: 0.6, delay: 0.35 }}
          style={{
            fontFamily: "Google Sans Text",
            fontSize: "clamp(15px, 2vw, 18px)",
            fontWeight: 420,
            lineHeight: 1.7,
            maxWidth: 520,
            margin: "0 auto 40px",
            color: dark ? "#C0C0C0" : "#36454F",
          }}
        >
          {resumeData.tagline}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            justifyContent: "center",
            marginBottom: 60,
          }}
        >
          <button
            onClick={() => scrollTo("projects")}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#3F3BFC";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#4D49FC";
            }}
            style={{
              padding: "14px 28px",
              borderRadius: 9999,
              fontWeight: 600,
              fontSize: 14,
              color: "#ffffff",
              background: "#4D49FC",
              border: "none",
              cursor: "pointer",
              transition: "all 0.2s ease",
              boxShadow: "0 4px 15px rgba(16,185,129,0.2)",
            }}
          >
            View Projects
          </button>

          <button
            onClick={() => scrollTo("contact")}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#000000";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = dark ? "#d4d4d8" : "#3f3f46";
            }}
            style={{
              padding: "14px 28px",
              borderRadius: 9999,
              fontWeight: 600,
              fontSize: 14,
              border: dark ? "2px solid #848884" : "2px solid #848884",
              backgroundColor: "transparent",
              color: dark ? "#d4d4d8" : "#3f3f46",
              cursor: "pointer",
              transition: "color 0.2s ease",
            }}
          >
            Get in Touch
          </button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          style={{
            display: "flex",
            gap: 20,
            justifyContent: "center",
          }}
        >
          {[
            { href: resumeData.github, Icon: GithubIcon, label: "GitHub" },
            {
              href: resumeData.linkedin,
              Icon: LinkedInIcon,
              label: "LinkedIn",
            },
            { href: `mailto:${resumeData.email}`, Icon: Mail, label: "Email" },
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
                color: "#71717a",
                textDecoration: "none",
                transition: "opacity 0.2s ease",
              }}
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>

        {/* Scroll indicator — CSS animation only, no framer-motion loop */}
        <button
          onClick={() => scrollTo("about")}
          style={{
            position: "absolute",
            bottom: 56,
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
            opacity: 0,
            animation: "fadeIn 0.4s 1.2s forwards",
          }}
        >
          <span>Scroll</span>
          <span className="scroll-arrow">
            <ArrowDown size={20} />
          </span>
        </button>
      </div>

      <style>{`
        @keyframes fadeIn {
          to { opacity: 1; }
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(5px); }
        }

        .scroll-arrow {
          animation: bounce 1.5s ease-in-out infinite;
          display: block;
        }
      `}</style>
    </section>
  );
}
