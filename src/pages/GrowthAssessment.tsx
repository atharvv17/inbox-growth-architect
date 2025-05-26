
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Calendar, Users, Target, TrendingUp, ArrowRight } from "lucide-react";

const GrowthAssessment = () => {
  const benefits = [
    "Comprehensive analysis of your current lead generation & outreach strategy",
    "Clear understanding of your target market and messaging effectiveness", 
    "Personalized feedback on your sales funnel & pipeline health",
    "A high-level action plan with next steps for predictable sales growth",
    "Transparency about where you stand compared to industry benchmarks"
  ];

  const targetAudience = [
    "B2B consultants & agency owners struggling with inconsistent lead flow",
    "SaaS startups ready to scale and automate outreach", 
    "Executive coaches & fractional execs wanting to grow their client base",
    "Sales teams needing top-of-funnel support without guesswork"
  ];

  const processSteps = [
    {
      number: 1,
      title: "Apply for Your Assessment",
      description: "Fill out our brief questionnaire so we understand your business and challenges.",
      icon: <Target className="h-6 w-6" />
    },
    {
      number: 2, 
      title: "Get Matched & Scheduled",
      description: "We review your info, confirm eligibility, and schedule your free 30-minute Growth Assessment call.",
      icon: <Calendar className="h-6 w-6" />
    },
    {
      number: 3,
      title: "Receive Your Custom Growth Roadmap", 
      description: "During the call, our experts share insights, diagnose issues, and outline your path to scalable sales success.",
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      number: 4,
      title: "Decide Next Steps",
      description: "You get to choose if you want us to build your outbound sales system — no pressure, just clarity.",
      icon: <Users className="h-6 w-6" />
    }
  ];

  const testimonials = [
    {
      text: "The Growth Assessment was an eye-opener — it highlighted what we were missing and gave us a clear roadmap. After working with LeveragedGrowth, our sales calls doubled.",
      author: "Sarah M.",
      role: "SaaS Founder"
    },
    {
      text: "We struggled with inconsistent leads for years. Their assessment showed us exactly where to focus, and now our calendar is booked weeks in advance.",
      author: "Daniel T.", 
      role: "Executive Coach"
    }
  ];

  const faqs = [
    {
      question: "How long does the assessment take?",
      answer: "About 30 minutes on a Zoom call with our team."
    },
    {
      question: "Is the assessment really free?",
      answer: "Yes, completely free with no obligation."
    },
    {
      question: "What if I'm not ready to commit after the assessment?",
      answer: "No problem! The assessment gives you valuable insights regardless of your decision."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#374151]">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-midnight-background">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0A0A0A]"></div>
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-0 w-full h-[0.5px] bg-gradient-to-r from-transparent via-logo-blue/60 to-transparent animate-pulse"></div>
            <div className="absolute top-0 left-1/3 w-[0.5px] h-full bg-gradient-to-b from-transparent via-logo-blue/40 to-transparent"></div>
            <div className="absolute top-2/3 right-1/4 w-2 h-2 rounded-full bg-logo-blue/40 animate-pulse shadow-glow"></div>
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
            
            <Button 
              className="bg-logo-blue hover:bg-logo-darkBlue text-black font-semibold group flex items-center px-8 py-6 rounded shadow-lg shadow-logo-blue/20 transition-all duration-300 hover:shadow-logo-blue/40 mx-auto" 
              size="lg"
              onClick={() => window.open("https://form.typeform.com/to/LCpxCHwo", "_blank")}
            >
              <Calendar className="mr-2 h-5 w-5" />
              <span>Apply for Your Free Growth Assessment</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Growth Assessment Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#1E293B]">Why a Growth Assessment?</h2>
            <p className="text-lg text-[#4B5563] mb-8">
              Before we build your sales system, we dive deep into your business to:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="flex items-start">
                <CheckCircle className="text-[#00CFFF] mr-3 h-5 w-5 flex-shrink-0 mt-1" />
                <span className="text-[#1E293B]">Identify your ideal customer profile (ICP)</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-[#00CFFF] mr-3 h-5 w-5 flex-shrink-0 mt-1" />
                <span className="text-[#1E293B]">Diagnose gaps in your outbound sales process</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-[#00CFFF] mr-3 h-5 w-5 flex-shrink-0 mt-1" />
                <span className="text-[#1E293B]">Reveal untapped opportunities and hidden risks</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-[#00CFFF] mr-3 h-5 w-5 flex-shrink-0 mt-1" />
                <span className="text-[#1E293B]">Recommend a tailored growth roadmap</span>
              </div>
            </div>
            
            <p className="text-[#4B5563] mt-8 text-center">
              Think of it like a health check for your sales pipeline — ensuring every piece is optimized before we scale.
            </p>
          </div>
        </div>
      </section>

      {/* Why We Use This Approach */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-[#1E293B]">Why We Use This Approach</h2>
            <p className="text-lg text-[#4B5563] leading-relaxed">
              At LeveragedGrowth.co, we don't just chase clients — <strong className="text-[#1E293B]">clients chase us</strong>. We maintain a <strong className="text-[#1E293B]">waiting list</strong> and only accept a limited number of businesses each quarter to ensure quality and focus. Our Growth Assessment helps us and you decide if we're a good fit — saving time and ensuring success.
            </p>
          </div>
        </div>
      </section>

      {/* What You'll Get */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-[#1E293B]">What You'll Get from Your Free Growth Assessment</h2>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="text-[#00CFFF] mr-3 h-5 w-5 flex-shrink-0 mt-1" />
                  <span className="text-[#1E293B]">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-[#1E293B]">Who This Is For</h2>
            <div className="space-y-4">
              {targetAudience.map((audience, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="text-[#00CFFF] mr-3 h-5 w-5 flex-shrink-0 mt-1" />
                  <span className="text-[#1E293B]">{audience}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-[#1E293B]">How It Works</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="bg-[#F8FAFC] rounded-lg p-6 border border-[#00CFFF]/20">
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
                </div>
              ))}
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
            <Button 
              className="bg-logo-blue hover:bg-logo-darkBlue text-black font-semibold group flex items-center px-8 py-6 rounded shadow-lg shadow-logo-blue/20 transition-all duration-300 hover:shadow-logo-blue/40 mx-auto" 
              size="lg"
              onClick={() => window.open("https://form.typeform.com/to/LCpxCHwo", "_blank")}
            >
              <Calendar className="mr-2 h-5 w-5" />
              <span>Apply for Your Free Growth Assessment</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-[#1E293B]">Testimonials</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-[#F8FAFC] rounded-lg p-6 border border-[#00CFFF]/20">
                  <p className="text-[#4B5563] italic mb-4">"{testimonial.text}"</p>
                  <div className="text-[#1E293B] font-semibold">
                    — {testimonial.author}, {testimonial.role}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-[#1E293B]">FAQ</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg p-6 border border-[#00CFFF]/20">
                  <h3 className="text-lg font-bold mb-2 text-[#1E293B]">{faq.question}</h3>
                  <p className="text-[#4B5563]">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GrowthAssessment;
