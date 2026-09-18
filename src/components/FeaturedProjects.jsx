import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import beHome from "../assets/images/B&E-homepage.png";
import beContact from "../assets/images/B&E-contact.png";
import nazareneDistrict from "../assets/images/Nazarene-website.png";

const projects = [
  {
    num: "01",
    title: "Branding & Events Studio",
    tags: ["UI/UX Design", "Front-End Development"],
    status: "live",
    description:
      "A modern branding and events website featuring elegant layouts, service pages and a clean user experience built with React and Tailwind CSS.",
    image: beHome,
    link: "/branding",
  },
  {
    num: "02",
    title: "Nazarene District",
    tags: ["UI/UX Design", "Front-End Development", "Backend Development"],
    status: "in-progress",
    description:
      "A responsive website designed and developed for the Church of the Nazarene District, showcasing churches, ministries, events and contact information.",
    image: nazareneDistrict,
    link: "/nazarene",
  },
  // {
  //   num: "03",
  //   title: "Event Planner App",
  //   tags: ["UX Design", "Figma", "Prototype"],
  //   description:
  //     "A mobile application prototype designed with a focus on usability, accessibility and intuitive navigation for event planning workflows.",
  //   image: beContact,
  //   link: "/mobile-app",
  // },
];

function ProjectRow({ project, index }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center py-16 lg:py-20 border-b border-[#1d2d44]/10 ${
        !isEven ? "lg:[direction:rtl]" : ""
      }`}
    >
      {/* Image */}
      <motion.div
        className="overflow-hidden border border-[#1d2d44]/10 group cursor-pointer"
        style={!isEven ? { direction: "ltr" } : {}}
        whileHover="hover"
      >
        <motion.img
          src={project.image}
          alt={project.title}
          variants={{ hover: { scale: 1.04 } }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full object-cover object-top h-64 lg:h-80"
        />
      </motion.div>

      {/* Text */}
      <motion.div
        style={!isEven ? { direction: "ltr" } : {}}
        whileHover="hover"
        className="group"
      >
        <span className="text-xs tracking-[0.2em] text-[#1d2d44]/30 font-medium">
          {project.num}
        </span>
        <motion.h3
          variants={{ hover: { x: 4 } }}
          transition={{ duration: 0.3 }}
          className="text-3xl lg:text-4xl font-bold text-[#1d2d44] mt-2 mb-4 leading-tight"
        >
          {project.title}
        </motion.h3>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] tracking-widest uppercase text-[#66001f] border border-[#66001f]/30 px-2.5 py-1"
            >
              {tag}
            </span>
          ))}
          {project.status === "live" && (
            <span className="inline-flex items-center gap-1.5 text-[10px] tracking-widest uppercase font-semibold border border-green-600/40 bg-green-50 px-2.5 py-1 text-green-700">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
              Live
            </span>
          )}
          {project.status === "in-progress" && (
            <span className="inline-flex items-center gap-1.5 text-[10px] tracking-widest uppercase font-semibold border border-[#66001f]/30 px-2.5 py-1 text-[#66001f]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#66001f] animate-pulse" />
              In Progress
            </span>
          )}
        </div>

        <p className="text-sm text-[#1d2d44]/55 leading-relaxed mb-8 max-w-sm">
          {project.description}
        </p>

        <Link
          to={project.link}
          className="inline-flex items-center gap-2 text-sm font-medium text-[#1d2d44] border-b border-[#1d2d44]/30 pb-0.5 hover:border-[#66001f] hover:text-[#66001f] transition-colors duration-300 group/link"
        >
          View Case Study
          <motion.span
            variants={{ hover: { x: 5 } }}
            transition={{ duration: 0.3 }}
            className="inline-flex"
          >
            <ArrowRight size={15} />
          </motion.span>
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default function FeaturedProjects() {
  return (
    <section id="work" className="py-20 lg:py-28 bg-[#fffcf6] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <span className="w-8 h-px bg-[#66001f]" />
          <p className="text-xs tracking-[0.2em] text-[#66001f] uppercase font-medium">
            Projects
          </p>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-4">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl lg:text-5xl font-bold text-[#1d2d44]"
          >
            Selected Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-sm text-[#1d2d44]/50 max-w-sm leading-relaxed"
          >
            A selection of projects combining UI/UX design, development and
            creative problem solving.
          </motion.p>
        </div>

        {/* Projects */}
        {projects.map((project, i) => (
          <ProjectRow key={project.num} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
