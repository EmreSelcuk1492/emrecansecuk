import React, { useEffect, useRef, useState } from 'react';
import Globe from 'react-globe.gl';
import { useTheme } from '../context/ThemeContext';

const AboutSection: React.FC = () => {
  const globeRef = useRef<any>();
  const { theme } = useTheme();
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
      controls.autoRotateSpeed = isMobile ? 1.0 : 1.5; // Slower on mobile for better performance
    }
  }, [isMobile]);

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
    if (point && !isMobile) { // Disable hover on mobile
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

  // Get responsive globe size
  const getGlobeSize = () => {
    const width = window.innerWidth;
    if (width <= 360) return { width: 220, height: 220 }; // Extra small mobile
    if (width <= 480) return { width: 240, height: 240 }; // Small mobile
    if (width <= 768) return { width: 280, height: 280 }; // Mobile
    if (width <= 1024) return { width: 350, height: 350 }; // Tablet
    return { width: 500, height: 500 }; // Desktop
  };

  const globeSize = getGlobeSize();

  // Set CSS custom properties for responsive sizing
  useEffect(() => {
    document.documentElement.style.setProperty('--globe-size', `${globeSize.width}px`);
  }, [globeSize.width]);

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content-responsive">
          <div className="about-text-responsive">
            <p className="about-intro">
              <strong>Hi, I'm Emre Selcuk</strong>! I'm a 20-year-old developer based in Seattle, Washington.
            </p>

            <p className="about-journey">
              My laptop has bounced from <strong>Seoul</strong>, where I shipped a GPT-powered ed-tech MVP at <em>AI-Tales</em>, to <strong>Ankara</strong>, calibrating VTOL-drone cameras at <em>Z-Sistem</em>, and finally to <strong>Boston</strong>, guiding AI roll-outs at <em>Entegris</em>. Along the way I built a close partnership with <strong>Jenni.ai</strong>—starting with contract projects at the University of Washington and growing into a full-time internship in their Seoul office.
            </p>

            <p className="about-current">
              Now I've co-founded <strong>ManuscriptCheck.ai</strong>, an upcoming Jenni.ai tool that streamlines the academic publishing process.
            </p>

            <p className="about-closing">
              When I'm not coding, you'll catch me documenting my journey on <a href="https://emrecanselcuk.com" target="_blank" rel="noopener noreferrer">emrecanselcuk.com</a>, open-sourcing experiments, and expanding my digital footprint. No matter the continent or industry, <strong>continuous learning and development</strong> ties every adventure together—so if you're building something that helps people grow, let's talk.
            </p>
          </div>
          
          <div className="globe-container-responsive">
            <div className="globe-wrapper">
              <Globe
                ref={globeRef}
                globeImageUrl={globeConfig.globeImageUrl}
                backgroundImageUrl={globeConfig.backgroundImageUrl}
                backgroundColor={globeConfig.backgroundColor}
                pointsData={experienceLocations}
                pointAltitude={(d: any) => d.altitude}
                pointColor={(d: any) => d.color}
                pointRadius={isMobile ? 1.5 : 2.0}
                pointResolution={isMobile ? 16 : 32}
                pointLabel={(d: any) => {
                  if (d.isMultiple) {
                    // Multiple experiences (Korea) - show both but no clickable elements
                    return `
                      <div style="
                        color: white; 
                        font-weight: bold; 
                        background: rgba(0,0,0,0.95); 
                        padding: ${isMobile ? '12px 16px' : '16px 20px'}; 
                        border-radius: 12px;
                        border: 3px solid #ffffff;
                        max-width: ${isMobile ? '200px' : '280px'};
                        line-height: 1.4;
                        cursor: pointer;
                        box-shadow: 0 4px 20px rgba(0,0,0,0.8);
                        backdrop-filter: blur(10px);
                      ">
                        <div style="font-size: ${isMobile ? '14px' : '16px'}; margin-bottom: ${isMobile ? '8px' : '12px'}; color: #ffffff; font-weight: 800; text-align: center;">🇰🇷 ${d.name}</div>
                        ${d.experiences.map((exp: any) => `
                          <div style="
                            background: rgba(255,255,255,0.1);
                            padding: ${isMobile ? '6px 10px' : '8px 12px'};
                            margin: ${isMobile ? '4px 0' : '6px 0'};
                            border-radius: 8px;
                            border: 1px solid rgba(255,255,255,0.3);
                          ">
                            <div style="font-size: ${isMobile ? '12px' : '14px'}; color: #fff; font-weight: 600;">${exp.company} <span style="color: #aaa; font-size: ${isMobile ? '10px' : '11px'};">(${exp.year})</span></div>
                            <div style="font-size: ${isMobile ? '10px' : '12px'}; color: #ccc;">${exp.role}</div>
                            <div style="font-size: ${isMobile ? '9px' : '11px'}; color: #aaa;">📍 ${exp.location}</div>
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
                        padding: ${isMobile ? '10px 14px' : '12px 16px'}; 
                        border-radius: 12px;
                        border: 3px solid #ffffff;
                        max-width: ${isMobile ? '180px' : '220px'};
                        line-height: 1.4;
                        cursor: pointer;
                        box-shadow: 0 4px 20px rgba(0,0,0,0.8);
                        backdrop-filter: blur(10px);
                      ">
                        <div style="font-size: ${isMobile ? '14px' : '16px'}; margin-bottom: 4px; color: #ffffff; font-weight: 800;">${d.company}</div>
                        <div style="font-size: ${isMobile ? '11px' : '13px'}; color: #fff; margin-bottom: 2px;">${d.role}</div>
                        <div style="font-size: ${isMobile ? '10px' : '12px'}; color: #bbb; margin-top: 3px;">📍 ${d.name}</div>
                      </div>
                    `;
                  }
                }}
                onPointClick={handleLocationClick}
                onPointHover={isMobile ? undefined : handleLocationHover}
                width={globeSize.width}
                height={globeSize.height}
                enablePointerInteraction={true}
                atmosphereColor={globeConfig.atmosphereColor}
                atmosphereAltitude={0.25}
                showAtmosphere={true}
                showGraticules={false}
              />
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          .about-content-responsive {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 3rem;
            max-width: 1200px;
            margin: 0 auto;
            flex-wrap: wrap;
          }

          .about-text-responsive {
            flex: 1;
            min-width: 300px;
            max-width: 100%;
          }

          .about-text-responsive p {
            font-size: var(--font-size-xl);
            line-height: 1.8;
            margin-bottom: 1.5rem;
            color: var(--color-text-primary);
            text-align: left;
          }

          .about-intro {
            font-size: var(--font-size-2xl) !important;
            font-weight: 600;
            color: var(--color-text-primary) !important;
            margin-bottom: 2rem !important;
          }

          .about-intro strong {
            color: var(--color-accent-light);
            font-weight: 700;
          }

          .about-text-responsive em {
            color: var(--color-accent-light);
            font-style: italic;
          }

          .about-text-responsive a {
            color: var(--color-accent-light);
            text-decoration: none;
            border-bottom: 2px solid transparent;
            transition: all var(--transition-base);
          }

          .about-text-responsive a:hover {
            border-bottom-color: var(--color-accent-light);
            color: var(--color-accent);
          }

          .globe-container-responsive {
            flex: 0 0 auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background: radial-gradient(circle, rgba(139, 0, 139, 0.1) 0%, transparent 70%);
            border-radius: 50%;
            padding: 1rem;
            box-shadow: 0 0 30px rgba(139, 0, 139, 0.3);
            transition: all var(--transition-base);
            width: fit-content;
            height: fit-content;
            position: relative;
            aspect-ratio: 1 / 1;
          }

          .globe-container-responsive:hover {
            box-shadow: 0 0 40px rgba(139, 0, 139, 0.5);
            transform: scale(1.02);
          }

          .globe-container-responsive canvas {
            border-radius: 50% !important;
            box-shadow: 0 0 20px rgba(139, 0, 139, 0.4) !important;
            transition: all var(--transition-base) !important;
            display: block !important;
            margin: 0 auto !important;
            aspect-ratio: 1 / 1 !important;
            object-fit: cover !important;
            width: 100% !important;
            height: 100% !important;
            max-width: 100% !important;
            max-height: 100% !important;
          }

          .globe-container-responsive:hover canvas {
            box-shadow: 0 0 30px rgba(139, 0, 139, 0.6) !important;
          }

          /* Globe wrapper for perfect circle */
          .globe-wrapper {
            position: relative;
            border-radius: 50%;
            overflow: hidden;
            aspect-ratio: 1 / 1;
            display: flex;
            align-items: center;
            justify-content: center;
            width: var(--globe-size, 500px);
            height: var(--globe-size, 500px);
            margin: 0 auto;
            flex-shrink: 0;
          }

          .globe-wrapper canvas {
            border-radius: 50% !important;
            box-shadow: 0 0 20px rgba(139, 0, 139, 0.4) !important;
            transition: all var(--transition-base) !important;
            width: 100% !important;
            height: 100% !important;
            aspect-ratio: 1 / 1 !important;
            object-fit: cover !important;
          }

          .globe-container-responsive:hover .globe-wrapper canvas,
          .globe-wrapper:hover canvas {
            box-shadow: 0 0 30px rgba(139, 0, 139, 0.6) !important;
          }

          /* Mobile Responsive */
          @media (max-width: 768px) {
            .about-content-responsive {
              flex-direction: column;
              gap: 2rem;
              text-align: center;
              align-items: center;
            }

            .about-text-responsive {
              order: 2;
              min-width: auto;
              width: 100%;
            }

            .about-text-responsive p {
              text-align: center;
              font-size: var(--font-size-lg);
              line-height: 1.6;
              margin-bottom: 1.25rem;
            }

            .about-intro {
              font-size: var(--font-size-xl) !important;
              margin-bottom: 1.5rem !important;
            }

            .globe-container-responsive {
              order: 1;
              margin: 2rem auto 0 auto;
              padding: 0.75rem;
              align-self: center;
              min-width: auto;
              max-width: 100%;
              width: fit-content;
            }
          }

          /* Small Mobile */
          @media (max-width: 480px) {
            .about-content-responsive {
              gap: 1.5rem;
              padding: 0 0.5rem;
            }

            .about-text-responsive p {
              font-size: var(--font-size-base);
              line-height: 1.5;
              margin-bottom: 1rem;
            }

            .about-intro {
              font-size: var(--font-size-lg) !important;
              margin-bottom: 1.25rem !important;
            }

            .globe-container-responsive {
              padding: 0.5rem;
              width: fit-content;
              max-width: calc(100vw - 2rem);
              margin: 1.5rem auto 0 auto;
            }
          }

          /* Extra Small Mobile */
          @media (max-width: 360px) {
            .about-content-responsive {
              padding: 0 0.25rem;
            }

            .globe-container-responsive {
              max-width: calc(100vw - 1rem);
              padding: 0.375rem;
            }
          }

          /* Tablet */
          @media (max-width: 1024px) and (min-width: 769px) {
            .globe-wrapper {
              width: 350px;
              height: 350px;
            }
          }

          /* Touch-friendly adjustments */
          @media (hover: none) and (pointer: coarse) {
            .globe-container-responsive:hover {
              transform: none;
              box-shadow: 0 0 30px rgba(139, 0, 139, 0.3);
            }

            .globe-wrapper:hover canvas {
              box-shadow: 0 0 20px rgba(139, 0, 139, 0.4) !important;
            }

            .about-text-responsive a:hover {
              border-bottom-color: transparent;
            }

            .about-text-responsive a:active {
              color: var(--color-accent);
              transform: scale(0.98);
            }
          }

          /* Performance optimizations for mobile */
          @media (max-width: 768px) {
            .globe-wrapper canvas {
              will-change: transform;
              backface-visibility: hidden;
              transform: translateZ(0);
            }

            .globe-container-responsive {
              contain: layout style paint;
            }
          }

          /* Landscape mobile adjustments */
          @media (max-width: 768px) and (orientation: landscape) {
            .about-content-responsive {
              flex-direction: row;
              gap: 1.5rem;
            }

            .about-text-responsive {
              order: 1;
              flex: 1;
            }

            .globe-container-responsive {
              order: 2;
              flex: 0 0 auto;
              max-width: 300px;
            }
          }

          @media (max-width: 480px) and (orientation: landscape) {
            .globe-container-responsive {
              max-width: 240px;
            }
          }

          /* Reduced motion support */
          @media (prefers-reduced-motion: reduce) {
            .globe-container-responsive,
            .globe-container-responsive canvas,
            .about-text-responsive a {
              transition: none !important;
            }

            .globe-container-responsive:hover {
              transform: none;
            }
          }
        `}
      </style>
    </section>
  );
};

export default AboutSection; 