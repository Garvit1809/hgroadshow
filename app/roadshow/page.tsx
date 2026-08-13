import type { Metadata } from "next";
import RoadshowClient from "./RoadshowClient";

export const metadata: Metadata = {
  title: "The Route — 10-City Roadshow Map",
  description:
    "Explore the HGER 2026 roadshow route: Palwal → Rewari → Bhiwani → Hisar → Sirsa → Rohtak → Sonipat → Karnal → Yamunanagar → Chandigarh. 3-day stops, Oct–Dec 2026.",
  keywords: [
    "HGER 2026 route",
    "Haryana roadshow cities",
    "Palwal roadshow",
    "Hisar green energy",
    "Chandigarh summit 2026",
    "Haryana 10 city tour",
    "renewable energy roadshow schedule",
    "DHBVN UHBVN roadshow",
    "October November December 2026 event",
  ],
  openGraph: {
    title: "HGER 2026 — The 10-City Roadshow Route",
    description:
      "Ten cities. Three months. Palwal to Chandigarh. See the full HGER 2026 roadshow schedule, city-by-city strategy, and activation breakdown.",
    url: "https://www.hgeroadshow.com/roadshow",
    images: [{ url: "/logo-png.png", width: 1200, height: 630, alt: "HGER 2026 Roadshow Route" }],
  },
  twitter: {
    title: "HGER 2026 — The 10-City Roadshow Route",
    description:
      "Ten cities. Three months. Palwal to Chandigarh — see the full HGER 2026 schedule.",
    images: ["/logo-png.png"],
  },
  alternates: {
    canonical: "https://www.hgeroadshow.com/roadshow",
  },
};

export default function RoadshowPage() {
  return <RoadshowClient />;
}
