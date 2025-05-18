
"use client"

import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
  useRef,
  type SVGProps,
} from "react"
import { motion } from "framer-motion"
import Image from "../Image"

interface Logo {
  name: string
  id: number
  img: string | React.ComponentType<React.SVGProps<SVGSVGElement>>
}

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

interface LogoItemProps {
  logo: Logo
  index: number
}

const LogoItem: React.FC<LogoItemProps> = React.memo(({ logo, index }) => {
  return (
    <motion.div
      className="flex-shrink-0 w-1/4 px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        delay: index * 0.1, 
        duration: 0.5, 
        ease: "easeOut" 
      }}
    >
      {typeof logo.img === 'string' ? (
        <div className="rounded-lg bg-white h-32 w-32 md:h-40 md:w-40 flex items-center justify-center overflow-hidden border-2 border-logo-blue/30 shadow-md shadow-logo-blue/20 hover:border-logo-blue/50 transition-all duration-300 mx-auto">
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
        <div className="rounded-lg bg-white h-32 w-32 md:h-40 md:w-40 flex items-center justify-center border-2 border-logo-blue/30 shadow-md shadow-logo-blue/20 hover:border-logo-blue/50 transition-all duration-300 mx-auto">
          <div className="w-full h-full overflow-hidden flex items-center justify-center">
            {React.createElement(logo.img, {
              className: "h-full w-full text-gray-800 object-contain p-4"
            })}
          </div>
        </div>
      )}
    </motion.div>
  );
});

interface ScrollingLogoStripProps {
  logos: Logo[]
  direction?: 'left' | 'right'
  speed?: number
}

const ScrollingLogoStrip: React.FC<ScrollingLogoStripProps> = ({ 
  logos, 
  direction = 'left',
  speed = 25
}) => {
  const [duplicatedLogos, setDuplicatedLogos] = useState<Logo[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Duplicate logos to create a seamless loop
    setDuplicatedLogos([...logos, ...logos]);
  }, [logos]);

  return (
    <div className="w-full overflow-hidden relative">
      <motion.div 
        className="flex whitespace-nowrap"
        ref={containerRef}
        animate={{
          x: direction === 'left' 
            ? [0, -100 * logos.length] 
            : [-100 * logos.length, 0]
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: speed,
          ease: "linear",
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <LogoItem key={`${logo.id}-${index}`} logo={logo} index={index % logos.length} />
        ))}
      </motion.div>
    </div>
  );
};

interface LogoCarouselProps {
  logos: Logo[]
  columnCount?: number
  autoplaySpeed?: number
  showArrows?: boolean
}

export function LogoCarousel({ 
  logos, 
  columnCount = 4, 
  autoplaySpeed = 3000,
  showArrows = false 
}: LogoCarouselProps) {
  const [logo1, logo2] = useMemo(() => {
    const shuffled = shuffleArray(logos);
    const midpoint = Math.ceil(shuffled.length / 2);
    return [
      shuffled.slice(0, midpoint),
      shuffled.slice(midpoint)
    ];
  }, [logos]);

  return (
    <div className="w-full max-w-6xl mx-auto relative py-8">
      <div className="mb-6">
        <ScrollingLogoStrip 
          logos={logo1} 
          direction="left" 
          speed={30} 
        />
      </div>
      <div>
        <ScrollingLogoStrip 
          logos={logo2} 
          direction="right" 
          speed={40} 
        />
      </div>
    </div>
  );
}

