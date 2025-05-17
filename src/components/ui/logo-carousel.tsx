
import React, { useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";

type LogoProps = {
  name: string;
  id: number;
  img: React.ElementType;
};

type LogoCarouselProps = {
  logos: LogoProps[];
  columnCount?: number;
};

export function LogoCarousel({ logos, columnCount = 4 }: LogoCarouselProps) {
  // Initialize carousel with autoplay options
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: "start",
    loop: true,
    dragFree: true
  });
  
  // Setup autoplay effect
  useEffect(() => {
    if (emblaApi) {
      // Function to scroll to next slide
      const autoplay = () => {
        if (!emblaApi) return;
        
        if (emblaApi.canScrollNext()) {
          emblaApi.scrollNext();
        } else {
          emblaApi.scrollTo(0);
        }
      };
      
      // Set interval for autoplay - adjust timing as needed
      const interval = setInterval(autoplay, 3000);
      
      // Clean up interval on unmount
      return () => clearInterval(interval);
    }
  }, [emblaApi]);
  
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
    <div className="w-full max-w-5xl mx-auto">
      <Carousel
        ref={emblaRef}
        className="w-full"
      >
        <CarouselContent>
          {logoItems}
        </CarouselContent>
        <div className="hidden md:flex justify-end mt-6">
          <CarouselPrevious className="relative static ml-0 translate-y-0 mr-2" />
          <CarouselNext className="relative static translate-y-0" />
        </div>
      </Carousel>
    </div>
  );
}
