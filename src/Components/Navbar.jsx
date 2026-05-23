import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../data";

import {
  Sun,
  Moon,
  Menu,
  X,
  ChevronDown,
  FileText,
  Download,
} from "lucide-react";

export default function Navbar({ dark, setDark, activeSection }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    const onResize = () => setIsMobile(window.innerWidth < 768);

    window.addEventListener("scroll", onScroll);

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);

      window.removeEventListener("resize", onResize);
    };
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMobileOpen(false);
  };

  const navBg = scrolled
    ? dark
      ? "rgba(10,10,15,0.9)"
      : "rgba(255,255,255,0.9)"
    : "transparent";

  const borderBottom = scrolled
    ? dark
      ? "1px solid rgba(255,255,255,0.05)"
      : "1px solid rgba(0,0,0,0.05)"
    : "1px solid transparent";

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          backdropFilter: scrolled ? "blur(20px)" : "none",
          backgroundColor: navBg,
          borderBottom,
          boxShadow: scrolled
            ? dark
              ? "0 4px 30px rgba(0,0,0,0.4)"
              : "0 4px 20px rgba(0,0,0,0.08)"
            : "none",
          transition: "all 0.5s ease",
        }}
      >
        <div
          style={{
            maxWidth: 1152,
            margin: "0 auto",
            padding: "0 24px",
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <button
            onClick={() => scrollTo("hero")}
            style={{
              fontSize: 20,
              fontWeight: 900,
              background: "linear-gradient(to right, #34d399, #3b82f6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              border: "none",
              cursor: "pointer",
              letterSpacing: "-0.05em",
            }}
          >
            AV
          </button>

          {/* Desktop Nav */}
          {!isMobile && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 4,
              }}
            >
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;

                return (
                  <button
                    key={link.id}
                    onClick={() => scrollTo(link.id)}
                    style={{
                      padding: "8px 16px",
                      borderRadius: 9999,
                      fontSize: 16,
                      fontWeight: 500,
                      border: "none",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      backgroundColor: isActive
                        ? dark
                          ? "rgba(52,211,153,0.1)"
                          : "rgba(5,150,105,0.1)"
                        : "transparent",
                      color: isActive
                        ? dark
                          ? "#34d399"
                          : "#059669"
                        : dark
                          ? "#a1a1aa"
                          : "#71717a",
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = dark
                          ? "#e4e4e7"
                          : "#18181b";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = dark
                          ? "#a1a1aa"
                          : "#71717a";
                      }
                    }}
                  >
                    {link.label}
                  </button>
                );
              })}

              {/* Resume Dropdown */}
              <div style={{ position: "relative" }}>
                <button
                  onClick={() => setResumeOpen(!resumeOpen)}
                  style={{
                    padding: "8px 16px",
                    borderRadius: 9999,
                    fontSize: 14,
                    fontWeight: 500,
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    background: dark
                      ? "rgba(255,255,255,0.04)"
                      : "rgba(0,0,0,0.04)",
                    color: dark ? "#e4e4e7" : "#18181b",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  Resume
                  <ChevronDown size={16} />
                </button>

                <AnimatePresence>
                  {resumeOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      style={{
                        position: "absolute",
                        top: 48,
                        right: 0,
                        width: 220,
                        borderRadius: 18,
                        overflow: "hidden",
                        backdropFilter: "blur(20px)",
                        background: dark
                          ? "rgba(20,20,25,0.95)"
                          : "rgba(255,255,255,0.95)",
                        border: dark
                          ? "1px solid rgba(255,255,255,0.06)"
                          : "1px solid rgba(0,0,0,0.06)",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                      }}
                    >
                      {/* View Resume */}
                      <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          padding: "14px 16px",
                          display: "flex",
                          alignItems: "center",
                          gap: 10,
                          textDecoration: "none",
                          color: dark ? "#e4e4e7" : "#18181b",
                          fontSize: 14,
                          transition: "all 0.2s ease",
                        }}
                      >
                        <FileText size={16} />
                        View Resume
                      </a>

                      {/* Download PDF */}
                      <a
                        href="/resume.pdf"
                        download="Akash_Vishwakarma_Resume.pdf"
                        style={{
                          padding: "14px 16px",
                          display: "flex",
                          alignItems: "center",
                          gap: 10,
                          textDecoration: "none",
                          color: dark ? "#e4e4e7" : "#18181b",
                          fontSize: 14,
                          borderTop: dark
                            ? "1px solid rgba(255,255,255,0.05)"
                            : "1px solid rgba(0,0,0,0.05)",
                          transition: "all 0.2s ease",
                        }}
                      >
                        <Download size={16} />
                        Download PDF
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Theme Toggle */}
              <button
                onClick={() => setDark(!dark)}
                style={{
                  marginLeft: 8,
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: dark
                    ? "1px solid rgba(255,255,255,0.1)"
                    : "1px solid rgba(0,0,0,0.1)",
                  background: "transparent",
                  cursor: "pointer",
                  color: dark ? "#a1a1aa" : "#71717a",
                  transition: "all 0.3s ease",
                }}
              >
                {dark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
          )}

          {/* Mobile Controls */}
          {isMobile && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <button
                onClick={() => setDark(!dark)}
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: dark
                    ? "1px solid rgba(255,255,255,0.1)"
                    : "1px solid rgba(0,0,0,0.1)",
                  background: "transparent",
                  cursor: "pointer",
                  color: dark ? "#a1a1aa" : "#71717a",
                }}
              >
                {dark ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              <button
                onClick={() => setMobileOpen(true)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: dark ? "#d4d4d8" : "#3f3f46",
                }}
              >
                <Menu size={22} />
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 200,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 16,
              backgroundColor: dark ? "#0a0a0f" : "#ffffff",
            }}
          >
            <button
              onClick={() => setMobileOpen(false)}
              style={{
                position: "absolute",
                top: 20,
                right: 24,
                background: "none",
                border: "none",
                cursor: "pointer",
                color: dark ? "#d4d4d8" : "#3f3f46",
              }}
            >
              <X size={22} />
            </button>

            {navLinks.map((link, i) => (
              <motion.button
                key={link.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => scrollTo(link.id)}
                style={{
                  fontSize: 24,
                  fontWeight: 600,
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: dark ? "#e4e4e7" : "#18181b",
                }}
              >
                {link.label}
              </motion.button>
            ))}

            {/* Mobile Resume Links */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              style={{
                fontSize: 20,
                textDecoration: "none",
                color: dark ? "#34d399" : "#059669",
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <FileText size={20} />
              View Resume
            </a>

            <a
              href="/resume.pdf"
              download="Akash_Vishwakarma_Resume.pdf"
              style={{
                fontSize: 20,
                textDecoration: "none",
                color: dark ? "#60a5fa" : "#2563eb",
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <Download size={20} />
              Download PDF
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
