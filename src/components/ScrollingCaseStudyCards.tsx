
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Card } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/section-title";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { CheckCircle } from "lucide-react";

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const StatCard = ({ icon, label, value }: StatCardProps) => (
  <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
    <div className="text-logo-blue mb-2">
      {icon}
    </div>
    <p className="text-3xl font-bold text-[#1A1A1A]">{value}</p>
    <p className="text-sm text-[#4B5563]">{label}</p>
  </div>
);

const ScrollCard = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { 
            duration: 0.6, 
            delay: delay * 0.1,
            ease: [0.25, 0.1, 0.25, 1.0]
          } 
        }
      }}
      className="w-full max-w-3xl mx-auto mb-16"
    >
      <Card className="bg-[#F9F9F9] shadow-lg border-logo-blue/10 p-8 rounded-2xl">
        {children}
      </Card>
    </motion.div>
  );
};

export function ScrollingCaseStudyCards() {
  return (
    <section className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <ScrollCard delay={0}>
          <div className="text-center mb-4">
            <span className="inline-block bg-logo-blue/10 text-logo-blue px-3 py-1 rounded-full text-sm font-medium mb-3">
              🧠 Case Study
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-3">
              How SalesRoad Booked 14 Calls with ICPs in 30 Days
            </h2>
            <p className="text-lg text-[#4B5563]">
              Fixing the outbound system, optimizing the ICP, and building an AI-first lead engine.
            </p>
          </div>
        </ScrollCard>
        
        <ScrollCard delay={1}>
          <div>
            <h3 className="text-xl font-bold text-[#1A1A1A] flex items-center mb-3">
              <span className="text-logo-blue mr-2">🚨</span> The Challenge
            </h3>
            <p className="text-[#4B5563]">
              SalesRoad was doing outbound — but with no clear ICP, no consistent cold outreach process, and no automation. Beltaki (Sales Executive) was stuck sending manual emails, wasting time and missing leads.
            </p>
          </div>
        </ScrollCard>
        
        <ScrollCard delay={2}>
          <div>
            <h3 className="text-xl font-bold text-[#1A1A1A] flex items-center mb-3">
              <span className="text-logo-blue mr-2">🤝</span> Why They Reached Out
            </h3>
            <p className="text-[#4B5563]">
              Beltaki discovered our content and realized their current sales process was leaking leads. They needed a ready-to-deploy cold outreach system — and they needed it fast.
            </p>
          </div>
        </ScrollCard>
        
        <ScrollCard delay={3}>
          <div>
            <h3 className="text-xl font-bold text-[#1A1A1A] flex items-center mb-3">
              <span className="text-logo-blue mr-2">🛠️</span> Our System in Action
            </h3>
            <ul className="space-y-3 mt-4">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-logo-blue mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-[#4B5563]">Locked in an ICP: SaaS companies (Series A–C, hiring SDRs)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-logo-blue mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-[#4B5563]">Built a personalized 4-email cold outreach sequence</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-logo-blue mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-[#4B5563]">Set up automation using Clay + Instantly + Smartlead</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-logo-blue mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-[#4B5563]">Integrated lead scoring + auto warm-up</span>
              </li>
            </ul>
          </div>
        </ScrollCard>
        
        <ScrollCard delay={4}>
          <div>
            <h3 className="text-xl font-bold text-[#1A1A1A] flex items-center mb-4">
              <span className="text-logo-blue mr-2">🎥</span> What Beltaki Has to Say
            </h3>
            <div className="rounded-lg overflow-hidden shadow-md bg-black">
              <AspectRatio ratio={16 / 9}>
                <iframe 
                  className="w-full h-full" 
                  src="https://www.youtube.com/embed/SfD6BD-NaO0" 
                  title="Beltaki Testimonial"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen>
                </iframe>
              </AspectRatio>
            </div>
            <p className="text-center mt-3 text-logo-blue hover:text-logo-darkBlue cursor-pointer transition-colors">
              Watch how we built the system →
            </p>
          </div>
        </ScrollCard>
        
        <ScrollCard delay={5}>
          <div>
            <h3 className="text-xl font-bold text-[#1A1A1A] flex items-center mb-4">
              <span className="text-logo-blue mr-2">📈</span> Outcomes in 30 Days
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
              <StatCard icon={<span className="text-2xl">🚀</span>} label="Qualified Leads" value="47" />
              <StatCard icon={<span className="text-2xl">📞</span>} label="Booked ICP Calls" value="14" />
              <StatCard icon={<span className="text-2xl">💰</span>} label="Pipeline Value" value="$36k ARR" />
              <StatCard icon={<span className="text-2xl">⏱️</span>} label="Manual Work Reduced" value="60%" />
            </div>
          </div>
        </ScrollCard>
      </div>
    </section>
  );
}
