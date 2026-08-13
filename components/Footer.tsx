import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#0a1f1c] text-white pt-16  px-6 overflow-hidden relative">
      {/* Decorative Blur */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#1a8a5e]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-row lg:justify-between gap-8 lg:gap-0 mb-16 md:mb-20">


          {/* Branding Column */}
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start lg:max-w-sm">

            <div className="flex items-center justify-center lg:justify-start mb-6">
              <img
                src="/logo-png.png"
                alt="HGER Logo"
                className="h-16 md:h-20 w-auto object-contain"
              />
            </div>
            <p className="text-white/50 text-[13px] font-bold max-w-sm leading-relaxed mb-8">
              Haryana&apos;s largest clean energy outreach program. Bringing renewable energy solutions across solar, wind, EV, and clean-tech to every district.
            </p>

            <p className="text-xs font-bold text-white/20 tracking-widest uppercase mb-8">
              © 2026 HGER ROADSHOW. All rights reserved.
            </p>
            <div className="flex justify-center lg:justify-start gap-3">
              {/* Facebook */}
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-xl border border-white/5 bg-white/[0.02] flex items-center justify-center text-white/50 hover:text-white hover:bg-gradient-to-r hover:from-[#69C242] hover:to-[#50AC26] hover:border-transparent cursor-pointer transition-all shadow-sm">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H7v3h2v9h4v-9h3.6l.4-3H13V6c0-.5.5-1 1-1h2V2h-3a4 4 0 0 0-4 4v2z" />
                </svg>
              </a>
              {/* X / Twitter */}
              <a href="#" aria-label="X (Twitter)" className="w-9 h-9 rounded-xl border border-white/5 bg-white/[0.02] flex items-center justify-center text-white/50 hover:text-white hover:bg-gradient-to-r hover:from-[#69C242] hover:to-[#50AC26] hover:border-transparent cursor-pointer transition-all shadow-sm">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-xl border border-white/5 bg-white/[0.02] flex items-center justify-center text-white/50 hover:text-white hover:bg-gradient-to-r hover:from-[#69C242] hover:to-[#50AC26] hover:border-transparent cursor-pointer transition-all shadow-sm">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-xl border border-white/5 bg-white/[0.02] flex items-center justify-center text-white/50 hover:text-white hover:bg-gradient-to-r hover:from-[#69C242] hover:to-[#50AC26] hover:border-transparent cursor-pointer transition-all shadow-sm">
                <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>

          </div>

          {/* Links Columns */}
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
            <h4 className="text-xs font-black tracking-[0.3em] text-[#1a8a5e] uppercase mb-6">Quick Links</h4>
            <ul className="space-y-3.5 text-[13px] font-bold">
              <li><Link href="/roadshow" className="text-white/50 hover:text-[#1a8a5e] transition-colors">The Roadshow</Link></li>
              <li><Link href="/sponsors" className="text-white/50 hover:text-[#1a8a5e] transition-colors">Sponsorship</Link></li>
              <li><Link href="/schemes" className="text-white/50 hover:text-[#1a8a5e] transition-colors">Govt. Schemes</Link></li>
              <li><Link href="/summit" className="text-white/50 hover:text-[#1a8a5e] transition-colors">Summit 2026</Link></li>
            </ul>
          </div>

          <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
            <h4 className="text-xs font-black tracking-[0.3em] text-[#1a8a5e] uppercase mb-6">Roadshow</h4>
            <ul className="space-y-3.5 text-[13px] font-bold">
              <li><Link href="/about" className="text-white/50 hover:text-[#1a8a5e] transition-colors">About Us</Link></li>
              <li><Link href="/press" className="text-white/50 hover:text-[#1a8a5e] transition-colors">Press Kit</Link></li>
              <li><Link href="/contact#faq" className="text-white/50 hover:text-[#1a8a5e] transition-colors">FAQs</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
            <h4 className="text-xs font-black tracking-[0.3em] text-[#1a8a5e] uppercase mb-6">Get in Touch</h4>
            <ul className="space-y-3.5 text-[13px] font-bold">
              <li className="text-white/50 leading-relaxed tracking-wider block text-center lg:text-left">
                <a href="mailto:enquiry@hgeroadshow.com">
                  enquiry@hgeroadshow.com
                </a>
              </li>
              <li className="text-white/50 leading-relaxed tracking-wider block text-center lg:text-left">
                <a href="tel:+919896649341">
                  +91 98966 49341
                </a>
              </li>
              <li className="text-white/50 leading-relaxed tracking-wider block text-center lg:text-left">
                Plot No 2337, 1st Floor <br />
                Sector 7A, Faridabad 121006
              </li>
            </ul>
          </div>
        </div>


      </div>
    </footer>
  );
}
