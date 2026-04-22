"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, Menu, X, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCartStore } from "@/lib/store";

const navLinks = [
  { name: "Shop", href: "/shop" },
  { name: "Gallery", href: "/gallery" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { items } = useCartStore();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 px-6 md:px-12 ${
          isScrolled ? "py-4" : "py-10"
        }`}
      >
        <div className={`container mx-auto flex items-center justify-between transition-all duration-500 ${
          isScrolled ? "bg-charcoal/80 backdrop-blur-2xl px-8 py-4 border border-white/5 shadow-2xl" : "bg-transparent"
        }`}>
          {/* Logo */}
          <Link href="/" className="group relative overflow-hidden">
            <span className="text-xl font-heading font-bold text-white tracking-[0.2em] uppercase flex flex-col">
              <span>FRAME</span>
              <span className="text-[10px] text-accent tracking-[0.6em] mt-[-4px]">MEDIA</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="group relative"
              >
                <span className={`text-[10px] font-body font-bold uppercase tracking-[0.3em] transition-colors duration-500 ${
                  pathname === link.href ? "text-accent" : "text-white/60 group-hover:text-white"
                }`}>
                  {link.name}
                </span>
                <span className={`absolute -bottom-1 left-0 h-[1px] bg-accent transition-all duration-500 ${
                  pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-8 text-white/80">
            <button className="hover:text-accent transition-colors hidden md:block">
              <Search size={18} strokeWidth={1.5} />
            </button>
            <Link href="/checkout" className="group relative flex items-center space-x-2">
              <div className="relative">
                <ShoppingBag size={18} strokeWidth={1.5} className="group-hover:text-accent transition-colors" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 w-4 h-4 bg-accent text-charcoal text-[8px] font-bold rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="text-[10px] font-body font-bold uppercase tracking-widest hidden sm:block">Cart</span>
            </Link>
            <button 
              className="lg:hidden hover:text-accent transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={20} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 z-[60] bg-charcoal flex flex-col p-12"
          >
            <button 
              className="self-end text-white/40 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            
            <div className="mt-20 space-y-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-5xl font-heading font-bold text-white hover:text-accent transition-colors block"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto pt-10 border-t border-white/5">
              <p className="text-white/20 text-xs uppercase tracking-widest mb-6">Contact Us</p>
              <h3 className="text-xl font-heading text-white">hello@framemedia.com</h3>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
