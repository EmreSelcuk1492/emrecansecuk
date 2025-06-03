import React, { useEffect, useState } from 'react';

const TheBoxMan: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showCube, setShowCube] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [showTimeline, setShowTimeline] = useState(false);

  useEffect(() => {
    // Set body background to black for this page
    document.body.style.backgroundColor = '#000000';
    document.body.style.color = '#ffffff';
    
    // Orchestrate the entrance animations
    const timer1 = setTimeout(() => setIsLoaded(true), 100);
    const timer2 = setTimeout(() => setShowCube(true), 1500);
    const timer3 = setTimeout(() => setShowTitle(true), 2500);
    const timer4 = setTimeout(() => setShowTimeline(true), 4000);
    
    return () => {
      // Reset on component unmount
      document.body.style.backgroundColor = '';
      document.body.style.color = '';
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  return (
    <div className="the-box-man">
      <style>
        {`
          /* Custom Monochrome Scrollbars */
          .the-box-man::-webkit-scrollbar {
            width: 12px;
          }

          .the-box-man::-webkit-scrollbar-track {
            background: #000000;
            border-left: 1px solid #333333;
          }

          .the-box-man::-webkit-scrollbar-thumb {
            background: linear-gradient(180deg, #666666, #333333);
            border-radius: 6px;
            border: 1px solid #ffffff;
          }

          .the-box-man::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(180deg, #ffffff, #999999);
          }

          .the-box-man::-webkit-scrollbar-corner {
            background: #000000;
          }

          /* Firefox scrollbar styling */
          .the-box-man {
            scrollbar-width: thin;
            scrollbar-color: #666666 #000000;
          }

          .the-box-man {
            min-height: 100vh;
            background: #000000;
            color: #ffffff;
            overflow-x: hidden;
            font-family: 'Inter', sans-serif;
            position: relative;
          }

          /* Eye Opening Aperture Effect */
          .aperture-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: radial-gradient(circle at center, transparent 0%, #000000 0%);
            z-index: 10000;
            transition: all 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            pointer-events: none;
          }

          .aperture-overlay.opening {
            background: radial-gradient(circle at center, transparent 100%, #000000 100%);
          }

          /* Digital Noise Effect */
          .noise-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            opacity: 0;
            background: 
              repeating-linear-gradient(
                90deg,
                transparent,
                transparent 2px,
                rgba(255, 255, 255, 0.1) 2px,
                rgba(255, 255, 255, 0.1) 4px
              ),
              repeating-linear-gradient(
                0deg,
                transparent,
                transparent 2px,
                rgba(255, 255, 255, 0.05) 2px,
                rgba(255, 255, 255, 0.05) 4px
              );
            animation: noiseFlicker 0.1s infinite;
            z-index: 9999;
            pointer-events: none;
          }

          .noise-overlay.active {
            opacity: 1;
            animation: noiseFlicker 0.1s infinite, noiseFadeOut 3s ease-out 1s forwards;
          }

          @keyframes noiseFlicker {
            0%, 100% { opacity: 0.1; }
            50% { opacity: 0.3; }
          }

          @keyframes noiseFadeOut {
            to { opacity: 0; }
          }

          .hero-section {
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: relative;
            background: linear-gradient(45deg, #000000 0%, #1a1a1a 50%, #000000 100%);
          }

          .cube-container {
            margin-bottom: 3rem;
            perspective: 1000px;
            perspective-origin: center center;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transform: scale(0) rotateY(180deg);
            transition: all 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            width: 200px;
            height: 200px;
          }

          .cube-container.show {
            opacity: 1;
            transform: scale(1) rotateY(0deg);
          }

          .hero-cube {
            width: 120px;
            height: 120px;
            position: relative;
            transform-style: preserve-3d;
            animation: crookedSpin 8s linear infinite;
            transition: transform 0.3s ease;
            filter: drop-shadow(0 0 30px rgba(255, 255, 255, 0.3));
            margin: auto;
          }

          .hero-cube.materializing {
            animation: crookedSpin 8s linear infinite, cubeMaterialize 2s ease-out;
          }

          @keyframes cubeMaterialize {
            0% {
              filter: drop-shadow(0 0 50px rgba(255, 255, 255, 1)) brightness(3);
              transform: rotateX(15deg) rotateY(0deg) rotateZ(10deg) scale(0.5);
            }
            50% {
              filter: drop-shadow(0 0 40px rgba(255, 255, 255, 0.8)) brightness(2);
              transform: rotateX(15deg) rotateY(180deg) rotateZ(10deg) scale(1.2);
            }
            100% {
              filter: drop-shadow(0 0 30px rgba(255, 255, 255, 0.3)) brightness(1);
              transform: rotateX(15deg) rotateY(360deg) rotateZ(10deg) scale(1);
            }
          }

          .hero-cube:hover {
            animation-play-state: paused;
            transform: rotateX(15deg) rotateY(45deg) rotateZ(10deg) scale(1.1);
            filter: drop-shadow(0 0 50px rgba(255, 255, 255, 0.5));
          }

          .hero-cube-face {
            position: absolute;
            width: 120px;
            height: 120px;
            opacity: 0.85;
            box-sizing: border-box;
            backdrop-filter: blur(2px);
            border-style: solid;
            border-width: 3px;
          }

          .hero-cube-face-front {
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
            border-color: #ffffff;
            transform: rotateY(0deg) translateZ(60px);
          }

          .hero-cube-face-back {
            background: linear-gradient(135deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5));
            border-color: #333333;
            transform: rotateY(180deg) translateZ(60px);
          }

          .hero-cube-face-right {
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.03));
            border-color: #cccccc;
            transform: rotateY(90deg) translateZ(60px);
          }

          .hero-cube-face-left {
            background: linear-gradient(135deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4));
            border-color: #555555;
            transform: rotateY(-90deg) translateZ(60px);
          }

          .hero-cube-face-top {
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.06));
            border-color: #ffffff;
            transform: rotateX(90deg) translateZ(60px);
          }

          .hero-cube-face-bottom {
            background: linear-gradient(135deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6));
            border-color: #222222;
            transform: rotateX(-90deg) translateZ(60px);
          }

          @keyframes crookedSpin {
            0% { transform: rotateX(15deg) rotateY(0deg) rotateZ(10deg); }
            25% { transform: rotateX(20deg) rotateY(90deg) rotateZ(5deg); }
            50% { transform: rotateX(10deg) rotateY(180deg) rotateZ(15deg); }
            75% { transform: rotateX(25deg) rotateY(270deg) rotateZ(8deg); }
            100% { transform: rotateX(15deg) rotateY(360deg) rotateZ(10deg); }
          }

          .hero-title {
            font-size: clamp(4rem, 12vw, 12rem);
            font-weight: 900;
            text-align: center;
            margin: 0;
            line-height: 0.8;
            letter-spacing: -0.05em;
            color: #ffffff;
            opacity: 0;
            transform: translateY(50px);
            transition: all 1s ease-out;
          }

          .hero-title.show {
            opacity: 1;
            transform: translateY(0);
            animation: textGlitch 0.5s ease-out 0.5s;
          }

          .hero-title.typewriter {
            overflow: hidden;
            border-right: 3px solid #ffffff;
            white-space: nowrap;
            animation: typewriter 2s steps(11) 0s forwards, blinkCursor 0.8s infinite 2s;
          }

          @keyframes typewriter {
            from { width: 0; }
            to { width: 100%; }
          }

          @keyframes blinkCursor {
            0%, 50% { border-color: #ffffff; }
            51%, 100% { border-color: transparent; }
          }

          @keyframes textGlitch {
            0%, 100% { transform: translateY(0); }
            20% { transform: translateY(-2px) translateX(2px); }
            40% { transform: translateY(2px) translateX(-2px); }
            60% { transform: translateY(-1px) translateX(1px); }
            80% { transform: translateY(1px) translateX(-1px); }
          }

          .hero-subtitle {
            font-size: clamp(1.5rem, 4vw, 3rem);
            font-weight: 300;
            margin-top: 2rem;
            opacity: 0;
            text-align: center;
            letter-spacing: 0.1em;
            color: #ffffff;
            transform: translateY(30px);
            transition: all 1s ease-out 0.5s;
          }

          .hero-subtitle.show {
            opacity: 0.8;
            transform: translateY(0);
          }

          .timeline-section {
            padding: 8rem 2rem;
            max-width: 1400px;
            margin: 0 auto;
            opacity: 0;
            transform: translateY(100px);
            transition: all 1.5s ease-out;
          }

          .timeline-section.show {
            opacity: 1;
            transform: translateY(0);
          }

          .timeline-header {
            font-size: clamp(3rem, 8vw, 8rem);
            font-weight: 900;
            margin-bottom: 4rem;
            text-align: center;
            position: relative;
            color: #ffffff;
            opacity: 0;
            animation: cascadeIn 1s ease-out 0.5s forwards;
          }

          .timeline-header::after {
            content: '';
            position: absolute;
            bottom: -1rem;
            left: 50%;
            transform: translateX(-50%);
            width: 0;
            height: 4px;
            background: linear-gradient(90deg, #666666, #ffffff);
            animation: underlineExpand 1s ease-out 1.5s forwards;
          }

          @keyframes cascadeIn {
            from {
              opacity: 0;
              transform: translateY(50px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes underlineExpand {
            from { width: 0; }
            to { width: 100px; }
          }

          .year-section {
            margin-bottom: 8rem;
            position: relative;
            opacity: 0;
            transform: translateX(-100px);
            animation: slideInFromLeft 1s ease-out forwards;
          }

          .year-section:nth-child(odd) {
            transform: translateX(100px);
            animation: slideInFromRight 1s ease-out forwards;
          }

          .year-section:nth-child(1) { animation-delay: 0.2s; }
          .year-section:nth-child(2) { animation-delay: 0.4s; }
          .year-section:nth-child(3) { animation-delay: 0.6s; }
          .year-section:nth-child(4) { animation-delay: 0.8s; }

          @keyframes slideInFromLeft {
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes slideInFromRight {
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .year-title {
            font-size: clamp(2rem, 6vw, 6rem);
            font-weight: 900;
            color: #ffffff;
            margin-bottom: 3rem;
            position: relative;
            display: inline-block;
          }

          .year-title::before {
            content: '▪';
            position: absolute;
            left: -4rem;
            top: 50%;
            transform: translateY(-50%);
            font-size: 2rem;
            color: #666666;
          }

          .achievements-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 3rem;
            margin-top: 3rem;
          }

          .achievement-card {
            background: rgba(255, 255, 255, 0.05);
            border: 2px solid rgba(255, 255, 255, 0.2);
            border-radius: 20px;
            padding: 3rem;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
            opacity: 0;
            transform: translateY(50px) scale(0.9);
            animation: cardMaterialize 0.8s ease-out forwards;
          }

          .achievement-card:nth-child(1) { animation-delay: 0.1s; }
          .achievement-card:nth-child(2) { animation-delay: 0.2s; }
          .achievement-card:nth-child(3) { animation-delay: 0.3s; }

          @keyframes cardMaterialize {
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          .achievement-card:hover {
            border-color: #ffffff;
            transform: translateY(-10px) scale(1.02);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
          }

          .achievement-title {
            font-size: 1.8rem;
            font-weight: 700;
            margin-bottom: 1rem;
            color: #ffffff;
          }

          .achievement-company {
            font-size: 1.2rem;
            color: #999999;
            font-weight: 600;
            margin-bottom: 1rem;
          }

          .achievement-description {
            font-size: 1.1rem;
            line-height: 1.6;
            opacity: 0.9;
            color: #ffffff;
          }

          .white-section {
            background: #ffffff;
            color: #000000;
            padding: 8rem 2rem;
            margin: 8rem 0;
            position: relative;
            overflow: hidden;
          }

          .white-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
            animation: shimmer 2s ease-out;
          }

          @keyframes shimmer {
            to { left: 100%; }
          }

          .white-section .timeline-header {
            color: #000000;
          }

          .white-section .year-title {
            color: #000000;
          }

          .white-section .year-title::before {
            color: #666666;
          }

          .white-section .achievement-card {
            background: rgba(0, 0, 0, 0.05);
            border: 2px solid rgba(0, 0, 0, 0.2);
            color: #000000;
          }

          .white-section .achievement-card:hover {
            border-color: #000000;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          }

          .white-section .achievement-title {
            color: #000000;
          }

          .white-section .achievement-company {
            color: #666666;
          }

          .white-section .achievement-description {
            color: #000000;
          }

          .back-button {
            position: fixed;
            top: 2rem;
            left: 2rem;
            background: rgba(255, 255, 255, 0.1);
            border: 2px solid #ffffff;
            border-radius: 50px;
            padding: 1rem 2rem;
            color: #ffffff;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
            z-index: 1000;
            opacity: 0;
            transform: translateX(-100px);
            animation: slideInFromLeft 1s ease-out 3s forwards;
          }

          .back-button:hover {
            background: #ffffff;
            color: #000000;
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(255, 255, 255, 0.2);
          }

          @media (max-width: 768px) {
            .timeline-section {
              padding: 4rem 1rem;
            }
            
            .achievements-grid {
              grid-template-columns: 1fr;
              gap: 2rem;
            }
            
            .achievement-card {
              padding: 2rem;
            }
            
            .year-title::before {
              left: -2rem;
              font-size: 1.5rem;
            }
            
            .back-button {
              top: 1rem;
              left: 1rem;
              padding: 0.75rem 1.5rem;
              font-size: 0.9rem;
            }

            .cube-container {
              width: 120px;
              height: 120px;
              perspective: 600px;
            }

            .hero-cube {
              width: 80px;
              height: 80px;
            }

            .hero-cube-face {
              width: 80px;
              height: 80px;
              border-width: 2px;
            }

            .hero-cube-face-front {
              transform: rotateY(0deg) translateZ(40px);
            }

            .hero-cube-face-back {
              transform: rotateY(180deg) translateZ(40px);
            }

            .hero-cube-face-right {
              transform: rotateY(90deg) translateZ(40px);
            }

            .hero-cube-face-left {
              transform: rotateY(-90deg) translateZ(40px);
            }

            .hero-cube-face-top {
              transform: rotateX(90deg) translateZ(40px);
            }

            .hero-cube-face-bottom {
              transform: rotateX(-90deg) translateZ(40px);
            }
          }

          @media (max-width: 480px) {
            .cube-container {
              width: 100px;
              height: 100px;
              perspective: 500px;
            }

            .hero-cube {
              width: 60px;
              height: 60px;
            }

            .hero-cube-face {
              width: 60px;
              height: 60px;
              border-width: 1.5px;
            }

            .hero-cube-face-front {
              transform: rotateY(0deg) translateZ(30px);
            }

            .hero-cube-face-back {
              transform: rotateY(180deg) translateZ(30px);
            }

            .hero-cube-face-right {
              transform: rotateY(90deg) translateZ(30px);
            }

            .hero-cube-face-left {
              transform: rotateY(-90deg) translateZ(30px);
            }

            .hero-cube-face-top {
              transform: rotateX(90deg) translateZ(30px);
            }

            .hero-cube-face-bottom {
              transform: rotateX(-90deg) translateZ(30px);
            }
          }
        `}
      </style>

      {/* Eye Opening Aperture Effect */}
      <div className={`aperture-overlay ${isLoaded ? 'opening' : ''}`} />
      
      {/* Digital Noise Effect */}
      <div className={`noise-overlay ${isLoaded ? 'active' : ''}`} />

      {/* Back to Portfolio Button */}
      <a href="/" className="back-button">
        ← Back to Portfolio
      </a>

      {/* Hero Section */}
      <section className="hero-section">
        <div className={`cube-container ${showCube ? 'show' : ''}`}>
          <div className={`hero-cube ${showCube ? 'materializing' : ''}`}>
            <div className="hero-cube-face hero-cube-face-front" />
            <div className="hero-cube-face hero-cube-face-back" />
            <div className="hero-cube-face hero-cube-face-right" />
            <div className="hero-cube-face hero-cube-face-left" />
            <div className="hero-cube-face hero-cube-face-top" />
            <div className="hero-cube-face hero-cube-face-bottom" />
          </div>
        </div>
        <h1 className={`hero-title ${showTitle ? 'show typewriter' : ''}`}>THE BOX MAN</h1>
        <p className={`hero-subtitle ${showTitle ? 'show' : ''}`}>EMRE CAN SELCUK</p>
      </section>

      {/* Timeline Section */}
      <section className={`timeline-section ${showTimeline ? 'show' : ''}`}>
        <h2 className="timeline-header">TIMELINE</h2>

        {/* 2022 */}
        <div className="year-section">
          <h3 className="year-title">2022</h3>
          <div className="achievements-grid">
            <div className="achievement-card">
              <h4 className="achievement-title">Started University Journey</h4>
              <p className="achievement-company">Academic Foundation</p>
              <p className="achievement-description">
                Began building the foundation for software engineering expertise and technical skills development.
              </p>
            </div>
            <div className="achievement-card">
              <h4 className="achievement-title">First Technical Projects</h4>
              <p className="achievement-company">Personal Development</p>
              <p className="achievement-description">
                Started exploring programming fundamentals and building initial projects to understand core concepts.
              </p>
            </div>
          </div>
        </div>

        {/* 2023 - White Section */}
        <div className="white-section">
          <div className="year-section">
            <h3 className="year-title">2023</h3>
            <div className="achievements-grid">
              <div className="achievement-card">
                <h4 className="achievement-title">Research Internship</h4>
                <p className="achievement-company">MAHI Lab, Houston</p>
                <p className="achievement-description">
                  Gained hands-on experience in research methodologies and technical problem-solving in a professional environment.
                </p>
              </div>
              <div className="achievement-card">
                <h4 className="achievement-title">Technical Skills Expansion</h4>
                <p className="achievement-company">Skill Development</p>
                <p className="achievement-description">
                  Deepened understanding of software development practices and expanded technical toolkit.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 2024 */}
        <div className="year-section">
          <h3 className="year-title">2024</h3>
          <div className="achievements-grid">
            <div className="achievement-card">
              <h4 className="achievement-title">AI-Tales Engineer</h4>
              <p className="achievement-company">Seoul, South Korea</p>
              <p className="achievement-description">
                Built GPT-powered educational technology solutions, shipping innovative AI-driven products to market.
              </p>
            </div>
            <div className="achievement-card">
              <h4 className="achievement-title">Technical Project Manager</h4>
              <p className="achievement-company">Entegris, Boston</p>
              <p className="achievement-description">
                Led AI implementation strategies and guided technical rollouts in enterprise environments.
              </p>
            </div>
            <div className="achievement-card">
              <h4 className="achievement-title">Systems Development</h4>
              <p className="achievement-company">Z-Sistem, Ankara</p>
              <p className="achievement-description">
                Worked on VTOL drone camera calibration systems, developing precision technical solutions.
              </p>
            </div>
          </div>
        </div>

        {/* 2025 - White Section */}
        <div className="white-section">
          <div className="year-section">
            <h3 className="year-title">2025</h3>
            <div className="achievements-grid">
              <div className="achievement-card">
                <h4 className="achievement-title">Jenni.AI SWE Intern</h4>
                <p className="achievement-company">Seoul, South Korea</p>
                <p className="achievement-description">
                  Full-time software engineering internship building advanced AI-powered writing and research tools.
                </p>
              </div>
              <div className="achievement-card">
                <h4 className="achievement-title">ManuscriptCheck.ai Co-founder</h4>
                <p className="achievement-company">Entrepreneurship</p>
                <p className="achievement-description">
                  Co-founded an AI tool that streamlines the academic publishing process, revolutionizing research workflows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TheBoxMan; 