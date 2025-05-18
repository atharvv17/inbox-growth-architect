
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
  const { darkMode = false } = props;
  
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
                  className={`p-7 rounded-2xl backdrop-blur-md ${darkMode ? 'bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10' : 'bg-black/5 border border-black/10 hover:border-black/20 hover:bg-black/10'} shadow-lg max-w-xs w-full transition-all duration-300`}
                  key={i}
                >
                  <div className={`${darkMode ? 'text-white/90' : 'text-black/90'} mb-4 italic text-md leading-relaxed`}>{text}</div>
                  <div className="flex items-center gap-3 mt-3">
                    <img
                      width={44}
                      height={44}
                      src={image}
                      alt={name}
                      className={`h-11 w-11 rounded-full object-cover ${darkMode ? 'border border-white/30' : 'border border-black/30'}`}
                    />
                    <div className="flex flex-col">
                      <div className={`font-medium tracking-tight leading-5 ${darkMode ? 'text-white' : 'text-black'} text-md`}>{name}</div>
                      <div className={`leading-5 ${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm tracking-tight`}>{role}</div>
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
