
import React from 'react';

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  isLast?: boolean;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description, isLast = false }) => {
  return (
    <div className="flex">
      <div className="flex flex-col items-center mr-6">
        <div className="bg-midnight-primary w-14 h-14 rounded-full flex items-center justify-center text-white text-xl font-bold">
          {number}
        </div>
        {!isLast && <div className="w-0.5 bg-midnight-primary/30 flex-grow mt-2"></div>}
      </div>
      <div className="pb-8">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-midnight-subtext">{description}</p>
      </div>
    </div>
  );
};

export default ProcessStep;
