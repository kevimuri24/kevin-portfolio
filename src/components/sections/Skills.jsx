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
    <section className="py-36 px-36 bg-gray-100">
      <div className="grid grid-flow-col grid-rows-3 gap-12">
        <h2 className=" mt-32 row-span-1 text-6xl font-bold text-gray-900p">
          My Tech Skills
        </h2>

        <p className=" col-span-1 text-4xl text-gray-600">
          Over the past few years, I have worked on web and product solutions for various startups across multiple industries.
        </p>

        <div className="row-span-3 p-36  bg-red-400 rounded-lg">
          
          <div className="flex flex-wrap justify-center gap-6">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-12 py-8 bg-white shadow-md border-4 border-black border-solid border-black-300 rounded-md text-gray-800  text-4xl"
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
