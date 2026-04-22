"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pt-32 pb-20 bg-base min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-accent font-body text-sm uppercase tracking-[0.4em] mb-4 block">Get in Touch</span>
          <h1 className="text-6xl md:text-8xl font-heading font-bold text-charcoal">
            Let&apos;s Start <span className="text-accent italic">Creating</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Info Column */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-8">
              <h2 className="text-4xl font-heading font-bold text-charcoal">Contact Details</h2>
              <p className="text-charcoal/60 font-body text-lg leading-relaxed">
                Have a specific project in mind? Or just want to say hello? We&apos;d love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: Phone, title: "Call Us", detail: "+91 123 456 7890", sub: "Mon-Sat, 10am-7pm" },
                { icon: Mail, title: "Email Us", detail: "hello@framemedia.com", sub: "Response within 24hrs" },
                { icon: MapPin, title: "Visit Studio", detail: "123 Art Avenue, Design District, Creative City, IN", sub: "By Appointment Only" },
                { icon: Clock, title: "Business Hours", detail: "10:00 AM - 07:00 PM", sub: "Sunday Closed" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 p-8 bg-white rounded-premium shadow-warm border border-charcoal/5"
                >
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-xs font-body font-bold uppercase tracking-widest text-charcoal/40 mb-1">{item.title}</h4>
                    <p className="text-xl font-heading font-bold text-charcoal mb-1">{item.detail}</p>
                    <p className="text-xs font-body text-charcoal/40 italic">{item.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="bg-charcoal p-10 md:p-16 rounded-premium shadow-2xl relative overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-accent/20 blur-[100px] rounded-full" />
              
              <div className="relative z-10 space-y-8">
                <h3 className="text-3xl font-heading font-bold text-white mb-10">Send a Message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-none text-white focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-none text-white focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <input
                      type="text"
                      placeholder="Subject"
                      className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-none text-white focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <textarea
                      placeholder="How can we help you?"
                      rows={6}
                      className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-none text-white focus:outline-none focus:border-accent transition-colors resize-none"
                    />
                  </div>
                  <button className="w-full py-5 bg-accent text-white font-body font-bold rounded-none hover:bg-white hover:text-charcoal transition-all duration-500 flex items-center justify-center space-x-4 group">
                    <span>SEND MESSAGE</span>
                    <Send size={20} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                  </button>
                </form>

                <div className="pt-10 flex items-center justify-center space-x-8">
                  <a href="https://wa.me/911234567890" target="_blank" className="flex items-center space-x-2 text-white/40 hover:text-accent transition-colors">
                    <MessageCircle size={20} />
                    <span className="text-[10px] font-body font-bold uppercase tracking-[0.2em]">Quick WhatsApp Chat</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Map Embed Section */}
      <section className="mt-32 h-[500px] relative">
        <div className="absolute inset-0 bg-charcoal/10" />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609904322!2d72.74109783935546!3d19.08219783958221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "grayscale(100%) invert(90%) contrast(90%)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
}
