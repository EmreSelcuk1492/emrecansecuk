import React from 'react';

// Import demo images
import oikolexDemo from '../assets/demo/Oikolex-demo.png';
import jennaiDemo from '../assets/demo/jenni.ai.demo.png';
import ad4UDemo from '../assets/demo/ad4U.png';
import manuscriptcheckDemo from '../assets/demo/Manuscriptcheck-demo.png';
import portfolioDemo from '../assets/demo/Porfolio.demo.png';
import sixDevsDemo from '../assets/demo/6devs1proj.demo.png';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "ManuscriptCheck.AI",
      headline: "AI-powered peer-review platform",
      location: "Remote • Feb 2025 – Present",
      description: "Checks manuscripts against journal criteria and returns editor-ready feedback in minutes.",
      image: manuscriptcheckDemo,
      link: "https://manuscriptcheck.ai"
    },
    {
      id: 2,
      title: "EmreCanSelcuk",
      headline: "Living, auto-published dev journey",
      location: "Global • Jun 2025",
      description: "Publishes learning progress from Obsidian vault to web.",
      image: portfolioDemo,
      link: "https://emrecanselcuk.com"
    },
    {
      id: 3,
      title: "6Devs1Project",
      headline: "Agentic-coding community experiment",
      location: "Boston, MA • Jun 2025",
      description: "Six devs co-creating an app entirely with AI agents.",
      image: sixDevsDemo,
      link: "https://www.6devs1project.com/"
    },
    {
      id: 4,
      title: "Ad4You",
      headline: "30-second hyper-personalized video ads",
      location: "MIT, MA • Feb 2025",
      description: "Turns Instagram photos into fully rendered video ads.",
      image: ad4UDemo,
      link: "https://www.linkedin.com/posts/emre-selcuk_mit-ai-everydai-activity-7297628698235518976-9719"
    },
    {
      id: 5,
      title: "Jenni.AI",
      headline: "AI thesis-writing assistant",
      location: "Remote • Sep 2024 – Dec 2024",
      description: "Thesis-writing helpers and summarizers for students.",
      image: jennaiDemo,
      link: "https://jenni.ai/thesis-writing-assistant"
    },
    {
      id: 6,
      title: "Oikolex",
      headline: "Transparent housing reviews",
      location: "Seoul, SK • Apr 2024",
      description: "Seven-day MVP mapping crowd-sourced housing reviews for London.",
      image: oikolexDemo,
      link: "https://oikolex.com"
    }
  ];

  const cardStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    height: '100%',
    minHeight: '480px', // Ensure consistent height like the CSS
    maxHeight: '500px', // Prevent cards from getting too tall
  };

  const imageContainerStyle = {
    flex: '2',
    minHeight: '300px',
    maxHeight: '350px',
    overflow: 'hidden' as const,
  };

  const contentStyle = {
    flex: '1',
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'space-between',
    minHeight: '130px',
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-timeline-grid">
          {projects.map((project) => (
            <a 
              key={project.id} 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-card-modern project-card-link"
              style={cardStyle}
            >
              <div className="project-image-container" style={imageContainerStyle}>
                <img 
                  src={project.image} 
                  alt={`${project.title} Platform`} 
                  className="project-image"
                />
                <div className="project-overlay">
                  <h3 className="project-title-overlay">{project.title}</h3>
                  <p className="project-location" style={{
                    color: 'var(--color-accent-light)',
                    fontWeight: '600',
                    textShadow: '0 2px 4px rgba(0, 0, 0, 0.7)'
                  }}>
                    {project.location}
                  </p>
                </div>
              </div>
              <div className="project-content-modern" style={contentStyle}>
                <div>
                  <h4 className="project-headline" style={{ 
                    marginBottom: '0.75rem',
                    fontSize: 'var(--font-size-xl)',
                    fontWeight: '700',
                    lineHeight: '1.3'
                  }}>
                    {project.headline}
                  </h4>
                  <p className="project-description" style={{
                    fontSize: 'var(--font-size-base)',
                    lineHeight: '1.6',
                    color: 'var(--color-text-secondary)',
                    margin: '0',
                    fontWeight: '700'
                  }}>
                    {project.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 