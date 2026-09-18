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

                <span className="inline-flex items-center gap-2 border border-green-600/40 bg-green-50 px-4 py-2 text-xs font-semibold tracking-widest text-green-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                  LIVE
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
              icon={<ReactIcon size={30} />}
              name="React"
              description="Used to create a component-based interface and structure the website."
            />

            <TechnologyCard
              icon={<JavaScriptIcon size={30} />}
              name="JavaScript"
              description="Used to add functionality and interactive behaviour."
            />

            <TechnologyCard
              icon={<TailwindIcon size={30} />}
              name="Tailwind CSS"
              description="Used to build responsive layouts and maintain consistent styling."
            />

            <TechnologyCard
              icon={<VsCodeIcon size={30} />}
              name="Visual Studio Code"
              description="Used during the development process."
            />

            <TechnologyCard
              icon={<GoDaddyIcon size={30} />}
              name="GoDaddy"
              description="Used to host and deploy the live website."
            />

            <TechnologyCard
              icon={<GitHubIcon size={30} />}
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

function GoDaddyIcon({ size = 30 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <path d="M27.88 15.734c-0.457 1.68-1.118 3.152-1.972 4.488l0.039-0.065c-0.586 0.933-1.209 1.743-1.901 2.49l0.010-0.011c0.204-0.955 0.321-2.052 0.321-3.177 0-2.842-0.746-5.509-2.053-7.817l0.041 0.079c-0.082-0.162-0.246-0.271-0.437-0.271-0.099 0-0.192 0.030-0.269 0.081l0.002-0.001-6.063 3.789c-0.14 0.089-0.232 0.244-0.232 0.42 0 0.097 0.028 0.188 0.076 0.264l-0.001-0.002 0.89 1.423c0.088 0.141 0.243 0.234 0.42 0.234 0.098 0 0.189-0.028 0.266-0.078l-0.002 0.001 3.93-2.456c0.126 0.382 0.254 0.757 0.35 1.145 0.283 0.999 0.446 2.146 0.446 3.332 0 0.295-0.010 0.588-0.030 0.878l0.002-0.039c-0.018 2.236-1.125 4.209-2.816 5.418l-0.020 0.014c-0.801 0.497-1.77 0.797-2.808 0.812l-0.004 0h-0.126c-1.042-0.015-2.011-0.315-2.835-0.826l0.024 0.014c-1.712-1.223-2.819-3.196-2.837-5.429l-0-0.003c-0.018-0.25-0.027-0.541-0.027-0.835 0-1.186 0.163-2.335 0.467-3.424l-0.021 0.089c0.899-3.245 2.669-6 5.042-8.084l0.019-0.016c1.015-0.895 2.192-1.637 3.477-2.175l0.084-0.031c0.847-0.414 1.842-0.656 2.895-0.656 1.184 0 2.297 0.307 3.263 0.845l-0.034-0.017c1.712 1.221 2.82 3.194 2.838 5.427l0 0.003c0.018 0.255 0.029 0.552 0.029 0.851 0 1.179-0.161 2.321-0.462 3.404l0.021-0.089zM6.055 20.159c-0.815-1.273-1.476-2.745-1.906-4.312l-0.026-0.113c-0.284-1-0.448-2.148-0.448-3.335 0-0.294 0.010-0.586 0.030-0.876l-0.002 0.039c0.019-2.235 1.126-4.208 2.816-5.416l0.020-0.014c0.932-0.521 2.046-0.827 3.231-0.827 1.053 0 2.049 0.242 2.936 0.674l-0.040-0.018c0.421 0.169 0.761 0.33 1.090 0.506l-0.059-0.029c-1.268 1.157-2.367 2.467-3.276 3.91l-0.046 0.078c-1.716 2.542-2.739 5.675-2.739 9.046 0 1.117 0.112 2.208 0.326 3.261l-0.018-0.105c-0.682-0.735-1.306-1.544-1.852-2.406l-0.040-0.068zM26.874 3.866c-1.388-0.751-3.038-1.192-4.792-1.192-2.293 0-4.409 0.754-6.115 2.028l0.027-0.019c-1.676-1.255-3.79-2.009-6.081-2.009-1.751 0-3.4 0.441-4.84 1.218l0.054-0.027c-4.925 3.078-5.523 11.004-1.337 17.704 3.087 4.941 7.914 7.834 12.209 7.78 4.297 0.054 9.124-2.84 12.21-7.78 4.183-6.699 3.589-14.626-1.336-17.704z" fill="#63e2f2"/>
    </svg>
  );
}

function TailwindIcon({ size = 30 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z" fill="#59d0f8"/>
    </svg>
  );
}

function JavaScriptIcon({ size = 30 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0h256v256H0V0z" fill="#F7DF1E"/>
      <path d="M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247L210.29 147.43c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574"/>
    </svg>
  );
}

