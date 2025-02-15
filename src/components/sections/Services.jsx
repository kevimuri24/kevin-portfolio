import React from 'react';
import { Code, Palette, Share2, Megaphone } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
    <div className="mb-6 inline-block p-3 bg-teal-50 rounded-xl text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Creating responsive and dynamic web applications using modern technologies.',
      icon: Code
    },
    {
      title: 'UI/UX Design',
      description: 'Designing intuitive and beautiful user interfaces that engage and delight.',
      icon: Palette
    },
    {
      title: 'Digital Marketing',
      description: 'Strategic digital marketing solutions to grow your online presence.',
      icon: Megaphone
    },
    {
      title: 'Social Media',
      description: 'Building and managing effective social media strategies.',
      icon: Share2
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-teal-600 mb-2">MY SERVICES</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What I Do
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;