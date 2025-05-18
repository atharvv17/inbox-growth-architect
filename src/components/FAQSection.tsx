
import React, { useEffect, useRef } from "react";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
}

const FAQSection: React.FC<FAQSectionProps> = ({ faqs }) => {
  const faqRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const faqItems = entry.target.querySelectorAll('.faq-item');
            faqItems.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('animate-fade-in');
                item.classList.remove('opacity-0');
              }, 150 * index);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (faqRef.current) {
      observer.observe(faqRef.current);
    }
    
    return () => {
      if (faqRef.current) {
        observer.unobserve(faqRef.current);
      }
    };
  }, []);
  
  return (
    <section className="py-8 md:py-12 bg-[#E5E7EB]" id="faq">
      <div className="container">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold mb-2 text-[#1F2937]">Frequently Asked Questions</h2>
          <p className="text-lg text-[#374151] max-w-2xl mx-auto">
            Everything you need to know about our outbound lead generation services
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto" ref={faqRef}>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="faq-item bg-white rounded-lg px-4 border border-gray-200 shadow-sm opacity-0 transition-all duration-500"
              >
                <AccordionTrigger className="text-base font-medium py-3 flex items-center text-[#1F2937]">
                  <span className="flex items-center">
                    <HelpCircle className="text-[#3B82F6] mr-2 h-4 w-4 flex-shrink-0" />
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-[#4B5563] text-sm pb-3">
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
