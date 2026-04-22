"use client";

import { useState, useMemo } from "react";
import { products } from "@/lib/products";
import ProductCard from "@/components/shop/ProductCard";
import { Search } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["all", "classic", "modern", "luxury", "gift"];

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory = activeCategory === "all" || p.category === activeCategory;
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="pt-40 pb-20 bg-base min-h-screen">
      {/* Header Section */}
      <div className="container mx-auto px-6 mb-20">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
          <div className="max-w-2xl">
            <span className="text-accent font-body text-xs uppercase tracking-[0.6em] mb-6 block">Collection — Atelier</span>
            <h1 className="text-7xl md:text-9xl font-heading font-bold text-charcoal leading-[0.8] mb-8">
              Curated <span className="text-accent italic">Craft.</span>
            </h1>
            <p className="text-charcoal/40 font-body text-lg max-w-md">
              Each piece is a dialogue between raw material and artistic vision. Explore our current selections.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 lg:mb-4">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/30 group-hover:text-accent transition-colors" size={18} />
              <input
                type="text"
                placeholder="Search pieces..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-6 py-4 bg-white border border-charcoal/5 rounded-none font-body text-xs uppercase tracking-widest focus:outline-none focus:border-accent transition-all w-full sm:w-64"
              />
            </div>
            
            <div className="flex bg-white p-1 border border-charcoal/5 shadow-sm">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-3 text-[10px] font-body font-bold uppercase tracking-widest transition-all ${
                    activeCategory === cat ? "bg-charcoal text-white" : "text-charcoal/40 hover:text-charcoal"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-12 gap-y-20">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, i) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="py-40 text-center">
            <h3 className="text-3xl font-heading font-medium text-charcoal/20">No matching pieces found.</h3>
          </div>
        )}
      </div>
    </div>
  );
}
