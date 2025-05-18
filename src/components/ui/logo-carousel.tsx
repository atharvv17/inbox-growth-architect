
"use client"

import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type SVGProps,
  useRef,
} from "react"
import { AnimatePresence, motion } from "framer-motion"
import Image from "../Image"

interface Logo {
  name: string
  id: number
  img: string | React.ComponentType<React.SVGProps<SVGSVGElement>>
}

interface LogoColumnProps {
  logos: Logo[]
  index: number
  currentTime: number
}

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

const distributeLogos = (allLogos: Logo[], columnCount: number): Logo[][] => {
  const shuffled = shuffleArray(allLogos)
  const columns: Logo[][] = Array.from({ length: columnCount }, () => [])

  // First pass: distribute logos evenly
  shuffled.forEach((logo, index) => {
    columns[index % columnCount].push(logo)
  })

  // Ensure no consecutive duplicates in each column and no duplicates across columns at the same position
  const columnLength = Math.ceil(shuffled.length / columnCount);
  
  // Make sure each column has the same length
  columns.forEach((col, colIndex) => {
    while (col.length < columnLength) {
      const availableLogos = shuffled.filter(logo => col.length === 0 || logo.id !== col[col.length - 1].id);
      if (availableLogos.length > 0) {
        col.push(availableLogos[Math.floor(Math.random() * availableLogos.length)]);
      } else {
        col.push(shuffled[Math.floor(Math.random() * shuffled.length)]);
      }
    }
  });
  
  // Now check for duplicates at the same position across columns and swap if needed
  for (let pos = 0; pos < columnLength; pos++) {
    const logosAtPosition = columns.map((col) => col[pos]?.id).filter(Boolean);
    const uniqueLogos = new Set(logosAtPosition);
    
    // If there are duplicates at this position
    if (uniqueLogos.size < logosAtPosition.length) {
      // Find duplicates and fix them
      const seen = new Map();
      const duplicates = [];
      
      logosAtPosition.forEach((id, idx) => {
        if (seen.has(id)) {
          duplicates.push({
            columnIndex: idx,
            position: pos,
            logoId: id
          });
        } else {
          seen.set(id, idx);
        }
      });
      
      // For each duplicate, try to swap with another position in the same column
      duplicates.forEach(dup => {
        const column = columns[dup.columnIndex];
        
        // Try to find a position to swap with
        for (let i = 0; i < column.length; i++) {
          if (i !== pos) {
            // Check if swapping would not create new duplicates
            const logoAtOtherPos = column[i].id;
            const otherPosLogos = columns.map((col) => col[i]?.id).filter(Boolean);
            
            if (!otherPosLogos.includes(dup.logoId)) {
              // Safe to swap
              const temp = column[pos];
              column[pos] = column[i];
              column[i] = temp;
              break;
            }
          }
        }
      });
    }
  }

  return columns;
}

