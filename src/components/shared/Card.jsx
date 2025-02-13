import React from 'react';
import { LucideIcon } from 'lucide-react';

const Card = ({ title, description, icon: Icon, className = '' }) => {
  return (
    <div className={`bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-1 ${className}`}>
      {Icon && (
        <div className="mb-4">
          <Icon className="h-8 w-8 text-purple-600" />
        </div>
      )}
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Card;