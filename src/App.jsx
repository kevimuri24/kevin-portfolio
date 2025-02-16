import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import About from './components/sections/About';
import Skills from './components/sections/Skills'; 
import Portfolio from './components/sections/Portfolio';
import Contact from './components/sections/Contact';
 

const App = () => {
  return (
    <div className="relative min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Skills /> 
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
};

export default App;
