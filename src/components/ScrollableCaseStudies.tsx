
import React, { useRef } from 'react';
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface CaseStudy {
  clientName: string;
  clientRole: string;
  headline: string;
  problem: string;
  systemBuilt: string[];
  videoSrc: string;
  results: {
    leads: string;
    calls: string;
    pipeline: string;
    timeSaved: string;
  };
  testimonial: string;
}

const caseStudies: CaseStudy[] = [
  {
    clientName: "SalesRoad",
    clientRole: "Beltaki, Sales Executive",
    headline: "Booked 14 qualified sales calls in 30 days",
    problem: "SalesRoad was struggling with an inefficient outbound process. No clear ICP, inconsistent cold outreach, and zero automation meant wasted time and missed opportunities.",
    systemBuilt: [
      "Refined ICP targeting Series A-C SaaS companies",
      "Built personalized 4-email sequence with high conversion rate",
      "Implemented Clay + Instantly + Smartlead automation",
      "Set up lead scoring and inbox warm-up protocols"
    ],
    videoSrc: "https://www.youtube.com/embed/9t_SkFg-4As",
    results: {
      leads: "47 qualified leads",
      calls: "14 booked calls",
      pipeline: "$36,000 ARR",
      timeSaved: "60% less manual work"
    },
    testimonial: "The system practically runs itself now. I can focus on closing deals while qualified meetings just show up on my calendar."
  },
  {
    clientName: "GrowthGenius",
    clientRole: "Michael, Founder",
    headline: "Generated $52,000 in new pipeline within 45 days",
    problem: "As a solo founder, Michael struggled to maintain consistent lead flow while focusing on delivering client work. Manual prospecting was eating up valuable time.",
    systemBuilt: [
      "Created hyper-targeted ICP focused on mid-market SaaS",
      "Developed LinkedIn + Email dual-channel approach",
      "Implemented automatic follow-up sequences with personalization",
      "Built CRM integration for seamless lead tracking"
    ],
    videoSrc: "https://www.youtube.com/embed/SfD6BD-NaO0",
    results: {
      leads: "63 qualified leads",
      calls: "18 sales meetings",
      pipeline: "$52,000 potential ARR",
      timeSaved: "75% of prospecting time"
    },
    testimonial: "I was skeptical about outsourcing my outbound, but this system delivers consistently qualified leads that actually convert. Game changer for my business."
  },
  {
    clientName: "ConsultPro",
    clientRole: "Jessica, Operations Director",
    headline: "Scaled from 3 to 11 clients in just 60 days",
    problem: "ConsultPro had great service delivery but struggled with an inconsistent sales process. Their outreach was sporadic and lacked proper tracking.",
    systemBuilt: [
      "Designed multi-touch attribution system across channels",
      "Created industry-specific messaging for 3 target verticals",
      "Built automated nurturing sequences for long-term prospects",
      "Implemented meeting booking and qualification workflow"
    ],
    videoSrc: "https://www.youtube.com/embed/SfD6BD-NaO0",
    results: {
      leads: "92 qualified opportunities",
      calls: "32 discovery calls",
      pipeline: "$87,500 in new business",
      timeSaved: "20+ hours weekly"
    },
    testimonial: "The leads coming through this system are so well-qualified that our close rate has nearly doubled. It's transformed how we approach sales."
  }
];

const ScrollableCaseStudies: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToNext = () => {
    if (scrollContainerRef.current) {
      const containerWidth = scrollContainerRef.current.offsetWidth;
      scrollContainerRef.current.scrollBy({ left: containerWidth, behavior: 'smooth' });
    }
  };

  const scrollToPrevious = () => {
    if (scrollContainerRef.current) {
      const containerWidth = scrollContainerRef.current.offsetWidth;
      scrollContainerRef.current.scrollBy({ left: -containerWidth, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 mb-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-3 text-[#1E293B]">Real Results, Real Clients</h2>
          <p className="text-lg text-[#4B5563] mb-8">
            See how our outbound system transforms businesses just like yours
          </p>
        </div>
        
        {/* Navigation Controls for Desktop */}
        <div className="hidden md:flex justify-end gap-2 mb-4">
          <button 
            onClick={scrollToPrevious}
            className="p-3 rounded-full bg-white border border-[#E5E7EB] shadow-sm hover:shadow-md transition-all"
            aria-label="Previous case study"
          >
            <ArrowLeft className="w-5 h-5 text-[#00CFFF]" />
          </button>
          <button 
            onClick={scrollToNext}
            className="p-3 rounded-full bg-white border border-[#E5E7EB] shadow-sm hover:shadow-md transition-all"
            aria-label="Next case study"
          >
            <ArrowRight className="w-5 h-5 text-[#00CFFF]" />
          </button>
        </div>
      </div>
      
      {/* Scrollable Container */}
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide"
        style={{
          scrollbarWidth: 'none', // Firefox
          msOverflowStyle: 'none', // IE and Edge
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {caseStudies.map((study, index) => (
          <div 
            key={index} 
            className="flex-shrink-0 w-[90vw] max-w-[900px] snap-center mx-4 first:ml-[calc((100%-min(90vw,900px))/2)] last:mr-[calc((100%-min(90vw,900px))/2)]"
          >
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-[#E5E7EB] h-full">
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <span className="bg-[#00CFFF]/10 text-[#00CFFF] px-3 py-1 rounded-full text-sm font-medium">
                    {study.clientName}
                  </span>
                  <span className="mx-2 text-gray-400">•</span>
                  <span className="text-gray-500 text-sm">{study.clientRole}</span>
                </div>
                <h3 className="text-2xl font-bold text-[#1E293B] mb-4">{study.headline}</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-[#1E293B] mb-2">The Problem</h4>
                    <p className="text-[#4B5563]">{study.problem}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-[#1E293B] mb-2">System We Built</h4>
                    <ul className="space-y-2">
                      {study.systemBuilt.map((item, i) => (
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
                        src={study.videoSrc} 
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
                        <div className="text-lg font-bold text-[#1E293B]">{study.results.leads}</div>
                      </div>
                      <div className="bg-[#F8FAFC] p-3 rounded-lg border border-[#E5E7EB]">
                        <div className="text-[#00CFFF] text-sm font-medium">Booked Calls</div>
                        <div className="text-lg font-bold text-[#1E293B]">{study.results.calls}</div>
                      </div>
                      <div className="bg-[#F8FAFC] p-3 rounded-lg border border-[#E5E7EB]">
                        <div className="text-[#00CFFF] text-sm font-medium">Pipeline Value</div>
                        <div className="text-lg font-bold text-[#1E293B]">{study.results.pipeline}</div>
                      </div>
                      <div className="bg-[#F8FAFC] p-3 rounded-lg border border-[#E5E7EB]">
                        <div className="text-[#00CFFF] text-sm font-medium">Time Saved</div>
                        <div className="text-lg font-bold text-[#1E293B]">{study.results.timeSaved}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-[#E5E7EB] pt-6 mt-2">
                <blockquote className="italic text-[#4B5563] mb-6">
                  "{study.testimonial}"
                </blockquote>
                
                <Button className="bg-[#00CFFF] hover:bg-[#00CFFF]/90 text-white">
                  Build My System →
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Add scrollbar hiding styles using standard style tag */}
      <style>
        {`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
    </section>
  );
};

export default ScrollableCaseStudies;
