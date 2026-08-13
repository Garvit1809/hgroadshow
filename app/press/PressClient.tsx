"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function PressPage() {
  const rotatingWords = [
    "PRESS & MEDIA",
    "OFFICIAL PRESS",
    "MEDIA KIT",
    "LATEST RELEASES"
  ];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-16 max-w-[1400px] mx-auto px-6 py-8 md:py-12">

      {/* Hero Section with Rotating Text */}
      <section className="relative flex flex-col items-center justify-center text-center pt-8 md:pt-12">
        <div className="space-y-6 max-w-4xl">
          <div className="flex items-center justify-center space-x-3 mb-2">
            <span className="w-8 h-[1px] bg-[#0a1f1c]/10"></span>
            <span className="text-[#1a8a5e] font-mono text-md tracking-[0.3em] uppercase font-bold">Newsroom</span>
            <span className="w-8 h-[1px] bg-[#0a1f1c]/10"></span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-sans font-bold tracking-tighter leading-[1.1] text-[#0a1f1c] uppercase flex flex-col items-center justify-center">
            <div className="opacity-95">LATEST UPDATES &</div>

            <div className="inline-flex justify-center items-center overflow-hidden py-2 px-1 min-h-[1.2em]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={rotatingWords[wordIndex]}
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -22 }}
                  transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
                  className="relative italic font-light text-[#1a8a5e] whitespace-nowrap block pb-2 cursor-default select-none uppercase"
                >
                  {rotatingWords[wordIndex]}
                  <span className="absolute bottom-0 left-2 right-2 h-[4px] sm:h-[6px] bg-[#1a8a5e]/25 rounded-full" />
                </motion.span>
              </AnimatePresence>
            </div>
          </h1>

          <p className="text-[#2d4a45]/80 text-[13px] sm:text-base max-w-2xl mx-auto leading-relaxed pt-4 font-medium text-balance">
            Everything journalists, editors, and partners need to cover HGER 2026 — press releases, brand kit, fact sheets, and direct contact for our media team.
          </p>
        </div>
      </section>

      {/* Featured Press Release */}
      <section className="bg-[#0a1f1c] rounded-[40px] p-8 md:p-14 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#1a8a5e]/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="space-y-6 lg:col-span-7">
            <span className="bg-[#1a8a5e] text-white text-[8px] font-mono font-bold px-3 py-1 rounded-full uppercase tracking-widest">▲ FEATURED · 12 NOV 2025</span>
            <h2 className="text-3xl md:text-5xl font-sans font-bold leading-tight uppercase tracking-tight">
              Hon&apos;ble Anil Vij to grace HGER 2026 as <span className="text-[#1a8a5e] italic font-light">Chief Guest.</span>
            </h2>
            <p className="text-white/60 text-md leading-relaxed font-medium">
              Haryana&apos;s Minister for Power, Energy & Transport will preside over the closing Summit & Awards Night in Chandigarh — marking the culmination of India&apos;s first multi-city green energy roadshow dedicated entirely to a single state.
            </p>
            <div className="pt-2">
              <Link href="/contact" passHref>
                <button className="bg-[#1a8a5e] hover:bg-[#0e5a3d] text-white text-[10px] font-bold px-8 py-3.5 rounded-xl tracking-widest uppercase transition-all shadow-md cursor-pointer">
                  Read Full Release
                </button>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md relative overflow-hidden text-center">
            <div className="text-[#1a8a5e] font-sans font-black text-6xl leading-none italic mb-4">&quot;</div>
            <p className="text-white/80 text-md font-light italic leading-relaxed mb-6">
              Haryana&apos;s renewable energy journey is the future — and HGER is bringing it to every district.
            </p>
            <div className="w-10 h-[1px] bg-[#1a8a5e]/30 mx-auto"></div>
          </div>

        </div>
      </section>

      {/* News Archive */}
      <section className="space-y-10 md:space-y-14">
        <div className="text-center space-y-2">
          <span className="text-[#1a8a5e] font-mono text-md tracking-[0.3em] uppercase font-bold">Latest News & Press Releases</span>
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-[#0a1f1c] uppercase tracking-tight">In the news.</h2>
          <p className="text-[#2d4a45]/60 text-md max-w-xl mx-auto font-medium">
            Follow HGER&apos;s journey from concept to launch — every milestone, partnership, and announcement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {[
            {
              date: "18 OCT 2025",
              cat: "Press Release",
              title: "HGER 2026 announces sponsorship cap at just 20 brands",
              desc: "In a category-first move, Haryana Green Energy Roadshow caps total sponsor participation across 10 cities at twenty companies — guaranteeing exclusivity and undivided buyer attention.",
              source: "HGER NEWSROOM"
            },
            {
              date: "5 NOV 2025",
              cat: "Partnership",
              title: "HAREDA partnership formalised — live enrolment desks confirmed",
              desc: "Haryana Renewable Energy Development Agency joins HGER as official outreach partner. Every city stop will host PM Surya Ghar & PM-KUSUM enrolment desks alongside sponsor stalls.",
              source: "HGER NEWSROOM"
            },
            {
              date: "22 NOV 2025",
              cat: "Media Coverage",
              title: "The Tribune covers HGER's tier 2/3 city strategy",
              desc: "\"The first green energy event built ground-up for India's small cities\" — featured editorial coverage on the unique audience design and city selection methodology behind HGER 2026.",
              source: "THE TRIBUNE"
            },
            {
              date: "3 DEC 2025",
              cat: "Announcement",
              title: "10 cities confirmed — route map released",
              desc: "HGER reveals the full 10-city circuit: Palwal → Chandigarh, traversing both DHBVN and UHBVN territories with 5 stops in each DISCOM region for balanced statewide coverage.",
              source: "HGER NEWSROOM"
            },
            {
              date: "14 JAN 2026",
              cat: "Industry",
              title: "Dainik Jagran: \"HGER positioned to be the most-watched green event of 2026\"",
              desc: "Hindi-language coverage highlights HGER's potential to reach Haryana's rural-aspirational households, where rooftop solar adoption has lagged behind metro centres.",
              source: "DAINIK JAGRAN"
            },
            {
              date: "2 FEB 2026",
              cat: "Awards",
              title: "HGER Awards Night — 6 categories announced for industry & visitors",
              desc: "Three exhibitor awards and three visitor awards will be presented at the closing summit. Self-nominations open February 15 for the Sustainable Farmer, Greenest Institution, and Renewable Champion categories.",
              source: "HGER NEWSROOM"
            }
          ].map((news, i) => (
            <div key={i} className="bg-white rounded-[32px] p-8 border border-[#1a8a5e]/10 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group">
              <div className="space-y-4">
                <span className="text-[#1a8a5e] font-mono text-md tracking-[0.2em] uppercase font-bold">{news.date} · {news.cat}</span>
                <h4 className="text-lg font-bold text-[#0a1f1c] uppercase tracking-tight group-hover:text-[#1a8a5e] transition-colors">{news.title}</h4>
                <p className="text-[#2d4a45]/70 text-md leading-relaxed font-medium">{news.desc}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#1a8a5e]/5 flex justify-between items-center text-[9px] font-mono font-bold uppercase tracking-wider text-[#2d4a45]/40">
                <span>{news.source}</span>
                <span className="text-[#1a8a5e] group-hover:translate-x-1 transition-transform">Read →</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Media Kit Download Center */}
      <section className="space-y-10 md:space-y-14">
        <div className="text-center space-y-2">
          <span className="text-[#1a8a5e] font-mono text-md tracking-[0.3em] uppercase font-bold">Media Kit · Download Centre</span>
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-[#0a1f1c] uppercase tracking-tight">Everything you need for your story.</h2>
          <p className="text-[#2d4a45]/60 text-md max-w-xl mx-auto font-medium">
            Logos, brand guidelines, fact sheets, leadership bios, and high-resolution photography — all in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {[
            {
              title: "Logo & Brand Kit",
              desc: "Official logos in light/dark variants, brand colours, typography guidelines, and usage rules.",
              meta: "ZIP · 8.4 MB"
            },
            {
              title: "Fact Sheet 2026",
              desc: "Key statistics, sponsor structure, route, audience breakdown, and ROI projections.",
              meta: "PDF · 1.2 MB"
            },
            {
              title: "Leadership Bios",
              desc: "Detailed bios, professional photos, and quotes from HGER founders and senior leadership.",
              meta: "PDF · 2.8 MB"
            },
            {
              title: "Press Photography",
              desc: "High-resolution photography of stalls, route, key team members, and venue mockups.",
              meta: "ZIP · 124 MB"
            }
          ].map((kit, i) => (
            <div key={i} className="bg-white rounded-[24px] border border-[#1a8a5e]/10 p-6 flex flex-col justify-between hover:border-[#1a8a5e]/30 transition-all shadow-sm">
              <div className="space-y-4">
                <svg className="w-8 h-8 text-[#1a8a5e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a9 9 0 1116.5 0" />
                </svg>
                <h4 className="text-lg font-bold text-[#0a1f1c] uppercase tracking-tight">{kit.title}</h4>
                <p className="text-[#2d4a45]/70 text-md leading-relaxed font-medium">{kit.desc}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#1a8a5e]/5 flex justify-between items-center text-[9px] font-mono font-bold text-[#1a8a5e] uppercase tracking-wider">
                <span>{kit.meta}</span>
                <span>Download →</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Media Contact Area */}
      <section className="bg-[#0a1f1c] rounded-[40px] p-8 md:p-14 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#1a8a5e]/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="space-y-6">
            <span className="text-[#1a8a5e] font-mono text-md tracking-[0.3em] uppercase font-bold block">FOR JOURNALISTS</span>
            <h2 className="text-3xl md:text-5xl font-sans font-bold leading-tight uppercase tracking-tight">
              Looking for a <span className="text-[#1a8a5e] italic font-light">quote or story?</span>
            </h2>
            <p className="text-white/60 text-md leading-relaxed max-w-md font-medium">
              Our media team responds within 24 hours. We can arrange interviews with the founders, sponsor partners, or government collaborators on request.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 space-y-6">
            <div className="pb-4 border-b border-white/5">
              <div className="text-[#1a8a5e] font-mono text-[9px] tracking-[0.2em] uppercase font-bold mb-1">Email</div>
              <a href="mailto:enquiry@hgeroadshow.com" className="text-lg font-bold text-white font-mono hover:text-[#1a8a5e] transition-colors lowercase block">enquiry@hgeroadshow.com</a>
            </div>
            <div className="pb-4 border-b border-white/5">
              <div className="text-[#1a8a5e] font-mono text-[9px] tracking-[0.2em] uppercase font-bold mb-1">Direct Line</div>
              <div className="flex flex-col text-lg font-bold text-white font-mono">
                <a href="tel:+919896649341" className="hover:text-[#1a8a5e] transition-colors">+91 98966 49341</a>
                <a href="tel:+919896649343" className="hover:text-[#1a8a5e] transition-colors">+91 98966 49343</a>
              </div>
            </div>
            <div>
              <div className="text-[#1a8a5e] font-mono text-[9px] tracking-[0.2em] uppercase font-bold mb-1">Head of Communications</div>
              <div className="text-sm font-bold text-white uppercase tracking-wider">Available on request</div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
