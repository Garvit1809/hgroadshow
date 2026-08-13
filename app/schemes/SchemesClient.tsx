"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function SchemesPage() {
  // Rotating text logic
  const rotatingWords = [
    "REAL SUBSIDIES",
    "REAL SAVINGS",
    "LIVE ENROLMENT"
  ];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  // Savings Calculator State
  const [propertyType, setPropertyType] = useState('2.4'); // multiplier / type
  const [monthlyBill, setMonthlyBill] = useState(5000);
  const [savingsNum, setSavingsNum] = useState('₹52,200');
  const [paybackYears, setPaybackYears] = useState(4);
  const [systemSize, setSystemSize] = useState('3 kW');
  const [subsidyAmt, setSubsidyAmt] = useState('₹78,000');

  const calculateSavings = (billVal: number) => {
    const bill = billVal || 0;
    const annualBill = bill * 12;
    const savings = Math.round(annualBill * 0.87);

    // System sizing logic
    let capacity = 2;
    if (bill < 3000) capacity = 1;
    else if (bill < 6000) capacity = 3;
    else if (bill < 12000) capacity = 5;
    else capacity = 10;

    let subsidy = 30000;
    if (capacity >= 3) subsidy = 78000;
    else if (capacity === 2) subsidy = 60000;

    const systemCost = capacity * 65000;
    const afterSubsidy = systemCost - subsidy;
    const payback = Math.max(1, Math.round(afterSubsidy / (savings || 1)));

    setSavingsNum('₹' + savings.toLocaleString('en-IN'));
    setSystemSize(capacity + ' kW');
    setSubsidyAmt('₹' + subsidy.toLocaleString('en-IN'));
    setPaybackYears(payback);
  };

  useEffect(() => {
    calculateSavings(monthlyBill);
  }, [monthlyBill]);

  return (
    <div className="space-y-16 max-w-[1400px] mx-auto px-6 py-8 md:py-12">

      {/* Hero Section with Rotating Text */}
      <section className="relative flex flex-col items-center justify-center text-center pt-8 md:pt-12">
        <div className="space-y-6 max-w-4xl">
          <div className="flex items-center justify-center space-x-3 mb-2">
            <span className="w-8 h-[1px] bg-[#0a1f1c]/10"></span>
            <span className="text-[#1a8a5e] font-mono text-md tracking-[0.3em] uppercase font-bold">Government Schemes</span>
            <span className="w-8 h-[1px] bg-[#0a1f1c]/10"></span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-sans font-bold tracking-tighter leading-[1.1] text-[#0a1f1c] uppercase flex flex-col items-center justify-center">
            <div className="opacity-95">POWERING HARYANA WITH</div>

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
            Every HGER city stop hosts live government enrolment desks — visitors apply for renewable energy subsidies on the spot. Here&apos;s a complete guide to the schemes powering Haryana&apos;s green transition.
          </p>
        </div>
      </section>

      {/* Schemes Grid */}
      <section className="space-y-10 md:space-y-14">
        <div className="text-center space-y-2">
          <span className="text-[#1a8a5e] font-mono text-md tracking-[0.3em] uppercase font-bold">6 Active Schemes · Live in Haryana</span>
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-[#0a1f1c] uppercase tracking-tight">Subsidies that change the math.</h2>
          <p className="text-[#2d4a45]/60 text-md max-w-2xl mx-auto font-medium">
            From rooftop solar to electric mobility to industrial hydrogen — central + state schemes stacked together unlock the most attractive renewable economics India has ever offered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">

          {/* Scheme 1 */}
          <div className="bg-white rounded-[32px] p-8 border border-[#1a8a5e]/10 flex flex-col justify-between hover:shadow-xl transition-all duration-500 group relative overflow-hidden">
            <div className="space-y-5">
              <div className="flex justify-between items-center">
                <span className="bg-[#0a1f1c] text-white text-[8px] font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider">Central · Active</span>
              </div>
              <svg className="w-10 h-10 text-[#1a8a5e] bg-[#f0f7f4] rounded-xl p-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 21h18M5 21V10l7-5 7 5v11" />
                <rect x="9" y="13" width="6" height="8" fill="currentColor" opacity="0.15" />
                <circle cx="18" cy="6" r="2.5" fill="currentColor" opacity="0.4" />
              </svg>
              <h3 className="text-xl font-bold text-[#0a1f1c] uppercase tracking-tight">PM Surya Ghar Muft Bijli Yojana</h3>
              <p className="text-[#2d4a45]/70 text-md leading-relaxed font-medium">
                Free electricity up to 300 units/month for 1 crore households across India through rooftop solar adoption.
              </p>
              <div className="bg-[#f0f7f4]/60 rounded-2xl p-4 space-y-2 border border-[#1a8a5e]/5">
                <div className="flex justify-between text-[11px]"><span className="text-[#2d4a45]/60 uppercase tracking-widest font-mono text-[9px]">Subsidy</span><span className="font-bold text-[#0a1f1c]">Up to ₹78,000</span></div>
                <div className="flex justify-between text-[11px]"><span className="text-[#2d4a45]/60 uppercase tracking-widest font-mono text-[9px]">Monthly savings</span><span className="font-bold text-[#0a1f1c]">₹1,800–4,500</span></div>
                <div className="flex justify-between text-[11px]"><span className="text-[#2d4a45]/60 uppercase tracking-widest font-mono text-[9px]">Capacity</span><span className="font-bold text-[#0a1f1c]">1–3 kW typical</span></div>
                <div className="flex justify-between text-[11px]"><span className="text-[#2d4a45]/60 uppercase tracking-widest font-mono text-[9px]">Best for</span><span className="font-bold text-[#0a1f1c]">Homes, RWAs, schools</span></div>
              </div>
            </div>
            <div className="mt-6 pt-5 border-t border-[#1a8a5e]/5 flex items-center justify-between">
              <span className="text-[10px] font-mono text-[#1a8a5e] font-bold uppercase tracking-wider">Saves ~78% on energy bill</span>
              <div className="w-16 h-1 bg-[#1a8a5e]/10 rounded-full overflow-hidden">
                <div className="h-full bg-[#1a8a5e]" style={{ width: '78%' }}></div>
              </div>
            </div>
          </div>

          {/* Scheme 2: Featured */}
          <div className="bg-[#0e5a3d]/[0.02] rounded-[32px] p-8 border-2 border-[#1a8a5e] flex flex-col justify-between hover:shadow-xl transition-all duration-500 group relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#1a8a5e] text-white text-[8px] font-mono font-bold px-4 py-1.5 rounded-bl-2xl uppercase tracking-wider">Most Subsidised</div>
            <div className="space-y-5">
              <div className="flex justify-between items-center pt-2">
                <span className="bg-[#1a8a5e]/10 text-[#1a8a5e] text-[8px] font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider">Farmer Heavy</span>
              </div>
              <svg className="w-10 h-10 text-[#1a8a5e] bg-[#f0f7f4] rounded-xl p-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2v4M5 5l3 3M2 12h4M5 19l3-3M19 5l-3 3M22 12h-4M19 19l-3-3" />
                <circle cx="12" cy="12" r="4" fill="currentColor" opacity="0.2" />
                <path d="M9 22h6M12 18v4" />
              </svg>
              <h3 className="text-xl font-bold text-[#0a1f1c] uppercase tracking-tight">PM-KUSUM (Kisan Urja Suraksha)</h3>
              <p className="text-[#2d4a45]/70 text-md leading-relaxed font-medium">
                Solar agricultural pumps & grid-connected solar plants for farmers — central + state subsidy stacked together.
              </p>
              <div className="bg-[#f0f7f4]/60 rounded-2xl p-4 space-y-2 border border-[#1a8a5e]/5">
                <div className="flex justify-between text-[11px]"><span className="text-[#2d4a45]/60 uppercase tracking-widest font-mono text-[9px]">Total subsidy</span><span className="font-bold text-[#0a1f1c]">Up to 90%</span></div>
                <div className="flex justify-between text-[11px]"><span className="text-[#2d4a45]/60 uppercase tracking-widest font-mono text-[9px]">Farmer pays</span><span className="font-bold text-[#0a1f1c]">As low as 10%</span></div>
                <div className="flex justify-between text-[11px]"><span className="text-[#2d4a45]/60 uppercase tracking-widest font-mono text-[9px]">Components</span><span className="font-bold text-[#0a1f1c]">A · B · C</span></div>
                <div className="flex justify-between text-[11px]"><span className="text-[#2d4a45]/60 uppercase tracking-widest font-mono text-[9px]">Best for</span><span className="font-bold text-[#0a1f1c]">Farmers, FPOs</span></div>
              </div>
            </div>
            <div className="mt-6 pt-5 border-t border-[#1a8a5e]/5 flex items-center justify-between">
              <span className="text-[10px] font-mono text-[#1a8a5e] font-bold uppercase tracking-wider">90% Govt Funded</span>
              <div className="w-16 h-1 bg-[#1a8a5e]/10 rounded-full overflow-hidden">
                <div className="h-full bg-[#1a8a5e]" style={{ width: '90%' }}></div>
              </div>
            </div>
          </div>

          {/* Scheme 3 */}
          <div className="bg-white rounded-[32px] p-8 border border-[#1a8a5e]/10 flex flex-col justify-between hover:shadow-xl transition-all duration-500 group relative overflow-hidden">
            <div className="space-y-5">
              <div className="flex justify-between items-center">
                <span className="bg-[#1e6fba] text-white text-[8px] font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider">State · Haryana</span>
              </div>
              <svg className="w-10 h-10 text-[#1e6fba] bg-[#f0f5fa] rounded-xl p-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <rect x="3" y="6" width="18" height="13" rx="2" />
                <path d="M3 10h18M7 14h2M11 14h6" />
                <circle cx="12" cy="3" r="1.5" fill="currentColor" />
              </svg>
              <h3 className="text-xl font-bold text-[#0a1f1c] uppercase tracking-tight">Haryana Solar Policy 2024</h3>
              <p className="text-[#2d4a45]/70 text-md leading-relaxed font-medium">
                Additional state subsidy for rooftop solar, generous net metering benefits, and time-bound DISCOM approvals.
              </p>
              <div className="bg-[#f0f5fa]/60 rounded-2xl p-4 space-y-2 border border-[#1e6fba]/5">
                <div className="flex justify-between text-[11px]"><span className="text-[#2d4a45]/60 uppercase tracking-widest font-mono text-[9px]">State top-up</span><span className="font-bold text-[#0a1f1c]">Extra ₹20,000+</span></div>
                <div className="flex justify-between text-[11px]"><span className="text-[#2d4a45]/60 uppercase tracking-widest font-mono text-[9px]">Net metering</span><span className="font-bold text-[#0a1f1c]">Sell extra to grid</span></div>
                <div className="flex justify-between text-[11px]"><span className="text-[#2d4a45]/60 uppercase tracking-widest font-mono text-[9px]">Approval window</span><span className="font-bold text-[#0a1f1c]">15 days</span></div>
                <div className="flex justify-between text-[11px]"><span className="text-[#2d4a45]/60 uppercase tracking-widest font-mono text-[9px]">Best for</span><span className="font-bold text-[#0a1f1c]">All Haryana residents</span></div>
              </div>
            </div>
            <div className="mt-6 pt-5 border-t border-[#1a8a5e]/5 flex items-center justify-between">
              <span className="text-[10px] font-mono text-[#1e6fba] font-bold uppercase tracking-wider">Payback in 4–5 years</span>
              <div className="w-16 h-1 bg-[#1e6fba]/10 rounded-full overflow-hidden">
                <div className="h-full bg-[#1e6fba]" style={{ width: '65%' }}></div>
              </div>
            </div>
          </div>

          {/* Scheme 4 */}
          <div className="bg-white rounded-[32px] p-8 border border-[#1a8a5e]/10 flex flex-col justify-between hover:shadow-xl transition-all duration-500 group relative overflow-hidden">
            <div className="space-y-5">
              <div className="flex justify-between items-center">
                <span className="bg-[#14b8a6] text-white text-[8px] font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider">EV · Mobility</span>
              </div>
              <svg className="w-10 h-10 text-[#14b8a6] bg-[#f0faf9] rounded-xl p-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M3 16V8a2 2 0 012-2h14a2 2 0 012 2v8M3 16h18M5 16v2a1 1 0 001 1h2a1 1 0 001-1v-2M15 16v2a1 1 0 001 1h2a1 1 0 001-1v-2" />
                <path d="M7 10l2 2-2 2M11 14h6" strokeLinecap="round" />
              </svg>
              <h3 className="text-xl font-bold text-[#0a1f1c] uppercase tracking-tight">FAME-II + Haryana EV Policy</h3>
              <p className="text-[#2d4a45]/70 text-md leading-relaxed font-medium">
                Subsidies on electric two-wheelers, three-wheelers, and buses + complete waiver on registration fees and road tax.
              </p>
              <div className="bg-[#f0faf9]/60 rounded-2xl p-4 space-y-2 border border-[#14b8a6]/5">
                <div className="flex justify-between text-[11px]"><span className="text-[#2d4a45]/60 uppercase tracking-widest font-mono text-[9px]">EV 2-wheeler</span><span className="font-bold text-[#0a1f1c]">₹15,000+ off</span></div>
                <div className="flex justify-between text-[11px]"><span className="text-[#2d4a45]/60 uppercase tracking-widest font-mono text-[9px]">Road tax</span><span className="font-bold text-[#0a1f1c]">100% waiver</span></div>
                <div className="flex justify-between text-[11px]"><span className="text-[#2d4a45]/60 uppercase tracking-widest font-mono text-[9px]">Registration</span><span className="font-bold text-[#0a1f1c]">Free</span></div>
                <div className="flex justify-between text-[11px]"><span className="text-[#2d4a45]/60 uppercase tracking-widest font-mono text-[9px]">Best for</span><span className="font-bold text-[#0a1f1c]">Fleet, individual, commercial</span></div>
              </div>
            </div>
            <div className="mt-6 pt-5 border-t border-[#1a8a5e]/5 flex items-center justify-between">
              <span className="text-[10px] font-mono text-[#14b8a6] font-bold uppercase tracking-wider">70% Cheaper vs Petrol</span>
              <div className="w-16 h-1 bg-[#14b8a6]/10 rounded-full overflow-hidden">
                <div className="h-full bg-[#14b8a6]" style={{ width: '70%' }}></div>
              </div>
            </div>
          </div>

          {/* Scheme 5 */}
          <div className="bg-white rounded-[32px] p-8 border border-[#1a8a5e]/10 flex flex-col justify-between hover:shadow-xl transition-all duration-500 group relative overflow-hidden">
            <div className="space-y-5">
              <div className="flex justify-between items-center">
                <span className="bg-[#0e5a3d] text-white text-[8px] font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider">Industrial · 2030</span>
              </div>
              <svg className="w-10 h-10 text-[#0e5a3d] bg-[#f0f7f4] rounded-xl p-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M12 2L4 12c0 5 3.5 9 8 9s8-4 8-9L12 2z" fill="currentColor" opacity="0.15" />
                <path d="M12 2L4 12c0 5 3.5 9 8 9s8-4 8-9L12 2z" />
              </svg>
              <h3 className="text-xl font-bold text-[#0a1f1c] uppercase tracking-tight">National Green Hydrogen</h3>
              <p className="text-[#2d4a45]/70 text-md leading-relaxed font-medium">
                ₹19,744 crore outlay for green hydrogen production, electrolyzers, and pilot industrial decarbonisation projects.
              </p>
              <div className="bg-[#f0f7f4]/60 rounded-2xl p-4 space-y-2 border border-[#0e5a3d]/5">
                <div className="flex justify-between text-[11px]"><span className="text-[#2d4a45]/60 uppercase tracking-widest font-mono text-[9px]">Outlay</span><span className="font-bold text-[#0a1f1c]">₹19,744 Cr</span></div>
                <div className="flex justify-between text-[11px]"><span className="text-[#2d4a45]/60 uppercase tracking-widest font-mono text-[9px]">Target</span><span className="font-bold text-[#0a1f1c]">5 MMT by 2030</span></div>
                <div className="flex justify-between text-[11px]"><span className="text-[#2d4a45]/60 uppercase tracking-widest font-mono text-[9px]">Incentives</span><span className="font-bold text-[#0a1f1c]">SIGHT scheme</span></div>
                <div className="flex justify-between text-[11px]"><span className="text-[#2d4a45]/60 uppercase tracking-widest font-mono text-[9px]">Best for</span><span className="font-bold text-[#0a1f1c]">SMEs, refineries, fertilizer</span></div>
              </div>
            </div>
            <div className="mt-6 pt-5 border-t border-[#1a8a5e]/5 flex items-center justify-between">
              <span className="text-[10px] font-mono text-[#0e5a3d] font-bold uppercase tracking-wider">Industrial Future</span>
              <div className="w-16 h-1 bg-[#0e5a3d]/10 rounded-full overflow-hidden">
                <div className="h-full bg-[#0e5a3d]" style={{ width: '85%' }}></div>
              </div>
            </div>
          </div>

          {/* Scheme 6 */}
          <div className="bg-white rounded-[32px] p-8 border border-[#1a8a5e]/10 flex flex-col justify-between hover:shadow-xl transition-all duration-500 group relative overflow-hidden">
            <div className="space-y-5">
              <div className="flex justify-between items-center">
                <span className="bg-[#0d4a82] text-white text-[8px] font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider">HAREDA · Nodal Agency</span>
              </div>
              <svg className="w-10 h-10 text-[#0d4a82] bg-[#f0f4fa] rounded-xl p-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" fill="currentColor" opacity="0.15" />
                <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
              </svg>
              <h3 className="text-xl font-bold text-[#0a1f1c] uppercase tracking-tight">HAREDA Outreach</h3>
              <p className="text-[#2d4a45]/70 text-md leading-relaxed font-medium">
                Haryana Renewable Energy Development Agency — awareness drives, vendor empanelment, and direct citizen support.
              </p>
              <div className="bg-[#f0f4fa]/60 rounded-2xl p-4 space-y-2 border border-[#0d4a82]/5">
                <div className="flex justify-between text-[11px]"><span className="text-[#2d4a45]/60 uppercase tracking-widest font-mono text-[9px]">Approved vendors</span><span className="font-bold text-[#0a1f1c]">300+ in HR</span></div>
                <div className="flex justify-between text-[11px]"><span className="text-[#2d4a45]/60 uppercase tracking-widest font-mono text-[9px]">Subsidy disbursal</span><span className="font-bold text-[#0a1f1c]">Direct to bank</span></div>
                <div className="flex justify-between text-[11px]"><span className="text-[#2d4a45]/60 uppercase tracking-widest font-mono text-[9px]">Enrolment</span><span className="font-bold text-[#0a1f1c]">Live at HGER</span></div>
                <div className="flex justify-between text-[11px]"><span className="text-[#2d4a45]/60 uppercase tracking-widest font-mono text-[9px]">Best for</span><span className="font-bold text-[#0a1f1c]">All Haryana citizens</span></div>
              </div>
            </div>
            <div className="mt-6 pt-5 border-t border-[#1a8a5e]/5 flex items-center justify-between">
              <span className="text-[10px] font-mono text-[#0d4a82] font-bold uppercase tracking-wider">Live Enrolment Desks</span>
              <div className="w-16 h-1 bg-[#0d4a82]/10 rounded-full overflow-hidden">
                <div className="h-full bg-[#0d4a82]" style={{ width: '60%' }}></div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Savings Calculator Section */}
      <section className="bg-[#0a1f1c] rounded-[40px] p-8 md:p-14 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#1a8a5e]/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="space-y-6">
            <span className="text-[#1a8a5e] font-mono text-md tracking-[0.3em] uppercase font-bold">Quick Savings Calculator</span>
            <h2 className="text-3xl md:text-5xl font-sans font-bold leading-tight uppercase tracking-tight">
              See your <span className="text-[#1a8a5e] italic font-light">savings</span> in 30 seconds.
            </h2>
            <p className="text-white/60 text-md leading-relaxed max-w-md font-medium">
              Enter your monthly electricity bill — our system dynamically stacks the PM Surya Ghar subsidy + Haryana state top-up to show your direct savings and payback time.
            </p>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
              <div className="space-y-2">
                <label className="text-xs md:text-md font-mono uppercase tracking-widest text-[#1a8a5e] font-bold">Property Type</label>
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full bg-[#0a1f1c] text-white border border-white/10 rounded-xl p-3 text-xs font-bold tracking-wider focus:outline-none focus:ring-1 focus:ring-[#1a8a5e]"
                >
                  <option value="2.4">Home (1-3 BHK)</option>
                  <option value="3">Bungalow / Villa</option>
                  <option value="6">Small Office / Shop</option>
                  <option value="12">Factory / SME</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs md:text-md font-mono uppercase tracking-widest text-[#1a8a5e] font-bold">Average Monthly Bill (₹)</label>
                <input
                  type="number"
                  value={monthlyBill}
                  onChange={(e) => setMonthlyBill(Number(e.target.value))}
                  min="500"
                  className="w-full bg-[#0a1f1c] text-white border border-white/10 rounded-xl p-3 text-xs font-bold tracking-wider focus:outline-none focus:ring-1 focus:ring-[#1a8a5e]"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs md:text-md font-mono uppercase tracking-widest text-[#1a8a5e] font-bold">Location</label>
                <select className="w-full bg-[#0a1f1c] text-white border border-white/10 rounded-xl p-3 text-xs font-bold tracking-wider opacity-60 pointer-events-none" disabled>
                  <option>Haryana (5.5 sun hours/day)</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center text-center p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#1a8a5e]/25 rounded-full blur-[30px]" />
            <span className="text-[10px] font-mono text-[#1a8a5e] font-bold uppercase tracking-[0.2em] mb-2">Annual Savings</span>
            <div className="text-5xl sm:text-6xl font-sans font-black text-[#1a8a5e] italic tracking-tight mb-4">{savingsNum}</div>
            <p className="text-white/70 text-md leading-relaxed max-w-xs font-medium mb-8">
              After installing rooftop solar. Investment completely recovered in about <span className="text-[#1a8a5e] font-bold font-mono">{paybackYears}</span> years.
            </p>

            <div className="w-full grid grid-cols-2 gap-4">
              <div className="bg-[#0a1f1c] border border-white/5 rounded-2xl p-4 text-center">
                <div className="text-[8px] font-mono uppercase tracking-widest text-white/40 mb-1">System Size</div>
                <div className="text-lg font-bold text-white uppercase">{systemSize}</div>
              </div>
              <div className="bg-[#0a1f1c] border border-white/5 rounded-2xl p-4 text-center">
                <div className="text-[8px] font-mono uppercase tracking-widest text-white/40 mb-1">Govt. Subsidy</div>
                <div className="text-lg font-bold text-[#1a8a5e] uppercase">{subsidyAmt}</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* How to Enrol step-by-step */}
      <section className="space-y-10 md:space-y-14">
        <div className="text-center space-y-2">
          <span className="text-[#1a8a5e] font-mono text-md tracking-[0.3em] uppercase font-bold">How to Enrol</span>
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-[#0a1f1c] uppercase tracking-tight">From enquiry to enrolment — at our stalls.</h2>
          <p className="text-[#2d4a45]/60 text-md max-w-xl mx-auto font-medium">
            Skip the paperwork chaos. HGER&apos;s live enrolment desks make the entire process happen at your nearest city stop.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { step: "01", title: "Visit a HGER stop", desc: "Walk in to any of the 10 city activations. Bring your last electricity bill and identity proof." },
            { step: "02", title: "Talk to an expert", desc: "HAREDA + DISCOM officers + sponsor representatives explain your options based on your usage." },
            { step: "03", title: "Apply on the spot", desc: "Live PM Surya Ghar / PM-KUSUM application desks — fill, scan documents, submit. Done in 30 minutes." },
            { step: "04", title: "Track approval", desc: "Receive SMS updates on subsidy approval. DISCOM net-metering and installation completed within 30 days." }
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-[24px] border border-[#1a8a5e]/5 p-6 hover:border-[#1a8a5e]/25 transition-all duration-300 space-y-4">
              <div className="text-3xl font-sans font-light italic text-[#1a8a5e]">{item.step}</div>
              <h4 className="text-lg font-bold text-[#0a1f1c] uppercase tracking-tight">{item.title}</h4>
              <p className="text-[#2d4a45]/70 text-md leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Bottom Strip */}
      <section className="bg-white border border-[#1a8a5e]/15 rounded-[40px] p-8 md:p-14 text-center relative overflow-hidden shadow-xl max-w-5xl mx-auto">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#1a8a5e]/5 rounded-full blur-[80px] pointer-events-none"></div>
        <div className="max-w-3xl mx-auto space-y-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-[#0a1f1c] leading-tight tracking-tight uppercase">
            Visit a stop. <span className="text-[#1a8a5e] italic font-light">Save lakhs.</span>
          </h2>
          <p className="text-[#2d4a45]/70 text-md font-medium max-w-xl mx-auto leading-relaxed">
            All 10 HGER city stops have live enrolment desks. Find your nearest one and walk in.
          </p>
          <div className="pt-4">
            <Link href="/roadshow" passHref>
              <button className="bg-[#1b8a5e] hover:bg-[#0e5a3d] text-white text-[11px] font-bold px-10 py-4 rounded-xl tracking-widest uppercase transition-all shadow-md cursor-pointer">
                Find a Stop Near You
              </button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