function GitHubIcon({ size = 30 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 1.375c-8.282 0-14.996 6.714-14.996 14.996 0 6.585 4.245 12.18 10.148 14.195l0.106 0.031c0.75 0.141 1.025-0.322 1.025-0.721 0-0.356-0.012-1.3-0.019-2.549-4.171 0.905-5.051-2.012-5.051-2.012-0.288-0.925-0.878-1.685-1.653-2.184l-0.016-0.009c-1.358-0.93 0.105-0.911 0.105-0.911 0.987 0.139 1.814 0.718 2.289 1.53l0.008 0.015c0.554 0.995 1.6 1.657 2.801 1.657 0.576 0 1.116-0.152 1.582-0.419l-0.016 0.008c0.072-0.791 0.421-1.489 0.949-2.005l0.001-0.001c-3.33-0.375-6.831-1.665-6.831-7.41-0-0.027-0.001-0.058-0.001-0.089 0-1.521 0.587-2.905 1.547-3.938l-0.003 0.004c-0.203-0.542-0.321-1.168-0.321-1.821 0-0.777 0.166-1.516 0.465-2.182l-0.014 0.034s1.256-0.402 4.124 1.537c1.124-0.321 2.415-0.506 3.749-0.506s2.625 0.185 3.849 0.53l-0.1-0.024c2.849-1.939 4.105-1.537 4.105-1.537 0.285 0.642 0.451 1.39 0.451 2.177 0 0.642-0.11 1.258-0.313 1.83l0.012-0.038c0.953 1.032 1.538 2.416 1.538 3.937 0 0.031-0 0.061-0.001 0.091l0-0.005c0 5.761-3.505 7.029-6.842 7.398 0.632 0.647 1.022 1.532 1.022 2.509 0 0.093-0.004 0.186-0.011 0.278l0.001-0.012c0 2.007-0.019 3.619-0.019 4.106 0 0.394 0.262 0.862 1.031 0.712 6.028-2.029 10.292-7.629 10.292-14.226 0-8.272-6.706-14.977-14.977-14.977-0.006 0-0.013 0-0.019 0h0.001z" fill="currentColor"/>
    </svg>
  );
}

function ReactIcon({ size = 30 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" style={{fillRule:"evenodd",clipRule:"evenodd"}}>
      <circle cx="32.001" cy="31.955" r="4.478" fill="#00d8ff"/>
      <path d="M32.33,22.516c7.635,0.052 15.965,0.609 21.683,5.708c0.168,0.15 0.33,0.306 0.488,0.467c1.349,1.375 2.054,3.595 0.965,5.422c-2.234,3.751 -7.23,5.387 -12.067,6.394c-7.234,1.506 -14.798,1.518 -22.029,0.192c-4.161,-0.764 -8.416,-2.103 -11.373,-4.904c-1.151,-1.09 -2.135,-2.524 -1.981,-4.12c0.25,-2.582 2.727,-4.239 4.812,-5.361c5.791,-3.116 12.847,-3.813 19.502,-3.798Zm-0.554,1.173c-7.224,0.049 -15.043,0.51 -20.621,5.129c-0.195,0.161 -0.383,0.33 -0.564,0.507c-0.117,0.114 -0.23,0.233 -0.339,0.355c-0.979,1.1 -1.316,2.867 -0.392,4.188c0.93,1.329 2.342,2.288 3.796,3.07c5.438,2.924 11.864,3.443 18.129,3.465c6.343,0.023 12.884,-0.555 18.487,-3.452c2.232,-1.155 4.744,-2.851 4.655,-5.035c-0.082,-2.004 -2.036,-3.242 -3.499,-4.126c-0.396,-0.239 -0.803,-0.46 -1.216,-0.668c-5.562,-2.787 -12.08,-3.447 -18.436,-3.433Z" fill="#00d8ff"/>
      <path d="M42.115,10.703c2.793,0.071 4.24,3.429 4.431,5.909c0.038,0.493 0.052,0.988 0.046,1.483c-0.006,0.536 -0.035,1.072 -0.082,1.606c-0.589,6.612 -3.608,12.909 -7.163,18.724c-3.477,5.688 -7.717,11.36 -13.485,13.996c-1.907,0.872 -4.175,1.41 -5.863,0.437c-2.314,-1.333 -2.567,-4.451 -2.524,-6.816c0.011,-0.581 0.049,-1.162 0.109,-1.741c0.889,-8.56 5.228,-16.669 10.658,-23.655c3.168,-4.076 6.937,-8.119 11.632,-9.583c0.739,-0.231 1.326,-0.371 2.241,-0.36Zm-0.134,1.172c-3.279,0.052 -6.223,2.482 -8.83,5.007c-6.854,6.637 -11.905,15.464 -13.937,24.721c-0.157,0.717 -0.289,1.439 -0.386,2.166c-0.075,0.563 -0.13,1.129 -0.159,1.697c-0.023,0.452 -0.031,0.905 -0.017,1.358c0.01,0.354 0.033,0.708 0.072,1.06c0.029,0.269 0.068,0.537 0.117,0.803c0.037,0.197 0.08,0.393 0.13,0.588c0.041,0.158 0.087,0.315 0.139,0.471c0.409,1.233 1.463,2.411 2.878,2.45c3.301,0.09 6.409,-2.317 9.096,-4.933c4.717,-4.591 8.232,-10.36 10.978,-16.424c2.216,-4.896 4.243,-10.218 3.111,-15.607c-0.043,-0.204 -0.093,-0.406 -0.15,-0.606c-0.047,-0.163 -0.1,-0.324 -0.158,-0.483c-0.44,-1.199 -1.475,-2.271 -2.884,-2.268Z" fill="#00d8ff"/>
      <path d="M22.109,10.747c3.564,0.069 6.765,2.488 9.607,5.197c5.186,4.943 9.011,11.231 11.913,17.849c2.248,5.127 4.316,10.882 2.478,16.292c-0.579,1.705 -2.044,3.265 -3.997,3.305c-3.581,0.072 -6.9,-2.532 -9.78,-5.335c-7.225,-7.034 -12.589,-16.32 -14.427,-26.168c-0.132,-0.704 -0.237,-1.414 -0.309,-2.127c-0.059,-0.582 -0.096,-1.167 -0.106,-1.752c-0.008,-0.472 0.002,-0.944 0.035,-1.414c0.022,-0.314 0.054,-0.626 0.097,-0.937c0.041,-0.292 0.093,-0.583 0.158,-0.871c0.043,-0.191 0.091,-0.38 0.146,-0.568c0.539,-1.843 1.941,-3.485 4.185,-3.471Zm-0.135,1.173c-2.087,0.046 -3.042,2.507 -3.234,4.234c-0.039,0.354 -0.063,0.711 -0.074,1.068c-0.014,0.456 -0.008,0.913 0.015,1.369c0.328,6.599 3.278,12.979 6.838,18.821c3.352,5.5 7.4,10.978 12.968,13.794c1.608,0.813 3.562,1.452 4.951,0.684c1.742,-0.964 1.956,-3.261 2.049,-4.973c0.025,-0.466 0.028,-0.934 0.013,-1.401c-0.018,-0.586 -0.064,-1.171 -0.133,-1.753c-0.642,-5.437 -3.05,-10.582 -5.816,-15.444c-3.442,-6.048 -7.659,-12.076 -13.627,-15.225c-1.236,-0.652 -2.574,-1.185 -3.95,-1.174Z" fill="#00d8ff"/>
    </svg>
  );
}

