import { motion } from "framer-motion";

const projects = [
  {
    num: "01",
    title: "Voltify",
    tagline: "E-commerce platform built from scratch",
    details: [
      "Secure & scalable e-commerce platform with JWT and bcrypt authentication",
      "RESTful APIs built on Node.js, Express, and MongoDB",
      "Responsive React + Tailwind CSS storefront with Context API",
      "Real-time cart state and dynamic price updates",
      "Product management, user accounts, and order processing"
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT", "bcrypt"],
    github: "https://github.com/JATIN-JAY/Voltify-1",
    live: "https://voltify-1.vercel.app/",
  },
  {
    num: "02",
    title: "Data Packet Analyzer (DPI Engine)",
    tagline: "Deep packet inspection with network monitoring",
    details: [
      "C++ deep packet inspection engine for PCAP capture analysis",
      "Parse Ethernet, IP, TCP, and UDP packet headers",
      "Five-Tuple flow tracking and domain/IP filtering",
      "Identify applications and detect suspicious network activity",
      "Multi-threaded pipeline with thread-safe queues",
      "Efficiently process large capture files without bottlenecks"
    ],
    tech: ["C++", "Networking", "PCAP Analysis", "TLS Inspection", "Multithreading"],
    github: "https://github.com/JATIN-JAY/PACKET_ANALYZER/tree/main/Packet_analyzer-main",
    live: "#",
  },
  {
    num: "03",
    title: "Ticket Hub",
    tagline: "Full Stack Event Ticket Booking Platform",
    details: [
      "Full-stack event management and ticket booking system",
      "Users can browse events, purchase tickets, and manage bookings",
      "RESTful APIs with Node.js, Express, and MongoDB for event creation, authentication, and transactions",
      "Responsive React interface with intuitive event discovery",
      "Seamless booking experience with reliable transaction handling"
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Nodemailer"],
    github: "https://github.com/JATIN-JAY/final_ticket_hub",
    live: "https://ticket-hub-phi.vercel.app/",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function ProjectCards() {
  return (
    <section id="work" className="py-20 md:py-32 px-6 md:px-12 bg-dark">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-accent font-mono text-xs tracking-[0.2em] uppercase block mb-4">
            02 — Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-light-50 tracking-tight mb-4">
            Featured Projects
          </h2>
          <p className="text-light-500 text-base font-light max-w-2xl">
            Full-stack applications showcasing problem-solving and clean architecture.
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

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.num}
              variants={cardVariants}
              className="group relative bg-dark border border-dark-400 rounded-xl p-8 hover:border-dark-500 transition-all duration-500 overflow-hidden"
            >
              {/* Subtle background accent */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/[0.03] rounded-full blur-3xl group-hover:bg-accent/[0.06] transition-all duration-500" />

              {/* Content */}
              <div className="relative z-10">
                {/* Project Number & Title */}
                <div className="mb-6">
                  <span className="text-accent font-mono text-xs tracking-widest uppercase block mb-3">
                    {project.num}
                  </span>
                  <h3 className="text-xl font-bold text-accent mb-2">
                    {project.title}
                  </h3>
                  <p className="text-light-400 text-sm font-light">
                    {project.tagline}
                  </p>
                </div>

                {/* Divider */}
                <div className="h-px bg-dark-500 my-6" />

                {/* Description with Bullet Points */}
                <ul className="text-light-300 text-sm leading-relaxed mb-6 font-light space-y-2">
                  {project.details.map((detail, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="text-accent flex-shrink-0 mt-1">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="mb-8">
                  <span className="text-accent font-mono text-xs tracking-widest uppercase block mb-3">
                    Stack
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1.5 text-xs font-mono text-light-300 border border-dark-500 rounded bg-dark-500/20 hover:border-accent hover:text-accent transition-all"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 py-2.5 text-xs font-mono text-light-300 border border-dark-500 rounded hover:border-accent hover:text-accent hover:bg-accent/5 transition-all duration-300"
                    >
                      Source →
                    </a>
                  )}
                  {project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 py-2.5 text-xs font-mono text-light-50 bg-accent/10 border border-accent/40 rounded hover:bg-accent/20 hover:border-accent transition-all duration-300"
                    >
                      Live →
                    </a>
                  )}
                </div>
              </div>

              {/* Hover border glow */}
              <div className="absolute inset-0 rounded-xl border border-accent/0 group-hover:border-accent/30 transition-all duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
