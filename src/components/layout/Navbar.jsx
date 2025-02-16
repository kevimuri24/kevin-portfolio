import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Icon } from '@iconify/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { 
      icon: 'ri:github-fill',
      href: 'https://github.com/kevimuri24',
      color: 'text-gray-900 hover:text-gray-400',
      name: 'GitHub'
    },
    { 
      icon: 'ri:linkedin-fill',
      href: 'https://www.linkedin.com/in/kevinmuriukikarimi/',
      color: 'text-gray-600 hover:text-blue-600',
      name: 'LinkedIn'
    },
    { 
      icon: 'ri:instagram-line',
      href: 'https://www.instagram.com/kevinmuri23/',
      color: 'text-gray-600 hover:text-[#E4405F]',
      name: 'Instagram'
    }
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
           <a href="#"><img src="/logo.svg" alt="Kevin Muriuki" width="50" height="50" /></a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-md font-medium text-gray-700 hover:text-teal-500 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Social Links - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className={`transition-colors ${social.color}`}
                aria-label={social.name}
              >
                <Icon icon={social.icon} className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-teal-500 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-500 hover:bg-gray-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <div className="flex space-x-4 px-3 py-2">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className={`transition-colors ${social.color}`}
                aria-label={social.name}
              >
                <Icon icon={social.icon} className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;