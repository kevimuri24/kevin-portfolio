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
      period: "2024 - Present",
      title: "Web User Interface",
      company: "Pixel Pioneer"
    },
    {
      period: "2024 - Present",
      title: "Frontend",
      company: "Code Connoisseur"
    },
    {
      period: "2024 - Present",
      title: "Animation 3D",
      company: "Digital Artisan"
    },
    {
      period: "2024 - Present",
      title: "Branding Design",
      company: "Brand Illuminator"
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
              <p className="text-lg text-gray-600">
                Hello there! I'm <span className="text-cyan-300">Kevin Muriuki</span>, 
                a native New Yorker driven by innovation and a passion for creative expression.
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
                value="josiew@mydomain.com"
              />
              <ContactInfo 
                icon={Phone}
                label="Phone"
                value="(300) 300 40 30"
              />
              <ContactInfo 
                icon={Briefcase}
                label="Role"
                value="Web Designer and Developer"
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
              <p className="text-gray-600">
                My journey into the digital realm began in the heart of the bustling streets 
                of New York City. Growing up surrounded by the dynamic energy of the city, I 
                developed a keen interest in harnessing technology to improve our digital lives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;