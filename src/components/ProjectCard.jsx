import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  link,
}) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden rounded-3xl bg-white shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300"
    >
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-8">
        <h3 className="text-3xl font-bold text-[#13273F] mb-4">
          {title}
        </h3>

        <p className="text-gray-600 leading-8 mb-6">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-3 mb-8">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-[#E9D4C3] px-4 py-2 text-sm font-medium text-[#13273F]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Button */}
        <a
          href={link}
          className="inline-flex items-center gap-2 font-semibold text-[#5C4033] transition-all duration-300 hover:gap-4"
        >
          View Case Study
          <ArrowRight size={18} />
        </a>
      </div>
    </motion.div>
  );
}