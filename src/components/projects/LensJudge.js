import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import lensjudge from '../../images/lensjudge_banniere.png';

function LensJudge() {
  const navigate = useNavigate();

  return (
    <motion.section
      id="lensjudge"
      className="py-16 bg-gray-100 text-gray-800 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="relative w-full h-48 mb-8">
          <img src={lensjudge} alt="LensJudge" className="w-full h-full object-cover rounded-lg shadow-lg" />
        </div>
        <h2 className="text-4xl font-bold mb-4">LensJudge</h2>
        <p className="text-lg mb-8">
          Création d'une application d'évaluation automatique pour les compétitions de programmation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Technologies utilisées</h3>
            <ul className="list-disc list-inside text-left">
              <li>Java</li>
              <li>Python</li>
              <li>C</li>
              <li>C++</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Fonctionnalités</h3>
            <ul className="list-disc list-inside text-left">
              <li>Évaluation automatique des soumissions</li>
              <li>Compilation et exécution du code</li>
            </ul>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg mt-8">
          <h3 className="text-2xl font-bold mb-4">Détails supplémentaires</h3>
          <p className="text-left">
            LensJudge est une application d'évaluation automatique conçue pour les compétitions de programmation. Elle permet aux participants de soumettre leur code (Java, Python, C, C++) et de recevoir une évaluation instantanée (compilation, execution). Le code source est disponible sur GitHub.
          </p>
          <a
            href="https://github.com/RomainNtu/lensjudge"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-800 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300 mt-4"
          >
            Voir le dépôt GitHub
          </a>
        </div>
        <div className="mt-8">
          <button
            onClick={() => navigate(-1)}
            className="inline-block text-gray-800 border border-gray-800 py-2 px-4 rounded-lg shadow-lg hover:bg-gray-800 hover:text-white transition duration-300"
          >
            Retour aux projets
          </button>
        </div>
      </div>
    </motion.section>
  );
}

export default LensJudge;