import React from "react";
import { Card } from "primereact/card";

const Portfolio = () => {
  return (
    <section className="p-8 text-center">
      <h2 className="text-3xl font-bold">My Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        <Card title="Project 1" className="shadow-md p-4">Project details...</Card>
        <Card title="Project 2" className="shadow-md p-4">Project details...</Card>
      </div>
    </section>
  );
};

export default Portfolio;