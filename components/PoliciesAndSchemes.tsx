"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function PoliciesAndSchemes() {
  const schemesRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: schemesRef,
    offset: ["start start", "end end"]
  });

  const textX = useTransform(scrollYProgress, [0, 0.25], ["0%", "-150%"]);
  const cardsX = useTransform(scrollYProgress, [0.05, 1], ["0%", "-70%"]);

  const schemes = [
    {
      id: "01",
      category: "Central · Active",
      title: "PM Surya Ghar Muft Bijli Yojana",
      desc: "Free electricity up to 300 units/month for 1 crore households across India.",
      img: "/scheme1.png"
    },
    {
      id: "02",
      category: "Most Subsidised",
      title: "PM-KUSUM (Kisan Urja Suraksha)",
      desc: "Solar pumps and grid-connected plants for farmers — stacked subsidies.",
      img: "/city1.png"
    },
    {
      id: "03",
      category: "State · Haryana",
      title: "Haryana Solar Policy 2024",
      desc: "Additional state subsidy for rooftop solar and time-bound DISCOM approvals.",
      img: "/city2.png"
    },
    {
      id: "04",
      category: "EV · Mobility",
      title: "FAME-II + Haryana EV Policy",
      desc: "Subsidies on electric 2/3 wheelers + 100% registration fee waiver.",
      img: "/city1.png"
    },
    {
      id: "05",
      category: "Industrial · 2030",
      title: "National Green Hydrogen Mission",
      desc: "Outlay for green hydrogen production, electrolyzers, and pilot projects.",
      img: "/city2.png"
    },
    {
      id: "06",
      category: "HAREDA · State Nodal",
      title: "HAREDA Outreach Programs",
      desc: "Awareness drives, vendor empanelment, and direct citizen support.",
      img: "/scheme1.png"
    }
  ];

  return (
    <>
      <section ref={schemesRef} className="relative h-[400vh]">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          
          {/* Left Column: Text Content - Moves left */}
          <motion.div 
            style={{ x: textX }}
            className="absolute left-8 md:left-20 z-20 max-w-xl"
          >
            <span className="block text-[#1a8a5e] font-mono text-md tracking-[0.3em] uppercase font-bold mb-4">
              Policies & Schemes
            </span>
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-[#0a1f1c] mb-6 md:mb-8 leading-[1.1] tracking-tight uppercase text-balance">
              <span className="text-[#1a8a5e]">Government</span><br />Backing.
            </h2>
            <p className="text-[#2d4a45]/70 text-base md:text-xl leading-relaxed mb-10 md:mb-12 text-balance">
              We bring official enrolment desks for every major central and state scheme directly to the roadshow floor — helping visitors move from awareness to enrolment in minutes.
            </p>
            <Link href="/schemes" passHref>
              <button className="bg-[#1b8a5e] hover:bg-[#0e5a3d] text-white text-[10px] font-bold px-8 md:px-10 py-4 rounded-xl tracking-widest uppercase flex items-center self-start shadow-xl transition-all group active:scale-[0.98] cursor-pointer">
                Live Enrolment Desks <span className="ml-3 transform group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </Link>
          </motion.div>

          {/* Right Side: Horizontal Cards - Moves across */}
          <motion.div 
            style={{ x: cardsX }}
            className="flex gap-6 md:gap-8 pl-[80vw] md:pl-[60vw]"
          >
            {schemes.map((scheme, i) => (
              <div 
                key={i} 
                className="w-[300px] sm:w-[400px] md:w-[450px] h-[400px] sm:h-[450px] md:h-[500px] flex-shrink-0 relative rounded-[32px] md:rounded-[48px] overflow-hidden group cursor-pointer shadow-2xl transition-all duration-500 hover:-translate-y-4"
              >
                <Image 
                  src={scheme.img} 
                  alt={scheme.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f1c]/95 via-[#0a1f1c]/40 to-transparent"></div>
                
                {/* Decorative Elements */}
                <div className="absolute top-6 right-6 md:top-8 md:right-8 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/60 group-hover:bg-[#1a8a5e] group-hover:text-white transition-all shadow-lg">
                  <span className="text-sm font-bold">✕</span>
                </div>

                <div className="absolute bottom-8 md:bottom-10 left-8 md:left-10 right-8 md:right-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-[#1a8a5e] text-white font-mono text-[8px] font-bold tracking-widest uppercase shadow-sm">
                      {scheme.category}
                    </span>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2cc985] animate-pulse shadow-[0_0_8px_rgba(44,201,133,0.6)]"></div>
                  </div>
                  
                  <h2 className="text-white text-2xl md:text-4xl font-sans font-bold leading-[1.1] mb-4 md:mb-6 group-hover:text-[#2cc985] transition-colors duration-500">
                    {scheme.title}
                  </h2>
                  
                  <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-6 md:mb-8 line-clamp-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    {scheme.desc}
                  </p>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-white/10">
                    <span className="text-white/40 font-mono text-[9px] font-bold tracking-widest uppercase">ENROLMENT ACTIVE</span>
                    <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center text-white group-hover:bg-[#1a8a5e] transition-colors">
                      <span className="text-lg">+</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Grid Schemes Section (Non-Image, Cards & Icons) */}
      <section className="py-8 md:py-12 max-w-[1400px] mx-auto w-full px-4 md:px-0 bg-transparent border-t border-slate-100 mt-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="block text-[#1a8a5e] font-mono text-md tracking-[0.3em] uppercase font-bold mb-3">
              Government Schemes · Live Subsidies
            </span>
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-[#0a1f1c] uppercase tracking-tight mb-6 leading-tight">
              Real money saved. Real schemes we&apos;ll help visitors enrol in.
            </h2>
            <p className="text-[#2d4a45]/70 text-md md:text-lg leading-relaxed font-medium">
              HGER isn&apos;t just a brand event — we&apos;ll set up live government enrolment desks at every stop, helping visitors apply for subsidies on the spot. Your sponsor stall sits next to the people who&apos;ll actually buy.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          
          {/* Card 1: PM Surya Ghar (Bento-style Light Green) */}
          <div className="bg-[#0e5a3d]/[0.05] rounded-[32px] p-8 md:p-10 flex flex-col justify-between cursor-pointer transition-transform hover:scale-[1.01] relative shadow-[0_4px_25px_rgba(14,90,61,0.01)] hover:shadow-[0_12px_35px_rgba(14,90,61,0.05)] text-[#0e5a3d] min-h-[480px] border border-[#0e5a3d]/10 group">
            <div>
              <span className="border border-[#0e5a3d]/20 rounded-full px-3.5 py-1 text-[9px] font-bold tracking-wider bg-transparent font-mono self-start uppercase block w-fit">
                Central · Active
              </span>
              
              <div className="flex flex-col items-start mb-6 font-fraunces mt-6">
                <div className="bg-[#fbfdfc] px-4 py-2 rounded-[4px] shadow-sm inline-flex items-center text-[#0e5a3d] group-hover:-rotate-1 transition-transform duration-300">
                  <span className="text-lg xl:text-xl font-bold tracking-tight uppercase">PM SURYA GHAR</span>
                </div>
                <div className="bg-[#fbfdfc] px-4 py-2 rounded-[4px] shadow-sm inline-flex relative mt-2 ml-2 text-[#0e5a3d] group-hover:rotate-1 transition-transform duration-300 font-light italic">
                  <span className="text-base xl:text-lg tracking-tight">Muft Bijli Yojana</span>
                </div>
              </div>

              <p className="text-[#0e5a3d]/80 text-md leading-relaxed mb-6 font-medium">
                Free electricity up to 300 units/month for 1 crore households across India.
              </p>
            </div>

            <div>
              <div className="border-y border-[#0e5a3d]/10 py-4 my-6 space-y-2.5">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#0e5a3d]/60 font-mono uppercase tracking-wider text-[9px]">Subsidy</span>
                  <span className="text-[#0e5a3d] font-bold">Up to ₹78,000</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#0e5a3d]/60 font-mono uppercase tracking-wider text-[9px]">Monthly savings</span>
                  <span className="text-[#0e5a3d] font-bold">₹1,800–4,500</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#0e5a3d]/60 font-mono uppercase tracking-wider text-[9px]">Best for</span>
                  <span className="text-[#0e5a3d] font-bold">Homes, RWAs, schools</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="h-1.5 w-full bg-[#0e5a3d]/10 rounded-full overflow-hidden">
                  <div className="h-full rounded-full bg-[#1a8a5e]" style={{ width: '78%' }}></div>
                </div>
                <span className="text-[10px] font-bold tracking-wider text-[#0e5a3d]/60 group-hover:text-[#1a8a5e] transition-colors block uppercase font-mono">
                  Saves ~78% on annual electricity bill
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: PM-KUSUM (Bento-style Featured Dark Green) */}
          <div className="bg-[#0e5a3d] rounded-[32px] p-8 md:p-10 flex flex-col justify-between cursor-pointer transition-transform hover:scale-[1.01] relative shadow-lg text-white min-h-[480px] border border-[#0e5a3d]/20 group overflow-hidden">
            {/* Ambient upper glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-full pointer-events-none transition-transform duration-700 group-hover:scale-110"></div>
            
            <div>
              <span className="border border-white/20 rounded-full px-3.5 py-1 text-[9px] font-bold tracking-wider bg-white/10 font-mono self-start uppercase block w-fit">
                Most Subsidised
              </span>
              
              <div className="flex flex-col items-start mb-6 font-fraunces mt-6">
                <div className="bg-[#fbfdfc] px-4 py-2 rounded-[4px] shadow-sm inline-flex items-center text-[#0e5a3d] group-hover:-rotate-1 transition-transform duration-300">
                  <span className="text-lg xl:text-xl font-bold tracking-tight uppercase">PM-KUSUM</span>
                </div>
                <div className="bg-[#fbfdfc] px-4 py-2 rounded-[4px] shadow-sm inline-flex relative mt-2 ml-2 text-[#0e5a3d] group-hover:rotate-1 transition-transform duration-300 font-light italic">
                  <span className="text-base xl:text-lg tracking-tight">Kisan Urja Suraksha</span>
                </div>
              </div>

              <p className="text-white/80 text-md leading-relaxed mb-6 font-medium">
                Solar agricultural pumps and grid-connected solar plants for farmers — central + state subsidy stacked.
              </p>
            </div>

            <div>
              <div className="border-y border-white/10 py-4 my-6 space-y-2.5">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-white/50 font-mono uppercase tracking-wider text-[9px]">Subsidy</span>
                  <span className="text-white font-bold">Up to 90%</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-white/50 font-mono uppercase tracking-wider text-[9px]">Farmer pays</span>
                  <span className="text-white font-bold">As low as 10%</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-white/50 font-mono uppercase tracking-wider text-[9px]">Best for</span>
                  <span className="text-white font-bold">Farmers, FPOs, agri-pumps</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="h-1.5 w-full bg-white/15 rounded-full overflow-hidden">
                  <div className="h-full rounded-full bg-white" style={{ width: '90%' }}></div>
                </div>
                <span className="text-[10px] font-bold tracking-wider text-white/60 group-hover:text-white transition-colors block uppercase font-mono">
                  90% government-funded for eligible farmers
                </span>
              </div>
            </div>
          </div>

          {/* Card 3: Haryana Solar Policy (Bento-style Light Green) */}
          <div className="bg-[#0e5a3d]/[0.05] rounded-[32px] p-8 md:p-10 flex flex-col justify-between cursor-pointer transition-transform hover:scale-[1.01] relative shadow-[0_4px_25px_rgba(14,90,61,0.01)] hover:shadow-[0_12px_35px_rgba(14,90,61,0.05)] text-[#0e5a3d] min-h-[480px] border border-[#0e5a3d]/10 group">
            <div>
              <span className="border border-[#0e5a3d]/20 rounded-full px-3.5 py-1 text-[9px] font-bold tracking-wider bg-transparent font-mono self-start uppercase block w-fit">
                State · Haryana
              </span>
              
              <div className="flex flex-col items-start mb-6 font-fraunces mt-6">
                <div className="bg-[#fbfdfc] px-4 py-2 rounded-[4px] shadow-sm inline-flex items-center text-[#0e5a3d] group-hover:-rotate-1 transition-transform duration-300">
                  <span className="text-lg xl:text-xl font-bold tracking-tight uppercase">HARYANA SOLAR</span>
                </div>
                <div className="bg-[#fbfdfc] px-4 py-2 rounded-[4px] shadow-sm inline-flex relative mt-2 ml-2 text-[#0e5a3d] group-hover:rotate-1 transition-transform duration-300 font-light italic">
                  <span className="text-base xl:text-lg tracking-tight">Policy 2024</span>
                </div>
              </div>

              <p className="text-[#0e5a3d]/80 text-md leading-relaxed mb-6 font-medium">
                Additional state subsidy for rooftop solar, net metering benefits, and time-bound DISCOM approvals.
              </p>
            </div>

            <div>
              <div className="border-y border-[#0e5a3d]/10 py-4 my-6 space-y-2.5">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#0e5a3d]/60 font-mono uppercase tracking-wider text-[9px]">State top-up</span>
                  <span className="text-[#0e5a3d] font-bold">Extra ₹20,000+</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#0e5a3d]/60 font-mono uppercase tracking-wider text-[9px]">Net metering</span>
                  <span className="text-[#0e5a3d] font-bold">Sell extra back to grid</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#0e5a3d]/60 font-mono uppercase tracking-wider text-[9px]">Best for</span>
                  <span className="text-[#0e5a3d] font-bold">All Haryana residents</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="h-1.5 w-full bg-[#0e5a3d]/10 rounded-full overflow-hidden">
                  <div className="h-full rounded-full bg-[#1a8a5e]" style={{ width: '65%' }}></div>
                </div>
                <span className="text-[10px] font-bold tracking-wider text-[#0e5a3d]/60 group-hover:text-[#1a8a5e] transition-colors block uppercase font-mono">
                  Payback period reduced to 4–5 years
                </span>
              </div>
            </div>
          </div>

          {/* Card 4: FAME-II (Bento-style Light Green) */}
          <div className="bg-[#0e5a3d]/[0.05] rounded-[32px] p-8 md:p-10 flex flex-col justify-between cursor-pointer transition-transform hover:scale-[1.01] relative shadow-[0_4px_25px_rgba(14,90,61,0.01)] hover:shadow-[0_12px_35px_rgba(14,90,61,0.05)] text-[#0e5a3d] min-h-[480px] border border-[#0e5a3d]/10 group">
            <div>
              <span className="border border-[#0e5a3d]/20 rounded-full px-3.5 py-1 text-[9px] font-bold tracking-wider bg-transparent font-mono self-start uppercase block w-fit">
                EV · Mobility
              </span>
              
              <div className="flex flex-col items-start mb-6 font-fraunces mt-6">
                <div className="bg-[#fbfdfc] px-4 py-2 rounded-[4px] shadow-sm inline-flex items-center text-[#0e5a3d] group-hover:-rotate-1 transition-transform duration-300">
                  <span className="text-lg xl:text-xl font-bold tracking-tight uppercase">FAME-II + EV</span>
                </div>
                <div className="bg-[#fbfdfc] px-4 py-2 rounded-[4px] shadow-sm inline-flex relative mt-2 ml-2 text-[#0e5a3d] group-hover:rotate-1 transition-transform duration-300 font-light italic">
                  <span className="text-base xl:text-lg tracking-tight">Haryana EV Policy</span>
                </div>
              </div>

              <p className="text-[#0e5a3d]/80 text-md leading-relaxed mb-6 font-medium">
                Subsidies on electric two-wheelers, three-wheelers, and buses + waiver on registration fees and road tax.
              </p>
            </div>

            <div>
              <div className="border-y border-[#0e5a3d]/10 py-4 my-6 space-y-2.5">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#0e5a3d]/60 font-mono uppercase tracking-wider text-[9px]">EV 2-wheeler</span>
                  <span className="text-[#0e5a3d] font-bold">₹15,000+ off</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#0e5a3d]/60 font-mono uppercase tracking-wider text-[9px]">Road tax</span>
                  <span className="text-[#0e5a3d] font-bold">100% waiver</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#0e5a3d]/60 font-mono uppercase tracking-wider text-[9px]">Best for</span>
                  <span className="text-[#0e5a3d] font-bold">Fleet, individual, commercial</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="h-1.5 w-full bg-[#0e5a3d]/10 rounded-full overflow-hidden">
                  <div className="h-full rounded-full bg-[#1a8a5e]" style={{ width: '70%' }}></div>
                </div>
                <span className="text-[10px] font-bold tracking-wider text-[#0e5a3d]/60 group-hover:text-[#1a8a5e] transition-colors block uppercase font-mono">
                  Up to 70% cheaper running cost vs petrol
                </span>
              </div>
            </div>
          </div>

          {/* Card 5: Green Hydrogen (Bento-style Light Green) */}
          <div className="bg-[#0e5a3d]/[0.05] rounded-[32px] p-8 md:p-10 flex flex-col justify-between cursor-pointer transition-transform hover:scale-[1.01] relative shadow-[0_4px_25px_rgba(14,90,61,0.01)] hover:shadow-[0_12px_35px_rgba(14,90,61,0.05)] text-[#0e5a3d] min-h-[480px] border border-[#0e5a3d]/10 group">
            <div>
              <span className="border border-[#0e5a3d]/20 rounded-full px-3.5 py-1 text-[9px] font-bold tracking-wider bg-transparent font-mono self-start uppercase block w-fit">
                Industrial · 2030
              </span>
              
              <div className="flex flex-col items-start mb-6 font-fraunces mt-6">
                <div className="bg-[#fbfdfc] px-4 py-2 rounded-[4px] shadow-sm inline-flex items-center text-[#0e5a3d] group-hover:-rotate-1 transition-transform duration-300">
                  <span className="text-lg xl:text-xl font-bold tracking-tight uppercase">GREEN HYDROGEN</span>
                </div>
                <div className="bg-[#fbfdfc] px-4 py-2 rounded-[4px] shadow-sm inline-flex relative mt-2 ml-2 text-[#0e5a3d] group-hover:rotate-1 transition-transform duration-300 font-light italic">
                  <span className="text-base xl:text-lg tracking-tight">National Mission</span>
                </div>
              </div>

              <p className="text-[#0e5a3d]/80 text-md leading-relaxed mb-6 font-medium">
                ₹19,744 crore outlay for green hydrogen production, electrolyzers, and pilot industrial projects.
              </p>
            </div>

            <div>
              <div className="border-y border-[#0e5a3d]/10 py-4 my-6 space-y-2.5">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#0e5a3d]/60 font-mono uppercase tracking-wider text-[9px]">Outlay</span>
                  <span className="text-[#0e5a3d] font-bold">₹19,744 Cr</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#0e5a3d]/60 font-mono uppercase tracking-wider text-[9px]">Target</span>
                  <span className="text-[#0e5a3d] font-bold">5 MMT by 2030</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#0e5a3d]/60 font-mono uppercase tracking-wider text-[9px]">Best for</span>
                  <span className="text-[#0e5a3d] font-bold">Refineries, fertilizer cos</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="h-1.5 w-full bg-[#0e5a3d]/10 rounded-full overflow-hidden">
                  <div className="h-full rounded-full bg-[#1a8a5e]" style={{ width: '85%' }}></div>
                </div>
                <span className="text-[10px] font-bold tracking-wider text-[#0e5a3d]/60 group-hover:text-[#1a8a5e] transition-colors block uppercase font-mono">
                  Future of industrial decarbonisation
                </span>
              </div>
            </div>
          </div>

          {/* Card 6: HAREDA Outreach (Bento-style Light Green) */}
          <div className="bg-[#0e5a3d]/[0.05] rounded-[32px] p-8 md:p-10 flex flex-col justify-between cursor-pointer transition-transform hover:scale-[1.01] relative shadow-[0_4px_25px_rgba(14,90,61,0.01)] hover:shadow-[0_12px_35px_rgba(14,90,61,0.05)] text-[#0e5a3d] min-h-[480px] border border-[#0e5a3d]/10 group">
            <div>
              <span className="border border-[#0e5a3d]/20 rounded-full px-3.5 py-1 text-[9px] font-bold tracking-wider bg-transparent font-mono self-start uppercase block w-fit">
                HAREDA · State Nodal
              </span>
              
              <div className="flex flex-col items-start mb-6 font-fraunces mt-6">
                <div className="bg-[#fbfdfc] px-4 py-2 rounded-[4px] shadow-sm inline-flex items-center text-[#0e5a3d] group-hover:-rotate-1 transition-transform duration-300">
                  <span className="text-lg xl:text-xl font-bold tracking-tight uppercase">HAREDA OUTREACH</span>
                </div>
                <div className="bg-[#fbfdfc] px-4 py-2 rounded-[4px] shadow-sm inline-flex relative mt-2 ml-2 text-[#0e5a3d] group-hover:rotate-1 transition-transform duration-300 font-light italic">
                  <span className="text-base xl:text-lg tracking-tight">State Nodal Agency</span>
                </div>
              </div>

              <p className="text-[#0e5a3d]/80 text-md leading-relaxed mb-6 font-medium">
                Haryana Renewable Energy Development Agency runs awareness drives, vendor empanelment, and direct citizen support.
              </p>
            </div>

            <div>
              <div className="border-y border-[#0e5a3d]/10 py-4 my-6 space-y-2.5">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#0e5a3d]/60 font-mono uppercase tracking-wider text-[9px]">Approved vendors</span>
                  <span className="text-[#0e5a3d] font-bold">300+ in Haryana</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#0e5a3d]/60 font-mono uppercase tracking-wider text-[9px]">Subsidy disbursal</span>
                  <span className="text-[#0e5a3d] font-bold">Direct to bank account</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#0e5a3d]/60 font-mono uppercase tracking-wider text-[9px]">Best for</span>
                  <span className="text-[#0e5a3d] font-bold">All Haryana citizens</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="h-1.5 w-full bg-[#0e5a3d]/10 rounded-full overflow-hidden">
                  <div className="h-full rounded-full bg-[#1a8a5e]" style={{ width: '60%' }}></div>
                </div>
                <span className="text-[10px] font-bold tracking-wider text-[#0e5a3d]/60 group-hover:text-[#1a8a5e] transition-colors block uppercase font-mono">
                  Live enrolment desks at every HGER city stop
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Savings Strip */}
        <div className="bg-[#0e5a3d]/[0.03] border border-[#0e5a3d]/10 rounded-[32px] p-8 md:p-10 flex flex-col md:flex-row items-center gap-6 mt-12 md:mt-16 w-full">
          <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center flex-shrink-0 border border-slate-100">
            <svg className="w-8 h-8 text-[#1a8a5e]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 100 7h5a3.5 3.5 0 110 7H6"/>
            </svg>
          </div>
          <div className="flex-1 text-center md:text-left">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#1a8a5e] mb-1 font-mono block">
              Average Haryana Household
            </span>
            <div className="text-2xl sm:text-3xl font-sans font-bold text-[#0a1f1c]">
              <span className="text-[#1a8a5e]">₹52,000</span> saved per year
            </div>
            <p className="text-[#2d4a45]/70 text-sm md:text-base leading-relaxed mt-2 font-medium">
              After installing 3kW rooftop solar with PM Surya Ghar subsidy + Haryana state top-up. Investment recovered in ~4 years.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
