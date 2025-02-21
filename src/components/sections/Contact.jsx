import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Phone, Mail, MapPin, SendHorizontal } from 'lucide-react';

const ContactItem = ({ icon: Icon, label, value, href }) => (
  <div className="flex items-center space-x-4">
    <div className="border-2 border-black bg-white p-3 md:p-4 rounded-xl">
      <Icon className="w-5 h-5 md:w-6 md:h-6 text-black" />
    </div>
    <div>
      <p className="text-sm md:text-base text-black mb-1 md:mb-2">{label}:</p>
      <a href={href} className="text-lg md:text-xl hover:underline">
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

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    emailjs
      .sendForm(
        'YOUR_SERVICE_ID', // Replace with your EmailJS Service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS Template ID
        e.target, 
        'YOUR_USER_ID' // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          console.log('Email sent successfully!', response);
          setSuccess(true);
          setFormData({ name: '', email: '', message: '' }); // Reset form
        },
        (error) => {
          console.error('Email sending failed:', error);
          setSuccess(false);
        }
      )
      .finally(() => setLoading(false));
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
    <section id="contact" className="bg-gray-200 text-black py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20">
          {/* Left Column - Contact Info */}
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">Drop me a line</h2>
            </div>
            <div className="space-y-6 md:space-y-8 pt-4 md:pt-8 font-medium">
              {contactDetails.map((item, index) => (
                <ContactItem key={index} {...item} />
              ))}
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-cyan-300 p-6 md:p-8 rounded-xl">
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="w-full px-4 md:px-6 py-3 md:py-4 border-2 border-black bg-gray-50 focus:outline-none focus:border-red-500 transition-colors text-gray-800 rounded-lg"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full px-4 md:px-6 py-3 md:py-4 border-2 border-black bg-gray-50 focus:outline-none focus:border-red-500 transition-colors text-gray-800 rounded-lg"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  required
                  rows={6}
                  className="w-full px-4 md:px-6 py-3 md:py-4 bg-gray-50 border-2 border-black focus:outline-none focus:border-red-500 transition-colors resize-none text-gray-800 rounded-lg"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className="inline-flex justify-center items-center w-full py-4 md:py-6 bg-white text-base md:text-xl text-black border-2 border-black hover:bg-black hover:text-white transition-colors font-bold rounded-lg"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
                <SendHorizontal className="ml-2 h-5 w-5" />
              </button>

              {success === true && <p className="text-green-600 mt-2">Email sent successfully!</p>}
              {success === false && <p className="text-red-600 mt-2">Failed to send email. Try again.</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
