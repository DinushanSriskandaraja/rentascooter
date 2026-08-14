import React from 'react';
import { siteConfig } from '@/config/site';
import { MapPin } from 'lucide-react';
import { WhatsAppButton } from './WhatsAppButton';

export function DeliverySection() {
  return (
    <section id="delivery" className="py-20 md:py-28 lg:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-text-main">
          Island-wide Vehicle Delivery and Pickup
        </h2>
        <p className="text-lg text-text-muted">
          Start your journey where you actually need it.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
        {siteConfig.delivery.map((item, idx) => (
          <div key={idx} className="bg-surface p-6 rounded-2xl border border-border-main flex flex-col hover:border-white/10 transition-colors">
            <MapPin size={24} className="text-primary mb-4" />
            <h4 className="font-bold text-text-main mb-1">{item.location}</h4>
            <div className="mt-auto pt-4 flex items-end justify-between">
              <span className="text-text-muted text-sm">Delivery & Pickup</span>
              <span className="text-primary font-medium">From ${item.price}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-surface rounded-3xl border border-border-main p-8 md:p-12 text-center max-w-4xl mx-auto relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
        <div className="relative z-10">
          <h3 className="text-2xl font-bold font-heading mb-4 text-text-main">Not seeing your location?</h3>
          <p className="text-text-muted mb-8 max-w-xl mx-auto">
            We may still be able to arrange delivery. Send us your location on WhatsApp.
          </p>
          <WhatsAppButton 
            message="Hi, I would like to rent a vehicle and need delivery/pickup at [my location]. Can you let me know the availability and delivery price?"
            className="px-8 py-4 rounded-full text-lg shadow-lg shadow-primary/20"
          >
            Ask About My Location
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
