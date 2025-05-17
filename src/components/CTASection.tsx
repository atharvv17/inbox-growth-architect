
import React from 'react';
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

interface CTASectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
}

const CTASection: React.FC<CTASectionProps> = ({ title, subtitle, buttonText }) => {
  return (
    <section className="py-12 bg-gradient-to-b from-black to-[#111]">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-3 text-white">{title}</h2>
          <p className="text-lg text-gray-300 mb-6">{subtitle}</p>
          <Button className="bg-[#1EAEDB] hover:bg-[#3D5AFE] text-white text-base px-6 py-5 h-auto transition-colors" size="lg">
            <Calendar className="mr-2 h-5 w-5" />
            {buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
