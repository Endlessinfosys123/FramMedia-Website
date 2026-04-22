"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const featuredItems = [
  { 
    id: "1", 
    title: "The Classic Walnut", 
    cat: "Traditional", 
    src: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=2080&auto=format&fit=crop",
    price: "₹2,499"
  },
  { 
    id: "2", 
    title: "Gold Leaf Artisan", 
    cat: "Luxury", 
    src: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=2070&auto=format&fit=crop",
    price: "₹4,999"
  },
  { 
    id: "3", 
    title: "Minimalist Birch", 
    cat: "Modern", 
    src: "https://images.unsplash.com/photo-1544411047-c491574abbde?q=80&w=2070&auto=format&fit=crop",
    price: "₹1,899"
  },
  { 
    id: "4", 
    title: "Obsidian Slate", 
    cat: "Contemporary", 
    src: "https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?q=80&w=2070&auto=format&fit=crop",
    price: "₹3,299"
  },
];

export default function HorizontalGallery() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const pin = gsap.fromTo(
        sectionRef.current,
        { x: 0 },
        {
          x: "-300vw",
          ease: "none",
          scrollTrigger: {
            trigger: triggerRef.current,
            pin: true,
            scrub: 1,
            start: "top top",
            end: () => `+=${sectionRef.current?.offsetWidth || 0}`,
          },
        }
      );
      return () => pin.kill();
    }, triggerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={triggerRef} className="bg-charcoal overflow-hidden">
      <div className="h-screen flex items-center relative">
        {/* Sticky Background Title */}
        <div className="absolute top-1/2 left-20 -translate-y-1/2 z-0 opacity-[0.02] pointer-events-none whitespace-nowrap">
          <h2 className="text-[40vw] font-heading font-bold text-white uppercase leading-none">CURATED</h2>
        </div>

        <div ref={sectionRef} className="flex h-full items-center px-[10vw] space-x-[20vw] relative z-10">
          {/* Intro Slide */}
          <div className="shrink-0 w-[40vw]">
            <span className="text-accent font-body text-xs uppercase tracking-[0.4em] mb-8 block">Collection — 01</span>
            <h2 className="text-7xl md:text-9xl font-heading font-bold text-white leading-tight mb-10">
              The <span className="text-accent italic">Artisanal</span> Selects
            </h2>
            <p className="text-white/40 font-body text-lg max-w-sm">
              Discover our most sought-after pieces, each hand-finished with archival precision.
            </p>
          </div>

          {/* Product Slides */}
          {featuredItems.map((item) => (
            <div key={item.id} className="shrink-0 w-[60vw] md:w-[40vw] group">
              <Link href={`/shop/${item.id}`} className="block relative aspect-[4/5] overflow-hidden">
                <Image 
                  src={item.src} 
                  alt={item.title} 
                  fill 
                  className="object-cover transition-transform duration-[1.5s] cubic-bezier(0.23, 1, 0.32, 1) group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center text-charcoal scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                    <ArrowUpRight size={32} />
                  </div>
                </div>
                <div className="absolute top-8 left-8">
                  <span className="px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 text-white text-[10px] font-body font-bold uppercase tracking-widest">
                    {item.cat}
                  </span>
                </div>
              </Link>
              
              <div className="mt-10 flex justify-between items-end border-b border-white/10 pb-6">
                <div>
                  <h3 className="text-3xl md:text-5xl font-heading font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/30 font-body text-sm uppercase tracking-widest">{item.price}</p>
                </div>
                <Link 
                  href={`/shop/${item.id}`} 
                  className="text-accent text-[10px] font-body font-bold uppercase tracking-widest hover:translate-x-2 transition-transform"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}

          {/* End Slide */}
          <div className="shrink-0 w-[40vw] flex flex-col items-center justify-center text-center">
            <h3 className="text-5xl font-heading font-bold text-white mb-8">View the Entire Atelier</h3>
            <Link 
              href="/shop" 
              className="px-12 py-6 border border-accent text-accent font-body font-bold uppercase tracking-[0.2em] hover:bg-accent hover:text-charcoal transition-all"
            >
              Enter Shop
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
