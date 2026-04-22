"use client";

import Image from "next/image";
import Link from "next/link";
import { Plus, ArrowUpRight } from "lucide-react";
import { useCartStore } from "@/lib/store";
import { toast } from "sonner";

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    category: string;
    image: string;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCartStore();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem({ ...product, quantity: 1 });
    toast.success(`${product.name} added to atelier cart.`);
  };

  return (
    <Link href={`/shop/${product.id}`} className="group block relative">
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-linen mb-8">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-[1.5s] cubic-bezier(0.23, 1, 0.32, 1) group-hover:scale-110"
        />
        
        {/* Overlay Lens */}
        <div className="absolute inset-0 bg-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-charcoal scale-0 group-hover:scale-100 transition-transform duration-500">
            <ArrowUpRight size={24} />
          </div>
        </div>

        {/* Quick Add Button */}
        <button
          onClick={handleAddToCart}
          className="absolute bottom-0 right-0 w-16 h-16 bg-charcoal text-white flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 hover:bg-accent hover:text-charcoal"
        >
          <Plus size={24} />
        </button>

        <div className="absolute top-6 left-6">
          <span className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-charcoal/40 bg-white/50 backdrop-blur-md px-3 py-1">
            {product.category}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="space-y-3">
        <div className="flex justify-between items-start">
          <h3 className="text-2xl font-heading font-bold text-charcoal leading-tight group-hover:text-accent transition-colors duration-500">
            {product.name}
          </h3>
          <span className="text-sm font-body font-bold text-charcoal/30">
            ₹{product.price.toLocaleString()}
          </span>
        </div>
        <div className="h-[1px] w-0 group-hover:w-full bg-accent transition-all duration-700" />
        <p className="text-[10px] font-body font-bold uppercase tracking-widest text-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          View Masterpiece Details
        </p>
      </div>
    </Link>
  );
}
