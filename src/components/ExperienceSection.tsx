import React, { useState } from 'react';

interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  logo: string;
  logoType: 'emoji' | 'microsoft' | 'blueorigin' | 'hcrlab' | 'cledge' | 'codeninjas' | 'jenni';
  team?: string;
  description: string[];
  skills: string[];
  color: string;
}

const ExperienceSection: React.FC = () => {
  const [showComingSoon, setShowComingSoon] = useState(false);

  // Function to get company website URLs
  const getCompanyUrl = (company: string): string => {
    const companyUrls: { [key: string]: string } = {
      'Jenni.AI': 'https://jenni.ai',
      'Entegris': 'https://entegris.com',
      'Z-Sistem': 'https://www.z-sistem.com/zs/en/home/',
      'AI-Tales': '/coming-soon', // Internal page for coming soon
      'BioLegacy': 'https://www.linkedin.com/company/biolegacy1/',
      'MAHI Lab': 'https://mahilab.rice.edu/'
    };
    return companyUrls[company] || '#';
  };

  // Function to handle company link clicks
  const handleCompanyClick = (company: string, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering the job selection
    const url = getCompanyUrl(company);
    
    if (url === '/coming-soon') {
      // For AI-Tales, show coming soon modal
      setShowComingSoon(true);
    } else if (url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const experiences: Experience[] = [
    {
      id: 'jenni-ai',
      company: 'Jenni.AI',
      role: 'SWE Intern',
      duration: 'Jun 2025 – Jan 2026',
      location: 'Seoul, SK',
      logo: '🤖',
      logoType: 'emoji',
      description: [
        'Spearheading <strong>Stealth</strong> for Jenni.ai',
        'Owning production uptime & feature velocity for <strong>ManuscriptCheck.ai</strong>'
      ],
      skills: [],
      color: '#8B008B'
    },
    {
      id: 'entegris',
      company: 'Entegris',
      role: 'TPM Co-op',
      duration: 'Jan 2025 – Jun 2025',
      location: 'Boston, MA',
      logo: '🏭',
      logoType: 'emoji',
      description: [
        'Built <strong>Accolade + Power BI</strong> executive dashboards that shape quarterly OKRs',
        'Rolled out <strong>M365 Copilot Studio agentic workflows</strong>; demoed live at monthly PMC',
        'Championed <strong>Sustainable Design</strong> principles for New Product Development programs'
      ],
      skills: [],
      color: '#0078D4'
    },
    {
      id: 'z-sistem',
      company: 'Z-Sistem',
      role: 'Systems Intern',
      duration: 'Jun 2024 – Sep 2024',
      location: 'Ankara, TR',
      logo: '🚁',
      logoType: 'emoji',
      description: [
        'Led <strong>NATO DIANA</strong> avionics + autonomy proposal',
        'Developed <strong>OpenCV</strong> camera-calibration pipeline (≤ 2 cm error) across webcams, ArduCam, Android',
        'Integrated <strong>PX4</strong> in Gazebo for VTOL auto-landing sims; authored <strong>Qt</strong> vibration-test GUI'
      ],
      skills: [],
      color: '#003366'
    },
    {
      id: 'ai-tales',
      company: 'AI-Tales',
      role: 'SWE Engineer',
      duration: 'Feb 2024 – May 2024',
      location: 'Gyeonggi-do, SK',
      logo: '📚',
      logoType: 'emoji',
      description: [
        'Shipped lightweight <strong>Ruby on Rails + Hotwire</strong> Ed-Tech MVP, powered by <strong>GPT-4 & Sora-Vision</strong>',
        'Designed child- & teacher-friendly <strong>one-stop learning UI</strong> for Seoul hagwons'
      ],
      skills: [],
      color: '#2E8B57'
    },
    {
      id: 'biolegacy',
      company: 'BioLegacy',
      role: 'Research Intern',
      duration: 'Jan 2023 – Aug 2023',
      location: 'Seattle, WA',
      logo: '🧬',
      logoType: 'emoji',
      description: [
        'Drove early-stage <strong>R&D</strong> on organic re-warming in UW\'s Cryobiology Lab',
        'Automated vitrification tests; ran deep <strong>Python data-analysis</strong> on CPA performance',
        '<strong>$50k+</strong> in funding won: <em>Harriet Stevenson Business Award</em> & <em>Herbert B. Jones Grand Prize</em>'
      ],
      skills: [],
      color: '#8B4513'
    },
    {
      id: 'mahi-lab',
      company: 'MAHI Lab',
      role: 'Research Intern',
      duration: 'Jun 2022 – Sep 2022',
      location: 'Houston, TX',
      logo: '🔬',
      logoType: 'emoji',
      description: [
        'Co-authored IEEE paper on the <strong>Snaptics</strong> modular haptics platform',
        'Fabricated low-cost haptic devices via <strong>3-D printing & micro-soldering</strong>, halving BOM cost',
        'Mined human-subject data in <strong>Python</strong> to validate Snaptics vs. commercial systems',
        '<em>Citation:</em> <strong>Zook ZA et al., "Validation of Snaptics…," IEEE Trans Haptics 17 (4): 830-840, 2024</strong>'
      ],
      skills: [],
      color: '#FF6347'
    }
  ];

  const [selectedExperience, setSelectedExperience] = useState<Experience>(experiences[0]);

  const renderLogo = (exp: Experience) => {
    return <span className="emoji-logo">{exp.logo}</span>;
  };

  return (
    <>
      <section id="experience" className="section">
        <div className="container">
          <div className="experience-split-container">
            <div className="experience-split-header">
              <h2 className="experience-split-title">Experience</h2>
              <div className="experience-split-icon">💼</div>
            </div>
            
            <div className="experience-split-content">
              {/* Job List Sidebar */}
              <div className="experience-job-list">
                {experiences.map((exp) => (
                  <div 
                    key={exp.id}
                    data-experience-id={exp.id}
                    className={`job-list-item ${selectedExperience.id === exp.id ? 'active' : ''}`}
                    onClick={() => setSelectedExperience(exp)}
                  >
                    <div className="job-list-logo">
                      {renderLogo(exp)}
                    </div>
                    <div className="job-list-info">
                      <div className="job-list-primary">
                        <span 
                          className="job-list-company company-link"
                          onClick={(e) => handleCompanyClick(exp.company, e)}
                        >
                          {exp.company}
                        </span>
                        <span className="job-list-role">| {exp.role}</span>
                      </div>
                      <div className="job-list-secondary">{exp.duration}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Job Details Panel */}
              <div className="experience-job-details">
                <div className="job-details-card">
                  <div className="job-details-header">
                    <h3 
                      className="job-details-company company-link"
                      onClick={(e) => handleCompanyClick(selectedExperience.company, e)}
                    >
                      {selectedExperience.company}
                    </h3>
                    {selectedExperience.team && (
                      <h4 className="job-details-team">{selectedExperience.team}</h4>
                    )}
                    <div className="job-details-meta">
                      <span className="job-details-role">{selectedExperience.role}</span>
                      <span className="job-details-duration">{selectedExperience.duration}</span>
                      <span className="job-details-location">{selectedExperience.location}</span>
                    </div>
                  </div>
                  
                  <div className="job-details-description">
                    <ul>
                      {selectedExperience.description.map((item, index) => (
                        <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Modal */}
      {showComingSoon && (
        <div className="coming-soon-overlay" onClick={() => setShowComingSoon(false)}>
          <div className="coming-soon-modal" onClick={(e) => e.stopPropagation()}>
            <button 
              className="coming-soon-close"
              onClick={() => setShowComingSoon(false)}
            >
              ×
            </button>
            <div className="coming-soon-content">
              <div className="coming-soon-icon">🚧</div>
              <h3>Coming Soon!</h3>
              <p>AI-Tales company website is currently under development.</p>
              <p>Check back soon for updates!</p>
              <button 
                className="coming-soon-button"
                onClick={() => setShowComingSoon(false)}
              >
                Got it!
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ExperienceSection; 