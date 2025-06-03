import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingThemeToggle from './components/FloatingThemeToggle';
import SocialMediaPanel from './components/SocialMediaPanel';
import TheBoxMan from './components/TheBoxMan';
import { ThemeProvider } from './context/ThemeContext';
import './styles.css';

// Main Portfolio Component
const Portfolio = () => (
  <>
    <Navigation />
    <main>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </main>
    <Footer />
    <FloatingThemeToggle />
    <SocialMediaPanel />
  </>
);

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/theBoxMan" element={<TheBoxMan />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
