import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rent a Scooter in Sri Lanka | Scooters & Motorbikes",
  description: "Rent scooters and motorbikes in Sri Lanka with island-wide delivery and pickup. Honda Dio, TVS Ntorq and Yamaha FZ available from $8/day.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${geistSans.variable} antialiased min-h-screen bg-background-main text-text-main`}
      >
        {children}
      </body>
    </html>
  );
}
