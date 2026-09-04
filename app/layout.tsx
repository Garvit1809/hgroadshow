import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Popup from "@/components/Popup";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const BASE_URL = "https://www.hgeroadshow.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "HGER 2026 — Haryana Green Energy Roadshow",
    template: "%s | HGER 2026",
  },
  description:
    "HGER 2026 is Haryana's largest green energy roadshow — 10 cities, 3 months, 50,000+ visitors. Solar, EV, wind & clean-tech brought directly to tier-2 & tier-3 districts. Government-aligned, HAREDA-backed.",
  keywords: [
    "Haryana green energy roadshow",
    "HGER 2026",
    "solar energy Haryana",
    "renewable energy roadshow India",
    "PM Surya Ghar Haryana",
    "PM KUSUM scheme",
    "green energy expo Haryana",
    "HAREDA",
    "DHBVN UHBVN",
    "EV roadshow Haryana",
    "clean energy Haryana 2026",
    "sponsor green energy event",
    "Haryana solar subsidy",
    "Chandigarh summit 2026",
  ],
  authors: [{ name: "HGER 2026 Team", url: BASE_URL }],
  creator: "HGER 2026",
  publisher: "HGER 2026",
  category: "Energy & Environment",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "HGER 2026 — Haryana Green Energy Roadshow",
    title: "HGER 2026 — Haryana Green Energy Roadshow",
    description:
      "10 cities. 3 months. 50,000+ visitors. India's largest grassroots green energy roadshow comes to Haryana — solar, EV, wind & clean-tech at your doorstep.",
    images: [
      {
        url: "/logo-png.png",
        width: 1200,
        height: 630,
        alt: "HGER 2026 — Haryana Green Energy Roadshow",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HGER 2026 — Haryana Green Energy Roadshow",
    description:
      "10 cities. 3 months. 50,000+ visitors. India's largest grassroots green energy roadshow — solar, EV, wind & clean-tech across Haryana.",
    images: ["/logo-png.png"],
    creator: "@hgeroadshow",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: "/favicon/site.webmanifest",
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} ${manrope.variable} h-full antialiased overflow-x-hidden`}
    >
      <body className="min-h-screen flex flex-col font-sans selection:bg-[#1a8a5e]/20 bg-[#f0f7f4] overflow-x-hidden">
        <Header />
        <main className="flex-grow pt-52 sm:pt-40 md:pt-44">
          {children}
        </main>
        <Footer />
        <Popup />
      </body>
    </html>
  );
}
