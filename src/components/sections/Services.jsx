import React from 'react';
import { Code, Palette, Share2, Megaphone } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Creating responsive and dynamic web applications using modern technologies.',
      Icon: Code
    },
    {
      title: 'UI/UX Design',
      description: 'Designing intuitive and beautiful user interfaces that engage and delight.',
      Icon: Palette
    },
    {
      title: 'Digital Marketing',
      description: 'Strategic digital marketing solutions to grow your online presence.',
      Icon: Megaphone
    },
    {
      title: 'Social Media',
      description: 'Building and managing effective social media strategies.',
      Icon: Share2
    }
  ];

  return (
    <section id="services" className="min-h-screen pr-64 bg-gray-50">
      <div className="px-16 py-20">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-sm uppercase mb-4">
            <span className="text-red-500">MY</span>
            <span className="text-gray-800 ml-2">SERVICES</span>
          </p>
          <h2 className="text-4xl font-bold text-gray-900">
            What I Do
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 group hover:shadow-xl transition-shadow duration-300"
            >
              <service.Icon size={32} className="text-red-500 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
              <div className="mt-6 flex items-center text-sm font-medium text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Learn More</span>
                <svg 
                  className="ml-2 w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17 8l4 4m0 0l-4 4m4-4H3" 
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;