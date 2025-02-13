import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen pr-64"> {/* Right padding for sidebar */}
      <div className="grid grid-cols-2 min-h-screen">
        {/* Left Content */}
        <div className="flex flex-col justify-center p-16 relative">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-red-50 rounded-full -translate-x-16 -translate-y-16" />
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-gray-50 rounded-full translate-x-8 translate-y-8" />
          
          <div className="relative">
            <p className="text-sm uppercase mb-4">
              <span className="text-gray-800">FULLSTACK DEVELOPER</span>
              <span className="text-red-500 mx-2">AND</span>
              <span className="text-gray-800">DESIGNER</span>
            </p>
            
            <h1 className="text-6xl font-bold mb-8">
              <span className="block">HELLO I'M</span>
              <span className="text-red-500">KEVIN</span>
              <span className="text-gray-900"> MURIUKI</span>
            </h1>
            
            <p className="text-gray-600 mb-12 max-w-md">
              I believe that collaboration and creativity are the cornerstones of progress, 
              and I am dedicated to bringing a fresh perspective to every project I undertake.
            </p>
            
            <button className="border-2 border-gray-900 px-8 py-3 hover:bg-gray-900 hover:text-white transition-colors group relative overflow-hidden rounded-full">
              <span className="relative z-10">Explore my work</span>
              <div className="absolute inset-0 bg-gray-900 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="absolute inset-0 bg-gray-50 rounded-bl-md" />
          <img
            src="/kevin_profile.jpg"
            alt="Professional portrait"
            className="absolute inset-0 w-full h-full object-cover mix-blend-multiply rounded-bl-4xl"
          />
          {/* Overlay pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjEiIGZpbGw9InJnYmEoMCwwLDAsMC4xKSIvPjwvZz48L3N2Zz4=')] opacity-30" />
        </div>
      </div>
    </section>
  );
};

export default Hero;