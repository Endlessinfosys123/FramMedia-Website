"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Frame, Gift, Users, Palette, ArrowRight } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: "01",
    title: "Museum-Grade Framing",
    desc: "Archival preservation using acid-free materials and UV-protection glass. The gold standard for art collectors.",
    icon: Frame,
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "02",
    title: "Bespoke Customization",
    desc: "Hand-finished woods, custom gold-leafing, and unique profile designs tailored to your specific artwork.",
    icon: Palette,
    image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=2080&auto=format&fit=crop"
  },
  {
    id: "03",
    title: "Artisan Gift Articles",
    desc: "Curated collection of handcrafted home decor and gift items that embody our philosophy of timeless design.",
    icon: Gift,
    image: "https://images.unsplash.com/photo-1534349762230-e0cadf78f5db?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "04",
    title: "Curatorial Consultation",
    desc: "Personalized advice on layout, styling, and preservation for private collections and corporate spaces.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1974&auto=format&fit=crop"
  }
];

export default function ServicesPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      services.forEach((_, i) => {
        gsap.from(`.service-row-${i}`, {
          scrollTrigger: {
            trigger: `.service-row-${i}`,
            start: "top 80%",
          },
          y: 100,
          opacity: 0,
          duration: 1.2,
          ease: "power4.out"
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="pt-40 pb-20 bg-base min-h-screen">
      <div className="container mx-auto px-6">
        {/* Hero */}
        <div className="mb-40 max-w-4xl">
          <span className="text-accent font-body text-xs uppercase tracking-[0.6em] mb-6 block">Capabilities — Services</span>
          <h1 className="text-7xl md:text-9xl font-heading font-bold text-charcoal leading-[0.8] mb-12">
            The <span className="text-accent italic">Craft</span> Catalog.
          </h1>
          <p className="text-charcoal/40 font-body text-xl max-w-2xl leading-relaxed">
            From technical preservation to aesthetic direction, we provide a holistic suite of services for those who value memory and art.
          </p>
        </div>

        {/* Services Rows */}
        <div className="space-y-40">
          {services.map((service, i) => (
            <div 
              key={service.id} 
              className={`service-row-${i} flex flex-col lg:flex-row items-center gap-20 ${
                i % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image Side */}
              <div className="lg:w-1/2 relative aspect-[16/10] overflow-hidden group">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill 
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-[1.5s] scale-110 group-hover:scale-100" 
                />
                <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-colors duration-700" />
              </div>

              {/* Text Side */}
              <div className="lg:w-1/2 space-y-10">
                <div className="flex items-center space-x-6">
                  <span className="text-accent font-heading text-6xl font-bold opacity-30">{service.id}</span>
                  <div className="w-12 h-[1px] bg-accent" />
                  <service.icon className="text-accent" size={32} strokeWidth={1} />
                </div>
                
                <h2 className="text-5xl md:text-7xl font-heading font-bold text-charcoal leading-tight">
                  {service.title.split(' ').map((word, idx) => (
                    <span key={idx} className={idx === 1 ? "text-accent italic block" : ""}>{word} </span>
                  ))}
                </h2>
                
                <p className="text-charcoal/50 font-body text-lg leading-relaxed max-w-md">
                  {service.desc}
                </p>

                <Link 
                  href="/contact" 
                  className="inline-flex items-center space-x-4 text-charcoal font-body font-bold text-xs uppercase tracking-widest hover:text-accent transition-colors group"
                >
                  <span>Inquire about service</span>
                  <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
