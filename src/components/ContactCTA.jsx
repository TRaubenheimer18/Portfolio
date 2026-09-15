import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <section id="contact" className="relative py-32 lg:py-40 bg-[#1d2d44] overflow-hidden scroll-mt-20">
      {/* Decorative lines */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute top-12 left-0 w-1/3 h-px bg-[#a2c0dd]/20 origin-left"
      />
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        className="absolute bottom-12 right-0 w-1/4 h-px bg-[#66001f]/30 origin-right"
      />
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0, ease: "easeOut", delay: 0.3 }}
        className="absolute top-0 right-24 w-px h-24 bg-[#a2c0dd]/15 origin-top"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs tracking-[0.2em] text-[#a2c0dd] uppercase font-medium mb-6"
        >
          Get In Touch
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl lg:text-6xl xl:text-7xl font-bold text-[#fffcf6] leading-[1.05] mb-6 max-w-3xl"
        >
          Have a project in mind?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-lg text-[#fffcf6]/50 mb-12"
        >
          Let's create something meaningful.
        </motion.p>

        <motion.a
          href="mailto:teyanaraubenheimer18@gmail.com"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          whileHover={{ x: 4 }}
          className="inline-flex items-center gap-3 bg-[#66001f] text-[#fffcf6] text-sm font-medium px-8 py-4 hover:bg-[#66001f]/85 transition-colors duration-300"
        >
          Get In Touch
          <ArrowRight size={16} />
        </motion.a>
      </div>
    </section>
  );
}
