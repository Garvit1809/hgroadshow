"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import SponsorMarquee from '@/components/SponsorMarquee';

interface HeroProps {
  index: number;
  words: string[];
}

export default function Hero({ index, words }: HeroProps) {
  const currentWord = words[index];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section className="relative w-full h-screen min-h-[800px] flex items-end pb-24 md:pb-32 -mt-52 sm:-mt-40 md:-mt-44 overflow-hidden">
      {/* Full-bleed Background Video */}
      <div className="absolute inset-0 w-full h-full -z-10 bg-black">
        <video
          src="/hero-section-v2.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-90"
        />
        {/* Cinematic Gradients: Darker at the bottom and left for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />
      </div>

      {/* Decorative ambient glow */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#1a8a5e]/20 rounded-full blur-[120px] pointer-events-none translate-y-1/2 -translate-x-1/4"></div>

      <div className="w-full max-w-[1600px] mx-auto px-8 md:px-12 lg:px-20 relative z-10">
        {/* Content Container - Pushed to Bottom Left */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-4xl flex flex-col items-start gap-5 pt-32"
        >
          {/* Date Tag */}
          <motion.div variants={itemVariants} className="flex items-center gap-4">
            <div className="h-[1px] w-8 sm:w-12 bg-emerald-400"></div>
            <span className="text-emerald-400 font-mono text-[10px] sm:text-xs tracking-[0.3em] uppercase font-bold drop-shadow-md">
              04th Oct — 13th Dec 2026
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-bold tracking-tighter leading-[1.05] uppercase text-white drop-shadow-2xl">
            <span className="block mb-2">10 CITIES. 20 BRANDS.</span>
            <span className="block mb-1 sm:mb-2">ONE VISION:</span>
            <div className="block overflow-hidden pb-1 sm:pb-2">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWord}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                  className="block text-emerald-400 italic font-light drop-shadow-[0_0_15px_rgba(52,211,153,0.4)]"
                >
                  {currentWord}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.h1>

          {/* Subtitle / Description */}
          <motion.p variants={itemVariants} className="text-gray-200 text-xs sm:text-sm md:text-base lg:text-lg font-medium tracking-wide leading-relaxed max-w-xl drop-shadow-lg border-l-2 border-white/20 pl-4 mt-2">
            Together, we can make the world a better place by creating <br className="hidden sm:block" />
            a strong and sustainable energy infrastructure for all of Haryana.
          </motion.p>

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 sm:gap-4 pt-6 w-full">
            <Link href="/sponsors" className="px-6 py-3 sm:px-8 sm:py-4 bg-emerald-500 hover:bg-emerald-400 text-white font-bold rounded-full transition-all hover:scale-105 hover:-translate-y-1 shadow-[0_10px_30px_rgba(16,185,129,0.3)] flex items-center gap-2 text-xs sm:text-sm uppercase tracking-widest">
              Reserve Your Slot
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link href="/about" className="px-6 py-3 sm:px-8 sm:py-4 bg-transparent hover:bg-white/10 text-white font-bold rounded-full border border-white/30 hover:border-white transition-all text-xs sm:text-sm uppercase tracking-widest backdrop-blur-sm">
              Discover More
            </Link>
          </motion.div>

          {/* Sponsor Logo Marquee */}
          <motion.div variants={itemVariants} className="w-full pt-6 sm:pt-8">
            <SponsorMarquee />
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 right-6 lg:bottom-12 lg:right-16 flex flex-col items-center gap-3 z-10"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-white/0 via-white/50 to-white/0">
          <motion.div 
            className="w-[1px] h-1/2 bg-emerald-400"
            animate={{ y: [0, 32, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
        </div>
        <span className="text-[10px] text-white/50 font-mono uppercase tracking-widest rotate-180" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
      </motion.div>
    </section>
  );
}
