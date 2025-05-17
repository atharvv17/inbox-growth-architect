
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

  // Ensure no consecutive duplicates in each column
  columns.forEach((col) => {
    for (let i = 1; i < col.length; i++) {
      if (col[i].id === col[i - 1].id) {
        // Find a different logo from another column to swap with
        let swapped = false
        for (let j = 0; j < columns.length; j++) {
          if (j === columns.indexOf(col)) continue; // Skip the current column
          
          for (let k = 0; k < columns[j].length; k++) {
            if (columns[j][k].id !== col[i - 1].id && columns[j][k].id !== col[i].id) {
              // Swap the logos
              const temp = col[i];
              col[i] = columns[j][k];
              columns[j][k] = temp;
              swapped = true;
              break;
            }
          }
          if (swapped) break;
        }
      }
    }
  });

  // Fill in any columns that need more logos
  const maxLength = Math.max(...columns.map((col) => col.length))
  columns.forEach((col) => {
    while (col.length < maxLength) {
      // Find a logo that's not the last one in this column
      const availableLogos = shuffled.filter(logo => 
        col.length === 0 || logo.id !== col[col.length - 1].id
      );
      
      if (availableLogos.length > 0) {
        col.push(availableLogos[Math.floor(Math.random() * availableLogos.length)])
      } else {
        // Fallback - if all logos would create duplicates, just pick one that's not the last
        const otherLogos = shuffled.filter(logo => col.length === 0 || logo.id !== col[col.length - 1].id);
        if (otherLogos.length > 0) {
          col.push(otherLogos[Math.floor(Math.random() * otherLogos.length)]);
        } else {
          // Worst case: just pick any logo
          col.push(shuffled[Math.floor(Math.random() * shuffled.length)]);
        }
      }
    }
  })

  return columns
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
        className="relative h-24 w-32 overflow-visible md:h-36 md:w-56"
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
              <div className="rounded-full bg-white h-24 w-24 md:h-36 md:w-36 flex items-center justify-center overflow-hidden">
                <img 
                  src={currentLogo.img} 
                  alt={currentLogo.name} 
                  className="w-full h-full object-contain" 
                  style={{ padding: currentLogo.name.includes("Apple") ? "8px" : 0 }}
                />
              </div>
            ) : (
              <div className="rounded-full bg-white h-24 w-24 md:h-36 md:w-36 flex items-center justify-center">
                {React.createElement(currentLogo.img, {
                  className: "h-full w-full text-gray-800 object-contain"
                })}
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
    <div className="w-full max-w-5xl mx-auto relative">
      <div className="flex justify-center space-x-12 py-8">
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
  )
}

export { LogoColumn };
