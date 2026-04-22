"use client";

import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="py-40 bg-base px-6 overflow-hidden">
      <div className="container mx-auto">
        <div className="relative bg-charcoal p-12 md:p-32 flex flex-col md:flex-row items-center justify-between overflow-hidden shadow-2xl">
          {/* Architectural Background Elements */}
          <div className="absolute top-0 right-0 w-[40%] h-full bg-accent/5 skew-x-[-20deg] translate-x-20" />
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
          
          <div className="relative z-10 max-w-2xl text-center md:text-left mb-12 md:mb-0">
            <span className="text-accent font-body text-xs uppercase tracking-[0.6em] mb-8 block">Inquiry — Project</span>
            <h2 className="text-5xl md:text-8xl font-heading font-bold text-white leading-[0.9] mb-10">
              Your vision, <span className="text-accent italic block mt-2">Our craft.</span>
            </h2>
            <p className="text-white/40 text-lg md:text-xl font-body max-w-md leading-relaxed">
              From museum exhibits to private collections, we bring your memories to life with unparalleled precision.
            </p>
          </div>

          <div className="relative z-10 flex flex-col gap-6 w-full md:w-auto">
            <Link 
              href="/shop" 
              className="px-12 py-6 bg-accent text-charcoal font-body font-bold text-xs uppercase tracking-widest hover:bg-white transition-all flex items-center justify-center space-x-4 group"
            >
              <span>Custom Consultation</span>
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </Link>
            
            <a 
              href="https://wa.me/911234567890" 
              className="px-12 py-6 border border-white/20 text-white font-body font-bold text-xs uppercase tracking-widest hover:bg-white/10 transition-all flex items-center justify-center space-x-4"
            >
              <MessageCircle size={18} />
              <span>WhatsApp Inquiries</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
