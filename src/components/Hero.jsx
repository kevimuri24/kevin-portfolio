import React from "react";
import { Button } from "primereact/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="h-screen flex flex-col items-center justify-center text-center"
    >
      <h1 className="text-5xl font-bold">Hello, I'm Kevin</h1>
      <p className="text-xl mt-4">Web Developer & Designer</p>
      <Button label="View Portfolio" className="mt-4 p-button-raised p-button-primary" />
    </motion.section>
  );
};

export default Hero;