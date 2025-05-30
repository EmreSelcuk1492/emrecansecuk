import React, { useState, useEffect } from 'react';

const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('about');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  // Track which section is currently in view
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style>
        {`
          .nav-links a {
            position: relative;
            padding: 12px 20px;
            border-radius: 25px;
            transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            user-select: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
          }

          .nav-links a:hover {
            background: rgba(var(--color-accent-rgb), 0.1);
            color: var(--color-accent-light);
            transform: translateY(-2px);
          }

          .nav-links a.active {
            background: linear-gradient(135deg, var(--color-accent), var(--color-accent-light));
            color: var(--color-bg-primary);
            box-shadow: 0 4px 15px rgba(var(--color-accent-rgb), 0.4);
            transform: translateY(-1px);
          }

          .nav-links a.active:hover {
            background: linear-gradient(135deg, var(--color-accent-light), var(--color-accent));
            transform: translateY(-3px);
            box-shadow: 0 6px 20px rgba(var(--color-accent-rgb), 0.5);
          }

          .nav-links a::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            border-radius: 25px;
            background: linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%);
            opacity: 0;
            transition: opacity 0.3s ease;
          }

          .nav-links a:hover::before {
            opacity: 1;
          }

          .nav-links a.active::before {
            opacity: 0.2;
          }

          @media (max-width: 768px) {
            .nav-links a {
              padding: 10px 16px;
              border-radius: 20px;
            }
          }
        `}
      </style>
      
      <nav className="nav">
        <div className="container nav-container">
          <ul className="nav-links">
            <li>
              <a 
                href="#about" 
                className={activeSection === 'about' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#experience" 
                className={activeSection === 'experience' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}
              >
                Experience
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                className={activeSection === 'projects' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
              >
                Projects
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className={activeSection === 'contact' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation; 