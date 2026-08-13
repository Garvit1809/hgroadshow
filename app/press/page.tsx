import type { Metadata } from "next";
import PressClient from "./PressClient";

export const metadata: Metadata = {
  title: "Press & Media — HGER 2026 News Room",
  description:
    "HGER 2026 press room — media coverage, press kits, official releases, and media accreditation for India's largest grassroots green energy roadshow across Haryana.",
  keywords: [
    "HGER 2026 press",
    "HGER media coverage",
    "green energy roadshow press kit",
    "Haryana renewable energy news",
    "HGER media accreditation",
    "HGER press release",
  ],
  openGraph: {
    title: "HGER 2026 Press Room — Media Coverage & Press Kits",
    description:
      "Official HGER 2026 press room. Download press kits, find media contacts, and explore coverage of India's largest green energy roadshow across Haryana.",
    url: "https://www.hgeroadshow.com/press",
    images: [{ url: "/logo-png.png", width: 1200, height: 630, alt: "HGER 2026 Press Room" }],
  },
  twitter: {
    title: "HGER 2026 Press Room — Media Coverage & Press Kits",
    description:
      "Official press room for HGER 2026 — India's largest green energy roadshow across Haryana.",
    images: ["/logo-png.png"],
  },
  alternates: {
    canonical: "https://www.hgeroadshow.com/press",
  },
};

export default function PressPage() {
  return <PressClient />;
}
