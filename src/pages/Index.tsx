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
      <section className="py-12 bg-white relative">
        <div className="absolute top-0 left-0 w-full overflow-hidden">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px]">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-[#0A0A0A]"></path>
          </svg>
        </div>
        <div className="container text-center mb-6 relative z-10">
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
      </section>
      
      {/* Who We Serve Section - MOVED UP - with inverted curve at top and wavy bottom */}
      <section className="py-12 bg-white text-[#1E293B] relative">
        {/* Removed the hidden wave at top since we don't need it */}
        
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-6 items-center">
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
        
        {/* Add a wave transition to the process section - THIS IS THE NEW WAVY BOTTOM */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px]">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-[#000000]"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-[#000000]"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-[#000000]"></path>
          </svg>
        </div>
      </section>
      
      {/* Our Process - Updated with dark background matching logo */}
      <section className="py-16 bg-[#000000] text-white relative" id="process">
        {/* Remove the wavy top border since we now have a wave coming from the previous section */}
        
        <div className="container relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2 text-white">Our Process</h2>
            <p className="text-lg text-[#A3A3A3] max-w-2xl mx-auto">
              How we take you from uncertainty to predictable pipeline
            </p>
          </div>
          
          {/* Use the FlowingProcessTimeline component */}
          <FlowingProcessTimeline steps={processSteps} />
          
          {/* Final step highlight box */}
          <div className="mt-12 max-w-2xl mx-auto transform translate-y-0 hover:translate-y-[-5px] transition-all duration-300">
            
          </div>
        </div>
        
        {/* Add wave transition to next section - this creates the curve at the BOTTOM of the process section */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px]">
            <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" className="fill-[#0A0A0A]"></path>
          </svg>
        </div>
      </section>

      {/* Our Offers Section - Deep Navy/Graphite Background */}
      <section className="py-16 bg-[#0F172A] text-white relative" id="offers">
        {/* Add inverted curve at top connecting to the Who We Serve section */}
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
            <ServiceCard title="Sales Inbox Accelerator" description="Cold Email Infrastructure & Done-For-You Campaign Execution" icon={<Mail />} features={["End-to-End Cold Email Setup: Custom domains, inbox warmup, DNS records, and real-time deliverability monitoring", "Custom Copywriting & Lead Research: 1-on-1 work with our team to craft compelling email sequences and handpick high-quality leads", "Reply Management & Campaign Optimization: Active response management, performance tracking, and weekly optimization sprints", "Reporting & Compliance: Weekly dashboards, reply breakdowns, and full GDPR/Can-Spam compliance"]} outcome="Your calendar filled with qualified B2B sales calls — built on a compliant cold email machine that works on autopilot" buttonText="Learn More" />
            <ServiceCard title="LinkedIn Selling System" description="Manual Prospecting with Hyper-Personalized Messaging — Zero Automation" icon={<MessageSquare />} features={["Profile Optimization for Authority Positioning: Reworked LinkedIn profile with conversion-focused structure", "Handcrafted Messaging (No Bots): 10 fully personalized messages daily tailored to each prospect's needs", "Zero Automation, Zero Risk: Manual actions only to keep your reputation safe and engagement authentic", "Follow-ups & Lead Handoffs: Strategic conversation management and warm lead transfers directly to you"]} outcome="A daily stream of inbound conversations from decision-makers who already know what you do and want to talk" buttonText="Learn More" featured={true} accentColor="#9b87f5" />
          </div>
        </div>
        
        {/* Wave transition to next section */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          
        </div>
      </section>

      {/* Why Our Clients Choose Us - Light Gray Background */}
      <section className="py-16 bg-[#F9FAFB] text-[#1E293B] relative">
        <div className="container relative z-10">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold mb-2 text-[#1E293B]">Why Our Clients Choose Us</h2>
            <p className="text-lg text-[#4B5563] max-w-2xl mx-auto">
              The reasons businesses trust us to transform their outbound
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <ClientBenefitCard title="Expertise & Strategy" description="We bring years of experience crafting winning outbound strategies across diverse B2B sectors." icon={<Briefcase />} />
            <ClientBenefitCard title="Personalized Messaging" description="Our team writes handcrafted messaging tailored to your voice, offer, and audience." icon={<MessageSquare />} />
            <ClientBenefitCard title="Data-Driven Optimization" description="We continuously analyze performance, A/B test sequences, and refine targeting." icon={<ChartBar />} />
            <ClientBenefitCard title="Full-Service Execution" description="We handle everything from tech setup to daily execution, so you can focus on closing deals." icon={<Zap />} />
            <ClientBenefitCard title="Transparent Reporting" description="You get weekly dashboards, reply breakdowns, and full visibility into campaign performance." icon={<Calendar />} />
            <ClientBenefitCard title="Dedicated Support" description="You'll have a dedicated campaign manager who's always available to answer questions and provide guidance." icon={<User />} />
          </div>
        </div>
        
        {/* Diagonal transition to Testimonials section */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px]">
            <path d="M1200 0L0 0 598.97 114.72 1200 0z" className="fill-[#F9FAFB]"></path>
          </svg>
        </div>
      </section>

      {/* Testimonials Section - Lighter style with pattern overlay */}
      <section className="py-16 bg-gradient-to-b from-[#F8FAFC] to-[#F1F5F9] overflow-hidden relative">
        {/* Add subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#333_1px,transparent_1px)] bg-[length:20px_20px]"></div>
        
        <div className="container relative z-10">
          <div className="text-center mb-8">
            <p className="text-primary text-sm uppercase tracking-wider mb-1 font-medium">Client Stories</p>
            <h2 className="text-3xl font-bold mb-2 text-[#1E293B]">What Our Clients Say</h2>
            <p className="text-lg text-[#4B5563] max-w-2xl mx-auto">
              Real results from businesses just like yours
            </p>
          </div>
          
          <div className="relative flex gap-4 justify-center mx-auto max-w-7xl overflow-hidden">
            {/* Gradient overlays for fading effect */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#F1F5F9] via-transparent to-[#F8FAFC] z-10"></div>
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#F1F5F9] via-transparent to-[#F8FAFC] z-10"></div>
            
            <TestimonialsColumn className="min-w-[320px] max-h-[650px] overflow-hidden" testimonials={testimonialColumns[0]} duration={20} darkMode={false} />
            
            <TestimonialsColumn className="min-w-[320px] max-h-[650px] overflow-hidden mt-28" testimonials={testimonialColumns[1]} duration={25} darkMode={false} />
            
            <TestimonialsColumn className="min-w-[320px] max-h-[650px] overflow-hidden" testimonials={testimonialColumns[2]} duration={18} darkMode={false} />
          </div>
        </div>
        
        {/* Diagonal transition to FAQ section */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px]">
            <path d="M1200 0L0 0 598.97 114.72 1200 0z" className="fill-[#F9FAFB]"></path>
          </svg>
        </div>
      </section>

      {/* FAQ Section - Updated in the FAQSection.tsx component */}
      <FAQSection faqs={faqs} />

      {/* Final CTA - Updated in the CTASection.tsx component */}
      <CTASection title="Let's Build Your Outbound Machine" subtitle="Your sales calendar shouldn't be empty — let's fix that." buttonText="Book Your Strategy Call Now" />

      <Footer />
    </div>;
};
export default Index;
