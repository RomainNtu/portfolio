import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { scroller } from 'react-scroll';
import { Link } from 'react-router-dom';
import bomberman from '../images/bomberman.png';
import lensjudge from '../images/lensjudge.png';
import toutou from '../images/toutou.png';

const cardVariants = {
  initial: {
    scale: 1,
    rotateX: 0,
    rotateY: 0,
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      type: 'spring',
      stiffness: 300,
    },
  },
};

function Projects() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setMousePosition({ x, y });
  };

  const handleScroll = (e) => {
    if (e.deltaY > 0) {
      scroller.scrollTo('contact', {
        duration: 500,
        smooth: true,
      });
    } else if (e.deltaY < 0) {
      scroller.scrollTo('about', {
        duration: 500,
        smooth: true,
      });
    }
  };

  const projectData = [
    {
      title: 'Bomberman',
      description: "Développement d'un jeu vidéo en Java, reprenant les mécaniques classiques du jeu Bomberman.",
      link: '/bomberman',
      image: bomberman
    },
    {
      title: 'Lens Judge',
      description: "Création d'une application d'évaluation automatique pour les compétitions de programmation.",
      link: '/lensjudge',
      image: lensjudge
    },
    {
      title: 'Toutou en vadrouille',
      description: "Conception d'un site web interactif pour partager des carnets de voyage, spécialement dédiés aux aventures avec son chien.",
      link: '/toutou',
      image: toutou
    },
  ];

  return (
    <motion.section
      id="projects"
      className="py-16 bg-gray-200 text-gray-800 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      onWheel={handleScroll}
    >
      <h2 className="text-4xl font-bold mb-6">Mes Projets</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center"
            variants={cardVariants}
            initial="initial"
            animate="initial"
            whileHover="hover"
            onMouseMove={handleMouseMove}
            style={{
              transform: `perspective(1000px) rotateX(${mousePosition.y / 10}deg) rotateY(${mousePosition.x / 10}deg)`,
            }}
          >
            <img src={project.image} alt={project.title} className="mb-4 rounded-lg shadow-md w-72 h-72 object-cover" />
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <Link
              to={project.link}
              className="inline-block bg-gray-800 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300 mt-4"
            >
              En savoir plus
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;