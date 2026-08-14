import React from 'react';
import { siteConfig } from '@/config/site';
import { WhatsAppButton } from './WhatsAppButton';
import { Check } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero/sri-lanka-road.jpg"
          alt="Sri Lanka Road"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background-main/95 via-background-main/80 to-background-main/30"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="max-w-2xl">
          <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium mb-6 backdrop-blur-sm">
            {siteConfig.hero.badge}
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-text-main font-heading leading-[1.1] mb-6">
            {siteConfig.hero.title}
          </h1>
          <p className="text-lg sm:text-xl text-text-muted mb-10 max-w-xl">
            {siteConfig.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <WhatsAppButton className="px-8 py-4 rounded-full text-lg shadow-lg shadow-primary/20">
              Check Availability on WhatsApp
            </WhatsAppButton>
            <a
              href="#vehicles"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white font-medium border border-white/10 transition-colors text-lg backdrop-blur-sm"
            >
              View Vehicles
            </a>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-text-muted">
            {['Daily Rentals', 'Island-wide Delivery', 'WhatsApp Booking', 'Flexible Pickup'].map((trust) => (
              <div key={trust} className="flex items-center gap-2">
                <Check size={16} className="text-primary" />
                <span>{trust}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
