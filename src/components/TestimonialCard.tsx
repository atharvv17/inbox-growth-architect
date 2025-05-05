
import React from 'react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  image?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, title, image }) => {
  return (
    <div className="card">
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 rounded-full bg-midnight-primary/20 overflow-hidden mr-4 flex-shrink-0">
          {image ? (
            <img src={image} alt={name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-midnight-primary font-bold">
              {name.charAt(0)}
            </div>
          )}
        </div>
        <div>
          <p className="font-bold">{name}</p>
          <p className="text-midnight-subtext text-sm">{title}</p>
        </div>
      </div>
      <p className="italic">"{quote}"</p>
    </div>
  );
};

export default TestimonialCard;
