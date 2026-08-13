"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function SponsorshipTiers() {
  const tiers = [
    {
      name: "Associate Sponsor",
      slots: "19 slots available",
      cost: "Cost - Rs. 7,00,000",
      features: [
        "18 sqm Premium Built-Up Pavilion",
        "Presence Across All 10 Cities",
        "10-Minute Sponsor Presentation",
        "Access to Government & Institutional Buyers",
        "Summit & Awards Participation",
        "Statewide Branding & Promotion"
      ]
    },
    {
      name: "Title Sponsor",
      slots: "1 exclusive slot",
      cost: "Cost - Rs. 12,00,000",
      featured: true,
      features: [
        "36 sqm Flagship Built-Up Pavilion",
        "Presence Across All 10 Cities",
        "HGER 2026 \"Presented By\" Naming Rights",
        "Opening Ceremony & VIP Recognition",
        "Top stage during Awards Night",
        "Premium Branding Across All Cities",
        "Featured Summit Speaking Opportunity",
        "Exclusive Government & Media Visibility"
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-2 mb-16 md:mb-24">
          <span className="text-[#1a8a5e] font-mono text-md tracking-[0.3em] uppercase font-bold block">Sponsorship Tiers</span>
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-[#0a1f1c] uppercase tracking-tight">
            Two tiers. Twenty seats. One unforgettable journey.
          </h2>
          <p className="text-[#2d4a45]/70 text-md md:text-lg max-w-2xl mx-auto leading-relaxed">
            Every tier is built around one promise — your brand, in front of the right buyer, in every city we visit. We are selecting partners who share our vision for a sustainable Haryana.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {tiers.map((tier, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`p-8 md:p-12 rounded-[32px] border transition-all duration-500 flex flex-col group relative overflow-hidden ${
                tier.featured 
                  ? 'bg-[#0a1f1c] text-white border-[#1a8a5e]/20 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.2)] hover:border-[#1a8a5e]/40' 
                  : 'bg-gradient-to-br from-[#1a8a5e]/10 to-[#1a8a5e]/[0.02] text-[#0a1f1c] border-[#1a8a5e]/30 shadow-[0_20px_40px_-10px_rgba(26,138,94,0.08)] hover:border-[#1a8a5e]/50'
              }`}
            >
              {/* Glow Effect */}
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0 ${tier.featured ? 'bg-[#1a8a5e]/50' : 'bg-[#1a8a5e]/30'}`}></div>

              <div className="mb-8 md:mb-10 text-left relative z-10">
                <h3 className="text-2xl md:text-3xl font-sans font-bold mb-3">{tier.name}</h3>
                <p className={`text-[10px] font-bold tracking-widest uppercase ${tier.featured ? 'text-white' : 'text-[#0a1f1c]'}`}>
                  {tier.slots}
                </p>
                <p className={`text-xl md:text-2xl font-bold mt-4 font-mono ${tier.featured ? 'text-emerald-400' : 'text-[#1a8a5e]'}`}>
                  {tier.cost}
                </p>
              </div>
              
              <div className="space-y-4 mb-10 md:mb-12 flex-grow text-left">
                {tier.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className={`w-1 h-1 rounded-full mt-2 shrink-0 ${tier.featured ? 'bg-[#1a8a5e]' : 'bg-[#1a8a5e]/30'}`}></div>
                    <span className={`text-[13px] font-bold ${tier.featured ? 'text-white/70' : 'text-[#2d4a45]/80'}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
              
              <Link href="/sponsors" passHref className="w-full">
                <button className={`w-full py-4 rounded-xl font-bold text-[10px] tracking-widest uppercase transition-all ${
                  tier.featured 
                    ? 'bg-[#1a8a5e] text-white hover:bg-[#2cc985]' 
                    : 'bg-[#1a8a5e] text-white hover:bg-[#2cc985] hover:text-white'
                }`}>
                  ENQUIRE NOW →
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
