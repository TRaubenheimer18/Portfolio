import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Palette,
  PenTool,
  LayoutDashboard,
  MonitorSmartphone,
  Users,
  Search,
  Layers,
  Code2,
  CheckCircle2,
  Monitor,
  Tablet,
  Smartphone,
  MousePointerClick,
  ShoppingBag,
  Mail,
} from "lucide-react";

import homepage from "../assets/images/B&E-homepage.png";
import services from "../assets/images/B&E-services.png";
import contact from "../assets/images/B&E-contact.png";
import hompagePhone from "../assets/images/B&E-homepage-phone.PNG";
import servicesPhone from "../assets/images/B&E-services-phone.PNG";
import contactPhone from "../assets/images/B&E-contact-phone.PNG";

/* =========================================================
   PROJECT LINKS
   Replace these values with your actual links.
========================================================= */

const LIVE_SITE_URL = "#";
const GITHUB_REPO_URL = "#";

/* =========================================================
   REUSABLE ANIMATION
========================================================= */

const fadeUp = {
  initial: {
    opacity: 0,
    y: 30,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  viewport: {
    once: true,
    amount: 0.2,
  },
  transition: {
    duration: 0.7,
    ease: "easeOut",
  },
};

/* =========================================================
   SECTION HEADING
========================================================= */

function SectionHeading({ number, label, title, light = false }) {
  return (
    <motion.div {...fadeUp} className="mb-12">
      <div
        className={`flex items-center gap-4 mb-5 text-sm font-semibold tracking-[0.25em] uppercase ${
          light ? "text-[#A2C0DD]" : "text-[#66001F]"
        }`}
      >
        <span>{number}</span>
        <span>{label}</span>
      </div>

      <h2
        className={`text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight ${
          light ? "text-[#FFFCF6]" : "text-[#1D2D44]"
        }`}
      >
        {title}
      </h2>
    </motion.div>
  );
}

/* =========================================================
   DEVICE FRAME
========================================================= */

function LaptopFrame({ image, alt }) {
  return (
    <div className="w-full">
      <div className="rounded-[1.25rem] border border-[#1D2D44]/20 bg-[#1D2D44] p-2 shadow-2xl">
        <div className="flex items-center gap-2 px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FFFCF6]/50" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FFFCF6]/50" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FFFCF6]/50" />
        </div>

        <div className="overflow-hidden rounded-lg bg-white">
          <img
            src={image}
            alt={alt}
            className="block w-full h-auto"
          />
        </div>
      </div>

      <div className="mx-auto h-3 w-[55%] rounded-b-xl bg-[#1D2D44]" />
      <div className="mx-auto h-1.5 w-[70%] rounded-full bg-[#1D2D44]/80" />
    </div>
  );
}

