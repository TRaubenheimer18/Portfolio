import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import nazareneWebsite from "../assets/images/Nazarene-website.png";
import nazareneHomepage from "../assets/images/nazarene-homepage.png";
import nazareneAbout from "../assets/images/nazarene-about.png";
import nazareneChurches from "../assets/images/nazarene-churches.png";
import nazareneContact from "../assets/images/nazarene-contact.png";
import nazareneHomeMobile from "../assets/images/nazarene-home-mobile.PNG";
import nazareneAboutMobile from "../assets/images/nazarene-about-mobile.PNG";
import nazareneChurchesMobile from "../assets/images/nazarene-churches-mobile.PNG";
import nazareneContactMobile from "../assets/images/nazarene-contact-mobile.PNG";
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
  { name: "React", text: "Used to create the component-based interface and structure the website.", icon: <ReactIcon size={30} /> },
  { name: "JavaScript", text: "Used to add functionality and interactive behaviour.", icon: <JavaScriptIcon size={30} /> },
  { name: "Tailwind CSS", text: "Used to build responsive layouts and maintain consistent styling.", icon: <TailwindIcon size={30} /> },
  { name: "Visual Studio Code", text: "Used as the primary code editor throughout development.", icon: <VsCodeIcon size={30} /> },
  { name: "Hostinger", text: "Used to host and deploy the website.", icon: <HostingerIcon size={30} /> },
  { name: "GitHub", text: "Used for version control and managing project changes.", icon: <GitHubIcon size={30} /> },
];

