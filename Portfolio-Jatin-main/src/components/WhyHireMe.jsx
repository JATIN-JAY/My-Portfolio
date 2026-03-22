import { motion } from "framer-motion";

const highlights = [
  {
    number: "400+",
    label: "DSA Problems Solved",
    description: "Real problem-solving experience with focus on algorithms and optimization"
  },
  {
    number: "3",
    label: "Live Projects Deployed",
    description: "Production-ready applications live on the internet solving real problems"
  },
  {
    number: "∞",
    label: "Never Quit Attitude",
    description: "When something breaks, I debug it. When I don't know something, I learn it"
  },
  {
    number: "100%",
    label: "Genuine Care",
    description: "I care about what I build, how it performs, and the people who use it"
  },
];

export default function WhyHireMe() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 bg-dark">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-accent font-mono text-xs tracking-[0.2em] uppercase block mb-4">
            03 — Why Hire Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-light-50 tracking-tight mb-6">
            I don't have 5 years of experience.
          </h2>
          <p className="text-light-400 text-lg font-light max-w-3xl">
            What I do have is real projects deployed on the internet, 400+ DSA problems solved, and a habit of not giving up when something breaks. I learn fast, I work well with people, and I genuinely care about what I build.
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-px bg-dark-400 mb-16 origin-left"
        />

        {/* Highlights Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-dark-900 border border-dark-400 rounded-lg p-8 hover:border-accent/40 transition-all duration-300"
            >
              {/* Accent line on hover */}
              <div className="absolute top-0 left-0 h-px w-0 bg-accent group-hover:w-full transition-all duration-500" />
              
              <div className="mb-4">
                <span className="text-accent font-display text-4xl font-bold">
                  {item.number}
                </span>
              </div>
              <h3 className="text-light-50 text-lg font-semibold mb-3 group-hover:text-accent transition-colors duration-300">
                {item.label}
              </h3>
              <p className="text-light-400 text-sm leading-relaxed font-light">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
