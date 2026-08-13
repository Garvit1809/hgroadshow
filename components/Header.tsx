"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>({});
  const pathname = usePathname();

  const toggleDropdown = (name: string) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  const navLinks: any[] = [
    { name: "About", href: "/about" },
    { name: "Roadshow Route", href: "/roadshow" },
    { name: "Sponsors", href: "/sponsors" },
    {
      name: "Visit",
      href: "#",
      subLinks: [
        { name: "Why Visit", href: "/why-visit" },
        { name: "Visitor Profile", href: "/visitor-profile" }
      ]
    },
    { name: "Summit", href: "/summit" },
    { name: "Schemes", href: "/schemes" },
    {
      name: "Know More",
      href: "#",
      subLinks: [
        { name: "Contact Us", href: "/contact" },
        { name: "Get brochure", href: "/hger_roadshow_brochure.pdf", download: true, target: "_blank" }
      ]
    }
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full pt-0 px-0">
      <header className="w-full flex flex-col relative max-w-full rounded-none border-b border-[#e5eae6]/85 bg-white/95 backdrop-blur-md py-3 px-2 md:px-12 shadow-[0_10px_30px_rgba(26,60,40,0.06)]">
        {/* Inner container to keep elements aligned to standard page width */}
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
          {/* Logos Container */}
          <div className="flex items-center shrink-0 gap-3 md:gap-5">
            {/* New HGER Logo */}
            <Link href="/" className="flex items-center group">
              <img
                src="/logo-png.png"
                alt="HGER Logo"
                className="h-10 md:h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </Link>

            {/* Vertical Divider */}
            <div className="block h-12 w-[1px] bg-gray-300"></div>

            {/* Supported By Logo */}
            <div className="flex flex-col items-center justify-center">
              <img
                src="/haryana-energy-depart.png"
                alt="Government of Haryana Energy Department"
                className="h-10 md:h-18 w-auto object-contain"
              />
            </div>
          </div>

          {/* Desktop Nav - 7 original links */}
          <nav className="hidden lg:flex items-center space-x-5 xl:space-x-7 text-[11px] font-manrope font-extrabold text-[#0c2415] tracking-wider uppercase relative">
            {navLinks.map((link) => {
              const isActive = pathname === link.href && link.href !== "#"; // Detect if page matches

              return (
                <div key={link.name} className="relative group py-2">
                  <Link
                    href={link.href}
                    className={`relative flex items-center gap-1 hover:text-[#1a8a5e] transition-colors ${isActive
                      ? "text-[#1a8a5e] font-black"
                      : "text-[#0c2415] hover:text-[#1a8a5e]"
                      }`}
                  >
                    {link.name}
                    {link.subLinks && (
                      <svg className="w-3 h-3 group-hover:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    )}
                    {isActive && (
                      <motion.span
                        layoutId="activeIndicator"
                        className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#1a8a5e] rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {link.subLinks && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 min-w-[160px]">
                      <div className="bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-[#e5eae6] py-2 flex flex-col overflow-hidden">
                        {link.subLinks.map((subLink: any) => (
                          <Link
                            key={subLink.name}
                            href={subLink.href}
                            target={subLink.target}
                            rel={subLink.rel}
                            download={subLink.download}
                            className="px-5 py-2.5 hover:bg-[#f3f9f5] hover:text-[#1a8a5e] transition-colors whitespace-nowrap text-left normal-case text-[13px] font-semibold text-[#0c2415]"
                          >
                            {subLink.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Action Button - RESERVE A SLOT */}
          <div className="hidden sm:flex items-center">
            <Link
              href="/sponsors"
              className="bg-[#031c0e] hover:bg-[#1a8a5e] text-white text-[10px] xl:text-[11px] font-bold px-5 py-2.5 rounded-full tracking-widest uppercase transition-all shadow-[0_4px_12px_rgba(3,28,14,0.15)] hover:shadow-lg whitespace-nowrap active:scale-95 font-sans"
            >
              RESERVE A SLOT
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-9 h-9 flex flex-col items-center justify-center space-y-1 z-50 text-[#0c2415] bg-[#f3f9f5] hover:bg-[#e4efe8] active:scale-95 rounded-full transition-all cursor-pointer"
            aria-label="Toggle Menu"
          >
            <motion.span
              animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 5 : 0 }}
              className="w-4 h-0.5 bg-current rounded-full transition-all"
            />
            <motion.span
              animate={{ opacity: isOpen ? 0 : 1 }}
              className="w-4 h-0.5 bg-current rounded-full transition-all"
            />
            <motion.span
              animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -5 : 0 }}
              className="w-4 h-0.5 bg-current rounded-full transition-all"
            />
          </button>
        </div>

        {/* Mobile Expandable Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden w-full"
            >
              <div className="pt-6 pb-4 flex flex-col space-y-4 border-t border-[#e5eae6] mt-4 px-2 max-w-6xl mx-auto w-full">
                <nav className="flex flex-col space-y-3 font-manrope font-extrabold text-xs text-[#0c2415] uppercase tracking-wider">
                  {navLinks.map((link) => (
                    <div key={link.name} className="flex flex-col">
                      <Link
                        href={link.href}
                        onClick={(e) => {
                          if (link.subLinks) {
                            e.preventDefault();
                            toggleDropdown(link.name);
                          } else {
                            setIsOpen(false);
                          }
                        }}
                        className={`hover:text-[#1a8a5e] transition-colors py-1.5 flex items-center justify-between ${pathname === link.href && link.href !== "#" ? "text-[#1a8a5e] font-black" : ""
                          }`}
                      >
                        {link.name}
                        {link.subLinks && (
                          <svg className={`w-3 h-3 transition-transform duration-200 ${openDropdowns[link.name] ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                        )}
                      </Link>
                      <AnimatePresence>
                        {link.subLinks && openDropdowns[link.name] && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="flex flex-col pl-4 mt-1 space-y-1 border-l-2 border-[#e5eae6] mb-2 overflow-hidden"
                          >
                            {link.subLinks.map((subLink: any) => (
                              <Link
                                key={subLink.name}
                                href={subLink.href}
                                target={subLink.target}
                                rel={subLink.rel}
                                download={subLink.download}
                                onClick={() => setIsOpen(false)}
                                className="py-2 hover:text-[#1a8a5e] text-[12px] text-gray-700 font-bold normal-case transition-colors"
                              >
                                {subLink.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </nav>

                <div className="pt-4 border-t border-[#e5eae6]/80 flex flex-col sm:hidden">
                  <Link
                    href="/sponsors"
                    onClick={() => setIsOpen(false)}
                    className="w-full text-center bg-[#031c0e] hover:bg-[#1a8a5e] text-white text-xs font-bold py-3 rounded-full transition-all shadow-md uppercase tracking-wider"
                  >
                    RESERVE A SLOT
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}
