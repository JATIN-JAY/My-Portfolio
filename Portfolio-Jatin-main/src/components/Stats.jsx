import { motion, useInView, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import profilePhoto from "../assets/profile_phpto.png";

function Counter({ from = 0, to, duration = 2, suffix = "", decimals = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(from, to, {
      duration,
      ease: "easeOut",
      onUpdate: (v) =>
        setValue(decimals > 0 ? v.toFixed(decimals) : Math.round(v)),
    });
    return () => controls.stop();
  }, [isInView, from, to, duration, decimals]);

  return <span ref={ref}>{value}{suffix}</span>;
}

const stats = [
  { value: 400, suffix: "+", label: "LeetCode Problems" },
  { value: 3, suffix: " Live", label: "Projects Built" },
  { value: 8.0, suffix: "", label: "University CGPA", decimals: 1 },
  { value: 5, suffix: "+", label: "Certifications" },
];

export default function Stats() {
  return (
    <section id="about" className="py-20 md:py-28 px-6 md:px-12 pb-2">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="font-mono text-accent text-xs tracking-[0.2em] uppercase">
            01 — About
          </span>
        </motion.div>

        {/* Top Row: Headline with Photo */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-row gap-10 items-start mb-20"
        >
          {/* Photo Column */}
          <div className="w-[260px] flex flex-col items-center flex-shrink-0">
            {/* Circular Profile Photo */}
            <img
              src={profilePhoto}
              alt="Jatin Singh"
              className="w-[240px] h-[240px] rounded-full object-contain border-[3px] border-[#c9a84c] mb-4"
              style={{ boxShadow: "0 0 30px rgba(201, 168, 76, 0.3)" }}
            />
            
            {/* Available Badge */}
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <p className="text-[#c9a84c] text-[11px] font-light tracking-wide whitespace-nowrap">
                Available
              </p>
            </div>
          </div>

          {/* Headline Text */}
          <h2 className="flex-1 min-w-0 font-display font-bold text-accent leading-[1.1] tracking-tight" style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}>
            CS student who got
            <br />
            bored reading
            <br />
            and started building.
          </h2>
        </motion.div>

        {/* Stats Row: Below headline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 w-full mb-16">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                className="group"
              >
                <div className="text-5xl md:text-6xl font-display font-bold text-light-50 tracking-tight mb-2">
                  <Counter
                    to={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimals || 0}
                  />
                </div>
                <div className="text-sm text-light-500 font-body">
                  {stat.label}
                </div>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                  className="h-px bg-dark-500 mt-5 origin-left group-hover:bg-accent/30 transition-colors duration-500"
                />
              </motion.div>
            ))}
          </div>

        {/* Full-Width: WHO I AM & WHY HIRE ME */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start mb-10 relative">
          {/* WHO I AM Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="font-mono text-accent text-xs tracking-[0.3em] uppercase mb-4">
              Who I Am
            </p>
            <p className="text-light-300 text-base leading-relaxed font-light">
              Hey, I'm Jatin. I'm a CS student who got bored of just reading about development and started building actual products. I've shipped e-commerce platforms, booking systems, and a bunch of broken things that eventually worked.
            </p>
          </motion.div>

          {/* Vertical Divider */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-accent transform -translate-x-1/2" />

          {/* WHY HIRE ME Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <p className="font-mono text-accent text-xs tracking-[0.3em] uppercase mb-4">
              Why Hire Me
            </p>
            <p className="text-light-300 text-base leading-relaxed font-light">
              I don't have 5 years of experience. What I do have is real projects deployed on the internet, 400+ DSA problems solved, and a habit of not giving up when something breaks. I learn fast, I work well with people, and I genuinely care about what I build.
            </p>
          </motion.div>
        </div>

        {/* Full-Width: USP Callout */}
        {/* Full-Width: OPEN TO & Available */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start mb-16">
          {/* Open To Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.65 }}
          >
            <p className="font-mono text-accent text-xs tracking-[0.3em] uppercase mb-4">
              Open To
            </p>
            <p className="text-light-300 text-base leading-relaxed font-light">
              Full-time roles · Internships · Freelance projects
            </p>
          </motion.div>

          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="p-6 border border-dark-400 rounded-2xl hover:border-dark-500 transition-colors duration-500 w-full"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-sm text-emerald-400 font-medium">
                Available for opportunities
              </span>
            </div>
            <p className="text-light-300 text-sm font-light leading-relaxed">
              Open to full-time roles, freelance projects, and interesting
              collaborations.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}