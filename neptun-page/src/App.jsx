import { useEffect, useRef, useState } from "react";
import "../src/styles/main.scss";
import Navbar from "./components/Navigation";
import LandingPage from "./components/LandingPage";
import ProjectShowcase from "./components/ProjectShowcase";
import AboutTeam from "./components/TeamSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import BaseBackground from "./components/BaseBackground";

function App() {
  const sections = ["home", "projects", "team", "contact"];
  const [activeSection, setActiveSection] = useState(sections[0]);

  const sectionRefs = sections.reduce((acc, section) => {
    acc[section] = useRef(null);
    return acc;
  }, {});

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.25,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      if (sectionRefs[section].current) {
        observer.observe(sectionRefs[section].current);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (sectionRefs[section].current) {
          observer.unobserve(sectionRefs[section].current);
        }
      });
    };
  }, [sectionRefs, sections]);

  const scrollToSection = (section) => {
    sectionRefs[section].current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <BaseBackground/>
      <Navbar activeSection={activeSection} onLinkClick={scrollToSection} />
      <section id="home" ref={sectionRefs.home}>
        <LandingPage />
      </section>
      <section id="projects" ref={sectionRefs.projects}>
        <ProjectShowcase />
      </section>
      <section id="team" ref={sectionRefs.team}>
        <AboutTeam />
      </section>
      <section id="contact" ref={sectionRefs.contact}>
        <ContactForm />
      </section>
      <Footer />
    </div>
  );
}

export default App;
