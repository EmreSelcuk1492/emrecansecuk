import React from 'react';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "Project One",
      description: "A brief description of the project and its key features.",
      image: "https://via.placeholder.com/400x200"
    },
    {
      id: 2,
      title: "Project Two", 
      description: "A brief description of the project and its key features.",
      image: "https://via.placeholder.com/400x200"
    },
    {
      id: 3,
      title: "Project Three",
      description: "A brief description of the project and its key features.", 
      image: "https://via.placeholder.com/400x200"
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <img 
                src={project.image} 
                alt={project.title} 
                className="project-image"
              />
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 