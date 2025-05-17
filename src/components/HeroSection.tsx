
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const HeroSection: React.FC = () => {
  return <section className="relative min-h-screen flex items-center pt-32 overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        {/* Black background with opacity */}
        <div className="absolute inset-0 bg-black"></div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1EAEDB]/10 to-[#3D5AFE]/10 opacity-10"></div>
        
        {/* Minimal polka dots - positioned to start below header */}
        <div 
          className="absolute inset-0 top-24 opacity-10" 
          style={{
            backgroundImage: `radial-gradient(white 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        ></div>
        
        {/* Geometric shapes - minimal and subtle */}
        <div className="absolute inset-0 top-24 opacity-5">
          {/* Circle */}
          <div className="absolute top-1/4 left-1/5 w-48 h-48 rounded-full border border-white/20"></div>
          
          {/* Rectangle */}
          <div className="absolute bottom-1/3 right-1/4 w-64 h-40 border border-white/20 rotate-12"></div>
          
          {/* Triangle (using CSS) */}
          <div className="absolute top-2/3 left-1/3 opacity-20"
               style={{
                 width: 0,
                 height: 0,
                 borderLeft: '25px solid transparent',
                 borderRight: '25px solid transparent',
                 borderBottom: '50px solid rgba(255,255,255,0.2)'
               }}>
          </div>
        </div>
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="flex justify-center mb-8">
            
          </div>
          
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 animate-fade-in text-white">
            We Build Predictable Sales Pipelines for B2B Companies
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in">
            Done-for-you outreach, CRM systems & appointment booking — installed in 7 days
          </p>
          <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 justify-center">
            <div className="space-y-4 md:space-y-0 animate-fade-in">
              <Button className="bg-[#1EAEDB] hover:bg-[#3D5AFE] text-white w-full md:w-auto flex items-center transition-colors" size="lg">
                <Calendar className="mr-2 h-5 w-5" />
                Book a Free Growth Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
    </section>;
};

export default HeroSection;
