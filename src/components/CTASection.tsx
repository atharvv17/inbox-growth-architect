
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
    <section className="py-20 bg-gradient-to-b from-midnight-background to-midnight-surface">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          <p className="text-xl text-midnight-subtext mb-8">{subtitle}</p>
          <Button className="btn-primary text-lg px-8 py-6 h-auto" size="lg">
            <Calendar className="mr-2 h-5 w-5" />
            {buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
