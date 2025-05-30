import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Navigation: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="nav">
      <div className="container nav-container">
        <a href="#" className="nav-logo">Portfolio</a>
        <ul className="nav-links">
          <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
          <li><a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}>Experience</a></li>
          <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a></li>
          <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
          <li>
            <button className="theme-toggle" onClick={toggleTheme}>
              <span className="theme-icon">
                {theme === 'light' ? '🌇' : '🌃'}
              </span>
              <span className="theme-text">
                {theme === 'light' ? 'Light' : 'Dark'}
              </span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation; 