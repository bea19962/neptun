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
        x: -50,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".team-section",
          start: "top 100%",
          end: "top 5%",
          toggleActions: "play reverse play reverse",
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
      <p> After 6 years of successful collaboration in our studies, we founded our studio in January 2023. Aside of the production of our own products, we also offer fast and effective supervision or practical solutions for media-creation projects.</p>
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
