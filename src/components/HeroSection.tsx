
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-95"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1EAEDB]/20 to-[#3D5AFE]/20 opacity-10"></div>
      </div>
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="flex justify-center mb-8">
            <div className="text-[#1EAEDB] font-bold text-5xl mb-2">
              LEVERAGED
              <span className="text-white">GROWTH.CO</span>
            </div>
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
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="bg-black/40 border border-[#1EAEDB]/20 p-6 rounded-xl backdrop-blur-sm animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
            <p className="text-lg font-medium text-white">No generic lists or copy-paste messaging</p>
          </div>
          <div className="bg-black/40 border border-[#1EAEDB]/20 p-6 rounded-xl backdrop-blur-sm animate-fade-in" style={{
            animationDelay: '0.4s'
          }}>
            <p className="text-lg font-medium text-white">Human-led outreach with strategic follow-ups</p>
          </div>
          <div className="bg-black/40 border border-[#1EAEDB]/20 p-6 rounded-xl backdrop-blur-sm animate-fade-in" style={{
            animationDelay: '0.6s'
          }}>
            <p className="text-lg font-medium text-white">Qualified meetings delivered directly to your calendar</p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default HeroSection;
