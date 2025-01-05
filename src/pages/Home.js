import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default Home;
