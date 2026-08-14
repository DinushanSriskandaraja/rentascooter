import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { VehicleGrid } from '@/components/VehicleGrid';
import { WhyUs } from '@/components/WhyUs';
import { DeliverySection } from '@/components/DeliverySection';
import { HowItWorks } from '@/components/HowItWorks';
import { TravelSection } from '@/components/TravelSection';
import { Terms } from '@/components/Terms';
import { FAQ } from '@/components/FAQ';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';
import { siteConfig } from '@/config/site';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <VehicleGrid />
        <WhyUs />
        <DeliverySection />
        <HowItWorks />
        <TravelSection />
        <Terms />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      
      {/* Mobile Fixed Bottom CTA */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-50">
        <a
          href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Hi, I would like to rent a vehicle in Sri Lanka. Please let me know about availability.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-medium py-3.5 rounded-2xl shadow-2xl shadow-primary/30 border border-white/20 transition-all"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"/></svg>
          WhatsApp — Check Availability
        </a>
      </div>
    </>
  );
}
