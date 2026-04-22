"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface GalleryImage {
  id: number;
  src: string;
  cat: string;
  title: string;
}

const galleryImages: GalleryImage[] = [
  { id: 1, src: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=2080&auto=format&fit=crop", cat: "Wedding", title: "Forever After" },
  { id: 2, src: "https://images.unsplash.com/photo-1544411047-c491574abbde?q=80&w=2070&auto=format&fit=crop", cat: "Modern", title: "Abstract Depth" },
  { id: 3, src: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=2070&auto=format&fit=crop", cat: "Vintage", title: "Golden Era" },
  { id: 4, src: "https://images.unsplash.com/photo-1534349762230-e0cadf78f5db?q=80&w=2070&auto=format&fit=crop", cat: "Gift", title: "Personal Treasures" },
  { id: 5, src: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1974&auto=format&fit=crop", cat: "Gallery", title: "Exhibition Profile" },
  { id: 6, src: "https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?q=80&w=2070&auto=format&fit=crop", cat: "Custom", title: "Walnut Bespoke" },
];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const tabs = ["All", "Wedding", "Modern", "Vintage", "Custom"];

  const filtered = activeTab === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.cat === activeTab);

  return (
    <div className="pt-40 pb-20 bg-base min-h-screen">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-32 max-w-4xl">
          <span className="text-accent font-body text-xs uppercase tracking-[0.6em] mb-6 block">Perspective — Gallery</span>
          <h1 className="text-7xl md:text-9xl font-heading font-bold text-charcoal leading-[0.8] mb-12">
            The <span className="text-accent italic">Visual</span> Archive.
          </h1>
          
          <div className="flex flex-wrap gap-4 border-b border-charcoal/10 pb-12">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 text-[10px] font-body font-bold uppercase tracking-widest transition-all ${
                  activeTab === tab ? "bg-charcoal text-white" : "text-charcoal/30 hover:text-charcoal"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Staggered Grid */}
        <div className="asymmetric-grid grid grid-cols-1 md:grid-cols-12 gap-y-32 gap-x-12">
          {filtered.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative cursor-pointer group ${
                i % 3 === 0 ? "md:col-span-8 md:aspect-[16/9]" : "md:col-span-4 md:aspect-[3/4]"
              } ${i % 2 !== 0 ? "md:mt-20" : ""}`}
              onClick={() => setSelectedImage(img)}
            >
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[2s] cubic-bezier(0.23, 1, 0.32, 1) group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-12">
                  <span className="text-accent text-[10px] font-body font-bold uppercase tracking-[0.3em] mb-4 block">{img.cat}</span>
                  <h4 className="text-4xl font-heading font-bold text-white mb-6">{img.title}</h4>
                  <div className="flex items-center space-x-4 text-white text-[10px] font-body font-bold uppercase tracking-widest">
                    <span>View Project</span>
                    <ArrowUpRight size={14} className="text-accent" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-charcoal/98 backdrop-blur-3xl flex items-center justify-center p-6 md:p-20"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-10 right-10 text-white/40 hover:text-white transition-colors">
              <X size={48} strokeWidth={1} />
            </button>
            <div className="relative w-full h-full flex items-center justify-center" onClick={e => e.stopPropagation()}>
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative max-w-6xl max-h-full flex flex-col lg:flex-row bg-white overflow-hidden shadow-2xl"
              >
                <div className="relative lg:w-2/3 h-[50vh] lg:h-[80vh]">
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-12 lg:w-1/3 flex flex-col justify-center space-y-12 bg-base">
                  <div>
                    <span className="text-accent text-xs font-body font-bold uppercase tracking-[0.4em] mb-6 block">{selectedImage.cat} — 2024</span>
                    <h3 className="text-5xl font-heading font-bold text-charcoal mb-8 leading-tight">{selectedImage.title}</h3>
                    <p className="text-charcoal/40 font-body text-lg leading-relaxed">
                      This project highlights our commitment to museum-grade preservation and bespoke aesthetic integration.
                    </p>
                  </div>
                  <button className="w-full py-6 bg-charcoal text-white font-body font-bold text-xs uppercase tracking-widest hover:bg-accent hover:text-charcoal transition-all">
                    INQUIRE ABOUT PIECE
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
