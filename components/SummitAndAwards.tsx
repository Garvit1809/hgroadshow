"use client";
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';
import Particles from './Particles';

export default function SummitAndAwards() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // Parallax subtle movement
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#061412] text-white py-20 px-6 md:px-12 lg:px-16 mt-16 rounded-[40px] md:rounded-[60px] max-w-7xl mx-auto shadow-2xl border border-white/5">
      {/* Parallax Background Image */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none"
        style={{ y }}
      >
        <img src="/cities/chandigad.jpeg" alt="Chandigarh Background" className="w-full h-[120%] object-cover object-center absolute -top-[10%]" />
      </motion.div>

      {/* Environmental Particles */}
      <Particles quantity={50} className="z-[1]" />

      {/* Background Decorators */}
      <div className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] rounded-full bg-[#1a8a5e]/20 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] rounded-full bg-[#d4af37]/10 blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-start"
          >
            <span className="block text-[#d4af37] font-mono text-md tracking-[0.3em] uppercase font-bold mb-8">
              THE GRAND FINALE · CHANDIGARH
            </span>
            
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-white uppercase tracking-tight mb-6 md:mb-8 text-balance">
              The HGER Summit &amp; Awards Night.
            </h2>
            
            <p className="text-base md:text-lg leading-relaxed text-white/70 mb-10 max-w-[520px] font-medium text-balance">
              On the final night of the Chandigarh activation, HGER closes with an exclusive evening summit and awards ceremony — uniting policymakers, industry leaders, and changemakers shaping Haryana&apos;s renewable energy future.
            </p>
            
            <div className="bg-white/[0.03] border border-white/5 border-l-4 border-l-[#d4af37] rounded-2xl p-6 md:p-8 backdrop-blur-md w-full max-w-[460px] flex flex-col sm:flex-row items-center sm:items-start gap-5">
              <div className="shrink-0">
                <img 
                  src="/images/anil_vij.jpg" 
                  alt="Sh. Anil Vij" 
                  className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-xl border border-white/10 shadow-lg"
                />
              </div>
              <div>
                <div className="font-mono text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-[#d4af37] mb-2 md:mb-3">
                  Chief Guest
                </div>
                <div className="text-2xl md:text-3xl font-sans font-bold tracking-tight mb-2 text-white">
                  Sh. Anil Vij
                </div>
                <div className="text-xs md:text-md font-medium text-white/60 leading-relaxed">
                  Hon&apos;ble Minister · Power, Energy &amp; Transport, Haryana
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column (Cards) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5"
          >
            {[
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="8" r="6"/>
                    <path d="M9 13.5L7 22l5-3 5 3-2-8.5"/>
                  </svg>
                ),
                iconColor: "text-[#d4af37]",
                title: "Awards Night",
                desc: "Recognising excellence in renewable adoption across multiple categories"
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2l3 6 7 1-5 4 1 7-6-3-6 3 1-7-5-4 7-1z"/>
                  </svg>
                ),
                iconColor: "text-[#2cc985]",
                title: "Expert Keynotes",
                desc: "Industry leaders & policymakers on Haryana's green energy roadmap"
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2v4M5 5l3 3M2 12h4M5 19l3-3M19 5l-3 3M22 12h-4M19 19l-3-3"/>
                    <circle cx="12" cy="12" r="4"/>
                  </svg>
                ),
                iconColor: "text-[#1a8a5e]",
                title: "Networking Gala",
                desc: "Sponsors, government leaders & top buyers in one room"
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
                  </svg>
                ),
                iconColor: "text-white/80",
                title: "National Media",
                desc: "State & national press coverage — Tribune, Jagran, ANI, DD News"
              }
            ].map((card, i) => (
              <div 
                key={i} 
                className="bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 hover:-translate-y-1 transition-all duration-300 rounded-2xl p-6 backdrop-blur-md"
              >
                <div className={`w-8 h-8 md:w-10 md:h-10 mb-4 md:mb-5 ${card.iconColor}`}>
                   {card.icon}
                </div>
                <h4 className="text-lg md:text-xl font-sans font-bold tracking-tight text-white mb-2">{card.title}</h4>
                <p className="text-md text-white/50 leading-relaxed font-medium">
                  {card.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Award Categories */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 md:mt-12 pt-0"
        >
          <div className="font-mono text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] text-[#d4af37] mb-10 flex items-center gap-4">
            <span className="w-8 h-0.5 bg-[#d4af37]/60"></span>
            AWARD CATEGORIES · 6 PRESTIGIOUS HONOURS
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
            {/* Track 1 */}
            <div className="bg-white/[0.02] border border-white/5 hover:bg-[#d4af37]/[0.02] hover:border-[#d4af37]/20 transition-all duration-500 rounded-3xl p-8 md:p-10 border-t-4 border-t-[#d4af37] backdrop-blur-md group">
              <div className="border-b border-white/10 pb-6 mb-6">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-[#d4af37] mb-3 block">Track I</span>
                <h4 className="text-2xl md:text-3xl font-sans font-bold tracking-tight text-white mb-2 group-hover:text-[#d4af37] transition-colors duration-300">Exhibitor Awards</h4>
                <p className="text-md text-white/60 leading-relaxed font-medium">Recognising industry leaders &amp; sponsor excellence</p>
              </div>
              
              <div className="space-y-3 md:space-y-4">
                {[
                  "Renewable Energy Brand of the Year",
                  "Most Innovative Green Technology",
                  "Sustainability Leadership Award"
                ].map((award, i) => (
                  <div key={i} className="bg-white/[0.03] border border-white/5 hover:bg-[#d4af37]/10 hover:border-[#d4af37]/30 transition-all duration-300 rounded-xl py-4 px-5 flex items-center gap-4">
                    <span className="text-2xl md:text-3xl font-sans font-bold italic text-[#d4af37] shrink-0 opacity-80">0{i+1}</span>
                    <span className="text-sm md:text-base text-white/90 font-semibold">{award}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Track 2 */}
            <div className="bg-white/[0.02] border border-white/5 hover:bg-[#2cc985]/[0.02] hover:border-[#2cc985]/20 transition-all duration-500 rounded-3xl p-8 md:p-10 border-t-4 border-t-[#2cc985] backdrop-blur-md group">
              <div className="border-b border-white/10 pb-6 mb-6">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-[#2cc985] mb-3 block">Track II</span>
                <h4 className="text-2xl md:text-3xl font-sans font-bold tracking-tight text-white mb-2 group-hover:text-[#2cc985] transition-colors duration-300">Visitor Awards</h4>
                <p className="text-md text-white/60 leading-relaxed font-medium">Celebrating champions among Haryana&apos;s adopters</p>
              </div>
              
              <div className="space-y-3 md:space-y-4">
                {[
                  "Sustainable Farmer of Haryana",
                  "Greenest Institution (School / Hospital / College)",
                  "Renewable Champion (Household / Panchayat / SME)"
                ].map((award, i) => (
                  <div key={i} className="bg-white/[0.03] border border-white/5 hover:bg-[#2cc985]/10 hover:border-[#2cc985]/30 transition-all duration-300 rounded-xl py-4 px-5 flex items-center gap-4">
                    <span className="text-2xl md:text-3xl font-sans font-bold italic text-[#2cc985] shrink-0 opacity-80">0{i+4}</span>
                    <span className="text-sm md:text-base text-white/90 font-semibold">{award}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Cash Prize Details & CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-20 text-center space-y-6 max-w-2xl mx-auto bg-gradient-to-r from-[#d4af37]/10 via-[#d4af37]/5 to-[#d4af37]/10 border border-[#d4af37]/20 rounded-3xl p-8 md:p-10 backdrop-blur-md"
        >
          <p className="text-white/80 font-medium text-lg md:text-xl uppercase tracking-wide">
            Each visitor award winner receives
          </p>
          <div className="text-4xl md:text-5xl font-sans font-black text-[#d4af37] tracking-tight drop-shadow-[0_2px_10px_rgba(212,175,55,0.2)]">
            ₹1,00,000 Cash Prize
          </div>
          <p className="text-white/60 text-sm md:text-md font-medium">
            Winners announced at grand finale summit,{' '}
            <strong className="text-white font-bold">Chandigarh</strong>
          </p>
          
          <div className="pt-4">
            <Link href="/summit" passHref>
              <button className="bg-[#d4af37] hover:bg-[#b8952b] text-[#061412] text-xs font-bold px-8 py-4 rounded-xl tracking-widest uppercase transition-all shadow-lg active:scale-[0.98]">
                Explore Summit & Awards →
              </button>
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
