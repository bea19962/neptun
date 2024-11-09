import "../styles/_fliplink.scss";
import { motion } from "framer-motion";

export const RevealLinks = () => {
  return (
    <section className="silly-links">
      <FlipLink href="#">Twitter</FlipLink>
      <FlipLink href="#">Linkedin</FlipLink>
      <FlipLink href="#">Facebook</FlipLink>
      <FlipLink href="#">Instagram</FlipLink>
    </section>
  );
};

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="motion-a"
    >
      <div>
        {children.split("").map((letter, index) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * index,
            }}
            key={index}
          >
            {letter}
          </motion.span>
        ))}
      </div>
      <div className="motion-div-second">
        {children.split("").map((letter, index) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: "0",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * index,
            }}
            key={index}
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};
