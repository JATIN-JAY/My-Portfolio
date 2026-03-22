import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const projects = [
  {
    num: "01",
    name: "Voltify",
    tools: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT"],
    myRole: "Full-Stack Developer",
    description: "E-commerce platform with product management, payment processing, and AI-powered recommendations. Built from scratch with production-quality UI, secure authentication, and real-time inventory management.",
    github: "https://github.com/JATIN-JAY/Voltify-1",
    live: "https://voltify-1.vercel.app/",
  },
  {
    num: "02",
    name: "Data Packet Analyzer (DPI Engine)",
    tools: ["C++", "Networking", "PCAP Analysis", "TLS Inspection", "Multithreading"],
    myRole: "Network Security Engineer",
    description: "Deep packet inspection engine that parses network traffic, identifies applications via TLS SNI, and enforces dynamic blocking rules. Multi-threaded pipeline handling high-volume traffic without performance bottlenecks.",
    github: "https://github.com/JATIN-JAY/PACKET_ANALYZER/tree/main/Packet_analyzer-main",
    live: "#",
  },
  {
    num: "03",
    name: "TicketHub",
    tools: ["React", "Node.js", "Express", "MongoDB", "Nodemailer"],
    myRole: "Backend Developer",
    description: "Event booking platform with transaction-safe concurrent reservation handling. Implements role-based access control, email notifications, and admin dashboard for event management. Solved race conditions in booking flows.",
    github: "https://github.com/JATIN-JAY/final_ticket_hub",
    live: "https://ticket-hub-phi.vercel.app/",
  },
];

function ProjectAccordion({ project, isOpen, onToggle }) {
  return (
    <motion.div
      className="mb-4 overflow-hidden rounded-lg border border-gray-700 bg-[#0d1117]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* macOS-style Title Bar */}
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 bg-gray-900 hover:bg-gray-800 transition-colors px-6 py-4 cursor-pointer border-b border-gray-700"
      >
        {/* Colored Dots */}
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>

        {/* Project Name */}
        <span className="flex-1 text-center text-cyan-400 font-mono text-sm font-semibold">
          {project.name}
        </span>

        {/* Chevron */}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={18} className="text-gray-400" />
        </motion.div>
      </button>

      {/* Expandable Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="bg-[#0d1117] px-6 py-6 text-xs font-mono"
          >
            {/* Code-like display */}
            <div className="space-y-1 text-gray-300">
              {/* const keyword */}
              <div>
                <span className="text-white font-bold">const</span>
                <span className="text-white"> project = </span>
                <span className="text-gray-500">{"{"}</span>
              </div>

              {/* name property */}
              <div className="ml-4">
                <span className="text-white font-bold">name</span>
                <span className="text-gray-400">: </span>
                <span className="text-orange-400 font-semibold">{`"${project.name}"`}</span>
                <span className="text-gray-400">,</span>
              </div>

              {/* tools property */}
              <div className="ml-4">
                <span className="text-white font-bold">tools</span>
                <span className="text-gray-400">: [</span>
              </div>
              {project.tools.map((tool, idx) => (
                <div key={tool} className="ml-8">
                  <span className="text-orange-400 font-semibold">{`"${tool}"`}</span>
                  {idx < project.tools.length - 1 && (
                    <span className="text-gray-400">,</span>
                  )}
                </div>
              ))}
              <div className="ml-4">
                <span className="text-gray-400">],</span>
              </div>

              {/* myRole property */}
              <div className="ml-4">
                <span className="text-white font-bold">myRole</span>
                <span className="text-gray-400">: </span>
                <span className="text-orange-400 font-semibold">{`"${project.myRole}"`}</span>
                <span className="text-gray-400">,</span>
              </div>

              {/* description property */}
              <div className="ml-4">
                <span className="text-white font-bold">description</span>
                <span className="text-gray-400">: </span>
                <span className="text-cyan-400">{`"${project.description}"`}</span>
                <span className="text-gray-400">,</span>
              </div>

              {/* closing brace */}
              <div>
                <span className="text-gray-500">{"}"}</span>
              </div>
            </div>

            {/* Links */}
            <div className="mt-6 flex gap-4">
              {project.github !== "#" && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-cyan-400 rounded border border-gray-600 hover:border-cyan-400 transition-all text-xs font-semibold"
                >
                  → Source Code
                </a>
              )}
              {project.live !== "#" && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-cyan-900/30 hover:bg-cyan-900/50 text-cyan-400 rounded border border-cyan-600 hover:border-cyan-400 transition-all text-xs font-semibold"
                >
                  → Live Demo
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function ProjectAccordionSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="work" className="py-16 md:py-24 px-6 md:px-12 bg-black">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-cyan-400 text-xs tracking-[0.2em] uppercase block mb-4">
            02 — Work
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-base font-light mt-4 max-w-2xl">
            Click any project card to explore details, tech stack, and access the source code.
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-px bg-gray-700 mb-12 origin-left"
        />

        {/* Projects Accordion */}
        <div className="space-y-0">
          {projects.map((project, idx) => (
            <ProjectAccordion
              key={project.name}
              project={project}
              isOpen={openIndex === idx}
              onToggle={() => handleToggle(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
