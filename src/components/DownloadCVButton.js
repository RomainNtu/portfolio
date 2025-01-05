import React from 'react';

function DownloadCVButton() {
  return (
    <a
      href="/CV_Romain_Notteau_FR.pdf"
      download
      className="fixed top-4 left-4 z-50 bg-gray-700 text-white px-4 py-2 rounded-full hover:bg-gray-600 transition duration-300 shadow-lg"
    >
      Télécharger CV
    </a>
  );
}

export default DownloadCVButton;