function VsCodeIcon({ size = 30 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.0016 3.11679C21.0016 2.23783 20.0175 2.23782 19.5801 2.34769C20.1924 1.86426 20.9105 1.98147 21.1656 2.12796L27.079 5.02747C27.6424 5.30375 27.9998 5.8786 27.9998 6.50857V25.5831C27.9998 26.2215 27.6329 26.8025 27.058 27.0743L21.4937 29.7054C21.1109 29.8701 20.2799 30.2767 19.5801 29.7053C20.4549 29.8702 20.9287 29.2476 21.0016 28.8264V3.11679Z" fill="url(#vsc_a)"/>
      <path d="M19.6512 2.3319C20.1154 2.24017 21.0018 2.28271 21.0018 3.11685V9.68254L3.07359 23.2453C2.76022 23.4824 2.3192 23.443 2.05229 23.1542L0.204532 21.1548C-0.0849358 20.8416 -0.0646824 20.3513 0.249624 20.0633L19.5802 2.34775L19.6512 2.3319Z" fill="url(#vsc_b)"/>
      <path d="M21.0018 22.3708L3.07359 8.80801C2.76022 8.57094 2.3192 8.61028 2.05229 8.8991L0.204532 10.8985C-0.0849358 11.2117 -0.0646824 11.702 0.249624 11.9901L19.5802 29.7056C20.455 29.8704 20.9289 29.2478 21.0018 28.8266V22.3708Z" fill="url(#vsc_c)"/>
      <defs>
        <linearGradient id="vsc_a" x1="23.79" y1="2" x2="23.79" y2="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="#32B5F1"/>
          <stop offset="1" stopColor="#2B9FED"/>
        </linearGradient>
        <linearGradient id="vsc_b" x1="21.0018" y1="5.53398" x2="1.0217" y2="22.3051" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0F6FB3"/>
          <stop offset="0.270551" stopColor="#1279B7"/>
          <stop offset="0.421376" stopColor="#1176B5"/>
          <stop offset="0.618197" stopColor="#0E69AC"/>
          <stop offset="0.855344" stopColor="#0F70AF"/>
          <stop offset="1" stopColor="#0F6DAD"/>
        </linearGradient>
        <linearGradient id="vsc_c" x1="1.15522" y1="9.98389" x2="21.0791" y2="26.4808" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1791D2"/>
          <stop offset="1" stopColor="#1173C5"/>
        </linearGradient>
      </defs>
    </svg>
  );
}