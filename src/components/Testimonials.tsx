
import React from "react";
import { motion } from "framer-motion";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";

const testimonials = [
  {
    text: "Their outbound system transformed our lead generation. We're now booking 15+ qualified calls every month without lifting a finger.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Briana Patton",
    role: "Agency Owner",
  },
  {
    text: "The personalized outreach campaigns they built feel completely human. Our prospects respond because the messaging actually resonates with them.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Bilal Ahmed",
    role: "SaaS Founder",
  },
  {
    text: "Their team took care of everything—from setup to optimization. All I have to do is show up to the calls they book for me.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Saman Malik",
    role: "Fractional CMO",
  },
  {
    text: "After trying 3 other agencies with disappointing results, their approach finally delivered consistent, quality leads for our high-ticket service.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Omar Raza",
    role: "Consulting Firm CEO",
  },
  {
    text: "The leads they generate convert at nearly twice the rate of our other channels. Their targeting and messaging is simply on another level.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Zainab Hussain",
    role: "Sales Director",
  },
  {
    text: "I was skeptical about outbound, but they proved me wrong. Their approach is respectful, personalized, and incredibly effective.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Aliza Khan",
    role: "B2B Coach",
  },
  {
    text: "In just 90 days, their outbound system has become our most reliable source of new business conversations. Absolutely worth the investment.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Farhan Siddiqui",
    role: "Agency Founder",
  },
  {
    text: "What impressed me most was how they tailored everything to our specific niche. The leads coming in actually understand our value proposition.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Sana Sheikh",
    role: "Marketing Agency Owner",
  },
  {
    text: "Our calendar stays consistently filled now. Their outbound system delivers 2-3 qualified calls every week like clockwork.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Hassan Ali",
    role: "B2B Service Provider",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const Testimonials = () => {
  return (
    <section className="bg-[#F8FAFC] py-16 relative overflow-hidden">
      {/* Add subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#333_1px,transparent_1px)] bg-[length:20px_20px]"></div>
      
      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border border-[#00CFFF]/30 py-1 px-4 rounded-lg text-[#00CFFF] font-medium">Testimonials</div>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tighter mt-5 text-[#1E293B] text-center">
            What our users say
          </h2>
          <p className="text-center mt-3 text-[#4B5563]">
            See what our customers have to say about us.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[650px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
      
      {/* Add diagonal transition to next section */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px]">
          <path d="M1200 0L0 0 598.97 114.72 1200 0z" className="fill-[#E5E7EB]"></path>
        </svg>
      </div>
    </section>
  );
};

export default Testimonials;
