import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "HGER 2026 — Haryana Green Energy Roadshow",
  description:
    "HGER 2026 is Haryana's largest green energy roadshow — 10 cities, 3 months, 50,000+ visitors. Solar, EV, wind & clean-tech brought directly to tier-2 & tier-3 districts. Government-aligned, HAREDA-backed.",
  alternates: {
    canonical: "https://www.hgeroadshow.com",
  },
};

export default function HomePage() {
  return <HomeClient />;
}
