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
  return <section className="py-16 bg-gradient-to-b from-[#F3F4F6] to-[#E5E7EB] relative">
      {/* Top curved transition */}
      <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden">
        
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-3 text-[#1F2937]">{title}</h2>
          <p className="text-lg text-[#4B5563] mb-6">{subtitle}</p>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base px-6 py-5 h-auto transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:scale-105" size="lg">
            <Calendar className="mr-2 h-5 w-5" />
            {buttonText}
          </Button>
        </div>
      </div>
    </section>;
};
export default CTASection;