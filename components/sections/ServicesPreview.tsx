"use client";

import { motion } from "framer-motion";
import { Camera, Paintbrush, Gift, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Pre-Made Frames",
    description: "Curated collection of designer frames in various styles, from classic oak to modern minimalist profiles.",
    icon: Camera,
    color: "bg-sage/10",
    iconColor: "text-sage",
    link: "/shop?cat=premade",
    tags: ["Wood", "Metal", "Glass"],
  },
  {
    title: "Custom Frames",
    description: "Bespoke framing solutions tailored to your specific art, size, and style preferences. Your vision, our craft.",
    icon: Paintbrush,
    color: "bg-accent/10",
    iconColor: "text-accent",
    link: "/shop?cat=custom",
    tags: ["Handmade", "Engraving", "Unique"],
  },
  {
    title: "Gift Articles",
    description: "Thoughtfully designed gift items, from personalized photo boxes to artistic home decor pieces.",
    icon: Gift,
    color: "bg-rose/10",
    iconColor: "text-rose",
    link: "/shop?cat=gift",
    tags: ["Custom", "Luxury", "Gift"],
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-32 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-accent font-body text-sm uppercase tracking-[0.3em] mb-4 block">Our Expertise</span>
            <h2 className="text-5xl md:text-6xl font-heading font-bold text-charcoal">
              Services Tailored to Your <span className="text-accent italic">Creative</span> Needs
            </h2>
          </div>
          <Link href="/services" className="group flex items-center space-x-3 text-charcoal font-bold font-body hover:text-accent transition-colors">
            <span>VIEW ALL SERVICES</span>
            <div className="w-8 h-8 rounded-full border border-charcoal/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300">
              <ArrowRight size={16} className="group-hover:text-white transition-colors" />
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className={`group p-10 rounded-premium transition-all duration-500 hover:shadow-premium relative overflow-hidden flex flex-col h-full ${service.color}`}
            >
              <div className={`w-16 h-16 rounded-2xl ${service.iconColor} bg-white flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500`}>
                <service.icon size={32} />
              </div>
              
              <h3 className="text-2xl font-heading font-bold text-charcoal mb-4 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-charcoal/60 font-body mb-8 flex-grow">
                {service.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {service.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-white/50 text-[10px] font-body uppercase tracking-widest text-charcoal/40 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <Link href={service.link} className="flex items-center space-x-2 text-charcoal font-bold text-sm group-hover:translate-x-2 transition-transform duration-300">
                <span>EXPLORE CATEGORY</span>
                <ArrowRight size={16} className="text-accent" />
              </Link>

              {/* Decorative Background Pattern */}
              <div className="absolute -bottom-10 -right-10 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500">
                <service.icon size={200} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
