
import React, { useEffect, useRef } from 'react';
import { Mail, Calendar, MessageSquare, User, ChartBar } from 'lucide-react';

export const AnimatedPipeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Animation timing
    const startAnimation = () => {
      if (!containerRef.current) return;
      
      // Make container visible
      containerRef.current.classList.add('animate-fade-in');
      
      // Function to run a single animation cycle
      const animateCycle = () => {
        const steps = containerRef.current?.querySelectorAll('.pipeline-step');
        const connections = containerRef.current?.querySelectorAll('.pipeline-connection');
        
        // Reset all steps and connections first
        steps?.forEach(step => {
          step.classList.remove('active');
        });
        
        connections?.forEach(connection => {
          connection.classList.remove('active');
        });
        
        // Then animate them sequentially
        steps?.forEach((step, index) => {
          setTimeout(() => {
            step.classList.add('active');
            
            // Activate connection after step
            if (connections && index < connections.length) {
              setTimeout(() => connections[index].classList.add('active'), 300);
            }
          }, 600 * (index + 1));
        });
      };
      
      // Run the first cycle with a small delay
      const firstCycle = setTimeout(animateCycle, 500);
      
      // Then set interval to repeat the animation
      const animationInterval = setInterval(() => {
        animateCycle();
      }, 5000); // Full cycle repeats every 5 seconds
      
      // Clean up interval on unmount
      return () => {
        clearTimeout(firstCycle);
        clearInterval(animationInterval);
      };
    };
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startAnimation();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);
  
  return (
    <div ref={containerRef} className="w-full py-8 opacity-0 transition-opacity duration-500">
      <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-2">
        {/* Lead */}
        <div className="pipeline-step relative px-5 py-3 rounded-lg border border-[#00CFFF]/20 
            bg-[#111111] flex items-center gap-2 transition-all duration-500 transform 
            scale-90 opacity-50">
          <Mail className="h-5 w-5 text-[#00CFFF]" />
          <span className="text-white font-medium">Lead Source</span>
          
          {/* Glow effect */}
          <div className="absolute inset-0 -z-10 bg-[#00CFFF]/5 blur-md opacity-0 transition-opacity duration-300 
              group-hover:opacity-100 pipeline-glow"></div>
        </div>
        
        {/* Connection */}
        <div className="pipeline-connection h-6 md:w-8 md:h-0.5 border-[#00CFFF]/30
            border md:border-0 md:bg-[#00CFFF]/30 flex-shrink-0 transform scale-y-0 md:scale-x-0
            transition-transform duration-300 origin-left"></div>
        
        {/* CRM */}
        <div className="pipeline-step relative px-5 py-3 rounded-lg border border-[#00CFFF]/20 
            bg-[#111111] flex items-center gap-2 transition-all duration-500 transform 
            scale-90 opacity-50">
          <User className="h-5 w-5 text-[#00CFFF]" />
          <span className="text-white font-medium">Custom Messaging</span>
          
          {/* Glow effect */}
          <div className="absolute inset-0 -z-10 bg-[#00CFFF]/5 blur-md opacity-0 transition-opacity duration-300 
              group-hover:opacity-100 pipeline-glow"></div>
        </div>
        
        {/* Connection */}
        <div className="pipeline-connection h-6 md:w-8 md:h-0.5 border-[#00CFFF]/30
            border md:border-0 md:bg-[#00CFFF]/30 flex-shrink-0 transform scale-y-0 md:scale-x-0
            transition-transform duration-300 origin-left"></div>
        
        {/* Booking */}
        <div className="pipeline-step relative px-5 py-3 rounded-lg border border-[#00CFFF]/20 
            bg-[#111111] flex items-center gap-2 transition-all duration-500 transform 
            scale-90 opacity-50">
          <Calendar className="h-5 w-5 text-[#00CFFF]" />
          <span className="text-white font-medium">Appointment</span>
          
          {/* Glow effect */}
          <div className="absolute inset-0 -z-10 bg-[#00CFFF]/5 blur-md opacity-0 transition-opacity duration-300 
              group-hover:opacity-100 pipeline-glow"></div>
        </div>
        
        {/* Connection */}
        <div className="pipeline-connection h-6 md:w-8 md:h-0.5 border-[#00CFFF]/30
            border md:border-0 md:bg-[#00CFFF]/30 flex-shrink-0 transform scale-y-0 md:scale-x-0
            transition-transform duration-300 origin-left"></div>
        
        {/* Meeting */}
        <div className="pipeline-step relative px-5 py-3 rounded-lg border border-[#00CFFF]/20 
            bg-[#111111] flex items-center gap-2 transition-all duration-500 transform 
            scale-90 opacity-50">
          <MessageSquare className="h-5 w-5 text-[#00CFFF]" />
          <span className="text-white font-medium">Sales Meeting</span>
          
          {/* Glow effect */}
          <div className="absolute inset-0 -z-10 bg-[#00CFFF]/5 blur-md opacity-0 transition-opacity duration-300 
              group-hover:opacity-100 pipeline-glow"></div>
        </div>
        
        {/* Connection */}
        <div className="pipeline-connection h-6 md:w-8 md:h-0.5 border-[#00CFFF]/30
            border md:border-0 md:bg-[#00CFFF]/30 flex-shrink-0 transform scale-y-0 md:scale-x-0
            transition-transform duration-300 origin-left"></div>
        
        {/* Success */}
        <div className="pipeline-step relative px-5 py-3 rounded-lg border border-[#00CFFF]/20 
            bg-[#111111] flex items-center gap-2 transition-all duration-500 transform 
            scale-90 opacity-50">
          <ChartBar className="h-5 w-5 text-[#00CFFF]" />
          <span className="text-white font-medium">Closed Deal</span>
          
          {/* Glow effect */}
          <div className="absolute inset-0 -z-10 bg-[#00CFFF]/5 blur-md opacity-0 transition-opacity duration-300 
              group-hover:opacity-100 pipeline-glow"></div>
        </div>
      </div>
      
      <style>
        {`
        .pipeline-step.active {
          transform: scale(1);
          opacity: 1;
          box-shadow: 0 0 15px rgba(0, 207, 255, 0.15);
        }
        
        .pipeline-step.active .pipeline-glow {
          opacity: 1;
        }
        
        .pipeline-connection.active {
          transform: scale(1);
        }
        
        @media (min-width: 768px) {
          .pipeline-connection.active {
            transform: scaleX(1);
          }
        }
        
        @media (max-width: 767px) {
          .pipeline-connection.active {
            transform: scaleY(1);
          }
        }
        `}
      </style>
    </div>
  );
};
