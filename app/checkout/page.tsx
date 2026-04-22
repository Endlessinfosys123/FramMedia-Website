"use client";

import { useState } from "react";
import { useCartStore } from "@/lib/store";
import { buildWhatsAppURL } from "@/lib/whatsapp";
import { ShoppingBag, ShieldCheck, MapPin, Phone, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function CheckoutPage() {
  const { items, total } = useCartStore();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    note: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = () => {
    if (!formData.name || !formData.phone || !formData.address) {
      alert("Please fill in all required fields.");
      return;
    }

    const whatsappURL = buildWhatsAppURL({
      ...formData,
      items,
      total: total(),
    });

    window.open(whatsappURL, "_blank");
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex items-center justify-center bg-base px-6">
        <div className="text-center max-w-md">
          <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <ShoppingBag size={40} className="text-accent" />
          </div>
          <h2 className="text-4xl font-heading font-bold text-charcoal mb-4">Your cart is empty</h2>
          <p className="text-charcoal/40 font-body mb-8">Looks like you haven&apos;t added any memories to your collection yet.</p>
          <Link href="/shop" className="inline-block px-10 py-4 bg-charcoal text-white font-body font-bold rounded-none hover:bg-accent transition-all duration-300">
            CONTINUE SHOPPING
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 bg-base min-h-screen">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <div className="flex items-center space-x-4 mb-12">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold font-body transition-colors ${step >= 1 ? "bg-accent text-white" : "bg-white text-charcoal/20"}`}>1</div>
              <div className={`h-[2px] w-12 transition-colors ${step >= 2 ? "bg-accent" : "bg-charcoal/10"}`} />
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold font-body transition-colors ${step >= 2 ? "bg-accent text-white" : "bg-white text-charcoal/20"}`}>2</div>
              <h2 className="ml-4 text-2xl font-heading font-bold text-charcoal">
                {step === 1 ? "Shipping Information" : "Review Your Order"}
              </h2>
            </div>

            <AnimatePresence mode="wait">
              {step === 1 ? (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="space-y-8 bg-white p-8 md:p-12 rounded-premium shadow-warm"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs font-body font-bold uppercase tracking-widest text-charcoal/40 flex items-center gap-2">
                        <User size={14} /> Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. John Doe"
                        className="w-full px-6 py-4 bg-base border border-charcoal/5 rounded-2xl focus:outline-none focus:border-accent"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-body font-bold uppercase tracking-widest text-charcoal/40 flex items-center gap-2">
                        <Phone size={14} /> Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full px-6 py-4 bg-base border border-charcoal/5 rounded-2xl focus:outline-none focus:border-accent"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-body font-bold uppercase tracking-widest text-charcoal/40 flex items-center gap-2">
                      <MapPin size={14} /> Delivery Address *
                    </label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Street, City, Pincode"
                      rows={4}
                      className="w-full px-6 py-4 bg-base border border-charcoal/5 rounded-2xl focus:outline-none focus:border-accent resize-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-body font-bold uppercase tracking-widest text-charcoal/40">Special Notes (Optional)</label>
                    <textarea
                      name="note"
                      value={formData.note}
                      onChange={handleInputChange}
                      placeholder="e.g. Gift wrap this item"
                      rows={2}
                      className="w-full px-6 py-4 bg-base border border-charcoal/5 rounded-2xl focus:outline-none focus:border-accent resize-none"
                    />
                  </div>
                  <button
                    onClick={() => setStep(2)}
                    disabled={!formData.name || !formData.phone || !formData.address}
                    className="w-full py-5 bg-charcoal text-white font-body font-bold rounded-none hover:bg-accent transition-all duration-500 disabled:opacity-50 disabled:hover:bg-charcoal"
                  >
                    CONTINUE TO REVIEW
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="space-y-8"
                >
                  <div className="bg-white p-8 rounded-premium shadow-warm">
                    <h3 className="text-lg font-heading font-bold mb-6">Order Details</h3>
                    <div className="space-y-6">
                      {items.map((item) => (
                        <div key={item.id} className="flex items-center gap-6 pb-6 border-b border-charcoal/5 last:border-0 last:pb-0">
                          <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0">
                            <Image src={item.image} alt={item.name} fill className="object-cover" />
                          </div>
                          <div className="flex-grow">
                            <h4 className="font-heading font-bold text-charcoal">{item.name}</h4>
                            <p className="text-xs font-body text-charcoal/40 uppercase tracking-widest">
                              Size: {item.size || "N/A"} | Qty: {item.quantity}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="font-body font-bold text-accent">₹{item.price * item.quantity}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-accent/5 p-8 rounded-premium border border-accent/10">
                    <h3 className="text-lg font-heading font-bold mb-4">Delivery To</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
                      <div>
                        <p className="text-charcoal/40 font-bold uppercase tracking-widest text-[10px] mb-1">Customer</p>
                        <p className="font-body font-bold">{formData.name}</p>
                        <p className="text-charcoal/60">{formData.phone}</p>
                      </div>
                      <div>
                        <p className="text-charcoal/40 font-bold uppercase tracking-widest text-[10px] mb-1">Address</p>
                        <p className="text-charcoal/60 leading-relaxed">{formData.address}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={() => setStep(1)}
                      className="px-8 py-5 border border-charcoal/10 text-charcoal font-body font-bold rounded-none hover:bg-charcoal hover:text-white transition-all duration-300"
                    >
                      EDIT INFO
                    </button>
                    <button
                      onClick={handlePlaceOrder}
                      className="flex-grow py-5 bg-accent text-white font-body font-bold rounded-none hover:bg-charcoal transition-all duration-500 shadow-lg shadow-accent/20"
                    >
                      PLACE ORDER VIA WHATSAPP
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Sidebar Summary */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-8">
              <div className="bg-white p-8 rounded-premium shadow-warm">
                <h3 className="text-xl font-heading font-bold mb-8">Summary</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-charcoal/60">
                    <span>Subtotal</span>
                    <span>₹{total()}</span>
                  </div>
                  <div className="flex justify-between text-charcoal/60">
                    <span>Shipping</span>
                    <span className="text-green-600 font-bold">FREE</span>
                  </div>
                  <div className="h-[1px] w-full bg-charcoal/5 my-4" />
                  <div className="flex justify-between text-xl font-heading font-bold text-charcoal">
                    <span>Total</span>
                    <span>₹{total()}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-green-50 text-green-700 rounded-xl text-xs font-body font-bold uppercase tracking-widest">
                    <ShieldCheck size={20} />
                    Verified WhatsApp Checkout
                  </div>
                  <p className="text-[10px] text-charcoal/30 text-center font-body">
                    By clicking &quot;Place Order&quot;, you will be redirected to WhatsApp to confirm your order details and payment with our team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
