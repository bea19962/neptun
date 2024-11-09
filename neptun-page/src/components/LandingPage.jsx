import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/_landingpage.scss";

gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".landing-page",
          markers: {
            startColor: "yellow",
            endColor: "#42a6e0",
            fontSize: "14px",
          },
          start: "top top",
          end: "+=1", // Limits the scroll-triggered animation to 100px
          pin: true,
          scrub: 1,
        },
      })
      .to(".content", {
        "clip-path": "polygon(-100% 0%, 100% 0%, 100% 100%, -25% 100%)",
        ease: "none",
        stagger: 0.5,
      });
  }, []);
  return (
    <div className="landing-page">
      <div className="content">
        <h1>Content Revealed Below</h1>
        <p>Welcome to the hidden content.</p>
      </div>
    </div>
  );
};

export default LandingPage;