import { useEffect } from "react";
import '../styles/_customcursor.scss';

const Cursor = () => {
  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor");

    const updateCursor = (e) => {
      cursor.style.left = `${e.pageX}px`;
      cursor.style.top = `${e.pageY}px`;
    };

    const handleHover = () => {
      cursor.classList.add("custom-cursor-enlarge");
    };

    const handleHoverOut = () => {
      cursor.classList.remove("custom-cursor-enlarge");
    };

    document.body.addEventListener("mousemove", updateCursor);

    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
      button.addEventListener("mouseenter", handleHover);
      button.addEventListener("mouseleave", handleHoverOut);
    });

    return () => {
      document.body.removeEventListener("mousemove", updateCursor);
      buttons.forEach((button) => {
        button.removeEventListener("mouseenter", handleHover);
        button.removeEventListener("mouseleave", handleHoverOut);
      });
    };
  }, []);

  return <div className="custom-cursor"></div>;
};

export default Cursor;
