import React from 'react';
import { useTheme } from '../context/ThemeContext';

const FloatingThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <style>
        {`
          @keyframes crookedSpin {
            0% { transform: rotateX(15deg) rotateY(0deg) rotateZ(10deg); }
            100% { transform: rotateX(15deg) rotateY(360deg) rotateZ(10deg); }
          }
          
          .floating-theme-toggle:hover .cube {
            animation-play-state: paused;
            transform: rotateX(15deg) rotateY(45deg) rotateZ(10deg) scale(1.1);
          }

          .floating-theme-toggle {
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            width: 80px;
            height: 80px;
            background: rgba(var(--color-bg-primary-rgb, 255, 255, 255), 0.1);
            backdrop-filter: blur(10px);
            border: 1px solid var(--color-border);
            border-radius: 50%;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all var(--transition-base);
            z-index: 1000;
            perspective: 800px;
            box-shadow: var(--shadow-lg);
          }

          .floating-theme-toggle:hover {
            transform: scale(1.05);
            box-shadow: var(--shadow-xl);
            border-color: var(--color-accent-light);
          }

          .floating-theme-toggle:active {
            transform: scale(0.95);
          }

          .cube {
            width: 40px;
            height: 40px;
            position: relative;
            transform-style: preserve-3d;
            animation: crookedSpin 4s linear infinite;
            transition: transform 0.3s ease;
          }

          .cube-face {
            position: absolute;
            width: 40px;
            height: 40px;
            background-color: ${theme === 'light' ? 'rgba(26, 26, 26, 0.3)' : 'rgba(255, 255, 255, 0.3)'};
            border: 2px solid ${theme === 'light' ? '#333' : '#ddd'};
            opacity: 0.8;
            box-sizing: border-box;
          }

          .cube-face-front {
            transform: rotateY(0deg) translateZ(20px);
          }

          .cube-face-back {
            transform: rotateY(180deg) translateZ(20px);
          }

          .cube-face-right {
            transform: rotateY(90deg) translateZ(20px);
          }

          .cube-face-left {
            transform: rotateY(-90deg) translateZ(20px);
          }

          .cube-face-top {
            transform: rotateX(90deg) translateZ(20px);
          }

          .cube-face-bottom {
            transform: rotateX(-90deg) translateZ(20px);
          }

          /* Mobile Responsive */
          @media (max-width: 768px) {
            .floating-theme-toggle {
              bottom: 1.5rem;
              right: 1.5rem;
              width: 64px;
              height: 64px;
            }

            .cube {
              width: 32px;
              height: 32px;
            }

            .cube-face {
              width: 32px;
              height: 32px;
              border-width: 1.5px;
            }

            .cube-face-front {
              transform: rotateY(0deg) translateZ(16px);
            }

            .cube-face-back {
              transform: rotateY(180deg) translateZ(16px);
            }

            .cube-face-right {
              transform: rotateY(90deg) translateZ(16px);
            }

            .cube-face-left {
              transform: rotateY(-90deg) translateZ(16px);
            }

            .cube-face-top {
              transform: rotateX(90deg) translateZ(16px);
            }

            .cube-face-bottom {
              transform: rotateX(-90deg) translateZ(16px);
            }
          }

          /* Small Mobile */
          @media (max-width: 480px) {
            .floating-theme-toggle {
              bottom: 1rem;
              right: 1rem;
              width: 56px;
              height: 56px;
            }

            .cube {
              width: 28px;
              height: 28px;
            }

            .cube-face {
              width: 28px;
              height: 28px;
              border-width: 1px;
            }

            .cube-face-front {
              transform: rotateY(0deg) translateZ(14px);
            }

            .cube-face-back {
              transform: rotateY(180deg) translateZ(14px);
            }

            .cube-face-right {
              transform: rotateY(90deg) translateZ(14px);
            }

            .cube-face-left {
              transform: rotateY(-90deg) translateZ(14px);
            }

            .cube-face-top {
              transform: rotateX(90deg) translateZ(14px);
            }

            .cube-face-bottom {
              transform: rotateX(-90deg) translateZ(14px);
            }
          }

          /* Touch-friendly adjustments */
          @media (hover: none) and (pointer: coarse) {
            .floating-theme-toggle {
              min-width: 48px;
              min-height: 48px;
            }

            .floating-theme-toggle:hover {
              transform: none;
            }

            .floating-theme-toggle:active {
              transform: scale(0.9);
              transition: transform 0.1s ease;
            }

            .floating-theme-toggle:hover .cube {
              animation-play-state: running;
              transform: none;
            }
          }

          /* Landscape mobile adjustments */
          @media (max-width: 768px) and (orientation: landscape) {
            .floating-theme-toggle {
              bottom: 1rem;
              right: 1rem;
            }
          }

          /* Safe area adjustments for mobile devices with notches */
          @supports (bottom: env(safe-area-inset-bottom)) {
            .floating-theme-toggle {
              bottom: calc(1.5rem + env(safe-area-inset-bottom));
              right: calc(1.5rem + env(safe-area-inset-right));
            }

            @media (max-width: 480px) {
              .floating-theme-toggle {
                bottom: calc(1rem + env(safe-area-inset-bottom));
                right: calc(1rem + env(safe-area-inset-right));
              }
            }
          }
        `}
      </style>
      
      <button 
        className="floating-theme-toggle"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        <div className="cube">
          <div className="cube-face cube-face-front" />
          <div className="cube-face cube-face-back" />
          <div className="cube-face cube-face-right" />
          <div className="cube-face cube-face-left" />
          <div className="cube-face cube-face-top" />
          <div className="cube-face cube-face-bottom" />
        </div>
      </button>
    </>
  );
};

export default FloatingThemeToggle; 