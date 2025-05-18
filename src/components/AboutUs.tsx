
import React, { useEffect, useRef } from 'react';
import { AnimatedPipeline } from './ui/animated-pipeline';

const AboutUs = () => {
  const textRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    
    if (textRef.current) {
      observer.observe(textRef.current);
    }
    
    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);
  
  return (
    <section className="py-16 md:py-24 bg-black text-white relative" id="about">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-6">
          <span className="inline-flex items-center justify-center gap-1 text-[#00CFFF] font-medium tracking-wide mb-2">
            <span className="text-xl">✦</span> ABOUT US <span className="text-xl">✦</span>
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Our Mission</h2>
          
          {/* Horizontal accent line */}
          <div className="w-20 h-1 bg-gradient-to-r from-[#00CFFF] to-[#7EEAFF] mx-auto mb-10 rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left side: Animation */}
          <div className="order-2 md:order-1 bg-[#0A0A0A] p-4 rounded-xl border border-[#00CFFF]/10 shadow-lg shadow-[#00CFFF]/5">
            <h3 className="text-xl text-center text-white mb-4">How We Build Your Pipeline</h3>
            <AnimatedPipeline />
          </div>
          
          {/* Right side: Text content */}
          <div ref={textRef} className="order-1 md:order-2 opacity-0 transition-opacity duration-700">
            <div className="space-y-6 font-[Inter]">
              <p className="text-lg text-gray-300 leading-relaxed">
                <span className="text-[#00CFFF] font-semibold text-xl block mb-2">LeveragedGrowth</span> is a done-for-you outbound sales agency that builds predictable pipelines for B2B companies. We specialize in creating cold outreach systems that deliver qualified leads straight to your calendar — without you lifting a finger.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                From lead sourcing and custom messaging to inbox setup and daily campaign management, we handle the entire top-of-funnel so you can focus on closing deals.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Whether you're a SaaS founder, agency owner, or B2B consultant, our mission is simple: to turn your outbound into a reliable growth engine — installed and running in just 7 days.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave bottom decoration */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-[#0A0A0A]"></path>
        </svg>
      </div>
    </section>
  );
};

export default AboutUs;
