import React, { useState, useEffect } from 'react';

const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setMobileMenuOpen(false); // Close mobile menu after selection
    }
  };

  // Track which section is currently in view
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Check if we're near the bottom of the page (for contact section)
      if (scrollPosition + windowHeight >= documentHeight - 50) {
        setActiveSection('contact');
        return;
      }

      // Normal section detection
      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop } = element;
          if (scrollPosition >= offsetTop - 150) {
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

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.querySelector('.nav');
      if (nav && !nav.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  const getCurrentSectionLabel = () => {
    const currentItem = navItems.find(item => item.id === activeSection);
    return currentItem ? currentItem.label : 'Navigation';
  };

  return (
    <>
      <style>
        {`
          .nav {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 999;
            background: rgba(var(--color-bg-primary-rgb, 255, 255, 255), 0.9);
            backdrop-filter: blur(10px);
            border-bottom: 1px solid var(--color-border);
            transition: all var(--transition-base);
          }

          .nav-container {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 1rem 2rem;
            max-width: 1200px;
            margin: 0 auto;
            position: relative;
          }

          .nav-links {
            display: flex;
            list-style: none;
            margin: 0;
            padding: 0;
            gap: 1rem;
            align-items: center;
          }

          .nav-links a {
            position: relative;
            padding: 12px 20px;
            border-radius: 25px;
            transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            user-select: none;
            text-decoration: none;
            color: var(--color-text-primary);
            font-weight: 500;
            font-size: var(--font-size-base);
            display: flex;
            align-items: center;
            justify-content: center;
            min-width: 44px;
            min-height: 44px;
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

          /* Mobile Dropdown Navigation */
          .mobile-nav-toggle {
            display: none;
            background: rgba(var(--color-bg-primary-rgb), 0.9);
            border: 2px solid var(--color-accent);
            border-radius: 12px;
            padding: 0.75rem 1rem;
            cursor: pointer;
            align-items: center;
            justify-content: space-between;
            min-width: 140px;
            min-height: 48px;
            font-size: var(--font-size-base);
            color: var(--color-text-primary);
            font-weight: 500;
            transition: all var(--transition-base);
            backdrop-filter: blur(5px);
            box-shadow: 0 0 0 1px rgba(var(--color-accent-rgb), 0.2);
          }

          .mobile-nav-toggle:hover {
            border-color: var(--color-accent-light);
            background: rgba(var(--color-accent-rgb), 0.1);
            box-shadow: 0 0 0 2px rgba(var(--color-accent-rgb), 0.3), 0 4px 12px rgba(var(--color-accent-rgb), 0.2);
            transform: translateY(-1px);
          }

          .mobile-nav-toggle:active {
            transform: scale(0.98);
            box-shadow: 0 0 0 1px rgba(var(--color-accent-rgb), 0.4);
          }

          .mobile-nav-toggle:focus {
            outline: none;
            border-color: var(--color-accent-light);
            box-shadow: 0 0 0 3px rgba(var(--color-accent-rgb), 0.3);
          }

          .mobile-nav-current {
            flex: 1;
            text-align: left;
          }

          .mobile-nav-arrow {
            font-size: 0.8rem;
            transition: transform var(--transition-base);
            margin-left: 0.5rem;
          }

          .mobile-nav-arrow.open {
            transform: rotate(180deg);
          }

          .mobile-nav-dropdown {
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
            background: var(--color-bg-primary);
            border: 1px solid var(--color-border);
            border-radius: 12px;
            box-shadow: var(--shadow-xl);
            backdrop-filter: blur(10px);
            opacity: 0;
            visibility: hidden;
            transform: translateX(-50%) translateY(-10px);
            transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            z-index: 1000;
            min-width: 160px;
            overflow: hidden;
          }

          .mobile-nav-dropdown.open {
            opacity: 1;
            visibility: visible;
            transform: translateX(-50%) translateY(0);
          }

          .mobile-nav-dropdown a {
            display: block;
            padding: 1rem 1.25rem;
            color: var(--color-text-primary);
            text-decoration: none;
            font-weight: 500;
            font-size: var(--font-size-base);
            transition: all var(--transition-base);
            border-bottom: 1px solid var(--color-border);
            min-height: 48px;
            display: flex;
            align-items: center;
          }

          .mobile-nav-dropdown a:last-child {
            border-bottom: none;
          }

          .mobile-nav-dropdown a:hover {
            background: rgba(var(--color-accent-rgb), 0.1);
            color: var(--color-accent-light);
            padding-left: 1.5rem;
          }

          .mobile-nav-dropdown a.active {
            background: linear-gradient(135deg, var(--color-accent), var(--color-accent-light));
            color: var(--color-bg-primary);
            font-weight: 600;
          }

          .mobile-nav-dropdown a.active:hover {
            background: linear-gradient(135deg, var(--color-accent-light), var(--color-accent));
            padding-left: 1.25rem;
          }

          /* Desktop/Tablet Responsive */
          @media (max-width: 768px) {
            .nav-links {
              display: none;
            }

            .mobile-nav-toggle {
              display: flex;
            }

            .nav-container {
              padding: 0.75rem 1rem;
            }
          }

          /* Small Mobile */
          @media (max-width: 480px) {
            .nav-container {
              padding: 0.5rem 0.75rem;
            }

            .mobile-nav-toggle {
              min-width: 120px;
              padding: 0.625rem 0.875rem;
              font-size: var(--font-size-sm);
            }

            .mobile-nav-dropdown {
              min-width: 140px;
              left: 1rem;
              right: 1rem;
              transform: none;
            }

            .mobile-nav-dropdown.open {
              transform: translateY(0);
            }

            .mobile-nav-dropdown a {
              padding: 0.875rem 1rem;
              font-size: var(--font-size-sm);
            }

            .mobile-nav-dropdown a:hover {
              padding-left: 1.25rem;
            }
          }

          /* Safe area adjustments */
          @supports (top: env(safe-area-inset-top)) {
            .nav-container {
              padding-top: calc(0.75rem + env(safe-area-inset-top));
            }

            @media (max-width: 480px) {
              .nav-container {
                padding-top: calc(0.5rem + env(safe-area-inset-top));
              }
            }
          }

          /* Touch-friendly adjustments */
          @media (hover: none) and (pointer: coarse) {
            .nav-links a,
            .mobile-nav-toggle,
            .mobile-nav-dropdown a {
              min-width: 48px;
              min-height: 48px;
            }

            .nav-links a:hover,
            .mobile-nav-dropdown a:hover {
              transform: none;
            }

            .nav-links a:active,
            .mobile-nav-dropdown a:active {
              transform: scale(0.98);
              transition: transform 0.1s ease;
            }
          }

          /* High contrast mode support */
          @media (prefers-contrast: high) {
            .nav-links a,
            .mobile-nav-toggle,
            .mobile-nav-dropdown a {
              border: 2px solid transparent;
            }

            .nav-links a:focus,
            .mobile-nav-toggle:focus,
            .mobile-nav-dropdown a:focus {
              border-color: var(--color-accent);
              outline: 2px solid var(--color-accent);
              outline-offset: 2px;
            }
          }
        `}
      </style>
      
      <nav className="nav">
        <div className="container nav-container">
          {/* Desktop Navigation */}
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <a 
                  href={`#${item.id}`} 
                  className={activeSection === item.id ? 'active' : ''}
                  onClick={(e) => { e.preventDefault(); scrollToSection(item.id); }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Dropdown Navigation */}
          <div className="mobile-nav-container">
            <button 
              className="mobile-nav-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <span className="mobile-nav-current">{getCurrentSectionLabel()}</span>
              <span className={`mobile-nav-arrow ${mobileMenuOpen ? 'open' : ''}`}>▼</span>
            </button>

            <div className={`mobile-nav-dropdown ${mobileMenuOpen ? 'open' : ''}`}>
              {navItems.map((item) => (
                <a 
                  key={item.id}
                  href={`#${item.id}`} 
                  className={activeSection === item.id ? 'active' : ''}
                  onClick={(e) => { e.preventDefault(); scrollToSection(item.id); }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation; 