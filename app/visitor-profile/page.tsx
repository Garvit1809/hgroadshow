import type { Metadata } from "next";
import VisitorProfileClient from "./VisitorProfileClient";

export const metadata: Metadata = {
  title: "Visitor Profiles — Who Attends HGER 2026",
  description:
    "HGER 2026 visitor profiles — farmers, SMEs, institutions, households, dealers, panchayats, hospitals, and schools. 8 buyer segments with real green energy purchasing intent across Haryana.",
  keywords: [
    "HGER visitor profile",
    "who attends green energy expo",
    "Haryana solar buyer segments",
    "SME buyer green energy",
    "farmer solar subsidy buyer",
    "institutional solar buyer",
    "EV buyer Haryana",
    "green energy dealer Haryana",
  ],
  openGraph: {
    title: "HGER 2026 — Who Visits & Why",
    description:
      "8 buyer segments at HGER 2026 — farmers, SMEs, institutions, households & more. Every visitor carries real purchasing intent for solar, EV & clean energy.",
    url: "https://www.hgeroadshow.com/visitor-profile",
    images: [{ url: "/logo-png.png", width: 1200, height: 630, alt: "HGER 2026 Visitor Profiles" }],
  },
  twitter: {
    title: "HGER 2026 — Who Visits & Why",
    description:
      "8 buyer segments at HGER 2026 — farmers, SMEs, institutions, households & more across Haryana.",
    images: ["/logo-png.png"],
  },
  alternates: {
    canonical: "https://www.hgeroadshow.com/visitor-profile",
  },
};

export default function VisitorProfilePage() {
  return <VisitorProfileClient />;
}
