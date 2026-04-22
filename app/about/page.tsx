"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { Users, Camera, ShieldCheck } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  { year: "2020", title: "The Beginning", description: "Alex Frame starts a small workshop in his garage with a mission to redefine memory preservation." },
  { year: "2021", title: "First 1000 Frames", description: "The community embraces our craft, reaching a major milestone within just 12 months." },
  { year: "2022", title: "Customization Launch", description: "We introduced our bespoke framing service, allowing clients to co-create their frames." },
  { year: "2023", title: "Global Recognition", description: "FrameMedia wins the 'Artisan of the Year' award for innovative woodwork design." },
  { year: "2024", title: "Expanding Horizons", description: "Moving to a larger studio and launching our premium gift articles collection." },
];

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline animation
      milestones.forEach((_, i) => {
        gsap.from(`.milestone-${i}`, {
          scrollTrigger: {
            trigger: `.milestone-${i}`,
            start: "top 80%",
          },
          opacity: 0,
          x: i % 2 === 0 ? -50 : 50,
          duration: 1,
          ease: "power3.out",
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-base overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center pt-20">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=2070&auto=format&fit=crop"
            alt="About FrameMedia"
            fill
            className="object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-base via-transparent to-base" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <span className="text-accent font-body text-sm uppercase tracking-[0.4em] mb-6 block">Our Story</span>
          <h1 className="text-6xl md:text-8xl font-heading font-bold text-charcoal mb-8">
            Beyond the <span className="text-accent italic">Canvas</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-charcoal/60 font-body leading-relaxed">
            Discover the passion, precision, and soul behind every piece we create. We don&apos;t just build frames; we build legacies.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square rounded-premium overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=2080&auto=format&fit=crop"
                alt="Vision"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-accent/10" />
            </motion.div>
            <div className="space-y-8">
              <h2 className="text-5xl font-heading font-bold text-charcoal">The Mission to <span className="text-accent">Preserve</span></h2>
              <p className="text-lg text-charcoal/60 leading-relaxed font-body">
                Our mission is to empower individuals to immortalize their life&apos;s most precious chapters through artistic framing that respects both the subject and the environment.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Quality Obsessed", desc: "We use only archival-grade materials that stand the test of time.", icon: ShieldCheck },
                  { title: "Client First", desc: "Every frame is a collaboration between our craft and your story.", icon: Users },
                  { title: "Artistic Vision", desc: "Blending traditional techniques with modern aesthetic sensibilities.", icon: Camera },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 text-accent">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-charcoal">{item.title}</h4>
                      <p className="text-sm text-charcoal/40 font-body">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32 bg-charcoal text-white relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-heading font-bold mb-4">Our Journey</h2>
            <div className="w-20 h-[1px] bg-accent mx-auto" />
          </div>

          <div className="relative max-w-4xl mx-auto border-l border-white/10 pl-10 space-y-20 py-10">
            {milestones.map((m, i) => (
              <div key={i} className={`milestone-${i} relative`}>
                <div className="absolute -left-[51px] top-0 w-5 h-5 rounded-full bg-accent border-4 border-charcoal" />
                <span className="text-accent font-heading text-4xl font-bold mb-2 block">{m.year}</span>
                <h3 className="text-2xl font-heading font-bold mb-4">{m.title}</h3>
                <p className="text-white/40 font-body leading-relaxed max-w-lg">{m.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Counters */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: "Years of Craft", value: 5, suffix: "+" },
              { label: "Frames Delivered", value: 10000, suffix: "+" },
              { label: "Happy Clients", value: 4500, suffix: "+" },
              { label: "Awards Won", value: 12, suffix: "" },
            ].map((stat, i) => (
              <div key={i}>
                <h3 className="text-6xl font-heading font-bold text-accent mb-2">
                  <CountUp end={stat.value} duration={3} enableScrollSpy scrollSpyOnce />
                  {stat.suffix}
                </h3>
                <p className="text-xs font-body uppercase tracking-[0.2em] text-charcoal/40">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
