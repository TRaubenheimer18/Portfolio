import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ExternalLink, Download } from "lucide-react";

export default function ResumeCTA() {
  return (
    <section className="py-24 bg-[#a2c0dd]/20 border-y border-[#a2c0dd]/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs tracking-[0.2em] text-[#66001f] uppercase font-medium mb-4">
              Experience
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1d2d44] leading-tight">
              Want to know more about my experience?
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              to="/resume"
              className="inline-flex items-center gap-2 bg-[#66001f] text-[#fffcf6] text-sm font-medium px-7 py-3.5 hover:bg-[#66001f]/85 transition-colors duration-300"
            >
              <ExternalLink size={15} />
              View Resume
            </Link>
            <Link
              to="/resume"
              className="inline-flex items-center gap-2 border border-[#1d2d44] text-[#1d2d44] text-sm font-medium px-7 py-3.5 hover:bg-[#1d2d44] hover:text-[#fffcf6] transition-colors duration-300"
            >
              <Download size={15} />
              Download Resume
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
