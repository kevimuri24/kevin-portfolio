import React from 'react';
import { Code, Palette, Paintbrush, Headset } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="group p-8 bg-white rounded-xl border-2 border-black hover:shadow-lg transition-all duration-300">
    <div className="mb-6 inline-block p-2 rounded-xl text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">
      <Icon className="w-12 h-12" />
    </div>
    <h3 className="mb-4 text-xl font-semibold text-gray-900">{title}</h3>
    <p className="text-gray-600 text-lg leading-relaxed">{description}</p>
  </div>
);

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Building lightning-fast, scalable, and maintainable web applications using modern frameworks and best practices.",
      icon: Code
      
    },
    {
      title: "UI/UX Design",
      description: "Designing sleek, user-friendly interfaces that blend aesthetics with functionality for a seamless experience.",
      icon: Palette
    },
    {
      title: "Graphic Design",
      description: "Creating compelling visuals, brand identities, and digital assets that leave a lasting impression.",
      icon: Paintbrush
    },
    {
      title: "Technical Support",
      description: "Providing expert troubleshooting, IT consultancy, and system optimization for smooth operations.",
      icon: Headset
    }
  ];

  return (
    <section id="services" className="py-32 bg-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-teal-600 mb-2">MY SERVICES</p>
          <h2 className="text-4xl font-bold text-gray-900">What I Do</h2>
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
