import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import LottieAnimation from "./LottieAnimation";
import rocketAnimation from "../assets/lottie/rocket.json";

const projects = [
  {
    num: "01",
    title: "Voltify",
    tagline: "E-commerce platform built from scratch",
    oneLiner: "Full-stack e-commerce with product management, payment processing, and AI recommendations",
    challenge: "Built complete e-commerce platform with proper auth, real APIs, and production-quality UI",
    action: "React frontend • Node.js/Express backend • MongoDB database • JWT auth • bcrypt encryption • Vercel deployment",
    result: "Live on Vercel with clean cards, smooth animations, and fully functional product marketplace",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT", "bcrypt"],
    github: "https://github.com/JATIN-JAY/Voltify-1",
    live: "https://voltify-1.vercel.app/",
  },
  {
    num: "02",
    title: "Data Packet Analyzer (DPI Engine)",
    tagline: "Deep packet inspection with network monitoring",
    oneLiner: "C++ network analyzer that parses packets, identifies apps via TLS SNI, and blocks suspicious traffic",
    challenge: "Parse network headers and identify apps • Handle high-volume traffic efficiently • Implement blocking rules",
    action: "Multi-threaded C++ pipeline • PCAP file parsing • Ethernet/IP/TCP/UDP header extraction • TLS SNI inspection • Five-Tuple flow tracking",
    result: "Production-ready DPI engine handling large captures without bottlenecks • Accurate app identification and traffic filtering",
    tech: ["C++", "Networking", "PCAP Analysis", "TLS Inspection", "Multithreading", "Network Security"],
    github: "https://github.com/JATIN-JAY/PACKET_ANALYZER/tree/main/Packet_analyzer-main",
    live: "#",
  },
  {
    num: "03",
    title: "TicketHub",
    tagline: "Booking platform with transaction safety",
    oneLiner: "Event booking system handling concurrent reservations with role-based access and notifications",
    challenge: "Solve race conditions in concurrent booking • Prevent double-booking • Manage user/admin roles",
    action: "Transaction-safe booking flow • Role-based access control • Email notifications with Nodemailer • Admin dashboard",
    result: "Deployed and working • Smooth booking experience • Admin controls for event management",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Nodemailer"],
    github: "https://github.com/JATIN-JAY/final_ticket_hub",
    live: "https://ticket-hub-phi.vercel.app/",
  },
];

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.33, 1, 0.68, 1],
      }}
      className="group relative border border-dark-400 rounded-2xl p-8 md:p-10 overflow-hidden hover:border-dark-600 transition-all duration-500"
    >
      {/* Mouse follow glow */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(200,169,110,0.06) 0%, transparent 70%)`,
        }}
      />

      {/* Number */}
      <span className="font-mono text-xs text-light-600 tracking-wider relative z-10">
        {project.num}
      </span>

      {/* Title & tagline */}
      <div className="mt-6 mb-6 relative z-10">
        <h3 className="font-display font-bold text-2xl md:text-3xl text-light-50 tracking-tight group-hover:text-accent transition-colors duration-500">
          {project.title}
        </h3>
        <p className="text-light-300 text-sm mt-2 font-body">
          {project.oneLiner}
        </p>
      </div>

      {/* Content sections */}
      <div className="space-y-4 mb-8 relative z-10">
        <div>
          <p className="text-xs font-mono text-accent uppercase tracking-[0.15em] mb-2">Challenge</p>
          <p className="text-light-300 text-sm font-light leading-relaxed">
            {project.challenge}
          </p>
        </div>
        <div>
          <p className="text-xs font-mono text-accent uppercase tracking-[0.15em] mb-2">Action</p>
          <p className="text-light-300 text-sm font-light leading-relaxed">
            {project.action}
          </p>
        </div>
        <div>
          <p className="text-xs font-mono text-accent uppercase tracking-[0.15em] mb-2">Result</p>
          <p className="text-light-300 text-sm font-light leading-relaxed">
            {project.result}
          </p>
        </div>
      </div>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2 mb-8 relative z-10">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-[11px] font-mono text-light-300 px-3 py-1.5 border border-dark-400 rounded-full"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-4 relative z-10">
        {project.github !== "#" && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-accent/50 rounded-lg text-sm text-light-300 hover:text-accent hover:border-accent hover:bg-accent/5 transition-all duration-300 flex items-center gap-2 group/btn"
          >
            Source
            <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </a>
        )}
        {project.live !== "#" && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-accent bg-accent/10 rounded-lg text-sm text-accent hover:bg-accent hover:text-dark-900 transition-all duration-300 flex items-center gap-2 group/btn"
          >
            Live Demo
            <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </a>
        )}
      </div>

      {/* Animated Lottie Icon */}
      <motion.div
        className="absolute top-6 right-6 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <LottieAnimation
          animationData={rocketAnimation}
          loop={true}
          autoplay={true}
          speed={0.8}
        />
      </motion.div>
    </motion.div>
  );
}

export default function ProjectGrid() {
  return (
    <section id="work" className="py-16 md:py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="font-mono text-accent text-xs tracking-[0.2em] uppercase">
            02 — Work
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-bold text-4xl md:text-5xl text-light-50 tracking-tight mb-4"
        >
          Selected Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-light-500 text-base font-light max-w-lg mb-16"
        >
          Full-stack applications I've built — each solving a real problem with
          clean code and thoughtful design.
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-px bg-dark-400 mb-16 origin-left"
        />

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}