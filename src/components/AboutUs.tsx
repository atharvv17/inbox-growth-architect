
import React, { useEffect, useRef } from 'react';
import { SectionTitle } from '@/components/ui/section-title';
import { motion } from 'framer-motion';
import { PipelineAnimation } from '@/components/ui/pipeline-animation';

const AboutUs = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="py-20 bg-white text-black relative" id="about">
      {/* Top accent line with gradient */}
      <div className="h-1 w-full bg-gradient-to-r from-[#00CFFF]/30 to-[#7EEAFF] max-w-5xl mx-auto mb-16"></div>
      
      <div className="container mx-auto px-4 md:px-8">
        <div ref={sectionRef} className="opacity-0 transition-all duration-1000">
          {/* Badge with mission statement */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#00CFFF]/10 to-[#7EEAFF]/10 border border-[#00CFFF]/20">
              <span className="text-[#00CFFF] font-medium">✦ Our Mission</span>
            </div>
          </div>
          
          <SectionTitle 
            title="About LeveragedGrowth" 
            align="center"
            variant="default"
            className="mb-12"
          />
          
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left column with animation */}
            <div className="rounded-xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#0A0A0A] to-[#1A1A1A] p-6">
              {/* Use the PipelineAnimation component */}
              <PipelineAnimation />
            </div>
            
            {/* Right column with text */}
            <div className="space-y-6 text-left">
              <p className="text-xl font-medium leading-relaxed text-[#1E293B]">
                LeveragedGrowth is a done-for-you outbound sales agency that builds predictable pipelines for B2B companies. We specialize in creating cold outreach systems that deliver qualified leads straight to your calendar — without you lifting a finger.
              </p>
              
              <p className="text-xl leading-relaxed text-[#374151]">
                From lead sourcing and custom messaging to inbox setup and daily campaign management, we handle the entire top-of-funnel so you can focus on closing deals.
              </p>
              
              <p className="text-xl leading-relaxed text-[#374151]">
                Whether you're a SaaS founder, agency owner, or B2B consultant, our mission is simple: to turn your outbound into a reliable growth engine — installed and running in just 7 days.
              </p>
              
              {/* Accent element */}
              <div className="pt-4">
                <div className="h-1 w-24 bg-[#00CFFF]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom accent line with gradient */}
      <div className="h-1 w-full bg-gradient-to-r from-[#7EEAFF] to-[#00CFFF]/30 max-w-5xl mx-auto mt-16"></div>
    </section>
  );
};

export default AboutUs;
