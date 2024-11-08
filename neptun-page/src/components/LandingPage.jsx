import "../styles/_landingpage.scss";
import BaseButton from "./BaseButton";

const LandingPage = () => {
  const scrollToNextSection = () => {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="landing-page">
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
