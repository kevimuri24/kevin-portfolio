import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="#" className="py-12 md:py-16 lg:py-20 min-h-screen bg-gradient-to-b from-cyan-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <p className="inline-flex flex-wrap justify-center lg:justify-start items-center text-sm md:text-lg font-medium text-cyan-300 bg-cyan-50 px-3 py-2 md:px-4 md:py-2 rounded-full">
                <span>FULLSTACK DEV</span>
                <span className="mx-2">AND</span>
                <span>DESIGNER</span>
              </p>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                <span className="block mb-2">HELLO I'M</span>
                <span className="text-cyan-300">KEVIN</span>
                <span> MURIUKI</span>
              </h1>
            </div>
            
            <p className="text-gray-600 text-lg md:text-xl lg:text-2xl max-w-lg mx-auto lg:mx-0">
              A Fullstack Developer in Ottawa, with 8+ years of experience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="group inline-flex items-center justify-center px-6 py-4 md:p-6 border-2 border-gray-900 text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition-colors w-full sm:w-auto text-base md:text-lg">
                <a href="#portfolio" className="flex items-center">
                  Explore my work
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative mt-8 lg:mt-0">
            <div className="aspect-square relative z-10 max-w-md mx-auto">
              <img
                src="/hero.png"
                alt="Professional portrait"
                className="w-full h-full object-contain rounded-3xl"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute top-4 -left-4 w-16 md:w-24 h-16 md:h-24 bg-cyan-200 rounded-full blur-xl opacity-60" />
            <div className="absolute bottom-4 -right-4 w-20 md:w-32 h-20 md:h-32 bg-blue-200 rounded-full blur-xl opacity-60" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;