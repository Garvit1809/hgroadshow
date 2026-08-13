"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number>(0);

  const faqs = [
    {
      q: "What is the HGER Clean Energy Roadshow?",
      a: "The Haryana Green Energy Roadshow (HGER) is a 10-city journey designed to raise awareness about renewable energy solutions, bringing live policy desks, industry experts, and top clean energy products directly to citizens across Haryana."
    },
    {
      q: "How can I apply for the PM Surya Ghar Muft Bijli Yojana?",
      a: "HGER will host live on-the-spot enrolment desks. Our representatives will guide you through the documents required (electricity bill, ID proof) and assist you in completing the official application right there."
    },
    {
      q: "What is the typical payback period for household solar in Haryana?",
      a: "With stacked central (PM Surya Ghar) and Haryana state top-up subsidies, the average 3kW setup pays for itself in just 4 years, saving about ₹52,000 annually thereafter."
    },
    {
      q: "Who is eligible for the 90% agricultural pump subsidy under PM-KUSUM?",
      a: "Haryana farmers, agricultural cooperatives, and water user associations are eligible. Applications are processed through HAREDA, and our local roadshow booths will help check your eligibility criteria."
    },
    {
      q: "How can green energy sponsors and companies join the roadshow?",
      a: "We have 20 premium sponsor slots across the 10 cities. Sponsors get premium booth locations next to live government enrolment desks, maximizing direct exposure to active buyers."
    },
    {
      q: "Will there be EV charging demonstrations and test rides?",
      a: "Yes! FAME-II and Haryana EV policies support zero-carbon transport. The roadshow features electric 2-wheeler/3-wheeler test zones and direct consultation with EV fleet operators."
    }
  ];

  return (
    <section id="faq" className="py-16 md:py-24 max-w-[1400px] mx-auto w-full px-4 md:px-0 bg-transparent scroll-mt-28">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

        {/* Left Column: CTA Card */}
        <div className="lg:col-span-4 bg-white  rounded-[32px] p-8 md:p-10 flex flex-col justify-between min-h-[420px] border-0">
          <div>
            <span className="text-[#1a8a5e] font-mono text-md tracking-[0.3em] uppercase font-bold block mb-4">
              Help Desk
            </span>
            <h2 className="text-[#0a1f1c] font-sans font-bold text-3xl md:text-5xl uppercase tracking-tight mb-8">
              Empower your transition with the right answers.
            </h2>
          </div>

          <div>
            <p className="text-sm sm:text-base text-[#2d4a45]/70 mb-4 font-bold tracking-wide uppercase font-sans">
              Have any question in your mind?
            </p>
            <Link href="/contact" passHref>
              <button className="bg-[#1b8a5e] hover:bg-[#0e5a3d] text-white text-xs font-bold px-8 py-4 rounded-2xl tracking-widest uppercase transition-all shadow-[0_6px_20px_rgba(27,138,94,0.15)] active:scale-[0.98] cursor-pointer">
                Ask HGER Team
              </button>
            </Link>
          </div>
        </div>

        {/* Right Column: Interactive Accordion */}
        <div className="lg:col-span-8 flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div
                key={index}
                onClick={() => setExpandedIndex(isExpanded ? -1 : index)}
                className={`p-6 sm:p-8 rounded-[24px] cursor-pointer transition-all duration-300 border ${isExpanded
                    ? "bg-[#f8f9fa] border-slate-200/50 shadow-sm"
                    : "bg-white border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:border-[#1a8a5e]/20"
                  }`}
              >
                <div className="flex justify-between items-center gap-4">
                  <h3 className={`text-base sm:text-lg font-sans font-bold leading-snug ${isExpanded ? "text-[#0a1f1c]" : "text-[#0a1f1c]/90"
                    }`}>
                    {index + 1}. {faq.q}
                  </h3>

                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isExpanded
                      ? "bg-[#1a8a5e] text-white rotate-180 shadow-md"
                      : "border border-slate-200 text-slate-400"
                    }`}>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </div>
                </div>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-[#2d4a45]/80 text-sm sm:text-base leading-relaxed font-medium">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
