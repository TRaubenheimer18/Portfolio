import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const education = [
  {
    degree: "Advanced Diploma in Multimedia Applications",
    school: "Cape Peninsula University of Technology",
    year: "2026 – Present",
  },
  {
    degree: "Diploma in Applications Development",
    school: "Cape Peninsula University of Technology",
    year: "2022 – 2025",
  },
  {
    degree: "National Senior Certificate",
    school: "Belhar Secondary School",
    year: "2018-2022"
  },
];

export default function Education() {
  return (
    <section id="education" className="py-32 bg-[#F9F7F5]">
      <div className="max-w-7xl mx-auto px-8">
        <SectionTitle subtitle="EDUCATION" title="My Background" />
        <div className="grid gap-8 max-w-3xl">
          {education.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-lg"
            >
              <p className="text-[#5C4033] text-sm tracking-widest uppercase mb-2">{item.year}</p>
              <h3 className="text-2xl font-bold text-[#13273F] mb-1">{item.degree}</h3>
              <p className="text-gray-500">{item.school}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
