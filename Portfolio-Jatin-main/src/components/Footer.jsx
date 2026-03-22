import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const links = [
  { label: "GitHub", href: "https://github.com/JATIN-JAY" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/jatin-jay-singh-788088349/" },
  { label: "Email", href: "mailto:jatinsingh2004@gmail.com" },
];

export default function Footer() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send to FormSubmit.co (free form submission service)
      const response = await fetch("https://formspree.io/f/xyzgqpwj", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 3000);
      }
    } catch (error) {
      alert("Error sending message. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <footer id="contact" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-px bg-dark-400 origin-left mb-20"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-mono text-accent text-xs tracking-[0.2em] uppercase mb-6">
              04 — Contact
            </p>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-light-50 tracking-tight leading-[1.05]">
              Let's build
              <br />
              something great
              <span className="text-accent">.</span>
            </h2>
            <p className="text-light-400 text-base leading-relaxed mt-8">
              Have a project in mind or just want to chat? Drop me a message and I'll get back to you shortly.
            </p>
          </motion.div>

          {/* Right — Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col justify-end"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Input */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-black border border-dark-500 text-light-50 placeholder-light-500 px-4 py-3 rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/40 transition-all duration-300"
                  style={{
                    WebkitTextFillColor: "#f5f5f0",
                  }}
                />
              </motion.div>

              {/* Email Input */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.35 }}
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-black border border-dark-500 text-light-50 placeholder-light-500 px-4 py-3 rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/40 transition-all duration-300"
                  style={{
                    WebkitTextFillColor: "#f5f5f0",
                  }}
                />
              </motion.div>

              {/* Message Textarea */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <textarea
                  name="message"
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full bg-black border border-dark-500 text-light-50 placeholder-light-500 px-4 py-3 rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/40 transition-all duration-300 resize-none"
                  style={{
                    WebkitTextFillColor: "#f5f5f0",
                  }}
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.45 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="w-full bg-accent text-dark font-semibold px-6 py-3 rounded-lg hover:bg-accent/90 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300"
              >
                {loading ? "Sending..." : "Send Message"}
              </motion.button>

              {/* Success Message */}
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-emerald-500/20 border border-emerald-500/50 text-emerald-300 px-4 py-3 rounded-lg text-sm text-center"
                >
                  ✓ Message sent successfully!
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-px bg-dark-400 origin-left my-16"
        />

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <p className="font-mono text-light-600 text-xs tracking-[0.2em] uppercase mb-6">
            Get in Touch
          </p>
          <div className="space-y-0">
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                className="group flex items-center justify-between py-5 border-b border-dark-400 hover:border-accent/30 transition-colors duration-300"
              >
                <span className="text-light-400 group-hover:text-light-50 transition-colors duration-300 text-lg font-display font-medium">
                  {link.label}
                </span>
                <ArrowUpRight className="w-4 h-4 text-light-600 group-hover:text-accent transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-24 pt-8 border-t border-dark-400 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-light-600 text-xs font-mono tracking-wider">
            © 2026 Jatin Singh
          </p>
          <p className="text-light-600 text-xs font-mono tracking-wider">
            Full-Stack Developer · India
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
