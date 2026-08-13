"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface BentoGridProps {
  activeIndex: number;
  words: string[];
}

export default function BentoGrid({ activeIndex, words }: BentoGridProps) {
  const images = [
    "/solar_panel.png",
    "/wind_turbines.png"
  ];
  const imageIndex = activeIndex % images.length;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:min-h-[280px] xl:min-h-[320px] max-w-[1400px] mx-auto w-full px-4 md:px-0 pt-15">
      {/* Card 1: Green Energy Initiative */}
      <div className="bg-[#0e5a3d]/[0.05] rounded-3xl p-6 lg:col-span-3 flex flex-col justify-between group cursor-pointer transition-transform hover:scale-[1.02] relative overflow-hidden shadow-sm text-[#0e5a3d] min-h-[320px]">
        {/* Glow Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#1a8a5e]/30 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0"></div>

        <div className="flex justify-between items-start mb-4 relative z-10">
          <span className="border border-[#0e5a3d]/20 rounded-full px-3 py-1 text-[9px] font-bold tracking-wider bg-transparent font-mono">VISION 2030</span>
          <span className="text-[10px] font-bold mt-1 font-mono">/LIVE</span>
        </div>

        <div className="flex-1 flex flex-col justify-center relative">
          <div className="flex flex-col items-start mb-6 relative z-10">
            <div className="bg-[#fbfdfc] px-3 xl:px-4 py-1.5 xl:py-2 rounded-[4px] shadow-sm inline-flex items-center font-fraunces">
              <span className="text-xl sm:text-2xl xl:text-3xl font-semibold tracking-tight text-[#0e5a3d]">GREEN ENERGY</span>
              <span className="ml-2 text-xl sm:text-2xl xl:text-3xl font-light text-[#0e5a3d]">✕</span>
            </div>
            <div className="bg-[#fbfdfc] px-3 xl:px-4 py-1.5 xl:py-2 rounded-[4px] shadow-sm inline-flex relative mt-2 ml-1 font-fraunces">
              <span className="text-xl sm:text-2xl xl:text-3xl font-light italic tracking-tight text-[#0e5a3d]">INITIATIVE</span>
              <div className="absolute -right-5 -bottom-3 z-20 rotate-12 bg-[#1a8a5e] text-white px-2 py-1 shadow-lg flex flex-col items-center justify-center rounded-sm">
                <span className="text-[7px] font-bold font-mono">ACT NOW</span>
              </div>
            </div>
          </div>
          <p className="text-[11px] text-[#0e5a3d] uppercase tracking-wide leading-relaxed max-w-[95%] font-bold mb-6">
            Join the movement towards a zero-carbon Haryana. Secure your spot today.
          </p>
          <Link href="/roadshow" passHref className="w-full sm:w-auto">
            <button className="bg-[#1b8a5e] text-white text-[11px] font-bold px-6 py-4 rounded-xl w-full sm:w-fit hover:bg-[#0e5a3d] transition-all shadow-[0_10px_20px_rgba(27,138,94,0.15)] uppercase tracking-widest active:scale-[0.98] cursor-pointer">
              JOIN THE ROADSHOW →
            </button>
          </Link>
        </div>
      </div>

      {/* Card 2: Stats Column */}
      <div className="lg:col-span-2 flex flex-row lg:flex-col items-center justify-center gap-4 lg:gap-0 lg:space-y-[-30px] py-4 lg:py-0">
        <div className="bg-white rounded-2xl p-4 flex flex-col items-center justify-center text-center shadow-sm flex-1 lg:w-[85%] z-10 transition-all hover:z-50 hover:-translate-y-2 border border-gray-100 min-h-[100px]">
          <h3 className="text-2xl xl:text-3xl font-bold mb-1 tracking-tight text-[#0a1f1c] font-mono">10</h3>
          <p className="text-[8px] text-[#2d4a45] font-bold tracking-wider uppercase leading-tight">Tier 2/3 Cities</p>
        </div>
        <div className="bg-[#f5f5f5] rounded-2xl p-4 flex flex-col items-center justify-center text-center shadow-md flex-1 lg:w-[92%] z-20 transition-all hover:z-50 hover:-translate-y-2 border border-gray-200 min-h-[100px]">
          <h3 className="text-2xl xl:text-3xl font-bold mb-1 tracking-tight text-[#0a1f1c] font-mono">03</h3>
          <p className="text-[8px] text-[#2d4a45] font-bold tracking-wider uppercase leading-tight">Months Journey</p>
        </div>
        <div className="bg-[#1a8a5e] rounded-2xl p-4 flex flex-col items-center justify-center text-center shadow-lg flex-1 lg:w-full z-30 transition-all hover:z-50 hover:-translate-y-2 border border-[#1a8a5e]/20 min-h-[100px]">
          <h3 className="text-2xl xl:text-3xl font-bold mb-1 text-white tracking-tight font-mono">20</h3>
          <p className="text-[8px] text-white/90 font-bold tracking-wider uppercase leading-tight">Sponsor Slots</p>
        </div>
      </div>

      {/* Merged Card 3: Cities United & About Us */}
      <div className="bg-[#0e5a3d]/[0.05] rounded-3xl p-6 lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 group cursor-pointer transition-transform hover:scale-[1.02] shadow-sm text-[#0a1f1c] min-h-[320px] relative overflow-hidden">
        {/* Glow Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#1a8a5e]/30 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0"></div>

        {/* Left Side: Mission Content & About Us CTA */}
        <div className="flex flex-col justify-between z-10 text-left relative">
          <div>
            <div className="flex justify-between items-start mb-6">
              <span className="border border-[rgba(10,31,28,0.15)] rounded-full px-3 py-1 text-[9px] font-bold tracking-wider bg-transparent font-mono uppercase">Mission</span>
              <span className="text-[10px] font-bold mt-1 text-[#2d4a45] font-mono">/2026</span>
            </div>

            <div className="flex flex-col items-start mb-4 font-fraunces">
              <div className="bg-[#fbfdfc] px-3 py-1.5 transform -rotate-1 rounded-[4px] shadow-sm flex items-center inline-flex">
                <h2 className="text-lg xl:text-xl font-bold tracking-tight uppercase italic mr-2 text-[#0a1f1c]">CITIES</h2>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#1a8a5e" strokeWidth="2.5" className="mx-0.5">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#1a8a5e" />
                  <path d="M2 17L12 22L22 17" stroke="#1a8a5e" />
                  <path d="M2 12L12 17L22 12" stroke="#1a8a5e" />
                </svg>
                <h2 className="text-lg xl:text-xl font-bold tracking-tight uppercase ml-2 text-[#0a1f1c]">UNITED</h2>
              </div>
              <div className="bg-[#fbfdfc] px-3 py-1.5 transform rotate-1 rounded-[4px] shadow-sm inline-flex ml-3 mt-2">
                <h2 className="text-lg xl:text-xl font-bold tracking-tight uppercase text-[#0a1f1c]">HARYANA VISION</h2>
              </div>
            </div>

            <p className="text-[11px] xl:text-[12px] text-[#2d4a45]/80 leading-relaxed max-w-[95%] font-medium mb-6">
              A united initiative driving Haryana towards net-zero. Learn about our commitment to clean energy infrastructure, sustainability milestones, and community-led green transformation.
            </p>
          </div>

          <Link href="/about" passHref>
            <button className="bg-[#0a1f1c] hover:bg-[#1a8a5e] text-white text-[10px] font-bold px-6 py-3.5 rounded-xl w-fit transition-all uppercase tracking-widest active:scale-[0.98]">
              ABOUT US →
            </button>
          </Link>
        </div>

        {/* Right Side: Dynamic Image Slider Container */}
        <div className="relative rounded-2xl overflow-hidden min-h-[220px] md:min-h-full group shadow-sm z-0">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={imageIndex}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={images[imageIndex]}
                alt={words[activeIndex] || "Green Energy"}
                fill
                className="object-cover transition-transform duration-[6000ms] ease-out group-hover:scale-105"
              />
            </motion.div>
          </AnimatePresence>

          {/* Soft Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f1c]/40 to-transparent z-10 pointer-events-none"></div>
        </div>

      </div>
    </div>
  );
}
