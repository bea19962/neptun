import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/_landingpage.scss";

gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {
  useEffect(() => {
    gsap.fromTo(
      ".text-left",
      {
        x: "-100%", // Start off-screen to the left
      },
      {
        x: "0%", // End in the center
        duration: 1,
        ease: "power4.out",
      }
    );

    gsap.fromTo(
      ".text-right",
      {
        x: "100%", // Start off-screen to the right
      },
      {
        x: "0%", // End in the center
        duration: 1,
        ease: "power4.out",
      }
    );
  }, []);

  const scrollToNextSection = () => {
    document.getElementById("next-section").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="landing-page">
      <div className="content">
        <div className="text-left">
          <h1>Welcome to Neptun Interactive</h1>
        </div>
        <div className="text-right">
          <p>We are a creative studio based in Cologne</p>
        </div>
        <button className="scroll-btn" onClick={scrollToNextSection}>
          Scroll Down
        </button>
      </div>
    </section>
  );
};

export default LandingPage;
