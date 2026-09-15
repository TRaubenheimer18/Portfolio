import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowDown } from "lucide-react";
import profile from "../assets/images/profile.jpeg";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut", delay },
});

const float = {
  animate: { y: [0, -10, 0] },
  transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
};

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#fffcf6] flex flex-col justify-center pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">

          {/* LEFT — Text */}
          <div className="max-w-xl">
            <motion.p
              {...fade(0.1)}
              className="text-xs font-medium tracking-[0.2em] text-[#66001f] uppercase mb-6"
            >
              UI/UX Designer · Front-End Developer
            </motion.p>

            <motion.h1
              {...fade(0.25)}
              className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] text-[#1d2d44] mb-6"
            >
              Designing digital{" "}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.55 }}
                className="text-[#66001f]"
              >
                experiences
              </motion.span>
              {" "}that are clear, purposeful and engaging.
            </motion.h1>

            <motion.p
              {...fade(0.5)}
              className="text-base lg:text-lg text-[#1d2d44]/60 leading-relaxed mb-10 max-w-md"
            >
              I'm a multimedia graduate focused on UI/UX design and front-end
              development, combining creative design thinking with technical
              development.
            </motion.p>

            <motion.div {...fade(0.65)} className="flex flex-wrap gap-4">
              <a
                href="#work"
                className="bg-[#66001f] text-[#fffcf6] text-sm font-medium px-7 py-3.5 hover:bg-[#66001f]/85 transition-colors duration-300"
              >
                View My Work
              </a>
              <Link
                to="/resume"
                className="border border-[#1d2d44] text-[#1d2d44] text-sm font-medium px-7 py-3.5 hover:bg-[#1d2d44] hover:text-[#fffcf6] transition-colors duration-300"
              >
                View Resume
              </Link>
            </motion.div>
          </div>

          {/* RIGHT — Editorial profile composition */}
          <div className="relative hidden md:flex justify-center items-center py-12">

            {/* Outer wrapper — fades + slides in */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
              className="relative"
            >

              {/* Sky-blue offset shape — top-left corner */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="absolute -top-5 -left-5 w-32 h-40 bg-[#a2c0dd]/30"
              />

              {/* Dark blue offset frame — bottom-right */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="absolute -bottom-5 -right-5 w-full h-full border border-[#1d2d44]/30"
              />

              {/* Profile image — floats gently */}
              <motion.img
                src={profile}
                alt="Teyana Raubenheimer"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                whileHover={{ scale: 1.02 }}
                className="relative w-64 lg:w-72 xl:w-80 aspect-[3/4] object-cover object-top rounded-sm"
              />

              {/* Burgundy accent line — left edge */}
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
                style={{ originY: 0 }}
                className="absolute top-0 -left-3 w-[2px] h-full bg-[#66001f]"
              />

              {/* Top-right dot grid */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="absolute -top-8 -right-8 grid grid-cols-4 gap-1.5"
              >
                {Array.from({ length: 16 }).map((_, i) => (
                  <span key={i} className="w-1 h-1 rounded-full bg-[#1d2d44]/20" />
                ))}
              </motion.div>

              {/* Bottom-left thin horizontal line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 1.0, ease: "easeOut" }}
                style={{ originX: 0 }}
                className="absolute -bottom-8 left-0 w-24 h-px bg-[#a2c0dd]"
              />

              {/* Small circle accent — bottom-left */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                className="absolute -bottom-8 left-24 w-2 h-2 rounded-full border border-[#a2c0dd]"
              />

            </motion.div>

            {/* Floating name label — independent position */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="absolute -bottom-2 left-4 bg-[#fffcf6] border border-[#1d2d44]/15 px-4 py-3"
            >
              <div className="w-4 h-[2px] bg-[#66001f] mb-2" />
              <p className="text-[10px] font-bold tracking-[0.2em] text-[#1d2d44] uppercase">Teyana Raubenheimer</p>
              <p className="text-[10px] tracking-[0.15em] text-[#1d2d44]/50 mt-0.5">UI/UX · Front-End</p>
            </motion.div>

          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-16 flex items-center gap-3"
        >
          <div className="flex flex-col items-center gap-1">
            <span className="text-[10px] tracking-[0.2em] text-[#1d2d44]/40 uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown size={14} className="text-[#66001f]" />
            </motion.div>
            <span className="text-[10px] tracking-[0.2em] text-[#1d2d44]/40 uppercase">Work</span>
          </div>
          <div className="h-px flex-1 max-w-[80px] bg-[#1d2d44]/15" />
        </motion.div>
      </div>
    </section>
  );
}
