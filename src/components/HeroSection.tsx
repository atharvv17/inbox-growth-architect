import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { GradientHeading } from '@/components/ui/gradient-heading';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { LogoCarousel } from '@/components/ui/logo-carousel';
import { AnimatedText } from '@/components/ui/animated-text';
import { PipelineAnimation } from '@/components/ui/pipeline-animation';
import VercelIcon from './icons/VercelIcon';
import SupabaseIcon from './icons/SupabaseIcon';

// Client Logo SVGs
const AppleIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="50" height="60" viewBox="0 0 814 1000" {...props}>
    <path fill="currentColor" d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z" />
  </svg>;

// Client Array for the carousel with the new uploaded logos
const clientLogos = [{
  id: 1,
  name: "BCG",
  img: "/lovable-uploads/d4fda32f-dd19-4673-ac3b-ee03a77ea04d.png"
}, {
  id: 2,
  name: "Triangle",
  img: "/lovable-uploads/9a21e2a4-61c3-4cf0-94f8-d87e25d471b8.png"
}, {
  id: 3,
  name: "KW",
  img: "/lovable-uploads/eda3e539-9fe2-4781-94af-d3237b342eac.png"
}, {
  id: 5,
  name: "Leadium",
  img: "/lovable-uploads/d92a0edd-00b0-4780-a32e-ac96f44d2682.png"
}, {
  id: 6,
  name: "Pipeful",
  img: "/lovable-uploads/910cd93c-893f-4b51-b240-8d9556a22858.png"
}, {
  id: 7,
  name: "Acme",
  img: "/lovable-uploads/65a95b5c-61f4-4b33-b5dc-508bb9b01942.png"
}, {
  id: 8,
  name: "SalesRoads",
  img: "/lovable-uploads/a0c813cd-8deb-48e2-8b0f-3e39a130ff2c.png"
}, {
  id: 9,
  name: "Growth Arrows",
  img: "/lovable-uploads/c7279023-198f-42b9-a23d-0b3c5eb3e9a9.png"
}, {
  id: 10,
  name: "Unbounce",
  img: "/lovable-uploads/fb15dbd2-a014-467d-818b-2a1c301de056.png"
}, {
  id: 11,
  name: "KPMG",
  img: "/lovable-uploads/d68b7475-2375-4299-b26a-d5ee7a16216c.png"
}, {
  id: 12,
  name: "Zapier",
  img: "/lovable-uploads/d317e6ab-923a-4dc9-a864-9f0851e151ee.png"
}, {
  id: 16,
  name: "Oracle",
  img: "/lovable-uploads/88da1b12-db70-4d0b-bbac-ab2d90d04565.png"
}, {
  id: 17,
  name: "Webflow",
  img: "/lovable-uploads/6b448d8a-b1f7-4443-80b8-1c11d7455563.png"
},
// New logos added from user uploads
{
  id: 18,
  name: "Infosys",
  img: "/lovable-uploads/6ed42d65-9b24-446f-b992-be0050026e71.png"
}, {
  id: 19,
  name: "Gorilla",
  img: "/lovable-uploads/2581ba47-e3a5-4f74-9981-6637bf7fae07.png"
}, {
  id: 20,
  name: "LeadSquared",
  img: "/lovable-uploads/8f2ed93a-50b9-49bc-9b8d-a6229642ced6.png"
}, {
  id: 21,
  name: "Simplus",
  img: "/lovable-uploads/1901b8d9-015c-4dbb-8808-e61e92c7dda1.png"
},
// Duplicate logos to make the carousel look fuller
{
  id: 13,
  name: "BCG Repeat",
  img: "/lovable-uploads/d4fda32f-dd19-4673-ac3b-ee03a77ea04d.png"
}, {
  id: 14,
  name: "Triangle Repeat",
  img: "/lovable-uploads/9a21e2a4-61c3-4cf0-94f8-d87e25d471b8.png"
}, {
  id: 15,
  name: "KW Repeat",
  img: "/lovable-uploads/eda3e539-9fe2-4781-94af-d3237b342eac.png"
}];

