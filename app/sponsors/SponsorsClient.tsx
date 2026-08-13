"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SponsorsPage() {
  const rotatingWords = [
    "TWENTY SEATS ONLY",
    "THREE TIERS",
    "MAXIMUM LEADS",
    "REAL BUSINESS"
  ];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const [formData, setFormData] = useState({
    fullName: '',
    designation: '',
    companyName: '',
    industryCategory: '',
    workEmail: '',
    phone: '',
    sponsorshipInterest: '',
    goals: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          subject: `New Sponsorship Application from ${formData.companyName}`,
          ...formData
        })
      });

      const result = await response.json();
      if (result.success) {
        setSubmitMessage('Application submitted successfully! We will get in touch with you within 48 hours.');
        setFormData({
          fullName: '',
          designation: '',
          companyName: '',
          industryCategory: '',
          workEmail: '',
          phone: '',
          sponsorshipInterest: '',
          goals: ''
        });
      } else {
        setSubmitMessage(result.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('Failed to submit application. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="space-y-16 max-w-[1400px] mx-auto px-6 py-8 md:py-12">

      {/* Hero Section with Rotating Text */}
      <section className="relative flex flex-col items-center justify-center text-center pt-8 md:pt-12">
        <div className="space-y-6 max-w-4xl">
          <div className="flex items-center justify-center space-x-3 mb-2">
            <span className="w-8 h-[1px] bg-[#0a1f1c]/10"></span>
            <span className="text-[#1a8a5e] font-mono text-md tracking-[0.3em] uppercase font-bold">Sponsorship</span>
            <span className="w-8 h-[1px] bg-[#0a1f1c]/10"></span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-sans font-bold tracking-tighter leading-[1.1] text-[#0a1f1c] uppercase flex flex-col items-center justify-center">
            <div className="opacity-95">RESERVED STAGE FOR</div>

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
            HGER caps participation at exactly 20 brands across all 10 cities — guaranteeing every sponsor real visibility, real leads, and real ROI. Once filled, applications close. Period.
          </p>
        </div>
      </section>

      {/* Two-Column Layout: Form on Left, Slots on Right */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* Left: Application Form */}
        <div id="apply" className="bg-white rounded-[40px] p-6 md:p-10 border border-[#1a8a5e]/10 shadow-sm order-2 lg:order-1 scroll-mt-24">
          <div className="mb-8 space-y-2">
            <span className="text-[#1a8a5e] font-mono text-xs sm:text-sm tracking-[0.2em] uppercase font-bold block">Apply Now · Reserve Your Slot</span>
            <h2 className="text-2xl sm:text-3xl font-sans font-bold text-[#0a1f1c] uppercase tracking-tight">Tell us about your brand.</h2>
            <p className="text-[#2d4a45]/60 text-xs sm:text-sm font-medium leading-relaxed">
              Drop your details and we&apos;ll be in touch within 48 hours to walk you through the right tier for your goals.
            </p>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-1">
              <label className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#1a8a5e] font-bold">Full Name</label>
              <input
                type="text"
                name="fullName"
                required
                placeholder="Your Full Name"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full bg-[#f0f7f4] border-none rounded-xl p-3.5 text-sm font-medium text-[#0a1f1c] placeholder:text-[#2d4a45]/40 focus:ring-2 focus:ring-[#1a8a5e] transition-all"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#1a8a5e] font-bold">Designation</label>
              <input
                type="text"
                name="designation"
                required
                placeholder="CMO / Head of Marketing / etc."
                value={formData.designation}
                onChange={handleInputChange}
                className="w-full bg-[#f0f7f4] border-none rounded-xl p-3.5 text-sm font-medium text-[#0a1f1c] placeholder:text-[#2d4a45]/40 focus:ring-2 focus:ring-[#1a8a5e] transition-all"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#1a8a5e] font-bold">Company Name</label>
              <input
                type="text"
                name="companyName"
                required
                placeholder="Your Company Name"
                value={formData.companyName}
                onChange={handleInputChange}
                className="w-full bg-[#f0f7f4] border-none rounded-xl p-3.5 text-sm font-medium text-[#0a1f1c] placeholder:text-[#2d4a45]/40 focus:ring-2 focus:ring-[#1a8a5e] transition-all"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#1a8a5e] font-bold">Industry Category</label>
              <div className="relative">
                <select
                  name="industryCategory"
                  required
                  value={formData.industryCategory}
                  onChange={handleInputChange}
                  className="w-full bg-[#f0f7f4] border-none rounded-xl p-3.5 text-sm font-medium text-[#0a1f1c] focus:ring-2 focus:ring-[#1a8a5e] transition-all appearance-none cursor-pointer"
                >
                  <option value="">Select Category</option>
                  <option>Solar — Rooftop / Commercial</option>
                  <option>Solar — Utility / Industrial</option>
                  <option>EV — Two/Three Wheeler</option>
                  <option>EV — Cars / Fleet</option>
                  <option>EV — Charging Infrastructure</option>
                  <option>Energy Storage / Batteries</option>
                  <option>Wind / Hybrid</option>
                  <option>Biofuels / Biogas</option>
                  <option>Green Hydrogen</option>
                  <option>Financial Services — Green Loans</option>
                  <option>Other</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-[#1a8a5e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#1a8a5e] font-bold">Work Email</label>
              <input
                type="email"
                name="workEmail"
                required
                placeholder="yourname@company.com"
                value={formData.workEmail}
                onChange={handleInputChange}
                className="w-full bg-[#f0f7f4] border-none rounded-xl p-3.5 text-sm font-medium text-[#0a1f1c] placeholder:text-[#2d4a45]/40 focus:ring-2 focus:ring-[#1a8a5e] transition-all"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#1a8a5e] font-bold">Phone</label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="+91 ..."
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full bg-[#f0f7f4] border-none rounded-xl p-3.5 text-sm font-medium text-[#0a1f1c] placeholder:text-[#2d4a45]/40 focus:ring-2 focus:ring-[#1a8a5e] transition-all"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#1a8a5e] font-bold">Sponsorship Interest</label>
              <div className="relative">
                <select
                  name="sponsorshipInterest"
                  required
                  value={formData.sponsorshipInterest}
                  onChange={handleInputChange}
                  className="w-full bg-[#f0f7f4] border-none rounded-xl p-3.5 text-sm font-medium text-[#0a1f1c] focus:ring-2 focus:ring-[#1a8a5e] transition-all appearance-none cursor-pointer"
                >
                  <option value="">Pick a Tier</option>
                  <option>Pradhaan — Title Sponsor (1 slot)</option>
                  <option>Saarthi — Co-Title (7 slots)</option>
                  <option>Hamsafar — Associate (12 slots)</option>
                  <option>Open to discussion</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-[#1a8a5e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#1a8a5e] font-bold">Tell us about your goals</label>
              <textarea
                name="goals"
                placeholder="What outcomes are you hoping HGER delivers? Brand awareness, dealer network, sales pipeline, ESG storytelling — anything specific."
                value={formData.goals}
                onChange={handleInputChange}
                className="w-full bg-[#f0f7f4] border-none rounded-xl p-3.5 text-sm font-medium text-[#0a1f1c] placeholder:text-[#2d4a45]/40 h-24 focus:ring-2 focus:ring-[#1a8a5e] transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#0a1f1c] text-white py-4 rounded-full text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#1a8a5e] transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </button>
            {submitMessage && (
              <p className={`text-center text-xs font-mono font-bold tracking-wider pt-2 ${submitMessage.includes('successfully') ? 'text-[#1a8a5e]' : 'text-red-500'}`}>
                {submitMessage}
              </p>
            )}
            <p className="text-center text-[10px] font-mono tracking-widest text-[#2d4a45]/40">
              Or email <a href="mailto:enquiry@hgeroadshow.com" className="text-[#1a8a5e] font-bold hover:underline">enquiry@hgeroadshow.com</a>
            </p>
          </form>
        </div>

        {/* Right: Live Booking Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative bg-[#061412] rounded-[40px] md:rounded-[60px] p-8 md:p-14 shadow-[0_60px_120px_-30px_rgba(0,0,0,0.4)] overflow-hidden border border-white/5 order-1 lg:order-2"
        >
          {/* Dot Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row justify-between items-start mb-10 md:mb-14 gap-4">
              <div>
                <span className="text-[8px] font-black tracking-[0.3em] text-[#2cc985]/50 uppercase block mb-3">Live Booking Map · First-Come Basis</span>
                <h3 className="text-2xl md:text-4xl font-sans font-bold text-white">Only <span className="text-[#2cc985] italic font-light">18 slots</span> remain.</h3>
                <p className="text-white/40 text-md max-w-xs font-medium mt-2">
                  Every sponsor commits across all 10 cities — no city-by-city participation.
                </p>
              </div>
              <div className="bg-[#1a8a5e]/20 border border-[#1a8a5e]/30 px-4 py-1.5 rounded-full">
                <span className="text-[9px] font-bold text-[#2cc985] tracking-widest uppercase">Live Status</span>
              </div>
            </div>

            <div className="grid grid-cols-4 sm:grid-cols-5 gap-2 sm:gap-3 md:gap-4">
              {Array.from({ length: 20 }).map((_, i) => {
                const total = 20;
                const filledCount = 2;
                const discussionCount = 0;
                const isFilled = i < filledCount;
                const isDiscussion = i >= filledCount && i < filledCount + discussionCount;
                return (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className={`aspect-square rounded-lg md:rounded-2xl flex items-center justify-center text-[10px] md:text-sm font-extrabold transition-all duration-500 border ${isFilled
                      ? 'bg-[#2cc985]/60 border-[#2cc985]/40 text-white shadow-[0_0_22px_rgba(44,201,133,0.12)]'
                      : isDiscussion
                        ? 'bg-[#f59e0b]/60 border-[#f59e0b]/25 text-white shadow-[0_0_8px_rgba(245,158,11,0.04)] opacity-95'
                        : 'bg-white/[0.03] border-white/5 text-white/40 hover:border-white/20'
                      }`}
                  >
                    {(i + 1).toString().padStart(2, '0')}
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-10 md:mt-12 flex flex-wrap items-center gap-6 md:gap-8">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#2cc985] shadow-[0_0_10px_rgba(44,201,133,0.6)]"></div>
                <div>
                  <div className="text-sm md:text-base font-bold text-[#2cc985]/60">Filled</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#f59e0b] shadow-[0_0_8px_rgba(245,158,11,0.4)]"></div>
                <div>
                  <div className="text-sm md:text-base font-bold text-[#f59e0b]/60">Discussion</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-transparent border border-[#94a3b8]"></div>
                <div>
                  <div className="text-sm md:text-base font-bold text-[#94a3b8]">Open Slot</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="space-y-10 md:space-y-14">
        <div className="text-center space-y-2">
          <span className="text-[#1a8a5e] font-mono text-md tracking-[0.3em] uppercase font-bold block">Sponsorship Tiers</span>
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-[#0a1f1c] uppercase tracking-tight">Two tiers. Twenty seats. One unforgettable journey.</h2>
          <p className="text-[#2d4a45]/60 text-md max-w-xl mx-auto font-medium">
            Every tier is built around one promise — your brand, in front of the right buyer, in every city we visit. We are selecting partners who share our vision for a sustainable Haryana.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto pt-4 items-stretch">

          {/* Tier III · Associate */}
          <div className="bg-white rounded-[32px] p-8 border border-[#1a8a5e]/10 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group">
            <div className="space-y-6">
              <div className="text-left">
                <h3 className="text-3xl font-sans font-bold text-[#0a1f1c] uppercase tracking-tight">Associate Sponsor</h3>
                <p className="text-[#2d4a45]/60 font-mono italic text-[11px] mt-1">19 slots available · co-traveller status</p>
              </div>

              <ul className="space-y-3 pt-4 border-t border-[#1a8a5e]/5">
                {["18 sqm Premium Built-Up Pavilion", "Presence Across All 10 Cities", "10-Minute Sponsor Presentation", "Access to Government & Institutional Buyers", "Summit & Awards Participation", "Statewide Branding & Promotion"].map((f, fi) => (
                  <li key={fi} className="flex gap-2.5 items-start text-md text-[#2d4a45]/70 leading-relaxed font-medium text-left">
                    <span className="text-[#1a8a5e] font-bold">→</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 pt-6 border-t border-[#1a8a5e]/5 space-y-4 text-left">
              <div>
                <div className="text-[8px] font-mono uppercase tracking-widest text-[#2d4a45]/40 mb-1">Pricing</div>
                <div className="text-xl font-bold text-[#0a1f1c]">Cost - Rs. 7,00,000 <span className="text-xs font-mono font-normal text-[#2d4a45]/60">· 19 slots</span></div>
              </div>
            </div>
          </div>

          {/* Tier I · Title Sponsor (Pradhaan) */}
          <div className="bg-[#0a1f1c] text-white rounded-[32px] p-8 border border-[#1a8a5e]/20 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group relative">
            <div className="absolute top-0 right-0 bg-[#1a8a5e] text-white text-[8px] font-mono font-bold px-4 py-1.5 rounded-bl-2xl uppercase tracking-wider">Featured</div>
            
            <div className="space-y-6">
              <div className="text-left">
                <h3 className="text-3xl font-sans font-bold text-white uppercase tracking-tight">Title Sponsor</h3>
                <p className="text-white/60 font-mono italic text-[11px] mt-1">1 slot available · exclusive title</p>
              </div>

              <ul className="space-y-3 pt-4 border-t border-white/5">
                {["36 sqm Flagship Built-Up Pavilion", "Presence Across All 10 Cities", "HGER 2026 \"Presented By\" Naming Rights", "Opening Ceremony & VIP Recognition", "Top stage during Awards Night", "Premium Branding Across All Cities", "Featured Summit Speaking Opportunity", "Exclusive Government & Media Visibility"].map((f, fi) => (
                  <li key={fi} className="flex gap-2.5 items-start text-md text-white/70 leading-relaxed font-medium text-left">
                    <span className="text-[#1a8a5e] font-bold">→</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 pt-6 border-t border-white/5 space-y-4 text-left">
              <div>
                <div className="text-[8px] font-mono uppercase tracking-widest text-white/40 mb-1">Pricing</div>
                <div className="text-xl font-bold text-white">Cost - Rs. 12,00,000 <span className="text-xs font-mono font-normal text-white/60">· 1 slot</span></div>
              </div>
            </div>
          </div>

        </div>

        <p className="text-center text-[10px] sm:text-xs text-[#2d4a45]/60 max-w-2xl mx-auto font-medium leading-relaxed pt-4">
          All tiers include co-branding with HAREDA, DHBVN, and UHBVN. Final packages customized based on category exclusivity and city activation depth.
        </p>
      </section>

      {/* Audience Segmentation Grid (Sleek SVGs, No Emojis) - Commented Out */}
      {/* 
      <section className="space-y-10 md:space-y-14">
        <div className="text-center space-y-2">
          <span className="text-[#1a8a5e] font-mono text-md tracking-[0.3em] uppercase font-bold">Audience Demographics</span>
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-[#0a1f1c] uppercase tracking-tight">Buyers with budgets, not browsers.</h2>
          <p className="text-[#2d4a45]/60 text-md max-w-xl mx-auto font-medium">
            8 core visitor segments. Every attendee carrying procurement budgets, residential subsidies, agricultural needs, or commercial intent.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {[
            {
              title: "Dealers & Distributors",
              pct: "9% of footfall",
              desc: "Entrepreneurs and existing dealers building their green energy channel across Haryana — your next city-level distribution partner.",
              icon: (
                <svg className="w-6 h-6 text-[#14b8a6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              )
            },
            {
              title: "SMEs & Industry",
              pct: "8% of footfall",
              desc: "Cement, plywood, textile, and auto-component factories paying ₹5–50 lakh/month on electricity — the biggest deal sizes on the floor.",
              icon: (
                <svg className="w-6 h-6 text-[#2cc985]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1" />
                </svg>
              )
            },
            {
              title: "Households",
              pct: "18% of footfall",
              desc: "Homeowners cutting ₹3,000–8,000/month electricity bills with ₹78,000 PM Surya Ghar subsidy — zero bills, 25 years.",
              icon: (
                <svg className="w-6 h-6 text-[#1a8a5e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9M5 10v11h14V10" />
                </svg>
              )
            },
            {
              title: "Farmers & FPOs",
              pct: "15% of footfall",
              desc: "Cotton, wheat, and basmati farmers replacing diesel pumps with PM-KUSUM solar — 75–90% subsidised, zero running cost.",
              icon: (
                <svg className="w-6 h-6 text-[#1e6fba]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l-.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
              )
            },
            {
              title: "Govt. & Panchayats",
              pct: "13% of footfall",
              desc: "6,000+ Gram Panchayats with budgets allocated for solar streetlights, electric utility fleets, and retrofits.",
              icon: (
                <svg className="w-6 h-6 text-[#14b8a6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              )
            },
            {
              title: "Hotels & Commercial",
              pct: "12% of footfall",
              desc: "ESG-pressured commercial office buildings, hospitality venues, and dhabas seeking smart solar-plus-storage models.",
              icon: (
                <svg className="w-6 h-6 text-[#2cc985]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 9h1.5m2.25 0H15m-5.25 3h1.5m2.25 0H15m-5.25 3h1.5m2.25 0H15" />
                </svg>
              )
            },
            {
              title: "Schools & Colleges",
              pct: "14% of footfall",
              desc: "1,200+ schools & 80+ colleges seeking rooftop solar systems under PM Surya Ghar and educational CSR schemes.",
              icon: (
                <svg className="w-6 h-6 text-[#1a8a5e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479L12 21l-6.825-3.943a12.083 12.083 0 01.665-6.479L12 14z" />
                </svg>
              )
            },
            {
              title: "Hospitals & Healthcare",
              pct: "11% of footfall",
              desc: "Govt hospitals, clinics, PHCs needing reliable 24×7 solar backup, oxygen plant systems, and clean backup solutions.",
              icon: (
                <svg className="w-6 h-6 text-[#1e6fba]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              )
            }
          ].map((segment, i) => (
            <div key={i} className="bg-white rounded-[24px] border border-[#1a8a5e]/10 p-6 flex flex-col justify-between hover:border-[#1a8a5e]/30 transition-all shadow-sm">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-[#f0f7f4] flex items-center justify-center">
                  {segment.icon}
                </div>
                <h4 className="text-sm sm:text-base font-bold text-[#0a1f1c] uppercase tracking-tight">{segment.title}</h4>
                <p className="text-[#2d4a45]/70 text-xs leading-relaxed font-medium">{segment.desc}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#1a8a5e]/5 text-[9px] font-mono font-bold text-[#1a8a5e] uppercase tracking-wider">
                {segment.pct}
              </div>
            </div>
          ))}
        </div>
      </section>
      */}

      {/* Why HGER over Generic Expo */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { num: "01", title: "Exclusivity", desc: "Only 20 sponsors total. At a typical green energy expo, 200+ brands compete for attention. At HGER, your brand is one of just 20 — guaranteed visibility, in every city, every day." },
          { num: "02", title: "Govt-aligned", desc: "Live HAREDA, DHBVN, UHBVN enrolment desks at every stall. Visitors aren't browsing — they're applying for subsidies right next to your booth. Maximum-intent leads." },
          { num: "03", title: "10× Reach", desc: "One commitment, 10 cities, 50,000+ visitors, 3 months of coverage. Doing this individually city-by-city would cost 5× more — and you'd still not have HAREDA partnership." }
        ].map((why, i) => (
          <div key={i} className="bg-[#0e5a3d]/[0.02] p-10 rounded-[32px] border border-[#1a8a5e]/10 text-center space-y-4">
            <div className="text-5xl font-sans font-light italic text-[#1a8a5e]">/{why.num}</div>
            <h3 className="text-xl font-bold uppercase tracking-tight text-[#0a1f1c]">{why.title}</h3>
            <p className="text-[#2d4a45]/70 text-xs leading-relaxed font-medium">{why.desc}</p>
          </div>
        ))}
      </section>

    </div>
  );
}
