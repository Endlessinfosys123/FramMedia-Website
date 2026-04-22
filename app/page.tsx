"use client";

import Hero from "@/components/sections/Hero";
import HorizontalGallery from "@/components/sections/HorizontalGallery";
import AboutFounder from "@/components/sections/AboutFounder";
import Testimonials from "@/components/sections/Testimonials";
import CTABanner from "@/components/sections/CTABanner";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Hero />
      
      {/* Cinematic Marquee */}
      <section className="py-20 bg-charcoal overflow-hidden border-y border-white/5">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center space-x-20 px-10">
              <span className="text-[10vw] font-heading font-bold text-white/5 uppercase tracking-tighter">Bespoke Framing</span>
              <div className="w-10 h-[2px] bg-accent" />
              <span className="text-[10vw] font-heading font-bold text-accent/20 uppercase tracking-tighter">Artisan Craft</span>
              <div className="w-10 h-[2px] bg-white/20" />
            </div>
          ))}
        </div>
      </section>

      <AboutFounder />
      <HorizontalGallery />
      <Testimonials />
      <CTABanner />
    </motion.div>
  );
}
