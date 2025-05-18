
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { GradientHeading } from '@/components/ui/gradient-heading';
import { Zap, Users, BarChart } from 'lucide-react';

const MethodologySection: React.FC = () => {
  return (
    <section className="py-12 bg-midnight-surface">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <p className="text-logo-blue text-sm uppercase tracking-wider mb-1 font-medium">Our Approach</p>
          <GradientHeading size="xl">Human Expertise + Smart Automation</GradientHeading>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
            We use the right combination of automation and human expertise to drive efficient, 
            scalable, and high-converting outreach campaigns.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-midnight-background rounded-xl p-6 shadow-lg border border-logo-blue/20">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-logo-blue/10 rounded-lg mr-4">
                <Zap className="h-6 w-6 text-logo-blue" />
              </div>
              <h3 className="text-xl font-bold">Smart Automation</h3>
            </div>
            
            <p className="mb-4 text-midnight-subtext">
              Automation helps us streamline systems, track performance, and ensure consistency at scale.
            </p>

            <Accordion type="single" collapsible className="border-logo-blue/10">
              <AccordionItem value="benefits" className="border-logo-blue/10">
                <AccordionTrigger>Key Benefits</AccordionTrigger>
                <AccordionContent className="text-midnight-subtext">
                  <ul className="space-y-2 list-disc pl-5">
                    <li>Consistent delivery schedules</li>
                    <li>Real-time performance tracking</li>
                    <li>Scalable campaign management</li>
                    <li>Data-driven optimization</li>
                    <li>Automatic lead scoring and qualification</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="bg-midnight-background rounded-xl p-6 shadow-lg border border-logo-blue/20">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-logo-blue/10 rounded-lg mr-4">
                <Users className="h-6 w-6 text-logo-blue" />
              </div>
              <h3 className="text-xl font-bold">Human Expertise</h3>
            </div>
            
            <p className="mb-4 text-midnight-subtext">
              Our team of experts personally handles strategy, message crafting, and execution.
            </p>

            <Accordion type="single" collapsible className="border-logo-blue/10">
              <AccordionItem value="benefits" className="border-logo-blue/10">
                <AccordionTrigger>The Human Difference</AccordionTrigger>
                <AccordionContent className="text-midnight-subtext">
                  <ul className="space-y-2 list-disc pl-5">
                    <li>Personalized campaign strategy</li>
                    <li>Custom message crafting</li>
                    <li>Authentic relationship building</li>
                    <li>Brand voice alignment</li>
                    <li>Contextual understanding of responses</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        <div className="mt-12 bg-midnight-background rounded-xl p-6 shadow-lg border border-logo-blue/20">
          <div className="flex items-center mb-4">
            <div className="p-3 bg-logo-blue/10 rounded-lg mr-4">
              <BarChart className="h-6 w-6 text-logo-blue" />
            </div>
            <h3 className="text-xl font-bold">Our Balanced Approach</h3>
          </div>
          
          <p className="mb-4 text-midnight-subtext">
            We use the right combination of automation and human expertise to drive efficient, 
            scalable, and high-converting outreach. Automation helps us streamline systems, track 
            performance, and ensure consistency at scale — but it's the human insight that makes the difference.
          </p>
          
          <p className="text-midnight-subtext">
            Our team of experts personally handles strategy, message crafting, and execution — ensuring 
            that every lead feels heard, every message feels real, and every campaign is aligned with 
            your brand's tone and goals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
