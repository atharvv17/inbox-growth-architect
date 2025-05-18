
import React from 'react';
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface CaseStudyResult {
  leads: string;
  calls: string;
  pipeline: string;
  timeSaved: string;
}

interface CaseStudyProps {
  clientName: string;
  clientRole: string;
  headline: string;
  problem: string;
  systemBuilt: string[];
  videoSrc: string;
  results: CaseStudyResult;
  testimonial: string;
}

const CaseStudyCard: React.FC<CaseStudyProps> = ({
  clientName,
  clientRole,
  headline,
  problem,
  systemBuilt,
  videoSrc,
  results,
  testimonial
}) => {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-lg border border-[#E5E7EB] h-full">
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <span className="bg-[#00CFFF]/10 text-[#00CFFF] px-3 py-1 rounded-full text-sm font-medium">
            {clientName}
          </span>
          <span className="mx-2 text-gray-400">•</span>
          <span className="text-gray-500 text-sm">{clientRole}</span>
        </div>
        <h3 className="text-2xl font-bold text-[#1E293B] mb-4">{headline}</h3>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-[#1E293B] mb-2">The Problem</h4>
            <p className="text-[#4B5563]">{problem}</p>
          </div>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-[#1E293B] mb-2">System We Built</h4>
            <ul className="space-y-2">
              {systemBuilt.map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-[#00CFFF] mr-2">✓</span>
                  <span className="text-[#4B5563]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div>
          <div className="mb-6 rounded-xl overflow-hidden shadow-lg bg-black">
            <AspectRatio ratio={16/9}>
              <iframe 
                src={videoSrc} 
                title="Client Testimonial" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </AspectRatio>
          </div>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-[#1E293B] mb-2">Results</h4>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#F8FAFC] p-3 rounded-lg border border-[#E5E7EB]">
                <div className="text-[#00CFFF] text-sm font-medium">Qualified Leads</div>
                <div className="text-lg font-bold text-[#1E293B]">{results.leads}</div>
              </div>
              <div className="bg-[#F8FAFC] p-3 rounded-lg border border-[#E5E7EB]">
                <div className="text-[#00CFFF] text-sm font-medium">Booked Calls</div>
                <div className="text-lg font-bold text-[#1E293B]">{results.calls}</div>
              </div>
              <div className="bg-[#F8FAFC] p-3 rounded-lg border border-[#E5E7EB]">
                <div className="text-[#00CFFF] text-sm font-medium">Pipeline Value</div>
                <div className="text-lg font-bold text-[#1E293B]">{results.pipeline}</div>
              </div>
              <div className="bg-[#F8FAFC] p-3 rounded-lg border border-[#E5E7EB]">
                <div className="text-[#00CFFF] text-sm font-medium">Time Saved</div>
                <div className="text-lg font-bold text-[#1E293B]">{results.timeSaved}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-[#E5E7EB] pt-6 mt-2">
        <blockquote className="italic text-[#4B5563] mb-6">
          "{testimonial}"
        </blockquote>
        
        <Button className="bg-[#00CFFF] hover:bg-[#00CFFF]/90 text-white">
          Build My System →
        </Button>
      </div>
    </div>
  );
};

export default CaseStudyCard;
