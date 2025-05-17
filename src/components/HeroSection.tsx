
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
      
      <div className="container relative z-10 mx-auto px-4 flex flex-col items-center">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 animate-fade-in text-white tracking-tight">
            We Build Predictable Sales Pipelines for B2B Companies
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 animate-fade-in">
            Done-for-you outreach, CRM systems & appointment booking — installed in 7 days
          </p>
          <Button 
            className="bg-white hover:bg-white/90 text-black rounded-full text-lg px-8 py-6 h-auto"
            size="lg">
            Book a Free Growth Audit
          </Button>
        </div>
        
        {/* Visual element - 3D chart visualization similar to reference image */}
        <div className="w-full max-w-3xl mx-auto mt-8 animate-fade-in relative">
          <div className="aspect-[16/6] w-full bg-gradient-to-r from-[#1EAEDB]/20 via-[#1EAEDB]/30 to-[#00C896]/20 rounded-full relative overflow-hidden">
            {/* Chart line visualization */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-4/5 h-1/2 relative">
                {/* Glowing chart line */}
                <svg className="w-full h-full" viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
                  {/* Gradient definition */}
                  <defs>
                    <linearGradient id="chartGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#1EAEDB" stopOpacity="0.8" />
                      <stop offset="50%" stopColor="#ffffff" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#00C896" stopOpacity="0.8" />
                    </linearGradient>
                  </defs>
                  
                  {/* Line path */}
                  <path
                    d="M0,80 C20,70 40,90 60,75 C80,60 100,50 120,40 C140,30 160,50 180,30 C200,10 220,5 240,15 C260,25 280,15 300,5"
                    fill="none"
                    stroke="url(#chartGradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]"
                  />
                  
                  {/* Arrow at the end */}
                  <path
                    d="M295,5 L300,5 L298,10"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]"
                  />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Reflection/glow effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1EAEDB]/20 opacity-50 blur-sm"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
