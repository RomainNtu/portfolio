import React from 'react';

function LinkedInLogo() {
  return (
    <a
      href="https://www.linkedin.com/in/romain-notteau"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed top-4 right-16 z-50 bg-black bg-opacity-50 p-2 rounded-full"
    >
      <svg
        className="w-8 h-8 text-white hover:text-gray-400 transition duration-300"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.79-1.75 1.75-1.75 1.75.79 1.75 1.75-.79 1.75-1.75 1.75zm13.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"
        />
      </svg>
    </a>
  );
}

export default LinkedInLogo;