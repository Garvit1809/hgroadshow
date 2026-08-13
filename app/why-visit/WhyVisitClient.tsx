"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function WhyVisit() {
  const points = [
    {
      num: "01",
      title: "Discover Live Solar Solutions",
      desc: [
        "See The Latest Solar Panels, Inverters, And Storage Systems Live & In Action",
        "Hands-on Product Demonstrations By Top Manufacturers Compare"
      ]
    },
    {
      num: "02",
      title: "Unlock Government Subsidies & Schemes",
      desc: [
        "Get step-by-step guidance on PM Surya Ghar (₹78,000 subsidy)",
        "PM-KUSUM scheme for farmers — 75% subsidy on solar pumps",
        "HAREDA empanelment, net metering & state-specific incentive walkthroughs"
      ]
    },
    {
      num: "03",
      title: "Meet Experts Face-to-Face",
      desc: [
        "1-on-1 consultations with certified solar engineers & energy auditors",
        "Site assessment & ROI calculation done on the spot"
      ]
    },
    {
      num: "04",
      title: "Explore Business & Franchise Opportunities",
      desc: [
        "Connect with India's top green energy providers & more franchise brands",
        "Dealer & distributor empanelment on the spot",
        "EPC sub-contractor tie-ups & channel partnerships available"
      ]
    },
    {
      num: "05",
      title: "Get Financed — On the Spot",
      desc: [
        "Solar loan & EMI options from leading banks & NBFCs at the venue",
        "Zero-cost EMI schemes for households & MSMEs",
        "Green bond & CSR funding guidance for institutions"
      ]
    },
    {
      num: "06",
      title: "Walk Away With a Clear Action Plan",
      desc: [
        "Free personalised solar feasibility report for every visitor",
        "Subsidy application assistance before you leave"
      ]
    }
  ];

  return (
    <div className="space-y-16 max-w-[1400px] mx-auto px-6 py-8 md:py-12">
      {/* Header Section */}
      <section className="max-w-4xl mx-auto text-center pt-8 md:pt-16 pb-6 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#1a8a5e]/5 rounded-full blur-[80px] pointer-events-none"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 flex flex-col items-center"
        >
          <div className="flex items-center space-x-3 mb-4">
            <span className="w-12 h-[1px] bg-[#1a8a5e]/20"></span>
            <span className="text-[#1a8a5e] font-mono text-md tracking-[0.3em] uppercase font-bold">Why Visit</span>
            <span className="w-12 h-[1px] bg-[#1a8a5e]/20"></span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-sans font-bold tracking-tighter leading-[1.1] text-[#0a1f1c] uppercase flex flex-col items-center mb-6">
            <span className="opacity-95 text-center">ONE DAY. ONE DESTINATION.</span>
            <span className="relative italic font-light text-[#1a8a5e] block mt-2 text-center">
              EVERY SOLAR ANSWER
            </span>
          </h1>

          <p className="text-[#2d4a45]/80 text-[13px] sm:text-base max-w-2xl mx-auto leading-relaxed pt-2 font-medium">
            Whether you&apos;re a homeowner, school principal, a farmer, a business owner, a dealer, or an investor — this roadshow is built for you. Get answers, meet experts, discover schemes, and take the first step towards energy independence.
          </p>
        </motion.div>
      </section>

      {/* Grid Section */}
      <section className="space-y-12 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-[32px] p-8 md:p-10 border border-[#1a8a5e]/10 group hover:shadow-xl transition-all duration-500 shadow-sm"
            >
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div className="flex-shrink-0">
                  <span className="text-[#1a8a5e] font-mono text-2xl font-light italic">/{point.num}</span>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-sans font-bold text-[#0a1f1c] mb-6 uppercase tracking-tight group-hover:text-[#1a8a5e] transition-colors">
                    {point.title}
                  </h3>
                  <div className="space-y-4 pt-6 border-t border-[#1a8a5e]/10">
                    {point.desc.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#1a8a5e]/50 flex-shrink-0"></span>
                        <span className="text-[#2d4a45]/80 font-medium leading-relaxed text-sm md:text-base">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-white border border-[#1a8a5e]/15 rounded-[40px] p-8 md:p-14 text-center relative overflow-hidden shadow-xl max-w-5xl mx-auto">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#1a8a5e]/5 rounded-full blur-[80px] pointer-events-none"></div>
        <div className="max-w-3xl mx-auto space-y-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-[#0a1f1c] leading-tight tracking-tight uppercase">
            Click here to <span className="text-[#1a8a5e] italic font-light">know the dates</span>
          </h2>
          <p className="text-[#2d4a45]/70 text-xs sm:text-base font-medium max-w-xl mx-auto leading-relaxed">
            Check the complete schedule and find out when the roadshow is coming to a city near you.
          </p>
          <div className="pt-4">
            <Link href="/roadshow" passHref>
              <button className="bg-[#1b8a5e] hover:bg-[#0e5a3d] text-white text-[11px] font-bold px-10 py-4 rounded-xl tracking-widest uppercase transition-all shadow-md cursor-pointer">
                See Roadshow Route
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
