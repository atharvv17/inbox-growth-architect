
import React from "react";
import { SectionTitle } from "@/components/ui/section-title";
import { PipelineAnimation } from "@/components/ui/pipeline-animation";
import { Card } from "@/components/ui/card";

const AboutUs = () => {
  return (
    <section id="about" className="py-16 bg-[#0A0A0A] text-white relative">
      {/* Top wave transition */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-[#000000]"></path>
        </svg>
      </div>
      
      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00CFFF]/20 via-[#7EEAFF]/20 to-[#00CFFF]/20 rounded-lg blur opacity-30"></div>
            <Card className="relative border border-[#00CFFF]/10 bg-black/40 p-6">
              <PipelineAnimation />
            </Card>
          </div>
          
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 bg-[#00CFFF]/10 rounded-full text-[#00CFFF] text-sm font-medium mb-2">
              ✦ Our Mission
            </div>
            
            <h2 className="text-3xl font-bold mb-4 text-white">About LeveragedGrowth</h2>
            
            <div className="space-y-4 text-[#374151] text-lg">
              <p>
                LeveragedGrowth is a done-for-you outbound sales agency that builds predictable pipelines for B2B companies. We specialize in creating cold outreach systems that deliver qualified leads straight to your calendar — without you lifting a finger.
              </p>
              
              <p>
                From lead sourcing and custom messaging to inbox setup and daily campaign management, we handle the entire top-of-funnel so you can focus on closing deals.
              </p>
              
              <p>
                Whether you're a SaaS founder, agency owner, or B2B consultant, our mission is simple: to turn your outbound into a reliable growth engine — installed and running in just 7 days.
              </p>
            </div>
            
            <div className="h-1 w-24 bg-gradient-to-r from-[#00CFFF] to-[#7EEAFF] rounded-full mt-6"></div>
          </div>
        </div>
      </div>
      
      {/* Bottom wave transition */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] rotate-180">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-[#F8FAFC]"></path>
        </svg>
      </div>
    </section>
  );
};

export default AboutUs;
