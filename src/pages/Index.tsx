import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import CaseStudyCard from "@/components/CaseStudyCard";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ClientBenefitCard from "@/components/ClientBenefitCard";
import FAQSection from "@/components/FAQSection";
import TestimonialsColumn from "@/components/TestimonialsColumn";
import { FlowingProcessTimeline } from "@/components/FlowingProcessTimeline";
import Testimonials from "@/components/Testimonials";
import AboutUs from "@/components/AboutUs";
import { CheckCircle, Mail, MessageSquare, Briefcase, Zap, Tag, User, Calendar, ChartBar, Rocket } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { LogoCarousel } from "@/components/ui/logo-carousel";
const Index = () => {
  // Process steps data
  const processSteps = [{
    number: 1,
    title: "Deep Discovery & ICP Clarity",
    description: "Understand audience, pain points, and differentiation",
    detailedDescription: "We dive into your business, ideal customer profile, and market positioning — uncovering what makes your offer resonate and what your buyers truly care about.",
    icon: "Search"
  }, {
    number: 2,
    title: "System Setup & Warmup",
    description: "Tech setup, profile edits, inbox prep",
    detailedDescription: "We configure custom domains, optimize LinkedIn profiles, and prep inboxes for maximum deliverability and credibility — setting the stage for consistent outreach.",
    icon: "Settings"
  }, {
    number: 3,
    title: "Copywriting & Data Sourcing",
    description: "Human-sourced data + crafted messaging",
    detailedDescription: "Our team writes handcrafted messaging tailored to your voice, offer, and audience. Every lead is manually sourced to ensure quality, intent, and relevance.",
    icon: "MessageSquare"
  }, {
    number: 4,
    title: "Launch & Daily Execution",
    description: "Campaign goes live, replies monitored",
    detailedDescription: "Your outbound system goes live — we send, track, and manage replies daily. You stay focused on calls, while we keep the engine running.",
    icon: "Rocket"
  }, {
    number: 5,
    title: "Optimize & Scale",
    description: "Continuous testing, lead quality refinement",
    detailedDescription: "We analyze performance, A/B test sequences, and continuously refine targeting and messaging — so your lead quality gets sharper over time.",
    icon: "ChartBar",
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
  const testimonialColumns = [[{
    text: "Working with this team has completely transformed our sales process. We're now closing deals faster than ever before.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=300&fit=crop",
    name: "Sarah Johnson",
    role: "VP of Sales, TechCorp"
  }, {
    text: "The custom CRM setup alone was worth the investment. Our team loves how intuitive everything is.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop",
    name: "Michael Chen",
    role: "Founder, GrowthGenius"
  }, {
    text: "I was skeptical at first, but the results speak for themselves. Our pipeline is more predictable than ever.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=300&fit=crop",
    name: "Alex Rivera",
    role: "Sales Director, ScaleUp Inc."
  }], [{
    text: "The onboarding process was seamless and we started seeing results within the first two weeks.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=300&fit=crop",
    name: "Emily Taylor",
    role: "Marketing Manager, DataFlow"
  }, {
    text: "Having a dedicated campaign manager has made all the difference. They're like an extension of our team.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop",
    name: "David Wong",
    role: "CEO, ConsultPro"
  }, {
    text: "The ROI on this service has been incredible. We've already recouped our investment multiple times over.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop",
    name: "Jessica Martinez",
    role: "Operations Director, AgileWorks"
  }], [{
    text: "I wish we had found this service years ago. It would have saved us so much time and money.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
    name: "Robert Kim",
    role: "Founder, InnovateNow"
  }, {
    text: "The quality of leads has been consistently high, which is rare to find with other services we've tried.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop",
    name: "Linda Carter",
    role: "Head of Growth, SaaS Solutions"
  }, {
    text: "We've increased our close rate by over 30% since implementing this system. Absolutely game-changing.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop",
    name: "Thomas Wilson",
    role: "Sales Lead, Enterprise Tech"
  }]];

  // Example logos data
  const logos = [{
    name: "Company 1",
    id: 1,
    img: "/lovable-uploads/a0c813cd-8deb-48e2-8b0f-3e39a130ff2c.png"
  }, {
    name: "Company 2",
    id: 2,
    img: "/lovable-uploads/88da1b12-db70-4d0b-bbac-ab2d90d04565.png"
  }, {
    name: "Company 3",
    id: 3,
    img: "/lovable-uploads/d317e6ab-923a-4dc9-a864-9f0851e151ee.png"
  }, {
    name: "Company 4",
    id: 4,
    img: "/lovable-uploads/d4fda32f-dd19-4673-ac3b-ee03a77ea04d.png"
  }, {
    name: "Company 5",
    id: 5,
    img: "/lovable-uploads/d68b7475-2375-4299-b26a-d5ee7a16216c.png"
  }, {
    name: "Company 6",
    id: 6,
    img: "/lovable-uploads/eda3e539-9fe2-4781-94af-d3237b342eac.png"
  }];
  return <div className="min-h-screen bg-[#FAFAFA] text-[#374151] overflow-hidden">
      <Header />
      <HeroSection />
      
      {/* Trusted by Industry Leaders with white background and logo-matching accents */}
      <section className="bg-white relative py-0">
        <div className="absolute top-0 left-0 w-full overflow-hidden">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px]">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-[#0A0A0A]"></path>
          </svg>
        </div>
        <div className="container text-center mb-6 relative z-10 py-[40px]">
          <h2 className="text-3xl font-bold text-[#374151] mb-2">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-[#6B7280] max-w-3xl mx-auto mb-8">
            Join hundreds of businesses that trust our outbound systems to drive predictable growth
          </p>
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00CFFF]/20 to-[#7EEAFF]/20 rounded-lg blur opacity-30"></div>
            <div className="relative bg-white rounded-lg p-4">
              <LogoCarousel logos={logos} />
            </div>
          </div>
        </div>
        
        {/* Reduced padding at the bottom of this section for better spacing */}
        <div className="py-[0px]"></div>
      </section>
      
      {/* Who We Serve Section with reduced spacing between sections */}
      <section className="pb-20 -mt-10 bg-white text-[#1E293B] relative py-0 rounded-md">
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-6 items-center py-[2px] my-[50px]">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-[#1E293B]">
                You're great at closing deals.<br />
                We're great at starting them.
              </h2>
              <p className="text-xl text-[#4B5563] mb-4">
                We work with:
              </p>
              
              <ul className="space-y-2">
                <li className="flex items-center group">
                  <div className="relative">
                    <CheckCircle className="text-[#00CFFF] mr-2 h-5 w-5 transition-all duration-300 group-hover:text-[#00CFFF]" />
                    {/* Hover tooltip */}
                    <span className="absolute left-full ml-2 top-1/2 -translate-y-1/2 px-2 py-1 bg-[#F1F5F9] border border-[#00CFFF]/20 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      Need predictable lead flow?
                    </span>
                  </div>
                  <span className="text-lg text-[#1E293B]">B2B consultants & agency owners</span>
                </li>
                <li className="flex items-center group">
                  <div className="relative">
                    <CheckCircle className="text-[#00CFFF] mr-2 h-5 w-5 transition-all duration-300 group-hover:text-[#00CFFF]" />
                    {/* Hover tooltip */}
                    <span className="absolute left-full ml-2 top-1/2 -translate-y-1/2 px-2 py-1 bg-[#F1F5F9] border border-[#00CFFF]/20 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      Ready to scale?
                    </span>
                  </div>
                  <span className="text-lg text-[#1E293B]">SaaS founders & startups</span>
                </li>
                <li className="flex items-center group">
                  <div className="relative">
                    <CheckCircle className="text-[#00CFFF] mr-2 h-5 w-5 transition-all duration-300 group-hover:text-[#00CFFF]" />
                    {/* Hover tooltip */}
                    <span className="absolute left-full ml-2 top-1/2 -translate-y-1/2 px-2 py-1 bg-[#F1F5F9] border border-[#00CFFF]/20 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      Grow your client base?
                    </span>
                  </div>
                  <span className="text-lg text-[#1E293B]">Fractional execs & coaches</span>
                </li>
                <li className="flex items-center group">
                  <div className="relative">
                    <CheckCircle className="text-[#00CFFF] mr-2 h-5 w-5 transition-all duration-300 group-hover:text-[#00CFFF]" />
                    {/* Hover tooltip */}
                    <span className="absolute left-full ml-2 top-1/2 -translate-y-1/2 px-2 py-1 bg-[#F1F5F9] border border-[#00CFFF]/20 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      Need top-of-funnel support?
                    </span>
                  </div>
                  <span className="text-lg text-[#1E293B]">Sales teams needing top-of-funnel support</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl bg-[#F8FAFC] p-1 relative group">
              <div className="rounded-lg overflow-hidden">
                <AspectRatio ratio={16 / 9}>
                  <iframe className="w-full h-full" src="https://www.youtube.com/embed/SfD6BD-NaO0" title="Testimonial Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                  </iframe>
                </AspectRatio>
              </div>
              
              {/* Animated border glow on hover */}
              <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-[#00CFFF]/30 via-[#7EEAFF]/30 to-[#00CFFF]/30 animate-flow"></div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[120px] py-0">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-[#000000]"></path>
          </svg>
        </div>
      </section>
      
      {/* Our Process - With dark background matching logo and NO top wave (since we added it to previous section) */}
      <section className="pt-16 pb-16 bg-[#000000] text-white relative -mt-1" id="process">
        <div className="container relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2 text-white">Our Process</h2>
            <p className="text-lg text-[#A3A3A3] max-w-2xl mx-auto">
              How we take you from uncertainty to predictable pipeline
            </p>
          </div>
          
          {/* Use the FlowingProcessTimeline component */}
          <FlowingProcessTimeline steps={processSteps} />
        </div>
        
        {/* Add wave transition to next section */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px]">
            <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" className="fill-[#0A0A0A]"></path>
          </svg>
        </div>
      </section>
      
      {/* Our Offers Section - Black Background with Logo-Matching Colors */}
      <section className="py-16 bg-black text-white relative" id="offers">
        {/* Add inverted curve at top */}
        <div className="absolute top-0 left-0 w-full overflow-hidden">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px]">
            <path d="M1200 0L0 0 598.97 114.72 1200 0z" className="fill-[#0A0A0A]"></path>
          </svg>
        </div>
        
        <div className="container relative z-10">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold mb-2 text-white">Our Offers</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Choose the system that works best for your business needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <ServiceCard title="Sales Inbox Accelerator" description="Cold Email Infrastructure & Done-For-You Campaign Execution" icon={<Mail />} features={["End-to-End Cold Email Setup: Custom domains, inbox warmup, DNS records, and real-time deliverability monitoring", "Custom Copywriting & Lead Research: 1-on-1 work with our team to craft compelling email sequences and handpick high-quality leads", "Reply Management & Campaign Optimization: Active response management, performance tracking, and weekly optimization sprints", "Reporting & Compliance: Weekly dashboards, reply breakdowns, and full GDPR/Can-Spam compliance"]} outcome="Your calendar filled with qualified B2B sales calls — built on a compliant cold email machine that works on autopilot" buttonText="Learn More" accentColor="#00CFFF" />
            <ServiceCard title="LinkedIn Selling System" description="Manual Prospecting with Hyper-Personalized Messaging — Zero Automation" icon={<MessageSquare />} features={["Profile Optimization for Authority Positioning: Reworked LinkedIn profile with conversion-focused structure", "Handcrafted Messaging (No Bots): 10 fully personalized messages daily tailored to each prospect's needs", "Zero Automation, Zero Risk: Manual actions only to keep your reputation safe and engagement authentic", "Follow-ups & Lead Handoffs: Strategic conversation management and warm lead transfers directly to you"]} outcome="A daily stream of inbound conversations from decision-makers who already know what you do and want to talk" buttonText="Learn More" featured={true} accentColor="#7EEAFF" />
          </div>
        </div>
        
        {/* Wave transition to next section with logo-matching blue color */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px]">
            <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" className="fill-[#00CFFF]/10"></path>
          </svg>
        </div>
      </section>

      {/* Why Our Clients Choose Us - Light Gray Background */}
      

      {/* New Testimonials Section - Using the new component */}
      <Testimonials />

      {/* FAQ Section - Updated in the FAQSection.tsx component */}
      <FAQSection faqs={faqs} />

      {/* About Us Section - Added before the Final CTA */}
      <AboutUs />

      {/* Final CTA - Updated in the CTASection.tsx component */}
      <CTASection title="Let's Build Your Outbound Machine" subtitle="Your sales calendar shouldn't be empty — let's fix that." buttonText="Book Your Strategy Call Now" />

      <Footer />
    </div>;
};
export default Index;
