
import React from 'react';
import { SectionTitle } from '@/components/ui/section-title';
import { CtaButton } from '@/components/ui/cta-button';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { ArrowRight, ChevronRight, Play } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  icon: React.ReactNode;
  metric: string;
  value: string;
  accentColor?: string;
}

const StatCard = ({ icon, metric, value, accentColor = "#00CFFF" }: StatCardProps) => (
  <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
    <CardContent className="p-5">
      <div className="flex items-start space-x-4">
        <div className="rounded-full p-2" style={{ backgroundColor: `${accentColor}20` }}>
          <div className="text-[#00CFFF] w-6 h-6">
            {icon}
          </div>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-[#6B7280] font-medium">{metric}</p>
          <p className="text-xl font-bold text-[#1A1F2C]">{value}</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

const CaseStudySection = () => {
  return (
    <section className="py-16 bg-white relative" id="case-study">
      <div className="container">
        {/* Section Title */}
        <SectionTitle 
          title="How SalesRoad Booked 14 Sales Calls in 30 Days Using Our AI-Powered Cold Outreach System" 
          subtitle="From messy manual outreach to 47 qualified leads and $36k in pipeline — powered by LeveragedGrowth."
          align="center"
          titleSize="md"
          className="mb-10"
        />
        
        {/* Two-Column Layout for Desktop, Stacked for Mobile */}
        <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
          {/* Left Column - Video */}
          <div className="flex flex-col space-y-4">
            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100 bg-[#F8FAFC] relative group">
              <AspectRatio ratio={16 / 9}>
                <iframe 
                  className="w-full h-full" 
                  src="https://www.youtube.com/embed/SfD6BD-NaO0" 
                  title="SalesRoad Case Study"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </AspectRatio>
              
              {/* Animated border glow on hover */}
              <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-[#00CFFF]/30 via-[#7EEAFF]/30 to-[#00CFFF]/30 animate-flow"></div>
            </div>
            
            {/* CTA below video */}
            <CtaButton 
              variant="ghost" 
              className="text-[#00CFFF] hover:text-[#00CFFF] hover:bg-[#00CFFF]/5 w-fit mx-auto"
              endIcon={<ArrowRight className="w-4 h-4" />}
            >
              Watch how we built the system
            </CtaButton>
          </div>
          
          {/* Right Column - Case Study Breakdown */}
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-xl mb-2 text-[#1A1A1A] flex items-center">
                <span className="text-[#00CFFF] mr-2">🚨</span>
                The Challenge
              </h3>
              <p className="text-[#4B5563]">
                SalesRoad's outbound was stuck in low gear — no automation, unclear ICP, and cold emails that weren't converting.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-xl mb-2 text-[#1A1A1A] flex items-center">
                <span className="text-[#00CFFF] mr-2">🔍</span>
                Why They Reached Us
              </h3>
              <p className="text-[#4B5563]">
                Their Sales Executive, Beltaki, found our YouTube content and booked a call after realizing they needed a plug-and-play outbound system — fast.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-xl mb-2 text-[#1A1A1A] flex items-center">
                <span className="text-[#00CFFF] mr-2">✅</span>
                What We Did
              </h3>
              <ul className="text-[#4B5563] list-disc pl-5 space-y-1">
                <li>Fixed their ICP to focus on Series A–C SaaS companies hiring SDRs</li>
                <li>Built a 4-email personalized cold email sequence</li>
                <li>Set up cold outreach automation using Clay, Instantly, and Smartlead</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-xl mb-2 text-[#1A1A1A] flex items-center">
                <span className="text-[#00CFFF] mr-2">📈</span>
                What Happened
              </h3>
              <ul className="text-[#4B5563] list-disc pl-5 space-y-1">
                <li>47 qualified leads</li>
                <li>14 booked sales calls</li>
                <li>2 deals in the pipeline ($36,000 ARR)</li>
                <li>Beltaki saved 60% of his time and focused on closing</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Stats Cards - Side by side on desktop */}
        <div className="mb-10">
          <h3 className="text-center font-bold text-xl mb-6 text-[#1A1A1A]">Results at a Glance</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard 
              icon={<Play />} 
              metric="Qualified Leads" 
              value="47 in 30 Days" 
            />
            <StatCard 
              icon={<Play />} 
              metric="Booked Calls" 
              value="14 with ICP" 
            />
            <StatCard 
              icon={<Play />} 
              metric="Pipeline Value" 
              value="$36,000 ARR" 
            />
            <StatCard 
              icon={<Play />} 
              metric="Time Saved" 
              value="60% Less Manual Work" 
            />
          </div>
        </div>
        
        {/* Testimonial Quote */}
        <div className="max-w-3xl mx-auto px-6 py-10 relative">
          <div className="absolute text-6xl font-serif text-[#00CFFF]/20 -top-2 left-0">"</div>
          <blockquote className="text-xl md:text-2xl text-center font-medium text-[#1A1A1A] italic">
            The outbound system they built for us is incredible. Our pipeline is now consistently full, and I can focus on what I do best — closing deals.
          </blockquote>
          <div className="absolute text-6xl font-serif text-[#00CFFF]/20 bottom-0 right-4 rotate-180">"</div>
          <div className="text-center mt-6">
            <p className="font-bold text-[#1A1A1A]">Beltaki Sideris</p>
            <p className="text-sm text-[#6B7280]">Sales Executive, SalesRoad</p>
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="text-center mt-10">
          <CtaButton 
            className="bg-[#00CFFF] hover:bg-[#00CFFF]/90 text-white font-medium px-8 py-3"
            endIcon={<ChevronRight className="w-4 h-4" />}
            glowEffect
          >
            Book Your Strategy Call Now
          </CtaButton>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
