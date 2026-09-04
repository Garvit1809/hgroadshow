"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactPage() {
  // Rotating words logic
  const rotatingWords = [
    "GET IN TOUCH",
    "PARTNERSHIPS",
    "OFFICIAL DESK",
    "24/7 SUPPORT"
  ];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    organisation: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
          ...formData
        })
      });

      const result = await response.json();
      if (result.success) {
        setSubmitMessage('Message sent successfully! We will reach out shortly.');
        setFormData({
          name: '',
          organisation: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitMessage(result.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('Failed to send message. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "When does HGER 2026 take place?",
      a: "HGER 2026 runs from October 4 to December 13, 2026. The roadshow begins in Palwal, traverses 9 more Haryana cities, and ends with the Summit & Awards Night in Chandigarh on December 13."
    },
    {
      q: "How many sponsorship slots are available?",
      a: "Exactly 20 — split across three tiers: 1 Pradhaan (Title), 7 Saarthi (Co-Title), and 12 Hamsafar (Associate). Once filled, applications close."
    },
    {
      q: "Can I sponsor for just one city?",
      a: "No — HGER is a unified 10-city journey. All sponsors commit across the entire route. This guarantees buyers see your brand consistently and helps your dealer network develop statewide momentum."
    },
    {
      q: "Is the event open to the public?",
      a: "Yes! All 9 city stops have free public entry, with live demos, government enrolment desks, and Haryanvi-language outreach. The Chandigarh Summit & Awards Night is invitation-only."
    },
    {
      q: "Who can apply for HGER Awards?",
      a: "There are two award tracks: Exhibitor Awards (for sponsor brands) and Visitor Awards (open to farmers, institutions, panchayats, SMEs, and households across Haryana). Self-nominations open February 15, 2026."
    },
    {
      q: "Which government bodies are partnered with HGER?",
      a: "HAREDA (Haryana Renewable Energy Development Agency) is the official outreach partner. DHBVN and UHBVN co-host the live enrolment desks. CED (Chandigarh) is the Summit partner."
    },
    {
      q: "Will HGER expand beyond Haryana?",
      a: "Yes — HGER 2027 will expand to Punjab, UP, and Rajasthan. The expansion will be officially announced at the closing summit in Chandigarh. Title sponsor receives first right of refusal."
    }
  ];

  return (
    <div className="space-y-16 max-w-[1400px] mx-auto px-6 py-8 md:py-12">

      {/* Hero Section with Rotating Text */}
      <section className="relative flex flex-col items-center justify-center text-center pt-8 md:pt-12">
        <div className="space-y-6 max-w-4xl">
          <div className="flex items-center justify-center space-x-3 mb-2">
            <span className="w-8 h-[1px] bg-[#0a1f1c]/10"></span>
            <span className="text-[#1a8a5e] font-mono text-md tracking-[0.3em] uppercase font-bold">Contact</span>
            <span className="w-8 h-[1px] bg-[#0a1f1c]/10"></span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-sans font-bold tracking-tighter leading-[1.1] text-[#0a1f1c] uppercase flex flex-col items-center justify-center">
            <div className="opacity-95">LET&apos;S STRIKE A</div>

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
            Sponsorship, media, government partnerships, dealer interest, or just a question — we&apos;re here. Pick the right way to reach us and you&apos;ll get a thoughtful, fast response.
          </p>
        </div>
      </section>

      {/* Quick Contact Routes */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: "Sponsorship",
            email: "enquiry@hgeroadshow.com",
            desc: "Brand & partnership enquiries — tier discussions, slot bookings, category exclusivity, and custom packages.",
            icon: (
              <svg className="w-6 h-6 text-[#1a8a5e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.109A2.25 2.25 0 0112.75 21.5h-1.5a2.25 2.25 0 01-2.25-2.263V19.13m0-3.07M9.375 19.5a9.38 9.38 0 012.625-.372 9.336 9.336 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M9.375 19.5v-.003c-.501-.91-.786-1.957-.786-3.07M9.375 19.5v.109a2.25 2.25 0 01-2.25 2.25h-1.5a2.25 2.25 0 01-2.25-2.25v-.11m0-3.07a8.66 8.66 0 01-1.808-1.344M1.743 14.122a4.125 4.125 0 017.533-2.493M12.75 12a3 3 0 11-6 0 3 3 0 016 0zm7.5 0a3 3 0 11-6 0 3 3 0 016 0zM12.75 3.75a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            )
          },
          {
            title: "Media & Press",
            email: "enquiry@hgeroadshow.com",
            desc: "Journalists, editors, content partners — interviews, quotes, fact-checking, and HGER media kit access.",
            icon: (
              <svg className="w-6 h-6 text-[#1e6fba]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
              </svg>
            )
          },
          {
            title: "General Enquiries",
            email: "enquiry@hgeroadshow.com",
            desc: "Visiting a stop, dealer interest, careers, volunteering, or anything else — we'll route your message to the right team.",
            icon: (
              <svg className="w-6 h-6 text-[#14b8a6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025 4.486 4.486 0 00-.406-1.637C3.43 15.974 2.25 14.118 2.25 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
              </svg>
            )
          }
        ].map((route, i) => (
          <div key={i} className="bg-white p-8 rounded-[32px] border border-[#1a8a5e]/10 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#f0f7f4] flex items-center justify-center">
                {route.icon}
              </div>
              <h3 className="text-base font-bold uppercase tracking-tight text-[#0a1f1c]">{route.title}</h3>
              <p className="text-xs text-[#2d4a45]/70 leading-relaxed font-medium">{route.desc}</p>
            </div>
            <div className="mt-8 pt-6 border-t border-[#1a8a5e]/5">
              <div className="text-[8px] font-mono uppercase tracking-[0.2em] text-[#1a8a5e] font-bold mb-1">Email us</div>
              <div className="text-sm font-bold text-[#0a1f1c] font-mono">{route.email}</div>
            </div>
          </div>
        ))}
      </section>

      {/* Main Grid Info + Form */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

        {/* Info Card */}
        <div className="bg-[#0a1f1c] rounded-[32px] p-8 md:p-12 text-white relative overflow-hidden flex flex-col justify-between min-h-[400px]">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#1a8a5e]/25 rounded-full blur-[80px] pointer-events-none"></div>

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-sans font-bold leading-tight uppercase tracking-tight">
              Headquartered in <span className="text-[#1a8a5e] italic font-light">Faridabad.</span>
            </h2>
            <p className="text-white/40 text-md leading-relaxed max-w-sm font-medium">
              HGER operates from Faridabad — central to our Haryana focus, bringing clean energy outreach and direct partner engagement to the state&apos;s active commercial hub.
            </p>
          </div>

          <div className="space-y-6 mt-12 pt-6 border-t border-white/5">
            {[
              {
                label: "Office",
                val: "Plot No 2337, 1st Floor Sector 7A, Faridabad 121006",
                icon: (
                  <svg className="w-5 h-5 text-[#1a8a5e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1115 0z" />
                  </svg>
                )
              },
              {
                label: "Phone",
                val: "+91 98966 49341 / +91 98966 49343",
                icon: (
                  <svg className="w-5 h-5 text-[#1a8a5e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.802-5.14-4.117-6.945-6.945l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                )
              },
              {
                label: "Hours",
                val: "Mon–Fri · 10:00 – 19:00 IST",
                icon: (
                  <svg className="w-5 h-5 text-[#1a8a5e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <div className="text-[#1a8a5e] font-mono text-[9px] tracking-[0.2em] uppercase font-bold">{item.label}</div>
                  {item.label === "Phone" ? (
                    <div className="text-sm sm:text-base font-sans font-bold uppercase tracking-tight flex flex-col">
                      <a href="tel:+919896649341" className="hover:text-[#1a8a5e] transition-colors font-mono">+91 98966 49341</a>
                      <a href="tel:+919896649343" className="hover:text-[#1a8a5e] transition-colors font-mono">+91 98966 49343</a>
                    </div>
                  ) : (
                    <div className="text-sm sm:text-base font-sans font-bold uppercase tracking-tight">{item.val}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-[32px] p-6 md:p-10 border border-[#1a8a5e]/10 shadow-sm flex flex-col justify-center">
          <span className="text-[#1a8a5e] font-mono text-xs sm:text-sm tracking-[0.2em] uppercase font-bold block mb-2">Enquiry Desk</span>
          <h2 className="text-2xl sm:text-3xl font-sans font-bold text-[#0a1f1c] uppercase tracking-tight mb-3">Send us a message.</h2>
          <p className="text-[#2d4a45]/70 text-xs sm:text-sm leading-relaxed font-medium mb-6">
            Fill out the form and a relevant team member will be in touch within 24–48 working hours.
          </p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className="bg-[#f0f7f4] border-none rounded-xl p-3.5 text-sm font-medium text-[#0a1f1c] placeholder:text-[#2d4a45]/40 focus:ring-1 focus:ring-[#1a8a5e] transition-all"
              />
              <input
                type="text"
                name="organisation"
                value={formData.organisation}
                onChange={handleInputChange}
                placeholder="Organisation / Company"
                className="bg-[#f0f7f4] border-none rounded-xl p-3.5 text-sm font-medium text-[#0a1f1c] placeholder:text-[#2d4a45]/40 focus:ring-1 focus:ring-[#1a8a5e] transition-all"
              />
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email Address"
                className="bg-[#f0f7f4] border-none rounded-xl p-3.5 text-sm font-medium text-[#0a1f1c] placeholder:text-[#2d4a45]/40 focus:ring-1 focus:ring-[#1a8a5e] transition-all"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone Number"
                className="bg-[#f0f7f4] border-none rounded-xl p-3.5 text-sm font-medium text-[#0a1f1c] placeholder:text-[#2d4a45]/40 focus:ring-1 focus:ring-[#1a8a5e] transition-all"
              />
            </div>
            <div className="relative">
              <select
                name="subject"
                required
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full bg-[#f0f7f4] border-none rounded-xl p-3.5 text-sm font-medium text-[#0a1f1c] focus:ring-1 focus:ring-[#1a8a5e] transition-all appearance-none cursor-pointer"
              >
                <option value="">Select a Subject / Topic</option>
                <option value="Sponsorship enquiry">Sponsorship enquiry</option>
                <option value="Media & press">Media & press</option>
                <option value="Government / Partnership">Government / Partnership</option>
                <option value="Dealer interest">Dealer interest</option>
                <option value="Visitor / attendee question">Visitor / attendee question</option>
                <option value="Speaker proposal">Speaker proposal</option>
                <option value="Award nomination">Award nomination</option>
                <option value="Career / Internship">Career / Internship</option>
                <option value="Other">Other</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg className="w-5 h-5 text-[#1a8a5e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            <textarea
              name="message"
              required
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Your Message..."
              className="w-full bg-[#f0f7f4] border-none rounded-xl p-3.5 text-sm font-medium text-[#0a1f1c] placeholder:text-[#2d4a45]/40 h-28 focus:ring-1 focus:ring-[#1a8a5e] transition-all resize-none"
            ></textarea>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#0a1f1c] text-white py-4 rounded-full text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#1a8a5e] transition-all shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
            {submitMessage && (
              <p className={`text-center text-xs font-mono font-bold tracking-wider pt-2 ${submitMessage.includes('successfully') ? 'text-[#1a8a5e]' : 'text-red-500'}`}>
                {submitMessage}
              </p>
            )}
          </form>
        </div>

      </section>

      {/* Accordion FAQ Area */}
      <section id="faq" className="space-y-10 md:space-y-14 scroll-mt-52 sm:scroll-mt-40 md:scroll-mt-44">
        <div className="text-center space-y-2">
          <span className="text-[#1a8a5e] font-mono text-md tracking-[0.3em] uppercase font-bold">Frequently Asked Questions</span>
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-[#0a1f1c] uppercase tracking-tight">Quick answers to common questions.</h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-3 pt-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-[24px] border border-[#1a8a5e]/10 overflow-hidden shadow-sm hover:border-[#1a8a5e]/25 transition-all">
              <div
                className="p-6 cursor-pointer flex justify-between items-center bg-white hover:bg-[#f0f7f4]/20 transition-colors select-none"
                onClick={() => toggleFaq(idx)}
              >
                <h4 className="text-lg font-bold text-[#0a1f1c] uppercase tracking-tight pr-4">{faq.q}</h4>
                <span className="text-[#1a8a5e] font-mono text-xl font-bold transition-transform duration-300" style={{ transform: openFaq === idx ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                  +
                </span>
              </div>
              <AnimatePresence>
                {openFaq === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-6 pt-1 text-md text-[#2d4a45]/70 leading-relaxed font-medium border-t border-[#1a8a5e]/5">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
