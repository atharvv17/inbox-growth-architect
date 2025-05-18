
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  outcome: string;
  buttonText: string;
  featured?: boolean;
  accentColor?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon, 
  features, 
  outcome, 
  buttonText,
  featured = false,
  accentColor = "#00CFFF" // Default to our primary electric blue
}) => {
  const accentColorStyle = { 
    backgroundColor: featured ? `${accentColor}` : undefined,
    color: featured ? "#000000" : undefined 
  };

  const accentBgStyle = { 
    backgroundColor: featured ? `${accentColor}20` : undefined 
  };

  const accentTextStyle = { 
    color: featured ? accentColor : undefined 
  };
  
  return (
    <div className="relative overflow-hidden rounded-xl border border-border/40 p-6 bg-card/80 backdrop-blur-md shadow-lg">
      {featured && (
        <div className="absolute -top-4 -right-20 rotate-45">
          <div className="w-40 py-1 text-center text-xs font-medium" style={accentColorStyle}>
            Popular
          </div>
        </div>
      )}
      
      <div className="inline-flex rounded-lg p-2 mb-4" style={accentBgStyle}>
        {React.cloneElement(icon as React.ReactElement, { 
          className: "h-5 w-5",
          style: accentTextStyle
        })}
      </div>
      
      <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground mb-6">{description}</p>
      
      <div className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start">
            <Check className="mr-2 h-5 w-5 flex-shrink-0 text-primary" style={featured ? accentTextStyle : undefined} />
            <span className="text-foreground/80 text-sm">{feature}</span>
          </div>
        ))}
      </div>
      
      <div className="mt-6 mb-6 rounded-lg bg-muted/50 p-4 text-sm text-muted-foreground">
        <strong className="block mb-1 text-foreground">Outcome:</strong>
        {outcome}
      </div>
      
      <Button 
        className="w-full transition-all hover:scale-105"
        style={featured ? { backgroundColor: accentColor, color: "#000" } : undefined}
        variant={featured ? undefined : "default"}
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default ServiceCard;
