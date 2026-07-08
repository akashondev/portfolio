import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { navLinks, resumeData } from "../data";
import ContactRecruiter from "./ContactRecruiter";
import { theme } from "../theme";

export default function FooterRecruiter({ dark }) {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const links = navLinks.filter((link) => link.id !== "hero");
  return (
    <>
      <ContactRecruiter dark={dark} />
      <footer
        className="px-5 pb-8 pt-14 sm:px-6"
        style={{ background: "#08080c", color: "#ffffff" }}
      >
        <div
          className="mx-auto grid max-w-6xl gap-8 border-t pt-10 md:grid-cols-[1.35fr_0.75fr_0.75fr_0.75fr]"
          style={{ borderColor: "rgba(255,255,255,0.12)" }}
        >
          <div>
            <p
              className="mb-3 text-xs font-bold uppercase tracking-[0.16em]"
              style={{ color: theme.accentSoft, fontFamily: theme.fonts.meta }}
            >
              Full-stack developer
            </p>
            <h2
              className="text-2xl font-black leading-tight"
              style={{ fontFamily: theme.fonts.display }}
            >
              {resumeData.name}
            </h2>
            <p
              className="mt-3 max-w-md text-sm leading-7 text-white/60"
              style={{ fontFamily: theme.fonts.body }}
            >
              Building React, Node, database-backed, and Android product flows
              with practical project evidence and clear contact paths.
            </p>
          </div>

          <div>
            <p
              className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-white/35"
              style={{ fontFamily: theme.fonts.meta }}
            >
              Navigate
            </p>
            <div className="grid gap-2">
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="w-fit text-left text-sm text-white/65 transition hover:text-white"
                  style={{ fontFamily: theme.fonts.body }}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p
              className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-white/35"
              style={{ fontFamily: theme.fonts.meta }}
            >
              Contact
            </p>
            <div className="grid gap-2">
              <a
                className="inline-flex items-center gap-2 text-sm text-white/65 hover:text-white"
                href={`mailto:${resumeData.email}`}
                style={{ fontFamily: theme.fonts.body }}
              >
                <Mail size={15} style={{ color: theme.accent }} />
                <span className="break-all">{resumeData.email}</span>
              </a>
              <a
                className="inline-flex items-center gap-2 text-sm text-white/65 hover:text-white"
                href={`tel:${resumeData.phone}`}
                style={{ fontFamily: theme.fonts.body }}
              >
                <Phone size={15} style={{ color: theme.accent }} />
                {resumeData.phone}
              </a>
            </div>
          </div>

          <div>
            <p
              className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-white/35"
              style={{ fontFamily: theme.fonts.meta }}
            >
              Profiles
            </p>
            <div className="flex gap-2">
              {[
                { href: resumeData.github, label: "GitHub", Icon: FaGithub },
                { href: resumeData.linkedin, label: "LinkedIn", Icon: FaLinkedin },
              ].map(({ href, label, Icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${label} profile`}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/15 text-white/70 hover:text-white"
                  whileHover={{ y: -2, borderColor: theme.accent, color: theme.accentSoft }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Icon size={17} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div
          className="mx-auto mt-10 flex max-w-6xl flex-wrap items-center justify-between gap-3 border-t pt-5 text-xs text-white/35"
          style={{ borderColor: "rgba(255,255,255,0.08)", fontFamily: theme.fonts.meta }}
        >
          <span>Open to full-stack roles.</span>
          <span>
          Copyright {new Date().getFullYear()} Akash Vishwakarma. All rights reserved.
          </span>
        </div>
      </footer>
    </>
  );
}
