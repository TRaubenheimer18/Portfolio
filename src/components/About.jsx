import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function About() {
  return (
    <section id="about" className="py-28 lg:py-36 bg-[#fffcf6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top rule */}
        <div className="flex items-center gap-4 mb-16">
          <span className="w-8 h-px bg-[#66001f]" />
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="text-xs tracking-[0.2em] text-[#66001f] uppercase font-medium"
          >
            About My Work
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 items-start">
          {/* Left — background */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-sm text-[#1d2d44]/50 leading-relaxed max-w-xs">
              I have a background in Applications Development and am currently
              completing my Advanced Diploma in Multimedia Applications, with a
              growing focus on UI/UX design.
            </p>
            <div className="mt-8 flex flex-col gap-2">
              {["Creative Design", "Technical Development"].map((tag) => (
                <span
                  key={tag}
                  className="inline-block text-xs tracking-widest uppercase text-[#1d2d44] border border-[#1d2d44]/20 px-3 py-1.5 w-fit"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right — statement */}
          <div>
            <motion.h2
              {...fadeUp}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1d2d44] leading-[1.1] mb-8"
            >
              I design interfaces with a balance of creativity, usability and
              technology.
            </motion.h2>
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-base lg:text-lg text-[#1d2d44]/55 leading-relaxed max-w-2xl"
            >
              I enjoy transforming ideas into intuitive digital experiences while
              using front-end development to bring those designs to life.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
