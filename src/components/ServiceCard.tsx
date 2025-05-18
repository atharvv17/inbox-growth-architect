
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
  accentColor = "#3B82F6"
}) => {
  return (
    <div className={`relative overflow-hidden rounded-xl border p-6 ${
      featured 
        ? `border-[${accentColor}]/40 bg-gradient-to-b from-[#1E293B] to-[#0F172A]` 
        : "border-gray-800 bg-[#1E293B]"
    }`}>
      {featured && (
        <div className="absolute -top-4 -right-20 rotate-45">
          <div className={`w-40 py-1 text-center text-xs font-medium bg-[${accentColor}] text-black`}>
            Popular
          </div>
        </div>
      )}
      
      <div className={`inline-flex rounded-lg ${featured ? `bg-[${accentColor}]/20` : "bg-blue-500/20"} p-2 mb-4`}>
        {React.cloneElement(icon as React.ReactElement, { 
          className: `h-5 w-5 ${featured ? `text-[${accentColor}]` : "text-blue-500"}` 
        })}
      </div>
      
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300 mb-6">{description}</p>
      
      <div className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start">
            <Check className={`mr-2 h-5 w-5 flex-shrink-0 ${featured ? `text-[${accentColor}]` : "text-blue-500"}`} />
            <span className="text-gray-200 text-sm">{feature}</span>
          </div>
        ))}
      </div>
      
      <div className="mt-6 mb-6 rounded-lg bg-gray-800/50 p-4 text-sm text-gray-300">
        <strong className="block mb-1 text-white">Outcome:</strong>
        {outcome}
      </div>
      
      <Button className={`w-full ${
        featured 
          ? `bg-[${accentColor}] hover:bg-[${accentColor}]/90 text-black` 
          : "bg-blue-600 hover:bg-blue-700"
      }`}>
        {buttonText}
      </Button>
    </div>
  );
};

export default ServiceCard;
