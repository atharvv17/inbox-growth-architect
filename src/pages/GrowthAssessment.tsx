import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { Button } from "@/components/ui/button";
import { CheckCircle, Calendar, Users, Target, TrendingUp, ArrowRight } from "lucide-react";
const GrowthAssessment = () => {
  const benefits = ["Comprehensive analysis of your current lead generation & outreach strategy", "Clear understanding of your target market and messaging effectiveness", "Personalized feedback on your sales funnel & pipeline health", "A high-level action plan with next steps for predictable sales growth", "Transparency about where you stand compared to industry benchmarks"];
  const targetAudience = ["B2B consultants & agency owners struggling with inconsistent lead flow", "SaaS startups ready to scale and automate outreach", "Executive coaches & fractional execs wanting to grow their client base", "Sales teams needing top-of-funnel support without guesswork"];
  const processSteps = [{
    number: 1,
    title: "Apply for Your Assessment",
    description: "Fill out our brief questionnaire so we understand your business and challenges.",
    icon: <Target className="h-6 w-6" />
  }, {
    number: 2,
    title: "Get Matched & Scheduled",
    description: "We review your info, confirm eligibility, and schedule your free 30-minute Growth Assessment call.",
    icon: <Calendar className="h-6 w-6" />
  }, {
    number: 3,
    title: "Receive Your Custom Growth Roadmap",
    description: "During the call, our experts share insights, diagnose issues, and outline your path to scalable sales success.",
    icon: <TrendingUp className="h-6 w-6" />
  }, {
    number: 4,
    title: "Decide Next Steps",
    description: "You get to choose if you want us to build your outbound sales system — no pressure, just clarity.",
    icon: <Users className="h-6 w-6" />
  }];

  // Testimonials from main page
  const testimonials = [{
    text: "Their outbound system transformed our lead generation. We're now booking 15+ qualified calls every month without lifting a finger.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Briana Patton",
    role: "Agency Owner"
  }, {
    text: "The personalized outreach campaigns they built feel completely human. Our prospects respond because the messaging actually resonates with them.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Bilal Ahmed",
    role: "SaaS Founder"
  }, {
    text: "Their team took care of everything—from setup to optimization. All I have to do is show up to the calls they book for me.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Saman Malik",
    role: "Fractional CMO"
  }, {
    text: "After trying 3 other agencies with disappointing results, their approach finally delivered consistent, quality leads for our high-ticket service.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Omar Raza",
    role: "Consulting Firm CEO"
  }, {
    text: "The leads they generate convert at nearly twice the rate of our other channels. Their targeting and messaging is simply on another level.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Zainab Hussain",
    role: "Sales Director"
  }, {
    text: "I was skeptical about outbound, but they proved me wrong. Their approach is respectful, personalized, and incredibly effective.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Aliza Khan",
    role: "B2B Coach"
  }];
  const firstColumn = testimonials.slice(0, 2);
  const secondColumn = testimonials.slice(2, 4);
  const thirdColumn = testimonials.slice(4, 6);
  const faqs = [{
    question: "How long does the assessment take?",
    answer: "About 30 minutes on a Zoom call with our team."
  }, {
    question: "Is the assessment really free?",
    answer: "Yes, completely free with no obligation."
  }, {
    question: "What if I'm not ready to commit after the assessment?",
    answer: "No problem! The assessment gives you valuable insights regardless of your decision."
  }];
  return <div className="min-h-screen bg-[#FAFAFA] text-[#374151]">
      <Header showOnlyHome={true} />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-midnight-background">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0A0A0A]"></div>
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-0 w-full h-[0.5px] bg-gradient-to-r from-transparent via-logo-blue/60 to-transparent animate-pulse"></div>
            <div className="absolute top-0 left-1/3 w-[0.5px] h-full bg-gradient-to-b from-transparent via-logo-blue/40 to-transparent"></div>
            <div className="absolute top-2/3 right-1/4 w-2 h-2 rounded-full bg-logo-blue/40 animate-pulse"></div>
            <div className="absolute top-1/3 left-1/5 w-1 h-1 rounded-full bg-logo-blue/30 animate-[pulse_4s_infinite_1s] shadow-glow"></div>
            <div className="absolute bottom-1/4 right-1/4 w-1 h-1 rounded-full bg-logo-blue/20 animate-[pulse_3s_infinite_0.5s] shadow-glow"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-16 w-80 h-80 rounded-full bg-logo-blue/10 blur-[100px]"></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--muted)/0.05)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted)/0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          </div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4 relative overflow-hidden group">
              <span className="relative z-10 px-6 py-2 font-medium text-black bg-logo-blue rounded-lg shadow-lg shadow-logo-blue/20 flex items-center justify-center">
                <span className="mr-1.5">✦</span>
                Free Growth Assessment
                <span className="ml-1.5">✦</span>
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-white leading-tight md:text-6xl">
              Ready to Scale Your<br />B2B Sales Predictably?
            </h1>
            
            <p className="text-lg text-gray-300 mb-6 md:text-xl max-w-3xl mx-auto">
              Unlock your business's full growth potential with a custom, expert-driven Growth Assessment — your first step to a powerful, automated sales pipeline.
            </p>
            
            <div className="bg-logo-blue/10 border border-logo-blue/20 rounded-lg p-4 mb-8 max-w-2xl mx-auto">
              <p className="text-logo-blue font-semibold">
                Limited spots available: Apply now to secure your place in our exclusive assessment program.
              </p>
            </div>
            
            <Button className="bg-logo-blue hover:bg-logo-darkBlue text-black font-semibold group flex items-center px-8 py-6 rounded shadow-lg shadow-logo-blue/20 transition-all duration-300 hover:shadow-logo-blue/40 mx-auto" size="lg" onClick={() => window.open("https://form.typeform.com/to/LCpxCHwo", "_blank")}>
              <Calendar className="mr-2 h-5 w-5" />
              <span>Apply for Your Free Growth Assessment</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Growth Assessment Section */}
      

      {/* Why We Use This Approach */}
      

      {/* What You'll Get */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-[#1E293B]">What You'll Get from Your Free Growth Assessment</h2>
            <div className="space-y-4">
              {benefits.map((benefit, index) => <div key={index} className="flex items-start">
                  <CheckCircle className="text-[#00CFFF] mr-3 h-5 w-5 flex-shrink-0 mt-1" />
                  <span className="text-[#1E293B]">{benefit}</span>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-[#1E293B]">How It Works</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {processSteps.map((step, index) => <div key={index} className="bg-[#F8FAFC] rounded-lg p-6 border border-[#00CFFF]/20">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-[#00CFFF] text-black rounded-full flex items-center justify-center font-bold mr-3">
                      {step.number}
                    </div>
                    <div className="text-[#00CFFF]">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-[#1E293B]">{step.title}</h3>
                  <p className="text-[#4B5563]">{step.description}</p>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Limited Availability CTA */}
      <section className="py-16 bg-[#000000] text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Limited Availability — Join the Waitlist Today</h2>
            <p className="text-lg text-gray-300 mb-8">
              Our capacity is intentionally capped to deliver outstanding results to every client. We currently have <strong className="text-logo-blue">only 20 slots open this quarter</strong> — don't miss your chance.
            </p>
            <Button className="bg-logo-blue hover:bg-logo-darkBlue text-black font-semibold group flex items-center px-8 py-6 rounded shadow-lg shadow-logo-blue/20 transition-all duration-300 hover:shadow-logo-blue/40 mx-auto" size="lg" onClick={() => window.open("https://form.typeform.com/to/LCpxCHwo", "_blank")}>
              <Calendar className="mr-2 h-5 w-5" />
              <span>Apply for Your Free Growth Assessment</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials - Updated to dark theme */}
      <section className="py-16 bg-[#000000]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-white">What Our Clients Say</h2>
            <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[500px] overflow-hidden">
              <TestimonialsColumn testimonials={firstColumn} duration={15} darkMode={true} />
              <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} darkMode={true} />
              <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} darkMode={true} />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - Updated to use dark background with FAQSection component */}
      <FAQSection faqs={faqs} />

      <Footer />
    </div>;
};
export default GrowthAssessment;
