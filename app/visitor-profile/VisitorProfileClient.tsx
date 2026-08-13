"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function VisitorProfile() {
  const segments = [
    {
      num: "01",
      title: "Dealers & Distributors",
      desc: "Regional solar dealers, EV showroom owners, electrical distributors, and aspiring clean-tech channel partners."
    },
    {
      num: "02",
      title: "SMEs & Industry",
      desc: "Manufacturing, plywood exporters, and metal engineering plants paying ₹5–50 Lakh monthly bills with urgent solar ROI intent."
    },
    {
      num: "03",
      title: "Households",
      desc: "Affluent homeowners seeking to cut ₹3,000–8,000 monthly bills using the direct PM Surya Ghar Muft Bijli subsidy."
    },
    {
      num: "04",
      title: "Farmers & FPOs",
      desc: "PM-KUSUM agricultural solar pump prospective buyers (up to 90% government funding) and high-income crop landholders."
    },
    {
      num: "05",
      title: "Govt. & Panchayats",
      desc: "6,000+ Gram Panchayats with budgets allocated for solar streetlights, electric utility fleets, and retrofits."
    },
    {
      num: "06",
      title: "Hotels & Commercial",
      desc: "ESG-pressured commercial office buildings, hospitality venues, and dhabas seeking smart solar-plus-storage models."
    },
    {
      num: "07",
      title: "Schools & Colleges",
      desc: "1,200+ schools & 80+ colleges seeking rooftop solar systems under PM Surya Ghar and educational CSR schemes."
    },
    {
      num: "08",
      title: "Hospitals & Healthcare",
      desc: "Govt hospitals, clinics, PHCs needing reliable 24x7 solar backup, oxygen plant systems, and clean backup solutions."
    }
  ];

  return (
    <div className="space-y-16 max-w-[1400px] mx-auto px-6 py-8 md:py-12">
      {/* Header Section */}
      <section className="max-w-4xl mx-auto text-center pt-8 md:pt-16 pb-6 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#1a8a5e]/5 rounded-full blur-[80px] pointer-events-none"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 flex flex-col items-center"
        >
          <div className="flex items-center space-x-3 mb-4">
            <span className="w-12 h-[1px] bg-[#1a8a5e]/20"></span>
            <span className="text-[#1a8a5e] font-mono text-md tracking-[0.3em] uppercase font-bold">Target Audience</span>
            <span className="w-12 h-[1px] bg-[#1a8a5e]/20"></span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-sans font-bold tracking-tighter leading-[1.1] text-[#0a1f1c] uppercase flex flex-col items-center mb-6">
            <span className="opacity-95 text-center break-words max-w-full">INSTITUTIONAL BUYERS</span>
            <span className="relative italic font-light text-[#1a8a5e] block mt-2 text-center">
              WITH BUDGETS, NOT BROWSERS
            </span>
          </h1>

          <p className="text-[#2d4a45]/80 text-[13px] sm:text-base max-w-2xl mx-auto leading-relaxed pt-2 font-medium">
            We&apos;ve designed HGER to attract decision-makers from high-impact institutional segments who are ready to invest in Haryana&apos;s green transition.
          </p>
        </motion.div>
      </section>

      {/* Grid Section */}
      <section className="space-y-12 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {segments.map((segment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-[32px] p-8 md:p-10 border border-[#1a8a5e]/10 group hover:shadow-xl transition-all duration-500 shadow-sm"
            >
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div className="flex-shrink-0">
                  <span className="text-[#1a8a5e] font-mono text-2xl font-light italic">/{segment.num}</span>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-sans font-bold text-[#0a1f1c] mb-6 uppercase tracking-tight group-hover:text-[#1a8a5e] transition-colors">
                    {segment.title}
                  </h3>
                  <div className="pt-4 border-t border-[#1a8a5e]/10">
                    <p className="text-[#2d4a45]/80 font-medium leading-relaxed text-sm md:text-base">
                      {segment.desc}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
