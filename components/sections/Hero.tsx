"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import HeroScene from "./HeroScene";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(".char", {
        y: 100,
        opacity: 0,
        stagger: 0.02,
        duration: 1.5,
      })
      .from(subtitleRef.current, {
        y: 20,
        opacity: 0,
        duration: 1,
      }, "-=1")
      .from(ctaRef.current, {
        y: 20,
        opacity: 0,
        duration: 1,
      }, "-=0.8");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col lg:flex-row items-center overflow-hidden bg-charcoal">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-base/5 hidden lg:block" />

      {/* Content Side */}
      <div className="w-full lg:w-1/2 px-8 md:px-20 pt-40 pb-20 z-10">
        <div className="max-w-xl">
          <div className="overflow-hidden mb-6">
            <span className="text-accent font-body text-xs uppercase tracking-[0.6em] block">
              Established 2020 — Artisans of Memory
            </span>
          </div>
          
          <h1 ref={titleRef} className="text-7xl md:text-9xl font-heading font-bold text-white leading-[0.9] mb-10">
            {["THE", "ART", "OF", "THE", "FRAME"].map((word, i) => (
              <span key={i} className="block overflow-hidden h-fit">
                <span className="char inline-block">{word}</span>
              </span>
            ))}
          </h1>

          <p ref={subtitleRef} className="text-xl text-white/50 font-body mb-12 leading-relaxed max-w-md">
            We don&apos;t just build frames; we create sanctuaries for your soul&apos;s most precious memories. Precision craft meets artistic soul.
          </p>

          <div ref={ctaRef} className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
            <Link 
              href="/shop" 
              className="group relative px-10 py-5 bg-accent text-charcoal font-body font-bold text-xs uppercase tracking-widest overflow-hidden transition-all hover:pr-14"
            >
              <span className="relative z-10">Explore Collection</span>
              <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all" size={18} />
            </Link>
            
            <button className="flex items-center space-x-4 group">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-charcoal transition-all">
                <Play size={16} fill="currentColor" />
              </div>
              <span className="text-xs font-body font-bold text-white uppercase tracking-widest">Our Process</span>
            </button>
          </div>
        </div>
      </div>

      {/* 3D Side */}
      <div className="w-full lg:w-1/2 h-[50vh] lg:h-screen relative">
        <HeroScene />
        
        {/* Floating Stats */}
        <div className="absolute bottom-20 right-8 md:right-20 z-20 space-y-8 hidden md:block">
          {[
            { label: "Handcrafted Pieces", value: "12,000+" },
            { label: "Bespoke Styles", value: "85+" },
          ].map((stat, i) => (
            <div key={i} className="text-right border-r-2 border-accent/50 pr-6">
              <h4 className="text-white font-heading text-4xl font-bold">{stat.value}</h4>
              <p className="text-white/40 text-[10px] uppercase tracking-widest font-body">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center space-y-4">
        <span className="text-white/20 text-[10px] uppercase tracking-[0.4em] rotate-90">Scroll</span>
        <div className="w-[1px] h-20 bg-gradient-to-b from-accent to-transparent" />
      </div>
    </section>
  );
}
