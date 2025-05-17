
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 animate-fade-in text-white tracking-tight">
            Unlock your potential
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 animate-fade-in">
            Data-driven insights for growth
          </p>
          <div className="flex justify-center">
            <Button 
              className="bg-white hover:bg-white/90 text-black rounded-full text-lg px-8 py-6 h-auto"
              size="lg">
              Get started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
