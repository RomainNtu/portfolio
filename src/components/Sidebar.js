import React from 'react';
import { Link } from 'react-scroll';

const sections = [
  { name: 'Accueil', id: 'home' },
  { name: 'À propos', id: 'about' },
  { name: 'Projets', id: 'projects' },
  { name: 'Contact', id: 'contact' },
];

function Sidebar() {
  return (
    <div className="fixed top-1/2 left-4 transform -translate-y-1/2 flex flex-col space-y-4">
      {sections.map((section, index) => (
        <Link
          key={index}
          to={section.id}
          smooth={true}
          duration={500}
          className="cursor-pointer"
          activeClass="active"
          spy={true}
        >
          <div className="w-4 h-4 bg-gray-400 rounded-full hover:bg-gray-600 transition duration-300 active:bg-blue-500"></div>
        </Link>
      ))}
    </div>
  );
}

export default Sidebar;