
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center pt-20 overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        {/* Dark background with gradient glow */}
        <div className="absolute inset-0 bg-black"></div>
        
        {/* Blue glow effect at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 w-full h-[400px] bg-[#1EAEDB]/20 blur-[150px] rounded-full mx-auto"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 flex flex-col items-center">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 animate-fade-in text-white tracking-tight">
            We Build Predictable Sales Pipelines for B2B Companies
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 animate-fade-in">
            Done-for-you outreach, CRM systems & appointment booking — installed in 7 days
          </p>
          <div className="flex justify-center">
            <Button 
              className="bg-white hover:bg-white/90 text-black rounded-full text-lg px-8 py-6 h-auto"
              size="lg">
              Book a Free Growth Audit
            </Button>
          </div>
        </div>
        
        {/* Visual element below the text content */}
        <div className="w-full max-w-5xl mx-auto mt-8 animate-fade-in">
          <div className="relative bg-gradient-to-b from-[#1EAEDB]/30 to-transparent p-1 rounded-lg shadow-xl">
            <div className="bg-black/80 rounded-lg overflow-hidden">
              {/* Dashboard mockup or sales pipeline visual */}
              <div className="relative aspect-[16/9] w-full">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-4">
                  <div className="bg-black/70 backdrop-blur-sm rounded-lg h-full w-full flex flex-col p-4">
                    {/* Mock dashboard header */}
                    <div className="flex justify-between items-center mb-6">
                      <div className="bg-blue-500/20 h-8 w-40 rounded"></div>
                      <div className="flex space-x-2">
                        <div className="bg-gray-500/20 h-8 w-8 rounded-full"></div>
                        <div className="bg-gray-500/20 h-8 w-8 rounded-full"></div>
                      </div>
                    </div>
                    
                    {/* Mock dashboard content */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="bg-blue-500/10 rounded-lg p-4 h-24 flex flex-col justify-between">
                        <div className="bg-blue-500/20 h-3 w-20 rounded"></div>
                        <div className="bg-white/30 h-6 w-16 rounded"></div>
                      </div>
                      <div className="bg-green-500/10 rounded-lg p-4 h-24 flex flex-col justify-between">
                        <div className="bg-green-500/20 h-3 w-20 rounded"></div>
                        <div className="bg-white/30 h-6 w-16 rounded"></div>
                      </div>
                      <div className="bg-purple-500/10 rounded-lg p-4 h-24 flex flex-col justify-between">
                        <div className="bg-purple-500/20 h-3 w-20 rounded"></div>
                        <div className="bg-white/30 h-6 w-16 rounded"></div>
                      </div>
                    </div>
                    
                    {/* Mock pipeline visualization */}
                    <div className="flex justify-between items-end h-32 mb-4">
                      <div className="bg-blue-500/20 h-[20%] w-[15%] rounded-t-lg"></div>
                      <div className="bg-blue-500/30 h-[40%] w-[15%] rounded-t-lg"></div>
                      <div className="bg-blue-500/40 h-[70%] w-[15%] rounded-t-lg"></div>
                      <div className="bg-blue-500/50 h-[90%] w-[15%] rounded-t-lg"></div>
                      <div className="bg-blue-500/60 h-[60%] w-[15%] rounded-t-lg"></div>
                      <div className="bg-blue-500/30 h-[30%] w-[15%] rounded-t-lg"></div>
                    </div>
                    
                    {/* Mock labels */}
                    <div className="flex justify-between px-2">
                      <div className="bg-gray-500/20 h-2 w-12 rounded"></div>
                      <div className="bg-gray-500/20 h-2 w-12 rounded"></div>
                      <div className="bg-gray-500/20 h-2 w-12 rounded"></div>
                      <div className="bg-gray-500/20 h-2 w-12 rounded"></div>
                      <div className="bg-gray-500/20 h-2 w-12 rounded"></div>
                      <div className="bg-gray-500/20 h-2 w-12 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
