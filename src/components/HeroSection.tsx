
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        {/* Dark background */}
        <div className="absolute inset-0 bg-[#0A0A0A]"></div>
        
        {/* Subtle cyan gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00CFFF]/5 to-transparent"></div>
        
        {/* Minimal geometric elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Thin cyan line - horizontal */}
          <div className="absolute top-1/4 left-0 w-full h-[0.5px] bg-[#00CFFF]/20"></div>
          
          {/* Thin cyan line - vertical */}
          <div className="absolute top-0 left-1/3 w-[0.5px] h-full bg-[#00CFFF]/10"></div>
          
          {/* Cyan dot */}
          <div className="absolute top-2/3 right-1/4 w-2 h-2 rounded-full bg-[#00CFFF]/30"></div>
          
          {/* Subtle glow behind CTA */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-16 w-60 h-60 rounded-full bg-[#00CFFF]/5 blur-[100px]"></div>
        </div>
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-block mb-6 px-4 py-2 border border-[#00CFFF]/30 rounded-full">
            <span className="text-sm font-medium text-[#00CFFF]">B2B Lead Generation</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
            We Build <span className="relative inline-block">
              Predictable
              <span className="absolute bottom-1 left-0 w-full h-[3px] bg-[#00CFFF]/70"></span>
            </span> Sales<br />Pipelines for B2B Companies
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-10">
            Done-for-you outreach, CRM systems & appointment booking — installed in 7 days
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button 
              className="bg-white hover:bg-gray-200 text-black group flex items-center px-8 py-6 rounded shadow-lg shadow-[#00CFFF]/10" 
              size="lg"
            >
              <Calendar className="mr-2 h-5 w-5" />
              <span>Book a Free Growth Audit</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <a href="#process" className="text-white hover:text-[#00CFFF] transition-colors flex items-center font-medium">
              Learn our process
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default HeroSection;
