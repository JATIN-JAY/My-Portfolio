import { motion } from "framer-motion";
import LottieAnimation from "./LottieAnimation";
import codeAnimation from "../assets/lottie/code.json";
import databaseAnimation from "../assets/lottie/database.json";
import rocketAnimation from "../assets/lottie/rocket.json";

const skillCategories = [
  {
    category: "Frontend",
    icon: codeAnimation,
    emoji: "💻",
    skills: ["React.js", "JavaScript", "TailwindCSS"],
  },
  {
    category: "Backend",
    icon: codeAnimation,
    emoji: "⚙️",
    skills: ["Node.js", "Express", "REST APIs"],
  },
  {
    category: "Database",
    icon: databaseAnimation,
    emoji: "🗄️",
    skills: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    category: "Languages & Tools",
    icon: rocketAnimation,
    emoji: "🚀",
    skills: ["Java", "C++", "Docker"],
  },
];

export default function AnimatedSkillsSection() {
  return (
    <section className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl text-light-50 tracking-tight mb-4">
            Skills & Tools
          </h2>
          <p className="text-light-400 text-base font-light max-w-lg">
            Technologies I work with on a daily basis
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative"
            >
              {/* Animated Icon Container */}
              <motion.div
                className="mb-6 h-24 w-24 flex items-center justify-center"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl blur-xl group-hover:from-accent/30 group-hover:to-accent/10 transition-all duration-300" />
                
                {/* Fallback Emoji Icon */}
                <div className="relative z-10 text-5xl drop-shadow-lg">
                  {category.emoji}
                </div>
                
                {/* Lottie Animation as overlay (optional) */}
                <div className="absolute inset-0 opacity-50 group-hover:opacity-70 transition-opacity duration-300">
                  <LottieAnimation
                    animationData={category.icon}
                    loop={true}
                    autoplay={true}
                  />
                </div>
              </motion.div>

              {/* Category Name */}
              <h3 className="font-display font-bold text-lg text-light-50 mb-4 group-hover:text-accent transition-colors duration-300">
                {category.category}
              </h3>

              {/* Skills List */}
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-light-300 text-sm">{skill}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Hover border effect */}
              <motion.div
                className="absolute -inset-4 border border-accent/0 rounded-2xl group-hover:border-accent/20 transition-all duration-300 -z-10"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
