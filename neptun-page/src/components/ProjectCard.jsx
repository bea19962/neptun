import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/_projectcard.scss";

const ProjectCard = ({ title, description, media }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="project-card">
      <img
        className="project-logo"
        src={media.logo.src}
        alt={`${title} logo`}
      />
      <motion.img
        className="project-background"
        src={media.background.src}
        alt={`${title} background`}
        style={{
          x: mousePosition.x * 0.02,
          y: mousePosition.y * 0.02,
          scale: 1.1,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 25 }}
      />
      <motion.img
        className="project-front"
        src={media.front.src}
        alt={`${title} front`}
        style={{
          x: mousePosition.x * 0.03,
          y: mousePosition.y * 0.03,
          scale: 1.05,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 25 }}
      />
      <div className="project-description">
        {/* <p>{description}</p> */}
        let me smell your feet!!!............................................................................................................................................................. mmmmmmmmmmmmmmmm... delicious

      </div>
    </div>
  );
};

export default ProjectCard;
