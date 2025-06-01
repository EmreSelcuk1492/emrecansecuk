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

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    let timeoutId: number;

    if (isTyping) {
      // Typing phase
      if (displayText.length < currentText.length) {
        timeoutId = setTimeout(() => {
          setDisplayText(currentText.substring(0, displayText.length + 1));
        }, 80);
      } else {
        // Finished typing, wait then start erasing
        timeoutId = setTimeout(() => {
          setIsTyping(false);
        }, 2500);
      }
    } else {
      // Erasing phase
      if (displayText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, 40);
      } else {
        // Finished erasing, move to next text
        timeoutId = setTimeout(() => {
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
          setIsTyping(true);
        }, 500);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [displayText, isTyping, currentTextIndex]);

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
            <div className="typing-text-responsive">
              {displayText}<span className="typing-cursor">|</span>
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
            padding: 0 1rem;
          }

          .typing-text-responsive {
            font-size: var(--font-size-6xl);
            font-weight: 800;
            color: var(--color-text-primary);
            text-shadow: 0 0 10px var(--color-shadow);
            white-space: nowrap;
            text-align: center;
            line-height: 1.1;
          }

          .typing-cursor {
            color: var(--color-accent);
            animation: blink-caret 1s step-end infinite;
            font-weight: inherit;
            font-size: inherit;
          }

          @keyframes blink-caret {
            from, to { opacity: 1; }
            50% { opacity: 0; }
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

          /* Mobile responsive */
          @media (max-width: 768px) {
            .typing-container-responsive {
              min-height: 100px;
              margin-bottom: 1.5rem;
              padding: 0 0.5rem;
            }

            .typing-text-responsive {
              font-size: var(--font-size-4xl);
              white-space: normal;
              text-align: center;
              line-height: 1.2;
              word-break: keep-all;
              max-width: 100%;
            }

            .hero-subtitle-responsive {
              font-size: var(--font-size-xl);
              margin-bottom: 1.5rem;
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
            .typing-container-responsive {
              min-height: 80px;
              margin-bottom: 1.25rem;
              padding: 0 0.25rem;
            }

            .typing-text-responsive {
              font-size: var(--font-size-3xl);
              line-height: 1.3;
            }

            .hero-subtitle-responsive {
              font-size: var(--font-size-lg);
              margin-bottom: 1.25rem;
              padding: 0 1rem;
            }

            .hero-btn-responsive {
              max-width: 260px;
              padding: 0.875rem 1.5rem;
              font-size: var(--font-size-sm);
              min-height: 44px;
            }
          }

          /* Touch-friendly adjustments */
          @media (hover: none) and (pointer: coarse) {
            .hero-btn-responsive:hover {
              transform: none;
            }

            .hero-btn-responsive:active {
              transform: scale(0.98);
              transition: transform 0.1s ease;
            }
          }
        `}
      </style>
    </section>
  );
};

export default HeroSection; 