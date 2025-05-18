
"use client"

import React, {
  useEffect,
  useMemo,
  useState,
  useRef,
} from "react"
import { motion } from "framer-motion"

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
    <div
      className="flex-shrink-0 px-4"
      style={{
        opacity: 1,
        transform: "translateY(0px)",
        transition: `opacity 500ms ease-out ${index * 100}ms, transform 500ms ease-out ${index * 100}ms`
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
    </div>
  );
});

interface LogoCarouselProps {
  logos: Logo[]
  autoplaySpeed?: number
  showArrows?: boolean
}

export function LogoCarousel({ 
  logos, 
  autoplaySpeed = 30,
  showArrows = false 
}: LogoCarouselProps) {
  const [duplicatedLogos, setDuplicatedLogos] = useState<Logo[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const shuffledLogos = useMemo(() => shuffleArray(logos), [logos]);

  useEffect(() => {
    // Duplicate logos to create a seamless loop
    setDuplicatedLogos([...shuffledLogos, ...shuffledLogos]);
  }, [shuffledLogos]);

  return (
    <div className="w-full max-w-6xl mx-auto py-8">
      <div className="overflow-hidden relative">
        <motion.div 
          className="flex"
          animate={{
            x: [-0, -100 * (shuffledLogos.length)]
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: autoplaySpeed,
            ease: "linear",
          }}
          style={{
            display: "flex",
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <LogoItem key={`${logo.id}-${index}`} logo={logo} index={index % logos.length} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

