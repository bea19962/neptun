import ProjectCard from './ProjectCard';
import projects from "../projects.json";
import "../styles/_projectsection.scss";

const ProjectShowcase = () => {
  return (
    <section id="projects" className="projects">
      <h2> </h2>
      <div className="project-cards">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            media={project.media}  // Pass media object to ProjectCard
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectShowcase;
