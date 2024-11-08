import "../styles/_navlink.scss";

function NavLink({ section, label, activeSection, onLinkClick }) {
  return (
    <button
      className={activeSection === section ? 'active' : ''}
      onClick={() => onLinkClick(section)}
    >
      {label}
    </button>
  );
}

export default NavLink;
