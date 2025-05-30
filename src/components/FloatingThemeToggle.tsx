import React from 'react';
import { useTheme } from '../context/ThemeContext';

const FloatingThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const cubeStyle = {
    width: '40px',
    height: '40px',
    position: 'relative' as const,
    transformStyle: 'preserve-3d' as const,
    animation: 'crookedSpin 4s linear infinite',
    transition: 'transform 0.3s ease'
  };

  const faceStyle = {
    position: 'absolute' as const,
    width: '40px',
    height: '40px',
    backgroundColor: theme === 'light' ? 'rgba(26, 26, 26, 0.3)' : 'rgba(255, 255, 255, 0.3)',
    border: `2px solid ${theme === 'light' ? '#333' : '#ddd'}`,
    opacity: 0.8,
    boxSizing: 'border-box' as const
  };

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
        `}
      </style>
      <button 
        className="floating-theme-toggle"
        onClick={toggleTheme}
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          width: '80px',
          height: '80px',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all var(--transition-base)',
          zIndex: 1000,
          perspective: '800px'
        }}
      >
        <div className="cube" style={cubeStyle}>
          {/* Front face */}
          <div style={{
            ...faceStyle,
            transform: 'rotateY(0deg) translateZ(20px)'
          }} />
          
          {/* Back face */}
          <div style={{
            ...faceStyle,
            transform: 'rotateY(180deg) translateZ(20px)'
          }} />
          
          {/* Right face */}
          <div style={{
            ...faceStyle,
            transform: 'rotateY(90deg) translateZ(20px)'
          }} />
          
          {/* Left face */}
          <div style={{
            ...faceStyle,
            transform: 'rotateY(-90deg) translateZ(20px)'
          }} />
          
          {/* Top face */}
          <div style={{
            ...faceStyle,
            transform: 'rotateX(90deg) translateZ(20px)'
          }} />
          
          {/* Bottom face */}
          <div style={{
            ...faceStyle,
            transform: 'rotateX(-90deg) translateZ(20px)'
          }} />
        </div>
      </button>
    </>
  );
};

export default FloatingThemeToggle; 