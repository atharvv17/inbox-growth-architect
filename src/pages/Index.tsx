
import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import ProcessStep from "@/components/ProcessStep";
import TestimonialCard from "@/components/TestimonialCard";
import CaseStudyCard from "@/components/CaseStudyCard";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { CheckCircle, Mail, MessageSquare } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";

const Index = () => {
  return (
    <div className="min-h-screen bg-midnight-background text-midnight-text">
      <Header />
      <HeroSection />
      
      {/* Who We Serve Section */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                You're great at closing deals.<br />
                We're great at starting them.
              </h2>
              <p className="text-xl text-midnight-subtext mb-8">
                We work with:
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <CheckCircle className="text-midnight-success mr-3 h-6 w-6" />
                  <span className="text-lg">B2B consultants & agency owners</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-midnight-success mr-3 h-6 w-6" />
                  <span className="text-lg">SaaS founders & startups</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-midnight-success mr-3 h-6 w-6" />
                  <span className="text-lg">Fractional execs & coaches</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-midnight-success mr-3 h-6 w-6" />
                  <span className="text-lg">Sales teams needing top-of-funnel support</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl bg-midnight-surface p-1">
              <div className="rounded-lg overflow-hidden">
                <AspectRatio ratio={16/9}>
                  <iframe 
                    className="w-full h-full" 
                    src="https://www.youtube.com/embed/SfD6BD-NaO0" 
                    title="Testimonial Video" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                  </iframe>
                </AspectRatio>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Offers Section */}
      <section className="section bg-midnight-surface" id="offers">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Offers</h2>
            <p className="text-xl text-midnight-subtext max-w-2xl mx-auto">
              Choose the system that works best for your business needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <ServiceCard
              title="Sales Inbox Accelerator"
              description="Cold Email Infrastructure & Campaign Management"
              icon={<Mail />}
              features={[
                "Custom domains, inbox warmup & monitoring",
                "1-on-1 copy, list building, and reply management",
                "Weekly optimization and reports"
              ]}
              outcome="Booked calls through cold email with full compliance"
            />
            <ServiceCard
              title="LinkedIn Selling System"
              description="Manual Prospecting & Profile-led Messaging"
              icon={<MessageSquare />}
              features={[
                "Profile optimization for positioning",
                "10 handcrafted messages per day",
                "Zero automation on your main account",
                "Personalized follow-ups and lead handoffs"
              ]}
              outcome="Inbound conversations and daily replies from ideal clients"
            />
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Makes Us Different</h2>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="card text-center py-8">
              <div className="text-4xl mb-4 text-midnight-success">✅</div>
              <h3 className="font-bold mb-2">Brand-Safe Systems</h3>
              <p className="text-midnight-subtext">No risk to your domain or LinkedIn account</p>
            </div>
            <div className="card text-center py-8">
              <div className="text-4xl mb-4 text-midnight-success">✍️</div>
              <h3 className="font-bold mb-2">Copy Built on Psychology</h3>
              <p className="text-midnight-subtext">No templates — just relevance</p>
            </div>
            <div className="card text-center py-8">
              <div className="text-4xl mb-4 text-midnight-success">🧠</div>
              <h3 className="font-bold mb-2">Strategic Advisory</h3>
              <p className="text-midnight-subtext">We optimize both messaging & offer</p>
            </div>
            <div className="card text-center py-8">
              <div className="text-4xl mb-4 text-midnight-success">🛠️</div>
              <h3 className="font-bold mb-2">Full-Funnel Execution</h3>
              <p className="text-midnight-subtext">List → Copy → Inbox → Meetings</p>
            </div>
            <div className="card text-center py-8">
              <div className="text-4xl mb-4 text-midnight-success">📊</div>
              <h3 className="font-bold mb-2">Weekly Reporting</h3>
              <p className="text-midnight-subtext">Clear insights on open, click, and reply rates</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="section bg-white text-black" id="process">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#0A0A0A]">Our Process</h2>
            <p className="text-xl text-[#555555] max-w-2xl mx-auto">
              How we take you from uncertainty to predictable pipeline
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Progress bar that connects the process steps */}
              <div className="absolute left-10 top-12 bottom-0 w-1 bg-[#E5E5E5]">
                <div className="h-full w-full bg-logo-blue" style={{ width: '2px' }}></div>
              </div>
              
              <div className="space-y-12">
                <ProcessStepDetailed 
                  number={1}
                  title="Deep Discovery & ICP Clarity"
                  description="We start with a comprehensive analysis of your business, target audience, and existing sales processes. This helps us understand your unique value proposition and identify your ideal customer profile with precision."
                  icon="🔍"
                />
                
                <ProcessStepDetailed 
                  number={2}
                  title="System Setup & Warmup"
                  description="Our team builds your outreach infrastructure with careful attention to compliance and deliverability. This includes email warmup, domain configuration, and LinkedIn profile optimization to establish a strong foundation."
                  icon="⚙️"
                />
                
                <ProcessStepDetailed 
                  number={3}
                  title="Copywriting & Data Sourcing"
                  description="We craft personalized messaging that resonates with your target audience and source high-quality prospect data. Our approach focuses on relevance and value rather than generic templates or automation."
                  icon="✍️"
                />
                
                <ProcessStepDetailed 
                  number={4}
                  title="Launch & Daily Execution"
                  description="With everything in place, we begin the carefully orchestrated outreach campaigns. Our team handles all daily operations, monitoring responses, nurturing conversations, and optimizing in real-time."
                  icon="🚀"
                />
                
                <ProcessStepDetailed 
                  number={5}
                  title="Optimize & Scale"
                  description="Once we establish what works, we refine and expand. This includes A/B testing messages, segmenting audiences further, and scaling up volume while maintaining quality and compliance."
                  icon="📈"
                  isLast={true}
                />
              </div>
            </div>
            
            <div className="mt-16 pt-8 border-t border-[#E5E5E5]">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="p-6 rounded-lg bg-[#F8FCFF] border border-[#E5E5E5]">
                  <div className="text-logo-blue text-2xl mb-4">⏱️</div>
                  <h3 className="font-bold text-lg mb-2 text-[#0A0A0A]">Implementation Time</h3>
                  <p className="text-[#555555]">Full system setup within 7-10 business days</p>
                </div>
                
                <div className="p-6 rounded-lg bg-[#F8FCFF] border border-[#E5E5E5]">
                  <div className="text-logo-blue text-2xl mb-4">📊</div>
                  <h3 className="font-bold text-lg mb-2 text-[#0A0A0A]">Expected Results</h3>
                  <p className="text-[#555555]">First meetings typically booked within 2-3 weeks of launch</p>
                </div>
                
                <div className="p-6 rounded-lg bg-[#F8FCFF] border border-[#E5E5E5]">
                  <div className="text-logo-blue text-2xl mb-4">🔄</div>
                  <h3 className="font-bold text-lg mb-2 text-[#0A0A0A]">Ongoing Support</h3>
                  <p className="text-[#555555]">Weekly optimization calls and detailed performance reporting</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section" id="case-studies">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Case Studies</h2>
            <p className="text-xl text-midnight-subtext max-w-2xl mx-auto">
              Real results from real clients
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <CaseStudyCard
              title="B2B Marketing Agency"
              stats={[
                "18 booked calls/month",
                "$20K closed in Month 2"
              ]}
            />
            <CaseStudyCard
              title="SaaS Founder"
              stats={[
                "9 SQLs in Month 1",
                "Direct calendar access from cold email"
              ]}
            />
            <CaseStudyCard
              title="Fractional COO"
              stats={[
                "6 calls booked via LinkedIn in 3 weeks",
                "Closed 2 high-ticket retainers"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-midnight-surface">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Client Testimonials</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="We didn't just get meetings — we got clarity on what's working."
              name="Jason Meyer"
              title="Consulting Agency Owner"
            />
            <TestimonialCard
              quote="Biggest surprise? First warm reply in 48 hours."
              name="Alex Chen"
              title="SaaS Co-Founder"
            />
            <TestimonialCard
              quote="Our pipeline is finally predictable."
              name="Rachel Thompson"
              title="Sales Consultancy Founder"
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Let's Build Your Outbound Machine"
        subtitle="Your sales calendar shouldn't be empty — let's fix that."
        buttonText="Book Your Strategy Call Now"
      />

      <Footer />
    </div>
  );
};

// New component for detailed process steps
const ProcessStepDetailed = ({ 
  number, 
  title, 
  description, 
  icon, 
  isLast = false 
}: { 
  number: number; 
  title: string; 
  description: string; 
  icon: string;
  isLast?: boolean;
}) => {
  return (
    <div className="flex relative">
      <div className="flex-shrink-0 mr-6">
        <div className="w-20 h-20 rounded-full bg-[#F0F9FF] border-2 border-logo-blue flex items-center justify-center text-logo-blue text-2xl font-bold z-10 relative">
          {number}
        </div>
      </div>
      <div className="pt-2 pb-4">
        <div className="flex items-center mb-2">
          <span className="text-2xl mr-2">{icon}</span>
          <h3 className="text-xl font-bold text-[#0A0A0A]">{title}</h3>
        </div>
        <p className="text-[#555555] leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default Index;
