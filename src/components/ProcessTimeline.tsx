
import React, { useEffect, useRef } from 'react';

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
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
    <div className="relative mt-10" ref={timelineRef}>
      {/* Vertical line */}
      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-midnight-primary/60 transition-all duration-700 ease-in-out"></div>
      
      {/* Process steps */}
      <div className="space-y-24">
        {steps.map((step, index) => (
          <div key={step.number} className={`timeline-step relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} transition-all duration-700 ease-in-out`}>
            {/* Step number circle */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/4">
              <div className="w-14 h-14 rounded-full bg-midnight-primary flex items-center justify-center text-black text-2xl font-bold transition-all duration-500 hover:scale-110 hover:shadow-glow">
                {step.number}
              </div>
            </div>
            
            {/* Content */}
            <div className={`md:w-5/12 pt-8 pl-10 md:pl-0 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
              <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
              <p className="text-midnight-subtext">{step.description}</p>
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
