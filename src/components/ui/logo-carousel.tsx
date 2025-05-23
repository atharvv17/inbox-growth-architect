
"use client"

import React, { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import { useIsMobile } from "@/hooks/use-mobile"

interface Logo {
  name: string
  id: number
  img: string | React.ComponentType<React.SVGProps<SVGSVGElement>>
}

interface LogoCarouselProps {
  logos: Logo[]
  autoplaySpeed?: number
}

export function LogoCarousel({ 
  logos,
  autoplaySpeed = 2000
}: LogoCarouselProps) {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const isMobile = useIsMobile();
  
  // Set up the carousel dimensions
  useEffect(() => {
    if (carouselRef.current) {
      // Calculate width of all logos minus the visible part
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, [logos]);

  // Dynamic styles based on mobile or desktop
  const logoSize = isMobile ? "h-16 w-16" : "h-28 w-28";
  const logoSpacing = isMobile ? "space-x-4" : "space-x-8";
  const containerPadding = isMobile ? "p-4" : "p-6"; // Reduced from p-8 to p-6 for desktop

  return (
    <div className="w-full max-w-6xl mx-auto relative overflow-hidden">
      {/* Added bottom padding (pb-6) to create more space */}
      <div className={`bg-[#F9FAFB] border border-gray-100 rounded-xl shadow-sm ${containerPadding} mb-6 pb-6`}>
        <motion.div className="overflow-hidden">
          <motion.div 
            ref={carouselRef}
            className={`flex ${logoSpacing}`}
            initial={{ x: 0 }} // Start with logos visible
            animate={{
              x: -width // Animate to the negative width (moving left)
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: logos.length * 2, // Reduced from 5 to 2 to make it 2.5x faster
                ease: "linear",
              }
            }}
          >
            {/* Just render each logo once */}
            {logos.map((logo, index) => (
              <motion.div 
                key={`logo-${index}`} 
                className="flex-shrink-0"
              >
                {typeof logo.img === 'string' ? (
                  <div className={`rounded-full bg-white ${logoSize} flex items-center justify-center overflow-hidden border-2 border-gray-200 hover:border-0 shadow-sm transition-all duration-300 group`}>
                    <img 
                      src={logo.img} 
                      alt={logo.name} 
                      className="object-cover w-full h-full opacity-70 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                    />
                  </div>
                ) : (
                  <div className={`rounded-full bg-white ${logoSize} flex items-center justify-center border-2 border-gray-200 hover:border-0 shadow-sm transition-all duration-300 group`}>
                    {React.createElement(logo.img, {
                      className: "w-full h-full text-gray-800 object-cover p-1 opacity-70 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                    })}
                  </div>
                )}
              </motion.div>
            ))}

            {/* Clone of the first few logos to create seamless loop effect */}
            {logos.slice(0, 5).map((logo, index) => (
              <motion.div 
                key={`logo-clone-${index}`} 
                className="flex-shrink-0"
              >
                {typeof logo.img === 'string' ? (
                  <div className={`rounded-full bg-white ${logoSize} flex items-center justify-center overflow-hidden border-2 border-gray-200 hover:border-0 shadow-sm transition-all duration-300 group`}>
                    <img 
                      src={logo.img} 
                      alt={logo.name} 
                      className="object-cover w-full h-full opacity-70 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                    />
                  </div>
                ) : (
                  <div className={`rounded-full bg-white ${logoSize} flex items-center justify-center border-2 border-gray-200 hover:border-0 shadow-sm transition-all duration-300 group`}>
                    {React.createElement(logo.img, {
                      className: "w-full h-full text-gray-800 object-cover p-1 opacity-70 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                    })}
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
