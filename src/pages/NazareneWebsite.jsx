import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import nazareneWebsite from "../assets/images/Nazarene-website.png";
import nazareneHomepage from "../assets/images/nazarene-homepage.png";
import nazareneAbout from "../assets/images/nazarene-about.png";
import nazareneChurches from "../assets/images/nazarene-churches.png";
import nazareneContact from "../assets/images/nazarene-contact.png";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  // FaGithub,
  Users,
  Compass,
  Layers,
  Smartphone,
  Tablet,
  Monitor,
  CheckCircle2,
  Code2,
  Image as ImageIcon,
  Navigation as NavigationIcon,
  LayoutGrid,
  Menu,
  PenTool,
  Palette,
  MapPin,
  Calendar,
  BookOpen,
  Building2,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Update once the site is live / pushed to GitHub.
// ---------------------------------------------------------------------------
const LIVE_SITE_URL = "#";
const GITHUB_REPO_URL = "#";

// ---------------------------------------------------------------------------
// Content — edit freely, nothing here is wired to fake data or claims.
// ---------------------------------------------------------------------------

const overview = [
  { label: "Role", value: "UI/UX Designer & Front-End Developer" },
  { label: "Platform", value: "Responsive Website" },
  { label: "Technology", value: "React + Tailwind CSS" },
  { label: "Focus", value: "Information Architecture, UI Design & Responsive Development" },
];

const challengePoints = [
  "Organising information for multiple churches",
  "Making important information easy to find",
  "Creating clear navigation",
  "Balancing organisational information with community-focused content",
  "Designing for users with different levels of technical experience",
  "Maintaining a welcoming and trustworthy visual identity",
  "Ensuring the experience works across different screen sizes",
];

const goals = [
  { n: "01", text: "Create a clear and intuitive navigation structure." },
  { n: "02", text: "Centralise important district and church information." },
  { n: "03", text: "Create a welcoming and trustworthy digital experience." },
  { n: "04", text: "Ensure the website is responsive across devices." },
  { n: "05", text: "Build a scalable interface that can accommodate additional content and churches." },
];

const audiences = [
  { title: "Church Members", text: "People looking for district information, church activities, events and resources." },
  { title: "Visitors & Community Members", text: "People discovering the Church of the Nazarene or looking for a local church." },
  { title: "Church Leaders & Staff", text: "People who need access to district information, resources and communication." },
  { title: "Younger / Digital Users", text: "Users accessing information primarily through smartphones and modern web interfaces." },
];

const designApproach = [
  "Clear hierarchy",
  "Simple navigation",
  "Consistent spacing",
  "Strong typography",
  "Accessible colour contrast",
  "Responsive layouts",
  "Reusable components",
  "Clear calls to action",
  "Content organisation",
];

// Edit this to match the actual site structure if it differs.
const sitemap = {
  label: "Home",
  children: [
    {
      label: "About",
      children: [
        { label: "Who We Are" },
        { label: "Mission" },
        { label: "Beliefs" },
        { label: "Values" },
      ],
    },
    { label: "Churches", children: [{ label: "Find a Church" }] },
    { label: "Events" },
    { label: "Ministries" },
    { label: "Resources" },
    { label: "Contact" },
  ],
};

const colours = [
  { name: "Deep Navy", hex: "#00384D", purpose: "Used for primary structure, headings and strong visual anchors." },
  { name: "Teal", hex: "#007A96", purpose: "Used for interactive elements and secondary visual emphasis." },
  { name: "Protea Red", hex: "#C21E26", purpose: "Used as a strong accent for important actions and highlights." },
  { name: "Yellow", hex: "#FDB813", purpose: "Used sparingly to add warmth and visual energy." },
  { name: "Sky Blue", hex: "#82C8E6", purpose: "Used for softer backgrounds and supporting accents." },
  { name: "Logo Teal", hex: "#4EA6B3", purpose: "Used to reinforce the organisation's existing visual identity." },
];

