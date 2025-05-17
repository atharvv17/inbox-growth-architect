
import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-black text-white">
      {/* Background decoration elements */}
      <div className="absolute top-1/4 left-1/4 w-40 h-40 border border-white/10 rounded-full blur-sm"></div>
      <div className="absolute bottom-1/3 right-1/4 w-32 h-32 border border-white/10 rounded-full blur-sm"></div>
      
      {/* Triangle decorations */}
      <div className="absolute left-[10%] top-1/3">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" opacity="0.2">
          <path d="M60 10L110 100H10L60 10Z" stroke="white" strokeWidth="1" />
        </svg>
      </div>
      <div className="absolute right-[10%] bottom-1/4">
        <svg width="150" height="150" viewBox="0 0 150 150" fill="none" opacity="0.15">
          <path d="M75 10L140 130H10L75 10Z" stroke="white" strokeWidth="1" />
        </svg>
      </div>
      
      {/* Main content container */}
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Two-line headline with highlighted backgrounds */}
          <h1 className="text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6.5rem] leading-tight font-bold mb-8 tracking-tight">
            <span className="inline-block bg-[#3b4890] px-6 py-2 mb-4">
              We Build Predictable Sales
            </span>
            <br />
            <span className="inline-block bg-[#70504a] px-6 py-2">
              Pipelines for B2B Companies
            </span>
          </h1>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-4 mb-10">
            <span className="bg-[#f8a896] text-black px-4 py-1 rounded-full text-sm font-medium">
              Tech Founders
            </span>
            <span className="bg-[#f5d47b] text-black px-4 py-1 rounded-full text-sm font-medium ml-auto">
              General Partners
            </span>
          </div>
          
          {/* Descriptive text */}
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mb-10">
            Done-for-you outreach, CRM systems & appointment booking — installed in 7 days. 
            We help you scale content strategies to attract quality leads and deepen relationships.
          </p>
          
          {/* CTA Button */}
          <div>
            <Button 
              className="bg-transparent hover:bg-white/10 text-white border border-white rounded-full text-lg px-8 py-6 h-auto"
              size="lg">
              Book a Free Growth Audit
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
