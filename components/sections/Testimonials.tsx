"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Eleanor Vance",
    role: "Interior Designer",
    content: "FrameMedia doesn't just provide frames; they provide a finishing touch that transforms a house into a gallery of lived experiences.",
    avatar: "https://i.pravatar.cc/150?u=eleanor"
  },
  {
    id: 2,
    name: "Marcus Thorne",
    role: "Professional Photographer",
    content: "My exhibitions rely on the subtle elegance of FrameMedia. Their archival glass and hand-finished wood are unmatched in the industry.",
    avatar: "https://i.pravatar.cc/150?u=marcus"
  },
  {
    id: 3,
    name: "Sophia Chen",
    role: "Art Collector",
    content: "Bespoke framing is an art in itself. FrameMedia understands the dialogue between the frame and the artwork better than anyone else.",
    avatar: "https://i.pravatar.cc/150?u=sophia"
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-40 bg-charcoal relative overflow-hidden">
      {/* Background Icon */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] text-white">
        <Quote size={800} strokeWidth={0.5} />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center max-w-5xl">
        <span className="text-accent font-body text-xs uppercase tracking-[0.6em] mb-12 block">Client Perspectives</span>
        
        <div className="relative h-[400px] md:h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.05, y: -20 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-12"
            >
              <h2 className="text-4xl md:text-6xl font-heading font-medium text-white italic leading-tight">
                &quot;{testimonials[index].content}&quot;
              </h2>
              
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-6 border border-accent/20 relative">
                  <Image 
                    src={testimonials[index].avatar} 
                    alt={testimonials[index].name} 
                    fill 
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-500" 
                  />
                </div>
                <h4 className="text-xl font-heading font-bold text-white mb-1">{testimonials[index].name}</h4>
                <p className="text-[10px] font-body text-accent uppercase tracking-widest">{testimonials[index].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-20 flex justify-center space-x-12">
          <button 
            onClick={prev}
            className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-charcoal transition-all group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={next}
            className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-charcoal transition-all group"
          >
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
