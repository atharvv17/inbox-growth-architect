
import React from 'react';
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

interface CTASectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  title,
  subtitle,
  buttonText
}) => {
  return <section className="py-16 bg-gradient-to-b from-black to-[#111111] relative">
      {/* Top curved transition */}
      <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 left-0 w-full h-16">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-[#000000]"></path>
        </svg>
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-3 text-white">Join the Waiting List for Your Predictable Sales Pipeline</h2>
          <p className="text-lg text-gray-300 mb-6">Spaces are limited — secure your spot before capacity fills up.</p>
          <Button 
            className="bg-[#00CFFF] hover:bg-[#00CFFF]/90 text-black font-bold text-base px-6 py-5 h-auto transition-all duration-300 hover:shadow-lg hover:shadow-[#00CFFF]/30 hover:scale-105" 
            size="lg"
            onClick={() => window.open("https://calendly.com/leveragegrowthbiz/30min?month=2025-05", "_blank")}
          >
            <Calendar className="mr-2 h-5 w-5" />
            Request Your Free Growth Assessment Today
          </Button>
        </div>
      </div>
    </section>;
};

export default CTASection;
