import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 py-6 mt-auto">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-600 text-sm">
          © {currentYear} <span className="text-lg font-bold text-cyan-300"> Kevin Muriuki</span>  All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;