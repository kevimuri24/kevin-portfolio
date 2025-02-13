import React from 'react';
import { Mail, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="mb-8 lg:mb-0">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Hello! I'm Your Name
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Web Designer and Developer passionate about creating exceptional digital experiences.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-gray-400" />
                <span className="text-gray-600">your.email@example.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-gray-400" />
                <span className="text-gray-600">(123) 456-7890</span>
              </div>
            </div>
          </div>
          <div className="lg:relative lg:h-96">
            <img
              src="/api/placeholder/600/400"
              alt="Professional headshot"
              className="rounded-lg shadow-lg object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;