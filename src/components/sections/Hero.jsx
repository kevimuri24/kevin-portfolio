import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-16 min-h-screen bg-gradient-to-b from-teal-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-4rem)]">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-2">
              <p className="inline-flex items-center text-lg font-medium text-teal-600 bg-teal-50 px-4 py-2 rounded-full">
                <span>FULLSTACK DEV</span>
                <span className="mx-2">AND</span>
                <span>DESIGNER</span>
              </p>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
                <span className="block mb-2">HELLO I'M</span>
                <span className="text-teal-500">KEVIN</span>
                <span> MURIUKI</span>
              </h1>
            </div>
            
            <p className="text-gray-600 text-2xl max-w-lg mx-auto lg:mx-5 m-0">
              A Fullstack Developer in Ottawa, with 8+ years of experience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="inline-flex items-center justify-center p-6 border-2 border-gray-900 text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition-colors">
                Explore my work
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square relative z-10">
              <img
                src="/hero.png"
                alt="Professional portrait"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute top-4 -left-4 w-24 h-24 bg-teal-200 rounded-full blur-xl opacity-60" />
            <div className="absolute bottom-4 -right-4 w-32 h-32 bg-blue-200 rounded-full blur-xl opacity-60" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;