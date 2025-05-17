
import React from "react";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
}

const FAQSection: React.FC<FAQSectionProps> = ({ faqs }) => {
  return (
    <section className="py-8 md:py-12 bg-midnight-surface" id="faq">
      <div className="container">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold mb-2">Frequently Asked Questions</h2>
          <p className="text-lg text-midnight-subtext max-w-2xl mx-auto">
            Everything you need to know about our outbound lead generation services
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-midnight-background rounded-lg px-4 border border-logo-blue/20"
              >
                <AccordionTrigger className="text-base font-medium py-3">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-midnight-subtext text-sm pb-3">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
