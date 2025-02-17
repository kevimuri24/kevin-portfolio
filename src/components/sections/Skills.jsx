import React from "react";

const skills = [
  "React",
  "Flask",
  "Python",
  "PostgreSQL",
  "Git/GitWorkflow",
  "Docker",
  "Firebase",
  "Render"
];

const Skills = () => {
  return (
    <section id="skills" className="py-8 sm:py-16 md:py-36 px-4 sm:px-16 md:px-64 bg-cyan-300">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
        {/* Text Section */}
        <div className="text-center md:text-left">
          <h2 className="text-5xl text-black font-bold leading-tight">
            My Tech Skills
          </h2>
          <p className="mt-4 text-md sm:text-lg md:text-xl text-gray-600">
            Over the past few years, I have worked on web and product solutions for various startups across multiple industries.
          </p>
        </div>

        {/* Skills Section */}
        <div className="p-32 sm:p-8 md:p-32  bg-red-400 flex flex-col items-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:flex flex-wrap justify-center gap-4 sm:gap-6">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 sm:px-6 md:px-8 py-2 sm:py-3 md:py-3 bg-white shadow-md border-2 sm:border-2 border-black rounded-md text-gray-800 text-sm sm:text-md md:text-lg"
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
