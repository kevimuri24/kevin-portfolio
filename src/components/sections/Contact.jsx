import React, { useState } from 'react';
import { Mail, MapPin, Phone, SendHorizontal } from 'lucide-react';

const ContactInfo = ({ icon: Icon, title, content }) => (
  <div className="flex items-start space-x-4">
    <div className="p-3 bg-teal-50 rounded-xl text-teal-600">
      <Icon size={24} />
    </div>
    <div>
      <h3 className="font-medium text-gray-900 mb-1">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "kevimuri24@gmail.com"
    },
    {
      icon: MapPin,
      title: "Address",
      content: "1000 Pleasent Park"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "(613) 868 1013"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-teal-600 mb-2">GET IN TOUCH</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Let's Work Together
          </h2>
          <p className="text-gray-600">
            I believe that <span className="text-teal-600">collaboration and creativity</span> are 
            the cornerstones of progress, and I am dedicated to bringing a fresh perspective.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <ContactInfo key={index} {...info} />
            ))}
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    placeholder="What's your name?"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-teal-600 transition-colors"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-teal-600 transition-colors"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
              <div>
                <textarea
                  placeholder="Tell us about your project"
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-teal-600 transition-colors resize-none"
                  value={formData.project}
                  onChange={(e) => setFormData({...formData, project: e.target.value})}
                />
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">
                  * Your information is protected by our privacy policy
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center px-6 py-3 bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition-colors"
                >
                  Send Message
                  <SendHorizontal className="ml-2 h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;