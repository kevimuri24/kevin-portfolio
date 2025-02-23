import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 py-6 mt-auto">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-600 text-sm">
          <span className='font-bold'>© {currentYear} </span><span className="text-lg font-bold text-cyan-300"> Kevin Muriuki</span> <span className='font-bold'>All rights reserved.</span> 
        </p>
      </div>
    </footer>
  );
};

export default Footer;