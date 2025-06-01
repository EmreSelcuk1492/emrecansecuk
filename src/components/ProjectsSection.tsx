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

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-timeline-grid-responsive">
          {projects.map((project) => (
            <a 
              key={project.id} 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-card-responsive"
            >
              <div className="project-image-container-responsive">
                <img 
                  src={project.image} 
                  alt={`${project.title} Platform`} 
                  className="project-image-responsive"
                />
                <div className="project-overlay-responsive">
                  <h3 className="project-title-overlay-responsive">{project.title}</h3>
                  <p className="project-location-responsive">
                    {project.location}
                  </p>
                </div>
              </div>
              <div className="project-content-responsive">
                <div>
                  <h4 className="project-headline-responsive">
                    {project.headline}
                  </h4>
                  <p className="project-description-responsive">
                    {project.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style>
        {`
          .projects-timeline-grid-responsive {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
            gap: 2rem;
            padding: 0;
            max-width: 1400px;
            margin: 0 auto;
          }

          .project-card-responsive {
            display: flex;
            flex-direction: column;
            height: 100%;
            min-height: 480px;
            max-height: 500px;
            background: var(--color-bg-primary);
            border-radius: var(--radius-lg);
            overflow: hidden;
            transition: all var(--transition-base);
            border: 1px solid var(--color-border);
            text-decoration: none;
            color: inherit;
            box-shadow: var(--shadow-md);
          }

          .project-card-responsive:hover {
            transform: translateY(-8px);
            box-shadow: var(--shadow-xl);
            border-color: var(--color-accent-light);
          }

          .project-image-container-responsive {
            flex: 2;
            min-height: 300px;
            max-height: 350px;
            overflow: hidden;
            position: relative;
          }

          .project-image-responsive {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: all var(--transition-base);
            filter: blur(1px);
          }

          .project-card-responsive:hover .project-image-responsive {
            transform: scale(1.05);
            filter: blur(1.5px);
          }

          .project-overlay-responsive {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: linear-gradient(transparent, rgba(0, 0, 0, 0.85));
            padding: 2rem 1.5rem 1.5rem;
            color: white;
            text-align: center;
          }

          .project-title-overlay-responsive {
            font-size: var(--font-size-3xl);
            font-weight: 800;
            margin: 0 0 0.5rem 0;
            text-shadow: 
              0 0 20px rgba(139, 0, 139, 0.8),
              0 0 40px rgba(139, 0, 139, 0.4),
              0 2px 8px rgba(0, 0, 0, 0.9);
            color: var(--color-accent);
            letter-spacing: 0.5px;
            position: relative;
            transition: all var(--transition-base);
            cursor: pointer;
          }

          .project-card-responsive:hover .project-title-overlay-responsive {
            text-shadow: 
              0 0 30px rgba(139, 0, 139, 1),
              0 0 60px rgba(139, 0, 139, 0.6),
              0 0 90px rgba(139, 0, 139, 0.4),
              0 2px 8px rgba(0, 0, 0, 0.9);
            transform: translateY(-2px);
            letter-spacing: 0.8px;
          }

          .project-location-responsive {
            color: #cccccc;
            font-weight: 700;
            text-shadow: 
              0 2px 6px rgba(0, 0, 0, 0.8);
            margin: 0;
            font-size: 0.8rem;
            letter-spacing: 0.2px;
            text-transform: uppercase;
            transition: all var(--transition-base);
            cursor: pointer;
          }

          .project-card-responsive:hover .project-location-responsive {
            color: #ffffff;
            text-shadow: 
              0 0 15px rgba(255, 255, 255, 0.5),
              0 2px 6px rgba(0, 0, 0, 0.8);
            transform: translateY(-1px);
            letter-spacing: 0.4px;
          }

          .project-content-responsive {
            flex: 1;
            padding: 1.5rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-height: 130px;
          }

          .project-headline-responsive {
            margin-bottom: 0.75rem;
            font-size: var(--font-size-xl);
            font-weight: 700;
            line-height: 1.3;
            color: var(--color-text-primary);
          }

          .project-description-responsive {
            font-size: var(--font-size-base);
            line-height: 1.6;
            color: var(--color-accent);
            margin: 0;
            font-weight: 700;
          }

          /* Tablet Responsive */
          @media (max-width: 1024px) {
            .projects-timeline-grid-responsive {
              grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
              gap: 1.5rem;
              padding: 0 1rem;
            }

            .project-card-responsive {
              min-height: 450px;
              max-height: 470px;
            }

            .project-image-container-responsive {
              min-height: 250px;
              max-height: 300px;
            }
          }

          /* Mobile Responsive */
          @media (max-width: 768px) {
            .projects-timeline-grid-responsive {
              grid-template-columns: 1fr;
              gap: 1.5rem;
              padding: 0 0.5rem;
              max-width: 500px;
            }

            .project-card-responsive {
              min-height: 400px;
              max-height: 420px;
              margin: 0 auto;
              width: 100%;
              border-radius: var(--radius-md);
            }

            .project-image-container-responsive {
              flex: 1.5;
              min-height: 200px;
              max-height: 240px;
            }

            .project-content-responsive {
              flex: 1;
              padding: 1.25rem;
              min-height: 120px;
            }

            .project-title-overlay-responsive {
              font-size: var(--font-size-2xl);
              font-weight: 800;
              text-shadow: 
                0 0 18px rgba(139, 0, 139, 0.8),
                0 0 36px rgba(139, 0, 139, 0.4),
                0 2px 8px rgba(0, 0, 0, 0.9);
              color: var(--color-accent);
              letter-spacing: 0.4px;
              transition: all var(--transition-base);
              cursor: pointer;
            }

            .project-headline-responsive {
              font-size: var(--font-size-lg);
              margin-bottom: 0.5rem;
            }

            .project-description-responsive {
              font-size: 0.95rem;
              line-height: 1.5;
            }

            .project-overlay-responsive {
              padding: 1.5rem 1.25rem 1.25rem;
            }

            .project-location-responsive {
              font-size: 0.75rem;
              font-weight: 700;
              color: #cccccc;
              text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
              letter-spacing: 0.1px;
              text-transform: uppercase;
              transition: all var(--transition-base);
              cursor: pointer;
            }
          }

          /* Small Mobile Responsive */
          @media (max-width: 480px) {
            .projects-timeline-grid-responsive {
              padding: 0 0.25rem;
              gap: 1.25rem;
              max-width: 100%;
            }

            .project-card-responsive {
              min-height: 360px;
              max-height: 380px;
              border-radius: 12px;
            }

            .project-image-container-responsive {
              min-height: 180px;
              max-height: 200px;
            }

            .project-content-responsive {
              padding: 1rem;
              min-height: 100px;
            }

            .project-title-overlay-responsive {
              font-size: var(--font-size-xl);
              font-weight: 800;
              text-shadow: 
                0 0 15px rgba(139, 0, 139, 0.8),
                0 0 30px rgba(139, 0, 139, 0.4),
                0 2px 6px rgba(0, 0, 0, 0.9);
              color: var(--color-accent);
              letter-spacing: 0.3px;
              transition: all var(--transition-base);
              cursor: pointer;
            }

            .project-headline-responsive {
              font-size: var(--font-size-base);
              margin-bottom: 0.4rem;
            }

            .project-description-responsive {
              font-size: 0.9rem;
              line-height: 1.4;
            }

            .project-overlay-responsive {
              padding: 1.25rem 1rem 1rem;
            }

            .project-location-responsive {
              font-size: 0.75rem;
              font-weight: 700;
              color: #cccccc;
              text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
              letter-spacing: 0.1px;
              text-transform: uppercase;
              transition: all var(--transition-base);
              cursor: pointer;
            }
          }

          /* Touch-friendly adjustments */
          @media (hover: none) and (pointer: coarse) {
            .project-card-responsive {
              min-height: 48px; /* Ensure minimum touch target */
            }
            
            .project-card-responsive:hover {
              transform: none; /* Disable hover effects on touch devices */
            }
            
            .project-card-responsive:active {
              transform: scale(0.98);
              transition: transform 0.1s ease;
            }
          }

          /* High DPI displays */
          @media (min-resolution: 2dppx) {
            .project-image-responsive {
              image-rendering: -webkit-optimize-contrast;
              image-rendering: crisp-edges;
            }
          }
        `}
      </style>
    </section>
  );
};

export default ProjectsSection; 