// Contact.jsx

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { resumeData } from "../data.js";
import {
  Mail,
  Phone,
  Send,
  User,
  MessageSquare,
  CheckCircle,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const EJS = {
  SID: "service_lmbbscd",
  TID: "template_qhlscfh",
  KEY: "y-5uAJ22k6QoBhGI9",
};

const CONTACTS = [
  {
    label: "Email",
    value: resumeData.email,
    href: `mailto:${resumeData.email}`,
    Icon: Mail,
  },
  {
    label: "Phone",
    value: resumeData.phone,
    href: `tel:${resumeData.phone}`,
    Icon: Phone,
  },
  {
    label: "LinkedIn",
    value: "Akash Vishwakarma",
    href: resumeData.linkedin,
    Icon: FaLinkedin,
  },
  {
    label: "GitHub",
    value: "akashondev",
    href: resumeData.github,
    Icon: FaGithub,
  },
];

// ── Responsive hook ──────────────────────────────────────────────────────────
function useWindowWidth() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024,
  );
  useEffect(() => {
    const handle = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handle);
    return () => window.removeEventListener("resize", handle);
  }, []);
  return width;
}

// ── Helpers ───────────────────────────────────────────────────────────────────
const FadeIn = ({ children, delay = 0, y = 28 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

const BLOB = (style) => (
  <motion.div
    animate={{ scale: [1, 1.15, 1], opacity: [0.07, 0.12, 0.07] }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    style={{
      position: "absolute",
      borderRadius: "50%",
      background: "rgba(255,255,255,0.07)",
      pointerEvents: "none",
      ...style,
    }}
  />
);

// ── Component
export default function ContactSection({ dark }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const width = useWindowWidth();
  const isMobile = width < 768;

  const handleChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await emailjs.send(
        EJS.SID,
        EJS.TID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_name: "Akash",
        },
        EJS.KEY,
      );
      setSent(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 5000);
    } catch {
      setError("Failed to send. Please try again or email me directly.");
    } finally {
      setLoading(false);
    }
  };

  const t = {
    bg: dark ? "#0D0D14" : "#F5F5F7",
    card: dark ? "#13131c" : "#ffffff",
    cardBorder: dark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.08)",
    pri: dark ? "#ffffff" : "#111827",
    muted: dark ? "#9ca3af" : "#6b7280",

    inputBg: dark ? "#0a0a10" : "#EFEFEF",
    inputBdr: dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.15)",
    inputFocus: "#4D49FC",
  };

  const inputStyle = (extra = {}) => ({
    width: "100%",
    boxSizing: "border-box",
    paddingLeft: 36,
    paddingRight: 14,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    border: `1px solid ${t.inputBdr}`,
    background: t.inputBg,
    color: t.pri,
    fontSize: 13,
    outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
    fontFamily: "inherit",
    ...extra,
  });

  const labelStyle = {
    fontSize: 11,
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    color: t.muted,
    display: "block",
    marginBottom: 6,
  };

  const iconAbsolute = (top = false) => ({
    position: "absolute",
    left: 12,
    color: t.muted,
    ...(top ? { top: 12 } : { top: "50%", transform: "translateY(-50%)" }),
  });

  return (
    // ── Section wrapper ───────────────────────────────────────────────────
    // background matches page root → no color gap at section boundaries
    <section
      id="contact"
      style={{
        padding: isMobile ? "60px 16px 80px" : "80px 24px 100px",
        background: t.bg,
        // Remove margin-bottom; let the parent decide spacing.
        // If you need separation from the footer, add padding-bottom instead.
      }}
    >
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        {/* ── Heading ── */}
        <FadeIn>
          <div
            style={{ textAlign: "center", marginBottom: isMobile ? 32 : 48 }}
          >
            <motion.p
              initial={{ opacity: 0, letterSpacing: "0.4em" }}
              whileInView={{ opacity: 1, letterSpacing: "0.2em" }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              style={{
                fontSize: 12,
                fontWeight: 700,
                textTransform: "uppercase",
                color: "#4D49FC",
                margin: "0 0 10px",
              }}
            >
              Contact
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                fontSize: isMobile ? 28 : 42,
                fontWeight: 900,
                letterSpacing: "-0.03em",
                color: t.pri,
                margin: "0 0 12px",
              }}
            >
              Get In Touch
            </motion.h2>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 56 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              style={{
                height: 3,
                borderRadius: 9999,
                background:
                  "linear-gradient(to right, #4D49FC 0%, #7C77FE 100%)",
                margin: "0 auto 16px",
              }}
            />

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
              style={{
                fontSize: isMobile ? 13 : 15,
                color: t.muted,
                maxWidth: 420,
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              Let's collaborate and bring your ideas to life. I'm always excited
              to work on new projects!
            </motion.p>
          </div>
        </FadeIn>

        {/* ── Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            borderRadius: 20,
            overflow: "hidden",
            border: `1px solid ${t.cardBorder}`,
            // Subtle shadow that disappears into the bg — no colour leaking
            boxShadow: dark
              ? "0 24px 48px rgba(0,0,0,0.5)"
              : "0 24px 48px rgba(0,0,0,0.08)",
            minHeight: isMobile ? "auto" : 480,
          }}
        >
          {/* ── Left Panel ── */}
          <div
            style={{
              width: isMobile ? "100%" : "37%",
              flexShrink: 0,
              background: "#4D49FC",
              color: "#fff",
              padding: isMobile ? "28px 20px" : "36px 28px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {BLOB({ top: -40, right: -40, width: 160, height: 160 })}
            {BLOB({ bottom: -60, left: -20, width: 180, height: 180 })}

            <div style={{ position: "relative", zIndex: 1 }}>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                style={{
                  fontSize: isMobile ? 18 : 22,
                  fontWeight: 700,
                  margin: "0 0 6px",
                }}
              >
                Let's Connect
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                style={{
                  fontSize: 13,
                  color: "rgba(255,255,255,0.7)",
                  margin: "0 0 24px",
                  lineHeight: 1.65,
                }}
              >
                Ready to discuss your next project or just want to say hello?
              </motion.p>

              <div
                style={{
                  display: isMobile ? "grid" : "flex",
                  gridTemplateColumns: isMobile ? "1fr 1fr" : undefined,
                  flexDirection: isMobile ? undefined : "column",
                  gap: isMobile ? 12 : 16,
                }}
              >
                {CONTACTS.map(({ label, value, href, Icon }, i) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={
                      label !== "Email" && label !== "Phone"
                        ? "_blank"
                        : undefined
                    }
                    rel="noreferrer"
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.15 + i * 0.1,
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{ x: 4 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      textDecoration: "none",
                      overflow: "hidden",
                    }}
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.1,
                        background: "rgba(255,255,255,0.28)",
                      }}
                      transition={{ duration: 0.2 }}
                      style={{
                        width: isMobile ? 34 : 40,
                        height: isMobile ? 34 : 40,
                        borderRadius: 10,
                        background: "rgba(255,255,255,0.15)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={isMobile ? 15 : 17} color="#fff" />
                    </motion.div>

                    <div style={{ minWidth: 0 }}>
                      <p
                        style={{
                          fontSize: 10,
                          fontWeight: 600,
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          color: "rgba(255,255,255,0.5)",
                          margin: "0 0 2px",
                        }}
                      >
                        {label}
                      </p>
                      <p
                        style={{
                          fontSize: isMobile ? 11 : 13,
                          fontWeight: 500,
                          color: "rgba(255,255,255,0.92)",
                          margin: 0,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right Panel (form) ── */}
          <div
            style={{
              flex: 1,
              background: t.card,
              padding: isMobile ? "24px 20px" : "36px 32px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <motion.h3
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{
                fontSize: isMobile ? 18 : 22,
                fontWeight: 700,
                color: t.pri,
                margin: "0 0 20px",
              }}
            >
              Send a Message
            </motion.h3>

            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 14,
                flex: 1,
              }}
            >
              {[
                {
                  name: "name",
                  label: "Your Name",
                  type: "text",
                  Icon: User,
                  placeholder: "Enter your full name",
                },
                {
                  name: "email",
                  label: "Email Address",
                  type: "email",
                  Icon: Mail,
                  placeholder: "Enter your email",
                },
              ].map(({ name, label, type, Icon, placeholder }, i) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                >
                  <label style={labelStyle}>{label}</label>
                  <div style={{ position: "relative" }}>
                    <Icon size={14} style={iconAbsolute()} />
                    <input
                      type={type}
                      name={name}
                      value={form[name]}
                      onChange={handleChange}
                      placeholder={placeholder}
                      required
                      style={inputStyle()}
                      onFocus={(e) => {
                        e.target.style.borderColor = t.inputFocus;
                        e.target.style.boxShadow =
                          "0 0 0 3px rgba(77,73,252,0.15)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = t.inputBdr;
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.26 }}
                style={{ flex: 1, display: "flex", flexDirection: "column" }}
              >
                <label style={labelStyle}>Your Message</label>
                <div style={{ position: "relative", flex: 1, display: "flex" }}>
                  <MessageSquare size={14} style={iconAbsolute(true)} />
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or just say hello..."
                    required
                    style={inputStyle({
                      flex: 1,
                      resize: "none",
                      minHeight: isMobile ? 120 : 110,
                    })}
                    onFocus={(e) => {
                      e.target.style.borderColor = t.inputFocus;
                      e.target.style.boxShadow =
                        "0 0 0 3px rgba(77,73,252,0.15)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = t.inputBdr;
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.34 }}
              >
                <AnimatePresence mode="wait">
                  {sent ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.92 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.92 }}
                      style={{
                        width: "100%",
                        padding: "13px 0",
                        borderRadius: 10,
                        background: dark
                          ? "rgba(5,150,105,0.2)"
                          : "rgba(5,150,105,0.1)",
                        border: "1px solid rgba(5,150,105,0.35)",
                        color: "#059669",
                        fontWeight: 700,
                        fontSize: 14,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 8,
                      }}
                    >
                      <CheckCircle size={16} />
                      Message Sent Successfully!
                    </motion.div>
                  ) : (
                    <motion.button
                      key="submit"
                      type="submit"
                      disabled={loading}
                      initial={{ opacity: 0, scale: 0.92 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.92 }}
                      whileHover={
                        !loading
                          ? {
                              y: -2,
                              boxShadow: "0 8px 24px rgba(77,73,252,0.35)",
                            }
                          : {}
                      }
                      whileTap={!loading ? { scale: 0.97 } : {}}
                      style={{
                        width: "100%",
                        padding: "13px 0",
                        borderRadius: 10,
                        border: "none",
                        background: loading ? "rgba(77,73,252,0.4)" : "#4D49FC",
                        color: "#fff",
                        fontWeight: 700,
                        fontSize: 14,
                        cursor: loading ? "not-allowed" : "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 8,
                        transition: "background 0.3s",
                        fontFamily: "inherit",
                      }}
                    >
                      {loading ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            style={{
                              width: 15,
                              height: 15,
                              borderRadius: "50%",
                              border: "2px solid rgba(255,255,255,0.3)",
                              borderTopColor: "#fff",
                            }}
                          />
                          Sending…
                        </>
                      ) : (
                        <>
                          <Send size={15} />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  )}
                </AnimatePresence>

                <AnimatePresence>
                  {error && (
                    <motion.p
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      style={{
                        fontSize: 12,
                        color: "#f87171",
                        margin: "8px 0 0",
                        textAlign: "center",
                      }}
                    >
                      {error}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
