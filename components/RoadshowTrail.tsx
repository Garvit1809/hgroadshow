"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

const cityData = [
  { id: "01", name: "Palwal", vision: "Sustainable urban planning and solar integration.", color: "bg-[#fbfdfc]", img: "/cities/Palwal.jpeg", tag: "Panchvati Temple" },
  { id: "02", name: "Rewari", vision: "Pioneering smart-grid technology and green logistics.", color: "bg-[#f0f7f4]", img: "/cities/Rewari.jpeg", tag: "Locomotive Shed" },
  { id: "03", name: "Bhiwani", vision: "Community-led renewable energy cooperatives.", color: "bg-[#e3eee9]", img: "/cities/Bhiwani.jpeg", tag: "Local Landscape" },
  { id: "04", name: "Hisar", vision: "Transforming the education hub into a leading center.", color: "bg-[#dcf0c5]", img: "/cities/Hisar.jpeg", tag: "Firoz Shah Palace" },
  { id: "05", name: "Sirsa", vision: "Agricultural energy transformation through biogas.", color: "bg-[#b2e672]", img: "/cities/sirsa.jpeg", tag: "Tara Baba Kutiya" },
  { id: "06", name: "Rohtak", vision: "Electrifying the heart with EV charging networks.", color: "bg-[#1b8a5e]", dark: true, img: "/cities/rohtak.jpeg", tag: "Tilyar Lake" },
  { id: "07", name: "Sonipat", vision: "Industrial decarbonization through waste-to-energy.", color: "bg-[#0e5a3d]", dark: true, img: "/cities/sonipath.jpeg", tag: "Khwaja Khizr Tomb" },
  { id: "08", name: "Karnal", vision: "Modernizing agriculture with solar irrigation.", color: "bg-[#0a1f1c]", dark: true, img: "/cities/karnal.jpeg", tag: "Karan Lake" },
  { id: "09", name: "Yamunanagar", vision: "Hydro-energy optimization and manufacturing.", color: "bg-[#2d4a45]", dark: true, img: "/cities/yamunanagar.jpeg", tag: "Hathni Kund Barrage" },
  { id: "10", name: "Chandigarh", vision: "Final summit: Unifying the roadmap for net-zero.", color: "bg-[#1b8a5e]", dark: true, img: "/cities/chandigad.jpeg", tag: "Sukhna Lake" },
];

