import React from 'react';
import { Mail, Phone, Briefcase } from 'lucide-react';

const ExperienceItem = ({ period, title, company, description, highlights }) => (
  <div className="group relative pl-8 pb-6 border-l border-gray-100 last:pb-0">
    <div className="absolute left-0 top-0 w-3 h-3 -translate-x-1.5 rounded-full bg-cyan-100 border-2 border-cyan-600 group-hover:bg-cyan-600 transition-colors" />
    <time className="block text-sm text-gray-500 mb-1">{period}</time>
    <h4 className="font-medium text-gray-900">{title}</h4>
    <p className="text-gray-600">{company}</p>
    {description && <p className="mt-2 text-gray-600 text-sm">{description}</p>}
    {highlights && (
      <ul className="mt-2 text-sm text-gray-600 list-disc list-inside">
        {highlights.map((highlight, idx) => (
          <li key={idx}>{highlight}</li>
        ))}
      </ul>
    )}
  </div>
);

const ContactInfo = ({ icon: Icon, label, value }) => (
  <div className="flex items-start space-x-3">
    <div className="p-2 bg-cyan-50 rounded-lg text-cyan-300">
      <Icon size={20} />
    </div>
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-gray-900 font-medium">{value}</p>
    </div>
  </div>
);

const About = () => {
  const experience = [
    {
      period: "October 2024 - Present",
      title: "Technical Support Specialist & Developer",
      company: "Carleton University",
      description: "Leveraging development skills to enhance technical support solutions while pursuing advanced software engineering training",
      highlights: [
        "Building custom automation tools using Python and JavaScript",
        "Developing internal web applications with React.js",
        "Implementing cloud solutions using SharePoint and Azure",
        "Creating system administration scripts for cross-platform environments"
      ]
    },
    {
      period: "August 2022 – September 2024",
      title: "EdTech Project Manager & Technical Lead",
      company: "Team4Tech, San Francisco (Remote)",
      description: "Combined technical implementation with project management, focusing on development and system architecture",
      highlights: [
        "Developed custom JavaScript and Python scripts for educational platforms",
        "Built and maintained Linux-based learning environments",
        "Created automation tools for system deployment and monitoring",
        "Managed full-stack implementation of web-based learning solutions"
      ]
    },
    {
      period: "January 2015 - Present",
      title: "Software Developer & Technical Consultant",
      company: "Freelance",
      description: "Progressive evolution from technical support to full-stack development solutions",
      highlights: [
        "Developing responsive web applications with React.js",
        "Building backend services using Python and Node.js",
        "Creating custom automation solutions for clients",
        "Implementing database solutions and APIs"
      ]
    }
  ];

  const education = {
    period: "May 2024 - January 2025",
    title: "Software Engineering Program",
    company: "Moringa School",
    description: "Intensive full-stack development training complementing practical experience",
    highlights: [
      "Advanced React.js and modern JavaScript development",
      "Backend development with Python and Flask",
      "Database design and API development",
      "DevOps practices and deployment strategies"
    ]
  };

  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Get to Know Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-6 md:space-y-8">
            <div className="prose max-w-none">
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Hey! I'm <span className="text-cyan-500 font-medium">Kevin Muriuki</span>, a 
                <span className="text-cyan-500 font-medium"> full-stack developer</span> with 
                extensive experience in technical implementation and system architecture. Starting 
                in IT support and EdTech, I've progressively moved into development, combining 
                practical experience with formal software engineering training. My background spans 
                web development, system administration, and automation, allowing me to build 
                comprehensive technical solutions.
              </p>    
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-white shadow-md">
                <img
                  src="/about.png"
                  alt="Profile"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-16 md:w-24 h-16 md:h-24 bg-cyan-300 rounded-full blur-xl opacity-60" />
              <div className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 w-20 md:w-32 h-20 md:h-32 bg-cyan-300 rounded-full blur-xl opacity-60" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <ContactInfo 
                icon={Mail}
                label="Email"
                value="kevimuri24@gmail.com"
              />
              <ContactInfo 
                icon={Phone}
                label="Phone"
                value="(613) 868 1013"
              />
              <ContactInfo 
                icon={Briefcase}
                label="Role"
                value="Full-Stack Developer"
              />
            </div>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 md:mb-8">Experience & Education</h3>
            <div className="space-y-4 md:space-y-6">
              {experience.map((item, index) => (
                <ExperienceItem key={index} {...item} />
              ))}
              <ExperienceItem {...education} />
            </div>
            
            <div className="mt-8 md:mt-12 prose max-w-none">
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                My technical stack includes frontend development with 
                <span className="text-cyan-500 font-medium"> React.js</span> and modern JavaScript, 
                backend development using <span className="text-cyan-500 font-medium">Python</span> and 
                Node.js, and extensive experience with Linux systems and cloud platforms. I combine 
                practical development experience with formal software engineering training to deliver 
                robust, scalable solutions.
              </p>  
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;