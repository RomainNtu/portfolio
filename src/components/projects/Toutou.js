import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import toutou from '../../images/toutou_banniere.png';

function Toutou() {
  const navigate = useNavigate();

  return (
    <motion.section
      id="toutou"
      className="py-16 bg-gray-100 text-gray-800 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="relative w-full h-48 mb-8">
          <img src={toutou} alt="Toutou en vadrouille" className="w-full h-full object-cover rounded-lg shadow-lg" />
        </div>
        <h2 className="text-4xl font-bold mb-4">Toutou en vadrouille</h2>
        <p className="text-lg mb-8">
          Conception d'un site web interactif pour partager des carnets de voyage, spécialement dédiés aux aventures avec son chien.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Technologies utilisées</h3>
            <ul className="list-disc list-inside text-left">
              <li>Laravel</li>
              <li>MySQL</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Fonctionnalités</h3>
            <ul className="list-disc list-inside text-left">
              <li>Création et partage de carnets de voyage</li>
              <li>Recherche et filtrage des carnets</li>
              <li>Commentaires et évaluations</li>
            </ul>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg mt-8">
          <h3 className="text-2xl font-bold mb-4">Détails supplémentaires</h3>
          <p className="text-left">
            Toutou en vadrouille est un site web interactif permettant aux utilisateurs de partager leurs aventures avec leur chien. Les utilisateurs peuvent créer et partager des carnets de voyage, rechercher et filtrer les carnets existants, et laisser des commentaires et des évaluations. Le code source est disponible sur GitHub.
          </p>
          <a
            href="https://github.com/RomainNtu/toutou"
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

export default Toutou;