import React from 'react';
import { Link, scroller } from 'react-scroll';
import { motion } from 'framer-motion';

function HeroSection() {
  const handleScroll = (e) => {
    if (e.deltaY > 0) {
      scroller.scrollTo('about', {
        duration: 500,
        smooth: true,
      });
    }
  };

  return (
    <div
      id="home"
      className="hero-container bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white flex flex-col items-center justify-center h-screen relative"
      onWheel={handleScroll}
    >
      <div className="hero-content text-center mb-8 relative z-10">
        <h1 className="text-5xl font-bold mb-4 animate-fade-in">Romain Notteau</h1>
        <p className="text-2xl animate-fade-in">Développeur Web Fullstack</p>
      </div>

      <Link
        to="about"
        smooth={true}
        duration={500}
        className="cursor-pointer mt-auto mb-4 relative z-10"
      >
        <motion.div
          className="text-white text-2xl flex flex-col items-center animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <span className="mb-2">Défiler vers le bas</span>
          <span>↓</span>
        </motion.div>
      </Link>

      <div className="absolute bottom-4 left-4 bg-gray-800 bg-opacity-75 p-4 rounded-lg shadow-lg text-white">
        <h3 className="text-xl font-bold mb-2">Technologies utilisées</h3>
        <ul className="list-disc list-inside">
          <li>React</li>
          <li>Tailwind CSS</li>
          <li>Framer Motion</li>
          <li>React Router</li>
          <li>EmailJS</li>
        </ul>
      </div>
    </div>
  );
}

export default HeroSection;