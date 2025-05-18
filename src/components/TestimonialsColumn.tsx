
import React from "react";
import { motion } from "framer-motion";

interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

interface TestimonialsColumnProps {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
  darkMode?: boolean;
}

export const TestimonialsColumn: React.FC<TestimonialsColumnProps> = (props) => {
  const { darkMode = true } = props;
  
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-5 pb-5"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div 
                  className={`p-7 rounded-2xl backdrop-blur-md border shadow-lg max-w-xs w-full transition-all duration-300 ${
                    darkMode 
                      ? "bg-muted/20 border-border/30 hover:border-[#00CFFF]/20 hover:bg-muted/30" 
                      : "bg-white/90 border-primary/10 hover:border-primary/30 hover:bg-white"
                  }`}
                  key={i}
                >
                  <div className={`mb-4 italic text-md leading-relaxed ${
                    darkMode ? "text-foreground/90" : "text-gray-700"
                  }`}>
                    {text}
                  </div>
                  <div className="flex items-center gap-3 mt-3">
                    <img
                      width={44}
                      height={44}
                      src={image}
                      alt={name}
                      className="h-11 w-11 rounded-full object-cover border border-[#00CFFF]/30"
                    />
                    <div className="flex flex-col">
                      <div className={`font-medium tracking-tight leading-5 text-md ${
                        darkMode ? "text-white" : "text-gray-800"
                      }`}>
                        {name}
                      </div>
                      <div className={`leading-5 text-sm tracking-tight ${
                        darkMode ? "text-[#00CFFF]" : "text-gray-500"
                      }`}>
                        {role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

export default TestimonialsColumn;
