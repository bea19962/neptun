import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/_landingpage.scss";
import BaseButton from "./BaseButton";

gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {
  const maskRef = useRef();

  const scrollToNextSection = () => {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    gsap.to(maskRef.current, {
      scale: 30,  // Scale factor for enlarging the image
      duration: 1,
      transformOrigin: "center center", // Origin of scaling
      scrollTrigger: {
        trigger: maskRef.current,
        start: "top top", // When the mask hits the top of the viewport
        end: "+=100%", // How far the animation should last
        scrub: true, // Scroll-linked animation
        pin: true, // Pin the image in place as it animates
        pinSpacing: false, // Prevent additional spacing
        markers:true,
      }
    });
  }, []);

  return (
    <section className="landing-page">
      <div id="mask" ref={maskRef}>
        <img
          src="../src/assets/vecteezy_black-square-png_1209957.png"
          alt="Mask"
        />
      </div>
      <div className="content">
        <div className="text-left">
          <h1>Welcome to Neptun Interactive</h1>
        </div>
        <div className="text-right">
          <p>We are a studio based in Cologne</p>
        </div>
        <BaseButton onClick={scrollToNextSection}>Scroll Down</BaseButton>
      </div>
    </section>
  );
};

export default LandingPage;
