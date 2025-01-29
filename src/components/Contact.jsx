import React from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

const Contact = () => {
  return (
    <section className="p-8 text-center">
      <h2 className="text-3xl font-bold">Contact Me</h2>
      <div className="mt-6">
        <InputText placeholder="Your Email" className="p-inputtext-lg w-full" />
        <Button label="Send" className="mt-4 p-button-primary" />
      </div>
    </section>
  );
};

export default Contact;