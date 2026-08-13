import type { Metadata } from "next";
import WhyVisitClient from "./WhyVisitClient";

export const metadata: Metadata = {
  title: "Why Visit HGER 2026 — Reasons to Attend",
  description:
    "Why visit HGER 2026? Discover the top reasons — live solar & EV demos, on-the-spot government subsidy enrolment, B2B meet-ups, dealer onboarding, and free entry at every city stop.",
  keywords: [
    "why visit HGER 2026",
    "reasons to attend Haryana roadshow",
    "solar expo Haryana free entry",
    "EV demo event Haryana",
    "green energy exhibition India",
    "HAREDA event Haryana",
    "free solar scheme enrolment",
  ],
  openGraph: {
    title: "Why Visit HGER 2026 — 6 Compelling Reasons",
    description:
      "Live demos, subsidy enrolment, B2B meets, dealer onboarding, and more — all free at HGER 2026 across 10 Haryana cities.",
    url: "https://www.hgeroadshow.com/why-visit",
    images: [{ url: "/logo-png.png", width: 1200, height: 630, alt: "Why Visit HGER 2026" }],
  },
  twitter: {
    title: "Why Visit HGER 2026 — 6 Compelling Reasons",
    description:
      "Live demos, subsidy enrolment, B2B meets & more — free at HGER 2026 across 10 Haryana cities.",
    images: ["/logo-png.png"],
  },
  alternates: {
    canonical: "https://www.hgeroadshow.com/why-visit",
  },
};

export default function WhyVisitPage() {
  return <WhyVisitClient />;
}
