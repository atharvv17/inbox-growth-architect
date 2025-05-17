
import React, { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowLeft, ArrowRight } from "lucide-react";

type LogoProps = {
  name: string;
  id: number;
  img: React.ElementType;
};

type LogoCarouselProps = {
  logos: LogoProps[];
  autoplaySpeed?: number;
  showArrows?: boolean;
};

export function LogoCarousel({ 
  logos, 
  autoplaySpeed = 3000,
  showArrows = false 
}: LogoCarouselProps) {
  // Set up autoplay plugin with options
  const [autoplayPlugin] = useState(() => 
    Autoplay({ 
      delay: autoplaySpeed,
      stopOnInteraction: false,
      rootNode: (emblaRoot) => emblaRoot.parentElement,
    })
  );
  
  // Initialize carousel with autoplay plugin
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: "start",
    loop: true,
    dragFree: true,
    skipSnaps: true,
  }, [autoplayPlugin]);
  
  // Create individual logo items
  const logoItems = logos.map((logo) => (
    <CarouselItem key={logo.id} className="basis-1/4 pl-4">
      <div className="flex flex-col items-center justify-center p-4 group transition-all duration-300 hover:scale-105">
        <div className="relative h-52 w-52 flex items-center justify-center bg-logo-blue/10 rounded-full p-8">
          <logo.img className="h-full w-full object-contain text-gray-400 group-hover:text-logo-blue transition-colors duration-300" />
        </div>
      </div>
    </CarouselItem>
  ));

  return (
    <div className="w-full max-w-5xl mx-auto relative">
      <Carousel
        ref={emblaRef}
        className="w-full"
      >
        <CarouselContent className="py-4">
          {logoItems}
        </CarouselContent>
        
        {showArrows && (
          <>
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
              <button 
                onClick={() => emblaApi?.scrollPrev()}
                className="h-10 w-10 rounded-full bg-logo-blue/10 hover:bg-logo-blue/20 flex items-center justify-center text-logo-blue transition-colors"
                aria-label="Previous slide"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
            </div>
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
              <button 
                onClick={() => emblaApi?.scrollNext()}
                className="h-10 w-10 rounded-full bg-logo-blue/10 hover:bg-logo-blue/20 flex items-center justify-center text-logo-blue transition-colors"
                aria-label="Next slide"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </>
        )}
      </Carousel>
    </div>
  );
}

