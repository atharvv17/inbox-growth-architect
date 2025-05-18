
"use client"

import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type SVGProps,
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
        className="relative h-16 w-24 overflow-visible md:h-24 md:w-40"
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
              <div className="rounded-lg bg-white h-20 w-20 md:h-24 md:w-24 flex items-center justify-center overflow-hidden border-2 border-logo-blue/30 shadow-md shadow-logo-blue/20 hover:border-logo-blue/50 transition-all duration-300">
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
              <div className="rounded-lg bg-white h-20 w-20 md:h-24 md:w-24 flex items-center justify-center border-2 border-logo-blue/30 shadow-md shadow-logo-blue/20 hover:border-logo-blue/50 transition-all duration-300">
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

export function LogoCarousel({ 
  logos, 
  columnCount = 4, 
  autoplaySpeed = 3000,
  showArrows = false 
}: LogoCarouselProps) {
  const [logoSets, setLogoSets] = useState<Logo[][]>([])
  const [currentTime, setCurrentTime] = useState(0)

  const updateTime = useCallback(() => {
    setCurrentTime((prevTime) => prevTime + 100)
  }, [])

  useEffect(() => {
    const intervalId = setInterval(updateTime, 100)
    return () => clearInterval(intervalId)
  }, [updateTime])

  useEffect(() => {
    const distributedLogos = distributeLogos(logos, columnCount)
    setLogoSets(distributedLogos)
  }, [logos, columnCount])

  return (
    <div className="w-full max-w-6xl mx-auto relative">
      <div className="bg-muted/20 backdrop-blur-xl border border-primary/10 rounded-xl shadow-lg p-6 my-4">
        <div className="flex justify-center space-x-10 py-6 animate-fade-in">
          {logoSets.map((logos, index) => (
            <LogoColumn
              key={index}
              logos={logos}
              index={index}
              currentTime={currentTime}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export { LogoColumn };
