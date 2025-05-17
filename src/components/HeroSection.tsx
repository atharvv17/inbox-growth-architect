
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const HeroSection: React.FC = () => {
  return <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-gradient-to-b from-midnight-background via-midnight-background to-midnight-surface">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#0F0F10] opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-midnight-primary/20 to-midnight-accent/20 opacity-20"></div>
      </div>
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 animate-fade-in">
            We Build Predictable Sales Pipelines for B2B Companies
          </h1>
          <p className="text-xl md:text-2xl text-midnight-subtext mb-8 animate-fade-in">
            Done-for-you outreach, CRM systems & appointment booking — installed in 7 days
          </p>
          <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 justify-center">
            <div className="space-y-4 md:space-y-0 animate-fade-in">
              <Button className="btn-primary w-full md:w-auto flex items-center" size="lg">
                <Calendar className="mr-2 h-5 w-5" />
                Book a Free Growth Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            
            <div className="glass-card p-4 animate-fade-in" style={{
            animationDelay: '0.4s'
          }}>
              <p className="text-lg font-medium">No generic lists or copy-paste messaging</p>
            </div>
            
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-midnight-background to-transparent"></div>
    </section>;
};
export default HeroSection;
