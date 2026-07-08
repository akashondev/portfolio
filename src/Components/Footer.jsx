// Footer.jsx

import { motion } from "framer-motion";
import { resumeData } from "../data.js";
import { Mail, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ContactSection from "./Contact";

const SOCIALS = [
  {
    href: resumeData.github,
    Icon: FaGithub,
    label: "GitHub",
  },
  {
    href: resumeData.linkedin,
    Icon: FaLinkedin,
    label: "LinkedIn",
  },
];

const ACCENT = "#4D49FC";
const ACCENT_BG = "rgba(77,73,252,0.14)";
const ACCENT_BORDER = "rgba(77,73,252,0.5)";

export default function Footer({ dark }) {
  return (
    <>
      <style>{`
        .footer-root {
          background: #0a0a10;
        }

        .footer-grid {
          display: flex;
          flex-direction: row;
          gap: 56px;
        }

        .footer-bottom {
          flex-direction: row;
          justify-content: space-between;
        }

        .contact-link:hover .footer-icon-box {
          background: ${ACCENT_BG};
          border-color: ${ACCENT_BORDER};
        }

        .contact-link:hover .contact-link-text {
          color: #fff;
        }

        @media (max-width: 768px) {
          .footer-grid {
            flex-direction: column;
            gap: 36px;
          }

          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }

          .footer-socials-row {
            flex-wrap: wrap;
          }
        }
      `}</style>

      <ContactSection dark={dark} />

      <footer className="footer-root" style={{ padding: "80px 24px 0" }}>
        <div
          className="footer-grid"
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            paddingBottom: 52,
            borderBottom: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          {/* ── Bio ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ flex: 2, minWidth: 0 }}
          >
            <h3
              style={{
                fontSize: 26,
                fontWeight: 800,
                margin: "0 0 6px",
                background: "#4D49FC",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "-0.02em",
              }}
            >
              Akash Vishwakarma
            </h3>
            <p
              style={{
                fontSize: 16,
                fontWeight: 600,
                color: "rgba(255,255,255,0.8)",
                margin: "0 0 14px",
                letterSpacing: "0.01em",
              }}
            >
              Computer Science Graduate &amp; Full-Stack Developer
            </p>
            <p
              style={{
                fontSize: 16,
                color: "rgba(255,255,255,0.4)",
                lineHeight: 1.75,
                margin: 0,
                maxWidth: 350,
              }}
            >
              Passionate about creating efficient, intuitive web solutions using
              cutting-edge technologies.
            </p>
          </motion.div>

          {/* ── Contact ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ flex: 1.2, minWidth: 0 }}
          >
            <p
              style={{
                fontSize: 12,
                fontWeight: 700,
                color: "rgba(255,255,255,0.35)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                margin: "0 0 22px",
              }}
            >
              Contact
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                {
                  href: `mailto:${resumeData.email}`,
                  Icon: Mail,
                  label: resumeData.email,
                },
                {
                  href: `tel:${resumeData.phone}`,
                  Icon: Phone,
                  label: resumeData.phone,
                },
              ].map(({ href, Icon, label }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  className="contact-link"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    textDecoration: "none",
                  }}
                >
                  <div
                    className="footer-icon-box"
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 9,
                      background: "rgba(255,255,255,0.07)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      transition: "background 0.2s, border-color 0.2s",
                    }}
                  >
                    <Icon size={15} color="rgba(255,255,255,0.55)" />
                  </div>
                  <span
                    className="contact-link-text"
                    style={{
                      fontSize: 14,
                      color: "rgba(255,255,255,0.55)",
                      wordBreak: "break-all",
                      transition: "color 0.2s",
                    }}
                  >
                    {label}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* ── Socials ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ flex: 1, minWidth: 0 }}
          >
            <p
              style={{
                fontSize: 12,
                fontWeight: 700,
                color: "rgba(255,255,255,0.35)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                margin: "0 0 22px",
              }}
            >
              Connect
            </p>
            <div
              className="footer-socials-row"
              style={{ display: "flex", flexDirection: "column", gap: 12 }}
            >
              {SOCIALS.map(({ href, Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "10px 16px",
                    borderRadius: 10,
                    border: "1px solid rgba(255,255,255,0.1)",
                    background: "rgba(255,255,255,0.05)",
                    textDecoration: "none",
                    color: "rgba(255,255,255,0.6)",
                    fontSize: 14,
                    fontWeight: 600,
                    transition: "all 0.2s",
                    width: "fit-content",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = ACCENT_BG;
                    e.currentTarget.style.borderColor = ACCENT_BORDER;
                    e.currentTarget.style.color = ACCENT;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                    e.currentTarget.style.color = "rgba(255,255,255,0.6)";
                  }}
                >
                  <Icon size={16} />
                  {label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Bottom bar ── */}
        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "22px 0",
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 8,
          }}
        >
          <p
            style={{
              fontSize: 14,
              color: "rgba(255,255,255,0.25)",
              margin: 0,
              display: "flex",
              alignItems: "center",
              gap: 7,
            }}
          >
            © {new Date().getFullYear()} Akash Vishwakarma. All rights reserved.
          </p>
        </motion.div>
      </footer>
    </>
  );
}
