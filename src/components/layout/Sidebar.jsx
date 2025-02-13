import React from 'react';
import { Grid, Settings, Package } from 'lucide-react';
import { Icon } from '@iconify/react';

const Sidebar = () => {
  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Blog', href: '#blog' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { 
      icon: 'ri:github-fill', 
      href: '#',
      hoverColor: 'hover:text-blue-600'
    },
    { 
      icon: 'ri:linkedin-fill', 
      href: '#',
      hoverColor: 'hover:text-blue-600'
    },
    { 
      icon: 'ri:instagram-line', 
      href: '#',
      hoverColor: 'hover:text-pink-600'
    }
  ];

  return (
    <aside className="fixed right-0 top-0 h-screen w-64 bg-white flex flex-col justify-between p-8 border-l border-gray-100">
      {/* Logo and Navigation */}
      <div>
        <h1 className="text-2xl font-bold mb-12">Kevin Muriuki</h1>
        <nav className="space-y-4">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block text-gray-800 hover:text-red-500 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
      
      {/* Social Links & Quick Actions */}
      <div className="flex space-x-8 justify">
        {/* Social Links */}
        <div className="flex justify-end space-x-4">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              className={`text-gray-600 transition-colors text-sm flex items-center gap-1 ${social.hoverColor}`}
              title={social.name}
            >
              <Icon icon={social.icon} className="w-5 h-5" />
              {social.name}
            </a>
          ))}
        </div>

        
      </div>
    </aside>
  );
};

export default Sidebar;