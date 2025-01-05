import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { scroller } from 'react-scroll';
import photo from '../images/photo.jpg';
import parcours from '../images/parcours.jpg';
import qualites from '../images/qualites.jpg';
import motivation from '../images/motivation.jpg';

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

function About() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setMousePosition({ x, y });
  };

  const handleScroll = (e) => {
    if (e.deltaY > 0) {
      scroller.scrollTo('projects', {
        duration: 500,
        smooth: true,
      });
    } else if (e.deltaY < 0) {
      scroller.scrollTo('home', {
        duration: 500,
        smooth: true,
      });
    }
  };

  return (
    <motion.section
      id="about"
      className="py-16 bg-gray-100 text-gray-800 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      onWheel={handleScroll}
    >
      <h2 className="text-4xl font-bold mb-6">À propos de moi</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {[{
          img: photo,
          title: 'Qui suis-je ?',
          text: 'Je suis Romain Notteau, développeur web fullstack, passionné par la création d\'applications performantes et intuitives.',
        }, {
          img: parcours,
          title: 'Mon parcours',
          text: 'Avec une formation en informatique industrielle et plusieurs expériences professionnelles, j\'ai acquis des compétences solides en JavaScript/TypeScript, Node.js, Laravel, et PostgreSQL.',
        }, {
          img: qualites,
          title: 'Mes qualités',
          text: 'Curieux et rigoureux, je mène mes projets avec efficacité, en veillant à la qualité du code et à l\'expérience utilisateur.',
        }, {
          img: motivation,
          title: 'Ma motivation',
          text: 'Toujours prêt à relever de nouveaux défis, je suis motivé par l\'innovation et le travail d\'équipe.',
        }].map((card, index) => (
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
            <img src={card.img} alt={card.title} className="mb-4 rounded-full shadow-lg w-36 h-36 object-cover" />
            <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
            <p className="text-lg">{card.text}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default About;