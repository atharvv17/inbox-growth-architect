
import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        {/* Dark background with subtle gradient */}
        <div className="absolute inset-0 bg-[#1A1B1F]"></div>
        
        {/* Subtle blue/teal glow effect at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 w-full h-[400px] bg-gradient-to-r from-[#1EAEDB]/20 via-[#1EAEDB]/30 to-[#00C896]/20 blur-[150px] rounded-full mx-auto"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 flex flex-col items-center pt-24">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 animate-fade-in text-white tracking-tight">
            We Build Predictable Sales <br />
            Pipelines for B2B Companies
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-12 animate-fade-in">
            Done-for-you outreach, CRM systems & appointment booking — installed in 7 days
          </p>
          <Button 
            className="bg-white hover:bg-white/90 text-black rounded-full text-lg px-8 py-6 h-auto"
            size="lg">
            Book a Free Growth Audit
          </Button>
        </div>
        
        {/* Visual element - Dashboard mockup with data visualization */}
        <div className="relative w-full max-w-5xl mx-auto mt-4 animate-fade-in">
          <div className="bg-gradient-to-r from-midnight-surface/80 via-midnight-surface to-midnight-surface/80 rounded-xl border border-white/10 backdrop-blur-sm p-4 md:p-6 shadow-2xl">
            <div className="aspect-video w-full overflow-hidden rounded-md">
              {/* Dashboard UI - You can replace this with a more detailed mockup if needed */}
              <div className="bg-midnight-background w-full h-full rounded-md flex flex-col p-4">
                {/* Dashboard header */}
                <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-midnight-success rounded-full"></div>
                    <div className="w-3 h-3 bg-midnight-warning rounded-full"></div>
                    <div className="w-3 h-3 bg-midnight-primary rounded-full"></div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="h-6 w-20 bg-white/10 rounded-full"></div>
                    <div className="h-6 w-6 bg-white/10 rounded-full"></div>
                    <div className="h-6 w-6 bg-white/10 rounded-full"></div>
                  </div>
                </div>
                
                {/* Dashboard content */}
                <div className="grid grid-cols-12 gap-4 h-full">
                  {/* Sidebar navigation */}
                  <div className="col-span-2 bg-midnight-surface/50 rounded-md p-2 flex flex-col space-y-3">
                    {[1, 2, 3, 4, 5].map(i => (
                      <div key={i} className={`h-8 ${i === 1 ? 'bg-midnight-primary/20' : 'bg-white/5'} rounded-md`}></div>
                    ))}
                  </div>
                  
                  {/* Main dashboard area */}
                  <div className="col-span-10 grid grid-rows-3 gap-4">
                    {/* Top row - metrics */}
                    <div className="grid grid-cols-3 gap-4">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="bg-midnight-surface/50 rounded-md p-3">
                          <div className="h-2 w-16 bg-white/20 rounded-full mb-2"></div>
                          <div className="h-6 w-24 bg-white/30 rounded-full"></div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Middle row - chart */}
                    <div className="row-span-1 bg-midnight-surface/50 rounded-md p-4">
                      <div className="h-3 w-24 bg-white/20 rounded-full mb-4"></div>
                      <div className="flex items-end justify-between h-24 px-2">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => {
                          const height = `${20 + Math.random() * 60}%`;
                          return (
                            <div key={i} style={{height}} className={`w-12 rounded-t-sm ${i % 3 === 0 ? 'bg-midnight-primary' : i % 3 === 1 ? 'bg-midnight-success' : 'bg-white/20'}`}></div>
                          );
                        })}
                      </div>
                    </div>
                    
                    {/* Bottom row - table */}
                    <div className="row-span-1 bg-midnight-surface/50 rounded-md p-4">
                      <div className="h-3 w-32 bg-white/20 rounded-full mb-4"></div>
                      <div className="space-y-3">
                        {[1, 2, 3].map(i => (
                          <div key={i} className="flex justify-between items-center border-b border-white/5 pb-2">
                            <div className="flex items-center space-x-2">
                              <div className="h-5 w-5 bg-white/10 rounded-full"></div>
                              <div className="h-3 w-24 bg-white/20 rounded-full"></div>
                            </div>
                            <div className="h-3 w-16 bg-white/10 rounded-full"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Reflection effect */}
          <div className="absolute inset-x-0 -bottom-10 h-10 bg-gradient-to-b from-[#1EAEDB]/10 to-transparent blur-md"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
