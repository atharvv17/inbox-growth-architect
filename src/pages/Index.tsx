import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import ProcessTimeline from "@/components/ProcessTimeline";
import { AnimatedProcessTimeline } from "@/components/AnimatedProcessTimeline";
import TestimonialCard from "@/components/TestimonialCard";
import CaseStudyCard from "@/components/CaseStudyCard";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ClientBenefitCard from "@/components/ClientBenefitCard";
import FAQSection from "@/components/FAQSection";
import TestimonialsColumn from "@/components/TestimonialsColumn";
import { CheckCircle, Mail, MessageSquare, Briefcase, Zap, Tag, User, Calendar, ChartBar, Rocket } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { LogoCarousel } from "@/components/ui/logo-carousel";

const Index = () => {
  // Process steps data
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
    answer: "We use the right combination of automation and human expertise to drive efficient, scalable, and high-converting outreach. Automation helps us streamline systems, track performance, and ensure consistency at scale — but it's the human insight that makes the difference.\n\nOur team of experts personally handles strategy, message crafting, and execution — ensuring that every lead feels heard, every message feels real, and every campaign is aligned with your brand's tone and goals."
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

  // Example logos data
  const logos = [
    { name: "Company 1", id: 1, img: "/lovable-uploads/a0c813cd-8deb-48e2-8b0f-3e39a130ff2c.png" },
    { name: "Company 2", id: 2, img: "/lovable-uploads/88da1b12-db70-4d0b-bbac-ab2d90d04565.png" },
    { name: "Company 3", id: 3, img: "/lovable-uploads/d317e6ab-923a-4dc9-a864-9f0851e151ee.png" },
    { name: "Company 4", id: 4, img: "/lovable-uploads/d4fda32f-dd19-4673-ac3b-ee03a77ea04d.png" },
    { name: "Company 5", id: 5, img: "/lovable-uploads/d68b7475-2375-4299-b26a-d5ee7a16216c.png" },
    { name: "Company 6", id: 6, img: "/lovable-uploads/eda3e539-9fe2-4781-94af-d3237b342eac.png" },
  ];

  return <div className="min-h-screen bg-[#F9FAFB] text-[#374151]">
      <Header />
      <HeroSection />
      
      {/* Trusted by Industry Leaders */}
      <section className="py-8 bg-[#F9FAFB]">
        <div className="container text-center mb-6">
          <h2 className="text-3xl font-bold text-[#374151] mb-2">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-[#6B7280] max-w-3xl mx-auto mb-8">
            Join hundreds of businesses that trust our outbound systems to drive predictable growth
          </p>
          <LogoCarousel logos={logos} />
        </div>
      </section>
      
      {/* Who We Serve Section - Updated with Dark Slate background */}
      <section className="py-8 md:py-12 bg-[#111827] text-[#F3F4F6]">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">
                You're great at closing deals.<br />
                We're great at starting them.
              </h2>
              <p className="text-xl text-[#F3F4F6] mb-4">
                We work with:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center group">
                  <div className="relative">
                    <CheckCircle className="text-white mr-2 h-5 w-5 transition-all duration-300 group-hover:text-white" />
                    {/* Hover tooltip */}
                    <span className="absolute left-full ml-2 top-1/2 -translate-y-1/2 px-2 py-1 bg-[#1E293B] border border-white/20 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      Need predictable lead flow?
                    </span>
                  </div>
                  <span className="text-lg text-white">B2B consultants & agency owners</span>
                </li>
                <li className="flex items-center group">
                  <div className="relative">
                    <CheckCircle className="text-white mr-2 h-5 w-5 transition-all duration-300 group-hover:text-white" />
                    {/* Hover tooltip */}
                    <span className="absolute left-full ml-2 top-1/2 -translate-y-1/2 px-2 py-1 bg-[#1E293B] border border-white/20 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      Ready to scale?
                    </span>
                  </div>
                  <span className="text-lg text-white">SaaS founders & startups</span>
                </li>
                <li className="flex items-center group">
                  <div className="relative">
                    <CheckCircle className="text-white mr-2 h-5 w-5 transition-all duration-300 group-hover:text-white" />
                    {/* Hover tooltip */}
                    <span className="absolute left-full ml-2 top-1/2 -translate-y-1/2 px-2 py-1 bg-[#1E293B] border border-white/20 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      Grow your client base?
                    </span>
                  </div>
                  <span className="text-lg text-white">Fractional execs & coaches</span>
                </li>
                <li className="flex items-center group">
                  <div className="relative">
                    <CheckCircle className="text-white mr-2 h-5 w-5 transition-all duration-300 group-hover:text-white" />
                    {/* Hover tooltip */}
                    <span className="absolute left-full ml-2 top-1/2 -translate-y-1/2 px-2 py-1 bg-[#1E293B] border border-white/20 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      Need top-of-funnel support?
                    </span>
                  </div>
                  <span className="text-lg text-white">Sales teams needing top-of-funnel support</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl bg-[#1E293B] p-1 relative group">
              <div className="rounded-lg overflow-hidden">
                <AspectRatio ratio={16 / 9}>
                  <iframe className="w-full h-full" src="https://www.youtube.com/embed/SfD6BD-NaO0" title="Testimonial Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                  </iframe>
                </AspectRatio>
              </div>
              
              {/* Animated border glow on hover */}
              <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 cyber-border"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process - Updated with Off-White/Beige Background */}
      <section className="py-8 md:py-12 bg-[#F8FAFC] text-[#1E293B]" id="process">
        <div className="container">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold mb-2 text-[#1E293B]">Our Process</h2>
            <p className="text-lg text-[#4B5563] max-w-2xl mx-auto">
              How we take you from uncertainty to predictable pipeline
            </p>
          </div>
          {/* Replace the old ProcessTimeline with our new AnimatedProcessTimeline */}
          <AnimatedProcessTimeline steps={processSteps} />
        </div>
      </section>

      {/* Our Offers Section - Updated with Deep Navy/Graphite Background */}
      <section className="py-8 md:py-12 bg-[#0F172A] text-white" id="offers">
        <div className="container">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold mb-2 text-white">Our Offers</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Choose the system that works best for your business needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
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
              featured={true}
              accentColor="#9b87f5"
            />
          </div>
        </div>
      </section>

      {/* Why Our Clients Choose Us - Updated with White/Light Gray Background */}
      <section className="py-8 md:py-12 bg-[#F3F4F6]" id="benefits">
        <div className="container">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold mb-2 text-black">Why Our Clients Choose Us</h2>
            <p className="text-lg text-[#4B5563] max-w-2xl mx-auto">
              Everything you need to start growing your business immediately
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <ClientBenefitCard icon={<Rocket className="h-7 w-7 text-[#9b87f5]" />} title="Plug-and-Play Revenue Engine" description="Seamlessly integrate our system and watch your revenue scale effortlessly." />
            <ClientBenefitCard icon={<Zap className="h-7 w-7 text-[#9b87f5]" />} title="Fast Setup: 7 Days or Less" description="Get fully operational in under a week—no delays, no hassles." />
            <ClientBenefitCard icon={<Briefcase className="h-7 w-7 text-[#9b87f5]" />} title="AI-Powered Lead Scoring" description="Prioritize your best prospects with intelligent data-driven lead scoring." />
            <ClientBenefitCard icon={<User className="h-7 w-7 text-[#9b87f5]" />} title="Dedicated Campaign Manager" description="Your personal expert, focused on your success and results." />
            <ClientBenefitCard icon={<Calendar className="h-7 w-7 text-[#9b87f5]" />} title="Optional Appointment Setters" description="Save time and close more deals with ready-to-go appointment setters." />
            <ClientBenefitCard icon={<ChartBar className="h-7 w-7 text-[#9b87f5]" />} title="Performance Tracking Dashboard" description="Real-time analytics to track ROI and optimize campaign performance." />
          </div>
        </div>
      </section>

      {/* Testimonials Section - Updated with Dark Background */}
      <section className="py-6 md:py-10 bg-[#0F172A] overflow-hidden relative">
        {/* Add subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:20px_20px]"></div>
        
        <div className="container relative z-10">
          <div className="text-center mb-4">
            <p className="text-white text-sm uppercase tracking-wider mb-1 font-medium">Client Stories</p>
            <h2 className="text-3xl font-bold mb-2 text-white">What Our Clients Say</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Real results from businesses just like yours
            </p>
          </div>
          
          <div className="relative flex gap-4 justify-center mx-auto max-w-7xl overflow-hidden">
            {/* Gradient overlays for fading effect - modified to match background */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#0F172A] via-transparent to-[#0F172A] z-10"></div>
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#0F172A] via-transparent to-[#0F172A] z-10"></div>
            
            <TestimonialsColumn 
              className="min-w-[320px] max-h-[650px] overflow-hidden"
              testimonials={testimonialColumns[0]}
              duration={20}
              darkMode={true}
            />
            
            <TestimonialsColumn
              className="min-w-[320px] max-h-[650px] overflow-hidden mt-28"
              testimonials={testimonialColumns[1]} 
              duration={25}
              darkMode={true}
            />
            
            <TestimonialsColumn
              className="min-w-[320px] max-h-[650px] overflow-hidden"
              testimonials={testimonialColumns[2]}
              duration={18}
              darkMode={true}
            />
          </div>
        </div>
      </section>

      {/* FAQ Section - Updated in the FAQSection.tsx component */}
      <FAQSection faqs={faqs} />

      {/* Final CTA - Updated in the CTASection.tsx component */}
      <CTASection 
        title="Let's Build Your Outbound Machine" 
        subtitle="Your sales calendar shouldn't be empty — let's fix that." 
        buttonText="Book Your Strategy Call Now" 
      />

      <Footer />
    </div>;
};

export default Index;
