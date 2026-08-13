import type { Metadata } from "next";
import SummitClient from "./SummitClient";

export const metadata: Metadata = {
  title: "HGER Summit & Awards Night — Chandigarh, Dec 2026",
  description:
    "The HGER 2026 Grand Finale — a flagship Summit & Awards Night in Chandigarh on 13 December 2026. Chief Guest: Hon'ble Minister Sh. Anil Vij. 6 award categories, keynote panels, gala dinner & HGER 2027 announcement.",
  keywords: [
    "HGER summit 2026",
    "Haryana green energy awards",
    "Chandigarh energy summit December 2026",
    "Anil Vij energy summit",
    "HAREDA summit",
    "renewable energy awards India",
    "green energy gala Haryana",
    "HGER awards night",
  ],
  openGraph: {
    title: "HGER 2026 Summit & Awards Night — Chandigarh",
    description:
      "The grand finale of HGER 2026 — keynote by Hon'ble Sh. Anil Vij, 6 award categories, sponsor spotlights & HGER 2027 launch on 13 December 2026.",
    url: "https://www.hgeroadshow.com/summit",
    images: [{ url: "/logo-png.png", width: 1200, height: 630, alt: "HGER 2026 Summit Awards Night" }],
  },
  twitter: {
    title: "HGER 2026 Summit & Awards Night — Chandigarh",
    description:
      "Grand finale of HGER 2026 — keynote by Sh. Anil Vij, 6 green energy awards, gala dinner. 13 Dec 2026, Chandigarh.",
    images: ["/logo-png.png"],
  },
  alternates: {
    canonical: "https://www.hgeroadshow.com/summit",
  },
};

export default function SummitPage() {
  return <SummitClient />;
}
