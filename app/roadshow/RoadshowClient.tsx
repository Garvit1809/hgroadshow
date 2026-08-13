"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const cities = [
  { num: "01", name: "PALWAL", tagline: "04 OCT", desc: "KMP Logistics Hub. Strong SME base. The symbolic & logistical start for the state-wide journey.", stats: [{ val: "~10L", lbl: "Population" }, { val: "300+", lbl: "Panchayats" }, { val: "Transport", lbl: "SME Focus" }], discom: "DHBVN" },
  { num: "02", name: "REWARI", tagline: "11 OCT", desc: "Auto-component SME cluster. Suzuki, Hero suppliers. DMIC corridor. 500+ SMEs with monthly bills of ₹5–50lakh.", stats: [{ val: "~9L", lbl: "Population" }, { val: "500+", lbl: "SMEs" }, { val: "DMIC", lbl: "Corridor" }], discom: "DHBVN" },
  { num: "03", name: "BHIWANI", tagline: "18 OCT", desc: "Cotton, steel, ceramics & agri-processing industries. 300+ SMEs with rising industrial power demand", stats: [{ val: "~11L", lbl: "Population" }, { val: "300+", lbl: "SMEs" }, { val: "Industrial", lbl: "Demand" }], discom: "DHBVN" },
  { num: "04", name: "HISAR", tagline: "25 OCT", desc: "CCS Haryana Agricultural University. Agri-research meets industrial SME base. DHBVN headquarters region", stats: [{ val: "~17L", lbl: "Population" }, { val: "CCS HAU", lbl: "University" }, { val: "DHBVN HQ", lbl: "Region" }], discom: "DHBVN" },
  { num: "05", name: "SIRSA", tagline: "01 NOV", desc: "Cotton belt. Large landholding farmers. Massive PM-KUSUM solar pump potential. Diesel replacement opportunity", stats: [{ val: "~13L", lbl: "Population" }, { val: "Cotton", lbl: "Crop Belt" }, { val: "KUSUM", lbl: "Solar Pump" }], discom: "DHBVN" },
  { num: "06", name: "ROHTAK", tagline: "15 NOV", desc: "Garment hub, Education institutes, PGIMS Hospital. Multiple buyer profiles in one city — schools, hospitals,& factories.", stats: [{ val: "~10L", lbl: "Population" }, { val: "Garment", lbl: "SME Hub" }, { val: "PGIMS", lbl: "Hospital" }], discom: "UHBVN" },
  { num: "07", name: "SONIPAT", tagline: "22 NOV", desc: "Kundli industrial estate, Murthal hospitality cluster. Highest education +SME density.", stats: [{ val: "~15L", lbl: "Population" }, { val: "Kundli", lbl: "Industrial" }, { val: "Murthal", lbl: "Hospitality" }], discom: "UHBVN" },
  { num: "08", name: "KARNAL", tagline: "29 NOV", desc: "Smart City Mission. Premium basmati rice exporters. NDRI dairy research. High-income buyers ready for premium solar + EV", stats: [{ val: "~15L", lbl: "Population" }, { val: "Smart", lbl: "City Status" }, { val: "Basmati", lbl: "Export Hub" }], discom: "UHBVN" },
  { num: "09", name: "YAMUNANAGAR", tagline: "06 DEC", desc: "India's plywood capital + sugar mills + paper mills. 1,000+ SMEs paying ₹5–50L monthly bills. Biggest singledeal-size city.", stats: [{ val: "~12L", lbl: "Population" }, { val: "1000+", lbl: "SMEs" }, { val: "Plywood", lbl: "Capital" }], discom: "UHBVN" },
  { num: "10", name: "CHANDIGARH", tagline: "13 DEC", desc: "The grand finale — 01 day activation + closing Summit + Awards Night. Premium buyers, national press, HGER 2027 announcement", stats: [{ val: "Capital", lbl: "Of Haryana" }, { val: "Summit", lbl: "+ Awards" }, { val: "CM", lbl: "Photo-op" }], discom: "CED" }
];

