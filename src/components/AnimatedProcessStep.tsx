
import React, { useState } from 'react';
import { CircleCheck, Clipboard, Settings, FileText, Rocket, BarChart3 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AnimatedProcessStepProps {
  stepNumber: number;
  title: string;
  description: string;
  detailedDescription?: string;
  isActive: boolean;
  isCompleted: boolean;
  onClick?: () => void;
}

export const AnimatedProcessStep: React.FC<AnimatedProcessStepProps> = ({
  stepNumber,
  title,
  description,
  detailedDescription,
  isActive,
  isCompleted,
  onClick
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Choose the icon based on step number
  const getStepIcon = () => {
    switch (stepNumber) {
      case 1:
        return <Clipboard className={cn(
          "h-5 w-5 transition-all duration-300",
          isActive ? "text-logo-blue" : "text-midnight-subtext/70"
        )} />;
      case 2:
        return <Settings className={cn(
          "h-5 w-5 transition-all duration-300",
          isActive ? "text-logo-blue" : "text-midnight-subtext/70"
        )} />;
      case 3:
        return <FileText className={cn(
          "h-5 w-5 transition-all duration-300",
          isActive ? "text-logo-blue" : "text-midnight-subtext/70"
        )} />;
      case 4:
        return <Rocket className={cn(
          "h-5 w-5 transition-all duration-300",
          isActive ? "text-logo-blue" : "text-midnight-subtext/70"
        )} />;
      case 5:
        return <BarChart3 className={cn(
          "h-5 w-5 transition-all duration-300",
          isActive ? "text-logo-blue" : "text-midnight-subtext/70"
        )} />;
      default:
        return <CircleCheck className={cn(
          "h-5 w-5 transition-all duration-300",
          isActive ? "text-logo-blue" : "text-midnight-subtext/70"
        )} />;
    }
  };
  
  return (
    <div
      className={cn(
        "relative p-5 rounded-lg border transition-all duration-300 cursor-pointer group",
        isActive 
          ? "border-logo-blue/50 bg-midnight-surface shadow-lg shadow-logo-blue/5" 
          : "border-midnight-primary/20 bg-midnight-background hover:border-midnight-primary/40",
        isCompleted && "border-logo-blue/30"
      )}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Step number badge */}
      <div className={cn(
        "absolute -top-3 -left-3 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300",
        isActive 
          ? "bg-logo-blue text-black font-bold shadow-lg shadow-logo-blue/20" 
          : "bg-midnight-primary text-midnight-subtext",
        isCompleted && "bg-logo-blue/70"
      )}>
        {isCompleted ? (
          <CircleCheck className="h-4 w-4 text-black" />
        ) : (
          <span>{stepNumber}</span>
        )}
      </div>
      
      <div className="flex items-start">
        <div className="mr-3 mt-1">
          {getStepIcon()}
        </div>
        
        <div>
          <h3 className={cn(
            "text-lg font-semibold transition-all duration-300",
            isActive ? "text-logo-blue" : "text-midnight-text"
          )}>
            {title}
          </h3>
          
          <p className="text-midnight-subtext text-sm mt-1">{description}</p>
          
          {/* Detailed description that shows on hover or when active */}
          {detailedDescription && (isHovered || isActive) && (
            <p className="text-midnight-subtext text-xs mt-2 max-w-md animate-fade-in">
              {detailedDescription}
            </p>
          )}
        </div>
      </div>
      
      {/* Animated glow effect */}
      <div className={cn(
        "absolute inset-0 rounded-lg bg-logo-blue/5 -z-10 opacity-0 transition-opacity duration-300 blur-xl",
        (isActive || isHovered) && "opacity-100"
      )}></div>
    </div>
  );
};
