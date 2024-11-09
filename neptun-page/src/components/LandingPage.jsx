import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/_landingpage.scss";

gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {
  useEffect(() => {
    gsap.fromTo(
      ".video-background",
      { clipPath: "circle(-200px at 50% 50%)" },
      {
        clipPath: "circle(100% at 50% 50%)",
        duration: 3,
        ease: "power4.inOut",
        scrollTrigger: { trigger: ".video-background", scrub: 1},
      }
    );
  }, []);

  const scrollToNextSection = () => {
    document
      .getElementById("next-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="landing-page">
      <div className="video-background">
        <video autoPlay loop muted>
          <source src="/skazkaprotebya.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="content">
        <div className="text-left">
          <h3>Welcome to</h3>
          <h1>Neptun Interactive</h1>
        </div>
        <div className="text-right">
          <h3>an Indie-Media developer team based in Cologne Germany</h3>
        </div> 
      </div>
        <button className="scroll-btn" onClick={scrollToNextSection}>
          Scroll Down
        </button>
    </section>
  );
};

export default LandingPage;
