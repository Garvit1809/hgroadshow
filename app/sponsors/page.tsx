import type { Metadata } from "next";
import SponsorsClient from "./SponsorsClient";

export const metadata: Metadata = {
  title: "Sponsor HGER 2026 — Reserve Your Slot",
  description:
    "Only 20 sponsor slots across all 10 cities. Apply to become a Title or Associate Sponsor at HGER 2026 — guaranteed visibility, real leads, government-backed ROI across Haryana's green energy roadshow.",
  keywords: [
    "sponsor HGER 2026",
    "green energy expo sponsorship India",
    "Haryana roadshow sponsorship",
    "title sponsor renewable energy",
    "associate sponsor green energy",
    "solar expo sponsor Haryana",
    "EV event sponsorship",
    "HAREDA partner brand",
    "green marketing Haryana",
  ],
  openGraph: {
    title: "Sponsor HGER 2026 — Only 20 Slots Available",
    description:
      "Reserve your stage at India's most impactful green energy roadshow. 20 brands. 10 cities. 50,000+ pre-qualified buyers. HAREDA co-branding included.",
    url: "https://www.hgeroadshow.com/sponsors",
    images: [{ url: "/logo-png.png", width: 1200, height: 630, alt: "HGER 2026 Sponsorship" }],
  },
  twitter: {
    title: "Sponsor HGER 2026 — Only 20 Slots Available",
    description:
      "20 brands. 10 cities. 50,000+ buyers. Reserve your sponsorship slot at HGER 2026.",
    images: ["/logo-png.png"],
  },
  alternates: {
    canonical: "https://www.hgeroadshow.com/sponsors",
  },
};

export default function SponsorsPage() {
  return <SponsorsClient />;
}
