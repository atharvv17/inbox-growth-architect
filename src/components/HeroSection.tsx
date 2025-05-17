import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { GradientHeading } from '@/components/ui/gradient-heading';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

// Client Logo SVGs
const AppleIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="50" height="60" viewBox="0 0 814 1000" {...props}>
    <path fill="currentColor" d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z" />
  </svg>;
const VercelIcon = (props: React.SVGProps<SVGSVGElement>) => <svg viewBox="0 0 256 222" width="50" height="50" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fill="currentColor" d="m128 0 128 221.705H0z" />
  </svg>;
const SupabaseIcon = (props: React.SVGProps<SVGSVGElement>) => <svg viewBox="0 0 109 113" width="50" height="50" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M63.708 110.284c-2.86 3.601-8.658 1.628-8.727-2.97l-1.007-67.251h45.22c8.19 0 12.758 9.46 7.665 15.874l-43.151 54.347Z" fill="#00C98D" />
    <path d="M63.708 110.284c-2.86 3.601-8.658 1.628-8.727-2.97l-1.007-67.251h45.22c8.19 0 12.758 9.46 7.665 15.874l-43.151 54.347Z" fill="#00C98D" fillOpacity=".2" />
    <path d="M45.317 2.071c2.86-3.601 8.657-1.628 8.726 2.97l.442 67.251H9.83c-8.19 0-12.759-9.46-7.665-15.875L45.317 2.072Z" fill="#3ECF8E" />
  </svg>;
const TypeScriptIcon = (props: React.SVGProps<SVGSVGElement>) => <svg viewBox="0 0 256 256" width="50" height="50" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M20 0h216c11.046 0 20 8.954 20 20v216c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0Z" fill="#3178C6" />
    <path d="M150.518 200.475v27.62c4.492 2.302 9.805 4.028 15.938 5.179 6.133 1.151 12.597 1.726 19.393 1.726 6.622 0 12.914-.633 18.874-1.899 5.96-1.266 11.187-3.352 15.678-6.257 4.492-2.906 8.048-6.704 10.669-11.394 2.62-4.689 3.93-10.486 3.93-17.391 0-5.006-.749-9.394-2.246-13.163a30.748 30.748 0 0 0-6.479-10.055c-2.821-2.935-6.205-5.567-10.149-7.898-3.945-2.33-8.394-4.531-13.347-6.602-3.628-1.497-6.881-2.949-9.761-4.359-2.879-1.41-5.327-2.848-7.342-4.316-2.016-1.467-3.571-3.021-4.665-4.661-1.094-1.64-1.641-3.495-1.641-5.567 0-1.899.489-3.61 1.468-5.135s2.362-2.834 4.147-3.927c1.785-1.094 3.973-1.942 6.565-2.547 2.591-.604 5.471-.906 8.638-.906 2.304 0 4.737.173 7.299.518 2.563.345 5.14.877 7.732 1.597a53.669 53.669 0 0 1 7.558 2.719 41.7 41.7 0 0 1 6.781 3.797v-25.807c-4.204-1.611-8.797-2.805-13.778-3.582-4.981-.777-10.697-1.165-17.147-1.165-6.565 0-12.784.705-18.658 2.115-5.874 1.409-11.043 3.61-15.506 6.602-4.463 2.993-7.99 6.805-10.582 11.437-2.591 4.632-3.887 10.17-3.887 16.615 0 8.228 2.375 15.248 7.127 21.06 4.751 5.811 11.963 10.731 21.638 14.759a291.458 291.458 0 0 1 10.625 4.575c3.283 1.496 6.119 3.049 8.509 4.66 2.39 1.611 4.276 3.366 5.658 5.265 1.382 1.899 2.073 4.057 2.073 6.474a9.901 9.901 0 0 1-1.296 4.963c-.863 1.524-2.174 2.848-3.93 3.97-1.756 1.122-3.945 1.999-6.565 2.632-2.62.633-5.687.95-9.2.95-5.989 0-11.92-1.05-17.794-3.151-5.875-2.1-11.317-5.25-16.327-9.451Zm-46.036-68.733H140V109H41v22.742h35.345V233h28.137V131.742Z" fill="#fff" />
  </svg>;

