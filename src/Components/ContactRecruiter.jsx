import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Mail, Phone, Send, User, MessageSquare } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { resumeData } from "../data";
import { theme } from "../theme";
import { FadeIn, SectionHeader } from "./Section";

const emailJsConfig = {
  serviceId: "service_lmbbscd",
  templateId: "template_qhlscfh",
  publicKey: "y-5uAJ22k6QoBhGI9",
};

export default function ContactRecruiter({ dark }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const text = dark ? "#f4f4f5" : "#18181b";
  const muted = dark ? "#a1a1aa" : "#52525b";
  const panel = dark ? "#111118" : "#ffffff";
  const line = dark ? theme.lineDark : theme.lineLight;

  const handleChange = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  useEffect(() => {
    if (status !== "sent") return undefined;
    const timeout = window.setTimeout(() => setStatus("idle"), 4500);
    return () => window.clearTimeout(timeout);
  }, [status]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");
    setError("");

    const formattedMessage = [
      "New portfolio contact",
      "",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      "",
      "Message:",
      form.message,
    ].join("\n");

    try {
      await emailjs.send(
        emailJsConfig.serviceId,
        emailJsConfig.templateId,
        {
          from_name: form.name,
          from_email: form.email,
          user_name: form.name,
          user_email: form.email,
          reply_to: form.email,
          subject: `Portfolio contact from ${form.name}`,
          message: formattedMessage,
          original_message: form.message,
          to_name: "Akash",
        },
        emailJsConfig.publicKey,
      );
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("idle");
      setError("Could not send the form. Please email me directly instead.");
    }
  };

  const inputClass =
    "min-h-11 w-full rounded-md border bg-transparent px-10 text-sm outline-none transition focus:ring-2";
  const focusRing = "rgba(77,73,252,0.18)";

  return (
    <section id="contact" className="relative px-5 py-16 sm:px-6 lg:py-24" style={{ background: dark ? "#0a0a0f" : theme.paper }}>
      {status === "sent" && (
        <motion.div
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          className="fixed bottom-5 right-5 z-[80] max-w-sm rounded-lg border px-4 py-3 shadow-xl"
          style={{
            background: dark ? "#14141f" : "#ffffff",
            borderColor: dark ? "rgba(255,255,255,0.12)" : "rgba(77,73,252,0.2)",
            color: text,
            fontFamily: theme.fonts.body,
          }}
        >
          <p className="text-sm font-bold" style={{ color: theme.accent }}>
            Message sent
          </p>
          <p className="mt-1 text-xs leading-5" style={{ color: muted }}>
            Thanks. Your name, email, and message were included.
          </p>
        </motion.div>
      )}
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <FadeIn>
          <SectionHeader
            label="Contact"
            title="Hiring for a full-stack role?"
            intro="Send me the role, stack, and location or remote details. I will reply through email or LinkedIn."
            dark={dark}
          />

          <div className="grid gap-3">
            {[
              { label: resumeData.email, href: `mailto:${resumeData.email}`, Icon: Mail },
              { label: resumeData.phone, href: `tel:${resumeData.phone}`, Icon: Phone },
              { label: "LinkedIn", href: resumeData.linkedin, Icon: FaLinkedin },
              { label: "GitHub", href: resumeData.github, Icon: FaGithub },
            ].map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="flex min-h-12 min-w-0 items-center gap-3 rounded-md border px-4 text-sm font-semibold transition hover:opacity-75"
                style={{ borderColor: line, color: text, background: panel }}
              >
                <Icon className="shrink-0" size={17} style={{ color: theme.accent }} />
                <span className="min-w-0 break-all">{label}</span>
              </a>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="min-w-0 border p-5 shadow-sm sm:p-6"
            style={{
              background: panel,
              borderColor: line,
              borderRadius: 10,
              boxShadow: dark ? "0 24px 60px rgba(0,0,0,0.24)" : "0 24px 60px rgba(77,73,252,0.08)",
            }}
          >
            <div className="mb-5 border-b pb-5" style={{ borderColor: line }}>
              <p className="text-xs font-bold uppercase tracking-[0.16em]" style={{ color: theme.accent, fontFamily: theme.fonts.meta }}>
                Send details
              </p>
              <h3 className="mt-2 text-2xl font-black" style={{ color: text, fontFamily: theme.fonts.display }}>
                Start a conversation
              </h3>
              <p className="mt-2 text-sm leading-6" style={{ color: muted, fontFamily: theme.fonts.body }}>
                The email will include your name, email address, and message so I can reply directly.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { name: "name", label: "Name", type: "text", Icon: User, placeholder: "Your name" },
                { name: "email", label: "Email", type: "email", Icon: Mail, placeholder: "your@email.com" },
              ].map(({ name, label, type, Icon, placeholder }) => (
                <label key={name} className="block">
                  <span className="mb-2 block text-xs font-bold uppercase tracking-[0.14em]" style={{ color: muted, fontFamily: theme.fonts.meta }}>
                    {label}
                  </span>
                  <span className="relative block">
                    <Icon className="absolute left-3 top-1/2 -translate-y-1/2" size={15} style={{ color: muted }} />
                    <input
                      required
                      name={name}
                      type={type}
                      value={form[name]}
                      onChange={handleChange}
                      placeholder={placeholder}
                      className={inputClass}
                      style={{ borderColor: line, color: text, fontFamily: theme.fonts.body, "--tw-ring-color": focusRing }}
                    />
                  </span>
                </label>
              ))}
            </div>

            <label className="mt-4 block">
              <span className="mb-2 block text-xs font-bold uppercase tracking-[0.14em]" style={{ color: muted, fontFamily: theme.fonts.meta }}>
                Message
              </span>
              <span className="relative block">
                <MessageSquare className="absolute left-3 top-4" size={15} style={{ color: muted }} />
                <textarea
                  required
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Role, stack, location/remote details, and any useful context."
                  className="min-h-36 w-full resize-y rounded-md border bg-transparent px-10 py-3 text-sm leading-6 outline-none transition focus:ring-2"
                  style={{ borderColor: line, color: text, fontFamily: theme.fonts.body, "--tw-ring-color": focusRing }}
                />
              </span>
            </label>

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md px-5 text-sm font-bold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
              style={{ background: theme.accent, fontFamily: theme.fonts.body }}
            >
              <Send size={16} />
              {status === "sending" ? "Sending..." : status === "sent" ? "Message sent" : "Send message"}
            </button>

            {error && (
              <p className="mt-3 text-center text-sm font-semibold text-red-500" style={{ fontFamily: theme.fonts.body }}>{error}</p>
            )}
            <p className="mt-4 break-words text-center text-xs leading-6" style={{ color: muted, fontFamily: theme.fonts.body }}>
              Direct email fallback is always available: {resumeData.email}
            </p>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
