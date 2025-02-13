import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, MoveHorizontal } from 'lucide-react';

const Portfolio = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const projects = [
    {
      image: "/api/placeholder/1200/600",
      title: "Digital Experience Design",
      description: "Fuelled by my love for both art and technology, I embarked on a career path that seamlessly blends these two worlds. Currently, I offer Web Design and Development and Digital Marketing services to ambitious companies brimming with incredible potential for success."
    },
    {
      image: "/api/placeholder/1200/600",
      title: "Brand Identity Development",
      description: "Whether it's crafting visually captivating websites or devising innovative digital marketing strategies, I thrive on transforming ideas into impactful digital experiences."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="portfolio" className="min-h-screen pr-64 bg-white py-20">
      <div className="px-16">
        <h2 className="text-4xl font-normal mb-8">Portfolio</h2>
        
        <div className="mb-12">
          <p className="text-gray-600">
            What sets me apart is not just my <span className="text-red-500">technical expertise</span> but 
            also my commitment to sharing great ideas.
          </p>
        </div>

        {/* Project Showcase */}
        <div className="relative">
          <div className="relative aspect-[16/9] overflow-hidden">
            <img
              src={projects[currentSlide].image}
              alt={projects[currentSlide].title}
              className="w-full h-full object-cover"
            />
            
            {/* Navigation Button */}
            <button 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-4"
              onClick={nextSlide}
            >
              <MoveHorizontal className="w-6 h-6" />
            </button>

            {/* Read More Button */}
            <div className="absolute right-0 bottom-0 bg-red-500 text-white py-6 px-8">
              <span className="text-sm uppercase tracking-wider">Read More</span>
            </div>
          </div>

          {/* Project Info */}
          <div className="mt-8">
            <h3 className="text-2xl font-medium mb-4">
              {projects[currentSlide].title}
            </h3>
            <p className="text-gray-600 max-w-3xl">
              {projects[currentSlide].description}
            </p>
          </div>

          {/* Pagination */}
          <div className="mt-8 flex justify-between items-center">
            <span className="text-sm text-gray-500">
              {currentSlide + 1} / {projects.length}
            </span>
            <div className="flex space-x-4">
              <button
                onClick={prevSlide}
                className="p-2 hover:text-red-500 transition-colors"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 hover:text-red-500 transition-colors"
              >
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;