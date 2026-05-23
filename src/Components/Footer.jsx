/// Footer.jsx

import { useRef } from "react";
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
    hoverBg: "rgba(16,185,129,0.15)",
    hoverBorder: "#10b981",
    hoverColor: "#10b981",
  },
  {
    href: resumeData.linkedin,
    Icon: FaLinkedin,
    label: "LinkedIn",
    hoverBg: "rgba(59,130,246,0.15)",
    hoverBorder: "#3b82f6",
    hoverColor: "#3b82f6",
  },
];

const IconBox = ({ Icon, bg, border, color, size = 34 }) => (
  <div
    style={{
      width: size,
      height: size,
      borderRadius: 8,
      background: bg || "rgba(255,255,255,0.06)",
      border: `1px solid ${border || "rgba(255,255,255,0.08)"}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    }}
  >
    <Icon
      size={size === 34 ? 15 : 17}
      color={color || "rgba(255,255,255,0.6)"}
    />
  </div>
);

export default function Footer({ dark }) {
  return (
    <>
      <ContactSection dark={dark} />

      <footer
        style={{
          background: dark ? "#0d1117" : "#1e293b",
          padding: "60px 24px 0",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "flex",
            flexDirection: "row",
            gap: 48,
            paddingBottom: 48,
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ flex: 2, minWidth: 0 }}
          >
            <h3
              style={{
                fontSize: 22,
                fontWeight: 800,
                margin: "0 0 8px",
                background: "linear-gradient(to right,#10b981,#3b82f6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Akash Vishwakarma
            </h3>
            <p
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "#fff",
                margin: "0 0 12px",
              }}
            >
              Computer Science Graduate &amp; Full-Stack Developer
            </p>
            <p
              style={{
                fontSize: 13,
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.7,
                margin: 0,
                maxWidth: 340,
              }}
            >
              Passionate about creating efficient, intuitive web solutions using
              cutting-edge technologies. Turning complex problems into elegant,
              user-friendly applications.
            </p>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ flex: 1.2, minWidth: 0 }}
          >
            <p
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "rgba(255,255,255,0.5)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                margin: "0 0 20px",
              }}
            >
              Contact
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
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
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    textDecoration: "none",
                  }}
                >
                  <IconBox Icon={Icon} />
                  <span
                    style={{ fontSize: 13, color: "rgba(255,255,255,0.65)" }}
                  >
                    {label}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ flex: 1, minWidth: 0 }}
          >
            <p
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "rgba(255,255,255,0.5)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                margin: "0 0 20px",
              }}
            >
              Connect
            </p>
            <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
              {SOCIALS.map(
                ({ href, Icon, label, hoverBg, hoverBorder, hoverColor }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 7,
                      padding: "9px 16px",
                      borderRadius: 10,
                      border: "1px solid rgba(255,255,255,0.12)",
                      background: "rgba(255,255,255,0.04)",
                      textDecoration: "none",
                      color: "rgba(255,255,255,0.75)",
                      fontSize: 13,
                      fontWeight: 600,
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = hoverBg;
                      e.currentTarget.style.borderColor = hoverBorder;
                      e.currentTarget.style.color = hoverColor;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background =
                        "rgba(255,255,255,0.04)";
                      e.currentTarget.style.borderColor =
                        "rgba(255,255,255,0.12)";
                      e.currentTarget.style.color = "rgba(255,255,255,0.75)";
                    }}
                  >
                    <Icon size={15} /> {label}
                  </motion.a>
                ),
              )}
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "20px 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 8,
          }}
        >
          <p
            style={{
              fontSize: 13,
              color: "rgba(255,255,255,0.3)",
              margin: 0,
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            © {new Date().getFullYear()} Akash Vishwakarma. All rights reserved.
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                color: "#e879f9",
                fontSize: 15,
                display: "inline-block",
              }}
            >
              ♥
            </motion.span>
          </p>
          <p
            style={{ fontSize: 13, color: "rgba(255,255,255,0.25)", margin: 0 }}
          >
            Designed and built with React &amp; Tailwind CSS
          </p>
          <p
            style={{
              fontSize: 13,
              color: "rgba(255,255,255,0.25)",
              margin: 0,
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <motion.span
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#10b981",
                display: "inline-block",
              }}
            />
            Powered by Node.js
          </p>
        </motion.div>
      </footer>
    </>
  );
}
