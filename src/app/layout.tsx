import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rent a Scooter & Motorbike in Sri Lanka | Explore the Island",
  description: "Rent top-quality scooters and motorbikes in Sri Lanka. Enjoy island-wide delivery, Colombo airport pickup, and affordable daily rates starting at $8/day. Explore Sri Lanka on your own terms.",
  keywords: [
    "rent a scooter Sri Lanka",
    "motorbike rental Sri Lanka",
    "scooter hire Colombo",
    "rent bike Ella",
    "Galle scooter rental",
    "explore Sri Lanka by scooter",
    "Sri Lanka road trip",
    "Honda Dio rental Sri Lanka",
    "motorcycle hire Sri Lanka"
  ],
  authors: [{ name: siteConfig.businessName }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rentascooter.lk", // Remember to update with actual domain
    title: "Rent a Scooter & Motorbike in Sri Lanka | Explore the Island",
    description: "Rent top-quality scooters and motorbikes in Sri Lanka. Island-wide delivery, affordable rates, and easy WhatsApp booking.",
    siteName: siteConfig.businessName,
    images: [
      {
        url: "/hero/sri-lanka-road.jpg",
        width: 1200,
        height: 630,
        alt: "Riding a scooter in Sri Lanka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rent a Scooter & Motorbike in Sri Lanka",
    description: "Explore Sri Lanka on your own terms. Island-wide delivery and affordable rates starting at $8/day.",
    images: ["/hero/sri-lanka-road.jpg"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data for LocalBusiness/AutoRental
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRental",
    "name": siteConfig.businessName,
    "image": "https://rentascooter.lk/hero/sri-lanka-road.jpg", // Remember to update domain
    "description": "Premium scooter and motorbike rental service in Sri Lanka with island-wide delivery.",
    "telephone": `+${siteConfig.whatsappNumber}`,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "LK"
    },
    "areaServed": "Sri Lanka",
    "priceRange": "$$",
    "currenciesAccepted": "USD"
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${geistSans.variable} antialiased min-h-screen bg-background-main text-text-main`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
