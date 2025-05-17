
import React, { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
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
  columnCount?: number;
  autoplaySpeed?: number;
  showArrows?: boolean;
};

export function LogoCarousel({ 
  logos, 
  columnCount = 4, 
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
    <CarouselItem key={logo.id} className="md:basis-1/3 lg:basis-1/4 pl-4">
      <div className="flex flex-col items-center justify-center p-4 group transition-all duration-300">
        <div className="relative h-16 w-16 flex items-center justify-center mb-3">
          <logo.img className="h-full w-full object-contain text-gray-400 group-hover:text-logo-blue transition-colors duration-300" />
        </div>
        <span className="text-sm text-gray-400 font-medium">{logo.name}</span>
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
