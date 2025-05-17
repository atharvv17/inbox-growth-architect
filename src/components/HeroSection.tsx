import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
const HeroSection: React.FC = () => {
  return <section className="relative min-h-screen flex items-center pt-32 overflow-hidden bg-midnight-background">
      <div className="absolute inset-0 z-0">
        {/* Dark background */}
        <div className="absolute inset-0 bg-[#0A0A0A]"></div>
        
        {/* Logo-colored geometric elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Bright cyan line - horizontal */}
          <div className="absolute top-1/4 left-0 w-full h-[0.5px] bg-logo-blue/30"></div>
          
          {/* Bright cyan line - vertical */}
          <div className="absolute top-0 left-1/3 w-[0.5px] h-full bg-logo-blue/20"></div>
          
          {/* Bright cyan dot */}
          <div className="absolute top-2/3 right-1/4 w-3 h-3 rounded-full bg-logo-blue/40"></div>
          
          {/* Subtle glow behind CTA */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-16 w-80 h-80 rounded-full bg-logo-blue/10 blur-[100px]"></div>
          
          {/* Additional geometric elements to match logo style */}
          <div className="absolute bottom-1/4 right-1/3 w-40 h-40 rounded-full border border-logo-blue/5"></div>
          <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full border border-logo-blue/5"></div>
        </div>
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-block mb-6 px-4 py-2 border border-logo-blue/40 rounded-full bg-logo-blue/5 backdrop-blur-sm">
            <span className="text-sm font-medium text-logo-blue">DFY Sales Agency</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white leading-tight md:text-5xl">
            We Build <span className="relative inline-block">
              Predictable
              <span className="absolute bottom-1 left-0 w-full h-[3px] bg-logo-blue"></span>
            </span> Sales<br />Pipelines for B2B Companies
          </h1>
          
          <p className="text-lg text-gray-300 mb-10 md:text-lg">
            Done-for-you outreach, CRM systems & appointment booking — installed in 7 days
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button className="bg-logo-blue hover:bg-logo-darkBlue text-black font-semibold group flex items-center px-8 py-6 rounded shadow-lg shadow-logo-blue/20 transition-all duration-300" size="lg">
              <Calendar className="mr-2 h-5 w-5" />
              <span>Book a Free Growth Audit</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <a href="#process" className="text-white hover:text-logo-blue transition-colors flex items-center font-medium group">
              Learn our process
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Bottom fade with logo color tint */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-midnight-background via-midnight-background/95 to-transparent"></div>
      
      {/* Subtle logo color gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-logo-blue/5 to-transparent opacity-50 mix-blend-overlay"></div>
    </section>;
};
export default HeroSection;