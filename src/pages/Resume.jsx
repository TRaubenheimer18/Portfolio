import {
  ArrowLeft,
  Download,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  GraduationCap,
  Code2,
  User,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import cv from "../assets/Resume.pdf";

const experiences = [
  {
    title: "Student Registration Assistant",
    company:
      "Cape Peninsula University of Technology",
    location: "District Six, Cape Town",
    date: "Jan 2026 – Feb 2026",
    description:
      "Supported students and faculty staff during the university registration period.",
    responsibilities: [
      "Assisted students with registration queries and online registration.",
      "Resolved common issues relating to the registration portal.",
      "Managed student flow during busy registration periods.",
      "Supported faculty staff with administrative tasks.",
      "Handled student enquiries with minimal supervision.",
    ],
  },
  {
    title: "Software Developer Intern",
    company: "Plum Systems",
    location: "Bellville, Cape Town",
    date: "Jan 2025 – Dec 2025",
    description:
      "Worked as part of a development team building and maintaining web and mobile application interfaces.",
    responsibilities: [
      "Developed web and mobile application interfaces using React.",
      "Collaborated with team members to implement new features and UI components.",
      "Built responsive and user-friendly web pages.",
      "Used GitLab for branching, commits, merge requests and code reviews.",
      "Worked within an Agile development environment.",
    ],
  },
];

const education = [
  {
    qualification: "Advanced Diploma in ICT",
    field: "Multimedia Applications",
    institution: "Cape Peninsula University of Technology",
    year: "2026 - Present",
  },
  {
    qualification: "Diploma in ICT",
    field: "Applications Development",
    institution: "Cape Peninsula University of Technology",
    year: "2023 -2025",
  },
  {
    qualification: "National Senior Certificate",
    field: "",
    institution: "Belhar High School",
    year: "2022",
  },
];

const technicalSkills = [
  "React",
  "JavaScript",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Java",
  "GitHub",
  "GitLab",
  "Figma",
  "Microsoft Office",
];

const softSkills = [
  "Team Collaboration",
  "Communication",
  "Time Management",
  "Adaptability",
  "Quick Learning",
  "Problem-Solving",
];

export default function Resume() {
  return (
    <div className="min-h-screen bg-[#FFFCF6] text-[#1D2D44]">

      {/* =========================
          TOP NAVIGATION
      ========================== */}

      <div className="pt-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">

          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[#1D2D44] font-medium
            hover:text-[#66001F] transition-colors duration-300"
          >
            <ArrowLeft size={19} />
            Back to Portfolio
          </Link>

        </div>
      </div>


      {/* =========================
          HERO
      ========================== */}

      <section className="px-6 md:px-10 pt-12 pb-20">

        <div className="max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="grid lg:grid-cols-[1fr_auto] gap-12 items-end"
          >

            <div>

              <p className="uppercase tracking-[0.35em] text-sm font-semibold text-[#66001F]">
                Resume
              </p>

              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mt-5">
                Teyana
                <span className="block text-[#66001F]">
                  Raubenheimer
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-[#1D2D44]/70 mt-7 max-w-2xl">
                UI/UX Designer & Front-End Developer
              </p>

              <p className="mt-6 max-w-2xl text-[#1D2D44]/65 leading-8">
                Multimedia Applications student with a background in
                Applications Development, focused on creating intuitive,
                responsive and visually engaging digital experiences.
              </p>

            </div>


            {/* Download Button */}

            <div>

              <a
                href={cv}
                download
                className="inline-flex items-center gap-3
                bg-[#66001F] text-white
                px-7 py-4 rounded-full
                font-medium
                hover:bg-[#1D2D44]
                transition-all duration-300
                shadow-lg hover:shadow-xl"
              >
                <Download size={19} />
                Download Resume
              </a>

            </div>

          </motion.div>

        </div>

      </section>


      {/* =========================
          CONTACT STRIP
      ========================== */}

      <section className="border-y border-[#1D2D44]/10 bg-white">

        <div className="max-w-7xl mx-auto px-6 md:px-10">

          <div className="grid md:grid-cols-3">

            {/* Email */}

            <div className="flex items-center gap-4 py-7 md:pr-8 md:border-r border-[#1D2D44]/10">

              <div className="w-11 h-11 rounded-full bg-[#A2C0DD]/40 flex items-center justify-center">
                <Mail size={19} />
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-[#66001F] font-semibold">
                  Email
                </p>

                <p className="text-sm md:text-base mt-1">
                  teyanaraubenheimer18@gmail.com
                </p>
              </div>

            </div>


            {/* Phone */}

            <div className="flex items-center gap-4 py-7 md:px-8 md:border-r border-[#1D2D44]/10">

              <div className="w-11 h-11 rounded-full bg-[#A2C0DD]/40 flex items-center justify-center">
                <Phone size={19} />
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-[#66001F] font-semibold">
                  Phone
                </p>

                <p className="text-base mt-1">
                  078 117 7830
                </p>
              </div>

            </div>


            {/* Location */}

            <div className="flex items-center gap-4 py-7 md:pl-8">

              <div className="w-11 h-11 rounded-full bg-[#A2C0DD]/40 flex items-center justify-center">
                <MapPin size={19} />
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-[#66001F] font-semibold">
                  Location
                </p>

                <p className="text-base mt-1">
                  Cape Town, South Africa
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          MAIN CONTENT
      ========================== */}

      <main className="max-w-7xl mx-auto px-6 md:px-10 py-24">


        {/* =========================
            PROFILE
        ========================== */}

        <section className="grid lg:grid-cols-[260px_1fr] gap-12 mb-28">

          <div>

            <div className="flex items-center gap-3">

              <User size={22} />

              <h2 className="text-2xl font-bold">
                Profile
              </h2>

            </div>

            <div className="h-1 w-12 bg-[#66001F] mt-5" />

          </div>


          <div>

            <p className="text-lg md:text-xl leading-9 text-[#1D2D44]/75 max-w-4xl">

              I completed my Diploma in Applications Development and am
              currently pursuing an Advanced Diploma in Multimedia
              Applications. My passion lies in creating intuitive digital
              experiences through UI/UX design while combining my knowledge
              of front-end development using React.

            </p>

            <p className="text-lg md:text-xl leading-9 text-[#1D2D44]/75 max-w-4xl mt-6">

              I enjoy solving problems, collaborating with teams and
              continuously learning new technologies to improve both user
              experience and application performance.

            </p>

          </div>

        </section>


        {/* =========================
            EXPERIENCE
        ========================== */}

        <section className="mb-28">

          <div className="flex items-center gap-3 mb-14">

            <Briefcase size={24} />

            <h2 className="text-3xl md:text-4xl font-bold">
              Experience
            </h2>

          </div>


          <div className="space-y-12">

            {experiences.map((experience, index) => (

              <motion.article
                key={`${experience.title}-${index}`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="grid lg:grid-cols-[220px_1fr] gap-8
                border-t border-[#1D2D44]/15 pt-10"
              >

                {/* Date */}

                <div>

                  <p className="text-[#66001F] font-semibold">
                    {experience.date}
                  </p>

                </div>


                {/* Details */}

                <div>

                  <h3 className="text-2xl font-bold">
                    {experience.title}
                  </h3>

                  <p className="text-lg mt-2">
                    {experience.company}
                  </p>

                  <p className="text-sm text-[#1D2D44]/55 mt-1">
                    {experience.location}
                  </p>

                  <p className="mt-5 text-[#1D2D44]/70 leading-7 max-w-3xl">
                    {experience.description}
                  </p>


                  <ul className="mt-6 space-y-3">

                    {experience.responsibilities.map((item) => (

                      <li
                        key={item}
                        className="flex gap-3 text-[#1D2D44]/70"
                      >

                        <span className="text-[#66001F] mt-1">
                          —
                        </span>

                        <span>
                          {item}
                        </span>

                      </li>

                    ))}

                  </ul>

                </div>

              </motion.article>

            ))}

          </div>

        </section>


        {/* =========================
            EDUCATION
        ========================== */}

        <section className="mb-28">

          <div className="flex items-center gap-3 mb-14">

            <GraduationCap size={25} />

            <h2 className="text-3xl md:text-4xl font-bold">
              Education
            </h2>

          </div>


          <div className="grid md:grid-cols-3 gap-6">

            {education.map((item) => (

              <motion.div
                key={`${item.qualification}-${item.year}`}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="bg-white border border-[#1D2D44]/10
                p-8 rounded-2xl shadow-sm"
              >

                <p className="text-[#66001F] font-semibold">
                  {item.year}
                </p>

                <h3 className="text-xl font-bold mt-5">
                  {item.qualification}
                </h3>

                {item.field && (
                  <p className="mt-2 text-[#1D2D44]/70">
                    {item.field}
                  </p>
                )}

                <p className="mt-5 text-sm text-[#1D2D44]/55 leading-6">
                  {item.institution}
                </p>

              </motion.div>

            ))}

          </div>

        </section>


               {/* =========================
            SKILLS
        ========================== */}

        <section className="mb-28">

          <div className="flex items-center gap-3 mb-14">

            <Code2 size={24} />

            <h2 className="text-3xl md:text-4xl font-bold">
              Skills
            </h2>

          </div>


          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">


            {/* Technical Skills */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white border border-[#1D2D44]/10 rounded-2xl p-8 md:p-10"
            >

              <p className="text-xs uppercase tracking-[0.25em] text-[#66001F] font-semibold">
                Capabilities
              </p>

              <h3 className="text-2xl font-bold mt-3">
                Technical Skills
              </h3>

              <div className="h-1 w-10 bg-[#1D2D44] mt-5" />

              <p className="text-[#1D2D44]/60 text-sm mt-5 leading-6 max-w-sm">
                Technologies and software I have experience working with
                through academic projects and professional experience.
              </p>


              <div className="flex flex-wrap gap-2.5 mt-8">

                {technicalSkills.map((skill, index) => (

                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: index * 0.04 }}
                    whileHover={{ y: -2 }}
                    className="px-4 py-1.5 rounded-full border border-[#1D2D44]/15
                    text-sm font-medium text-[#1D2D44]
                    hover:border-[#66001F]/50 hover:bg-[#66001F]/5
                    transition-colors duration-200"
                  >
                    {skill}
                  </motion.span>

                ))}

              </div>

            </motion.div>


            {/* Soft Skills */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white border border-[#A2C0DD]/50 rounded-2xl p-8 md:p-10"
            >

              <p className="text-xs uppercase tracking-[0.25em] text-[#66001F] font-semibold">
                Attributes
              </p>

              <h3 className="text-2xl font-bold mt-3">
                Soft Skills
              </h3>

              <div className="h-1 w-10 bg-[#A2C0DD] mt-5" />

              <p className="text-[#1D2D44]/60 text-sm mt-5 leading-6 max-w-sm">
                Professional qualities developed through academic,
                workplace and collaborative experiences.
              </p>


              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4 mt-8">

                {softSkills.map((skill, index) => (

                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -6 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: index * 0.05 }}
                    whileHover={{ x: 2 }}
                    className="flex items-center gap-3 group"
                  >

                    <span className="text-[#66001F] font-semibold leading-none">
                      +
                    </span>

                    <span className="text-[#1D2D44]/80 text-sm md:text-base
                    group-hover:text-[#1D2D44] transition-colors duration-200">
                      {skill}
                    </span>

                  </motion.div>

                ))}

              </div>

            </motion.div>

          </div>

        </section>


        {/* =========================
            UI/UX FOCUS
        ========================== */}

        <section className="bg-[#66001F] text-white rounded-3xl p-10 md:p-16 mb-28">

          <div className="max-w-4xl">

            <p className="uppercase tracking-[0.3em] text-sm text-[#A2C0DD] font-semibold">
              Career Focus
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-5">
              UI/UX Design & Digital Experiences
            </h2>

            <p className="text-white/75 text-lg leading-8 mt-7">
              I am interested in creating digital products that combine
              thoughtful interface design with practical functionality.
              My background in application development allows me to approach
              UI/UX design with an understanding of both the user experience
              and the technical implementation behind it.
            </p>

          </div>

        </section>


        {/* =========================
            REFERENCES
        ========================== */}

        <section className="mb-16">

          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            References
          </h2>

          <div className="grid md:grid-cols-2 gap-6">


            {/* Reference 1 */}

            <div className="bg-white border border-[#1D2D44]/10 rounded-2xl p-8">

              <p className="text-[#66001F] text-sm uppercase tracking-wider font-semibold">
                Faculty Assistant
              </p>

              <h3 className="text-xl font-bold mt-3">
                Ms Anita America
              </h3>

              <div className="mt-5 space-y-2 text-[#1D2D44]/65">

                <p>
                  021 460 3923
                </p>

                <p>
                  AmericaA@cput.ac.za
                </p>

              </div>

            </div>


            {/* Reference 2 */}

            <div className="bg-white border border-[#1D2D44]/10 rounded-2xl p-8">

              <p className="text-[#66001F] text-sm uppercase tracking-wider font-semibold">
                Team Leader – Plum Systems
              </p>

              <h3 className="text-xl font-bold mt-3">
                Moegamat Tashreeq Van Der Schyff
              </h3>

              <div className="mt-5 space-y-2 text-[#1D2D44]/65">

                <p>
                  076 838 9012
                </p>

                <p>
                  Tashreeq@plum.systems
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* =========================
            DOWNLOAD CTA
        ========================== */}

        <section className="text-center border-t border-[#1D2D44]/15 pt-16">

          <h2 className="text-3xl md:text-4xl font-bold">
            Interested in working together?
          </h2>

          <p className="text-[#1D2D44]/65 mt-4">
            View my work or download my full CV.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">

            <Link
              to="/"
              className="inline-flex items-center gap-2
              border border-[#1D2D44]
              px-6 py-3 rounded-full
              hover:bg-[#1D2D44]
              hover:text-white
              transition-all duration-300"
            >
              View Portfolio
              <ExternalLink size={17} />
            </Link>

            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2
              bg-[#66001F] text-white
              px-6 py-3 rounded-full
              hover:bg-[#1D2D44]
              transition-all duration-300"
            >
              <Download size={17} />
              Download CV
            </a>

          </div>

        </section>

      </main>

    </div>
  );
}