"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function AboutPage() {
  const words = [
    "GREEN ENERGY FUTURE",
    "NET-ZERO MISSION",
  ];
  const [wordIndex, setWordIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { value: "10", label: "Cities Covered" },
    { value: "50K+", label: "Expected Visitors" },
    { value: "20", label: "Sponsor Brands" },
    { value: "₹100Cr", label: "Deal Pipeline" },
  ];

  const timeline = [
    {
      year: "2025",
      title: "The insight",
      desc: "While metro cities were oversaturated with green energy expos, the real adoption opportunity sat in tier 2 and tier 3 Haryana — districts where 70% of Haryana's institutional, agricultural, and SME buyers live, but where no major roadshow had ever been organised."
    },
    {
      year: "Early 2026",
      title: "The blueprint",
      desc: "HGER was conceptualised as a curated, 10-city traveling roadshow — starting in Palwal and culminating in Chandigarh — with strict sponsor exclusivity (only 20 companies), government partnership with HAREDA, DHBVN & UHBVN, and a closing Summit & Awards Night."
    },
    {
      year: "Mid 2026",
      title: "Building partnerships",
      desc: "Conversations begin with Haryana's Renewable Energy Department, district administrations, and India's leading green energy brands. Initial sponsor interest confirms the model."
    },
    {
      year: "October 2026",
      title: "The launch",
      desc: "HGER 2026 begins in Palwal. Over the next 3 months, the roadshow traverses Haryana — bringing solar, wind, EV, biofuels, and clean-tech to every corner of the state. The journey ends with a flagship summit in Chandigarh featuring Hon'ble Minister Sh. Anil Vij."
    },
    {
      year: "2027 →",
      title: "Beyond Haryana",
      desc: "HGER expands to Punjab, Uttar Pradesh, and Rajasthan — building a multi-state green energy outreach platform that becomes the de-facto rural and semi-urban adoption channel for clean tech in North India."
    }
  ];

  const principles = [
    {
      id: "01",
      title: "Curated, not crowded",
      desc: "Twenty sponsors. No more. Every brand gets real visibility, real leads, real ROI — never lost in noise."
    },
    {
      id: "02",
      title: "Government-aligned",
      desc: "Real subsidies. Real enrolment desks. Real ministerial endorsement. Not a private event with government window-dressing."
    },
    {
      id: "03",
      title: "Buyer-first",
      desc: "Every visitor walks in with intent — institution, farmer, household, or dealer. Footfall isn't a number, it's a pipeline."
    },
    {
      id: "04",
      title: "Outcomes over optics",
      desc: "We measure ourselves by deals closed, subsidies enrolled, dealers onboarded — not booth photos or press impressions."
    }
  ];


  return (
    <div className="max-w-[1400px] mx-auto px-6 py-8 md:py-12 space-y-16 md:space-y-20 relative">

      {/* 1. Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center pt-0 md:pt-0">
        <div className="space-y-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center space-x-3 mb-2"
          >
            <span className="w-8 h-[1px] bg-[#0a1f1c]/10"></span>
            <span className="text-[#1a8a5e] font-mono text-md tracking-[0.3em] uppercase font-bold">About HGER</span>
            <span className="w-8 h-[1px] bg-[#0a1f1c]/10"></span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-sans font-bold tracking-tighter leading-[1.1] text-[#0a1f1c] uppercase flex flex-col items-center justify-center"
          >
            <div className="opacity-90">A new movement for Haryana&apos;s</div>

            <div className="inline-flex justify-center items-center overflow-hidden py-2 px-1 min-h-[1.2em]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[wordIndex]}
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -22 }}
                  transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
                  className="relative italic font-light text-[#1a8a5e] whitespace-nowrap block pb-2 cursor-default select-none uppercase"
                >
                  {words[wordIndex]}
                  {/* Premium absolute custom underline highlight */}
                  <span className="absolute bottom-0 left-2 right-2 h-[4px] sm:h-[6px] bg-[#1a8a5e]/25 rounded-full" />
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#2d4a45]/80 text-[13px] sm:text-base max-w-2xl mx-auto leading-relaxed pt-6 font-medium text-balance"
          >
            HGER is more than a roadshow — it&apos;s the largest grassroots green energy outreach ever undertaken in Haryana. Here&apos;s the vision, the team, and the story behind it.
          </motion.p>
        </div>
      </section>

      {/* 2. Why HGER Exists Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-[#0e5a3d]/[0.03] rounded-[32px] p-8 md:p-12 lg:col-span-8 flex flex-col justify-center border border-[#0e5a3d]/5 shadow-[0_4px_30px_rgba(26,138,94,0.01)]"
        >
          <span className="text-[#1a8a5e] font-mono text-md tracking-[0.3em] uppercase mb-4 font-bold block">Why HGER exists</span>
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-[#0a1f1c] uppercase tracking-tight mb-6 leading-tight">
            A market hidden in plain sight.
          </h2>
          <div className="space-y-4 text-md text-[#2d4a45]/70 leading-relaxed font-medium">
            <p>
              India&apos;s tier 2 and tier 3 cities — especially in states like Haryana — represent the largest untapped opportunity for renewable energy adoption. They have the rooftops, the budgets, the government subsidies, and the daylight hours. What they don&apos;t have is direct access to the manufacturers, dealers, and solutions that could power their transition.
            </p>
            <p>
              HGER closes that gap. We bring the renewable energy industry — solar, wind, EV, biofuels, storage — directly to the doorstep of every district in Haryana. No travel for the buyer. No middlemen. Just face-to-face conversations between leading companies and the institutions, farmers, and households ready to adopt.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-[#0a1f1c] rounded-[32px] p-8 md:p-12 lg:col-span-4 flex flex-col items-center justify-center text-center relative overflow-hidden shadow-xl"
        >
          {/* Subtle Background Accent */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#1a8a5e]/20 rounded-full blur-[80px] pointer-events-none"></div>

          <div className="relative z-10 space-y-3">
            <div className="text-6xl md:text-8xl font-sans font-black text-white italic tracking-tighter">28M</div>
            <div className="text-xs font-bold text-[#1a8a5e] uppercase tracking-[0.3em] font-mono">Haryanvis</div>
            <div className="w-10 h-[2px] bg-[#1a8a5e]/30 mx-auto"></div>
            <p className="text-white/60 text-[10px] sm:text-xs leading-relaxed max-w-[200px] mx-auto font-medium">
              Ready for the energy transition
            </p>
          </div>
        </motion.div>
      </section>

      {/* 3. Mission & Vision */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#0e5a3d]/[0.03] rounded-[32px] p-8 md:p-12 border border-[#0e5a3d]/5 flex flex-col justify-between"
        >
          <div>
            <span className="text-[#1a8a5e] font-mono text-md tracking-[0.3em] uppercase mb-4 font-bold block">Mission &amp; Vision</span>
            <h3 className="text-2xl font-sans font-bold text-[#0a1f1c] mb-6 uppercase tracking-tight">Our Mission</h3>
            <p className="text-[#2d4a45]/70 leading-relaxed text-md font-medium">
              Bridge the gap between green energy supply and rural demand. Bring 20 of India&apos;s leading renewable energy brands face-to-face with 50,000+ pre-qualified buyers across 10 underserved Haryana cities — generating real adoption, real subsidies, and real impact in a single 3-month sprint.
            </p>
          </div>
          <div className="mt-8 pt-6 border-t border-[#0e5a3d]/5 text-[9px] font-black text-[#1a8a5e] tracking-[0.2em] font-mono uppercase">
            01 / OUTCOME ORIENTED
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-[#0a1f1c] rounded-[32px] p-8 md:p-12 text-white flex flex-col justify-between shadow-xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#1a8a5e]/10 rounded-full blur-[60px] pointer-events-none"></div>
          <div>
            <span className="text-[#d4af37] font-mono text-md tracking-[0.3em] uppercase mb-4 font-bold block">What drives us forward</span>
            <h3 className="text-2xl font-sans font-bold text-white mb-6 uppercase tracking-tight">Our Vision</h3>
            <p className="text-white/70 leading-relaxed text-md font-medium">
              A Haryana where every district leads India&apos;s energy transition. To establish HGER as North India&apos;s most respected, government-aligned green energy roadshow — expanding across Punjab, UP, Rajasthan, and beyond, with Haryana as the proven model for grassroots clean energy adoption.
            </p>
          </div>
          <div className="mt-8 pt-6 border-t border-white/5 text-[9px] font-black text-[#d4af37] tracking-[0.2em] font-mono uppercase">
            02 / HARYANA MODEL
          </div>
        </motion.div>
      </section>

      {/* 4. Quick Stats Grid */}
      <section className="bg-[#0a1f1c] rounded-[32px] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#1a8a5e]/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center relative z-10">
          {stats.map((stat, i) => (
            <div key={i} className="space-y-1.5">
              <div className="text-3xl sm:text-4xl md:text-5xl font-sans font-black text-[#1a8a5e] italic tracking-tight">{stat.value}</div>
              <div className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] opacity-50 font-bold">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Our Journey (Timeline) */}
      <section className="space-y-10 md:space-y-14">
        <div className="text-center space-y-2">
          <span className="text-[#1a8a5e] font-mono text-md tracking-[0.3em] uppercase font-bold">Our Journey</span>
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-[#0a1f1c] uppercase tracking-tight">How HGER came to be.</h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start p-6 bg-white rounded-[24px] border border-[#0e5a3d]/5 hover:bg-[#0a1f1c] hover:text-white transition-all duration-300 group shadow-sm hover:shadow-xl cursor-default"
            >
              <div className="text-xl sm:text-2xl font-sans font-black italic text-[#1a8a5e] group-hover:text-white shrink-0 sm:w-28 leading-none">
                {item.year}
              </div>
              <div className="space-y-1">
                <h4 className="text-lg font-bold uppercase tracking-tight text-[#0a1f1c] group-hover:text-white transition-colors">
                  {item.title}
                </h4>
                <p className="text-[#2d4a45]/70 group-hover:text-white/60 text-md leading-relaxed font-medium transition-colors">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. What We Stand For Section */}
      <section className="space-y-10 md:space-y-14">
        <div className="text-center space-y-2">
          <span className="text-[#1a8a5e] font-mono text-md tracking-[0.3em] uppercase font-bold">What We Stand For</span>
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-[#0a1f1c] uppercase tracking-tight">Four principles. Every city. Every decision.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {principles.map((pr, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#0e5a3d]/[0.03] rounded-[28px] p-8 border border-[#0e5a3d]/5 hover:border-[#1a8a5e]/20 transition-all duration-300 flex items-start gap-5 group"
            >
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#1a8a5e] font-mono font-black text-sm shadow-sm group-hover:bg-[#1a8a5e] group-hover:text-white transition-colors shrink-0">
                {pr.id}
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-bold text-[#0a1f1c] uppercase tracking-tight">
                  {pr.title}
                </h4>
                <p className="text-[#2d4a45]/70 text-md leading-relaxed font-medium">
                  {pr.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>


      {/* 7. Call to Action Strip */}
      <section className="bg-white border border-[#0e5a3d]/10 rounded-[40px] p-8 md:p-14 text-center relative overflow-hidden shadow-xl max-w-5xl mx-auto">
        {/* Subtle Bottom Ambient glow */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#1b8a5e]/5 to-transparent pointer-events-none -z-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#1a8a5e]/5 rounded-full blur-[80px] pointer-events-none"></div>

        <div className="max-w-3xl mx-auto space-y-6 relative z-10">
          <span className="text-[#1a8a5e] font-mono text-md tracking-[0.3em] uppercase font-bold block">Let&apos;s Collaborate</span>
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-[#0a1f1c] leading-tight tracking-tight uppercase">
            Want to be part of <span className="text-[#1a8a5e] italic font-light">HGER 2026?</span>
          </h2>
          <p className="text-[#2d4a45]/70 text-md font-medium max-w-xl mx-auto leading-relaxed">
            We&apos;re talking to brands, partners, and government bodies who want to help shape Haryana&apos;s green energy story.
          </p>
          <div className="pt-4">
            <Link href="/contact" passHref>
              <button className="bg-[#1b8a5e] hover:bg-[#0e5a3d] text-white text-[11px] font-bold px-10 py-4 rounded-xl tracking-widest uppercase transition-all shadow-[0_10px_20px_rgba(27,138,94,0.15)] active:scale-[0.98] cursor-pointer">
                Get in Touch
              </button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
