import "../styles/_basebutton.scss";

const BaseButton = ({ children, round, primary, secondary, className, onClick }) => {
  const buttonClass = `
    base-button
    ${round ? 'round' : ''}
    ${primary ? 'primary' : ''}
    ${secondary ? 'secondary' : ''}
    ${className || ''}
  `;

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default BaseButton;
