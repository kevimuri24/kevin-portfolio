import React from "react";

const ProjectDetailModal = ({ project, onClose }) => {
  if (!project) {
    console.log("ProjectDetailModal: No project selected.");
    return null;
  }

  console.log("ProjectDetailModal is rendering:", project);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-2xl w-full shadow-lg relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
        >
          &times;
        </button>

        {/* Video or Image Display */}
        {project.video ? (
          <div className="w-full aspect-w-16 aspect-h-9 mb-4">
            <iframe
              src={project.video.url}
              width="100%"
              height="400"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
              title={project.title || "Video Project"}
              className="w-full rounded-md"
            ></iframe>
          </div>
        ) : (
          project.image && (
            <img
              src={project.image}
              alt={project.title || "Project Image"}
              className="w-full rounded-md mb-4"
            />
          )
        )}

        {/* Project Details */}
        <h2 className="text-xl font-bold text-gray-900">{project.title || "No Title"}</h2>
        <p className="text-gray-700 mt-2">{project.description || "No description available."}</p>

        <div className="mt-4 text-sm text-gray-600">
          {project.client && <p><strong>Client:</strong> {project.client}</p>}
          {project.category && <p><strong>Category:</strong> {project.category}</p>}
          {project.date && <p><strong>Date:</strong> {project.date}</p>}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;
