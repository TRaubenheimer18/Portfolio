const nazarene = "https://placehold.co/800x500/AFC6D9/13273F?text=Nazarene+Website";
const branding = "https://placehold.co/800x500/E9D4C3/13273F?text=Branding+Website";
const app = "https://placehold.co/800x500/13273F/ffffff?text=Mobile+App";

const projects = [
  {
    id: 1,
    title: "Nazarene District Website",
    description:
      "A responsive website designed and developed for the Church of the Nazarene District, showcasing churches, ministries, events, and contact information.",
    image: nazarene,
    technologies: ["React", "Tailwind CSS", "Responsive Design"],
    link: "/nazarene",
  },

  {
    id: 2,
    title: "Branding & Events Studio",
    description:
      "A modern branding and events website featuring elegant layouts, service pages, and a clean user experience.",
    image: branding,
    technologies: ["React", "UI Design", "Tailwind CSS"],
    link: "/branding",
  },

  {
    id: 3,
    title: "Mobile Application",
    description:
      "A mobile application prototype designed with a focus on usability, accessibility, and intuitive navigation.",
    image: app,
    technologies: ["Figma", "UX Design", "Prototype"],
    link: "/mobile-app",
  },
];

export default projects;