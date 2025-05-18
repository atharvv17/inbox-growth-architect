import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface VideoTestimonial {
  id: number;
  title: string;
  author: string;
  role: string;
  videoUrl: string;
  thumbnail?: string;
}

const testimonialVideos: VideoTestimonial[] = [
  {
    id: 1,
    title: "6 new deals in the first month of working with us",
    author: "Kieran",
    role: "Instagram Agency Owner",
    videoUrl: "https://www.youtube.com/embed/0k0LpxzR1w8",
    thumbnail: "https://img.youtube.com/vi/0k0LpxzR1w8/maxresdefault.jpg"
  },
  {
    id: 2,
    title: "From struggling to 15+ qualified calls monthly",
    author: "Michael Chen",
    role: "CEO, GrowthGenius",
    videoUrl: "https://www.youtube.com/embed/SfD6BD-NaO0",
    thumbnail: "https://img.youtube.com/vi/SfD6BD-NaO0/maxresdefault.jpg"
  },
  {
    id: 3,
    title: "Scaled SAAS to $10k/month",
    author: "Bailey",
    role: "SAAS Founder",
    videoUrl: "https://www.youtube.com/embed/gab_qaJXTiY",
    thumbnail: "https://img.youtube.com/vi/gab_qaJXTiY/maxresdefault.jpg"
  }
];

const VideoTestimonials: React.FC = () => {
  return (
    <section className="py-16 bg-white relative" id="video-testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-block mb-4 px-4 py-1.5 bg-[#00CFFF]/10 rounded-full">
            <span className="text-[#00CFFF] font-medium">Client Success Stories</span>
          </div>
          <h2 className="text-3xl font-bold mb-2 text-[#1A1F2C]">
            See Our Results in Action
          </h2>
          <p className="text-lg text-[#403E43] max-w-2xl mx-auto">
            Watch how our clients transformed their businesses with our outbound systems
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialVideos.map((video) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: video.id * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden border border-[#00CFFF]/20 hover:border-[#00CFFF]/40 transition-all duration-300 shadow-lg hover:shadow-xl bg-white">
                <div className="relative">
                  <AspectRatio ratio={16 / 9} className="bg-[#f8f9fa]">
                    <iframe
                      src={video.videoUrl}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full object-cover"
                    ></iframe>
                  </AspectRatio>
                  
                  {/* Gradient overlay at bottom of video */}
                  <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#00CFFF]/10 to-transparent"></div>
                </div>
                
                <CardContent className="p-5">
                  <h3 className="font-bold text-xl mb-2 text-[#1A1F2C]">{video.title}</h3>
                  <div className="flex items-center mt-3">
                    <div className="w-10 h-10 rounded-full bg-[#00CFFF]/20 flex items-center justify-center text-[#00CFFF] font-bold">
                      {video.author.charAt(0)}
                    </div>
                    <div className="ml-3">
                      <p className="font-medium text-[#1A1F2C]">{video.author}</p>
                      <p className="text-sm text-[#403E43]">{video.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Wave transition to next section */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px]">
          <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" className="fill-[#0A0A0A]"></path>
        </svg>
      </div>
    </section>
  );
};

export default VideoTestimonials;
