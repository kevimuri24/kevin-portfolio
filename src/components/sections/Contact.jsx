import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactItem = ({ icon: Icon, label, value, href }) => (
  <div className="flex items-center space-x-4">
    <div className="border-2 border-black bg-white p-4 rounded-xl">
      <Icon className="w-6 h-6 text-black" />
    </div>
    <div>
      <p className="text-black mb-2">{label}:</p>
      <a href={href} className="text-xl hover:underline">
        {value}
      </a>
    </div>
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const contactDetails = [
    {
      icon: Phone,
      label: 'Call',
      value: '(613) 868 1013',
      href: 'tel:(613) 868 1013'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'kevimuri24@gmail.com',
      href: 'mailto:kevimuri24@gmail.com'
    },
    {
      icon: MapPin,
      label: 'Address',
      value: 'Ottawa, Canada',
      href: '#'
    }
  ];

  return (
    <section id="contact" className="bg-gray-200 text-black py-48">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            {/* Contact Title */}
            <div className="space-y-4">
              <h2 className="text-5xl font-bold leading-tight">Drop me a line</h2>
            </div>

            {/* Contact Details */}
            <div className="space-y-8 pt-8 font-medium text-xl">
              {contactDetails.map((item, index) => (
                <ContactItem key={index} {...item} />
              ))}
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-cyan-300 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-6 py-4 border-2 border-solid border-black bg-gray-50 focus:outline-none focus:border-red-500 transition-colors text-gray-800"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-6 py-4 border-2 border-solid border-black bg-gray-50 focus:outline-none focus:border-red-500 transition-colors text-gray-800"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  rows={6}
                  className="w-full px-6 py-4 bg-gray-50 border-2 border-solid border-black focus:outline-none focus:border-red-500 transition-colors resize-none text-gray-800"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>
              <button
                type="submit"
                className=" w-full py-8 bg-white text-black border-2 border-solid border-black hover:bg-black hover:text-white transition-colors font-bold"
              >
                Submit Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;