const typeScale = [
  { role: "Hero Headings", note: "Large, bold and impactful with tight letter spacing.", font: "Sans-serif · font-black · tracking-tighter" },
  { role: "Hero Accent Text", note: "An elegant editorial contrast within key hero messaging.", font: "Serif · italic" },
  { role: "Section Headings", note: "Strong hierarchy for major content sections.", font: "Sans-serif · font-bold / font-black" },
  { role: "Small Section Labels", note: "Navigation and eyebrow labels that create clear visual cues.", font: "Sans-serif · font-black · uppercase · wide tracking" },
  { role: "Body Text", note: "Clean, comfortable readability for longer informational content.", font: "Sans-serif · font-light / normal" },
  { role: "Buttons & Navigation", note: "Clear, professional interactive text with a strong call to action.", font: "Sans-serif · font-bold / font-black" },
];

const componentSystem = [
  "Navigation",
  "Buttons",
  "Cards",
  "Church / Location Cards",
  "Event Cards",
  "Content Sections",
  "Footer",
  "Forms",
  "Mobile Navigation",
];

const responsiveNotes = [
  "Responsive navigation that adapts to smaller screens",
  "Flexible layouts that reflow rather than break",
  "Readable typography at every size",
  "Mobile-friendly interaction and touch targets",
  "A content hierarchy that holds up on a small screen",
  "Touch-friendly controls throughout",
];

const features = [
  { n: "01", icon: <Building2 size={20} />, title: "District Information", text: "A central place for information about the district and its identity." },
  { n: "02", icon: <MapPin size={20} />, title: "Church Discovery", text: "A structure that helps visitors locate and learn about churches within the district." },
  { n: "03", icon: <Calendar size={20} />, title: "Events & Activities", text: "A way to surface upcoming activities and important district information." },
  { n: "04", icon: <BookOpen size={20} />, title: "Resources", text: "Organised access to useful district and church resources." },
  { n: "05", icon: <Smartphone size={20} />, title: "Responsive Experience", text: "A consistent experience across desktop, tablet and mobile." },
  { n: "06", icon: <NavigationIcon size={20} />, title: "Clear Navigation", text: "A simplified navigation system designed to help users find information quickly." },
];

const technologies = [
  { name: "React", text: "Used to create the component-based interface and structure the website.", icon: <Code2 size={30} /> },
  { name: "JavaScript", text: "Used to add functionality and interactive behaviour.", icon: <Code2 size={30} /> },
  { name: "Tailwind CSS", text: "Used to build responsive layouts and maintain consistent styling.", icon: <Layers size={30} /> },
  { name: "Figma", text: "Used for interface design and visual planning.", icon: <PenTool size={30} /> },
  { name: "HTML", text: "Provides the structural foundation for the interface.", icon: <LayoutGrid size={30} /> },
  { name: "CSS", text: "Supports styling, layout and visual presentation.", icon: <Palette size={30} /> },
  { name: "React Router", text: "Used to manage navigation between pages within the application.", icon: <NavigationIcon size={30} /> },
  { name: "GitHub", text: "Used for version control and managing project changes.", icon: <CheckCircle2 size={30} /> },
];

const finalDesignItems = [
  { title: "Homepage", image: nazareneHomepage },
  { title: "About / District", image: nazareneAbout, reverse: true },
  { title: "Church Section", image: nazareneChurches },
  { title: "Contact", image: nazareneContact, reverse: true },
];

const challenges = [
  { title: "Organising a large amount of information", solution: "Used clear hierarchy, categorisation and consistent page structures to make information easier to scan." },
  { title: "Designing for multiple audiences", solution: "Prioritised common user tasks and created clear navigation paths for visitors, members and church leaders." },
  { title: "Maintaining consistency across pages", solution: "Used reusable components, consistent spacing, typography and colour rules." },
  { title: "Responsive implementation", solution: "Used responsive React/Tailwind layouts and tested the interface across different screen sizes." },
];

const futureImprovements = [
  "Conduct usability testing with real users",
  "Analyse website analytics",
  "Improve accessibility through a formal accessibility audit",
  "Add more advanced church search/filtering",
  "Improve content management workflows",
  "Add richer event functionality",
  "Continue refining the mobile experience",
];

// ---------------------------------------------------------------------------
// Small building blocks
// ---------------------------------------------------------------------------

