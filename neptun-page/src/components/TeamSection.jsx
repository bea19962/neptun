import { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import TeamMemberCard from "./TeamMemberCard";
import teamMembers from "../team.json";
import "../styles/_teamsection.scss";

const TeamSection = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      ".team-member-card",
      {
        opacity: 0,
        x: -50, // Starting position (slide in from left)
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".team-section",
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play reverse play reverse",
          markers: true, // For debugging (optional)
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="team-section">
      <h2>Meet Our Team</h2>
      <div className="team-member-cards">
        {teamMembers.map((member) => (
          <TeamMemberCard
            key={member.name}
            name={member.name}
            role={member.role}
            image={member.image}
            socials={member.socials}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
