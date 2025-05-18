
import React from 'react';
import { ChartBar, MessageSquare, Rocket, Search, Settings } from 'lucide-react';

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  detailedDescription?: string;
  icon?: string;
  isLast?: boolean;
}

export const FlowingProcessTimeline: React.FC<{steps: ProcessStepProps[]}> = ({ steps }) => {
  // Function to get the icon component based on the icon name
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Search': return <Search className="w-5 h-5" />;
      case 'Settings': return <Settings className="w-5 h-5" />;
      case 'MessageSquare': return <MessageSquare className="w-5 h-5" />;
      case 'Rocket': return <Rocket className="w-5 h-5" />;
      case 'ChartBar': return <ChartBar className="w-5 h-5" />;
      default: return <Search className="w-5 h-5" />;
    }
  };

  return (
    <div className="relative max-w-5xl mx-auto my-12">
      {/* Connecting line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 transform md:-translate-x-1/2 hidden md:block"></div>
      
      {/* Mobile vertical line */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-200 md:hidden"></div>

      {/* Steps */}
      <div className="space-y-16">
        {steps.map((step, index) => (
          <div 
            key={step.number}
            className={`relative flex flex-col md:flex-row items-start gap-4 md:gap-8 group`}
          >
            {/* Step number in circle */}
            <div className={`
              z-10 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center
              ${index % 2 === 0 ? 'md:order-1' : 'md:order-1'}
              ${step.isLast ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border-2 border-blue-400'}
              shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-blue-200/50
            `}>
              <span className="font-bold">{step.number}</span>
            </div>

            {/* Content - alternating sides on desktop */}
            <div className={`
              flex-grow md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:order-0' : 'md:order-2'} pl-12 md:pl-0
              transition-all duration-300 group-hover:transform group-hover:translate-y-[-5px]
            `}>
              <div className="bg-white/80 backdrop-blur-sm p-4 md:p-6 rounded-lg shadow-lg border border-blue-100">
                <h3 className="flex items-center text-xl font-bold mb-2 text-blue-900">
                  {index % 2 !== 0 && (
                    <span className="inline-flex items-center justify-center w-8 h-8 mr-3 rounded-full bg-blue-100 text-blue-600">
                      {step.icon && getIconComponent(step.icon)}
                    </span>
                  )}
                  {step.title}
                  {index % 2 === 0 && (
                    <span className="inline-flex items-center justify-center w-8 h-8 ml-3 rounded-full bg-blue-100 text-blue-600">
                      {step.icon && getIconComponent(step.icon)}
                    </span>
                  )}
                </h3>
                <p className="text-gray-600 font-medium mb-3">{step.description}</p>
                {step.detailedDescription && (
                  <p className="text-gray-500 text-sm">{step.detailedDescription}</p>
                )}
              </div>
              
              {/* Arrow connectors for desktop */}
              {!step.isLast && (
                <div className="hidden md:block absolute top-1/2 transform -translate-y-1/2">
                  {index % 2 === 0 ? (
                    <div className="right-0 rotate-180">
                      <svg className="w-8 h-8 text-blue-400" viewBox="0 0 24 24" fill="none">
                        <path d="M13 17l5-5-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  ) : (
                    <div className="left-0">
                      <svg className="w-8 h-8 text-blue-400" viewBox="0 0 24 24" fill="none">
                        <path d="M11 17l-5-5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  )}
                </div>
              )}
            </div>
            
            {/* Spacer for alternating layout */}
            <div className={`hidden md:block md:w-5/12 ${index % 2 === 0 ? 'md:order-2' : 'md:order-0'}`}></div>
          </div>
        ))}
      </div>
      
      {/* Animation dots along the path */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 flex flex-col justify-around items-center transform md:-translate-x-1/2 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i}
            className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"
            style={{ animationDelay: `${i * 0.5}s` }}
          ></div>
        ))}
      </div>
      
      {/* Final step highlight - appears at the bottom */}
      {steps.length > 0 && steps[steps.length - 1].isLast && (
        <div className="mt-8 max-w-md mx-auto transform transition-all duration-500 hover:scale-105">
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-50 to-blue-100 p-6 shadow-xl border border-blue-200">
            <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>
            <h4 className="text-lg font-bold text-blue-900 mb-2">The End Result</h4>
            <p className="text-blue-700">
              Your outbound system evolves into a fine-tuned lead generation machine — delivering qualified prospects who are ready to engage, with less wasted time and fewer dead-end conversations.
            </p>
            <div className="h-1 w-full absolute bottom-0 left-0 bg-gradient-to-r from-blue-400 to-blue-600"></div>
          </div>
        </div>
      )}
    </div>
  );
};
