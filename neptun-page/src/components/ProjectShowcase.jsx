import ProjectCard from './ProjectCard';

const projects = [
  { title: "Project 1", description: "Description of project 1", link: "#" },
  { title: "Project 2", description: "Description of project 2", link: "#" },
  { title: "Project 3", description: "Description of project 3", link: "#" },
];

const ProjectShowcase = () => {
  return (
    <section id="projects" className="projects">
      <h2>Our Projects</h2>
      <div className="project-cards">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectShowcase;
