
import React, { useEffect, useRef } from 'react';
import { Mail, Calendar, MessageSquare, User, ChartBar } from 'lucide-react';

export const PipelineAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Start animation immediately and make it repeat continuously
    const startAnimation = () => {
      if (!containerRef.current) return;

      // Make container visible immediately
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

      // Run the first cycle immediately
      animateCycle();

      // Then set interval to repeat the animation
      const animationInterval = setInterval(() => {
        animateCycle();
      }, 5000); // Full cycle repeats every 5 seconds

      // Clean up interval on unmount
      return () => clearInterval(animationInterval);
    };

    // Start animation right away
    const animationStart = setTimeout(startAnimation, 500);
    return () => {
      clearTimeout(animationStart);
    };
  }, []);

  // Added return statement with a div container
  return (
    <div ref={containerRef} className="w-full opacity-0">
      {/* Pipeline animation content would go here */}
    </div>
  );
};
