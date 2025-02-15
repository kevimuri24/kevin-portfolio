import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const projects = [
    {
      image: "/api/placeholder/1200/600",
      title: "Digital Experience Design",
      description: "Fuelled by my love for both art and technology, I embarked on a career path that seamlessly blends these two worlds. Currently, I offer Web Design and Development and Digital Marketing services to ambitious companies brimming with incredible potential for success.",
      category: "Web Design"
    },
    {
      image: "/api/placeholder/1200/600",
      title: "Brand Identity Development",
      description: "Whether it's crafting visually captivating websites or devising innovative digital marketing strategies, I thrive on transforming ideas into impactful digital experiences.",
      category: "Branding"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-teal-600 mb-2">MY PORTFOLIO</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest Works
          </h2>
          <p className="text-gray-600">
            What sets me apart is not just my <span className="text-teal-600">technical expertise</span> but 
            also my commitment to sharing great ideas.
          </p>
        </div>

        {/* Project Showcase */}
        <div className="relative bg-gray-50 rounded-3xl overflow-hidden">
          <div className="aspect-[16/9] relative">
            <img
              src={projects[currentSlide].image}
              alt={projects[currentSlide].title}
              className="w-full h-full object-cover"
            />
            
            {/* Category Badge */}
            <div className="absolute top-6 left-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white text-teal-600">
                {projects[currentSlide].category}
              </span>
            </div>

            {/* View Project Button */}
            <div className="absolute bottom-6 right-6">
              <button className="inline-flex items-center px-6 py-3 rounded-full bg-teal-600 text-white hover:bg-teal-700 transition-colors">
                View Project
                <ExternalLink className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Project Info */}
          <div className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {projects[currentSlide].title}
            </h3>
            <p className="text-gray-600 max-w-3xl">
              {projects[currentSlide].description}
            </p>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between p-8 border-t border-gray-100">
            <span className="text-sm text-gray-500">
              {currentSlide + 1} / {projects.length}
            </span>
            <div className="flex space-x-4">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full hover:bg-gray-100 text-gray-600 hover:text-teal-600 transition-colors"
                aria-label="Previous project"
              >
                <ArrowLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full hover:bg-gray-100 text-gray-600 hover:text-teal-600 transition-colors"
                aria-label="Next project"
              >
                <ArrowRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;