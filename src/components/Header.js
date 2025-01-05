import React from 'react';
import { Link } from 'react-scroll';

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white p-4 z-50">
      <nav>
        <ul className="flex justify-center space-x-6">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-gray-400 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-gray-400 transition duration-300 ease-in-out transform hover:scale-105"
            >
              À propos
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-gray-400 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Projets
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-gray-400 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;