"use client";

import { use, useState } from "react";
import Image from "next/image";
import { products } from "@/lib/products";
import { useCartStore } from "@/lib/store";
import { toast } from "sonner";
import { ArrowLeft, ShoppingCart, MessageCircle, Heart, Share2, ShieldCheck, Truck, RotateCcw } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const product = products.find((p) => p.id === resolvedParams.id);
  const { addItem } = useCartStore();

  const [selectedSize, setSelectedSize] = useState(product?.size?.[0] || "N/A");
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || "N/A");
  const [quantity, setQuantity] = useState(1);
  const [customText, setCustomText] = useState("");

  if (!product) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">Product not found</h2>
          <Link href="/shop" className="text-accent font-bold hover:underline">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem({
      id: `${product.id}-${selectedSize}-${selectedColor}`,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity,
      size: selectedSize,
      customization: { text: customText },
    });
    toast.success(`${product.name} added to cart`);
  };

  const handleWhatsAppOrder = () => {
    const message = `🛍️ *Inquiry - FrameMedia*

I'm interested in:
• *${product.name}*
📏 Size: ${selectedSize}
🎨 Color: ${selectedColor}
🔢 Qty: ${quantity}
📝 Custom Text: ${customText || "None"}

Please provide more details! 🙏`;

    window.open(`https://wa.me/911234567890?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="pt-32 pb-20 bg-base">
      <div className="container mx-auto px-6">
        <Link href="/shop" className="inline-flex items-center space-x-2 text-charcoal/40 hover:text-accent transition-colors mb-12 group">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs font-body font-bold uppercase tracking-widest">Back to Collection</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Image Section */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative aspect-[4/5] rounded-premium overflow-hidden shadow-premium"
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </motion.div>
            
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square rounded-xl overflow-hidden border border-charcoal/5 cursor-pointer hover:border-accent transition-colors">
                  <Image src={product.image} alt={product.name} width={150} height={150} className="object-cover h-full w-full opacity-60 hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>

          {/* Details Section */}
          <div className="space-y-10">
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <span className="px-3 py-1 bg-accent/10 text-accent text-[10px] font-body font-bold uppercase tracking-[0.2em] rounded-full">
                  {product.category}
                </span>
                <span className="text-charcoal/20 text-xs font-body tracking-[0.1em]">SKU: FM-{product.id}0023</span>
              </div>
              <h1 className="text-5xl font-heading font-bold text-charcoal mb-4">{product.name}</h1>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-body font-bold text-accent">₹{product.price}</span>
                <div className="flex items-center space-x-4">
                  <button className="p-3 border border-charcoal/5 rounded-full hover:bg-red-50 hover:text-red-500 transition-all"><Heart size={20} /></button>
                  <button className="p-3 border border-charcoal/5 rounded-full hover:bg-blue-50 hover:text-blue-500 transition-all"><Share2 size={20} /></button>
                </div>
              </div>
            </div>

            <p className="text-charcoal/60 text-lg leading-relaxed font-body">
              {product.description} This premium piece is handcrafted using sustainably sourced materials, ensuring both durability and timeless aesthetic appeal for your cherished memories.
            </p>

            {/* Selectors */}
            <div className="space-y-8">
              {product.size && (
                <div>
                  <h4 className="text-sm font-body font-bold uppercase tracking-widest text-charcoal/40 mb-4">Select Size</h4>
                  <div className="flex flex-wrap gap-3">
                    {product.size.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-6 py-2 border rounded-full text-xs font-body font-bold transition-all ${
                          selectedSize === size ? "bg-charcoal text-white border-charcoal" : "border-charcoal/10 text-charcoal hover:border-accent"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {product.colors && (
                <div>
                  <h4 className="text-sm font-body font-bold uppercase tracking-widest text-charcoal/40 mb-4">Color/Finish</h4>
                  <div className="flex flex-wrap gap-3">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-6 py-2 border rounded-full text-xs font-body font-bold transition-all ${
                          selectedColor === color ? "bg-charcoal text-white border-charcoal" : "border-charcoal/10 text-charcoal hover:border-accent"
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {product.category === "custom" && (
                <div>
                  <h4 className="text-sm font-body font-bold uppercase tracking-widest text-charcoal/40 mb-4">Personalization (Optional)</h4>
                  <input
                    type="text"
                    placeholder="Enter engraving text..."
                    value={customText}
                    onChange={(e) => setCustomText(e.target.value)}
                    className="w-full px-6 py-4 bg-white border border-charcoal/5 rounded-2xl focus:outline-none focus:border-accent"
                  />
                </div>
              )}

              <div className="flex items-center space-x-6">
                <div className="flex items-center border border-charcoal/5 rounded-full overflow-hidden bg-white">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2 hover:bg-charcoal/5">-</button>
                  <span className="px-4 font-body font-bold">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 hover:bg-charcoal/5">+</button>
                </div>
                <div className="text-xs font-body text-charcoal/40">Only 5 left in stock!</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                onClick={handleAddToCart}
                className="flex-1 px-10 py-5 bg-charcoal text-white font-body font-bold rounded-none hover:bg-accent transition-all duration-500 flex items-center justify-center space-x-3"
              >
                <ShoppingCart size={20} />
                <span>ADD TO CART</span>
              </button>
              <button
                onClick={handleWhatsAppOrder}
                className="flex-1 px-10 py-5 border-2 border-accent text-accent font-body font-bold rounded-none hover:bg-accent hover:text-white transition-all duration-500 flex items-center justify-center space-x-3"
              >
                <MessageCircle size={20} />
                <span>ORDER ON WHATSAPP</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-10 border-t border-charcoal/5">
              <div className="flex flex-col items-center text-center space-y-2">
                <ShieldCheck size={20} className="text-accent" />
                <span className="text-[10px] font-body font-bold uppercase tracking-widest">Secure Order</span>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <Truck size={20} className="text-accent" />
                <span className="text-[10px] font-body font-bold uppercase tracking-widest">Safe Delivery</span>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <RotateCcw size={20} className="text-accent" />
                <span className="text-[10px] font-body font-bold uppercase tracking-widest">Easy Returns</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
