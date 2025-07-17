import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingThemeToggle from './components/FloatingThemeToggle';
import SocialMediaPanel from './components/SocialMediaPanel';
import { ThemeProvider } from './context/ThemeContext';
import './styles.css';

// Lazy load heavy components
const AboutSection = lazy(() => import('./components/AboutSection'));
const TheBoxMan = lazy(() => import('./components/TheBoxMan'));

// Loading component for suspense fallback
const LoadingSpinner = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    minHeight: '200px',
    color: 'var(--color-text-primary)'
  }}>
    <div>Loading...</div>
  </div>
);

// Main Portfolio Component
const Portfolio = () => (
  <>
    <Navigation />
    <main>
      <HeroSection />
      <Suspense fallback={<LoadingSpinner />}>
        <AboutSection />
      </Suspense>
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
            <Route 
              path="/theBoxMan" 
              element={
                <Suspense fallback={<LoadingSpinner />}>
                  <TheBoxMan />
                </Suspense>
              } 
            />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
