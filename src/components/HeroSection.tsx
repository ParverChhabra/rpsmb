"use client";

import { ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=2070')`,
          y,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-20">
        <motion.div 
          className="max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Tagline */}
          <motion.p 
            className="text-gold-light font-medium tracking-widest uppercase text-sm mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Established 1985 • Nurturing Minds Since Four Decades
          </motion.p>

          {/* Main Headline */}
          <motion.h1 
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-cream leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Building Character,
            <br />
            <span className="text-gold">Inspiring Excellence</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            className="text-cream/80 text-lg md:text-xl max-w-xl mb-10 font-light leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            At Radiant Public School, we believe in nurturing young minds with 
            values, knowledge, and the confidence to shape a better tomorrow.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <a href="#about" className="btn-premium">
              Discover Our Legacy
            </a>
            <a
              href="#notices"
              className="px-8 py-3 rounded border-2 border-cream/30 text-cream hover:bg-cream/10 transition-all duration-300 font-medium"
            >
              Apply for Admission
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        style={{ opacity }}
      >
        <a href="#about" className="text-cream/60 hover:text-cream transition-colors">
          <ChevronDown size={32} />
        </a>
      </motion.div>
    </section>
  );
};
