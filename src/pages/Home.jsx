import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import FeaturedProjects from "../components/FeaturedProjects";
import Skills from "../components/Skills";
import ResumeCTA from "../components/ResumeCTA";
import ContactCTA from "../components/ContactCTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <FeaturedProjects />
      <Skills />
      {/* <ResumeCTA />
      <ContactCTA />
      <Footer /> */}
    </>
  );
}
