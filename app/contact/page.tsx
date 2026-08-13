import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact HGER 2026 — Get in Touch",
  description:
    "Contact the HGER 2026 team for sponsorship inquiries, media accreditation, partnership proposals, or general information. Email: enquiry@hgeroadshow.com.",
  keywords: [
    "contact HGER 2026",
    "HGER sponsorship inquiry",
    "green energy roadshow contact",
    "HGER media contact",
    "Haryana roadshow inquiry",
    "enquiry@hgeroadshow.com",
  ],
  openGraph: {
    title: "Contact HGER 2026 — We'd Love to Hear From You",
    description:
      "Reach out for sponsorship, partnership, media, or general inquiries about HGER 2026 — India's largest green energy roadshow across Haryana.",
    url: "https://www.hgeroadshow.com/contact",
    images: [{ url: "/logo-png.png", width: 1200, height: 630, alt: "Contact HGER 2026" }],
  },
  twitter: {
    title: "Contact HGER 2026 — Get in Touch",
    description:
      "Reach out for sponsorship, partnership, or media inquiries about HGER 2026.",
    images: ["/logo-png.png"],
  },
  alternates: {
    canonical: "https://www.hgeroadshow.com/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
