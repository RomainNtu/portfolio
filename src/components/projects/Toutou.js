import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import toutou from '../../images/toutou.png';

function Toutou() {
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
              <li>Commentaires et avis</li>
            </ul>
          </div>
        </div>
        <div className="mt-8">
          <Link
            to="/"
            className="cursor-pointer text-blue-500 hover:underline"
          >
            Retour aux projets
          </Link>
        </div>
      </div>
    </motion.section>
  );
}

export default Toutou;