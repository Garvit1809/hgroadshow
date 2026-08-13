import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About HGER",
  description:
    "Learn about HGER 2026 — the vision, mission, and story behind Haryana's largest grassroots green energy roadshow spanning 10 cities and 50,000+ visitors.",
  keywords: [
    "about HGER 2026",
    "Haryana green energy mission",
    "renewable energy roadshow story",
    "HAREDA partnership",
    "clean energy Haryana vision",
    "HGER roadshow team",
  ],
  openGraph: {
    title: "About HGER — The Story Behind Haryana's Green Energy Roadshow",
    description:
      "HGER is more than a roadshow — it's the largest grassroots green energy outreach ever undertaken in Haryana. Here's the vision, the team, and the story behind it.",
    url: "https://www.hgeroadshow.com/about",
    images: [{ url: "/logo-png.png", width: 1200, height: 630, alt: "About HGER 2026" }],
  },
  twitter: {
    title: "About HGER — The Story Behind Haryana's Green Energy Roadshow",
    description:
      "HGER is more than a roadshow — it's the largest grassroots green energy outreach ever undertaken in Haryana.",
    images: ["/logo-png.png"],
  },
  alternates: {
    canonical: "https://www.hgeroadshow.com/about",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
