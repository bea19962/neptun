import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/_landingpage.scss";

gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {
  useEffect(() => {
    gsap.fromTo(
      ".text-left",
      { x: "-100%" },
      { x: "0%", duration: 1, ease: "power4.out" }
    );

    gsap.fromTo(
      ".text-right",
      { x: "100%" },
      { x: "0%", duration: 1, ease: "power4.out" }
    );

    gsap.fromTo(
      ".video-background",
      { clipPath: "circle(-200px at 50% 50%)" },
      {
        clipPath: "circle(100% at 50% 50%)",
        duration: 3,
        ease: "power4.inOut",
        scrollTrigger: { trigger: ".video-background", scrub: 1 },
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
