import React from 'react';
import { Code, Palette, Headset, Speech } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="group py-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
    <div className="m-5 inline-block bg-teal-50 rounded-xl text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">
      <Icon size={42} />
    </div>
    <h3 className="mx-4 text-xl font-semibold text-gray-900">{title}</h3>
    <p className="m-0 p-4 text-lg text-gray-600">{description}</p>
  </div>
);

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Building responsive, high-performance web applications using modern technologies.',
      icon: Code
    },
    {
      title: 'UI/UX Design',
      description: 'Crafting user-friendly interfaces that enhance engagement and usability.',
      icon: Palette
    },
    {
      title: 'Training',
      description: 'Delivering hands-on training and workshops to empower teams with digital skills.',
      icon: Speech
    },
    {
      title: 'Technical Support',
      description: 'Providing expert troubleshooting and IT support to ensure seamless operations.',
      icon: Headset
    }
  ];

  return (
    <section id="services" className="py-64 bg-purple-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-md font-medium text-teal-600 mb-2">MY SERVICES</p>
          <h2 className="text-4xl font-bold text-gray-900">What I Do</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="border-2 border-black rounded-2xl">
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
