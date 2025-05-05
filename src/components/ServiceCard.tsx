
import React from 'react';
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  outcome: string;
  icon?: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, features, outcome, icon }) => {
  return (
    <div className="card h-full flex flex-col">
      <div className="mb-6">
        {icon && <div className="text-midnight-accent mb-4 text-4xl">{icon}</div>}
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-midnight-subtext">{description}</p>
      </div>
      <ul className="space-y-3 mb-6 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-midnight-success mr-2">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-4 border-t border-white border-opacity-10">
        <p className="font-medium mb-4">
          <span className="text-midnight-success font-bold">Outcome:</span> {outcome}
        </p>
        <Button className="btn-secondary w-full">Learn More</Button>
      </div>
    </div>
  );
};

export default ServiceCard;