// Client Array
const clients = [{
  id: 1,
  name: "Apple",
  logo: AppleIcon,
  description: "Platform Engineering"
}, {
  id: 2,
  name: "Vercel",
  logo: VercelIcon,
  description: "Frontend Development"
}, {
  id: 3,
  name: "Supabase",
  logo: SupabaseIcon,
  description: "Database Architecture"
}, {
  id: 4,
  name: "TypeScript",
  logo: TypeScriptIcon,
  description: "Type System Design"
}];
const HeroSection: React.FC = () => {
  return <>
      <section className="relative min-h-screen flex items-center pt-32 overflow-hidden bg-midnight-background">
        <div className="absolute inset-0 z-0">
          {/* Dark background */}
          <div className="absolute inset-0 bg-[#0A0A0A]"></div>
          
          {/* Logo-colored geometric elements */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Bright cyan line - horizontal */}
            <div className="absolute top-1/4 left-0 w-full h-[0.5px] bg-logo-blue/30"></div>
            
            {/* Bright cyan line - vertical */}
            <div className="absolute top-0 left-1/3 w-[0.5px] h-full bg-logo-blue/20"></div>
            
            {/* Bright cyan dot */}
            <div className="absolute top-2/3 right-1/4 w-3 h-3 rounded-full bg-logo-blue/40"></div>
            
            {/* Subtle glow behind CTA */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-16 w-80 h-80 rounded-full bg-logo-blue/10 blur-[100px]"></div>
            
            {/* Additional geometric elements to match logo style */}
            <div className="absolute bottom-1/4 right-1/3 w-40 h-40 rounded-full border border-logo-blue/5"></div>
            <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full border border-logo-blue/5"></div>
          </div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12 rounded-lg">
            <div className="inline-block mb-6 px-4 py-2 border border-logo-blue/40 rounded-full bg-logo-blue/5 backdrop-blur-sm">
              <span className="text-sm font-medium text-logo-blue">DFY Sales Agency</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white leading-tight md:text-5xl">
              We Build <span className="relative inline-block">
                Predictable
                <span className="absolute bottom-1 left-0 w-full h-[3px] bg-logo-blue"></span>
              </span> Sales<br />Pipelines for B2B Companies
            </h1>
            
            <p className="text-lg text-gray-300 mb-10 md:text-lg">
              Done-for-you outreach, CRM systems & appointment booking — installed in 7 days
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button className="bg-logo-blue hover:bg-logo-darkBlue text-black font-semibold group flex items-center px-8 py-6 rounded shadow-lg shadow-logo-blue/20 transition-all duration-300" size="lg">
                <Calendar className="mr-2 h-5 w-5" />
                <span>Book a Free Growth Audit</span>
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
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-midnight-background via-midnight-background/95 to-transparent"></div>
        
        {/* Subtle logo color gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-logo-blue/5 to-transparent opacity-50 mix-blend-overlay"></div>
      </section>

      {/* Portfolio Clients Section */}
      <section className="py-16 bg-midnight-background border-t border-logo-blue/10">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <p className="text-logo-blue text-sm uppercase tracking-wider mb-2 font-medium">Portfolio</p>
              <GradientHeading size="xl">Trusted by Industry Leaders</GradientHeading>
              <p className="text-gray-400 mt-4">We've delivered results for businesses of all sizes</p>
            </div>

            {/* Client Logo Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-center">
              {clients.map(client => <div key={client.id} className="flex flex-col items-center text-center group">
                  <div className="w-20 h-20 mb-4 flex items-center justify-center text-gray-400 group-hover:text-logo-blue transition-colors duration-300">
                    <client.logo className="w-full h-full" />
                  </div>
                  <h3 className="font-bold text-white mb-1">{client.name}</h3>
                  <p className="text-sm text-gray-400">{client.description}</p>
                </div>)}
            </div>

            {/* Show more clients carousel */}
            <div className="mt-16 text-center">
              <Carousel opts={{
              align: "start",
              loop: true
            }} className="w-full">
                <CarouselContent>
                  {/* First slide */}
                  <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3">
                    <div className="p-6 border border-logo-blue/10 rounded-lg bg-midnight-surface">
                      <div className="flex flex-col h-full">
                        <blockquote className="text-gray-300 mb-4">"Their sales pipeline system generated 12 qualified leads in the first month alone."</blockquote>
                        <div className="mt-auto flex items-center">
                          <div className="w-10 h-10 rounded-full bg-logo-blue/20 flex items-center justify-center mr-3">
                            <AppleIcon className="w-6 h-6 text-logo-blue" />
                          </div>
                          <div className="text-left">
                            <p className="font-medium text-white">James Cook</p>
                            <p className="text-xs text-gray-400">Marketing Director</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>

                  {/* Second slide */}
                  <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3">
                    <div className="p-6 border border-logo-blue/10 rounded-lg bg-midnight-surface">
                      <div className="flex flex-col h-full">
                        <blockquote className="text-gray-300 mb-4">"Their outreach system helped us close our first enterprise deal within weeks."</blockquote>
                        <div className="mt-auto flex items-center">
                          <div className="w-10 h-10 rounded-full bg-logo-blue/20 flex items-center justify-center mr-3">
                            <VercelIcon className="w-6 h-6 text-logo-blue" />
                          </div>
                          <div className="text-left">
                            <p className="font-medium text-white">Sarah Johnson</p>
                            <p className="text-xs text-gray-400">Sales Director</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>

                  {/* Third slide */}
                  <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3">
                    <div className="p-6 border border-logo-blue/10 rounded-lg bg-midnight-surface">
                      <div className="flex flex-col h-full">
                        <blockquote className="text-gray-300 mb-4">"Completely transformed our approach to customer acquisition and retention."</blockquote>
                        <div className="mt-auto flex items-center">
                          <div className="w-10 h-10 rounded-full bg-logo-blue/20 flex items-center justify-center mr-3">
                            <SupabaseIcon className="w-6 h-6 text-logo-blue" />
                          </div>
                          <div className="text-left">
                            <p className="font-medium text-white">Michael Chen</p>
                            <p className="text-xs text-gray-400">Founder & CEO</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </>;
};
export default HeroSection;