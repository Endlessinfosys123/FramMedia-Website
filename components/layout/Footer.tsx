import Link from "next/link";
import { Camera, MessageCircle, Mail, Phone, MapPin, Globe } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <span className="text-3xl font-heading font-bold tracking-tight text-white">
                FRAME<span className="text-accent">MEDIA</span>
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Every frame holds a memory. We build the frame, you fill it with life. Crafted with premium materials and artistic vision since 2020.
            </p>
            <div className="flex space-x-4">
              {[Camera, MessageCircle, Globe].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-heading font-semibold mb-6 text-accent">Quick Links</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link href="/shop" className="hover:text-white transition-colors">Premium Shop</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Our Services</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition-colors">Client Gallery</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Founder Story</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-heading font-semibold mb-6 text-accent">Categories</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link href="/shop?cat=premade" className="hover:text-white transition-colors">Photo Frames</Link></li>
              <li><Link href="/shop?cat=custom" className="hover:text-white transition-colors">Custom Frames</Link></li>
              <li><Link href="/shop?cat=gift" className="hover:text-white transition-colors">Gift Articles</Link></li>
              <li><Link href="/shop?cat=corporate" className="hover:text-white transition-colors">Corporate Gifts</Link></li>
              <li><Link href="/shop?cat=wedding" className="hover:text-white transition-colors">Wedding Special</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-heading font-semibold mb-6 text-accent">Get in Touch</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-accent shrink-0" />
                <span>123 Art Avenue, Design District,<br />Creative City, IN 400001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-accent shrink-0" />
                <span>+91 123 456 7890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-accent shrink-0" />
                <span>hello@framemedia.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="h-[1px] w-full bg-white/5 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-white/40 uppercase tracking-widest">
          <p>© {currentYear} FrameMedia. All Rights Reserved.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
