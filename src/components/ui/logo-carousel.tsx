
"use client"

import React, { useCallback, useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "../Image"

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
  const [currentPosition, setCurrentPosition] = useState(0)
  
  // Calculate the required animation distance based on logo count
  const containerWidth = logos.length * 120 // Adjust based on logo size + gap
  
  useEffect(() => {
    // Animation speed control
    const speed = 0.5 // pixels per millisecond
    const animationDuration = containerWidth / speed
    
    const startTime = Date.now()
    
    const animateScroll = () => {
      const now = Date.now()
      const elapsed = now - startTime
      const position = (elapsed * speed) % containerWidth
      
      setCurrentPosition(position)
      requestAnimationFrame(animateScroll)
    }
    
    const animationFrame = requestAnimationFrame(animateScroll)
    
    return () => {
      cancelAnimationFrame(animationFrame)
    }
  }, [containerWidth])

  return (
    <div className="w-full max-w-6xl mx-auto relative overflow-hidden">
      <div className="bg-muted/20 backdrop-blur-xl border border-primary/10 rounded-xl shadow-lg p-6 my-4">
        <div className="relative">
          <motion.div 
            className="flex space-x-6 px-4"
            style={{
              x: -currentPosition,
              width: `${containerWidth + 200}px`, // Add extra space for smooth wrapping
            }}
          >
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div 
                key={`logo-${index}`} 
                className="flex-shrink-0"
              >
                {typeof logo.img === 'string' ? (
                  <div className="rounded-full bg-white h-16 w-16 md:h-20 md:w-20 flex items-center justify-center overflow-hidden border-2 border-logo-blue/30 shadow-md shadow-logo-blue/20 hover:border-logo-blue/50 transition-all duration-300">
                    <div className="w-full h-full overflow-hidden flex items-center justify-center p-2">
                      <img 
                        src={logo.img} 
                        alt={logo.name} 
                        className="object-contain w-full h-full"
                        style={{ aspectRatio: "1/1", objectFit: "contain" }}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="rounded-full bg-white h-16 w-16 md:h-20 md:w-20 flex items-center justify-center border-2 border-logo-blue/30 shadow-md shadow-logo-blue/20 hover:border-logo-blue/50 transition-all duration-300">
                    <div className="w-full h-full overflow-hidden flex items-center justify-center">
                      {React.createElement(logo.img, {
                        className: "h-full w-full text-gray-800 object-contain p-3"
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            {/* Duplicate the logos to create a seamless loop */}
            {logos.map((logo, index) => (
              <div 
                key={`logo-dup-${index}`} 
                className="flex-shrink-0"
              >
                {typeof logo.img === 'string' ? (
                  <div className="rounded-full bg-white h-16 w-16 md:h-20 md:w-20 flex items-center justify-center overflow-hidden border-2 border-logo-blue/30 shadow-md shadow-logo-blue/20 hover:border-logo-blue/50 transition-all duration-300">
                    <div className="w-full h-full overflow-hidden flex items-center justify-center p-2">
                      <img 
                        src={logo.img} 
                        alt={logo.name} 
                        className="object-contain w-full h-full"
                        style={{ aspectRatio: "1/1", objectFit: "contain" }}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="rounded-full bg-white h-16 w-16 md:h-20 md:w-20 flex items-center justify-center border-2 border-logo-blue/30 shadow-md shadow-logo-blue/20 hover:border-logo-blue/50 transition-all duration-300">
                    <div className="w-full h-full overflow-hidden flex items-center justify-center">
                      {React.createElement(logo.img, {
                        className: "h-full w-full text-gray-800 object-contain p-3"
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
