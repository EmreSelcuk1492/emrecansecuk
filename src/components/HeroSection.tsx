import React, { useState, useEffect } from 'react';

const HeroSection: React.FC = () => {
  const texts = [
    "Hi, my name is Emre Selcuk",
    "Merhaba, benim adım Emre Selcuk", 
    "안녕하세요, 제 이름은 Emre Selcuk입니다"
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isSmallMobile, setIsSmallMobile] = useState(false);

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      setIsSmallMobile(width <= 480);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Get responsive typing speeds
  const getTypingSpeed = () => {
    if (isSmallMobile) return { typing: 100, erasing: 50 }; // Slower on small mobile
    if (isMobile) return { typing: 90, erasing: 45 }; // Slightly slower on mobile
    return { typing: 80, erasing: 40 }; // Normal speed on desktop
  };

  // Get responsive wait times
  const getWaitTimes = () => {
    if (isSmallMobile) return { afterTyping: 3000, afterErasing: 600 }; // Longer pauses on small mobile
    if (isMobile) return { afterTyping: 2800, afterErasing: 550 }; // Slightly longer on mobile
    return { afterTyping: 2500, afterErasing: 500 }; // Normal on desktop
  };

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    const speeds = getTypingSpeed();
    const waitTimes = getWaitTimes();
    let timeoutId: number;

    if (isTyping) {
      // Typing phase
      if (displayText.length < currentText.length) {
        timeoutId = setTimeout(() => {
          setDisplayText(currentText.substring(0, displayText.length + 1));
        }, speeds.typing);
      } else {
        // Finished typing, wait then start erasing
        timeoutId = setTimeout(() => {
          setIsTyping(false);
        }, waitTimes.afterTyping);
      }
    } else {
      // Erasing phase
      if (displayText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, speeds.erasing);
      } else {
        // Finished erasing, move to next text
        timeoutId = setTimeout(() => {
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
          setIsTyping(true);
        }, waitTimes.afterErasing);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [displayText, isTyping, currentTextIndex, texts, isMobile, isSmallMobile]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content-responsive">
          <div className="typing-container-responsive">
            <div className="typing-text-wrapper">
              <div className="typing-text-responsive">
                {displayText}<span className={`typing-cursor ${isTyping ? 'typing' : 'erasing'}`}>|</span>
              </div>
            </div>
          </div>
          <p className="hero-subtitle-responsive">~a snapshot of my developer journey~</p>
          <button className="btn hero-btn-responsive" onClick={scrollToContact}>
            Get in Touch
          </button>
        </div>
      </div>

      <style>
        {`
          .hero-content-responsive {
            width: 100%;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 2rem 0;
          }

          .typing-container-responsive {
            width: 100%;
            min-height: 120px;
            margin: 0 auto 2rem auto;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            padding: 0 1rem;
            overflow: visible;
          }

          .typing-text-wrapper {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            max-width: 900px;
            text-align: center;
            margin: 0;
          }

          .typing-text-responsive {
            font-size: var(--font-size-6xl);
            font-weight: 800;
            color: var(--color-text-primary);
            text-shadow: 0 0 10px var(--color-shadow);
            white-space: nowrap;
            position: relative;
            transition: all 0.1s ease;
            line-height: 1.1;
            overflow: visible;
            padding: 0 8px;
            text-align: left;
            margin: 0;
            display: inline-block;
            min-width: 0;
            width: max-content;
          }

          .typing-cursor {
            color: var(--color-accent);
            animation: blink-caret 1s step-end infinite;
            font-weight: inherit;
            font-size: inherit;
            line-height: 1;
            display: inline;
          }

          .typing-text-responsive.typing::after,
          .typing-text-responsive.erasing::after {
            content: '';
            display: none;
          }

          @keyframes blink-caret {
            from, to {
              opacity: 1;
            }
            50% {
              opacity: 0;
            }
          }

          .hero-subtitle-responsive {
            font-size: var(--font-size-2xl);
            font-weight: 500;
            color: var(--color-accent-light);
            margin-bottom: 2rem;
            text-align: center;
            opacity: 0.9;
          }

          .hero-btn-responsive {
            margin-top: 1rem;
            padding: 1rem 2.5rem;
            font-size: var(--font-size-lg);
            font-weight: 600;
            min-height: 56px;
            border-radius: var(--radius-xl);
            transition: all var(--transition-base);
            text-transform: none;
            letter-spacing: 0.5px;
          }

          .hero-btn-responsive:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(var(--color-accent-rgb), 0.4);
          }

          .hero-btn-responsive:active {
            transform: translateY(-1px);
          }

          /* Tablet responsive */
          @media (max-width: 1024px) {
            .typing-text-wrapper {
              width: 100%;
              max-width: 800px;
            }

            .typing-text-responsive {
              font-size: var(--font-size-5xl);
            }

            .hero-subtitle-responsive {
              font-size: var(--font-size-xl);
            }

            .typing-container-responsive {
              min-height: 100px;
            }
          }

          /* Mobile responsive */
          @media (max-width: 768px) {
            .hero-content-responsive {
              padding: 1.5rem 0;
            }

            .typing-container-responsive {
              min-height: 80px;
              margin-bottom: 1.5rem;
              padding: 0 0.5rem;
              justify-content: center;
            }

            .typing-text-wrapper {
              width: 100%;
              max-width: 100%;
              margin: 0;
            }

            .typing-text-responsive {
              font-size: var(--font-size-4xl);
              line-height: 1.2;
              white-space: nowrap;
              text-align: left;
              padding: 0 6px;
              margin: 0;
              display: inline-block;
              width: max-content;
            }

            .typing-cursor {
              font-size: 0.9em;
            }

            .hero-subtitle-responsive {
              font-size: var(--font-size-xl);
              margin-bottom: 1.5rem;
              line-height: 1.4;
            }

            .hero-btn-responsive {
              width: 100%;
              max-width: 280px;
              padding: 1rem 2rem;
              font-size: var(--font-size-base);
              min-height: 48px;
            }
          }

          /* Small mobile responsive */
          @media (max-width: 480px) {
            .hero-content-responsive {
              padding: 1rem 0;
            }

            .typing-container-responsive {
              min-height: 70px;
              margin-bottom: 1.25rem;
              padding: 0 0.25rem;
              justify-content: center;
            }

            .typing-text-wrapper {
              width: 100%;
              max-width: 100%;
              margin: 0;
            }

            .typing-text-responsive {
              font-size: var(--font-size-3xl);
              line-height: 1.3;
              padding: 0 4px;
              text-align: left;
              margin: 0;
              display: inline-block;
              width: max-content;
              white-space: nowrap;
            }

            .typing-cursor {
              font-size: 0.8em;
            }

            .hero-subtitle-responsive {
              font-size: var(--font-size-lg);
              margin-bottom: 1.25rem;
              padding: 0 1rem;
            }

            .hero-btn-responsive {
              width: 100%;
              max-width: 260px;
              padding: 0.875rem 1.5rem;
              font-size: var(--font-size-sm);
              min-height: 44px;
            }
          }

          /* Extra small mobile (very narrow screens) */
          @media (max-width: 360px) {
            .typing-container-responsive {
              padding: 0;
            }

            .typing-text-wrapper {
              width: 100%;
              max-width: 100%;
            }

            .typing-text-responsive {
              font-size: var(--font-size-2xl);
              padding: 0 0.25rem;
              padding-right: 3px;
              text-align: left;
            }

            .typing-cursor {
              font-size: 0.7em;
            }
          }

          /* Touch-friendly adjustments */
          @media (hover: none) and (pointer: coarse) {
            .hero-btn-responsive {
              min-height: 48px;
              min-width: 48px;
            }

            .hero-btn-responsive:hover {
              transform: none;
            }

            .hero-btn-responsive:active {
              transform: scale(0.98);
              transition: transform 0.1s ease;
            }
          }

          /* Landscape mobile adjustments */
          @media (max-width: 768px) and (orientation: landscape) {
            .hero-content-responsive {
              padding: 0.5rem 0;
            }

            .typing-container-responsive {
              min-height: 60px;
              margin-bottom: 1rem;
            }

            .typing-text-responsive {
              font-size: var(--font-size-3xl);
            }

            .hero-subtitle-responsive {
              font-size: var(--font-size-lg);
              margin-bottom: 1rem;
            }

            .hero-btn-responsive {
              max-width: 220px;
              padding: 0.75rem 1.5rem;
            }
          }

          /* High DPI displays */
          @media (min-resolution: 2dppx) {
            .typing-text-responsive {
              text-rendering: optimizeLegibility;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }
          }

          /* Reduced motion preferences */
          @media (prefers-reduced-motion: reduce) {
            .typing-text-responsive.typing::after,
            .typing-text-responsive.erasing::after {
              animation: none;
              background-color: var(--color-accent);
            }

            .hero-btn-responsive {
              transition: none;
            }

            .hero-btn-responsive:hover {
              transform: none;
            }
          }

          /* Dark/Light theme specific adjustments */
          [data-theme="light"] .typing-text-responsive {
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }

          [data-theme="dark"] .typing-text-responsive {
            text-shadow: 0 0 10px rgba(139, 0, 139, 0.3);
          }
        `}
      </style>
    </section>
  );
};

export default HeroSection; 