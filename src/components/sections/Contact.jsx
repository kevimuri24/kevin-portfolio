import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section id="contact" className="min-h-screen pr-64 bg-white py-20">
      <div className="px-16">
        <h2 className="text-4xl font-normal mb-8">Contact</h2>

        <div className="mb-12">
          <p className="mb-4">
            I believe that <span className="text-red-500">collaboration and creativity</span> are 
            the cornerstones of progress, and I am dedicated to bringing a fresh perspective.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="font-medium mb-2">Email</h3>
            <p className="text-gray-600">kevimuri24@gmail.com</p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Address</h3>
            <p className="text-gray-600">1000 Pleasent Park</p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Phone</h3>
            <p className="text-gray-600">(613) 868 1013</p>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="max-w-2xl">
          <div className="grid grid-cols-2 gap-8 mb-8">
            <div>
              <input
                type="text"
                placeholder="What's your name"
                className="w-full border-b border-gray-200 py-4 focus:outline-none focus:border-gray-900 transition-colors"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your email"
                className="w-full border-b border-gray-200 py-4 focus:outline-none focus:border-gray-900 transition-colors"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
          </div>
          <div className="mb-8">
            <textarea
              placeholder="Tell us about our project"
              rows={6}
              className="w-full border-b border-gray-200 py-4 focus:outline-none focus:border-gray-900 transition-colors resize-none"
              value={formData.project}
              onChange={(e) => setFormData({...formData, project: e.target.value})}
            />
          </div>
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-500">
              * We promise not to disclose your personal information to third parties.
            </p>
            <button
              type="submit"
              className="bg-red-500 text-white px-8 py-3 hover:bg-red-600 transition-colors rounded-full"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;