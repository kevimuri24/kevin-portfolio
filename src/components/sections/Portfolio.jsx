import React, { useState, useCallback, memo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Memoized Navigation Button
const NavigationButton = memo(({ direction, onClick, children }) => (
  <button
    onClick={onClick}
    className={`absolute ${
      direction === 'left' ? 'left-0 -translate-x-6' : 'right-0 translate-x-6'
    } top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors z-10`}
    aria-label={`${direction} project`}
  >
    {children}
  </button>
));

// Memoized Project Card
const ProjectCard = memo(({ project, onClick }) => (
  <div className="cursor-pointer" onClick={() => onClick(project)}>
    <div className="relative group">
      <img
        src={project.video ? project.video.thumbnail : project.image}
        alt={project.title}
        className="w-full h-96 object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="text-white text-center p-6">
          <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
          <p className="text-lg">{project.description}</p>
          {project.category && (
            <span className="inline-block mt-3 px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm">
              {project.category}
            </span>
          )}
        </div>
      </div>
    </div>
  </div>
));

// Optimized Portfolio Component
const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Project data - consider moving to a separate file
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
      id: 5,
      title: "After Effects",
      description: "Music Synchronization",
      client: "Solo project",
      category: "Motion Graphics",
      video: {
        url: "https://player.vimeo.com/video/486450403",
        thumbnail: "/api/placeholder/800/600",
      },
    },
  ];

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  }, [projects.length]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  }, [projects.length]);

  const handleProjectClick = useCallback((project) => {
    setSelectedProject(project);
  }, []);

  // Use requestAnimationFrame for smooth transitions
  React.useEffect(() => {
    let rafId;
    const interval = setInterval(() => {
      rafId = requestAnimationFrame(goToNext);
    }, 6000);

    return () => {
      clearInterval(interval);
      cancelAnimationFrame(rafId);
    };
  }, [goToNext]);

  return (
    <div id="portfolio" className="relative py-16 md:py-24 bg-gradient-to-b from-cyan-50/50">
      {/* Optimized blur elements with reduced opacity and size */}
      <div className="absolute top-10 left-10 w-16 h-16 bg-cyan-200 rounded-full blur-lg opacity-40" />
      <div className="absolute bottom-10 right-10 w-20 h-20 bg-blue-200 rounded-full blur-lg opacity-40" />

      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          My Portfolio
        </h2>

        <div className="relative">
          <NavigationButton direction="left" onClick={goToPrevious}>
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </NavigationButton>

          <NavigationButton direction="right" onClick={goToNext}>
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </NavigationButton>

          <div className="relative overflow-hidden rounded-xl shadow-xl">
            <ProjectCard
              project={projects[currentIndex]}
              onClick={handleProjectClick}
            />
          </div>

          {/* Optimized dots indicator */}
          <div className="flex justify-center mt-6 gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-gray-800" : "bg-gray-300"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="text-center mt-6">
        <h3 className="text-xl font-semibold text-gray-900">
          {projects[currentIndex].title}
        </h3>
      </div>

      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default memo(Portfolio);