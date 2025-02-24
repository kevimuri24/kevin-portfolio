import React, { useState, useCallback, memo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Memoized Project Card Component
const ProjectCard = memo(({ project, onClick }) => (
  <div 
    className="cursor-pointer transform transition-transform duration-300 hover:scale-105 bg-white shadow-md rounded-lg overflow-hidden"
    onClick={() => onClick(project)}
  >
    <img src={project.image} alt={project.title} className="w-full h-56 object-cover" loading="lazy" />
    <div className="p-4">
      <h3 className="text-lg font-bold text-gray-900">{project.title}</h3>
      <p className="text-sm text-gray-600 mt-2">{project.description}</p>
    </div>
  </div>
));

// Project Detail Modal Component
const ProjectDetailModal = ({ project, onClose }) => {
  if (!project) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-lg max-w-lg w-full shadow-xl p-6 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-600 hover:text-gray-900">
          &times;
        </button>
        {project.video ? (
          <div className="w-full h-60">
            <iframe 
              src={project.video} 
              className="w-full h-full rounded-md" 
              allow="autoplay; fullscreen" 
              allowFullScreen
              title={project.title} 
            />
          </div>
        ) : (
          <img src={project.image} alt={project.title} className="w-full h-60 object-cover rounded-md" />
        )}
        <h2 className="text-2xl font-bold text-gray-900 mt-4">{project.title}</h2>
        <p className="text-gray-700 mt-2">{project.description}</p>
      </div>
    </div>
  );
};

// Portfolio Component
const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    { id: 1, title: "Brand Identity", description: "A complete branding package", image: "/image_1.jpg" },
    { id: 2, title: "Web Design", description: "Responsive and modern UI design", image: "/path/to/image2.jpg" },
    { id: 3, title: "Motion Graphics", description: "Engaging animations and video edits", video: "https://player.vimeo.com/video/486450403" },
  ];

  return (
    <div id="portfolio" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">My Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onClick={setSelectedProject} />
          ))}
        </div>
      </div>
      {selectedProject && <ProjectDetailModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </div>
  );
};

export default memo(Portfolio);
