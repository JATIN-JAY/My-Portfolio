import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);

  const letterVariants = {
    hidden: { y: "110%" },
    visible: (i) => ({
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.33, 1, 0.68, 1],
        delay: i * 0.035,
      },
    }),
  };

  const nameTop = "JATIN";
  const nameBottom = "SINGH";

  return (
    <section
      ref={ref}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(232,232,227,1) 1px, transparent 1px), linear-gradient(90deg, rgba(232,232,227,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-accent/[0.03] rounded-full blur-[150px]" />
        <div className="absolute bottom-1/3 right-1/3 w-[400px] h-[400px] bg-light/[0.02] rounded-full blur-[120px]" />
      </div>

      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 text-center px-6"
      >
        {/* Role label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-6"
        >
          <span className="text-[#c9a84c] font-bold text-[clamp(2rem,5vw,4.5rem)] tracking-[0.25em] uppercase leading-tight font-display">
            Full-Stack Developer
          </span>
        </motion.div>

        {/* Name — First line */}
        <div className="overflow-hidden">
          <motion.div className="flex justify-center">
            {nameTop.split("").map((char, i) => (
              <motion.span
                key={`top-${i}`}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="font-display font-extrabold text-[clamp(3.5rem,13vw,12rem)] leading-[0.88] tracking-[-0.04em] text-light-50 inline-block"
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Name — Second line */}
        <div className="overflow-hidden mt-1">
          <motion.div className="flex justify-center">
            {nameBottom.split("").map((char, i) => (
              <motion.span
                key={`bot-${i}`}
                custom={i + nameTop.length}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="font-display font-extrabold text-[clamp(3.5rem,13vw,12rem)] leading-[0.88] tracking-[-0.04em] text-light-50 inline-block"
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-[#c9a84c] text-[clamp(1.2rem,2.5vw,2rem)] mt-8 mb-6 max-w-4xl mx-auto leading-relaxed font-body font-medium"
        >
          I create websites that go from visible to invincible
        </motion.p>

        {/* CTA Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex items-center justify-center gap-8 mt-10"
        >
          <a
            href="https://github.com/JATIN-JAY"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light-500 text-sm font-body hover:text-accent transition-colors duration-300 flex items-center gap-2 group"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent/60 group-hover:bg-accent transition-colors" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/jatin-jay-singh-788088349/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light-500 text-sm font-body hover:text-accent transition-colors duration-300 flex items-center gap-2 group"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent/60 group-hover:bg-accent transition-colors" />
            LinkedIn
          </a>
          <a
            href="https://drive.google.com/file/d/1OCY3cLyXG8lVxH5u8PsVtMCOsUfxxy6U/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light-500 text-sm font-body hover:text-accent transition-colors duration-300 flex items-center gap-2 group"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent/60 group-hover:bg-accent transition-colors" />
            Resume
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-light-600 text-[10px] font-mono tracking-[0.25em] uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-light-600/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}