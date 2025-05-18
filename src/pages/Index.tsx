
import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import ProcessTimeline from "@/components/ProcessTimeline";
import TestimonialCard from "@/components/TestimonialCard";
import CaseStudyCard from "@/components/CaseStudyCard";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ClientBenefitCard from "@/components/ClientBenefitCard";
import FAQSection from "@/components/FAQSection";
import TestimonialsColumn from "@/components/TestimonialsColumn";
import { CheckCircle, Mail, MessageSquare, Briefcase, Zap, Tag, User, Calendar, ChartBar, Rocket } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Index = () => {
  const processSteps = [{
    number: 1,
    title: "Deep Discovery & ICP Clarity",
    description: "Understand audience, pain points, and differentiation",
    detailedDescription: "We dive into your business, ideal customer profile, and market positioning — uncovering what makes your offer resonate and what your buyers truly care about."
  }, {
    number: 2,
    title: "System Setup & Warmup",
    description: "Tech setup, profile edits, inbox prep",
    detailedDescription: "We configure custom domains, optimize LinkedIn profiles, and prep inboxes for maximum deliverability and credibility — setting the stage for consistent outreach."
  }, {
    number: 3,
    title: "Copywriting & Data Sourcing",
    description: "Human-sourced data + crafted messaging",
    detailedDescription: "Our team writes handcrafted messaging tailored to your voice, offer, and audience. Every lead is manually sourced to ensure quality, intent, and relevance."
  }, {
    number: 4,
    title: "Launch & Daily Execution",
    description: "Campaign goes live, replies monitored",
    detailedDescription: "Your outbound system goes live — we send, track, and manage replies daily. You stay focused on calls, while we keep the engine running."
  }, {
    number: 5,
    title: "Optimize & Scale",
    description: "Continuous testing, lead quality refinement",
    detailedDescription: "We analyze performance, A/B test sequences, and continuously refine targeting and messaging — so your lead quality gets sharper over time.",
    isLast: true
  }];
  // FAQ content
  const faqs = [{
    question: "How long does it take to see results?",
    answer: "Most clients start seeing qualified meetings within 2-3 weeks of campaign launch. The exact timeline depends on your industry, offer, and target audience, but our process is designed for rapid implementation and quick wins."
  }, {
    question: "Do you guarantee a certain number of leads?",
    answer: "We focus on quality over quantity and don't promise specific lead numbers. Instead, we guarantee our methodology, expertise, and continuous optimization. Our goal is lasting pipeline growth, not just vanity metrics."
  }, {
    question: "What makes your approach different from other agencies?",
    answer: "Unlike most agencies, we handle everything end-to-end: strategy, tech setup, message crafting, lead sourcing, and daily execution. We also emphasize human-driven outreach (no bots) and ethical, compliance-focused methods."
  }, {
    question: "How do you ensure email deliverability?",
    answer: "We implement thorough domain setup, strategic inbox warming, reputation monitoring, and personalized sending patterns. Our approach prioritizes long-term domain health over quick wins that might damage your sending reputation."
  }, {
    question: "Will this work for my specific industry?",
    answer: "We've successfully generated leads across diverse B2B sectors, from SaaS to professional services. During our discovery process, we'll determine if your offer and audience are a good fit for our methods."
  }];
  // New testimonials data
  const testimonialColumns = [
    [
      {
        text: "Working with this team has completely transformed our sales process. We're now closing deals faster than ever before.",
        image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=300&fit=crop",
        name: "Sarah Johnson",
        role: "VP of Sales, TechCorp"
      },
      {
        text: "The custom CRM setup alone was worth the investment. Our team loves how intuitive everything is.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop",
        name: "Michael Chen",
        role: "Founder, GrowthGenius"
      },
      {
        text: "I was skeptical at first, but the results speak for themselves. Our pipeline is more predictable than ever.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=300&fit=crop",
        name: "Alex Rivera",
        role: "Sales Director, ScaleUp Inc."
      }
    ],
    [
      {
        text: "The onboarding process was seamless and we started seeing results within the first two weeks.",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=300&fit=crop",
        name: "Emily Taylor",
        role: "Marketing Manager, DataFlow"
      },
      {
        text: "Having a dedicated campaign manager has made all the difference. They're like an extension of our team.",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop",
        name: "David Wong",
        role: "CEO, ConsultPro"
      },
      {
        text: "The ROI on this service has been incredible. We've already recouped our investment multiple times over.",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop",
        name: "Jessica Martinez",
        role: "Operations Director, AgileWorks"
      }
    ],
    [
      {
        text: "I wish we had found this service years ago. It would have saved us so much time and money.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
        name: "Robert Kim",
        role: "Founder, InnovateNow"
      },
      {
        text: "The quality of leads has been consistently high, which is rare to find with other services we've tried.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop",
        name: "Linda Carter",
        role: "Head of Growth, SaaS Solutions"
      },
      {
        text: "We've increased our close rate by over 30% since implementing this system. Absolutely game-changing.",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop",
        name: "Thomas Wilson",
        role: "Sales Lead, Enterprise Tech"
      }
    ]
  ];

  return <div className="min-h-screen bg-midnight-background text-midnight-text">
      <Header />
      <HeroSection />
      
      {/* Who We Serve Section */}
      <section className="py-8 md:py-12">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                You're great at closing deals.<br />
                We're great at starting them.
              </h2>
              <p className="text-xl text-midnight-subtext mb-4">
                We work with:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="text-midnight-success mr-2 h-5 w-5" />
                  <span className="text-lg">B2B consultants & agency owners</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-midnight-success mr-2 h-5 w-5" />
                  <span className="text-lg">SaaS founders & startups</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-midnight-success mr-2 h-5 w-5" />
                  <span className="text-lg">Fractional execs & coaches</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-midnight-success mr-2 h-5 w-5" />
                  <span className="text-lg">Sales teams needing top-of-funnel support</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl bg-midnight-surface p-1">
              <div className="rounded-lg overflow-hidden">
                <AspectRatio ratio={16 / 9}>
                  <iframe className="w-full h-full" src="https://www.youtube.com/embed/SfD6BD-NaO0" title="Testimonial Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                  </iframe>
                </AspectRatio>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process - MOVED ABOVE OUR OFFERS */}
      <section className="py-8 md:py-12 bg-midnight-background text-midnight-text" id="process">
        <div className="container">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold mb-2">Our Process</h2>
            <p className="text-lg text-midnight-subtext max-w-2xl mx-auto">
              How we take you from uncertainty to predictable pipeline
            </p>
          </div>
          <ProcessTimeline steps={processSteps} />
        </div>
      </section>

      {/* Our Offers Section - NOW AFTER PROCESS */}
      <section className="py-8 md:py-12 bg-midnight-surface" id="offers">
        <div className="container">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold mb-2">Our Offers</h2>
            <p className="text-lg text-midnight-subtext max-w-2xl mx-auto">
              Choose the system that works best for your business needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <ServiceCard title="Sales Inbox Accelerator" description="Cold Email Infrastructure & Done-For-You Campaign Execution" icon={<Mail />} features={["End-to-End Cold Email Setup: Custom domains, inbox warmup, DNS records, and real-time deliverability monitoring", "Custom Copywriting & Lead Research: 1-on-1 work with our team to craft compelling email sequences and handpick high-quality leads", "Reply Management & Campaign Optimization: Active response management, performance tracking, and weekly optimization sprints", "Reporting & Compliance: Weekly dashboards, reply breakdowns, and full GDPR/Can-Spam compliance"]} outcome="Your calendar filled with qualified B2B sales calls — built on a compliant cold email machine that works on autopilot" buttonText="Learn More" />
            <ServiceCard title="LinkedIn Selling System" description="Manual Prospecting with Hyper-Personalized Messaging — Zero Automation" icon={<MessageSquare />} features={["Profile Optimization for Authority Positioning: Reworked LinkedIn profile with conversion-focused structure", "Handcrafted Messaging (No Bots): 10 fully personalized messages daily tailored to each prospect's needs", "Zero Automation, Zero Risk: Manual actions only to keep your reputation safe and engagement authentic", "Follow-ups & Lead Handoffs: Strategic conversation management and warm lead transfers directly to you"]} outcome="A daily stream of inbound conversations from decision-makers who already know what you do and want to talk" buttonText="Learn More" />
          </div>
        </div>
      </section>

      {/* Why Our Clients Choose Us - UPDATED SECTION */}
      <section className="py-8 md:py-12 bg-midnight-background" id="benefits">
        <div className="container">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold mb-2">Why Our Clients Choose Us</h2>
            <p className="text-lg text-midnight-subtext max-w-2xl mx-auto">
              Everything you need to start growing your business immediately
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <ClientBenefitCard icon={<Rocket className="h-7 w-7 text-logo-blue" />} title="Plug-and-Play Revenue Engine" description="Seamlessly integrate our system and watch your revenue scale effortlessly." />
            <ClientBenefitCard icon={<Zap className="h-7 w-7 text-logo-blue" />} title="Fast Setup: 7 Days or Less" description="Get fully operational in under a week—no delays, no hassles." />
            <ClientBenefitCard icon={<Tag className="h-7 w-7 text-logo-blue" />} title="White-Labeled CRM" description="Maintain your brand identity with a fully white-labeled solution." />
            <ClientBenefitCard icon={<User className="h-7 w-7 text-logo-blue" />} title="Dedicated Campaign Manager" description="Your personal expert, focused on your success and results." />
            <ClientBenefitCard icon={<Calendar className="h-7 w-7 text-logo-blue" />} title="Optional Appointment Setters" description="Save time and close more deals with ready-to-go appointment setters." />
            <ClientBenefitCard icon={<ChartBar className="h-7 w-7 text-logo-blue" />} title="Performance Tracking Dashboard" description="Real-time analytics to track ROI and optimize campaign performance." />
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      

      {/* Case Studies */}
      

      {/* New Testimonials Section */}
      <section className="py-6 md:py-10 bg-midnight-surface overflow-hidden">
        <div className="container">
          <div className="text-center mb-4">
            <p className="text-logo-blue text-sm uppercase tracking-wider mb-1 font-medium">Client Stories</p>
            <h2 className="text-3xl font-bold mb-2">What Our Clients Say</h2>
            <p className="text-lg text-midnight-subtext max-w-2xl mx-auto">
              Real results from businesses just like yours
            </p>
          </div>
          
          <div className="relative flex gap-4 justify-center mx-auto max-w-7xl overflow-hidden">
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-midnight-surface via-transparent to-midnight-surface z-10"></div>
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-midnight-surface via-transparent to-midnight-surface z-10"></div>
            
            <TestimonialsColumn 
              className="min-w-[320px] max-h-[650px] overflow-hidden"
              testimonials={testimonialColumns[0]}
              duration={20}
            />
            
            <TestimonialsColumn
              className="min-w-[320px] max-h-[650px] overflow-hidden mt-28"
              testimonials={testimonialColumns[1]} 
              duration={25}
            />
            
            <TestimonialsColumn
              className="min-w-[320px] max-h-[650px] overflow-hidden"
              testimonials={testimonialColumns[2]}
              duration={18} 
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />

      {/* Final CTA */}
      <CTASection title="Let's Build Your Outbound Machine" subtitle="Your sales calendar shouldn't be empty — let's fix that." buttonText="Book Your Strategy Call Now" />

      <Footer />
    </div>;
};
export default Index;
