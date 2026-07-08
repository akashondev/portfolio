import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { FileText, Menu, Moon, Sun, X } from "lucide-react";
import { navLinks } from "../data";
import { theme } from "../theme";

export default function NavbarRecruiter({ dark, setDark, activeSection }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const bg = scrolled
    ? dark
      ? "rgba(10,10,15,0.86)"
      : "rgba(250,250,248,0.9)"
    : dark
      ? "rgba(10,10,15,0.72)"
      : "rgba(250,250,248,0.72)";
  const line = dark ? theme.lineDark : theme.lineLight;
  const text = dark ? "#f4f4f5" : "#18181b";
  const muted = dark ? "#a1a1aa" : "#52525b";

  return (
    <nav
      className="fixed left-0 right-0 top-0 z-50 border-b backdrop-blur"
      style={{ background: bg, borderColor: scrolled ? line : "transparent" }}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6">
        <button
          onClick={() => scrollTo("hero")}
          className="text-sm font-black uppercase tracking-[0.18em]"
          style={{ color: text }}
        >
          Akash V.
        </button>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="relative rounded-md px-3 py-2 text-sm font-semibold transition-colors duration-200 hover:opacity-80"
              style={{
                color: activeSection === link.id ? theme.accent : muted,
              }}
            >
              <span className="relative z-10">{link.label}</span>
              {activeSection === link.id && (
                <motion.span
                  layoutId="desktop-nav-active-bg"
                  className="absolute inset-0 rounded-md"
                  style={{
                    background: dark
                      ? "rgba(255,255,255,0.06)"
                      : "rgba(77,73,252,0.08)",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 420,
                    damping: 34,
                    mass: 0.75,
                  }}
                />
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="hidden min-h-10 items-center gap-2 rounded-md border px-3 text-sm font-bold transition hover:opacity-75 sm:inline-flex"
            style={{ borderColor: line, color: text }}
          >
            <FileText size={16} />
            Resume
          </a>
          <button
            onClick={() => setDark(!dark)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border transition hover:opacity-75"
            style={{ borderColor: line, color: text }}
            aria-label="Toggle color theme"
          >
            {dark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button
            onClick={() => setOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border lg:hidden"
            style={{ borderColor: line, color: text }}
            aria-label="Open navigation"
          >
            <Menu size={19} />
          </button>
        </div>
      </div>

      {open &&
        typeof document !== "undefined" &&
        createPortal(
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex flex-col px-5 py-5 lg:hidden"
            style={{
              color: text,
              background: dark ? "#0a0a0f" : "#ffffff",
            }}
          >
            <div className="flex h-10 items-center justify-between">
              <span className="text-sm font-black uppercase tracking-[0.18em]">
                Akash V.
              </span>
              <button
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border"
                style={{ borderColor: line }}
                aria-label="Close navigation"
              >
                <X size={19} />
              </button>
            </div>

            <div className="mt-8 grid gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="rounded-md border px-4 py-3 text-left text-lg font-bold"
                  style={{
                    borderColor: line,
                    color: activeSection === link.id ? theme.accent : text,
                    background:
                      activeSection === link.id
                        ? dark
                          ? "rgba(255,255,255,0.06)"
                          : "rgba(77,73,252,0.08)"
                        : "transparent",
                  }}
                >
                  {link.label}
                </button>
              ))}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-4 text-lg font-bold text-white"
                style={{ background: theme.accent }}
              >
                <FileText size={18} />
                View resume
              </a>
            </div>
          </motion.div>,
          document.body,
        )}
    </nav>
  );
}
