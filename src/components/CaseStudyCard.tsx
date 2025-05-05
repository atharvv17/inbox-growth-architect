
import React from 'react';
import { Button } from "@/components/ui/button";

interface CaseStudyCardProps {
  title: string;
  stats: string[];
  image?: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ title, stats, image }) => {
  return (
    <div className="card overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <span className="text-midnight-primary mr-2">→</span>
          {title}
        </h3>
        <ul className="space-y-2 mb-6">
          {stats.map((stat, index) => (
            <li key={index} className="font-medium">{stat}</li>
          ))}
        </ul>
        <Button variant="ghost" className="px-0 text-midnight-accent hover:text-midnight-accent/80 hover:bg-transparent">
          View Case Study
        </Button>
      </div>
    </div>
  );
};

export default CaseStudyCard;
