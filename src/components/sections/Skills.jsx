import React from "react";

const skills = [
  "React",
  "Tailwind",
  "Flask",
  "Python",
  "GitHub",
  "Docker",
  "Firebase",
  "Render"
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 md:py-24 lg:py-32 px-4 sm:px-8 md:px-16 lg:px-24 bg-cyan-300">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
        {/* Text Section */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-black font-bold leading-tight mb-4">
            My Tech Skills
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600">
            Over the past few years, I have worked on web and product solutions for various startups across multiple industries.
          </p>
        </div>

        {/* Skills Section */}
        <div className="p-6 md:p-8 lg:p-12 bg-red-400 rounded-xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-2 md:px-4 md:py-3 bg-white shadow-md border-2 border-black text-gray-800 text-sm md:text-base font-medium text-center rounded-lg"
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