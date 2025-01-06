import React from 'react';

function DownloadCVButton() {
  return (
    <div className="fixed top-4 left-4 z-50 flex space-x-4">
      <a
        href="/CV_Romain_Notteau_FR.pdf"
        download
        className="bg-gray-700 text-white px-4 py-2 rounded-full hover:bg-gray-600 transition duration-300 shadow-lg"
      >
        Télécharger CV (FR)
      </a>
      <a
        href="/CV_Romain_Notteau_EN.pdf"
        download
        className="bg-gray-700 text-white px-4 py-2 rounded-full hover:bg-gray-600 transition duration-300 shadow-lg"
      >
        Download CV (EN)
      </a>
    </div>
  );
}

export default DownloadCVButton;