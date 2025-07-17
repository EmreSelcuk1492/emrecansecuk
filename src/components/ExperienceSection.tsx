import React, { useState, useEffect } from 'react';
import LazyImage from './LazyImage';

const ExperienceSection: React.FC = () => {
  const [companyAssets, setCompanyAssets] = useState<Record<string, string>>({});

  // Dynamically import company logos only when needed
  useEffect(() => {
    const loadCompanyLogos = async () => {
      try {
        const [
          mahiLogo,
          biolegacyLogo,
          jenniLogo,
          entegrisLogo,
          zsistemLogo,
          aitalesLogo
        ] = await Promise.all([
          import('../assets/companies/mahi.gif'),
          import('../assets/companies/bio-legacy-replacement.png'),
          import('../assets/companies/jenni-ai-logo-replacement.png'),
          import('../assets/companies/entegris-replacement.png'),
          import('../assets/companies/z-sistem-replacement.png'),
          import('../assets/companies/AI-Tales.svg')
        ]);

        setCompanyAssets({
          mahi: mahiLogo.default,
          biolegacy: biolegacyLogo.default,
          jenni: jenniLogo.default,
          entegris: entegrisLogo.default,
          zsistem: zsistemLogo.default,
          aitales: aitalesLogo.default
        });
      } catch (error) {
        console.error('Error loading company logos:', error);
      }
    };

    loadCompanyLogos();
  }, []);

  const experiences = [
    {
      id: 1,
      company: "Jenni.AI",
      role: "Software Engineering Intern",
      period: "Jun 2025 – Jan 2026",
      location: "Seoul, SK",
      description: "Building advanced AI-powered writing and research tools for millions of users worldwide.",
      logoKey: "jenni",
      skills: ["React", "TypeScript", "Python", "AI/ML", "Node.js"]
    },
    {
      id: 2,
      company: "AI-Tales",
      role: "Software Engineer",
      period: "Sep 2024 – Dec 2024",
      location: "Gyeonggi-do, SK",
      description: "Developed AI-powered storytelling platform with focus on user experience and content generation.",
      logoKey: "aitales",
      skills: ["Vue.js", "Python", "FastAPI", "PostgreSQL", "AI/ML"]
    },
    {
      id: 3,
      company: "Entegris",
      role: "Technical Program Manager Co-op",
      period: "Jan 2024 – Aug 2024",
      location: "Boston, MA",
      description: "Managed cross-functional projects for semiconductor manufacturing equipment optimization.",
      logoKey: "entegris",
      skills: ["Project Management", "Data Analysis", "Process Optimization", "Agile"]
    },
    {
      id: 4,
      company: "Z-Sistem",
      role: "Systems Development Intern",
      period: "Sep 2024 – Dec 2024",
      location: "Ankara, Turkey",
      description: "Worked on VTOL drone camera calibration systems, developing precision technical solutions.",
      logoKey: "zsistem",
      skills: ["Systems Engineering", "Computer Vision", "Python", "Hardware Integration"]
    },
    {
      id: 5,
      company: "BioLegacy",
      role: "Research Intern",
      period: "Jun 2023 – Aug 2023",
      location: "Seattle, WA",
      description: "Conducted research on biomedical data analysis and developed software tools for genomic research.",
      logoKey: "biolegacy",
      skills: ["Bioinformatics", "Python", "Data Analysis", "Research Methods"]
    },
    {
      id: 6,
      company: "MAHI Lab",
      role: "Research Intern",
      period: "May 2023 – Aug 2023",
      location: "Houston, TX",
      description: "Developed haptic feedback systems for medical robotics applications.",
      logoKey: "mahi",
      skills: ["Robotics", "C++", "MATLAB", "Hardware Development", "Research"]
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`experience-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="experience-card">
                <div className="experience-header">
                  <div className="company-logo-container">
                    {companyAssets[exp.logoKey] ? (
                      <LazyImage
                        src={companyAssets[exp.logoKey]}
                        alt={`${exp.company} Logo`}
                        className="company-logo"
                      />
                    ) : (
                      <div className="company-logo-placeholder">
                        <div>{exp.company.charAt(0)}</div>
                      </div>
                    )}
                  </div>
                  <div className="experience-info">
                    <h3 className="company-name">{exp.company}</h3>
                    <h4 className="role-title">{exp.role}</h4>
                    <div className="experience-meta">
                      <span className="period">{exp.period}</span>
                      <span className="location">{exp.location}</span>
                    </div>
                  </div>
                </div>
                
                <p className="experience-description">{exp.description}</p>
                
                <div className="skills-container">
                  {exp.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="timeline-dot"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection; 