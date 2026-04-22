"use client";

import { products } from "@/lib/products";
import ProductCard from "../shop/ProductCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FeaturedProducts() {
  const featured = products.filter((p) => p.isFeatured).slice(0, 6);

  return (
    <section className="py-32 bg-base">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-accent font-body text-sm uppercase tracking-[0.3em] mb-4 block">Selected Works</span>
            <h2 className="text-5xl md:text-6xl font-heading font-bold text-charcoal">
              Timeless <span className="text-accent italic">Pieces</span> for Your Spaces
            </h2>
          </div>
          <Link href="/shop" className="group flex items-center space-x-3 text-charcoal font-bold font-body hover:text-accent transition-colors">
            <span>EXPLORE FULL SHOP</span>
            <div className="w-8 h-8 rounded-full border border-charcoal/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300">
              <ArrowRight size={16} className="group-hover:text-white transition-colors" />
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
