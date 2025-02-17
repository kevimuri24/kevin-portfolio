import React from 'react';
import { Mail, Phone, Briefcase } from 'lucide-react';

const ExperienceItem = ({ period, title, company }) => (
  <div className="group relative pl-8 pb-8 border-l border-gray-100 last:pb-0">
    <div className="absolute left-0 top-0 w-3 h-3 -translate-x-1.5 rounded-full bg-cyan-100 border-2 border-cyan-600 group-hover:bg-cyan-600 transition-colors" />
    <time className="block text-sm text-gray-500 mb-1">{period}</time>
    <h4 className="font-medium text-gray-900">{title}</h4>
    <p className="text-gray-600">{company}</p>
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
      period: "May 2024 - January 2025",
      title: "Software Engineering Student",
      company: "Moringa School",
      description: "Completed intensive full-stack development bootcamp focusing on modern web technologies",
      highlights: [
        "Frontend: HTML5, CSS3, JavaScript, React.js",
        "Backend: Python, Flask",
        "Version Control: Git & GitHub",
        "Project-based learning with real-world applications"
      ]
    },
    {
      period: "October 2024 - Present",
      title: "Technical Support Specialist",
      company: "Carleton University",
      description: "Applied software development skills in technical support role",
      highlights: [
        "System administration and troubleshooting",
        "Microsoft 365 & Azure administration",
        "Cross-platform support (Windows, MacOS, Linux)"
      ]
    },
    {
      period: "January 2015 - Present",
      title: "Freelance Developer",
      company: "Self-Employed",
      description: "Building custom web solutions and providing technical consultation",
      highlights: [
        "Full-stack web development",
        "UI/UX design implementation",
        "Client-focused solutions architecture"
      ]
    },
    {
      period: "Recent Projects",
      title: "Portfolio Highlights",
      company: "Bootcamp Projects",
      description: "Developed several full-stack applications during the bootcamp",
      highlights: [
        "React & Tailwind front-end applications",
        "Python Flask REST APIs",
        "Database design and implementation",
        "Collaborative team projects"
      ]
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Get to Know Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Image and Info */}
          <div className="space-y-8">
            <div className="prose max-w-none">
            <p className="text-lg text-gray-600 leading-relaxed">
              Hey! I'm <span className="text-cyan-500 font-medium">Kevin Muriuki</span>, a 
              <span className="text-cyan-500 font-medium"> full-stack developer</span> with a 
              unique edge in design. Over the past 8+ years, I've bridged the gap between 
              development and design, crafting clean code and minimal interfaces that 
              communicate powerfully. While my journey started in graphic design, my passion 
              for problem-solving led me to tech consulting, where I help businesses build 
              solutions that combine technical excellence with exceptional user experience.
            </p>    
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="/about.png"
                  alt="Profile"
                  className="w-full h-full object-contain"
                />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 border-solid border-black bg-cyan-300 rounded-full blur-xl opacity-60" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-cyan-300 rounded-full blur-xl opacity-60" />
              </div>


            {/* Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <ContactInfo 
                icon={Mail}
                label="Email"
                value="kevimuri24@gmail.com"
              />
              <ContactInfo 
                icon={Phone}
                label="Phone"
                value="(613) 868 10 13"
              />
              <ContactInfo 
                icon={Briefcase}
                label="Role"
                value="FullStack Developer and Graphic Designer"
              />
            </div>
          </div>

          {/* Right Column - Experience */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Experience</h3>
            <div className="space-y-6">
              {experience.map((item, index) => (
                <ExperienceItem key={index} {...item} />
              ))}
            </div>
            
            <div className="mt-12 prose max-w-none">
              <p className="text-lg text-gray-600 leading-relaxed">
              My technical toolkit spans modern web frameworks and custom development solutions, 
              allowing me to build both standardized and bespoke applications. I leverage advanced 
              proficiency in <span className="text-cyan-500 font-medium">Adobe Creative Suite</span> and 
              <span className="text-cyan-500 font-medium"> Figma</span> to design intuitive user workflows 
              and pixel-perfect interfaces. Additionally, my background in content creation has equipped 
              me with expertise in video production using <span className="text-cyan-500 font-medium">Adobe 
              Premiere Pro, After Effects,</span> and <span className="text-cyan-500 font-medium">OBS Studio</span>, 
              enabling me to deliver comprehensive digital solutions.
            </p>  
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;