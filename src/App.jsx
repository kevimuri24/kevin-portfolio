import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (

    <div className='min-h-screen bg-gray-50'>
      <Navbar />
      <Hero />
      <main className='pt-16'> 
        {/* Your app content goes here */}
      </main>
    </div>
    
  );
};

export default App
