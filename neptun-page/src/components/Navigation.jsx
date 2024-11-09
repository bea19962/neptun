import { useState } from "react";
import NavLink from "./NavLink";
import "../styles/_navbar.scss";

const Navbar = ({ activeSection, onLinkClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
      <img src="../src/assets/small-logo.JPG" alt="Girl in a jacket" height="50" width="55"/>
      </div>
      <div
        className={`hamburger ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
      <NavLink
          section="projects"
          label="Projects"
          activeSection={activeSection}
          onLinkClick={onLinkClick}
        />
        <NavLink
          section="team"
          label="Team"
          activeSection={activeSection}
          onLinkClick={onLinkClick}
        />
        <NavLink
          section="contact"
          label="Contact"
          activeSection={activeSection}
          onLinkClick={onLinkClick}
        />
      </div>
    </nav>
  );
};

export default Navbar;
