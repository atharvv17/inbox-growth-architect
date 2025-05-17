
import React, { useEffect, useRef } from 'react';

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  detailedDescription?: string;
  isLast?: boolean;
}

const ProcessTimeline: React.FC<{steps: ProcessStepProps[]}> = ({ steps }) => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.add('opacity-100');
        }
      });
    }, { threshold: 0.1 });

    const stepElements = timelineRef.current?.querySelectorAll('.timeline-step');
    stepElements?.forEach((el) => {
      el.classList.add('opacity-0');
      observer.observe(el);
    });

    return () => {
      stepElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="relative mt-8" ref={timelineRef}>
      {/* Vertical line */}
      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-midnight-primary/60 transition-all duration-700 ease-in-out"></div>
      
      {/* Process steps */}
      <div className="space-y-16">
        {steps.map((step, index) => (
          <div key={step.number} className={`timeline-step relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} transition-all duration-700 ease-in-out`}>
            {/* Step number circle */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/4">
              <div className="w-12 h-12 rounded-full bg-midnight-primary flex items-center justify-center text-black text-xl font-bold transition-all duration-500 hover:scale-110 hover:shadow-glow">
                {step.number}
              </div>
            </div>
            
            {/* Content */}
            <div className={`md:w-5/12 pt-6 pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-midnight-subtext mb-2">{step.description}</p>
              {step.detailedDescription && (
                <p className="text-midnight-subtext text-sm">{step.detailedDescription}</p>
              )}
            </div>
            
            {/* Spacer for alternating layout */}
            <div className="md:w-5/12"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessTimeline;
