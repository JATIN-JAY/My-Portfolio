import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
      setMenuOpen(false);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 50);
  });

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Drive CV Feb 2025.pdf";
    link.download = "Jatin-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
          scrolled
            ? "bg-dark/80 backdrop-blur-xl border-b border-dark-400/50"
            : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="font-display font-bold text-lg text-light-200 tracking-tight relative z-50"
          >
            jatin<span className="text-accent">.</span>
          </motion.a>

          {/* Desktop links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:flex items-center gap-8"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-light-500 text-[13px] font-body hover:text-light-200 transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={downloadResume}
              className="px-4 py-2 text-[13px] font-body border border-accent text-accent hover:bg-accent hover:text-dark transition-all duration-300 rounded-md"
            >
              Download Resume
            </button>
          </motion.div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative z-50 w-8 h-8 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <div className="w-5 flex flex-col items-end gap-1.5">
              <motion.span
                animate={
                  menuOpen
                    ? { rotate: 45, y: 5.5, width: "100%" }
                    : { rotate: 0, y: 0 }
                }
                className="block h-[1.5px] w-full bg-light-200 origin-center"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block h-[1.5px] w-3/4 bg-light-200"
              />
              <motion.span
                animate={
                  menuOpen
                    ? { rotate: -45, y: -5.5, width: "100%" }
                    : { rotate: 0, y: 0 }
                }
                className="block h-[1.5px] w-full bg-light-200 origin-center"
              />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-dark/95 backdrop-blur-2xl flex items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: i * 0.08 }}
                  className="font-display text-3xl font-bold text-light-200 hover:text-accent transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.button
                onClick={() => {
                  downloadResume();
                  setMenuOpen(false);
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: navLinks.length * 0.08 }}
                className="px-6 py-3 text-lg font-display border border-accent text-accent hover:bg-accent hover:text-dark transition-all duration-300 rounded-md"
              >
                Download Resume
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
