"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const WindmillMascot = () => (
  <svg 
    viewBox="60 15 180 225" 
    className="w-full h-full drop-shadow-[0_8px_20px_rgba(26,138,94,0.3)]"
  >
    {/* Windmill Tower */}
    <polygon 
      points="130,230 170,230 160,110 140,110"
      fill="#D1D5DB"
      stroke="#6B7280"
      strokeWidth="3"
    
    />

    {/* Door */}
    <rect 
      x="142" 
      y="190" 
      width="16" 
      height="40"
      rx="4"
      fill="#92400E"
    />

    {/* Face */}
    <circle 
      cx="150" 
      cy="95" 
      r="22"
      fill="#FCD34D"
      stroke="#F59E0B"
      strokeWidth="3"
    />


    {/* Hub */}
    <circle 
      cx="150" 
      cy="95" 
      r="8"
      fill="#6B7280"
      stroke="#374151"
      strokeWidth="2"
    />

    {/* Blades with smooth slow rotation */}
    <g 
      fill="#FFFFFF" 
      stroke="#6B7280" 
      strokeWidth="3"
      className="animate-[spin_12s_linear_infinite]"
      style={{ transformOrigin: '150px 95px' }}
    >
      <polygon points="150,95 145,25 155,25" />
      <polygon points="150,95 220,90 220,100" />
      <polygon points="150,95 145,165 155,165" />
      <polygon points="150,95 80,90 80,100" />
    </g>
  </svg>
);

export default function StickyCTAStrip() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      if (scrollTop > 150) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger immediately in case user is already scrolled down
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
  };

  return (
    <AnimatePresence>
      {isVisible && !isDismissed && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 pointer-events-none flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            className="max-w-5xl w-full bg-[#0a1f1c]/90 backdrop-blur-md border border-[#1a8a5e]/30 rounded-[24px] md:rounded-[32px] p-4 py-5 md:py-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4 pointer-events-auto shadow-[0_20px_50px_-15px_rgba(10,31,28,0.55),_0_0_25px_rgba(26,138,94,0.15)] relative overflow-visible select-none"
          >
            {/* Windmill Mascot overlapping the top */}
            <div className="absolute -top-6 md:-top-8 left-4 md:left-8 w-20 h-20 md:w-28 md:h-28">
              <WindmillMascot />
            </div>

            {/* Left Content Column (offset to make space for the mascot) */}
            <div className="pl-20 md:pl-28 pr-6 flex flex-col text-left">
              <span className="text-[8px] md:text-[9px] font-mono uppercase tracking-[0.15em] text-[#2cc985] font-bold bg-[#1a8a5e]/25 border border-[#1a8a5e]/40 px-2.5 py-0.5 rounded-full w-fit mb-2 block">
                04th Oct to 13th Dec 2026
              </span>
              <h4 className="text-sm sm:text-base md:text-lg font-sans font-bold text-[#f4c430] uppercase tracking-tight leading-tight">
                Power Haryana&apos;s Green Future
              </h4>
              <p className="text-[10px] sm:text-xs text-white/80 font-medium leading-relaxed mt-1 max-w-md">
                Only 18 of 20 sponsor slots remain. Reserve your exclusive district-level outreach presence today.
              </p>
            </div>

            {/* Buttons Row */}
            <div className="flex items-center gap-2.5 w-full md:w-auto shrink-0 justify-end md:justify-start">
              <Link href="/sponsors#apply" passHref className="flex-1 sm:flex-initial">
                <button className="w-full sm:w-auto bg-[#1a8a5e] hover:bg-[#2cc985] text-white text-[10px] md:text-xs font-bold px-5 py-3 rounded-xl tracking-wider uppercase transition-all shadow-md active:scale-95 text-center cursor-pointer select-none">
                  Reserve Slot
                </button>
              </Link>
              <Link href="/schemes" passHref className="flex-1 sm:flex-initial">
                <button className="w-full sm:w-auto border border-[#1a8a5e]/50 hover:border-[#1a8a5e] text-white hover:bg-white/5 text-[10px] md:text-xs font-bold px-5 py-3 rounded-xl tracking-wider uppercase transition-all text-center cursor-pointer select-none">
                  Explore Schemes
                </button>
              </Link>
            </div>

            {/* Dismiss Cross Icon */}
            <button
              onClick={handleDismiss}
              aria-label="Dismiss CTA strip"
              className="absolute top-3 right-3 text-white/40 hover:text-white transition-colors cursor-pointer p-1 rounded-full hover:bg-white/5"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