// Polished placeholder for an image that hasn't been added yet.
function ImagePlaceholder({ label, aspect = "aspect-[16/10]", className = "" }) {
  return (
    <div
      className={`w-full ${aspect} rounded-2xl border border-dashed border-[#1D2D44]/20 bg-[#1D2D44]/[0.03]
      flex flex-col items-center justify-center gap-2 ${className}`}
    >
      <ImageIcon size={20} className="text-[#1D2D44]/30" />
      {label && (
        <span className="text-[11px] uppercase tracking-[0.2em] text-[#1D2D44]/35 font-semibold text-center px-4">
          {label}
        </span>
      )}
    </div>
  );
}

// Add an image path to either frame's `image` prop when screenshots are ready.
function LaptopFrame({ image, alt, label = "Desktop screenshot" }) {
  return (
    <div className="w-full">
      <div className="rounded-[1.25rem] border border-[#1D2D44]/20 bg-[#1D2D44] p-2 shadow-2xl">
        <div className="flex items-center gap-2 px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FFFCF6]/50" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FFFCF6]/50" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FFFCF6]/50" />
        </div>
        <div className="overflow-hidden rounded-lg bg-white">
          {image ? <img src={image} alt={alt} className="block w-full h-auto" /> : <ImagePlaceholder label={label} aspect="aspect-[16/10]" className="rounded-none border-0" />}
        </div>
      </div>
      <div className="mx-auto h-3 w-[55%] rounded-b-xl bg-[#1D2D44]" />
      <div className="mx-auto h-1.5 w-[70%] rounded-full bg-[#1D2D44]/80" />
    </div>
  );
}

function PhoneFrame({ image, alt, label = "Mobile screenshot" }) {
  return (
    <div className="mx-auto w-full max-w-[220px]">
      <div className="rounded-[2rem] border-[5px] border-[#1D2D44] bg-[#1D2D44] p-1.5 shadow-xl">
        <div className="relative overflow-hidden rounded-[1.5rem] bg-white">
          <div className="absolute left-1/2 top-2 z-10 h-4 w-16 -translate-x-1/2 rounded-full bg-[#1D2D44]" />
          {image ? <img src={image} alt={alt} className="block w-full h-auto" /> : <ImagePlaceholder label={label} aspect="aspect-[9/16]" className="rounded-none border-0" />}
        </div>
      </div>
    </div>
  );
}

function TechnologyCard({ icon, name, description }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="border-t border-[#1D2D44]/20 pt-6"
    >
      <div className="mb-5 text-[#66001F]">{icon}</div>
      <h3 className="text-xl font-semibold text-[#1D2D44]">{name}</h3>
      <p className="mt-3 leading-7 text-[#1D2D44]/65">{description}</p>
    </motion.div>
  );
}

// Section heading matching the Resume's "icon + heading + accent bar" pattern.
function SectionHeading({ icon, title, size = "lg" }) {
  return (
    <div className="mb-14">
      <div className="flex items-center gap-3">
        {icon}
        <h2 className={size === "lg" ? "text-3xl md:text-4xl font-bold" : "text-2xl font-bold"}>{title}</h2>
      </div>
      <div className="h-1 w-12 bg-[#66001F] mt-5" />
    </div>
  );
}

// Recursive sitemap node, monochrome and editorial rather than colourful.
function SitemapNode({ node, depth = 0 }) {
  return (
    <div className={depth === 0 ? "" : "ml-6 border-l border-[#1D2D44]/15 pl-6"}>
      <div
        className={`inline-block rounded-lg px-4 py-1.5 my-1 text-sm ${
          depth === 0
            ? "bg-[#1D2D44] text-white font-semibold px-5 py-2"
            : "border border-[#1D2D44]/15 text-[#1D2D44]/80"
        }`}
      >
        {node.label}
      </div>
      {node.children?.map((child) => (
        <SitemapNode key={child.label} node={child} depth={depth + 1} />
      ))}
    </div>
  );
}

