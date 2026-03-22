import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Stack from "./Stack";

const experiences = [
  {
    type: "education",
    title: "B.Tech Computer Science and Engineering",
    company: "Punjab Professional University, Punjab, India",
    period: "Aug 2023 — Present",
    details: [
      "CGPA: 8.0",
      "Honestly, the best parts of my degree have been the projects I built outside of class. But the fundamentals — DSA, DBMS, networking — those actually matter and I'm glad I know them properly.",
    ],
  },
  {
    type: "education",
    title: "Intermediate",
    company: "Spring Dale College, Lucknow, Uttar Pradesh",
    period: "Apr 2021 — Mar 2022",
    details: [
      "Percentage: 93%",
      "Focused on physics, chemistry, and mathematics with strong foundation in problem-solving and analytical thinking.",
    ],
  },
  {
    type: "education",
    title: "Matriculation",
    company: "Spring Dale College, Lucknow, Uttar Pradesh",
    period: "Apr 2019 — Mar 2020",
    details: [
      "Percentage: 92.6%",
      "Developed core concepts in science and mathematics with consistent academic excellence.",
    ],
  },
  {
    type: "training",
    title: "Data Structures & Algorithms Training",
    company: "Board Infinity",
    period: "May 2025 — Jun 2025",
    details: [
      "Covered core DSA concepts including Arrays, Linked Lists, Stacks, Queues, Trees, Graphs, and Dynamic Programming.",
      "Solved 100+ coding problems focusing on time and space complexity analysis and optimization.",
      "Practiced debugging and code optimization techniques.",
    ],
  },
];

const certificates = [
  {
    name: "Privacy & Security on Online Social Media",
    issuer: "NPTEL",
    date: "Oct 2025",
    backTitle: "What I learned",
    backDescription: "Understood how data, identity, and privacy work across social platforms — stuff that actually matters when building apps.",
  },
  {
    name: "Specialization in Java",
    issuer: "Self-paced Certification",
    date: "Feb 2025",
    backTitle: "What I learned",
    backDescription: "Got solid with OOP concepts, data structures in Java, and understanding how the language works under the hood.",
  },
  {
    name: "Web Development Using MERN Stack",
    issuer: "Online Certification",
    date: "Jan 2025",
    backTitle: "What I learned",
    backDescription: "Went from knowing pieces to understanding how the full stack connects — frontend to backend to database.",
  },
  {
    name: "Data Structures & Algorithms",
    issuer: "GreatSchools",
    date: "Aug 2024",
    backTitle: "What I learned",
    backDescription: "Built the problem-solving foundation I use every time I open LeetCode or think about how to structure code.",
  },
  {
    name: "Responsive Web Design",
    issuer: "FreeCodeCamp",
    date: "Aug 2024",
    backTitle: "What I learned",
    backDescription: "Learned to make things actually look good on every screen — not just desktop.",
  },
];

const achievements = [
  {
    title: "Hackathon Participant",
    subtitle: "Ranked in top positions",
    description: "Competed in multiple hackathons under real time pressure with a team. There's nothing like building something from zero in a few hours — I love that energy.",
    icon: "🏆",
  },
  {
    title: "LeetCode 100+ Problems",
    subtitle: "Official badge earned",
    description: "Solved 100+ problems not because someone told me to — but because I wanted to actually understand efficient code. Still going.",
    icon: "💻",
  },
  {
    title: "Vikram Foundation",
    subtitle: "Community Service Recognition",
    description: "Got officially recognised for volunteer work and awareness drives. Being useful outside of tech matters to me too.",
    icon: "🤝",
  },
];

