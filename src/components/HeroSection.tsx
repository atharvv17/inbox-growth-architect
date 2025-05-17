
import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        {/* Dark background with gradient glow */}
        <div className="absolute inset-0 bg-black"></div>
        
        {/* Blue glow effect at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 w-full h-[400px] bg-[#1EAEDB]/20 blur-[150px] rounded-full mx-auto"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 flex flex-col items-center">
        {/* Centered text content */}
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 animate-fade-in text-white tracking-tight leading-tight">
            We Build Predictable Sales Pipelines for B2B Companies
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 animate-fade-in">
            Done-for-you outreach, CRM systems & appointment booking — installed in 7 days
          </p>
          <div className="flex justify-center mb-16">
            <Button 
              className="bg-white hover:bg-white/90 text-black rounded-full text-lg px-8 py-6 h-auto"
              size="lg">
              Book a Free Growth Audit
            </Button>
          </div>
        </div>
        
        {/* Dashboard mockup visualization - now below the text */}
        <div className="w-full max-w-3xl mx-auto relative">
          <div className="bg-gradient-to-tr from-[#1EAEDB]/30 to-transparent p-1 rounded-xl shadow-2xl">
            <div className="bg-black/70 backdrop-blur-sm rounded-lg p-4 border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1" 
                alt="Sales Pipeline Dashboard" 
                className="w-full rounded-md shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#1EAEDB]/30 blur-2xl rounded-full"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-[#1EAEDB]/20 blur-2xl rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
