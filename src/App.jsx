import React from 'react';
import Sidebar from './components/layout/Sidebar';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import About from './components/sections/About';
import Portfolio from './components/sections/Portfolio';
import Blog from './components/sections/Blog';
import Contact from './components/sections/Contact';

const App = () => {
  return (
    <div className="relative min-h-screen bg-white">
      <Sidebar />
      <main>
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Blog />
        <Contact />
      </main>
    </div>
  );
};

export default App;