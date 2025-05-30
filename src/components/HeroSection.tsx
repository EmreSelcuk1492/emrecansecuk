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
  }, [displayText, isTyping, currentTextIndex, texts]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="typing-container">
            <div className={`typing-text ${isTyping ? 'typing' : 'erasing'}`}>
              {displayText}
            </div>
          </div>
          <p className="hero-subtitle">A passionate developer crafting digital experiences</p>
          <button className="btn" onClick={scrollToContact}>
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 