import { useEffect } from "react";
import { gsap } from "gsap";
import "../styles/_projectcard.scss";

const ProjectCard = ({ title, description, media }) => {

  const applyParallax = (event) => {
    // Calculate parallax based on scroll position
    const scrollPosition = window.scrollY;
    const { logo, background, front } = media;

    // Check if media objects are defined
    if (logo && background && front) {
      gsap.to(".project-logo", { x: scrollPosition * (logo.depth / 10), ease: "power1.out" });
      gsap.to(".project-background", { x: scrollPosition * (background.depth / 10), ease: "power1.out" });
      gsap.to(".project-front", { x: scrollPosition * (front.depth / 10), ease: "power1.out" });
    }
  };

  useEffect(() => {
    // Attach the event listener for scroll
    window.addEventListener("scroll", applyParallax);

    return () => {
      window.removeEventListener("scroll", applyParallax);
    };
  }, [media]);

  return (
    <div className="project-card">
      <div className="project-media">
        <img
          className="project-logo"
          src={media.logo.src}
          alt={`${title} logo`}
        />
        <img
          className="project-background"
          src={media.background.src}
          alt={`${title} background`}
        />
        <img
          className="project-front"
          src={media.front.src}
          alt={`${title} front`}
        />
      </div>
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
