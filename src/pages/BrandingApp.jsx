import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Users, Route, Smartphone, PenTool, CheckCircle } from "lucide-react";

const hero = "https://placehold.co/1200x600/13273F/ffffff?text=Mobile+App+Hero";
const persona = "https://placehold.co/1200x700/F9F7F5/13273F?text=User+Persona";
const wireframe = "https://placehold.co/1200x700/E9D4C3/13273F?text=Wireframes";
const finalDesign = "https://placehold.co/1200x700/AFC6D9/13273F?text=Final+Design";

const process = [
  { icon: <Users size={40} />, title: "Research", text: "Understanding user needs through research and analysis.", bg: "bg-[#13273F] text-white" },
  { icon: <Route size={40} />, title: "User Flow", text: "Mapping a seamless navigation journey.", bg: "bg-[#E9D4C3]" },
  { icon: <PenTool size={40} />, title: "Wireframes", text: "Designing low-fidelity layouts before visual design.", bg: "bg-[#AFC6D9]" },
  { icon: <Smartphone size={40} />, title: "Prototype", text: "Creating an interactive high-fidelity prototype.", bg: "bg-[#5C4033] text-white" },
];

const features = [
  "Clean and intuitive navigation",
  "Accessible colour contrast",
  "Responsive mobile layouts",
  "User-centred interaction design",
  "Modern visual hierarchy",
  "Consistent component design",
];

export default function MobileApp() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-[#13273F] text-white pt-36 pb-24">
        <div className="max-w-7xl mx-auto px-8">
          <Link to="/" className="inline-flex items-center gap-2 hover:text-[#E9D4C3] duration-300">
            <ArrowLeft size={18} />
            Back to Portfolio
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-12"
          >
            <p className="uppercase tracking-[0.3em] text-[#AFC6D9]">Case Study</p>
            <h1 className="text-6xl font-bold mt-5">Mobile Application</h1>
            <p className="max-w-3xl mt-8 text-xl leading-9 text-gray-200">
              A user-centred mobile application designed to deliver an intuitive, accessible and
              engaging experience through thoughtful UX research and interface design.
            </p>
          </motion.div>
        </div>
      </section>

     

      {/* Overview */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-8 grid lg:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-[#13273F] mb-4">My Role</h3>
            <p>UX Designer</p>
            <p>UI Designer</p>
            <p>Prototype Designer</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#13273F] mb-4">Tools</h3>
            <p>Figma</p>
            <p>Photoshop</p>
            <p>Illustrator</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#13273F] mb-4">Duration</h3>
            <p>University Project</p>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="bg-[#F9F7F5] py-24">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-5xl font-bold text-[#13273F] mb-8">The Challenge</h2>
          <p className="text-lg leading-9 text-gray-600">
            The challenge was to create a mobile experience that was simple, intuitive and visually
            appealing while ensuring users could complete their goals with minimal effort.
          </p>
        </div>
      </section>

      {/* UX Process */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-5xl font-bold mb-16">UX Process</h2>
          <div className="grid lg:grid-cols-4 gap-8">
            {process.map(({ icon, title, text, bg }) => (
              <div key={title} className={`rounded-3xl p-8 ${bg}`}>
                {icon}
                <h3 className="text-2xl mt-6 mb-4">{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Persona */}
      <section className="bg-[#F9F7F5] py-24">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-5xl font-bold mb-16">User Persona</h2>
          <img src={persona} alt="Persona" className="rounded-3xl shadow-xl" />
        </div>
      </section>

      {/* Wireframes */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-5xl font-bold mb-16">Wireframes</h2>
          <img src={wireframe} alt="Wireframes" className="rounded-3xl shadow-xl" />
        </div>
      </section>

      {/* Final Design */}
      <section className="bg-[#F9F7F5] py-24">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-5xl font-bold mb-16">Final Interface</h2>
          <img src={finalDesign} alt="Final Design" className="rounded-3xl shadow-xl" />
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-5xl font-bold mb-16">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature) => (
              <div key={feature} className="flex gap-4">
                <CheckCircle className="text-[#13273F] shrink-0" />
                <p>{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-8">
          <h2 className="text-5xl font-bold mb-8">Reflection</h2>
          <p className="text-lg leading-9 text-gray-600">
            This project strengthened my understanding of user-centred design, usability principles
            and interface consistency. I learned the importance of validating design decisions
            through research, planning navigation flows before creating interfaces, and designing
            with accessibility in mind.
          </p>
        </div>
      </section>
    </div>
  );
}
