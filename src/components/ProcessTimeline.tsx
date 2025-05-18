
import React, { useEffect, useRef } from 'react';
import { ArrowRight, Circle, ChevronRight } from 'lucide-react';

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
            {/* Step number circle with animations */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/4 z-10">
              <div className="w-12 h-12 rounded-full bg-midnight-primary flex items-center justify-center text-black text-xl font-bold transition-all duration-500 hover:scale-110 hover:shadow-glow relative">
                {step.number}
                {/* Pulsing ring animation */}
                <span className="absolute inset-0 rounded-full bg-logo-blue/30 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite] opacity-75"></span>
              </div>
            </div>
            
            {/* Content with animated illustrations */}
            <div className={`md:w-5/12 pt-6 pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} relative`}>
              <h3 className="text-xl font-bold mb-2 flex items-center">
                {step.title}
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ChevronRight className="h-4 w-4 text-logo-blue" />
                </span>
              </h3>
              <p className="text-midnight-subtext mb-2">{step.description}</p>
              {step.detailedDescription && (
                <p className="text-midnight-subtext text-sm">{step.detailedDescription}</p>
              )}
              
              {/* Step-specific animated illustrations */}
              <div className="absolute top-1/2 right-0 md:right-auto md:left-full md:translate-x-2 md:-translate-y-1/2 transform">
                {step.number === 1 && (
                  <div className="w-10 h-10 md:w-16 md:h-16 relative">
                    <div className="absolute inset-0 bg-logo-blue/10 rounded-full animate-[pulse_2s_infinite]"></div>
                    <div className="absolute inset-2 bg-logo-blue/20 rounded-full animate-[pulse_3s_infinite_0.5s]"></div>
                    <div className="absolute inset-4 bg-logo-blue/30 rounded-full animate-[pulse_4s_infinite_1s]"></div>
                    <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-logo-blue rounded-full"></div>
                    </div>
                  </div>
                )}
                {step.number === 2 && (
                  <div className="relative w-12 h-12 md:w-20 md:h-20">
                    <div className="absolute inset-0 border-2 border-logo-blue/30 rounded-lg animate-[spin_8s_linear_infinite]"></div>
                    <div className="absolute inset-2 border-2 border-logo-blue/20 rounded-lg animate-[spin_12s_linear_infinite_reverse]"></div>
                    <div className="absolute inset-4 border-2 border-logo-blue/10 rounded-lg animate-[spin_16s_linear_infinite]"></div>
                  </div>
                )}
                {step.number === 3 && (
                  <div className="relative w-12 h-12 md:w-20 md:h-20 flex items-center justify-center">
                    <div className="absolute w-full h-0.5 bg-logo-blue/40 animate-[bounce_2s_infinite]" style={{transform: "rotate(45deg)"}}></div>
                    <div className="absolute w-full h-0.5 bg-logo-blue/40 animate-[bounce_2s_infinite_0.5s]" style={{transform: "rotate(-45deg)"}}></div>
                    <div className="absolute w-full h-0.5 bg-logo-blue/40 animate-[bounce_2s_infinite_1s]" style={{transform: "rotate(90deg)"}}></div>
                    <div className="absolute w-full h-0.5 bg-logo-blue/40 animate-[bounce_2s_infinite_1.5s]" style={{transform: "rotate(0deg)"}}></div>
                  </div>
                )}
                {step.number === 4 && (
                  <div className="relative w-12 h-12 md:w-16 md:h-16 flex justify-center items-center">
                    <div className="absolute w-full h-full border-2 border-logo-blue/20 rounded-full"></div>
                    <div className="absolute w-3 h-3 bg-logo-blue rounded-full animate-[orbit_4s_linear_infinite]" 
                         style={{animation: "orbit 4s linear infinite"}}></div>
                    <style>
                      {`
                        @keyframes orbit {
                          0% { transform: rotate(0deg) translateX(20px) rotate(0deg); }
                          100% { transform: rotate(360deg) translateX(20px) rotate(-360deg); }
                        }
                      `}
                    </style>
                  </div>
                )}
                {step.number === 5 && (
                  <div className="relative w-14 h-14 md:w-20 md:h-20">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-3 h-3 bg-logo-blue rounded-full animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
                    </div>
                    <div className="absolute inset-0 border-2 border-dashed border-logo-blue/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
                    <ArrowRight className="absolute top-1/2 right-0 transform -translate-y-1/2 text-logo-blue w-4 h-4 animate-[bounce_1s_infinite]" />
                    <ArrowRight className="absolute bottom-0 left-1/2 transform -translate-x-1/2 rotate-90 text-logo-blue w-4 h-4 animate-[bounce_1s_infinite_0.3s]" />
                    <ArrowRight className="absolute top-0 left-1/2 transform -translate-x-1/2 -rotate-90 text-logo-blue w-4 h-4 animate-[bounce_1s_infinite_0.6s]" />
                    <ArrowRight className="absolute top-1/2 left-0 transform -translate-y-1/2 rotate-180 text-logo-blue w-4 h-4 animate-[bounce_1s_infinite_0.9s]" />
                  </div>
                )}
              </div>
            </div>
            
            {/* Spacer for alternating layout */}
            <div className="md:w-5/12 relative group">
              {index % 2 !== 0 && step.number < 5 && (
                <div className="hidden md:block absolute top-1/2 left-12 transform -translate-y-1/2">
                  <div className="w-8 h-8 opacity-30 group-hover:opacity-100 transition-opacity duration-500">
                    <svg viewBox="0 0 24 24" fill="none" className="text-logo-blue">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse" />
                    </svg>
                  </div>
                </div>
              )}
              {index % 2 === 0 && step.number < 5 && (
                <div className="hidden md:block absolute top-1/2 right-12 transform -translate-y-1/2 rotate-180">
                  <div className="w-8 h-8 opacity-30 group-hover:opacity-100 transition-opacity duration-500">
                    <svg viewBox="0 0 24 24" fill="none" className="text-logo-blue">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      {/* Floating elements in the background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/5 w-4 h-4 bg-logo-blue/10 rounded-full animate-[float_8s_ease-in-out_infinite]"></div>
        <div className="absolute top-3/4 right-1/5 w-6 h-6 bg-logo-blue/10 rounded-full animate-[float_12s_ease-in-out_infinite_0.5s]"></div>
        <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-logo-blue/10 rounded-full animate-[float_15s_ease-in-out_infinite_1s]"></div>
      </div>
      
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
        `}
      </style>
    </div>
  );
};

export default ProcessTimeline;

