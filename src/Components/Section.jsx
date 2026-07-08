import { theme } from "../theme";

export function FadeIn({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}

export function SectionHeader({ label, title, intro, dark, align = "left" }) {
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto mb-10 max-w-2xl text-center" : "mb-10 max-w-3xl"}>
      <p
        className="mb-3 text-xs font-bold uppercase tracking-[0.16em]"
        style={{ color: theme.accent, fontFamily: theme.fonts.meta }}
      >
        {label}
      </p>
      <h2
        className={`mb-4 text-3xl font-black leading-tight sm:text-4xl ${
          dark ? "text-white" : "text-zinc-950"
        }`}
        style={{ fontFamily: theme.fonts.display }}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`text-sm leading-7 sm:text-base ${
            dark ? "text-zinc-400" : "text-zinc-600"
          }`}
          style={{ fontFamily: theme.fonts.body }}
        >
          {intro}
        </p>
      )}
      <div
        className={`mt-5 h-px ${centered ? "mx-auto w-20" : "w-24"}`}
        style={{ backgroundColor: dark ? "rgba(255,255,255,0.18)" : "rgba(24,24,27,0.18)" }}
      />
    </div>
  );
}
