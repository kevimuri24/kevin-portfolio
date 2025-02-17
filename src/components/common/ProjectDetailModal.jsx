import React from "react";

const ProjectDetailModal = ({ project, onClose }) => {
  if (!project) {
    console.log("ProjectDetailModal: No project selected.");
    return null;
  }

  console.log("ProjectDetailModal is rendering:", project);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-lg w-full shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
        >
          &times;
        </button>

        {project.image && (
          <img
            src={project.image}
            alt={project.title || "Project Image"}
            className="w-full rounded-md mb-4"
          />
        )}

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
