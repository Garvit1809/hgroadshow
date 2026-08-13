"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function TargetAudience() {
  const segments = [
    {
      title: "Dealers & Distributors",
      pct: "9% of footfall",
      desc: "Regional solar dealers, EV showroom owners, electrical distributors, and aspiring clean-tech channel partners.",
      color: "#14b8a6",
      icon: (
        <svg className="w-6 h-6 text-[#14b8a6] group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "SMEs & Industry",
      pct: "8% of footfall",
      desc: "Manufacturing, plywood exporters, and metal engineering plants paying ₹5–50 Lakh monthly bills with urgent solar ROI intent.",
      color: "#2cc985",
      icon: (
        <svg className="w-6 h-6 text-[#2cc985] group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1" />
        </svg>
      )
    },
    {
      title: "Households",
      pct: "18% of footfall",
      desc: "Affluent homeowners seeking to cut ₹3,000–8,000 monthly bills using the direct PM Surya Ghar Muft Bijli subsidy.",
      color: "#1a8a5e",
      icon: (
        <svg className="w-6 h-6 text-[#1a8a5e] group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9M5 10v11h14V10" />
        </svg>
      )
    },
    {
      title: "Farmers & FPOs",
      pct: "15% of footfall",
      desc: "PM-KUSUM agricultural solar pump prospective buyers (up to 90% government funding) and high-income crop landholders.",
      color: "#1e6fba",
      icon: (
        <svg className="w-6 h-6 text-[#1e6fba] group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l-.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
        </svg>
      )
    },
    {
      title: "Govt. & Panchayats",
      pct: "13% of footfall",
      desc: "6,000+ Gram Panchayats with budgets allocated for solar streetlights, electric utility fleets, and retrofits.",
      color: "#14b8a6",
      icon: (
        <svg className="w-6 h-6 text-[#14b8a6] group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
        </svg>
      )
    },
    {
      title: "Hotels & Commercial",
      pct: "12% of footfall",
      desc: "ESG-pressured commercial office buildings, hospitality venues, and dhabas seeking smart solar-plus-storage models.",
      color: "#2cc985",
      icon: (
        <svg className="w-6 h-6 text-[#2cc985] group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 9h1.5m2.25 0H15m-5.25 3h1.5m2.25 0H15m-5.25 3h1.5m2.25 0H15" />
        </svg>
      )
    },
    {
      title: "Schools & Colleges",
      pct: "14% of footfall",
      desc: "1,200+ schools & 80+ colleges seeking rooftop solar systems under PM Surya Ghar and educational CSR schemes.",
      color: "#1a8a5e",
      icon: (
        <svg className="w-6 h-6 text-[#1a8a5e] group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479L12 21l-6.825-3.943a12.083 12.083 0 01.665-6.479L12 14z" />
        </svg>
      )
    },
    {
      title: "Hospitals & Healthcare",
      pct: "11% of footfall",
      desc: "Govt hospitals, clinics, PHCs needing reliable 24×7 solar backup, oxygen plant systems, and clean backup solutions.",
      color: "#1e6fba",
      icon: (
        <svg className="w-6 h-6 text-[#1e6fba] group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 6v4" />
          <path d="M10 8h4" />
          <path d="M18 22V8a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14" />
          <path d="M4 22h16" />
        </svg>
      )
    }
  ];

  return (
    <section className="space-y-24 md:space-y-40 py-16 md:py-24 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#1a8a5e]/5 rounded-full blur-[80px] md:blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#2cc985]/5 rounded-full blur-[80px] md:blur-[120px] -z-10"></div>

      {/* Interactive Who Walks In - Institutional Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#1a8a5e]/5 rounded-[32px] md:rounded-[48px] border border-[#1a8a5e]/15 p-8 md:p-12 overflow-hidden shadow-[0_20px_50px_-20px_rgba(26,138,94,0.05)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-12 md:mb-16">
            <div>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="block text-[#1a8a5e] font-mono text-md tracking-[0.3em] uppercase font-bold mb-6 md:mb-8"
              >
                Target Audience
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-sans font-bold text-[#0a1f1c] uppercase tracking-tight mb-6 md:mb-8 text-balance text-left"
              >
                Institutional buyers with budgets, not browsers.
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[#2d4a45]/70 text-md md:text-lg max-w-2xl leading-relaxed font-medium text-balance text-left"
              >
                We&apos;ve designed HGER to attract decision-makers from high-impact institutional segments who are ready to invest in Haryana&apos;s green transition.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[250px] sm:h-[350px] md:h-[400px] -mx-6 sm:mx-0 rounded-[24px] overflow-hidden shadow-2xl border-none sm:border-4 md:border-8 border-white"
            >
              <Image
                src="/solar_2.jpg"
                alt="Decision Makers"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          <div className="border-t border-[#1a8a5e]/15 -mx-8 md:-mx-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#1a8a5e]/10">
              {segments.map((segment, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="p-8 lg:p-10 group hover:bg-[#f0f7f4] transition-all duration-700 relative cursor-pointer bg-white text-left"
                >
                  <div 
                    className="absolute top-0 left-0 w-full h-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                    style={{ backgroundColor: segment.color }}
                  ></div>

                  <div 
                    className="mb-6 md:mb-8 w-12 h-12 md:w-14 md:h-14 bg-white border rounded-lg flex items-center justify-center transition-all duration-500 shadow-sm group-hover:!bg-[#1a8a5e] group-hover:!text-white group-hover:border-transparent"
                    style={{
                      color: segment.color,
                      borderColor: `${segment.color}25`
                    }}
                  >
                    {segment.icon}
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-sans font-bold text-[#0a1f1c] mb-3 md:mb-4 leading-tight group-hover:text-[#1a8a5e] transition-colors">
                    {segment.title}
                  </h3>
                  <p className="text-[#2d4a45]/70 text-sm md:text-base leading-relaxed group-hover:text-[#0a1f1c] transition-colors">
                    {segment.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
