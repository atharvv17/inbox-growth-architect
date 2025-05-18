
import React, { useState, useEffect, useRef } from 'react';
import { AnimatedProcessStep } from './AnimatedProcessStep';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface ProcessStep {
  number: number;
  title: string;
  description: string;
  detailedDescription?: string;
  isLast?: boolean;
}

interface AnimatedProcessTimelineProps {
  steps: ProcessStep[];
}

export const AnimatedProcessTimeline: React.FC<AnimatedProcessTimelineProps> = ({ steps }) => {
  const [activeStep, setActiveStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const timelineRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Start the animation sequence when the component is in view
          let currentStep = 1;
          
          const animateSteps = () => {
            if (currentStep <= steps.length) {
              setActiveStep(currentStep);
              
              if (currentStep > 1) {
                setCompletedSteps(prev => [...prev, currentStep - 1]);
              }
              
              currentStep++;
              setTimeout(animateSteps, 2000); // Advance to the next step every 2 seconds
            }
          };
          
          // Start the animation after a short delay
          setTimeout(animateSteps, 500);
        }
      },
      { threshold: 0.3 }
    );
    
    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }
    
    return () => {
      if (timelineRef.current) {
        observer.unobserve(timelineRef.current);
      }
    };
  }, [steps.length]);
  
  const handleStepClick = (stepNumber: number) => {
    setActiveStep(stepNumber);
  };
  
  // Animation variants for the step containers
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: { 
        delay: i * 0.3,
        duration: 0.5
      }
    })
  };
  
  return (
    <div ref={timelineRef} className="relative max-w-5xl mx-auto mt-10">
      {/* Mobile layout (vertical) */}
      <div className="md:hidden space-y-8 relative">
        {/* Vertical connector line */}
        <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-midnight-primary/30 z-0"></div>
        
        {steps.map((step, index) => (
          <motion.div 
            key={step.number} 
            className="relative z-10 pl-12"
            initial="hidden"
            animate="visible"
            custom={index}
            variants={containerVariants}
          >
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center">
              <motion.div 
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-500",
                  activeStep === step.number ? "bg-logo-blue" : 
                  completedSteps.includes(step.number) ? "bg-logo-blue/70" : "bg-midnight-primary/50"
                )}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.3 + 0.2, duration: 0.5, type: "spring" }}
              ></motion.div>
            </div>
            
            <AnimatedProcessStep
              stepNumber={step.number}
              title={step.title}
              description={step.description}
              detailedDescription={step.detailedDescription}
              isActive={activeStep === step.number}
              isCompleted={completedSteps.includes(step.number)}
              onClick={() => handleStepClick(step.number)}
            />
          </motion.div>
        ))}
      </div>
      
      {/* Desktop layout (horizontal) */}
      <div className="hidden md:grid grid-cols-5 gap-4 relative">
        {/* Horizontal connector line */}
        <motion.div 
          className="absolute left-0 right-0 top-1/2 h-0.5 bg-midnight-primary/30 z-0"
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        ></motion.div>
        
        {steps.map((step, index) => (
          <motion.div 
            key={step.number} 
            className="relative z-10 pt-10"
            initial="hidden"
            animate="visible"
            custom={index}
            variants={containerVariants}
          >
            {/* Step number circle */}
            <motion.div 
              className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.3, duration: 0.5, type: "spring" }}
            >
              <div className={cn(
                "w-4 h-4 rounded-full transition-all duration-500",
                activeStep === step.number ? "bg-logo-blue shadow-glow scale-150" : 
                completedSteps.includes(step.number) ? "bg-logo-blue/70" : "bg-midnight-primary/50"
              )}></div>
            </motion.div>
            
            <AnimatedProcessStep
              stepNumber={step.number}
              title={step.title}
              description={step.description}
              detailedDescription={step.detailedDescription}
              isActive={activeStep === step.number}
              isCompleted={completedSteps.includes(step.number)}
              onClick={() => handleStepClick(step.number)}
            />
            
            {/* Connector arrow between steps */}
            {step.number < steps.length && (
              <motion.div 
                className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-20 opacity-30"
                initial={{ opacity: 0, x: "-50%" }}
                animate={{ opacity: 0.3, x: "50%" }}
                transition={{ delay: index * 0.3 + 0.5, duration: 0.5 }}
              >
                <ChevronRight className="h-6 w-6 text-logo-blue" />
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};
