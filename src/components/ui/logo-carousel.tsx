
import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

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
  // Calculate items per slide based on column count
  const itemsPerSlide = columnCount * 2;
  
  // Create slides by grouping logos
  const slides = [];
  for (let i = 0; i < logos.length; i += itemsPerSlide) {
    slides.push(logos.slice(i, i + itemsPerSlide));
  }

  return (
    <Carousel
      className="w-full max-w-5xl"
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent>
        {slides.map((slide, slideIndex) => (
          <CarouselItem key={slideIndex} className="basis-full">
            <div className={`grid grid-cols-${columnCount} md:grid-cols-${columnCount} gap-8`}>
              {slide.map((logo) => (
                <div
                  key={logo.id}
                  className="flex flex-col items-center justify-center space-y-3 p-4"
                >
                  <div className="relative h-16 w-16 flex items-center justify-center">
                    <logo.img className="h-full w-full object-contain" />
                  </div>
                  <span className="text-sm text-gray-400 font-medium">{logo.name}</span>
                </div>
              ))}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