// Client Array for testimonials - also updating to use the new logo images
const clients = [{
  id: 1,
  name: "BCG",
  logo: "/lovable-uploads/d4fda32f-dd19-4673-ac3b-ee03a77ea04d.png",
  description: "Platform Engineering"
}, {
  id: 2,
  name: "Triangle",
  logo: "/lovable-uploads/9a21e2a4-61c3-4cf0-94f8-d87e25d471b8.png",
  description: "Frontend Development"
}, {
  id: 3,
  name: "KW",
  logo: "/lovable-uploads/eda3e539-9fe2-4781-94af-d3237b342eac.png",
  description: "Database Architecture"
}, {
  id: 5,
  name: "Leadium",
  logo: "/lovable-uploads/d92a0edd-00b0-4780-a32e-ac96f44d2682.png",
  description: "Sales Pipeline Automation"
}, {
  id: 6,
  name: "SalesRoads",
  logo: "/lovable-uploads/a0c813cd-8deb-48e2-8b0f-3e39a130ff2c.png",
  description: "Sales Enablement"
}, {
  id: 7,
  name: "Growth Arrows",
  logo: "/lovable-uploads/c7279023-198f-42b9-a23d-0b3c5eb3e9a9.png",
  description: "Revenue Growth"
}, {
  id: 8,
  name: "Unbounce",
  logo: "/lovable-uploads/fb15dbd2-a014-467d-818b-2a1c301de056.png",
  description: "Landing Page Optimization"
}, {
  id: 9,
  name: "KPMG",
  logo: "/lovable-uploads/d68b7475-2375-4299-b26a-d5ee7a16216c.png",
  description: "Financial Consulting"
}, {
  id: 10,
  name: "Zapier",
  logo: "/lovable-uploads/d317e6ab-923a-4dc9-a864-9f0851e151ee.png",
  description: "Workflow Automation"
}, {
  id: 11,
  name: "Oracle",
  logo: "/lovable-uploads/88da1b12-db70-4d0b-bbac-ab2d90d04565.png",
  description: "Database Solutions"
}, {
  id: 12,
  name: "Webflow",
  logo: "/lovable-uploads/6b448d8a-b1f7-4443-80b8-1c11d7455563.png",
  description: "Web Development Platform"
}];
const HeroSection: React.FC = () => {
  return <>
      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-midnight-background">
        <div className="absolute inset-0 z-0">
          {/* Dark background */}
          <div className="absolute inset-0 bg-[#0A0A0A]"></div>
          
          {/* Logo-colored geometric elements */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Animated glow elements */}
            <div className="absolute top-1/4 left-0 w-full h-[0.5px] bg-gradient-to-r from-transparent via-logo-blue/60 to-transparent animate-pulse"></div>
            
            <div className="absolute top-0 left-1/3 w-[0.5px] h-full bg-gradient-to-b from-transparent via-logo-blue/40 to-transparent"></div>
            
            {/* Animated particles */}
            <div className="absolute top-2/3 right-1/4 w-2 h-2 rounded-full bg-logo-blue/40 animate-pulse shadow-glow"></div>
            <div className="absolute top-1/3 left-1/5 w-1 h-1 rounded-full bg-logo-blue/30 animate-[pulse_4s_infinite_1s] shadow-glow"></div>
            <div className="absolute bottom-1/4 right-1/4 w-1 h-1 rounded-full bg-logo-blue/20 animate-[pulse_3s_infinite_0.5s] shadow-glow"></div>
            
            {/* Subtle glow behind CTA */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-16 w-80 h-80 rounded-full bg-logo-blue/10 blur-[100px]"></div>
            
            {/* Grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--muted)/0.05)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted)/0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            
            {/* Additional geometric elements to match logo style */}
            <div className="absolute bottom-1/4 right-1/3 w-40 h-40 rounded-full border border-logo-blue/5 animate-[spin_20s_linear_infinite] opacity-40"></div>
            <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full border border-logo-blue/5 animate-[spin_15s_linear_infinite_reverse] opacity-30"></div>
          </div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto text-center mb-8 rounded-lg">
            <div className="inline-block mb-4 relative overflow-hidden group">
              <span className="relative z-10 px-6 py-2 font-medium text-black bg-logo-blue rounded-lg shadow-lg shadow-logo-blue/20 flex items-center justify-center">
                <span className="mr-1.5">✦</span>
                DFY Sales Agency
                <span className="ml-1.5">✦</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-logo-blue/80 via-logo-blue to-logo-blue/80 blur-sm -z-10 group-hover:blur-md transition-all duration-300 scale-105 rounded-lg"></div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-white leading-tight md:text-6xl">
              We Build <AnimatedText text="Predictable" delay={500} speed={70} highlightWords={["Predictable"]} className="font-bold" /> Sales<br />Pipelines for B2B Companies
            </h1>
            
            <p className="text-lg text-gray-300 mb-6 md:text-xl animate-fade-in opacity-0" style={{
            animationDelay: "1s",
            animationFillMode: "forwards"
          }}>
              Done-for-you outreach, CRM systems & appointment booking — installed in 7 days
            </p>
            
            {/* Pipeline Animation */}
            <div className="mb-8">
              <PipelineAnimation />
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 animate-fade-in opacity-0" style={{
            animationDelay: "1.5s",
            animationFillMode: "forwards"
          }}>
              <Button 
                className="bg-logo-blue hover:bg-logo-darkBlue text-black font-semibold group flex items-center px-6 py-5 rounded shadow-lg shadow-logo-blue/20 transition-all duration-300 hover:shadow-logo-blue/40 pulse-glow" 
                size="lg"
                onClick={() => window.open("https://form.typeform.com/to/LCpxCHwo", "_blank")}
              >
                <Calendar className="mr-2 h-5 w-5" />
                <span>Apply to Work With Us</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <a href="#process" className="text-white hover:text-logo-blue transition-colors flex items-center font-medium group">
                Learn our process
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom fade with logo color tint */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-midnight-background via-midnight-background/95 to-transparent"></div>
        
        {/* Subtle logo color gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-logo-blue/5 to-transparent opacity-50 mix-blend-overlay"></div>
      </section>

      {/* Portfolio Clients Section */}
      
    </>;
};
export default HeroSection;
