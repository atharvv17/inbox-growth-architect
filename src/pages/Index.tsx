
import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import ProcessTimeline from "@/components/ProcessTimeline";
import TestimonialCard from "@/components/TestimonialCard";
import CaseStudyCard from "@/components/CaseStudyCard";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { CheckCircle, Mail, MessageSquare } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Index = () => {
  const processSteps = [
    {
      number: 1,
      title: "Deep Discovery & ICP Clarity",
      description: "Understand audience, pain points, and differentiation",
      imageSrc: "/lovable-uploads/d317e6ab-923a-4dc9-a864-9f0851e151ee.png" // Using uploaded images
    },
    {
      number: 2,
      title: "System Setup & Warmup",
      description: "Tech setup, profile edits, inbox prep",
      imageSrc: "/lovable-uploads/c7279023-198f-42b9-a23d-0b3c5eb3e9a9.png" 
    },
    {
      number: 3,
      title: "Copywriting & Data Sourcing",
      description: "Human-sourced data + crafted messaging",
      imageSrc: "/lovable-uploads/65a95b5c-61f4-4b33-b5dc-508bb9b01942.png" 
    },
    {
      number: 4,
      title: "Launch & Daily Execution",
      description: "Campaign goes live, replies monitored",
      imageSrc: "/lovable-uploads/d68b7475-2375-4299-b26a-d5ee7a16216c.png" 
    },
    {
      number: 5,
      title: "Optimize & Scale",
      description: "Continuous testing, lead quality refinement",
      isLast: true,
      imageSrc: "/lovable-uploads/49e74208-b2c0-4809-a9dd-cff624caa489.png" 
    }
  ];

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

      {/* Our Process - MOVED ABOVE OUR OFFERS */}
      <section className="section bg-midnight-background text-midnight-text" id="process">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-midnight-subtext max-w-2xl mx-auto">
              How we take you from uncertainty to predictable pipeline
            </p>
          </div>
          <ProcessTimeline steps={processSteps} />
        </div>
      </section>

      {/* Our Offers Section - NOW AFTER PROCESS */}
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
              description="Cold Email Infrastructure & Done-For-You Campaign Execution"
              icon={<Mail />}
              features={[
                "End-to-End Cold Email Setup: Custom domains, inbox warmup, DNS records, and real-time deliverability monitoring",
                "Custom Copywriting & Lead Research: 1-on-1 work with our team to craft compelling email sequences and handpick high-quality leads",
                "Reply Management & Campaign Optimization: Active response management, performance tracking, and weekly optimization sprints",
                "Reporting & Compliance: Weekly dashboards, reply breakdowns, and full GDPR/Can-Spam compliance"
              ]}
              outcome="Your calendar filled with qualified B2B sales calls — built on a compliant cold email machine that works on autopilot"
              buttonText="Learn More"
            />
            <ServiceCard
              title="LinkedIn Selling System"
              description="Manual Prospecting with Hyper-Personalized Messaging — Zero Automation"
              icon={<MessageSquare />}
              features={[
                "Profile Optimization for Authority Positioning: Reworked LinkedIn profile with conversion-focused structure",
                "Handcrafted Messaging (No Bots): 10 fully personalized messages daily tailored to each prospect's needs",
                "Zero Automation, Zero Risk: Manual actions only to keep your reputation safe and engagement authentic",
                "Follow-ups & Lead Handoffs: Strategic conversation management and warm lead transfers directly to you"
              ]}
              outcome="A daily stream of inbound conversations from decision-makers who already know what you do and want to talk"
              buttonText="Learn More"
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

export default Index;
