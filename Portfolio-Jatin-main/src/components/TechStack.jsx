import { motion } from "framer-motion";

const techStack = {
  Frontend: [
    { name: "React.js", icon: "react" },
    { name: "JavaScript", icon: "javascript" },
    { name: "TailwindCSS", icon: "tailwindcss" },
  ],
  Backend: [
    { name: "Node.js", icon: "nodejs" },
    { name: "Express", icon: "express" },
    { name: "REST APIs", icon: null, prefix: "/>" },
  ],
  Database: [
    { name: "MongoDB", icon: "mongodb" },
    { name: "MySQL", icon: "mysql" },
    { name: "PostgreSQL", icon: "postgresql" },
  ],
  "Languages & Tools": [
    { name: "Java", icon: "java" },
    { name: "C++", icon: "cplusplus" },
    { name: "Docker", icon: "docker" },
  ],
};

export default function TechStack() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

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
          <h2 className="text-4xl md:text-5xl font-bold text-light-50 tracking-tight">
            Tech Stack
          </h2>
        </motion.div>

        {/* Tech Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {Object.entries(techStack).map((category) => (
            <motion.div key={category[0]} variants={itemVariants}>
              {/* Category Label */}
              <span className="font-mono text-accent text-xs tracking-[0.2em] uppercase block mb-4">
                {category[0]}
              </span>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-4">
                {category[1].map((tech) => (
                  <motion.div
                    key={tech.name}
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-4 py-3 rounded-lg flex items-center gap-2 font-semibold text-sm uppercase tracking-wide transition-all duration-300 border border-dark-400 bg-dark-500 hover:border-accent hover:bg-accent/10 cursor-default">
                      {tech.icon ? (
                        <img
                          src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}/${tech.icon}-original.svg`}
                          alt={tech.name}
                          className="w-5 h-5 opacity-80 hover:opacity-100"
                          onError={(e) => {
                            e.target.style.display = "none";
                          }}
                        />
                      ) : (
                        <span className="text-lg font-bold text-accent">{tech.prefix}</span>
                      )}
                      <span className="text-light-300 group-hover:text-accent transition-colors">
                        {tech.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