export default function RoadshowPage() {
  const rotatingWords = [
    "THE HGER ROUTE",
    "10 CITIES",
    "3-DAY STOP OVER",
    "STATE-WIDE IMPACT"
  ];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScrollToHash = () => {
      if (window.location.hash) {
        const id = window.location.hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }, 150);
        }
      }
    };

    handleScrollToHash();
    window.addEventListener('hashchange', handleScrollToHash);
    return () => window.removeEventListener('hashchange', handleScrollToHash);
  }, []);

  return (
    <div className="space-y-16 max-w-[1400px] mx-auto px-6 py-8 md:py-12">

      {/* Hero Section with Rotating Text & Video Loop */}
      <section className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center pt-8 md:pt-16 pb-6">
        {/* Decorative background glow */}
        <div className="absolute top-1/2 left-3/4 -translate-y-1/2 w-[350px] h-[350px] bg-[#1a8a5e]/5 rounded-full blur-[80px] pointer-events-none"></div>

        {/* Left Section - Text Content */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <div className="flex items-center space-x-3 mb-2">
            <span className="text-[#1a8a5e] font-mono text-md tracking-[0.3em] uppercase font-bold">Route 2026</span>
            <span className="w-12 h-[1px] bg-[#1a8a5e]/20"></span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-sans font-bold tracking-tighter leading-[1.1] text-[#0a1f1c] uppercase flex flex-col items-start">
            <span className="opacity-95">TEN CITIES.</span>
            <span className="opacity-95">THREE MONTHS.</span>

            <div className="inline-flex justify-start items-center overflow-hidden py-2 min-h-[1.2em]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={rotatingWords[wordIndex]}
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -22 }}
                  transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
                  className="relative italic font-light text-[#1a8a5e] whitespace-nowrap block pb-2 cursor-default select-none uppercase text-left"
                >
                  {rotatingWords[wordIndex]}
                  <span className="absolute bottom-0 left-0 right-2 h-[4px] sm:h-[6px] bg-[#1a8a5e]/25 rounded-full" />
                </motion.span>
              </AnimatePresence>
            </div>
          </h1>

          <p className="text-[#2d4a45]/80 text-[13px] sm:text-base max-w-xl leading-relaxed pt-2 font-medium">
            Every stop on HGER 2026 is a carefully designed 3-day ground activation — branded stalls, live demos, government enrolment desks, institutional B2B meets, and Haryanvi-language outreach. Here&apos;s the complete route.
          </p>
        </div>

        {/* Right Section - Video Loop */}
        <div className="lg:col-span-5 w-full relative">
          <video
            src="/assets/car-v.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto rounded-[24px]"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 15%, black 78%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 78%, transparent)'
            }}
          />
        </div>
      </section>

      {/* Cities Trail */}
      <section className="space-y-12">
        <div className="space-y-2">
          <span className="text-[#1a8a5e] font-mono text-md tracking-[0.3em] uppercase font-bold block">The 10 Cities</span>
          <h2 className="text-4xl md:text-5xl font-sans font-black text-black uppercase tracking-tight">A city-by-city strategy.</h2>
          <p className="text-[#2d4a45]/60 text-md max-w-2xl font-medium">
            Every district selected for its unique buyer profile — from textile industries in Bhiwani to basmati exporters in Karnal. No overlap. No waste.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cities.map((city, i) => (
            <div
              key={i}
              id={city.name.toLowerCase()}
              className="bg-white rounded-[32px] p-8 md:p-10 border border-[#1a8a5e]/10 group hover:bg-[#0a1f1c] transition-all duration-500 shadow-sm hover:shadow-xl scroll-mt-28"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-[#1a8a5e] font-mono text-lg font-light italic">/{city.num}</span>
                <span className="bg-[#1a8a5e]/5 text-[#1a8a5e] text-[8px] font-bold px-3 py-1 rounded-full uppercase tracking-widest group-hover:bg-white/10 group-hover:text-white transition-colors">
                  {city.discom}
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-sans font-bold text-[#0a1f1c] group-hover:text-white mb-3 transition-colors uppercase tracking-tight">{city.name}</h3>
              <div className="inline-flex items-center gap-2 bg-[#1a8a5e]/10 group-hover:bg-white/10 px-3 py-1.5 rounded-lg mb-6 transition-colors">
                <svg className="w-5 h-5 text-[#1a8a5e] group-hover:text-white/90 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-sm md:text-base font-bold uppercase tracking-widest text-[#1a8a5e] group-hover:text-white/90 transition-colors">
                  {city.tagline}
                </span>
              </div>
              <p className="text-[#2d4a45]/70 group-hover:text-white/60 text-md leading-relaxed mb-10 transition-colors font-medium">
                {city.desc}
              </p>

              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-[#1a8a5e]/10 group-hover:border-white/10 transition-colors">
                {city.stats.map((stat, si) => (
                  <div key={si}>
                    <div className="text-lg sm:text-xl font-sans font-bold text-[#0a1f1c] group-hover:text-[#1a8a5e] transition-colors">{stat.val}</div>
                    <div className="text-[7px] sm:text-[8px] font-mono uppercase tracking-[0.2em] opacity-40 group-hover:text-white/40 transition-colors font-bold">{stat.lbl}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Activation Breakdown (Expect Section) */}
      <section className="bg-[#0a1f1c] rounded-[40px] p-8 md:p-14 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#1a8a5e]/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="relative z-10 space-y-10">
          <div className="text-center space-y-2">
            <span className="text-[#1a8a5e] font-mono text-md tracking-[0.3em] uppercase font-bold block">What Happens at Every City</span>
            <h2 className="text-4xl md:text-5xl font-sans font-black text-white uppercase tracking-tight">A complete activation, not just a booth.</h2>
            <p className="text-white/40 text-md max-w-xl mx-auto font-medium">
              Each HGER stop is a 3-day, fully-produced ground event. Here&apos;s what every sponsor and visitor experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center sm:text-left">
            {[
              {
                title: "Custom-built stalls",
                desc: "Premium branded, weatherproof stalls — fresh setup in every city, designed for premium product showcasing.",
                icon: (
                  <svg className="w-8 h-8 text-[#1a8a5e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 9h1.5m2.25 0H15m-5.25 3h1.5m2.25 0H15m-5.25 3h1.5m2.25 0H15" />
                  </svg>
                )
              },
              {
                title: "Govt. enrolment desks",
                desc: "HAREDA + DISCOM officers helping visitors apply for PM Surya Ghar, PM-KUSUM subsidies on the spot.",
                icon: (
                  <svg className="w-8 h-8 text-[#1e6fb8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.33l-7.5-5-7.5 5V21m16.5 0H3" />
                  </svg>
                )
              },
              {
                title: "Live product demos",
                desc: "Real solar panels, EV test rides, smart-home setups — visitors touch, feel, and compare side-by-side.",
                icon: (
                  <svg className="w-8 h-8 text-[#14b8a6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                )
              },
              {
                title: "Press & lead capture",
                desc: "Local Haryanvi-language press, digital lead scanning kiosks, and visitor demographic tracking for sponsors.",
                icon: (
                  <svg className="w-8 h-8 text-[#2cc985]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                  </svg>
                )
              }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-[24px] p-6 space-y-4 hover:bg-white/10 transition-colors">
                <div className="flex justify-center sm:justify-start">{item.icon}</div>
                <h4 className="text-lg font-bold uppercase tracking-tight">{item.title}</h4>
                <p className="text-white/70 text-md leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Table */}
      <section className="space-y-12">
        <div className="text-center space-y-2">
          <span className="text-[#1a8a5e] font-mono text-md tracking-[0.3em] uppercase font-bold block">Master Schedule</span>
          <h2 className="text-4xl md:text-5xl font-sans font-black text-black uppercase tracking-tight">The complete calendar.</h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {(() => {
            const themeColors = [
              'blue', 'green', 'blue', 'green', 'blue',
              'blue', 'green', 'blue', 'green', 'blue'
            ];

            return cities.map((city, i) => {
              const isBlue = themeColors[i] === 'blue';
              const themeColorClass = isBlue ? 'text-[#1e6fba]' : 'text-[#1a8a5e]';
              const borderTopClass = isBlue ? 'border-t-[#1e6fba]' : 'border-t-[#1a8a5e]';

              // Extract date e.g., "04 OCT"
              const dateParts = city.tagline.includes('·') ? city.tagline.split('·')[1]?.trim().split(' ') : city.tagline.trim().split(' ');
              const day = dateParts?.[0] || "04";
              const month = dateParts?.[1] || "OCT";

              // Extract region e.g., "(Faridabad, Nuh)"
              const region = city.tagline.includes('·') ? city.tagline.split('·')[0]?.trim() : "";

              return (
                <div
                  key={i}
                  className={`bg-white rounded-[24px] border border-gray-100 border-t-[5px] ${borderTopClass} p-6 md:p-8 flex flex-col sm:flex-row gap-6 items-center sm:items-start hover:shadow-xl transition-all duration-300 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.03)]`}
                >
                  {/* Left: Date Block */}
                  <div className="flex flex-col items-center justify-center min-w-[90px] shrink-0 text-center select-none">
                    <span className={`text-4xl md:text-5xl font-sans font-black tracking-tight leading-none ${themeColorClass}`}>{day}</span>
                    <span className={`text-xs md:text-sm font-mono font-black uppercase tracking-[0.2em] mt-1.5 ${themeColorClass}`}>{month}</span>
                  </div>

                  {/* Vertical Divider */}
                  <div className="hidden sm:block w-[1px] self-stretch bg-gray-200/60 my-1 mx-2"></div>

                  {/* Right: City Content */}
                  <div className="text-center sm:text-left space-y-2 flex-1">
                    <h4 className="text-xl md:text-2xl font-sans font-bold text-[#0a1f1c] tracking-tight leading-tight">
                      {city.name.charAt(0).toUpperCase() + city.name.slice(1).toLowerCase()}{" "}
                      <span className="text-[#2d4a45]/60 text-xs sm:text-sm md:text-base font-normal">{region}</span>
                    </h4>
                    <p className="text-[#2d4a45]/70 text-xs sm:text-sm md:text-md leading-relaxed font-medium">
                      {city.desc}
                    </p>
                  </div>
                </div>
              );
            });
          })()}
        </div>
      </section>

      {/* Chief Guest Section */}
      <section className="bg-[#061412] text-white rounded-[40px] p-8 md:p-12 max-w-5xl mx-auto shadow-xl border border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#1a8a5e]/15 rounded-full blur-[80px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-[#d4af37]/5 rounded-full blur-[70px] pointer-events-none"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="shrink-0">
            <img
              src="/images/anil_vij.jpg"
              alt="Sh. Anil Vij"
              className="w-28 h-28 md:w-36 md:h-36 object-cover rounded-2xl border border-white/10 shadow-lg"
            />
          </div>
          <div className="space-y-3 text-center md:text-left flex-1">
            <div className="inline-flex items-center gap-2 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-full px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-widest text-[#d4af37]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]"></span>
              Grand Finale Chief Guest
            </div>
            <h3 className="text-3xl md:text-4xl font-sans font-bold text-white uppercase tracking-tight">Sh. Anil Vij</h3>
            <p className="text-[#1a8a5e] text-xs font-mono font-bold uppercase tracking-widest leading-relaxed">
              Hon&apos;ble Minister for Power, Energy &amp; Transport, Haryana
            </p>
            <p className="text-white/60 text-md leading-relaxed max-w-2xl font-medium">
              Sh. Anil Vij will grace the HGER 2026 Summit &amp; Awards Night in Chandigarh as our Chief Guest, delivering the keynote address and presenting awards to the sustainability pioneers.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Strip */}
      <section className="bg-white border border-[#1a8a5e]/15 rounded-[40px] p-8 md:p-14 text-center relative overflow-hidden shadow-xl max-w-5xl mx-auto">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#1a8a5e]/5 rounded-full blur-[80px] pointer-events-none"></div>
        <div className="max-w-3xl mx-auto space-y-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-[#0a1f1c] leading-tight tracking-tight uppercase">
            Ready to be part of <span className="text-[#1a8a5e] italic font-light">the journey?</span>
          </h2>
          <p className="text-[#2d4a45]/70 text-xs sm:text-base font-medium max-w-xl mx-auto leading-relaxed">
            Exactly 20 sponsor slots. 10 cities. Once filled, applications close. Find out how your brand can join.
          </p>
          <div className="pt-4">
            <Link href="/sponsors" passHref>
              <button className="bg-[#1b8a5e] hover:bg-[#0e5a3d] text-white text-[11px] font-bold px-10 py-4 rounded-xl tracking-widest uppercase transition-all shadow-md cursor-pointer">
                Explore Sponsorship
              </button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
