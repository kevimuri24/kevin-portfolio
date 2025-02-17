import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProjectDetailModal from "../../components/common/ProjectDetailModal";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Mockup Design",
      description: "A sample design project",
      client: "Alvaro Morata",
      category: "Design",
      date: "July 01, 2022",
      image: "/api/placeholder/800/600",
    },
    {
      id: 2,
      title: "Soundcloud Audio",
      description: "A great audio project",
      image: "/api/placeholder/800/600",
    }
  ];

  const goToNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => 
        prevIndex === projects.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const goToPrevious = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? projects.length - 1 : prevIndex - 1
      );
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Auto-advance carousel every 6 seconds
  useEffect(() => {
    const interval = setInterval(goToNext, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <div id="portfolio" className="py-64 sm:py-8 md:py-64 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          My Portfolio
        </h2>

        <div className="relative">
          {/* Navigation Buttons */}
          <button 
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors z-10"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          
          <button 
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors z-10"
            aria-label="Next project"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Project Display */}
          <div className="relative overflow-hidden rounded-xl shadow-xl">
            <div 
              className="cursor-pointer"
              onClick={() => handleProjectClick(projects[currentIndex])}
            >
              <div className="relative group">
                <img 
                  src={projects[currentIndex].image} 
                  alt={projects[currentIndex].title}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-6">
                    <h3 className="text-2xl font-bold mb-2">{projects[currentIndex].title}</h3>
                    <p className="text-lg">{projects[currentIndex].description}</p>
                    {projects[currentIndex].category && (
                      <span className="inline-block mt-3 px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm">
                        {projects[currentIndex].category}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-gray-800' : 'bg-gray-300'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Project Information */}
        <div className="text-center mt-6">
          <h3 className="text-xl font-semibold text-gray-900">
            {projects[currentIndex].title}
          </h3>
          {/* {projects[currentIndex].client && (
            <p className="text-gray-600 mt-2">
              Client: {projects[currentIndex].client}
            </p>
          )}
          {projects[currentIndex].date && (
            <p className="text-gray-600">
              Date: {projects[currentIndex].date}
            </p>
          )} */}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default Portfolio;