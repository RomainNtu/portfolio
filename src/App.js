import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Bomberman from './components/projects/Bomberman';
import LensJudge from './components/projects/LensJudge';
import Toutou from './components/projects/Toutou';
import GitHubLogo from './components/GitHubLogo';
import LinkedInLogo from './components/LinkedInLogo';
import DownloadCVButton from './components/DownloadCVButton';

function App() {
  const location = useLocation();
  const hideSidebar = location.pathname === '/bomberman' || location.pathname === '/lensjudge' || location.pathname === '/toutou';

  return (
    <div>
      {!hideSidebar && <Sidebar />}
      <GitHubLogo />
      <LinkedInLogo />
      <DownloadCVButton />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <About />
            <Projects />
            <Contact />
          </>
        } />
        <Route path="/bomberman" element={<Bomberman />} />
        <Route path="/lensjudge" element={<LensJudge />} />
        <Route path="/toutou" element={<Toutou />} />
      </Routes>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;