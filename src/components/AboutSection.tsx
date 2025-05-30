import React, { useEffect, useRef } from 'react';
import Globe from 'react-globe.gl';
import { useTheme } from '../context/ThemeContext';

const AboutSection: React.FC = () => {
  const globeRef = useRef<any>();
  const { theme } = useTheme();

  // Experience locations data
  const experienceLocations = [
    {
      id: 'korea-combined',
      lat: 37.5665,
      lng: 126.9780,
      name: 'South Korea',
      isMultiple: true,
      mostRecent: 'jenni-ai',
      experiences: [
        {
          id: 'jenni-ai',
          company: 'Jenni.AI',
          role: 'SWE Intern',
          location: 'Seoul, SK',
          year: '2025'
        },
        {
          id: 'ai-tales',
          company: 'AI-Tales',
          role: 'SWE Engineer',
          location: 'Gyeonggi-do, SK',
          year: '2024'
        }
      ],
      color: '#ffffff',
      altitude: 0.15
    },
    {
      id: 'entegris',
      lat: 42.3601,
      lng: -71.0589,
      name: 'Boston, MA',
      company: 'Entegris',
      role: 'TPM Co-op',
      color: '#ffffff',
      altitude: 0.15
    },
    {
      id: 'z-sistem',
      lat: 39.9334,
      lng: 32.8597,
      name: 'Ankara, TR',
      company: 'Z-Sistem',
      role: 'Systems Intern',
      color: '#ffffff',
      altitude: 0.15
    },
    {
      id: 'biolegacy',
      lat: 47.6062,
      lng: -122.3321,
      name: 'Seattle, WA',
      company: 'BioLegacy',
      role: 'Research Intern',
      color: '#ffffff',
      altitude: 0.15
    },
    {
      id: 'mahi-lab',
      lat: 29.7604,
      lng: -95.3698,
      name: 'Houston, TX',
      company: 'MAHI Lab',
      role: 'Research Intern',
      color: '#ffffff',
      altitude: 0.15
    }
  ];

  useEffect(() => {
    if (globeRef.current) {
      // Disable zoom and pan controls but enable auto-rotation
      const controls = globeRef.current.controls();
      controls.enableZoom = false;
      controls.enablePan = false;
      controls.enableRotate = false;
      controls.autoRotate = true;
      controls.autoRotateSpeed = 1.5; // Faster rotation
    }
  }, []);

  const handleLocationClick = (point: any) => {
    // Handle multiple experiences (Korea) - go to most recent
    if (point.isMultiple) {
      console.log(`Clicked on Korea - going to most recent: ${point.mostRecent}`);
      
      // Scroll to experience section
      const experienceSection = document.getElementById('experience');
      if (experienceSection) {
        experienceSection.scrollIntoView({ behavior: 'smooth' });
        
        // After scrolling, trigger the most recent experience selection
        setTimeout(() => {
          const experienceItem = document.querySelector(`[data-experience-id="${point.mostRecent}"]`) as HTMLElement;
          if (experienceItem) {
            experienceItem.click();
          }
        }, 1000); // Wait for scroll to complete
      }
      return;
    }
    
    // Handle single experience
    console.log(`Clicked on ${point.company} in ${point.name}`);
    
    // Scroll to experience section
    const experienceSection = document.getElementById('experience');
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: 'smooth' });
      
      // After scrolling, trigger the experience selection
      setTimeout(() => {
        const experienceItem = document.querySelector(`[data-experience-id="${point.id}"]`) as HTMLElement;
        if (experienceItem) {
          experienceItem.click();
        }
      }, 1000); // Wait for scroll to complete
    }
  };

  const handleLocationHover = (point: any) => {
    if (point) {
      console.log(`Hovering over ${point.company} in ${point.name}`);
    }
  };

  // Theme-based globe configuration
  const getGlobeConfig = () => {
    if (theme === 'light') {
      return {
        globeImageUrl: "//unpkg.com/three-globe/example/img/earth-day.jpg",
        backgroundImageUrl: "//unpkg.com/three-globe/example/img/night-sky.png",
        backgroundColor: "#87CEEB",
        atmosphereColor: "#87CEEB"
      };
    } else {
      return {
        globeImageUrl: "//unpkg.com/three-globe/example/img/earth-night.jpg",
        backgroundImageUrl: "//unpkg.com/three-globe/example/img/night-sky.png",
        backgroundColor: "#000011",
        atmosphereColor: "#8B008B"
      };
    }
  };

  const globeConfig = getGlobeConfig();

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p><strong>Hi, I’m Emre Selcuk</strong>—just <em>Emre</em> works! I’m a 20-year-old developer based in Seattle, Washington.</p>

            <p>My laptop has bounced from <strong>Seoul</strong>, where I shipped a GPT-powered ed-tech MVP at <em>AI-Tales</em>, to <strong>Ankara</strong>, calibrating VTOL-drone cameras at <em>Z-Sistem</em>, and finally to <strong>Boston</strong>, guiding AI roll-outs at <em>Entegris</em>. Along the way I built a close partnership with <strong>Jenni.ai</strong>—starting with contract projects at the University of Washington and growing into a full-time internship in their Seoul office.</p>

            <p>Now I’ve co-founded <strong>ManuscriptCheck.ai</strong>, an upcoming Jenni.ai tool that streamlines the academic publishing process.</p>

            <p>When I’m not coding, you’ll catch me documenting my journey on <a href="https://emrecanselcuk.com" target="_blank">emrecanselcuk.com</a>, open-sourcing experiments, and expanding my digital footprint. No matter the continent or industry, <strong>continuous learning and development</strong> ties every adventure together—so if you’re building something that helps people grow, let’s talk.</p>

          </div>
          <div className="globe-container">
            <Globe
              ref={globeRef}
              globeImageUrl={globeConfig.globeImageUrl}
              backgroundImageUrl={globeConfig.backgroundImageUrl}
              backgroundColor={globeConfig.backgroundColor}
              pointsData={experienceLocations}
              pointAltitude={(d: any) => d.altitude}
              pointColor={(d: any) => d.color}
              pointRadius={2.0}
              pointResolution={32}
              pointLabel={(d: any) => {
                if (d.isMultiple) {
                  // Multiple experiences (Korea) - show both but no clickable elements
                  return `
                    <div style="
                      color: white; 
                      font-weight: bold; 
                      background: rgba(0,0,0,0.95); 
                      padding: 16px 20px; 
                      border-radius: 12px;
                      border: 3px solid #ffffff;
                      max-width: 280px;
                      line-height: 1.4;
                      cursor: pointer;
                      box-shadow: 0 4px 20px rgba(0,0,0,0.8);
                      backdrop-filter: blur(10px);
                    ">
                      <div style="font-size: 16px; margin-bottom: 12px; color: #ffffff; font-weight: 800; text-align: center;">🇰🇷 ${d.name}</div>
                      ${d.experiences.map((exp: any) => `
                        <div style="
                          background: rgba(255,255,255,0.1);
                          padding: 8px 12px;
                          margin: 6px 0;
                          border-radius: 8px;
                          border: 1px solid rgba(255,255,255,0.3);
                        ">
                          <div style="font-size: 14px; color: #fff; font-weight: 600;">${exp.company} <span style="color: #aaa; font-size: 11px;">(${exp.year})</span></div>
                          <div style="font-size: 12px; color: #ccc;">${exp.role}</div>
                          <div style="font-size: 11px; color: #aaa;">📍 ${exp.location}</div>
                        </div>
                      `).join('')}
                    </div>
                  `;
                } else {
                  // Single experience
                  return `
                    <div style="
                      color: white; 
                      font-weight: bold; 
                      background: rgba(0,0,0,0.95); 
                      padding: 12px 16px; 
                      border-radius: 12px;
                      border: 3px solid #ffffff;
                      max-width: 220px;
                      line-height: 1.4;
                      cursor: pointer;
                      box-shadow: 0 4px 20px rgba(0,0,0,0.8);
                      backdrop-filter: blur(10px);
                    ">
                      <div style="font-size: 16px; margin-bottom: 4px; color: #ffffff; font-weight: 800;">${d.company}</div>
                      <div style="font-size: 13px; color: #fff; margin-bottom: 2px;">${d.role}</div>
                      <div style="font-size: 12px; color: #bbb; margin-top: 3px;">📍 ${d.name}</div>
                    </div>
                  `;
                }
              }}
              onPointClick={handleLocationClick}
              onPointHover={handleLocationHover}
              width={500}
              height={500}
              enablePointerInteraction={true}
              atmosphereColor={globeConfig.atmosphereColor}
              atmosphereAltitude={0.25}
              showAtmosphere={true}
              showGraticules={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 