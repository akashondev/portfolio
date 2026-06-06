import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { navLinks } from "./data";
import "./App.css";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";

export default function App() {
  const [dark, setDark] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Persist theme
  useEffect(() => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved) setDark(saved === "dark");
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch {}
  }, [dark]);

  // Active section observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div
      style={{
        backgroundColor: dark ? "#0a0a0f" : "#ffffff",
        color: dark ? "#f4f4f5" : "#18181b",
        transition: "background-color 0.5s ease, color 0.5s ease",
        minHeight: "100vh",
      }}
    >
      {/* Scroll progress bar */}
      <motion.div
        style={{
          width: progressWidth,
          position: "fixed",
          top: 0,
          left: 0,
          height: 2,
          zIndex: 999,
          background: "#7c77fe",
        }}
      />

      <Navbar dark={dark} setDark={setDark} activeSection={activeSection} />
      <Hero dark={dark} />
      <About dark={dark} />
      <Projects dark={dark} />
      <Footer dark={dark} />
    </div>
  );
}