function PhoneFrame({ image, alt }) {
  return (
    <div className="mx-auto w-full max-w-[220px]">
      <div className="rounded-[2rem] border-[5px] border-[#1D2D44] bg-[#1D2D44] p-1.5 shadow-xl">
        <div className="relative overflow-hidden rounded-[1.5rem] bg-white">
          <div className="absolute left-1/2 top-2 z-10 h-4 w-16 -translate-x-1/2 rounded-full bg-[#1D2D44]" />

          <img
            src={image}
            alt={alt}
            className="block w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   TECHNOLOGY CARD
========================================================= */

function TechnologyCard({ icon, name, description }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="border-t border-[#1D2D44]/20 pt-6"
    >
      <div className="mb-5 text-[#66001F]">{icon}</div>

      <h3 className="text-xl font-semibold text-[#1D2D44]">
        {name}
      </h3>

      <p className="mt-3 leading-7 text-[#1D2D44]/65">
        {description}
      </p>
    </motion.div>
  );
}

/* =========================================================
   AUDIENCE ITEM
========================================================= */

function AudienceItem({ number, icon, title, text }) {
  return (
    <motion.div
      {...fadeUp}
      className="border-t border-[#1D2D44]/20 pt-6"
    >
      <div className="flex items-start justify-between gap-6">
        <span className="text-sm font-semibold tracking-widest text-[#66001F]">
          {number}
        </span>

        <div className="text-[#1D2D44]">{icon}</div>
      </div>

      <h3 className="mt-8 text-2xl font-semibold text-[#1D2D44]">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-[#1D2D44]/65">
        {text}
      </p>
    </motion.div>
  );
}

/* =========================================================
   MAIN PAGE
========================================================= */

export default function Branding() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#FFFCF6] text-[#1D2D44]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative px-6 pb-24 pt-32 md:px-10 lg:px-16 lg:pb-32 lg:pt-40">

        {/* Decorative line */}
        <div className="absolute right-0 top-32 hidden h-px w-32 bg-[#66001F] lg:block" />

        <div className="mx-auto max-w-7xl">

          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#1D2D44] transition-colors duration-300 hover:text-[#66001F]"
          >
            <ArrowLeft size={17} />
            Back to Portfolio
          </Link>

          <div className="mt-16 grid items-end gap-14 lg:grid-cols-12 lg:gap-20">

            {/* Hero text */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-6"
            >
              <div className="mb-7 flex items-center gap-4 text-sm font-semibold tracking-[0.25em] text-[#66001F]">
                <span>01</span>
                <span>CASE STUDY</span>
              </div>

              <h1 className="max-w-4xl text-6xl font-semibold leading-[0.95] tracking-[-0.04em] text-[#1D2D44] md:text-7xl lg:text-[6.5rem]">
                Branding
                <br />
                <span className="text-[#66001F]">&</span> Events
                <br />
                Studio
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-8 text-[#1D2D44]/70 md:text-xl">
                A responsive website designed for a creative studio
                offering branding, event planning and personalised
                products.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="border border-[#1D2D44]/20 px-4 py-2 text-xs font-semibold tracking-widest text-[#1D2D44]">
                  UI/UX DESIGN
                </span>

                <span className="border border-[#1D2D44]/20 px-4 py-2 text-xs font-semibold tracking-widest text-[#1D2D44]">
                  FRONT-END
                </span>

                <span className="border border-[#1D2D44]/20 px-4 py-2 text-xs font-semibold tracking-widest text-[#1D2D44]">
                  RESPONSIVE
                </span>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href= "https://brandingeventsstudio.co.za/"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-3 bg-[#66001F] px-6 py-4 font-semibold text-[#FFFCF6] transition-all duration-300 hover:bg-[#1D2D44]"
                >
                  View Live Website
                  <ExternalLink
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>

                {/* <a
                  href="https://github.com/TRaubenheimer18/Branding-and-Events-Studio"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-3 border border-[#1D2D44] px-6 py-4 font-semibold text-[#1D2D44] transition-all duration-300 hover:bg-[#1D2D44] hover:text-[#FFFCF6]"
                >
                  GitHub Repository
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a> */}
              </div>
            </motion.div>

            {/* Hero image */}
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.9,
                delay: 0.25,
                ease: "easeOut",
              }}
              className="relative lg:col-span-6"
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 bg-[#A2C0DD]/50 md:h-48 md:w-48" />

              <div className="relative">
                <LaptopFrame
                  image={homepage}
                  alt="Branding and Events Studio homepage"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* =====================================================
          PROJECT OVERVIEW
      ===================================================== */}

      <section className="border-y border-[#1D2D44]/15 bg-[#FFFCF6]">
        <div className="mx-auto grid max-w-7xl md:grid-cols-2 lg:grid-cols-4">

          {[
            {
              title: "My Role",
              content: "UI/UX Designer & Front-End Developer",
            },
            {
              title: "Tools",
              content: "React, Tailwind CSS",
            },
            {
              title: "Project Type",
              content: "Academic / Portfolio Project",
            },
            {
              title: "Focus",
              content: "UI Design, UX Structure & Responsive Design",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="border-b border-[#1D2D44]/15 p-8 last:border-b-0 md:border-r lg:border-b-0 lg:p-10"
            >
              <p className="text-xs font-semibold tracking-[0.2em] text-[#66001F]">
                {item.title}
              </p>

              <p className="mt-5 leading-7 text-[#1D2D44]/75">
                {item.content}
              </p>
            </div>
          ))}

        </div>
      </section>


      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <section className="px-6 py-24 md:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">

          <div className="lg:col-span-4">
            <SectionHeading
              number="02"
              label="Background"
              title="The idea behind the website."
            />
          </div>

          <motion.div
            {...fadeUp}
            className="lg:col-span-7 lg:col-start-6"
          >
            <p className="text-2xl font-medium leading-10 text-[#1D2D44] md:text-3xl md:leading-[1.4]">
              Creating a digital presence that feels as creative as
              the services it represents.
            </p>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#1D2D44]/65">
              Branding & Events Studio is a creative business concept
              combining branding, personalised products and event
              planning. The website was designed to establish a
              professional online presence while making the studio's
              services easy to understand and explore.
            </p>
          </motion.div>

        </div>
      </section>


      {/* =====================================================
          CHALLENGE
      ===================================================== */}

      <section className="bg-[#1D2D44] px-6 py-24 md:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-12">

          <div className="lg:col-span-7">
            <SectionHeading
              number="03"
              label="The Challenge"
              title="Balancing creativity with usability."
              light
            />

            <p className="max-w-3xl text-lg leading-8 text-[#FFFCF6]/70">
              The website needed to communicate the creative nature of
              the business without sacrificing clarity. Visitors needed
              to understand the available services, navigate between
              sections easily and have a clear path towards making an
              enquiry.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-5">
            {[
              "Present services clearly",
              "Create a strong visual identity",
              "Make navigation intuitive",
              "Encourage enquiries",
            ].map((item, index) => (
              <motion.div
                {...fadeUp}
                key={item}
                className="border border-[#FFFCF6]/20 p-6"
              >
                <span className="text-sm font-semibold text-[#A2C0DD]">
                  0{index + 1}
                </span>

                <p className="mt-6 text-lg leading-7 text-[#FFFCF6]">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>


      {/* =====================================================
          PROJECT GOALS
      ===================================================== */}

      <section className="px-6 py-24 md:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-7xl">

          <SectionHeading
            number="04"
            label="Project Goals"
            title="What the design needed to achieve."
          />

          <div className="grid gap-0 border-t border-[#1D2D44]/20 md:grid-cols-2">

            {[
              {
                number: "01",
                icon: <Palette size={28} />,
                title: "Strong Visual Identity",
                text: "Develop a cohesive visual direction that communicates creativity and professionalism.",
              },
              {
                number: "02",
                icon: <LayoutDashboard size={28} />,
                title: "Clear Information Structure",
                text: "Organise services and content so visitors can understand the business quickly.",
              },
              {
                number: "03",
                icon: <PenTool size={28} />,
                title: "Simple Navigation",
                text: "Create intuitive navigation that allows users to move between important sections easily.",
              },
              {
                number: "04",
                icon: <MonitorSmartphone size={28} />,
                title: "Responsive Interface",
                text: "Create flexible layouts that adapt to desktop, tablet and mobile screen sizes.",
              },
            ].map((goal) => (
              <motion.div
                {...fadeUp}
                key={goal.number}
                className="border-b border-[#1D2D44]/20 p-8 md:p-10"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold tracking-widest text-[#66001F]">
                    {goal.number}
                  </span>

                  <div className="text-[#1D2D44]">
                    {goal.icon}
                  </div>
                </div>

                <h3 className="mt-12 text-2xl font-semibold">
                  {goal.title}
                </h3>

                <p className="mt-4 max-w-md leading-7 text-[#1D2D44]/65">
                  {goal.text}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>


      {/* =====================================================
          TARGET AUDIENCE
      ===================================================== */}

      <section className="bg-[#A2C0DD]/35 px-6 py-24 md:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-7xl">

          <SectionHeading
            number="05"
            label="Target Audience"
            title="Who is the website designed for?"
          />

          <div className="grid gap-10 md:grid-cols-3">

            <AudienceItem
              number="01"
              icon={<Users size={26} />}
              title="Event Clients"
              text="People looking for support with weddings, birthdays, corporate events and other special occasions."
            />

            <AudienceItem
              number="02"
              icon={<BriefcaseIcon />}
              title="Businesses"
              text="Businesses looking for branding, personalised products or support with corporate events."
            />

            <AudienceItem
              number="03"
              icon={<ShoppingBag size={26} />}
              title="Individual Customers"
              text="Customers interested in personalised products, creative services and event-related items."
            />

          </div>
        </div>
      </section>


      {/* =====================================================
          USER NEEDS
      ===================================================== */}

      <section className="px-6 py-24 md:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-7xl">

          <SectionHeading
            number="06"
            label="User Needs"
            title="Turning needs into design decisions."
          />

          <div className="border-t border-[#1D2D44]/20">

            {[
              ["Understand services quickly", "Clear service categories and descriptive content"],
              ["Find event information", "Dedicated sections for different event types"],
              ["View creative work", "Large visual sections and project imagery"],
              ["Contact the studio", "Prominent contact calls-to-action"],
              ["Use the website on mobile", "Responsive layouts and flexible content"],
            ].map(([need, response], index) => (
              <motion.div
                {...fadeUp}
                key={need}
                className="grid gap-4 border-b border-[#1D2D44]/20 py-7 md:grid-cols-12 md:gap-8"
              >
                <div className="md:col-span-1">
                  <span className="text-sm font-semibold text-[#66001F]">
                    0{index + 1}
                  </span>
                </div>

                <div className="font-semibold md:col-span-5">
                  {need}
                </div>

                <div className="text-[#1D2D44]/65 md:col-span-6">
                  {response}
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </section>


      {/* =====================================================
          RESEARCH & INSPIRATION
      ===================================================== */}

      <section className="bg-[#FFFCF6] px-6 py-24 md:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-12">

          <div className="lg:col-span-5">
            <SectionHeading
              number="07"
              label="Research & Inspiration"
              title="Exploring visual direction."
            />
          </div>

          <motion.div
            {...fadeUp}
            className="lg:col-span-6 lg:col-start-7"
          >
            <div className="flex items-center gap-4 text-[#66001F]">
              <Search size={26} />
              <span className="font-semibold">
                Visual Inspiration
              </span>
            </div>

            <p className="mt-6 text-lg leading-8 text-[#1D2D44]/70">
              The visual direction was informed by reviewing existing
              creative, branding and event-planning websites. Attention
              was given to navigation patterns, service presentation,
              visual hierarchy, imagery and calls-to-action.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                "Navigation patterns",
                "Service presentation",
                "Visual hierarchy",
                "Typography",
                "Image usage",
                "CTA placement",
              ].map((item) => (
                <div
                  key={item}
                  className="border-l-2 border-[#66001F] px-5 py-3"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>


      {/* =====================================================
          INFORMATION ARCHITECTURE
      ===================================================== */}

      <section className="bg-[#1D2D44] px-6 py-24 md:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-7xl">

          <SectionHeading
            number="08"
            label="Information Architecture"
            title="Structuring the experience."
            light
          />

          <motion.div
            {...fadeUp}
            className="mx-auto max-w-4xl"
          >

            <div className="border border-[#FFFCF6]/20 bg-[#FFFCF6]/5 p-6 md:p-10">

              <div className="border border-[#A2C0DD] p-5 text-center">
                <span className="text-xs tracking-widest text-[#A2C0DD]">
                  MAIN PAGE
                </span>

                <p className="mt-2 text-xl font-semibold text-[#FFFCF6]">
                  HOME
                </p>
              </div>

              <div className="mx-auto h-10 w-px bg-[#A2C0DD]" />

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

                {[
                  {
                    title: "Branding",
                    children: ["Services"],
                  },
                  {
                    title: "Events",
                    children: [
                      "Weddings",
                      "Birthdays",
                      "Corporate",
                      "Special Events",
                    ],
                  },
                  {
                    title: "Online Store",
                    children: [],
                  },
                  {
                    title: "Our Team",
                    children: [],
                  },
                  {
                    title: "Contact",
                    children: [],
                  },
                ].map((item) => (
                  <div key={item.title} className="space-y-2">
                    <div className="border border-[#A2C0DD] p-4 text-center text-[#FFFCF6]">
                      {item.title}
                    </div>

                    {item.children.map((child) => (
                      <div
                        key={child}
                        className="ml-5 border-l border-[#A2C0DD]/50 px-4 py-2 text-sm text-[#FFFCF6]/65"
                      >
                        {child}
                      </div>
                    ))}
                  </div>
                ))}

              </div>
            </div>

          </motion.div>
        </div>
      </section>


      {/* =====================================================
          USER FLOW
      ===================================================== */}

      <section className="px-6 py-24 md:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-7xl">

          <SectionHeading
            number="09"
            label="User Flow"
            title="A simple path from discovery to enquiry."
          />

          <div className="flex flex-col lg:flex-row lg:items-center">

            {[
              "Land on Home",
              "Explore Services",
              "Select Service",
              "View Information",
              "Contact Studio",
              "Submit Enquiry",
            ].map((item, index) => (
              <div
                key={item}
                className="flex flex-1 items-center"
              >
                <motion.div
                  {...fadeUp}
                  className="w-full border border-[#1D2D44]/20 p-5"
                >
                  <span className="text-xs font-bold tracking-widest text-[#66001F]">
                    0{index + 1}
                  </span>

                  <p className="mt-4 font-semibold">
                    {item}
                  </p>
                </motion.div>

                {index < 5 && (
                  <ArrowRight
                    className="mx-3 hidden shrink-0 text-[#66001F] lg:block"
                    size={20}
                  />
                )}
              </div>
            ))}

          </div>
        </div>
      </section>


      {/* =====================================================
          DESIGN PROCESS
      ===================================================== */}

      <section className="bg-[#A2C0DD]/35 px-6 py-24 md:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-7xl">

          <SectionHeading
            number="10"
            label="Design Process"
            title="From concept to interface."
          />

          <div className="grid gap-0 border-l border-[#1D2D44]/20 md:grid-cols-3 lg:grid-cols-7">

            {[
              "Research & Inspiration",
              "Planning",
              "Information Architecture",
              "Visual Design",
              "Development",
              "Responsive Implementation",
              "Final Refinement",
            ].map((step, index) => (
              <motion.div
                {...fadeUp}
                key={step}
                className="border-b border-r border-[#1D2D44]/20 p-6 md:min-h-[190px]"
              >
                <span className="text-sm font-bold text-[#66001F]">
                  0{index + 1}
                </span>

                <p className="mt-10 text-sm font-semibold leading-6">
                  {step}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>


      {/* =====================================================
          VISUAL DESIGN
      ===================================================== */}

      <section className="px-6 py-24 md:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-12">

          <div className="lg:col-span-4">
            <SectionHeading
              number="11"
              label="Visual Design"
              title="A creative visual direction with structure."
            />
          </div>

          <div className="lg:col-span-7 lg:col-start-6">

            <motion.div {...fadeUp}>
              <p className="text-xl leading-9 text-[#1D2D44]/75">
                The interface combines a creative visual identity
                with structured layouts so that the website feels
                expressive without becoming difficult to navigate.
              </p>
            </motion.div>

            <motion.div
              {...fadeUp}
              className="mt-12"
            >
              <LaptopFrame
                image={services}
                alt="Branding and Events Studio services page"
              />
            </motion.div>

          </div>

        </div>
      </section>


      {/* =====================================================
          COLOUR PALETTE
      ===================================================== */}

      <section className="bg-[#1D2D44] px-6 py-24 md:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-7xl">

          <SectionHeading
            number="12"
            label="Colour Palette"
            title="A refined visual system."
            light
          />

          <div className="grid gap-0 md:grid-cols-2 lg:grid-cols-4">

            {[
              {
                name: "White",
                hex: "#FFFFFF",
                role: "Primary background",
                description: "Gives the website its clean, minimal and elegant appearance.",
                className: "bg-[#FFFFFF]",
                text: "text-[#1D2D44]",
              },
              {
                name: "Soft Pink",
                hex: "#F7C6D0",
                role: "Secondary accent",
                description: "Used for feminine and elegant elements, hover states and subtle gradients.",
                className: "bg-[#F7C6D0]",
                text: "text-[#1D2D44]",
              },
              {
                name: "Soft Teal",
                hex: "#BFE7E6",
                role: "Supporting accent",
                description: "Balances the pink and gives the design a fresh, sophisticated feel.",
                className: "bg-[#BFE7E6]",
                text: "text-[#1D2D44]",
              },
              {
                name: "Peach",
                hex: "#FAE7D6",
                role: "CTA & emphasis",
                description: "Used for buttons and attention areas without using a harsh colour.",
                className: "bg-[#FAE7D6]",
                text: "text-[#1D2D44]",
              },
            ].map((colour) => (
              <motion.div
                {...fadeUp}
                key={colour.hex}
              >
                <div className={`h-48 ${colour.className}`} />

                <div className="border-r border-t border-[#FFFCF6]/15 p-6">
                  <p className="font-semibold text-[#FFFCF6]">
                    {colour.name}
                  </p>

                  <p className="mt-2 font-mono text-sm text-[#A2C0DD]">
                    {colour.hex}
                  </p>

                  <p className="mt-3 text-xs font-semibold tracking-widest uppercase text-[#FFFCF6]/40">
                    {colour.role}
                  </p>

                  <p className="mt-3 text-sm text-[#FFFCF6]/60 leading-6">
                    {colour.description}
                  </p>
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </section>


      {/* =====================================================
          TYPOGRAPHY
      ===================================================== */}

      <section className="px-6 py-24 md:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-7xl">

          <SectionHeading
            number="13"
            label="Typography"
            title="Typography creates hierarchy."
          />

          <div className="grid gap-0 border-t border-[#1D2D44]/20 md:grid-cols-2">

            <motion.div
              {...fadeUp}
              className="border-b border-[#1D2D44]/20 p-8 md:border-r md:p-12"
            >
              <p className="text-xs font-semibold tracking-[0.2em] text-[#66001F]">
                HEADINGS
              </p>

              <p className="mt-8 text-5xl font-semibold tracking-tight text-[#1D2D44]" style={{ fontFamily: "'Playfair Display', serif" }}>
                Aa
              </p>

              <p className="mt-6 text-3xl font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>
                "Branding & Events Studio"
              </p>

              <p className="mt-3 text-sm font-semibold tracking-widest text-[#66001F] uppercase">
                Playfair Display
              </p>

              <p className="mt-3 text-[#1D2D44]/60">
                Used for major headings and section titles.
              </p>
            </motion.div>

            <motion.div
              {...fadeUp}
              className="border-b border-[#1D2D44]/20 p-8 md:p-12"
            >
              <p className="text-xs font-semibold tracking-[0.2em] text-[#66001F]">
                BODY
              </p>

              <p className="mt-8 text-5xl text-[#1D2D44]" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Aa
              </p>

              <p className="mt-6 text-xl leading-8" style={{ fontFamily: "'Poppins', sans-serif" }}>
                "Creating memorable experiences through
                creative design and thoughtful planning."
              </p>

              <p className="mt-3 text-sm font-semibold tracking-widest text-[#66001F] uppercase">
                Poppins
              </p>

              <p className="mt-3 text-[#1D2D44]/60">
                Used for descriptions and supporting content.
              </p>
            </motion.div>

          </div>
        </div>
      </section>


      {/* =====================================================
          DESIGN SYSTEM
      ===================================================== */}

      <section className="bg-[#A2C0DD]/35 px-6 py-24 md:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-7xl">

          <SectionHeading
            number="14"
            label="Design System"
            title="Reusable visual building blocks."
          />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            <motion.div
              {...fadeUp}
              className="bg-[#FFFCF6] p-7"
            >
              <p className="text-xs font-bold tracking-widest text-[#66001F]">
                BUTTONS
              </p>

              <div className="mt-8 flex flex-col gap-3">
                <button className="bg-[#66001F] px-5 py-3 font-semibold text-[#FFFCF6]">
                  Primary Button
                </button>

                <button className="border border-[#1D2D44] px-5 py-3 font-semibold">
                  Secondary
                </button>
              </div>
            </motion.div>

            <motion.div
              {...fadeUp}
              className="bg-[#FFFCF6] p-7"
            >
              <p className="text-xs font-bold tracking-widest text-[#66001F]">
                NAVIGATION
              </p>

              <div className="mt-8 border-b border-[#1D2D44]/20 pb-3 text-sm font-semibold">
                Home
              </div>

              <div className="mt-4 flex gap-4 text-xs text-[#1D2D44]/60">
                <span>Branding</span>
                <span>Events</span>
                <span>Contact</span>
              </div>
            </motion.div>

            <motion.div
              {...fadeUp}
              className="bg-[#FFFCF6] p-7"
            >
              <p className="text-xs font-bold tracking-widest text-[#66001F]">
                CARDS
              </p>

              <div className="mt-8 border border-[#1D2D44]/20 p-5">
                <Palette size={24} className="text-[#66001F]" />
                <p className="mt-5 font-semibold">
                  Service Card
                </p>
                <p className="mt-2 text-sm text-[#1D2D44]/60">
                  Consistent content presentation.
                </p>
              </div>
            </motion.div>

            <motion.div
              {...fadeUp}
              className="bg-[#FFFCF6] p-7"
            >
              <p className="text-xs font-bold tracking-widest text-[#66001F]">
                FORMS
              </p>

              <div className="mt-8">
                <label className="text-sm font-semibold">
                  Email Address
                </label>

                <div className="mt-3 border border-[#1D2D44]/25 px-4 py-3 text-sm text-[#1D2D44]/40">
                  Enter your email
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* =====================================================
          TECHNOLOGIES
      ===================================================== */}

      <section className="px-6 py-24 md:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-7xl">

          <SectionHeading
            number="15"
            label="Technologies"
            title="Design brought to life through development."
          />

          <div className="grid gap-x-12 gap-y-12 md:grid-cols-2 lg:grid-cols-4">

            <TechnologyCard
              icon={<Code2 size={30} />}
              name="React"
              description="Used to create a component-based interface and structure the website."
            />

            <TechnologyCard
              icon={<Code2 size={30} />}
              name="JavaScript"
              description="Used to add functionality and interactive behaviour."
            />

            <TechnologyCard
              icon={<Layers size={30} />}
              name="Tailwind CSS"
              description="Used to build responsive layouts and maintain consistent styling."
            />

            <TechnologyCard
              icon={<PenTool size={30} />}
              name="Visual Studio Code"
              description="Used during the development process."
            />

            <TechnologyCard
              icon={<LayoutDashboard size={30} />}
              name="HTML"
              description="Provides the structural foundation for the interface."
            />

            <TechnologyCard
              icon={<Palette size={30} />}
              name="CSS"
              description="Supports styling, layout and visual presentation."
            />

            <TechnologyCard
              icon={<Code2 size={30} />}
              name="React Router"
              description="Used to manage navigation between pages within the React application."
            />

            <TechnologyCard
              icon={<CheckCircle2 size={30} />}
              name="GitHub"
              description="Used for version control and managing project changes."
            />

          </div>
        </div>
      </section>


      {/* =====================================================
          DEVELOPMENT
      ===================================================== */}

      <section className="bg-[#1D2D44] px-6 py-24 md:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-12">

          <div className="lg:col-span-5">
            <SectionHeading
              number="16"
              label="Development"
              title="Turning the design into a working interface."
              light
            />
          </div>

          <motion.div
            {...fadeUp}
            className="lg:col-span-6 lg:col-start-7"
          >
            <p className="text-lg leading-8 text-[#FFFCF6]/70">
              The website was implemented using React and Tailwind CSS.
              Reusable components were used to keep the interface
              consistent across pages while responsive utility classes
              allowed layouts to adapt to different screen sizes.
            </p>

            <div className="mt-10 space-y-4">
              {[
                "Component-based React structure",
                "Reusable UI components",
                "React Router navigation",
                "Responsive Tailwind layouts",
                "Consistent design system",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 border-b border-[#FFFCF6]/15 py-4"
                >
                  <CheckCircle2
                    size={20}
                    className="shrink-0 text-[#A2C0DD]"
                  />

                  <span className="text-[#FFFCF6]/80">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>


      {/* =====================================================
          RESPONSIVE DESIGN
      ===================================================== */}

      <section className="px-6 py-24 md:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-7xl">

          <SectionHeading
            number="17"
            label="Responsive Design"
            title="Designed for every screen."
          />

          <motion.div
            {...fadeUp}
            className="grid items-end gap-10 lg:grid-cols-12"
          >

            {/* Desktop */}
            <div className="lg:col-span-7">
              <div className="mb-5 flex items-center gap-3 text-sm font-semibold text-[#66001F]">
                <Monitor size={19} />
                Desktop
              </div>

              <LaptopFrame
                image={homepage}
                alt="Branding and Events Studio desktop homepage"
              />
            </div>

            {/* Mobile */}
            <div className="flex gap-5 lg:col-span-5 lg:justify-end">

              <div className="hidden sm:block">
                <div className="mb-5 flex items-center gap-3 text-sm font-semibold text-[#66001F]">
                  <Tablet size={19} />
                  Services
                </div>

                <PhoneFrame
                  image={servicesPhone}
                  alt="Branding and Events Studio mobile services page"
                />
              </div>

              <div>
                <div className="mb-5 flex items-center gap-3 text-sm font-semibold text-[#66001F]">
                  <Smartphone size={19} />
                  Contact
                </div>

                <PhoneFrame
                  image={contactPhone}
                  alt="Branding and Events Studio mobile contact page"
                />
              </div>

            </div>

          </motion.div>

          <motion.p
            {...fadeUp}
            className="mt-12 max-w-3xl text-lg leading-8 text-[#1D2D44]/65"
          >
            The interface was designed to adapt to different screen
            sizes while maintaining consistent navigation, hierarchy
            and visual presentation.
          </motion.p>

        </div>
      </section>


      {/* =====================================================
          ACCESSIBILITY
      ===================================================== */}

      <section className="bg-[#A2C0DD]/35 px-6 py-24 md:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-7xl">

          <SectionHeading
            number="18"
            label="Accessibility"
            title="Designing with accessibility in mind."
          />

          <div className="grid gap-0 border-t border-[#1D2D44]/20 md:grid-cols-2 lg:grid-cols-3">

            {[
              "Colour contrast",
              "Readable typography",
              "Clear navigation",
              "Descriptive image alt text",
              "Visible form labels",
              "Clear interactive elements",
            ].map((item) => (
              <motion.div
                {...fadeUp}
                key={item}
                className="border-b border-r border-[#1D2D44]/20 p-7"
              >
                <CheckCircle2
                  size={22}
                  className="text-[#66001F]"
                />

                <p className="mt-6 font-semibold">
                  {item}
                </p>
              </motion.div>
            ))}

          </div>

          <p className="mt-8 max-w-3xl text-sm leading-7 text-[#1D2D44]/60">
            No formal accessibility testing was conducted; these
            considerations were incorporated during the design and
            development process.
          </p>

        </div>
      </section>


      {/* =====================================================
          CHALLENGES & SOLUTIONS
      ===================================================== */}

      <section className="px-6 py-24 md:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-7xl">

          <SectionHeading
            number="19"
            label="Challenges & Solutions"
            title="Design decisions shaped by practical problems."
          />

          <div className="space-y-0 border-t border-[#1D2D44]/20">

            {[
              {
                number: "01",
                challenge: "Organising multiple services",
                solution:
                  "Grouped related services into clear categories and dedicated sections.",
              },
              {
                number: "02",
                challenge: "Maintaining visual consistency",
                solution:
                  "Used reusable components and a consistent design system throughout the interface.",
              },
              {
                number: "03",
                challenge: "Creating flexible layouts",
                solution:
                  "Used responsive Tailwind utility classes and flexible containers.",
              },
            ].map((item) => (
              <motion.div
                {...fadeUp}
                key={item.number}
                className="grid gap-8 border-b border-[#1D2D44]/20 py-10 md:grid-cols-12"
              >

                <div className="md:col-span-1">
                  <span className="font-bold text-[#66001F]">
                    {item.number}
                  </span>
                </div>

                <div className="md:col-span-4">
                  <p className="text-xl font-semibold">
                    {item.challenge}
                  </p>
                </div>

                <div className="md:col-span-7">
                  <p className="leading-7 text-[#1D2D44]/65">
                    {item.solution}
                  </p>
                </div>

              </motion.div>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          FINAL DESIGN
      ===================================================== */}

      <section className="bg-[#FFFCF6] px-6 py-24 md:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-7xl">

          <SectionHeading
            number="20"
            label="Final Design"
            title="The finished interface."
          />

          {/* Homepage */}
          <motion.div
            {...fadeUp}
            className="mb-20"
          >
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-2xl font-semibold">
                Homepage
              </h3>

              <span className="text-sm text-[#66001F]">
                Desktop + Mobile
              </span>
            </div>

            <div className="grid items-end gap-10 lg:grid-cols-12">

              <div className="lg:col-span-9">
                <LaptopFrame
                  image={homepage}
                  alt="Branding and Events Studio homepage desktop design"
                />
              </div>

              <div className="lg:col-span-3">
                <PhoneFrame
                  image={hompagePhone}
                  alt="Branding and Events Studio homepage mobile design"
                />
              </div>

            </div>
          </motion.div>


          {/* Services */}
          <motion.div
            {...fadeUp}
            className="mb-20"
          >
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-2xl font-semibold">
                Services
              </h3>

              <span className="text-sm text-[#66001F]">
                Desktop + Mobile
              </span>
            </div>

            <div className="grid items-end gap-10 lg:grid-cols-12">

              <div className="order-2 lg:order-1 lg:col-span-3">
                <PhoneFrame
                  image={servicesPhone}
                  alt="Branding and Events Studio services mobile design"
                />
              </div>

              <div className="order-1 lg:order-2 lg:col-span-9">
                <LaptopFrame
                  image={services}
                  alt="Branding and Events Studio services desktop design"
                />
              </div>

            </div>
          </motion.div>


          {/* Contact */}
          <motion.div {...fadeUp}>
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-2xl font-semibold">
                Contact
              </h3>

              <span className="text-sm text-[#66001F]">
                Desktop + Mobile
              </span>
            </div>

            <div className="grid items-end gap-10 lg:grid-cols-12">

              <div className="lg:col-span-9">
                <LaptopFrame
                  image={contact}
                  alt="Branding and Events Studio contact desktop design"
                />
              </div>

              <div className="lg:col-span-3">
                <PhoneFrame
                  image={contactPhone}
                  alt="Branding and Events Studio contact mobile design"
                />
              </div>

            </div>
          </motion.div>

        </div>
      </section>


      {/* =====================================================
          OUTCOME
      ===================================================== */}

      <section className="bg-[#1D2D44] px-6 py-24 md:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-7xl">

          <SectionHeading
            number="21"
            label="Outcome"
            title="From concept to responsive interface."
            light
          />

          <div className="grid gap-10 lg:grid-cols-12">

            <p className="text-xl leading-9 text-[#FFFCF6]/70 lg:col-span-7">
              The final website combines a clear information structure
              with a cohesive visual identity and responsive interface,
              creating a professional digital presence for the
              Branding & Events Studio concept.
            </p>

            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-5">

              {[
                "Professional visual identity",
                "Responsive website",
                "Clear service structure",
                "Reusable React components",
                "Consistent UI",
                "Clear contact experience",
              ].map((item) => (
                <div
                  key={item}
                  className="border border-[#FFFCF6]/15 p-5 text-[#FFFCF6]/80"
                >
                  {item}
                </div>
              ))}

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          REFLECTION
      ===================================================== */}

      <section className="px-6 py-24 md:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">

          <div className="lg:col-span-4">
            <SectionHeading
              number="22"
              label="Reflection"
              title="What I learned."
            />
          </div>

          <motion.div
            {...fadeUp}
            className="lg:col-span-7 lg:col-start-6"
          >
            <p className="text-2xl leading-10 text-[#1D2D44]">
              This project helped me understand that effective UI
              design is not only about visual appearance, but also
              about how clearly users can understand and navigate
              an interface.
            </p>

            <p className="mt-8 text-lg leading-8 text-[#1D2D44]/65">
              I strengthened my understanding of visual hierarchy,
              typography, colour, responsive design and component-based
              development. Building the interface in React also helped
              me connect design decisions with the technical structure
              required to implement them.
            </p>
          </motion.div>

        </div>
      </section>


      {/* =====================================================
          FUTURE IMPROVEMENTS
      ===================================================== */}

      <section className="bg-[#A2C0DD]/35 px-6 py-24 md:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-7xl">

          <SectionHeading
            number="23"
            label="Future Improvements"
            title="Where I would take the project next."
          />

          <div className="grid gap-0 border-t border-[#1D2D44]/20 md:grid-cols-2 lg:grid-cols-3">

            {[
              {
                icon: <LayoutDashboard size={26} />,
                title: "Online Booking",
                text: "Allow clients to request and manage event bookings online.",
              },
              {
                icon: <ShoppingBag size={26} />,
                title: "E-commerce",
                text: "Expand the online store into a complete purchasing experience.",
              },
              {
                icon: <Layers size={26} />,
                title: "CMS Integration",
                text: "Allow content and services to be updated without changing the code.",
              },
              {
                icon: <Users size={26} />,
                title: "Usability Testing",
                text: "Conduct formal usability testing with representative users.",
              },
              {
                icon: <CheckCircle2 size={26} />,
                title: "Accessibility Testing",
                text: "Conduct formal accessibility testing and address identified issues.",
              },
              {
                icon: <MousePointerClick size={26} />,
                title: "Analytics",
                text: "Introduce analytics to better understand how visitors interact with the website.",
              },
            ].map((item) => (
              <motion.div
                {...fadeUp}
                key={item.title}
                className="border-b border-r border-[#1D2D44]/20 p-8"
              >
                <div className="text-[#66001F]">
                  {item.icon}
                </div>

                <h3 className="mt-7 text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-[#1D2D44]/65">
                  {item.text}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>


      {/* =====================================================
          NEXT PROJECT
      ===================================================== */}

      <section className="bg-[#66001F] px-6 py-24 md:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-semibold tracking-[0.25em] text-[#A2C0DD]">
            NEXT PROJECT
          </p>

          <div className="mt-8 flex flex-col justify-between gap-10 md:flex-row md:items-end">

            <div>
              <p className="text-lg text-[#FFFCF6]/60">
                02
              </p>

              <h2 className="mt-3 text-5xl font-semibold tracking-tight text-[#FFFCF6] md:text-6xl lg:text-7xl">
                Nazarene
                <br />
                District Website
              </h2>
            </div>

            <Link
              to="/nazarene"
              className="group inline-flex w-fit items-center gap-3 border border-[#FFFCF6] px-6 py-4 font-semibold text-[#FFFCF6] transition-all duration-300 hover:bg-[#FFFCF6] hover:text-[#66001F]"
            >
              View Case Study

              <ArrowRight
                size={19}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

          </div>

        </div>
      </section>


      {/* =====================================================
          BACK TO TOP / PORTFOLIO
      ===================================================== */}

      <div className="bg-[#FFFCF6] px-6 py-8 md:px-10 lg:px-16">
        <div className="mx-auto flex max-w-7xl items-center justify-between">

          <Link
            to="/"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[#1D2D44] transition-colors hover:text-[#66001F]"
          >
            <ArrowLeft
              size={17}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            Back to Portfolio
          </Link>

          

        </div>
      </div>

    </main>
  );
}


/* =========================================================
   SMALL ICON COMPONENT
   Keeps the audience section consistent without adding
   another package.
========================================================= */

function BriefcaseIcon() {
  return <Code2 size={26} />;
}