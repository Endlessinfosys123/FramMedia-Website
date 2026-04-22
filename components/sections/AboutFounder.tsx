"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Quote } from "lucide-react";

export default function AboutFounder() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="py-40 bg-base overflow-hidden relative">
      {/* Decorative Background Text */}
      <div className="absolute top-20 right-0 opacity-[0.03] pointer-events-none">
        <h2 className="text-[30vw] font-heading font-bold uppercase leading-none">CRAFT</h2>
      </div>

      <div className="container mx-auto px-6 lg:px-20">
        <div className="asymmetric-grid flex flex-col lg:grid items-center lg:items-start gap-20">
          
          {/* Image Block */}
          <div className="lg:col-span-6 relative">
            <motion.div style={{ y: y1 }} className="relative z-10 aspect-[3/4] overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" 
                alt="Founder Alex Frame"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110"
              />
            </motion.div>
            
            {/* Overlapping Card */}
            <motion.div 
              style={{ y: y2 }}
              className="absolute -bottom-10 -right-10 md:right-[-5vw] glass p-10 max-w-sm z-20 shadow-premium"
            >
              <Quote className="text-accent mb-6" size={40} strokeWidth={1} />
              <p className="text-charcoal font-heading text-2xl italic leading-relaxed mb-6">
                &quot;The frame is the silent guardian of a memory. It should be as timeless as the moment it protects.&quot;
              </p>
              <div className="h-[1px] w-20 bg-accent mb-4" />
              <p className="text-[10px] font-body font-bold uppercase tracking-widest text-charcoal/40">Alex Frame — Master Artisan</p>
            </motion.div>
          </div>

          {/* Text Content Block */}
          <div className="lg:col-span-6 lg:pt-20 space-y-12 relative z-10">
            <motion.div style={{ opacity }} className="space-y-6">
              <span className="text-accent font-body text-xs uppercase tracking-[0.5em] block">Legacy — Philosophy</span>
              <h2 className="text-6xl md:text-8xl font-heading font-bold text-charcoal leading-[0.9]">
                Precision Craft, <span className="text-accent italic block">Artistic Soul.</span>
              </h2>
            </motion.div>

            <div className="space-y-8 text-charcoal/60 font-body text-lg leading-relaxed max-w-md">
              <p>
                Founded on the principle that every piece of art deserves a unique sanctuary, FrameMedia blends century-old woodworking techniques with modern aesthetic sensibilities.
              </p>
              <p>
                Our founder, Alex Frame, spent a decade in the ateliers of Florence, mastering the subtle art of gold-leafing and hand-joining. Today, he personally inspects every piece that leaves our studio.
              </p>
            </div>

            <div className="pt-8">
              <button className="px-10 py-5 border border-charcoal text-charcoal font-body font-bold text-xs uppercase tracking-widest hover:bg-charcoal hover:text-white transition-all group overflow-hidden relative">
                <span className="relative z-10">Read the Full Story</span>
                <div className="absolute inset-0 bg-charcoal translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
