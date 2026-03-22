import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import TechStack from "./components/TechStack";
import ProjectCards from "./components/ProjectCards";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

function Marquee() {
  const items =
    "REACT · NODE.JS · MONGODB · EXPRESS · JAVASCRIPT · TAILWINDCSS · DOCKER · REST APIs · ";

  return (
    <div className="overflow-hidden border-y border-dark-400/40 py-5 select-none">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex shrink-0 whitespace-nowrap"
      >
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            className="font-display text-lg md:text-xl text-dark-600 font-bold tracking-[0.2em] px-4"
          >
            {items}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-accent origin-left z-[100]"
      />

      <Navigation />

      <main className="bg-dark overflow-x-hidden">
        <Hero />
        <Marquee />
        <Stats />
        <TechStack />
        <ProjectCards />
        <Experience />
        <Footer />
      </main>

      {/* Back to Top Button */}
      <button
        id="backToTop"
        onClick={scrollToTop}
        className={showBackToTop ? "visible" : ""}
        aria-label="Back to top"
      >
        ↑ TOP
      </button>
    </>
  );
}