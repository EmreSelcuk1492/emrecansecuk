import React, { useState, useEffect } from 'react';
import LazyImage from './LazyImage';

const ProjectsSection: React.FC = () => {
  const [imageAssets, setImageAssets] = useState<Record<string, string>>({});

  // Dynamically import images only when needed
  useEffect(() => {
    const loadImages = async () => {
      try {
        const [
          oikolexDemo,
          jennaiDemo,
          ad4UDemo,
          manuscriptcheckDemo,
          portfolioDemo,
          sixDevsDemo
        ] = await Promise.all([
          import('../assets/demo/Oikolex-demo.png'),
          import('../assets/demo/jenni.ai.demo.png'),
          import('../assets/demo/ad4U.png'),
          import('../assets/demo/Manuscriptcheck-demo.png'),
          import('../assets/demo/Porfolio.demo.png'),
          import('../assets/demo/6devs1proj.demo.png')
        ]);

        setImageAssets({
          oikolex: oikolexDemo.default,
          jenni: jennaiDemo.default,
          ad4U: ad4UDemo.default,
          manuscript: manuscriptcheckDemo.default,
          portfolio: portfolioDemo.default,
          sixDevs: sixDevsDemo.default
        });
      } catch (error) {
        console.error('Error loading images:', error);
      }
    };

    loadImages();
  }, []);

  const projects = [
    {
      id: 1,
      title: "ManuscriptCheck.AI",
      headline: "AI-powered peer-review platform",
      location: "Remote • Feb 2025 – Present",
      description: "Checks manuscripts against journal criteria and returns editor-ready feedback in minutes.",
      imageKey: "manuscript",
      link: "https://manuscriptcheck.ai"
    },
    {
      id: 2,
      title: "EmreCanSelcuk",
      headline: "Living, auto-published dev journey",
      location: "Global • Jun 2025",
      description: "Publishes learning progress from Obsidian vault to web.",
      imageKey: "portfolio",
      link: "https://emrecanselcuk.com"
    },
    {
      id: 3,
      title: "Oikolex",
      headline: "Research-grade Greek lexicon & morphology analyzer",
      location: "Remote • Oct 2024 – Present",
      description: "Comprehensive digital lexicon with morphological analysis for Classical & Biblical Greek.",
      imageKey: "oikolex",
      link: "https://oikolex.com"
    },
    {
      id: 4,
      title: "Jenni.AI Internship",
      headline: "SWE Intern at AI writing platform",
      location: "Seoul, SK • Jun 2025 – Jan 2026",
      description: "Building advanced AI-powered writing and research tools for millions of users.",
      imageKey: "jenni",
      link: "https://jenni.ai"
    },
    {
      id: 5,
      title: "ad4U",
      headline: "Social media reach enhancement",
      location: "Remote • Aug 2024",
      description: "Platform for optimizing and scheduling social media content across multiple channels.",
      imageKey: "ad4U",
      link: "https://github.com/emrecanselcuk/ad4U"
    },
    {
      id: 6,
      title: "6devs1proj",
      headline: "Software engineering showcase",
      location: "Remote • Nov 2024",
      description: "Collaborative showcase featuring six developers working on innovative software solutions.",
      imageKey: "sixDevs",
      link: "https://6devs1proj.com"
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-container">
                {imageAssets[project.imageKey] ? (
                  <LazyImage
                    src={imageAssets[project.imageKey]}
                    alt={`${project.title} Demo`}
                    className="project-image"
                  />
                ) : (
                  <div className="project-image-placeholder">
                    <div>Loading...</div>
                  </div>
                )}
              </div>
              
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-headline">{project.headline}</p>
                  <p className="project-location">{project.location}</p>
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <div className="project-footer">
                  <a
                    href={project.link}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>View Project</span>
                    <span className="link-arrow">↗</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 