export default function NazareneWebsite() {
  return (
    <div className="min-h-screen bg-[#FFFCF6] text-[#1D2D44]">
      {/* =========================
          1. HERO
      ========================== */}

      <section className="px-6 md:px-10 pt-32 pb-20">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[#1D2D44] font-medium hover:text-[#66001F] transition-colors duration-300"
          >
            <ArrowLeft size={19} />
            Back to Portfolio
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-12"
          >
            <p className="uppercase tracking-[0.35em] text-sm font-semibold text-[#66001F]">
              Case Study / 02
            </p>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mt-5 max-w-4xl">
              Nazarene District
            </h1>

            <p className="text-xl md:text-2xl text-[#1D2D44]/70 mt-7 max-w-3xl leading-relaxed">
              A responsive digital platform designed to connect the Western Cape District of the
              Church of the Nazarene with its churches, communities and visitors.
            </p>

            <div className="flex flex-wrap gap-2 mt-8">
              {["UI/UX Design", "Front-End Development", "React", "Responsive Web"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 rounded-full border border-[#1D2D44]/15 text-xs sm:text-sm font-medium text-[#1D2D44]/75"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mx-auto mt-14 max-w-5xl"
          >
            <LaptopFrame image={nazareneWebsite} alt="Nazarene District website homepage" label="Main Website Mockup" />
          </motion.div>
        </div>
      </section>

      {/* =========================
          2. PROJECT OVERVIEW
      ========================== */}

      <section className="border-y border-[#1D2D44]/15 bg-[#FFFCF6]">
        <div className="mx-auto grid max-w-7xl md:grid-cols-2 lg:grid-cols-4">
          {overview.map(({ label, value }) => (
            <div
              key={label}
              className="border-b border-[#1D2D44]/15 p-8 last:border-b-0 md:border-r lg:border-b-0 lg:p-10"
            >
              <p className="text-xs font-semibold tracking-[0.2em] text-[#66001F]">{label}</p>
              <p className="mt-5 leading-7 text-[#1D2D44]/75">{value}</p>
            </div>
          ))}
        </div>
        <div className="mx-auto max-w-7xl px-8 pb-10 lg:px-10">
          {/* <p className="max-w-4xl leading-7 text-[#1D2D44]/65">
            This project focused on creating a central digital experience for the Western Cape
            District of the Church of the Nazarene. The website needed to make important
            information easier to discover while providing a clear and welcoming experience for
            church members, visitors and the wider community.
          </p> */}
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 md:px-10 py-24">
        {/* =========================
            3. THE CONTEXT
        ========================== */}

        <section className="grid lg:grid-cols-[260px_1fr] gap-12 mb-28">
          <div>
            <div className="flex items-center gap-3">
              <Compass size={22} />
              <h2 className="text-2xl font-bold">The Context</h2>
            </div>
            <div className="h-1 w-12 bg-[#66001F] mt-5" />
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Designing a Digital Home for the District</h3>
            <p className="text-lg leading-8 text-[#1D2D44]/75 max-w-4xl">
              The Church of the Nazarene's Western Cape District works across a number of churches
              and congregations, each with its own community and activities. A single, central
              website was needed to bring this together — a place where district information,
              church details, events and resources could all live under one clear structure.
            </p>
            <p className="text-lg leading-8 text-[#1D2D44]/75 max-w-4xl mt-6">
              The website needed to support centralised information and communication, help people
              discover a local church, strengthen community connection, and organise district
              resources and events behind clear, simple navigation.
            </p>
          </div>
        </section>

        {/* =========================
            4. THE CHALLENGE
        ========================== */}

        <section className="grid lg:grid-cols-[260px_1fr] gap-12 mb-28">
          <div>
            <div className="flex items-center gap-3">
              <Layers size={22} />
              <h2 className="text-2xl font-bold">The Challenge</h2>
            </div>
            <div className="h-1 w-12 bg-[#66001F] mt-5" />
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Creating Clarity Across a Distributed Organisation</h3>
            <p className="text-lg leading-8 text-[#1D2D44]/75 max-w-4xl mb-8">
              The core challenge was organising a broad range of organisational and church-related
              information into a website that stayed easy to navigate. Key considerations for the
              project included:
            </p>
            <ul className="space-y-3 max-w-3xl">
              {challengePoints.map((point) => (
                <li key={point} className="flex gap-3 text-[#1D2D44]/75">
                  <span className="text-[#66001F] mt-1">—</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* =========================
            5. PROJECT GOALS
        ========================== */}

        <section className="mb-28">
          <SectionHeading icon={<CheckCircle2 size={24} />} title="Project Goals" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {goals.map(({ n, text }, i) => (
              <motion.div
                key={n}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="border border-[#1D2D44]/10 rounded-2xl p-6 bg-white"
              >
                <p className="text-[#66001F] font-semibold text-sm">{n}</p>
                <p className="mt-3 text-sm leading-6 text-[#1D2D44]/80">{text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* =========================
            6. TARGET AUDIENCE
        ========================== */}

        <section className="mb-28">
          <SectionHeading icon={<Users size={24} />} title="Target Audience" />
          <div className="grid sm:grid-cols-2 gap-6">
            {audiences.map(({ title, text }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="border border-[#1D2D44]/10 rounded-2xl p-7 bg-white"
              >
                {i === 0 && (
                  <p className="text-xs uppercase tracking-wider text-[#66001F] font-semibold mb-3">
                    Primary Audience
                  </p>
                )}
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="text-sm text-[#1D2D44]/65 mt-2 leading-6">{text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* =========================
            7. DESIGN APPROACH
        ========================== */}

        <section className="grid lg:grid-cols-[260px_1fr] gap-12 mb-28">
          <div>
            <div className="flex items-center gap-3">
              <Palette size={22} />
              <h2 className="text-2xl font-bold">Design Approach</h2>
            </div>
            <div className="h-1 w-12 bg-[#66001F] mt-5" />
          </div>

          <div>
            <p className="text-lg leading-8 text-[#1D2D44]/75 max-w-4xl mb-8">
              The design focused on creating a clear, modern and structured experience while
              maintaining the identity and values of the organisation.
            </p>
            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-3 max-w-3xl">
              {designApproach.map((item) => (
                <div key={item} className="flex gap-3 text-[#1D2D44]/75">
                  <span className="text-[#66001F] mt-1">—</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================
            8. INFORMATION ARCHITECTURE
        ========================== */}

        <section className="mb-28">
          <SectionHeading icon={<LayoutGrid size={24} />} title="Organising the Experience" />
          <p className="text-lg leading-8 text-[#1D2D44]/75 max-w-3xl mb-10">
            The website was structured around the information users are most likely to need,
            separating organisational information from practical church and community content.
          </p>
          <p className="text-xs uppercase tracking-wider text-[#66001F] font-semibold mb-5">
            Site Structure
          </p>
          <div className="border border-[#1D2D44]/10 rounded-2xl p-6 md:p-10 bg-white overflow-x-auto">
            <SitemapNode node={sitemap} />
          </div>
        </section>

        {/* =========================
            9. VISUAL DIRECTION
        ========================== */}

        <section className="mb-28">
          <SectionHeading icon={<Palette size={24} />} title="Visual Direction" />
          <p className="text-lg leading-8 text-[#1D2D44]/75 max-w-3xl mb-4">
            Modern, welcoming, trustworthy and community-focused.
          </p>
          <p className="text-base leading-7 text-[#1D2D44]/65 max-w-3xl mb-10">
            The visual system was designed to balance a contemporary digital interface with the
            established identity of the church organisation.
          </p>
          <ImagePlaceholder label="Moodboard / Screenshots / Branding References" aspect="aspect-[16/7]" />
        </section>

        {/* =========================
            10. COLOUR PALETTE
        ========================== */}

        <section className="mb-28">
          <SectionHeading icon={<Palette size={24} />} title="Colour Palette" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {colours.map(({ name, hex, purpose }) => (
              <div key={hex} className="border border-[#1D2D44]/10 rounded-2xl overflow-hidden bg-white">
                <div className="h-24" style={{ backgroundColor: hex }} />
                <div className="p-5">
                  <h3 className="font-bold text-sm">{name}</h3>
                  <p className="text-xs text-[#1D2D44]/45 mb-2">{hex}</p>
                  <p className="text-xs text-[#1D2D44]/65 leading-5">{purpose}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================
            11. TYPOGRAPHY
        ========================== */}

        <section className="mb-28">
          <SectionHeading icon={<PenTool size={24} />} title="Typography creates hierarchy." />
          <div className="grid gap-0 border-t border-[#1D2D44]/20 md:grid-cols-2">
            <div className="border-b border-[#1D2D44]/20 p-8 md:border-r md:p-12">
              <p className="text-xs font-semibold tracking-[0.2em] text-[#66001F]">HEADINGS</p>
              <p className="mt-8 text-5xl font-black tracking-tighter text-[#1D2D44]">Aa</p>
              <p className="mt-6 text-3xl font-black tracking-tighter">"Nazarene District"</p>
              <p className="mt-3 text-sm font-semibold tracking-widest text-[#66001F] uppercase">Sans-serif Display</p>
              <p className="mt-3 text-[#1D2D44]/60">{typeScale[0].note} Serif italics provide an editorial accent.</p>
            </div>
            <div className="border-b border-[#1D2D44]/20 p-8 md:p-12">
              <p className="text-xs font-semibold tracking-[0.2em] text-[#66001F]">BODY &amp; UI</p>
              <p className="mt-8 text-5xl font-light text-[#1D2D44]">Aa</p>
              <p className="mt-6 text-xl leading-8">"Clear, welcoming information for churches, members and visitors."</p>
              <p className="mt-3 text-sm font-semibold tracking-widest text-[#66001F] uppercase">Sans-serif</p>
              <p className="mt-3 text-[#1D2D44]/60">{typeScale[4].note} Used for navigation, labels and calls to action.</p>
            </div>
          </div>
        </section>

        {/* =========================
            12. UI / COMPONENT SYSTEM
        ========================== */}

        <section className="mb-28">
          <SectionHeading icon={<LayoutGrid size={24} />} title="UI / Component System" />
          <p className="text-lg leading-8 text-[#1D2D44]/75 max-w-3xl mb-10">
            Reusable components helped maintain visual consistency across the website while making
            the interface easier to maintain and extend.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Navigation */}
            <div className="border border-[#1D2D44]/10 rounded-2xl p-5 bg-white">
              <p className="text-xs uppercase tracking-wider text-[#66001F] font-semibold mb-4">Navigation</p>
              <div className="flex items-center justify-between bg-[#1D2D44] rounded-lg px-4 py-2.5 text-white text-xs">
                <span className="font-bold">Nazarene</span>
                <NavigationIcon size={14} />
              </div>
            </div>

            {/* Buttons */}
            <div className="border border-[#1D2D44]/10 rounded-2xl p-5 bg-white">
              <p className="text-xs uppercase tracking-wider text-[#66001F] font-semibold mb-4">Buttons</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-1.5 rounded-full bg-[#66001F] text-white text-xs font-medium">Primary</span>
                <span className="px-4 py-1.5 rounded-full border border-[#1D2D44] text-xs font-medium">Secondary</span>
              </div>
            </div>

            {/* Cards */}
            <div className="border border-[#1D2D44]/10 rounded-2xl p-5 bg-white">
              <p className="text-xs uppercase tracking-wider text-[#66001F] font-semibold mb-4">Cards</p>
              <div className="border border-[#1D2D44]/10 rounded-lg p-3">
                <div className="h-2 w-10 bg-[#A2C0DD] rounded-full mb-2" />
                <div className="h-2 w-16 bg-[#1D2D44]/10 rounded-full" />
              </div>
            </div>

            {/* Church / Location Card */}
            <div className="border border-[#1D2D44]/10 rounded-2xl p-5 bg-white">
              <p className="text-xs uppercase tracking-wider text-[#66001F] font-semibold mb-4">Church / Location Card</p>
              <div className="flex items-center gap-2 border border-[#1D2D44]/10 rounded-lg p-3 text-xs text-[#1D2D44]/60">
                <MapPin size={14} className="text-[#66001F]" />
                Church Name, Area
              </div>
            </div>

            {/* Event Card */}
            <div className="border border-[#1D2D44]/10 rounded-2xl p-5 bg-white">
              <p className="text-xs uppercase tracking-wider text-[#66001F] font-semibold mb-4">Event Card</p>
              <div className="flex items-center gap-2 border border-[#1D2D44]/10 rounded-lg p-3 text-xs text-[#1D2D44]/60">
                <Calendar size={14} className="text-[#66001F]" />
                Event Title, Date
              </div>
            </div>

            {/* Content Sections */}
            <div className="border border-[#1D2D44]/10 rounded-2xl p-5 bg-white">
              <p className="text-xs uppercase tracking-wider text-[#66001F] font-semibold mb-4">Content Sections</p>
              <div className="space-y-1.5">
                <div className="h-2 w-full bg-[#1D2D44]/10 rounded-full" />
                <div className="h-2 w-4/5 bg-[#1D2D44]/10 rounded-full" />
                <div className="h-2 w-3/5 bg-[#1D2D44]/10 rounded-full" />
              </div>
            </div>

            {/* Footer */}
            <div className="border border-[#1D2D44]/10 rounded-2xl p-5 bg-white">
              <p className="text-xs uppercase tracking-wider text-[#66001F] font-semibold mb-4">Footer</p>
              <div className="bg-[#1D2D44] rounded-lg h-8" />
            </div>

            {/* Forms */}
            <div className="border border-[#1D2D44]/10 rounded-2xl p-5 bg-white">
              <p className="text-xs uppercase tracking-wider text-[#66001F] font-semibold mb-4">Forms</p>
              <div className="border border-[#1D2D44]/15 rounded-lg px-3 py-2 text-xs text-[#1D2D44]/40">Full Name</div>
            </div>

            {/* Mobile Navigation */}
            <div className="border border-[#1D2D44]/10 rounded-2xl p-5 bg-white">
              <p className="text-xs uppercase tracking-wider text-[#66001F] font-semibold mb-4">Mobile Navigation</p>
              <div className="flex items-center justify-between bg-[#1D2D44] rounded-lg px-3 py-2.5">
                <span className="text-white text-xs font-bold">N</span>
                <Menu size={14} className="text-white" />
              </div>
            </div>
          </div>
        </section>

        {/* =========================
            13. RESPONSIVE DESIGN
        ========================== */}

        <section className="mb-28">
          <SectionHeading icon={<Smartphone size={24} />} title="Designed Across Devices" />
          <div className="grid items-end gap-10 lg:grid-cols-12 mb-12">
            <div className="lg:col-span-7">
              <div className="mb-5 flex items-center gap-3 text-sm font-semibold text-[#66001F]">
                <Monitor size={19} /> Desktop
              </div>
              <LaptopFrame image={nazareneHomepage} alt="Nazarene District website desktop view" label="Desktop" />
            </div>
            <div className="flex gap-5 lg:col-span-5 lg:justify-end">
              <div className="hidden sm:block">
                <div className="mb-5 flex items-center gap-3 text-sm font-semibold text-[#66001F]">
                  <Tablet size={19} /> Tablet
                </div>
                <PhoneFrame label="Tablet" />
              </div>
              <div>
                <div className="mb-5 flex items-center gap-3 text-sm font-semibold text-[#66001F]">
                  <Smartphone size={19} /> Mobile
                </div>
                <PhoneFrame label="Mobile" />
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-3 max-w-3xl">
            {responsiveNotes.map((note) => (
              <div key={note} className="flex gap-3 text-[#1D2D44]/75 text-sm">
                <span className="text-[#66001F] mt-1">—</span>
                <span>{note}</span>
              </div>
            ))}
          </div>
        </section>

        {/* =========================
            14. KEY FEATURES
        ========================== */}

        <section className="mb-28">
          <SectionHeading icon={<CheckCircle2 size={24} />} title="Key Features" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ n, icon, title, text }, i) => (
              <motion.div
                key={n}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="border border-[#1D2D44]/10 rounded-2xl p-7 bg-white"
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[#66001F] font-semibold text-sm">{n}</span>
                  <span className="text-[#A2C0DD]">{icon}</span>
                </div>
                <h3 className="font-bold">{title}</h3>
                <p className="text-sm text-[#1D2D44]/65 mt-2 leading-6">{text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* =========================
            15. TECHNOLOGIES
        ========================== */}

        <section className="mb-28">
          <SectionHeading icon={<Layers size={24} />} title="Technologies" />
          <div className="grid gap-x-12 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
            {technologies.map(({ icon, name, text }) => (
              <TechnologyCard key={name} icon={icon} name={name} description={text} />
            ))}
          </div>
        </section>

        {/* =========================
            16. FINAL DESIGN
        ========================== */}

        <section className="mb-28">
          <SectionHeading icon={<ImageIcon size={24} />} title="The finished interface." />
          {finalDesignItems.map(({ title, image, reverse }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className={index < finalDesignItems.length - 1 ? "mb-20" : ""}
            >
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-2xl font-semibold">{title}</h3>
                <span className="text-sm text-[#66001F]">Desktop + Mobile</span>
              </div>
              <div className="grid items-end gap-10 lg:grid-cols-12">
                {reverse ? (
                  <>
                    <div className="order-2 lg:order-1 lg:col-span-3"><PhoneFrame label={`${title} mobile`} /></div>
                    <div className="order-1 lg:order-2 lg:col-span-9"><LaptopFrame image={image} alt={`Nazarene District ${title} page`} label={title} /></div>
                  </>
                ) : (
                  <>
                    <div className="lg:col-span-9"><LaptopFrame image={image} alt={`Nazarene District ${title} page`} label={title} /></div>
                    <div className="lg:col-span-3"><PhoneFrame label={`${title} mobile`} /></div>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </section>

        {/* =========================
            17. CHALLENGES & SOLUTIONS
        ========================== */}

        <section className="mb-28">
          <SectionHeading icon={<CheckCircle2 size={24} />} title="Challenges & Solutions" />
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
            {challenges.map(({ title, solution }, i) => (
              <div key={title} className="border-t border-[#1D2D44]/15 pt-6">
                <p className="text-xs uppercase tracking-wider text-[#66001F] font-semibold mb-2">
                {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-bold text-lg mb-3">{title}</h3>
                <p className="text-sm text-[#1D2D44]/65 leading-6">{solution}</p>
              </div>
            ))}
          </div>
        </section>

        {/* =========================
            18. REFLECTION
        ========================== */}

        <section className="grid lg:grid-cols-[260px_1fr] gap-12 mb-28">
          <div>
            <div className="flex items-center gap-3">
              <Compass size={22} />
              <h2 className="text-2xl font-bold">What I Learned</h2>
            </div>
            <div className="h-1 w-12 bg-[#66001F] mt-5" />
          </div>

          <div className="space-y-6 max-w-4xl">
            <p className="text-lg leading-8 text-[#1D2D44]/75">
              Working on the Nazarene District website gave me practical experience designing for
              an organisation with several different audiences, rather than a single, narrow user
              group. It reinforced how much information architecture shapes the rest of the
              project — once the structure was right, the visual design and navigation decisions
              became much clearer.
            </p>
            <p className="text-lg leading-8 text-[#1D2D44]/75">
              I also had to keep balancing visual design against usability: the site needed to
              feel warm and trustworthy without letting decoration get in the way of finding
              information. Building the interface with reusable React components made that easier
              to maintain consistently, and forced me to think about scalability early — the
              structure needed room for more churches and content without a redesign.
            </p>
            <p className="text-lg leading-8 text-[#1D2D44]/75">
              Overall, this project showed me that organisational websites need clarity as much as
              visual appeal, and that translating a visual design into a responsive, component-based
              React build is its own design discipline.
            </p>
          </div>
        </section>

        {/* =========================
            19. FUTURE IMPROVEMENTS
        ========================== */}

        <section className="mb-28">
          <SectionHeading icon={<ArrowRight size={24} />} title="Where I Would Take It Next" />
          <div className="grid sm:grid-cols-2 gap-4">
            {futureImprovements.map((item) => (
              <div key={item} className="flex gap-3 items-start border border-[#1D2D44]/10 rounded-xl p-4 bg-white">
                <span className="text-[#66001F] mt-0.5">+</span>
                <p className="text-sm text-[#1D2D44]/75">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* =========================
            20. PROJECT LINKS / CTA
        ========================== */}

        <section className="text-center border-t border-[#1D2D44]/15 pt-16">
          <h2 className="text-3xl md:text-4xl font-bold">Explore the Project</h2>
          <p className="text-[#1D2D44]/65 mt-4">View the live site, the code, or head back to the portfolio.</p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href={LIVE_SITE_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#66001F] text-white px-6 py-3 rounded-full hover:bg-[#1D2D44] transition-all duration-300"
            >
              <ExternalLink size={17} />
              View Live Website
            </a>

            {/* <a
              href={GITHUB_REPO_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-[#1D2D44] px-6 py-3 rounded-full hover:bg-[#1D2D44] hover:text-white transition-all duration-300"
            >
              <FaGithub size={17} />
              View GitHub
            </a> */}

            <Link
              to="/"
              className="inline-flex items-center gap-2 border border-[#1D2D44]/30 px-6 py-3 rounded-full hover:bg-[#1D2D44] hover:text-white transition-all duration-300"
            >
              <ArrowLeft size={17} />
              Back to Portfolio
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
