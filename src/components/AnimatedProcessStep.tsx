
import React from 'react';
import { cn } from '@/lib/utils';

export interface AnimatedProcessStepProps {
  stepNumber: number;
  title: string;
  description: string;
  detailedDescription?: string;
  isActive: boolean;
  isCompleted: boolean;
  onClick: () => void;
  className?: string;
  accentColor?: string;
}

export const AnimatedProcessStep: React.FC<AnimatedProcessStepProps> = ({
  stepNumber,
  title,
  description,
  detailedDescription,
  isActive,
  isCompleted,
  onClick,
  className,
  accentColor = "#3B82F6"
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "p-4 rounded-lg shadow-sm border border-gray-200 transition-all duration-300 cursor-pointer",
        isActive && "shadow-md border-blue-400",
        className
      )}
    >
      <div className="flex items-center mb-2">
        <span
          className={cn(
            "text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center mr-2",
            isActive
              ? `bg-[${accentColor}] text-white`
              : isCompleted
              ? "bg-blue-100 text-blue-500"
              : "bg-gray-100 text-gray-500"
          )}
        >
          {stepNumber}
        </span>
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="text-sm text-gray-600 mb-2">{description}</p>
      
      {isActive && detailedDescription && (
        <div className="mt-2 text-sm p-3 bg-blue-50 rounded-md text-blue-700">
          {detailedDescription}
        </div>
      )}
    </div>
  );
};
