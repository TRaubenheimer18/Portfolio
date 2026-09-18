import { motion } from "framer-motion";

const categories = [
  {
    number: "01",
    label: "UI/UX Design",
    description: "Crafting intuitive, user-centred interfaces from concept to prototype.",
    items: ["User Flows", "Information Architecture", "Wireframing", "Visual Design", "Responsive Design"],
  },
  {
    number: "02",
    label: "Front-End",
    description: "Building responsive, performant interfaces with modern web technologies.",
    items: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    number: "03",
    label: "Design Tools",
    description: "Designing and prototyping with industry-standard creative software.",
    items: ["Figma", "Canva"],
  },
  {
    number: "04",
    label: "Back-End & Database",
    description: "Building server-side logic and managing data with modern backend tools.",
    items: ["Supabase", "PostgreSQL", "REST APIs", "Authentication", "Environment Variables"],
  },
  {
    number: "05",
    label: "Other",
    description: "Supporting tools and workflows used across projects.",
    items: ["Git", "GitHub", "GitLab", "VS Code", "Prototyping"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 lg:py-32 bg-[#1d2d44]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="flex items-end justify-between mb-16 border-b border-[#fffcf6]/10 pb-10">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="w-8 h-px bg-[#a2c0dd]" />
              <p className="text-xs tracking-[0.2em] text-[#a2c0dd] uppercase font-medium">
                Capabilities
              </p>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-4xl lg:text-5xl font-bold text-[#fffcf6] leading-tight"
            >
              Skills & Tools
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block text-sm text-[#fffcf6]/40 max-w-xs text-right leading-relaxed"
          >
            A mix of design thinking and technical skills developed through academic and professional experience.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#fffcf6]/10">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-[#1d2d44] p-8 flex flex-col gap-6 group hover:bg-[#fffcf6]/5 transition-colors duration-300"
            >
              {/* Number */}
              <span className="text-5xl font-bold text-[#fffcf6]/8 group-hover:text-[#66001f]/30 transition-colors duration-300 leading-none">
                {cat.number}
              </span>

              {/* Label + description */}
              <div>
                <p className="text-xs tracking-[0.18em] uppercase text-[#a2c0dd] font-medium mb-2">
                  {cat.label}
                </p>
                <p className="text-sm text-[#fffcf6]/40 leading-relaxed">
                  {cat.description}
                </p>
              </div>

              {/* Skill pills */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-3 py-1.5 border border-[#fffcf6]/15 text-[#fffcf6]/70
                    hover:border-[#66001f] hover:text-[#fffcf6] transition-colors duration-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
          {/* Filler to prevent blank gap cell */}
          {categories.length % 3 !== 0 && (
            <div className="hidden lg:block bg-[#1d2d44]" />
          )}
        </div>

      </div>
    </section>
  );
}