const finalDesignItems = [
  { title: "Homepage", image: nazareneHomepage, mobileImage: nazareneHomeMobile },
  { title: "About / District", image: nazareneAbout, mobileImage: nazareneAboutMobile, reverse: true },
  { title: "Church Section", image: nazareneChurches, mobileImage: nazareneChurchesMobile },
  { title: "Contact", image: nazareneContact, mobileImage: nazareneContactMobile, reverse: true },
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

function HostingerIcon({ size = 30 }) {
  return (
    <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" fill="#673DE6" viewBox="0 0 24 24">
      <path d="M16.415 0v7.16l5.785 3.384V2.949zM1.8 0v11.237h18.815L14.89 8.09l-7.457-.003V3.024zm14.615 20.894v-5.019l-7.514-.005c.007.033-5.82-3.197-5.82-3.197l19.119.091V24zM1.8 13.551v7.343l5.633 2.949v-6.988z"/>
    </svg>
  );
}

function VsCodeIcon({ size = 30 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <path d="M30.865 3.617L24.036 0.496a1.55 1.55 0 0 0-1.765 0.329L0.875 21.031a1.044 1.044 0 0 0-0.068 1.469c0.021 0.025 0.047 0.047 0.068 0.068l1.833 1.677a1.044 1.044 0 0 0 1.339 0.063L28.781 5.896c0.459-0.349 1.115-0.255 1.459 0.208 0.161 0.213 0.235 0.479 0.208 0.74v-0.021v18.359c0 0.541-0.443 0.979-0.984 0.979-0.235 0-0.459-0.083-0.635-0.235l-2.276-1.943a1.044 1.044 0 0 0-1.339 0.016L23.063 25.88a1.044 1.044 0 0 0-0.016 1.479c0.005 0.005 0.011 0.011 0.016 0.016l4.219 3.609c0.541 0.459 1.197 0.713 1.885 0.713h0.011c1.62 0 2.933-1.317 2.933-2.937V5.24a1.556 1.556 0 0 0-0.943-1.427zM22.667 19.459L9.677 9.219l12.989 14.803z" fill="#2489CA"/>
      <path d="M24.036 31.504a1.543 1.543 0 0 1-1.765-0.333L0.875 10.969a1.044 1.044 0 0 1 0-1.469l1.833-1.677a1.044 1.044 0 0 1 1.339-0.063L28.781 26.104c0.459 0.349 0.547 1.005 0.197 1.464-0.161 0.213-0.401 0.355-0.661 0.391l-4.281-0.459z" fill="#2489CA"/>
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

function TechnologyCard({ icon, name, description, light = true }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className={light ? "border-t border-[#1D2D44]/15 pt-6" : "border-t border-[#FFFCF6]/20 pt-6"}
    >
      <div className={`mb-5 ${light ? "text-[#66001F]" : "text-[#A2C0DD]"}`}>{icon}</div>
      <h3 className={`text-xl font-semibold ${light ? "text-[#1D2D44]" : "text-[#FFFCF6]"}`}>{name}</h3>
      <p className={`mt-3 leading-7 ${light ? "text-[#1D2D44]/65" : "text-[#FFFCF6]/65"}`}>{description}</p>
    </motion.div>
  );
}

function SectionHeading({ icon, title, size = "lg", light = false }) {
  return (
    <div className="mb-14">
      <div className="flex items-center gap-3">
        {icon}
        <h2 className={size === "lg" ? "text-3xl md:text-4xl font-bold" : "text-2xl font-bold"}>{title}</h2>
      </div>
      <div className={`h-1 w-12 mt-5 ${light ? "bg-[#A2C0DD]" : "bg-[#66001F]"}`} />
    </div>
  );
}

// Light (cream/white) theme by default — this is the theme used everywhere
// the sitemap now appears. Pass `light={false}` if it's ever placed on a
// dark navy background again.
function SitemapNode({ node, depth = 0, light = true }) {
  return (
    <div
      className={
        depth === 0
          ? ""
          : light
          ? "ml-6 border-l border-[#1D2D44]/15 pl-6"
          : "ml-6 border-l border-[#A2C0DD]/30 pl-6"
      }
    >
      <div
        className={`inline-block rounded-lg px-4 py-1.5 my-1 text-sm ${
          depth === 0
            ? light
              ? "bg-[#1D2D44] text-[#FFFCF6] font-semibold px-5 py-2"
              : "bg-[#A2C0DD] text-[#1D2D44] font-semibold px-5 py-2"
            : light
            ? "border border-[#1D2D44]/15 text-[#1D2D44]/75"
            : "border border-[#FFFCF6]/20 text-[#FFFCF6]/80"
        }`}
      >
        {node.label}
      </div>
      {node.children?.map((child) => (
        <SitemapNode key={child.label} node={child} depth={depth + 1} light={light} />
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

      <section className="px-6 md:px-10 pt-32 pb-20 bg-[#FFFCF6]">
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
              {["Full Stack Development", "React", "Responsive Web"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 rounded-full border border-[#1D2D44]/15 text-xs sm:text-sm font-medium text-[#1D2D44]/75"
                >
                  {tag}
                </span>
              ))}
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-[#66001F]/30 bg-[#66001F]/8 text-xs sm:text-sm font-medium text-[#66001F]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#66001F] animate-pulse" />
                In Progress
              </span>
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

      <section className="border-y border-[#1D2D44]/15 bg-[#FFFCF6] text-[#1D2D44]">
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

      <main>
        {/* =========================
            3. THE CONTEXT
        ========================== */}

        <section className="grid lg:grid-cols-[260px_1fr] gap-12 px-6 md:px-10 py-24 bg-[#FFFCF6] max-w-7xl mx-auto">
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

        <section className="py-24 bg-[#1D2D44] text-[#FFFCF6]">
          <div className="grid lg:grid-cols-[260px_1fr] gap-12 max-w-7xl mx-auto px-6 md:px-10">
          <div>
            <div className="flex items-center gap-3">
              <Layers size={22} />
              <h2 className="text-2xl font-bold">The Challenge</h2>
            </div>
            <div className="h-1 w-12 bg-[#A2C0DD] mt-5" />
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Creating Clarity Across a Distributed Organisation</h3>
            <p className="text-lg leading-8 text-[#FFFCF6]/70 max-w-4xl mb-8">
              The core challenge was organising a broad range of organisational and church-related
              information into a website that stayed easy to navigate. Key considerations for the
              project included:
            </p>
            <ul className="space-y-3 max-w-3xl">
              {challengePoints.map((point) => (
                <li key={point} className="flex gap-3 text-[#FFFCF6]/70">
                  <span className="text-[#A2C0DD] mt-1">—</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          </div>
        </section>

        {/* =========================
            5. PROJECT GOALS
        ========================== */}

        <section className="px-6 md:px-10 py-24 bg-[#FFFCF6] text-[#1D2D44] max-w-7xl mx-auto">
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

        <section className="py-24 bg-[#A2C0DD]/20 text-[#1D2D44]">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
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
          </div>
        </section>

        {/* =========================
            7. DESIGN APPROACH
        ========================== */}

        <section className="grid lg:grid-cols-[260px_1fr] gap-12 px-6 md:px-10 py-24 bg-[#FFFCF6] text-[#1D2D44] max-w-7xl mx-auto">
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

        <section className="py-24 bg-[#1D2D44] text-[#FFFCF6]">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
          <SectionHeading icon={<LayoutGrid size={24} />} title="Organising the Experience" light />
          <p className="text-lg leading-8 text-[#FFFCF6]/70 max-w-3xl mb-10">
            The website was structured around the information users are most likely to need,
            separating organisational information from practical church and community content.
          </p>
          <p className="text-xs uppercase tracking-wider text-[#A2C0DD] font-semibold mb-5">
            Site Structure
          </p>
          <div className="border border-[#FFFCF6]/20 rounded-2xl p-6 md:p-10 bg-[#FFFCF6]/5 overflow-x-auto">
            <SitemapNode node={sitemap} light={false} />
          </div>
          </div>
        </section>

        {/* =========================
            10. COLOUR PALETTE
        ========================== */}

        <section className="py-24 bg-[#FFFCF6] text-[#1D2D44]">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
          <SectionHeading icon={<Palette size={24} />} title="Colour Palette" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {colours.map(({ name, hex, purpose }) => (
              <div key={hex} className="border border-[#1D2D44]/10 rounded-2xl overflow-hidden bg-white">
                <div className="h-24" style={{ backgroundColor: hex }} />
                <div className="p-5">
                  <h3 className="font-bold text-sm text-[#1D2D44]">{name}</h3>
                  <p className="text-xs text-[#66001F] mb-2 font-mono">{hex}</p>
                  <p className="text-xs text-[#1D2D44]/60 leading-5">{purpose}</p>
                </div>
              </div>
            ))}
          </div>
          </div>
        </section>

        {/* =========================
            11. TYPOGRAPHY
        ========================== */}

        <section className="px-6 md:px-10 py-24 bg-[#FFFCF6] text-[#1D2D44] max-w-7xl mx-auto">
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

        <section className="py-24 bg-[#A2C0DD]/20 text-[#1D2D44]">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
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
          </div>
        </section>

        {/* =========================
            13. RESPONSIVE DESIGN
        ========================== */}

        <section className="px-6 md:px-10 py-24 bg-[#FFFCF6] text-[#1D2D44] max-w-7xl mx-auto">
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
                <PhoneFrame image={nazareneHomeMobile} alt="Nazarene District tablet view" label="Tablet" />
              </div>
              <div>
                <div className="mb-5 flex items-center gap-3 text-sm font-semibold text-[#66001F]">
                  <Smartphone size={19} /> Mobile
                </div>
                <PhoneFrame image={nazareneHomeMobile} alt="Nazarene District mobile view" label="Mobile" />
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

        <section className="px-6 md:px-10 py-24 bg-[#FFFCF6] text-[#1D2D44] max-w-7xl mx-auto">
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
                  <span className="text-[#66001F]">{icon}</span>
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

        <section className="px-6 md:px-10 py-24 bg-[#FFFCF6] text-[#1D2D44] max-w-7xl mx-auto">
          <SectionHeading icon={<Layers size={24} />} title="Technologies" />
          <div className="grid gap-x-12 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
            {technologies.map(({ icon, name, text }) => (
              <TechnologyCard key={name} icon={icon} name={name} description={text} light />
            ))}
          </div>
        </section>

        {/* =========================
            16. FINAL DESIGN
        ========================== */}

        <section className="px-6 md:px-10 py-24 bg-[#FFFCF6] text-[#1D2D44] max-w-7xl mx-auto">
          <SectionHeading icon={<ImageIcon size={24} />} title="The finished interface." />
          {finalDesignItems.map(({ title, image, mobileImage, reverse }, index) => (
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
                    <div className="order-2 lg:order-1 lg:col-span-3"><PhoneFrame image={mobileImage} alt={`Nazarene District ${title} mobile`} label={`${title} mobile`} /></div>
                    <div className="order-1 lg:order-2 lg:col-span-9"><LaptopFrame image={image} alt={`Nazarene District ${title} page`} label={title} /></div>
                  </>
                ) : (
                  <>
                    <div className="lg:col-span-9"><LaptopFrame image={image} alt={`Nazarene District ${title} page`} label={title} /></div>
                    <div className="lg:col-span-3"><PhoneFrame image={mobileImage} alt={`Nazarene District ${title} mobile`} label={`${title} mobile`} /></div>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </section>

        {/* =========================
            17. CHALLENGES & SOLUTIONS
        ========================== */}

        <section className="px-6 md:px-10 py-24 bg-[#FFFCF6] text-[#1D2D44] max-w-7xl mx-auto">
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

        <section className="grid lg:grid-cols-[260px_1fr] gap-12 px-6 md:px-10 py-24 bg-[#FFFCF6] text-[#1D2D44] max-w-7xl mx-auto">
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

        <section className="py-24 bg-[#A2C0DD]/20 text-[#1D2D44]">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
          <SectionHeading icon={<ArrowRight size={24} />} title="Where I Would Take It Next" />
          <div className="grid sm:grid-cols-2 gap-4">
            {futureImprovements.map((item) => (
              <div key={item} className="flex gap-3 items-start border border-[#1D2D44]/10 rounded-xl p-4 bg-[#FFFCF6]">
                <span className="text-[#66001F] mt-0.5">+</span>
                <p className="text-sm text-[#1D2D44]/75">{item}</p>
              </div>
            ))}
          </div>
          </div>
        </section>

        {/* =========================
            20. PROJECT LINKS / CTA
        ========================== */}

        <section className="py-24 bg-[#66001F] text-[#FFFCF6] text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#FFFCF6]">Explore the Project</h2>
          <p className="text-[#FFFCF6]/60 mt-4">View the live site, the code, or head back to the portfolio.</p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href={LIVE_SITE_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-[#FFFCF6] px-6 py-4 font-semibold text-[#FFFCF6] hover:bg-[#FFFCF6] hover:text-[#66001F] transition-all duration-300"
            >
              <ExternalLink size={17} />
              View Live Website
            </a>

            <Link
              to="/"
              className="inline-flex items-center gap-2 border border-[#FFFCF6]/40 px-6 py-4 font-semibold text-[#FFFCF6] hover:bg-[#FFFCF6] hover:text-[#66001F] transition-all duration-300"
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