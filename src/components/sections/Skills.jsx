import React from "react";

const skills = [
  "React",
  "Flask",
  "Python",
  "Docker",
  "PostgreSQL",
  "Firebase",
  "Render",
  "Git/GitWorkflow"
];

const Skills = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          My Tech Skills
        </h2>
        <p className="text-gray-600 mb-8">
          Over the past few years, I have worked on web and product solutions for various startups across multiple industries.
        </p>

        <div className="bg-red-200 p-8 rounded-lg relative">
          {/* Decorative Patterns */}
          <div className="absolute top-0 left-0 w-16 h-16 bg-green-300 opacity-50 rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 bg-white opacity-30 rounded-full"></div>

          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-white shadow-md border border-gray-300 rounded-md text-gray-800 font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
