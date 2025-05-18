
import React, { useEffect, useRef } from 'react';
import { Mail, Calendar, MessageSquare, User, ChartBar } from 'lucide-react';

export const PipelineAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Start animation immediately and make it repeat continuously
    const startAnimation = () => {
      if (!containerRef.current || !sliderRef.current) return;
      
      // Make container visible immediately
      containerRef.current.classList.add('animate-fade-in');
      
      // Function to run the sliding animation cycle
      const animateCycle = () => {
        if (!sliderRef.current) return;
        
        // Reset slider position to start
        sliderRef.current.style.transition = 'none';
        sliderRef.current.style.transform = 'translateX(0)';
        
        // Force reflow
        sliderRef.current.offsetHeight;
        
        // Slide to the left with a smooth animation
        sliderRef.current.style.transition = 'transform 4s linear';
        
        // Calculate how far to slide based on the width of the container
        // We slide one full width and then some to ensure all items move off screen
        const slideDistance = sliderRef.current.scrollWidth - containerRef.current.offsetWidth + 100;
        sliderRef.current.style.transform = `translateX(-${slideDistance}px)`;
      };
      
      // Run the first cycle immediately
      animateCycle();
      
      // Then set interval to repeat the animation
      const animationInterval = setInterval(() => {
        animateCycle();
      }, 5000); // Full cycle repeats every 5 seconds
      
      // Clean up interval on unmount
      return () => clearInterval(animationInterval);
    };
    
    // Start animation right away with a brief delay
    const animationStart = setTimeout(startAnimation, 500);
    
    return () => {
      clearTimeout(animationStart);
    };
  }, []);
  
  return (
    <div ref={containerRef} className="w-full py-8 overflow-hidden">
      {/* Sliding container */}
      <div ref={sliderRef} className="inline-flex transition-transform duration-500">
        <div className="flex items-center justify-start gap-3 md:gap-1">
          {/* Lead */}
          <div className="pipeline-step relative px-5 py-3 rounded-lg border border-logo-blue/20 
              bg-midnight-surface flex items-center gap-2 transition-all duration-500">
            <Mail className="h-5 w-5 text-logo-blue" />
            <span>Lead Capture</span>
            
            {/* Glow effect */}
            <div className="absolute inset-0 -z-10 bg-logo-blue/5 blur-md opacity-0 transition-opacity duration-300 
                pipeline-glow"></div>
          </div>
          
          {/* Connection */}
          <div className="pipeline-connection h-6 md:w-8 md:h-0.5 border-logo-blue/30
              border md:border-0 md:bg-logo-blue/30 flex-shrink-0"></div>
          
          {/* CRM */}
          <div className="pipeline-step relative px-5 py-3 rounded-lg border border-logo-blue/20 
              bg-midnight-surface flex items-center gap-2 transition-all duration-500">
            <User className="h-5 w-5 text-logo-blue" />
            <span>CRM Update</span>
            
            {/* Glow effect */}
            <div className="absolute inset-0 -z-10 bg-logo-blue/5 blur-md opacity-0 transition-opacity duration-300 
                pipeline-glow"></div>
          </div>
          
          {/* Connection */}
          <div className="pipeline-connection h-6 md:w-8 md:h-0.5 border-logo-blue/30
              border md:border-0 md:bg-logo-blue/30 flex-shrink-0"></div>
          
          {/* Booking */}
          <div className="pipeline-step relative px-5 py-3 rounded-lg border border-logo-blue/20 
              bg-midnight-surface flex items-center gap-2 transition-all duration-500">
            <Calendar className="h-5 w-5 text-logo-blue" />
            <span>Appointment</span>
            
            {/* Glow effect */}
            <div className="absolute inset-0 -z-10 bg-logo-blue/5 blur-md opacity-0 transition-opacity duration-300 
                pipeline-glow"></div>
          </div>
          
          {/* Connection */}
          <div className="pipeline-connection h-6 md:w-8 md:h-0.5 border-logo-blue/30
              border md:border-0 md:bg-logo-blue/30 flex-shrink-0"></div>
          
          {/* Meeting */}
          <div className="pipeline-step relative px-5 py-3 rounded-lg border border-logo-blue/20 
              bg-midnight-surface flex items-center gap-2 transition-all duration-500">
            <MessageSquare className="h-5 w-5 text-logo-blue" />
            <span>Sales Meeting</span>
            
            {/* Glow effect */}
            <div className="absolute inset-0 -z-10 bg-logo-blue/5 blur-md opacity-0 transition-opacity duration-300 
                pipeline-glow"></div>
          </div>
          
          {/* Connection */}
          <div className="pipeline-connection h-6 md:w-8 md:h-0.5 border-logo-blue/30
              border md:border-0 md:bg-logo-blue/30 flex-shrink-0"></div>
          
          {/* Success */}
          <div className="pipeline-step relative px-5 py-3 rounded-lg border border-logo-blue/20 
              bg-midnight-surface flex items-center gap-2 transition-all duration-500">
            <ChartBar className="h-5 w-5 text-logo-blue" />
            <span>Closed Deal</span>
            
            {/* Glow effect */}
            <div className="absolute inset-0 -z-10 bg-logo-blue/5 blur-md opacity-0 transition-opacity duration-300 
                pipeline-glow"></div>
          </div>
          
          {/* Duplicate the first few items to create a seamless loop effect */}
          <div className="pipeline-connection h-6 md:w-8 md:h-0.5 border-logo-blue/30
              border md:border-0 md:bg-logo-blue/30 flex-shrink-0"></div>
          
          {/* Lead (duplicated) */}
          <div className="pipeline-step relative px-5 py-3 rounded-lg border border-logo-blue/20 
              bg-midnight-surface flex items-center gap-2 transition-all duration-500">
            <Mail className="h-5 w-5 text-logo-blue" />
            <span>Lead Capture</span>
            
            {/* Glow effect */}
            <div className="absolute inset-0 -z-10 bg-logo-blue/5 blur-md opacity-0 transition-opacity duration-300 
                pipeline-glow"></div>
          </div>
          
          {/* Connection */}
          <div className="pipeline-connection h-6 md:w-8 md:h-0.5 border-logo-blue/30
              border md:border-0 md:bg-logo-blue/30 flex-shrink-0"></div>
          
          {/* CRM (duplicated) */}
          <div className="pipeline-step relative px-5 py-3 rounded-lg border border-logo-blue/20 
              bg-midnight-surface flex items-center gap-2 transition-all duration-500">
            <User className="h-5 w-5 text-logo-blue" />
            <span>CRM Update</span>
            
            {/* Glow effect */}
            <div className="absolute inset-0 -z-10 bg-logo-blue/5 blur-md opacity-0 transition-opacity duration-300 
                pipeline-glow"></div>
          </div>
        </div>
      </div>
      
      <style>
        {`
        .pipeline-step:hover {
          transform: scale(1.05);
          box-shadow: 0 0 15px rgba(0, 207, 255, 0.25);
        }
        
        .pipeline-step:hover .pipeline-glow {
          opacity: 1;
        }
        `}
      </style>
    </div>
  );
};