const certificateCards = [
  <div className="w-full h-full flex flex-col p-6 gap-4 bg-[#111] border border-[#c9a84c] rounded-2xl transition-all duration-300" style={{boxShadow: "0 0 0 1px #c9a84c"}} onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 0 30px rgba(201, 168, 76, 0.6), 0 0 0 1px #c9a84c"; e.currentTarget.style.transform = "translateY(-4px)"; }} onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 0 0 1px #c9a84c"; e.currentTarget.style.transform = "translateY(0)"; }}>
    <div>
      <p className="text-[#c9a84c] text-xs uppercase tracking-widest mb-2">Board Infinity</p>
      <h3 className="text-white text-lg font-bold leading-snug">Data Structures & Algorithms Training</h3>
    </div>
    <div className="border-t border-[#c9a84c] opacity-30"/>
    <div className="flex-1">
      <p className="text-[#c9a84c] text-xs uppercase tracking-widest mb-2">What I Learned</p>
      <p className="text-light-300 text-sm leading-relaxed">Covered core DSA concepts including Arrays, Linked Lists, Stacks, Queues, Trees, Graphs, and Dynamic Programming. Solved 100+ coding problems focusing on time and space complexity analysis and optimization.</p>
    </div>
    <div className="border-t border-[#c9a84c] opacity-30"/>
    <div className="flex justify-between items-center">
      <p className="text-[#c9a84c] text-xs">📅 May 2025 - Jun 2025</p>
      <a href="https://boardinfinity.com" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-[#c9a84c] text-[#111] text-xs font-semibold rounded-lg hover:bg-white hover:shadow-md transition-all duration-300">View Certificate</a>
    </div>
  </div>,

  <div className="w-full h-full flex flex-col p-6 gap-4 bg-[#111] border border-[#c9a84c] rounded-2xl transition-all duration-300" style={{boxShadow: "0 0 0 1px #c9a84c"}} onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 0 30px rgba(201, 168, 76, 0.6), 0 0 0 1px #c9a84c"; e.currentTarget.style.transform = "translateY(-4px)"; }} onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 0 0 1px #c9a84c"; e.currentTarget.style.transform = "translateY(0)"; }}>
    <div>
      <p className="text-[#c9a84c] text-xs uppercase tracking-widest mb-2">NPTEL</p>
      <h3 className="text-white text-lg font-bold leading-snug">Privacy & Security on Online Social Media</h3>
    </div>
    <div className="border-t border-[#c9a84c] opacity-30"/>
    <div className="flex-1">
      <p className="text-[#c9a84c] text-xs uppercase tracking-widest mb-2">What I Learned</p>
      <p className="text-light-300 text-sm leading-relaxed">Understood how data, identity, and privacy work across social platforms — stuff that actually matters when building real apps.</p>
    </div>
    <div className="border-t border-[#c9a84c] opacity-30"/>
    <div className="flex justify-between items-center">
      <p className="text-[#c9a84c] text-xs">📅 Oct 2025</p>
      <a href="https://archive.nptel.ac.in/content/noc/NOC25/SEM2/Ecertificates/106/noc25-cs117/Course/NPTEL25CS117S55870041410544645.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-[#c9a84c] text-[#111] text-xs font-semibold rounded-lg hover:bg-white hover:shadow-md transition-all duration-300">View Certificate</a>
    </div>
  </div>,

  <div className="w-full h-full flex flex-col p-6 gap-4 bg-[#111] border border-[#c9a84c] rounded-2xl transition-all duration-300" style={{boxShadow: "0 0 0 1px #c9a84c"}} onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 0 30px rgba(201, 168, 76, 0.6), 0 0 0 1px #c9a84c"; e.currentTarget.style.transform = "translateY(-4px)"; }} onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 0 0 1px #c9a84c"; e.currentTarget.style.transform = "translateY(0)"; }}>
    <div>
      <p className="text-[#c9a84c] text-xs uppercase tracking-widest mb-2">Self-paced Certification</p>
      <h3 className="text-white text-lg font-bold leading-snug">Specialization in Java</h3>
    </div>
    <div className="border-t border-[#c9a84c] opacity-30"/>
    <div className="flex-1">
      <p className="text-[#c9a84c] text-xs uppercase tracking-widest mb-2">What I Learned</p>
      <p className="text-light-300 text-sm leading-relaxed">Got solid with OOP concepts, data structures in Java, and understanding how the language works under the hood.</p>
    </div>
    <div className="border-t border-[#c9a84c] opacity-30"/>
    <div className="flex justify-between items-center">
      <p className="text-[#c9a84c] text-xs">📅 Feb 2025</p>
      <a href="https://lpucolab438.examly.io/certificate/U2FsdGVkX19iL82wUqtNcByot24MqTYcMn17bcnrnUg%3D" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-[#c9a84c] text-[#111] text-xs font-semibold rounded-lg hover:bg-white hover:shadow-md transition-all duration-300">View Certificate</a>
    </div>
  </div>,

  <div className="w-full h-full flex flex-col p-6 gap-4 bg-[#111] border border-[#c9a84c] rounded-2xl transition-all duration-300" style={{boxShadow: "0 0 0 1px #c9a84c"}} onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 0 30px rgba(201, 168, 76, 0.6), 0 0 0 1px #c9a84c"; e.currentTarget.style.transform = "translateY(-4px)"; }} onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 0 0 1px #c9a84c"; e.currentTarget.style.transform = "translateY(0)"; }}>
    <div>
      <p className="text-[#c9a84c] text-xs uppercase tracking-widest mb-2">Online Certification</p>
      <h3 className="text-white text-lg font-bold leading-snug">Web Development Using MERN Stack</h3>
    </div>
    <div className="border-t border-[#c9a84c] opacity-30"/>
    <div className="flex-1">
      <p className="text-[#c9a84c] text-xs uppercase tracking-widest mb-2">What I Learned</p>
      <p className="text-light-300 text-sm leading-relaxed">Went from knowing pieces to understanding how the full stack connects — frontend to backend to database.</p>
    </div>
    <div className="border-t border-[#c9a84c] opacity-30"/>
    <div className="flex justify-between items-center">
      <p className="text-[#c9a84c] text-xs">📅 Jan 2025</p>
      <a href="https://www.cipherschools.com/certificate/preview?id=67641cd1c8147ce0ed612289" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-[#c9a84c] text-[#111] text-xs font-semibold rounded-lg hover:bg-white hover:shadow-md transition-all duration-300">View Certificate</a>
    </div>
  </div>,

  <div className="w-full h-full flex flex-col p-6 gap-4 bg-[#111] border border-[#c9a84c] rounded-2xl transition-all duration-300" style={{boxShadow: "0 0 0 1px #c9a84c"}} onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 0 30px rgba(201, 168, 76, 0.6), 0 0 0 1px #c9a84c"; e.currentTarget.style.transform = "translateY(-4px)"; }} onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 0 0 1px #c9a84c"; e.currentTarget.style.transform = "translateY(0)"; }}>
    <div>
      <p className="text-[#c9a84c] text-xs uppercase tracking-widest mb-2">CipherSchools</p>
      <h3 className="text-white text-lg font-bold leading-snug">Data Structures & Algorithms</h3>
    </div>
    <div className="border-t border-[#c9a84c] opacity-30"/>
    <div className="flex-1">
      <p className="text-[#c9a84c] text-xs uppercase tracking-widest mb-2">What I Learned</p>
      <p className="text-light-300 text-sm leading-relaxed">Built the problem-solving foundation I use every time I open LeetCode or think about how to structure code.</p>
    </div>
    <div className="border-t border-[#c9a84c] opacity-30"/>
    <div className="flex justify-between items-center">
      <p className="text-[#c9a84c] text-xs">📅 Aug 2024</p>
      <a href="https://www.cipherschools.com/certificate/preview?id=67641cd1c8147ce0ed612289" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-[#c9a84c] text-[#111] text-xs font-semibold rounded-lg hover:bg-white hover:shadow-md transition-all duration-300">View Certificate</a>
    </div>
  </div>,

  <div className="w-full h-full flex flex-col p-6 gap-4 bg-[#111] border border-[#c9a84c] rounded-2xl transition-all duration-300" style={{boxShadow: "0 0 0 1px #c9a84c"}} onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 0 30px rgba(201, 168, 76, 0.6), 0 0 0 1px #c9a84c"; e.currentTarget.style.transform = "translateY(-4px)"; }} onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 0 0 1px #c9a84c"; e.currentTarget.style.transform = "translateY(0)"; }}>
    <div>
      <p className="text-[#c9a84c] text-xs uppercase tracking-widest mb-2">FreeCodeCamp</p>
      <h3 className="text-white text-lg font-bold leading-snug">Responsive Web Design</h3>
    </div>
    <div className="border-t border-[#c9a84c] opacity-30"/>
    <div className="flex-1">
      <p className="text-[#c9a84c] text-xs uppercase tracking-widest mb-2">What I Learned</p>
      <p className="text-light-300 text-sm leading-relaxed">Learned to make things actually look good on every screen — not just desktop.</p>
    </div>
    <div className="border-t border-[#c9a84c] opacity-30"/>
    <div className="flex-1">
      <p className="text-[#c9a84c] text-xs uppercase tracking-widest mb-2">What I Learned</p>
      <p className="text-light-300 text-sm leading-relaxed">Learned to make things actually look good on every screen — not just desktop.</p>
    </div>
    <div className="border-t border-[#c9a84c] opacity-30"/>
    <div className="flex justify-between items-center">
      <p className="text-[#c9a84c] text-xs">📅 Aug 2024</p>
      <a href="https://www.freecodecamp.org/certification/fcc77e88f99-7d94-4bdc-9dad-897af5be8a26/responsive-web-design" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-[#c9a84c] text-[#111] text-xs font-semibold rounded-lg hover:bg-white hover:shadow-md transition-all duration-300">View Certificate</a>
    </div>
  </div>
];

const achievementCards = [
  <div className="w-full h-full flex flex-col p-6 gap-4 bg-[#111] border border-[#c9a84c] rounded-2xl transition-all duration-300" style={{boxShadow: "0 0 0 1px #c9a84c"}} onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 0 30px rgba(201, 168, 76, 0.6), 0 0 0 1px #c9a84c"; e.currentTarget.style.transform = "translateY(-4px)"; }} onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 0 0 1px #c9a84c"; e.currentTarget.style.transform = "translateY(0)"; }}>
    <div>
      <span className="text-4xl">🏆</span>
      <h3 className="text-white text-xl font-bold mt-3">
        Hackathon Participant
      </h3>
      <p className="text-[#c9a84c] text-xs uppercase tracking-widest mt-1">
        Ranked in top positions
      </p>
    </div>
    <div className="border-t border-[#c9a84c] opacity-30"/>
    <div className="flex-1">
      <p className="text-light-300 text-sm leading-relaxed">
        "Competed in multiple hackathons under real time pressure. There's nothing like building something from zero in a few hours — I love that energy."
      </p>
    </div>
  </div>,

  <div className="w-full h-full flex flex-col p-6 gap-4 bg-[#111] border border-[#c9a84c] rounded-2xl transition-all duration-300" style={{boxShadow: "0 0 0 1px #c9a84c"}} onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 0 30px rgba(201, 168, 76, 0.6), 0 0 0 1px #c9a84c"; e.currentTarget.style.transform = "translateY(-4px)"; }} onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 0 0 1px #c9a84c"; e.currentTarget.style.transform = "translateY(0)"; }}>
    <div>
      <span className="text-4xl">💻</span>
      <h3 className="text-white text-xl font-bold mt-3">
        LeetCode 100+ Problems
      </h3>
      <p className="text-[#c9a84c] text-xs uppercase tracking-widest mt-1">
        Official badge earned
      </p>
    </div>
    <div className="border-t border-[#c9a84c] opacity-30"/>
    <div className="flex-1">
      <p className="text-light-300 text-sm leading-relaxed">
        "Solved 100+ problems not because someone told me to — but because I wanted to actually understand efficient code. Still going."
      </p>
    </div>
  </div>,

  <div className="w-full h-full flex flex-col p-6 gap-4 bg-[#111] border border-[#c9a84c] rounded-2xl transition-all duration-300" style={{boxShadow: "0 0 0 1px #c9a84c"}} onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 0 30px rgba(201, 168, 76, 0.6), 0 0 0 1px #c9a84c"; e.currentTarget.style.transform = "translateY(-4px)"; }} onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 0 0 1px #c9a84c"; e.currentTarget.style.transform = "translateY(0)"; }}>
    <div>
      <span className="text-4xl">🤝</span>
      <h3 className="text-white text-xl font-bold mt-3">
        Vikram Foundation
      </h3>
      <p className="text-[#c9a84c] text-xs uppercase tracking-widest mt-1">
        Community Service Recognition
      </p>
    </div>
    <div className="border-t border-[#c9a84c] opacity-30"/>
    <div className="flex-1">
      <p className="text-light-300 text-sm leading-relaxed">
        "Got officially recognised for volunteer work and awareness drives. Being useful outside of tech matters to me too."
      </p>
    </div>
  </div>
];

function ExperienceItem({ experience, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.33, 1, 0.68, 1],
      }}
      className="group"
    >
      {/* Top divider line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="h-px bg-dark-400 origin-left mb-8"
      />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 pb-12">
        {/* Left column — meta */}
        <div className="md:col-span-4 flex flex-wrap items-start gap-3">
          <span className="font-mono text-xs text-light-300 tracking-wider">
            {experience.period}
          </span>
          <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-accent/60 border border-accent/20 px-2.5 py-1 rounded-full">
            {experience.type}
          </span>
        </div>

        {/* Right column — content */}
        <div className="md:col-span-8">
          <h3 className="font-display font-bold text-xl md:text-2xl text-light-50 tracking-tight mb-1 group-hover:text-accent transition-colors duration-500">
            {experience.title}
          </h3>
          <p className="text-light-300 text-sm mb-6">{experience.company}</p>

          <ul className="space-y-3">
            {experience.details.map((detail, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-1 h-1 rounded-full bg-accent/50 mt-2 shrink-0" />
                <span className="text-light-300 text-sm font-light leading-relaxed">
                  {detail}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-32 md:py-40 px-6 md:px-12">
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
            03 — Experience
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-bold text-4xl md:text-5xl text-light-50 tracking-tight mb-20"
        >
          Background &
          <br />
          Education
        </motion.h2>

        {/* Experience items */}
        <div>
          {experiences.map((exp, i) => (
            <ExperienceItem key={i} experience={exp} index={i} />
          ))}
        </div>

        {/* Certificates Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 md:mt-28 pt-12 md:pt-20 border-t border-dark-400"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            {/* Left side */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="font-mono text-accent text-xs tracking-[0.2em] uppercase">
                04 — Certifications
              </span>
              <h3 className="font-display font-bold text-3xl md:text-4xl text-light-50 tracking-tight mb-6 mt-4">
                Professional Development
              </h3>
              <p className="text-light-500 text-base leading-relaxed font-light">
                I pick up certifications when I want to go deeper on something specific — not just to collect badges.
              </p>
            </motion.div>

            {/* Right side - Stack component */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col items-center justify-center"
            >
              <div style={{ width: '320px', height: '440px', margin: '0 auto' }}>
                <Stack
                  cards={certificateCards}
                  autoplay={true}
                  autoplayDelay={3000}
                  pauseOnHover={true}
                  sendToBackOnClick={true}
                  randomRotation={true}
                  sensitivity={150}
                  mobileClickOnly={true}
                />
              </div>
              <p className="text-light-700 text-xs font-light mt-6 text-center">
                drag to swipe · click to shuffle
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 md:mt-28 pt-12 md:pt-20 border-t border-dark-400"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            {/* Left side */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="font-mono text-accent text-xs tracking-[0.2em] uppercase">
                05 — Achievements
              </span>
              <h3 className="font-display font-bold text-3xl md:text-4xl text-light-50 tracking-tight mb-6 mt-4">
                Milestones & Wins
              </h3>
              <p className="text-light-500 text-base leading-relaxed font-light">
                A few things I'm proud of outside of just writing code.
              </p>
            </motion.div>

            {/* Right side - Stack component */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col items-center justify-center"
            >
              <div style={{ width: '380px', height: '460px', margin: '0 auto' }}>
                <Stack
                  cards={achievementCards}
                  autoplay={true}
                  autoplayDelay={3500}
                  pauseOnHover={true}
                  sendToBackOnClick={true}
                  randomRotation={true}
                  sensitivity={150}
                  mobileClickOnly={true}
                />
              </div>
              <p className="text-light-700 text-xs font-light mt-6 text-center">
                drag to swipe · click to shuffle
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}