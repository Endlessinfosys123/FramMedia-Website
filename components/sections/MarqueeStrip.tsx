"use client";

import { motion } from "framer-motion";

const values = [
  "Crafted with Love",
  "Since 2020",
  "10,000+ Frames Delivered",
  "Premium Quality",
  "Custom Designs",
  "Eco-Friendly Materials",
  "Global Shipping",
];

export default function MarqueeStrip() {
  return (
    <div className="bg-accent py-4 overflow-hidden border-y border-charcoal/5">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
          className="flex space-x-12 items-center"
        >
          {[...values, ...values].map((value, i) => (
            <div key={i} className="flex items-center space-x-12">
              <span className="text-base font-heading font-bold text-white uppercase tracking-widest flex items-center">
                {value}
                <span className="ml-12 w-2 h-2 rounded-full bg-white/40" />
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
