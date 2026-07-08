import { useState, useEffect } from "react";
import { navLinks } from "./data";
import "./App.css";

import Navbar from "./Components/NavbarRecruiter";
import Hero from "./Components/HeroRecruiter";
import Projects from "./Components/ProjectsRecruiter";
import About from "./Components/AboutRecruiter";
import Footer from "./Components/FooterRecruiter";

export default function App() {
  const [dark, setDark] = useState(() => {
    try {
      return localStorage.getItem("theme") === "dark";
    } catch {
      return false;
    }
  });
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch {
      // Ignore storage errors in private or restricted browser contexts.
    }
  }, [dark]);

  // Active section observer
  useEffect(() => {
    const setNearestSection = () => {
      const viewportAnchor = window.innerHeight * 0.28;
      const documentBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8;

      if (documentBottom) {
        setActiveSection(navLinks[navLinks.length - 1].id);
        return;
      }

      const nearest = navLinks
        .map(({ id }) => {
          const el = document.getElementById(id);
          if (!el) return null;
          return {
            id,
            distance: Math.abs(el.getBoundingClientRect().top - viewportAnchor),
          };
        })
        .filter(Boolean)
        .sort((a, b) => a.distance - b.distance)[0];

      if (nearest) setActiveSection(nearest.id);
    };

    const observer = new IntersectionObserver(
      () => setNearestSection(),
      { rootMargin: "-15% 0px -55% 0px", threshold: [0, 0.1, 0.3] },
    );
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    setNearestSection();
    window.addEventListener("scroll", setNearestSection, { passive: true });
    window.addEventListener("resize", setNearestSection);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", setNearestSection);
      window.removeEventListener("resize", setNearestSection);
    };
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
      <Navbar dark={dark} setDark={setDark} activeSection={activeSection} />
      <Hero dark={dark} />
      <Projects dark={dark} />
      <About dark={dark} />
      <Footer dark={dark} />
    </div>
  );
}
