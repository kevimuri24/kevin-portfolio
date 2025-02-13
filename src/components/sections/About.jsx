import React from 'react';

const About = () => {
  const experience = [
    {
      period: "2024 - Present",
      title: "Web User Interface",
      company: "( Pixel Pioneer )"
    },
    {
      period: "2024 - Present",
      title: "Frontend",
      company: "( Code Connoisseur )"
    },
    {
      period: "2024 - Present",
      title: "Animation 3D",
      company: "( Digital Artisan )"
    },
    {
      period: "2024 - Present",
      title: "Branding Design",
      company: "( Brand Illuminator )"
    }
  ];

  return (
    <section id="about" className="min-h-screen pr-64 bg-white py-20">
      <div className="px-16">
        <h2 className="text-4xl font-normal mb-8">About</h2>
        
        <div className="grid grid-cols-2 gap-16">
          {/* Left Column - Image and Info */}
          <div className="space-y-8">
            <p>
              Hello there! I'm <span className="text-red-500">Josie West</span>, 
              a native New Yorker driven by innovation and a passion for creative expression.
            </p>

            <div className="relative aspect-[4/3] w-full">
              <img
                src="/api/placeholder/800/600"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Contact Info Card */}
            <div className="bg-white space-y-6">
              <div>
                <h3 className="font-medium mb-2">Email</h3>
                <p className="text-gray-600">josiew@mydomain.com</p>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Role</h3>
                <p className="text-gray-600">Web Designer and Developer</p>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Phone</h3>
                <p className="text-gray-600">(300) 300 40 30</p>
              </div>
            </div>
          </div>

          {/* Right Column - Experience */}
          <div>
            <h3 className="text-2xl mb-8">Experience</h3>
            <div className="space-y-8">
              {experience.map((item, index) => (
                <div key={index} className="grid grid-cols-[150px,1fr] gap-8">
                  <div className="text-gray-500">{item.period}</div>
                  <div>
                    <h4 className="font-medium mb-1">{item.title}</h4>
                    <p className="text-gray-500">{item.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-12 text-gray-600 max-w-2xl">
          My journey into the digital realm began in the heart of the bustling streets 
          of New York City. Growing up surrounded by the dynamic energy of the city, I 
          developed a keen interest in harnessing technology to improve our digital lives.
        </p>
      </div>
    </section>
  );
};

export default About;