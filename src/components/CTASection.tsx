
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
    <section className="py-12 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-3 text-foreground">{title}</h2>
          <p className="text-lg text-muted-foreground mb-6">{subtitle}</p>
          <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-base px-6 py-5 h-auto transition-all duration-300 hover:shadow-lg hover:shadow-secondary/30 hover:scale-105" size="lg">
            <Calendar className="mr-2 h-5 w-5" />
            {buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
