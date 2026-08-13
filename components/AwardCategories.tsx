"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function AwardCategories() {
  const tracks = [
    {
      track: "Track 01",
      title: "Exhibitor Track",
      awards: ["Best Solar Innovation", "Best EV Technology", "Best RE Startup", "Impactful Green Solution", "Sustainable Product Display", "Clean Energy Mfg."]
    },
    {
      track: "Track 02",
      title: "Community Track",
      awards: ["Green Community Champion", "Sustainability Leadership", "Institutional Green Initiative", "RE Adoption Excellence", "Eco-Business Award", "Youth Climate Leadership"]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-2 mb-16 md:mb-20">
          <span className="text-[#1a8a5e] font-mono text-md tracking-[0.3em] uppercase font-bold block">Recognition Excellence</span>
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-[#0a1f1c] uppercase tracking-tight">Award Categories</h2>
          <p className="text-[#2d4a45]/60 text-md md:text-lg font-medium max-w-2xl mx-auto text-balance">
            Celebrating Impact across two distinct leadership tracks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {tracks.map((track, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#f0f7f4] rounded-[32px] p-8 md:p-14 group hover:bg-[#1a8a5e] transition-all duration-500"
            >
              <div className="flex justify-between items-start mb-12">
                <div>
                  <span className="text-[9px] font-black tracking-[0.3em] text-[#1a8a5e] uppercase block mb-2 group-hover:text-white/50">{track.track}</span>
                  <h4 className="text-2xl font-sans font-bold text-[#0a1f1c] group-hover:text-white">{track.title}</h4>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-[#1a8a5e] font-bold shadow-sm">0{i+1}</div>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {track.awards.map((award, idx) => (
                  <div key={idx} className="flex justify-between items-center py-4 border-b border-[#1a8a5e]/10 group-hover:border-white/10">
                    <span className="text-[#0a1f1c] font-bold text-[14px] group-hover:text-white/90">{award}</span>
                    <span className="text-[#1a8a5e]/30 font-mono text-[9px] font-bold group-hover:text-white/30">0{idx+1}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
