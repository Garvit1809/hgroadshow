import type { Metadata } from "next";
import SchemesClient from "./SchemesClient";

export const metadata: Metadata = {
  title: "Government Schemes — PM Surya Ghar, PM-KUSUM & More",
  description:
    "Explore government schemes available at HGER 2026 — PM Surya Ghar (₹78,000 subsidy), PM-KUSUM solar pumps, net metering, and more. On-site enrolment desks by HAREDA, DHBVN & UHBVN.",
  keywords: [
    "PM Surya Ghar scheme",
    "PM KUSUM Haryana",
    "solar subsidy Haryana 2026",
    "net metering Haryana",
    "HAREDA subsidy scheme",
    "DHBVN solar subsidy",
    "government solar scheme India",
    "free electricity rooftop solar",
    "Haryana green scheme 2026",
  ],
  openGraph: {
    title: "Government Green Energy Schemes at HGER 2026",
    description:
      "PM Surya Ghar, PM-KUSUM, net metering & more — get enrolled on-spot at HGER 2026. Live HAREDA, DHBVN & UHBVN desks at every city stop.",
    url: "https://www.hgeroadshow.com/schemes",
    images: [{ url: "/logo-png.png", width: 1200, height: 630, alt: "Government Schemes HGER 2026" }],
  },
  twitter: {
    title: "Government Green Energy Schemes at HGER 2026",
    description:
      "PM Surya Ghar ₹78K subsidy, PM-KUSUM solar pumps & more. Enrol on-spot at HGER 2026 across 10 Haryana cities.",
    images: ["/logo-png.png"],
  },
  alternates: {
    canonical: "https://www.hgeroadshow.com/schemes",
  },
};

export default function SchemesPage() {
  return <SchemesClient />;
}
