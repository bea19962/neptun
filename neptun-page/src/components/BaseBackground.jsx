import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/_basebackground.scss";

gsap.registerPlugin(ScrollTrigger);

const BaseBackground = () => {
  const videoRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      videoRef.current,
      {
        "clip-path": "circle(100px at center)", // Start with a small circle
      },
      {
        "clip-path": "circle(100% at center)", // Expand to full circle
        scrollTrigger: {
          trigger: ".video-background",
          start: "top top",
          end: "+=11%",
          scrub: true, 
          pin: true,
          markers:true,

        },
        duration: 3,
      }
    );
  }, []);

  return (
    <div className="video-background" ref={videoRef}>
      <video autoPlay loop muted onError={() => console.error("Video failed to load")}>
        <source src="/skazkaprotebya.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default BaseBackground;