export default function RoadshowTrail() {
  const [activeCity, setActiveCity] = useState<string | null>(null);
  const router = useRouter();

  const handleCityClick = (city: typeof cityData[0]) => {
    const targetUrl = `/roadshow#${city.name.toLowerCase()}`;
    if (window.innerWidth >= 768) {
      // Desktop: redirect immediately
      router.push(targetUrl);
    } else {
      // Mobile: if already active, redirect. If not active, activate it.
      if (activeCity === city.id) {
        router.push(targetUrl);
      } else {
        setActiveCity(city.id);
      }
    }
  };

  return (
    <section className="mt-12 md:mt-20 py-16 md:py-24 overflow-hidden relative max-w-[1400px] mx-auto w-full px-4 md:px-0">
      <div className="text-center space-y-2 mb-10 md:mb-16">
        <span className="text-[#1a8a5e] font-mono text-md tracking-[0.3em] uppercase font-bold block">Roadshow Trail</span>
        <h2 className="text-3xl md:text-5xl font-sans font-bold text-[#0a1f1c] uppercase tracking-tight">
          Cities Unfolded.
        </h2>
        <p className="text-[#2d4a45]/60 text-md md:text-lg max-w-2xl mx-auto leading-relaxed">
          A panoramic journey across Haryana. Our automatic roadshow trail brings the energy vision of every city directly to you.
        </p>
      </div>
      {/* ========== DESKTOP ACCORDION (unchanged visual layout, added click and gradients) ========== */}
      <div className="hidden md:flex flex-row h-[550px] gap-2 md:gap-2.5 overflow-hidden">
        {cityData.map((city) => (
          <div 
            key={city.id}
            onClick={() => handleCityClick(city)}
            className={`group relative flex-1 hover:flex-[5] transition-all duration-700 ease-in-out ${city.color} rounded-3xl overflow-hidden cursor-pointer flex flex-col justify-between shadow-sm hover:shadow-2xl`}
          >
            {/* Background Image */}
            <img 
              src={city.img}
              alt={city.name}
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 z-0"
            />
            
            {/* Background Overlays */}
            <div className={`absolute inset-0 ${city.color} group-hover:hidden z-[1]`}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-[1]"></div>

            <div className="relative z-10 flex flex-col h-full p-6">
              <div className="flex justify-between items-start">
                {/* Decorative Accordion Number Badge (Highly visible) */}
                <span className={`w-8 h-8 rounded-full bg-white/90 border border-white flex items-center justify-center text-[#0a1f1c] font-mono font-black text-xs shadow-md group-hover:bg-[#1b8a5e] group-hover:text-white group-hover:border-[#1b8a5e] transition-all`}>
                  {city.id}
                </span>
                <div className={`w-2 h-2 rounded-full ${city.dark ? 'bg-white' : 'bg-[#1b8a5e]'} shadow-sm`}></div>
              </div>

              {/* Vertical Text (Compressed State) */}
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center items-center group-hover:hidden transition-all duration-300">
                <h3 className={`text-lg xl:text-xl font-sans font-bold ${city.dark ? 'text-white' : 'text-[#0a1f1c]'} tracking-tighter uppercase whitespace-nowrap rotate-[270deg]`}>
                  {city.name}
                </h3>
              </div>

              {/* Horizontal Content (Hover State) */}
              <div className="hidden group-hover:flex flex-col h-full mt-10">
                <h3 className="text-3xl xl:text-4xl font-sans font-bold text-white tracking-tight mb-4 drop-shadow-lg">
                  {city.name}
                </h3>
                <div className="mt-auto max-w-[280px]">
                  <p className="text-[13px] xl:text-[14px] leading-relaxed mb-6 text-white font-medium drop-shadow-md">
                    {city.vision}
                  </p>
                  <div className="w-12 h-[2px] bg-white mb-3 shadow-sm"></div>
                  <span className="text-[9px] font-bold tracking-[0.2em] uppercase font-mono text-white drop-shadow-sm">
                    {city.tag || "CITY VISION"}
                  </span>
                </div>
              </div>
            </div>

            {/* Hover Accent Line */}
            <div className="absolute bottom-0 left-0 h-1.5 w-0 group-hover:w-full bg-[#1b8a5e] transition-all duration-700 z-20"></div>
          </div>
        ))}
      </div>

      {/* ========== MOBILE ACCORDION (tap to expand / double-tap to redirect) ========== */}
      <div className="flex flex-col md:hidden gap-2 overflow-hidden">
        {cityData.map((city) => {
          const isOpen = activeCity === city.id;
          return (
            <motion.div
              key={city.id}
              layout
              onClick={() => handleCityClick(city)}
              className={`relative ${city.color} rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ${isOpen ? 'shadow-xl min-h-[280px] flex flex-col justify-between' : 'shadow-sm'}`}
            >
              {/* Background Image — visible only when open */}
              <AnimatePresence>
                {isOpen && (
                  <>
                    <motion.img
                      src={city.img}
                      alt={city.name}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 w-full h-full object-cover z-0"
                    />
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/85 z-[1]"
                    />
                  </>
                )}
              </AnimatePresence>

              {/* Solid color overlay when collapsed */}
              {!isOpen && (
                <div className={`absolute inset-0 ${city.color} z-[1]`}></div>
              )}

              {/* Header row — always visible, horizontal text */}
              <div className={`relative z-10 flex items-center justify-between px-5 py-4 ${isOpen ? 'bg-gradient-to-b from-black/60 to-transparent' : ''} transition-all duration-300`}>
                <div className="flex items-center gap-3">
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center font-mono font-black text-xs shadow-md transition-all duration-300 ${isOpen ? 'bg-[#1b8a5e] text-white border-[#1b8a5e]' : 'bg-white/90 border border-white text-[#0a1f1c]'}`}>
                    {city.id}
                  </span>
                  <h3 className={`text-base font-sans font-bold tracking-tighter uppercase transition-colors duration-300 ${isOpen ? 'text-white drop-shadow-lg' : city.dark ? 'text-white' : 'text-[#0a1f1c]'}`}>
                    {city.name}
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  {/* Expand/collapse chevron */}
                  <motion.svg
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`w-4 h-4 ${isOpen ? 'text-white' : city.dark ? 'text-white/60' : 'text-[#0a1f1c]/40'}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </motion.svg>
                </div>
              </div>

              {/* Expanded content — vision, tag, accent */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                    className="relative z-10 overflow-hidden"
                  >
                    <div className="px-5 pb-5 pt-1 bg-gradient-to-t from-black/70 via-black/50 to-transparent">
                      <p className="text-white/95 text-[13px] leading-relaxed mb-4 font-medium drop-shadow-md max-w-[90%]">
                        {city.vision}
                      </p>
                      <div className="w-10 h-[2px] bg-white/70 mb-2 rounded-full"></div>
                      <span className="text-[8px] font-bold tracking-[0.2em] uppercase font-mono text-white/80 drop-shadow-sm">
                        {city.tag || "CITY VISION"}
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Accent line at bottom */}
              <div className={`absolute bottom-0 left-0 h-1 ${isOpen ? 'w-full' : 'w-0'} bg-[#1b8a5e] transition-all duration-700 z-20`}></div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