const LogoColumn: React.FC<LogoColumnProps> = React.memo(
  ({ logos, index, currentTime }) => {
    const cycleInterval = 2000
    const columnDelay = index * 200
    const adjustedTime = (currentTime + columnDelay) % (cycleInterval * logos.length)
    const currentIndex = Math.floor(adjustedTime / cycleInterval)
    const currentLogo = logos[currentIndex]

    return (
      <motion.div
        className="relative h-24 w-32 overflow-visible md:h-40 md:w-60"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: index * 0.1,
          duration: 0.5,
          ease: "easeOut",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={`${logos[currentIndex].id}-${currentIndex}`}
            className="absolute inset-0 flex items-center justify-center"
            initial={{ y: "10%", opacity: 0, filter: "blur(8px)" }}
            animate={{
              y: "0%",
              opacity: 1,
              filter: "blur(0px)",
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
                mass: 1,
                bounce: 0.2,
                duration: 0.5,
              },
            }}
            exit={{
              y: "-20%",
              opacity: 0,
              filter: "blur(6px)",
              transition: {
                type: "tween",
                ease: "easeIn",
                duration: 0.3,
              },
            }}
          >
            {typeof currentLogo.img === 'string' ? (
              <div className="rounded-lg bg-white h-32 w-32 md:h-40 md:w-40 flex items-center justify-center overflow-hidden border-2 border-logo-blue/30 shadow-md shadow-logo-blue/20 hover:border-logo-blue/50 transition-all duration-300">
                <div className="w-full h-full overflow-hidden flex items-center justify-center p-2">
                  <img 
                    src={currentLogo.img} 
                    alt={currentLogo.name} 
                    className="object-contain w-full h-full"
                    style={{ aspectRatio: "1/1", objectFit: "contain" }}
                  />
                </div>
              </div>
            ) : (
              <div className="rounded-lg bg-white h-32 w-32 md:h-40 md:w-40 flex items-center justify-center border-2 border-logo-blue/30 shadow-md shadow-logo-blue/20 hover:border-logo-blue/50 transition-all duration-300">
                <div className="w-full h-full overflow-hidden flex items-center justify-center">
                  {React.createElement(currentLogo.img, {
                    className: "h-full w-full text-gray-800 object-contain p-4"
                  })}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    )
  }
)

interface LogoCarouselProps {
  logos: Logo[]
  columnCount?: number
  autoplaySpeed?: number
  showArrows?: boolean
}

// Scrolling animation component
const ScrollingLogoStrip = React.memo(({ 
  logos, 
  speed = 30, 
  reverse = false,
  delay = 0
}: { 
  logos: Logo[], 
  speed?: number,
  reverse?: boolean,
  delay?: number
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [loopLogos, setLoopLogos] = useState<Logo[]>([]);
  
  // Ensure we always have enough logos to display at least 4 at a time
  useEffect(() => {
    // Create enough copies of logos to ensure smooth scrolling
    const repeated = [...logos, ...logos, ...logos];
    setLoopLogos(repeated);
  }, [logos]);
  
  useEffect(() => {
    const scroll = scrollRef.current;
    if (!scroll) return;
    
    // Add initial delay if specified
    let timeoutId: NodeJS.Timeout | null = null;
    if (delay > 0) {
      timeoutId = setTimeout(() => {
        timeoutId = null;
      }, delay);
    }
    
    const animateScroll = () => {
      if (!scroll || timeoutId) return;
      
      if (reverse) {
        if (scroll.scrollLeft <= 0) {
          // Reset to middle when we reach the start
          scroll.scrollLeft = scroll.scrollWidth / 3; // Use 1/3 position for smoother loop
        } else {
          // Scroll left
          scroll.scrollLeft -= 1;
        }
      } else {
        if (scroll.scrollLeft >= scroll.scrollWidth / 3 * 2) { // Use 2/3 position for smoother loop
          // Reset to first third when we reach the second third
          scroll.scrollLeft = scroll.scrollWidth / 3;
        } else {
          // Scroll right
          scroll.scrollLeft += 1;
        }
      }
    };

    // Set initial scroll position to middle section for infinite loop effect
    scroll.scrollLeft = scroll.scrollWidth / 3;

    // Adjust interval based on desired speed
    const interval = setInterval(animateScroll, speed);
    return () => {
      clearInterval(interval);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [reverse, speed, delay]);

  return (
    <div className="w-full overflow-hidden">
      <div 
        ref={scrollRef}
        className="flex overflow-x-hidden w-full" 
        style={{ scrollBehavior: 'auto' }}
      >
        <div className="flex py-4">
          {loopLogos.map((logo, i) => (
            <div 
              key={`${logo.id}-${i}`} 
              className="flex-shrink-0 px-3" // Add padding for spacing between logos
              style={{ width: "25%" }} // Each logo takes 25% width (4 logos per view)
            >
              {typeof logo.img === 'string' ? (
                <div className="rounded-lg bg-white h-24 w-full flex items-center justify-center overflow-hidden border-2 border-logo-blue/30 shadow-md shadow-logo-blue/20 hover:border-logo-blue/50 transition-all duration-300">
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
                <div className="rounded-lg bg-white h-24 w-full flex items-center justify-center border-2 border-logo-blue/30 shadow-md shadow-logo-blue/20 hover:border-logo-blue/50 transition-all duration-300">
                  <div className="w-full h-full overflow-hidden flex items-center justify-center">
                    {React.createElement(logo.img, {
                      className: "h-full w-full text-gray-800 object-contain p-3"
                    })}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export function LogoCarousel({ 
  logos, 
  columnCount = 4, 
  autoplaySpeed = 3000,
  showArrows = false 
}: LogoCarouselProps) {
  // Split logos into 4 groups for different rows
  const logosPerGroup = Math.ceil(logos.length / 4);
  const group1 = logos.slice(0, logosPerGroup);
  const group2 = logos.slice(logosPerGroup, logosPerGroup * 2);
  const group3 = logos.slice(logosPerGroup * 2, logosPerGroup * 3);
  const group4 = logos.slice(logosPerGroup * 3);
  
  return (
    <div className="w-full max-w-6xl mx-auto relative">
      <div className="space-y-4">
        <ScrollingLogoStrip logos={group1} speed={45} delay={0} />
        <ScrollingLogoStrip logos={group2} speed={40} reverse={true} delay={500} />
        <ScrollingLogoStrip logos={group3} speed={50} delay={1000} />
        <ScrollingLogoStrip logos={group4} speed={35} reverse={true} delay={1500} />
      </div>
    </div>
  )
}

export { LogoColumn };
